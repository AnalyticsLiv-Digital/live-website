import { useState, useRef, useEffect } from 'react';
import { stages, services, catReason, catAction } from "../../utils/data";
import RadarChart from './Radarchart';
import * as Scroll from 'react-scroll';

const { Element: ScrollElement } = Scroll;

export default function ResultsPanel({ scores, mode, depth, model, email, onEmailChange, activeTab, onTabChange, onOpenRadarModal, showToast }) {
  const pdfAreaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: email,
    company: '',
    industry: '',
    spend: '',
    notes: ''
  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, email }));
  }, [email]);

  const stage = stages.find(s => scores.overall >= s.min && scores.overall <= s.max) || stages[0];
  const confLabel = scores.confidence >= 75 ? 'High' : scores.confidence >= 45 ? 'Medium' : 'Low';
  const modeLabel = (m) => m === 'ecommerce' ? 'eCommerce' : m === 'leadgen' ? 'Lead-gen' : m === 'publisher' ? 'Publisher' : 'General';
  const depthLabel = (d) => d === 'deep' ? 'Deep' : 'Quick';

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || '').trim());
  const isPDFEnabled = validateEmail(formData.email);

  const deg = Math.max(0, Math.min(360, Math.round((scores.overall / 100) * 360)));

  // Generate narrative
  const generateNarrative = () => {
    if (scores.confidence < 25) {
      return {
        because: ['Directional estimate: answer more questions for a confident narrative.'],
        next: ['Complete the scan to unlock prioritized 60-day actions.']
      };
    }

    const sorted = [...scores.categories].sort((a, b) => a.pct - b.pct);
    const weak = sorted.slice(0, 2);
    const strong = sorted.slice(-2).reverse();

    const bullets = [];
    strong.forEach(c => {
      const r = catReason[c.id];
      if (r) {
        const text = c.pct >= 70 ? r.good : c.pct >= 40 ? r.mid : r.bad;
        if (text) bullets.push(text);
      }
    });
    weak.forEach(c => {
      const r = catReason[c.id];
      if (r) {
        const text = c.pct >= 70 ? r.good : c.pct >= 40 ? r.mid : r.bad;
        if (text) bullets.push(text);
      }
    });

    const actionCats = weak.map(c => c.id);
    const actions = [
      catAction[actionCats[0]] || 'Prioritize foundations and scale what works.',
      catAction[actionCats[1] || actionCats[0]] || 'Strengthen data and reporting.',
      catAction['reporting']
    ];

    return {
      because: bullets.slice(0, 3),
      next: actions.slice(0, 3)
    };
  };

  const narrative = generateNarrative();

  // Generate gaps and services
  const generateGaps = () => {
    const gapItems = [];
    model.forEach(cat => {
      cat.questions.forEach(qq => {
        gapItems.push({
          score: (qq.value ?? 0),
          title: qq.title,
          hint: qq.hint,
          cat: cat.name,
          catId: cat.id
        });
      });
    });
    gapItems.sort((a, b) => a.score - b.score);
    return gapItems.slice(0, 6);
  };

  const generateRecommendedServices = () => {
    const weak = [...scores.categories].sort((a, b) => a.pct - b.pct).slice(0, 3).map(x => x.id);
    const rec = new Set();

    if (weak.includes('measurement')) { rec.add('ga4-gtm'); rec.add('privacy'); }
    if (weak.includes('data')) { rec.add('bq-dbt'); rec.add('privacy'); }
    if (weak.includes('activation')) rec.add('attribution');
    if (weak.includes('experimentation')) rec.add('cro');
    if (weak.includes('reporting')) rec.add('dashboards');
    if (weak.includes('ai')) { rec.add('ai-genai'); rec.add('attribution'); }
    if (weak.includes('operating')) { rec.add('dashboards'); rec.add('ga4-gtm'); }

    if (mode === 'ecommerce') rec.add('ecom');
    if (mode === 'leadgen') rec.add('leadops');
    if (mode === 'publisher') rec.add('publisher');

    return services.filter(s => rec.has(s.key)).slice(0, 4);
  };

  const gaps = generateGaps();
  const recommendedServices = generateRecommendedServices();

  const handleCopySummary = async () => {
    const catLines = scores.categories.map(c => `- ${c.name}: ${c.pct}%`).join('\n');
    const becauseText = narrative.because.map(t => `- ${t}`).join('\n');
    const nextText = narrative.next.map(t => `- ${t}`).join('\n');

    const text = `AnalyticsLiv Digital & Marketing Maturity Assessment
Mode: ${modeLabel(mode)}
Scan: ${depthLabel(depth)}
Weighted Score: ${scores.overall}/100
Stage: ${stage.name}
Confidence: ${scores.confidence}% (${scores.answeredCount}/${scores.totalCount} answered)

Category Breakdown (weighted):
${catLines}

You're here because:
${becauseText}

Next 60 days:
${nextText}`;

    try {
      await navigator.clipboard.writeText(text);
      showToast('Copied summary ✅');
    } catch (e) {
      showToast('Copy failed (clipboard blocked).');
    }
  };

  const handlePrint = () => {
    // Trigger print for the specific content
    window.print();
  };

  const handleDownloadPDF = async () => {
    if (!isPDFEnabled) {
      showToast('Please enter a valid email to download PDF.');
      return;
    }

    try {
      showToast('Generating PDF...');

      // Dynamic import of html2canvas and jspdf
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');

      // Get the printable area
      const printArea = document.getElementById('printable-content');
      if (!printArea) {
        showToast('Content not found.');
        return;
      }

      const canvas = await html2canvas(printArea, {
        scale: 1.5,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        imageTimeout: 0,
        removeContainer: true,
        windowWidth: printArea.scrollWidth,
        windowHeight: printArea.scrollHeight
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.7);

      const pdf = new jsPDF('p', 'mm', 'a4', true);

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth - 20;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 10;

      pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;

      // Add additional pages if content is longer
      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pdfHeight;
      }

      const fileName = `maturity-assessment-${modeLabel(mode).toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}.pdf`;
      pdf.save(fileName, { compress: true });

      showToast('✅ PDF downloaded successfully!');
    } catch (error) {
      console.error('PDF generation error:', error);
      showToast('PDF generation failed. Please try Print/Save as PDF instead.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isPDFEnabled) {
      showToast('Please enter a valid work email.');
      return;
    }

    try {
      showToast('Submitting...');

      const res = await fetch('/api/serviceContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          company: formData.company,
          industry: formData.industry,
          spend: formData.spend,
          notes: formData.notes,
          pageSource: "Digital Maturity Assessment"
        })
      });

      if (res.ok) {
        showToast('✅ Submitted successfully! You can now download the PDF.');
      } else {
        showToast('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      showToast('Server error. Please try again later.');
    }
  };

  return (
    <div className="border border-gray-300 rounded-[32px] bg-white/85 shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-5 overflow-hidden" id="resultsPanel">
      <ScrollElement id="resultsPanel" name="resultsPanel"></ScrollElement>

      <div className="flex justify-center lg:justify-between gap-3.5 items-start mb-3.5 max-lg:flex-wrap">
        <div>
          <h2 className="m-0 text-[16.5px] font-medium tracking-tight">Results</h2>
          <p className="m-0 mt-2 text-gray-500 text-[13.5px] max-w-[72ch]">
            Weighted scoring + "You're here because…" + "Next 60 days…" • Click radar to enlarge.
          </p>
        </div>
        <div className="flex gap-2.5 flex-wrap justify-center lg:justify-end">
          <button
            onClick={handleCopySummary}
            className="border border-gray-200/70 bg-white/95 text-gray-900 px-3.5 py-2.5 rounded-2xl text-[13px] font-[800] cursor-pointer inline-flex gap-2.5 items-center transition-all hover:translate-y-[-1px] hover:border-gray-900/20 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] active:translate-y-0 active:scale-[0.99] shadow-[0_10px_26px_rgba(15,23,42,0.05)] select-none"
            type="button"
          >
            Copy summary
          </button>
          <button
            onClick={handlePrint}
            className="border border-gray-200/70 bg-white/95 text-gray-900 px-3.5 py-2.5 rounded-2xl text-[13px] font-[800] cursor-pointer inline-flex gap-2.5 items-center transition-all hover:translate-y-[-1px] hover:border-gray-900/20 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] active:translate-y-0 active:scale-[0.99] shadow-[0_10px_26px_rgba(15,23,42,0.05)] select-none"
            type="button"
          >
            Print / Save PDF
          </button>
          <button
            onClick={handleDownloadPDF}
            disabled={!isPDFEnabled}
            className={`border-none text-white px-3.5 py-2.5 rounded-2xl text-[13px] font-[800] cursor-pointer inline-flex gap-2.5 items-center transition-all shadow-[0_18px_40px_rgba(91,94,247,0.18)] bg-gradient-to-br from-indigo-500 to-sky-500 hover:brightness-105 active:translate-y-0 active:scale-[0.99] select-none ${!isPDFEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="button"
            title={!isPDFEnabled ? 'Enter email to enable PDF download' : 'Download PDF'}
          >
            Download PDF
          </button>
        </div>
      </div>

      <div ref={pdfAreaRef}>
        <div className="flex justify-between gap-3.5 items-start flex-wrap">
          <div className="flex max-lg:flex-wrap gap-4 max-lg:justify-center items-center">
            <div
              className="w-[86px] h-[86px] rounded-full grid place-items-center border border-gray-300 shadow-[0_20px_45px_rgba(15,23,42,0.10)] relative"
              style={{
                background: `conic-gradient(from 180deg, rgb(91,94,247) 0deg, rgb(14,165,233) ${Math.max(20, Math.min(340, deg))}deg, rgba(15,23,42,0.08) 0deg)`
              }}
            >
              <div className="absolute inset-[9px] rounded-full bg-white/95 border border-gray-300"></div>
              <strong className="relative text-lg tracking-tight font-black">{scores.overall}</strong>
            </div>
            <div>
              <div className="inline-flex gap-2.5 items-center px-3 py-2.5 rounded-full border border-gray-300 bg-white/95 shadow-[0_12px_28px_rgba(15,23,42,0.06)] font-black tracking-wide w-fit">
                <i className="w-2.5 h-2.5 rounded-full" style={{ background: stage.dot }}></i>
                {stage.name}
              </div>
              <p className="m-0 mt-2.5 text-gray-500 text-[13.5px] max-w-[86ch]">{stage.explain}</p>
            </div>
          </div>

          <div className="w-full lg:min-w-[260px]">
            <div className="flex justify-between items-center border border-gray-300 bg-white/75 px-3 py-2 rounded-full text-[12.5px]">
              <span>Confidence</span>
              <b className="text-gray-900">{confLabel} ({scores.confidence}%)</b>
            </div>
            <div className="flex justify-between items-center border border-gray-300 bg-white/75 px-3 py-2 rounded-full text-[12.5px] mt-2.5">
              <span>Mode</span>
              <b className="text-gray-900">{modeLabel(mode)}</b>
            </div>
            <div className="flex justify-between items-center border border-gray-300 bg-white/75 px-3 py-2 rounded-full text-[12.5px] mt-2.5">
              <span>Scan</span>
              <b className="text-gray-900">{depthLabel(depth)}</b>
            </div>
          </div>
        </div>

        <div className="mt-3.5 border border-indigo-500/20 bg-indigo-500/5 rounded-[20px] p-3.5 grid gap-2.5" aria-label="Narrative">
          <h3 className="m-0 text-[13.5px] tracking-wide">You're here because</h3>
          <ul className="m-0 pl-4 text-gray-500 text-[13px]">
            {narrative.because.map((item, idx) => (
              <li key={idx} className="my-2">{item}</li>
            ))}
          </ul>
          <h3 className="m-0 mt-0.5 text-[13.5px] tracking-wide">Next 60 days to reach the next stage</h3>
          <ul className="m-0 pl-4 text-gray-500 text-[13px]">
            {narrative.next.map((item, idx) => (
              <li key={idx} className="my-2">{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2 flex-wrap mt-4" aria-label="Result tabs">
          {['visuals', 'gaps', 'roadmap'].map(tab => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`border border-gray-300 bg-white/95 rounded-full px-3 py-2.5 text-[12.5px] font-black cursor-pointer shadow-[0_10px_22px_rgba(15,23,42,0.04)] transition-all ${activeTab === tab
                ? 'bg-indigo-500/10 border-indigo-500/35 text-indigo-800 shadow-[0_0_0_5px_rgba(91,94,247,0.10)]'
                : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-3.5">
          {activeTab === 'visuals' && (
            <div className="flex flex-col gap-3.5">
              <div>
                <div className="grid gap-3">
                  {scores.categories.map(c => (
                    <div key={c.id} className="grid grid-cols-[210px_1fr_66px] gap-3 items-center max-md:grid-cols-1">
                      <label className="text-[13px] text-gray-500 font-[850]">{c.name}</label>
                      <div className="h-3 rounded-full border border-gray-300 bg-gray-900/5 overflow-hidden">
                        <i
                          className="block h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full transition-all duration-700"
                          style={{ width: `${c.pct}%` }}
                        ></i>
                      </div>
                      <span className="text-[12.5px] text-gray-500 text-right font-black max-md:text-left">{c.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                onClick={onOpenRadarModal}
                className="border border-gray-300 bg-white/95 rounded-3xl shadow-[0_12px_28px_rgba(15,23,42,0.05)] p-3.5 cursor-pointer select-none transition-all hover:translate-y-[-1px] hover:shadow-[0_18px_44px_rgba(15,23,42,0.08)] relative"
                aria-label="Capability radar"
              >
                <div className="flex justify-between items-start gap-3 mb-2.5">
                  <div>
                    <b className="text-[13.5px]">Capability radar</b>
                    <small className="block text-gray-500 mt-1 text-[12.5px]">Hover points for % • Click to enlarge</small>
                  </div>
                  <span className="border border-gray-300 bg-white/90 text-gray-500 px-3 py-2 rounded-full text-[12.5px] font-[750]">
                    <strong className="text-gray-900">Interactive</strong>
                  </span>
                </div>
                <RadarChart categories={scores.categories} />
                <span className="absolute right-3.5 bottom-3.5 text-[11.5px] font-black text-gray-500 border border-gray-300 bg-white/90 px-2 py-1.5 rounded-full">
                  Click to enlarge ↗
                </span>
              </div>
            </div>
          )}

          {activeTab === 'gaps' && (
            <div className="grid lg:grid-cols-2 gap-3.5 max-lg:grid-cols-1">
              <div>
                <h3 className="m-0 mb-3 text-[15.5px]">Top gaps (fastest unlocks)</h3>
                <ul className="list-none p-0 m-0 grid gap-3">
                  {gaps.map((g, idx) => {
                    const label = g.score === 0 ? 'Critical foundation' : g.score === 1 ? 'Increase consistency' : g.score === 2 ? 'Standardize & govern' : 'Maintain & scale';
                    return (
                      <li key={idx} className="border border-gray-300 bg-white/95 rounded-[20px] p-3.5 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
                        <b className="block text-[13.8px] font-black">{g.title}</b>
                        <small className="block mt-1.5 text-gray-500 text-[12.6px]">
                          {label} • <span className="font-[850]">{g.cat}</span><br />{g.hint}
                        </small>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h3 className="m-0 mb-3 text-[15.5px]">Recommended AnalyticsLiv services</h3>
                <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
                  {recommendedServices.map(s => (
                    <div key={s.key} className="border border-gray-300 bg-white/95 rounded-[20px] p-3.5 shadow-[0_12px_28px_rgba(15,23,42,0.05)] relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(520px_200px_at_0%_0%,rgba(91,94,247,0.10),transparent_60%)] pointer-events-none"></div>
                      <div className="relative">
                        <h4 className="m-0 mb-2 text-sm tracking-tight">{s.title}</h4>
                        <p className="m-0 text-gray-500 text-[12.8px]">{s.body}</p>
                        <div className="mt-3 text-gray-500 text-[12.2px] font-[750]">{s.tags}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roadmap' && (
            <div>
              <div className="mt-1 flex gap-3 items-start border border-sky-500/20 bg-sky-500/5 rounded-[20px] p-3.5">
                <div className="w-[38px] h-[38px] rounded-2xl bg-sky-500/15 grid place-items-center font-black text-sky-900 flex-shrink-0">↗</div>
                <div>
                  <b className="block text-[13.5px]">30–60 day roadmap (auto-generated)</b>
                  <small className="block mt-1.5 text-gray-500 text-[12.8px]">
                    Mode: {modeLabel(mode)} • {depthLabel(depth)} Scan • Next stage: {stage.next || 'Maintain and compound advantage'}.
                  </small>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-3.5 mt-3.5 max-lg:grid-cols-1">
                <div className="border border-gray-300 bg-white/95 rounded-[20px] p-3.5 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
                  <b className="block text-[13.8px] font-black">Phase 1: Foundations</b>
                  <small className="block mt-1.5 text-gray-500 text-[12.6px]">
                    Stabilize measurement + governance, then establish a reliable reporting baseline.
                  </small>
                </div>
                <div className="border border-gray-300 bg-white/95 rounded-[20px] p-3.5 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
                  <b className="block text-[13.8px] font-black">Phase 2: Scale & Optimize</b>
                  <small className="block mt-1.5 text-gray-500 text-[12.6px]">
                    Strengthen data foundation and connect outcomes (CRM/offline), then standardize KPI tree + weekly decision rhythm.
                  </small>
                </div>
                <div className="border border-gray-300 bg-white/95 rounded-[20px] p-3.5 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
                  <b className="block text-[13.8px] font-black">Phase 3: AI & Orchestration</b>
                  <small className="block mt-1.5 text-gray-500 text-[12.6px]">
                    Introduce incrementality/MMM where needed, then 1–2 AI use cases with monitoring and governance.
                  </small>
                </div>
                <div className="border border-gray-300 bg-white/95 rounded-[20px] p-3.5 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
                  <b className="block text-[13.8px] font-black">What we'll deliver</b>
                  <small className="block mt-1.5 text-gray-500 text-[12.6px]">
                    {mode === 'ecommerce'
                      ? 'GA4 ecommerce audit + product dashboards + profit/returns layer + feed governance + testing roadmap.'
                      : mode === 'leadgen'
                        ? 'Lead lifecycle mapping + CRM joins + offline value import + pipeline dashboard + experimentation plan.'
                        : mode === 'publisher'
                          ? 'Content taxonomy + engagement cohorts + yield dashboards + segmentation + personalization experiments.'
                          : 'GA4/GTM audit + KPI tree + dashboards + warehouse/dbt foundation + experimentation roadmap.'}
                  </small>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-300 my-4"></div>
      </div>

      <div>
        <h3 className="m-0 mb-2 text-[15.5px] font-medium">Unlock the PDF + request a free maturity review</h3>
        <p className="m-0 mb-3 text-gray-500 text-[12.8px]">
          Enter your work email to enable PDF download. Progress is saved locally in your browser (and can be shared via resume link).
        </p>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-3 max-md:grid-cols-1">
          <div className="border border-gray-300 bg-white/95 rounded-2xl p-3 shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
            <label className="block text-[12.5px] text-gray-500 mb-2 font-[850]">Full name</label>
            <input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Nitya Prakash"
              autoComplete="name"
              name='name'
              className="w-full border-none outline-none bg-transparent text-gray-900 text-[14.5px]"
            />
          </div>

          <div className="border border-gray-300 bg-white/95 rounded-2xl p-3 shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
            <label className="block text-[12.5px] text-gray-500 mb-2 font-[850]">Work email (required for PDF)</label>
            <input
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                onEmailChange(e.target.value);
              }}
              placeholder="e.g., name@company.com"
              autoComplete="email"
              name='email'
              required
              className="w-full border-none outline-none bg-transparent text-gray-900 text-[14.5px]"
            />
          </div>

          <div className="border border-gray-300 bg-white/95 rounded-2xl p-3 shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
            <label className="block text-[12.5px] text-gray-500 mb-2 font-[850]">Company</label>
            <input
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g., Amul / Your Brand"
              autoComplete="organization"
              name='company'
              className="w-full border-none outline-none bg-transparent text-gray-900 text-[14.5px]"
            />
          </div>

          <div className="border border-gray-300 bg-white/95 rounded-2xl p-3 shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
            <label className="block text-[12.5px] text-gray-500 mb-2 font-[850]">Industry</label>
            <select
              value={formData.industry}
              name='industry'
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full border-none outline-none bg-transparent text-gray-900 text-[14.5px]"
            >
              <option value="">Select</option>
              <option>eCommerce</option>
              <option>Lead Gen</option>
              <option>Publisher / Media</option>
              <option>Retail / D2C</option>
              <option>B2B SaaS</option>
              <option>Other</option>
            </select>
          </div>

          <div className="border border-gray-300 bg-white/95 rounded-2xl p-3 shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
            <label className="block text-[12.5px] text-gray-500 mb-2 font-[850]">Monthly media spend (optional)</label>
            <select
              value={formData.spend}
              name='spend'
              onChange={(e) => setFormData({ ...formData, spend: e.target.value })}
              className="w-full border-none outline-none bg-transparent text-gray-900 text-[14.5px]"
            >
              <option value="">Select</option>
              <option>₹0–₹2L</option>
              <option>₹2L–₹10L</option>
              <option>₹10L–₹50L</option>
              <option>₹50L–₹2Cr</option>
              <option>₹2Cr+</option>
            </select>
          </div>

          <div className="border border-gray-300 bg-white/95 rounded-2xl p-3 shadow-[0_10px_22px_rgba(15,23,42,0.04)]">
            <label className="block text-[12.5px] text-gray-500 mb-2 font-[850]">What do you want to improve?</label>
            <textarea
              value={formData.notes}
              name='notes'
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g., GA4 accuracy, attribution/MMM, dashboards, GenAI personalization..."
              className="w-full border-none outline-none bg-transparent text-gray-900 text-[14.5px] min-h-[110px] resize-y"
            />
          </div>

          <div className="lg:col-span-2 flex gap-2.5 flex-wrap items-center justify-between">
            <button
              type="submit"
              className="border-none text-white px-3.5 py-2.5 rounded-2xl text-[13px] font-[800] cursor-pointer inline-flex gap-2.5 items-center transition-all shadow-[0_18px_40px_rgba(91,94,247,0.18)] bg-gradient-to-br from-indigo-500 to-sky-500 hover:brightness-105 active:translate-y-0 active:scale-[0.99] select-none"
            >
              Request review →
            </button>
            <div className="text-gray-500 text-[12.8px]">No spam. Used only for your roadmap + follow-up.</div>
          </div>
        </form>

        <p className="m-0 mt-3 text-gray-500 text-[12.8px]">
          Note: This is an AnalyticsLiv assessment inspired by industry maturity thinking. Not a reproduction of proprietary third-party tools.
        </p>
      </div>
    </div>
  );
}

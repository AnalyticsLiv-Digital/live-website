import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { generateBreadcrumbSchemas, generateCaseStudySchema } from "../../utils/schema";
import CaseStudyDownloadModal from "../../components/CaseStudyDownloadModal";
import { InlineWidget } from "react-calendly";

const DV360CaseStudy = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleCalendly = () => {
    setShowCalendly(true);
  }

  const cd = {
    slug: "dv360-ads-optimization-cost-per-conversion-reduction",
    title: "DV360 Ads Optimization: Lower CPA with Smarter Signals",
    description:
      "We reduced acquisition costs by optimizing placements, budgets and signals while maintaining conversion volume.",
    coverimage:
      "https://analyticsliv.com/static/logo.png",
    id: "cs8",
    pdf: "https://storage.googleapis.com/website-bucket-uploads/cs/1744002263636865.pdf",
  };

  const csSchema = generateCaseStudySchema(cd);
  const breadcrumbSchema = generateBreadcrumbSchemas(
    "https://analyticsliv.com/case-studies/dv360-ads-optimization-cost-per-conversion-reduction"
  );

  return (
    <>
      <Head>
        <title>{cd.title} | AnalyticsLiv</title>
        <meta name="description" content={cd.description} />
        <link
          rel="canonical"
          href="https://analyticsliv.com/case-studies/dv360-ads-optimization-cost-per-conversion-reduction"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(csSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <main className="bg-white text-slate-800"
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"',
        }}>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EEF6FF] via-white to-[#F7F7FF]" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  DV360 · Display & Video 360
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                  {cd.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg text-slate-600">{cd.description}</p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a href="/case-studies" className="rounded-2xl border border-slate-300 px-6 py-3">Back to Case Studies</a>
                  <button onClick={() => handleCalendly()} className="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow hover:opacity-90">Book a Strategy Call</button>
                </div>
              </div>


              <div className="order-first md:order-none">
                <div className="relative mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="text-3xl font-extrabold text-slate-900">32%↓</div>
                      <div className="mt-1 text-sm text-slate-600">CPA / CPV improvement*</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="text-3xl font-extrabold text-slate-900">3.2×</div>
                      <div className="mt-1 text-sm text-slate-600">ROAS / Efficiency uplift*</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="text-3xl font-extrabold text-slate-900">+110%</div>
                      <div className="mt-1 text-sm text-slate-600">High-value actions*</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="text-3xl font-extrabold text-slate-900">95%+</div>
                      <div className="mt-1 text-sm text-slate-600">Tracking reliability*</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {showCalendly && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCalendly(false)}>
            <div className="relative bg-white rounded-lg shadow-lg sm:p-4 flex flex-col items-center justify-center 
                        max-w-[380px] w-[100%] sm:w-[90%] h-[80vh] sm:max-w-[400px] sm:h-[450px] lg:max-w-[450px] lg:h-[500px]">

              <button
                className="absolute top-1 left-1 text-gray-500 text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setShowCalendly(false)}
              >
                ✖
              </button>

              <div className="w-full h-full flex justify-center items-center">
                <InlineWidget
                  url="https://calendly.com/analyticsliv/30min"
                  styles={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* BACKGROUND */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900">Background & Challenge</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-slate-700">
              <p>
                Legacy measurement and fragmented campaign structure limited performance
                visibility and optimization control. The team needed a durable event model and
                guardrails to protect efficiency while scaling.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Inconsistent conversion taxonomy across channels</li>
                <li>Insufficient signal density for automated bidding</li>
                <li>Budget waste across low-quality placements / segments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="bg-slate-50 py-16 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Approach</h2>
            <div className="px-6 grid gap-10 md:grid-cols-2 items-start">
              <div>
                <ol className="relative border-l border-slate-200 pl-6 space-y-6">
                  {[
                    {
                      step: "01. Tracking & Data",
                      text: "GA4 + Floodlight alignment, enhanced conversions, consent mode; QA and deduplication.",
                      color: "bg-slate-900",
                    },
                    {
                      step: "02. Structure & Signals",
                      text: "Restructured campaigns for signal density and clean reporting. Value mapping for key events.",
                      color: "bg-emerald-600",
                    },
                    {
                      step: "03. Optimization",
                      text: "Query/placement hygiene, budget pacing, bid tuning, creative tests, audience overlays.",
                      color: "bg-indigo-600",
                    },
                    {
                      step: "04. Reporting & Insights",
                      text: "Board-ready Looker dashboards with ROAS, MER, CPA, new-to-brand and cohort trends.",
                      color: "bg-amber-600",
                    },
                  ].map((item, i) => (
                    <li key={i}>
                      <div
                        className={`absolute -left-2.5 h-5 w-5 rounded-full ${item.color} ring-4 ring-slate-100`}
                      ></div>
                      <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                        <div className="text-xs font-semibold tracking-wider text-slate-500">
                          {item.step}
                        </div>
                        <p className="mt-1">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className='flex justify-center w-full'>
                <CaseStudyDownloadModal
                  isOpen={true}
                  onClose={() => { }}
                  casestudy={cd}
                  parentContext="inline"
                />
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Outcomes
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Results That Matter
              </h2>
              <p className="mt-2 text-slate-600">
                Replace the placeholders below with verified metrics from this case.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  title: "Acquisition Cost",
                  value: "-32% CPA",
                  desc: "Efficiency lift while maintaining volume",
                },
                {
                  title: "Incrementality",
                  value: "+18% New-to-Brand",
                  desc: "Lift from audience design",
                },
                {
                  title: "Quality",
                  value: "+24% CVR",
                  desc: "LP and creative alignment",
                },
                {
                  title: "Revenue Efficiency",
                  value: "+26% ROAS",
                  desc: "Better signal density for bidding",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-1 text-2xl font-extrabold text-slate-900">
                    {item.value}
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-sm hover:opacity-90"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 py-14 text-white text-center">
          <h3 className="text-2xl font-bold">Want results like these?</h3>
          <p className="mt-2 text-slate-300">
            Let's build your next success story — start with a free strategy call.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow hover:opacity-90"
            >
              Book a Call
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default DV360CaseStudy;

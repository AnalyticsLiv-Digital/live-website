import Hero from './hero';
import ResultsPanel from './Resultspanel';

export default function PrintableContent({
  mode,
  depth,
  scores,
  model,
  activeCat,
  email,
  activeTab,
  onStart,
  onShareResume,
  onShareLanding,
  onSetActiveCat,
  onSetAnswer,
  onNext,
  onPrev,
  onEmailChange,
  onTabChange,
  onOpenRadarModal,
  showToast
}) {
  const options = [
    { label: "Not in place", score: 0, help: "No / very limited" },
    { label: "Basic", score: 1, help: "Implemented partially" },
    { label: "Partial", score: 2, help: "Works but not consistent" },
    { label: "Mature", score: 3, help: "Standardized + governed" }
  ];

  return (
    <div id="printable-content">
      {/* Hero Section */}
      <Hero
        mode={mode}
        depth={depth}
        scores={scores}
        onStart={onStart}
        onShareResume={onShareResume}
        onShareLanding={onShareLanding}
      />

      {/* Assessment Answers - Exact Design Match */}
      <div className="mt-8">
        <div className="border border-gray-300 rounded-[32px] bg-white/85 shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-5 overflow-hidden">
          <div className="flex justify-between gap-3.5 items-start mb-3.5">
            <div>
              <h2 className="m-0 text-[16.5px] font-medium tracking-tight">Assessment Responses</h2>
              <p className="m-0 mt-2 text-gray-500 text-[13.5px] max-w-[72ch]">
                All your responses across {model.length} categories • {depth === 'quick' ? 'Quick Scan' : 'Deep Scan'} mode
              </p>
            </div>
          </div>

          {/* Loop through all categories */}
          {model.map((cat, catIdx) => (
            <div key={cat.id} className="mb-6 last:mb-0">
              {/* Category Header */}
              <div className="flex justify-between gap-3.5 items-start mb-3.5 pb-3 border-b border-gray-300">
                <div>
                  <h3 className="m-0 text-[15px] font-black tracking-tight">{cat.name}</h3>
                  <p className="m-0 mt-1 text-gray-500 text-[12.5px]">{cat.desc}</p>
                </div>
                <div className="flex gap-2 items-center border border-gray-300 bg-white/75 px-3 py-2 rounded-full text-[12.5px] text-gray-500 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                  <span>{cat.questions.filter(q => q.value !== null).length}/{cat.questions.length} answered</span>
                </div>
              </div>

              {/* Questions - EXACT DESIGN FROM ASSESSMENTPANEL */}
              <div className="mt-4">
                {cat.questions.map((qq, qIdx) => (
                  <div
                    key={qq.id}
                    className="border border-gray-300 bg-white/95 rounded-3xl p-4 shadow-[0_12px_28px_rgba(15,23,42,0.05)] mb-7"
                  >
                    <div className="flex justify-between gap-3 items-start">
                      <div>
                        <div className="m-0 text-[14.5px] font-black tracking-tight">{qq.title}</div>
                        <div className="m-0 mt-2 text-gray-500 text-[13px] max-w-[80ch]">{qq.hint}</div>
                      </div>
                      <div className="text-[11.5px] font-[850] text-gray-500 border border-gray-300 bg-gray-900/5 px-2.5 py-1.5 rounded-full whitespace-nowrap h-fit">
                        {qq.badge}
                      </div>
                    </div>

                    {/* Show ALL 4 options - EXACT SAME AS ASSESSMENTPANEL */}
                    <div className="grid grid-cols-4 gap-3 mt-3.5 max-md:grid-cols-2 max-sm:grid-cols-1" aria-label="Options">
                      {options.map(opt => (
                        <div
                          key={opt.score}
                          className={`border border-gray-300 bg-white/95 rounded-2xl p-3 flex gap-2.5 items-start min-h-[64px] shadow-[0_10px_22px_rgba(15,23,42,0.04)] ${qq.value === opt.score
                            ? 'border-indigo-500/40 bg-indigo-500/10 shadow-[0_0_0_6px_rgba(91,94,247,0.14)]'
                            : ''
                            }`}
                        >
                          <span className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${qq.value === opt.score
                            ? 'bg-gradient-to-r from-indigo-500 to-sky-500'
                            : 'bg-gray-900/20'
                            }`}></span>
                          <div>
                            <b className="block text-[13px]">{opt.label}</b>
                            <small className="block mt-1 text-[12.3px] text-gray-500">{opt.help}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results Panel */}
      <div className="mt-8">
        <ResultsPanel
          scores={scores}
          mode={mode}
          depth={depth}
          model={model}
          email={email}
          onEmailChange={onEmailChange}
          activeTab={activeTab}
          onTabChange={onTabChange}
          onOpenRadarModal={onOpenRadarModal}
          showToast={showToast}
        />
      </div>
    </div>
  );
}
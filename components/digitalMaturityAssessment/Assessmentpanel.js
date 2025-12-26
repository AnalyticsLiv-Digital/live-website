import * as Scroll from 'react-scroll';

const { Element: ScrollElement } = Scroll;

export default function AssessmentPanel({ model, activeCat, onSetActiveCat, onSetAnswer, onNext, onPrev }) {
    const currentCat = model[activeCat];

    const options = [
        { label: "Not in place", score: 0, help: "No / very limited" },
        { label: "Basic", score: 1, help: "Implemented partially" },
        { label: "Partial", score: 2, help: "Works but not consistent" },
        { label: "Mature", score: 3, help: "Standardized + governed" }
    ];

    return (
        <div className="border border-gray-300 rounded-[32px] bg-white/85 shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-5 overflow-hidden" id="assessmentPanel">

            <ScrollElement id="assessmentPanel" name="assessmentPanel"></ScrollElement>
            <div className="flex justify-between gap-3.5 items-start mb-3.5">
                <div>
                    <h2 className="m-0 text-[16.5px] font-medium tracking-tight">Assessment</h2>
                    <p className="m-0 mt-2 text-gray-500 text-[13.5px] max-w-[72ch]">
                        Quick Scan shows only the highest-signal questions. Switch to Deep Scan anytime (answers carry over).
                    </p>
                </div>
                <div className="flex gap-2 items-center border border-gray-300 bg-white/75 px-3 py-2 rounded-full text-[12.5px] text-gray-500 whitespace-nowrap" title="Current category">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span>{currentCat?.name || '—'}</span>
                </div>
            </div>

            <div className="flex gap-2.5 flex-wrap items-center mt-2.5">
                {model.map((cat, idx) => {
                    const done = cat.questions.every(q => q.value !== null);
                    return (
                        <div
                            key={cat.id}
                            onClick={() => onSetActiveCat(idx)}
                            className={`border border-gray-300 bg-white/95 rounded-full px-3 py-2.5 text-[12.5px] font-black cursor-pointer transition-all select-none shadow-[0_10px_22px_rgba(15,23,42,0.05)] hover:translate-y-[-1px] hover:border-gray-900/20 ${idx === activeCat
                                ? 'border-indigo-500/40 bg-indigo-500/10 text-indigo-800 shadow-[0_0_0_5px_rgba(91,94,247,0.12)]'
                                : done
                                    ? 'border-green-500/35 bg-green-500/10 text-green-900'
                                    : 'text-gray-500'
                                }`}
                            title={cat.desc}
                        >
                            {cat.name}
                        </div>
                    );
                })}
            </div>

            <div className="mt-4">
                {currentCat?.questions.map((qq, qIdx) => (
                    <div
                        key={qq.id}
                        className="border border-gray-300 bg-white/95 rounded-3xl p-4 shadow-[0_12px_28px_rgba(15,23,42,0.05)] mb-7 transition-all hover:translate-y-[-1px] hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
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

                        <div className="grid grid-cols-4 gap-3 mt-3.5 max-md:grid-cols-2 max-sm:grid-cols-1" aria-label="Options">
                            {options.map(opt => (
                                <div
                                    key={opt.score}
                                    onClick={() => onSetAnswer(activeCat, qIdx, opt.score)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            onSetAnswer(activeCat, qIdx, opt.score);
                                        }
                                    }}
                                    className={`border border-gray-300 bg-white/95 rounded-2xl p-3 cursor-pointer flex gap-2.5 items-start min-h-[64px] shadow-[0_10px_22px_rgba(15,23,42,0.04)] transition-all select-none hover:translate-y-[-1px] hover:border-gray-900/20 ${qq.value === opt.score
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

            <div className="flex justify-between items-center gap-3 flex-wrap mt-4 pt-4 border-t border-gray-300">
                <div className="flex gap-2 items-center text-[12.5px] text-gray-500">
                    {/* <span className="border border-gray-300 bg-white/95 px-2 py-1.5 rounded-[10px] text-[11.5px] text-gray-500 font-[850]">←</span>
                    <span className="border border-gray-300 bg-white/95 px-2 py-1.5 rounded-[10px] text-[11.5px] text-gray-500 font-[850]">→</span> */}
                    <span>Switch categories</span>
                </div>
                <div className="flex gap-2.5 flex-wrap">
                    <button
                        onClick={onPrev}
                        disabled={activeCat <= 0}
                        className="border border-gray-200/70 bg-white/95 text-gray-900 px-3.5 py-2.5 rounded-2xl text-[13px] font-[800] cursor-pointer inline-flex gap-2.5 items-center transition-all hover:translate-y-[-1px] hover:border-gray-900/20 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] active:translate-y-0 active:scale-[0.99] shadow-[0_10px_26px_rgba(15,23,42,0.05)] select-none disabled:opacity-60 disabled:cursor-not-allowed"
                        type="button"
                    >
                        Previous
                    </button>
                    <button
                        onClick={onNext}
                        disabled={activeCat >= model.length - 1}
                        className="border-none text-white px-3.5 py-2.5 rounded-2xl text-[13px] font-[800] cursor-pointer inline-flex gap-2.5 items-center transition-all shadow-[0_18px_40px_rgba(91,94,247,0.18)] bg-gradient-to-br from-indigo-500 to-sky-500 hover:brightness-105 active:translate-y-0 active:scale-[0.99] select-none disabled:opacity-60 disabled:cursor-not-allowed"
                        type="button"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
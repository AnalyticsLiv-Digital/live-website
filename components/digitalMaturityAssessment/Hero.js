import { stages } from "../../utils/data";

export default function Hero({ mode, depth, scores, onStart, onShareResume, onShareLanding }) {
    const modeLabel = (m) => m === 'ecommerce' ? 'eCommerce' : m === 'leadgen' ? 'Lead-gen' : m === 'publisher' ? 'Publisher' : 'General';
    const depthLabel = (d) => d === 'deep' ? 'Deep' : 'Quick';

    const stage = stages.find(s => scores.overall >= s.min && scores.overall <= s.max) || stages[0];
    const confLabel = scores.confidence >= 75 ? 'High' : scores.confidence >= 45 ? 'Medium' : 'Low';

    const deg = Math.max(0, Math.min(360, Math.round((scores.overall / 100) * 360)));

    return (
        <section className="mt-5 border border-gray-300 rounded-[32px] bg-white/85 shadow-[0_18px_60px_rgba(15,23,42,0.08)] overflow-hidden relative" aria-label="Hero">
            <div className="absolute inset-[-2px] bg-[radial-gradient(900px_360px_at_14%_16%,rgba(91,94,247,0.18),transparent_60%),radial-gradient(760px_320px_at_86%_6%,rgba(14,165,233,0.16),transparent_60%)] pointer-events-none"></div>

            <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-5 p-8 items-stretch">
                <div>
                    <div className="flex gap-2.5 flex-wrap items-center mb-3.5">
                        <span className="border border-gray-300 bg-white/90 text-gray-500 px-3 py-2 rounded-full text-[12.5px] font-[750]">
                            <strong className="text-gray-900">AI-Ready</strong> Marketing & Data Maturity
                        </span>
                        <span className="border border-gray-300 bg-white/90 text-gray-500 px-3 py-2 rounded-full text-[12.5px] font-[750]">
                            Nascent → Emerging → Connected → Multi-Moment
                        </span>
                        <span className="border border-gray-300 bg-white/90 text-gray-500 px-3 py-2 rounded-full text-[12.5px] font-[750]" id="dimsTag">
                            ~{scores.totalCount} dimensions ({depthLabel(depth)} Scan)
                        </span>
                    </div>

                    <h1 className="m-0 mb-3 text-3xl lg:text-5xl tracking-tight leading-tight font-[800]">
                        Know your digital maturity — and your next best move.
                    </h1>
                    <p className="m-0 mb-4 text-gray-500 text-[16.2px] max-w-[80ch]">
                        Start with a <b>Quick Scan (2 mins)</b> for a directional stage, or go <b>Deep Scan</b> for a full maturity profile.
                        Your progress auto-saves. You can also generate a <b>resume link</b> to continue on another device.
                    </p>

                    <div className="flex gap-2.5 flex-wrap items-center mt-4">
                        <button
                            className="border-none text-white px-3.5 py-2.5 rounded-2xl text-[13px] font-[800] cursor-pointer inline-flex gap-2.5 items-center transition-all shadow-[0_18px_40px_rgba(91,94,247,0.18)] bg-gradient-to-br from-indigo-500 to-sky-500 hover:brightness-105 active:translate-y-0 active:scale-[0.99] select-none"
                            onClick={onStart}
                            type="button"
                        >
                            Start assessment →
                        </button>
                        <button
                            className="border border-gray-200/70 bg-white/95 text-gray-900 px-3.5 py-2.5 rounded-2xl text-[13px] font-[800] cursor-pointer inline-flex gap-2.5 items-center transition-all hover:translate-y-[-1px] hover:border-gray-900/20 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] active:translate-y-0 active:scale-[0.99] shadow-[0_10px_26px_rgba(15,23,42,0.05)] select-none"
                            onClick={onShareResume}
                            type="button"
                            title="Creates a URL with your current answers"
                        >
                            Copy resume link
                        </button>
                        <button
                            className="border border-gray-200/70 bg-white/95 text-gray-900 px-3.5 py-2.5 rounded-2xl text-[13px] font-[800] cursor-pointer inline-flex gap-2.5 items-center transition-all hover:translate-y-[-1px] hover:border-gray-900/20 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] active:translate-y-0 active:scale-[0.99] shadow-[0_10px_26px_rgba(15,23,42,0.05)] select-none"
                            onClick={onShareLanding}
                            type="button"
                        >
                            Copy landing link
                        </button>
                        <div className="flex gap-2 items-center border border-gray-300 bg-white/75 px-3 py-2 rounded-full text-[12.5px] text-gray-500" title="Confidence increases as you answer more">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span>Confidence: <b className="text-gray-900">{confLabel}</b> (<b className="text-gray-900">{scores.confidence}%</b>)</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-300 my-4"></div>

                    <div className="flex gap-3 items-start border border-sky-500/20 bg-sky-500/5 rounded-[20px] p-3.5">
                        <div className="w-[38px] h-[38px] rounded-2xl bg-sky-500/15 grid place-items-center font-black text-sky-900 flex-shrink-0">★</div>
                        <div>
                            <b className="block text-[13.5px]">How to use your score</b>
                            <small className="block mt-1.5 text-gray-500 text-[12.8px]">
                                We highlight the <b>top 3 reasons</b> for your stage and the <b>top 3 actions</b> for the next stage.
                            </small>
                        </div>
                    </div>
                </div>

                <aside className="border border-gray-300 bg-gradient-to-b from-[#fbfcff] to-white/75 rounded-[32px] shadow-[0_12px_28px_rgba(15,23,42,0.05)] p-4 relative overflow-hidden" aria-label="Visual overview">
                    <div className="absolute inset-0 bg-[radial-gradient(620px_260px_at_20%_10%,rgba(91,94,247,0.14),transparent_55%)] pointer-events-none"></div>

                    <div className="relative">
                        <div className="flex justify-between gap-3 items-start mb-3">
                            <div>
                                <h3 className="m-0 text-[14.5px] tracking-wide font-semibold">Live summary</h3>
                                <p className="m-0 mt-1 text-[12.5px] text-gray-500">Interactive + % values</p>
                            </div>
                            <span className="border border-gray-300 bg-white/90 text-gray-500 px-3 py-2 rounded-full text-[12.5px] font-[750]">
                                <strong className="text-gray-900">Mode:</strong> {modeLabel(mode)}
                            </span>
                        </div>

                        <div className="mt-1.5">
                            <div className="flex justify-between items-center gap-2.5">
                                <small className="text-gray-500 font-black">Confidence progress</small>
                                <small className="text-gray-500 font-black">{scores.confidence}%</small>
                            </div>
                            <div className="h-3 rounded-full border border-gray-300 bg-gray-900/5 overflow-hidden mt-2.5">
                                <i
                                    className="block h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full transition-all duration-700"
                                    style={{ width: `${scores.confidence}%` }}
                                ></i>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-3.5 max-md:grid-cols-1">
                            <div className="border border-gray-300 rounded-[20px] bg-white/90 p-3.5 shadow-[0_10px_24px_rgba(15,23,42,0.05)] min-h-[112px] flex flex-col justify-between">
                                <b className="block text-[12.5px]">Overall maturity</b>
                                <small className="block mt-1 text-[12.5px] text-gray-500">{stage.name} • {scores.overall}/100</small>
                                <div className="flex gap-4 items-center mt-2.5">
                                    <div
                                        className="w-[68px] h-[68px] rounded-full border border-gray-300 shadow-[0_10px_26px_rgba(15,23,42,0.06)] flex-shrink-0 relative"
                                        style={{
                                            background: `conic-gradient(from 180deg, rgb(91,94,247) 0deg, rgb(14,165,233) ${Math.max(20, Math.min(340, deg))}deg, rgba(15,23,42,0.08) 0deg)`
                                        }}
                                    >
                                        <div className="absolute inset-[9px] rounded-full bg-white/95 border border-gray-300"></div>
                                        <strong className="absolute inset-0 grid place-items-center text-[13px] font-black tracking-tight">{scores.overall}%</strong>
                                    </div>
                                    <div className="flex-1">
                                        <small className="text-gray-500 font-black">Weighted score</small>
                                        <div className="h-3 rounded-full border border-gray-300 bg-gray-900/5 overflow-hidden mt-2.5">
                                            <i
                                                className="block h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full transition-all duration-700"
                                                style={{ width: `${scores.overall}%` }}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-gray-300 rounded-[20px] bg-white/90 p-3.5 shadow-[0_10px_24px_rgba(15,23,42,0.05)] min-h-[112px] flex flex-col justify-between">
                                <b className="block text-[12.5px]">Next stage focus</b>
                                <small className="block mt-1 text-[12.5px] text-gray-500">
                                    {stage.next ? `Target: ${stage.next}` : 'Maintain & scale'}
                                </small>
                                <div className="h-3 rounded-full border border-gray-300 bg-gray-900/5 overflow-hidden mt-2.5">
                                    <i className="block h-full w-[42%] bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full animate-pulse"></i>
                                </div>
                            </div>

                            <div className="border border-gray-300 rounded-[20px] bg-white/90 p-3.5 shadow-[0_10px_24px_rgba(15,23,42,0.05)] min-h-[112px] flex flex-col justify-between">
                                <b className="block text-[12.5px]">Quick insights</b>
                                <small className="block mt-1 text-[12.5px] text-gray-500">
                                    {scores.confidence < 25
                                        ? 'Answer more for strong insights'
                                        : `Top gap: ${[...scores.categories].sort((a, b) => a.pct - b.pct)[0]?.name || '—'}`
                                    }
                                </small>
                                <div className="h-3 rounded-full border border-gray-300 bg-gray-900/5 overflow-hidden mt-2.5">
                                    <i
                                        className="block h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full transition-all duration-700"
                                        style={{ width: `${Math.min(100, Math.max(12, scores.overall))}%` }}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
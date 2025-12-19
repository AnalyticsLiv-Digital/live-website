import Image from 'next/image';

export default function Header({ mode, depth, scores, onModeChange, onDepthChange, onReset, onShowResults }) {
    const modeLabel = (m) => m === 'ecommerce' ? 'eCommerce' : m === 'leadgen' ? 'Lead-gen' : m === 'publisher' ? 'Publisher' : 'General';
    const depthLabel = (d) => d === 'deep' ? 'Deep Scan' : 'Quick Scan';

    return (
        <div className="">
            <div className="flex items-center justify-between gap-4 p-3.5 px-4 border border-gray-200/60 rounded-[20px] bg-white/80 backdrop-blur-sm shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <div className="flex items-center gap-3.5 min-w-[320px] max-md:min-w-0">
                    <div className="w-[46px] h-[46px] rounded-2xl border border-gray-200/60 bg-white/95 shadow-[0_14px_30px_rgba(15,23,42,0.06)] grid place-items-center flex-shrink-0 overflow-hidden">
                        <img
                            src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png"
                            alt="AnalyticsLiv"
                            className="w-[86%] h-auto block"
                        />
                    </div>
                    <div className="max-md:hidden">
                        <p className="m-0 text-sm font-[850] tracking-wide">AnalyticsLiv • Maturity Assessment</p>
                        <p className="m-0 text-[12.5px] text-gray-500">Quick Scan / Deep Scan • Auto-saves • Resume via link</p>
                    </div>
                </div>

                <div className="flex gap-3 items-center flex- justify-end w-full" aria-label="Top nav">
                    <div className="flex gap-1.5 p-1.5 rounded-full border border-gray-300 bg-white/75 shadow-[0_10px_26px_rgba(15,23,42,0.05)]" aria-label="Business mode toggle">
                        {['general', 'ecommerce', 'leadgen', 'publisher'].map(m => (
                            <button
                                key={m}
                                type="button"
                                onClick={() => onModeChange(m)}
                                className={`border-none bg-transparent px-3 py-2 rounded-full text-[12.5px] font-black transition-all ${mode === m
                                    ? 'bg-indigo-500/10 text-indigo-800'
                                    : 'text-gray-500 hover:bg-gray-100'
                                    } whitespace-nowrap`}
                            >
                                {modeLabel(m)}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-1.5 p-1.5 rounded-full border border-gray-300 bg-white/75 shadow-[0_10px_26px_rgba(15,23,42,0.05)]" aria-label="Assessment depth">
                        <button
                            type="button"
                            onClick={() => onDepthChange('quick')}
                            title="~2 minutes (10 questions)"
                            className={`border-none bg-transparent px-3 py-2 rounded-full text-[12.5px] font-black transition-all ${depth === 'quick'
                                ? 'bg-sky-500/10 text-sky-900'
                                : 'text-gray-500 hover:bg-gray-100'
                                } whitespace-nowrap`}
                        >
                            Quick Scan
                        </button>
                        <button
                            type="button"
                            onClick={() => onDepthChange('deep')}
                            title="~6–10 minutes (40+ questions)"
                            className={`border-none bg-transparent px-3 py-2 rounded-full text-[12.5px] font-black transition-all ${depth === 'deep'
                                ? 'bg-sky-500/10 text-sky-900'
                                : 'text-gray-500 hover:bg-gray-100'
                                } whitespace-nowrap`}
                        >
                            Deep Scan
                        </button>
                    </div>

                    <div className="flex gap-2 items-center border border-gray-200 bg-white/75 px-3 py-2 rounded-full text-[12.5px] text-gray-500 whitespace-nowrap" title="Progress">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        <span><b className="text-gray-900">{scores.answeredCount}</b>/<span>{scores.totalCount}</span></span>
                    </div>

                    <button
                        className="border border-gray-200 bg-white/95 text-gray-900 px-3.5 py-2.5 rounded-2xl text-[13px] font-[800] cursor-pointer inline-flex gap-2.5 items-center transition-all hover:translate-y-[-1px] hover:border-gray-900/20 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] active:translate-y-0 active:scale-[0.99] shadow-[0_10px_26px_rgba(15,23,42,0.05)] select-none"
                        id="btnReset"
                        type="button"
                        onClick={onReset}
                    >
                        Reset
                    </button>

                    <button
                        className="border-none text-white px-3.5 py-2.5 rounded-2xl text-[13px] font-[800] cursor-pointer inline-flex gap-2.5 items-center transition-all shadow-[0_18px_40px_rgba(91,94,247,0.18)] bg-gradient-to-br from-indigo-500 to-sky-500 hover:brightness-105 active:translate-y-0 active:scale-[0.99] select-none"
                        id="btnResults"
                        type="button"
                        onClick={onShowResults}
                    >
                        Results
                    </button>
                </div>
            </div>
        </div>
    );
}
export default function Toast({ show, message }) {
    if (!show) return null;

    return (
        <div
            className="fixed left-1/2 bottom-4 -translate-x-1/2 px-3.5 py-3 rounded-2xl border border-gray-200/60 bg-white/95 text-gray-900 shadow-[0_18px_60px_rgba(15,23,42,0.08)] max-w-[820px] w-[92vw] z-[99] text-[13px] font-[750]"
            role="status"
            aria-live="polite"
        >
            {message}
        </div>
    );
}
'use client'
import { useEffect, useRef } from 'react';
import RadarChart from './Radarchart';

export default function RadarModal({ show, onClose, categories, overall }) {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (show) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-[120] bg-gray-900/55 backdrop-blur-sm flex items-center justify-center p-5"
            onClick={(e) => {
                if (e.target === modalRef.current) onClose();
            }}
            aria-hidden={!show}
        >
            <div className="w-full max-w-[1040px] h-[500px] rounded-[28px] bg-white/95 border border-white/55 shadow-[0_30px_120px_rgba(0,0,0,0.22)] overflow-hidden transform transition-all duration-300 ease-out">
                <div className="flex justify-between items-center gap-3 px-4 py-3.5 border-b border-gray-900/10 bg-gradient-to-b from-white/95 to-white/85">
                    <div>
                        <b className="text-sm">Capability Radar (enlarged)</b>
                        <div className="text-gray-500 font-[850] text-xs mt-0.5">
                            Hover points for category % • Press ESC to close
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="border-none cursor-pointer rounded-2xl px-3 py-2.5 bg-gray-900/5 font-black hover:bg-gray-900/10"
                        type="button"
                    >
                        Close ✕
                    </button>
                </div>
                <div className="px-4 py-3.5">
                    <div className="h-[460px] 2xl:h-[560px]">
                        <RadarChart categories={categories} centerText={`${overall}%`} />
                    </div>
                </div>
            </div>
        </div>
    );
}
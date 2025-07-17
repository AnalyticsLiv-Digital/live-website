'use client'
import React, { useEffect, useState } from 'react';

const LookerWebAd = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [userClosedBanner, setUserClosedBanner] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const totalHeight = document.body.scrollHeight;
            const scrollProgress = scrollY / (totalHeight - viewportHeight);

            const inRange = scrollProgress > 0.08 && scrollProgress < 0.9;

            if (!userClosedBanner) {
                setShowBanner(inRange);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [userClosedBanner]);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-in-out ${showBanner ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <div className="relative bg-gradient-to-r from-[#f3fefd] via-[#e2faf8] to-[#f3fefd] transition-all duration-700 
        border-t border-gray-300 shadow-2xl py-5 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between 
        max-w-5xl 2xl:max-w-7xl mx-auto rounded-t-2xl backdrop-blur-sm"
            >
                {/* ❌ Close Button */}
                <button
                    onClick={() => {
                        setUserClosedBanner(true);
                        setShowBanner(false);
                    }}
                    className="absolute top-1 left-3 text-gray-400 hover:text-gray-500 text-lg font-bold focus:outline-none"
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* Left Side */}
                <div className="flex flex-col text-gray-800 gap-1 sm:gap-2 text-center md:text-left max-md:mb-3">
                    <p className="text-base sm:text-lg 2xl:text-xl font-semibold leading-tight">
                        <span className="text-[#18998A]">WEBINAR</span> on <span className="text-[#18998A]">Data Storytelling with Looker Studio</span>
                    </p>
                    <p className="text-sm sm:text-base 2xl:text-lg font-medium">Join the live session with experts from AnalyticsLiv.</p>
                    <p className="text-xs sm:text-sm 2xl:text-base text-gray-600">
                        <strong>When:</strong> 24 July 2025 · 8:00 PM IST / 7:30 AM PST · 1 Hour · Free
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3 sm:gap-4 xl:gap-8">
                    <div className="flex flex-col items-center">
                        <img
                            src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/webinar_QR_new%20(1).jpg"
                            alt="QR Code"
                            className="w-16 h-16 2xl:w-24 2xl:h-24 object-contain rounded-md border border-gray-300"
                        />
                        <span className="hidden sm:block text-xs 2xl:text-sm text-gray-600 mt-1">
                            Scan to register instantly
                        </span>
                    </div>

                    <button
                        onClick={() => window.location.href = '/webinar/looker-studio'}
                        className="register-now bg-[#18998A] text-white text-sm 2xl:text-base px-4 2xl:px-6 py-2 2xl:py-3 rounded-lg shadow-md transition-all duration-300 transform hover:bg-[#127a6e] hover:shadow-lg hover:scale-[1.01] group"
                    >
                        <span className="transition-all duration-300 transform group-hover:translate-x-1">
                            Register Now
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LookerWebAd;

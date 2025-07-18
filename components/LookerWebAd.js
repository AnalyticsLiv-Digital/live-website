'use client'
import React, { useEffect, useState } from 'react';

const LookerWebAd = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [userClosedBanner, setUserClosedBanner] = useState(false);

    useEffect(() => {
        const closedTimestamp = localStorage.getItem('lookerWebAdClosedAt');
        const now = Date.now();

        if (closedTimestamp && now - parseInt(closedTimestamp) < 24 * 60 * 60 * 1000) {
            setUserClosedBanner(true);
            return;
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const totalHeight = document.body.scrollHeight;
            const scrollProgress = scrollY / (totalHeight - viewportHeight);

            const inRange = scrollProgress > 0.06 && scrollProgress < 0.9;

            if (!userClosedBanner) {
                setShowBanner(inRange);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [userClosedBanner]);

    const handleCloseBanner = () => {
        setUserClosedBanner(true);
        setShowBanner(false);
        localStorage.setItem('lookerWebAdClosedAt', Date.now().toString());
    }

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-in-out ${showBanner ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <div className="max-sm:hidden relative bg-header-linear transition-all duration-700 
        border-t border-gray-300 shadow-2xl py-5 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between 
        max-w-5xl 2xl:max-w-6xl mx-auto rounded-t-2xl backdrop-blur-sm"
            >
                {/* ❌ Close Button */}
                <button
                    onClick={() => handleCloseBanner()}
                    className="absolute top-1 left-3 text-gray-400 hover:text-gray-500 text-lg font-bold focus:outline-none"
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* Left Side */}
                <div className="flex flex-col text-gray-300 gap-1 sm:gap-1 text-center md:text-left max-md:mb-3">
                    <p className="text-base sm:text-lg 2xl:text-xl font-semibold leading-tight">
                        <span className="text-white">WEBINAR</span> on <span className="text-white">Data Storytelling with Looker Studio</span>
                    </p>
                    <p className="text-sm sm:text-base 2xl:text-lg font-medium">Join the live session with experts from AnalyticsLiv.</p>
                    <p className="hidden lg:block text-xs sm:text-sm 2xl:text-base font-medium">Turn data into stories that drive action!</p>
                </div>

                <div className="flex lg:mr-[100px] 2xl:mr-[90px] items-center gap-3 sm:gap-4 xl:gap-8 2xl:gap-12 mt-1">
                    <div className='flex flex-col items-start justify-between gap-2.5'>
                        <div>
                            <p className="text-xs sm:text-sm 2xl:text-base text-gray-300">
                                <div><strong className='text-white'>📅 </strong> 24 July 2025</div>
                                <div className='pt-0.5'><strong>⌛ </strong> 8:00 PM IST / 7:30 AM PST</div>
                            </p>
                        </div>
                        <button
                            onClick={() => window.location.href = '/webinar/looker-studio'}
                            className="register-now bg-white text-[#0E1947] font-medium text-xs 2xl:text-sm px-4 2xl:px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:shadow-lg hover:underline hover:scale-[1.01] group"
                        >
                            <span className="transition-all duration-300 transform group-hover:translate-x-1">
                                Register Now
                            </span>
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/webinar_QR_new%20(1).jpg"
                            alt="QR Code"
                            className="w-16 h-16 2xl:w-20 2xl:h-20 object-contain rounded-md border border-gray-300"
                        />
                        <span className="hidden sm:block text-center text-xs 2xl:text-sm text-gray-300 mt-1">
                            Scan to register instantly
                        </span>
                    </div>
                </div>
            </div>
            <div className="sm:hidden relative bg-header-linear transition-all duration-700
         border-t border-gray-300 shadow-2xl py-5 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between
         max-w-5xl 2xl:max-w-7xl mx-auto rounded-t-2xl backdrop-blur-sm"
            >
                <button
                    onClick={() => handleCloseBanner()}
                    className="absolute top-1 left-3 text-gray-400 hover:text-gray-500 text-lg font-bold focus:outline-none"
                    aria-label="Close"
                >
                    &times;
                </button>

                <div className="flex flex-col text-gray-300 gap-1 sm:gap-2 md:text-left max-md:mb-2">
                    <p className="text-base sm:text-lg 2xl:text-xl font-semibold leading-relaxed text-center">
                        <span className="text-white">WEBINAR</span> on <span className="text-white">Data Storytelling with <br className='sm:hidden'></br>Looker Studio</span>
                    </p>
                    <div className="flex justify-center text-xs sm:text-sm 2xl:text-base text-gray-300 pt-3 items-center gap-2">
                        <p>📅 24 July 2025</p> <p>⌛ 8:00 PM IST / 7:30 AM PST</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3 sm:gap-4 xl:gap-8 pt-3">
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
                        className="register-now bg-white text-[#0E1947] font-medium text-xs 2xl:text-sm px-4 2xl:px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:shadow-lg hover:underline hover:scale-[1.01] group"
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

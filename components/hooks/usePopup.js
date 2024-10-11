import { useState, useEffect } from 'react';

const useWebinarPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const hasClosed = localStorage.getItem('webinarPopupClosed');
        const hasRegistered = localStorage.getItem('webinarRegistered');

        const currentTime = Date.now();
        // Show popup only if not registered and not closed previously
        if (!hasRegistered && (!hasClosed || (currentTime - hasClosed > 86400000))) {
            const timer = setTimeout(() => {
                setShowPopup(true);
            }, 10000); // 10 seconds delay

            return () => clearTimeout(timer); // Clean up the timer
        }
    }, []);

    const closePopup = () => {
        setShowPopup(false);
        localStorage.setItem('webinarPopupClosed', Date.now());
    };

    const registerUser = () => {
        setShowPopup(false);
        localStorage.setItem('webinarRegistered', 'true');
    };

    const clickHere = () => {
        const baseUrl = '/webinar/cookie-consent';
        const utmParams = new URLSearchParams({
            utm_source: 'webiste',
            utm_medium: 'popup',
        });

        const fullUrl = `${baseUrl}?${utmParams.toString()}`;

        window.open(fullUrl, '_blank'); // Open in a new tab
    };

    return {
        showPopup,
        closePopup,
        registerUser,
        clickHere
    };
};

export default useWebinarPopup;

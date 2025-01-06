import { useState, useEffect } from 'react';

const useContactPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const hasClosed = localStorage.getItem('contactPopupClosed');
        const hasRegistered = localStorage.getItem('contactFormSubmitted');

        const currentTime = Date.now();
        // Show popup only if not registered and not closed previously
        if (!hasRegistered && (!hasClosed || (currentTime - hasClosed > 86400000))) {
            const timer = setTimeout(() => {
                setShowPopup(true);
                dataLayer.push({
                    event: 'contactPopupImpression',
                });
            }, 10000); // 10 seconds delay

            return () => clearTimeout(timer); // Clean up the timer
        }
    }, []);

    const closePopup = () => {
        setShowPopup(false);
        localStorage.setItem('contactPopupClosed', Date.now());
        dataLayer.push({
            event: 'contactPopupClosed',
        });
    };

    const registerUser = () => {
        setShowPopup(false);
        localStorage.setItem('contactFormSubmitted', 'true');
    };

    return {
        showPopup,
        closePopup,
        registerUser,
    };
};

export default useContactPopup;

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoClose } from "react-icons/io5";

const CookieNotice = () => {
    const [showNotice, setShowNotice] = useState(true);

    const handleClose = () => {
        setShowNotice(false);
    };

    return (
        <>
            {showNotice && (
                <div className='cookie-notice'>
                    <div className="cookie-notice-container relative block text-[13px] bg-[#fff1cc30] text-black font-gilroy py-4 px-7 text-center w-full">
                        <span className='cn-text-container inline-block mb-[6px]'>
                            We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
                            <Link href="/privacy-policy" className='text-[#3084fc]'> Privacy policy</Link>
                        </span>
                        <button className='cn-text-container inline-block bg-[#3084fc] text-white rounded py-2 px-[10px] uppercase font-semibold text-[13px]  ml-[10px]'>
                            Ok, I agree
                        </button>
                        <span className='inline-block absolute right-[10%] top-2' onClick={handleClose}><IoClose /></span>
                    </div>
                </div>
        )}
        </>
    );
};

export default CookieNotice;
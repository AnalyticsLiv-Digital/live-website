import React from 'react'
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <>
            <div className='relative block md:hidden z-20'>
                <Link href={whatsappLink} target="_blank" className="fixed bottom-4 left-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center">
                    <FaWhatsapp size={24} />
                </Link>
            </div>
        </>
  )
}

export default WhatsAppButton
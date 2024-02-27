'use client'
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image';

const Marketing = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <section className='about'>
            <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                <div>
                    <div className='flex items-center justify-center'>
                        <h2 className='text-maintext lg:text-[33px] text-2xl font-bold not-italic text-center'>GOOGLE MARKETING PLATFORM PARTNER</h2>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center pt-10'>
                        <div data-aos="fade-right" data-aos-once="true" className='lg:w-3/5'>
                            <Image
                                src="/GMP_Product_New_Design.png"
                                width={500}
                                height={500}
                                alt="Picture of Google Marketing Platform Partner"
                                priority={true}
                                className='lg:h-auto'
                            />
                        </div>
                        <div data-aos="fade-left" data-aos-once="true" className='lg:w-2/5 lg:pt-0 pt-5'>
                            <h3 className='text-maintext text-[22px] font-normal leading-[1.3em] not-italic pb-5'>How are we Helpful?</h3>
                            <p className='text-[#000] text-base font-normal leading-[30px] not-italic pb-10'> <span className='mt-[18px] block'> We are more than just a digital agency — we’re a reliable partner and co-worker. AnalyticsLiv is a digitally-savvy team of Marketing and Analytics specialists with 8+ years of experience in the industry. We create data driven marketing strategies to help our clients’ businesses stand out.</span></p>
                            <div className='flex items-center justify-center'>
                                <a href="/services"> <button className='butn'>Our Services</button> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Marketing
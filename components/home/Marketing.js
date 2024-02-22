'use client'
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image';

const Marketing = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <section className='about'>
            <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div>
                        <div className='flex items-center justify-between'>
                            <span className='bg-[#4186F5] w-[140px] h-2.5'></span>
                            <h2 className='text-maintext text-[40px] font-bold not-italic text-center'>GOOGLE MARKETING PLATFORM PARTNER</h2>
                            <span className='bg-[#4186F5] w-[140px] h-2.5'></span>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between items-center pt-8'>
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
                            <div data-aos="fade-left" data-aos-once="true" className='lg:w-2/5'>
                                <span className='text-maintext text-xl font-medium leading-normal not-italic pb-5'>360° Solutions</span>
                                <h3 className='text-maintext text-3xl font-semibold leading-normal not-italic pb-5'>How are we Helpful?</h3>
                                <p className='text-[#000] text-base font-normal leading-normal not-italic pb-10'>The Google Marketing Platform is a unified analytics and marketing platform that enables meaningful insights for effective marketing steering and activation. If you are looking for help implementing Google Marketing Platform products or need technical expertise for a custom project, AnalyticsLiv is here to help. We are more than just a digital agency — we’re a reliable partner and co-worker. AnalyticsLiv is a digitally-savvy team of Marketing and Analytics specialists with 8+ years of experience in the industry. We create data driven marketing strategies to help our clients’ businesses stand out.</p>
                                <a href="/Services"> <button className='butn'>Our Services</button> </a>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Marketing
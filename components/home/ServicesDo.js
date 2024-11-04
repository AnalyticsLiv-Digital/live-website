'use client'
import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image';

const Marketing = () => {
    
    return (
        <section className='servicedo relative overflow-hidden font-gilroy'>

            {/* Back-Ground design  */}
            <div className='absolute top-1/2 right-0 w-80 h-80 flex justify-end'>
                < img className="bgd2 w-52 h-80 rounded-full blur-2xl opacity-[0.5]" />
            </div>
            {/*  */}

            <div className='px-4 md:px-20 pt-4 pb-8 md:pb-16'>
                <div>
                    <div className='text-start'>
                        <h2 className='text-maintext lg:text-[28px] text-2xl font-semibold not-italic text-center  block'>Why Choose AnalyticsLiv</h2>
                    </div>
                    <div className=' grid xl:grid-cols-3 md:grid-cols-2 gap-8 pt-[50px]'>
                        <div className="first group bg-white shadow-serviceoffer border border-solid border-[#FDFDFD] rounded-[10px] p-5">
                            <div className="flex items-center justify-start gap-4">
                                <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                    <Image
                                        src="/service_need 1.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the author"
                                        priority={true}
                                        className='transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0'
                                    />
                                </div>
                                <h6 className='text-[#000] text-[18px] font-semibold leading-normal font-gilroy'>Expertise</h6>
                            </div>
                            <p className='text-[#000] text-[14px] font-normal leading-[26px] pt-5 text-start'>Our certified team of experts consists of seasoned campaign management, data scientists, and analytics experts who bring a wealth of experience to the table.</p>
                        </div>
                        <div className="second group bg-white border shadow-serviceoffer border-solid border-[#FDFDFD] rounded-[10px] p-5">
                            <div className="flex items-center justify-start gap-4">
                                <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                    <Image
                                        src="/service_need 2.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the author"
                                        priority={true}
                                        className='transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0'
                                    />
                                </div>
                                <h6 className='text-[#000] text-[18px] font-semibold leading-normal font-gilroy'>Innovation</h6>
                            </div>
                            <p className='text-[#000] text-[14px] font-normal leading-[26px] pt-5 text-start'>Stay ahead in the rapidly evolving world of analytics with our commitment to innovative solutions like RFM Analysis, Custom Attribution, and staying abreast of the latest technologies.</p>
                        </div>
                        <div className="third group bg-white border shadow-serviceoffer border-solid border-[#FDFDFD] rounded-[10px] p-5">
                            <div className="flex items-center justify-start gap-4">
                                <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                    <Image
                                        src="/service_need 3.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the author"
                                        priority={true}
                                        className='transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0'
                                    />
                                </div>
                                <h6 className='text-[#000] text-[18px] font-semibold leading-normal font-gilroy'>Client-Centric Approach</h6>
                            </div>
                            <p className='text-[#000] text-[14px] font-normal leading-[26px] pt-5 text-start'>We prioritize understanding your unique business challenges, ensuring that our solutions align seamlessly with your business goals.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Marketing
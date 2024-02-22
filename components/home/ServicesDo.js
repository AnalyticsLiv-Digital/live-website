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
        <section className='servicedo bg-homepagebg relative'>

            {/* Back-Ground design  */}
            <div className='absolute top-1/2 right-0 w-80 h-80 flex justify-end'>
                < img className="bgd2 w-52 h-80 rounded-full blur-2xl opacity-[0.5]" />
            </div>
            {/*  */}

                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div>
                        <div className='text-start'>
                            <h2 className='text-maintext text-[30px] font-semibold not-italic text-left block'>Why Choose AnalyticsLiv</h2>
                            <span className='bg-[#18265B] h-[2px] w-full sm:w-[500px] inline-block'></span>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center pt-8'>
                            <div  data-aos="fade-right" data-aos-once="true" className='lg:w-3/5 '>
                                <div className='relative sm:w-[500px] w-[292px] sm:h-[500px] h-[290px]'>
                                    <Image
                                        src="/Service_img.png"
                                        width={500}
                                        height={500}
                                        alt="Picture of Google Marketing Platform Partner"
                                        priority={true}
                                        className='lg:h-auto'
                                    />
                                    <Image
                                        src="/promote-unscreen.gif"
                                        width={50}
                                        height={50}
                                        alt="Picture of Google Marketing Platform Partner"
                                        priority={true}
                                        className='absolute bg-white sm:top-[126px] top-[69px] sm:right-[9px] right-[2px] max-[639px]:w-9 max-[639px]:h-9'
                                    />
                                    <Image
                                        src="/bar-chart-unscreen.gif"
                                        width={50}
                                        height={50}
                                        alt="Picture of Google Marketing Platform Partner"
                                        priority={true}
                                        className='absolute bg-white sm:top-[78px] top-10 sm:left-[35%] left-[101px] max-[639px]:w-9 max-[639px]:h-9'
                                    />
                                </div>
                            </div>
                            <div  data-aos="fade-left" data-aos-once="true" className='lg:w-2/5 grid gap-4'>
                                <div className="first group bg-white hover:shadow-serviceoffer border border-solid border-[#FDFDFD] rounded-[20px] p-5">
                                    <div className="flex items-start justify-start gap-4 pb-4">
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
                                        <h6 className='text-[25px] font-semibold text-[#000] leading-normal'>Expertise</h6>
                                    </div>
                                    <p className='text-base font-normal text-[#000] leading-normal'>Our certified team of experts consists of seasoned campaign management, data scientists, and analytics experts who bring a wealth of experience to the table. <a href=""><span className='text-blue-700 underline'>View more</span></a></p>
                                </div>
                                <div className="second group bg-white border hover:shadow-serviceoffer border-solid border-[#FDFDFD] rounded-[20px] p-5">
                                    <div className="flex items-start justify-start gap-4 pb-4">
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
                                        <h6 className='text-[25px] font-semibold text-[#000] leading-normal'>Innovation</h6>
                                    </div>
                                    <p className='text-base font-normal text-[#000] leading-normal'>Stay ahead in the rapidly evolving world of analytics with our commitment to innovative solutions like RFM Analysis, Custom Attribution, and staying abreast of the latest technologies. <a href=""><span className='text-blue-700 underline'>View more</span></a></p>
                                </div>
                                <div className="third group bg-white border hover:shadow-serviceoffer border-solid border-[#FDFDFD] rounded-[20px] p-5">
                                    <div className="flex items-start justify-start gap-4 pb-4">
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
                                        <h6 className='text-[25px] font-semibold text-[#000] leading-normal'>Client-Centric Approach</h6>
                                    </div>
                                    <p className='text-base font-normal text-[#000] leading-normal'>We prioritize understanding your unique business challenges, ensuring that our solutions align seamlessly with your business
                                        goals. <a href=""><span className='text-blue-700 underline'>View more</span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </section>
    )
}

export default Marketing
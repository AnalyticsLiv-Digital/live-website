'use client'
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image'

const PowerUp = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <section className='powerup bg-cover bg-no-repeat bg-[#012169]'>
            <div className='px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16'>
                <div>
                    <div className='flex items-center justify-center'>
                        <h2 className='text-[#ffffffe8] lg:text-[28px] text-2xl font-semibold not-italic text-center'>HOW WE POWER UP YOUR BRAND</h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" class="flex flex-wrap items-start justify-between pt-[50px]">
                        <div class="flex items-center justify-center lg:w-1/4 md:w-1/2 w-full mb-5">
                            <div className='cursor-pointer'>
                                <div className='hover:shadow-serviceoffer p-[10px] pt-6 rounded-[10px]'>
                                    <div className='flex items-center justify-start gap-2 pb-6'>
                                        <Image
                                            src="/data-collection.png"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                        <h2 className='md:text-[20px] font-normal text-white leading-[20px]'>Collect</h2>
                                    </div>
                                    <p className='md:text-[15px] text-[14px] font-light text-white leading-[1.7em]'>We start by comprehensively understanding the client's business potential and scope, tracking customer movements to grasp user interactions, experiences, and accurately attribute conversions.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center lg:w-1/4 md:w-1/2 w-full mb-5">
                            <div className='cursor-pointer'>
                                <div className='hover:shadow-serviceoffer p-[10px] pt-6 rounded-[10px]'>
                                    <div className='flex items-center justify-start gap-2 pb-6'>
                                        <Image
                                            src="/report (3).png"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                        <h2 className='text-[20px] font-normal text-white leading-normal'>Report</h2>
                                    </div>
                                    <p className='md:text-[15px] text-[14px] font-light text-white leading-[1.7em]'>Visualize your business KPIs and metrics from multiple data sources in one place and keep stakeholders updated with real time data and trend visualizations</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center lg:w-1/4 md:w-1/2 w-full mb-5">
                            <div className='cursor-pointer'>
                                <div className='hover:shadow-serviceoffer p-[10px] pt-6 rounded-[10px]'>
                                    <div className='flex items-center justify-start gap-2 pb-6'>
                                        <Image
                                            src="/analyzing (1).png"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                        <h2 className='text-[20px] font-normal text-white leading-normal'>Analyze</h2>
                                    </div>
                                    <p className='md:text-[15px] text-[14px] font-light text-white leading-[1.7em]'>Know your customers and their Journeys. Get a deeper understanding of your customers journey to find who they are, what they like, how they interact & more.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center lg:w-1/4 md:w-1/2 w-full">
                            <div className='cursor-pointer'>
                                <div className='hover:shadow-serviceoffer p-[10px] pt-6 rounded-[10px]'>
                                    <div className='flex items-center justify-start gap-2 pb-6'>
                                        <Image
                                            src="/insight (1).png"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                        <h2 className='text-[20px] font-normal text-white leading-normal'>Activate</h2>
                                    </div>
                                    <p className='md:text-[15px] text-[14px] font-light text-white leading-[1.7em]'>Combining the data collected with other data sources to generate one of a kind insights to take the right action at the right time backed by first party data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PowerUp
'use client'
import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image'

const PowerUp = () => {
    
    return (
        <section className='powerup overflow-hidden relative font-gilroy'>

            <div className='px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 relative z-20'>
                <div>
                    <div className='flex items-center justify-start py-5'>
                        <h2 className='text-[#ffffffe8] lg:text-[28px] text-2xl font-semibold not-italic text-left'>HOW WE POWER UP YOUR BRAND</h2>
                    </div>
                    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 pt-[50px]">
                        <div class="flex items-start justify-center md:w-full w-[300px] m-auto mb-5 powerbox xl:h-[260px] lg:h-[295px] h-[260px] md:h-[230px] p-[10px] pt-6 border border-[#333] rounded-[10px]">
                            <div className='cursor-pointer'>
                                <div className='inbox relative pb-4'>
                                    <Image
                                        src="/data-collection.png"
                                        width={30}
                                        height={30}
                                        alt="Picture of the author"
                                        priority={true}

                                    />
                                </div>
                                <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>Collect</h2>
                                <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>We start by comprehensively understanding the client's business potential and scope, tracking customer movements to grasp user interactions, experiences, and accurately attribute conversions.</p>

                            </div>
                        </div>
                        <div class="flex items-start justify-center md:w-full w-[300px] m-auto mb-5 powerbox xl:h-[260px] lg:h-[295px] h-[260px] md:h-[230px] p-[10px] pt-6 border border-[#333] rounded-[10px]">
                            <div className='cursor-pointer'>
                                <div className='inbox relative pb-4'>
                                    <Image
                                        src="/report (3).png"
                                        width={30}
                                        height={30}
                                        alt="Picture of the author"
                                        priority={true}

                                    />
                                </div>
                                <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>Report</h2>
                                <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>Visualize your business KPIs and metrics from multiple data sources in one place and keep stakeholders updated with real time data and trend visualizations</p>

                            </div>
                        </div>
                        <div class="flex items-start justify-center md:w-full w-[300px] m-auto mb-5 powerbox xl:h-[260px] lg:h-[295px] h-[260px] md:h-[230px] p-[10px] pt-6 border border-[#333] rounded-[10px]">

                            <div className='cursor-pointer'>

                                <div className='inbox relative pb-4'>
                                    <Image
                                        src="/analyzing (1).png"
                                        width={30}
                                        height={30}
                                        alt="Picture of the author"
                                        priority={true}

                                    />
                                </div>
                                <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>Analyze</h2>
                                <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>Know your customers and their Journeys. Get a deeper understanding of your customers journey to find who they are, what they like, how they interact & more.</p>

                            </div>
                        </div>
                        <div class="flex items-start justify-center md:w-full w-[300px] m-auto mb-5 powerbox xl:h-[260px] lg:h-[295px] h-[260px] md:h-[230px] p-[10px] pt-6 border border-[#333] rounded-[10px]">

                            <div className='cursor-pointer'>

                                <div className='inbox relative pb-4'>
                                    <Image
                                        src="/insight (1).png"
                                        width={30}
                                        height={30}
                                        alt="Picture of the author"
                                        priority={true}

                                    />
                                </div>
                                <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>Activate</h2>
                                <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>Combining the data collected with other data sources to generate one of a kind insights to take the right action at the right time backed by first party data.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PowerUp
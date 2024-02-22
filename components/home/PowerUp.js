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
        <section className='powerup bg-homepagebg'>
            <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                <div>
                    <div className='flex items-center justify-between'>
                        <span className='bg-[#4186F5] w-[140px] h-2.5'></span>
                        <h2 className='text-maintext text-[40px] font-bold not-italic text-center'>HOW WE POWER UP YOUR BRAND</h2>
                        <span className='bg-[#4186F5] w-[140px] h-2.5'></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" class="grid lg:grid-cols-11 md:grid-cols-6 lg:gap-2 gap-4 pt-20">
                        <div class="a col-span-1 grid-area-span-1 flex justify-center">
                            <a href="">
                                <div className='bg-[#fff] hover:shadow-serviceoffer p-[10px] rounded-[10px] border border-solid border-[#E4E4E4] xl:h-[240px] lg:h-[310px] md:h-[240px] h-[200px] max-[767px]:w-[300px]'>
                                    <div className='flex items-center justify-center gap-2 pb-8'>
                                        <Image
                                            src="/data-collection.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                        <h2 className='text-[19px] font-semibold text-[#000] leading-normal'>Collect</h2>
                                    </div>
                                    <p className='text-[12px] font-normal text-[#000] leading-normal'>We begin with the deep understanding of client’s business potential, the scope of work, and Track customer’s movement and actions to understand user interaction and experiences, and to attribute conversions accurately</p>
                                </div>
                            </a>
                        </div>
                        <div class="b anim col-span-2/7 grid-area-span-2/7 flex items-center justify-center">
                            <div className='w-16 hidden md:block transform rotate-45'>
                            <img src="arw-2.gif" alt="" />
                            </div>
                        </div>
                        <div class="c col-span-1 grid-area-span-3 flex justify-center">
                            <a href="">
                                <div className='bg-[#fff] hover:shadow-serviceoffer p-[10px] rounded-[10px] border border-solid border-[#E4E4E4] xl:h-[240px] lg:h-[310px] md:h-[240px] h-[200px] max-[767px]:w-[300px]'>
                                    <div className='flex items-center justify-center gap-2 pb-8'>
                                        <Image
                                            src="/data-collection_2.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                        <h2 className='text-[19px] font-semibold text-[#000] leading-normal'>Report</h2>
                                    </div>
                                    <p className='text-[12px] font-normal text-[#000] leading-normal'>Visualize your business KPIs and metrics from multiple data sources in one place and keep stakeholders updated with real time data and trend visualizations</p>
                                </div>
                            </a>
                        </div>
                        <div class="d anim col-span-2/7 grid-area-span-4/7 flex items-center justify-center">
                            <div className='w-16 hidden lg:block transform rotate-45'>
                                <img src="arw-2.gif" alt="" />
                            </div>
                        </div>
                        <div class="e col-span-1 grid-area-span-5 flex justify-center">
                            <a href="">
                                <div className='bg-[#fff] hover:shadow-serviceoffer p-[10px] rounded-[10px] border border-solid border-[#E4E4E4] xl:h-[240px] lg:h-[310px] md:h-[240px] h-[200px] max-[767px]:w-[300px]'>
                                    <div className='flex items-center justify-center gap-2 pb-8'>
                                        <Image
                                            src="/data-collection_3.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                        <h2 className='text-[19px] font-semibold text-[#000] leading-normal'>Analyze</h2>
                                    </div>
                                    <p className='text-[12px] font-normal text-[#000] leading-normal'>Know your customers and their Journeys. Get a deeper understanding of your customers journey to find who they are, what they like, how they interact & more.</p>
                                </div>
                            </a>
                        </div>
                        <div class="f1 anim col-span-2/7 grid-area-span-6/7 flex items-center justify-center">
                            <div className='w-16 hidden md:block transform rotate-45'>
                            <img src="arw-2.gif" alt="" />
                            </div>
                        </div>
                        <div class="h col-span-1 grid-area-span-7 flex justify-center">
                            <a href="">
                                <div className='bg-[#fff] hover:shadow-serviceoffer p-[10px] rounded-[10px] border border-solid border-[#E4E4E4] xl:h-[240px] lg:h-[310px] md:h-[240px] h-[200px] max-[767px]:w-[300px]'>
                                    <div className='flex items-center justify-center gap-2 pb-8'>
                                        <Image
                                            src="/data-collection_4.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                        <h2 className='text-[19px] font-semibold text-[#000] leading-normal'>Activate</h2>
                                    </div>
                                    <p className='text-[12px] font-normal text-[#000] leading-normal'>Combining the data collected with other data sources to generate one of a kind insights to take the right action at the right time backed by first party data.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PowerUp
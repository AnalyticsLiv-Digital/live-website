'use client'
import React from 'react'
import Image from 'next/image';

const Marketing = () => {

    return (
        <section className='sstservice approach relative overflow-hidden font-gilroy'>
                <div className='relative z-20 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div>
                        <div className='text-start'>
                            <h2 className='lg:text-[28px] text-2xl font-gilroy font-semibold text-[#fff] leading-[1.5em] tracking-wide text-left block'>GOOGLE MARKETING PLATFORM PARTNER</h2>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center pt-[50px]'>
                            <div className='lg:w-3/5'>
                                <Image
                                    src="/Server_Side_additional_img.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of Google Marketing Platform Partner"
                                    priority={true}
                                    className='lg:h-auto'
                                />
                            </div>
                            <div className='lg:w-2/5 grid gap-4'>
                                <div className="first group border hover:shadow-none shadow-serviceoffer border-solid border-[#13131400] rounded-[20px] p-5">
                                    <div className="flex items-center justify-start gap-4 pb-4">
                                        <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                            <Image
                                                src="/service_need 1.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className=''
                                            />
                                        </div>
                                        <h6 className='text-[18px] font-semibold text-[#fff] leading-normal'>Your Trusted Partner, Not Just an Agency</h6>
                                    </div>
                                    <p className='text-[14px] font-normal text-[#fff] leading-[22px]'>We go beyond basic services to become a reliable extension of your team.</p>
                                </div>
                                <div className="second group border hover:shadow-none shadow-serviceoffer border-solid border-[#13131400] rounded-[20px] p-5">
                                    <div className="flex items-center justify-start gap-4 pb-4">
                                        <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                            <Image
                                                src="/service_need 2.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className=''
                                            />
                                        </div>
                                        <h6 className='text-[18px] font-semibold text-[#fff] leading-normal'>Data-Driven Marketing Expertise</h6>
                                    </div>
                                    <p className='text-[14px] font-normal text-[#fff] leading-[22px]'>Our 8+ years of experience and deep understanding of digital marketing empower us to create data-driven strategies that generate real results.</p>
                                </div>
                                <div className="third group border hover:shadow-none shadow-serviceoffer border-solid border-[#13131400] rounded-[20px] p-5">
                                    <div className="flex items-center justify-start gap-4 pb-4">
                                        <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                            <Image
                                                src="/service_need 3.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className=''
                                            />
                                        </div>
                                        <h6 className='text-[18px] font-semibold text-[#fff] leading-normal'>Standing Out Through Insights</h6>
                                    </div>
                                    <p className='text-[14px] font-normal text-[#fff] leading-[22px]'>We leverage data analytics to craft unique marketing strategies that differentiate your business in the competitive landscape.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
    )
}

export default Marketing

{/* <div className='lg:w-2/5 lg:pt-0 pt-5'>
                            <h3 className='text-maintext text-[22px] font-medium leading-[1.3em] not-italic pb-5'>How are we Helpful?</h3>
                            <p className='text-[#000] text-base font-normal leading-[30px] not-italic pb-10'> <span className='mt-[18px] block'> We are more than just a digital agency.We’re a reliable partner and co-worker. AnalyticsLiv is a digitally-savvy team of Marketing and Analytics specialists with 8+ years of experience in the industry. We create data driven marketing strategies to help our clients’ businesses stand out.</span></p>
                            <div className='flex items-center justify-center'>
                                <a href="/services"> <button className='butn'>Our Services</button> </a>
                            </div>
                        </div> */}
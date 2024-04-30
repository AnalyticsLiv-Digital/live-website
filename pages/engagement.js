import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { useState } from 'react';
import Image from 'next/image';
import { FaCheck } from "react-icons/fa6";

const engagement = () => {
    return (
        <>
            <section className="engagement page_title pb-[15px] text-homepagebtn bg-white">
                <div className='relative px-2 md:px-6 pt-4 md:pt-5 pb-4 md:pb-8 z-20'>
                    <div className="breadcrumbs relative text-xs leading-6 mb-[6px]">
                        <div className='flex items-center'>
                            <span className='mr-3 inline-block'>
                                <Link href="/">Home</Link>
                            </span>
                            <span className='mr-3 inline-block'><FaAngleRight /></span>
                            <span className='inline-block'>Engagement</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20'>
                    <div className='w-full px-4'>
                        <div className='ea1 text-center'>
                            <h1 className='text-[28px] font-semibold font-rbt leading-8 text-black mb-[22px] pb-6'>Empowering Your Growth: AnalyticsLiv Engagement Models</h1>
                            <p className='text-base leading-6 font-normal'>At AnalyticsLiv, we understand that every business has unique data analytics needs. That's why we offer a variety of engagement models to ensure a perfect fit for your specific requirements and budget. Choose the model that best aligns with your project scope, ongoing needs, and desired level of collaboration</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='engagement'>
                <div className='relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20 border-t border-solid border-[#969696]'>
                    <div>
                        <div className='w-full m-auto'>
                            <div className='w-full px-4'>
                                <div className='ea1 text-center'>
                                    <h1 className='text-[28px] font-semibold font-rbt leading-8 text-black mb-[22px] pb-6'>Choose Your Preferred <br />Engagement Model</h1>
                                    <p className='text-base leading-6 font-normal'>Each business problem demands a different solution. To help you address them, we have four distinct engagement models.</p>
                                </div>
                                <div className='pt-10 gap-10 grid lg:grid-cols-2 items-start justify-center'>
                                    <div className='engagement1 flex items-center justify-center'>
                                        <div className=' border border-solid border-[#E2E2E2] rounded-[10px] p-5 xl:h-[645px] xl:w-full lg:w-[440px] max-[499px]:w-[100%] w-[500px] lg:h-[700px] relative'>
                                            <div className='flex items-center justify-between pb-3 border-b border-solid border-[#455a6475]'>
                                                <h6 className='text-[#000] text-[20px] font-semibold leading-normal'>Project-Based Engagement</h6>
                                                <Image
                                                    src="/leader1.svg"
                                                    width={50}
                                                    height={50}
                                                    alt="Picture of Media_planing"
                                                />
                                            </div>
                                            <div className='pt-4 pb-[10px]'>
                                                <div className=''>
                                                    <h4 className='text-[18px] font-semibold pt-[5px] mb-4 leading-[29px] text-[#202020]'>Best for you if:</h4>
                                                    <ul className='mb-5'>
                                                        <li className='relative mb-[14px] text-[#243238] text-[18px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Ideal for well-defined projects with a clear scope and timeline.</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[18px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Perfect for tasks like website analytics implementation, data migration, or specific marketing campaign analysis.</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[18px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Our team will work closely with you to understand your project goals, develop a customized solution, and deliver high-quality results within the agreed timeframe.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='lg:absolute xl:bottom-[30px] lg:bottom-[30px] pr-5'>
                                                    <h6 className='p-[10px] bg-[#ffba0014] rounded-[10px] text-[15px] mb-[10px] leading-8 text-[#404040] font-medium inline-block'>
                                                        <img src="/skill-icon.png" alt="" />
                                                        <p>Example: Implementing Google Analytics 4 with enhanced eCommerce within 3 months.</p>
                                                    </h6>

                                                    <div className='mt-4'>
                                                        <Link href="/contact" className='py-[10px] px-[30px] mb-4 text-[18px] font-medium capitalize bg-[#3084fc] rounded leading-6 text-[#fff] text-center'>I have a project</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='engagement2 flex items-center justify-center'>
                                        <div className=' border border-solid border-[#E2E2E2] rounded-[10px] p-5 xl:h-[645px] xl:w-full lg:w-[440px] max-[499px]:w-[100%] w-[500px] lg:h-[700px] relative'>
                                            <div className='flex items-center justify-between pb-3 border-b border-solid border-[#455a6475]'>
                                                <h6 className='text-[#000] text-[20px] font-semibold leading-normal'>Monthly Retainer</h6>
                                                <Image
                                                    src="/leader1.svg"
                                                    width={50}
                                                    height={50}
                                                    alt="Picture of Media_planing"
                                                />
                                            </div>
                                            <div className='pt-4 pb-[10px]'>
                                                <div className=''>
                                                    <h4 className='text-[18px] font-semibold pt-[5px] mb-4 leading-[29px] text-[#202020]'>Best for you if:</h4>
                                                    <ul className='mb-5'>
                                                        <li className='relative mb-[14px] text-[#243238] text-[18px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Suitable for ongoing data analysis and reporting needs.</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[18px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Benefit from consistent support and expertise for a predictable monthly fee.</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[18px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>We'll provide regular reports, data visualization, and actionable insights to help you make data-driven decisions and optimize your marketing efforts over time.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='lg:absolute xl:bottom-[30px] lg:bottom-[30px] pr-5'>
                                                    <h6 className='p-[10px] bg-[#ffba0014] rounded-[10px] text-[15px] mb-[10px] leading-8 text-[#404040] font-medium inline-block'>
                                                        <img src="/skill-icon.png" alt="" />
                                                        <p>Example: Programmatic ad campaign management to promote car launches across quarters.</p>
                                                    </h6>
                                                    <div className='mt-4'>
                                                        <Link href="/contact" className='py-[10px] px-[30px] mb-4 text-[18px] font-medium capitalize bg-[#3084fc] rounded leading-6 text-[#fff] text-center'>I have a project</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='engagement3 flex items-center justify-center'>
                                        <div className=' border border-solid border-[#E2E2E2] rounded-[10px] p-5 xl:h-[590px] xl:w-full lg:w-[440px] max-[499px]:w-[100%] w-[500px] lg:h-[708px]'>
                                            <div className='flex items-center justify-between pb-3 border-b border-solid border-[#455a6475]'>
                                                <h6 className='text-[#000] text-[20px] font-semibold leading-normal'>Dedicated Resource</h6>
                                                <Image
                                                    src="/leader1.svg"
                                                    width={50}
                                                    height={50}
                                                    alt="Picture of Media_planing"
                                                />
                                            </div>
                                            <div className='pt-4 pb-[10px] '>
                                                <div className=''>
                                                    <h4 className='text-[18px] font-semibold pt-[5px] mb-4 leading-[29px] text-[#202020]'>Best for you if:</h4>
                                                    <ul className='mb-5'>
                                                        <li className='relative mb-[14px] text-[#243238] text-[18px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Gain access to a dedicated data analyst who becomes an extension of your team.</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[18px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Perfect for businesses requiring ongoing data analysis support and strategic guidance.</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[18px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Our dedicated resource will work collaboratively with you, understand your business objectives, and provide tailored data insights to fuel your growth.</p>
                                                        </li>
                                                    </ul>
                                                    <h6 className='p-[10px] bg-[#ffba0014] rounded-[10px] text-[15px] mb-[10px] leading-8 text-[#404040] font-medium inline-block'>
                                                        <img src="/skill-icon.png" alt="" />
                                                        <p>Example: Weekly/Monthly BigQuery reporting to the team for real-time predictive modelling.</p>
                                                    </h6>
                                                </div>
                                                <div className='mt-4'>
                                                    <Link href="/contact" className='py-[10px] px-[30px] mb-4 text-[18px] font-medium capitalize bg-[#3084fc] rounded leading-6 text-[#fff] text-center'>I have a project</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='engagement4 flex items-center justify-center'>
                                        <div className=' border border-solid border-[#E2E2E2] rounded-[10px] p-5 xl:h-[590px] xl:w-full lg:w-[440px] max-[499px]:w-[100%] w-[500px] lg:h-[708px] relative'>
                                            <div className='flex items-center justify-between pb-3 border-b border-solid border-[#455a6475]'>
                                                <h6 className='text-[#000] text-[20px] font-semibold leading-normal'>Custom Model</h6>
                                                <Image
                                                    src="/leader1.svg"
                                                    width={50}
                                                    height={50}
                                                    alt="Picture of Media_planing"
                                                />
                                            </div>
                                            <div className='pt-4 pb-[10px] '>
                                                <div className=''>
                                                    <h4 className='text-[18px] font-semibold pt-[5px] mb-4 leading-[29px] text-[#202020]'>Best for you if:</h4>
                                                    <ul className='mb-5'>
                                                        <li className='relative mb-[14px] text-[#243238] text-[18px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Do your needs fall outside the standard models? We can create a customized solution!</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[18px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>We understand that some businesses have unique requirements. Our team will work with you to design a custom engagement model that perfectly aligns with your specific needs and budget.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='pt-4 pb-[10px] '>
                                                <div className=''>
                                                    <h4 className='text-[18px] text-[#404040] font-medium pt-[5px] mb-4 leading-[29px]'>If you need a tailor-made engagement model.</h4>
                                                </div>
                                                <div className='mt-4 lg:absolute xl:bottom-[30px] lg:bottom-[35px]'>
                                                    <Link href="/contact" className='py-[10px] px-[30px] mb-4 text-[18px] font-medium capitalize bg-[#34cf8f] rounded leading-6 text-[#fff] text-center'>Schedule A Call</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='progracont relative overflow-hidden'>
                <div className='relative px-4 md:px-12 pt-8 pb-8 z-20'>
                    <div className='flex md:flex-nowrap flex-wrap items-center mx-auto'>
                        <div className='md:w-[66%] w-full'>
                            <div>
                                <div>
                                    <div><h3 className='text-[#ffffff] text-[30px] leading-8 md:mb-[20px] mb-6 font-gilroy font-semibold'>Contact us</h3></div>
                                    <div>
                                        <div className='text-[#ffffff] text-base leading-8 md:mb-[15px] mb-6 font-gilroy2 font-medium'>
                                            <p className='text-[22px] mb-3'>Ready to unlock the power of your data?</p>
                                        </div>
                                        <p className='text-[#ffffff] text-[15px] leading-8 md:mb-[15px] mb-6 font-gilroy2 font-medium'>Choose the engagement model that best suits your needs and contact AnalyticsLiv today! Let's discuss how we can help you transform your data into actionable insights and achieve measurable results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[33%] w-full'>
                            <div className='p-[10px] pl-0'>
                                <div className='w-full flex'>
                                    <div className='flex items-center md:justify-end justify-center'>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="border border-solid border-[#ffffff] bg-[#ffffff] text-[#de668a] text-base font-normal tracking-wider rounded-xl py-3 px-6">Let's Connect</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default engagement
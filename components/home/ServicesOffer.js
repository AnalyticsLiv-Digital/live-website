'use client'
import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";

const ServicesOffer = () => {

    return (
        <section className='serviceoffer relative overflow-hidden font-gilroy'>

            {/* Back-Ground design  */}
            <div className='absolute top-[20%] -left-[165px] w-80 h-80 flex justify-end'>
                < img className="bgd2 w-52 h-80 rounded-full blur-2xl opacity-[0.5]" />
            </div>

            <div className='absolute bottom-0 right-0 w-80 h-80 flex justify-end'>
                < img className="bgd2 w-52 h-80 rounded-full blur-2xl opacity-[0.5]" />
            </div>
            {/*  */}

            <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                <div>
                    <div className='text-start'>
                        <h2 className='text-maintext lg:text-[28px] text-2xl font-semibold not-italic text-center block'>Services We Offer</h2>
                    </div>
                    <div className='grid md:grid-cols-2 items-center gap-10 pt-[50px]'>
                        <div className='first flex justify-center'>
                            <div className='relative group rounded-[10px] border border-solid border-[#EFEFEF] hover:shadow-serviceoffer p-5 lg:h-[500px] md:h-[585px] w-[335px] md:w-[284px] lg:w-[430px]'>
                                <div className="flex items-start justify-start gap-4 pb-6">
                                    <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                        <Image
                                            src="/offer_1.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0'
                                        />
                                    </div>
                                    <h6 className='text-[20px] font-semibold text-[#000] leading-normal'>Marketing Services</h6>
                                </div>
                                <ul className='grid gap-4 pb-[75px]'>
                                    <li className=''>
                                        <a href="/services/programatic-advertising" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>Programmatic Media Solutions</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Buy Display & Video Inventory Programmatically With DV360</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/ecommerce-marketing" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>eCommerce Marketing</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Steer Catalog Based Product Listing Ads.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/lead-generation" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>Lead Generation</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Generate Leads At Reduced Costs.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/app-marketing" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>Mobile App Marketing</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Drive App Installs At Lower CPI.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/sem" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>SEM</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Power Your Search Campaigns For Performs.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <a href="/services" className='absolute bottom-[3%] right-[20%] lg:right-[28%] md:right-[15%]'>
                                    <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                        <div className='flex items-center justify-center gap-[5px]'>
                                            <button className='font-medium text-homepagebtn group-hover:text-white'>Explore Now</button>
                                            <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='second flex justify-center'>
                            <div className='relative group rounded-[10px] border border-solid border-[#EFEFEF] hover:shadow-serviceoffer p-5 lg:h-[500px] md:h-[585px] w-[335px] md:w-[284px] lg:w-[430px]'>
                                <div className="flex items-start justify-start gap-4 pb-6">
                                    <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                        <Image
                                            src="/offer_2.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0'
                                        />
                                    </div>
                                    <h6 className='text-[20px] font-semibold text-[#000] leading-normal'>Analytics Services</h6>
                                </div>
                                <ul className='grid gap-4 pb-[75px]'>
                                    <li>
                                        <a href="/services/web-app-measurement" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>Web and App Measurement</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Accurate measurement of user interactions across web and app platforms. Build and stitch user journey out of user actions.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/analytics?id=audit-and-health-check" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>Audit and Health Check</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Thorough examination and assessment of your analytics setup for optimal performance.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/data-reporting-analysis" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>Data Reporting & Analysis</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Transform raw data into actionable insights for strategic decision-making.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/looker-bi-platform" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>Looker BI Platform</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Utilize Looker for advanced Business Intelligence and data exploration. Create interactive visual dashboards for decision-making</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <a href="/services/analytics" className='absolute bottom-[3%]  right-[20%] lg:right-[28%] md:right-[15%]'>
                                    <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                        <div className='flex items-center justify-center gap-[5px]'>
                                            <button className='font-medium text-homepagebtn group-hover:text-white'>Explore Now</button>
                                            <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='third flex justify-center'>
                            <div className='relative group rounded-[10px] border border-solid border-[#EFEFEF] hover:shadow-serviceoffer p-5 lg:h-[415px] md:h-[585px] w-[335px] md:w-[284px] lg:w-[430px]'>
                                <div className="flex items-start justify-start gap-4 pb-6">
                                    <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                        <Image
                                            src="/offer_3.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0'
                                        />
                                    </div>
                                    <h6 className='text-[20px] font-semibold text-[#000] leading-normal'>Solutions</h6>
                                </div>
                                <ul className='grid gap-4 pb-[75px]'>
                                    <li>
                                        <a href="/services/data-reporting-analysis" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>GDPR Compliance</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Enhance brand visibility through effective display strategies using DV360.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/data-science" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>Data Science Solution & Automation</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Implement data science solutions and automation for enhanced efficiency and predictive analytics.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/customer-segmentation" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>Customer Segmentation</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Instead of instead of relying on standard attribution, avail visitors' custom attribution journey and pinpoint their initial or supporting sources which drive conversions and engagement</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <a href="/services/data-reporting-analysis" className='absolute bottom-[3%]  right-[20%] lg:right-[28%] md:right-[15%]'>
                                    <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                        <div className='flex items-center justify-center gap-[5px]'>
                                            <button className='font-medium text-homepagebtn group-hover:text-white'>Explore Now</button>
                                            <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='fourth flex justify-center'>
                            <div className='relative group rounded-[10px] border border-solid border-[#EFEFEF] hover:shadow-serviceoffer p-5 lg:h-[415px] md:h-[585px] w-[335px] md:w-[284px] lg:w-[430px]'>
                                <div className="flex items-start justify-start gap-4 pb-6">
                                    <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                        <Image
                                            src="/offer_4.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0'
                                        />
                                    </div>
                                    <h6 className='text-[20px] font-semibold text-[#000] leading-normal'>Training and Consultation</h6>
                                </div>
                                <ul className='grid gap-4 pb-[75px]'>
                                    <li>
                                        <a href="/services/training" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>Schedule a One-Hour Consultation</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Book a personalized consultation session to address your specific analytics needs.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/training" className='flex items-start gap-2'>
                                            <Image
                                                src="/check.svg"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[18px] h-[18px] mt-1'
                                            />
                                            <div>
                                                <h6 className='text-[#000] text-base font-medium leading-normal'>Training Details</h6>
                                                <p className='text-[#000] text-xs font-normal leading-normal'>Explore our training programs designed to empower your team skilled with analytics, advertising, marketing, and whole Google Marketing Platform(GMP) stack and knowledge.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <a href="/services/training" className='absolute bottom-[3%]  right-[20%] lg:right-[28%] md:right-[15%]'>
                                    <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                        <div className='flex items-center justify-center gap-[5px]'>
                                            <button className='font-medium text-homepagebtn group-hover:text-white'>Explore Now</button>
                                            <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default ServicesOffer
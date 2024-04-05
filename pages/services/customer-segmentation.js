'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from "framer-motion";

const customersegmentation = () => {

    const Trusteddata = {
        brand: [
            { logo: "/ThoughtSpot_logo.png", alt: "ThoughtSpot" },
            { logo: "/Brizo_logo.png", alt: "Brizo" },
            { logo: "/bluecrew.png", alt: "BlueCrew" },
            { logo: "/edanz_logo.png", alt: "Edanz" },
            { logo: "/shoebacca.png", alt: "Shoebacca" },
            { logo: "/wholesalesockdeals.png", alt: "WholesaleSockDeals" }
        ]
    };
    // // // // // FAQ SECTION // // // // // // // // // //   
    const [isFaqfstVisible, setIsFaqfstVisible] = useState(false);
    const [isFaqsecVisible, setIsFaqsecVisible] = useState(false);
    const [isFaqthrdVisible, setIsFaqthrdVisible] = useState(false);

    const toggleFaqfstVisibility = () => {
        setIsFaqfstVisible(prevState => !prevState);
    };
    const toggleFaqsecVisibility = () => {
        setIsFaqsecVisible(prevState => !prevState);
    };
    const toggleFaqthrdVisibility = () => {
        setIsFaqthrdVisible(prevState => !prevState);
    };


    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 988,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <section className='cshome bg-[#ecf9ff] w-full relative font-gilroy overflow-hidden'>
                <div className='h-full'>
                    <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 h-full z-20">
                        <div className="z-10 flex lg:flex-nowrap items-center flex-wrap justify-between gap-7 pb-8">
                            <div className="space-y-4 w-full lg:w-1/2 lg:order-1 order-2">
                                <h1 className="2xl:text-[33px] lg:text-[28px] text-[27px] leading-[1.7em] font-['Poppins'] font-semibold text-maintext pt-4">
                                    Unleash the Power of Your Audience: Customer Segmentation with AnalyticsLiv
                                </h1>
                                <div className='flex max-[425px]:flex-wrap flex-nowrap items-center gap-5'>
                                    <Link href="/contact?id=programatic-advertising">
                                        <button className="bg-[#30486ae3] text-white w-[208px] hover:bg-white border border-solid hover:border-[#30486ae3] hover:text-[#30486ae3] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">REQUEST A DEMO</button>
                                    </Link>
                                    <Link href="/contact?id=programatic-advertising">
                                        <button className="bg-[#30486ae3] text-white w-[208px] hover:bg-white border border-solid hover:border-[#30486ae3] hover:text-[#30486ae3] text-base font-normal tracking-wider rounded-xl py-3 px-6 max-[425px]:mt-0 mt-6">CONTACT US</button>
                                    </Link>
                                </div>
                            </div>
                            <div className=" w-full lg:w-1/2 flex items-center lg:justify-end justify-center lg:order-2 order-1">
                                <img src="/Customer_Segment_Main_Img_Croped.png" alt="" className='' />
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <h2 className='text-center font-bold text-base text-maintext leading-[24px]'>Trusted by Organisations Worldwide</h2>
                            </div>
                            <div className='w-[90%] m-auto'>
                                <Marquee gradient={false} pauseOnHover="true">
                                    <div className='flex space-x-8 justify-center py-4 px-4 mt-4'>
                                        {Trusteddata.brand.map((brand, index) => (
                                            <div key={index}>
                                                <img src={brand.logo} alt={brand.alt} className='h-[50px] mx-5' />
                                            </div>
                                        ))}
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='csservicedo relative overflow-hidden font-gilroy'>

                {/* Back-Ground design  */}
                <div className='absolute top-1/2 right-0 w-80 h-80 flex justify-end'>
                    < img className="bgd2 w-52 h-80 rounded-full blur-2xl opacity-[0.5]" />
                </div>
                {/*  */}

                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div>
                        <div className='text-start'>
                            <h2 className='text-maintext lg:text-[28px] text-2xl font-semibold not-italic text-left block mb-2'>Why Customer Segmentation Matters</h2>
                            <p className='text-[15px] font-medium not-italic text-left block mb-2'>Imagine trying to sell the same product to everyone who walks into your store. It wouldn't be very effective, right? The same goes for online marketing.</p>
                        </div>
                        <div>
                            <p className='text-[17px] font-medium not-italic text-left block mb-2'>
                                Customer segmentation allows you to group your audience into distinct categories based on shared characteristics. This helps you:
                            </p>
                        </div>
                        <div className=' grid xl:grid-cols-3 md:grid-cols-2 gap-5 pt-5'>
                            <div className="first group bg-white shadow-serviceoffer border border-solid border-[#FDFDFD] rounded-[10px] p-5">
                                <div className="flex flex-col items-start justify-start gap-4 pb-4">
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
                                    <h6 className='text-[17px] font-normal text-[#000] leading-normal'>Personalize your marketing messages</h6>
                                </div>
                                <p className='md:text-[15px] text-[14px] font-light text-[#000] leading-[1.7em]'>Speak directly to each segment's needs and interests, leading to higher engagement and conversions.</p>
                            </div>
                            <div className="second group bg-white border shadow-serviceoffer border-solid border-[#FDFDFD] rounded-[10px] p-5">
                                <div className="flex flex-col items-start justify-start gap-4 pb-4">
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
                                    <h6 className='text-[17px] font-normal text-[#000] leading-normal'>Optimize your marketing spend</h6>
                                </div>
                                <p className='md:text-[15px] text-[14px] font-light text-[#000] leading-[1.7em]'>Allocate resources towards campaigns that resonate most with each segment.</p>
                            </div>
                            <div className="third group bg-white border shadow-serviceoffer border-solid border-[#FDFDFD] rounded-[10px] p-5">
                                <div className="flex flex-col items-start justify-start gap-4 pb-4">
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
                                    <h6 className='text-[17px] font-normal text-[#000] leading-normal'>Develop targeted product offerings</h6>
                                </div>
                                <p className='md:text-[15px] text-[14px] font-light text-[#000] leading-[1.7em]'>Tailor your products or services to better suit specific customer segments.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='powerup cs relative bg-[#282833] overflow-hidden font-gilroy'>
                <div className='relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20'>
                    <div>
                        <div className='flex items-center justify-start'>
                            <h2 className='text-[#ffffff] lg:text-[28px] leading-[1.5em] text-[20px] font-semibold text-center mb-2'>How AnalyticsLiv Does Customer Segmentation</h2>
                        </div>
                        <p className='text-[#ffffff] leading-[1.5em] text-[16px] font-medium mt-5'>At AnalyticsLiv, we leverage advanced data analytics techniques to uncover hidden patterns within your customer data. Our process involves</p>
                        <div class="flex flex-wrap items-center justify-center pt-[50px]">
                            <div className='lg:w-1/2 w-full'>
                                <div className='grid lg:grid-cols-1 sm:grid-cols-2 lg:gap-3 gap-7'>
                                <div class="flex items-start cswebbox  p-[10px] pt-6 border border-[#333] rounded-[10px]">
                                    <div className='cursor-pointer'>
                                        <div className='inbox relative pb-4 flex items-center gap-2'>
                                            <Image
                                                src="/data-collection.png"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}

                                            />
                                            <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>User Input</h2>
                                        </div>
                                        <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>The input from the user would typically be a csv file or an excel sheet. This module is responsible for validation, storage, and security of the data that will be provided as an input by the users.</p>
                                    </div>
                                </div>
                                <div class="flex items-start cswebbox  p-[10px] pt-6 border border-[#333] rounded-[10px]">
                                    <div className='cursor-pointer'>
                                        <div className='inbox relative pb-4 flex items-center gap-2'>
                                            <Image
                                                src="/report (3).png"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}

                                            />
                                        <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>Data Preparation</h2>
                                        </div>
                                        <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>The data uploaded by the users cannot be readily used for segmentation. Based on the attributes required for segmentation, the raw data needs to be converted into analysis-specific data. The functionality of this module is to facilitate data preparation</p>

                                    </div>
                                </div>
                                <div class="flex items-start cswebbox  p-[10px] pt-6 border border-[#333] rounded-[10px]">

                                    <div className='cursor-pointer'>

                                        <div className='inbox relative pb-4 flex items-center gap-2'>
                                            <Image
                                                src="/analyzing (1).png"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}

                                            />
                                        <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>Clustering Algorithm</h2>
                                        </div>
                                        <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>This module will contain the implementation of the chosen clustering algorithm. Connection between this module and the ones that precede and follow should be robust and flexible, as this module will undergo a lot of changes due to algorithm tweaking.</p>

                                    </div>
                                </div>
                                <div class="flex items-start cswebbox  p-[10px] pt-6 border border-[#333] rounded-[10px]">
                                    <div className='cursor-pointer'>
                                        <div className='inbox relative pb-4 flex items-center gap-2'>
                                            <Image
                                                src="/insight (1).png"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}

                                            />
                                        <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>Insights & Reporting</h2>
                                        </div>
                                        <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>We provide clear reports outlining customer segments, their characteristics, and actionable insights for targeted marketing strategies.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <div>
                                <img src="/Customer_Segment_Sub_Img.png" alt="" className='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='csworkflo font-gilroy'>
                <div className='relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20'>
                    <div className='flex items-center justify-start'>
                        <h2 className='text-txt lg:text-[28px] leading-[1.5em] text-[20px] font-semibold text-center mb-2'>Our Customer Segmentation Workflow</h2>
                    </div>
                    <p className='text-txt leading-[1.5em] text-[16px] font-medium mb-5'>Here's a simplified view of our customer segmentation workflow</p>
                    <div className='py-10'>
                        <Slider {...settings}>
                            <div aria-hidden="true" className="">
                                <div className='cs1 min-[600px]:w-[90%] w-[300px] xl:h-[215px] min-[601px]:h-[255px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='ursor-pointer p-5'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/trafficking.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-2 font-medium text-[#000000] leading-normal'>Project Kickoff</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'>We discuss your business goals and target audience.</p>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="">
                                <div className='cs2 min-[600px]:w-[90%] w-[300px] xl:h-[215px] min-[601px]:h-[255px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='ursor-pointer p-5'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/leader1.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-2 font-medium text-[#000000] leading-normal'>Data Acquisition</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'>We help you identify and collect relevant customer data sources.</p>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="">
                                <div className='cs3 min-[600px]:w-[90%] w-[300px] xl:h-[215px] min-[601px]:h-[255px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='ursor-pointer p-5'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/premium3.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-2 font-medium text-[#000000] leading-normal'>Data Exploration & Analysis</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'>Our data analysts delve into your data to uncover segmentation opportunities.</p>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="">
                                <div className='cs4 min-[600px]:w-[90%] w-[300px] xl:h-[215px] min-[601px]:h-[255px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='ursor-pointer p-5'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/premium4.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-2 font-medium text-[#000000] leading-normal'>Customer Segment Creation</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'>We define distinct customer segments based on shared characteristics.</p>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="">
                                <div className='cs5 min-[600px]:w-[90%] w-[300px] xl:h-[215px] min-[601px]:h-[255px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='ursor-pointer p-5'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/leader3.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-2 font-medium text-[#000000] leading-normal'>Insights & Recommendations</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'>We deliver a comprehensive report with actionable insights for each segment.</p>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="">
                                <div className='cs6 min-[600px]:w-[90%] w-[300px] xl:h-[215px] min-[601px]:h-[255px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='ursor-pointer p-5'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/leader4.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-2 font-medium text-[#000000] leading-normal'>Ongoing Support</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'>We offer ongoing guidance on implementing segmentation strategies for your marketing efforts.</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className='cscasestudy progracasestudy relative font-gilroy overflow-hidden font-gilroy'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16 relative z-20'>
                    <div className='flex items-center justify-center pb-5'>
                        <h2 className='text-[28px] font-semibold text-[#18265b] leading-[27px] text-center tracking-widest'>Check out our latest Case Studies</h2>
                    </div>
                    <div className='text-center lg:flex items-start justify-between gap-[30px]'>
                        <div className='lg:w-[66%]'>
                            <h5 className='text-start text-[15px] font-normal leading-none text-maintext mb-2 opacity-0'>Check out our latest Case Studies</h5>
                            <div className='lg:grid lg:grid-cols-1 sm:flex sm:justify-between grid justify-center gap-[30px]'>
                                <div className='first group 2xl:h-[299px] xl:h-[329px] lg:h-[290px] home-blog max-[1024px]:w-full rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] text-center relative'>
                                    <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="/case-studies/ua-to-ga4-migration-for-a-website" className='lg:flex gap-5'>
                                        <Image
                                            src="/casestudy1.png"
                                            width={300}
                                            height={300}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='2xl:w-[40%] w-full m-auto 2xl:h-[247px] xl:h-[277px] lg:h-[227px] lg:object-scale-down'
                                        />
                                        <div className='grid gap-2'>
                                            <h3 className='2xl:text-[18px] text-base text-[#18265b] font-semibold text-left mt-5 lg:mt-0'>Universal Analytics (GA3) to GA4 Migration for a Website</h3>
                                            <p className='align-middle text-left 2xl:text-[15px] text-[13px] text-gray-500 pb-12 lg:pb-0 xl:leading-[30px] leading-6 mt-5 sm:mt-0'>The client faced difficulty migrating their website from Universal Analytics to Google Analytics 4 and had limited knowledge of GA4. They wanted to ensure a seamless migration without disruption and correct tracking migration.</p>

                                            <div className='view max-[1023px]:absolute max-[1023px]:bottom-[10px] flex w-[130px] h-[50px] xl:p-0 p-[10px] items-center justify-evenly border border-solid text-center mt-5 lg:mt-0 border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                                <div className='flex items-center justify-center gap-[5px]'>
                                                    <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                                    <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                </div>
                                <div className='second group 2xl:h-[299px] xl:h-[329px] lg:h-[290px] home-blog max-[1024px]:w-full max-[640px]:mt-[20px] rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] text-center relative'>
                                    <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="/case-studies/55-percent-increase-in-avg-session-duration" className='lg:flex gap-5'>
                                        <Image
                                            src="/casestudy3.png"
                                            width={300}
                                            height={300}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='2xl:w-[40%] w-full m-auto 2xl:h-[247px] xl:h-[277px] lg:h-[227px] lg:object-scale-down'
                                        />
                                        <div className='grid gap-2 '>
                                            <h3 className='2xl:text-[18px] text-base text-[#18265b] font-semibold text-left mt-5 lg:mt-0'>55% Increase in Avg. Session Duration</h3>
                                            <p className='align-middle text-left 2xl:text-[15px] text-[13px] text-gray-500 pb-12 lg:pb-0 xl:leading-[30px] leading-6 mt-5 sm:mt-0'>Increasing the Session Duration of the Website is a difficult challenge, with steady growth in acquiring new users, holding the returning users and other KPIs. It's not a quick trick but a journey of hard work and discipline that Leads to the conversion</p>

                                            <div className='view max-[1023px]:absolute max-[1023px]:bottom-[10px] flex w-[130px] h-[50px] xl:p-0 p-[10px] items-center justify-evenly border border-solid text-center mt-5 lg:mt-0 border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                                <div className='flex items-center justify-center gap-[5px]'>
                                                    <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                                    <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className='hidden lg:grid lg:w-[33%]'>
                            <h5 className='text-start text-[15px] font-normal leading-none text-maintext mb-2'>More case studies</h5>
                            <div className='third hidden lg:grid gap-[30px]'>
                                <div className='home-casestd3 group 2xl:h-[299px] xl:h-[329px] lg:h-[290px] rounded bg-no-repeat bg-cover border border-solid hover:border-[#979797] hover:shadow-serviceoffer p-5 text-center relative'>
                                    <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="/case-studies/skyrocket-your-campaigns-ctr-with-a-95-percent-surge-in-14-days" className='grid gap-5'>
                                        <div className=''>
                                            <Image
                                                src="/casestd.png"
                                                width={300}
                                                height={300}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-full m-auto 2xl:h-[210px] xl:h-[230px] h-[170px] object-scale-down'
                                            />
                                        </div>
                                        <div className=''>
                                            <h3 className='text-left text-[13px] text-white font-medium whitespace-relaxed'>Skyrocket Your Campaign's CTR with a 95% Surge in 14 Days!</h3>

                                        </div>
                                    </a>
                                </div>
                                <div className='home-casestd3 group 2xl:h-[299px] xl:h-[329px] lg:h-[290px] rounded bg-no-repeat bg-cover border border-solid hover:border-[#979797] hover:shadow-serviceoffer p-5 text-center relative'>
                                    <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="/case-studies/driving-campaigns-in-dv360-to-post-click-attribution-success-with-36-percent-reduction-in-cpi" className='grid gap-1'>
                                        <div className='grid gap-4'>
                                            <Image
                                                src="/casestd2.png"
                                                width={300}
                                                height={300}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-full m-auto 2xl:h-[210px] xl:h-[230px] h-[170px] object-scale-down'
                                            />
                                        </div>
                                        <div className='grid gap-1'>
                                            <h3 className='text-left text-[13px] text-white font-medium whitespace-relaxed pt-[15px]'>Driving the Campaigns in DV360 to Post Click Attribution Success with a 36% reduction in CPI</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='dtscont progracont relative overflow-hidden font-gilroy'>
                <div className='relative px-4 md:px-12 pt-8 pb-8 z-20'>
                    <div className='flex md:flex-nowrap flex-wrap items-center mx-auto'>
                        <div className='md:w-[66%] w-full'>
                            <div>
                                <div>
                                    <div>
                                        <div className='text-[#ffffff] text-[20px] leading-8 md:mb-[15px] mb-6 font-gilroy2 font-medium'>
                                            Ready to Unlock the Power of Customer Segmentation?
                                        </div>
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
            <section className='csfaq crofaq relative overflow-hidden font-gilroy'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
                    <div>
                        <h3 className='text-[28px] font-semibold text-[#000000] leading-[1.5em] font-gilroy mb-2'>FAQ's</h3>
                    </div>
                    <div className='md:flex items-center justify-start mt-10'>
                        <div className='items-start lg:justify-start justify-center gap-7 w-full'>
                            <div className={`faqfst flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full text-[#000000]' onClick={toggleFaqfstVisibility}>
                                        <div className={`flex items-center w-full justify-between gap-5 ${isFaqfstVisible ? 'mb-[10px]' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <h2 className='text-[17px] font-medium leading-normal'>What data do I need for customer segmentation?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqfstVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqfstVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                We typically use website analytics data, CRM data, and marketing automation data. However, the specific data required depends on your business goals.
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`faqsec flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full text-[#000000]' onClick={toggleFaqsecVisibility}>
                                        <div className={`flex items-center justify-between gap-5 ${isFaqsecVisible ? 'mb-[10px]' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <h2 className='text-[17px] font-medium leading-normal'>How many customer segments will I have?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqsecVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqsecVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                The optimal number of segments depends on your business complexity and data. Usually, 3-5 segments provide a good balance of granularity and manageability.
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`faqthrd flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full text-[#000000]' onClick={() => toggleFaqthrdVisibility()}>
                                        <div className={`flex items-center justify-between gap-5 ${isFaqthrdVisible ? 'mb-[10px]' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <h2 className='text-[17px] font-medium leading-normal'>What can I do with my customer segments?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqthrdVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqthrdVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                Use your segments to personalize marketing campaigns, develop targeted content, and optimize product offerings for each segment.
                                            </motion.div>
                                        )}
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

export default customersegmentation
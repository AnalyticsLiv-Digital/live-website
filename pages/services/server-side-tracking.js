'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Marquee from "react-fast-marquee";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Serversidetracking = () => {

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
    const [isFs4mVisible, setIsFs4mVisible] = useState(false);
    const [isSec4mVisible, setIsSec4mVisible] = useState(false);
    const [isThr4mVisible, setIsThr4mVisible] = useState(false);
    const [isFur4mVisible, setIsFur4mVisible] = useState(false);

    const toggleFs4mVisibility = () => {
        setIsFs4mVisible(prevState => !prevState);
    };

    const toggleSec4mVisibility = () => {
        setIsSec4mVisible(prevState => !prevState);
    };

    const toggleThr4mVisibility = () => {
        setIsThr4mVisible(prevState => !prevState);
    };

    const toggleFur4mVisibility = () => {
        setIsFur4mVisible(prevState => !prevState);
    };

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="absolute top-1/2 right-[-35px] transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
                <FaArrowRight size={20} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="absolute top-1/2 left-[-35px] transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
                <FaArrowLeft size={20} />
            </div>
        );
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 988,
                settings: {
                    slidesToShow: 1,
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
    // // // // // FAQ SECTION // // // // // // // // // //   
    const [isFaqfstVisible, setIsFaqfstVisible] = useState(false);
    const [isFaqsecVisible, setIsFaqsecVisible] = useState(false);
    const [isFaqthrdVisible, setIsFaqthrdVisible] = useState(false);
    const [isFaqfurVisible, setIsFaqfurVisible] = useState(false);

    const toggleFaqfstVisibility = () => {
        setIsFaqfstVisible(prevState => !prevState);
    };
    const toggleFaqsecVisibility = () => {
        setIsFaqsecVisible(prevState => !prevState);
    };
    const toggleFaqthrdVisibility = () => {
        setIsFaqthrdVisible(prevState => !prevState);
    };
    const toggleFaqfurVisibility = () => {
        setIsFaqfurVisible(prevState => !prevState);
    };

    return (
        <>
            <Head>
                <title>AnalyticsLiv - Server-Side Tracking</title>
                <meta name="description" content="Experts in GA4, DV360, Google Ads, Meta Ads, Microsoft Ads" />
                <link rel="canonical" href="https://www.analyticsliv.com/services/server-side-tracking"></link>
            </Head>


            <section className='ssthome w-full relative font-gilroy overflow-hidden'>
                <div className='h-full'>
                    <div className="relative px-4 md:px-12 pt-8 md:pt-[10px] pb-8 md:pb-0 h-full z-20">
                        <div className="z-10 flex lg:flex-nowrap items-center flex-wrap justify-between gap-7 max-xl:pb-8 max-sm:pt-1 py-6">
                            <div className="w-full lg:w-1/2 lg:order-1 order-2 lg:mt-8">
                                <h1 className="lg:text-[41px] text-[32px] lg:leading-[62px] leading-normal font-gilroy font-normal text-[#006EF5] mb-4">
                                    The Future of Performance Marketing: Server-Side Tracking
                                </h1>
                                <h2 className="font-gilroy text-[20px] leading-[30px] font-normal text-[#152e55] mb-5">Cookieless, Compliant Data with Server-Side Tracking</h2>
                                {/* <p className="text-base font-normal leading-[28px] mb-[10px]">
                                    Move Beyond Unsafe Browser Tracking and Unreliable Third-Party Cookies. Our Server-side Tracking Solution Provides Access to The Data You Need While Ensuring Full Compliance. With Major Platforms Phasing Out Cookie Support.
                                </p> */}
                                <div className='flex items-center lg:justify-start justify-center gap-5'>
                                    <Link href="/contact?id=programatic-advertising">
                                        <button className="butn mt-2 uppercase">future-proof your <br /> analytics today</button>
                                    </Link>
                                </div>
                            </div>
                            <div className=" w-full lg:w-1/2 flex items-center lg:justify-end justify-center lg:order-2 order-1">
                                <img src="/Server_Side_tracking_Page_Main_Img.png" alt="" className='h-[400px]' />
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <h2 className='text-center font-bold font-gilroy text-base lg:text-[28px] text-maintext leading-[24px] xl:py-5'>Trusted by Organisations Worldwide</h2>
                            </div>
                            <div className='w-[90%] m-auto md:w-full'>
                                <Marquee gradient={false} pauseOnHover="true">
                                    <div className='flex space-x-8 justify-center py-4 px-4 mt-[10px]'>
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

            <section className='sstwhy relative wepappour overflow-hidden'>
                <div className="relative px-4 md:px-12 pt-8 pb-8 md:pb-6 z-20">
                    <div>
                        <h3 className='text-[32px] font-gilroy font-semibold text-[#18265b] leading-[1.5em]'>Why Server-Side Tracking Matters</h3>
                    </div>
                    <div className=''>
                        <h2 className='text-[19px] font-gilroy text-[#000] leading-[1.7em] my-5'>Traditional, client-side tracking relies on code placed on your website to collect user data. While convenient, it has limitations. Browser ad blockers can hinder data collection, and privacy regulations restrict how cookies can be used.</h2>
                        <p className='text-[18px] font-gilroy text-[#000] leading-[1.7em]'>Server-side tracking offers a robust alternative. Data is collected and processed on your server before being sent to analytics platforms.</p>
                        <div className='w-full mx-2 py-7 grid lg:grid-cols-4 md:grid-cols-2 gap-10 md:py-4'>
                            <div className='fs border-[3px] border-[#00000014] border-solid hover:border-t-[#30486a] shadow-webappourexper rounded-b-[15px] p-5'>
                                <div>
                                    <img src="/Data-Driven Approach blue.png" alt="" className='h-16 w-16' />
                                    <h6 className='text-base text-txt font-gilroy font-semibold mt-4 mb-6 leading-[27px]'>Enhanced Data Accuracy</h6>
                                </div>
                                <p className='text-xs font-gilroy2 font-normal leading-[22px]'>Overcome browser limitations and ad blockers to capture a more complete picture of user behavior.</p>
                            </div>
                            <div className='sd border-[3px] border-[#00000014] border-solid hover:border-t-[#30486a] shadow-webappourexper rounded-b-[15px] p-5'>
                                <div>
                                    <img src="/Transparency You Can Trust blue.png" alt="" className='h-16 w-16' />
                                    <h6 className='text-base text-txt font-gilroy font-semibold mt-4 mb-6 leading-[27px]'>Improved Privacy Compliance</h6>
                                </div>
                                <p className='text-xs font-gilroy2 font-normal leading-[22px]'>Mitigate privacy concerns by giving you more control over data collection and storage.</p>
                            </div>
                            <div className='trd border-[3px] border-[#00000014] border-solid hover:border-t-[#30486a] shadow-webappourexper rounded-b-[15px] p-5'>
                                <div>
                                    <img src="/Performance at the Forefront blue.png" alt="" className='h-16 w-16' />
                                    <h6 className='text-base text-txt font-gilroy font-semibold mt-4 mb-6 leading-[27px]'>Flexibility & Security</h6>
                                </div>
                                <p className='text-xs font-gilroy2 font-normal leading-[22px]'>Leverage server-side processing for complex data manipulation and analysis, ensuring data security.</p>
                            </div>
                            <div className='trd border-[3px] border-[#00000014] border-solid hover:border-t-[#30486a] shadow-webappourexper rounded-b-[15px] p-5'>
                                <div>
                                    <img src="/Custom_Analytics_Solution.png" alt="" className='h-16 w-16' />
                                    <h6 className='text-base text-txt font-gilroy font-semibold mt-4 mb-6 leading-[27px]'>Deeper User Insights</h6>
                                </div>
                                <p className='text-xs font-gilroy2 font-normal leading-[22px]'>Gain a more holistic understanding of user journeys by combining server-side data with traditional web analytics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sstchoose powerup relative overflow-hidden'>
                <div className="relative px-4 md:px-12 pt-8 pb-8 z-20 md:py-4">
                    <div>
                        <h3 className='text-[32px] font-gilroy font-semibold text-[#fff] leading-[1.5em]'>Why Choose AnalyticsLiv for Server-Side Tracking?</h3>
                    </div>
                    <p className='text-[18px] font-gilroy text-[#fff] leading-[1.7em] my-5 md:py-0'>At AnalyticsLiv, we're experts in unlocking the power of server-side tracking. <br /> We offer:</p>
                    <div className='lg:flex items-center justify-start lg:mt-10 md:mt-0'>
                        {/* <div className='lg:w-[40%] w-full flex items-center justify-center'>
                            <img src="/Server_Side_tracking_sub_img.png" alt="" className='lg:h-auto md:h-[400px]' />
                        </div> */}
                        <div className='lg:w-[35%] w-full flex items-center justify-center'>
                            <img src="/Server_Side_tracking_sub_img_White_Circle.png" alt="" className='lg:h-auto md:h-[400px]' />
                        </div>
                        <div className='grid md:grid-cols-2 items-start lg:justify-start gap-7 lg:w-[60%] w-full lg:mt-0 mt-5'>
                            <div className={`fs4m pwb flex items-start gap-5 w-full max-[350px]:w-[285px] bg-[#0000001f] p-[25px] pt-6 border border-[#131314] hover:shadow-mediadv360 rounded-[10px] ${isFs4mVisible ? 'xl:h-[180px] lg:h-[200px]' : 'h-[100px]'}`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full' onClick={toggleFs4mVisibility}>
                                        <div className={`flex items-center justify-between gap-5 text-[#ffffff] ${isFs4mVisible ? 'mb-6' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <div className='inbox relative mr-[13px]'>
                                                    <img src="/Market.png" alt="" className='h-12 lg:w-[60px] w-12' />
                                                </div>
                                                <h2 className='text-base font-semibold font-gilroy text-[#ffffff] leading-normal'>Expertise & Experience</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFs4mVisible ? <FaChevronUp className='w-5 h-10' /> : <FaChevronDown className='w-5 h-10' />}
                                            </div>
                                        </div>
                                        {isFs4mVisible && (
                                            <p className='text-xs font-medium text-[#ffffff] font-gilroy leading-[22px]'>
                                                Our data analysts understand the intricacies of server-side implementation and optimization.
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`sec4m pwb flex items-start gap-5 w-full max-[350px]:w-[285px] bg-[#0000001f] p-[25px] pt-6 border border-[#131314] hover:shadow-mediadv360 rounded-[10px] ${isSec4mVisible ? 'xl:h-[180px] lg:h-[200px]' : 'h-[100px]'}`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full' onClick={toggleSec4mVisibility}>
                                        <div className={`flex items-center justify-between gap-5 text-[#ffffff] ${isSec4mVisible ? 'mb-6' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <div className='inbox relative mr-[13px]'>
                                                    <img src="/Message.png" alt="" className='h-12 w-12' />
                                                </div>
                                                <h2 className='text-base font-semibold font-gilroy text-[#ffffff] leading-normal'>Customizable Solutions</h2>
                                            </div>
                                            <div className='clk'>
                                                {isSec4mVisible ? <FaChevronUp className='w-5 h-10' /> : <FaChevronDown className='w-5 h-10' />}
                                            </div>
                                        </div>
                                        {isSec4mVisible && (
                                            <div>
                                                <p className='text-xs font-medium text-[#ffffff] font-gilroy leading-[22px]'>We tailor server-side tracking solutions to your specific business needs and goals.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`thr4m pwb flex items-start gap-5 w-full max-[350px]:w-[285px] bg-[#0000001f] p-[25px] pt-6 border border-[#131314] hover:shadow-mediadv360 rounded-[10px] ${isThr4mVisible ? 'xl:h-[188px] lg:h-[205px]' : 'h-[100px]'}`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full' onClick={() => toggleThr4mVisibility()}>
                                        <div className={`flex items-center justify-between gap-5 text-[#ffffff] ${isThr4mVisible ? 'mb-6' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <div className='inbox relative mr-[13px]'>
                                                    <img src="/Media.png" alt="" className='h-12 w-12' />
                                                </div>
                                                <h2 className='text-base font-semibold text-[#ffffff] font-gilroy leading-normal'>End-to-End Support</h2>
                                            </div>
                                            <div className='clk'>
                                                {isThr4mVisible ? <FaChevronUp className='w-5 h-10' /> : <FaChevronDown className='w-5 h-10' />}
                                            </div>
                                        </div>
                                        {isThr4mVisible && (
                                            <div>
                                                <p className='text-xs font-medium text-[#ffffff] font-gilroy leading-[22px]'>We guide you through every step, from implementation to ongoing data analysis and reporting.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`fur4m pwb flex items-start gap-5 w-full max-[350px]:w-[285px] bg-[#0000001f] p-[25px] pt-6 border border-[#131314] hover:shadow-mediadv360 rounded-[10px] ${isFur4mVisible ? 'xl:h-[188px] lg:h-[205px]' : 'h-[100px]'}`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full' onClick={() => toggleFur4mVisibility()}>
                                        <div className={`flex items-center justify-between gap-5 text-[#ffffff] ${isFur4mVisible ? 'mb-6' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <div className='inbox relative mr-[13px]'>
                                                    <img src="/Measurment.png" alt="" className='h-12 xl:w-[65px] lg:w-[100px] w-[50px]' />
                                                </div>
                                                <h2 className='text-base font-semibold text-[#ffffff] font-gilroy leading-normal'>Data Security & Compliance</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFur4mVisible ? <FaChevronUp className='w-5 h-10' /> : <FaChevronDown className='w-5 h-10' />}
                                            </div>
                                        </div>
                                        {isFur4mVisible && (
                                            <div>
                                                <p className='text-xs font-medium text-[#ffffff] font-gilroy leading-[22px]'>We prioritize data security and ensure compliance with relevant data privacy regulations.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sstframewrk font-gilroy'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <h2 className='text-[32px] font-semibold text-[#18265b] leading-[1.5em] font-gilroy'>Our Framework for Implementing Server-Side Tracking</h2>
                    <p className='text-[18px] font-gilroy text-[#000] leading-[1.7em] my-5 md:my-0'>We follow a structured framework to ensure a seamless server-side tracking implementation:</p>
                    <div className='pt-10 gap-5'>
                        <Slider {...settings}>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service1 relative w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/leader1.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-gilroy font-semibold leading-normal pt-6'>Define Goals & Objectives</h6>
                                    <p className='text-[#000] text-xs font-gilroy font-medium pt-11 text-start leading-[22px]'>Identify your key tracking objectives (e.g., user behavior analysis, conversion rate optimization).</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service2 relative w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/leader2.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-gilroy font-semibold leading-normal pt-6'>Data Source Mapping</h6>
                                    <p className='text-[#000] text-xs font-gilroy font-medium pt-11 text-start leading-[22px]'>Determine the data points you want to collect and identify their sources (e.g., website interactions, user attributes).</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service3 relative w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/leader3.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-gilroy font-semibold leading-normal pt-6'>Server-Side Integration</h6>
                                    <p className='text-[#000] text-xs font-gilroy font-medium pt-11 text-start leading-[22px]'>Our team seamlessly integrates server-side tracking code with your website architecture.</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service4 relative w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/leader4.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-gilroy font-semibold leading-normal pt-6'>Data Collection & Validation</h6>
                                    <p className='text-[#000] text-xs font-gilroy font-medium pt-11 text-start leading-[22px]'>We establish secure data collection processes and validate data integrity.</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service5 relative w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/leader5.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-gilroy font-semibold leading-normal pt-6'>Integration with Analytics Platforms</h6>
                                    <p className='text-[#000] text-xs font-gilroy font-medium pt-11 text-start leading-[22px]'>We connect your server-side tracking data with your preferred analytics platforms.</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service6 relative w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/leader5.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-gilroy font-semibold leading-normal pt-6'>Reporting & Optimization</h6>
                                    <p className='text-[#000] text-xs font-gilroy font-medium pt-11 text-start leading-[22px]'>We provide comprehensive reports and insights to help you understand user behavior and optimize your marketing efforts.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            <section className='sstservice approach relative overflow-hidden font-gilroy'>
                <div className='relative z-20 px-4 md:px-20 pt-8 md:pt-6 pb-8 md:pb-6'>
                    <div>
                        <div className='text-start'>
                            <h2 className='text-[32px] font-gilroy font-semibold text-[#fff] leading-[1.5em] tracking-wide text-left block'>Additional Services</h2>
                        </div>
                        <p className='text-[#fff] text-[18px] font-normal leading-normal pt-7 my-5 md:py-0 md:pt-0 md:my-2'>In Addition to server-side tracking implementation, AnalyticsLiv offers a range of complementary services:</p>
                        <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center pt-8 md:pt-0'>
                            <div className='lg:w-3/5'>
                                <Image
                                    src="/Data_Science_Mid_Img.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of Google Marketing Platform Partner"
                                    priority={true}
                                    className='lg:h-auto'
                                />
                            </div>
                            <div className='lg:w-2/5 grid gap-4'>
                                <div className="first group border hover:shadow-none shadow-serviceoffer border-solid border-[#13131400] rounded-[20px] p-5">
                                    <div className="flex items-start justify-start gap-4 pb-4">
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
                                        <h6 className='text-base font-semibold text-[#fff] leading-normal'>Data Analytics & Visualization</h6>
                                    </div>
                                    <p className='text-xs font-normal text-[#fff] leading-[22px]'>We transform raw data into actionable insights with clear visualizations for informed decision-making.</p>
                                </div>
                                <div className="second group border hover:shadow-none shadow-serviceoffer border-solid border-[#13131400] rounded-[20px] p-5">
                                    <div className="flex items-start justify-start gap-4 pb-4">
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
                                        <h6 className='text-base font-semibold text-[#fff] leading-normal'>Marketing Attribution Modeling</h6>
                                    </div>
                                    <p className='text-xs font-normal text-[#fff] leading-[22px]'>We help you understand which marketing channels contribute most to conversions.</p>
                                </div>
                                <div className="third group border hover:shadow-none shadow-serviceoffer border-solid border-[#13131400] rounded-[20px] p-5">
                                    <div className="flex items-start justify-start gap-4 pb-4">
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
                                        <h6 className='text-base font-semibold text-[#fff] leading-normal'>Marketing Campaign Optimization</h6>
                                    </div>
                                    <p className='text-xs font-normal text-[#fff] leading-[22px]'>We leverage data insights to optimize your marketing campaigns for maximum return on investment (ROI).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='sstcont progracont relative overflow-hidden font-gilroy'>
                <div className='relative px-4 md:px-12 pt-8 pb-8 z-20'>
                    <div className='flex md:flex-nowrap flex-wrap items-center mx-auto'>
                        <div className='md:w-[66%] w-full'>
                            <div>
                                <div>
                                    <div><h3 className='text-[#ffffff] text-[30px] leading-8 md:mb-[20px] mb-6 font-gilroy font-semibold'>Contact us</h3></div>
                                    <div>
                                        <div className='text-[#ffffff] text-base leading-8 mb-6 md:mb-0 font-gilroy2 font-medium'>
                                            <p className='text-[22px] mb-3'>Ready to Take Control of Your User Data?</p>
                                            Contact AnalyticsLiv today to schedule a free consultation and unlock the power of server-side tracking!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[33%] w-full'>
                            <div className='p-[10px] pl-0'>
                                <div className='w-full flex lg:justify-end justify-center'>
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

            <section className='sstfaq relative overflow-hidden font-gilroy'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20 md:py-6">
                    <div>
                        <h3 className='text-[32px] font-semibold text-[#000000] leading-[1.5em] font-gilroy mb-2'>FAQ's</h3>
                    </div>
                    <div className='md:flex items-center justify-start mt-10 md:mt-0'>
                        <div className='items-start lg:justify-start justify-center gap-7 w-full'>
                            <div className={`faqfst flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full text-[#000000]' onClick={toggleFaqfstVisibility}>
                                        <div className={`flex items-center w-full justify-between gap-5 ${isFaqfstVisible ? 'mb-[13px]' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <h2 className='text-[17px] font-medium leading-normal'>Is server-side tracking complex to implement?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqfstVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqfstVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                While server-side tracking requires technical expertise, AnalyticsLiv makes the process seamless. Our team guides you through every step, ensuring a smooth implementation.
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
                                                <h2 className='text-[17px] font-medium leading-normal'>Can server-side tracking replace client-side tracking entirely?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqsecVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqsecVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                Server-side tracking offers distinct advantages, but it doesn't eliminate the need for client-side tracking entirely. They can work together to provide a more comprehensive view of user behavior.
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
                                                <h2 className='text-[17px] font-medium leading-normal'>How does server-side tracking improve data security?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqthrdVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqthrdVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                By processing data on your server, you have greater control over data access and storage. Server-side tracking also reduces reliance on browser cookies, which can be vulnerable to security breaches.
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`faqfur flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full text-[#000000]' onClick={() => toggleFaqfurVisibility()}>
                                        <div className={`flex items-center justify-between gap-5 ${isFaqfurVisible ? 'mb-[10px]' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <h2 className='text-[17px] font-medium leading-normal'>How long does it take to see results from your solutions?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqfurVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqfurVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                The time to see results varies depending on the complexity of your data and the specific solution implemented. However, we prioritize delivering measurable impact quickly. Our agile approach allows for rapid prototyping, iterative refinements, and continuous optimization to ensure you start seeing value as soon as possible.
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

export default Serversidetracking
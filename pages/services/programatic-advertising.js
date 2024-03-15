'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const service_A = () => {

    const [isFs4mVisible, setIsFs4mVisible] = useState(false);
    const [isSec4mVisible, setIsSec4mVisible] = useState(false);
    const [isThr4mVisible, setIsThr4mVisible] = useState(false);
    const [isFur4mVisible, setIsFur4mVisible] = useState(false);

    const toggleFs4mVisibility = () => {
        setIsFs4mVisible(prevState => !prevState);
        if (isSec4mVisible) setIsSec4mVisible(true);
        if (isThr4mVisible) setIsThr4mVisible(false);
        if (isFur4mVisible) setIsFur4mVisible(false);
    };

    const toggleSec4mVisibility = () => {
        setIsSec4mVisible(prevState => !prevState);
        if (isFs4mVisible) setIsFs4mVisible(true);
        if (isThr4mVisible) setIsThr4mVisible(false);
        if (isFur4mVisible) setIsFur4mVisible(false);
    };

    const toggleThr4mVisibility = () => {
        setIsThr4mVisible(prevState => !prevState);
        if (isFs4mVisible) setIsFs4mVisible(false);
        if (isSec4mVisible) setIsSec4mVisible(false);
        if (isFur4mVisible) setIsFur4mVisible(true);
    };

    const toggleFur4mVisibility = () => {
        setIsFur4mVisible(prevState => !prevState);
        if (isFs4mVisible) setIsFs4mVisible(false);
        if (isSec4mVisible) setIsSec4mVisible(false);
        if (isThr4mVisible) setIsThr4mVisible(true);
    };

    const [toggle1, setToggle1] = useState(true);

    const toggleDropdown = () => {
        setToggle1(!toggle1);
    };

    const [activetab, setActivetab] = useState("1");
    const tabRefs = useRef([]);

    const [activemtab, setActivemtab] = useState("0");

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

    return (
        <>
            <Head>
                <title>AnalyticsLiv - Programatic Media Solutions</title>
                <meta name="description" content="Experts in GA4, DV360, Google Ads, Meta Ads, Microsoft Ads" />
                <link rel="canonical" href="https://www.analyticsliv.com/services/programatic-advertising"></link>
            </Head>

            <section className='prograhome w-full relative font-gilroy overflow-hidden'>
                <div className='h-full'>
                    <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 h-full z-20">
                        <div className="z-10 flex lg:flex-nowrap items-center flex-wrap justify-between gap-7 pb-8">
                            <div className="space-y-4 w-full lg:w-1/2 lg:order-1 order-2">
                                <h1 className="2xl:text-[33px] lg:text-[28px] text-[27px] leading-[1.7em] font-['Poppins'] font-semibold text-maintext pt-4">
                                    DV360: Programmatic Media Buying Redefined with AnalyticsLiv
                                </h1>
                                <h3 className="text-[23px] text-[#333333] font-semibold leading-[33px]">
                                    Unleash the Power of Precision Targeting and Automated Bidding
                                </h3>
                                <p className="text-base font-normal leading-[28px] font-[Poppins]">
                                    Are you ready to move beyond traditional media buying and embrace the efficiency and effectiveness of programmatic advertising?  AnalyticsLiv's DV360 service empowers you to do just that.
                                </p>
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
                                <img src="/Programmatic_Media_Main_Img_Without_Blur.png" alt="" className='lg:h-[470px] md:h-[400px]' />
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

            <section className='whydv360 overflow-hidden'>
                <div className='relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div>
                        <div className='flex items-center justify-start pb-7'>
                            <h3 className='text-[#302E53] font-gilroy text-[28px] font-semibold leading-[1.5em] not-italic pb-5'>Why DV360?</h3>
                        </div>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 items-start justify-center gap-10'>
                            <div className='bg-[#fff8fa] xl:h-[460px] lg:h-[600px] md:h-[516px] rounded-[10px] py-6 px-4 hover:shadow-programeasure'>
                                <div className='w-full'></div>
                                <div className='mb-5 w-[50px] h-[50px]'><img src="/Ad_Format.png" alt="" /></div>
                                <div className='w-full'></div>
                                <h3 className='text-[#1D2124] text-[18px] font-semibold font-gilroy mb-[20px]'>Unmatched Programmatic Capabilities</h3>
                                <ul className='text-[#646464] text-[14px] font-medium font-gilroy2 leading-6 ml-[15px] mb-5'>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Automated Buying & Selling: Streamline ad inventory management across channels with automated buying and selling.</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Real-Time Optimization: Leverage real-time data to optimize audience targeting and campaign performance for maximum impact.</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Seamless Integrations: Integrate seamlessly with other platforms and data sources for a unified campaign management experience.</p></li>
                                </ul>
                            </div>
                            <div className='bg-[#fff8fa] xl:h-[460px] lg:h-[600px] md:h-[516px] rounded-[10px] py-6 px-4 hover:shadow-programeasure'>
                                <div className='w-full'></div>
                                <div className='mb-5 w-[50px] h-[50px]'><img src="/Ad_Format.png" alt="" /></div>
                                <div className='w-full'></div>
                                <h3 className='text-[#1D2124] text-[18px] font-semibold font-gilroy mb-[20px]'>Advanced Targeting & Creative Options</h3>
                                <ul className='text-[#646464] text-[14px] font-medium font-gilroy2 leading-6 ml-[15px] mb-5'>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Sophisticated Targeting: Reach the right audience with precise targeting based on demographics, interests, behaviors, and more.</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Diverse Ad Formats: Access a wide range of ad formats and creative templates to tailor your message for different channels.</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Dynamic Creative Optimization (DCO): Deliver personalized ads in real-time based on user data and audience segments.</p></li>
                                </ul>
                            </div>
                            <div className='bg-[#fff8fa] xl:h-[460px] lg:h-[600px] md:h-[593px] rounded-[10px] py-6 px-4 hover:shadow-programeasure'>
                                <div className='w-full'></div>
                                <div className='mb-5 w-[50px] h-[50px]'><img src="/Ad_Format.png" alt="" /></div>
                                <div className='w-full'></div>
                                <h3 className='text-[#1D2124] text-[18px] font-semibold font-gilroy mb-[20px]'>Data-Driven Optimization & Insights</h3>
                                <ul className='text-[#646464] text-[14px] font-medium font-gilroy2 leading-6 ml-[15px] mb-5'>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Machine Learning Insights: Leverage data analytics and machine learning algorithms to optimize campaign performance and gain actionable insights.</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Audience Segmentation & Retargeting: Segment audiences and personalize retargeting strategies based on real-time data analysis.</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Data-Driven Decision Making: Make informed decisions based on valuable insights into audience behavior, ad performance, and conversion metrics.</p></li>
                                </ul>
                            </div>
                            <div className='bg-[#fff8fa] xl:h-[490px] lg:h-[630px] md:h-[593px] rounded-[10px] py-6 px-4 hover:shadow-programeasure'>
                                <div className='w-full'></div>
                                <div className='mb-5 w-[50px] h-[50px]'><img src="/Ad_Format.png" alt="" /></div>
                                <div className='w-full'></div>
                                <h3 className='text-[#1D2124] text-[18px] font-semibold font-gilroy mb-[20px]'>Unified Buying</h3>
                                <ul className='text-[#646464] text-[14px] font-medium font-gilroy2 leading-6 ml-[15px] mb-5'>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Single Platform Management: Manage and execute media buys across all channels and formats with a centralized platform.</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Streamlined Workflow: Simplify campaign management and reporting with consolidated dashboards and workflows.</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Holistic Performance View: Gain a complete understanding of campaign performance with cross-channel attribution and measurement.</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Simplified Buying Process: Consolidate ad inventory and audience data within a single platform for effortless campaign setup.</p></li>
                                </ul>
                            </div>
                            <div className='bg-[#fff8fa] xl:h-[490px] lg:h-[630px] md:h-[593px] rounded-[10px] py-6 px-4 hover:shadow-programeasure'>
                                <div className='w-full'></div>
                                <div className='mb-5 w-[50px] h-[50px]'><img src="/Ad_Format.png" alt="" /></div>
                                <div className='w-full'></div>
                                <h3 className='text-[#1D2124] text-[18px] font-semibold font-gilroy mb-[20px]'>Advanced Bidding Strategies</h3>
                                <ul className='text-[#646464] text-[14px] font-medium font-gilroy2 leading-6 ml-[15px] mb-5'>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Flexible Bidding Options: Employ various bidding strategies like CPC, CPM, and CPA based on your campaign goals.</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Real-Time Bidding (RTB): Optimize bids in real-time based on auction dynamics and performance objectives with RTB technology.</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Efficient Budget Allocation: Utilize advanced bidding algorithms and predictive modeling for efficient campaign budget allocation.</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                        <p>Maximized ROI: Make bid adjustments based on targeted segments and device types to maximize your return on investment.</p></li>
                                </ul>
                            </div>
                            <div className='bg-[#fff8fa] xl:h-[490px] lg:h-[630px] md:h-[593px] rounded-[10px] py-6 px-4 hover:shadow-programeasure'>
                                <div className='w-full'>
                                    <div className='mb-5 w-[50px] h-[50px]'><img src="/Ad_Format.png" alt="" /></div></div>
                                <div className='w-full'>
                                    <h3 className='text-[#1D2124] text-[18px] font-semibold font-gilroy mb-[20px]'>Custom Marketing</h3>
                                    <ul className='text-[#646464] text-[14px] font-medium font-gilroy2 leading-6 ml-[15px] mb-5'>
                                        <li className='mb-2 flex items-start gap-1'>
                                            <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                            <p>Unlock the power of custom attribution models to accurately credit conversions across marketing touchpoints. This provides valuable insights for optimizing marketing spend and maximizing ROI.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='approach relative overflow-hidden'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
                    <div>
                        <h3 className='text-[28px] font-semibold text-white leading-[1.5em] font-gilroy'>AnalyticsLiv 4M Approach  for DV360</h3>
                    </div>
                    <div className='lg:flex items-center justify-start mt-10'>
                        <div className='lg:w-[40%] w-full flex items-center justify-center'>
                            <img src="/4M_Images_Transparent.png" alt="" className='lg:h-auto md:h-[400px]' />
                        </div>
                        <div className='grid md:grid-cols-2 items-start lg:justify-start gap-7 lg:w-[60%] w-full'>
                            <div className={`fs4m flex items-start gap-5 w-full max-[350px]:w-[285px] powerbox2 bg-[#0000001f] p-[25px] pt-6 border border-[#13131400] hover:shadow-mediadv360 rounded-[10px] ${isFs4mVisible ? 'xl:h-[260px] lg:h-[310px]' : 'h-[120px]'}`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer' onClick={toggleFs4mVisibility}>
                                        <div className={`flex items-center justify-between gap-5 text-[#ffffff] ${isFs4mVisible ? 'mb-4' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <div className='inbox relative mr-[13px]'>
                                                    <img src="/Market.png" alt="" className='h-12 lg:w-[60px] w-12' />
                                                </div>
                                                <h2 className='text-[15px] font-medium text-[#ffffff] leading-normal'>Audience Targeting (Market)</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFs4mVisible ? <FaChevronUp className='w-5 h-10' /> : <FaChevronDown className='w-5 h-10' />}
                                            </div>
                                        </div>
                                        {isFs4mVisible && (
                                            <p className='text-[13px] font-medium text-[#ffffff] leading-[1.7em]'>
                                                Leverage DV360's segmentation features to pinpoint your ideal customer using demographics, psychographics, and behavioral data.
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`sec4m flex items-start gap-5 w-full max-[350px]:w-[285px] powerbox2 bg-[#0000001f] p-[25px] pt-6 border border-[#13131400] hover:shadow-mediadv360 rounded-[10px] ${isSec4mVisible ? 'xl:h-[260px] lg:h-[310px]' : 'h-[120px]'}`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer' onClick={toggleSec4mVisibility}>
                                        <div className={`flex items-center justify-between gap-5 text-[#ffffff] ${isSec4mVisible ? 'mb-4' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <div className='inbox relative mr-[13px]'>
                                                    <img src="/Message.png" alt="" className='h-12 w-12' />
                                                </div>
                                                <h2 className='text-[15px] font-medium text-[#ffffff] leading-normal'>Messaging</h2>
                                            </div>
                                            <div className='clk'>
                                                {isSec4mVisible ? <FaChevronUp className='w-5 h-10' /> : <FaChevronDown className='w-5 h-10' />}
                                            </div>
                                        </div>
                                        {isSec4mVisible && (
                                            <div>
                                                <p className='text-[13px] font-medium text-[#ffffff] leading-[1.7em] mb-2'>Craft clear and persuasive messages that resonate with your target audience's needs, desires, and pain points.</p>
                                                <p className='text-[13px] font-medium text-[#ffffff] leading-[1.7em]'>Experiment with different ad formats, copy variations, and creative assets to optimize message impact.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`thr4m flex items-start gap-5 w-full max-[350px]:w-[285px] powerbox2 bg-[#0000001f] p-[25px] pt-6 border border-[#13131400] hover:shadow-mediadv360 rounded-[10px] ${isThr4mVisible ? 'xl:h-[285px] lg:h-[345px]' : 'h-[120px]'}`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer' onClick={() => toggleThr4mVisibility()}>
                                        <div className={`flex items-center justify-between gap-5 text-[#ffffff] ${isThr4mVisible ? 'mb-4' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <div className='inbox relative mr-[13px]'>
                                                    <img src="/Media.png" alt="" className='h-12 w-12' />
                                                </div>
                                                <h2 className='text-[15px] font-medium text-[#ffffff] leading-normal'>Strategic Media Selection</h2>
                                            </div>
                                            <div className='clk'>
                                                {isThr4mVisible ? <FaChevronUp className='w-5 h-10' /> : <FaChevronDown className='w-5 h-10' />}
                                            </div>
                                        </div>
                                        {isThr4mVisible && (
                                            <div>
                                                <p className='text-[13px] font-medium text-[#ffffff] leading-[1.7em] mb-2'>Choose the right media channels (programmatic deals, open auction, web/app inventory, etc.) based on audience habits, campaign goals, and budget.</p>
                                                <p className='text-[13px] font-medium text-[#ffffff] leading-[1.7em]'>DV360's extensive digital media inventory allows for precise targeting and efficient campaign delivery.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`fur4m flex items-start gap-5 w-full max-[350px]:w-[285px] powerbox2 bg-[#0000001f] p-[25px] pt-6 border border-[#13131400] hover:shadow-mediadv360 rounded-[10px] ${isFur4mVisible ? 'xl:h-[285px] lg:h-[345px]' : 'h-[120px]'}`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer' onClick={() => toggleFur4mVisibility()}>
                                        <div className={`flex items-center justify-between gap-5 text-[#ffffff] ${isFur4mVisible ? 'mb-4' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <div className='inbox relative mr-[13px]'>
                                                    <img src="/Measurment.png" alt="" className='h-12 xl:w-[65px] lg:w-[100px] w-[70px]' />
                                                </div>
                                                <h2 className='text-[15px] font-medium text-[#ffffff] leading-normal'>Data-Driven Optimization (Measurement)</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFur4mVisible ? <FaChevronUp className='w-5 h-10' /> : <FaChevronDown className='w-5 h-10' />}
                                            </div>
                                        </div>
                                        {isFur4mVisible && (
                                            <div>
                                                <p className='text-[13px] font-medium text-[#ffffff] leading-[1.7em] mb-2'>Utilize DV360's built-in reporting and analytics to track key metrics (reach, engagement, conversions, ROI) in real-time.</p>
                                                <p className='text-[13px] font-medium text-[#ffffff] leading-[1.7em]'>Gain insights into campaign performance, optimize strategies, and make data-driven decisions for future success</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#282833] homeftr relative overflow-hidden font-gilroy'>
                <div className='inrhomeftr relative'>
                    <div className='relative z-20 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                        <div className='flex items-center justify-start pb-7'>
                            <h3 className='text-[#efefef] text-[28px] font-semibold leading-[1.5em] not-italic pb-5'>Our Comprehensive DV360 Services:</h3>
                        </div>

                        <div className='lg:flex lg:flex-nowrap flex-wrap items-center hidden powerbox rounded-xl'>
                            <div className='text-black xl:w-[35%] lg:w-[35%] w-full mt-[11px]'>
                                <div className='p-8 pl-[25px] -mr-[30px] rounded-l-[10px] xl:w-[400px] xl:ml-auto'>
                                    <div onClick={() => setActivetab('1')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '1' ? 'border-t-[#0092f4ab]' : ''}`}>
                                        <div><img src="/Campaign Strategy and Setup white.png" alt="" className='h-10 w-10' /></div>
                                        <p >Campaign Strategy and Setup</p>
                                    </div>
                                    <div onClick={() => setActivetab('2')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '2' ? 'border-t-[#0092f4ab]' : ''}`}>
                                        <div><img src="/Audience Targeting white.png" alt="" className='h-10 w-10' /></div>
                                        <p>Audience Targeting</p>
                                    </div>
                                    <div onClick={() => setActivetab('3')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '3' ? 'border-t-[#0092f4ab]' : ''}`}>
                                        <div><img src="/Ad Format Optimization white.png" alt="" className='h-10 w-10' /></div>
                                        <p>Ad Format Optimization</p>
                                    </div>
                                    <div onClick={() => setActivetab('4')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '4' ? 'border-t-[#0092f4ab]' : ''}`}>
                                        <div><img src="/Real-Time Bidding white.png" alt="" className='h-10 w-10' /></div>
                                        <p>Real-Time Bidding (RTB) Expertise</p>
                                    </div>
                                    <div onClick={() => setActivetab('5')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '5' ? 'border-t-[#0092f4ab]' : ''}`}>
                                        <div><img src="/Continuous Campaign Management & Optimization white.png" alt="" className='h-10 w-[56px]' /></div>
                                        <p>Continuous Campaign Management & Optimization</p>
                                    </div>
                                    <div onClick={() => setActivetab('6')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '6' ? 'border-t-[#0092f4ab]' : ''}`}>
                                        <div><img src="/In-Depth Reporting & Analytics white.png" alt="" className='h-10 w-10' /></div>
                                        <p>In-Depth Reporting & Analytics</p>
                                    </div>
                                </div>
                            </div>

                            <div className='xl:w-[60%] lg:w-[65%] w-full h-[690px] flex items-start justify-center rounded-[15px] pt-5'>
                                <div id="tab1" className={`${activetab == 1 && 'block'} ${activetab != 1 && 'hidden'} relative py-[30px] px-[50px] text-base font-medium leading-8`}>
                                    <div className='relative'>
                                        <p className='text-[#efefef] text-[20px] font-semibold mb-5'>Campaign Strategy and Setup</p>
                                        <p className='text-[#878787]'>This phase involves a thorough analysis of the client's marketing objectives, target audience, and competitive landscape. We understand their goals and develop a comprehensive strategy for the programmatic campaigns. This strategy takes into account factors such as campaign scheduling, budget allocation, messaging tone, and creative assets. By leveraging data-driven insights, the team ensures that the campaigns are strategically aligned to achieve maximum impact and drive desired outcomes.</p>
                                        <div className=''>
                                            <Link href="/contact?id=programatic-advertising">
                                                <button className="bg-transparent border border-solid border-[#20dc868f] hover:bg-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab2" className={`${activetab == 2 && 'block'} ${activetab != 2 && 'hidden'} relative py-[30px] px-[50px] text-base font-medium leading-8`}>
                                    <div className='relative pl-1'>
                                        <p className='text-[#efefef] text-[20px] font-semibold mb-5'>Audience Targeting</p>
                                        <p className='text-[#878787]'>With DV360's sophisticated targeting capabilities, the service can precisely identify and reach the client's ideal audience segments. This involves segmenting the audience based on demographics, interests, browsing behaviour, location, and other relevant criteria. By using advanced targeting options such as audience lists, contextual targeting, and lookalike modelling, the service ensures that the client's message is delivered to the most relevant and receptive audience across various devices and channels. This targeted approach increases the likelihood of engagement and conversion, ultimately maximising the campaign's effectiveness.</p>
                                        <div className=''>
                                            <Link href="/contact?id=programatic-advertising">
                                                <button className="bg-transparent border border-solid border-[#20dc868f] hover:bg-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab3" className={`${activetab == 3 && 'block'} ${activetab != 3 && 'hidden'} relative py-[30px] px-[40px] text-base font-medium leading-8`}>
                                    <div className='relative pl-1'>
                                        <p className='text-[#efefef] text-[20px] font-semibold mb-5'>Ad Format Optimization</p>
                                        <p className='text-[#878787]'>The creative team focuses on designing ad formats that are specifically tailored for programmatic buying and created for maximum impact and engagement. This includes creating visually appealing ad creatives, compelling copywriting, and clear calls-to-action that resonate with the target audience. Additionally, the team conducts A/B testing and multivariate testing to identify the most effective ad variations and enhance performance further. By continuously refining and iterating on the ad formats, the service ensures that the client's ads stand out in the crowded digital landscape and drive meaningful interactions with the audience.</p>
                                        <div className=''>
                                            <Link href="/contact?id=programatic-advertising">
                                                <button className="bg-transparent border border-solid border-[#20dc868f] hover:bg-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab4" className={`${activetab == 4 && 'block'} ${activetab != 4 && 'hidden'} relative py-[30px] px-[50px] text-base font-medium leading-8`}>
                                    <p className='text-[#efefef] text-[20px] font-semibold mb-5'>Real-Time Bidding (RTB) Expertise</p>
                                    <p className='text-[#878787]'>RTB is a critical component of programmatic advertising, allowing advertisers to bid for ad placements in real-time auctions. The service leverages sophisticated bidding strategies and algorithms to participate in these auctions and secure optimal ad placements for the client. This involves evaluating bidding data, monitoring auction dynamics, and adjusting bidding strategies based on factors such as audience targeting, ad placement, and budget constraints. By optimizing bids in real-time, the service ensures that the client gets the most value out of their advertising budget and maximises the return on investment.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] hover:bg-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>

                                <div id="tab5" className={`${activetab == 5 && 'block'} ${activetab != 5 && 'hidden'} relative py-[30px] px-[50px] text-base font-medium leading-8`}>
                                    <p className='text-[#efefef] text-[20px] font-semibold mb-5'>Continuous Campaign Management & Optimization</p>
                                    <p className='text-[#878787]'>This phase involves ongoing monitoring, analysis, and optimization of the campaigns to ensure peak performance and efficiency. We employ a proactive approach to campaign management, continuously monitoring key performance indicators such as click-through rates, conversion rates, cost-per-acquisition, and return on ad spend. Based on performance data and insights, the team makes data-driven optimizations such as adjusting targeting parameters, refining ad creatives, reallocating budget to top-performing channels, and implementing bidding strategy changes. This iterative optimization process ensures that the campaigns remain competitive, relevant, and effective throughout their lifecycle, increasing the client's advertising ROI.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] hover:bg-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>

                                <div id="tab6" className={`${activetab == 6 && 'block'} ${activetab != 6 && 'hidden'} relative py-[30px] px-[50px] text-base font-medium leading-8`}>
                                    <p className='text-[#efefef] text-[20px] font-semibold mb-5'>In-Depth Reporting & Analytics</p>
                                    <p className='text-[#878787]'>The service provides comprehensive reports and analytics that offer actionable insights into campaign performance and effectiveness. These reports include detailed metrics such as impressions, clicks, conversions, engagement rates, and ROI, presented in intuitive dashboards and visualizations. Additionally, the service conducts in-depth analysis to identify trends, patterns, and opportunities for improvement. <br /> <br />The client can use these insights to track campaign success, measure the impact of their advertising efforts, and make informed decisions for future optimizations and strategic planning. By providing transparent and actionable reporting, the service helps the client understand the performance drivers of their campaigns and change their marketing strategies accordingly.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] hover:bg-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-8">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex flex-col justify-start max-w-md m-auto lg:hidden">
                            <div className="panel_list powerbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivetab('1')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '1' ? 'border-t-[#0092f4ab]' : ''}`}>
                                    <div><img src="/Campaign Strategy and Setup white.png" alt="" className='h-10 w-10' /></div>
                                    <p >Campaign Strategy and Setup</p>
                                </div>
                                <div id="tab1" className={`${activetab == 1 && 'items-center justify-center'} ${activetab != 1 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#878787]'>This phase involves a thorough analysis of the client's marketing objectives, target audience, and competitive landscape. We understand their goals and develop a comprehensive strategy for the programmatic campaigns. This strategy takes into account factors such as campaign scheduling, budget allocation, messaging tone, and creative assets. By leveraging data-driven insights, the team ensures that the campaigns are strategically aligned to achieve maximum impact and drive desired outcomes.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] hover:bg-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list powerbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivetab('2')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '2' ? 'border-t-[#0092f4ab]' : ''}`}>
                                    <div><img src="/Audience Targeting white.png" alt="" className='h-10 w-10' /></div>
                                    <p>Audience Targeting</p>
                                </div>
                                <div id="tab2" className={`${activetab == 2 && ' items-center justify-center'} ${activetab != 2 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#878787]'>With DV360's sophisticated targeting capabilities, the service can precisely identify and reach the client's ideal audience segments. This involves segmenting the audience based on demographics, interests, browsing behaviour, location, and other relevant criteria. By using advanced targeting options such as audience lists, contextual targeting, and lookalike modelling, the service ensures that the client's message is delivered to the most relevant and receptive audience across various devices and channels. This targeted approach increases the likelihood of engagement and conversion, ultimately maximising the campaign's effectiveness.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] hover:bg-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list powerbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivetab('3')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '3' ? 'border-t-[#0092f4ab]' : ''}`}>
                                    <div><img src="/Ad Format Optimization white.png" alt="" className='h-10 w-10' /></div>
                                    <p>Ad Format Optimization</p>
                                </div>
                                <div id="tab3" className={`${activetab == 3 && 'items-center justify-center'} ${activetab != 3 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#878787]'>The creative team focuses on designing ad formats that are specifically tailored for programmatic buying and created for maximum impact and engagement. This includes creating visually appealing ad creatives, compelling copywriting, and clear calls-to-action that resonate with the target audience. Additionally, the team conducts A/B testing and multivariate testing to identify the most effective ad variations and enhance performance further. By continuously refining and iterating on the ad formats, the service ensures that the client's ads stand out in the crowded digital landscape and drive meaningful interactions with the audience.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] hover:bg-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list powerbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivetab('4')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '4' ? 'border-t-[#0092f4ab]' : ''}`}>
                                    <div><img src="/Real-Time Bidding white.png" alt="" className='h-10 w-10' /></div>
                                    <p>Real-Time Bidding (RTB) Expertise</p>
                                </div>
                                <div id="tab4" className={`${activetab == 4 && ' items-center justify-center'} ${activetab != 4 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#878787]'>RTB is a critical component of programmatic advertising, allowing advertisers to bid for ad placements in real-time auctions. The service leverages sophisticated bidding strategies and algorithms to participate in these auctions and secure optimal ad placements for the client. This involves evaluating bidding data, monitoring auction dynamics, and adjusting bidding strategies based on factors such as audience targeting, ad placement, and budget constraints. By optimizing bids in real-time, the service ensures that the client gets the most value out of their advertising budget and maximises the return on investment.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] hover:bg-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list powerbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivetab('5')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '5' ? 'border-t-[#0092f4ab]' : ''}`}>
                                    <div><img src="/Continuous Campaign Management & Optimization white.png" alt="" className='h-10 w-[56px]' /></div>
                                    <p>Continuous Campaign Management & Optimization</p>
                                </div>
                                <div id="tab5" className={`${activetab == 5 && ' items-center justify-center'} ${activetab != 5 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#878787]'>This phase involves ongoing monitoring, analysis, and optimization of the campaigns to ensure peak performance and efficiency. We employ a proactive approach to campaign management, continuously monitoring key performance indicators such as click-through rates, conversion rates, cost-per-acquisition, and return on ad spend. Based on performance data and insights, the team makes data-driven optimizations such as adjusting targeting parameters, refining ad creatives, reallocating budget to top-performing channels, and implementing bidding strategy changes. This iterative optimization process ensures that the campaigns remain competitive, relevant, and effective throughout their lifecycle, increasing the client's advertising ROI.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] hover:bg-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list powerbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivetab('6')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '6' ? 'border-t-[#0092f4ab]' : ''}`}>
                                    <div><img src="/In-Depth Reporting & Analytics white.png" alt="" className='h-10 w-10' /></div>
                                    <p>In-Depth Reporting & Analytics</p>
                                </div>
                                <div id="tab6" className={`${activetab == 6 && ' items-center justify-center'} ${activetab != 6 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#878787]'>The service provides comprehensive reports and analytics that offer actionable insights into campaign performance and effectiveness. These reports include detailed metrics such as impressions, clicks, conversions, engagement rates, and ROI, presented in intuitive dashboards and visualizations. Additionally, the service conducts in-depth analysis to identify trends, patterns, and opportunities for improvement.<br />The client can use these insights to track campaign success, measure the impact of their advertising efforts, and make informed decisions for future optimizations and strategic planning. By providing transparent and actionable reporting, the service helps the client understand the performance drivers of their campaigns and change their marketing strategies accordingly.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] hover:bg-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className=' relative prograchoose overflow-hidden'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
                    <div>
                        <h3 className='text-[28px] font-gilroy font-semibold text-[#18265b] leading-[1.5em]'>Why Choose AnalyticsLiv for DV360?</h3>
                    </div>
                    <div className=' py-7 grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                        <div className='fs border-[3px] border-[#0000] border-solid hover:border-t-[#0371ff] shadow-mediadv360 rounded-b-[15px] p-5'>
                            <div>
                                <img src="/Data-Driven Approach blue.png" alt="" className='h-16 w-16' />
                                <h6 className='text-base text-txt font-gilroy font-semibold mt-3 mb-5 leading-[27px]'>Data-Driven Approach</h6>
                            </div>
                            <p className='text-[13px] font-gilroy2 font-medium leading-[32px]'>We don't believe in guesswork. We leverage data to inform every step of the campaign process, from audience targeting to creative optimization and performance measurement.</p>
                        </div>
                        <div className='sd border-[3px] border-[#0000] border-solid hover:border-t-[#0371ff] shadow-mediadv360 rounded-b-[15px] p-5'>
                            <div>
                                <img src="/Transparency You Can Trust blue.png" alt="" className='h-16 w-16' />
                                <h6 className='text-base text-txt font-gilroy font-semibold mt-3 mb-5 leading-[27px]'>Transparency You Can Trust</h6>
                            </div>
                            <p className='text-[13px] font-gilroy2 font-medium leading-[32px]'>We prioritize clear communication and provide you with real-time insights into campaign performance and budget allocation. Regular reports keep you informed and empowered to make data-driven decisions.</p>
                        </div>
                        <div className='trd border-[3px] border-[#0000] border-solid hover:border-t-[#0371ff] shadow-mediadv360 rounded-b-[15px] p-5'>
                            <div>
                                <img src="/Performance at the Forefront blue.png" alt="" className='h-16 w-16' />
                                <h6 className='text-base text-txt font-gilroy font-semibold mt-3 mb-5 leading-[27px]'>Performance at the Forefront</h6>
                            </div>
                            <p className='text-[13px] font-gilroy2 font-medium leading-[32px]'>Our focus is on exceeding your expectations. We are committed to delivering measurable results and maximizing your return on investment (ROI).</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='programeasurement relative font-gilroy overflow-hidden'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
                    <div className='flex md:flex-nowrap flex-wrap items-center md:justify-between justify-center gap-5'>
                        <div className='lg:w-1/2 md:w-[35%] w-[70%] md:mt-10'>
                            <div className='flex items-center justify-center lg:mt-0'>
                                <img src="/DV_Infographics_Transparent.png" alt="" className=' lg:h-[400px]' />
                            </div>
                        </div>
                        <div className='relative lg:w-1/2 md:w-[65%] w-full lg:mt-0 mt-10'>
                            <div className='flex items-center justify-center md:mb-10 mb-5'>
                                <h3 className='xl:text-[30px] lg:text-[25px] text-[22px] font-semibold text-txt leading-[1.5em]'>Measurement - Integrations Available</h3>
                            </div>
                            <div className='flex items-center justify-center'>
                                <Link href="/contact?id=programatic-advertising">
                                    <button className="bg-transparent border border-solid border-txt text-txt hover:bg-txt hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='progracont relative overflow-hidden'>
                <div className='relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20'>
                    <div className='flex md:flex-nowrap flex-wrap items-center mx-auto'>
                        <div className='md:w-[66%] w-full'>
                            <div>
                                <div>
                                    <div><h3 className='text-[#ffffff] text-[40px] leading-8 md:mb-[20px] mb-6 font-gilroy font-semibold'>Contact us</h3></div>
                                    <div>
                                        <div className='text-[#ffffff] text-base leading-8 md:mb-[15px] mb-6 font-gilroy2 font-medium'>
                                            <p className='text-[24px] mb-3'> Unlock the power of Display & Video 360 </p>
                                            Schedule a free consultation with our experts and discover <br /> how we can elevate your campaigns
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

            <section className='progracasestudy relative font-gilroy overflow-hidden'>
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
                                    <a href="/case-studies/ua-to-ga4-migration-for-a-website" className='lg:flex gap-5'>
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

        </>
    )
}

export default service_A
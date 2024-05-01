'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from "framer-motion";


const datascience = () => {

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
    // // // // // INSIGHT SECTION // // // // // // // // // //   
    const [isFs4mVisible, setIsFs4mVisible] = useState(false);
    const [isSec4mVisible, setIsSec4mVisible] = useState(false);
    const [isThr4mVisible, setIsThr4mVisible] = useState(false);
    const [isFur4mVisible, setIsFur4mVisible] = useState(false);
    const [isFiv4mVisible, setIsFiv4mVisible] = useState(false);
    const [isSix4mVisible, setIsSix4mVisible] = useState(false);
    const [isSeven4mVisible, setIsSeven4mVisible] = useState(false);

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

    const toggleFiv4mVisibility = () => {
        setIsFiv4mVisible(prevState => !prevState);
    };

    const toggleSix4mVisibility = () => {
        setIsSix4mVisible(prevState => !prevState);
    };

    const toggleSeven4mVisibility = () => {
        setIsSeven4mVisible(prevState => !prevState);
    };
    // // // // // FAQ SECTION // // // // // // // // // //   
    const [isFaqfstVisible, setIsFaqfstVisible] = useState(false);
    const [isFaqsecVisible, setIsFaqsecVisible] = useState(false);
    const [isFaqthrdVisible, setIsFaqthrdVisible] = useState(false);
    const [isFaqfurVisible, setIsFaqfurVisible] = useState(false);
    const [isFaqfivVisible, setIsFaqfivVisible] = useState(false);

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
    const toggleFaqfivVisibility = () => {
        setIsFaqfivVisible(prevState => !prevState);
    };

    const [toggle1, setToggle1] = useState(true);

    return (
        <>
            <Head>
                <title>AnalyticsLiv - Analytics Data-Science</title>
                <meta name="description" content="Experts in GA4, DV360, Google Ads, Meta Ads, Microsoft Ads" />
                <link rel="canonical" href="https://www.analyticsliv.com/services/data-science"></link>
            </Head>
            <section className='dtshome w-full relative font-gilroy overflow-hidden'>
                <div className='h-full'>
                    <div className="relative px-4 md:px-12 pt-8 md:pt-[10px] pb-8 md:pb-16 h-full z-20">
                        <div className="z-10 flex lg:flex-nowrap items-center flex-wrap justify-between gap-7 pb-8">
                            <div className="w-full lg:w-1/2 lg:order-1 order-2">
                                <h1 className="text-[32px] leading-[1.7em] font-gilroy font-semibold text-maintext mb-[10px]">
                                    Data-Driven Solutions for Smarter Business Growth
                                </h1>
                                <h2 className="font-gilroy text-[20px] leading-[1.7em] font-medium text-maintext mb-5">Harness the Power of Advanced Analytics to Gain a Competitive Edge</h2>
                                {/* <p className="text-base font-normal leading-[28px] font-gilroy mb-[10px]">
                                    In today's data-rich business environment, leveraging advanced analytics and data science is crucial for staying ahead of the competition. At Analyticsliv, we empower organizations to transform raw data into actionable insights, driving strategic decision-making and measurable business growth. Our comprehensive suite of Data Science and Solutions is designed to help you unlock the full potential of your data, optimize processes, and achieve unparalleled success.
                                </p> */}
                                <div className='flex max-[425px]:flex-wrap flex-nowrap items-center lg:justify-start justify-center gap-5'>
                                    <Link href="/contact?id=programatic-advertising">
                                        <button className="bg-[#30486ae3] text-white w-[208px] hover:bg-white border border-solid hover:border-[#30486ae3] hover:text-[#30486ae3] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">REQUEST A DEMO</button>
                                    </Link>
                                    <Link href="/contact?id=programatic-advertising">
                                        <button className="bg-[#30486ae3] text-white w-[208px] hover:bg-white border border-solid hover:border-[#30486ae3] hover:text-[#30486ae3] text-base font-normal tracking-wider rounded-xl py-3 px-6 max-[425px]:mt-0 mt-6">CONTACT US</button>
                                    </Link>
                                </div>
                            </div>
                            <div className=" w-full lg:w-1/2 flex items-center lg:justify-end justify-center lg:order-2 order-1">
                                <img src="/Data_Science_Main_Img_Updated.png" alt="" className='h-[400px]' />
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <h2 className='text-center font-bold font-gilroy text-base text-maintext leading-[24px]'>Trusted by Organisations Worldwide</h2>
                            </div>
                            <div className='w-[90%] m-auto'>
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
            <section className='dtsabout font-gilroy'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div>
                        <div className='flex items-center justify-center'>
                            <h2 className='text-maintext lg:text-[28px] text-2xl font-semibold not-italic text-center'>Empowering Businesses with Data: AnalyticsLiv's Comprehensive Suite</h2>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between items-center'>
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
                            <div className='lg:w-2/5 lg:pt-0 pt-5'>
                                <p className='text-[#000] text-base font-normal leading-[30px] not-italic pb-10'> <span className='mt-[18px] block'>In today's data-rich business environment, leveraging advanced analytics and data science is crucial for staying ahead of the competition. At Analyticsliv, we empower organizations to transform raw data into actionable insights, driving strategic decision-making and measurable business growth. Our comprehensive suite of Data Science and Solutions is designed to help you unlock the full potential of your data, optimize processes, and achieve unparalleled success.</span></p>
                                <div className='flex items-center justify-center'>
                                    <a href="/services"> <button className='butn'>Our Services</button> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='dtssolus relative overflow-hidden font-gilroy'>

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
                            <h2 className='text-maintext lg:text-[28px] text-2xl font-gilroy font-semibold not-italic text-left block'>Our Solutions</h2>
                        </div>
                        <div className='grid xl:grid-cols-3 md:grid-cols-2 items-center gap-10 pt-8'>
                            <div className='firstsolts flex justify-center'>
                                <div className='relative group rounded-[10px] border border-solid border-[#EFEFEF] hover:shadow-serviceoffer p-5 lg:h-[390px] md:h-[465px] w-[335px] md:w-full'>
                                    <div className="flex items-start justify-start gap-4 pb-6">
                                        <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                            <Image
                                                src="/Lead_Scxoring.png"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0'
                                            />
                                        </div>
                                        <h6 className='text-[20px] font-semibold text-[#000] leading-normal'>Lead Scoring: Intelligent Lead Scoring</h6>
                                    </div>
                                    <ul className='grid gap-4 pb-[75px]'>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Revolutionize your lead prioritization with machine learning</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Accurately identify high-value leads for targeted marketing efforts</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Increase conversion rates and maximize ROI</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#" className='absolute bottom-[3%] lg:right-[28%] md:right-[15%]'>
                                        <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                            <div className='flex items-center justify-center gap-[5px]'>
                                                <button className='font-medium text-homepagebtn group-hover:text-white'>Explore Now</button>
                                                <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='scndsolst flex justify-center'>
                                <div className='relative group rounded-[10px] border border-solid border-[#EFEFEF] hover:shadow-serviceoffer p-5 lg:h-[390px] md:h-[465px] w-[335px] md:w-full'>
                                    <div className="flex items-start justify-start gap-4 pb-6">
                                        <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                            <Image
                                                src="/Samrt_Match_Recommand_Engine.png"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0'
                                            />
                                        </div>
                                        <h6 className='text-[20px] font-semibold text-[#000] leading-normal'>SmartMatch: Personalized Recommendation Engine</h6>
                                    </div>
                                    <ul className='grid gap-4 pb-[75px]'>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Deliver tailored product or content recommendations to customers</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Enhance user experiences and boost engagement</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Drive incremental revenue through personalized offerings</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="" className='absolute bottom-[3%] lg:right-[28%] md:right-[15%]'>
                                        <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                            <div className='flex items-center justify-center gap-[5px]'>
                                                <button className='font-medium text-homepagebtn group-hover:text-white'>Explore Now</button>
                                                <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='thirdsolst flex justify-center'>
                                <div className='relative group rounded-[10px] border border-solid border-[#EFEFEF] hover:shadow-serviceoffer p-5 xl:h-[390px] lg:h-[438px] md:h-[630px] w-[335px] md:w-full'>
                                    <div className="flex items-start justify-start gap-4 pb-6">
                                        <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                            <Image
                                                src="/MarketMix _Advance_media_Modeling.png"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0'
                                            />
                                        </div>
                                        <h6 className='text-[20px] font-semibold text-[#000] leading-normal'>MarketMix: Advanced Media Mix Modeling</h6>
                                    </div>
                                    <ul className='grid gap-4 pb-[75px]'>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Gain in-depth insights into the impact of marketing investments</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Optimize budget allocation across channels for maximum ROI</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Make data-driven decisions to refine marketing strategies</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="" className='absolute bottom-[3%] lg:right-[28%] md:right-[15%]'>
                                        <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                            <div className='flex items-center justify-center gap-[5px]'>
                                                <button className='font-medium text-homepagebtn group-hover:text-white'>Explore Now</button>
                                                <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='foursolst flex justify-center'>
                                <div className='relative group rounded-[10px] border border-solid border-[#EFEFEF] hover:shadow-serviceoffer p-5 xl:h-[510px] lg:h-[438px] md:h-[630px] w-[335px] md:w-full'>
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
                                        <h6 className='text-[20px] font-semibold text-[#000] leading-normal'>Customer Segmentation</h6>
                                    </div>
                                    <ul className='grid gap-4 pb-[75px]'>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Ability to handle large amounts of data and make predictions based on that data. </h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>The tool can update segments automatically as new data becomes available, providing a more accurate and up-to-date view of customer behavior</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Delivering campaign-level reporting and analysis across multiple source systems
                                                        Limited insights hindered high-value segment identification, impacting campaign optimization.</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="/services/customer-segmentation" className='absolute bottom-[3%] lg:right-[28%] md:right-[15%]'>
                                        <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                            <div className='flex items-center justify-center gap-[5px]'>
                                                <button className='font-medium text-homepagebtn group-hover:text-white'>Explore Now</button>
                                                <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='fivesolst flex justify-center'>
                                <div className='relative group rounded-[10px] border border-solid border-[#EFEFEF] hover:shadow-serviceoffer p-5 xl:h-[510px] lg:h-[390px] md:h-[465px] w-[335px] md:w-full'>
                                    <div className="flex items-start justify-start gap-4 pb-6">
                                        <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                            <Image
                                                src="/DataFlow_Custom_Data_Pipeline.png"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0'
                                            />
                                        </div>
                                        <h6 className='text-[20px] font-semibold text-[#000] leading-normal'>DataFlow: Custom Data Pipeline Development</h6>
                                    </div>
                                    <ul className='grid gap-4 pb-[75px]'>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Streamline and automate data processing workflows</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Seamlessly integrate pipelines with existing systems</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Ensure efficient data management and modeling processes</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="" className='absolute bottom-[3%] lg:right-[28%] md:right-[15%]'>
                                        <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                            <div className='flex items-center justify-center gap-[5px]'>
                                                <button className='font-medium text-homepagebtn group-hover:text-white'>Explore Now</button>
                                                <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='sixsolst flex justify-center'>
                                <div className='relative group rounded-[10px] border border-solid border-[#EFEFEF] hover:shadow-serviceoffer p-5 xl:h-[510px] lg:h-[390px] md:h-[465px] w-[335px] md:w-full'>
                                    <div className="flex items-start justify-start gap-4 pb-6">
                                        <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                            <Image
                                                src="/Journey_Map_user_journey.png"
                                                width={30}
                                                height={30}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0'
                                            />
                                        </div>
                                        <h6 className='text-[20px] font-semibold text-[#000] leading-normal'>JourneyMap: User Journey Analysis and Optimization</h6>
                                    </div>
                                    <ul className='grid gap-4 pb-[75px]'>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Uncover valuable insights into customer behavior and preferences</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Identify friction points and opportunities for improvement</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src="/check.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className='w-[18px] h-[18px] mt-1'
                                                />
                                                <div>
                                                    <h6 className='text-[#000] text-base font-medium leading-normal'>Enhance user experiences and drive conversions</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="" className='absolute bottom-[3%] lg:right-[28%] md:right-[15%]'>
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
            <section className='powerup bg-[#282833] insight relative overflow-hidden font-gilroy'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
                    <div>
                        <h3 className='text-[28px] font-semibold text-white leading-[1.5em] font-gilroy mb-2'>The INSIGHT Methodology: Your Roadmap to Data-Driven Success</h3>
                    </div>
                    <p className='text-[20px] font-medium mt-6 text-white leading-[1.5em] font-gilroy'>At Analyticsliv, we've developed a proven methodology to guide our Data Science and Solutions engagements. Our INSIGHT framework ensures a structured, comprehensive approach to solving your toughest challenges and driving measurable results.</p>
                    <div className='md:flex items-center justify-start mt-10'>
                        <div className='flex md:w-[60%] w-full'>
                            <div className='flex flex-col items-start lg:justify-start justify-center gap-[10px] w-full'>
                                <div className={`fs4m flex items-start gap-5 w-full max-[350px]:w-[285px] powerbox2 p-[15px] border border-[#13131400] hover:shadow-mediadv360 h-auto rounded-[10px] ${isFs4mVisible ? 'bg-white' : 'bg-[#0000001f]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full' onClick={toggleFs4mVisibility}>
                                            <div className={`flex items-center w-full justify-between gap-5 text-${isFs4mVisible ? 'black' : 'white'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <h2 className='text-[18px] font-semibold leading-normal font-gilroy'>Investigate</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isFs4mVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isFs4mVisible && (
                                                <li className='flex items-start gap-1 p-[10px] pb-[5px] pl-0'>
                                                    <span className='text-[#de668a] mt-[3px]'><FaCheck /></span>
                                                    <p className='text-[15px] font-medium leading-[1.7em] font-gilroy2'>
                                                        We dive deep into your business, understanding your goals, challenges, and data landscape to lay the foundation for success.
                                                    </p>
                                                </li>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`sec4m flex items-start gap-5 w-full max-[350px]:w-[285px] powerbox2 p-[15px] border border-[#13131400] hover:shadow-mediadv360 h-auto rounded-[10px] ${isSec4mVisible ? 'bg-white' : 'bg-[#0000001f]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full' onClick={toggleSec4mVisibility}>
                                            <div className={`flex items-center justify-between gap-5 text-${isSec4mVisible ? 'black' : 'white'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <h2 className='text-[18px] font-semibold leading-normal font-gilroy'>Navigate</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isSec4mVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isSec4mVisible && (
                                                <li className='flex items-start gap-1 p-[10px] pb-[5px] pl-0'>
                                                    <span className='text-[#de668a] mt-[3px]'><FaCheck /></span>
                                                    <p className='text-[15px] font-medium leading-[1.7em] font-gilroy2'>Our experts navigate your data, identifying key sources, quality issues, and opportunities for integration and enrichment.</p>
                                                </li>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`thr4m flex items-start gap-5 w-full max-[350px]:w-[285px] powerbox2 p-[15px] border border-[#13131400] hover:shadow-mediadv360 h-auto rounded-[10px] ${isThr4mVisible ? 'bg-white' : 'bg-[#0000001f]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full' onClick={() => toggleThr4mVisibility()}>
                                            <div className={`flex items-center justify-between gap-5 text-${isThr4mVisible ? 'black' : 'white'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <h2 className='text-[18px] font-semibold leading-normal font-gilroy'>Strategize</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isThr4mVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isThr4mVisible && (
                                                <li className='flex items-start gap-1 p-[10px] pb-[5px] pl-0'>
                                                    <span className='text-[#de668a] mt-[3px]'><FaCheck /></span>
                                                    <p className='text-[15px] font-medium leading-[1.7em] font-gilroy2'>We develop a tailored strategy aligned with your objectives, considering factors such as algorithms, models, and infrastructure needs.</p>
                                                </li>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`fur4m flex items-start gap-5 w-full max-[350px]:w-[285px] powerbox2 p-[15px] border border-[#13131400] hover:shadow-mediadv360 h-auto rounded-[10px] ${isFur4mVisible ? 'bg-white' : 'bg-[#0000001f]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full' onClick={() => toggleFur4mVisibility()}>
                                            <div className={`flex items-center justify-between gap-5 text-${isFur4mVisible ? 'black' : 'white'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <h2 className='text-[18px] font-semibold leading-normal font-gilroy'>Implement</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isFur4mVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isFur4mVisible && (
                                                <div className='mb-2 p-[10px] pl-0'>
                                                    <li className=' flex items-start gap-1 '>
                                                        <span className='text-[#de668a] mt-[3px]'><FaCheck /></span>
                                                        <p className='text-[15px] font-medium leading-[1.7em] font-gilroy2'>Our team implements the solution, leveraging cutting-edge tools and techniques to build robust, scalable models and pipelines.
                                                        </p>
                                                    </li>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`fiv4m flex items-start gap-5 w-full max-[350px]:w-[285px] powerbox2 p-[15px] border border-[#13131400] hover:shadow-mediadv360 h-auto rounded-[10px] ${isFiv4mVisible ? 'bg-white' : 'bg-[#0000001f]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full' onClick={toggleFiv4mVisibility}>
                                            <div className={`flex items-center w-full justify-between gap-5 text-${isFiv4mVisible ? 'black' : 'white'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <h2 className='text-[18px] font-semibold leading-normal font-gilroy'>Gauge</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isFiv4mVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isFiv4mVisible && (
                                                <li className='flex items-start gap-1 p-[10px] pb-[5px] pl-0'>
                                                    <span className='text-[#de668a] mt-[3px]'><FaCheck /></span>
                                                    <p className='text-[15px] font-medium leading-[1.7em] font-gilroy2'>
                                                        We continuously monitor and evaluate the performance of the implemented solution, measuring its impact on your key metrics.
                                                    </p>
                                                </li>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`six4m flex items-start gap-5 w-full max-[350px]:w-[285px] powerbox2 p-[15px] border border-[#13131400] hover:shadow-mediadv360 h-auto rounded-[10px] ${isSix4mVisible ? 'bg-white' : 'bg-[#0000001f]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full' onClick={toggleSix4mVisibility}>
                                            <div className={`flex items-center justify-between gap-5 text-${isSix4mVisible ? 'black' : 'white'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <h2 className='text-[18px] font-semibold leading-normal font-gilroy'>Hone</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isSix4mVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isSix4mVisible && (
                                                <li className='flex items-start gap-1 p-[10px] pb-[5px] pl-0'>
                                                    <span className='text-[#de668a] mt-[3px]'><FaCheck /></span>
                                                    <p className='text-[15px] font-medium leading-[1.7em] font-gilroy2'>Through iterative refinements and optimization, we hone the solution to ensure ongoing accuracy, reliability, and value delivery.</p>
                                                </li>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`thr4m flex items-start gap-5 w-full max-[350px]:w-[285px] powerbox2 p-[15px] border border-[#13131400] hover:shadow-mediadv360 h-auto rounded-[10px] ${isSeven4mVisible ? 'bg-white' : 'bg-[#0000001f]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full' onClick={() => toggleSeven4mVisibility()}>
                                            <div className={`flex items-center justify-between gap-5 text-${isSeven4mVisible ? 'black' : 'white'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <h2 className='text-[18px] font-semibold leading-normal font-gilroy'>Transform</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isSeven4mVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isSeven4mVisible && (
                                                <li className='flex items-start gap-1 p-[10px] pb-[5px] pl-0'>
                                                    <span className='text-[#de668a] mt-[3px]'><FaCheck /></span>
                                                    <p className='text-[15px] font-medium leading-[1.7em] font-gilroy2'>By embedding data-driven insights into your decision-making processes, we help transform your organization and drive long-term success.</p>
                                                </li>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[40%] w-full flex items-center justify-center md:mt-0 mt-4'>
                            <img src="/Data_Science_Sub_Img_Updated.png" alt="" className='md:h-auto h-[400px]' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='dtwhychoos relative prograchoose overflow-hidden font-gilroy'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
                    <div>
                        <h3 className='text-[28px] font-gilroy font-semibold text-[#18265b] leading-[1.5em]'>Why Choose Analyticsliv?</h3>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className=' py-7 grid lg:grid-cols-4 md:grid-cols-2 gap-10'>
                            <div className='fs border-[3px] border-[#0000] border-solid hover:border-t-[#0371ff] shadow-mediadv360 rounded-b-[15px] p-5'>
                                <div>
                                    <img src="/Data-Driven Approach blue.png" alt="" className='h-16 w-16' />
                                    <h6 className='text-base text-txt font-gilroy font-semibold mt-3 leading-[27px]'>Cutting-edge data science techniques combined with deep industry expertise</h6>
                                </div>
                            </div>
                            <div className='sd border-[3px] border-[#0000] border-solid hover:border-t-[#0371ff] shadow-mediadv360 rounded-b-[15px] p-5'>
                                <div>
                                    <img src="/Transparency You Can Trust blue.png" alt="" className='h-16 w-16' />
                                    <h6 className='text-base text-txt font-gilroy font-semibold mt-3 leading-[27px]'>Collaborative approach to understanding your unique challenges and goals</h6>
                                </div>
                            </div>
                            <div className='trd border-[3px] border-[#0000] border-solid hover:border-t-[#0371ff] shadow-mediadv360 rounded-b-[15px] p-5'>
                                <div>
                                    <img src="/Performance at the Forefront blue.png" alt="" className='h-16 w-16' />
                                    <h6 className='text-base text-txt font-gilroy font-semibold mt-3 leading-[27px]'>Tailored solutions that drive tangible business value and measurable results</h6>
                                </div>
                            </div>
                            <div className='trd border-[3px] border-[#0000] border-solid hover:border-t-[#0371ff] shadow-mediadv360 rounded-b-[15px] p-5'>
                                <div>
                                    <img src="/Data-Driven Approach blue.png" alt="" className='h-16 w-16' />
                                    <h6 className='text-base text-txt font-gilroy font-semibold mt-3 leading-[27px]'>Continuous optimization and support to ensure long-term success</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='dtscasestudy progracasestudy relative font-gilroy overflow-hidden font-gilroy'>
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
                                    <div><h3 className='text-[#ffffff] text-[30px] leading-8 md:mb-[20px] mb-6 font-gilroy font-semibold'>Contact us</h3></div>
                                    <div>
                                        <div className='text-[#ffffff] text-base leading-8 md:mb-[15px] mb-6 font-gilroy2 font-medium'>
                                            <p className='text-[22px] mb-3'>Unlock the power of Data Science & Solution</p>
                                            Schedule a free consultation with our experts and discover <br /> how we can elevate your business
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[33%] w-full'>
                            <div className='p-[10px] pl-0'>
                                <div className='w-full flex justify-center'>
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
            <section className='dtsfaq crofaq relative overflow-hidden font-gilroy'>
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
                                                <h2 className='text-[17px] font-medium leading-normal'>How can data science solutions benefit my business?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqfstVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqfstVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                Data science solutions enable you to extract valuable insights from your data, make informed decisions, optimize processes, and gain a competitive edge. By leveraging advanced analytics and machine learning, you can identify opportunities, solve complex problems, and drive measurable business growth.
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
                                                <h2 className='text-[17px] font-medium leading-normal'>What sets Analyticsliv's Data Science and Solutions apart?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqsecVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqsecVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                At Analyticsliv, we combine cutting-edge data science techniques with deep industry expertise to deliver tailored solutions that address your unique challenges. Our collaborative approach ensures a thorough understanding of your goals, enabling us to provide impactful solutions that drive tangible results.
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
                                                <h2 className='text-[17px] font-medium leading-normal'>Do I need technical expertise to implement your solutions?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqthrdVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqthrdVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                No, you don't need technical expertise to benefit from our Data Science and Solutions. Our team of experts handles the entire process, from data integration and model development to deployment and ongoing optimization. We provide comprehensive support and training to ensure seamless adoption and long-term success.
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
                            <div className={`faqfiv flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full text-[#000000]' onClick={toggleFaqfivVisibility}>
                                        <div className={`flex items-center w-full justify-between gap-5 ${isFaqfivVisible ? 'mb-[10px]' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <h2 className='text-[17px] font-medium leading-normal'>How does your INSIGHT methodology ensure the success of Data Science and Solutions projects?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqfivVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqfivVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                Our INSIGHT methodology provides a structured framework for delivering Data Science and Solutions that drive measurable results. By following this comprehensive approach, we ensure a deep understanding of your business, develop tailored strategies, implement robust solutions, and continuously optimize for long-term success.
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

export default datascience

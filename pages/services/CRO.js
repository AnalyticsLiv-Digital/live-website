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

const cro = () => {

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

    // // // // // FUEL SECTION // // // // // // // // // //   
    const [isFs4mVisible, setIsFs4mVisible] = useState(false);
    const [isSec4mVisible, setIsSec4mVisible] = useState(false);
    const [isThr4mVisible, setIsThr4mVisible] = useState(false);
    const [isFur4mVisible, setIsFur4mVisible] = useState(false);

    const toggleFs4mVisibility = () => {
        setIsFs4mVisible(prevState => !prevState);
        if (isSec4mVisible) setIsSec4mVisible(true);
        if (isThr4mVisible) setIsThr4mVisible(true);
        if (isFur4mVisible) setIsFur4mVisible(true);
    };

    const toggleSec4mVisibility = () => {
        setIsSec4mVisible(prevState => !prevState);
        if (isFs4mVisible) setIsFs4mVisible(true);
        if (isThr4mVisible) setIsThr4mVisible(true);
        if (isFur4mVisible) setIsFur4mVisible(true);
    };

    const toggleThr4mVisibility = () => {
        setIsThr4mVisible(prevState => !prevState);
        if (isFs4mVisible) setIsFs4mVisible(true);
        if (isSec4mVisible) setIsSec4mVisible(true);
        if (isFur4mVisible) setIsFur4mVisible(true);
    };

    const toggleFur4mVisibility = () => {
        setIsFur4mVisible(prevState => !prevState);
        if (isFs4mVisible) setIsFs4mVisible(true);
        if (isSec4mVisible) setIsSec4mVisible(true);
        if (isThr4mVisible) setIsThr4mVisible(true);
    };

    // // // // // FAQ SECTION // // // // // // // // // //   
    const [isFaqfstVisible, setIsFaqfstVisible] = useState(false);
    const [isFaqsecVisible, setIsFaqsecVisible] = useState(false);
    const [isFaqthrdVisible, setIsFaqthrdVisible] = useState(false);
    const [isFaqfurVisible, setIsFaqfurVisible] = useState(false);
    const [isFaqfivVisible, setIsFaqfivVisible] = useState(false);
    const [isFaqsixVisible, setIsFaqsixVisible] = useState(false);
    const [isFaqsevVisible, setIsFaqsevVisible] = useState(false);
    const [isFaqeighVisible, setIsFaqeighVisible] = useState(false);

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
    const toggleFaqsixVisibility = () => {
        setIsFaqsixVisible(prevState => !prevState);
    };
    const toggleFaqsevVisibility = () => {
        setIsFaqsevVisible(prevState => !prevState);
    };
    const toggleFaqeighVisibility = () => {
        setIsFaqeighVisible(prevState => !prevState);
    };

    const [toggle1, setToggle1] = useState(true);




    return (
        <>
            <section className='crohome w-full relative font-gilroy overflow-hidden'>
                <div className='h-full'>
                    <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 h-full z-20">
                        <div className="z-10 flex lg:flex-nowrap items-center flex-wrap justify-between gap-7 pb-8">
                            <div className="w-full lg:w-1/2 lg:order-1 order-2">
                                <h1 className="2xl:text-[33px] lg:text-[28px] leading-[1.7em] font-['Poppins'] font-semibold text-maintext pt-4 mb-[10px]">
                                    Ignite Your Online Growth with Conversion Focused Analytics
                                </h1>
                                <h2 className="font-Gilroy-SemiBold text-[20px] leading-[1.7em] font-medium text-maintext mb-5">Unlock Explosive Revenue with Scientific CRO Strategies</h2>
                                {/* <p className="text-base font-normal leading-[28px] font-[Poppins] mb-[10px]">
                                    At Analyticsliv.com, we believe in the power of data-driven insights to supercharge your online success. Our scientific approach to Conversion Rate Optimization (CRO) is designed to ignite explosive growth, turning your website into a revenue-generating powerhouse.
                                </p> */}
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
                                <img src="/CRO_Main_img_1.png" alt="" className='h-auto' />
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
            <section className='crosolutions overflow-hidden'>
                <div className='relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div>
                        <div className='flex items-center justify-start pb-7'>
                            <h3 className='text-[#302E53] font-gilroy text-[28px] font-semibold leading-[1.5em] not-italic pb-5'>With our cutting-edge CRO solutions, you'll experience</h3>
                        </div>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 items-start justify-center gap-10'>
                            <div className='bg-[#20dc8617] xl:h-[340px] lg:h-[410px] md:h-[335px] rounded-[10px] py-6 px-4 hover:shadow-programeasure'>
                                <div className='w-full'></div>
                                <div className='mb-5 w-[50px] h-[50px]'><img src="/Ad_Format.png" alt="" /></div>
                                <div className='w-full'></div>
                                <h3 className='text-[#1D2124] text-[18px] font-semibold font-Gilroy-SemiBold mb-[20px]'>Revenue Acceleration</h3>
                                <ul className='text-[#646464] text-[15px] font-medium font-gilroy2 leading-6 ml-[15px] mb-5'>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#15c474] mt-[5px]'><FaCheck /></span>
                                        <p>Laser-focused user journeys engineered for conversions</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#15c474] mt-[5px]'><FaCheck /></span>
                                        <p>Data-backed tactics to maximize value from every visitor</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#15c474] mt-[5px]'><FaCheck /></span>
                                        <p>Skyrocket your sales and leave competitors in the dust</p></li>
                                </ul>
                            </div>
                            <div className='bg-[#20dc8617] xl:h-[340px] lg:h-[410px] md:h-[335px] rounded-[10px] py-6 px-4 hover:shadow-programeasure'>
                                <div className='w-full'></div>
                                <div className='mb-5 w-[50px] h-[50px]'><img src="/Ad_Format.png" alt="" /></div>
                                <div className='w-full'></div>
                                <h3 className='text-[#1D2124] text-[18px] font-semibold font-Gilroy-SemiBold mb-[20px]'>Friction-Free User Experiences</h3>
                                <ul className='text-[#646464] text-[15px] font-medium font-gilroy2 leading-6 ml-[15px] mb-5'>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#15c474] mt-[5px]'><FaCheck /></span>
                                        <p>Deeply understand your audience's motivations and pain points</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#15c474] mt-[5px]'><FaCheck /></span>
                                        <p>Seamless, personalized experiences that delight and convert</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#15c474] mt-[5px]'><FaCheck /></span>
                                        <p>Build unbreakable customer loyalty and advocacy</p></li>
                                </ul>
                            </div>
                            <div className='bg-[#20dc8617] xl:h-[340px] lg:h-[410px] md:h-[350px] rounded-[10px] py-6 px-4 hover:shadow-programeasure'>
                                <div className='w-full'></div>
                                <div className='mb-5 w-[50px] h-[50px]'><img src="/Ad_Format.png" alt="" /></div>
                                <div className='w-full'></div>
                                <h3 className='text-[#1D2124] text-[18px] font-semibold font-Gilroy-SemiBold mb-[20px]'>Relentless Testing and Optimization</h3>
                                <ul className='text-[#646464] text-[15px] font-medium font-gilroy2 leading-6 ml-[15px] mb-5'>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#15c474] mt-[5px]'><FaCheck /></span>
                                        <p>Continuous experimentation with A/B tests and multivariate campaigns</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#15c474] mt-[5px]'><FaCheck /></span>
                                        <p>Harness advanced tools like Heat Maps, Session Recordings, and more</p></li>
                                    <li className='mb-2 flex items-start gap-1'>
                                        <span className='text-[#15c474] mt-[5px]'><FaCheck /></span>
                                        <p>Stay ahead of evolving customer needs and industry trends</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='approach relative overflow-hidden'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
                    <div>
                        <h3 className='text-[28px] font-semibold text-white leading-[1.5em] font-Gilroy-SemiBold mb-2'>Our Proven FUEL Methodology for Explosive Growth</h3>
                    </div>
                    <p className='text-[20px] font-semibold text-white leading-[1.5em] font-Gilroy-SemiBold'>We've refined a battle-tested process to propel your online success</p>
                    <div className='md:flex items-center justify-start mt-10'>
                        <div className='flex md:w-[60%] w-full'>
                            <div className='flex flex-col items-start lg:justify-start justify-center gap-[10px] w-full'>
                                <div className={`fs4m flex items-start gap-5 w-full max-[350px]:w-[285px] powerbox2 p-[15px] border border-[#13131400] hover:shadow-mediadv360 h-auto rounded-[10px] ${isFs4mVisible ? 'bg-white' : 'bg-[#0000001f]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full' onClick={toggleFs4mVisibility}>
                                            <div className={`flex items-center w-full justify-between gap-5 text-${isFs4mVisible ? 'black' : 'white'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <h2 className='text-[18px] font-semibold leading-normal font-Gilroy-SemiBold'>Find</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isFs4mVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isFs4mVisible && (
                                                <li className='mb-2 flex items-start gap-1 p-[10px] pl-0'>
                                                    <span className='text-[#de668a] mt-[3px]'><FaCheck /></span>
                                                    <p className='text-[15px] font-medium leading-[1.7em] font-gilroy2'>
                                                        Uncover insights and opportunities through in-depth data analysis.
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
                                                    <h2 className='text-[18px] font-semibold leading-normal font-Gilroy-SemiBold'>Unify</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isSec4mVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isSec4mVisible && (
                                                <li className='mb-2 flex items-start gap-1 p-[10px] pl-0'>
                                                    <span className='text-[#de668a] mt-[3px]'><FaCheck /></span>
                                                    <p className='text-[15px] font-medium leading-[1.7em] font-gilroy2'>Align your digital ecosystem for cohesive, optimized user journeys.</p>
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
                                                    <h2 className='text-[18px] font-semibold leading-normal font-Gilroy-SemiBold'>Explode</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isThr4mVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isThr4mVisible && (
                                                <li className='mb-2 flex items-start gap-1 p-[10px] pl-0'>
                                                    <span className='text-[#de668a] mt-[3px]'><FaCheck /></span>
                                                    <p className='text-[15px] font-medium leading-[1.7em] font-gilroy2'>Deploy data-backed campaigns to ignite conversions and crush goals.</p>
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
                                                    <h2 className='text-[18px] font-semibold leading-normal font-Gilroy-SemiBold'>Leverage</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isFur4mVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isFur4mVisible && (
                                                <div className='mb-2 p-[10px] pl-0'>
                                                    <li className=' flex items-start gap-1 '>
                                                        <span className='text-[#de668a] mt-[3px]'><FaCheck /></span>
                                                        <p className='text-[15px] font-medium leading-[1.7em] font-gilroy2'>Continuously refine strategies based on performance insights.
                                                        </p>
                                                    </li>
                                                    <li className='flex items-start gap-1'>
                                                        <span className='text-[#de668a] mt-[3px]'><FaCheck /></span>
                                                        <p className='text-[15px] font-medium leading-[1.7em] font-gilroy2'>With our scientific CRO solutions and the FUEL methodology, you'll experience game-changing results within just 90 days, leaving your competitors scrambling to catch up.
                                                        </p>
                                                    </li>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[40%] w-full flex items-center justify-center md:mt-0 mt-4'>
                            <img src="/CRO_Page_Sub_Img.png" alt="" className='md:h-auto h-[400px]' />
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
            <section className='progracont relative overflow-hidden'>
                <div className='relative px-4 md:px-12 pt-8 pb-8 z-20'>
                    <div className='flex md:flex-nowrap flex-wrap items-center mx-auto'>
                        <div className='md:w-[66%] w-full'>
                            <div>
                                <div>
                                    <div><h3 className='text-[#ffffff] text-[30px] leading-8 md:mb-[20px] mb-6 font-gilroy font-semibold'>Contact us</h3></div>
                                    <div>
                                        <div className='text-[#ffffff] text-base leading-8 md:mb-[15px] mb-6 font-gilroy2 font-medium'>
                                            <p className='text-[22px] mb-3'>Unlock the power of CRO</p>
                                            Schedule a free consultation with our experts and discover <br /> how we can elevate your business
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
            <section className='crofaq relative overflow-hidden'>
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
                                                <h2 className='text-[17px] font-medium leading-normal'>What is Conversion Rate Optimization (CRO)?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqfstVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqfstVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                Conversion Rate Optimization (CRO) is the systematic process of enhancing your website or digital platform to boost the percentage of visitors who take a desired action, such as making a purchase, filling out a form, or subscribing to a service. It involves analyzing user behavior, identifying friction points, and implementing data-driven strategies to create a seamless, optimized experience that compels visitors to convert.
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
                                                <h2 className='text-[17px] font-medium leading-normal'>How can CRO benefit my business?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqsecVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqsecVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                CRO can be a game-changer for your business by unlocking the true potential of your digital presence. By optimizing your website and user journeys, you'll experience increased conversions, higher revenue, and improved customer satisfaction. CRO enables you to maximize the value of your existing traffic, ensuring that every visitor becomes a high-value lead or customer.
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
                                                <h2 className='text-[17px] font-medium leading-normal'>What sets your CRO Service apart?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqthrdVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqthrdVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                Our CRO service stands out with its scientific approach and proprietary methodologies. We leverage advanced analytics tools, in-depth user research, and continuous experimentation to uncover insights and opportunities that others miss. Our team of experts combines technical prowess with creative problem-solving to deliver tailored strategies that drive measurable results for your business.
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
                                                <h2 className='text-[17px] font-medium leading-normal'>How do you determine which elements need optimization on my website?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqfurVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqfurVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                We follow a comprehensive discovery process to identify optimization opportunities on your website. This includes analyzing user behavior data, conducting heuristic evaluations, and gathering qualitative feedback through user testing and surveys. Our team meticulously examines every touchpoint of the user journey, from initial awareness to post-conversion engagement, to pinpoint areas for improvement.
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
                                                <h2 className='text-[17px] font-medium leading-normal'>Will CRO affect my websites' Search Engine Ranking?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqfivVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqfivVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                CRO strategies can indirectly impact your website's search engine ranking by improving user experience metrics, such as bounce rates, time on site, and engagement. Search engines prioritize websites that provide a superior user experience, as it correlates with high-quality content and user satisfaction. However, direct ranking factors like keyword optimization and technical SEO should be addressed separately for optimal results.
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`faqsix flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full text-[#000000]' onClick={toggleFaqsixVisibility}>
                                        <div className={`flex items-center justify-between gap-5 ${isFaqsixVisible ? 'mb-[10px]' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <h2 className='text-[17px] font-medium leading-normal'>Do I need technical expertise to implement CRO Strategies?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqsixVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqsixVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                No, you don't need technical expertise to leverage our CRO services. Our team handles all aspects of strategy development, implementation, and ongoing optimization. We work closely with your existing web development and marketing teams to ensure seamless integration and provide comprehensive training and support throughout the process.
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`faqsev flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full text-[#000000]' onClick={() => toggleFaqsevVisibility()}>
                                        <div className={`flex items-center justify-between gap-5 ${isFaqsevVisible ? 'mb-[10px]' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <h2 className='text-[17px] font-medium leading-normal'>How do you measure the success of your CRO offering in 90 days?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqsevVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqsevVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                Within the first 90 days, we establish clear Key Performance Indicators (KPIs) aligned with your business objectives, such as conversion rates, revenue growth, or lead generation. We continuously monitor and analyze these metrics, leveraging advanced reporting and attribution models to demonstrate the direct impact of our CRO strategies. Regular performance reviews and data-driven adjustments ensure we deliver tangible, measurable results within this timeframe.
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`faqeigh flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full text-[#000000]' onClick={() => toggleFaqeighVisibility()}>
                                        <div className={`flex items-center justify-between gap-5 ${isFaqeighVisible ? 'mb-[10px]' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <h2 className='text-[17px] font-medium leading-normal'>What if I don't see significant improvements within 90 days?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqeighVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqeighVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                While we strive to deliver substantial improvements within the first 90 days, CRO is an iterative process that requires continuous optimization. If you don't see the desired results initially, we'll conduct a comprehensive analysis to identify areas for further refinement. Our team will work tirelessly to fine-tune the strategies, test new hypotheses, and implement additional enhancements until we achieve your conversion goals.
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

export default cro

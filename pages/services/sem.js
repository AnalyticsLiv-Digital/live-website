'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const sem = () => {

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
    // // // // // FAQ SECTION // // // // // // // // // //   
    const [isFaqfstVisible, setIsFaqfstVisible] = useState(false);
    const [isFaqsecVisible, setIsFaqsecVisible] = useState(false);
    const [isFaqthrdVisible, setIsFaqthrdVisible] = useState(false);
    const [isFaqfurVisible, setIsFaqfurVisible] = useState(false);
    const [isFaqfvVisible, setIsFaqfvVisible] = useState(false);

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
    const toggleFaqfvVisibility = () => {
        setIsFaqfvVisible(prevState => !prevState);
    };

    return (
        <>
            <Head>
                <title>AnalyticsLiv - Search Engine Marketing</title>
                <meta name="description" content="Experts in GA4, DV360, Google Ads, Meta Ads, Microsoft Ads" />
                <link rel="canonical" href="https://www.analyticsliv.com/services/sem"></link>
            </Head>

            <section className='ssthome w-full relative font-gilroy overflow-hidden'>
                <div className='h-full'>
                    <div className="relative px-4 md:px-12 pt-8 pb-8 h-full z-20">
                        <div className="z-10 flex lg:flex-nowrap items-center flex-wrap justify-between gap-7 pb-8">
                            <div className="w-full lg:w-1/2 lg:order-1 order-2">
                                <h1 className="lg:text-[41px] text-[26px] lg:leading-[62px] leading-[32px] font-gilroy font-normal text-[#006EF5] mb-4">
                                    Drive Qualified Traffic & Leads with Powerful SEM Strategies at AnalyticsLiv
                                </h1>
                                {/* <h2 className="font-gilroy text-[20px] leading-[30px] font-normal text-[#152e55] mb-5">Cookieless, Compliant Data with Server-Side Tracking</h2> */}
                                {/* <p className="text-base font-normal leading-[28px] mb-[10px]">
                                    Move Beyond Unsafe Browser Tracking and Unreliable Third-Party Cookies. Our Server-side Tracking Solution Provides Access to The Data You Need While Ensuring Full Compliance. With Major Platforms Phasing Out Cookie Support.
                                </p> */}
                                <div className='flex max-[425px]:flex-wrap flex-nowrap items-center gap-5'>
                                    <Link href="/contact?id=programatic-advertising">
                                        <button className="bg-[#30486a] text-white font-gilroy hover:bg-white border border-solid hover:border-[#30486ae3] hover:text-[#30486ae3] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-2 uppercase">Talk to An Expert</button>
                                    </Link>
                                </div>
                            </div>
                            <div className=" w-full lg:w-1/2 flex items-center lg:justify-end justify-center lg:order-2 order-1">
                                <img src="/SEM_Main_IMG.png" alt="" className='h-[400px]' />
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

            <section className='sstwhy relative wepappour overflow-hidden'>
                <div className="relative px-4 md:px-12 pt-8 pb-8 z-20">
                    <div className=' mb-9 text-center'>
                        <h3 className='text-[28px] text-center font-gilroy font-semibold text-[#18265b] leading-[1.5em] tracking-wide inline-block lg:shadow-sem px-2'>Why Choose SEM for Your Business?</h3>
                    </div>
                    <div className=''>
                        <div className='w-full py-7 grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                            <div className='fs text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <img src="/targetreach.png" alt="target_reach_logo" className='h-[70px] w-[70px]' /></div>
                                    <h6 className='text-[20px] text-txt font-gilroy font-semibold mt-3 mb-5 leading-[1.4em]'>Targeted Reach</h6>
                                </div>
                                <p className='font-gilroy font-normal leading-[1.65em] text-[17px] text-[#000]'>Reach potential customers actively searching for products or services like yours.</p>
                            </div>
                            <div className='scnd text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <img src="/sem_incr.png" alt="increased_visibility_logo" className='h-[70px] w-[70px]' /></div>
                                    <h6 className='text-[20px] text-txt font-gilroy font-semibold mt-3 mb-5 leading-[1.4em]'>Increased Visibility</h6>
                                </div>
                                <p className='font-gilroy font-normal leading-[1.65em] text-[17px] text-[#000]'>Secure prominent placements on search engine results pages (SERPs).</p>
                            </div>
                            <div className='thrd text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <img src="/sem2.png" alt="measurment_logo" className='h-[70px] w-[70px]' /></div>
                                    <h6 className='text-[20px] text-txt font-gilroy font-semibold mt-3 mb-5 leading-[1.4em]'>Measurable Results</h6>
                                </div>
                                <p className='font-gilroy font-normal leading-[1.65em] text-[17px] text-[#000]'>Track campaign performance and optimize strategies for maximum ROI.</p>
                            </div>
                            <div className='fr text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <img src="/sem_improve.png" alt="sem_improve_logo" className='h-[70px] w-[70px]' /></div>
                                    <h6 className='text-[20px] text-txt font-gilroy font-semibold mt-3 mb-5 leading-[1.4em]'>Improved Brand Awareness</h6>
                                </div>
                                <p className='font-gilroy font-normal leading-[1.65em] text-[17px] text-[#000]'>Increase brand recognition and establish your expertise in your industry.</p>
                            </div>
                            <div className='five text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <img src="/sem_lead.png" alt="lead_logo" className='h-[70px] w-[70px]' /></div>
                                    <h6 className='text-[20px] text-txt font-gilroy font-semibold mt-3 mb-5 leading-[1.4em]'>Cost-Effective Lead Generation</h6>
                                </div>
                                <p className='font-gilroy font-normal leading-[1.65em] text-[17px] text-[#000]'>Generate qualified leads at a competitive cost compared to other marketing channels.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='csworkflo font-gilroy'>
                <div className='relative px-4 md:px-12 pt-8 pb-8 z-20'>
                    <div className='flex items-center justify-center mb-5'>
                        <h2 className='text-[28px] text-center font-gilroy font-semibold text-[#18265b] leading-[1.5em] tracking-wide'>SEM Process & Strategy</h2>
                    </div>
                    <p className='text-[#000] leading-[32px] text-[16px] font-medium uppercase text-center'>In today's digital landscape, ranking high on search engines is crucial for attracting new customers and driving business growth. At AnalyticsLiv, we offer comprehensive Search Engine Marketing (SEM) services designed to put your brand at the forefront of relevant online searches</p>
                    <div className='py-10'>
                        <Slider {...settings}>
                            <div aria-hidden="true" className="">
                                <div className='sem1 min-[600px]:w-[90%] w-[300px] xl:h-[225px] min-[601px]:h-[265px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='cursor-pointer p-5 pt-1'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/trafficking.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-4 font-medium text-[#000000] leading-normal'>Keyword Research & Strategy</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'> We identify high-volume, relevant keywords that drive targeted traffic.</p>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="">
                                <div className='sem2 min-[600px]:w-[90%] w-[300px] xl:h-[225px] min-[601px]:h-[265px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='cursor-pointer p-5 pt-1'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/leader1.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-4 font-medium text-[#000000] leading-normal'>Campaign Setup & Management</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'>We create and manage effective PPC (Pay-Per-Click) campaigns across major search engines like Google Ads and Bing Ads.</p>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="">
                                <div className='sem3 min-[600px]:w-[90%] w-[300px] xl:h-[225px] min-[601px]:h-[265px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='cursor-pointer p-5 pt-1'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/premium3.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-4 font-medium text-[#000000] leading-normal'>Ad Copywriting & Optimization</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'>We craft compelling ad copy that resonates with your target audience and encourages clicks.</p>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="">
                                <div className='sem4 min-[600px]:w-[90%] w-[300px] xl:h-[225px] min-[601px]:h-[265px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='cursor-pointer p-5 pt-1'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/premium4.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-4 font-medium text-[#000000] leading-normal'>Landing Page Optimization</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'>We ensure your landing pages convert clicks into leads or sales.</p>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="">
                                <div className='sem5 min-[600px]:w-[90%] w-[300px] xl:h-[225px] min-[601px]:h-[265px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='cursor-pointer p-5 pt-1'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/leader3.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-4 font-medium text-[#000000] leading-normal'>Conversion Tracking & Analysis</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'>We meticulously track conversions and analyze data to optimize campaigns for better results.</p>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="">
                                <div className='sem6 min-[600px]:w-[90%] w-[300px] xl:h-[225px] min-[601px]:h-[265px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='cursor-pointer p-5 pt-1'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/leader4.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-4 font-medium text-[#000000] leading-normal'>Competitor Analysis</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'>We stay ahead of the competition by analyzing their strategies and identifying opportunities for improvement.</p>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="">
                                <div className='sem7 min-[600px]:w-[90%] w-[300px] xl:h-[225px] min-[601px]:h-[265px] h-[260px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-serviceoffer p-4'>
                                    <div className='cursor-pointer p-5 pt-1'>
                                        <div className='inbox relative pb-4 flex items-center justify-center'>
                                            <Image
                                                src="/leader4.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h2 className='text-[18px] mb-4 font-medium text-[#000000] leading-normal'>Remarketing & Retargeting</h2>
                                        <p className='text-[14px] font-medium text-[#000000] leading-[1.7em]'>We capture the attention of website visitors who haven't converted yet, bringing them back with targeted ads.</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            <section className='powerup relative overflow-hidden'>
                <div className='relative px-4 md:px-12 pt-8 pb-8 z-20'>
                    <div>
                        <div className='flex items-center justify-center'>
                            <h2 className='text-[28px] text-center font-gilroy font-semibold text-[#fff] leading-[1.5em] tracking-wide'>The AnalyticsLiv SEM Advantage</h2>
                        </div>
                        <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 pt-[50px]">
                            <div class="powerbox flex items-start justify-center md:w-[95%] w-[280px] m-auto mb-5 xl:h-[210px] lg:h-[240px] h-[240px] p-[10px] pt-6 border border-[#333] rounded-[10px]">
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
                                    <h2 className='xl:text-[18px] lg:text-base text-[18px] mb-4 font-medium text-[#efefef] leading-normal'>Data-Driven Approach</h2>
                                    <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>We leverage data insights to optimize your campaigns for maximum effectiveness.</p>

                                </div>
                            </div>
                            <div class="powerbox flex items-start justify-center md:w-[95%] w-[280px] m-auto mb-5  xl:h-[210px] lg:h-[240px] h-[240px] p-[10px] pt-6 border border-[#333] rounded-[10px]">
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
                                    <h2 className='xl:text-[18px] lg:text-base text-[18px] mb-4 font-medium text-[#efefef] leading-normal'>Transparent Reporting</h2>
                                    <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>We provide regular reports with key metrics and actionable recommendations.</p>

                                </div>
                            </div>
                            <div class="powerbox flex items-start justify-center md:w-[95%] w-[280px] m-auto mb-5  xl:h-[210px] lg:h-[240px] h-[240px] p-[10px] pt-6 border border-[#333] rounded-[10px]">
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
                                    <h2 className='xl:text-[18px] lg:text-base text-[18px] mb-4 font-medium text-[#efefef] leading-normal'>Experienced Team</h2>
                                    <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>Our team of certified SEM specialists has a proven track record of success.</p>
                                </div>
                            </div>
                            <div class="powerbox flex items-start justify-center md:w-[95%] w-[280px] m-auto mb-5  xl:h-[210px] lg:h-[240px] h-[240px] p-[10px] pt-6 border border-[#333] rounded-[10px]">
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
                                    <h2 className='xl:text-[18px] lg:text-base text-[18px] mb-4 font-medium text-[#efefef] leading-normal'>Focus on ROI</h2>
                                    <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>We prioritize delivering measurable results that contribute to your business goals.</p>
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
                                        <div className='text-[#ffffff] text-base leading-8 md:mb-[15px] mb-6 font-gilroy2 font-medium'>
                                            <p className='text-[22px] mb-3'>Ready to Get Started with SEM?</p>
                                            Contact AnalyticsLiv today for a free consultation. We'll discuss your specific SEM needs and develop a customized strategy to drive qualified traffic, generate leads, and achieve your business objectives.
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

            <section className='sstfaq relative overflow-hidden font-gilroy'>
                <div className="relative px-4 md:px-12 pt-8 pb-8 z-20">
                    <div>
                        <h3 className='text-[28px] font-semibold text-[#000000] leading-[1.5em] font-gilroy mb-2'>FAQ's</h3>
                    </div>
                    <div className='md:flex items-center justify-start mt-6'>
                        <div className='items-start lg:justify-start justify-center gap-7 w-full'>
                            <div className={`faqfst flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full text-[#000000]' onClick={toggleFaqfstVisibility}>
                                        <div className={`flex items-center w-full justify-between gap-5 ${isFaqfstVisible ? 'mb-[13px]' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <h2 className='text-[17px] font-medium leading-normal'>What is the difference between SEM and SEO?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqfstVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqfstVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                               SEM encompasses both paid search advertising (PPC) and organic search engine optimization (SEO) efforts. SEO focuses on improving your website's ranking in organic search results, while SEM includes paid advertising campaigns to appear at the top of SERPs.
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
                                                <h2 className='text-[17px] font-medium leading-normal'>How much does SEM cost?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqsecVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqsecVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                SEM budgets can vary depending on your industry, target audience, and desired results. We offer customized SEM solutions to fit your specific needs and budget.
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
                                                <h2 className='text-[17px] font-medium leading-normal'>Can I manage my own SEM campaigns?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqthrdVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqthrdVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                               While it's possible to manage your own SEM campaigns, it requires ongoing effort, expertise, and knowledge of best practices. Our experienced team can handle the complexities of SEM, freeing you to focus on running your business.
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
                                                <h2 className='text-[17px] font-medium leading-normal'>How long does it take to see results from SEM?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqfurVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqfurVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                               The timeframe for seeing results from SEM can vary depending on your campaign goals and competitiveness. However, well-managed SEM campaigns can start generating leads within a few weeks.
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`faqfv flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='cursor-pointer w-full text-[#000000]' onClick={() => toggleFaqfvVisibility()}>
                                        <div className={`flex items-center justify-between gap-5 ${isFaqfvVisible ? 'mb-[10px]' : 'mb-0'}`}>
                                            <div className='flex items-center justify-start'>
                                                <h2 className='text-[17px] font-medium leading-normal'>What can I expect from AnalyticsLiv's SEM services?</h2>
                                            </div>
                                            <div className='clk'>
                                                {isFaqfvVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                            </div>
                                        </div>
                                        {isFaqfvVisible && (
                                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                              We'll work closely with you to understand your business objectives and develop a targeted SEM strategy. We'll manage your campaigns, optimize them for performance, and provide regular reports with insights to track your progress.
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

export default sem
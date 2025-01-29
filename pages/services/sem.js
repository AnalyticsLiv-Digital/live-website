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
import OgTags from '../../components/OgTags';

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
            <OgTags
                url="https://analyticsliv.com/services/sem"
                title="Performance Marketing Agency in India | AnalyticsLiv"
                description="Maximize ROI with expert Google Ads at AnalyticsLiv, a leading performance marketing agency. Our PPC management services drive results with data-driven strategies and proven success."
                twitterTitle="Performance Marketing Agency in India | AnalyticsLiv"
                twitterDescription="Maximize ROI with expert Google Ads at AnalyticsLiv, a leading performance marketing agency. Our PPC management services drive results with data-driven strategies and proven success."
            />

            <section className='ssthome w-full relative font-gilroy overflow-hidden'>
                <div className='h-full'>
                    <div className="relative px-4 md:px-12 pt-8 pb-8 h-full z-20 md:pb-0 md:pt-0">
                        <div className="z-10 flex lg:flex-nowrap items-center flex-wrap justify-between gap-7 pb-8">
                            <div className="w-full lg:w-1/2 lg:order-1 order-2">
                                <h1 className="lg:text-[41px] text-[32px] lg:leading-[62px] leading-normal font-gilroy font-normal text-[#006EF5] mb-4">
                                    Drive Qualified Traffic & Leads with Powerful SEM Strategies at AnalyticsLiv
                                </h1>
                                {/* <h2 className="font-gilroy text-[20px] leading-[30px] font-normal text-[#152e55] mb-5">Cookieless, Compliant Data with Server-Side Tracking</h2> */}
                                {/* <p className="text-base font-normal leading-[28px] mb-[10px]">
                                    Move Beyond Unsafe Browser Tracking and Unreliable Third-Party Cookies. Our Server-side Tracking Solution Provides Access to The Data You Need While Ensuring Full Compliance. With Major Platforms Phasing Out Cookie Support.
                                </p> */}
                                <div className='flex max-[425px]:flex-wrap flex-nowrap items-center gap-5'>
                                    <Link href="/contact?id=programatic-advertising">
                                        <button className="butn mt-2 uppercase">Talk to An Expert</button>
                                    </Link>
                                </div>
                            </div>
                            <div className=" w-full lg:w-1/2 flex items-center lg:justify-end justify-center lg:order-2 order-1">
                                <img src="/SEM_Main_IMG.png" alt="ppc management services" className='h-[400px]' />
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <h2 className='text-center font-bold font-gilroy text-base lg:text-[28px] text-maintext leading-[24px]'>Trusted by Organisations Worldwide</h2>
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
                <div className="relative px-4 md:px-12 pt-8 pb-8 z-20 md:pt-4 md:pb-4">
                    <div className=' mb-9 text-center md:mb-0'>
                        <h3 className='text-[32px] text-center font-gilroy font-semibold text-[#18265b] leading-[1.5em] tracking-wide inline-block lg:shadow-sem px-2'>Why Choose SEM for Your Business?</h3>
                    </div>
                    <div className=''>
                        <div className='w-full py-7 grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                            <div className='fs text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <img src="/targetreach.png" alt="target_reach_logo" className='h-[60px] w-[60px]' /></div>
                                    <h6 className='text-txt pt-4 xl:mb-12 mb-8 font-gilroy text-base font-semibold leading-normal'>Targeted Reach</h6>
                                </div>
                                <p className='font-gilroy font-normal leading-[26px] text-xs text-[#000]'>Reach potential customers actively searching for products or services like yours.</p>
                            </div>
                            <div className='scnd text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <img src="/sem_incr.png" alt="increased_visibility_logo" className='h-[60px] w-[60px]' /></div>
                                    <h6 className='text-txt pt-4 xl:mb-12 mb-8 font-gilroy text-base font-semibold leading-normal'>Increased Visibility</h6>
                                </div>
                                <p className='font-gilroy font-normal leading-[26px] text-xs text-[#000]'>Secure prominent placements on search engine results pages (SERPs).</p>
                            </div>
                            <div className='thrd text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <img src="/sem2.png" alt="measurment_logo" className='h-[60px] w-[60px]' /></div>
                                    <h6 className='text-txt pt-4 xl:mb-12 mb-8 font-gilroy text-base font-semibold leading-normal'>Measurable Results</h6>
                                </div>
                                <p className='font-gilroy font-normal leading-[26px] text-xs text-[#000]'>Track campaign performance and optimize strategies for maximum ROI.</p>
                            </div>
                            <div className='fr text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <img src="/sem_improve.png" alt="sem_improve_logo" className='h-[60px] w-[60px]' /></div>
                                    <h6 className='text-txt pt-4 mb-8 font-gilroy text-base font-semibold leading-normal'>Improved Brand Awareness</h6>
                                </div>
                                <p className='font-gilroy font-normal leading-[26px] text-xs text-[#000]'>Increase brand recognition and establish your expertise in your industry.</p>
                            </div>
                            <div className='five text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <img src="/sem_lead.png" alt="lead_logo" className='h-[60px] w-[60px]' /></div>
                                    <h6 className='text-txt pt-4 mb-8 font-gilroy text-base font-semibold leading-normal'>Cost-Effective Lead Generation</h6>
                                </div>
                                <p className='font-gilroy font-normal leading-[26px] text-xs text-[#000]'>Generate qualified leads at a competitive cost compared to other marketing channels.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='csworkflo font-gilroy'>
                <div className='relative px-4 md:px-12 pt-8 pb-8 z-20 md:pt-0'>
                    <div className='flex items-center justify-center mb-5'>
                        <h2 className='text-[32px] text-center font-gilroy font-semibold text-[#18265b] leading-normal tracking-wide'>SEM Process & Strategy</h2>
                    </div>
                    <p className='text-[#000] text-[18px] font-normal leading-normal capitalize text-center'>In today's Digital landscape, ranking high on search engines is crucial for attracting new customers and driving business growth. At AnalyticsLiv, we offer comprehensive Search Engine Marketing (SEM) services designed to put your brand at the forefront of relevant online searches</p>
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
                                        <h2 className='text-[#000] text-base font-semibold leading-normal'>Keyword Research & Strategy</h2>
                                        <p className='text-[#000] text-xs font-normal pt-6 text-start leading-[26px]'> We identify high-volume, relevant keywords that drive targeted traffic.</p>
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
                                        <h2 className='text-[#000] text-base font-semibold leading-normal'>Campaign Setup & Management</h2>
                                        <p className='text-[#000] text-xs font-normal pt-6 text-start leading-[26px]'>We create and manage effective PPC (Pay-Per-Click) campaigns across major search engines like Google Ads and Bing Ads.</p>
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
                                        <h2 className='text-[#000] text-base font-semibold leading-normal'>Ad Copywriting & Optimization</h2>
                                        <p className='text-[#000] text-xs font-normal pt-6 text-start leading-[26px]'>We craft compelling ad copy that resonates with your target audience and encourages clicks.</p>
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
                                        <h2 className='text-[#000] text-base font-semibold leading-normal'>Landing Page Optimization</h2>
                                        <p className='text-[#000] text-xs font-normal pt-6 text-start leading-[26px]'>We ensure your landing pages convert clicks into leads or sales.</p>
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
                                        <h2 className='text-[#000] text-base font-semibold leading-normal'>Conversion Tracking & Analysis</h2>
                                        <p className='text-[#000] text-xs font-normal pt-6 text-start leading-[26px]'>We meticulously track conversions and analyze data to optimize campaigns for better results.</p>
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
                                        <h2 className='text-[#000] text-base font-semibold leading-normal'>Competitor Analysis</h2>
                                        <p className='text-[#000] text-xs font-normal pt-6 text-start leading-[26px]'>We stay ahead of the competition by analyzing their strategies and identifying opportunities for improvement.</p>
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
                                        <h2 className='text-[#000] text-base font-semibold leading-normal'>Remarketing & Retargeting</h2>
                                        <p className='text-[#000] text-xs font-normal pt-6 text-start leading-[26px]'>We capture the attention of website visitors who haven't converted yet, bringing them back with targeted ads.</p>
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
                        <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 pt-[50px] md:pt-[25px]">
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
                                    <h2 className='text-base font-gilroy mb-6 font-semibold text-[#efefef] leading-normal'>Data-Driven Approach</h2>
                                    <p className='text-xs font-semibold font-gilroy text-[#878787] leading-[26px]'>We leverage data insights to optimize your campaigns for maximum effectiveness.</p>

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
                                    <h2 className='text-base font-gilroy mb-6 font-semibold text-[#efefef] leading-normal'>Transparent Reporting</h2>
                                    <p className='text-xs font-semibold font-gilroy text-[#878787] leading-[26px]'>We provide regular reports with key metrics and actionable recommendations.</p>

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
                                    <h2 className='text-base font-gilroy mb-6 font-semibold text-[#efefef] leading-normal'>Experienced Team</h2>
                                    <p className='text-xs font-semibold font-gilroy text-[#878787] leading-[26px]'>Our team of certified SEM specialists has a proven track record of success.</p>
                                </div>
                            </div>
                            <div class="powerbox flex items-start justify-center md:w-[95%] w-[280px] m-auto mb-5  xl:h-[210px] lg:h-[240px] h-[240px] p-[10px] pt-6 border border-[#333] rounded-[10px]">
                                <div className='cursor-pointer'>
                                    <div className='inbox relative pb-4'>
                                        <Image
                                            src="https://storage.googleapis.com/website-bucket-uploads/static/public/analyzing%20(1).png"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}

                                        />
                                    </div>
                                    <h2 className='text-base font-gilroy mb-6 font-semibold text-[#efefef] leading-normal'>Focus on ROI</h2>
                                    <p className='text-xs font-semibold font-gilroy text-[#878787] leading-[26px]'>We prioritize delivering measurable results that contribute to your business goals.</p>
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
                <div className="relative px-4 md:px-12 pt-8 pb-8 z-20">
                    <div>
                        <h3 className='text-[32px] font-semibold text-[#000000] leading-[1.5em] font-gilroy mb-2'>FAQ's</h3>
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
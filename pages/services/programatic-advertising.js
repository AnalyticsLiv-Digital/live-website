'use client'
import React, { useState, useRef, Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiArrowFatRightBold } from "react-icons/pi";

const service_A = () => {

    const [openQuestion1, setOpenQuestion1] = useState(null);
    const [openQuestion2, setOpenQuestion2] = useState(null);

    const toggleQuestion1 = (index) => {
        setOpenQuestion1(openQuestion1 === index ? null : index);
        setOpenQuestion2(null);
    };

    const toggleQuestion2 = (index) => {
        setOpenQuestion2(openQuestion2 === index ? null : index);
        setOpenQuestion1(null);
    };

    const questions1 = [
        {
            question: "Programmatic Media",
            answer: "Inventory from more than 80 exchanges available.",
            imageURL: "/Ad_Format.png",
        },
        {
            question: "Reserved Inventory",
            answer: "Purchase Premium placements on selected publishers in advance to enhance brand awareness",
            imageURL: "/Ad_Format.png",
        },
        {
            question: "Ad Formats",
            answer: "Selected range of formats like static, GIF, Animated HTML5, 3D, Video, Audio, Connected TV Ads and DOOH Ads",
            imageURL: "/Ad_Format.png",
        }
    ];
    const questions2 = [
        {
            question: "Audience Options",
            answer: "In addition to the options available for targeting in Google platforms, 3rd party DMP audiences are also available",
            imageURL: "/Ad_Format.png",
        },
        {
            question: "Ad Type",
            answer: "Range of options from display, video, audio, rich media, connected TV, DOOH & native advertising",
            imageURL: "/Ad_Format.png",
        },
        {
            question: "Advanced Attribution",
            answer: "Ability to track user level parameters and customize goals for each individual targeting set up",
            imageURL: "/Ad_Format.png",
        }

    ];

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
            <section className='prograhome lg:h-[90vh] w-full relative font-gilroy overflow-hidden'>
                <div className='h-full'>
                    <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 h-full z-20">
                        <div className="z-10 flex lg:flex-nowrap items-center flex-wrap justify-between gap-7 py-8">
                            <div className="space-y-4 w-full lg:w-1/2 lg:order-1 order-2">
                                <h1 className="2xl:text-[23px] lg:text-[21px] text-[27px] leading-[33px] font-['Poppins'] font-semibold text-maintext pt-4">
                                    DV360: Programmatic Media Buying Redefined with AnalyticsLiv
                                </h1>
                                <h3 className="text-[20px] text-[#333333] font-semibold leading-[33px]">
                                    Unleash the Power of Precision Targeting and Automated Bidding
                                </h3>
                                <p className="text-base font-normal leading-[28px] font-[Poppins]">
                                    Are you ready to move beyond traditional media buying and embrace the efficiency and effectiveness of programmatic advertising?  AnalyticsLiv's DV360 service empowers you to do just that.
                                </p>
                                <div className=''>
                                    <Link href="/contact?id=programatic-advertising">
                                        <button className="bg-[#30486ae3] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">GET A FREE AUDIT</button>
                                    </Link>
                                    <Link href="/contact?id=programatic-advertising">
                                        <button className="bg-[#30486ae3] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6 ml-4">CONTACT US</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="py-6 md:py-0 w-full lg:w-1/2 flex items-center lg:justify-end justify-center mt-7 lg:mt-0 lg:order-2 order-1">
                                <img src="/Programmatic_Media_Main_Img_Without_Blur.png" alt="" className='lg:h-auto md:h-[400px]' />
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

            <section className='whydv360 font-gilroy overflow-hidden'>
                <div className='relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div>
                        <div className='flex items-center justify-start pb-7'>
                            <h3 className='text-white text-[28px] font-semibold leading-[1.3em] not-italic pb-5'>Why DV360?</h3>
                        </div>
                        <div className='hidden lg:flex items-center justify-between'>
                            <div className='w-[33.33%]'>
                                <div className="max-w-2xl mx-auto">
                                    {questions1.map((faq, index) => (
                                        <div key={index} className="mb-4 shadow-mediadv360 rounded-md p-5">
                                            <div className='flex items-center justify-between text-[#ffffff]'>
                                                <div className=''>
                                                    {faq.imageURL && (
                                                        <img src={faq.imageURL} alt={`Image`} className='h-[50px] w-[50px]' />
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => toggleQuestion1(index)}
                                                    className="flex items-center justify-between w-full p-3 rounded-md cursor-pointer"
                                                >
                                                    <span className="text-base font-semibold">{faq.question}</span>
                                                    <svg
                                                        className={`w-6 h-6 transition-transform text-[#ffffff] transform ${openQuestion1 === index ? 'rotate-180' : ''}`}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {openQuestion1 === index && (
                                                <p className="mt-2 text-[#ffffff] text-[13px] font-medium leading-[32px]">{faq.answer}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='w-[33.33%]'>
                                <div className='flex items-center justify-center'>
                                    <img src="/mediaDV360.png" alt="" className='h-[200px]' />
                                </div>
                            </div>
                            <div className='w-[33.33%]'>
                                <div className="max-w-2xl mx-auto">
                                    {questions2.map((faq, index) => (
                                        <div key={index} className="mb-4 shadow-mediadv360 rounded-md p-5">
                                            <div className='flex items-center justify-between text-[#ffffff]'>
                                                <div className=''>
                                                    {faq.imageURL && (
                                                        <img src={faq.imageURL} alt={`Image`} className='h-[50px] w-[50px]' />
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => toggleQuestion2(index)}
                                                    className="flex items-center justify-between w-full p-3 rounded-md cursor-pointer"
                                                >
                                                    <span className="text-base font-semibold">{faq.question}</span>
                                                    <svg
                                                        className={`w-6 h-6 transition-transform text-[#ffffff] transform ${openQuestion2 === index ? 'rotate-180' : ''}`}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {openQuestion2 === index && (
                                                <p className="mt-2 text-[#ffffff] text-[13px] font-medium leading-[32px]">{faq.answer}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='lg:hidden md:flex items-center justify-between'>
                            <div className='md:w-[50%]'>
                                <div className="max-w-2xl mx-auto">
                                    {questions1.map((faq, index) => (
                                        <div key={index} className="mb-4 shadow-mediadv360 rounded-md p-5">
                                            <div className='flex items-center justify-between text-[#ffffff]'>
                                                <div className=''>
                                                    {faq.imageURL && (
                                                        <img src={faq.imageURL} alt={`Image`} className='h-[50px] w-[50px]' />
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => toggleQuestion1(index)}
                                                    className="flex items-center justify-between w-full p-3 rounded-md cursor-pointer"
                                                >
                                                    <span className="text-base font-semibold">{faq.question}</span>
                                                    <svg
                                                        className={`w-6 h-6 transition-transform text-[#ffffff] transform ${openQuestion1 === index ? 'rotate-180' : ''}`}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {openQuestion1 === index && (
                                                <p className="mt-2 text-[#ffffff] text-[13px] font-medium leading-[32px]">{faq.answer}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="max-w-2xl mx-auto">
                                    {questions2.map((faq, index) => (
                                        <div key={index} className="mb-4 shadow-mediadv360 rounded-md p-5">
                                            <div className='flex items-center justify-between text-[#ffffff]'>
                                                <div className=''>
                                                    {faq.imageURL && (
                                                        <img src={faq.imageURL} alt={`Image`} className='h-[50px] w-[50px]' />
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => toggleQuestion2(index)}
                                                    className="flex items-center justify-between w-full p-3 rounded-md cursor-pointer"
                                                >
                                                    <span className="text-base font-semibold">{faq.question}</span>
                                                    <svg
                                                        className={`w-6 h-6 transition-transform text-[#ffffff] transform ${openQuestion2 === index ? 'rotate-180' : ''}`}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {openQuestion2 === index && (
                                                <p className="mt-2 text-[#ffffff] text-[13px] font-medium leading-[32px]">{faq.answer}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='md:w-[50%] mt-7 md:mt-0'>
                                <div className='flex items-center md:justify-end justify-center'>
                                    <img src="/mediaDV360.png" alt="" className='' />
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
                            <h3 className='text-[#efefef] text-[28px] font-semibold leading-[1.3em] not-italic pb-5'>Our Comprehensive DV360 Services:</h3>
                        </div>

                        <div className='lg:flex lg:flex-nowrap flex-wrap items-center hidden'>
                            <div className='text-black xl:w-[35%] lg:w-[35%] w-full mt-[11px]'>
                                <div className='p-8 pl-[25px] -mr-[30px] rounded-l-[10px] xl:w-[400px] xl:ml-auto'>
                                    <div className='pb-[33px] cursor-pointer'>
                                        <p onClick={() => setActivetab('1')} className={`ourcom text-base text-[#efefef] bg-[#13131400] font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '1' ? 'border-t-[#0092f4ab]' : ''}`}>Campaign Strategy and Setup</p>
                                    </div>
                                    <div className='pb-5 cursor-pointer'>
                                        <p onClick={() => setActivetab('2')} className={`ourcom text-base text-[#efefef] bg-[#13131400] font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '2' ? 'border-t-[#0092f4ab]' : ''}`}>Audience Targeting</p>
                                    </div>
                                    <div className='pb-5 cursor-pointer'>
                                        <p onClick={() => setActivetab('3')} className={`ourcom text-base text-[#efefef] bg-[#13131400] font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '3' ? 'border-t-[#0092f4ab]' : ''}`}>Ad Format Optimization</p>
                                    </div>
                                    <div className='pb-5 cursor-pointer'>
                                        <p onClick={() => setActivetab('4')} className={`ourcom text-base text-[#efefef] bg-[#13131400] font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '4' ? 'border-t-[#0092f4ab]' : ''}`}>Real-Time Bidding (RTB) Expertise</p>
                                    </div>
                                    <div className='pb-5 cursor-pointer'>
                                        <p onClick={() => setActivetab('5')} className={`ourcom text-base text-[#efefef] bg-[#13131400] font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '5' ? 'border-t-[#0092f4ab]' : ''}`}>Continuous Campaign Management & Optimization</p>
                                    </div>
                                    <div className='pb-5 cursor-pointer'>
                                        <p onClick={() => setActivetab('6')} className={`ourcom text-base text-[#efefef] bg-[#13131400] font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '6' ? 'border-t-[#0092f4ab]' : ''}`}>In-Depth Reporting & Analytics</p>
                                    </div>
                                </div>
                            </div>

                            <div className='xl:w-[60%] lg:w-[65%] w-full powerbox h-[600px] flex items-start justify-center rounded-[15px]'>
                                <div id="tab1" className={`${activetab == 1 && 'block'} ${activetab != 1 && 'hidden'} relative py-[30px] px-[50px] text-[18px] font-medium leading-8`}>
                                    <p className='text-[#efefef] text-[20px] font-semibold mb-[15px]'>Campaign Strategy and Setup</p>
                                    <p className='text-[#878787]'>This phase involves a thorough analysis of the client's marketing objectives, target audience, and competitive landscape. We understand their goals and develop a comprehensive strategy for the programmatic campaigns. This strategy takes into account factors such as campaign scheduling, budget allocation, messaging tone, and creative assets. By leveraging data-driven insights, the team ensures that the campaigns are strategically aligned to achieve maximum impact and drive desired outcomes.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>

                                <div id="tab2" className={`${activetab == 2 && 'block'} ${activetab != 2 && 'hidden'} relative py-[30px] px-[50px] text-[18px] font-medium leading-8`}>
                                    <p className='text-[#efefef] text-[20px] font-semibold mb-[15px]'>Audience Targeting</p>
                                    <p className='text-[#878787]'>With DV360's sophisticated targeting capabilities, the service can precisely identify and reach the client's ideal audience segments. This involves segmenting the audience based on demographics, interests, browsing behaviour, location, and other relevant criteria. By using advanced targeting options such as audience lists, contextual targeting, and lookalike modelling, the service ensures that the client's message is delivered to the most relevant and receptive audience across various devices and channels. This targeted approach increases the likelihood of engagement and conversion, ultimately maximising the campaign's effectiveness.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>

                                <div id="tab3" className={`${activetab == 3 && 'block'} ${activetab != 3 && 'hidden'} relative py-[30px] px-[40px] text-[18px] font-medium leading-8`}>
                                    <p className='text-[#efefef] text-[20px] font-semibold mb-[15px]'>Ad Format Optimization</p>
                                    <p className='text-[#878787]'>The creative team focuses on designing ad formats that are specifically tailored for programmatic buying and created for maximum impact and engagement. This includes creating visually appealing ad creatives, compelling copywriting, and clear calls-to-action that resonate with the target audience. Additionally, the team conducts A/B testing and multivariate testing to identify the most effective ad variations and enhance performance further. By continuously refining and iterating on the ad formats, the service ensures that the client's ads stand out in the crowded digital landscape and drive meaningful interactions with the audience.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                                <div id="tab4" className={`${activetab == 4 && 'block'} ${activetab != 4 && 'hidden'} relative py-[30px] px-[50px] text-[18px] font-medium leading-8`}>
                                    <p className='text-[#efefef] text-[20px] font-semibold mb-[15px]'>Real-Time Bidding (RTB) Expertise</p>
                                    <p className='text-[#878787]'>RTB is a critical component of programmatic advertising, allowing advertisers to bid for ad placements in real-time auctions. The service leverages sophisticated bidding strategies and algorithms to participate in these auctions and secure optimal ad placements for the client. This involves evaluating bidding data, monitoring auction dynamics, and adjusting bidding strategies based on factors such as audience targeting, ad placement, and budget constraints. By optimizing bids in real-time, the service ensures that the client gets the most value out of their advertising budget and maximises the return on investment.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>

                                <div id="tab5" className={`${activetab == 5 && 'block'} ${activetab != 5 && 'hidden'} relative py-[30px] px-[50px] text-[18px] font-medium leading-8`}>
                                    <p className='text-[#efefef] text-[20px] font-semibold mb-[15px]'>Continuous Campaign Management & Optimization</p>
                                    <p className='text-[#878787]'>This phase involves ongoing monitoring, analysis, and optimization of the campaigns to ensure peak performance and efficiency. We employ a proactive approach to campaign management, continuously monitoring key performance indicators such as click-through rates, conversion rates, cost-per-acquisition, and return on ad spend. Based on performance data and insights, the team makes data-driven optimizations such as adjusting targeting parameters, refining ad creatives, reallocating budget to top-performing channels, and implementing bidding strategy changes. This iterative optimization process ensures that the campaigns remain competitive, relevant, and effective throughout their lifecycle, increasing the client's advertising ROI.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>

                                <div id="tab6" className={`${activetab == 6 && 'block'} ${activetab != 6 && 'hidden'} relative py-[30px] px-[50px] text-[18px] font-medium leading-8`}>
                                    <p className='text-[#efefef] text-[20px] font-semibold mb-[15px]'>In-Depth Reporting & Analytics</p>
                                    <p className='text-[#878787]'>The service provides comprehensive reports and analytics that offer actionable insights into campaign performance and effectiveness. These reports include detailed metrics such as impressions, clicks, conversions, engagement rates, and ROI, presented in intuitive dashboards and visualizations. Additionally, the service conducts in-depth analysis to identify trends, patterns, and opportunities for improvement. <br /> <br />The client can use these insights to track campaign success, measure the impact of their advertising efforts, and make informed decisions for future optimizations and strategic planning. By providing transparent and actionable reporting, the service helps the client understand the performance drivers of their campaigns and change their marketing strategies accordingly.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex flex-col justify-start max-w-md m-auto lg:hidden">
                            <div className="panel_list powerbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivemtab('1')}>
                                    <p onClick={() => setActivetab('1')} className={`ourcom text-base text-[#efefef] bg-[#13131424] font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] p-[10px] ${activetab === '1' ? 'border-t-[#0092f4ab] shadow-none' : ''}`}>Campaign Strategy and Setup</p>
                                </div>
                                <div id="tab1" className={`${activetab == 1 && 'items-center justify-center'} ${activetab != 1 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#878787]'>This phase involves a thorough analysis of the client's marketing objectives, target audience, and competitive landscape. We understand their goals and develop a comprehensive strategy for the programmatic campaigns. This strategy takes into account factors such as campaign scheduling, budget allocation, messaging tone, and creative assets. By leveraging data-driven insights, the team ensures that the campaigns are strategically aligned to achieve maximum impact and drive desired outcomes.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list powerbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivemtab('2')}>
                                    <p onClick={() => setActivetab('2')} className={`ourcom text-base text-[#efefef] bg-[#13131424] font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] p-[10px] ${activetab === '2' ? 'border-t-[#0092f4ab] shadow-none' : ''}`}>Audience Targeting</p>
                                </div>
                                <div id="tab2" className={`${activetab == 2 && ' items-center justify-center'} ${activetab != 2 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#878787]'>With DV360's sophisticated targeting capabilities, the service can precisely identify and reach the client's ideal audience segments. This involves segmenting the audience based on demographics, interests, browsing behaviour, location, and other relevant criteria. By using advanced targeting options such as audience lists, contextual targeting, and lookalike modelling, the service ensures that the client's message is delivered to the most relevant and receptive audience across various devices and channels. This targeted approach increases the likelihood of engagement and conversion, ultimately maximising the campaign's effectiveness.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list powerbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivemtab('3')}>
                                    <p onClick={() => setActivetab('3')} className={`ourcom text-base text-[#efefef] bg-[#13131424] font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] p-[10px] ${activetab === '3' ? 'border-t-[#0092f4ab] shadow-none' : ''}`}>Ad Format Optimization</p>
                                </div>
                                <div id="tab3" className={`${activetab == 3 && 'items-center justify-center'} ${activetab != 3 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#878787]'>The creative team focuses on designing ad formats that are specifically tailored for programmatic buying and created for maximum impact and engagement. This includes creating visually appealing ad creatives, compelling copywriting, and clear calls-to-action that resonate with the target audience. Additionally, the team conducts A/B testing and multivariate testing to identify the most effective ad variations and enhance performance further. By continuously refining and iterating on the ad formats, the service ensures that the client's ads stand out in the crowded digital landscape and drive meaningful interactions with the audience.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list powerbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivemtab('4')}>
                                    <p onClick={() => setActivetab('4')} className={`ourcom text-base text-[#efefef] bg-[#13131424] font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] p-[10px] ${activetab === '4' ? 'border-t-[#0092f4ab] shadow-none' : ''}`}>Real-Time Bidding (RTB) Expertise</p>
                                </div>
                                <div id="tab4" className={`${activetab == 4 && ' items-center justify-center'} ${activetab != 4 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#878787]'>RTB is a critical component of programmatic advertising, allowing advertisers to bid for ad placements in real-time auctions. The service leverages sophisticated bidding strategies and algorithms to participate in these auctions and secure optimal ad placements for the client. This involves evaluating bidding data, monitoring auction dynamics, and adjusting bidding strategies based on factors such as audience targeting, ad placement, and budget constraints. By optimizing bids in real-time, the service ensures that the client gets the most value out of their advertising budget and maximises the return on investment.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list powerbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivemtab('5')}>
                                    <p onClick={() => setActivetab('5')} className={`ourcom text-base text-[#efefef] bg-[#13131424] font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] p-[10px] ${activetab === '5' ? 'border-t-[#0092f4ab] shadow-none' : ''}`}>Continuous Campaign Management & Optimization</p>
                                </div>
                                <div id="tab5" className={`${activetab == 5 && ' items-center justify-center'} ${activetab != 5 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#878787]'>This phase involves ongoing monitoring, analysis, and optimization of the campaigns to ensure peak performance and efficiency. We employ a proactive approach to campaign management, continuously monitoring key performance indicators such as click-through rates, conversion rates, cost-per-acquisition, and return on ad spend. Based on performance data and insights, the team makes data-driven optimizations such as adjusting targeting parameters, refining ad creatives, reallocating budget to top-performing channels, and implementing bidding strategy changes. This iterative optimization process ensures that the campaigns remain competitive, relevant, and effective throughout their lifecycle, increasing the client's advertising ROI.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list powerbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivemtab('6')}>
                                    <p onClick={() => setActivetab('6')} className={`ourcom text-base text-[#efefef] bg-[#13131424] font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] p-[10px] ${activetab === '6' ? 'border-t-[#0092f4ab] shadow-none' : ''}`}>In-Depth Reporting & Analytics</p>
                                </div>
                                <div id="tab6" className={`${activetab == 6 && ' items-center justify-center'} ${activetab != 6 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#878787]'>The service provides comprehensive reports and analytics that offer actionable insights into campaign performance and effectiveness. These reports include detailed metrics such as impressions, clicks, conversions, engagement rates, and ROI, presented in intuitive dashboards and visualizations. Additionally, the service conducts in-depth analysis to identify trends, patterns, and opportunities for improvement.<br />The client can use these insights to track campaign success, measure the impact of their advertising efforts, and make informed decisions for future optimizations and strategic planning. By providing transparent and actionable reporting, the service helps the client understand the performance drivers of their campaigns and change their marketing strategies accordingly.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-transparent border border-solid border-[#20dc868f] text-white text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
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
                        <h3 className='text-[30px] font-gilroy font-semibold text-[#18265b] leading-[27px]'>Why Choose AnalyticsLiv for DV360?</h3>
                    </div>
                    <div className=' py-7 grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                        <div className='fs border-[3px] border-[#0000] border-solid hover:border-t-[#0371ff] shadow-mediadv360 rounded-b-[15px] p-5'>
                            <div>
                                <img src="/Data_Driven_Approach.png" alt=""  className='h-16 w-16'/>
                                <h6 className='text-base text-[#263b89] font-gilroy font-medium mt-3 mb-5 leading-[27px]'>Data-Driven Approach</h6>
                            </div>
                            <p className='text-[13px] font-gilroy2 font-medium leading-[32px]'>We don't believe in guesswork. We leverage data to inform every step of the campaign process, from audience targeting to creative optimization and performance measurement.</p>
                        </div>
                        <div className='sd border-[3px] border-[#0000] border-solid hover:border-t-[#0371ff] shadow-mediadv360 rounded-b-[15px] p-5'>
                            <div>
                                <img src="/Transparency_You_Can_Trust.png" alt="" className='h-16 w-16'/>
                                <h6 className='text-base text-[#263b89] font-gilroy font-medium mt-3 mb-5 leading-[27px]'>Transparency You Can Trust</h6>
                            </div>
                            <p className='text-[13px] font-gilroy2 font-medium leading-[32px]'>We prioritize clear communication and provide you with real-time insights into campaign performance and budget allocation. Regular reports keep you informed and empowered to make data-driven decisions.</p>
                        </div>
                        <div className='trd border-[3px] border-[#0000] border-solid hover:border-t-[#0371ff] shadow-mediadv360 rounded-b-[15px] p-5'>
                            <div>
                                <img src="/Performance_at_the_Forefront.png" alt=""  className='h-16 w-16'/>
                                <h6 className='text-base text-[#263b89] font-gilroy font-medium mt-3 mb-5 leading-[27px]'>Performance at the Forefront</h6>
                            </div>
                            <p className='text-[13px] font-gilroy2 font-medium leading-[32px]'>Our focus is on exceeding your expectations. We are committed to delivering measurable results and maximizing your return on investment (ROI).</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='approach relative overflow-hidden'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
                    <div>
                        <h3 className='text-[28px] font-semibold text-white leading-[27px] font-gilroy'>AnalyticsLiv 4M Approach  for DV360</h3>
                    </div>
                    <div className='lg:flex items-center justify-between mt-10'>
                        <div className='lg:w-[45%] w-full flex items-center justify-center'>
                            <img src="/4M_Images_Transparent.png" alt="" className='lg:h-auto md:h-[400px]'/>
                        </div>
                        <div className='grid md:grid-cols-2 gap-7 lg:w-[55%] w-full'>
                            <div class="flex items-start justify-center md:w-full w-[300px] xl:h-[363px] lg:h-[360px] md:h-[310px] powerbox2 bg-[#0000001f] m-auto mb-5 p-[10px] pt-6 border border-[#13131400] hover:shadow-mediadv360 rounded-[10px]">
                                <div className='cursor-pointer'>
                                    <div className='inbox relative pb-4'>
                                        <img src="/Market.png" alt="" className='h-16 w-16'/>
                                    </div>
                                    <h2 className='text-[18px] mb-4 font-medium text-[#ffffff] leading-normal'>Audience Targeting (Market)</h2>
                                    <p className='text-[14px] font-medium text-[#ffffff] leading-[1.7em]'>Leverage DV360's segmentation features to pinpoint your ideal customer using demographics, psychographics, and behavioral data.</p>

                                </div>
                            </div>
                            <div class="flex items-start justify-center md:w-full w-[300px] xl:h-[363px] lg:h-[360px] md:h-[310px] powerbox2 bg-[#0000001f] m-auto mb-5 p-[10px] pt-6 border border-[#13131400] hover:shadow-mediadv360 rounded-[10px]">
                                <div className='cursor-pointer'>
                                    <div className='inbox relative pb-4'>
                                        <img src="/Message.png" alt="" className='h-16 w-16'/>
                                    </div>
                                    <h2 className='text-[18px] mb-4 font-medium text-[#ffffff] leading-normal'>Messaging</h2>
                                    <p className='text-[14px] font-medium text-[#ffffff] leading-[1.7em] mb-2'>Craft clear and persuasive messages that resonate with your target audience's needs, desires, and pain points.</p>
                                    <p className='text-[14px] font-medium text-[#ffffff] leading-[1.7em]'>Experiment with different ad formats, copy variations, and creative assets to optimize message impact.</p>

                                </div>
                            </div>
                            <div class="flex items-start justify-center md:w-full w-[300px] xl:h-[380px] lg:h-[480px] md:h-[360px] powerbox2 bg-[#0000001f] m-auto mb-5 p-[10px] pt-6 border border-[#13131400] hover:shadow-mediadv360 rounded-[10px]">
                                <div className='cursor-pointer'>
                                    <div className='inbox relative pb-4'>
                                    <img src="/Media.png" alt="" className='h-16 w-16'/>
                                    </div>
                                    <h2 className='text-[18px] mb-4 font-medium text-[#ffffff] leading-normal'>Strategic Media Selection</h2>
                                    <p className='text-[14px] font-medium text-[#ffffff] leading-[1.7em] mb-2'>Choose the right media channels (programmatic deals, open auction, web/app inventory, etc.) based on audience habits, campaign goals, and budget.</p>
                                    <p className='text-[14px] font-medium text-[#ffffff] leading-[1.7em]'>DV360's extensive digital media inventory allows for precise targeting and efficient campaign delivery.</p>

                                </div>
                            </div>
                            <div class="flex items-start justify-center md:w-full w-[300px] xl:h-[380px] lg:h-[480px] md:h-[360px] powerbox2 bg-[#0000001f] m-auto mb-5 p-[10px] pt-6 border border-[#13131400] hover:shadow-mediadv360 rounded-[10px]">
                                <div className='cursor-pointer'>
                                    <div className='inbox relative pb-4'>
                                        <img src="/Measurment.png" alt="" className='h-16 w-16'/>
                                    </div>
                                    <h2 className='text-[18px] mb-4 font-medium text-[#ffffff] leading-normal'>Data-Driven Optimization (Measurement)</h2>
                                    <p className='text-[14px] font-medium text-[#ffffff] leading-[1.7em] mb-2'>Utilize DV360's built-in reporting and analytics to track key metrics (reach, engagement, conversions, ROI) in real-time.</p>
                                    <p className='text-[14px] font-medium text-[#ffffff] leading-[1.7em]'>Gain insights into campaign performance, optimize strategies, and make data-driven decisions for future success</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='programeasurement relative font-gilroy overflow-hidden'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
                    <div className='w-[55%] lg:flex items-center absolute left-[45%] top-0 bottom-0 z-20 hidden'>
                        <div className='marquee-containers'>
                            <div className='pm bg-transparent p-[14px] shadow-programeasure mb-5 h-[205px] w-[257px]'>
                                <p className='text-[#2ee3f9] text-[18px] font-semibold'>Measurement & Attribution</p>
                                <div className='pt-[5px]'>
                                    <ul>
                                        <li className='flex items-center gap-[8px] text-[14px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>Campaign Manager 360</p>
                                        </li>
                                        <li className='flex items-center gap-[8px] text-[14px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>Google Analytics 4</p>
                                        </li>
                                        <li className='flex items-center gap-[8px] text-[14px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>GTM</p>
                                        </li>
                                        <li className='flex items-center gap-[8px] text-[14px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>MMP (Appsflyer, Branch, Firebase)</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='pm bg-transparent p-[14px] shadow-programeasure mb-5 h-[205px] w-[257px]'>
                                <p className='text-[#2ee3f9] text-[18px] font-semibold'>Reporting</p>
                                <div className='pt-[5px]'>
                                    <ul>
                                        <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>Big Query</p>
                                        </li>
                                        <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>GA4</p>
                                        </li>
                                        <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>Looker Studio</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='marquee-containers2'>
                            <div className='pm bg-transparent p-[14px] shadow-programeasure mb-5 h-[205px] w-[257px]'>
                                <p className='text-[#2ee3f9] text-[18px] font-semibold'>Analysis & Audience</p>
                                <div className='pt-[5px]'>
                                    <ul>
                                        <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>Google Analytics 4</p>
                                        </li>
                                        <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>Google Ads</p>
                                        </li>
                                        <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>YouTube</p>
                                        </li>
                                        <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>Ads Data Hub</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='pm bg-transparent p-[14px] shadow-programeasure mb-5 h-[205px] w-[257px]'>
                                <p className='text-[#2ee3f9] text-[18px] font-semibold'>Creative</p>
                                <div className='pt-[5px]'>
                                    <ul>
                                        <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>YouTube</p>
                                        </li>
                                        <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>Creative Studio</p>
                                        </li>
                                        <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>GTM</p>
                                        </li>
                                        <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                            <PiArrowFatRightBold />
                                            <p>MMP (Appsflyer, Branch, Firebase)</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <h3 className='text-[22px] font-semibold text-[#18265b] leading-[27px]'>Measurement - Integrations Available</h3>
                    </div>
                    <div className='lg:w-1/2 w-full mt-10'>
                        <div className='flex items-center lg:justify-start justify-center mt-5 lg:mt-0'>
                            <img src="/DV_Infographics_Transparent.png" alt="" className=' md:h-[400px]' />
                        </div>
                    </div>
                    <div className='w-[90%] m-auto lg:hidden block'>
                        <Marquee gradient={false} pauseOnHover="true">
                            <div className='flex space-x-8 justify-center py-4 px-4 mt-4'>
                                <div className='pm bg-transparent p-[14px] shadow-programeasure mb-5 h-[195px] w-[265px]'>
                                    <p className='text-[#2ee3f9] text-[18px] font-semibold'>Measurement & Attribution</p>
                                    <div className='pt-[5px]'>
                                        <ul>
                                            <li className='flex items-center gap-[8px] text-[14px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>Campaign Manager 360</p>
                                            </li>
                                            <li className='flex items-center gap-[8px] text-[14px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>Google Analytics 4</p>
                                            </li>
                                            <li className='flex items-center gap-[8px] text-[14px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>GTM</p>
                                            </li>
                                            <li className='flex items-center gap-[8px] text-[14px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>MMP (Appsflyer, Branch, Firebase)</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='pm bg-transparent p-[14px] shadow-programeasure mb-5 h-[195px] w-[265px]'>
                                    <p className='text-[#2ee3f9] text-[18px] font-semibold'>Reporting</p>
                                    <div className='pt-[5px]'>
                                        <ul>
                                            <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>Big Query</p>
                                            </li>
                                            <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>GA4</p>
                                            </li>
                                            <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>Looker Studio</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='pm bg-transparent p-[14px] shadow-programeasure mb-5 h-[195px] w-[265px]'>
                                    <p className='text-[#2ee3f9] text-[18px] font-semibold'>Analysis & Audience</p>
                                    <div className='pt-[5px]'>
                                        <ul>
                                            <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>Google Analytics 4</p>
                                            </li>
                                            <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>Google Ads</p>
                                            </li>
                                            <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>YouTube</p>
                                            </li>
                                            <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>Ads Data Hub</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='pm bg-transparent p-[14px] shadow-programeasure mb-5 h-[195px] w-[265px]'>
                                    <p className='text-[#2ee3f9] text-[18px] font-semibold'>Creative</p>
                                    <div className='pt-[5px]'>
                                        <ul>
                                            <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>YouTube</p>
                                            </li>
                                            <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>Creative Studio</p>
                                            </li>
                                            <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>GTM</p>
                                            </li>
                                            <li className='flex items-center gap-[8px] text-[13px] font-medium leading-[26px]'>
                                                <PiArrowFatRightBold />
                                                <p>MMP (Appsflyer, Branch, Firebase)</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Marquee>
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

            <section className='prograblog relative z-20 font-gilroy overflow-hidden'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div className='flex items-center justify-center pb-5'>
                        <h2 className='text-[28px] font-semibold text-[#18265b] leading-[27px] text-center tracking-widest'>Latest Blog Posts</h2>
                    </div>
                    <div className='text-center lg:flex items-center justify-between gap-[30px]'>

                        <div className='lg:w-[66%]'>
                            <h5 className='text-start text-[15px] font-normal text-maintext mb-2 opacity-0'>Check out our latest blogs</h5>
                            <div className='grid lg:grid-cols-2 gap-[30px]'>
                                <div className='first relative group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] pb-[70px] text-center 2xl:h-[540px] lg:h-[495px]'>
                                    <a href="/blogs/ai-powered-google-analytics-4-insights">
                                        <Image
                                            src="/blog1.png"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='mb-[3px] w-full'
                                        />
                                        <div className='flex items-center justify-between gap-3'>
                                            <div className='flex items-center justify-between gap-1'>
                                                <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3'>BLOG</span>
                                            </div>
                                            <div className='flex items-center justify-between gap-1'>
                                                <Image
                                                    src="/calendar1.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                />
                                                <span className='text-[10px] font-normal'>February 15, 2024</span>
                                            </div>

                                        </div>
                                        <h3 className='text-base text-[#18265b] text-start font-semibold whitespace-relaxed pt-5'>AI-Powered Google Analytics 4 Insights</h3>
                                        <p className='align-middle text-left text-xs pt-4 pb-7 text-gray-500 leading-[21px]'>Picture Google Analytics 4 (GA4) as a super-smart friend who uses Artificial Intelligence (AI) to help you understand your data better. It's like having a super detective for your business data, pointing out things you might have missed.</p>
                                        <div className='absolute bottom-[3%] 2xl:right-[30%] xl:right-[25%] lg:right-[20%]'>
                                            <div className='flex w-[180px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                                <div className='flex items-center justify-center gap-[5px]'>
                                                    <button className='font-medium text-[#4186F5] group-hover:text-white'>Read More</button>
                                                    <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='second group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797]  hover:shadow-serviceoffer p-[25px] pb-[70px] text-center relative 2xl:h-[540px] lg:h-[495px]'>

                                    <a href="/blogs/unlocking-the-power-of-bigquery-for-using-looker-studio-and-reporting-tool">
                                        <Image
                                            src="/secondblog.png"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='mb-[3px] w-full'
                                        />
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center justify-between gap-1'>
                                                <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3'>BLOG</span>
                                            </div>
                                            <div className='flex items-center justify-between gap-1'>
                                                <Image
                                                    src="/calendar1.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                />
                                                <span className='text-[10px] font-normal'>February 7, 2024</span>
                                            </div>

                                        </div>
                                        <h3 className='text-base text-[#18265b] text-start font-semibold whitespace-relaxed pt-5'>Your Ultimate Guide to Using Looker Studio and Reporting Tool</h3>
                                        <p className='align-middle text-left text-xs pt-4 pb-7 text-gray-500 leading-[21px]'>Obtaining data from the user interface of Google Analytics 4 (GA4) according to your specific requirements can be quite challenging and sometimes even impossible.</p>
                                        <div className='absolute bottom-[3%] 2xl:right-[30%] xl:right-[25%] lg:right-[20%]'>
                                            <div className='flex w-[180px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                                <div className='flex items-center justify-center gap-[5px]'>
                                                    <button className='font-medium text-[#4186F5] group-hover:text-white'>Read More</button>
                                                    <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:grid lg:w-[33%]'>
                            <h5 className='text-start text-[15px] font-normal leading-none text-maintext mb-2'>More blogs</h5>
                            <div className='third hidden lg:grid gap-[30px] 2xl:h-[540px] lg:h-[495px]'>
                                <div className='home-blog3 group rounded bg-no-repeat bg-cover border border-solid hover:border-[#979797] hover:shadow-serviceoffer p-[25px] pb-3 text-center relative'>
                                    <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>BLOG</span>
                                    <a href="/blogs/traversing-essentials-of-gdpr-cookie-consent" className='grid gap-1'>
                                        <div className='grid gap-4'>
                                            <Image
                                                src="/blog3.png"
                                                width={500}
                                                height={500}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-full m-auto h-[130px] 2xl:h-[180px]'
                                            />
                                        </div>
                                        <h3 className='text-[13px] text-white font-medium text-start whitespace-relaxed pt-[15px]'>Traversing Essentials of GDPR Cookie Consent</h3>

                                    </a>
                                </div>
                                <div className='home-blog3 group rounded bg-no-repeat bg-cover border border-solid hover:border-[#979797] hover:shadow-serviceoffer p-[25px] pb-3 text-center relative'>
                                    <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>BLOG</span>
                                    <a href="/blogs/dv-360-ad-personalization-helpful-complex-privacy-breach" className='grid gap-1'>
                                        <div className='grid gap-4'>
                                            <Image
                                                src="/blog.png"
                                                width={500}
                                                height={500}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-full m-auto h-[130px] 2xl:h-[180px]'
                                            />
                                        </div>
                                        <h3 className='text-[13px] text-white font-medium text-start whitespace-relaxed pt-[15px]'>Ad Personalization:  Helpful, Complex, Privacy Breach ?</h3>

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
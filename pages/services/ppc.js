"use client"
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MetaSchemaOg from '../../components/MetaSchemaOg'
import { InlineWidget } from 'react-calendly';

const Ppc = () => {

    const sliderRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [showCalendly, setShowCalendly] = useState(false);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const content = [
        {
            question: "What can I expect from AnalyticsLiv's Performance Marketing Agency?",
            answer:
                "We'll work closely with you to understand your business objectives and develop a targeted PPC strategy. We'll manage your campaigns, optimize them for performance, and provide regular reports with insights to track your progress.",
        },
        {
            question: "What is the difference between Performance Marketing and SEO?",
            answer:
                "PPC encompasses both paid search advertising (PPC) and organic search engine optimization (SEO) efforts. SEO focuses on improving your website's ranking in organic search results, while PPC includes paid advertising campaigns to appear at the top of SERPs.",
        },
        {
            question: "How much does PPC Management cost?",
            answer:
                "PPC Management budgets can vary depending on your industry, target audience, and desired results. We offer customized PPC solutions to fit your specific needs and budget.",
        },
        {
            question: "What kind of results can I expect from your PPC services?",
            answer:
                "The timeframe for seeing results from PPC can vary depending on your campaign goals and competitiveness. However, well-managed PPC campaigns can start generating leads within a few weeks.",
        },
    ];

    const cardsData = [
        {
            title: 'Remarketing & Retargeting',
            description: "We capture the attention of website visitors who haven't converted yet, bringing them back with targeted ads.",
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Remarketing_%20and_Retargeting.svg',
        },
        {
            title: 'Keyword Research and Strategy',
            description: 'We identify high-volume, relevant keywords that drive targeted traffic.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Keyword_Research_and_Strategy.svg',
        },
        {
            title: 'Campaign Setup and Management',
            description: 'We create & manage effective PPC (Pay-Per-Click) campaigns across major search engines like Google Ads & Bing Ads.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Campaign_Setup_and_Management.svg',
        },
        {
            title: 'Ad Copywriting & Optimization',
            description: 'We craft compelling ad copy that resonates with your target audience & encourages clicks.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Ad_Copywriting_and_Optimization.svg',
        },
        {
            title: 'Landing Page Optimization',
            description: 'We ensure your landing pages convert clicks into leads or sales.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/landing_page_optimization.svg',
        },
        {
            title: 'Conversion Tracking & Analysis',
            description: 'We meticulously track conversions and analyze data to optimize campaigns for better results.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Conversion%20_Tarcking_and%20_Analysis.svg',
        },
        {
            title: 'Competitor Analysis',
            description: 'We stay ahead of the competition by analyzing their strategies and identifying opportunities for improvement.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/competitor_analysis.svg',
        },
    ];

    const settings = {
        infinite: true,
        initialSlide: 0.5,
        slidesToShow: 2.5,
        slidesToScroll: 1.5,
        arrows: true,
        dots: true,
        swipe: true,
        touchMove: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1184,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    initialSlide: 0.5,
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settingsMobile = {
        infinite: true,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
    };

    const handleNext = () => sliderRef.current.slickNext();
    const handlePrev = () => sliderRef.current.slickPrev();

    const handleCalendly = () => {
        setShowCalendly(true);
    }

    return (
        <>
            <MetaSchemaOg
                url="https://analyticsliv.com/services/ppc"
                title="Performance Marketing Agency in India | AnalyticsLiv"
                description="Maximize ROI with expert Google Ads at AnalyticsLiv, a leading performance marketing agency. Our PPC management services drive results with data-driven strategies and proven success."
                twitterTitle="Performance Marketing Agency in India | AnalyticsLiv"
                twitterDescription="Maximize ROI with expert Google Ads at AnalyticsLiv, a leading performance marketing agency. Our PPC management services drive results with data-driven strategies and proven success."
            />
            <main className='font-sans py-10'>

                {showCalendly && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex items-center justify-center p-4"
                        onClick={() => setShowCalendly(false)}>
                        <div className="relative bg-white rounded-lg shadow-lg sm:p-4 flex flex-col items-center justify-center 
                        max-w-[380px] w-[100%] sm:w-[90%] h-[80vh] sm:max-w-[400px] sm:h-[450px] lg:max-w-[450px] lg:h-[500px]">

                            <button
                                className="absolute top-1 left-1 text-gray-500 text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center"
                                onClick={() => setShowCalendly(false)}
                            >
                                ✖
                            </button>

                            <div className="w-full h-full flex justify-center items-center">
                                <InlineWidget
                                    url="https://calendly.com/analyticsliv/30min"
                                    styles={{ width: "100%", height: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                )}

                <section className='flex max-md:flex-col justify-between max-lg:items-start items-center px-[5%]'>
                    <div className='md:w-[50%] xl:w-[45%] flex flex-col gap-7 md:gap-14 2xl:gap-16 justify-around items-center md:items-start'>
                        <div className='flex flex-col gap-5 md:gap-8 2xl:gap-10'>
                            <h1 className='text-[#0E1947] text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold max-md:text-center'>Drive Qualified Traffic & Leads with Powerful Performance Marketing Strategies with Us</h1>
                            <h2 className='text-xs 2xl:text-sm font-normal max-md:text-center'>We are a Certified Performance Marketing Agency specializing in PPC and Performance Marketing.
                                As experts in Google Ads, Microsoft Ads, and data-driven strategies, we deliver measurable results
                                to maximize ROI and drive business growth. 🚀
                            </h2>
                            <div className='flex justify-center md:justify-start items-center gap-3 md:gap-2 lg:gap-5'>
                                <a href='/contact'><button className='mainbutn'>Talk to our PPC Expert</button></a>
                                <div onClick={() => handleCalendly()} className='group hover:cursor-pointer flex items-center gap-2'>
                                    <button className='text-xs 2xl:text-sm translate-x-1 group-hover:translate-x-0 transition-all duration-300 font-bold max-sm:w-full max-md:text-center'>Book a Call Today</button>
                                    <div className="opacity-0 translate-x-2 sm:translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Stroke%201.svg' alt='arrow right' className='w-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex max-md:justify-center justify-start items-center gap-7 md:gap-10'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/clutch_review.png' alt='clutch_review' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/trustpilot_review.png' alt='trustpilot_review' className='max-sm:hidden' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Trustpilot_mobile.svg' alt='trustpilot_review' className='sm:hidden' />
                        </div>
                    </div>

                    <div className='md:w-[50%] xl:w-[55%] max-md:hidden flex justify-center'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Main_Img_Right.png' alt='Performance Marketing Strategies' />
                    </div>
                </section>

                <section className='px-4 md:px-[5%] py-12'>
                    <div className='border border-[#D0D0D0] flex max-md:flex-col justify-evenly max-md:gap-8 md:gap-2 xl:gap-1 2xl:gap-5 items-center max-md:py-6 p-3 md:p-5 xl:p-7 2xl:p-10'>
                        <div className='text-[#0E1947] text-lg max-sm:text-center md:text-sm xl:text-lg font-bold'>Trusted by over 200+ businesses worldwide!</div>
                        <div className='grid grid-cols-5 max-md:grid-cols-2 place-items-center gap-6'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Shoebacca%20logo.png' alt='shoebecca' className='max-md:max-h-10 max-xl:max-h-8 max-2xl:max-h-10' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Washington_examinor_logo.png' alt='Washington_examinor_logo' className='max-md:max-h-10 max-xl:max-h-8 max-2xl:max-h-10' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Anantara_logo_New.png' alt='Anantara_logo' className='max-md:max-h-10 max-xl:max-h-8 max-2xl:max-h-10' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Auxi_logo.coloured.png' alt='Auxi_logo' className='max-md:max-h-10 max-xl:max-h-8 max-2xl:max-h-10' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Algovation_logo.png' alt='Algovation_logo' className='max-md:max-h-10 max-xl:max-h-8 max-2xl:max-h-10' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/shiprocket_logo.png' alt='shiprocket_logo' className='max-md:max-h-10 max-xl:max-h-8 max-2xl:max-h-10' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/we_sort_it_logo.png' alt='we_sort_it_logo' className='max-md:max-h-10 max-xl:max-h-8 max-2xl:max-h-10' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mex_insurance_logo.png' alt='Mex_insurance_logo' className='max-md:max-h-10 max-xl:max-h-8 max-2xl:max-h-10' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/issta_Logo.png' alt='issta_Logo' className='max-md:max-h-10 max-xl:max-h-8 max-2xl:max-h-10' />
                            <div className='flex items-center gap-5 2xl:gap-10'>
                                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/IRIS_LOGO.png' alt='IRIS_LOGO' className='max-md:max-h-10 max-xl:max-h-8 max-2xl:max-h-10' />
                                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/league_logo_svg%201.png' alt='league_logo' className='max-md:max-h-10 max-xl:max-h-8 max-2xl:max-h-10' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='px-4 lg:px-[5%] md:pt-6 flex max-md:flex-col justify-center items-center gap-8 md:gap-5 lg:gap-24 2xl:gap-10'>
                    <div className='md:w-[50%] flex justify-center'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Choose_img_Left_crop.png' alt='why choose us' className='' />
                    </div>
                    <div className='md:w-[50%] flex flex-col gap-5'>
                        <h2 className='text-[#0E1947] text-lg xl:text-[27px] 2xl:text-3xl font-bold'>
                            Why to Choose a Performance Marketing Agency for Your Business?
                        </h2>
                        <div className='text-sm font-normal'>We are making every business grow!</div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex max-xl:items-center gap-4'>
                                <div className='bg-[#F0FCFF] max-xl:min-w-[30px] max-xl:min-h-[30px] xl:p-2.5 max-xl:flex max-xl:justify-center max-xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-xl:w-5 rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Targeted Reach</div>
                                    <div className='text-xs font-normal'>Reach potential customers actively searching for products or services like yours.</div>
                                </div>
                            </div>
                            <div className='flex max-xl:items-center gap-4'>
                                <div className='bg-[#F0FCFF] max-xl:min-w-[30px] max-xl:min-h-[30px] xl:p-2.5 max-xl:flex max-xl:justify-center max-xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-xl:w-5 rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Increased Visibility</div>
                                    <div className='text-xs font-normal'>Secure prominent placements on search engine results pages (SERPs).</div>
                                </div>
                            </div>
                            <div className='flex max-xl:items-center gap-4'>
                                <div className='bg-[#F0FCFF] max-xl:min-w-[30px] max-xl:min-h-[30px] xl:p-2.5 max-xl:flex max-xl:justify-center max-xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-xl:w-5 rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Measurable Results</div>
                                    <div className='text-xs font-normal'>Track PPC Campaign Performance</div>
                                </div>
                            </div>
                            <div className='flex max-xl:items-center gap-4'>
                                <div className='bg-[#F0FCFF] max-xl:min-w-[30px] max-xl:min-h-[30px] xl:p-2.5 max-xl:flex max-xl:justify-center max-xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-xl:w-5 rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Improved Brand Awareness</div>
                                    <div className='text-xs font-normal'>Increase brand recognition and establish your expertise in your industry.</div>
                                </div>
                            </div>
                            <div className='flex max-xl:items-center gap-4'>
                                <div className='bg-[#F0FCFF] max-xl:min-w-[30px] max-xl:min-h-[30px] xl:p-2.5 max-xl:flex max-xl:justify-center max-xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-xl:w-5 rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Cost-Effective Lead Generation</div>
                                    <div className='text-xs font-normal'>Generate qualified leads at a competitive cost compared to other marketing channels.</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href='/contact'><button className='mainbutn'>Contact Now</button></a>
                        </div>
                    </div>
                </section>

                <section className="pt-14 pb-14 xl:pt-16 lg:pl-10 2xl:pl-[5%] max-md:overflow-hidden">
                    <div className="flex max-md:flex-col items-center justify-between px-[3%]">
                        <div className="md:w-[60%] max-md:px-4 flex flex-col justify-start">
                            <h2 className="text-[#100F1B] text-xl md:text-3xl font-bold text-center md:text-start">
                                Performance Marketing Process & Strategy
                            </h2>
                            <div className="text-[#373642] max-md:text-center text-[13px] md:text-base font-normal pt-8">
                                In today's Digital landscape, ranking high on search engines is crucial for attracting new customers and
                                driving business growth. At AnalyticsLiv, we offer comprehensive Search Engine Marketing (SEM) services
                                designed to put your brand at the forefront of relevant online searches
                            </div>
                        </div>
                        <div className="flex flex-col max-sm:hidden justify-center items-center gap-2 max-md:pt-5">
                            <div className="flex justify-center items-center gap-5">
                                <button
                                    onClick={handlePrev}
                                    className="group relative overflow-hidden z-10 bg-white border border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline rounded-[8px] px-4 py-3 mb-3 transition-all duration-300 ease-linear hover:bg-[#08A4F7]"
                                >
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector%20(1).svg' alt='left vector' className='w-3.5 h-3.5 group-hover:hidden block' />

                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Stroke%20right%20white.svg' alt='right vector' className='w-3.5 h-3.5 hidden group-hover:block' />

                                </button>
                                <button
                                    onClick={handleNext}
                                    className="group relative overflow-hidden z-10 bg-white border border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline rounded-[8px] px-4 py-3 mb-3 transition-all duration-300 ease-linear hover:bg-[#08A4F7]"
                                >
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector.svg' alt='right vector' className='w-3.5 h-3.5 group-hover:hidden block' />
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Stroke%20left%20white.svg' alt='left vector' className='w-3.5 h-3.5 hidden group-hover:block' />
                                </button>
                            </div>
                            <a href='/services'><button className="mainbutn-opposite">Read More Here</button></a>
                        </div>
                    </div>
                    <div className="max-sm:hidden sm:pl-5 xl:pl-[3%] py-8 carousel-custom overflow-hidden">
                        <Slider ref={sliderRef} {...settings}>
                            {cardsData?.map((card, index) => (
                                <div key={index} className=" custom-padding-370 custom-padding-540 sm:px-4 flex justify-center">
                                    <div className="border rounded-3xl border-[#F2F2F2] mx-auto h-[280px] w-[320px] md:w-[440px] lg:w-[420px] 2xl:w-[480px]">
                                        <div className="h-[140px] text-[#373642] text-sm font-normal p-5 md:p-8">
                                            {card.description}
                                        </div>
                                        <div className="h-[140px] bg-[#08A4F7] rounded-b-3xl">
                                            <div className="flex items-center">
                                                <div className="w-[30%] h-[100px] pl-2 md:pl-3 2xl:pl-8">
                                                    <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/white_bg.png" alt="white_bg" className="absolute max-md:h-24 max-md:w-24" />
                                                    <img src={card.image} alt={card.title} className="relative max-md:h-16 max-md:w-16 md:w-16 top-4 left-4 md:top-5 md:left-5" />
                                                </div>
                                                <div className="flex flex-col max-md:pl-10 h-[140px] items-start justify-center gap-1 text-white">
                                                    <div className="text-xl font-bold">{card.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="sm:hidden sm:pl-5 xl:pl-16 py-8 carousel-custom overflow-hidden">
                        <Slider {...settingsMobile}>
                            {cardsData?.map((card, index) => (
                                <div key={index} className="sm:px-4 flex justify-center">
                                    <div className="border rounded-3xl border-[#F2F2F2] mx-auto h-[280px] w-[320px] md:w-[440px] lg:w-[420px] 2xl:w-[480px]">
                                        <div className="h-[140px] text-[#373642] text-sm font-normal p-5 md:p-8">
                                            {card?.description}
                                        </div>
                                        <div className="h-[140px] bg-[#08A4F7] rounded-b-3xl">
                                            <div className="flex items-center">
                                                <div className="w-[30%] h-[100px] pl-2 md:pl-3 2xl:pl-8">
                                                    <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/white_bg.png" alt="white_bg" className="absolute max-md:h-24 max-md:w-24" />
                                                    <img src={card?.image} alt={card?.title} className="relative max-md:h-16 max-md:w-16 top-4 left-5" />
                                                </div>
                                                <div className="flex flex-col max-md:pl-10 h-[140px] items-start justify-center gap-1 text-white">
                                                    <div className="text-xl font-bold">{card?.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>

                <section className='bg-[#30486A] rounded-[5px] text-white mx-[3%] xl:mx-[5%] py-7 px-5 xl:px-7 2xl:p-12'>
                    <h2 className='text-lg md:text-2xl xl:text-3xl font-bold text-center pb-8 2xl:pb-12'>Advantage of PPC Advertising with AnaltyticsLiv</h2>
                    <div className='flex max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-6 items-center gap-2 xl:gap-5 2xl:gap-10'>
                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-stretch lg:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/big-data-analytics%20(1)%201.svg' alt='Data-Driven Approach'
                                className='bg-[#FAE0E1] rounded-[5px] px-5 min-w-[80px]' />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Data-Driven Approach</div>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>We leverage data insights to optimize your campaigns for maximum effectiveness.</div>
                            </div>
                        </div>

                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-stretch lg:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/report%20(5)%201.svg' alt='Transparent Reporting'
                                className='bg-[#F3DEB3] rounded-[5px] px-5 min-w-[80px]' />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Transparent Reporting</div>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>We provide regular reports with key metrics & actionable recommendations.</div>
                            </div>
                        </div>

                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-stretch lg:w-[25%] 2xl:w-[20%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/team-bonding%201.svg' alt='Experienced Team'
                                className='bg-[#CBCFFA] rounded-[5px] px-5 min-w-[80px]' />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Experienced Team</div>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>Our Team of Certified Performance Marketing Specialists</div>
                            </div>
                        </div>

                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-stretch lg:w-[27%] xl:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/wealth.svg' alt='Focus on ROI'
                                className='bg-[#D7FACB] rounded-[5px] px-5 min-w-[80px]' />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Focus on ROI</div>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>We prioritize delivering measurable results that contribute
                                    to your business goals.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex max-lg:flex-col-reverse overflow-hidden pt-8 lg:pt-16'>
                    <div className='lg:w-[40%] bg-[#30486A] flex flex-col justify-center items-start gap-7 max-lg:py-7 px-4 lg:px-20'>
                        <h3 className='text-2xl md:text-3xl 2xl:text-4xl font-bold text-white'>Excited to Get Started with our PPC Agency?</h3>
                        <div className='text-base font-normal text-[#E2DEDC]'>Contact AnalyticsLiv, a Performance Marketing Agency for a Free Consultation.</div>
                        <a href='/contact'><button className='mainbutn'>Contact Us Now</button></a>
                    </div>
                    <div className='lg:w-[60%] min-h-[250px] sm:min-h-[350px] overflow-hidden 2xl:min-h-[430px] flex'>
                        <div className='w-full lg:w-[70%] relative'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/people_collaborate.png' alt='people_collaborate' className='absolute sm:w-full sm:h-full' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Frame%2047.png' alt='Frame 47' className='absolute px-5 md:right-[50px] 2xl:right-[16%] pt-8' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Rectangle%2026.png' alt='Rectangle 26' className='absolute right-0 top-16' />
                        </div>
                        <div className='bg-[#08A4F7] w-[30%] flex justify-center max-md:hidden items-start'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Frame%2049.png' alt='Frame 49' className='' />
                        </div>
                    </div>
                </section>

                <section className="flex md:mb-3 flex-col md:flex-row px-4 py-7 md:py-14 md:px-8 lg:px-16 md:pb-5 xl:mb-10 xl:pt-14 gap-5 lg:gap-8">
                    <div className="md:w-1/3 flex flex-col md:gap-7 justify-center max-md:text-center sm:justify-start md:pt-7">
                        <h3 className="text-3xl max-md:flex max-sm:flex-col max-md:justify-center max-md:items-center max-md:gap-2.5 lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800">
                            Frequently Asked <div className="text-[#08A4F7] lg:pt-3 xl:pt-4 2xl:pt-5">Questions</div>
                        </h3>
                        <p className="mt-4 max-md:mb-5 text-base xl:text-lg text-gray-600 leading-snug">
                            Discover key FAQs designed to simplify your marketing and analytics approach, helping you achieve better results with actionable guidance.
                        </p>
                    </div>

                    <div className="md:w-2/3 max-h-[400px] overflow-y-auto custom-scrollbar py-5 pr-3 lg:pr-5">

                        <div className="flex flex-col gap-5">
                            {content?.map((item, index) => (
                                <div
                                    key={index}
                                    className={`rounded-2xl px-4 lg:px-12 py-4 lg:py-5 cursor-pointer ${activeIndex === index ? 'text-white bg-[#08A4F7]' : 'text-[#232A42]'
                                        }`}
                                    style={{
                                        boxShadow: activeIndex === index ? 'none' : '18px 15px 35px 0px #00000017',
                                    }}
                                    onClick={() => handleToggle(index)}
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <div className="text-[13px] sm:text-base font-semibold">{item?.question}</div>

                                            {activeIndex === index && (
                                                <div className="text-[10px] sm:text-xs pt-3 font-normal w-[95%]">{item?.answer}</div>
                                            )}
                                        </div>
                                        <img
                                            src={`${activeIndex === index ? 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector_up.png' : 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector_down.png'
                                                }`}
                                            alt={activeIndex === index ? 'Collapse' : 'Expand'}
                                            className="cursor-pointer w-4"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
export default Ppc
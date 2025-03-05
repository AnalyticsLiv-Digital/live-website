"use client"
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MetaSchemaOg from '../../components/MetaSchemaOg'
import { InlineWidget } from 'react-calendly';
import Head from 'next/head';

//   https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Pipeline_Img.png


const customPipeline = () => {

    const sliderRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [showCalendly, setShowCalendly] = useState(false);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const content = [
        {
            question: "What is a custom data pipeline?",
            answer:
                "A custom data pipeline is a tailor-made solution designed to extract, transform and load (ETL) data from multiple sources (e.g. GA4, Google Ads, Shopify) into a centralized data warehouse like Google BigQuery. Unlike generic connectors, custom pipelines are designed to meet the specific needs of your business.",
        },
        {
            question: "Why do I need a custom data pipeline rather than pre-built connectors?",
            answer:
                "Prebuilt connectors often lack flexibility and may not support all of your data sources or unique requirements. Custom pipelines are designed specifically for your business, ensuring seamless integration, real-time data access, and scalability.",
        },
        {
            question: "What data sources can you integrate?",
            answer:
                "We can integrate data from a wide range of sources, including GA4, Google Ads, DV360, Facebook, LinkedIn, Shopify, Keap, GoHighLevel, etc. If you have a specific source, we can create a pipeline to support it.",
        },
        {
            question: "Can you integrate non-Google tools?",
            answer:
                "Yes, our custom pipelines can integrate with both Google and non-Google tools, including Facebook Ads, LinkedIn Ads, Shopify, and more. We guarantee seamless connectivity across all platforms.",
        },
        {
            question: "How to ensure real-time data ingestion?",
            answer:
                "We use Google Cloud APIs and services to create pipelines that ingest data in real time. This ensures your team always has access to the most up-to-date information to make decisions.",
        },
        {
            question: "What is Google BigQuery and why is it used?",
            answer:
                "Google BigQuery is a scalable, serverless data warehouse that lets you store and analyze large volumes of data. It's cost-effective, secure, and integrates seamlessly with other Google Cloud tools, making it ideal for centralized data storage and advanced analytics.",
        },
        {
            question: "How do you manage data security and privacy?",
            answer:
                "We leverage Google Cloud's robust security infrastructure, which includes encryption, access controls, and compliance with global data privacy regulations (e.g. GDPR, CCPA). Your data is always secure.",
        },
        {
            question: "Are there hidden costs?",
            answer:
                "No, we offer transparent prices. You'll only pay for the Google Cloud resources you use, and we'll outline all costs up front during the evaluation phase.",
        },
    ];

    const cardsData = [
        {
            title: 'Support',
            description: "We provide ongoing maintenance and optimization to keep your pipeline running smoothly.",
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Support%20(2)%201.svg',
        },
        {
            title: 'Assessment',
            description: 'We analyze your data sources, business goals, and integration needs.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/assesment.svg',
        },
        {
            title: 'Design',
            description: 'We architect a custom pipeline using APIs and Google Cloud Services.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Design.svg',
        },
        {
            title: 'Development',
            description: 'Our team builds and tests the pipeline to ensure seamless data flow.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Development%20(2).svg',
        },
        {
            title: 'Deployment',
            description: 'We deploy the pipeline and integrate it with BigQuery.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Deployment%20(2)%201.svg',
        },
        // {
        //     title: 'Design',
        //     description: 'We architect a custom pipeline using APIs and Google Cloud Services.',
        //     image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Design.svg',
        // },
    ];

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute text-white shadow-arrowShadow rounded-full top-1/2 right-[5px] sm:right-[-10px] lg:right-[-10px] transform -translate-y-1/2 z-40 cursor-pointer"
                onClick={onClick}
            >
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Right%20Arrow.png" alt="right arrow" className="w-7 md:w-10" />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute text-white shadow-arrowShadow rounded-full top-1/2 left-[5px] sm:left-[-10px] lg:left-[-10px] transform -translate-y-1/2 z-40 cursor-pointer"
                onClick={onClick}
            >
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Left%20Arrow.png" alt="left arrow" className="w-7 md:w-10" />
            </div>
        );
    };

    const settings = {
        infinite: true,
        initialSlide: 0.5,
        slidesToShow: 2.5,
        slidesToScroll: 1.5,
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
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dots: true,
    };

    const handleNext = () => sliderRef.current.slickNext();
    const handlePrev = () => sliderRef.current.slickPrev();

    const handleCalendly = () => {
        setShowCalendly(true);
    }

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
                />
            </Head>

            <main className='pb-10 pt-7'>

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
                    <div className='md:w-[50%] xl:w-[48%] flex flex-col gap-7 md:gap-14 2xl:gap-16 justify-around items-center md:items-start'>
                        <div className='flex flex-col gap-5 md:gap-8 2xl:gap-10'>
                            <h1 className='text-[#0E1947] text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold max-md:text-center'>Optimize Your Workflow with Scalable, Real-Time Data Pipelines</h1>
                            <h2 className='text-xs 2xl:text-sm font-normal max-md:text-center'>
                                In today’s data-driven world, businesses need seamless access to accurate,
                                real-time data to make informed decisions. At AnalyticsLiv Digital, we specialize in building custom data pipelines that integrate data
                                from multiple sources like GA4, Google Ads, DV360, Facebook, LinkedIn, Shopify, and more. Using APIs and Google Cloud Services,
                                we create robust, real-time pipelines that dump data directly into BigQuery (BQ), empowering your team with actionable insights.
                            </h2>
                            <div className='flex justify-center md:justify-start items-center gap-3 md:gap-2 lg:gap-5'>
                                <a href='/contact'><button className='mainbutn'>Request a Demo</button></a>
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

                    <div className='md:w-[50%] xl:w-[48%] max-md:hidden flex justify-center'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Pipeline_img%20(1).png' alt='Custom Pipeline' />
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
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Choose_img_pipeline.png' alt='why choose us' className='' />
                    </div>
                    <div className='md:w-[50%] flex flex-col gap-5'>
                        <h2 className='text-[#0E1947] text-lg xl:text-[27px] 2xl:text-3xl font-bold'>
                            Why Choose Custom Data Pipelines?
                        </h2>
                        <div className='text-sm font-normal'>We are making every business grow!</div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-start gap-4'>
                                <div className='bg-[#F0FCFF] max-xl:min-w-[30px] max-xl:min-h-[30px] xl:p-2.5 max-xl:flex max-xl:justify-center max-xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-xl:w-5 xl:min-w-[20px] xl:max-w-[20px] rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Tailored to Your Needs</div>
                                    <div className='text-xs font-normal'>Unlike generic connectors, our custom pipelines are designed specifically for your
                                        business. Whether you need to migrate data, consolidate multiple sources, or enable real-time analytics, we build
                                        solutions tailored to your unique needs.
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <div className='bg-[#F0FCFF] max-xl:min-w-[30px] max-xl:min-h-[30px] xl:p-2.5 max-xl:flex max-xl:justify-center max-xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-xl:w-5 xl:min-w-[20px] xl:max-w-[20px] rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Access to real-time data</div>
                                    <div className='text-xs font-normal'>Say goodbye to delays. Our pipelines ensure real-time data ingestion so your team
                                        can decide based on the most up-to-date information.
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <div className='bg-[#F0FCFF] max-xl:min-w-[30px] max-xl:min-h-[30px] xl:p-2.5 max-xl:flex max-xl:justify-center max-xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-xl:w-5 xl:min-w-[20px] xl:max-w-[20px] rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Centralized data in BigQuery</div>
                                    <div className='text-xs font-normal'>All your data is consolidated into Google BigQuery, a scalable and powerful data warehouse. This eliminates silos, simplifies analysis, and enables advanced analytics.</div>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <div className='bg-[#F0FCFF] max-xl:min-w-[30px] max-xl:min-h-[30px] xl:p-2.5 max-xl:flex max-xl:justify-center max-xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-xl:w-5 xl:min-w-[20px] xl:max-w-[20px] rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Cost-Effective with Google Cloud</div>
                                    <div className='text-xs font-normal'>By leveraging Google Cloud services, we ensure profitability without compromising
                                        performance. Pay only for what you use and scale as your business grows.</div>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <div className='bg-[#F0FCFF] max-xl:min-w-[30px] max-xl:min-h-[30px] xl:p-2.5 max-xl:flex max-xl:justify-center max-xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-xl:w-5 xl:min-w-[20px] xl:max-w-[20px] rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Scalable integration</div>
                                    <div className='text-xs font-normal'>Our pipelines are built to adapt. As your data sources or business needs evolve,
                                        we ensure your pipeline evolves seamlessly.</div>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <a href='/contact'><button className='mainbutn'>Contact Now</button></a>
                        </div>
                    </div>
                </section>

                <section className="pt-14 pb-14 xl:pt-16 lg:pl-10 2xl:pl-[5%] max-md:overflow-hidden">
                    <div className="flex max-md:flex-col items-center justify-between px-[3%]">
                        <div className="md:w-[60%] max-md:px-4 flex flex-col justify-start">
                            <h2 className="text-[#100F1B] text-xl md:text-3xl font-bold text-center md:text-start">
                                How We Do It
                            </h2>
                            <div className="text-[#373642] max-md:text-center text-[13px] md:text-base font-normal pt-8">
                                In today’s data-driven world, seamless data integration is key to informed decision-making. At AnalyticsLiv Digital,
                                we build custom data pipelines that connect multiple sources to BigQuery in real time, ensuring accurate, actionable
                                insights for your business.
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
                    <div className="sm:hidden sm:pl-5 xl:pl-16 py-8 max-sm:relative carousel-custom ">
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

                <section className='px-4 md:px-[5%] pb-12'>
                    <h2 className="text-[#100F1B] text-xl md:text-3xl font-bold text-center md:text-start">
                        Why Google Cloud Services?
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-start gap-10 sm:gap-8 pt-12'>
                        <div className='w-[100%] flex flex-col justify-center items-center'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/scalability%201.svg' alt='Scalability' />
                            <div className='text-[#100F1B] font-bold text-xl pt-3'>Scalability</div>
                            <div className='text-[#100F1B] font-normal text-base text-center pt-4'>
                                Easily manage
                                large volumes of data.
                            </div>
                        </div>
                        <div className='w-[100%] flex flex-col justify-center items-center'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Security%20(2)%201.svg' alt='Security' />
                            <div className='text-[#100F1B] font-bold text-xl pt-3'>Security</div>
                            <div className='text-[#100F1B] font-normal text-base text-center pt-4'>
                                Benefit from Google's
                                robust security infrastructure.
                            </div>
                        </div>
                        <div className='w-[100%] flex flex-col justify-center items-center'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Cost-effective%201.svg' alt='Cost-effective' />
                            <div className='text-[#100F1B] font-bold text-xl pt-3'>Cost-effective</div>
                            <div className='text-[#100F1B] font-normal text-base text-center pt-4'>
                                Pay-as-you-go pricing ensures that
                                you only pay for what you use.
                            </div>
                        </div>
                        <div className='w-[100%] flex flex-col justify-center items-center'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/integration%20(2)%201.svg' alt='Integration' />
                            <div className='text-[#100F1B] font-bold text-xl pt-3'>Integration</div>
                            <div className='text-[#100F1B] font-normal text-base text-center pt-4'>
                                Seamlessly connect to other Google Cloud tools like Data Studio,
                                AI/ML services & more.
                            </div>
                        </div>
                    </div>
                </section>


                <section className='bg-[#30486A] rounded-[5px] text-white mx-[3%] xl:mx-[5%] py-7 px-5 lg:px-5 xl:px-3 2xl:p-12'>
                    <h2 className='text-lg md:text-2xl xl:text-3xl font-bold text-center pb-8 2xl:pb-12'>Benefits for your business</h2>
                    <div className='flex max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-6 items-center gap-2 xl:gap-5 2xl:gap-10'>
                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-center lg:w-[27%] 2xl:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/decision-making%20(2).svg' alt='Improved Decision-Making'
                                className='bg-[#FAE0E1] rounded-[5px] px-5 min-w-[80px] min-h-[60px] max-h-[60px]' />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Improved Decision-Making</div>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>Access real-time data for faster, smarter decisions.</div>
                            </div>
                        </div>

                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-center lg:w-[25%] 2xl:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/reduce-cost%20(4).svg' alt='Reduced Costs'
                                className='bg-[#F3DEB3] rounded-[5px] px-5 min-w-[80px] min-h-[60px] max-h-[60px]' />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Reduced Costs</div>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>Eliminate the need for multiple third-party connectors.</div>
                            </div>
                        </div>

                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-center lg:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Improved%20efficiency.svg' alt='Improved efficiency'
                                className='bg-[#CBCFFA] rounded-[5px] px-5 min-w-[80px] min-h-[60px] max-h-[60px]' />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Improved efficiency</div>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>Automate data ingestion and reduce manual efforts.</div>
                            </div>
                        </div>

                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-center lg:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Scalable%20Solutions.svg' alt='Scalable Solutions'
                                className='bg-[#D7FACB] rounded-[5px] px-5 min-w-[80px] min-h-[60px] max-h-[60px]' />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Scalable Solutions</div>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>Expand your data infrastructure as your business grows.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex max-lg:flex-col-reverse overflow-hidden pt-8 lg:pt-16'>
                    <div className='lg:w-[40%] bg-[#30486A] flex flex-col justify-center items-start gap-7 max-lg:py-7 px-4 lg:px-20'>
                        <h3 className='text-2xl md:text-3xl 2xl:text-4xl font-bold text-white'>Ready to transform your data strategy?</h3>
                        <div className='text-base font-normal text-[#E2DEDC]'>Let us build a custom pipeline that fits your business needs. Contact us today to learn more!</div>
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

export default customPipeline

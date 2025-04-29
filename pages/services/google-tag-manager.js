'use client'
import React, { useState, useRef } from 'react';
import MetaSchemaOg from '../../components/MetaSchemaOg';
import { InlineWidget } from 'react-calendly';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Brands from '../../components/brands';

const google_tag_manager = () => {

    const [showCalendly, setShowCalendly] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef([]);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);

        setTimeout(() => {
            if (itemRefs.current[index]) {
                itemRefs.current[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }
        }, 100);

    };

    const sliderRef = useRef(null);

    const handleCalendly = () => {
        setShowCalendly(true);
    }

    const cardsData = [
        {
            title: 'SPA Tracking',
            description: 'Tracking solutions to measure Single Page Application websites and measure users interactions like clicks, submissions, hover, view and other events in SPA websites.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/website%20(2)%201.svg',
        },
        {
            title: 'Conversion Events tracking',
            description: 'Our specialists set up and configure Google Tag Manager to track key events requires for your business and measure conversion events to fulfill macro and micro goals',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/conversion%20event%20tracking.svg',
        },
        {
            title: 'Server-side Tagging',
            description: 'Google Tag Manager Server-side tracking offers enhanced security, inline with privacy compliance, boost website performance and get accurate data tracking in tag management system.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/server%20side%20tagging.svg',
        },
        {
            title: 'Marketing Pixels Tracking',
            description: 'Pixel tracking allows you to effortlessly monitor user actions—like conversions across your website. By centralizing all tracking pixels in one place, GTM reduces code clutter and ensures more accurate data collection for marketers and analysts.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/user%20(11).svg',
        },
        {
            title: 'Conversion API Setup & Implementation',
            description: "Conversion APIs (CAPI) setups for platforms like Meta or any other marketing tools that allows businesses to send data about customer interactions and conversions directly to the tool's servers.",
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/integration%20(3)%201.svg',
        },
        {
            title: 'Enhanced Ecommerce Tracking',
            description: "For Ecommerce businesses, From product views to completed purchases, our enhanced ecommerce implementation capabilities foster the full customer journey, empowering you to refine your growth strategies.",
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/catalog%201.svg',
        },
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


    const content = [
        {
            question: "What is Google Tag Manager (GTM)?",
            answer:
                "Google Tag Manager is a free tool that allows you to manage and deploy marketing tags (snippets of code or tracking pixels) on your website or app without modifying the code directly.",
        },
        {
            question: "How does GTM work?",
            answer:
                "GTM uses a JavaScript snippet that is added to your site’s code. Once the container is in place, you can use GTM’s web interface to add, update, or remove any tags, triggers, and variables.",
        },
        {
            question: "Can I use GTM with any website platform (e.g., WordPress, Shopify)?",
            answer:
                "Yes. GTM can be used on all the platforms. Many CMSs and e-commerce platforms have plugins or integrations to simplify GTM setup.",
        },
        {
            question: "What kind of things can I track with GTM?",
            answer:
                "You can track: Pageviews, Clicks (e.g., button clicks, outbound links), Form submissions, Scroll depth, Video interactions, Any advanced or Custom events",
        },
        {
            question: "Can GTM slow down my website?",
            answer:
                "If used correctly, GTM should not significantly impact site performance. However, poorly optimized or excessive third-party tags can affect loading speed.",
        },
        {
            question: "How can I manage GTM access for my team?",
            answer:
                "GTM supports user permissions at both account and container levels. You can invite users and assign roles like Viewer, Editor, Approver, or Publisher.",
        },
        {
            question: "Can GTM be used for mobile apps?",
            answer:
                "Yes, with Firebase and GTM for mobile apps (using SDKs for Android and iOS).",
        },
    ];

    return (

        <>

            <MetaSchemaOg
                url="https://analyticsliv.com/services/google-tag-manager"
                title="Google Tag Manager for Data Driven Attribution | AnalyticsLiv"
                description="Unlock powerful insights with AnalyticsLiv’s Google Tag Manager services. Implement data driven attribution to track conversions, optimize marketing campaigns, and boost ROI."
                twitterTitle="GTM Services by Analytics Liv | Grow Your Business"
                twitterDescription="Optimize your marketing with GTM. Analytics Liv provides expert consulting for accurate data tracking and strategy improvements."
                extraHead={
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
                    />
                }
                faqData={content}
            />

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

            <section className='flex max-md:flex-col justify-between max-lg:items-start items-center px-[5%] max-sm:pt-6 pt-8'>
                <div className='md:w-[50%] xl:w-[48%] flex flex-col gap-7 md:gap-14 2xl:gap-16 justify-around items-center md:items-start'>
                    <div className='flex flex-col gap-5 md:gap-8 2xl:gap-10'>
                        <h1 className='text-[#0E1947] text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold max-md:text-center'>
                            Unlock Powerful Insights with Google Tag Manager (GTM) –
                            Clean, Consistent & Actionable Data
                        </h1>
                        <h3 className='text-xs 2xl:text-sm font-normal max-md:text-center'>
                            In today’s data-driven world, accurate tracking and seamless data collection are the foundation of every smart business
                            decision. Our Google Tag Manager integration services help you streamline your entire data collection strategy — from first
                            touchpoint to final conversion.
                        </h3>
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
                    <div className='flex max-sm:flex-wrap max-md:justify-center justify-start w-full items-center gap-7 md:gap-10 xl:gap-16'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/clutch_review.png' alt='clutch review analyticsliv' />
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Sortlist_Review_4.8.png' alt='Sortlist review analyticsliv' />
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Trustpilot_mobile.svg' alt='trustpilot review analyticsliv' className='' />
                    </div>
                </div>

                <div className='md:w-[50%] xl:w-[48%] max-md:hidden flex justify-center'>
                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/GTM_Main_Img_Right11.png' alt='Boost your sales with expert Conversion Rate Optimization (CRO) services' />
                </div>
            </section>

            <section className='px-4 md:px-[5%] pt-12 sm:pt-16 pb-6'>
                <Brands />
            </section>

            <section className="pt-5 pb-14 xl:pb-20 xl:pt-12 lg:pl-10 2xl:pl-[5%] max-md:overflow-hidden">
                <div className="flex max-md:flex-col items-center justify-between px-[3%]">
                    <div className="md:w-[70%] max-md:px-4 flex flex-col justify-start">
                        <h2 className="text-[#100F1B] text-xl md:text-[26px] 2xl:text-3xl font-bold text-center md:text-start">
                            Our Google Tag Manager Services
                        </h2>
                        <div className="text-[#373642] max-md:text-center text-[13px] md:text-base font-normal pt-8">
                            AnalyticsLiv offers a variety of GTM services, including tag management setup, regular audits and health
                            checks, Ongoing management & support, Identifying & fixing issues observed.
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
                                    <div className="h-[160px] text-[#373642] text-sm font-normal p-5 md:p-6">
                                        {card?.description}
                                    </div>
                                    <div className="h-[140px] bg-[#08A4F7] rounded-b-3xl">
                                        <div className="flex items-center">
                                            <div className="w-[30%] h-[100px] pl-2 md:pl-3 2xl:pl-8">
                                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/white_bg.png" alt="white_bg" className="absolute max-md:h-24 max-md:w-24" />
                                                <img src={card?.image} alt={card?.title} className="relative max-md:h-16 max-md:w-16 md:w-16 top-4 left-4 md:top-5 md:left-5" />
                                            </div>
                                            <div className="flex flex-col max-md:pl-10 h-[140px] pl-7 pr-2 2xl:pr-2 items-start justify-center gap-1 text-white">
                                                <div className="text-xl font-bold">{card?.title}</div>
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
                                            <div className="flex flex-col max-md:pl-14 h-[140px] items-start justify-center gap-1 text-white">
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
                <h2 className='text-lg md:text-2xl xl:text-3xl font-bold text-center pb-8 2xl:pb-12'>Why AnalyticsLiv is your perfect GTM Partner ?</h2>
                <div className='flex max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-6 items-start gap-2 xl:gap-5 2xl:gap-10'>
                    <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-start lg:w-[23%]'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/costumer.svg' alt='Certified Experts'
                            className='bg-[#FAE0E1] rounded-[5px] px-2 py-2 min-w-[80px] min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[80px]' />
                        <div className='flex flex-col justify-between gap-3'>
                            <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Certified Experts</div>
                            <div className='text-[10px] xl:text-[10px] 2xl:text-xs font-normal'>Our team of experts are certified in Google Tag Manager (GTM) with in-depth knowledge of GTM features & its best practices</div>
                        </div>
                    </div>

                    <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-start lg:w-[24%]'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/laptop%20(3).svg' alt='Custom GTM Solutions'
                            className='bg-[#F3DEB3] rounded-[5px] px-2 py-2 min-w-[80px] min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[80px]' />
                        <div className='flex flex-col justify-between gap-3'>
                            <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Custom GTM Solutions</div>
                            <div className='text-[10px] xl:text-[10px] 2xl:text-xs font-normal'>Understanding the need of business, we provide unique scalable solutions as per your requirement.</div>
                        </div>
                    </div>

                    <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-start lg:w-[28%]'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/goal%20(4).svg' alt='Enhanced Data Accuracy'
                            className='bg-[#CBCFFA] rounded-[5px] px-2 py-2 min-w-[80px] min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[80px]' />
                        <div className='flex flex-col justify-between gap-3'>
                            <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Enhanced Data Accuracy</div>
                            <div className='text-[10px] xl:text-[10px] 2xl:text-xs font-normal'>We ensure accurate data collection tracking by implementing correct tag configurations and data validation processes. This leads to more reliable insights and better decision making for marketers.</div>
                        </div>
                    </div>

                    <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-start lg:w-[27%]'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/customer-service%20(3).svg' alt='Ongoing Support'
                            className='bg-[#D7FACB] rounded-[5px] px-2 py-2 min-w-[80px] min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[80px]' />
                        <div className='flex flex-col justify-between gap-3'>
                            <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Ongoing Support</div>
                            <div className='text-[10px] xl:text-[10px] 2xl:text-xs font-normal'>Right data gives right decision power, considering that our GTM experts perform Monthly audits and share updates, troubleshoots broken tags & analytics issues</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pt-16 pb-6 px-4 md:px-10 xl:px-[5%]'>
                <div className='text-[#100F1B] text-2xl md:text-3xl font-bold text-center lg:text-left'>
                    From Strategy to Insight: Our 5-Step Tracking Process
                </div>
                <div className='pt-8 sm:pt-12 flex max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:justify-items-center max-sm:gap-10 max-lg:gap-16 lg:gap-8 
            justify-around items-start'>
                    <div className='w-[75%] lg:w-[20%]'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/01.png' alt='01' className='absolute' />
                            <div className='text-2xl font-bold 2xl:text-3xl text-[#30486A] pt-[90px] z-10 text-center'>Discovery &<br></br> Planning</div>
                        </div>
                        <div className='pt-8 text-[#6C6C6C] text-base lg:text-xs 2xl:text-base font-normal text-center'>
                            We understand your tracking goals, KPIs, & tools and accordingly our GTM expert strategically plan out your tracking.
                        </div>
                    </div>
                    <div className='w-[75%] lg:w-[20%]'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/02.png' alt='02' className='absolute' />
                            <div className='text-2xl font-bold 2xl:text-3xl text-[#30486A] pt-[90px] z-10 text-center'>Setup &<br></br> Configuration</div>
                        </div>
                        <div className='pt-8 text-[#6C6C6C] text-base lg:text-xs 2xl:text-base font-normal text-center'>
                            GTM container setup, dataLayer planning, and tag mapping. Integrating tags, triggers, and variables to seamlessly measure user actions.
                        </div>
                    </div>
                    <div className='w-[75%] lg:w-[20%]'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/03.png' alt='03' className='absolute' />
                            <div className='text-2xl font-bold 2xl:text-3xl text-[#30486A] pt-[90px] z-10 lg:pb-10'>Execute</div>
                        </div>
                        <div className='pt-8 text-[#6C6C6C] text-base lg:text-xs 2xl:text-base font-normal text-center'>
                            Test and validate everything in multiple environments and make implementation to production
                        </div>
                    </div>
                    <div className='w-[75%] lg:w-[20%]'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/04.png' alt='04' className='absolute' />
                            <div className='text-2xl font-bold 2xl:text-3xl text-[#30486A] pt-[90px] z-10 lg:pb-10'>Report</div>
                        </div>
                        <div className='pt-8 text-[#6C6C6C] text-base lg:text-xs 2xl:text-base font-normal text-center'>
                            Use GA4 to visualise and create custom reports for key reporting & trends.
                        </div>
                    </div>
                    <div className='w-[75%] lg:w-[20%]'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/05.png' alt='05' className='absolute' />
                            <div className='text-2xl font-bold 2xl:text-3xl text-[#30486A] pt-[90px] z-10 lg:pb-10'>Action</div>
                        </div>
                        <div className='pt-8 text-[#6C6C6C] text-base lg:text-xs 2xl:text-base font-normal text-center'>
                            Turn data into actionable insights using GA4 dashboards & build custom audience from data collected by GTM.
                        </div>
                    </div>

                </div>
            </section>

            <section className='flex max-lg:flex-col-reverse overflow-hidden pt-2 md:pt-8 lg:pt-12'>
                <div className='lg:w-[40%] bg-[#30486A] flex flex-col justify-center items-start gap-5 2xl:gap-7 max-lg:py-7 px-4 lg:px-8 xl:px-16 2xl:px-20'>
                    <h2 className='text-[20px] md:text-[25px] 2xl:text-[30px] font-bold text-white'>Let’s Build Your Data Foundation Right</h2>
                    <div className='text-base font-normal text-[#E2DEDC]'>
                        Whether you're setting up analytics for the first time, migrating to GA4, or scaling your tracking infrastructure we’re here to make sure your data is accurate, reliable, and insightful.
                    </div>
                    <div className='text-base font-normal text-[#E2DEDC]'>
                        Ready to track smarter?
                    </div>
                    <a href='/contact'><button className='mainbutn'>Book a Free Consultation</button></a>
                </div>
                <div className='lg:w-[60%] min-h-[250px] sm:min-h-[350px] overflow-hidden 2xl:min-h-[430px] flex'>
                    <div className='w-full lg:w-[70%] relative'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/people_collaborate.png' alt='Custom Data Pipeline Solutions' className='absolute sm:w-full sm:h-full' />
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Frame%2047.png' alt='Frame 47' className='absolute px-5 md:right-[50px] 2xl:right-[16%] pt-8' />
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Rectangle%2026.png' alt='Rectangle 26' className='absolute right-0 top-16' />
                    </div>
                    <div className='bg-[#08A4F7] w-[30%] flex justify-center max-md:hidden items-start'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Frame%2049.png' alt='Frame 49' className='' />
                    </div>
                </div>
            </section>

            <section className="flex md:mb-3 flex-col md:flex-row px-4 max-sm:pt-12 py-9 md:py-14 md:px-8 lg:px-16 md:pb-5 xl:mb-10 xl:pt-14 gap-5 lg:gap-8">
                <div className="md:w-1/3 flex flex-col md:gap-7 justify-center max-md:text-center sm:justify-start md:pt-7">
                    <h2 className="text-3xl max-md:flex max-sm:flex-col max-md:justify-center max-md:items-center max-md:gap-2.5 lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800">
                        Frequently Asked <div className="text-[#08A4F7] lg:pt-3 xl:pt-4 2xl:pt-5">Questions</div>
                    </h2>
                    <p className="mt-4 max-md:mb-5 text-base 2xl:text-lg text-gray-600 leading-snug">
                        Find quick answers to common Google Tag Manager (GTM) questions — covering setup, tracking, compliance, troubleshooting, and advanced use cases for websites and mobile apps.
                    </p>
                </div>

                <div className="md:w-2/3 max-h-[400px] overflow-y-auto custom-scrollbar py-5 pr-3 lg:pr-5">

                    <div className="flex flex-col gap-5">
                        {content?.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (itemRefs.current[index] = el)}
                                className={`rounded-2xl px-4 lg:px-12 py-4 lg:py-5 cursor-pointer ${activeIndex === index ? 'text-white bg-[#08A4F7]' : 'text-[#232A42]'
                                    }`}
                                style={{
                                    boxShadow: activeIndex === index ? 'none' : '18px 15px 35px 0px #00000017',
                                }}
                                onClick={() => handleToggle(index)}
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <h3 className="text-[13px] sm:text-base font-semibold">{item?.question}</h3>

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

        </>
    )
}

export default google_tag_manager

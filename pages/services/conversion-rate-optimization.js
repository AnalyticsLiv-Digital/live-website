'use client'
import React, { useState, useRef } from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import MetaSchemaOg from '../../components/MetaSchemaOg';
import { InlineWidget } from 'react-calendly';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Brands from '../../components/brands';

const conversionRateOptimization = () => {

    const [showCalendly, setShowCalendly] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const itemRefs = useRef([]);

    const toggleDropdown = (key) => {
        setActiveDropdown((prev) => (prev === key ? null : key));
    };

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
            title: 'Revenue Acceleration',
            description: ["Laser-focused user journeys engineered for conversions", "Data-backed tactics to maximize value from every visitor", "Skyrocket your sales and leave competitors in the dust"],
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Testing_Optimization.png',
        },
        {
            title: 'Friction-Free User Experiences',
            description: ["Deeply understand your audience's motivations & pain points", "Seamless, personalized experiences that delight & convert", "Build unbreakable customer loyalty and advocacy"],
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Revenue%20Acceleration%20img.png',
        },
        {
            title: 'Relentless Testing and Optimization',
            description: ["Continuous experimentation with A/B tests and multivariate campaigns", "Harness advanced tools like Heat Maps, Session Recordings, and more", "Stay ahead of evolving customer needs and industry trends"],
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/user-experience.png',
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
            question: "What is Conversion Rate Optimization (CRO)?",
            answer:
                "Conversion Rate Optimization (CRO) is the systematic process of enhancing your website or digital platform to boost the percentage of visitors who take a desired action, such as making a purchase, filling out a form, or subscribing to a service. It involves analyzing user behavior, identifying friction points, and implementing data-driven strategies to create a seamless, optimized experience that compels visitors to convert.",
        },
        {
            question: "How can CRO benefit my business?",
            answer:
                "CRO can be a game-changer for your business by unlocking the true potential of your digital presence. By optimizing your website and user journeys, you'll experience increased conversions, higher revenue, and improved customer satisfaction. CRO enables you to maximize the value of your existing traffic, ensuring that every visitor becomes a high-value lead or customer.",
        },
        {
            question: "What sets your CRO Service apart?",
            answer:
                "Our CRO service stands out with its scientific approach and proprietary methodologies. We leverage advanced analytics tools, in-depth user research, and continuous experimentation to uncover insights and opportunities that others miss. Our team of experts combines technical prowess with creative problem-solving to deliver tailored strategies that drive measurable results for your business.",
        },
        {
            question: "How do you determine which elements need optimization on my website?",
            answer:
                "We follow a comprehensive discovery process to identify optimization opportunities on your website. This includes analyzing user behavior data, conducting heuristic evaluations, and gathering qualitative feedback through user testing and surveys. Our team meticulously examines every touchpoint of the user journey, from initial awareness to post-conversion engagement, to pinpoint areas for improvement.",
        },
        {
            question: "Will CRO affect my website's Search Engine Ranking?",
            answer:
                "CRO strategies can indirectly impact your website's search engine ranking by improving user experience metrics, such as bounce rates, time on site, and engagement. Search engines prioritize websites that provide a superior user experience, as it correlates with high-quality content and user satisfaction. However, direct ranking factors like keyword optimization and technical SEO should be addressed separately for optimal results.",
        },
        {
            question: "Do I need technical expertise to implement CRO Strategies?",
            answer:
                "No, you don't need technical expertise to leverage our CRO services. Our team handles all aspects of strategy development, implementation, and ongoing optimization. We work closely with your existing web development and marketing teams to ensure seamless integration and provide comprehensive training and support throughout the process.",
        },
        {
            question: "How do you measure the success of your CRO offering in 90 days?",
            answer:
                "Within the first 90 days, we establish clear Key Performance Indicators (KPIs) aligned with your business objectives, such as conversion rates, revenue growth, or lead generation. We continuously monitor and analyze these metrics, leveraging advanced reporting and attribution models to demonstrate the direct impact of our CRO strategies. Regular performance reviews and data-driven adjustments ensure we deliver tangible, measurable results within this timeframe.",
        },
        {
            question: "What if I don't see significant improvements within 90 days?",
            answer:
                "While we strive to deliver substantial improvements within the first 90 days, CRO is an iterative process that requires continuous optimization. If you don't see the desired results initially, we'll conduct a comprehensive analysis to identify areas for further refinement. Our team will work tirelessly to fine-tune the strategies, test new hypotheses, and implement additional enhancements until we achieve your conversion goals.",
        },
    ];

    return (
        <>

            <MetaSchemaOg
                url="https://analyticsliv.com/services/conversion-rate-optimization"
                title="Boost Revenue With Conversion Rate Optimization Services - AnalyticsLiv"
                description="Unlock your website’s full potential with AnalyticsLiv. Our CRO services turn more visitors into leads, sales, and real ROI through performance-driven strategies."
                twitterTitle="Boost Revenue With Conversion Rate Optimization Services - AnalyticsLiv"
                twitterDescription="Unlock your website’s full potential with AnalyticsLiv. Our CRO services turn more visitors into leads, sales, and real ROI through performance-driven strategies."
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
                <div className='md:w-[50%] xl:w-[45%] flex flex-col gap-7 md:gap-14 2xl:gap-16 justify-around items-center md:items-start'>
                    <div className='flex flex-col gap-5 md:gap-8 2xl:gap-10'>
                        <h1 className='text-[#0E1947] text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold max-md:text-center'>
                            Ignite Your Online Growth with Conversion Focused Analytics
                        </h1>
                        <div className='text-[#0E1947] text-sm sm:text-lg xl:text-2xl font-bold max-sm:text-center'>🔍 Optimize ➝ Convert ➝ Grow 🚀</div>
                        <h3 className='text-xs 2xl:text-sm font-normal max-md:text-center'>
                            At AnalyticsLiv, we craft seamless, high-converting user journeys using data-backed strategies and relentless optimization. With heat maps, session recordings, and A/B testing, we ensure friction-free experiences that drive engagement & loyalty.
                        </h3>
                        <div className='flex justify-center md:justify-start items-center gap-3 md:gap-2 lg:gap-5'>
                            <a href='/contact'><button className='contact-us-btn mainbutn'>Request a Demo</button></a>
                            <div onClick={() => handleCalendly()} className='contact-us-btn group hover:cursor-pointer flex items-center gap-2'>
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
                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/CRO_Main_Img.png' alt='Boost your sales with expert Conversion Rate Optimization (CRO) services' />
                </div>
            </section>

            <section className='px-4 md:px-[5%] py-12'>
                <Brands />
            </section>

            <section className="pt-5 pb-14 xl:pt-16 lg:pl-10 2xl:pl-[5%] max-md:overflow-hidden">
                <div className="flex max-md:flex-col items-center justify-between px-[3%]">
                    <div className="md:w-[70%] max-md:px-4 flex flex-col justify-start">
                        <h2 className="text-[#100F1B] text-xl md:text-[26px] 2xl:text-3xl font-bold text-center md:text-start">
                            Unlock Explosive Growth with Our Cutting-Edge CRO Solutions
                        </h2>
                        <div className="text-[#373642] max-md:text-center text-[13px] md:text-base font-normal pt-8">
                            Drive revenue acceleration with laser-focused user journeys and data-backed strategies that maximize conversions.
                            Create friction-free experiences by deeply understanding user behavior, delivering seamless, personalized interactions
                            that boost loyalty.
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
                        <a href='/services'><button className="readmore-button mainbutn-opposite">Read More Here</button></a>
                    </div>
                </div>
                <div className="max-sm:hidden sm:pl-5 xl:pl-[3%] py-8 carousel-custom overflow-hidden">
                    <Slider ref={sliderRef} {...settings}>
                        {cardsData?.map((card, index) => (
                            <div key={index} className=" custom-padding-370 custom-padding-540 sm:px-4 flex justify-center">
                                <div className="border rounded-3xl border-[#F2F2F2] mx-auto h-[280px] w-[320px] md:w-[440px] lg:w-[420px] 2xl:w-[480px]">
                                    <div className="h-[160px] text-[#373642] text-sm font-normal p-5 md:p-6">
                                        {card?.description?.map((desc, i) => (
                                            <div key={i} className='flex items-start gap-2 text-black mb-2'>
                                                <img
                                                    src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/point1.png'
                                                    alt='Analyticsliv CRO'
                                                    className="w-4 h-4 2xl:mt-1"
                                                />
                                                <div className='text-xs 2xl:text-sm'>{desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="h-[140px] bg-[#08A4F7] rounded-b-3xl">
                                        <div className="flex items-center">
                                            <div className="w-[30%] h-[100px] pl-2 md:pl-3 2xl:pl-8">
                                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/white_bg.png" alt="white_bg" className="absolute max-md:h-24 max-md:w-24" />
                                                <img src={card.image} alt={card.title} className="relative max-md:h-16 max-md:w-16 md:w-16 top-4 left-4 md:top-5 md:left-5" />
                                            </div>
                                            <div className="flex flex-col max-md:pl-10 h-[140px] pl-5 pr-2 2xl:pr-5 items-start justify-center gap-1 text-white">
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
                                        {card?.description?.map((desc, i) => (
                                            <div key={i} className='flex items-start gap-2 text-black mb-2'>
                                                <img
                                                    src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/point1.png'
                                                    alt='Analyticsliv CRO'
                                                    className="w-4 h-4 mt-1"
                                                />
                                                <div className='text-xs 2xl:text-sm'>{desc}</div>
                                            </div>
                                        ))}
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
                <h2 className='text-lg md:text-2xl xl:text-3xl font-bold text-center pb-8 2xl:pb-12'>Key Advantages of Our CRO Services</h2>
                <div className='flex max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-6 items-start gap-2 xl:gap-5 2xl:gap-10'>
                    <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-start lg:w-[25%]'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/big-data-analytics%20(1)%201.svg' alt='Maximize Potential'
                            className='bg-[#FAE0E1] rounded-[5px] px-3 py-1.5 min-w-[80px] min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[80px]' />
                        <div className='flex flex-col justify-between gap-3'>
                            <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Maximize Potential</div>
                            <div className='text-[10px] xl:text-[10px] 2xl:text-xs font-normal'>Optimize user journeys with data-driven strategies that boost conversions & maximize every visitor’s value.</div>
                        </div>
                    </div>

                    <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-start lg:w-[25%]'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/report%20(5)%201.svg' alt='Eliminate Friction'
                            className='bg-[#F3DEB3] rounded-[5px] px-3 py-1.5 min-w-[80px] min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[80px]' />
                        <div className='flex flex-col justify-between gap-3'>
                            <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Eliminate Friction</div>
                            <div className='text-[10px] xl:text-[10px] 2xl:text-xs font-normal'>Enhance engagement with friction-free, personalized interactions that build customer loyalty & drive long-term growth.</div>
                        </div>
                    </div>

                    <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-start lg:w-[25%]'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/team-bonding%201.svg' alt='Continuous Growth'
                            className='bg-[#CBCFFA] rounded-[5px] px-3 py-1.5 min-w-[80px] min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[80px]' />
                        <div className='flex flex-col justify-between gap-3'>
                            <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Continuous Growth</div>
                            <div className='text-[10px] xl:text-[10px] 2xl:text-xs font-normal'>Leverage A/B testing, heatmaps, & session recordings to continuously refine & improve website performance.</div>
                        </div>
                    </div>

                    <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-start lg:w-[25%]'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/wealth.svg' alt='Outperform Competitors'
                            className='bg-[#D7FACB] rounded-[5px] px-3 py-1.5 min-w-[80px] min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[80px]' />
                        <div className='flex flex-col justify-between gap-3'>
                            <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Outperform Competitors</div>
                            <div className='text-[10px] xl:text-[10px] 2xl:text-xs font-normal'>Our systematic approach, from goal setting to iterative testing, ensures measurable improvements & sustainable business growth.</div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='fuel relative overflow-hidden'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-2 md:pb-0 z-20">
                    <div>
                        <h3 className='text-[32px] font-semibold text-black leading-[1.5em] font-rbt text-center'>Our Proven CRO Methodology</h3>
                    </div>
                    <p className='text-[18px] font-medium text-black leading-[1.5em] font-rbt text-center mb-4'>We've refined a battle-tested process to propel your online success</p>
                    <div className='mb-[35px] md:w-[90%] m-auto md:mb-0'>
                        <div className='innerfuel mt-10'>
                            <ul className='fs relative mb-[15px] pt-[20px] flex items-center md:flex-row flex-col'>
                                <li className='relative text-start md:pr-10 text-[#243238] sm:w-1/2 w-full md:order-1 order-2'>
                                    <h4 className='text-[#1E1E1E] md:mb-4 mb-[10px] md:mt-0 mt-[10px] text-[17px] leading-8 font-semibold'>Define Your Goals and Objectives</h4>
                                    <div className='text-[#646464] text-[14px] font-normal font-gilroy2 leading-6 mb-5'>
                                        <div className='mb-2 flex items-start gap-1'>
                                            <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                            <p>Start by clearly defining the specific goals you want to achieve through CRO efforts. This could be increasing signups for free trials, generating leads through contact forms, or boosting sales of specific services.</p></div>
                                        <div className='mb-2 flex items-start gap-1'>
                                            <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                            <p>Define success metrics for each goal. These might include conversion rate, number of leads generated, or average order value.</p></div>
                                    </div>
                                </li>
                                <li className='relative md:pl-9 sm:w-1/2 w-full md:order-2 order-1 flex items-center md:justify-end justify-center'>
                                    <img src="/Fuel_Process_Step_1.png" alt="best ecommerce marketing agency" className='h-auto w-[350px]' />
                                </li>
                            </ul>
                            <ul className='sc relative mb-[15px] pt-[20px] flex items-center md:flex-row-reverse flex-col'>
                                <li className='relative text-start md:pl-10 text-[#243238] sm:w-1/2 w-full md:order-1 order-2'>
                                    <h4 className='text-[#1E1E1E] md:mb-4 mb-[10px] md:mt-0 mt-[10px] text-[17px] leading-8 font-semibold'>Understand Your Users</h4>
                                    <p className='text-[#646464] text-base font-medium font-gilroy2 leading-6 mb-[10px]'>Conduct user research to understand your target audience's needs, pain points, and behavior on your website. Here are some methods:</p>
                                    <div className='text-[#646464] text-[14px] font-normal font-gilroy2 leading-6 mb-5'>
                                        <div className='cursor-pointer w-[90%] border border-solid border-[#30486a21] p-3 mb-[10px] rounded-[10px]' onClick={() => toggleDropdown('fst')}>
                                            <div className={`flex items-center justify-between ${activeDropdown === 'fst' ? 'mb-2' : 'mb-0'}`}>
                                                <div className=' flex items-start gap-1 font-semibold'>
                                                    <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                                    <p>Website Analytics</p></div>
                                                <div className='clk'>
                                                    {activeDropdown === 'fst' ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {activeDropdown === 'fst' && <div className='ml-3'>
                                                <p>Utilize tools like Google Analytics to analyze user behavior, such as traffic sources, page visits, time on site, and click-through rates.</p></div>}
                                        </div>
                                        <div className='cursor-pointer w-[90%] border border-solid border-[#30486a21] p-2 mb-[10px] rounded-[10px]' onClick={() => toggleDropdown('scn')}>
                                            <div className={`flex items-center justify-between ${activeDropdown === 'scn' ? 'mb-2' : 'mb-0'}`}>
                                                <div className=' flex items-start gap-1 font-semibold'>
                                                    <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                                    <p>Heatmaps & Session Recordings</p></div>
                                                <div className='clk'>
                                                    {activeDropdown === 'scn' ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {activeDropdown === 'scn' && <div className='mb-2 ml-3'>
                                                <p>Track user interactions with your website to see where they click, scroll, and abandon conversions.</p></div>}
                                        </div>
                                    </div>
                                </li>
                                <li className='relative md:pr-9 sm:w-1/2 w-full md:order-2 order-1 flex items-center md:justify-start justify-center'>
                                    <img src="/Fuel_Process_Step_2.png" alt="Audience segmentation" className='h-auto w-[350px]' />
                                </li>
                            </ul>
                            <ul className='thr relative mb-[15px] pt-[20px] flex items-center md:flex-row flex-col'>
                                <li className='relative text-start md:pr-10 text-[#243238] sm:w-1/2 w-full md:order-1 order-2'>
                                    <h4 className='text-[#1E1E1E] md:mb-4 mb-[10px] md:mt-0 mt-[10px] text-[17px] leading-8 font-semibold'>Conduct a CRO Audit</h4>
                                    <p className='text-[#646464] text-base font-medium font-gilroy2 leading-6 mb-[10px]'>Evaluate your website's current performance from a conversion optimization perspective. Identify elements that might be hindering user experience or hindering conversions. Consider these aspects</p>
                                    <div className='text-[#646464] text-[14px] font-normal font-gilroy2 leading-6 mb-5'>
                                        <div className='cursor-pointer w-[90%] border border-solid border-[#30486a21] p-3 mb-[10px] rounded-[10px]' onClick={() => toggleDropdown('thd')}>
                                            <div className={`flex items-center justify-between ${activeDropdown === 'thd' ? 'mb-2' : 'mb-0'}`}>
                                                <div className=' flex items-start gap-1 font-semibold'>
                                                    <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                                    <p>Website Usability</p></div>
                                                <div>
                                                    {activeDropdown === 'thd' ? <FaChevronUp /> : <FaChevronDown />}
                                                </div>
                                            </div>
                                            {activeDropdown === 'thd' &&
                                                <div className='mb-2 ml-3'>
                                                    <p>Is your website easy to navigate? Can users find the information they need quickly?</p></div>}
                                        </div>
                                        <div className='cursor-pointer w-[90%] border border-solid border-[#30486a21] p-3 mb-[10px] rounded-[10px]' onClick={() => toggleDropdown('fr')}>
                                            <div className={`flex items-center justify-between ${activeDropdown === 'fr' ? 'mb-2' : 'mb-0'}`}>
                                                <div className=' flex items-start gap-1 font-semibold'>
                                                    <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                                    <p>Value Proposition</p></div>
                                                <div>
                                                    {activeDropdown === 'fr' ? <FaChevronUp /> : <FaChevronDown />}
                                                </div>
                                            </div>
                                            {activeDropdown === 'fr' &&
                                                <div className='mb-2 ml-3'>
                                                    <p>Are you clearly communicating the value proposition of your services?</p></div>}
                                        </div>
                                        <div className='cursor-pointer w-[90%] border border-solid border-[#30486a21] p-3 mb-[10px] rounded-[10px]' onClick={() => toggleDropdown('fv')}>
                                            <div className={`flex items-center justify-between ${activeDropdown === 'fv' ? 'mb-2' : 'mb-0'}`}>
                                                <div className=' flex items-start gap-1 font-semibold'>
                                                    <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                                    <p>Call to Actions (CTAs)</p></div>
                                                <div>
                                                    {activeDropdown === 'fv' ? <FaChevronUp /> : <FaChevronDown />}
                                                </div>
                                            </div>
                                            {activeDropdown === 'fv' &&
                                                <div className='mb-2 ml-3'>
                                                    <p>Are your CTAs clear, compelling, and strategically positioned?</p></div>}
                                        </div>
                                        <div className='cursor-pointer w-[90%] border border-solid border-[#30486a21] p-3 mb-[10px] rounded-[10px]' onClick={() => toggleDropdown('sx')}>
                                            <div className={`flex items-center justify-between ${activeDropdown === 'sx' ? 'mb-2' : 'mb-0'}`}>
                                                <div className=' flex items-start gap-1 font-semibold'>
                                                    <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                                    <p>Mobile Responsiveness</p></div>
                                                <div>
                                                    {activeDropdown === 'sx' ? <FaChevronUp /> : <FaChevronDown />}
                                                </div>
                                            </div>
                                            {activeDropdown === 'sx' &&
                                                <div className='mb-2 ml-3'>
                                                    <p>Does your website provide a seamless experience on all devices, including mobile phones and tablets?</p></div>}
                                        </div>
                                    </div>
                                </li>
                                <li className='relative md:pl-9 sm:w-1/2 w-full md:order-2 order-1 flex items-center md:justify-end justify-center'>
                                    <img src="/Fuel_Process_Step_3.png" alt="Google Ads expert" className='h-auto w-[350px]' />
                                </li>
                            </ul>
                            <ul className='fr relative mb-[15px] pt-[20px] flex items-center md:flex-row-reverse flex-col'>
                                <li className='relative text-start md:pl-10 text-[#243238] sm:w-1/2 w-full md:order-1 order-2'>
                                    <h4 className='text-[#1E1E1E] md:mb-4 mb-[10px] md:mt-0 mt-[10px] text-[17px] leading-8 font-semibold'>Prioritize Opportunities for Improvement</h4>
                                    <div className='text-[#646464] text-[14px] font-normal font-gilroy2 leading-6 mb-5'>
                                        <div className='mb-2 flex items-start gap-1'>
                                            <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                            <p>Based on your user research and CRO audit findings, prioritize areas with the highest potential for improvement. Consider factors like impact on conversion rate, ease of implementation, and resource availability.</p></div>
                                    </div>
                                </li>
                                <li className='relative md:pl-9 sm:w-1/2 w-full md:order-2 order-1 flex items-center md:justify-start justify-center'>
                                    <img src="/Fuel_Process_Step_4.png" alt="google ads management service" className='h-auto w-[350px]' />
                                </li>
                            </ul>
                            <ul className='fv relative mb-[15px] pt-[20px] flex items-center md:flex-row flex-col'>
                                <li className='relative text-start md:pr-10 text-[#243238] sm:w-1/2 w-full md:order-1 order-2'>
                                    <h4 className='text-[#1E1E1E] md:mb-4 mb-[10px] md:mt-0 mt-[10px] text-[17px] leading-8 font-semibold'>Develop Hypotheses for Testing</h4>
                                    <div className='text-[#646464] text-[14px] font-normal font-gilroy2 leading-6 mb-5'>
                                        <div className='mb-2 flex items-start gap-1'>
                                            <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                            <p>Formulate clear hypotheses about how specific changes to your website will impact conversion rates. These hypotheses should be based on user research and data insights.</p></div>
                                    </div>
                                </li>
                                <li className='relative md:pl-9 sm:w-1/2 w-full md:order-2 order-1 flex items-center md:justify-end justify-center'>
                                    <img src="/Fuel_Process_Step_5.png" alt="Lead Generation Experts" className='h-auto w-[350px]' />
                                </li>
                            </ul>
                            <ul className='six relative mb-[15px] pt-[20px] flex items-center md:flex-row-reverse flex-col'>
                                <li className='relative text-start md:pl-10 text-[#243238] sm:w-1/2 w-full md:order-1 order-2'>
                                    <h4 className='text-[#1E1E1E] md:mb-4 mb-[10px] md:mt-0 mt-[10px] text-[17px] leading-8 font-semibold'>A/B Testing & Data Analysis</h4>
                                    <div className='text-[#646464] text-[14px] font-normal font-gilroy2 leading-6 mb-5'>
                                        <div className='mb-2 flex items-start gap-1'>
                                            <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                            <p>Implement A/B testing to compare different versions of your website elements and see which ones perform better. A/B testing allows you to test different hypotheses and gather data on which variations drive higher conversions.</p></div>
                                        <div className='mb-2 flex items-start gap-1'>
                                            <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                            <p>Track key metrics and analyze the results of your A/B tests to determine the most effective variations.</p></div>
                                    </div>
                                </li>
                                <li className='relative md:pl-9 sm:w-1/2 w-full md:order-2 order-1 flex items-center md:justify-start justify-center'>
                                    <img src="/Fuel_Process_Step_6.png" alt="mobile app marketing" className='h-auto w-[350px]' />
                                </li>
                            </ul>
                            <ul className='seven relative pt-[20px] flex items-center md:flex-row flex-col'>
                                <li className='relative text-start md:pr-10 text-[#243238] sm:w-1/2 w-full md:order-1 order-2'>
                                    <h4 className='text-[#1E1E1E] md:mb-4 mb-[10px] md:mt-0 mt-[10px] text-[17px] leading-8 font-semibold'>Iteration & Optimization</h4>
                                    <div className='text-[#646464] text-[14px] font-normal font-gilroy2 leading-6 mb-0 md:mb-3'>
                                        <div className='mb-2 flex items-start gap-1'>
                                            <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                            <p>Based on test results, implement the winning variations on your website.</p></div>
                                        <div className='mb-2 flex items-start gap-1'>
                                            <span className='text-[#30486ac4] mt-[5px]'><FaCheck /></span>
                                            <p>This is an iterative process. Continue to monitor performance, conduct new user research, and form new hypotheses for testing to continuously optimize your website for conversions.</p></div>
                                    </div>
                                </li>
                                <li className='relative md:pl-9 sm:w-1/2 w-full md:order-2 order-1 flex items-center md:justify-end justify-center'>
                                    <img src="/Fuel_Process_Step_7.png" alt="Conversion Rate Optimization Services" className='h-auto w-[350px]' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex max-lg:flex-col-reverse overflow-hidden pt-2 md:pt-8 lg:pt-16'>
                <div className='lg:w-[40%] bg-[#30486A] flex flex-col justify-center items-start gap-7 max-lg:py-7 px-4 lg:px-8 xl:px-16 2xl:px-20'>
                    <h2 className='text-[20px] md:text-[25px] 2xl:text-[30px] font-bold text-white'>Transform Clicks into Conversions with Our CRO Expertise</h2>
                    <div className='text-base font-normal text-[#E2DEDC]'>Schedule a free consultation with our experts and discover how we can elevate your business
                    </div>
                    <a href='/contact'><button className='contact-us-btn mainbutn'>Contact Us Now</button></a>
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

            <section className="faq-section flex md:mb-3 flex-col md:flex-row px-4 max-sm:pt-12 py-9 md:py-14 md:px-8 lg:px-16 md:pb-5 xl:mb-10 xl:pt-14 gap-5 lg:gap-8">
                <div className="md:w-1/3 flex flex-col md:gap-7 justify-center max-md:text-center sm:justify-start md:pt-7">
                    <h2 className="text-3xl max-md:flex max-sm:flex-col max-md:justify-center max-md:items-center max-md:gap-2.5 lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800">
                        Frequently Asked <div className="text-[#08A4F7] lg:pt-3 xl:pt-4 2xl:pt-5">Questions</div>
                    </h2>
                    <p className="mt-4 max-md:mb-5 text-base xl:text-lg text-gray-600 leading-snug">
                        Discover key FAQs designed to simplify your marketing and analytics approach, helping you achieve better results with actionable guidance.
                    </p>
                </div>

                <div className="md:w-2/3 max-h-[400px] overflow-y-auto custom-scrollbar py-5 pr-3 lg:pr-5">

                    <div className="flex flex-col gap-5">
                        {content?.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (itemRefs.current[index] = el)}
                                className={`faq-click rounded-2xl px-4 lg:px-12 py-4 lg:py-5 cursor-pointer ${activeIndex === index ? 'text-white bg-[#08A4F7]' : 'text-[#232A42]'
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

export default conversionRateOptimization
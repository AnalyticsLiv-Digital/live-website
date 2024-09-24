import React, { useState } from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const google_tag_manager = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(prevShowMore => !prevShowMore);
    };
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 right-[-12px] md:right-[-20px] lg:right-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
                onClick={onClick}
            >
                <FaArrowRight size={20} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 left-[-12px] md:left-[-20px] lg:left-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
                onClick={onClick}
            >
                <FaArrowLeft size={20} />
            </div>
        );
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    speed: 1000,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 988,
                settings: {
                    dots: false,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    speed: 1000,
                    // nextArrow: false,
                    // prevArrow: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
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
    const content = [
        {
            id: 1,
            path: '/check-up (7).png',
            title: "Conversion API Setup & Implementation",
            description: "Conversion APIs (CAPI) setups for Facebook or any other marketing tools that allows businesses to send data about customer interactions and conversions directly to tool's servers.",
        },
        {
            id: 2,
            path: '/check-up (8).png',
            title: "Offline And Online Data Integration",
            description: "If you're interested in visualizing your offline data as reports and conducting more thorough analysis, importing your offline data into GA4 is a definite step.",
        },
        {
            id: 3,
            path: '/check-up (9).png',
            title: "Form Field Analysis",
            description: "Forms play a significant role in your business and collecting insights from user submissions is valuable, then form tracking becomes essential.",
        },
        {
            id: 4,
            path: '/check-up (10).png',
            title: "Custom Campaign Attribution",
            description: "This solution refers to the practice of creating and defining your own rules or models for assigning credit to various marketing channels or touchpoints in a customer's journey like First click, Last click, Last paid click, First Paid click.",
        },
        {
            id: 5,
            path: '/check-up (11).png',
            title: "Facebook CAPI Implementation For Shopify",
            description: "We have expertise in setting up Enhanced Ecommerce Tracking for Shopify for Facebook with custom approaches to capture maximum amount of ecommerce data and to improve the accuracy and enhancement of tracking",
        },
        {
            id: 6,
            path: '/check-up (12).png',
            title: "User ID Implementation",
            description: "Fortunately, with the help of the user ID implementation solution, we can definitely unify our users and gain better insights. We can apply this solution to both the web and the app.",
        },
        {
            id: 7,
            path: '/check-up (13).png',
            title: "Client ID Implementation",
            description: "Google Analytics automatically tracks Client IDs & displays them in user exploration reports, BigQuery reports & more. However, if you want to analyse users alongside events, enhanced ecommerce data, custom Client ID implementation is the solution.",
        }, {
            id: 8,
            path: '/check-up (14).png',
            title: "App To Web View Stitching Solution",
            description: "When an app includes a webview, Firebase may not be able to track events that occur within the webview. To address this, we must find a solution and the solution to handle this issue is the app to web view stitching.",
        },
        {
            id: 9,
            path: '/check-up (15).png',
            title: "Marketing Pixels Implementation",
            description: "Pixel implementation typically refers to the process of embedding a tracking pixel or snippet of code into a website, app, or digital platform to collect data and monitor user interactions.",
        },
        {
            id: 10,
            path: '/check-up (16).png',
            title: "Shopify And Enhanced E-commerce Integration",
            description: "Integration of Google Analytics 4 (GA4) with a Shopify store allows for the tracking and analysis of user behavior and e-commerce transactions.",
        },
        {
            id: 11,
            path: '/check-up (17).png',
            title: "GDPR Cookie Integration",
            description: "GDPR Cookie Integration refers to the process of incorporating mechanisms and practices into a website or online platform to ensure compliance with the General Data Protection Regulation (GDPR) requirements related to the use of cookies.",
        },
        {
            id: 12,
            path: '/check-up (18).png',
            title: "Website A/B Testing",
            description: "To validate which variant is working as expected. Before making the changes live to 100% of audiences, this can be tested out for a targeted specified audience using A/B tests tools and then it can be rolled out to wider users.",
        }
    ];

    return (
        <>
            <section class="banner relative h-full pt-10 pb-20"
            // style={{backgroundImage: 'url(https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Shape-banner.png)', backgroundRepeat: 'no-repeat', 
            // backgroundSize: 'cover'}}
            >
                <div class="px-10 lg:flex justify-around lg:items-center">
                    <div class="inner-banner lg:w-1/2 text-center px-4 md:px-16 pt-4 flex flex-col justify-center">
                        <h1 class="flex max-sm:flex-col items-center justify-center mb-14">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/GTM_Logo-removebg-preview 2.png" alt="logo" />
                            <span class="2xl:text-[33px] lg:text-[28px] text-[27px] leading-[1.7em] font-['Poppins'] font-semibold text-maintext">Google Tag Manager</span>
                        </h1>
                        <div class="relative">
                            <p class="text-lg font-normal leading-[28px] font-[Poppins]">Enhance Your Digital
                                Strategy
                                with Expert Analytics and Tag Management Solutions. From Google Analytics Audits and Setup to
                                Advanced Custom Event Tracking, We AnalyticsLiv Power Your Data-Driven Success!</p>
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/sparkler (1) 1.png" class="absolute bottom-[-25%] min-[1440px]:bottom-[-60%]"
                                alt="shape" />
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/sparkler 1.png" class="absolute right-[0] top-[-35%]" alt="shape" />
                        </div>
                        <div>
                            <Link href="/contact?id=google-tag-manager">
                                <button className="butn max-[425px]:mt-8 mt-6">CONTACT US</button>
                            </Link>
                        </div>
                    </div>
                    <div className=' w-1/2 max-lg:hidden'>
                        <img src='/gtm-banner.png' className='w-full h-full' alt='gtm' />
                    </div>
                </div>
            </section>

            <div className=' px-4 md:px-20'>
                <div>
                    <h2 className='text-center font-bold text-base text-maintext px-4 md:px-20 leading-[24px]'>Trusted by Organisations Worldwide</h2>
                </div>
                <div className=' max-sm:w-[90dvw] max-lg:w-[90dvw] w-[100%] m-auto'>
                    <Marquee gradient={false} puseOnHover="true">
                        <div className='flex space-x-8 justify-center py-4 px-4 mt-4'>
                            {Trusteddata.brand.map((brand, index) => (
                                <div key={index} className=''>
                                    <img src={brand.logo} alt={brand.alt} className='h-[50px] mx-5' />
                                </div>
                            ))}
                        </div>
                    </Marquee>

                </div>
            </div>
            <section className="py-10 lg:py-16">
                <div>
                    <div className="text-2xl md:text-3xl xl:text-[34px] font-bold xl:font-extrabold text-center">
                        <span className='inline-block relative'>
                            Custom&nbsp;
                            <span
                                className=' block w-[80px] xl:w-[112px] bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
                                style={{
                                    // width: '102px',
                                    height: '5px',
                                    borderRadius: '10px',
                                    top: 'calc(100% )', // Adjust this value as needed
                                    left: '0', // Position relative to the parent span
                                }}
                            ></span>
                        </span>
                        Solutions
                    </div>

                </div>
                <div className="pt-8 w-[90%] mx-auto  carousel-custom">
                    <Slider {...settings}>
                        {content.map((item) => (
                            <div
                                key={item.id}
                                className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5"
                            >
                                <img
                                    src={item.path}
                                    alt="check-up"
                                    className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                                />
                                <h1 className=" text-sm sm:text-[15px] font-semibold mb-2">{item.title}</h1>
                                <div className="text-xs font-normal text-[#152F2E]">
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </section>

            <section className='resources'>
                <div>
                    <div className="text-2xl md:text-3xl font-bold text-center pt-12 xl:font-extrabold xl:text-[34px]">

                        {/* Success Stories */}
                        <span className='inline-block relative'>
                            Success&nbsp;
                            <span
                                className='absolute underline-width-mobile block w-[90px] xl:w-[127px] bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
                                style={{
                                    // width: '117px',
                                    height: '5px',
                                    borderRadius: '10px',
                                    top: 'calc(100% )', // Adjust this value as needed
                                    left: '0', // Position relative to the parent span
                                }}
                            ></span>
                        </span>
                        Stories
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 w-full justify-center justify-items-center items-center gap-4 p-8 md:p-12">

                    <div className='group xl:w-[380px] lg:w-[310px] w-[300px] lg:h-[480px] xl:h-[540px] h-[440px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                        <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                        <a href="https://storage.googleapis.com/website-bucket-uploads/cs/5492gjsetdcghtc86683.pdf" target='_blank'>
                            <div>
                                <img src="/casestudy1.png" alt="" className='w-[350px] h-[250px]  xl:h-[350px]' />
                            </div>
                            <div className='flex flex-col gap-7'>
                                <h3 className='text-base text-slate-900 font-semibold text-left pt-5'>Universal Analytics (GA3) to GA4 Migration for a Website</h3>
                                <div className='flex items-center justify-center bottom-[25px]'>
                                    <div className='flex items-end'>
                                        <div className='flex w-[200px] m-auto items-center py-2.5 justify-center gap-1.5 border border-solid text-center border-maintext  cursor-pointer rounded-[10px] group-hover:bg-maintext  font-medium'>
                                            <button className='font-medium text-maintext  group-hover:text-white text-sm'>View</button>
                                            <span className='text-homepagebtn group-hover:text-white'>
                                                <img src='/arrow-right (8).png' alt='arrow right' className='h-4 w-4 group-hover:hidden' />
                                                <img src='/arrow-right (7).png' alt='arrow right hover' className='h-4 w-4 hidden group-hover:block' />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='max-lg:hidden group xl:w-[380px] lg:w-[310px] w-[300px] xl:h-[540px] h-[480px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                        <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                        <a href="https://storage.googleapis.com/website-bucket-uploads/cs/dv66hpaft245xdg90y5vr.pdf" target='_blank'>
                            <div>
                                <img src="/castdyinner7.jpg" alt="" className='w-[350px] h-[250px] xl:h-[350px]' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Maximising Revenue and User Insights using Firebase In App Purchases for Mobile Apps</h3>
                                <div className='flex items-center justify-center bottom-[25px]' >
                                    <div className='flex w-[200px] m-auto items-center py-2.5 justify-center gap-1.5 border border-solid text-center border-maintext  cursor-pointer rounded-[10px] group-hover:bg-maintext  font-medium'>
                                        <button className='font-medium text-maintext  group-hover:text-white text-sm'>View</button>
                                        <span className='text-homepagebtn group-hover:text-white'>
                                            <img src='/arrow-right (8).png' alt='arrow right' className='h-4 w-4 group-hover:hidden' />
                                            <img src='/arrow-right (7).png' alt='arrow right hover' className='h-4 w-4 hidden group-hover:block' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='max-lg:hidden group xl:w-[380px] lg:w-[310px] w-[300px] xl:h-[540px] h-[480px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                        <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                        <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                            <div>
                                <img src="/casestudy2.png" alt="" className='w-[350px] h-[250px] xl:h-[350px]' />
                            </div>
                            <div className='flex flex-col gap-2 xl:gap-4'>

                                <h3 className='text-bas text-slate-900 font-semibold text-left pt-2'>From Inefficiency to Precision: Learn How AnalyticsLiv Achieved a 78% CPC Reduction for a News Publisher Giant</h3>
                                {/* <div className='grid grid-rows-2 gap-10 pt-10 2xl:pt-14'> */}
                                <div className='flex items-center justify-center bottom-[25px]'>
                                    <div className='flex items-end'>
                                        <div className='flex w-[200px] m-auto items-center py-2.5 justify-center gap-1.5 border border-solid text-center border-maintext  cursor-pointer rounded-[10px] group-hover:bg-maintext  font-medium'>
                                            <button className='font-medium text-maintext  group-hover:text-white text-sm'>View</button>
                                            <span className='text-homepagebtn group-hover:text-white'>
                                                <img src='/arrow-right (8).png' alt='arrow right' className='h-4 w-4 group-hover:hidden' />
                                                <img src='/arrow-right (7).png' alt='arrow right hover' className='h-4 w-4 hidden group-hover:block' />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {showMore && (
                        <>
                            <div className='lg:hidden group xl:w-[380px] lg:w-[310px] w-[300px] xl:h-[540px] h-[480px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                                <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                <a href="https://storage.googleapis.com/website-bucket-uploads/cs/dv66hpaft245xdg90y5vr.pdf" target='_blank'>
                                    <div>
                                        <img src="/castdyinner7.jpg" alt="" className='w-[350px] h-[250px] xl:h-[350px]' />
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Maximising Revenue and User Insights using Firebase In App Purchases for Mobile Apps</h3>
                                        <div className='flex items-center justify-center bottom-[25px]' >
                                            <div className='flex w-[200px] m-auto items-center py-2.5 justify-center gap-1.5 border border-solid text-center border-maintext  cursor-pointer rounded-[10px] group-hover:bg-maintext  font-medium'>
                                                <button className='font-medium text-maintext  group-hover:text-white text-sm'>View</button>
                                                <span className='text-homepagebtn group-hover:text-white'>
                                                    <img src='/arrow-right (8).png' alt='arrow right' className='h-4 w-4 group-hover:hidden' />
                                                    <img src='/arrow-right (7).png' alt='arrow right hover' className='h-4 w-4 hidden group-hover:block' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='lg:hidden group xl:w-[380px] lg:w-[310px] w-[300px] xl:h-[540px] h-[480px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                                <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                                    <div>
                                        <img src="/casestudy2.png" alt="" className='w-[350px] h-[250px] xl:h-[350px]' />
                                    </div>
                                    <div className='flex flex-col gap-2 xl:gap-4'>

                                        <h3 className='text-bas text-slate-900 font-semibold text-left pt-2'>From Inefficiency to Precision: Learn How AnalyticsLiv Achieved a 78% CPC Reduction for a News Publisher Giant</h3>
                                        {/* <div className='grid grid-rows-2 gap-10 pt-10 2xl:pt-14'> */}
                                        <div className='flex items-center justify-center bottom-[25px]'>
                                            <div className='flex items-end'>
                                                <div className='flex w-[200px] m-auto items-center py-2.5 justify-center gap-1.5 border border-solid text-center border-maintext  cursor-pointer rounded-[10px] group-hover:bg-maintext  font-medium'>
                                                    <button className='font-medium text-maintext  group-hover:text-white text-sm'>View</button>
                                                    <span className='text-homepagebtn group-hover:text-white'>
                                                        <img src='/arrow-right (8).png' alt='arrow right' className='h-4 w-4 group-hover:hidden' />
                                                        <img src='/arrow-right (7).png' alt='arrow right hover' className='h-4 w-4 hidden group-hover:block' />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </>
                    )}
                </div>
                <div className="lg:hidden flex justify-center mb-7">
                    <button
                        onClick={toggleShowMore}
                        className="px-4 py-2 bg-maintext  text-white font-medium rounded-[10px]"
                    >
                        {showMore ? 'Show Less' : 'View More'}
                    </button>
                </div>
            </section>

        </>
    )
}

export default google_tag_manager

export async function getServerSideProps(context) {
    // Fetch data from external API

    const res = await fetch(`${process.env.domain}/api/ga4brands`)
    const brandsdata = await res.json()


    //console.log(brandsdata);
    // Pass data to the page via props
    return { props: { brandsdata } }
}



{/* <section class="audit bg-back py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div class="inner-audit mt-4 px-4 md:text-center lg:text-left md:px-20 pt-4 pb-4 md:pb-16">
                        <div class="top-audit grid lg:grid-cols-2 items-center gap-4">
                            <div class="left-audit">
                                <h2 class="text-[50px] font-bold mb-14 leading-snug">Google Analytics, Firebase audit services
                                </h2>
                                <p class="text-base font-medium">In need to validate whether your Google Analytics is tracking
                                    properly?
                                    AnalyticsLiv can provide detailed audits to validate the health of analytics data setup.
                                    Google Analytics audit will cover the following:</p>
                            </div>
                            <div class="right-audit flex lg:justify-end justify-center">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Audit section.png" alt="Audit img" />
                            </div>
                        </div>
                        <div class="bottom-audit mt-8">
                            <div class="services grid items-center md:grid-cols-3 lg:grid-cols-6 py-7 md:gap-8 gap-16">
                                <div class="item-1 text-center cursor-pointer">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Service-1.png" class="mx-auto" alt="gaps_img" />
                                    <h6 class="text-service text-base font-semibold pt-5">Gaps in data
                                        tracking</h6>
                                </div>
                                <div class="item-2 text-center cursor-pointer">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/service-2.png" class="mx-auto" alt="gaps_img" />
                                    <h6 class="text-base font-semibold pt-5">Errors or bugs
                                        reported</h6>
                                </div>
                                <div class="item-3 text-center cursor-pointer">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/service-3.png" class="mx-auto" alt="gaps_img" />
                                    <h6 class="text-service text-base font-semibold pt-5">Account or product
                                        linking</h6>
                                </div>
                                <div class="item-4 text-center cursor-pointer">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/service-4.png" class="mx-auto" alt="gaps_img" />
                                    <h6 class="text-service text-base font-semibold pt-5">Data tracking</h6>
                                </div>
                                <div class="item-5 text-center cursor-pointer">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/service-5.png" class="mx-auto" alt="gaps_img" />
                                    <h6 class="text-service text-base font-semibold pt-5">Conversions</h6>
                                </div>
                                <div class="item-6 text-center cursor-pointer">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Service-6.png" class="mx-auto" alt="gaps_img" />
                                    <h6 class="text-service text-base font-semibold pt-5">Account setup</h6>
                                </div>
                            </div>
                            <div class="botam-text mt-5 text-center">
                                <p class="text-base font-medium">Our team of certified experts will fix the problems that are
                                    observed. This will also cover recommended and suggested tracking which might be missing to
                                    avail analysis for businesses.</p>
                                 <buutton
                                    class="butn  text-center text-white rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug mt-[30px]">
                                    Get Basic to Advanced
                                    Audit here
                                </button>
                                <Link href="/contact?id=google-tag-manager">
                                    <button className="butn max-[425px]:mt-0 mt-6">Get Basic to Advanced
                                        Audit here</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="account-setup py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-account mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-account flex lg:justify-end justify-center">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Account_setup_IMG.png" alt="Account_setup_IMG" />
                        </div>
                        <div class="right-account lg:text-left text-center">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-[30px]">Google Analytics 4
                                account setup</h1>
                            <p class="text-base font-medium leading-normal mb-[30px]">Our experts can assist to enable
                                correct setup and implementation of a new or existing Google Analytics 4 account. We make
                                sure that the analytics account is configured correctly and that you are capturing the
                                necessary business data to use in your data analysis as per standard practise.
                            </p>
                             <buutton
                                class="w-[270px] text-center text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug mt-[30px]">
                                Contact us for more
                                details
                            </button>
                            <Link href="/contact?id=google-tag-manager">
                                <button className="butn max-[425px]:mt-0 mt-6">Contact us for more
                                    details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <section class="consulting bg-back py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-consulting mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-con lg:text-left text-center lg:order-1 order-2">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-[30px]">Google Analytics
                                consulting services</h1>
                            <p class="text-base font-medium leading-normal mb-[30px]">Need help getting your analytics to do
                                more out of current tracking? Our team of Google Analytics experts can consult with you to
                                determine your KPIs. We can interpret your existing data, recommend solutions to aggregate data
                                across multiple platforms (app, web), create customizable reports, set up conversions, journey
                                funnels and more.</p>
                        <div class="flex items-center lg:flex-nowrap flex-wrap justify-center">
                                <button
                                    class="w-[270px] text-center text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug mt-[30px]">
                                    Get a quote for ongoing consultancy
                                </button>
                                <button
                                    class="w-[270px] text-center sm:ml-2.5 text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[29px] px-[91px] leading-snug mt-[30px]">
                                    Let’s Chat
                                </button>
                            </div>
                        </div>
                        <div class="right-con flex lg:justify-end justify-center lg:order-2 order-1">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Setup_IMG.png" alt="Setup_IMG" />
                        </div>
                    </div>
                </div>
            </section>


            <section class="tag-manager py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-tag mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-tag flex lg:justify-end justify-center">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Tag-manager.png" alt="Tag-manager" />
                        </div>
                        <div class="right-tag lg:text-left text-center">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-10">Google Tag Manager
                                Health Check</h1>
                            <p class="text-base font-medium leading-normal mb-10">Are you unsure about what is being configured
                                in your tag management system? No need to worry. <br /><br /> <span class="font-bold">What will be
                                    covered ?</span> <br /><br />We can conduct a comprehensive and efficient review of your
                                existing Google Tag Manager set up. This involves, identifying and eliminating unnecessary or
                                outdated tags, triggers, and variables, as well as reorganizing the structure to improve
                                efficiency and performance <br /><br />By performing this cleanup, we aim to simplify the tracking
                                process for analytics and marketing tags on your website. This ensures that only relevant and
                                crucial tracking elements are in use, and flow in our marketing platforms like Google Analytics,
                                Google Ads, Facebook etc.
                            </p>
                             <buutton
                                class="w-[270px] text-center text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section class="Server-side bg-back py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-Server-side mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-server lg:text-left text-center lg:order-1 order-2">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-[50px]">Server-side Tagging</h1>
                            <p class="text-base font-medium leading-normal mb-[50px]">Server-side tagging is a method used in
                                web analytics and digital marketing to manage and deploy various tracking tags and scripts on a
                                website's server rather than directly on the client's browser. This approach offers several
                                advantages and is becoming increasingly popular due to privacy concerns, performance
                                optimization, and the need for more control over data collection.<br /><br />Some other key
                                aspects of the server-side tagging are:<br />Improve the page load time, reduce ad blocker
                                impact, flexibility, improve securities, and many more. <br /><br />If you're interested in
                                implementing server-side tagging, please feel free to contact us for more details.</p>
                             <buutton
                                class="w-[270px] text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                        <div class="right-server flex lg:justify-end justify-center lg:order-2 order-1">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Server_IMG.png" alt="Server_IMG" />
                        </div>
                    </div>
                </div>
            </section>


            <section class="fb-conversion py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-fb mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-fb flex lg:justify-end justify-center">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Facebook_API_IMG.png" alt="Facebook-Conversion" />
                        </div>
                        <div class="right-fb lg:text-left text-center">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-10">Facebook Conversion API
                                implementation for Shopify</h1>
                            <p class="text-base font-medium leading-normal mb-10">We have expertise in setting up Enhanced
                                Ecommerce Tracking for Shopify for Facebook with custom approaches to capture maximum amount of
                                ecommerce data and to improve the accuracy and enhancement of tracking we can implement
                                conversion API for facebook by setting up Google Tag Manager Server Side Container and configure
                                it to deduplicate the browser and server-side events data. We have already achieved 5-10% more
                                data collection for our clients using this implementation.If you're interested in doing the
                                same, why delay? Get in touch with us for further information.</p>
                             <buutton
                                class="w-[270px] text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section class="e-commerce bg-back py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-e-commerce mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-e-commerce lg:text-left text-center lg:order-1 order-2">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-[50px]">Enhanced E-commerce
                                Implementation</h1>
                            <p class="text-base font-medium leading-normal mb-[50px]">which products are performing well on your
                                website/app or struggling to grasp the situation, it suggests that managing and comprehending
                                your <br />e-commerce data effectively might be a challenge.<br />Yes, We've supported numerous
                                clients in implementing accurate <br />e-commerce data and boosting their growth through a range
                                of strategies.<br /><br />With enhanced ecommerce, you can track various stages of the customer
                                journey, including product views, product detail, adding items to the cart, checkout journey
                                steps, and completing purchases. This provides valuable data to analyze user interactions and
                                identify areas for improvement in the e-commerce process in the website.</p>
                             <buutton
                                class="w-[270px] text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                        <div class="right-e-commerce flex lg:justify-end justify-center lg:order-2 order-1
                ">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Ecommerce_Implementation_img.png" alt="E-commerce_IMG" />
                        </div>
                    </div>
                </div>
            </section>


            <section class="custom-event py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-custom-event mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-fb flex lg:justify-end justify-center">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Custom_Event_tracking_Section_left.png" alt="Custom_Event_tracking" />
                        </div>
                        <div class="right-custom-event lg:text-left text-center">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-10">Custom Event Tracking</h1>
                            <p class="text-base font-medium leading-normal mb-10">If you're uncertain about what's happening on
                                your website/app, such as which sections users are engaging with the most, or which buttons,
                                forms, and other elements are performing well, you might be missing out on valuable insights in
                                the website, but do not worry, we are here to help!<br /><br />The Custom event tracking in GA4
                                can help you gather this information, providing clarity on user behavior and interaction
                                patterns. This knowledge can guide improvements to your website's layout, content, and
                                functionality, leading to enhanced user experiences and better outcomes for your business.
                                Unlike default tracking, which covers basic activities like pageviews, custom event tracking
                                lets you capture specific actions that are crucial to your business goals.</p>
                             <buutton
                                class="w-[270px] text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section class="integration bg-back py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-integration mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-integration lg:text-left text-center lg:order-1 order-2">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-[50px]">Integration of Offline &
                                Online Data</h1>
                            <p class="text-base font-medium leading-normal mb-[50px]">If you're interested in visualizing your
                                offline data as reports and conducting more thorough analysis, importing your offline data into
                                GA4 is a definite step. <br /><br />After successfully importing all your offline data by
                                following specific steps into GA4, you'll have the capability to view and analyze your
                                information directly within the platform. This integration will provide you with the opportunity
                                to gather valuable insights by merging data from both online and offline sources, giving you a
                                complete perspective on your business interactions.</p>
                             <buutton
                                class="w-[270px] text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                        <div class="right-integration flex lg:justify-end justify-center lg:order-2 order-1">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/intregration.png" alt="integration_IMG" />
                        </div>
                    </div>
                </div>
            </section>


            <section class="form-field py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-form-field mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-fb flex lg:justify-end justify-center">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/form-field.png" alt="form-field" />
                        </div>
                        <div class="right-form-field lg:text-left text-center">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-10">Form Field Analysis</h1>
                            <p class="text-base font-medium leading-normal mb-10">Forms play a significant role in your business
                                and collecting insights from user submissions is valuable, then form tracking becomes essential.
                                <br /><br />With the help of the form field analysis, we can capture user information, such as
                                contact details, subscriptions, registrations, and more. The form field analysis can help to
                                determine the objectives of each form on your website. Is it for lead generation, sign-ups,
                                inquiries, or something else?<br /><br />We can calculate the percentage of users who start
                                filling out a form versus those who successfully submit it. This helps identify potential
                                drop-off points.
                            </p>
                             <buutton
                                class="w-[270px] text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section class="configuration bg-back py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-configuration mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-configuration lg:text-left text-center lg:order-1 order-2">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-[50px]">Configuration of custom
                                <br />dimensions
                            </h1>
                            <p class="text-base font-medium leading-normal mb-[50px]">If you need to include extra information
                                with your events in GA4 or Firebase, we can efficiently manage this within the analytics
                                platform. Custom dimensions and metrics are valuable features that enhance our data analysis
                                capabilities. These dimensions allow us to enrich our event tracking with the specific
                                information that matters most to our analysis. Please feel free to reach out to us anytime for
                                further assistance and support. We're here to help.</p>
                             <buutton
                                class="w-[270px] text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                        <div class="right-configuration flex lg:justify-end justify-center lg:order-2 order-1">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/configuration.png" alt="configuration_IMG" />
                        </div>
                    </div>
                </div>
            </section>


            <section class="user-id py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-user-id mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-fb flex lg:justify-end justify-center">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/user-id.png" alt="user-id" />
                        </div>
                        <div class="right-user-id lg:text-left text-center">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-10">User id implementation</h1>
                            <p class="text-base font-medium leading-normal mb-10">There are countless ways in which users can
                                explore our website/app. Keeping track of the same user's journey across different
                                devices/browsers/platforms etc. is tricky without any custom approach.<br /><br />Fortunately,
                                with the help of the user ID implementation solution, we can definitely unify our users and gain
                                better insights. We can apply this solution to both the web and the app. We've already assisted
                                many clients in uniting their users and using this information to make smart business decisions
                                in the field of analytics. Why wait? Please contact us to get in touch with us, and let's start
                                implementing these improvements in your website or app right away!</p>
                             <buutton
                                class="w-[270px] text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section class="client-id bg-back py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-client-id mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-client-id lg:text-left text-center lg:order-1 order-2">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-[50px]">Client id implementation</h1>
                            <p class="text-base font-medium leading-normal mb-[50px]">Google Analytics automatically tracks
                                Client IDs and displays them in user exploration reports, BigQuery reports, and more. However,
                                if you want to analyse users alongside events, enhanced ecommerce data, or conduct other types
                                of in-depth analysis, custom Client ID implementation is the solution. <br /><br />It enables
                                you to use Client IDs for comprehensive user analysis with various parameters, enhancing your
                                ability to gain valuable insights from your data.</p>
                             <buutton
                                class="w-[270px] text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                        <div class="right-client-id flex lg:justify-end justify-center lg:order-2 order-1">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Client_id_implementation_Section_right.png" alt="client-id_IMG" />
                        </div>
                    </div>
                </div>
            </section>


            <section class="app-to-web py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-app-to-web mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-app flex lg:justify-end justify-center">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/app-to-web.png" alt="app-to" />
                        </div>
                        <div class="right-app lg:text-left text-center">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-10">App to web view <br />stitching
                                solution</h1>
                            <p class="text-base font-medium leading-normal mb-10">When an app includes a webview, Firebase may
                                not be able to track events that occur within the webview. To address this, we must find a
                                solution and the solution to handle this issue is the app to web view
                                stitching.<br /><br />We've assisted numerous clients in addressing this significant issue
                                within their apps. Our solution aids in enhancing and unifying user journeys in analytics,
                                contributing to improved insights and user experiences.</p>
                             <buutton
                                class="w-[270px] text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section class="pixels bg-back py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-pixels mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                        <div class="left-pixels lg:text-left text-center lg:order-1 order-2">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-[50px]">Pixels implementation</h1>
                            <p class="text-base font-medium leading-normal mb-[50px]">Pixel implementation typically refers to
                                the process of embedding a tracking pixel or snippet of code into a website, app, or digital
                                platform to collect data and monitor user interactions. Pixels are often used for various
                                purposes, including analytics, advertising, and remarketing. <br /><br />We're here to provide
                                support and implement various types of pixels, including those for platforms like Google Ads,
                                Facebook, Twitter, TikTok, and more. Whether you need assistance with tracking, analytics, or
                                advertising, we will cover each of them.</p>
                             <buutton
                                class="w-[270px] text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                        <div class="right-pixels relative flex lg:justify-end justify-center lg:order-2 oorder-1">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Vector.png" alt="frame_IMG" />
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Frame.png"
                                class="absolute min-[425px]:w-[330px] min-[425px]:top-[15%] min-[425px]:left-[11%] md:top-[18%] md:left-[17%] md:w-[415px] lg:top-[17%] lg:left-[12%] lg:w-[340px] min-[1440px]:w-[430px] min-[1440px]:left-[14%]"
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section class="shopify py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div
                        class="inner-shopify mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 md:gap-8 gap-16">
                        <div class="left-shopify flex lg:justify-end justify-center relative">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/shopify.png" alt="shopify" />
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/Heart.png"
                                class="absolute min-[375px]:right-[15%] min-[375px]:top-[18%] min-[425px]:right-[15%] min-[425px]:top-[18%] md:right-[21%] lg:right-[16%] md:top-[19%] lg:top-[19%] min-[1440px]:right-[18%]"
                                alt="" />
                        </div>
                        <div class="right-shopify lg:text-left text-center">
                            <h1 class="text-black text-[50px] font-bold leading-[75px] mb-10">Shopify and enhanced ecommerce
                                integration</h1>
                            <p class="text-base font-medium leading-normal mb-10">Integration of Google Analytics 4 (GA4) with a
                                Shopify store allows for the tracking and analysis of user behavior and e-commerce transactions.
                                Through GA4 integration in Shopify and with the help of custom approaches, you can
                                comprehensively track enhanced e-commerce journeys and capture all relevant events.
                                Additionally, you have the flexibility to include various custom parameters with enhanced
                                e-commerce data, enabling clients to perform in-depth product analysis.<br /><br />We've
                                successfully assisted numerous clients with Shopify integration, leading to significant
                                increases in their revenue. If you're looking to optimize your Shopify store's performance and
                                gain valuable insights, our expertise in GA4 integration can help you achieve your goals.<br />
                            </p>
                             <buutton
                                class="w-[270px] text-white bg-blue-500 hover:bg-blue-600 rounded-[15px] shadow-2xl text-[17px] font-semibold py-[18px] px-[37px] leading-snug">
                                Do your GTM health check up now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
 */}
{/* <section class="faQ py-4">
                <div class="max-w-screen-xl mx-auto">
                    <div class="inner-faQ mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16">
                        <h2 class="text-black text-[50px] text-center font-bold mb-[34px]">Frequently Asked Questions</h2>



                        <form>
                            <label for="default-search"
                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative mb-[52px]">
                                <input type="search" id="default-search"
                                    class="block w-full py-[27px] px-10 min-[375px]:text-base md:text-xl text-[#999999] border border-gray-300 rounded-[100px] bg-back focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search your question here ..." required />
                                <div class="absolute inset-y-0 right-10 flex items-center pointer-events-none">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/search_icon.png" class="min-[375px]:h-[30px] min-[375px]:w-[30px] md:h-[40px] md:w-[40px]" alt="search_icon" />
                                </div>
                            </div>
                            <div class="Questions grid md:grid-cols-1 lg:grid-cols-2 gap-x-[36px] min-[375px]:gap-y-10 md:gap-y-[60px]">
                                <div class="first bg-back rounded-[100px] flex items-center text-center min-[375px]:px-10 min-[375px]:py-5 lg:px-[30px] lg:py-5 min-[1440px]:px-[60px] min-[1440px]:py-[30px]">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/arrow1.png" class="min-[375px]:h-[30px] min-[375px]:w-[30px] md:h-10 md:w-10" alt="question_arrow" />
                                    <h3 class="min-[375px]:text-base text-black md:text-xl font-semibold">What is the difference between property and data stream ?</h3>
                                </div>
                                <div class="first bg-back rounded-[100px] flex items-center text-center min-[375px]:px-10 min-[375px]:py-5 lg:px-[30px] lg:py-5 min-[1440px]:px-[60px] min-[1440px]:py-[30px]">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/arrow1.png" class="min-[375px]:h-[30px] min-[375px]:w-[30px] md:h-10 md:w-10" alt="question_arrow" />
                                    <h3 class="min-[375px]:text-base text-black md:text-xl font-semibold">What is the difference between property and data stream ?</h3>
                                </div>
                                <div class="first bg-back rounded-[100px] flex items-center text-center min-[375px]:px-10 min-[375px]:py-5 lg:px-[30px] lg:py-5 min-[1440px]:px-[60px] min-[1440px]:py-[30px]">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/arrow1.png" class="min-[375px]:h-[30px] min-[375px]:w-[30px] md:h-10 md:w-10" alt="question_arrow" />
                                    <h3 class="min-[375px]:text-base text-black md:text-xl font-semibold">What is the difference between property and data stream ?</h3>
                                </div>
                                <div class="first bg-back rounded-[100px] flex items-center text-center min-[375px]:px-10 min-[375px]:py-5 lg:px-[30px] lg:py-5 min-[1440px]:px-[60px] min-[1440px]:py-[30px]">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_sp/arrow1.png" class="min-[375px]:h-[30px] min-[375px]:w-[30px] md:h-10 md:w-10" alt="question_arrow" />
                                    <h3 class="min-[375px]:text-base text-black md:text-xl font-semibold">What is the difference between property and data stream ?</h3>
                                </div>
                            </div>
                        </form>



                    </div>
                </div>

                // [#0D8CA4]
            </section>*/}
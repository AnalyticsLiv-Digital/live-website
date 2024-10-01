import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cookieLanding = ({ brandsdata }) => {

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

    const content = [
        {
            id: 1,
            path: '/check-up (7).png',
            title: "Regulatory Compliance",
            description: "Ensure your business complies with GDPR, CCPA, and other privacy laws.",
        },
        {
            id: 2,
            path: '/check-up (8).png',
            title: "Enhanced Transparency",
            description: "Build trust with users by being transparent about data collection and improve your brand’s reputation through privacy-focused practices.",
        },
        {
            id: 3,
            path: '/check-up (9).png',
            title: "User Control",
            description: "Empower users to make informed decisions about their data and make a smoother browsing experience.",
        },
        {
            id: 4,
            path: '/check-up (7).png',
            title: "Third-Party Service Continuity",
            description: "Ensure continued use of advertising, analytics, and marketing platforms.",
        },
        {
            id: 5,
            path: '/check-up (8).png',
            title: "Future-Proofing",
            description: "Prepare for evolving privacy regulations worldwide.",
        },
        // {
        //     id: 6,
        //     path: '/check-up (12).png',
        //     title: "User ID Implementation",
        //     description: "Fortunately, with the help of the user ID implementation solution, we can definitely unify our users and gain better insights. We can apply this solution to both the web and the app.",
        // },
        // {
        //     id: 7,
        //     path: '/check-up (13).png',
        //     title: "Client ID Implementation",
        //     description: "Google Analytics automatically tracks Client IDs & displays them in user exploration reports, BigQuery reports & more. However, if you want to analyse users alongside events, enhanced ecommerce data, custom Client ID implementation is the solution.",
        // }, {
        //     id: 8,
        //     path: '/check-up (14).png',
        //     title: "App To Web View Stitching Solution",
        //     description: "When an app includes a webview, Firebase may not be able to track events that occur within the webview. To address this, we must find a solution and the solution to handle this issue is the app to web view stitching.",
        // },
        // {
        //     id: 9,
        //     path: '/check-up (15).png',
        //     title: "Marketing Pixels Implementation",
        //     description: "Pixel implementation typically refers to the process of embedding a tracking pixel or snippet of code into a website, app, or digital platform to collect data and monitor user interactions.",
        // },
        // {
        //     id: 10,
        //     path: '/check-up (16).png',
        //     title: "Shopify And Enhanced E-commerce Integration",
        //     description: "Integration of Google Analytics 4 (GA4) with a Shopify store allows for the tracking and analysis of user behavior and e-commerce transactions.",
        // },
        // {
        //     id: 11,
        //     path: '/check-up (17).png',
        //     title: "GDPR Cookie Integration",
        //     description: "GDPR Cookie Integration refers to the process of incorporating mechanisms and practices into a website or online platform to ensure compliance with the General Data Protection Regulation (GDPR) requirements related to the use of cookies.",
        // },
        // {
        //     id: 12,
        //     path: '/check-up (18).png',
        //     title: "Website A/B Testing",
        //     description: "To validate which variant is working as expected. Before making the changes live to 100% of audiences, this can be tested out for a targeted specified audience using A/B tests tools and then it can be rolled out to wider users.",
        // }
    ];

    return (
        <div className=''>
            <section className='flex px-28 w-full justify-between gap-12 2xl:gap-16 py-16 2xl:py-24'>
                <div className='w-1/2'>
                    <div className='text-txt text-[30px] 2xl:text-[35px] font-semibold leading-10 text-left pb-8'>Stay compliant and secure -
                        Embrace Cookie Consent Mode</div>
                    <div className='text-base font-normal text-left pb-16'>As a trusted Google Analytics partner, Analyticsliv helps businesses to meet privacy goals with effective Cookie Consent Mode strategies, ensuring GDPR compliance.</div>
                    <div className='flex justify-start gap-8'>
                        <button className='butn'>
                            Watch Our Webinar
                        </button>
                        <button className='butn'>
                            Let’s Get in Touch
                        </button>
                    </div>
                </div>
                <div className='w-1/2 relative'>
                    <img src='/GDPR_Page_Main_Img_1_Left 1.png' alt='GDRP_Cookie' className='absolute w-[350px] 2xl:w-[380px]' />
                    <img src='/GDPR_Page_Main_Img_1_Right 1.png' alt='GDRP_Cookie' className='absolute left-[300px] 2xl:left-[350px] top-[50px]' />
                </div>
            </section>
            <section className='pt-12 px-28'>
                <div className='text-3xl font-bold text-[#30486A] pb-3 text-center'>
                    <span className='inline-block relative'>
                        Unlock&nbsp;
                        <span
                            className='absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
                            style={{
                                width: '110px',
                                height: '5px',
                                borderRadius: '10px',
                                top: 'calc(100% )',
                                left: '0',
                            }}
                        ></span>
                    </span>
                    new insights with Cookie Consent Mode
                </div>
                <div className='flex justify-evenly gap-5 py-10 '>
                    <div className='border border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out h-[180px] w-[278px]'>
                        <div className='flex flex-col justify-center items-center h-full px-10'>
                            <img src='/regulation.png' alt='regulatin' className='pb-4' />
                            <div className='text-[#152F2E] text-sm font-semibold text-center'>Adherence to
                                Privacy Regulations</div>
                        </div>
                    </div>
                    <div className='border border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out h-[180px] w-[278px]'>
                        <div className='flex flex-col justify-center items-center h-full px-10'>
                            <img src='/user-trust.png' alt='regulatin' className='pb-4' />
                            <div className='text-[#152F2E] text-sm font-semibold text-center'>Strengthened
                                User Trust</div>
                        </div>
                    </div>
                    <div className='border border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out h-[180px] w-[278px]'>
                        <div className='flex flex-col justify-center items-center h-full px-10'>
                            <img src='/data-classification.png' alt='regulatin' className='pb-4' />
                            <div className='text-[#152F2E] text-sm font-semibold text-center'>Enhanced Data Collection
                                Practices</div>
                        </div>
                    </div>
                    <div className='border border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out h-[180px] w-[278px]'>
                        <div className='flex flex-col justify-center items-center h-full px-10'>
                            <img src='/social-media-marketing.png' alt='regulatin' className='pb-4' />
                            <div className='text-[#152F2E] text-sm font-semibold text-center'>Precision in Advertising
                                Campaigns</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pt-8 px-28'>
                <div className='text-3xl font-bold text-[#30486A] pb-14 text-center'>
                    <span className='inline-block relative'>
                        Discover&nbsp;
                        <span
                            className='absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
                            style={{
                                width: '110px',
                                height: '5px',
                                borderRadius: '10px',
                                top: 'calc(100% )',
                                left: '0',
                            }}
                        ></span>
                    </span>
                    our recommendations
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 place-items-center'>
                    <div className='flex flex-col max-[340px]:w-[280px] w-[340px] h-[200px] 2xl:w-[380px] 2xl:h-[230px] border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#bdbdbd] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out justify-around items-center px-4 md:px-5 py-5 text-center'>
                        <img src="/privacy (2).png" alt='privacy' className='h-10 w-10 md:h-12 md:w-12' />
                        <h1 className='sm:text-[15px] font-semibold'>Cookie Consent Mode</h1>
                        <div className='text-xs font-normal text-[#152F2E]'>
                            Cookie Consent Mode in Google Analytics helps businesses align data collection with user privacy preferences, ensuring compliance with GDPR and CCPA.
                        </div>
                    </div>
                    <div className='flex flex-col max-[340px]:w-[280px] w-[340px] h-[200px] 2xl:w-[380px] 2xl:h-[230px] border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#bdbdbd] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out justify-around items-center px-4 md:px-5 py-5 text-center'>
                        <img src="/Consent_Managemnt.png" alt='Consent_Managemnt' className='h-10 w-10 md:h-12 md:w-12' />
                        <h1 className='sm:text-[15px] font-semibold'>Optimizing Data Use with Consent Management</h1>
                        <div className='text-xs font-normal text-[#152F2E]'>
                            Effective consent management allows you to collect and use data legally and ethically by securing clear user permissions.                        </div>
                    </div>
                    <div className='flex flex-col max-[340px]:w-[280px] w-[340px] h-[200px] 2xl:w-[380px] 2xl:h-[230px] border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#bdbdbd] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out justify-around items-center px-4 md:px-5 py-5 text-center'>
                        <img src="/web-privacy.png" alt='web-privacy' className='h-10 w-10 md:h-12 md:w-12' />
                        <h1 className='sm:text-[15px] font-semibold'>Preparing for Privacy-First Web Analytics</h1>
                        <div className='text-xs font-normal text-[#152F2E]'>
                            As privacy gains importance, adapt your analytics to focus on user privacy by understanding new laws, using consent tools, and collecting data responsibly.                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-[#E8FBFB] py-8 flex flex-col px-4 lg:px-20 mt-[75px]">
                <h2 className="gradient-text text-center font-bold text-base lg:text-3xl xl:font-extrabold ">Trusted by Organisations Worldwide</h2>
                <div className="brandsimages flex space-x-8 justify-center pt-8 px-4 mt-4">
                    <Marquee gradient={false} pauseOnHover="true">
                        {
                            brandsdata.brand.map((brands, key) => (
                                <div key={key}><img src={brands.logo} alt={brands.brands} /></div>
                            ))
                        }
                    </Marquee>
                </div>
            </div>
            <section>
                <div className='text-3xl font-bold text-[#30486A] py-14 text-center'>
                    <span className='inline-block relative'>
                        Why&nbsp;
                        <span
                            className='absolute block bg-gradient-to-r sm:mt-1 from-[#59C3EC] to-[#297AB6]'
                            style={{
                                width: '60px',
                                height: '5px',
                                borderRadius: '10px',
                                top: 'calc(100% )',
                                left: '0',
                            }}
                        ></span>
                    </span>
                    is it important to Implement Consent Banner?
                </div>
                <div className="pb-16 w-[90%] mx-auto relative carousel-custom">
                    <Slider {...settings}>
                        {content.map((item) => (
                            <div
                                key={item.id}
                                className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-8 px-10 mr-4 gap-5"
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

            <section>
                <div className='bg-gradient-to-r from-[#7D3FB0] to-[#DE668A] flex justify-center items-center gap-16 py-4'>
                    <div className=' text-white text-[21px] font-semibold'>
                        Are you looking for the right partner to implement Cookie consent for your business?
                    </div>
                    <button className='text-white text-lg font-semibold border border-white rounded-[5px] px-4 py-2'>Contact Us Now</button>
                </div>
            </section>

            <section className='py-16 flex px-28'>
                <div className='w-[32%] flex flex-col items-center'>
                    <img src='/second_image_1 1.png' alt='man' className='underline' />
                    <div className=' border-b border-[#A1826F] pt-3 w-full'></div>
                </div>
                <div className='w-[68%]'>
                    <div className='text-3xl font-bold text-[#30486A] pb-14 text-left'>
                        <span className='inline-block relative'>
                            What&nbsp;
                            <span
                                className='absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
                                style={{
                                    width: '110px',
                                    height: '5px',
                                    borderRadius: '10px',
                                    top: 'calc(100% )',
                                    left: '0',
                                }}
                            ></span>
                        </span>
                        you will get
                    </div>
                    <div className='flex space-x-11'>
                        <div className="bg-white shadow-[0px_2px_4px_#00000040] p-4 rounded-full">
                            <img src='/implementation.png' alt='implementation' className="w-full h-auto" />
                        </div>
                        <div className="bg-white shadow-[0px_2px_4px_#00000040] p-4 rounded-full">
                            <img src='/trustworthiness.png' alt='trustworthiness' className="w-full h-auto" />
                        </div>
                        <div className="bg-white shadow-[0px_2px_4px_#00000040] p-4 rounded-full">
                            <img src='/data-security.png' alt='data-security' className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export async function getServerSideProps(context) {
    // Fetch data from external API

    const res = await fetch(`${process.env.domain}/api/ga4brands`)
    const brandsdata = await res.json()


    //console.log(brandsdata);
    // Pass data to the page via props
    return { props: { brandsdata } }
}
export default cookieLanding

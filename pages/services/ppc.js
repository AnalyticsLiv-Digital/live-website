import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MetaSchemaOg from '../../components/MetaSchemaOg'

const Ppc = () => {

    const sliderRef = useRef(null);

    const cardsData = [
        {
            title: 'Expertise',
            description: 'Our certified team of experts consists of seasoned campaign management, data scientists, and analytics experts who bring a wealth of experience to the table.',
            subtitle: 'Your Trusted Certified GMP Expert',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/experience.png',
        },
        {
            title: 'Innovation',
            description: 'Stay ahead in the rapidly evolving world of analytics with our commitment to innovative solutions like RFM Analysis, Custom Attribution, and staying abreast of the latest technologies.',
            subtitle: 'Your Partner in Digital Transformation.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/creativity.png',
        },
        {
            title: 'Client-Centric Approach',
            description: 'We prioritize understanding your unique business challenges, ensuring that our solutions align seamlessly with your business goals.',
            subtitle: 'Your Goals, Our Focus.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/follow.png',
        },
        {
            title: 'Expertise',
            description: 'Our certified team of experts consists of seasoned campaign management, data scientists, and analytics experts who bring a wealth of experience to the table.',
            subtitle: 'Your Trusted Certified GMP Expert',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/experience.png',
        },
        {
            title: 'Innovation',
            description: 'Stay ahead in the rapidly evolving world of analytics with our commitment to innovative solutions like RFM Analysis, Custom Attribution, and staying abreast of the latest technologies.',
            subtitle: 'Your Partner in Digital Transformation.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/creativity.png',
        },
        {
            title: 'Client-Centric Approach',
            description: 'We prioritize understanding your unique business challenges, ensuring that our solutions align seamlessly with your business goals.',
            subtitle: 'Your Goals, Our Focus.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/follow.png',
        },
    ];

    const settings = {
        infinite: true,
        initialSlide: 0.5,
        slidesToShow: 2.5,
        slidesToScroll: 1.5,
        arrows: true,
        dots: true,
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


    return (
        <>
            <MetaSchemaOg
                url="https://analyticsliv.com/services/server-side-tracking"
                title="Server-Side Analytics Tracking & Web Analytics Solutions | AnalyticsLiv"
                description="Get data accuracy with server-side analytics tracking from AnalyticsLiv. Our tracking solutions provide deeper insights, optimizing performance and driving business success."
                twitterTitle="Server-Side Analytics Tracking & Web Analytics Solutions | AnalyticsLiv"
                twitterDescription="Get data accuracy with server-side analytics tracking from AnalyticsLiv. Our tracking solutions provide deeper insights, optimizing performance and driving business success."
            />
            <main className='font-sans py-10'>
                <section className='flex max-md:flex-col justify-between max-lg:items-start items-center px-[5%]'>
                    <div className='md:w-[50%] xl:w-[45%] flex flex-col gap-7 md:gap-14 2xl:gap-16 justify-around items-start'>
                        <div className='flex flex-col gap-5 md:gap-8 2xl:gap-10'>
                            <h1 className='text-[#0E1947] sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold max-md:text-center'>Drive Qualified Traffic & Leads with Powerful Performance Marketing Strategies with Us</h1>
                            <h2 className='text-xs 2xl:text-sm font-normal max-md:text-center'>We are a Certified Performance Marketing Agency specializing in PPC and Performance Marketing.
                                As experts in Google Ads, Microsoft Ads, and data-driven strategies, we deliver measurable results
                                to maximize ROI and drive business growth. 🚀
                            </h2>
                            <div className='flex max-lg:flex-wrap justify-start items-center gap-5'>
                                <button className='mainbutn'>Talk to our PPC Expert</button>
                                <button className='bg-white text-[#08A4F7] border border-[#08A4F7] 
                                cursor-pointer text-2xl font-bold not-italic inline rounded-[8px] px-4 py-[9px]
                                transition-all duration-300 ease-linear hover:bg-[#08A4F7] hover:text-white'>{">"}</button>
                                <a className='text-xs 2xl:text-sm font-bold max-sm:w-full max-md:text-center'>Book a Call Today</a>
                            </div>
                        </div>
                        <div className='flex max-md:flex-wrap max-md:justify-center justify-start items-center gap-7 md:gap-10'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/clutch_review.png' alt='' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/trustpilot_review.png' alt='' />
                        </div>
                    </div>

                    <div className='md:w-[50%] xl:w-[55%] max-md:hidden flex justify-center'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Main_Img_Right.png' alt='' />
                    </div>
                </section>

                <section className='px-4 md:px-[5%] py-12'>
                    <div className='border border-[#D0D0D0] flex max-md:flex-col justify-evenly max-md:gap-8 md:gap-2 xl:gap-1 2xl:gap-5 items-center max-md:py-6 p-3 md:p-5 xl:p-7 2xl:p-10'>
                        <div className='text-[#0E1947] text-sm md:text-sm xl:text-lg font-bold'>Trusted by over 200+ businesses worldwide!</div>
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

                <section className='px-4 lg:px-[5%] pt-6 flex max-md:flex-col justify-center items-center gap-24 2xl:gap-10'>
                    <div className='md:w-[50%] flex justify-center'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Choose_img_Left_crop.png' alt='why choose us' className='' />
                    </div>
                    <div className='md:w-[50%] flex flex-col gap-5'>
                        <h2 className='text-[#0E1947] xl:text-[27px] 2xl:text-3xl font-bold'>
                            Why to Choose a Performance Marketing Agency for Your Business?
                        </h2>
                        <div className='text-sm font-normal'>We are making every business grow!</div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex max-md:items-center gap-4'>
                                <div className='bg-[#F0FCFF] p-2.5 rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Targeted Reach</div>
                                    <div className='text-xs font-normal'>Reach potential customers actively searching for products or services like yours.</div>
                                </div>
                            </div>
                            <div className='flex max-md:items-center gap-4'>
                                <div className='bg-[#F0FCFF] p-2.5 rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Increased Visibility</div>
                                    <div className='text-xs font-normal'>Secure prominent placements on search engine results pages (SERPs).</div>
                                </div>
                            </div>
                            <div className='flex max-md:items-center gap-4'>
                                <div className='bg-[#F0FCFF] p-2.5 rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Measurable Results</div>
                                    <div className='text-xs font-normal'>Track PPC Campaign Performance</div>
                                </div>
                            </div>
                            <div className='flex max-md:items-center gap-4'>
                                <div className='bg-[#F0FCFF] p-2.5 rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Improved Brand Awareness</div>
                                    <div className='text-xs font-normal'>Increase brand recognition and establish your expertise in your industry.</div>
                                </div>
                            </div>
                            <div className='flex max-md:items-center gap-4'>
                                <div className='bg-[#F0FCFF] p-2.5 rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <div className='text-[#0E1947] text-base font-bold'>Cost-Effective Lead Generation</div>
                                    <div className='text-xs font-normal'>Generate qualified leads at a competitive cost compared to other marketing channels.</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='mainbutn'>Contact Now</button>
                        </div>
                    </div>
                </section>

                <section className="pt-14 pb-14 lg:pl-10 2xl:pl-[5%] max-md:overflow-hidden">
                    <div className="flex max-md:flex-col items-center justify-between px-[3%]">
                        <div className="md:w-[60%] max-md:px-4 flex flex-col justify-start">
                            <div className="text-[#100F1B] text-3xl font-bold text-center md:text-start">
                                Performance Marketing Process & Strategy
                            </div>
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
                                    className="relative overflow-hidden z-10 bg-white text-[#08A4F7] border border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline rounded-[8px] px-3 py-1 mb-3 transition-all duration-300 ease-linear hover:bg-[#08A4F7] hover:text-white"
                                >
                                    {"<"}
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="relative overflow-hidden z-10 bg-white text-[#08A4F7] border border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline rounded-[8px] px-3 py-1 mb-3 transition-all duration-300 ease-linear hover:bg-[#08A4F7] hover:text-white"
                                >
                                    {">"}
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
                                                    <img src={card.image} alt={card.title} className="relative max-md:h-16 max-md:w-16 top-4 left-4" />
                                                </div>
                                                <div className="flex flex-col max-md:pl-10 h-[140px] items-start justify-center gap-1 text-white">
                                                    <div className="text-xl font-bold">{card.title}</div>
                                                    <div className="text-[#FFF4ED] text-base font-normal">{card.subtitle}</div>
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
                                            {card.description}
                                        </div>
                                        <div className="h-[140px] bg-[#08A4F7] rounded-b-3xl">
                                            <div className="flex items-center">
                                                <div className="w-[30%] h-[100px] pl-2 md:pl-3 2xl:pl-8">
                                                    <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/white_bg.png" alt="white_bg" className="absolute max-md:h-24 max-md:w-24" />
                                                    <img src={card.image} alt={card.title} className="relative max-md:h-16 max-md:w-16 top-4 left-4" />
                                                </div>
                                                <div className="flex flex-col max-md:pl-10 h-[140px] items-start justify-center gap-1 text-white">
                                                    <div className="text-xl font-bold">{card.title}</div>
                                                    <div className="text-[#FFF4ED] text-base font-normal">{card.subtitle}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>

                <section className='bg-[#30486A] text-white mx-[3%] xl:mx-[5%] py-7 px-5 xl:px-7 2xl:p-12'>
                    <h2 className='text-2xl xl:text-3xl font-bold text-center pb-8 2xl:pb-12'>Advantage of PPC Advertising with AnaltyticsLiv</h2>
                    <div className='flex max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-6 items-center gap-2 xl:gap-5 2xl:gap-10'>
                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-stretch lg:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/big-data-analytics%20(1)%201.svg' alt='big data analytics'
                                className='bg-[#FAE0E1] rounded-[5px] px-5' />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Data-Driven Approach</div>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>We leverage data insights to optimize your campaigns for maximum effectiveness.</div>
                            </div>
                        </div>

                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-stretch lg:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/report%20(5)%201.svg' alt='big data analytics'
                                className='bg-[#F3DEB3] rounded-[5px] px-5' />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Transparent Reporting</div>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>We provide regular reports with key metrics & actionable recommendations.</div>
                            </div>
                        </div>

                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-stretch lg:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/team-bonding%201.svg' alt='big data analytics'
                                className='bg-[#CBCFFA] rounded-[5px] px-5' />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Experienced Team</div>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>Our Team of Certified Performance Marketing Specialists</div>
                            </div>
                        </div>

                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-stretch lg:w-[27%] xl:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/wealth.svg' alt='big data analytics'
                                className='bg-[#D7FACB] rounded-[5px] px-5' />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Focus on ROI</div>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>We prioritize delivering measurable results that contribute
                                    to your business goals.</div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
export default Ppc

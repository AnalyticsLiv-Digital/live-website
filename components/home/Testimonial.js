'use client'
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const NextArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 right-[15px] bg-white p-1 rounded-full transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <FaArrowRight size={20} />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 left-[15px] bg-white p-1 rounded-full transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <FaArrowLeft size={20} />
        </div>
    );

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: null,
        prevArrow: null,
        autoplay: true,
        autoplaySpeed: 3000,
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
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                },
            },
        ],
    };
    return (
        <>
            <section className='testimonials bg-no-repeat bg-cover bg-blend-multiply bg-[#282833] font-gilroy'>
                <div className='relative px-4 overflow-hidden'>
                    <div className='testimonial-component-wrapper flex flex-wrap lg:flex-nowrap justify-between'>
                        <div className='left-testimonial-item lg:w-[22.4%] w-full'>
                            <div className='main-title-testimonial lg:w-[14%] xl:w-[23%] w-auto lg:h-full h-auto lg:min-h-[1px] min-h-[244px] lg:p-16 lg:pl-5 py-5 px-10 lg:mx-0 -mx-5 flex lg:absolute static top-0 left-0'>
                                <div className='w-full lg:max-w-sm max-w-none'>
                                    <h2 className='text-white  text-2xl md:text-4xl lg:text-[27px] xl:text-6xl leading-[35px] text-start font-semibold not-italic pb-8 md:pb-12'>Let's See What Our Clients Have To Say</h2>
                                </div>
                            </div>
                        </div>
                        <div className='right-testimonial-item w-full lg:max-w-5xl max-w-none'>
                            <div className='testimonial-item-wrapper relative lg:px-16 -mx-6 -px-10'>
                                <div className='collection-list-wrapper lg:pt-10 pt-0 lg:-mt-0 -mt-[88px] xl:w-full lg:w-[87%] lg:ml-auto'>
                                    <Slider {...settings}>
                                        <div aria-hidden="true" className="testimonial1 text-center">
                                            <div className='max-[767px]:w-[330px] m-auto p-5 rounded-[10px]'>
                                                <div className='quote p-5 md:h-[340px] h-[410px] relative'>
                                                    <div style={{ backgroundImage: 'url(/quote-white1.png)' }} className='bg-no-repeat bg-cover absolute xl:w-[131%] lg:w-[118%] w-[128%] xl:h-[148%] lg:h-[166%] h-[164%] xl:-top-[122px] lg:-top-[88px] md:-top-[82px] -top-[90px] md:-left-[73px] -left-[91px] opacity-[.1]'>
                                                    </div>
                                                    <div className='bgshape'>
                                                        <img src="/quote.png" alt="" className=' rotate-180 w-[50px] h-[50px]' />
                                                    </div>
                                                    <p className='quote-testimonial text-[#fff] text-[13px] text-left font-normal leading-[26px] p-[15px]'>"AnalyticsLiv team was an excellent asset to our businesses' switch from Universal Analytics to GA4. They had excellent communication throughout the project, giving me feedback, updates and ideas as the project went on.<br />I would be happy to recommend the AnalyticsLiv team for analytics and tag manager work, and look forward to working with them in the future. Thank you!"</p>
                                                </div>
                                                <div className='flex items-center justify-start gap-2 py-4 xl:mt-[25px] lg:mt-[60px] md:mt-[105px] mt-[80px]'>
                                                    <img src="/profile1.png" alt="" className='w-24 h-24' />
                                                    <div>
                                                        <h4 className='text-[#fff] text-left text-[20px] font-medium leading-normal'>Bobby Bruno</h4>
                                                        <p className='text-[#fff] text-left text-sm font-normal'>CMO</p>
                                                        <p className='text-[#fff] text-left text-sm font-semibold'>Wholesale Socks Deals</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div aria-hidden="true" className="testimonial2 text-center">
                                            <div className='max-[767px]:w-[330px] m-auto p-5 rounded-[10px]'>
                                                <div className='quote p-5 md:h-[340px] h-[410px] relative'>
                                                    <div style={{ backgroundImage: 'url(/quote-white1.png)' }} className='bg-no-repeat bg-cover absolute xl:w-[131%] lg:w-[118%] w-[128%] xl:h-[148%] lg:h-[166%] h-[164%] xl:-top-[122px] lg:-top-[88px] md:-top-[82px] -top-[90px] md:-left-[73px] -left-[91px] opacity-[.1]'>
                                                    </div>
                                                    <div className='bgshape'>
                                                        <img src="/quote.png" alt="" className=' rotate-180 w-[50px] h-[50px]' />
                                                    </div>
                                                    <p className='quote-testimonial text-[#fff] text-[13px] text-left font-normal leading-[26px] p-[15px]'>
                                                        "The AnalyticsLiv team estimated the job length accurately and then carried out the work exactly as briefed,
                                                        to time and budget. We had one brief hiccup in the conversion tracking code but that was swiftly fixed once identified.
                                                        Would definitely consider using it again and for more advanced reporting functionality in future"</p>
                                                </div>
                                                <div className='flex items-center justify-start gap-2 py-4 xl:mt-[25px] lg:mt-[60px] md:mt-[105px] mt-[80px]'>
                                                    <img src="/profile1.png" alt="" className='w-24 h-24' />
                                                    <div>
                                                        <h4 className='text-[#fff] text-left text-[20px] font-medium leading-normal'>Charles Lundy</h4>
                                                        <p className='text-[#fff] text-left text-sm font-normal'>Co-Founder</p>
                                                        <p className='text-[#fff] text-left text-sm font-semibold'>Mex Insurance</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div aria-hidden="true" className="testimonial4 text-center">
                                            <div className='max-[767px]:w-[330px] m-auto p-5 rounded-[10px]'>
                                                <div className='quote p-5 md:h-[340px] h-[410px] relative'>
                                                    <div style={{ backgroundImage: 'url(/quote-white1.png)' }} className='bg-no-repeat bg-cover absolute xl:w-[131%] lg:w-[118%] w-[128%] xl:h-[148%] lg:h-[166%] h-[164%] xl:-top-[122px] lg:-top-[88px] md:-top-[82px] -top-[90px] md:-left-[73px] -left-[91px] opacity-[.1]'>
                                                    </div>
                                                    <div className='bgshape'>
                                                        <img src="/quote.png" alt="" className=' rotate-180 w-[50px] h-[50px]' />
                                                    </div>
                                                    <p className='quote-testimonial text-[#fff] text-[13px] text-left font-normal leading-[26px] p-[15px]'>"AnalyticsLiv has been FUTEK web analytics partner for almost 3 years now. They supported us with GTM implementation, GA to GA4 migration, Looker studio dashboard creations and Google cloud storage implementation. They respond to our request in a timely manner and make their best efforts to resolve the web analytics issues. We are happy with the support provided by AnalyticsLiv"</p>
                                                </div>
                                                <div className='flex items-center justify-start gap-2 py-4 xl:mt-[25px] lg:mt-[60px] md:mt-[105px] mt-[80px]'>
                                                    <img src="/profile1.png" alt="" className='w-24 h-24' />
                                                    <div>
                                                        <h4 className='text-[#fff] text-left text-[20px] font-medium leading-normal'>Ebenezer Ferreira</h4>
                                                        <p className='text-[#fff] text-left text-sm font-normal'>Senior Product Marketing Manager</p>
                                                        <p className='text-[#fff] text-left text-sm font-semibold'>FUTEK</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
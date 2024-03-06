'use client'
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
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
                    slidesToShow: 1,
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
    return (
        <>
            <section className='testimonials bg-no-repeat bg-cover bg-blend-multiply bg-[#00000085]' style={{ backgroundImage: 'url(/testimon.png)' }}>
                <div className='relative px-4 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <h2 className='text-white lg:text-[28px] text-2xl font-semibold not-italic text-center pb-8 md:pb-12'>Let's See What Our Clients Have To Say</h2>
                    <div className='mb-8 relative'>
                        <div className='absolute bg-white rounded-full z-20 -top-[20px] min-[989px]:left-[22%] left-[45%]'>
                            <img src="/quetos.png" alt="" className=' rotate-180 w-[50px] h-[50px]' />
                        </div>
                        <div className='absolute bg-white rounded-full z-20 -top-[20px] min-[989px]:right-[22%] hidden min-[989px]:block'>
                            <img src="/quetos.png" alt="" className=' rotate-180 w-[50px] h-[50px]' />
                        </div>

                        <Slider {...settings}>
                        <div aria-hidden="true" className="testimonial1 text-center">
                                <div className='xl:w-[80%] min-[989px]:w-[80%] md:w-[65%] bg-white w-[90%] m-auto p-5 rounded-[10px] min-[989px]:h-[420px]'>

                                    <div className='flex items-center justify-start gap-2 py-8'>
                                        <img src="/profile1.png" alt="" className='w-24 h-24' />
                                        <div>
                                            <h4 className='text-[#000] text-left text-[20px] font-medium leading-normal'>Bobby Bruno</h4>
                                            <p className='text-left text-sm font-normal'>CMO</p>
                                            <p className='text-left text-sm font-semibold'>Wholesale Socks Deals</p>
                                        </div>
                                    </div>
                                    <p className='text-[#000] text-[13px] text-left font-normal leading-[26px] mb-7'>"AnalyticsLiv team was an excellent asset to our businesses' switch from Universal Analytics to GA4. They had excellent communication throughout the project, giving me feedback, updates and ideas as the project went on.<br />I would be happy to recommend the AnalyticsLiv team for analytics and tag manager work, and look forward to working with them in the future. Thank you!"</p>
                                </div>
                            </div>

                            <div aria-hidden="true" className="testimonial2 text-center">
                                <div className='xl:w-[80%]  min-[989px]:w-[80%] md:w-[65%] bg-white w-[90%] m-auto p-5 rounded-[10px] min-[989px]:h-[420px]'>
                                    <div className='flex items-center justify-start gap-2 py-8'>
                                        <img src="/profile4.png" alt="" className='w-24 h-24' />
                                        <div>
                                            <h4 className='text-[#000] text-[20px] text-left font-medium leading-normal'>Charles Lundy</h4>
                                            <p className='text-left text-sm font-normal'>Co-Founder</p>
                                            <p className='text-left text-sm font-semibold'>Mex Insurance</p>
                                        </div>
                                    </div>
                                    <p className='text-[#000] text-[13px] text-left font-normal leading-[26px] mb-7'>"The AnalyticsLiv team estimated the job length accurately and then carried out the work exactly as briefed, to time and budget. We had one brief hiccup in the conversion tracking code but that was swiftly fixed once identified. Would definitely consider using it again and for more advanced reporting functionality in future"</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="testimonial4 text-center">
                                <div className='xl:w-[80%]  min-[989px]:w-[80%] md:w-[65%] bg-white w-[90%] m-auto p-5 rounded-[10px] min-[989px]:h-[420px]'>
                                    <div className='flex items-center justify-start gap-2 py-8'>
                                        <img src="/profile5.png" alt="" className='w-24 h-24' />
                                        <div>
                                            <h4 className='text-[#000] text-left text-[20px] font-medium leading-normal'>Ebenezer Ferreira</h4>
                                            <p className='text-left text-sm font-normal'>Senior Product Marketing Manager</p>
                                            <p className='text-left text-sm font-semibold'>FUTEK</p>
                                        </div>
                                    </div>
                                    <p className='text-[#000] text-[13px] text-left font-normal leading-[26px] mb-7'>"AnalyticsLiv has been FUTEK web analytics partner for almost 3 years now. They supported us with GTM implementation, GA to GA4 migration, Looker studio dashboard creations and Google cloud storage implementation. They respond to our request in a timely manner and make their best efforts to resolve the web analytics issues. We are happy with the support provided by AnalyticsLiv"</p>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Testimonial
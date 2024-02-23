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
        Aos.init({duration: 2000});
    }, [])
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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
            <section className='testimonial'>
                <div className='relative px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <h2 className='text-white text-[40px] font-bold not-italic text-center pb-8 md:pb-12'>Let's See What Our Clients Have To Say</h2>
                    <div className='relative z-10 md:w-1/2 mx-4 md:mx-auto mt-4 bg-sky-100/90 border border-solid border-homepagebtn border-b-0 rounded-t-3xl px-8 pt-4 pb-0'>
                        <div className='relative w-20 rounded-full bg-white p-4 -top-12 mx-28 md:mx-auto shadow-md shadow-gray-400'>
                            <Image
                                src="/quetos.png"
                                width={50}
                                height={50}
                                alt="Picture of Google Marketing Platform Partner"
                                priority={true}
                                className='rotate-180'
                            />
                        </div>
                        <div data-aos="fade-right" data-aos-once="true" >
                            <Slider {...settings}>
                                <div aria-hidden="true" className="testimonial1 text-center">
                                    <div className='flex items-center justify-center gap-4 pb-8'>
                                        <Image
                                            src="/Character_1.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of client"
                                        />
                                        <h4 className='text-[#000] text-[25px] font-semibold leading-normal'>Bobby Bruno</h4>
                                    </div>
                                    <p className='text-[#000] text-base font-normal leading-normal'>"AnalyticsLiv team was an excellent asset to our businesses' switch from Universal Analytics to GA4. They had excellent communication throughout the project, giving me feedback, updates and ideas as the project went on. I would be happy to recommend the AnalyticsLiv team for analytics and tag manager work, and look forward to working with them in the future. Thank you!"</p>
                                </div>
                                <div aria-hidden="true" className="testimonial2 text-center">
                                    <div className='flex items-center justify-center gap-4 pb-8'>
                                        <Image
                                            src="/Character_1.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of client"
                                        />
                                        <h4 className='text-[#000] text-[25px] font-semibold leading-normal'>Charles Lundy</h4>
                                    </div>
                                    <p className='text-[#000] text-base font-normal leading-normal'>"The AnalyticsLiv team estimated the job length accurately and then carried out the work exactly as briefed, to time and budget. We had one brief hiccup in the conversion tracking code but that was swiftly fixed once identified. Would definitely consider using it again and for more advanced reporting functionality in future"</p>
                                </div>
                                <div aria-hidden="true" className="testimonial3 text-center">
                                    <div className='flex items-center justify-center gap-4 pb-8'>
                                        <Image
                                            src="/Character_1.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of client"
                                        />
                                        <h4 className='text-[#000] text-[25px] font-semibold leading-normal'>Una</h4>
                                    </div>
                                    <p className='text-[#000] text-base font-normal leading-normal'>"AnalyticsLiv helped us set up and manage our GA4 account, and we're so glad we did. They were patient and knowledgeable, and they always made sure we understood what they were doing. We're now able to track our website traffic and marketing campaigns more effectively, and we're confident that we're making better business decisions as a result."</p>
                                </div>
                                <div aria-hidden="true" className="testimonial4 text-center">
                                    <div className='flex items-center justify-center gap-4 pb-8'>
                                        <Image
                                            src="/Character_1.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of client"
                                        />
                                        <h4 className='text-[#000] text-[25px] font-semibold leading-normal'>Ebenezer Ferreira</h4>
                                    </div>
                                    <p className='text-[#000] text-base font-normal leading-normal'>"AnalyticsLiv has been FUTEK web analytics partner for almost 3 years now. They supported us with GTM implementation, GA to GA4 migration, Looker studio dashboard creations and Google cloud storage implementation. They respond to our request in a timely manner and make their best efforts to resolve the web analytics issues. We are happy with the support provided by AnalyticsLiv"</p>
                                </div>
                                
                            </Slider>
                        </div>
                    </div>
                    <div className='relative md:w-1/2 z-0 bg-sky-100/90 h-52 rounded-b-full border border-solid border-homepagebtn border-t-0 mx-4 md:mx-auto pb-0 -mt-[1px]'></div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
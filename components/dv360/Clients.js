'use client'
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
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
            <section className='clients'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <h2 className='text-[#000] text-[32px] font-semibold leading-normal text-center'>Our Happy Customers Share Their Experiences</h2>
                    <div className='hidden md:block'>
                        <div className='testimonial grid lg:grid-cols-3 md:grid-cols-2 items-center gap-7 pt-10'>
                            <div className="testimonial1 h-[400px] lg:h-[430px] 2xl:h-80 max-[767px]:w-80 bg-white border border-solid border-[#E2E2E2] hover:shadow-testishadow rounded-[10px] p-5">
                                <div className='flex items-center gap-4 pb-8'>
                                    <Image
                                        src="/Character_1.svg"
                                        width={50}
                                        height={50}
                                        alt="Picture of client"
                                    />
                                    <h4 className='text-[#000] text-[25px] font-semibold leading-normal'>Kal Cooper</h4>
                                </div>
                                <p className='text-[#000] text-base font-normal leading-normal'>" We used DV360 account for generating Installs and getting qualified players onto our betting ads platform and we are very happy that we chose AnalyticsLiv team to drive these campaigns, as they worked very responsibly and analytically. Kept us informed about the progress and collaborated on multiple occassions to keep us involved and informed. "</p>
                            </div>
                            <div className="testimonial2 h-[400px] lg:h-[430px] 2xl:h-80 max-[767px]:w-80 bg-white border border-solid border-[#E2E2E2] hover:shadow-testishadow rounded-[10px] p-5">
                                <div className='flex items-center gap-4 pb-8'>
                                    <Image
                                        src="/Character_2.svg"
                                        width={50}
                                        height={50}
                                        alt="Picture of client"
                                    />
                                    <h4 className='text-[#000] text-[25px] font-semibold leading-normal'>Suzie</h4>
                                </div>
                                <p className='text-[#000] text-base font-normal leading-normal'>"The most I enjoyed working with a strategy team after a long time. These guys are clear with their goals and measurement, highly knowledgeable about the platform and its abilities. Its a delight to have found a data oriented partner to run our campaigns in DV360. "</p>
                            </div>
                            <div className="testimonial3 h-[400px] lg:h-[430px] 2xl:h-80 max-[767px]:w-80 bg-white border border-solid border-[#E2E2E2] hover:shadow-testishadow rounded-[10px] p-5">
                                <div className='flex items-center gap-4 pb-8'>
                                    <Image
                                        src="/Character_2.svg"
                                        width={50}
                                        height={50}
                                        alt="Picture of client"
                                    />
                                    <h4 className='text-[#000] text-[25px] font-semibold leading-normal'>Nikola McCarthy</h4>
                                </div>
                                <p className='text-[#000] text-base font-normal leading-normal'>" Highly recommended for anything related to campaign management, planning, reporting and execution. Response has been timely and excellent skills in telling data stories with visualization. "</p>
                            </div>
                        </div>
                    </div>
                    {/* slider start */}
                    <div className='md:hidden pt-10 gap-5'>
                        <Slider {...settings}>
                            <div aria-hidden="true" className="testi m-auto text-center flex justify-center">
                                <div className="testimonial1 h-[400px] lg:h-[430px] 2xl:h-80 max-[767px]:w-80 bg-white border border-solid border-[#E2E2E2] hover:shadow-testishadow rounded-[10px] p-5">
                                    <div className='flex items-center gap-4 pb-8'>
                                        <Image
                                            src="/Character_1.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of client"
                                        />
                                        <h4 className='text-[#000] text-[25px] font-semibold leading-normal'>Kal Cooper</h4>
                                    </div>
                                    <p className='text-[#000] text-base font-normal leading-normal'>"We used DV360 account for generating Installs and getting qualified players onto our betting ads platform and we are very happy that we chose AnalyticsLiv team to drive these campaigns, as they worked very responsibly and analytically. Kept us informed about the progress and collaborated on multiple occassions to keep us involved and informed."</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="testi m-auto text-center flex justify-center">
                                <div className="testimonial2 h-[400px] lg:h-[430px] 2xl:h-80 max-[767px]:w-80 bg-white border border-solid border-[#E2E2E2] hover:shadow-testishadow rounded-[10px] p-5">
                                    <div className='flex items-center gap-4 pb-8'>
                                        <Image
                                            src="/Character_2.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of client"
                                        />
                                        <h4 className='text-[#000] text-[25px] font-semibold leading-normal'>Suzie</h4>
                                    </div>
                                    <p className='text-[#000] text-base font-normal leading-normal'>"The most I enjoyed working with a strategy team after a long time. These guys are clear with their goals and measurement, highly knowledgeable about the platform and its abilities. Its a delight to have found a data oriented partner to run our campaigns in DV360. "</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="testi m-auto text-center flex justify-center">
                                <div className="testimonial3 h-[400px] lg:h-[430px] 2xl:h-80 max-[767px]:w-80 bg-white border border-solid border-[#E2E2E2] hover:shadow-testishadow rounded-[10px] p-5">
                                    <div className='flex items-center gap-4 pb-8'>
                                        <Image
                                            src="/Character_2.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of client"
                                        />
                                        <h4 className='text-[#000] text-[25px] font-semibold leading-normal'>Nikola McCarthy</h4>
                                    </div>
                                    <p className='text-[#000] text-base font-normal leading-normal'>"Highly recommended for anything related to campaign management, planning, reporting and execution. Response has been timely and excellent skills in telling data stories with visualization. "</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    {/* slider end */}
                </div>
            </section>
        </>
    )
}

export default Clients
'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Services = () => {
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
            <section className='services'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <h2 className='text-[#000] text-[32px] font-semibold leading-normal text-center'>Services That Transform Your Business Digitally</h2>
                    <div className='pt-10 gap-5'>
                        <Slider {...settings}>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service1 w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/media_buying.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-semibold leading-normal pt-6'>Media Planning & Buying</h6>
                                    <p className='text-[#000] text-xs font-normal leading-normal pt-11'>Plan your Media Strategy & Buy Premium Placements, Run Connected TV Ads, DOOH Advertising</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service2 w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/trafficking.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-semibold leading-normal pt-6'>Trafficking</h6>
                                    <p className='text-[#000] text-xs font-normal leading-normal pt-11'>Creating Campaigns, Uploading Creatives,
                                        UTM Tracking</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service3 w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/data-driven.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-semibold leading-normal pt-6'>Creatives : Rich Media,
                                        Data-Driven, Animated</h6>
                                    <p className='text-[#000] text-xs font-normal leading-normal pt-11'>Enhance the Experience of Users</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service4 w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/training.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-semibold leading-normal pt-6'>Training</h6>
                                    <p className='text-[#000] text-xs font-normal leading-normal pt-11'>Make your team members an Expert in DV360 Platform with Training from Our Experts</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service5 w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/reporting.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-semibold leading-normal pt-6'>Reporting</h6>
                                    <p className='text-[#000] text-xs font-normal leading-normal pt-11'>Create Auto generated reports in DV360 to draw real time performance comparison</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
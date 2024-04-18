'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Leaders = ({ headingFontSize }) => {
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
            <section className='leaders bg-dvbackgrnd'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <h2 className='text-[#000] font-semibold leading-normal text-center' style={{ fontSize: headingFontSize }}>Why we’re Leaders in Programmatic Advertising</h2>
                    <p className='text-[#000] text-[18px] font-normal leading-normal text-center pt-7'>We Provide a Complete Programmatic Campaign Management services which include Media Planning, Campaign Setup, Creative Management, Strategy, Troubleshooting, Optimisation, Recommendation & Reporting.</p>
                    <div className='pt-10 gap-5'>
                        <Slider {...settings}>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service1 w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/leader1.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-semibold leading-normal pt-6'>Campaign Strategy & Planning</h6>
                                    <p className='text-[#000] text-xs font-normal leading-normal pt-11 text-start'>Let our expert strategists conjure up winning plans that skyrocket your digital campaigns to new heights.</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service2 w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/leader2.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-semibold leading-normal pt-6'>Technology</h6>
                                    <p className='text-[#000] text-xs font-normal leading-normal pt-11 text-start'>Provide you the AI based alert Support about the budget spent, Optimisation requirements, Campaign's New Opportunities</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service3 w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/leader3.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-semibold leading-normal pt-6'>Transparency</h6>
                                    <p className='text-[#000] text-xs font-normal leading-normal pt-11 text-start'>We require complete transparency from our partners and maintain the same with clients. We won't charge any hidden markups to our clients.</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service4 w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/leader4.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-semibold leading-normal pt-6'>ROI Focus</h6>
                                    <p className='text-[#000] text-xs font-normal leading-normal pt-11'>Our campaign managers prioritise performance, reduce advertising cost, increasing conversions, and optimising ROAS across diverse channels.</p>
                                </div>
                            </div>
                            <div aria-hidden="true" className="m-auto text-center">
                                <div className='service5 w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/leader5.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of Media_planing"
                                        />
                                    </div>
                                    <h6 className='text-[#000] text-base font-semibold leading-normal pt-6'>Outstanding Support</h6>
                                    <p className='text-[#000] text-xs font-normal leading-normal pt-11 text-start'>Our dedicated team is ready to assist you promptly and expertly, ensuring your satisfaction every step of the way.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Leaders
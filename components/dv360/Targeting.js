'use client'
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Targeting = () => {

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
        <section className='targeting bg-dvbackgrnd'>
            <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                <h2 className='text-[#000] text-[32px] font-semibold leading-normal text-center'>Granular Targeting</h2>
                <div className='lg:flex flex-row-reverse lg:items-center pt-8'>
                        <div className='right-box lg:w-[65%] hidden md:grid md:grid-cols-2 gap-6 max-[767px]:pb-5'>
                            <div className='targeting1 flex items-center h-[175px] w-[270px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-testishadow p-4'>
                                <div className='a flex items-center justify-between gap-2'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/targeting1.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <div className='text-start'>
                                        <h6 className='text-[#000] text-sm font-semibold leading-normal'>First Party Audience</h6>
                                        <p className='text-[#000] text-xs font-normal leading-normal'>Floodlight, Google Ads, GA4</p>
                                    </div>
                                </div>
                            </div>
                            <div className='targeting2 flex items-center h-[175px] w-[270px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-testishadow p-4'>
                                <div className='a flex items-center justify-between gap-2'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/targeting2.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <div className='text-start'>
                                        <h6 className='text-[#000] text-sm font-semibold leading-normal'>Google Audience</h6>
                                        <p className='text-[#000] text-xs font-normal leading-normal'>In-market & Affinity</p>
                                    </div>
                                </div>
                            </div>
                            <div className='targeting3 flex items-center h-[175px] w-[270px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-testishadow p-4'>
                                <div className='a flex items-center justify-between gap-2'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/targeting3.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <div className='text-start'>
                                        <h6 className='text-[#000] text-sm font-semibold leading-normal'>Custom Lists</h6>
                                        <p className='text-[#000] text-xs font-normal leading-normal'>Intent & Affinity Based</p>
                                    </div>
                                </div>
                            </div>
                            <div className='targeting4 flex items-center h-[175px] w-[270px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-testishadow p-4'>
                                <div className='a flex items-center justify-between gap-2'>
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/targeting4.svg"
                                            width={100}
                                            height={100}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <div className='text-start'>
                                        <h6 className='text-[#000] text-sm font-semibold leading-normal'>3rd Party Audiences</h6>
                                        <p className='text-[#000] text-xs font-normal leading-normal'>Based on Mobile Advertising IDs
                                            and Desktop Cookies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* slider start in mobile device */}
                    <div className='md:hidden pb-10'>
                        <Slider {...settings}>
                            <div aria-hidden="true" className="testi m-auto text-center flex justify-center">
                                <div className='targeting1 flex items-center h-[175px] w-[270px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-testishadow p-4'>
                                    <div className='a flex items-center justify-between gap-2'>
                                        <div className='flex items-center justify-center'>
                                            <Image
                                                src="/targeting1.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <div className='text-start'>
                                            <h6 className='text-[#000] text-sm font-semibold leading-normal'>First Party Audience</h6>
                                            <p className='text-[#000] text-xs font-normal leading-normal'>Floodlight, Google Ads, GA4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="testi m-auto text-center flex justify-center">
                                <div className='targeting2 flex items-center h-[175px] w-[270px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-testishadow p-4'>
                                    <div className='a flex items-center justify-between gap-2'>
                                        <div className='flex items-center justify-center'>
                                            <Image
                                                src="/targeting2.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <div className='text-start'>
                                            <h6 className='text-[#000] text-sm font-semibold leading-normal'>Google Audience</h6>
                                            <p className='text-[#000] text-xs font-normal leading-normal'>In-market & Affinity</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="testi m-auto text-center flex justify-center">
                                <div className='targeting3 flex items-center h-[175px] w-[270px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-testishadow p-4'>
                                    <div className='a flex items-center justify-between gap-2'>
                                        <div className='flex items-center justify-center'>
                                            <Image
                                                src="/targeting3.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <div className='text-start'>
                                            <h6 className='text-[#000] text-sm font-semibold leading-normal'>Custom Lists</h6>
                                            <p className='text-[#000] text-xs font-normal leading-normal'>Intent & Affinity Based</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="testi m-auto text-center flex justify-center">
                                <div className='targeting4 flex items-center h-[175px] w-[270px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-testishadow p-4'>
                                    <div className='a flex items-center justify-between gap-2'>
                                        <div className='flex items-center justify-center'>
                                            <Image
                                                src="/targeting4.svg"
                                                width={100}
                                                height={100}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <div className='text-start'>
                                            <h6 className='text-[#000] text-sm font-semibold leading-normal'>3rd Party Audiences</h6>
                                            <p className='text-[#000] text-xs font-normal leading-normal'>Based on Mobile Advertising IDs
                                                and Desktop Cookies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    {/* slider end in mobile device */}
                    <div className='left-img lg:w-[35%] flex lg:justify-start justify-center'>
                            <img src="/Target _image.png" alt="" className='relative sm:left-[7%] lg:left-0 max-[767px]:h-[210px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Targeting
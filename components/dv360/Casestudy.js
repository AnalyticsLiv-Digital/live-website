


'use client'
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Casestudy = () => {

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
            <section className='casestudy'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <h2 className='text-maintext text-[32px] font-semibold not-italic text-center tracking-widest'>Success that we Achieved</h2>
                    <div className='hidden md:block'>
                        <div className='text-center grid lg:grid-cols-3 gap-4 p-8 md:p-12'>
                            <div className='first group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                                <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                <a href="https://storage.googleapis.com/website-bucket-uploads/cs/gfrdf6794yyxp.pdf" target='_blank'>
                                    <div>
                                        <Image
                                            src="/castdyinner3.png"
                                            width={300}
                                            height={300}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <h3 className='text-bas text-slate-900 font-semibold text-left pt-5'>Driving the Campaigns in DV360 to Post Click Attribution Success with a 36% reduction in CPI</h3>
                                    <div className='grid grid-rows-2 gap-10 pt-10 2xl:pt-14'>
                                        <p className='align-middle text-left text-xs font-medium text-[#3B3C3B]'>Implementing post-click conversions in DV360 attribution led to increased conversions, a 36% lower CPI, and a notable 38% boost in overall click-through rate, showcasing the effectiveness of our refined attribution model.</p>
                                        <div className='flex items-end'>
                                            <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn text-[10px] font-medium'>
                                                <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                                <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='second group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                                <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                <a href="https://storage.googleapis.com/website-bucket-uploads/cs/6754gfhgjfhfh3437.pdf" target='_blank'>
                                    <div>
                                        <Image
                                            src="/castdyinner10.png"
                                            width={300}
                                            height={300}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <h3 className='text-base text-slate-900 font-semibold text-left pt-5'>Impact of Creative Analysis in DV360 for Automotive Manufacturer Company</h3>
                                    <div className='grid grid-rows-2 gap-10 pt-[90px] xl:pt-5 2xl:pt-16'>
                                        <p className='align-middle text-left text-xs font-medium text-[#3B3C3B] pt-2'>The client is an automotive manufacturer that produces cars, vans, and SUVs. The clients vehicles are sold in New Zealand through a network of authorised dealerships. The client was facing challenges to get effective conversions while the ads were serving</p>
                                        <div className='flex items-end'>
                                            <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn text-[10px] font-medium'>
                                                <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                                <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='third group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                                <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                <a href="https://storage.googleapis.com/website-bucket-uploads/cs/cbhnf98765koql.pdf" target='_blank'>
                                    <div>
                                        <Image
                                            src="/castdyinner11.png"
                                            width={300}
                                            height={300}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                    <h3 className='text-base text-slate-900 font-semibold text-left pt-5'>A strategic guide to scaling the Ad Spend without affecting the ROAS</h3>
                                    <div className='grid grid-rows-2 gap-10 pt-16'>
                                        <p className='align-middle text-left text-xs font-medium text-[#3B3C3B] pt-2'>The campaigns run consistently for the client throughout the year with different leagues running at different times. With the scale up of spending each day the campaign already utilised all targeting options for maximum reach.</p>
                                        <div className='flex items-end'>
                                            <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn text-[10px] font-medium'>
                                                <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                                <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* slider start */}
                    <div className='md:hidden pt-10 gap-5'>
                        <Slider {...settings}>
                            <div aria-hidden="true" className="casestudy m-auto text-center flex justify-center">
                                <div className='first group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                                    <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="https://storage.googleapis.com/website-bucket-uploads/cs/gfrdf6794yyxp.pdf" target='_blank'>
                                        <div>
                                            <Image
                                                src="/castdyinner3.png"
                                                width={300}
                                                height={300}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-full'
                                            />
                                        </div>
                                        <div className='grid grid-rows-2 gap-10'>
                                            <h3 className='text-bas text-slate-900 font-semibold text-left pt-5'>Driving the Campaigns in DV360 to Post Click Attribution Success with a 36% reduction in CPI</h3>
                                            <p className='align-middle text-left text-xs font-medium text-[#3B3C3B]'>Implementing post-click conversions in DV360 attribution led to increased conversions, a 36% lower CPI, and a notable 38% boost in overall click-through rate, showcasing the effectiveness of our refined attribution model</p>
                                            <div>
                                                <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn text-[10px] font-medium'>
                                                    <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                                    <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div aria-hidden="true" className="casestudy m-auto text-center flex justify-center">
                                <div className='second group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                                    <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="https://storage.googleapis.com/website-bucket-uploads/cs/6754gfhgjfhfh3437.pdf" target='_blank'>
                                        <div>
                                            <Image
                                                src="/castdyinner10.png"
                                                width={300}
                                                height={300}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-full'
                                            />
                                        </div>
                                        <div className='grid grid-rows-2 gap-6'>
                                            <h3 className='text-base text-slate-900 font-semibold text-left pt-5'>Impact of Creative Analysis in DV360 for Automotive Manufacturer Company</h3>
                                            <p className='align-middle text-left text-xs font-medium text-[#3B3C3B] pt-2'>The client is an automotive manufacturer that produces cars, vans, and SUVs. The clients vehicles are sold in New Zealand through a network of authorised dealerships. The client was facing challenges to get effective conversions while the ads were serving</p>
                                            <div className='lg:pt-[15px]'>
                                                <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn text-[10px] font-medium'>
                                                    <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                                    <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div aria-hidden="true" className="casestudy m-auto text-center flex justify-center">
                                <div className='third group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                                    <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="https://storage.googleapis.com/website-bucket-uploads/cs/cbhnf98765koql.pdf" target='_blank'>
                                        <div>
                                            <Image
                                                src="/castdyinner11.png"
                                                width={300}
                                                height={300}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-full'
                                            />
                                        </div>
                                        <div className='grid grid-rows-2 gap-10'>
                                            <h3 className='text-base text-slate-900 font-semibold text-left pt-5'>A strategic guide to scaling the Ad Spend without affecting the ROAS</h3>
                                            <p className='align-middle text-left text-xs font-medium text-[#3B3C3B] pt-2'>The campaigns run consistently for the client throughout the year with different leagues running at different times. With the scale up of spending each day the campaign already utilised all targeting options for maximum reach.</p>
                                            <div className='lg:pt-[12px]'>
                                                <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn text-[10px] font-medium'>
                                                    <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                                    <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
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

export default Casestudy
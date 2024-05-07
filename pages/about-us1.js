'use client'
import Link from 'next/link'
import React from 'react'
import Head from 'next/head';
import { useState, useEffect } from 'react'
import { FaRegPlayCircle } from 'react-icons/fa';
import Marquee from "react-fast-marquee";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const aboutus1 = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [counterOn, setCounterOn] = useState(true);
    const [activetab, setActivetab] = useState("1");

    var settings = {
        dots: false,
        pauseOnHover: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const playVideo = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        }
    };
    return (
        <>
            <Head>
                <title>AnalyticsLiv - About us</title>
                <meta name="description" content="Google Marketing Platform Partner - Our Journey" />
                <link rel="canonical" href="https://www.analyticsliv.com/about-us"></link>
            </Head>
            <section className='abouthome w-full relative font-gilroy overflow-hidden'>
                <div className='h-full'>
                    <div className="relative px-4 md:px-20 pt-8 md:pt-20 pb-8 md:pb-20 h-full z-20">
                        <h1 className='aboutus text-[#03588c] font-semibold'>About AnalyticsLiv <br />
                            <span className='text-[#000] mt-4 inline-block'>Delivering Web Mobile & Cloud Innovation to <br /> Entrepreneurs, Startups & Businesses.</span>
                        </h1>
                    </div>
                </div>
            </section>
            <section className='aboutembed font-gilroy'>
                <div className='px-4 md:px-20 pt-8 pb-8 md:pb-16'>
                    <div className="flex items-center md:flex-nowrap flex-wrap justify-center gap-10">
                        <div className="relative lg:w-1/2 w-full" key="image">
                            {!isPlaying && (
                                <div className="relative w-full h-full overflow-hidden rounded-3xl">
                                    <img src="Testimonial.png" className="" alt="Video Placeholder" />
                                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={playVideo}>
                                        <FaRegPlayCircle className="text-white w-16 h-20" />
                                    </div>
                                </div>
                            )}
                            {isPlaying && (
                                <div className="video-container w-full h-full" key="video">
                                    <iframe
                                        src="https://www.youtube.com/embed/JFOc7x5ZgaA"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full aspect-video rounded-2xl"
                                    ></iframe>
                                </div>
                            )}
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-between text-center'>
                                <div className='lg:border-r-2 lg:border-b-2 border-solid border-[yellow]'>
                                    <div className='py-7'>
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            <h1 className='text-[25px] text-[#000] font-medium'>
                                                {counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}
                                                +
                                            </h1>
                                            <span className='text-[20px] text-[#000] font-medium'>Satisfied Clients</span>
                                        </ScrollTrigger>
                                    </div>
                                </div>
                                <div className=' lg:border-b-2 lg:border-solid border-[yellow]'>
                                    <div className='py-7'>
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            <h1 className='text-[25px] text-[#000] font-medium'>
                                                {counterOn && <CountUp start={0} end={500} duration={2} delay={0} />}
                                                +
                                            </h1>
                                            <span className='text-[20px] text-[#000] font-medium'>Successful Projects</span>
                                        </ScrollTrigger>
                                    </div>
                                </div>
                                <div className='lg:border-r-2 border-solid border-[yellow]'>
                                    <div className='py-7'>
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            <h1 className='text-[25px] text-[#000] font-medium'>
                                                {counterOn && <CountUp start={0} end={30} duration={2} delay={0} />}
                                                +
                                            </h1>
                                            <span className='text-[20px] text-[#000] font-medium'>Certified Experts</span>
                                        </ScrollTrigger>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='py-7'>
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            <h1 className='text-[25px] text-[#000] font-medium'>
                                                {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}
                                                +
                                            </h1>
                                            <span className='text-[20px] text-[#000] font-medium'>Solutions</span>
                                        </ScrollTrigger>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='border-none my-6' />
                    <div className='mt-5'>
                        <p className='text-[#666666] text-xl'>AnalyticsLiv is a leading IT development, consulting and outsourcing company. We have more than 24 years of experience accompanied by proud alliances with some esteemed IT and digital companies. We have also been involved in individual projects on a global scale. The balance between hyperspecialization of our services, the 360º vision & the knowledge of various sectors and businesses is the key to our service model. The company has been growing consistently due to our excellent solution and on-time deliveries. We are agile and dynamic, which gets transmitted through our work. We are super intended to boost the overall productivity of corporations by ensuring maximum ROI.</p>
                    </div>
                </div>
            </section>
            <section className='about3 font-gilroy'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div className='pb-5'>
                        <h2 className='text-[36px] text-[#2c2c2c] font-semibold leading-[1.4] pb-[10px]'>A Timeline of our journey</h2>
                        <p className='text-[22px] text-[#666666] font-medium leading-[1.4] pb-[10px]'>We design & develop mobile & web apps that solve real-world problems. Get to know us better</p>
                    </div>
                    <div>
                        <div className='mt-3'>
                            <img src="/timeline.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='aboutteam font-gilroy'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div className='mb-5'>
                        <h3 className='text-[24px] text-[#2c2c2c] font-semibold text-center md:leading-[32px] leading-[1.2]'>Meet the Magicians Who Work their magic Using these Props!</h3>
                    </div>
                    <div>
                        <div className='grid grid-cols-4 gap-6'>
                            <div>
                                <div>
                                    <img src="/profile4.png" alt="" className='object-cover' />
                                </div>
                                <p className='text-center text-[18px] font-semibold text-[#666666] break-words leading-[1.2] mt-[10px]'>Rajeev Agarwal</p>
                            </div>
                            <div>
                                <div>
                                    <img src="/profile4.png" alt="" className='object-cover' />
                                </div>
                                <p className='text-center text-[18px] font-semibold text-[#666666] break-words leading-[1.2] mt-[10px]'>Rajeev Agarwal</p>
                            </div>
                            <div>
                                <div>
                                    <img src="/profile4.png" alt="" className='object-cover' />
                                </div>
                                <p className='text-center text-[18px] font-semibold text-[#666666] break-words leading-[1.2] mt-[10px]'>Rajeev Agarwal</p>
                            </div>
                            <div>
                                <div>
                                    <img src="/profile4.png" alt="" className='object-cover' />
                                </div>
                                <p className='text-center text-[18px] font-semibold text-[#666666] break-words leading-[1.2] mt-[10px]'>Rajeev Agarwal</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-6 mt-[60px]'>
                            <div>
                                <div>
                                    <img src="/profile4.png" alt="" className='object-cover' />
                                </div>
                                <p className='text-center text-[18px] font-semibold text-[#666666] break-words leading-[1.2] mt-[10px]'>Rajeev Agarwal</p>
                            </div>
                            <div>
                                <div>
                                    <img src="/profile4.png" alt="" className='object-cover' />
                                </div>
                                <p className='text-center text-[18px] font-semibold text-[#666666] break-words leading-[1.2] mt-[10px]'>Rajeev Agarwal</p>
                            </div>
                            <div>
                                <div>
                                    <img src="/profile4.png" alt="" className='object-cover' />
                                </div>
                                <p className='text-center text-[18px] font-semibold text-[#666666] break-words leading-[1.2] mt-[10px]'>Rajeev Agarwal</p>
                            </div>
                            <div>
                                <div>
                                    <img src="/profile4.png" alt="" className='object-cover' />
                                </div>
                                <p className='text-center text-[18px] font-semibold text-[#666666] break-words leading-[1.2] mt-[10px]'>Rajeev Agarwal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='aboutat font-gilroy'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-20 pb-8 md:pb-20 h-full z-20">
                    <div className='py-5'>
                        <h3 className='text-[36px] text-[#2c2c2c] font-semibold leading-[1.4] pb-3'>Life at AnalyticsLiv</h3>
                        <p className='text-[20px] mt-5 text-[#666666] font-semibold leading-[1.4] pb-3'>We code, laugh, eat, & we enjoy together and make AnalyticsLiv a great workplace.</p>
                    </div>
                    <div>
                        <div className='grid md:grid-cols-5 gap-5'>
                            <div onClick={() => setActivetab(1)}>
                                <p className={`text-txt font-medium p-5 ${activetab == 1 ? 'abtactive' : ''}`}>All</p>
                                <div className='mt-[10px] md:hidden'>
                                    <div className={`${activetab == 1 && 'block'} ${activetab != 1 && 'hidden'} grid grid-cols-2 gap-5`}>
                                        <div className='as'>
                                            <img src="/about1.jpg" alt="" className='object-cover' />
                                        </div>
                                        <div className='as'>
                                            <img src="/about2.jpg" alt="" className='object-cover' />
                                        </div>
                                        <div className='as'>
                                            <img src="/about3.jpg" alt="" className='object-cover' />
                                        </div>
                                        <div className='as'>
                                            <img src="/about4.jpg" alt="" className='object-cover' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => setActivetab(2)}>
                                <p className={`text-txt font-medium p-5 ${activetab == 2 ? 'abtactive' : ''}`}>Infrastructure</p>
                                <div className='mt-[10px] md:hidden'>
                                    <p className={`${activetab == 2 && 'block'} ${activetab != 2 && 'hidden'} bg-slate-900 text-yellow-200`}>Infrastructure</p>
                                </div>
                            </div>
                            <div onClick={() => setActivetab(3)}>
                                <p className={`text-txt font-medium p-5 ${activetab == 3 ? 'abtactive' : ''}`}>Events</p>
                                <div className='mt-[10px] md:hidden'>
                                    <p className={`${activetab == 3 && 'block'} ${activetab != 3 && 'hidden'} bg-slate-900 text-yellow-200`}>Events</p>
                                </div>
                            </div>

                            <div onClick={() => setActivetab(4)}>
                                <p className={`text-txt font-medium p-5 ${activetab == 4 ? 'abtactive' : ''}`}>Trip</p>
                                <div className='mt-[10px] md:hidden'>
                                    <p className={`${activetab == 4 && 'block'} ${activetab != 4 && 'hidden'} bg-slate-900 text-yellow-200`}>Trip</p>
                                </div>
                            </div>
                            <div onClick={() => setActivetab(5)}>
                                <p className={`text-txt font-medium p-5 ${activetab == 5 ? 'abtactive' : ''}`}>Celebrations</p>
                                <div className='mt-[10px] md:hidden'>
                                    <p className={`${activetab == 5 && 'block'} ${activetab != 5 && 'hidden'} bg-slate-900 text-yellow-200`}>Celebrations</p>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-10 hidden md:block'>
                            <div className={`${activetab == 1 && 'block'} ${activetab != 1 && 'hidden'} grid grid-cols-4 gap-5`}>
                                <div className='as'>
                                    <img src="/about1.jpg" alt="" className='object-cover' />
                                </div>
                                <div className='as'>
                                    <img src="/about2.jpg" alt="" className='object-cover' />
                                </div>
                                <div className='as'>
                                    <img src="/about3.jpg" alt="" className='object-cover' />
                                </div>
                                <div className='as'>
                                    <img src="/about4.jpg" alt="" className='object-cover' />
                                </div>
                            </div>

                            <p className={`${activetab == 2 && 'block'} ${activetab != 2 && 'hidden'} bg-slate-900 text-yellow-200 mt-[10px]`}>Infrastructure</p>
                            <p className={`${activetab == 3 && 'block'} ${activetab != 3 && 'hidden'} bg-slate-900 text-yellow-200 mt-[10px]`}>Events</p>
                            <p className={`${activetab == 4 && 'block'} ${activetab != 4 && 'hidden'} bg-slate-900 text-yellow-200 mt-[10px]`}>Trip</p>
                            <p className={`${activetab == 5 && 'block'} ${activetab != 5 && 'hidden'} bg-slate-900 text-yellow-200 mt-[10px]`}>Celebrations</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='aboutteam font-gilroy'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div className='mb-5'>
                        <h3 className='text-[36px] text-[#2c2c2c] font-semibold leading-[1.4] pb-[10px]'>Brands We Work With</h3>
                        <p className='text-[22px] text-[#666666] font-medium leading-[1.4] pb-[10px]'>Not only SMEs & startups, but many Fortune 500 brands also trusted us as Technical Partner</p>
                    </div>
                    <div className="slider-container mt-10 pb-5">
                        <Slider {...settings}>
                            <div className='text-center'>
                                <div className='flex items-center justify-center'>
                                    <img src="/ThoughtSpot_logo.png" alt="" className='h-[50px]' />
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='flex items-center justify-center'>
                                    <img src="/Brizo_logo.png" alt="" className='h-[50px]' />
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='flex items-center justify-center'>
                                    <img src="/bluecrew.png" alt="" className='h-[50px]' />
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='flex items-center justify-center'>
                                    <img src="/edanz_logo.png" alt="" className='h-[50px]' />
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='flex items-center justify-center'>
                                    <img src="/shoebacca.png" alt="" className='h-[50px]' />
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='flex items-center justify-center'>
                                    <img src="/wholesalesockdeals.png" alt="" className='h-[50px]' />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className='aboutteam font-gilroy'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div className='mb-5'>
                        <h3 className='text-[36px] text-[#2c2c2c] font-semibold leading-[1.4] pb-[10px]'>Employees Speak</h3>
                        <p className='text-[22px] text-[#666666] font-medium leading-[1.4] pb-[10px]'>Face To Face With AnalyticsLiv Solution Team Members And Their Experiences</p>
                    </div>
                    <div className="slider-container mt-10 pb-5">
                        <Slider {...settings}>
                            <div className='text-center'>
                                <div className='flex items-center justify-center'>
                                    1
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='flex items-center justify-center'>
                                    2
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='flex items-center justify-center'>
                                    3
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='flex items-center justify-center'>
                                    4
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='flex items-center justify-center'>
                                    5
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='flex items-center justify-center'>
                                    6
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default aboutus1
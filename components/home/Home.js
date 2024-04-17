'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Marquee from "react-fast-marquee";
import * as Scroll from 'react-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const { Element: ScrollElement } = Scroll;
    const scrolling1 = () =>{
      {
        Scroll.scroller.scrollTo("footer", {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      }
  
    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true
    };

    const Trusteddata = {
        brand: [
            { logo: "/ThoughtSpot_logo.png", alt: "ThoughtSpot" },
            { logo: "/Brizo_logo.png", alt: "Brizo" },
            { logo: "/bluecrew.png", alt: "BlueCrew" },
            { logo: "/edanz_logo.png", alt: "Edanz" },
            { logo: "/shoebacca.png", alt: "Shoebacca" },
            { logo: "/wholesalesockdeals.png", alt: "WholesaleSockDeals" }
        ]
    };

    return (
        <>
            <section className='homepage flex items-center justify-center overflow-hidden font-gilroy'>
                <div className='bg-[#ecf9ff] min-h-[90vh] w-full'>
                    <div className='relative h-full overflow-hidden'>

                        {/* Back-Ground design  */}
                        <div className='absolute lg:hidden top-28 right-0 w-80 h-80 flex justify-end'>
                            < img className="bgd w-52 h-80 rounded-full blur-2xl opacity-[0.5]" />
                        </div>
                        {/*  */}

                        <div className='flex flex-col items-center justify-center gap-12 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16 h-full'>
                        <div className='vb pb-5 w-full'>
                                <Slider {...settings}>
                                    <div>
                                        <div className='flex lg:flex-nowrap flex-wrap items-center gap-6  mt-10'>
                                            <div className='lg:w-1/2 w-full'>
                                                <div className=''>
                                                    <h1 className='text-maintext text-[24px] text-center font-semibold leading-[32px] not-italic mt-[30px] md:pb-5'>Redefining Possibilities, Empowering Brands</h1>
                                                    <p className='text-[#000] md:text-[18px] text-base font-medium leading-[1.5em] text-center md:pb-5 pb-[30px]'>Data Analytics and Marketing Solutions helps businesses in gaining digital maturity <br /> through optimized utilization of data</p>
                                                    <div className='flex flex-wrap justify-around mb-3'>

                                                        <button onClick={scrolling1} className='butn'>
                                                            Talk to our Experts
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='lg:w-1/2 w-full mx-auto flex items-center justify-center'>
                                                <img src="/Home_Page_Main_Img_1_Updated.png" alt="" className='w-[650px]' />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex lg:flex-nowrap flex-wrap items-center gap-6'>
                                            <div className='lg:w-1/2 w-full mx-auto flex items-center justify-center'>
                                                <img src="/Home_Page_Main_Img_2.png" alt=""  className='w-[450px]'/>
                                            </div>
                                            <div className='lg:w-1/2 w-full'>
                                                <h1 className='text-maintext text-[24px] text-center font-semibold leading-[32px] not-italic mt-[30px] md:pb-5'>See Beyond the Click: Strategic Media, Analytics & Cloud Solutions for Measurable Success</h1>
                                                <p className='text-[#000] md:text-[18px] text-base font-medium leading-[1.5em] text-center md:pb-5 pb-[30px]'>Our strategic Media, Analytics & Cloud Solutions go beyond basic clicks, transforming website data into actionable insights that drive measurable success through optimized campaigns and data-driven decisions</p>
                                                <div className='flex flex-wrap justify-around mb-3'>

                                                    <button onClick={scrolling1} className='butn'>
                                                        know More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex lg:flex-nowrap flex-wrap items-center gap-6'>
                                            <div className='lg:w-1/2 w-full'>
                                                <h1 className='text-maintext text-[24px] text-center font-semibold leading-[32px] not-italic mt-[30px] md:pb-5'>Optimize, Analyze, Dominate: Media & Analytics Solutions to Power Your Digital Transformation</h1>
                                                <p className='text-[#000] md:text-[18px] text-base font-medium leading-[1.5em] text-center md:pb-5 pb-[30px]'>Fuel your digital transformation with our Media & Analytics Solutions</p>
                                                <div className='flex flex-wrap justify-around mb-3'>

                                                    <button onClick={scrolling1} className='butn'>
                                                        Schedule A Free Consultation
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='lg:w-1/2 w-full mx-auto flex items-center justify-center'>
                                                <img src="/Home_Page_Main_Img_3.png" alt=""  className='w-[450px]'/>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            {/*  */}

                            <div className=''>
                                <div>
                                    <h2 className='text-center font-bold text-base text-maintext leading-[24px]'>Trusted by Organisations Worldwide</h2>
                                </div>
                                <div className='w-[90%] m-auto'>
                                    <Marquee gradient={false} pauseOnHover="true">
                                        <div className='flex space-x-8 justify-center py-4 px-4 mt-4'>
                                            {Trusteddata.brand.map((brand, index) => (
                                                <div key={index}>
                                                    <img src={brand.logo} alt={brand.alt} className='h-[50px] mx-5' />
                                                </div>
                                            ))}
                                        </div>
                                    </Marquee>

                                </div>
                            </div>

                            {/*  */}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
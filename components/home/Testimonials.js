import React, { useEffect, useTransition } from 'react'
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 right-[-14px] sm:right-[-20px] transform -translate-y-1/2 z-10 cursor-pointer"
                onClick={onClick}
            >
                <FaArrowRight size={20} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 left-[-14px] sm:left-[-20px] transform -translate-y-1/2 z-10 cursor-pointer"
                onClick={onClick}
            >
                <FaArrowLeft size={20} />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className='font-lato pt-12 px-4 md:px-10 xl:px-8'>
            <div className='text-[#100F1B] text-2xl md:text-3xl font-bold text-center'>
                What Our Clients Have To Say
            </div>
            <div className='max-lg:pt-8 max-lg:pb-4 max-xl:pb-10 pt-12'>
                <div className='relative carousel-custom'>
                    <Slider {...settings}>

                        <div className='w-[450px] h-[420px] 2xl:h-[400px] border border-[#E5E5E5] flex flex-col justify-around items-center gap-5 text-center py-6 px-6 rounded-3xl'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/bobby.png' alt='bobby' className='mx-auto pb-5' />
                            <div className='text-[#808080] text-center text-xs md:text-sm font-normal pb-5'>“AnalyticsLiv team was an excellent asset to our businesses' switch
                                from Universal Analytics to GA4. They had excellent communication throughout the project, giving me feedback, updates and ideas as
                                the project went on. I would be happy to recommend the AnalyticsLiv team for analytics and tag manager work, and look forward to working
                                with them in the future. Thank you!”
                            </div>
                            <div className='flex flex-col justify-center items-center gap-1'>
                                <div className='text-[#1E1E1E] text-base font-bold'>Bobby Bruno</div>
                                <div className='text-[#808080] text-sm font-normal'>CMO</div>
                                <div className='text-[#1E1E1E] text-base font-medium'>Wholesale Socks Deals</div>
                            </div>
                        </div>

                        <div className='w-[450px] h-[420px] 2xl:h-[400px] border border-[#E5E5E5] flex flex-col justify-around items-center gap-5 text-center py-6 px-6 2xl:px-12 rounded-3xl'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/charles.png' alt='charles' className='mx-auto pb-7 2xl:pb-5' />
                            <div className='text-[#808080] text-center text-xs md:text-sm font-normal pb-10'>"The AnalyticsLiv team estimated the job length accurately and then
                                carried out the work exactly as briefed, to time and budget. We had one brief hiccup in the conversion tracking code but that was swiftly
                                fixed once identified. Would definitely consider using it again and for more advanced reporting functionality in future"
                            </div>
                            <div className='flex flex-col justify-center items-center gap-1'>
                                <div className='text-[#1E1E1E] text-base font-bold'>Charles Lundy</div>
                                <div className='text-[#808080] text-sm font-normal'>Co-Founder</div>
                                <div className='text-[#1E1E1E] text-base font-medium'>Mex Insurance</div>
                            </div>
                        </div>

                        <div className='w-[450px] h-[420px] 2xl:h-[400px] border border-[#E5E5E5] flex flex-col justify-around items-center gap-5 text-center py-6 px-6 rounded-3xl'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/ebenezer.png' alt='ebenezer' className='mx-auto pb-5' />
                            <div className='text-[#808080] text-center text-xs md:text-sm font-normal pb-5'>"AnalyticsLiv has been FUTEK web analytics partner for almost 3 years now.
                                They supported us with GTM implementation, GA to GA4 migration, Looker studio dashboard creations and Google cloud storage implementation.
                                They respond to our request in a timely manner and make their best efforts to resolve the web analytics issues. We are happy with the
                                support provided by AnalyticsLiv"
                            </div>
                            <div className='flex flex-col justify-center items-center gap-1'>
                                <div className='text-[#1E1E1E] text-base font-bold'>Ebenezer Ferreira</div>
                                <div className='text-[#808080] text-sm font-normal'>Senior Product Marketing Manager</div>
                                <div className='text-[#1E1E1E] text-base font-medium'>FUTEK</div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
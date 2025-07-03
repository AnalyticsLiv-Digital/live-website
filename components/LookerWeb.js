'use client';

import Slider from 'react-slick';
import { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const learnings = [
    {
        id: 1,
        title: 'Fundamentals of Data Storytelling',
        description: 'Understand why storytelling is crucial in data analytics and how it enhances decision-making.',
    },
    {
        id: 2,
        title: 'Looker Studio Essentials',
        description: 'Get hands-on knowledge about Looker Studio’s interface, features, and capabilities.',
    },
    {
        id: 3,
        title: 'Connecting and Blending Data Sources',
        description: 'Learn how to integrate multiple data sources like Google Analytics, Google Ads etc.',
    },
    {
        id: 4,
        title: 'Designing Engaging Dashboards',
        description: 'Master the art of creating visually appealing, interactive, and easy-to-read dashboards.',
    },
    {
        id: 5,
        title: 'Advanced Visualization Techniques',
        description: 'Explore features like conditional formatting, calculated fields, and custom visualizations.',
    },
    {
        id: 1,
        title: 'Fundamentals of Data Storytelling',
        description: 'Understand why storytelling is crucial in data analytics and how it enhances decision-making.',
    },
    {
        id: 2,
        title: 'Looker Studio Essentials',
        description: 'Get hands-on knowledge about Looker Studio’s interface, features, and capabilities.',
    },
    {
        id: 3,
        title: 'Connecting and Blending Data Sources',
        description: 'Learn how to integrate multiple data sources like Google Analytics, Google Ads etc.',
    },
    {
        id: 4,
        title: 'Designing Engaging Dashboards',
        description: 'Master the art of creating visually appealing, interactive, and easy-to-read dashboards.',
    },
    {
        id: 5,
        title: 'Advanced Visualization Techniques',
        description: 'Explore features like conditional formatting, calculated fields, and custom visualizations.',
    },
];

export default function LearningCarousel() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // Center is always (currentSlide + 2) % 5 (wrap around)
    const activeIndex = (currentSlide) % learnings.length;

    return (
        <section id='learn' className="py-12 bg-white text-center">
            <h2 className="text-sm text-black mb-2">
                For Professionals, data analysts, marketers, businesses and learning enthusiasts
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold mb-8">
                What You’ll Learn in This Webinar
            </h1>
            <div className='3xl:ml-10 w-full mx-auto'>
                <Slider {...settings} ref={sliderRef}>
                    {learnings.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div key={item.id} className="px-2 max-sm:w-full h-[340px] sm:h-[380px] 2xl:h-[450px]">
                                <div
                                    className={`rounded-[15px] flex mx-auto flex-col items-start text-start mt-7 sm:mt-14 2xl:mt-20 transition-all duration-300 h-[260px] 2xl:h-[280px] 3xl:h-[292px] w-[220px] xl:w-[240px] 2xl:w-[260px] 3xl:w-[277px] p-6 shadow-webinarCard bg-white ${isActive ? 'scale-105 xl:scale-110 3xl:scale-125 opacity-100 ' : 'scale-75 3xl:scale-90 opacity-70'
                                        }`}
                                >
                                    <div className="text-white relative flex items-center justify-center text-2xl 2xl:text-3xl font-bold mb-4">
                                        <img
                                            src="https://storage.googleapis.com/website-bucket-uploads/popup/Rectangle%2012.png"
                                            alt=""
                                            className="w-16 2xl:w-20 3xl:w-24"
                                        />
                                        <div className="absolute">{item.id}</div>
                                    </div>
                                    <h3 className="text-base 2xl:text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-xs 2xl:text-sm text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>

            {/* Custom Dots */}
            <div className="flex justify-center mt-6">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        onClick={() => sliderRef.current?.slickGoTo(i)}
                        className={`cursor-pointer w-3 h-3 mx-1 rounded-full transition-all duration-300 ${i === activeIndex % 5 ? 'bg-[#0B7077] w-7' : 'bg-[#0B7077B2]'
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}

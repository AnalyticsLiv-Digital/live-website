import React, { useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaYoutube } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stats = () => {
    const [counterOn, setCounterOn] = useState(true);
    const [activeVideo, setActiveVideo] = useState(null);

    const videos = [
        {
            id: 1,
            url: "https://www.youtube.com/embed/JFOc7x5ZgaA",
            coverImage: "/ROAS_Improved.png",
            label1: "Grow Your Busibess",
            label2: "Make Your Data Profitable",
            img1: "/increase.png",
            img2: "/Money Box.png",
        },
        {
            id: 2,
            url: "https://www.youtube.com/embed/JFOc7x5ZgaA",
            coverImage: "/ROAS_Improved.png",
            label1: "Grow Your Busibess",
            label2: "Make Your Data Profitable",
            img1: "/increase.png",
            img2: "/Money Box.png",
        },
        {
            id: 3,
            url: "https://www.youtube.com/embed/JFOc7x5ZgaA",
            coverImage: "/ROAS_Improved.png",
            label1: "Grow Your Busibess",
            label2: "Make Your Data Profitable",
            img1: "/increase.png",
            img2: "/Money Box.png",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
    };

    return (
        <section className="font-lato pt-28 sm:pt-40 md:pt-52 2xl:pt-64 h-full">
            <div className="relative bg-[#30486A] h-[170px] sm:h-[200px] lg:h-[290px] 2xl:h-[350px] overflow-visible">
                {/* Video Slider */}
                <div className="absolute top-[-130px] sm:top-[-180px] md:top-[-220px] lg:top-[-250px] left-1/2 transform -translate-x-1/2 w-[100%] sm:w-[75%] md:w-[75%] xl:w-[60%] 2xl:w-[800px] carousel-custom">
                    <Slider {...settings}>
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="relative video-container w-[100%] h-[240px] sm:h-[300px] md:h-[380px] lg:h-[450px] xl:h-[430px] 2xl:h-[480px] rounded-3xl"
                            >
                                {activeVideo === video.id ? (
                                    <iframe
                                        src={`${video.url}?autoplay=1&mute=1&rel=0`}
                                        title={`YouTube video ${video.id}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-[90%] mt-8 rounded-3xl"
                                    ></iframe>
                                ) : (
                                    <div
                                        className="relative w-full h-full cursor-pointer"
                                        onClick={() => setActiveVideo(video.id)}
                                    >
                                        <img
                                            src={video.coverImage}
                                            alt={`Cover for video ${video.id}`}
                                            className="w-full h-full rounded-3xl"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <FaYoutube className="text-[#08A4F7] text-6xl" />
                                        </div>
                                    </div>
                                )}
                                {/* Labels */}
                                {/* <div className="max-sm:flex max-sm:pt-8 justify-center items-start gap-2"> */}
                                <div className={`max-sm:hidden sm:absolute max-w-[125px] right-[-140px] opacity-90 bottom-[50px] lg:bottom-[90px] xl:bottom-[70px] 2xl:xl:bottom-[100px] transform -translate-y-1/2 text-center z-10`}>
                                    <div className="bg-white text-[#545567] font-light md:font-medium flex flex-col justify-center items-center text-[9px] md:text-sm px-4 py-2 rounded-lg shadow-md">
                                        <div>
                                            <img src={video.img1} alt={video.img1} className="bg-[#08A4F7]" />
                                        </div>
                                        {video.label1}
                                    </div>
                                </div>
                                <div className={`max-sm:hidden sm:absolute max-w-[165px] left-[-180px] bottom-[25px] lg:bottom-[70px] xl:bottom-[35px] opacity-90 transform -translate-y-1/2 text-center z-10`}>
                                    <div className="bg-white text-[#545567] font-light md:font-medium text-start flex justify-center items-center gap-2 text-[9px] md:text-sm px-4 py-2 rounded-lg shadow-md">
                                        <div className="">
                                            <img src={video.img2} alt={video.img2} className="bg-[#08A4F7] h-[20px] sm:h-[30px] w-[20px] sm:w-[30px] md:w-[45px]" />
                                        </div>
                                        {video.label2}
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-[#30486A] pt-7 sm:pt-8 md:pt-16 lg:pt-0 pb-10">
                <div className="flex max-md:grid max-md:grid-cols-2 justify-evenly items-center text-white">
                    {[
                        { count: 200, label: "Satisfied Clients" },
                        { count: 500, label: "Successful Projects" },
                        { count: 30, label: "Certified Experts" },
                        { count: 10, label: "Solutions" },
                    ].map((stat, index) => (
                        <div key={index} className="max-md:py-5 text-center">
                            <ScrollTrigger
                                onEnter={() => setCounterOn(true)}
                                onExit={() => setCounterOn(false)}
                            >
                                <h1 className="text-4xl font-bold">
                                    {counterOn && (
                                        <CountUp start={0} end={stat.count} duration={2} delay={0} />
                                    )}
                                    +
                                </h1>
                                <span className="text-base sm:text-lg">{stat.label}</span>
                            </ScrollTrigger>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;










// import React, { useState } from 'react';
// import Slider from "react-slick";
// import CountUp from 'react-countup';
// import ScrollTrigger from 'react-scroll-trigger';
// import { FaYoutube } from "react-icons/fa";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Stats = () => {
//     const [counterOn, setCounterOn] = useState(true);

//     const videos = [
//         {
//             id: 1,
//             url: "https://www.youtube.com/embed/JFOc7x5ZgaA",
//             cover: "/ROAS_Improved.png",
//             thumbnail: "video-thumbnail1.png",
//             labels: [
//                 { src: '/Grow_Business.png', alt: 'Grow Business' },
//                 { src: '/Make_data_profitable.png', alt: 'Make Data Profitable' }
//             ]
//         },
//         {
//             id: 2,
//             url: "https://www.youtube.com/embed/JFOc7x5ZgaA",
//             cover: "/ROAS_Improved.png",
//             thumbnail: "video-thumbnail2.png",
//             labels: [
//                 { src: '/Grow_Business.png', alt: 'Grow Business' },
//                 { src: '/Make_data_profitable.png', alt: 'Make Data Profitable' }
//             ]
//         },
//         {
//             id: 3,
//             url: "https://www.youtube.com/embed/JFOc7x5ZgaA",
//             cover: "/ROAS_Improved.png",
//             thumbnail: "video-thumbnail3.png",
//             labels: [
//                 { src: '/Grow_Business.png', alt: 'Grow Business' },
//                 { src: '/Make_data_profitable.png', alt: 'Make Data Profitable' }
//             ]
//         }
//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         arrows: false,
//         pauseOnHover: true,
//     };

//     return (
//         <section className='font-lato md:pt-52 2xl:pt-64 h-full'>
//             <div className='md:relative'>
//                 <div className="md:absolute md:top-[-200px] 2xl:top-[-240px] lg:left-[23%] lg:w-1/2 w-full carousel-custom">
//                     <Slider {...settings} className="w-[90%] lg:w-[100%] mx-auto">
//                         {videos.map((video) => (
//                             <div key={video.id} className="md:relative video-container w-full md:h-[250px] lg:h-[350px] 2xl:h-[400px] rounded-3xl">
//                                 <iframe
//                                     src={video.url}
//                                     title={`YouTube video ${video.id}`}
//                                     frameBorder="0"
//                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                     allowFullScreen
//                                     className="w-full md:w-[85%] md:ml-10 aspect-video rounded-2xl"
//                                 ></iframe>

//                                 {/* Left Label */}
//                                 <div
//                                     className="max-md:hidden md:absolute left-[-5px] bottom-10 transform -translate-y-1/2"
//                                 >
//                                     <img
//                                         src={video.labels[0].src}
//                                         alt={video.labels[0].alt}
//                                         className="w-[150px] md:w-[100px]"
//                                     />
//                                 </div>

//                                 {/* Right Label */}
//                                 <div
//                                     className="max-md:hidden md:absolute right-[-5px] bottom-3 transform -translate-y-1/2"
//                                 >
//                                     <img
//                                         src={video.labels[1].src}
//                                         alt={video.labels[1].alt}
//                                         className="w-[150px] md:w-[150px]"
//                                     />
//                                 </div>

//                                 {/* <div
//                                     className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
//                                 >
//                                     <img
//                                         src={video.labels[0].src}
//                                         alt={video.labels[0].alt}
//                                         className="w-[150px] md:w-[100px]"
//                                     />
//                                 </div>

//                                 <div
//                                     className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
//                                 >
//                                     <img
//                                         src={video.labels[1].src}
//                                         alt={video.labels[1].alt}
//                                         className="w-[150px] md:w-[150px]"
//                                     />
//                                 </div> */}
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//             <div className='bg-[#30486A] max-md:mt-16 md:h-[250px] lg:h-[350px] 2xl:h-[400px]'>
//                 <div className='flex max-md:flex-col 2xl:pb-5 justify-center items-center md:justify-evenly h-full md:items-end text-white'>
//                     <div className='py-7 text-center'>
//                         <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
//                             <h1 className='text-4xl font-bold'>
//                                 {counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}
//                                 +
//                             </h1>
//                             <span className='text-[20px] font-medium'>Satisfied Clients</span>
//                         </ScrollTrigger>
//                     </div>
//                     <div className='py-7 text-center'>
//                         <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
//                             <h1 className='text-4xl font-bold'>
//                                 {counterOn && <CountUp start={0} end={500} duration={2} delay={0} />}
//                                 +
//                             </h1>
//                             <span className='text-[20px] font-medium'>Successful Projects</span>
//                         </ScrollTrigger>
//                     </div>
//                     <div className='py-7 text-center'>
//                         <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
//                             <h1 className='text-4xl font-bold'>
//                                 {counterOn && <CountUp start={0} end={30} duration={2} delay={0} />}
//                                 +
//                             </h1>
//                             <span className='text-[20px] font-medium'>Certified Experts</span>
//                         </ScrollTrigger>
//                     </div>
//                     <div className='py-7 text-center'>
//                         <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
//                             <h1 className='text-4xl font-bold'>
//                                 {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}
//                                 +
//                             </h1>
//                             <span className='text-[20px] font-medium'>Solutions</span>
//                         </ScrollTrigger>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Stats;
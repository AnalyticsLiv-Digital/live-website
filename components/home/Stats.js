import React, { useState } from 'react';
import Slider from "react-slick";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaYoutube } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stats = () => {
    const [counterOn, setCounterOn] = useState(true);
    const [activeVideo, setActiveVideo] = useState(null); // Track the active video

    const videos = [
        {
            id: 1,
            url: "https://www.youtube.com/embed/JFOc7x5ZgaA",
            cover: "/ROAS_Improved.png",
            labels: [
                { src: '/Grow_Business.png', alt: 'Grow Business' },
                { src: '/Make_data_profitable.png', alt: 'Make Data Profitable' }
            ]
        },
        {
            id: 2,
            url: "https://www.youtube.com/embed/JFOc7x5ZgaA",
            cover: "/ROAS_Improved.png",
            labels: [
                { src: '/Grow_Business.png', alt: 'Grow Business' },
                { src: '/Make_data_profitable.png', alt: 'Make Data Profitable' }
            ]
        },
        {
            id: 3,
            url: "https://www.youtube.com/embed/JFOc7x5ZgaA",
            cover: "/ROAS_Improved.png",
            labels: [
                { src: '/Grow_Business.png', alt: 'Grow Business' },
                { src: '/Make_data_profitable.png', alt: 'Make Data Profitable' }
            ]
        }
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
        <section className='font-lato md:pt-52 2xl:pt-64 h-full'>
            <div className='md:relative'>
                <div className="md:absolute md:top-[-200px] 2xl:top-[-240px] lg:left-[23%] lg:w-1/2 w-full carousel-custom">
                    <Slider {...settings} className="w-[90%] lg:w-[100%] mx-auto">
                        {videos.map((video) => (
                            <div key={video.id} className="md:relative video-container w-full md:h-[250px] lg:h-[350px] 2xl:h-[400px] rounded-3xl">
                                {activeVideo === video.id ? (
                                    <iframe
                                        src={`${video.url}?autoplay=1&mute=1&rel=0`}
                                        title={`YouTube video ${video.id}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full rounded-2xl"
                                    ></iframe>
                                ) : (
                                    <div
                                        className="relative w-full h-full cursor-pointer"
                                        onClick={() => setActiveVideo(video.id)}
                                    >
                                        <img
                                            src={video.cover}
                                            alt={`Video cover ${video.id}`}
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl">
                                            <FaYoutube className="text-white text-6xl" />
                                        </div>
                                    </div>
                                )}

                                {/* Left Label */}
                                <div className="max-md:hidden md:absolute left-[-5px] bottom-10 transform -translate-y-1/2">
                                    <img
                                        src={video.labels[0].src}
                                        alt={video.labels[0].alt}
                                        className="w-[150px] md:w-[100px]"
                                    />
                                </div>

                                {/* Right Label */}
                                <div className="max-md:hidden md:absolute right-[-5px] bottom-3 transform -translate-y-1/2">
                                    <img
                                        src={video.labels[1].src}
                                        alt={video.labels[1].alt}
                                        className="w-[150px] md:w-[150px]"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className='bg-[#30486A] max-md:mt-16 md:h-[250px] lg:h-[350px] 2xl:h-[400px]'>
                <div className='flex max-md:flex-col 2xl:pb-5 justify-center items-center md:justify-evenly h-full md:items-end text-white'>
                    <div className='py-7 text-center'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='text-4xl font-bold'>
                                {counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}
                                +
                            </h1>
                            <span className='text-[20px] font-medium'>Satisfied Clients</span>
                        </ScrollTrigger>
                    </div>
                    <div className='py-7 text-center'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='text-4xl font-bold'>
                                {counterOn && <CountUp start={0} end={500} duration={2} delay={0} />}
                                +
                            </h1>
                            <span className='text-[20px] font-medium'>Successful Projects</span>
                        </ScrollTrigger>
                    </div>
                    <div className='py-7 text-center'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='text-4xl font-bold'>
                                {counterOn && <CountUp start={0} end={30} duration={2} delay={0} />}
                                +
                            </h1>
                            <span className='text-[20px] font-medium'>Certified Experts</span>
                        </ScrollTrigger>
                    </div>
                    <div className='py-7 text-center'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='text-4xl font-bold'>
                                {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}
                                +
                            </h1>
                            <span className='text-[20px] font-medium'>Solutions</span>
                        </ScrollTrigger>
                    </div>
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
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WhyChooseUs = () => {
    const sliderRef = useRef(null);

    const cardsData = [
        {
            title: 'Expertise',
            description: 'Our certified team of experts consists of seasoned campaign management, data scientists, and analytics experts who bring a wealth of experience to the table.',
            subtitle: 'Your Trusted Certified GMP Expert',
            image: '/experience.png',
        },
        {
            title: 'Innovation',
            description: 'Stay ahead in the rapidly evolving world of analytics with our commitment to innovative solutions like RFM Analysis, Custom Attribution, and staying abreast of the latest technologies.',
            subtitle: 'Your Partner in Digital Transformation.',
            image: '/creativity.png',
        },
        {
            title: 'Client-Centric Approach',
            description: 'We prioritize understanding your unique business challenges, ensuring that our solutions align seamlessly with your business goals.',
            subtitle: 'Your Goals, Our Focus.',
            image: '/follow.png',
        },
    ];

    const settings = {
        infinite: true, // Prevent infinite looping for better control
        slidesToShow: 2.5, // Show 2.5 cards at a time
        slidesToScroll: 1.5, // Scroll one card at a time
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1184,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleNext = () => sliderRef.current.slickNext();
    const handlePrev = () => sliderRef.current.slickPrev();

    return (
        <section className="font-lato pt-14 pb-14 lg:pl-10 2xl:pl-[3%] max-md:overflow-hidden">
            <div className="flex max-md:flex-col items-center justify-around">
                <div className="md:w-[60%] max-md:px-4 flex flex-col justify-start">
                    <div className="text-[#100F1B] text-3xl font-bold text-center md:text-start">
                        Why Choose AnalyticsLiv
                    </div>
                    <div className="text-[#373642] max-md:text-center text-base font-normal pt-8">
                        Analytics Liv Digital (“AnalyticsLiv”) is a new-age marketing firm focused on delivering data-driven customer experiences.
                        Cutting through the noise of digital data fatigue to take cognizance of a brand’s first-party data is our prime focus. A website,
                        mobile app, PPC campaigns, or landing pages—whatever be your customer touchpoints, we will make it count.
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 max-md:pt-5">
                    <div className="flex justify-center items-center gap-5">
                        <button
                            onClick={handlePrev}
                            className="relative overflow-hidden z-10 bg-white text-[#08A4F7] border border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline rounded-[8px] px-3 py-1 mb-3 transition-all duration-300 ease-linear hover:bg-[#08A4F7] hover:text-white"
                        >
                            {"<"}
                        </button>
                        <button
                            onClick={handleNext}
                            className="relative overflow-hidden z-10 bg-white text-[#08A4F7] border border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline rounded-[8px] px-3 py-1 mb-3 transition-all duration-300 ease-linear hover:bg-[#08A4F7] hover:text-white"
                        >
                            {">"}
                        </button>
                    </div>
                    <button className="mainbutn-opposite">Read More Here</button>
                </div>
            </div>
            <div className="sm:pl-5 xl:pl-16 2xl:pl-[7%] py-8 carousel-custom overflow-hidden">
                <Slider ref={sliderRef} {...settings}>
                    {cardsData?.map((card, index) => (
                        <div key={index} className=" custom-padding-370 custom-padding-540 sm:px-4 flex justify-center">
                            <div className="border rounded-3xl border-[#F2F2F2] h-[280px] w-[310px] md:w-[440px] lg:w-[420px] 2xl:w-[480px]">
                                <div className="h-[140px] text-[#373642] text-sm font-normal p-5 md:p-8">
                                    {card.description}
                                </div>
                                <div className="h-[140px] bg-[#08A4F7] rounded-b-3xl">
                                    <div className="flex items-center">
                                        <div className="w-[30%] h-[100px] pl-2 md:pl-3 2xl:pl-8">
                                            <img src="/white_bg.png" alt="white_bg" className="absolute max-md:h-24 max-md:w-24" />
                                            <img src={card.image} alt={card.title} className="relative max-md:h-16 max-md:w-16 top-4 left-4" />
                                        </div>
                                        <div className="flex flex-col max-md:pl-10 h-[140px] items-start justify-center gap-1 text-white">
                                            <div className="text-xl font-bold">{card.title}</div>
                                            <div className="text-[#FFF4ED] text-base font-normal">{card.subtitle}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default WhyChooseUs;






// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const WhyChooseUs = () => {
//     const sliderRef = useRef(null);

//     const cardsData = [
//         {
//             title: 'Expertise',
//             description: 'Our certified team of experts consists of seasoned campaign management, data scientists, and analytics experts who bring a wealth of experience to the table.',
//             subtitle: 'Your Trusted Certified GMP Expert',
//             image: '/experience.png',
//         },
//         {
//             title: 'Innovation',
//             description: 'Stay ahead in the rapidly evolving world of analytics with our commitment to innovative solutions like RFM Analysis, Custom Attribution, and staying abreast of the latest technologies.',
//             subtitle: 'Your Partner in Digital Transformation.',
//             image: '/creativity.png',
//         }, {
//             title: 'Client-Centric Approach',
//             description: 'We prioritize understanding your unique business challenges, ensuring that our solutions align seamlessly with your business goals.',
//             subtitle: 'Your Goals, Our Focus.',
//             image: '/follow.png',
//         },
//     ];


//     const settings = {
//         infinite: true,
//         slidesToShow: 2.5,
//         slidesToScroll: 1,
//         arrows: true,
//         dots: true,
//         responsive: [
//             {
//                 breakpoint: 1184,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1.5,
//                 },
//             },
//             {
//                 breakpoint: 700,
//                 settings: {
//                     slidesToShow: 1.5,
//                 },
//             },
//             {
//                 breakpoint: 500,
//                 settings: {
//                     slidesToShow: 1.5,
//                 },
//             },
//         ],
//     };

//     const handleNext = () => sliderRef.current.slickNext();
//     const handlePrev = () => sliderRef.current.slickPrev();

//     return (
//         <section className="font-lato pt-14 pb-14 lg:pl-10 2xl:pl-[3%] max-md:overflow-hidden">
//             <div className="flex max-md:flex-col items-center justify-around">
//                 <div className="md:w-[60%] max-md:px-4 flex flex-col justify-start">
//                     <div className="text-[#100F1B] text-3xl font-bold text-center md:text-start">
//                         Why Choose AnalyticsLiv
//                     </div>
//                     <div className="text-[#373642] max-md:text-center text-base font-normal pt-8">
//                         Analytics Liv Digital (“AnalyticsLiv”) is a new-age marketing firm focused on delivering data-driven customer experiences.
//                         Cutting through the noise of digital data fatigue to take cognizance of a brand’s first-party data is our prime focus. A website,
//                         mobile app, PPC campaigns, or landing pages—whatever be your customer touchpoints, we will make it count.
//                     </div>
//                 </div>
//                 <div className="flex flex-col justify-center items-center gap-2 max-md:pt-5">
//                     <div className="flex justify-center items-center gap-5">
//                         <button
//                             onClick={handlePrev}
//                             className="relative overflow-hidden z-10 bg-white text-[#08A4F7] border border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline rounded-[8px] px-3 py-1 mb-3 transition-all duration-300 ease-linear hover:bg-[#08A4F7] hover:text-white"
//                         >
//                             {"<"}
//                         </button>
//                         <button
//                             onClick={handleNext}
//                             className="relative overflow-hidden z-10 bg-white text-[#08A4F7] border border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline rounded-[8px] px-3 py-1 mb-3 transition-all duration-300 ease-linear hover:bg-[#08A4F7] hover:text-white"
//                         >
//                             {">"}
//                         </button>
//                     </div>
//                     <button className="mainbutn-opposite">Read More Here</button>
//                 </div>
//             </div>
//             <div className="sm:pl-5 xl:pl-16 2xl:pl-[7%] py-8 flex flex-col justify-center overflow-hidden carousel-custom">
//                 <Slider ref={sliderRef} {...settings}>
//                     {cardsData?.map((card, index) => (
//                         <div key={index} className="px-2 sm:px-4 flex justify-center">
//                             <div className="border rounded-3xl border-[#F2F2F2] h-[280px] w-[310px] md:w-[420px] 2xl:w-[480px]">
//                                 <div className="h-[140px] text-[#373642] text-sm font-normal p-5 md:p-8">
//                                     {card.description}
//                                 </div>
//                                 <div className="h-[140px] bg-[#08A4F7] rounded-b-3xl">
//                                     <div className="flex items-center">
//                                         <div className="w-[30%] h-[100px] pl-2 md:pl-3 2xl:pl-8">
//                                             <img src="/white_bg.png" alt="white_bg" className="absolute max-md:h-24 max-md:w-24" />
//                                             <img src={card.image} alt={card.title} className="relative max-md:h-16 max-md:w-16 top-4 left-4" />
//                                         </div>
//                                         <div className="flex flex-col max-md:pl-8 h-[140px] items-start justify-center gap-1 text-white">
//                                             <div className="text-xl font-bold">{card.title}</div>
//                                             <div className="text-[#FFF4ED] text-base font-normal">{card.subtitle}</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </section>
//     );
// };

// export default WhyChooseUs;
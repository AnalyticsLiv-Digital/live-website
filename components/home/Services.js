import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Services = () => {
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 right-[-10px] sm:right-[-18px] md:right-[-25px] transform -translate-y-1/2 z-10 cursor-pointer"
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
                className="absolute top-1/2 left-[-10px] sm:left-[-18px] md:left-[-25px] transform -translate-y-1/2 z-10 cursor-pointer"
                onClick={onClick}
            >
                <FaArrowLeft size={20} />
            </div>
        );
    };

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ]
    };

    const services = [
        {
            title: "Data Foundation",
            subtitle: "ACCURATE * COMPREHENSIVE * STRUCTURED",
            bgColor: "#E7FBF9",
            items: ["Conversion Event Tracking", "User Journey Identifiers", "Cookie Consent Solutions", "Server Side Implementation"],
            images: ["https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/GA4_Logo%20(1).png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/GTM_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Firebase_Logo%20(1).png"],
        },
        {
            title: "Data Transformation",
            subtitle: "ACCURATE * COMPREHENSIVE * STRUCTURED",
            bgColor: "#FFF4E2",
            items: ["Analytics to Cloud Integration", "Data Pipeline Creation", "Data Standardization", "Server Side Implementation"],
            images: ["https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Looker_Studio_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/BQ_Logo.png"],
        },
        {
            title: "Data Driven Marketing",
            subtitle: "ACCURATE * COMPREHENSIVE * STRUCTURED",
            bgColor: "#C8C4E9",
            items: ["Data Visualization", "PPC Campaign Management", "Programmatic Advertising (DV360)", "Conversion Rate Optimization (CRO)", "Data Modeling Solutions"],
            images: ["https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/DV_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Google_Ads_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Meta_Ads_Logo.png"],
        },
    ];

    return (
        <section className="font-lato pt-14 lg:mb-12 2xl:mb-14 px-4 md:px-16 relative">
            <div className="text-[#100F1B] text-3xl font-bold text-center">Services We Offer</div>

            <div className="hidden lg:block absolute inset-0">
                <div className="absolute h-[400px] top-[120px] bottom-[-120px] left-[35%] w-[1px] bg-[#DDDDDD]"></div>
                <div className="absolute h-[400px] top-[120px] bottom-[-120px] right-[36%] w-[1px] bg-[#DDDDDD]"></div>
                <div className="absolute w-[80%] mx-auto bottom-[-10px] left-0 right-0 h-[1px] bg-[#DDDDDD] transform -translate-y-1/2"></div>
            </div>

            <div className="hidden lg:flex justify-evenly pt-12 pb-6 relative">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-5 min-w-[250px] max-w-[410px]`}
                    >
                        <div className="flex justify-center items-center gap-4">
                            {service.images.map((img, idx) => (
                                <img key={idx} src={img} alt={`service-${index}-${idx}`} className="p-2 rounded-lg" />
                            ))}
                        </div>
                        <h3 className="text-lg font-bold text-center">{service.title}</h3>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <div className='text-[13px] 2xl:text-[15px] font-medium text-center'>
                                {service?.subtitle}
                            </div>
                            <div className="flex flex-col gap-2.5">
                                {service?.items.map((item, idx) => (
                                    <div key={idx} className="flex flex-col ">
                                        <div className="flex items-start gap-2 text-xs 2xl:text-sm font-normal">
                                            <img
                                                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Check%20Mark.png"
                                                alt="Check Mark"
                                                className="pt-0.5"
                                            />
                                            {item}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="lg:hidden pt-12 pb-6 carousel-custom">
                <Slider {...settings}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 items-center text-center px-2"
                        >
                            <div className="flex justify-center items-center gap-4">
                                {service.images.map((img, idx) => (
                                    <img key={idx} src={img} alt={`service-slider-${index}-${idx}`} className="p-2 rounded-lg" />
                                ))}
                            </div>
                            <h3 className="text-base font-bold mt-1 mb-3">{service.title}</h3>
                            <div className='flex flex-col justify-center items-center gap-3'>
                                <div className='text-[13px] 2xl:text-[15px] font-medium text-center'>
                                    {service?.subtitle}
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    {service?.items.map((item, idx) => (
                                        <div key={idx} className="flex flex-col ">
                                            <div className="flex items-start gap-2 text-xs 2xl:text-sm font-normal">
                                                <img
                                                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Check%20Mark.png"
                                                    alt="Check Mark"
                                                    className="pt-0.5"
                                                />
                                                {item}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Services;





// import React from 'react';
// import Slider from 'react-slick';
// import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';

// const Services = () => {

//     const NextArrow = (props) => {
//         const { onClick } = props;
//         return (
//             <div
//                 className="absolute top-1/2 right-[-10px] sm:right-[-18px] md:right-[-25px] transform -translate-y-1/2 z-10 cursor-pointer"
//                 onClick={onClick}
//             >
//                 <FaArrowRight size={20} />
//             </div>
//         );
//     };

//     const PrevArrow = (props) => {
//         const { onClick } = props;
//         return (
//             <div
//                 className="absolute top-1/2 left-[-10px] sm:left-[-18px] md:left-[-25px] transform -translate-y-1/2 z-10 cursor-pointer"
//                 onClick={onClick}
//             >
//                 <FaArrowLeft size={20} />
//             </div>
//         );
//     };

//     const settings = {
//         dots: true,
//         arrows: true,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         autoplay: true,
//         arrows: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 680,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//         ]
//     };

//     const services = [
//         {
//             title: 'Data Foundation',
//             subtitle: 'ACCURATE * COMPREHENSIVE * STRUCTURED',
//             bgColor: '#E7FBF9',
//             items: [
//                 {
//                     description: 'Conversion Event Tracking',
//                 },
//                 {
//                     description: 'User Journey Identifiers',
//                 },
//                 {
//                     description: 'Cookie Consent Solutions',
//                 },
//                 {
//                     description: 'Server Side Implementation',
//                 },
//             ],
//             image1: '/GA4_Logo (1).png',
//             image2: '/GTM_Logo.png',
//             image3: '/Firebase_Logo (1).png',
//         },
//         {
//             title: 'Data Transformation',
//             subtitle: 'ACCURATE * COMPREHENSIVE * STRUCTURED',
//             bgColor: '#FFF4E2',
//             items: [
//                 {
//                     description: 'Analytics to Cloud Integration',
//                 },
//                 {
//                     description: 'Data Pipeline Creation',
//                 },
//                 {
//                     description: 'Data Standardization',
//                 },
//                 {
//                     description: 'Server Side Implementation',
//                 },
//             ],
//             image1: '/Looker_Studio_Logo.png',
//             image2: '/BQ_Logo.png',
//         },
//         {
//             title: 'Data Driven Marketing',
//             subtitle: 'ACCURATE * COMPREHENSIVE * STRUCTURED',
//             bgColor: '#C8C4E9',
//             items: [
//                 {
//                     description: 'Data Visualization',
//                 },
//                 {
//                     description: 'PPC Campaign Management',
//                 },
//                 {
//                     description: 'Programmatic Advertising (DV360)',
//                 },
//                 {
//                     description: 'Conversion Rate Optimization (CRO)',
//                 },
//                 {
//                     description: 'Data Modeling Solutions',
//                 },
//             ],
//             image1: '/DV_Logo.png',
//             image2: '/Google_Ads_Logo.png',
//             image3: '/Meta_Ads_Logo.png',
//         },
//     ];

//     return (
//         <section className="font-lato pt-14 px-4 md:px-16">
//             <div className="text-[#100F1B] text-3xl font-bold text-center">
//                 Services We Offer
//             </div>
//             <div className="hidden lg:flex max-lg:flex-col gap-6 md:gap-4 justify-evenly pt-12 pb-6 md:pb-10 relative border-b border-gray-300">
//                 {services?.map((service, index) => (
//                     <div
//                         key={index}
//                         className={`flex flex-col gap-5 min-w-[250px] xl:min-w-[320px] md:max-w-[410px] ${index !== 0 ? "border-l border-gray-300 pl-6" : ""
//                             }`}
//                     >
//                         <div className="flex flex-col justify-center items-center gap-4">
//                             <div className="flex w-full justify-center gap-3 px-16 items-center">
//                                 <img
//                                     src={service?.image1}
//                                     alt={service?.title}
//                                     className={`p-2 rounded-lg`}
//                                 />
//                                 <img
//                                     src={service?.image2}
//                                     alt={service?.title}
//                                     className={`p-2 rounded-lg`}
//                                 />
//                                 {service?.image3 && <img
//                                     src={service?.image3}
//                                     alt={service?.title}
//                                     className={`p-2 rounded-lg`}
//                                 />}
//                             </div>
//                             <div className="text-base lg:text-lg 2xl:text-xl font-bold">
//                                 {service?.title}
//                             </div>
//                         </div>
//                         <div className='flex flex-col justify-center items-center gap-3'>
//                             <div className='text-[13px] 2xl:text-[15px] font-medium text-center'>
//                                 {service?.subtitle}
//                             </div>
//                             <div className="flex flex-col gap-2.5">
//                                 {service?.items.map((item, idx) => (
//                                     <div key={idx} className="flex flex-col ">
//                                         {/* <div className="text-xs lg:text-[13px] 2xl:text-[15px] font-semibold">
//                                             {item.heading}
//                                         </div> */}
//                                         <div className="flex items-start gap-2 text-xs 2xl:text-sm font-normal">
//                                             <img
//                                                 src="/Check Mark.png"
//                                                 alt="Check Mark"
//                                                 className="pt-0.5"
//                                             />
//                                             {item.description}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="lg:hidden pt-12 pb-6 md:pb-10 carousel-custom">
//                 <Slider {...settings}>
//                     {services.map((service, index) => (
//                         <div
//                             key={index}
//                             className="flex flex-col gap-5 min-w-[250px] xl:min-w-[320px] md:max-w-[410px] px-4"
//                         >
//                             <div className="flex items-center gap-5 pb-3">
//                                 <img
//                                     src={service.image}
//                                     alt={service.title}
//                                     className={`bg-[${service.bgColor}] p-2 rounded-lg`}
//                                 />
//                                 <div className="text-base lg:text-lg 2xl:text-xl font-bold">
//                                     {service.title}
//                                 </div>
//                             </div>
//                             <div className="flex flex-col gap-2.5">
//                                 {service.items.map((item, idx) => (
//                                     <div key={idx} className="flex flex-col gap-1">
//                                         <div className="text-xs lg:text-[13px] 2xl:text-[15px] font-semibold">
//                                             {item.heading}
//                                         </div>
//                                         <div className="flex items-start gap-2 text-xs 2xl:text-sm font-normal">
//                                             <img
//                                                 src="/Check Mark.png"
//                                                 alt="Check Mark"
//                                                 className="pt-0.5"
//                                             />
//                                             {item.description}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </section>
//     );
// };

// export default Services;






// import React from 'react';
// import Slider from 'react-slick';
// import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';

// const Services = () => {

//     const NextArrow = (props) => {
//         const { onClick } = props;
//         return (
//             <div
//                 className="absolute top-1/2 right-[-10px] sm:right-[-18px] md:right-[-25px] transform -translate-y-1/2 z-10 cursor-pointer"
//                 onClick={onClick}
//             >
//                 <FaArrowRight size={20} />
//             </div>
//         );
//     };

//     const PrevArrow = (props) => {
//         const { onClick } = props;
//         return (
//             <div
//                 className="absolute top-1/2 left-[-10px] sm:left-[-18px] md:left-[-25px] transform -translate-y-1/2 z-10 cursor-pointer"
//                 onClick={onClick}
//             >
//                 <FaArrowLeft size={20} />
//             </div>
//         );
//     };

//     const settings = {
//         dots: true,
//         arrows: true,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         autoplay: true,
//         arrows: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 680,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//         ]
//     };

//     const services = [
//         {
//             title: 'Marketing Services',
//             bgColor: '#E7FBF9',
//             items: [
//                 {
//                     heading: 'Programmatic Media Solutions',
//                     description: 'Buy Display & Video Inventory Programmatically With DV360',
//                 },
//                 {
//                     heading: 'eCommerce Marketing',
//                     description: 'Steer Catalog Based Product Listing Ads.',
//                 },
//                 {
//                     heading: 'Lead Generation',
//                     description: 'Generate Leads At Reduced Costs.',
//                 },
//                 {
//                     heading: 'Mobile App Marketing',
//                     description: 'Drive App Installs At Lower CPI.',
//                 },
//                 {
//                     heading: 'Search Engine Marketing',
//                     description: 'Power Your Search Campaigns For Performance.',
//                 },
//             ],
//             image: '/bullhorn.png',
//         },
//         {
//             title: 'Analytics Services',
//             bgColor: '#FFF4E2',
//             items: [
//                 {
//                     heading: 'Web and App Measurement',
//                     description: 'Accurate measurement of user interactions across web and app platforms.',
//                 },
//                 {
//                     heading: 'Audit and Health Check',
//                     description: 'Thorough examination and assessment of your analytics setup.',
//                 },
//                 {
//                     heading: 'Data Reporting & Analysis',
//                     description: 'Transform raw data into actionable insights.',
//                 },
//                 {
//                     heading: 'Looker BI Platform',
//                     description: 'Utilize Looker for advanced Business Intelligence and data exploration.',
//                 },
//             ],
//             image: '/seo.png',
//         },
//         {
//             title: 'Solutions',
//             bgColor: '#C8C4E9',
//             items: [
//                 {
//                     heading: 'GDPR Compliance',
//                     description: 'Enhance brand visibility through effective display strategies.',
//                 },
//                 {
//                     heading: 'Data Science Solution & Automation',
//                     description: 'Implement data science solutions and automation.',
//                 },
//                 {
//                     heading: 'Customer Segmentation',
//                     description: 'Avail visitors’ custom attribution journey to pinpoint their sources.',
//                 },
//             ],
//             image: '/solution.png',
//         },
//     ];

//     return (
//         <section className="font-lato pt-14 px-4 md:px-16">
//             <div className="text-[#100F1B] text-3xl font-bold text-center">
//                 Services We Offer
//             </div>
//             <div className="hidden lg:flex max-lg:flex-col gap-6 md:gap-8 justify-evenly pt-12 pb-6 md:pb-10 relative border-b border-gray-300">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className={`flex flex-col gap-5 min-w-[250px] xl:min-w-[320px] md:max-w-[410px] ${index !== 0 ? "border-l border-gray-300 pl-6" : ""
//                             }`}
//                     >
//                         <div className="flex items-center gap-5">
//                             <img
//                                 src={service.image}
//                                 alt={service.title}
//                                 className={`bg-[${service.bgColor}] p-2 rounded-lg`}
//                             />
//                             <div className="text-base lg:text-lg 2xl:text-xl font-bold">
//                                 {service.title}
//                             </div>
//                         </div>
//                         <div className="flex flex-col gap-2.5">
//                             {service.items.map((item, idx) => (
//                                 <div key={idx} className="flex flex-col gap-1">
//                                     <div className="text-xs lg:text-[13px] 2xl:text-[15px] font-semibold">
//                                         {item.heading}
//                                     </div>
//                                     <div className="flex items-start gap-2 text-xs 2xl:text-sm font-normal">
//                                         <img
//                                             src="/Check Mark.png"
//                                             alt="Check Mark"
//                                             className="pt-0.5"
//                                         />
//                                         {item.description}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="lg:hidden pt-12 pb-6 md:pb-10 carousel-custom">
//                 <Slider {...settings}>
//                     {services.map((service, index) => (
//                         <div
//                             key={index}
//                             className="flex flex-col gap-5 min-w-[250px] xl:min-w-[320px] md:max-w-[410px] px-4"
//                         >
//                             <div className="flex items-center gap-5 pb-3">
//                                 <img
//                                     src={service.image}
//                                     alt={service.title}
//                                     className={`bg-[${service.bgColor}] p-2 rounded-lg`}
//                                 />
//                                 <div className="text-base lg:text-lg 2xl:text-xl font-bold">
//                                     {service.title}
//                                 </div>
//                             </div>
//                             <div className="flex flex-col gap-2.5">
//                                 {service.items.map((item, idx) => (
//                                     <div key={idx} className="flex flex-col gap-1">
//                                         <div className="text-xs lg:text-[13px] 2xl:text-[15px] font-semibold">
//                                             {item.heading}
//                                         </div>
//                                         <div className="flex items-start gap-2 text-xs 2xl:text-sm font-normal">
//                                             <img
//                                                 src="/Check Mark.png"
//                                                 alt="Check Mark"
//                                                 className="pt-0.5"
//                                             />
//                                             {item.description}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </section>
//     );
// };

// export default Services;
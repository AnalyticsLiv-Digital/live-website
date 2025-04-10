import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Services = () => {
  const sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
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
          speed: 1000,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 988,
        settings: {
          dots: false,
          speed: 1000,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          speed: 1000,
          // nextArrow: false,
          // prevArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => sliderRef.current.slickNext();
  const handlePrev = () => sliderRef.current.slickPrev();

  const services = [
    {
      title: "Data Foundation",
      bgColor: "#E7FBF9",
      image:
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Data%20Foundation.png",
      items: [
        "Account Health Audit",
        " GA4 Implementation & Optimization",
        "Server Side Tracking",
        "Cookie Consent Solution",
      ],
      images: [
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/GA4_Logo%20(1).png",
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/GTM_Logo.png",
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Firebase_Logo%20(1).png",
      ],
      redirect: "/services/web-app-measurement",
    },
    {
      title: "Data Transformation",
      bgColor: "#FFF4E2",
      image:
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Data%20Transformation.png",
      items: [
        "Cloud Migration & Engineering",
        "Custom Pipeline Creation",
        "Custom Dashboarding",
        "Custom ML & AI Solutions",
      ],
      images: [
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Looker_Studio_Logo.png",
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/BQ_Logo.png",
      ],
      redirect: "/services/data-science",
    },
    {
      title: "Data Driven Marketing",
      bgColor: "#C8C4E9",
      image:
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Data%20Driven%20Marketing.png",
      items: [
        "PPC Campaign Management",
        "Programmatic Advertising (DV360)",
        "CRO-Consumer Journey, Mapping, Strategy, Design",
        "Data Insight",
      ],
      images: [
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/DV_Logo.png",
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Google_Ads_Logo.png",
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Meta_Ads_Logo.png",
      ],
      redirect: "/services/programatic-advertising",
    },
    {
      title: "Product & Solutions",
      bgColor: "#C8C4E9",
      image:
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Product%20and%20Solutions.png",
      items: [
        "MAdKPI",
        "Lead Scoring",
        "CRE (Content Recommendation Engine)",
        "RFM Analysis",
        "MMM Modeling",
      ],
      images: [
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/MAD_KPI_Logo%20(2).png",
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/DV_Logo.png",
        "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Google_Ads_Logo.png",
      ],
      redirect: "/services/customer-segmentation",
    },
  ];

  return (
    <div className="pt-14 mb-12 xl:mb-20 2xl:mb-12 px-4 md:px-8 lg:px-16 relative">
      <div className="text-[#100F1B] text-3xl font-bold text-center">
        Services We Offer
      </div>
      <div className="relative">
        <div className="flex flex-col justify-start w-[63%] md:w-[50%] gap-6 pt-12">
          <div className="text-sm md:text-lg max-md:text-start lg:text-3xl font-bold text-[#373642]">
            Checkout our Expert Services
          </div>
          <div className="max-md:hidden text-[9px] md:text-xs max-md:text-start lg:text-base font-normal text-[#373642]">
            Analytics Liv Digital (“AnalyticsLiv”) is a new age marketing firm
            focused on delivering data driven customer experiences. Cutting
            through the noise of digital data fatigue to take cognizance of a
            brand’s first party data is our prime focus. A website, mobile app,
            PPC campaigns or landing pages- whatever be your customer
            touchpoint(s), we will make it count.
          </div>
          <div className="md:hidden text-[9px] md:text-xs max-md:text-start font-normal text-[#373642]">
            Analytics Liv Digital (“AnalyticsLiv”) is a new age marketing firm
            focused on delivering data driven customer experiences.
          </div>
        </div>
        <img
          src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Service_Main_Image.png"
          alt="services"
          className="absolute top-10 md:top-10 right-[0%] md:right-[5%] 2xl:right-[9%] z-10 max-md:w-[35%] max-xl:w-[40%]"
        />
        <div className="lg:hidden max-md:pt-5 absolute md:top-10 top-4 right-[0.5%] md:right-[6%] 2xl:right-[10%]">
          <div className="flex justify-center items-center gap-1 md:gap-2 lg:gap-5">
            <button
              onClick={handlePrev}
              className="group overflow-hidden z-10 bg-transparent border border-white hover:border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline rounded-[4px] md:rounded-[8px] px-1 py-1 md:px-4 md:py-3 mt-3 transition-all duration-300 ease-linear hover:bg-white"
            >
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector%20(1).svg"
                alt="left vector"
                className="w-2 h-2 md:w-3.5 md:h-3.5 hidden group-hover:block"
              />
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Stroke%20right%20white.svg"
                alt="left vector"
                className="w-2 h-2 md:w-3.5 md:h-3.5 group-hover:hidden block"
              />
            </button>
            <button
              onClick={handleNext}
              className="group overflow-hidden z-10 bg-transparent border border-white hover:border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline rounded-[4px] md:rounded-[8px] px-1 py-1 md:px-4 md:py-3 mt-3 transition-all duration-300 ease-linear hover:bg-white"
            >
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector.svg"
                alt="right vector"
                className="w-2 h-2 md:w-3.5 md:h-3.5 hidden group-hover:block"
              />
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Stroke%20left%20white.svg"
                alt="right vector"
                className="w-2 h-2 md:w-3.5 md:h-3.5 group-hover:hidden block"
              />
            </button>
          </div>
        </div>

        <div className="max-lg:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 z-20 max-md:mx-7 justify-items-center 2xl:justify-items-start max-lg:gap-7 pt-12 pb-6 relative">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col group transition duration-300 gap-5 w-[310px] sm:w-[350px] md:w-[350px] 
                md:h-[280px] lg:w-[205px] xl:w-[260px] 2xl:w-[300px] min-h-[300px] xl:min-h-[326px] shadow-customShadow
                px-4 xl:px-7 py-4 sm:py-5 rounded-3xl bg-white hover:shadow-xl
               `}
            >
              <div>
                <div className="flex flex-col justify-center items-center gap-5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-14"
                  />
                  <h3 className="text-base 2xl:text-lg font-bold text-center">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-start items-start gap-3">
                  <div className="flex flex-col gap-2.5">
                    {service?.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="flex items-center md:items-start gap-1 sm:gap-2 text-[10px] xl:text-sm hover:cursor-default font-normal">
                          <img
                            src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Check%20Mark.png"
                            alt="Check Mark blue"
                            className="pt-0.5"
                          />
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <div className="flex flex-col justify-center items-center">
                  <div className="flex lg:flex-wrap justify-start items-center gap-3">
                    {service.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`service-${index}-${idx}`}
                        className="lg:p-1 rounded-lg mb-2 lg:mb-3 max-md:w-8 max-lg:w-10"
                      />
                    ))}
                  </div>
                  <a href={service.redirect} target="_blank">
                    <button className="mainbutn-opposite hover:border-white">
                      Read More
                    </button>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden z-20 pt-2 sm:pt-3 md:pt-4 max-md:w-[85%] mx-auto relative carousel-custom">
          <Slider ref={sliderRef} {...settings}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col group transition duration-300 gap-5 mx-auto sm:w-[350px] md:w-[350px] 
                md:h-[280px] lg:w-[205px] xl:w-[260px] 2xl:w-[300px] min-h-[290px] md:min-h-[300px] xl:min-h-[326px] shadow-customShadow
                px-4 xl:px-7 py-4 sm:py-5 rounded-3xl bg-white hover:shadow-arrowShadow
               `}
              >
                <div>
                  <div className="flex flex-col justify-center items-center gap-5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-14"
                    />
                    <h3 className="text-base xl:text-lg font-bold text-center">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-5">
                  <div className="flex flex-col justify-start items-start gap-3">
                    <div className="flex flex-col gap-2.5">
                      {service?.items.map((item, idx) => (
                        <div key={idx} className="flex flex-col">
                          <div className="flex items-center md:items-start gap-1 sm:gap-2 text-[10px] xl:text-sm hover:cursor-default font-normal">
                            <img
                              src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Check%20Mark.png"
                              alt="Check Mark blue"
                              className="pt-0.5"
                            />
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;


// import React from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const Services = () => {

//     const services = [
//         {
//             title: "Data Foundation",
//             bgColor: "#E7FBF9",
//             image: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/data-warehouse%20(1)%201.png",
//             items: ["Account Health & Opportunity", " GA4 Implementation & Optimization", "Server Side Tracking", "Cookie Consent Solution"],
//             images: ["https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/GA4_Logo%20(1).png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/GTM_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Firebase_Logo%20(1).png"],
//             redirect: "/services/web-app-measurement",
//         },
//         {
//             title: "Data Transformation",
//             bgColor: "#FFF4E2",
//             image: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/dashboard%20(8)%201.png",
//             items: ["Cloud Migration & Engineering", "Custom Pipeline Creation", "Custom Dashboarding"],
//             images: ["https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Looker_Studio_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/BQ_Logo.png"],
//             redirect: "/services/data-science",
//         },
//         {
//             title: "Data Driven Marketing",
//             bgColor: "#C8C4E9",
//             image: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/data-driven%20(3).png",
//             items: ["PPC Campaign Management", "Programmatic Advertising (DV360)", "CRO-Consumer Journey, Mapping, Strategy, Desing", "Data Insight"],
//             images: ["https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/DV_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Google_Ads_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Meta_Ads_Logo.png"],
//             redirect: "/services/programatic-advertising",
//         },
//         {
//             title: "Product & Solutions",
//             bgColor: "#C8C4E9",
//             image: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/prototype%201.png",
//             items: ["MAdKPI", "Lead Scoring", "Product & Content Recommendation Engine", "RFM Analysis", "MMM Modeling"],
//             images: ["https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/MAD_KPI_Logo%20(2).png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/DV_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Google_Ads_Logo.png"],
//             redirect: "/services/customer-segmentation",
//         },
//     ];

//     return (
//         <section className="pt-14 lg:mb-12 2xl:mb-5 px-4 md:px-8 lg:px-16 relative">
//             <div className="text-[#100F1B] text-3xl font-bold text-center">Services We Offer</div>
//             <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center max-md:gap-7 pt-12 pb-6 relative">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className={`flex flex-col group md:hover:scale-105 transition duration-300 gap-5 w-[310px] sm:w-[350px] md:w-[350px] md:h-[280px] lg:w-[450px] xl:w-[500px] 2xl:w-[650px] shadow-customShadow hover:bg-[#08A4F7] hover:text-white px-4 md:px-7 py-4 sm:py-5 rounded-3xl
//                 ${index === 1 || index === services.length - 1 ? 'md:mt-12' : ''}`}
//                     >
//                         <div>
//                             <div className="flex justify-start items-center gap-5">
//                                 <img src={service.image} alt={service.title} />
//                                 <h3 className="text-lg font-bold text-center">{service.title}</h3>
//                             </div>
//                         </div>
//                         <div className="flex justify-between items-center">
//                             <div className="flex flex-col justify-start items-start gap-3">
//                                 <div className="flex flex-col gap-2.5">
//                                     {service?.items.map((item, idx) => (
//                                         <div key={idx} className="flex flex-col max-w-[150px] md:max-w-[160px] lg:max-w-[200px] xl:max-w-[250px] 2xl:max-w-[450px]">
//                                             <div className="flex items-start gap-1 sm:gap-2 text-[10px] lg:text-xs xl:text-sm hover:cursor-default font-normal">
//                                                 <img
//                                                     src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Check%20Mark.png"
//                                                     alt="Check Mark blue"
//                                                     className="pt-0.5 group-hover:hidden"
//                                                 />
//                                                 <img
//                                                     src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/checked%20(1).png"
//                                                     alt="Check Mark white"
//                                                     className="pt-0.5 hidden group-hover:flex"
//                                                 />
//                                                 {item}
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div className="flex flex-col justify-center items-center">
//                                 <div className="flex lg:flex-wrap justify-start items-center gap-3">
//                                     {service.images.map((img, idx) => (
//                                         <img key={idx} src={img} alt={`service-${index}-${idx}`} className="lg:p-1 rounded-lg mb-2 lg:mb-3 max-md:w-8 max-lg:w-10" />
//                                     ))}
//                                 </div>
//                                 <a href={service.redirect} target="_blank"><button className="mainbutn-opposite hover:border-white">Read More</button></a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Services;

// import React from "react";
// import Slider from "react-slick";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
//             title: "Data Foundation",
//             subtitle: "ACCURATE * COMPREHENSIVE * STRUCTURED",
//             bgColor: "#E7FBF9",
//             items: ["Conversion Event Tracking", "User Journey Identifiers", "Cookie Consent Solutions", "Server Side Implementation"],
//             images: ["https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/GA4_Logo%20(1).png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/GTM_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Firebase_Logo%20(1).png"],
//         },
//         {
//             title: "Data Transformation",
//             subtitle: "ACCURATE * COMPREHENSIVE * STRUCTURED",
//             bgColor: "#FFF4E2",
//             items: ["Analytics to Cloud Integration", "Data Pipeline Creation", "Data Standardization", "Server Side Implementation"],
//             images: ["https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Looker_Studio_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/BQ_Logo.png"],
//         },
//         {
//             title: "Data Driven Marketing",
//             subtitle: "ACCURATE * COMPREHENSIVE * STRUCTURED",
//             bgColor: "#C8C4E9",
//             items: ["Data Visualization", "PPC Campaign Management", "Programmatic Advertising (DV360)", "Conversion Rate Optimization (CRO)", "Data Modeling Solutions"],
//             images: ["https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/DV_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Google_Ads_Logo.png", "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Meta_Ads_Logo.png"],
//         },
//     ];

//     return (
//         <section className="font-lato pt-14 lg:mb-12 2xl:mb-14 px-4 md:px-16 relative">
//             <div className="text-[#100F1B] text-3xl font-bold text-center">Services We Offer</div>

//             <div className="hidden lg:block absolute inset-0">
//                 <div className="absolute h-[400px] top-[120px] bottom-[-120px] left-[35%] w-[1px] bg-[#DDDDDD]"></div>
//                 <div className="absolute h-[400px] top-[120px] bottom-[-120px] right-[36%] w-[1px] bg-[#DDDDDD]"></div>
//                 <div className="absolute w-[80%] mx-auto bottom-[-10px] left-0 right-0 h-[1px] bg-[#DDDDDD] transform -translate-y-1/2"></div>
//             </div>

//             <div className="hidden lg:flex justify-evenly pt-12 pb-6 relative">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className={`flex flex-col gap-5 min-w-[250px] max-w-[410px]`}
//                     >
//                         <div className="flex justify-center items-center gap-4">
//                             {service.images.map((img, idx) => (
//                                 <img key={idx} src={img} alt={`service-${index}-${idx}`} className="p-2 rounded-lg" />
//                             ))}
//                         </div>
//                         <h3 className="text-lg font-bold text-center">{service.title}</h3>
//                         <div className='flex flex-col justify-center items-center gap-3'>
//                             <div className='text-[13px] 2xl:text-[15px] font-medium text-center'>
//                                 {service?.subtitle}
//                             </div>
//                             <div className="flex flex-col gap-2.5">
//                                 {service?.items.map((item, idx) => (
//                                     <div key={idx} className="flex flex-col ">
//                                         <div className="flex items-start gap-2 text-xs 2xl:text-sm font-normal">
//                                             <img
//                                                 src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Check%20Mark.png"
//                                                 alt="Check Mark"
//                                                 className="pt-0.5"
//                                             />
//                                             {item}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="lg:hidden pt-12 pb-6 carousel-custom">
//                 <Slider {...settings}>
//                     {services.map((service, index) => (
//                         <div
//                             key={index}
//                             className="flex flex-col gap-4 items-center text-center px-2"
//                         >
//                             <div className="flex justify-center items-center gap-4">
//                                 {service.images.map((img, idx) => (
//                                     <img key={idx} src={img} alt={`service-slider-${index}-${idx}`} className="p-2 rounded-lg" />
//                                 ))}
//                             </div>
//                             <h3 className="text-base font-bold mt-1 mb-3">{service.title}</h3>
//                             <div className='flex flex-col justify-center items-center gap-3'>
//                                 <div className='text-[13px] 2xl:text-[15px] font-medium text-center'>
//                                     {service?.subtitle}
//                                 </div>
//                                 <div className="flex flex-col gap-2.5">
//                                     {service?.items.map((item, idx) => (
//                                         <div key={idx} className="flex flex-col ">
//                                             <div className="flex items-start gap-2 text-xs 2xl:text-sm font-normal">
//                                                 <img
//                                                     src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Check%20Mark.png"
//                                                     alt="Check Mark"
//                                                     className="pt-0.5"
//                                                 />
//                                                 {item}
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </section>/services/web-app-measurement
//     );/services/data-science
// /services/programatic-advertising
// };

// export default Services;
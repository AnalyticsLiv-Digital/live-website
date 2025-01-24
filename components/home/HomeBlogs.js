import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const HomeBlogs = () => {

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute text-white bg-sky-400 rounded-full p-0.5 sm:p-0.5 md:p-1 xl:p-1 top-1/2 right-[-15px] sm:right-[-20px] md:right-[-50px] lg:right-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaArrowRight className='text-sm sm:text-base xl:text-sm' />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute text-white bg-sky-400 rounded-full p-0.5 sm:p-0.5 md:p-1 xl:p-1 top-1/2 left-[-15px] sm:left-[-15px] md:left-[-50px] lg:left-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaArrowLeft className='text-sm sm:text-base xl:text-sm' />
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          dots: false,
          speed: 1000,
          // nextArrow: false,
          // prevArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <section className="max-md:pb-7 md:pt-5 lg:pt-10 xl:pt-20 2xl:pt-20 md:pb-7 lg:pb-14 px-4 md:px-16">
      <div className="flex max-md:flex-col justify-between py-10 items-center overflow-hidden relative">
        <div className="flex flex-col md:w-[40%] lg:w-[50%] 2xl:w-[45%] gap-6 justify-center md:justify-start items-center md:items-start">
          <h2 className="text-[#100F1B] text-2xl lg:text-3xl font-bold text-center md:text-left">Read Our Insightful Blogs</h2>
          <p className="text-[#373642] text-sm lg:text-lg font-normal text-center md:text-left">
            Explore our diverse blogs collection for insightful perspectives and expert knowledge on a topic that you can consult with us.
          </p>
        </div>
        <div className="absolute max-md:hidden 2xl:top-[-50px] left-[28%] lg:left-[37%] z-10 2xl:left-[35%] w-full">
          <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Arrow.png" alt="arrow" className="w-[40%] 2xl:w-[45%]" />
        </div>
        <div className='max-md:hidden'>
          <a href='/blogs' className=''><button className="mainbutn max-md:mt-5">Read More Blogs</button></a>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      <div className="md:pt-8 w-full mx-auto relative carousel-custom">
        <Slider {...settings}>
          <a href='/blogs/google-dv360-removal-of-flight-asap-pacing-at-the-insertion-order-level' className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative">
            <div className='flex flex-col justify-evenly h-full'>
              <div className="absolute w-[100px] text-center top-4 2xl:top-6 right-4 2xl:right-6 bg-[#A2EC4E99] text-white font-semibold px-3 py-1 rounded-tr-2xl 2xl:rounded-tr-[20px] rounded-bl-md text-sm">Marketing</div>
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Blog_thumbnail_image_29_Removal%20of%20Flight%20ASAP.png"
                alt="Removal of Flight ASAP"
                className="rounded-md mb-4 w-full"
              />
              <h3
                className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Google’s DV360: Removal of Flight ASAP Pacing at the Insertion Order Level
              </h3>
              <p
                className="text-sm text-[#373642] mb-4"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  WebkitLineClamp: 3,
                }}
              >
                In November 2024, Google will remove the Flight ASAP pacing option at the insertion order level from its
                Display & Video 360 (DV360) platform, a change that significantly impacts how advertisers manage budgets and pacing.
                This adjustment reflects Google’s ongoing efforts to streamline budget management and ensure more controlled spend throughout
                campaign lifespans.
              </p>
              <div className="flex justify-between items-center text-sm text-[#0066cc]">
                <span className="text-[#6B7280]">25th Nov 2024</span>
                <button className="text-[#08A4F7] text-base font-medium hover:underline">Read Full</button>
              </div>
            </div>
          </a>
          <a href='/blogs/behavioral-and-conversion-modeling-in-ga4-with-google-consent-mode-v2' className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative">
            <div className='flex flex-col justify-evenly h-full'>

              <div className="absolute w-[100px] text-center top-4 2xl:top-6 right-4 2xl:right-6 bg-[#EC954E99] text-white font-semibold px-3 py-1 rounded-tr-[20px] 2xl:rounded-tr-3xl rounded-bl-md text-sm">Analytics</div>
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Blog_thumbnail_Google_Consent.png"
                alt="Google_Consent"
                className="rounded-md mb-4 w-full"
              />
              <h3
                className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Bridging the Gap: Behavioral and Conversion Modeling in GA4 with Google Consent Mode v2
              </h3>
              <p
                className="text-sm text-[#373642] mb-4"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  WebkitLineClamp: 3,
                }}
              >
                In today's digital marketing landscape, understanding user behavior is critical for success. However, with increasing privacy
                regulations and user awareness, traditional cookie-based tracking methods are losing effectiveness. This blog delves into how
                Google Analytics 4 (GA4) tackles this challenge by combining Behavioral Modeling and Conversion Modeling with Google Consent Mode
                v2 (CMv2). This powerful trio empowers you to gain valuable insights into user journeys and optimize conversions even when users
                opt-out of tracking.
              </p>
              <div className="flex justify-between items-center text-sm text-[#0066cc]">
                <span className="text-[#6B7280]">06th Aug 2024</span>
                <button className="text-[#08A4F7] text-base font-medium hover:underline">Read Full</button>
              </div>
            </div>
          </a>
          <a href='/blogs/top-5-key-takeaways-to-improve-conversion-rate-optimization-cro' className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative">
            <div className='flex flex-col justify-evenly h-full'>

              <div className="absolute w-[100px] text-center top-4 2xl:top-6 right-4 2xl:right-6 bg-[#EC4EDC99] text-white font-semibold px-3 py-1 rounded-tr-[20px] 2xl:rounded-tr-3xl rounded-bl-md text-sm">CRO</div>
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Website_blog_42_CRO_TIPS_V2.png"
                alt="CRO_TIPS_V2"
                className="rounded-md mb-4 w-full"
              />
              <h3
                className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Top 5 Key takeaways to improve Conversion Rate Optimization (CRO)
              </h3>
              <p
                className="text-sm text-[#373642] mb-4"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  WebkitLineClamp: 3,
                }}
              >
                CRO focuses on increasing the percentage of visitors who completes a desired action, such as making a purchase,
                filling out a form or performing any actions that later lead to conversion. This blog delves into Top 5 key takeaways
                to achieve actionable insights, drive conversions better for Mobile site.
              </p>
              <div className="flex justify-between items-center text-sm text-[#0066cc]">
                <span className="text-[#6B7280]">9th Aug 2024</span>
                <button className="text-[#08A4F7] text-base font-medium hover:underline">Read Full</button>
              </div>
            </div>
          </a>
          <a href='/blogs/mastering-looker-studio-formulas-date-string-functions-video-tutorials' className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative">
            <div className='flex flex-col justify-evenly h-full'>

              <div className="absolute w-[100px] text-center top-4 2xl:top-6 right-4 2xl:right-6 bg-[#EC954E99] text-white font-semibold px-3 py-1 rounded-tr-[20px] 2xl:rounded-tr-3xl rounded-bl-md text-sm">Analytics</div>
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Blog_4.png"
                alt="Google_Consent"
                className="rounded-md mb-4 w-full"
              />
              <h3
                className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Mastering Looker Studio Formulas: Key Date and String Functions with Video Tutorials
              </h3>
              <p
                className="text-sm text-[#373642] mb-4"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  WebkitLineClamp: 3,
                }}
              >
                In this blog, we dive into three powerful formulas in Looker Studio that can help
                streamline your data analysis and reporting: converting dates to quarters, calculating the number
                of days between dates and formatting dates, and concatenating values from multiple rows. These techniques
                are essential for anyone looking to get more out of their Looker Studio dashboards. For each topic, we've
                included a video tutorial for hands-on learning.
              </p>
              <div className="flex justify-between items-center text-sm text-[#0066cc]">
                <span className="text-[#6B7280]">20th Jan 2025</span>
                <button className="text-[#08A4F7] text-base font-medium hover:underline">Read Full</button>
              </div>
            </div>
          </a>
        </Slider>

      </div>
      <div className='md:hidden mx-auto flex justify-center mt-7'>
        <a href='/blogs' className=''><button className="mainbutn max-md:mt-1">Read More Blogs</button></a>
      </div>

    </section>
  );
};

export default HomeBlogs;










// import React from 'react'

// const HomeBlogs = () => {
//   return (
//     <section className='font-lato py-16 px-4 md:px-16'>
//       <div className='flex justify-between py-10 items-center overflow-hidden relative'>
//         <div className='flex flex-col w-[50%] 2xl:w-[45%] gap-6 justify-start items-start'>
//           <div className='text-[#100F1B] text-3xl font-bold text-left'>Read Our Insightful Blogs</div>
//           <div className='text-[#373642] text-lg font-normal'>Explore our diverse blogs collection for insightful perspectives and expert knowledge on a topic that you can consultated with us.</div>
//         </div>
//         <div className='absolute 2xl:top-[-50px] left-[37%] z-10 2xl:left-[35%] w-full'>
//           <img src='/arrow.png' alt='arrow' className='w-[40%] 2xl:w-[45%]' />
//         </div>
//         <div>
//           <button className='mainbutn'>Read More Blogs</button>
//         </div>
//       </div>
//       <div>
//         <div>
//           <div><img src='/Blog_thumbnail_image_29_Removal of Flight ASAP.png' alt='Removal of Flight ASAP' /></div>
//           <div>
//             <div>Google’s DV360: Removal of Flight ASAP Pacing at the Insertion Order Level</div>
//             <div>In November 2024, Google will remove the Flight ASAP pacing option at the insertion order level from its
//               Display & Video 360 (DV360) platform, a change that significantly impacts how advertisers manage budgets and pacing.
//               This adjustment reflects Google’s ongoing efforts to streamline budget management and ensure more controlled spend throughout
//               campaign lifespans.</div>
//             <div>
//               <div>December 18th, 2023</div>
//               <div>Read Full</div>
//             </div>
//           </div>
//         </div>
//         <div></div>
//         <div></div>
//       </div>
//     </section>
//   )
// }

// export default HomeBlogs

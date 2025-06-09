import React from 'react'

const Landing = () => {

  const scrollToGetInTouch = () => {
    const element = document.getElementById('get-in-touch');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className='px-3 pb-8'>
      <div className='flex flex-col pt-10 xl:max-w-[80%] mx-auto md:pt-12 gap-4 md:gap-6 2xl:gap-10 justify-center text-center items-center text-[#0E1947]'>
        <div className='text-base md:text-xl 2xl:text-3xl font-semibold leading-7 md:leading-7'>Redefining Possibilities, Empowering Brands</div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl 2xl:text-[45px] font-extrabold leading-7 md:leading-10 2xl:leading-[1]'>Your GMP Partner for Data Driven Media, Analytics & <br></br>Cloud Solutions.</h1>
        <h2 className='text-[15px] md:text-xl 2xl:text-2xl font-light leading-7 md:leading-7'>Data Analytics and Marketing Solutions helps businesses in gaining digital maturity through optimized utilization of data</h2>
        <div className='flex  justify-center items-center max-md:mt-2 gap-3 md:gap-12'>
          <button className='contact-us-btn mainbutn' onClick={scrollToGetInTouch}>Get Free Audit</button>
          <button className='contact-us-btn mainbutn-opposite max-sm:px-3.5' onClick={scrollToGetInTouch}>Talk to Sales</button>
        </div>
      </div>
    </section>
  )
}

export default Landing


// import React from 'react';
// import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

// const Testimonials = () => {


//     const NextArrow = (props) => {
//         const { onClick } = props;
//         return (
//             <div
//                 className="absolute top-1/2 right-[-12px] md:right-[-20px] lg:right-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
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
//                 className="absolute top-1/2 left-[-12px] md:left-[-20px] lg:left-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
//                 onClick={onClick}
//             >
//                 <FaArrowLeft size={20} />
//             </div>
//         );
//     };

//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 1500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         initialSlide: 0,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         autoplay: true,
//         autoplaySpeed: 5000,
//         responsive: [
//             {
//                 breakpoint: 1150,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     speed: 1000,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//             {
//                 breakpoint: 988,
//                 settings: {
//                     dots: false,
//                     speed: 1000,
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 2,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     dots: false,
//                     speed: 1000,
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 2,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     dots: false,
//                     speed: 1000,
//                     // nextArrow: false,
//                     // prevArrow: false,
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <section className='font-lato py-12 px-4 md:px-10 xl:px-16'>
//             <div className='text-[#100F1B] text-2xl md:text-3xl font-bold text-center'>
//                 What Our Client Have To Say
//             </div>
//             <div className='gap-8 py-12'>
//                 <div className='relative carousel-custom'>
//                     <Slider {...settings}>
//                         <div className='w-[450px] border border-[#E5E5E5] flex flex-col justify-around items-center gap-5 text-center py-6 px-6 rounded-3xl'>
//                             <img src='/bobby.png' alt='bobby' />
//                             <div className='text-[#808080] text-sm font-normal'>“AnalyticsLiv team was an excellent asset to our businesses' switch from Universal Analytics to GA4.
//                                 They had excellent communication throughout the project, giving me feedback, updates and ideas as the project went on.
//                                 I would be happy to recommend the AnalyticsLiv team for analytics and tag manager work, and look forward to working with them
//                                 in the future. Thank you!”
//                             </div>
//                             <div className='flex flex-col justify-center items-center gap-1'>
//                                 <div className='text-[#1E1E1E] text-base font-bold'>Bobby Bruno</div>
//                                 <div className='text-[#808080] text-sm font-normal'>CMO</div>
//                                 <div className='text-[#1E1E1E] text-base font-medium'>Wholesale Socks Deals</div>
//                             </div>
//                         </div>

//                         <div className='w-[450px] border border-[#E5E5E5] flex flex-col justify-around items-center gap-5 text-center py-6 px-6 rounded-3xl'>
//                             <img src='/charles.png' alt='charles' />
//                             <div className='text-[#808080] text-sm font-normal'>"The AnalyticsLiv team estimated the job length accurately and then carried out the work exactly as briefed,
//                                 to time and budget. We had one brief hiccup in the conversion tracking code but that was swiftly fixed once identified.
//                                 Would definitely consider using it again and for more advanced reporting functionality in future"
//                             </div>
//                             <div className='flex flex-col justify-center items-center gap-1'>
//                                 <div className='text-[#1E1E1E] text-base font-bold'>Charles Lundy</div>
//                                 <div className='text-[#808080] text-sm font-normal'>Co-Founder</div>
//                                 <div className='text-[#1E1E1E] text-base font-medium'>Mex Insurance</div>
//                             </div>
//                         </div>

//                         <div className='w-[450px] border border-[#E5E5E5] flex flex-col justify-around items-center gap-5 text-center py-6 px-6 rounded-3xl'>
//                             <img src='/ebenezer.png' alt='ebenezer' />
//                             <div className='text-[#808080] text-sm font-normal'>"AnalyticsLiv has been FUTEK web analytics partner for almost 3 years now. They supported us with GTM implementation,
//                                 GA to GA4 migration, Looker studio dashboard creations and Google cloud storage implementation. They respond to our request
//                                 in a timely manner and make their best efforts to resolve the web analytics issues. We are happy with the support provided by
//                                 AnalyticsLiv"
//                             </div>
//                             <div className='flex flex-col justify-center items-center gap-1'>
//                                 <div className='text-[#1E1E1E] text-base font-bold'>Ebenezer Ferreira</div>
//                                 <div className='text-[#808080] text-sm font-normal'>Senior Product Marketing Manager</div>
//                                 <div className='text-[#1E1E1E] text-base font-medium'>FUTEK</div>
//                             </div>
//                         </div>
//                     </Slider>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Testimonials

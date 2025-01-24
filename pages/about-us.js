import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ScrollProgress from "../components/ScrollProgress";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Scroll from "react-scroll";
import { scroller } from "react-scroll"; // Import scroller for smooth scrolling
import OgTags from '../components/OgTags';

const aboutus = () => {
  useEffect(() => {
    AOS.init();

    // Check the query parameter for id and scroll to the corresponding section
    const urlParams = new URLSearchParams(window.location.search);
    const sectionId = urlParams.get("id"); // Get 'id' from the URL

    if (sectionId) {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80, // Adjust for any fixed headers
      });
    }
  }, []);

  // const { Element: ScrollElement } = Scroll;
  const [hoveredYear, setHoveredYear] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3; // Number of slides visible at once
  const totalSlides = 5; // Total number of slides (same as timelineData length)

  const timelineData = [
    {
      year: "2021",
      title: "Google Partner",
      subtitle: 'Certified Partners for DV360',
      description: "Achieved the Google Partner Status with listing in Partner Directory",
      color: '#EF4931',
      logo: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/google%20partner%201.png",
    },
    {
      year: "2022",
      title: "Google Marketing Platform Partner",
      subtitle: 'Certified Partners for DV360',
      description: "Certified Partners for DV360",
      color: '#1E8E3E',
      logo: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/dv360_log-removebg-preview%201.png",
    },
    {
      year: "2023",
      title: "Microsoft Ads Partner",
      subtitle: 'Certified Partners for DV360',
      description: "Microsoft Ads offers Partner Status",
      color: '#174B24',
      logo: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/image%2015.png",
    },
    {
      year: "2024",
      title: "Google Marketing Platform Partner",
      subtitle: 'Certified Partners for DV360',
      description: "Certified Partners for Google Analytics Platform",
      color: '#F76B01',
      logo: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/GA4_Logo%201.png",
    },
    {
      year: "2024",
      title: "Google Marketing Platform Partner",
      subtitle: 'Certified Partners for DV360',
      description: "Certified Partners for Google Tag Manager",
      color: '#4086EC',
      logo: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/GTM_FULL_LOGO%201.png",
    },
  ];

  const NextArrow = ({ onClick, isDisabled }) => (
    <div
      className={`absolute top-6 lg:top-1/4 right-[1px] lg:right-[-50px] xl:right-[-100px] transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={!isDisabled ? onClick : null}
    >
      <FaArrowRight size={20} />
    </div>
  );

  const PrevArrow = ({ onClick, isDisabled }) => (
    <div
      className={`absolute top-6 lg:top-1/4 left-[1px] lg:left-[-50px] xl:left-[-100px] transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={!isDisabled ? onClick : null}
    >
      <FaArrowLeft size={20} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentIndex(current), // Update current slide index
    nextArrow: <NextArrow isDisabled={currentIndex + slidesToShow >= totalSlides} />,
    prevArrow: <PrevArrow isDisabled={currentIndex === 0} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          afterChange: (current) => setCurrentIndex(current), // Update current slide index
          nextArrow: <NextArrow isDisabled={currentIndex + 2 >= totalSlides} />,
          prevArrow: <PrevArrow isDisabled={currentIndex === 0} />,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          afterChange: (current) => setCurrentIndex(current), // Update current slide index
          nextArrow: <NextArrow isDisabled={currentIndex + 1 >= totalSlides} />,
          prevArrow: <PrevArrow isDisabled={currentIndex === 0} />,
        },
      },
    ]
  };

  return (
    <>
      <OgTags
        url="https://analyticsliv.com/about-us"
        title="AnalyticsLiv - About us"
        description="Google Marketing Platform Partner - Our Journey"
        twitterTitle="AnalyticsLiv - About us"
        twitterDescription="Google Marketing Platform Partner - Our Journey"
      />

      <section className='font-sans pb-3'>
        <div className='flex px-4 md:px-7 lg:px-14 max-sm:flex-col max-sm:justify-center sm:justify-around md:justify-between 2xl:justify-around items-center py-5 xl:pt-8 2xl:pt-10'>
          <div className='flex flex-col max-md:items-center gap-3 md:gap-5 2xl:gap-7 sm:w-[50%] max-sm:text-center'>
            <div className='text-lg xl:text-xl 2xl:text-2xl font-extrabold'>Welcome to AnalyticsLiv</div>
            <h1 className='text-[#0E1947] text-3xl xl:text-4xl 2xl:text-5xl font-extrabold'>Turning Data Into Growth</h1>
            <div className='text-xs xl:text-sm font-normal max-md:pt-2'>At AnalyticsLiv, we’re dedicated to revolutionizing how businesses leverage data. By integrating advanced analytics,
              cutting-edge digital marketing strategies, and innovative technology, we help businesses unlock their full potential.</div>
            <div className='text-xs xl:text-sm font-normal'>Our journey began with a simple belief: data has the power to transform businesses. Today, we are proud to be at the forefront of
              this transformation, partnering with organizations to create measurable, impactful results.</div>
            <div className='flex gap-3 lg:gap-10 max-md:mt-3'>
              <a href='/contact'><button className='mainbutn'>Schedule a Call</button></a>
              <a href='/contact'><button className='mainbutn-opposite'>Contact Us</button></a>
            </div>
          </div>
          <div className='max-sm:w-full max-xl:w-[40%] max-sm:flex max-sm:justify-center max-md:mt-7 max-sm:mx-auto'>
            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/analyticsliv_team.png' alt='AnalyticsLiv Team' />
          </div>
        </div>
        <Scroll.Element id="vision" name="vision"></Scroll.Element>
        <div className='pt-7 lg:pt-10 xl:pt-8 2xl:pt-10 pb-8 md:pb-14 px-4 md:px-7 lg:px-14 2xl:px-20 2xl:pl-28 flex max-lg:flex-col justify-between items-center gap-[5%] overflow-hidden'>
          <div className='flex flex-col lg:min-w-[30%] lg:max-w-[35%] gap-6 max-lg:text-center'>
            <div className='flex justify-between items-center max-lg:justify-center'>
              <div className='flex flex-col gap-3'>
                <div className='text-[#F17216] text-xs xl:text-sm font-normal'>WHO WE ARE</div>
                <div className='text-[#282C4B] text-3xl xl:text-4xl font-bold'>Our Story</div>
              </div>
              <div className='max-lg:hidden'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Our%20Story.png' alt='our story' />
              </div>
            </div>
            <div className='text-[#747582] text-xs 2xl:text-sm font-normal'>It all started with countless cups of cutting chai (tea), brewed during the after-hours of a corporate professional’s life.
              Three driven individuals, bound by the constraints of rigid internal processes, shared a common vision: to empower customers by creating data-centric,
              tangible value through a flexible and fluid approach.</div>
            <div className='text-[#747582] text-xs 2xl:text-sm font-normal'>This vision gave birth to Analytics Liv Digital, founded on the belief that an agency’s structured protocols should never act as a bottleneck to a
              customer’s growth and progress. Instead, we aim to break these barriers and provide seamless, impactful solutions.</div>
          </div>
          <div className='flex max-sm:flex-col justify-around max-lg:pt-10 2xl:justify-between items-start gap-4 md:gap-5 lg:gap-7 lg:w-[70%]'>
            <div className='shadow-customBoth h-[270px] sm:h-[295px] xl:h-[310px] 2xl:h-[340px] px-4 sm:px-2 md:px-3 lg:px-4 xl:px-6 py-4 xl:py-5 flex flex-col items-start justify-start w-[250px] sm:w-[185px] md:w-[215px] lg:w-[250px] 2xl:w-[275px]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Philosophy.png' alt='Philosophy' />
              <div className='text-[#14183E] text-base sm:text-sm md:text-base xl:text-lg 2xl:text-xl font-medium pt-2 xl:pt-3'>Our<br /> Philosophy</div>
              <div className='text-[#747582] text-xs sm:text-[10px] md:text-[11px] xl:text-xs 2xl:text-sm font-normal pt-3 xl:pt-5'>At Analytics Liv Digital, we thrive on collaboration, innovation, and customer-centricity. Our team comprises highly motivated and skilled
                specialists with diverse expertise, ready to tackle any challenge our clients may face.</div>
            </div>
            <div className='shadow-customBoth h-[270px] sm:h-[295px] xl:h-[310px] 2xl:h-[340px] px-4 sm:px-2 md:px-3 lg:px-4 xl:px-6 py-4 xl:py-5 flex flex-col items-start justify-start w-[250px] sm:w-[185px] md:w-[215px] lg:w-[250px] 2xl:w-[275px]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/relationship.png' alt='Relationship' />
              <div className='text-[#14183E] text-base sm:text-sm md:text-base xl:text-lg 2xl:text-xl font-medium sm:pt-2 xl:pt-3 max-sm:pt-4'>Building Lasting Relationships</div>
              <div className='text-[#747582] text-xs sm:text-[10px] md:text-[11px] xl:text-xs 2xl:text-sm font-normal pt-3 xl:pt-5'>We pride ourselves on fostering enduring partnerships built on trust, mutual understanding,
                and consistent results. By delivering unique and creative solutions alongside exceptional support services.</div>
            </div>
            <div className='shadow-customBoth h-[270px] sm:h-[295px] xl:h-[310px] 2xl:h-[340px] px-4 sm:px-2 md:px-3 lg:px-4 xl:px-6 py-4 xl:py-5 flex flex-col items-start justify-start w-[250px] sm:w-[185px] md:w-[215px] lg:w-[250px] 2xl:w-[275px]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Excellence.png' alt='Excellence' />
              <div className='text-[#14183E] text-base sm:text-sm md:text-base xl:text-lg 2xl:text-xl font-medium sm:pt-2 xl:pt-3 max-sm:pt-4'>Commitment to Excellence</div>
              <div className='text-[#747582] text-xs sm:text-[10px] md:text-[11px] xl:text-xs 2xl:text-sm font-normal sm:pt-3 xl:pt-5 max-sm:pt-5'>Driven by passion and purpose, we are devoted to redefining possibilities and enabling growth for businesses
                in an ever-changing digital landscape.</div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className='bg-[#F3FBFF]'>
          <div className="w-full max-w-[1100px] mx-auto px-4 md:px-7 lg:px-14 pt-10 pb-0">
            <h2 className="text-center text-3xl font-bold mb-8">Timeline</h2>
            <div className="relative h-[]">

              <div className="absolute top-[57px] transform -translate-y-1/2 w-full border-t border-black z-0"></div>

              <Slider {...settings} className="relative z-30">
                {timelineData?.map((item, index) => (
                  <div
                    key={item}
                    className="relative flex flex-col items-center text-center px-4 h-[280px]"
                    onMouseEnter={() => setHoveredYear(index)}
                    onMouseLeave={() => setHoveredYear(null)}
                  >
                    <div className='flex flex-col justify-center items-center'>
                      <div className="text-lg font-semibold mb-2">{item.year}</div>

                      <div className={`w-3 h-3 rounded-full mt-1 mb-2`}
                        style={{
                          backgroundColor: hoveredYear === index ? item.color : 'black',
                        }}></div>
                    </div>

                    <div className={`${hoveredYear === index ? 'shadow-teamShadow' : 'shadow-none'} px-2 lg:px-8 py-4 flex flex-col items-center justify-around h-40 bg-white hover:shadow-customShadow`}>
                      <div className="text-base font-semibold text-[#000000]">{item.title}</div>
                      <div className="text-sm font-normal text-[#000000] pt-2">{item.description}</div>
                    </div>

                    {hoveredYear === index && (
                      <div className='absolute top-[60px] h-52 shadow-cardShadow left-1/2 transform -translate-x-1/2 bg-white rounded-lg w-56 z-30'>
                        <div
                          className="absolute left-[48%] -top-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent"
                          style={{
                            borderBottomColor: item.color,
                          }}
                        ></div>
                        <div className='h-2'
                          style={{ backgroundColor: item?.color }}></div>
                        <div className="p-4 flex flex-col h-full justify-around items-center px-3 pt-3 pb-5">
                          <img
                            src={item?.logo}
                            alt={item.title}
                            className="mx-auto mb-3"
                          />
                          <h3 className="text-base font-semibol font-bold mb-2">{item.title}</h3>
                          <p className="text-sm font-normal text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className='px-4 md:px-7 lg:px-14 2xl:px-20 py-10'>
          <div className='text-center text-2xl sm:text-3xl font-bold'>
            A Perfect Blend of Data, Creativity, and Strategy
          </div>
          <div className='text-center max-sm:text-xs text-sm font-normal pt-8'>
            At the core of our work lies a steadfast commitment to driving tangible, measurable results for your business. Our proven methodology integrates a deep understanding of your unique needs with cutting-edge tools and innovative strategies to help you achieve your goals. Here's how we do it:
          </div>
          <div className='relative pt-8'>
            <div className='relative'>
              <img
                src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Road_Image_Full%20(1).png'
                alt='path to success'
                className='mx-auto max-lg:w-[40%] max-xl:w-[35%]'
              />
              <div className='group text-[9px] bg-[#F3FBFF] py-1 lg:py-2 px-1 md:px-2 lg:px-4 transition-all duration-75 hover:shadow-hoverCard  sm:text-xs md:text-sm  xl:text-xl font-bold text-right absolute top-[15%] left-[1%] sm:left-[12%] lg:left-[18%] xl:left-[17%] 2xl:left-[22%]'>
                Understanding Your<br />Business
                <div className='absolute hidden group-hover:block text-center top-[10px] md:top-[-50px] w-40 xl:w-40 2xl:w-48 max-sm:left-[85%] lg:left-[-55%] xl:left-[-45%] transform -translate-x-1/2 bg-white shadow-hoverCard rounded-lg z-30'>
                  <div className="p-2 2xl:p-4 lg:py-4 lg:px-5 2xl:pr-4 2xl:px-4">
                    {/* <h3 className="text-sm 2xl:text-2xl font-bold mb-2">1.</h3> */}
                    <p className="text-[10px] leading-[14px] xl:text-[12px] 2xl:text-[13px] font-normal text-gray-600 text-center">We dive deep into your vision, goals, and challenges through detailed discussions and analysis. This ensures our solutions align perfectly with your objectives.
                    </p>
                  </div>
                  <div className='absolute right-0 top-0 h-full w-2 bg-[#EF4931]'></div>
                  <div className="absolute right-[-3px] top-1/2 w-0 h-0 border-t-4 border-l-4 border-b-4 border-transparent border-l-[#EF4931]"></div>
                </div>
              </div>

              <div className='group text-[9px] bg-[#F3FBFF] py-1 lg:py-2 px-1 md:px-2 lg:px-4 transition-all duration-75 hover:shadow-hoverCard sm:text-xs md:text-sm xl:text-xl font-bold text-right absolute bottom-[5%] sm:bottom-[30%] sm:left-[6%] lg:left-[13%] xl:left-[10%] 2xl:left-[16%]'>
                Crafting & Executing <br />Strategies

                <div className='absolute hidden group-hover:block text-center max-md:top-[-50px] md:top-[-30px] w-40 xl:w-40 2xl:w-48 max-sm:left-[90%] lg:left-[-48%] xl:left-[-40%] 2xl:left-[-50%] transform -translate-x-1/2 bg-white shadow-hoverCard rounded-lg z-30'>
                  <div className="p-2 2xl:p-4 lg:py-4 lg:px-5 2xl:pr-4 2xl:px-4">
                    {/* <h3 className="text-sm 2xl:text-2xl font-bold mb-2">3.</h3> */}
                    <p className="text-[10px] leading-[14px] xl:text-[12px] 2xl:text-[12px] font-normal text-gray-600 text-center">We create tailored marketing campaigns—from content to advertising—designed to maximize results and deliver measurable success.
                    </p>
                  </div>
                  <div className='absolute right-0 top-0 h-full w-2 bg-[#1E8E3E]'></div>
                  <div className="absolute right-[-3px] top-1/2 w-0 h-0 border-t-4 border-l-4 border-b-4 border-transparent border-l-[#1E8E3E]"></div>
                </div>

              </div>

              <div className='group text-[9px] bg-[#F3FBFF] py-1 lg:py-2 px-1 md:px-2 lg:px-4 transition-all duration-75 hover:shadow-hoverCard sm:text-xs md:text-sm xl:text-xl font-bold text-left absolute top-[8%] right-[1%] sm:right-[13%] lg:right-[20%] xl:right-[15%] 2xl:right-[22%]'>
                Harnessing the Power<br />of Data

                <div className='absolute hidden group-hover:block text-center top-[-30px] sm:top-[-30px] lg:top-[-50px] w-40 xl:w-40 2xl:w-48 right-[-50%] sm:right-[-80%] lg:right-[-140%] xl:right-[-105%] 2xl:right-[-125%] transform -translate-x-1/2 bg-white shadow-hoverCard rounded-lg z-30'>
                  <div className="p-2 2xl:p-4 lg:py-4 lg:px-5 2xl:pr-4 2xl:px-4">
                    {/* <h3 className="text-sm 2xl:text-2xl font-bold mb-2">2.</h3> */}
                    <p className="text-[10px] leading-[14px] xl:text-[12px] 2xl:text-[12px] font-normal text-gray-600 text-center">Using advanced analytics, we uncover actionable insights about your audience, industry trends, and market opportunities. Data drives every decision for precision and impact.</p>
                  </div>
                  <div className='absolute left-0 top-0 h-full w-2 bg-[#174B24]'></div>
                  <div className="absolute left-[-3px] top-1/2 w-0 h-0 border-t-4 border-r-4 border-b-4 border-transparent border-r-[#174B24]"></div>
                </div>

              </div>

              <div className='group text-[9px] bg-[#F3FBFF] py-1 lg:py-2 px-1 md:px-2 lg:px-4 transition-all duration-75 hover:shadow-hoverCard sm:text-xs md:text-sm xl:text-xl font-bold text-left absolute bottom-[28%] lg:bottom-[34%] xl:bottom-[40%] sm:bottom-[40%] right-[-3%] sm:right-[10%] lg:right-[16%] xl:right-[13%] 2xl:right-[18%]'>
                Commitment to Continuous<br />Improvement

                <div className='absolute hidden group-hover:block text-center top-[-80px] sm:top-[-10px] lg:top-[-30px] w-40 xl:w-40 2xl:w-48 right-[-50%] lg:right-[-115%] xl:right-[-85%] 2xl:right-[-100%] transform -translate-x-1/2 bg-white shadow-hoverCard rounded-lg z-30'>
                  <div className="p-2 2xl:p-4 lg:py-4 lg:px-5 2xl:pr-4 2xl:px-4">
                    {/* <h3 className="text-sm 2xl:text-2xl font-bold mb-2">4.</h3> */}
                    <p className="text-[10px] leading-[14px] xl:text-[12px] 2xl:text-[12px] font-normal text-gray-600 text-center">Success is an ongoing journey. We monitor, analyze, and refine strategies to ensure long-term growth, staying agile in a dynamic marketplace.
                    </p>
                  </div>
                  <div className='absolute left-0 top-0 h-full w-2 bg-[#4086EC]'></div>
                  <div className="absolute left-[-4px] top-1/2 w-0 h-0 border-t-4 border-r-4 border-b-4 border-transparent border-r-[#4086EC]"></div>
                </div>

              </div>
            </div>


          </div>
        </div>

        <div className='pt-2 md:pt-8 px-4 md:px-7 lg:px-14'>
          <div className='text-2xl sm:text-3xl font-bold text-center pb-7'>The Visionaries Behind AnalyticsLiv</div>
          <div className='flex justify-center max-sm:flex-col max-sm:justify-center max-sm:items-center gap-7 sm:gap-14 text-center'>
            <div className='flex flex-col justify-center items-center shadow-teamShadow w-[250px] p-3 border border-[#D9D9D9]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/anuj.png' alt='anuj gang' />
              <div className='text-2xl 2xl:text-2xl font-bold pt-5'>Anuj Gang</div>
              <div className='text-base 2xl:text-base font-normal pt-2'>CEO &<br className='lg:hidden' /> Co-Founder</div>
            </div>
            <div className='flex flex-col justify-center items-center shadow-teamShadow w-[250px] p-3 border border-[#D9D9D9]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mask%20group%20(15).png' alt='Nitya Prakash' />
              <div className='text-2xl 2xl:text-2xl font-bold pt-5'>Nitya Prakash</div>
              <div className='text-base 2xl:text-base font-normal pt-2'>BU Head- Business Support</div>
            </div>
            <div className='flex flex-col justify-center items-center shadow-teamShadow w-[250px] p-3 border border-[#D9D9D9]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mask%20group%20(6).png' alt='Rajvi Shah' />
              <div className='text-2xl 2xl:text-2xl font-bold pt-5'>Rajvi Shah</div>
              <div className='text-base 2xl:text-base font-normal pt-2'>Co-Founder & VP, Analytics</div>
            </div>
          </div>
        </div>

        <div className='relative pb-10 pt-12 xl:pt-16 2xl:pt-20 z-30'>
          <div className='text-[22px] sm:text-3xl font-bold text-center pb-6'>Meet the brilliant minds behind our growth & innovation.</div>
          <div className='grid grid-cols-4 px-2 md:px-7 xl:px-14  max-lg:grid-cols-2 max-sm:gap-3 justify-items-center text-center'>
            <div className='flex flex-col justify-start items-center shadow-teamShadow w-[155px] sm:w-[250px] lg:w-[200px] xl:w-[250px] my-2 sm:my-6 max-sm:px-1.5 max-sm:py-3 sm:p-3 border border-[#D9D9D9]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mask%20group%20(7).png' className='max-sm:w-24 lg:w-36 xl:w-48' alt='Anshul Dhurandhar' />
              <div className='text-base sm:text-2xl lg:text-lg 2xl:text-2xl font-bold pt-5'>Anshul Dhurandhar</div>
              <div className='text-xs sm:text-base lg:text-sm 2xl:text-base font-normal pt-2'>Lead- Analytics & technology</div>
            </div>
            <div className='flex flex-col justify-start items-center shadow-teamShadow w-[155px] sm:w-[250px] lg:w-[200px] xl:w-[250px] my-2 sm:my-6 max-sm:px-1.5 max-sm:py-3 sm:p-3 border border-[#D9D9D9]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mask%20group%20(8).png' className='max-sm:w-24 lg:w-36 xl:w-48' alt='Ansuya Kachroo' />
              <div className='text-base sm:text-2xl lg:text-lg 2xl:text-2xl font-bold pt-5'>Ansuya Kachroo</div>
              <div className='text-xs sm:text-base lg:text-sm 2xl:text-base font-normal pt-2'>Head- Analytics & Project Management</div>
            </div>
            <div className='flex flex-col justify-start items-center shadow-teamShadow w-[155px] sm:w-[250px] lg:w-[200px] xl:w-[250px] my-2 sm:my-6 max-sm:px-1.5 max-sm:py-3 sm:p-3 border border-[#D9D9D9]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mask%20group%20(9).png' className='max-sm:w-24 lg:w-36 xl:w-48' alt='Deepika Pandey' />
              <div className='text-base sm:text-2xl lg:text-lg 2xl:text-2xl font-bold pt-5'>Deepika Pandey</div>
              <div className='text-xs sm:text-base lg:text-sm 2xl:text-base font-normal pt-2'>Head- Data Science</div>
            </div>
            <div className='flex flex-col justify-start items-center shadow-teamShadow w-[155px] sm:w-[250px] lg:w-[200px] xl:w-[250px] my-2 sm:my-6 max-sm:px-1.5 max-sm:py-3 sm:p-3 border border-[#D9D9D9]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mask%20group%20(10).png' className='max-sm:w-24 lg:w-36 xl:w-48' alt='Karan Santani' />
              <div className='text-base sm:text-2xl lg:text-lg 2xl:text-2xl font-bold pt-5'>Karan Santani</div>
              <div className='text-xs sm:text-base lg:text-sm 2xl:text-base font-normal pt-2'>Growth Manager<br></br>(Sales & Marketing)</div>
            </div>
          </div>
          <div className='absolute w-full px-2 md:px-7 xl:px-14  text-center'>
            <div className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:gap-3 justify-items-center '>
              <div className='flex flex-col justify-start items-center shadow-teamShadow w-[155px] sm:w-[250px] lg:w-[200px] xl:w-[250px] my-2 sm:my-6 max-sm:px-1.5 max-sm:py-3 sm:p-3 border border-[#D9D9D9] bg-white z-30'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mask%20group%20(11).png' className='max-sm:w-24 lg:w-36 xl:w-48' alt='Ashwani Singh' />
                <div className='text-base sm:text-2xl lg:text-lg 2xl:text-2xl font-bold pt-5'>Ashwani Singh</div>
                <div className='text-xs sm:text-base lg:text-sm 2xl:text-base font-normal pt-2'>Marketing Manager</div>
              </div>
              <div className='flex flex-col justify-start items-center shadow-teamShadow w-[155px] sm:w-[250px] lg:w-[200px] xl:w-[250px] my-2 sm:my-6 max-sm:px-1.5 max-sm:py-3 sm:p-3 border border-[#D9D9D9] bg-white z-30'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mask%20group%20(14).png' className='max-sm:w-24 lg:w-36 xl:w-48' alt='Aashana Pathak' />
                <div className='text-base sm:text-2xl lg:text-lg 2xl:text-2xl font-bold pt-5'>Aashana Pathak</div>
                <div className='text-xs sm:text-base lg:text-sm 2xl:text-base font-normal pt-2'>Manager<br></br>(Human Resource)</div>
              </div>
              <div className='flex flex-col justify-start items-center shadow-teamShadow w-[155px] sm:w-[250px] lg:w-[200px] xl:w-[250px] my-2 sm:my-6 max-sm:px-1.5 max-sm:py-3 sm:p-3 border border-[#D9D9D9] bg-white z-30'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mask%20group%20(12).png' className='max-sm:w-24 lg:w-36 xl:w-48' alt='Yash Ponda' />
                <div className='text-base sm:text-2xl lg:text-lg 2xl:text-2xl font-bold pt-5'>Yash Ponda</div>
                <div className='text-xs sm:text-base lg:text-sm 2xl:text-base font-normal pt-2'>Associate UX Designer</div>
              </div>
              <div className='flex flex-col justify-start items-center shadow-teamShadow w-[155px] sm:w-[250px] lg:w-[200px] xl:w-[250px] my-2 sm:my-6 max-sm:px-1.5 max-sm:py-3 sm:p-3 border border-[#D9D9D9] bg-white z-30'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mask%20group%20(13).png' className='max-sm:w-24 lg:w-36 xl:w-48' alt='Rajneesh Dhiman' />
                <div className='text-base sm:text-2xl lg:text-lg 2xl:text-2xl font-bold pt-5'>Rajneesh Dhiman</div>
                <div className='text-xs sm:text-base lg:text-sm 2xl:text-base font-normal pt-2'>Campaign Management Executive</div>
              </div>
            </div>
          </div>
          {/* </div>  left-[20%] sm:left-[25%] md:left-[30%] xl:left-[37%] */}
        </div>

        <div className='mt-[360px] sm:mt-[580px] md:mt-[550px] lg:mt-32'>
          <div className='text-lg md:text-5xl w-full font-bold text-center z-20 pt-[17%] xl:pt-[18%] absolute mx-auto text-white'>
            <div className='text-center mx-auto z-20'>
              Meet Our Team
            </div>
          </div>
          <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/analytics_team_img.png' alt='analytics_team_img'
            className='w-full top-[-220px] z-10' />
        </div>

        <Scroll.Element id="mission" name="mission"></Scroll.Element>

        <div className='bg-[#30486A] m-2 md:m-5 max-md:py-7 max-lg:py-7 flex max-md:flex-col justify- items-center'>
          <div className='md:w-[50%]'>
            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Group%202071.png' alt='' />
          </div>
          <div className='md:w-[50%] xl:w-[40%] md:pr-4 max-md:text-center flex flex-col justify-between max-md:items-center items-start gap-5 xl:gap-7'>
            <div className='text-[#FFF6EF] text-lg font-normal'>
              We are hiring!
            </div>
            <div className='text-3xl md:text-4xl font-bold text-white'>Be part of the team</div>
            <div className='text-[#FFF6EF] text-sm font-normal max-sm:px-2 max-md:px-10'>We are looking for passionate and enthusiastic people to join us in the challenging journey of creating space for new ways to help building businesses together.</div>
            <div className='flex flex-col gap-3 xl:gap-4'>
              <div className='flex items-center gap-4'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector%20(6).png' alt='vector' />
                <div className='text-[#CED1E5] text-base xl:text-xl font-normal'>Lead Generation Specialist</div>
              </div>
              <div className='flex items-center gap-4'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector%20(6).png' alt='vector' />
                <div className='text-[#CED1E5] text-base xl:text-xl font-normal'>Campaign Management Executive</div>
              </div>
              <div className='flex items-center gap-4'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector%20(6).png' alt='vector' />
                <div className='text-[#CED1E5] text-base xl:text-xl font-normal'>Business Development Associates</div>
              </div>
            </div>
            <a href='/careers'><button className='bg-custom-linear text-white p-3 sm:p-5 border-2 border-white rounded-full hover:text-slate-200'>Check Openings</button></a>
          </div>
        </div>
      </section>
    </>

  )
}

export default aboutus



// import React, { useEffect } from "react";
// import ScrollProgress from "../components/ScrollProgress";
// import Head from "next/head";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import * as Scroll from "react-scroll";
// import { scroller } from "react-scroll"; // Import scroller for smooth scrolling

// const aboutus = () => {
//   useEffect(() => {
//     AOS.init();

//     // Check the query parameter for id and scroll to the corresponding section
//     const urlParams = new URLSearchParams(window.location.search);
//     const sectionId = urlParams.get("id"); // Get 'id' from the URL

//     if (sectionId) {
//       scroller.scrollTo(sectionId, {
//         duration: 800,
//         delay: 0,
//         smooth: "easeInOutQuart",
//         offset: -80, // Adjust for any fixed headers
//       });
//     }
//   }, []);
//   // const { Element: ScrollElement } = Scroll;
//   return (
//     <>
//       <Head>
//         <title>AnalyticsLiv - About us</title>
//         <meta
//           name="description"
//           content="Google Marketing Platform Partner - Our Journey"
//         />
//         <link
//           rel="canonical"
//           href="https://analyticsliv.com/about-us"
//         ></link>
//       </Head>
//       <ScrollProgress />

//       <section className="overflow-x-hidden">
//         <div className="relative" data-aos="fade-down" data-aos-once="true">
//           <img
//             src="https://storage.googleapis.com/website-bucket-uploads/static/about us.png"
//             className="lg:w-full"
//           />
//           <div className="absolute w-24 h-24 lg:w-80 lg:h-80 bg-gradient-to-b from-blue-900 to-transparent blur rounded-full top-2 right-0"></div>
//           <div className="absolute w-16 h-16 lg:w-40 lg:h-40 bg-gradient-to-b from-amber-400 to-transparent blur rounded-full right-8 -bottom-2 lg:bottom-8 lg:right-40"></div>
//           <h1 className="uppercase tracking-wider absolute right-6 bottom-4 text-white lg:text-3xl">
//             AnalyticsLiv - Our Journey to Success
//           </h1>
//         </div>

//         <div
//           data-aos="zoom-in"
//           data-aos-once="true"
//           className="lg:flex justify-evenly p-8"
//         >
//           <div className="md:pt-16 lg:w-1/2 pb-6 lg:pb-0">
//             <img
//               src="https://storage.googleapis.com/website-bucket-uploads/static/story.png"
//               className="mx-auto w-3/4 lg:w-fit"
//             />
//           </div>
//           <div className="lg:w-1/2 lg:space-y-4 space-y-2 tracking-wider">
//             <h2 className="uppercase tracking-wider font-semibold text-slate-800 text:xl lg:text-3xl text-center lg:text-left">
//               Our Story
//             </h2>
//             <h2 className="text-cyan-500 underline underline-offset-4 lg:text-xl font-semibold text-center lg:text-left uppercase">
//               Genesis
//             </h2>
//             <p className="lg:pr-24 text-slate-600 text-justify">
//               The thought was brewed over multiple cups of cutting chai(tea) in
//               the after hours of a corporate professional’s life. Three
//               individuals restricted by internal processes and systems yearning
//               to create data-centric tangible value for their customers through
//               a fluidic approach. Analytics Liv Digital was conceived with the
//               motto that an agency’s rigid protocols shouldn’t act as a
//               bottleneck for customer’s progression.
//               <br />
//               Our team consists of highly motivated and skilled specialists who
//               know how to deal with any issue that you may come across. This
//               creates a basis for lasting relationships with our clients built
//               on trust and mutual understanding. We are devoted to creating
//               unique and innovative solutions along with the high- quality
//               supporting services.
//             </p>
//           </div>
//         </div>
//         <Scroll.Element id="vision" name="vision"></Scroll.Element>

//         <div className="w-1/3 h-0.5 bg-cyan-600 mx-auto rounded-xl"></div>

//         <Scroll.Element id="mission" name="mission"></Scroll.Element>
//         <div className="lg:flex px-2 lg:px-8 py-8 tracking-wider">
//           <div
//             data-aos="fade-right"
//             data-aos-once="true"
//             className="flex justify-evenly lg:w-1/2"
//           >
//             <div className="px-3 pt-12">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/mission.gif"
//                 className="inline "
//               />
//             </div>
//             <div className="w-2/3">
//               <h2 className="inline text-cyan-500 underline underline-offset-4 text-xl font-semibold ">
//                 Mission
//               </h2>
//               <p className="pt-6 text-slate-700">
//                 We learned over the years how different strategies of data come
//                 together to help businesses. We intend to spread our learnings
//                 while aligning the businesses with the ever changing technology
//                 around data, analytics and its usage to empower the business.
//               </p>
//             </div>
//           </div>

//           <div
//             data-aos="fade-left"
//             data-aos-once="true"
//             className="flex justify-evenly pt-8 lg:pt-0 lg:w-1/2"
//           >
//             <div className="px-3 pt-12">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/vision.gif"
//                 className="inline "
//               />
//             </div>
//             <div className="w-2/3">
//               <h2 className="inline text-cyan-500 underline underline-offset-4 text-xl font-semibold ">
//                 Vision
//               </h2>
//               <p className="pt-6 text-slate-700">
//                 Enable Business partners to harness the power of data in
//                 decision making and gaining digital transformation.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="w-1/3 h-0.5 bg-cyan-600 mx-auto rounded-xl"></div>

//         <div
//           data-aos="fade-up"
//           data-aos-once="true"
//           className="lg:flex lg:flex-row-reverse justify-evenly p-8"
//         >
//           <div className="pt-16 lg:w-1/2 pb-6 lg:pb-0">
//             <img
//               src="https://storage.googleapis.com/website-bucket-uploads/static/aboutus.png"
//               className="mx-auto w-3/4 lg:w-fit"
//             />
//           </div>
//           <div className="lg:w-1/2 tracking-wider lg:space-y-4 lg:pl-28 space-y-2">
//             <h2 className="uppercase font-semibold text-slate-800 text:xl lg:text-3xl text-center lg:text-left">
//               About us
//             </h2>
//             <p className="text-slate-600 text-justify">
//               Analytics Liv Digital (“AnalyticsLiv”) is a new age marketing firm
//               focused on delivering data driven customer experiences. Cutting
//               through the noise of digital data fatigue to take cognizance of a
//               brand’s first party data is our prime focus. A website, mobile
//               app, PPC campaigns or landing pages- whatever be your customer
//               touchpoint(s), we will make it count.
//               <br />
//               We believe that one size doesn’t fit all as each customer is on
//               it’s unique journey towards achieving enhanced digital marketing
//               maturity. Our customer centric ethos drives us to operate on an
//               outside-in approach via which the brand’s present digital journey
//               is internalized for crafting relevant customized offerings.
//               <br />
//               We create unique and innovative solutions for our customers along
//               with the high-quality support services and personal approach to
//               any case. Feel free to entrust your business to our experts, and
//               you’ll see the difference!
//             </p>
//           </div>
//         </div>

//         <div
//           data-aos="zoom-in"
//           data-aos-once="true"
//           className="relative py-8 space-y-6 bg-gray-100 "
//         >
//           <h2 className="relative uppercase tracking-wider text-center lg:text-3xl">
//             Platform Expertise
//           </h2>
//           <div className="flex lg:flex-row justify-evenly">
//             <div className=" space-y-2">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/Bigquery.png"
//                 className="mx-auto "
//               />
//               <div className="text-slate-700">Big Query</div>
//             </div>

//             <div className="hidden lg:block space-y-2">
//               <img
//                 src="/Looker_Studio_Blue_Logo.png"
//                 className="mx-auto h-20 w-14"
//               />
//               <h2 className="text-slate-700 text-center">
//                 Looker Studio
//               </h2>
//             </div>

//             <div className="space-y-2">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/dv360.png"
//                 className="mx-auto"
//               />
//               <h2 className="text-slate-700 text-center">
//                 Display and Video <br /> 360
//               </h2>
//             </div>

//             <div className="hidden lg:block space-y-2">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/googlecampaignmanager.png"
//                 className="mx-auto"
//               />
//               <h2 className="text-slate-700 text-center">
//                 Google Campaign <br />
//                 Manager
//               </h2>
//             </div>
//           </div>

//           <div className="flex flex-row justify-evenly">
//             <div className="space-y-2">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/GAnalytics.png"
//                 className="mx-auto"
//               />
//               <h2 className="text-slate-700 text-center">Google Analytics</h2>
//             </div>

//             <div className="hidden lg:block space-y-2">
//               <img
//                 src="/firebase_logo.png"
//                 className="mx-auto h-[70px] w-[56px]"
//               />
//               <h2 className="text-slate-700 text-center">
//                 Firebase
//                 <br />
//               </h2>
//             </div>

//             <div className="hidden lg:block space-y-2">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/Google ads.png"
//                 className="h-2/3 mx-auto"
//               />
//               <h2 className="text-slate-700 text-center">Google Ads</h2>
//             </div>

//             <div className="space-y-2">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/Google tag manager.png"
//                 className="mx-auto"
//               />
//               <h2 className="text-slate-700 text-center">
//                 Google Tag
//                 <br /> Manager
//               </h2>
//             </div>
//           </div>

//           <div className="flex flex-row text-center justify-around">
//             <div className="space-y-2 hidden lg:block">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/Linkedin.png"
//                 className="mx-auto"
//               />
//               <h2 className="text-slate-700 text-center">
//                 LinkedIn
//                 <br /> Marketing
//               </h2>
//             </div>
//             <div className="space-y-2 hidden lg:block">
//               <img
//                 src="/yt_logo.png"
//                 className="mx-auto h-26 w-24"
//               />
//               <h2 className="text-slate-700 text-center">
//                 Youtube Ads
//               </h2>
//             </div>

//             <div className="space-y-2">
//               <img
//                 src="/meta.png"
//                 className="mx-auto w-24 h-20"
//               />
//               <h2 className="text-slate-700 text-center">Meta Ads</h2>
//             </div>

//             <div className="space-y-2">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/search ads.png"
//                 className="mx-auto"
//               />
//               <h2 className="text-slate-700 text-center">Search Ads</h2>
//             </div>
//           </div>
//           <div className="lg:hidden flex flex-row text-center justify-around">
//             <div className="space-y-2">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/Linkedin.png"
//                 className="mx-auto"
//               />
//               <h2 className="text-slate-700 text-center">
//                 LinkedIn
//                 <br /> Marketing
//               </h2>
//             </div>
//             <div className="space-y-2">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/Google ads.png"
//                 className="mx-auto h-16"
//               />
//               <h2 className="text-slate-700 text-center">Google Ads</h2>
//             </div>
//           </div>
//           <div className="lg:hidden flex flex-row text-center justify-around">
//             <div className="space-y-2">
//               <img
//                 src="/Looker_Studio_Blue_Logo.png"
//                 className="mx-auto h-24 w-16"
//               />
//               <h2 className="text-slate-700 text-center">
//                 Looker Studio
//               </h2>
//             </div>
//             <div className="space-y-2">
//               <img
//                 src="https://storage.googleapis.com/website-bucket-uploads/static/googlecampaignmanager.png"
//                 className="mx-auto"
//               />
//               <h2 className="text-slate-700">
//                 Google Campaign <br />
//                 Manager
//               </h2>
//             </div>

//           </div>
//           <div className="lg:hidden flex flex-row text-center justify-around">
//             <div className="space-y-2 w-full lg:hidden">
//               <img
//                 src="/yt_logo.png"
//                 className="mx-auto h-26 w-24"
//               />
//               <h2 className="text-slate-700 text-center">
//                 Youtube Ads
//               </h2>
//             </div>
//             <div className="space-y-2 w-full lg:hidden">
//               <img
//                 src="/firebase_logo.png"
//                 className="mx-auto h-[70px] w-[56px]"
//               />
//               <h2 className="text-slate-700 text-center">
//                 Firebase
//                 <br />
//               </h2>
//             </div>
//           </div>
//         </div>

//         <div
//           data-aos="fade-down"
//           data-aos-once="true"
//           className="py-8 lg:px-16"
//         >
//           <h2 className="relative text-slate-800 uppercase tracking-wider text-center lg:text-left lg:inset-x-12 lg:text-3xl font-semibold">
//             Solutions Offered
//           </h2>
//           <div className="flex max-lg:flex-col max-lg:items-center sm:px-8 justify-center uppercase">
//             <ul className="space-y-2 px-8 pt-2 lg:pt-10 lg:w-1/2">
//               <li>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-8 mr-2 inline fill-amber-400"
//                   preserveAspectRatio="xMidYMid meet"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z" />
//                 </svg>
//                 Measurement Strategy
//               </li>
//               <li>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-8 mr-2 inline fill-amber-400"
//                   preserveAspectRatio="xMidYMid meet"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z" />
//                 </svg>
//                 Search Engine Marketing
//               </li>
//               <li>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-8 mr-2 inline fill-amber-400"
//                   preserveAspectRatio="xMidYMid meet"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z" />
//                 </svg>
//                 Media Planning & Buying
//               </li>
//               <li>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-8 mr-2 inline fill-amber-400"
//                   preserveAspectRatio="xMidYMid meet"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z" />
//                 </svg>
//                 ETL / Data Warehousing
//               </li>
//             </ul>
//             <ul className="space-y-2 px-8 pt-2 lg:pt-10 lg:w-1/2">
//               <li>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-8 mr-2 inline fill-amber-400"
//                   preserveAspectRatio="xMidYMid meet"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z" />
//                 </svg>
//                 <div className="inline whitespace-pre">Data Tracking</div>
//               </li>
//               <li>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-8 mr-2 inline fill-amber-400"
//                   preserveAspectRatio="xMidYMid meet"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z" />
//                 </svg>
//                 Social Media Marketing
//               </li>
//               <li>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-8 mr-2 inline fill-amber-400"
//                   preserveAspectRatio="xMidYMid meet"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z" />
//                 </svg>
//                 Reporting & Analysis
//               </li>
//               <li>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-8 mr-2 inline fill-amber-400"
//                   preserveAspectRatio="xMidYMid meet"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z" />
//                 </svg>
//                 <div className="inline whitespace pre">
//                   Marketing Consulting{" "}
//                 </div>
//               </li>
//             </ul>
//             <div>
//               <img src="https://storage.googleapis.com/website-bucket-uploads/static/services7.jpg" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default aboutus;

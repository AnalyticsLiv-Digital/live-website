"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import * as Scroll from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheck } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const { Element: ScrollElement } = Scroll;
  const scrolling1 = () => {
    {
      Scroll.scroller.scrollTo("footer", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
    }
  };
  const scrolling2 = () => {
    {
      Scroll.scroller.scrollTo("consultation", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-[-35px] transform -translate-y-1/2 z-10 cursor-pointer"
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
        className="absolute top-1/2 left-[-35px] transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaArrowLeft size={20} />
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  const Trusteddata = {
    brand: [
      { logo: "/ThoughtSpot_logo.png", alt: "ThoughtSpot" },
      { logo: "/Brizo_logo.png", alt: "Brizo" },
      { logo: "/bluecrew.png", alt: "BlueCrew" },
      { logo: "/edanz_logo.png", alt: "Edanz" },
      { logo: "/shoebacca.png", alt: "Shoebacca" },
      { logo: "/wholesalesockdeals.png", alt: "WholesaleSockDeals" },
    ],
  };
  return (
    <>
      <section className="homepage flex items-center justify-center overflow-hidden font-gilroy">
        <div className="xl:min-h-[90vh] w-full">
          <div className="relative xl:h-fit overflow-hidden">
            {/* Back-Ground design  */}
            <div className="absolute lg:hidden top-28 right-0 w-80 h-80 flex justify-end">
              <img className="bgd w-52 h-80 rounded-full blur-2xl opacity-[0.5]" />
            </div>
            {/*  */}

            <div className="flex flex-col items-center justify-center gap-12 px-4 md:px-20  pb-8  h-full">
              <div className="vb pb-5 w-full carousel-custom">
                <Slider {...settings}>
                  <div>
                    <div className="flex lg:flex-nowrap flex-wrap justify-between items-center gap-10">
                      <div className="lg:w-[60%] w-full">
                        <h1 className="text-maintext text-[24px] text-center font-semibold leading-[32px] not-italic md:pb-5 mb-[10px]">
                          See Beyond the Click: Strategic Media, Analytics &
                          Cloud Solutions for Measurable Success
                        </h1>
                        {/* <p className='text-[#000] md:text-[18px] text-base font-medium leading-[1.5em] text-center md:pb-5 pb-[30px]'>Our strategic Media, Analytics & Cloud Solutions go beyond basic clicks, transforming website data into actionable insights that drive measurable success through optimized campaigns and data-driven decisions</p> */}
                        <div className="ml-5 pb-4">
                          <li className="flex items-start gap-1 p-[10px] pb-[5px] pl-0 pt-0 text-[#000]">
                            <span className="text-[#de668a] mt-[5px]">
                              <FaCheck />
                            </span>
                            <p className=" text-base font-medium leading-[25px] font-gilroy2">
                              Actionable Insights: Turn website data into
                              strategic media planning for maximized ROI.
                            </p>
                          </li>
                          <li className="flex items-center gap-1 p-[10px] pb-[5px] pl-0 text-[#000]">
                            <span className="text-[#de668a] mt-[-20px]">
                              <FaCheck />
                            </span>
                            <p className="text-base font-medium leading-[25px] font-gilroy2">
                              Data-Driven Decisions: Optimize campaigns and
                              measure every touchpoint for clear results.
                            </p>
                          </li>
                        </div>
                        <div className="flex flex-wrap justify-around mt-7 mb-3">
                          <button onClick={scrolling1} className="butn">
                            know More
                          </button>
                        </div>
                      </div>
                      <div className="lg:w-[40%] w-full flex items-center  justify-center">
                        <img
                          src="/Home_Page_Main_Img_2.png"
                          alt=""
                          className="w-[450px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex lg:flex-nowrap flex-wrap items-center gap-10 mt-[80px]">
                      <div className="lg:w-[60%] w-full">
                        <div className="sm:w-[550px] w-full max-[1023px]:m-auto lg:mr-auto">
                          <h2 className="text-maintext text-[19px] text-center font-semibold leading-[32px] not-italic">
                            Redefining Possibilities, Empowering Brands
                          </h2>
                          <h1 className="text-maintext text-[24px] text-center font-semibold leading-[39px] mt-3 not-italic pb-5">
                            Strategic Media, Analytics & Cloud Solutions
                          </h1>
                          <p className="text-[#000] md:text-[18px] text-base font-medium leading-[32px] text-center md:pb-5 pb-[30px]">
                            Data Analytics and Marketing Solutions helps
                            businesses in gaining digital maturity through
                            optimized utilization of data
                          </p>
                          <div className="flex flex-wrap justify-around">
                            <button onClick={scrolling2} className="butn mb-0">
                              Talk to our Experts
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-[40%] w-full mx-auto flex items-center justify-center">
                        <img
                          src="/Home_Page_Main_Img_1_NEW_V2.png"
                          alt=""
                          className="w-[650px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex lg:flex-nowrap flex-wrap items-center lg:justify-between justify-center gap-6">
                      <div className="lg:w-[60%] w-full">
                        <h1 className="text-maintext text-[24px] text-center font-semibold leading-[32px] not-italic mb-[10px]">
                          Optimize, Analyze, Dominate: Media & Analytics
                          Solutions to Power Your Digital Transformation
                        </h1>
                        {/* <p className='text-[#000] md:text-[18px] text-base font-medium leading-[1.5em] text-center md:pb-5 pb-[30px]'>Fuel your digital transformation with our Media & Analytics Solutions</p> */}
                        <div className="ml-8 pb-4">
                          <li className="flex items-start gap-1 p-[10px] pb-[5px] pl-0 pt-0 text-[#000]">
                            <span className="text-[#de668a] mt-[5px]">
                              <FaCheck />
                            </span>
                            <p className="text-base font-medium leading-[32px] font-gilroy2">
                              Streamline Workflows: Unify data and automate
                              tasks for a frictionless experience.
                            </p>
                          </li>
                          <li className="flex items-start gap-1 p-[10px] pb-[5px] pl-0 text-[#000]">
                            <span className="text-[#de668a] mt-[5px]">
                              <FaCheck />
                            </span>
                            <p className="text-base font-medium leading-[32px] font-gilroy2">
                              Actionable Strategies: Develop data-driven media
                              plans to fuel business growth.
                            </p>
                          </li>
                        </div>
                        <div className="flex flex-wrap justify-around mt-7 mb-3">
                          <button onClick={scrolling2} className="butn">
                            Schedule A Free Consultation
                          </button>
                        </div>
                      </div>
                      <div className="lg:w-[40%] w-full mx-auto flex items-center  justify-center">
                        <img
                          src="/Home_Page_Main_Img_3.png"
                          alt=""
                          className="w-[450px]"
                        />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              {/*  */}

              <div className="">
                <div>
                  <h2 className="text-center font-bold text-base text-maintext leading-[24px]">
                    Trusted by Organisations Worldwide
                  </h2>
                </div>
                <div className=" max-sm:w-[90dvw] max-lg:w-[90dvw] w-[100%] m-auto">
                  <Marquee gradient={false} puseOnHover="true">
                    <div className="flex space-x-8 justify-center py-4 px-4 mt-4">
                      {Trusteddata.brand.map((brand, index) => (
                        <div key={index} className="">
                          <img
                            src={brand.logo}
                            alt={brand.alt}
                            className="h-[50px] mx-5"
                          />
                        </div>
                      ))}
                    </div>
                  </Marquee>
                </div>
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

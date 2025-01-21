import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import OgTags from "../../components/OgTags";

export default function AutoPlay() {
  const [activetab, setActivetab] = useState("1");

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-[-12px] md:right-[-20px] lg:right-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
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
        className="absolute top-1/2 left-[-12px] md:left-[-20px] lg:left-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaArrowLeft size={20} />
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
    autoplaySpeed: 3000,
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
          slidesToShow: 1,
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
    <>
      <OgTags
        url="https://analyticsliv.com/services/data-reporting-analysis"
        title="Get Insights with Expert Data Analytics Visualization at AnalyticsLiv"
        description="Discover insights with expert data analytics visualization at AnalyticsLiv. We turn complex data into clear, actionable visuals to drive smarter decisions and growth."
        twitterTitle="Get Insights with Expert Data Analytics Visualization at AnalyticsLiv"
        twitterDescription="Discover insights with expert data analytics visualization at AnalyticsLiv. We turn complex data into clear, actionable visuals to drive smarter decisions and growth."
      />

      <section>
        <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-4">
          <div></div>
          <div class="grid lg:grid-cols-2 gap-10">
            <div class="text-center sm:text-left flex flex-col justify-center">
              <h1 class="text-analyticsheading text-[40px] font-bold inline leading-normal">
                <span class="relative after:absolute after:left-0 after:bottom-[-5px] after:bg-[#07A9F9] after:h-[9px] after:w-20 after:rounded-[5px]">
                  Data{" "}
                </span>{" "}
                Reporting & Analysis
              </h1>{" "}
              <br /> <br />
              <p class="text-black text-base font-medium">
                At AnalyticsLiv, we're passionate about transforming your data
                into actionable insights using various reporting tool like
                Looker Studio, PowerBI and others
              </p>{" "}
              <br />
              <Link href="/contact?id=data-reporting">
                <button class="butn">Get in Touch</button>
              </Link>
            </div>
            <div class="right flex lg:justify-end">
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/static/Data_Reporting_img.png"
                alt="data analytics visualization"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="relative">
        <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 md:pb-16 pb-8">
          <div class="flex items-center space-x-4 py-4 mb-6">
            <h2 class="text-analyticsheading text-[40px] font-bold inline">
              <span class="relative after:absolute after:left-0 after:bottom-0 after:bg-[#07A9F9] after:h-[9px] after:w-20 after:rounded-2xl">
                Here's{" "}
              </span>{" "}
              why you should partner with us:
            </h2>{" "}
            <br /> <br />
          </div>

          <div className="w-[90%] mx-auto relative carousel-custom">
            <Slider {...settings}>
              <div class="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0 border border-[#EBEBEB] p-4 py-4  px-5 mr-4 gap-5">
                <div class="">
                  <div class="text-center flex items-center">
                    <img
                      className="h-10 w-10 mx-auto md:h-12 md:w-12"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/data-reporting(1).logo.png"
                      alt="logo"
                    />
                  </div>{" "}
                  <br />
                  <a href="#">
                    <h5 class="text-sm sm:text-[15px] font-semibold py-2">
                      Unparalleled Expertise
                    </h5>
                  </a>
                  <p class="text-xs py-3 font-normal text-[#152F2E]">
                    Our team of experienced data analysts and Looker Studio
                    specialists possesses in-depth knowledge to expertly handle
                    your data and deliver meaningful insights.
                  </p>
                </div>
              </div>

              <div class="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0 border border-[#EBEBEB] p-4 py-4  px-5 mr-4 gap-5">
                <div class="">
                  <div class="text-center flex items-center">
                    <img
                      className="h-10 w-10 mx-auto md:h-12 md:w-12"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/data-reporting(2).logo.png"
                      alt="logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 class="text-sm sm:text-[15px] font-semibold py-2">
                      Customized Solutions
                    </h5>
                  </a>
                  <p class="text-xs py-3 font-normal text-[#152F2E]">
                    We craft tailored Looker dashboards that perfectly align
                    with your unique business needs and objectives, providing a
                    holistic view of your data.
                  </p>
                </div>
              </div>

              <div class="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0 border border-[#EBEBEB] p-4 py-4  px-5 mr-4 gap-5">
                <div class="">
                  <div class="text-center flex items-center">
                    <img
                      className="h-10 w-10 mx-auto md:h-12 md:w-12"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/data-reporting(3).logo.png"
                      alt="logo"
                    />
                  </div>{" "}
                  <br />
                  <a href="#">
                    <h5 class="text-sm sm:text-[15px] font-semibold py-2">
                      Continuous Support
                    </h5>
                  </a>
                  <p class="text-xs py-3 font-normal text-[#152F2E]">
                    We ensure your Looker dashboards remain up-to-date and
                    aligned with your evolving business requirements.
                  </p>
                </div>
              </div>

              <div class="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0 border border-[#EBEBEB] p-4 py-4  px-5 mr-4 gap-5">
                <div class="">
                  <div class="text-center flex items-center">
                    <img
                      className="h-10 w-10 mx-auto md:h-12 md:w-12"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/data-reporting(4).logo.png"
                      alt="logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 class="text-sm sm:text-[15px] font-semibold py-2">
                      Proven Track Record
                    </h5>
                  </a>
                  <p class="text-xs py-3 font-normal text-[#152F2E]">
                    We have a history of successful collaborations with diverse
                    businesses, consistently delivering exceptional data
                    insights.
                  </p>
                </div>
              </div>

              <div class="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0 border border-[#EBEBEB] p-4 py-4  px-5 mr-4 gap-5">
                <div class="">
                  <div class="text-center flex items-center">
                    <img
                      className="h-10 w-10 mx-auto md:h-12 md:w-12"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/data-reporting(5).logo.png"
                      alt="logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 class="text-sm sm:text-[15px] font-semibold py-2">
                      Data Security
                    </h5>
                  </a>
                  <p class="text-xs py-3 font-normal text-[#152F2E]">
                    Data security is our top priority. We employ stringent
                    measures to safeguard your sensitive information.
                  </p>
                </div>
              </div>

              <div class="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0 border border-[#EBEBEB] p-4 py-4  px-5 mr-4 gap-5">
                <div class="">
                  <div class="text-center flex items-center">
                    <img
                      className="h-10 w-10 mx-auto md:h-12 md:w-12"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/data-reporting(6).logo.png"
                      alt="logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 class="text-sm sm:text-[15px] font-semibold py-2">
                      Scalability
                    </h5>
                  </a>
                  <p class="text-xs py-3 font-normal text-[#152F2E]">
                    Our solutions seamlessly adapt to increasing data volumes
                    and complexity, ensuring your analytics capabilities remain
                    robust.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="bg-[#282833] webomphen relative overflow-hidden font-gilroy">
        <div className="inrwebomphen relative">
          <div className="relative z-20 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-0">
            <div class="flex items-center space-x-4 py-4 mb-6">
              <h2 class="text-[#efefef] text-[40px] font-bold leading-[1.5em] not-italic pb-5 md:pb-0">
                <span class="relative after:absolute after:left-0 after:bottom-0 after:bg-[#07A9F9] after:h-[7px] after:w-20 after:rounded-2xl">
                  Data&nbsp;
                </span>
                Reporting & Analysis Services :
              </h2>
              <br /> <br />
            </div>
            <div className="lg:flex lg:flex-nowrap flex-wrap items-center hidden webbox rounded-xl">
              <div className="text-black xl:w-[35%] lg:w-[35%] w-full mt-[11px]">
                <div className="p-8 pl-[25px] -mr-[30px] rounded-l-[10px] xl:w-[400px] xl:ml-auto">
                  <div
                    onClick={() => setActivetab("1")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "1" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="/Campaign Strategy and Setup white.png"
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Monthly, Quarterly, and Annual Analysis</p>
                  </div>
                  <div
                    onClick={() => setActivetab("2")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "2" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="/Audience Targeting white.png"
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Campaign Optimization</p>
                  </div>
                  <div
                    onClick={() => setActivetab("3")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "3" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="/Ad Format Optimization white.png"
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p>A/B Testing</p>
                  </div>
                  <div
                    onClick={() => setActivetab("4")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "4" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="/Real-Time Bidding white.png"
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Customer Segmentation</p>
                  </div>
                  <div
                    onClick={() => setActivetab("5")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "5" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="/Continuous Campaign Management & Optimization white.png"
                        alt=""
                        className="h-10 w-[56px]"
                      />
                    </div>
                    <p>Forecasting and Predictive Analytics</p>
                  </div>
                </div>
              </div>

              <div className="xl:w-[60%] lg:w-[65%] w-full h-[500px] flex items-start justify-center rounded-[15px] pt-5 mb-[65px]">
                <div
                  id="tab1"
                  className={`${activetab == 1 && "block"} ${activetab != 1 && "hidden"
                    } relative py-[30px] px-[50px] text-base font-medium leading-8`}
                >
                  <div className="relative">
                    <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                      Monthly, Quarterly, and Annual Analysis
                    </p>
                    <p className="text-[#ffffff] mb-[10px]">
                      We conduct A/B tests to evaluate different strategies and
                      optimize your website or app for better performance.
                    </p>
                    <div className="">
                      <Link href="/contact?id=data-reporting-analysis">
                        <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  id="tab2"
                  className={`${activetab == 2 && "block"} ${activetab != 2 && "hidden"
                    } relative py-[30px] px-[50px] text-base font-medium leading-8`}
                >
                  <div className="relative pl-1">
                    <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                      Campaign Optimization
                    </p>
                    <p className="text-[#ffffff]">
                      We optimize your marketing campaigns based on data-driven
                      insights, maximizing their effectiveness and ROI.
                    </p>
                    <div className="">
                      <Link href="/contact?id=data-reporting-analysis">
                        <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  id="tab3"
                  className={`${activetab == 3 && "block"} ${activetab != 3 && "hidden"
                    } relative py-[30px] px-[40px] text-base font-medium leading-8`}
                >
                  <div className="relative pl-1">
                    <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                      A/B Testing
                    </p>
                    <p className="text-[#ffffff] mb-[10px]">
                      We conduct A/B tests to evaluate different strategies and
                      optimize your website or app for better performance.
                    </p>
                    <div className="">
                      <Link href="/contact?id=data-reporting-analysis">
                        <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="tab4"
                  className={`${activetab == 4 && "block"} ${activetab != 4 && "hidden"
                    } relative py-[30px] px-[50px] text-base font-medium leading-8`}
                >
                  <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                    Customer Segmentation
                  </p>
                  <p className="text-[#ffffff]">
                    We segment your customer base into distinct groups based on
                    shared characteristics, enabling targeted marketing
                    campaigns and personalized customer experiences.
                  </p>
                  <div className="">
                    <Link href="/contact?id=data-reporting-analysis">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  id="tab5"
                  className={`${activetab == 5 && "block"} ${activetab != 5 && "hidden"
                    } relative py-[30px] px-[50px] text-base font-medium leading-8`}
                >
                  <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                    Forecasting and Predictive Analytics
                  </p>
                  <p className="text-[#ffffff] mb-[10px]">
                    We leverage advanced predictive modeling to forecast future
                    trends and anticipate customer behavior, allowing you to
                    make proactive decisions.
                  </p>
                  <div className="">
                    <Link href="/contact?id=data-reporting-analysis">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col justify-start max-w-md m-auto lg:hidden">
              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("1")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "1" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="/Campaign Strategy and Setup white.png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Monthly, Quarterly, and Annual Analysis</p>
                </div>
                <div
                  id="tab1"
                  className={`${activetab == 1 && "items-center justify-center"
                    } ${activetab != 1 && "hidden"
                    } relative p-5 pt-[10px] text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    We conduct A/B tests to evaluate different strategies and
                    optimize your website or app for better performance.
                  </p>
                  <div className="">
                    <Link href="/contact?id=data-reporting-analysis">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("2")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "2" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="/Audience Targeting white.png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Campaign Optimization</p>
                </div>
                <div
                  id="tab2"
                  className={`${activetab == 2 && " items-center justify-center"
                    } ${activetab != 2 && "hidden"
                    } relative p-5 pt-[10px] text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff]">
                    We optimize your marketing campaigns based on data-driven
                    insights, maximizing their effectiveness and ROI.
                  </p>
                  <div className="">
                    <Link href="/contact?id=data-reporting-analysis">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("3")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "3" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="/Ad Format Optimization white.png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                  <p>A/B Testing</p>
                </div>
                <div
                  id="tab3"
                  className={`${activetab == 3 && "items-center justify-center"
                    } ${activetab != 3 && "hidden"
                    } relative p-5 pt-[10px] text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    We conduct A/B tests to evaluate different strategies and
                    optimize your website or app for better performance.
                  </p>
                  <div className="">
                    <Link href="/contact?id=data-reporting-analysis">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("4")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "4" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="/Real-Time Bidding white.png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Customer Segmentation</p>
                </div>
                <div
                  id="tab4"
                  className={`${activetab == 4 && " items-center justify-center"
                    } ${activetab != 4 && "hidden"
                    } relative p-5 pt-[10px] text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff]">
                    We segment your customer base into distinct groups based on
                    shared characteristics, enabling targeted marketing
                    campaigns and personalized customer experiences.
                  </p>
                  <div className="">
                    <Link href="/contact?id=data-reporting-analysis">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("5")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "5" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="/Continuous Campaign Management & Optimization white.png"
                      alt=""
                      className="h-10 w-[56px]"
                    />
                  </div>
                  <p>Forecasting and Predictive Analytics</p>
                </div>
                <div
                  id="tab5"
                  className={`${activetab == 5 && " items-center justify-center"
                    } ${activetab != 5 && "hidden"
                    } relative p-5 pt-[10px] font-gilroy2 text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    We leverage advanced predictive modeling to forecast future
                    trends and anticipate customer behavior, allowing you to
                    make proactive decisions.
                  </p>
                  <div className="">
                    <Link href="/contact?id=data-reporting-analysis">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="progracont relative overflow-hidden">
        <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
          <div className="flex md:flex-nowrap flex-wrap items-center mx-auto">
            <div className="md:w-[66%] w-full">
              <div>
                <div>
                  <div>
                    <h3 className="text-[#ffffff] text-[25px] leading-8 md:mb-[20px] mb-6 font-gilroy font-semibold">
                      Ready to Empower Your Analytics?
                    </h3>
                  </div>
                  <div>
                    <div className="text-[#ffffff] text-base leading-8 md:mb-[15px] mb-6 font-gilroy2 font-medium">
                      <p className="text-[18px] mb-3">
                        {" "}
                        Partner with AnalyticsLiv and transform your data into a
                        powerful engine for growth and success. Contact us today
                        to embark on your data-driven journey.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[33%] w-full flex items-end md:justify-end justify-center">
              <div className="p-[10px] pl-0">
                <div className="w-full flex">
                  <div className="flex items-center md:justify-end justify-center">
                    <Link href="/contact?id=data-reporting">
                      <button className="border border-solid border-[#ffffff] bg-[#ffffff] text-[#de668a] text-base font-normal tracking-wider rounded-xl py-3 px-6">
                        Let's Connect
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

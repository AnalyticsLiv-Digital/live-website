import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as Scroll from "react-scroll";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const { Element: ScrollElement } = Scroll;

const index = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="carousel-button absolute top-1/2 right-[-12px] md:right-[-20px] lg:right-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
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
        className="carousel-button absolute top-1/2 left-[-12px] md:left-[-20px] lg:left-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
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
    slidesToScroll: 3,
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
  const { query } = useRouter();

  useEffect(() => {
    if (query.id !== undefined) {
      setTimeout(() => {
        Scroll.scroller.scrollTo(query.id, {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      }, 100);
    }
  }, [query]);
  return (
    <>
      <Head>
        <title>Data Analytics Services for Business Growth | AnalyticsLiv</title>
        <meta
          name="description"
          content="Turn data into strategy with AnalyticsLiv’s analytics services. We deliver actionable insights through advanced tracking, reporting, and performance analysis."
        />
        <link
          rel="canonical"
          href="https://analyticsliv.com/services/analytics"
        ></link>
      </Head>
      <ScrollElement
        id="web-app-measurement"
        name="web-app-measurement"
      ></ScrollElement>
      <section>
        <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
          <div class="grid lg:grid-cols-2 gap-10">
            <div class="text-left">
              <h1 class="text-analyticsheading text-[40px] font-bold inline">
                <span class="relative after:absolute after:left-0 after:bottom-0 after:bg-[#07A9F9] after:h-[9px] after:w-20 after:rounded-2xl">
                  Web{" "}
                </span>{" "}
                and App Measurement
              </h1>{" "}
              <br /> <br />
              <h3 class="text-analyticsheading text-[30px] font-medium">
                Decode Your Users with Web and App Analytics
              </h3>
              <br />
              <p class="text-analyticsheading text-base font-medium">
                AnalyticsLiv goes beyond mere data; we deliver actionable
                insights that fuel business growth. Our results-oriented
                approach seamlessly streamlines customer acquisition,
                activation, and retention across every stage of the customer
                journey.
              </p>
              <br />
              <Link href="/contact?id=analytics">
                <button class="butn contact-us-btn">Get in Touch</button>
              </Link>
            </div>
            <div class="right flex lg:justify-end">
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Web_service_img.png"
                alt="Web_service_img"
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
                How{" "}
              </span>{" "}
              we can assist you
            </h2>{" "}
            <br /> <br />
          </div>
          <p class="text-analyticsheading text-[30px] font-medium mt-1.5">
            Our streamlined process activates your data in just a few weeks:
          </p>
          <br />
          <br />

          <div className="pt-8 w-[90%] mx-auto relative carousel-custom">
            <Slider {...settings}>
              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Needs.logo.png"
                      alt="Needs.logo"
                    />
                  </div>{" "}
                  <br />
                  <a href="#">
                    <h5 className="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Understanding Your Needs
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Gain a deep understanding of your business and objectives.
                  </p>
                </div>
              </div>

              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_key-data.logo.png"
                      alt="key-data.logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 className="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Identifying Key Data Points
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Pinpoint essential data for effective insights.
                  </p>
                </div>
              </div>

              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_collections.logo.png"
                      alt="collections.logo"
                    />
                  </div>{" "}
                  <br />
                  <a href="#">
                    <h5 className="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Collecting Data Points
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Centralize your data for immediate action.
                  </p>
                </div>
              </div>

              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_integrated.logo.png"
                      alt="integrated.logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 className="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-5">
                      Building Integrated Analytics Platforms
                    </h5>
                  </a>
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Seamlessly integrate data across platforms.
                  </p>
                </div>
              </div>

              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Effortless.logo.png"
                      alt="Effortless.logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 className="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Effortless Access
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Access your data and derive actionable insights promptly.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <ScrollElement
        id="ga4-implementation"
        name="ga4-implementation"
      ></ScrollElement>
      <section class="ana-services bg-analyticssection relative">
        <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 md:pb-16 pb-8">
          <div class="text-left">
            <h2 class="text-analyticsheading text-[40px] font-bold inline">
              <span class="relative after:absolute after:left-0 after:bottom-[-5px] after:bg-[#07A9F9] after:h-[9px] after:w-20 after:rounded-[5px]">
                Explore{" "}
              </span>{" "}
              Our Web & App Measurement Service :
            </h2>{" "}
            <br />
          </div>{" "}
          <br />
          <p class="text-analyticsheading text-[30px] font-medium mt-1.5">
            Basic Analytics Services - For essential insights :
          </p>
          <br />
          <br />
          <div className="pt-8 w-[90%] mx-auto relative carousel-custom">
            <Slider {...settings}>
              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#c8c8c8] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Needs.logo.png"
                      alt="Needs.logo"
                    />
                  </div>{" "}
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Enhanced Ecommerce Implementation
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Gain a Optimize sales and user experience.
                  </p>
                </div>
              </div>

              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#c8c8c8] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_key-data.logo.png"
                      alt="key-data.logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Third-party pixel implementation
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Pinpoint comprehensive data collection.
                  </p>
                </div>
              </div>

              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#c8c8c8] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_collections.logo.png"
                      alt="collections.logo"
                    />
                  </div>{" "}
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Shopify and Enhanced Ecommerce Integration
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Centralize Detailed online store insights.
                  </p>
                </div>
              </div>

              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#c8c8c8] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_integrated.logo.png"
                      alt="integrated.logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-5">
                      GDPR Cookie Integration
                    </h5>
                  </a>
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Seamlessly Comply with GDPR.
                  </p>
                </div>
              </div>

              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#c8c8c8] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Effortless.logo.png"
                      alt="Effortless.logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Form Field/Funnel Implementation
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Access Identify drop-off points for optimization.
                  </p>
                </div>
              </div>
              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#c8c8c8] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Needs.logo.png"
                      alt="Needs.logo"
                    />
                  </div>{" "}
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Configuration of dimensions
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Gain a Enhanced analytics insights.
                  </p>
                </div>
              </div>
              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#c8c8c8] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Needs.logo.png"
                      alt="Needs.logo"
                    />
                  </div>{" "}
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Custom Events Tracking
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Gain a Tailored insights and optimization for web/app.
                  </p>
                </div>
              </div>
              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#c8c8c8] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Needs.logo.png"
                      alt="Needs.logo"
                    />
                  </div>{" "}
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      GTM Cleanup
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Gain a Optimize your tracking.
                  </p>
                </div>
              </div>
            </Slider>
            <div class="text-center pt-16">
              <Link href="/contact?id=analytics">
                <button class="contact-us-btn-basic butn">Explore Basic Services</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="ana-services relative">
        <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 md:pb-10 pb-8">
          <p class="text-analyticsheading text-[30px] font-medium mt-1.5">
            Advanced Analytics Services - For profound insights
          </p>
          <br />
          <br />

          <div className="pt-8 w-[90%] mx-auto relative carousel-custom">
            <Slider {...settings}>
              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Needs.logo.png"
                      alt="Needs.logo"
                    />
                  </div>{" "}
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Server-Side Tagging
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    centralized website tracking for performance, privacy and
                    data control.
                  </p>
                </div>
              </div>

              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_key-data.logo.png"
                      alt="key-data.logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Custom Attribution Implementation
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Align attribution models with unique business goals.
                  </p>
                </div>
              </div>

              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_collections.logo.png"
                      alt="collections.logo"
                    />
                  </div>{" "}
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Tracking the user ID
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Monitor user behavior across sessions and devices.
                  </p>
                </div>
              </div>

              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_integrated.logo.png"
                      alt="integrated.logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-5">
                      Facebook conversion API implementation
                    </h5>
                  </a>
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Accurate tracking in online advertising.
                  </p>
                </div>
              </div>

              <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5">
                <div className="">
                  <div className="text-center flex items-center">
                    <img
                      className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Effortless.logo.png"
                      alt="Effortless.logo"
                    />
                  </div>
                  <br />
                  <a href="#">
                    <h5 className="service-title text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                      Integration of offline and online Data
                    </h5>
                  </a>{" "}
                  <br />
                  <p className="mb-3 text-[#202020] text-base leading-none font-medium">
                    Deeper insights and analysis.
                  </p>
                </div>
              </div>
            </Slider>
            <div class="text-center pt-16">
              <Link href="/contact?id=advance-analytics">
                <button class="contact-us-btn-advance butn">Explore Advance Services</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ScrollElement
        id="audit-and-health-check"
        name="audit-and-health-check"
      ></ScrollElement>

      <section class="analyticsaudit bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-lg p-8 md:p-16">
        <div>
          <div class="text-left">
            <h2 class="text-analyticsheading text-[40px] font-semibold">
              Audit and Health Check
            </h2>
            <br /> <br />
            <h3 class="text-black text-[30px] font-medium">
              Verify and Audit Your GA4 Configuration
            </h3>
            <br />
          </div>
          <br /> <br />
          <div class="pl-12">
            <ul>
              <li class="bg-no-repeat bg-0.2em bg-left bg-contain pl-10 leading-6">
                <span class="text-analyticsheading sm:text-[30px] text-2xl font-medium">
                  Website Implementation Audit
                </span>
              </li>
            </ul>
            <br />
            <div class="flex flex-wrap justify-center gap-6">
              <Link href="/contact?id=ecommerce-audit">
                <button class="contact-us-btn1 butn px-6 py-4 text-white text-lg rounded-lg shadow-md  transition-all duration-200 ease-in-out">
                  E-commerce Audit
                </button>
              </Link>
              <Link href="/contact?id=pixel-audit">
                <button class="contact-us-btn1 butn px-6 py-4 text-white text-lg rounded-lg shadow-md  transition-all duration-200 ease-in-out">
                  Pixel Audit
                </button>
              </Link>
              <Link href="/contact?id=events-audit">
                <button class="contact-us-btn1 butn px-6 py-4 text-white text-lg rounded-lg shadow-md  transition-all duration-200 ease-in-out">
                  Events Audit
                </button>
              </Link>
            </div>
          </div>
          <br /> <br />
          <div class="pl-12">
            <ul>
              <li class="bg-no-repeat bg-0.2em bg-left bg-contain pl-10 leading-6">
                <span class="text-analyticsheading sm:text-[30px] text-2xl font-medium">
                  Health Check
                </span>
              </li>
            </ul>
            <br />
            <div class="flex flex-wrap justify-center gap-6">
              <Link href="/contact?id=revenue-discrepancy">
                <button class="contact-us-btn1 butn px-6 py-4  text-white text-lg rounded-lg shadow-md  transition-all duration-200 ease-in-out">
                  Revenue/ conversion <br />
                  discrepancies
                </button>
              </Link>
              <Link href="/contact?id=gtm-health-check">
                <button class="contact-us-btn1 butn px-6 py-4  text-white text-lg rounded-lg shadow-md  transition-all duration-200 ease-in-out">
                  Tag Manager <br /> Health Check
                </button>
              </Link>
              <Link href="/contact?id=firebase-healthcheck">
                <button class="contact-us-btn1 butn px-6 py-4  text-white text-lg rounded-lg shadow-md  transition-all duration-200 ease-in-out">
                  GA4, GTM, Firebase <br />
                  Health Check
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="analyticsaudit">
        <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
          <div class="text-left">
            <h2 class="text-analyticsheading text-[40px] font-semibold inline">
              Audit and Health Check
            </h2>{" "}
            <br /> <br />
            <h3 class="text-black text-[30px] font-medium">
              Verify and Audit Your GA4 Configuration
            </h3>
            <br />
          </div>{" "}
          <br /> <br />
          <div class="pl-12">
            <ul>
              <li class="bg-no-repeat bg-0.2em bg-left bg-center bg-contain pl-10 leading-6">
                <span class="text-analyticsheading sm:text-[30px] text-2xl font-medium">
                  Website Implementation Audit
                </span>
              </li>
            </ul>{" "}
            <br />
            <div class="flex flex-wrap justify-around gap-10">
              <Link href="/contact?id=ecommerce-audit">
                <button class="butn">E-commerce Audit</button>
              </Link>
              <Link href="/contact?id=pixel-audit">
                <button class="butn">Pixel Audit</button>
              </Link>
              <Link href="/contact?id=events-audit">
                <button class="butn">Events Audit</button>
              </Link>
            </div>
          </div>{" "}
          <br /> <br />
          <div class="pl-12">
            <ul>
              <li class="bg-no-repeat bg-0.2em bg-left bg-center bg-contain pl-10 leading-6">
                <span class="text-analyticsheading sm:text-[30px] text-2xl font-medium">
                  Health Check
                </span>
              </li>
            </ul>{" "}
            <br />
            <div class="flex flex-wrap justify-around gap-10">
              <Link href="/contact?id=revenue-discrepancy">
                <button class="butn">
                  Revenue/ conversion <br />
                  discrepancies
                </button>
              </Link>
              <Link href="/contact?id=gtm-health-check">
                <button class="butn">
                  Tag Manager <br /> Health Check
                </button>
              </Link>
              <Link href="/contact?id=firebase-healthcheck">
                <button class="butn">
                  GA4, GTM, Firebase <br />
                  Health Check
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default index;

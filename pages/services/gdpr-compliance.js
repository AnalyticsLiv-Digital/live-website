import React from "react";
import Marquee from "react-fast-marquee";
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import MetaSchemaOg from "../../components/MetaSchemaOg";

const cookieLanding = ({ brandsdata }) => {
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

  const content = [
    {
      id: 1,
      path: "/check-up (7).png",
      title: "Regulatory Compliance",
      description:
        "Ensure your business complies with GDPR, CCPA, and other privacy laws.",
    },
    {
      id: 2,
      path: "/check-up (8).png",
      title: "Enhanced Transparency",
      description:
        "Build trust with users by being transparent about data collection and improve your brand’s reputation through privacy-focused practices.",
    },
    {
      id: 3,
      path: "/check-up (9).png",
      title: "User Control",
      description:
        "Empower users to make informed decisions about their data and make a smoother browsing experience.",
    },
    {
      id: 4,
      path: "/check-up (7).png",
      title: "Third-Party Service Continuity",
      description:
        "Ensure continued use of advertising, analytics, and marketing platforms.",
    },
    {
      id: 5,
      path: "/check-up (8).png",
      title: "Future-Proofing",
      description: "Prepare for evolving privacy regulations worldwide.",
    },
  ];

  const consent = [
    {
      id: 1,
      title: "Regulatory Compliance",
      description:
        "Ensure your business complies with GDPR, CCPA, and other privacy laws.",
    },
    {
      id: 2,
      title: "Enhanced Transparency",
      description:
        "Build trust with users by being transparent about data collection and improve your brand’s reputation through privacy-focused practices.",
    },
    {
      id: 3,
      title: "User Control",
      description:
        "Empower users to make informed decisions about their data and make a smoother browsing experience.",
    },
    {
      id: 4,
      title: "Third-Party Service Continuity",
      description:
        "Ensure continued use of advertising, analytics, and marketing platforms.",
    },
    {
      id: 5,
      title: "Future-Proofing",
      description: "Prepare for evolving privacy regulations worldwide.",
    },
  ];

  return (
    <>

      <MetaSchemaOg
        url="https://analyticsliv.com/services/gdpr-compliance"
        title="Expert GDPR Compliance Services for Data Privacy & Security | AnalyticsLiv"
        description="Protect your business with AnalyticsLiv’s GDPR compliance services. We ensure data privacy, reduce risks, and maintain full compliance."
        twitterTitle="Expert GDPR Compliance Services for Data Privacy & Security | AnalyticsLiv"
        twitterDescription="Protect your business with AnalyticsLiv’s GDPR compliance services. We ensure data privacy, reduce risks, and maintain full compliance."
      />

      <div className="">
        <section className="flex max-lg:flex-wrap-reverse lg:px-10 xl:px-28 w-full justify-between gap-12 2xl:gap-16 py-6 lg:py-16 2xl:py-24">
          <div className="w-full lg:w-1/2 max-sm:px-4 max-md:mt-[25dvh] max-lg:mt-[35dvh]">
            <h1 className="text-txt text-[30px] 2xl:text-[35px] font-semibold leading-10 text-center lg:text-left pb-8">
              Stay compliant and secure - Embrace Cookie Consent Mode
            </h1>
            <h2 className="text-base font-normal text-center lg:text-left pb-8 lg:pb-16">
              As a trusted Google Analytics partner, Analyticsliv helps businesses
              to meet privacy goals with effective Cookie Consent Mode strategies,
              ensuring GDPR compliance.
            </h2>
            <div className="flex max-md:flex-col max-md:mx-5 justify-center lg:justify-start gap-4 lg:gap-8">
              {/* <a href="/webinar/cookie-consent" target="_blank"  className="butn text-center">
             Watch Our Webinar
            </a> */}
              <Link href="/contact?id=gdrp-compliance">
                <button className="butn">Let’s Get in Touch</button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <img
              src="/GDPR_Page_Main_Img_1_Left 1.png"
              alt="GDRP_Cookie"
              className="absolute max-md:left-[50px] max-lg:left-[230px] w-[170px] md:w-[190px] lg:w-[270px] xl:w-[350px] 2xl:w-[380px]"
            />
            <img
              src="/GDPR_Page_Main_Img_1_Right 1.png"
              alt="GDRP_Cookie"
              className="absolute max-md:w-[150px] max-lg:w-[200px] max-md:left-[190px] max-lg:left-[360px] lg:left-[200px] xl::left-[300px] 2xl:left-[350px] top-[15px] lg:top-[50px]"
            />
          </div>
        </section>
        <section className="pt-12 px-4 md:px-28 lg:px-10 xl:px-28">
          <div className="text-xl md:text-3xl font-bold text-[#30486A] pb-3 text-center max-md:hidden">
            <span className="inline-block relative">
              Unlock&nbsp;
              <span
                className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                style={{
                  width: "100px",
                  height: "5px",
                  borderRadius: "10px",
                  top: "calc(100% )",
                  left: "0",
                }}
              ></span>
            </span>
            new insights with Cookie Consent Mode
          </div>
          <div className="text-xl font-bold text-[#30486A] pb-5 text-center md:hidden">
            <span className="inline-block relative">
              Unlock&nbsp;
              <span
                className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                style={{
                  width: "65px",
                  height: "5px",
                  borderRadius: "10px",
                  top: "calc(100% )", // Adjust this value as needed
                  left: "0", // Position relative to the parent span
                }}
              ></span>
            </span>
            new insights with Cookie Consent Mode
          </div>
          <div className="flex max-md:flex-col max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:place-items-center max-md:items-center justify-evenly max-sm:gap-5 max-lg:gap-8 gap-5 lg:py-10 ">
            <div className="border border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out h-[180px] w-[278px]">
              <div className="flex flex-col justify-center items-center h-full px-10">
                <img src="/regulation.png" alt="regulatin" className="pb-4" />
                <div className="text-[#152F2E] text-sm font-semibold text-center">
                  Adherence to Privacy Regulations
                </div>
              </div>
            </div>
            <div className="border border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out h-[180px] w-[278px]">
              <div className="flex flex-col justify-center items-center h-full px-10">
                <img src="/user-trust.png" alt="regulatin" className="pb-4" />
                <div className="text-[#152F2E] text-sm font-semibold text-center">
                  Strengthened User Trust
                </div>
              </div>
            </div>
            <div className="border border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out h-[180px] w-[278px]">
              <div className="flex flex-col justify-center items-center h-full px-10">
                <img
                  src="/data-classification.png"
                  alt="regulatin"
                  className="pb-4"
                />
                <div className="text-[#152F2E] text-sm font-semibold text-center">
                  Enhanced Data Collection Practices
                </div>
              </div>
            </div>
            <div className="border border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out h-[180px] w-[278px]">
              <div className="flex flex-col justify-center items-center h-full px-10">
                <img
                  src="/social-media-marketing.png"
                  alt="regulatin"
                  className="pb-4"
                />
                <div className="text-[#152F2E] text-sm font-semibold text-center">
                  Precision in Advertising Campaigns
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8 px-4 md:px-28 lg:px-10 xl:px-28">
          <div className="text-xl md:text-3xl font-bold text-[#30486A] pb-14 max-md:hidden text-center">
            <span className="inline-block relative">
              Discover&nbsp;
              <span
                className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                style={{
                  width: "110px",
                  height: "5px",
                  borderRadius: "10px",
                  top: "calc(100% )",
                  left: "0",
                }}
              ></span>
            </span>
            our recommendations
          </div>
          <div className="text-xl font-bold text-[#30486A] pb-5 text-center md:hidden">
            <span className="inline-block relative">
              Discover&nbsp;
              <span
                className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                style={{
                  width: "85px",
                  height: "5px",
                  borderRadius: "10px",
                  top: "calc(100% )", // Adjust this value as needed
                  left: "0", // Position relative to the parent span
                }}
              ></span>
            </span>
            our recommendations
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 place-items-center">
            <div className="flex flex-col max-[340px]:w-[280px] w-[340px] h-[200px] 2xl:w-[380px] 2xl:h-[230px] border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#bdbdbd] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out justify-around items-center px-4 md:px-5 py-5 text-center">
              <img
                src="/privacy-new.png"
                alt="privacy"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <h3 className="sm:text-[15px] font-semibold">
                Cookie Consent Mode
              </h3>
              <div className="text-xs font-normal text-[#152F2E]">
                Cookie Consent Mode in Google Analytics helps businesses align
                data collection with user privacy preferences, ensuring compliance
                with GDPR and CCPA.
              </div>
            </div>
            <div className="flex flex-col max-[340px]:w-[280px] w-[340px] h-[200px] 2xl:w-[380px] 2xl:h-[230px] border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#bdbdbd] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out justify-around items-center px-4 md:px-5 py-5 text-center">
              <img
                src="/Consent_Managemnt.png"
                alt="Consent_Managemnt"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <h3 className="sm:text-[15px] font-semibold">
                Optimizing Data Use with Consent Management
              </h3>
              <div className="text-xs font-normal text-[#152F2E]">
                Effective consent management allows you to collect and use data
                legally and ethically by securing clear user permissions.{" "}
              </div>
            </div>
            <div className="flex flex-col max-[340px]:w-[280px] w-[340px] h-[200px] 2xl:w-[380px] 2xl:h-[230px] border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#bdbdbd] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out justify-around items-center px-4 md:px-5 py-5 text-center">
              <img
                src="/web-privacy.png"
                alt="web-privacy"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <h3 className="sm:text-[15px] font-semibold">
                Preparing for Privacy-First Web Analytics
              </h3>
              <div className="text-xs font-normal text-[#152F2E]">
                As privacy gains importance, adapt your analytics to focus on user
                privacy by understanding new laws, using consent tools, and
                collecting data responsibly.{" "}
              </div>
            </div>
          </div>
        </section>
        <div className="bg-[#E8FBFB] py-8 flex flex-col px-4 lg:px-20 mt-[75px]">
          <h2 className="gradient-text text-center font-bold text-base lg:text-3xl xl:font-extrabold ">
            Trusted by Organisations Worldwide
          </h2>
          <div className="brandsimages flex space-x-8 justify-center pt-8 px-4 mt-4">
            <Marquee gradient={false} pauseOnHover="true">
              {brandsdata.brand.map((brands, key) => (
                <div key={key}>
                  <img src={brands.logo} alt={brands.brands} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        <section>
          <div className="text-xl md:text-3xl font-bold text-[#30486A] max-lg:px-2 py-14 max-md:hidden text-center">
            <span className="inline-block relative">
              Why&nbsp;
              <span
                className="absolute block bg-gradient-to-r sm:mt-1 from-[#59C3EC] to-[#297AB6]"
                style={{
                  width: "60px",
                  height: "5px",
                  borderRadius: "10px",
                  top: "calc(100% )",
                  left: "0",
                }}
              ></span>
            </span>
            is it important to Implement Consent Banner?
          </div>
          <div className="text-xl font-bold text-[#30486A] pb-5 pt-12 text-center md:hidden">
            <span className="inline-block relative">
              Why&nbsp;
              <span
                className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                style={{
                  width: "45px",
                  height: "5px",
                  borderRadius: "10px",
                  top: "calc(100% )", // Adjust this value as needed
                  left: "0", // Position relative to the parent span
                }}
              ></span>
            </span>
            is it important to Implement Consent Banner?
          </div>
          <div className="pb-16 max-sm:pb-8 w-[90%] mx-auto relative carousel-custom">
            <Slider {...settings}>
              {content.map((item) => (
                <div
                  key={item.id}
                  className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-8 px-10 mr-4 gap-5"
                >
                  <img
                    src={item.path}
                    alt="check-up"
                    className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                  />
                  <h3 className=" text-sm sm:text-[15px] font-semibold mb-2">
                    {item.title}
                  </h3>
                  <div className="text-xs font-normal text-[#152F2E]">
                    {item.description}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-[#7D3FB0] to-[#DE668A] flex justify-center max-sm:px-2 max-xl:px-4 gap-1 items-center lg:gap-16 py-4">
            <div className=" text-white text-xs md:text-base lg:text-[21px] font-semibold">
              Are you looking for the right partner to implement Cookie consent
              for your business?
            </div>
            <a href="/contact?id=cookie-consent" target="_blank" className="text-center max-sm:w-[220px] max-xl:w-[270px] text-white text-xs md:text-base lg:text-lg font-semibold border border-white rounded-[5px] px-1 md:px-4 py-2">
              Contact Us Now
            </a>
          </div>
        </section>

        <section className="py-16 max-md:pt-10 max-md:pb-5 flex justify-between px-4 md:px-28 lg:px-10 xl:px-28">
          <div className=" lg:w-[32%] flex flex-col items-center">
            <img
              src="/second_image_1 1.png"
              alt="man"
              className="max-lg:hidden"
            />
            <div className=" border-b border-[#A1826F] pt-3 w-full max-md:hidden"></div>
          </div>
          <div className="lg:w-[60%] w-full flex flex-col max-md:items-center justify-between">
            <div className="text-xl md:text-3xl font-bold text-[#30486A] pb-6 xl:pb-3 text-center max-md:hidden md:text-left">
              <span className="inline-block relative">
                What&nbsp;
                <span
                  className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                  style={{
                    width: "70px",
                    height: "5px",
                    borderRadius: "10px",
                    top: "calc(100% )",
                    left: "0",
                  }}
                ></span>
              </span>
              you will get
            </div>
            <div className="text-xl font-bold text-[#30486A] pb-5 text-center md:hidden">
              <span className="inline-block relative">
                What&nbsp;
                <span
                  className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                  style={{
                    width: "50px",
                    height: "5px",
                    borderRadius: "10px",
                    top: "calc(100% )", // Adjust this value as needed
                    left: "0", // Position relative to the parent span
                  }}
                ></span>
              </span>
              you will get
            </div>
            <div className="flex max-md:flex-col justify-center items-start max-md:gap-8 md:space-x-11">
              <div className="w-[250px] flex flex-col gap-5 justify-center items-center">
                <div className="">
                  <img src="/image.png" alt="implementation" className="" />
                </div>
                <div className="text-[#152F2E] text-sm font-semibold text-center max-md:px-5">
                  Get complete implementation support from AnalyticsLiv
                </div>
              </div>
              <div className="w-[250px] flex flex-col gap-5 justify-center items-center">
                <div className="">
                  <img src="/image (1).png" alt="trustworthiness" className="" />
                </div>{" "}
                <div className="text-[#152F2E] text-sm font-semibold text-center max-md:px-5">
                  Gain user trust
                </div>
              </div>

              <div className="w-[250px] flex flex-col gap-5 justify-center items-center">
                <div className="">
                  <img src="/image (2).png" alt="data-security" className="" />
                </div>{" "}
                <div className="text-[#152F2E] text-sm font-semibold text-center max-md:px-5">
                  Make your website privacy compliant
                </div>
              </div>
            </div>
            <div className=" flex justify-center">
              <a href="/contact?id=cookie-consent" target="_blank" className="butn max-md:mt- text-center">
                Talk to our Expert
              </a>
            </div>
          </div>
        </section>
        <section className="py-10 md:px-20 lg:px-12 xl:px-28">
          <div className="text-xl md:text-3xl font-bold text-[#30486A] pb-10 max-md:hidden text-center">
            <span className="inline-block relative">
              Setting&nbsp;
              <span
                className="absolute block bg-gradient-to-r mt-1 from-[#59C3EC] to-[#297AB6]"
                style={{
                  width: "100px",
                  height: "5px",
                  borderRadius: "10px",
                  top: "calc(100% )",
                  left: "0",
                }}
              ></span>
            </span>
            Up Cookie Consent
          </div>
          <div className="text-xl font-bold text-[#30486A] pb-5 text-center md:hidden">
            <span className="inline-block relative">
              Setting&nbsp;
              <span
                className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                style={{
                  width: "70px",
                  height: "5px",
                  borderRadius: "10px",
                  top: "calc(100% )", // Adjust this value as needed
                  left: "0", // Position relative to the parent span
                }}
              ></span>
            </span>
            Up Cookie Consent
          </div>
          <div className="max-lg:hidden flex justify-center items-center gap-4">
            <div className="h-[240px] w-[250px] rounded-[40px] border border-[#0057E9] px-2 flex flex-col justify-center items-center">
              <div className="text-[#152F2E] text-sm font-semibold pb-7 text-center">
                Regulatory Compliance
              </div>
              <div className="text-[#152F2E] text-xs font-normal text-center">
                Select a consent mechanism, like a banner or pop-up, to present
                users with the option to consent to data collection. Consent
                Management Tools are available to choose from.
              </div>
            </div>
            <div>
              <img src="https://storage.googleapis.com/website-bucket-uploads/static/public/Arrow%201.png" alt="-->" />
            </div>
            <div className="h-[240px] w-[250px] rounded-[40px] border border-[#0057E9] px-2 flex flex-col justify-center items-center">
              <div className="text-[#152F2E] text-sm font-semibold pb-7 text-center">
                Configure Consent Settings
              </div>
              <div className="text-[#152F2E] text-xs font-normal text-center">
                Configure the consent mechanism to present clear and concise
                consent options to users, ensuring transparency and user control.
              </div>
            </div>
            <div>
              <img src="https://storage.googleapis.com/website-bucket-uploads/static/public/Arrow%201.png" alt="-->" />
            </div>
            <div className="h-[240px] w-[250px] rounded-[40px] border border-[#0057E9] px-2 flex flex-col justify-center items-center">
              <div className="text-[#152F2E] text-sm font-semibold pb-7 text-center">
                Implement Consent Logic
              </div>
              <div className="text-[#152F2E] text-xs font-normal text-center">
                Implement code to manage user consent, ensuring that Google
                Analytics only collects data if users have granted consent.
              </div>
            </div>
            <div>
              <img src="https://storage.googleapis.com/website-bucket-uploads/static/public/Arrow%201.png" alt="-->" />
            </div>
            <div className="h-[240px] w-[250px] rounded-[40px] border border-[#0057E9] px-2 flex flex-col justify-center items-center">
              <div className="text-[#152F2E] text-sm font-semibold pb-7 text-center">
                Test and Deploy
              </div>
              <div className="text-[#152F2E] text-xs font-normal text-center">
                Thoroughly test the implementation to ensure proper functionality
                and that Google Analytics respects user consent preferences.
              </div>
            </div>
          </div>

          <div className="pb-5 lg:pb-16 w-[90%] mx-auto lg:hidden relative carousel-custom">
            <Slider {...settings}>
              {consent.map((item) => (
                <div
                  key={item.id}
                  className="h-[200px] w-[180px] py-10 rounded-[40px] border border-[#0057E9] px-5 flex flex-col justify-center items-center"
                >
                  <h3 className="text-[#152F2E] text-sm font-semibold pb-7 text-center">
                    {item.title}
                  </h3>
                  <div className="text-[#152F2E] text-xs font-normal text-center">
                    {item.description}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="px-4 pb-12 lg:px-10 xl:px-28">
          <div>
            <div className="text-xl md:text-3xl font-bold text-[#30486A] pt-8 xl:pb-3 text-center max-sm:hidden md:text-center">
              <span className="inline-block relative">
                Read&nbsp;
                <span
                  className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                  style={{
                    width: "76px",
                    height: "5px",
                    borderRadius: "10px",
                    top: "calc(100% )",
                    left: "0",
                  }}
                ></span>
              </span>
              more about Cookie Consent Mode
            </div>
            <div className="text-xl font-bold text-[#30486A] pb-5 text-center md:hidden">
              <span className="inline-block relative">
                Read&nbsp;
                <span
                  className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                  style={{
                    width: "50px",
                    height: "5px",
                    borderRadius: "10px",
                    top: "calc(100% )", // Adjust this value as needed
                    left: "0", // Position relative to the parent span
                  }}
                ></span>
              </span>
              more about Cookie Consent Mode
            </div>
            <div className="text-center lg:flex items-center justify-between gap-[30px] lg:gap-[15px] xl:gap-[30px] pt-8">
              <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-[15px] xl:gap-[30px]">
                  <div className="first relative group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] pb-[70px] text-center 2xl:h-[540px] xl:h-[495px] lg:h-[520px]">
                    <a
                      targer="_blank"
                      href="https://analyticsliv.com/blogs/navigating-user-privacy-compliance-a-comprehensive-strategy-with-ga4-and-gtm"
                    >
                      <Image
                        src="/Website_blog_23_Navigating_User_Privacy_Compliance 1.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        priority={true}
                        className="mb-[3px] w-full"
                      />
                      <h3 className="text-lg text-slate-900 text-start font-semibold whitespace-relaxed pt-5">
                        Navigating User Privacy Compliance: A Comprehensive
                        Strategy with GA4 and GTM
                      </h3>
                      <p className="align-middle text-left text-xs pt-4 pb-7 text-gray-500 leading-[21px]">
                        User privacy compliance involves adhering to regulations
                        and standards that safeguard user data. With the
                        implementation of regulations like the General Data
                        Protection Regulation (GDPR) and the California Consumer
                        Privacy Act (CCPA)
                      </p>
                      <div className="absolute bottom-[3%] 2xl:right-[30%] xl:right-[25%] lg:right-[20%]">
                        <div className="flex w-[180px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn">
                          <div className="flex items-center justify-center gap-[5px]">
                            <button className="font-medium text-[#4186F5] group-hover:text-white">
                              Read More
                            </button>
                            <span className="text-homepagebtn group-hover:text-white">
                              <FaLongArrowAltRight />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="first relative group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] pb-[70px] text-center 2xl:h-[540px] xl:h-[495px] lg:h-[520px]">
                    <a
                      targer="_blank"
                      href="https://analyticsliv.com/blogs/navigating-user-privacy-compliance-a-comprehensive-strategy-with-ga4-and-gtm"
                    >
                      <Image
                        src="/Website_blog_23_Navigating_User_Privacy_Compliance 1.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        priority={true}
                        className="mb-[3px] w-full"
                      />
                      <h3 className="text-lg text-slate-900 text-start font-semibold whitespace-relaxed pt-5">
                        Navigating User Privacy Compliance: A Comprehensive
                        Strategy with GA4 and GTM{" "}
                      </h3>
                      <p className="align-middle text-left text-xs pt-4 pb-7 text-gray-500 leading-[21px]">
                        User privacy compliance involves adhering to regulations
                        and standards that safeguard user data. With the
                        implementation of regulations like the General Data
                        Protection Regulation (GDPR) and the California Consumer
                        Privacy Act (CCPA)
                      </p>
                      <div className="absolute bottom-[3%] 2xl:right-[30%] xl:right-[25%] lg:right-[20%]">
                        <div className="flex w-[180px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn">
                          <div className="flex items-center justify-center gap-[5px]">
                            <button className="font-medium text-[#4186F5] group-hover:text-white">
                              Read More
                            </button>
                            <span className="text-homepagebtn group-hover:text-white">
                              <FaLongArrowAltRight />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="second group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797]  hover:shadow-serviceoffer p-[25px] pb-[70px] text-center relative 2xl:h-[540px] xl:h-[495px] lg:h-[520px]">
                    <a
                      targer="_blank"
                      href="https://analyticsliv.com/blogs/top-gdpr-tools-for-2023-revealed"
                    >
                      <Image
                        src="/Website_blog_9_Empower_Your_Compliance_Journey_Another.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        priority={true}
                        className="mb-[3px] w-full"
                      />
                      <h3 className="text-lg text-slate-900 text-start font-semibold whitespace-relaxed pt-5">
                        Your Ultimate Guide to Using Looker Studio and Reporting
                        Tool
                      </h3>
                      <p className="align-middle text-left text-xs pt-4 pb-7 text-gray-500 leading-[21px]">
                        Obtaining data from the user interface of Google Analytics
                        4 (GA4) according to your specific requirements can be
                        quite challenging and sometimes even impossible.
                      </p>
                      <div className="absolute bottom-[3%] 2xl:right-[30%] xl:right-[25%] lg:right-[20%]">
                        <div className="flex w-[180px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn">
                          <div className="flex items-center justify-center gap-[5px]">
                            <button className="font-medium text-[#4186F5] group-hover:text-white">
                              Read More
                            </button>
                            <span className="text-homepagebtn group-hover:text-white">
                              <FaLongArrowAltRight />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  // Fetch data from external API

  const res = await fetch(`${process.env.domain}/api/ga4brands`);
  const brandsdata = await res.json();

  //console.log(brandsdata);
  // Pass data to the page via props
  return { props: { brandsdata } };
}
export default cookieLanding;

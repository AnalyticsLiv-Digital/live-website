import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Head from "next/head";
import MetaSchemaOg from "../../components/MetaSchemaOg";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    return (
      <>
        <MetaSchemaOg
          url="https://analyticsliv.com/services/looker-bi-platform"
          title="AnalyticsLiv - Looker Studio, Power BI Service"
          description="Experts in GA4, DV360, Google Ads, Meta Ads, Microsoft Ads"
          twitterTitle="AnalyticsLiv - Looker Studio, Power BI Service"
          twitterDescription="Experts in GA4, DV360, Google Ads, Meta Ads, Microsoft Ads"
        />

        <section>
          <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
            <div class="grid lg:grid-cols-2 gap-10">
              <div class="text-left">
                <h1 class="text-lookerheading text-[40px] font-bold inline">
                  <span class="relative after:absolute after:left-0 after:bottom-[-5px] after:bg-[#07A9F9] after:h-[9px] after:w-20 after:rounded-[5px]">
                    Looker{" "}
                  </span>{" "}
                  BI Platform Services
                </h1>
                <br /> <br />
                <h3 class="text-lookerheading text-[30px] font-medium">
                  Tailored for Your Success
                </h3>
                <br />
                <p class="text-lookerheading text-base font-medium">
                  At AnalyticsLiv, we specialize in crafting customized Looker
                  BI Platform Solutions that empower businesses to transform raw
                  data into actionable insights, driving growth and success. Our
                  comprehensive suite of services provides you with the
                  essential tools and expertise to harness the power of
                  data-driven decision-making.
                </p>
                <br />
                <Link href="/contact?id=looker-bi">
                  <button
                    // bg-lookerheading btn cursor-pointer hover:bg-sky-800 transition duration-200 delay-75 rounded-[5px] shadow-lg text-white text-lg font-semibold py-[15px] px-[50px] hover:scale-110
                    class="butn"
                  >
                    Get in Touch
                  </button>
                </Link>
              </div>
              <div class="right flex lg:justify-end">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/static/Looker_BI_service_img.png"
                  alt="Looker_BI_service_img"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="explore-section bg-lookersection ">
          <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
            <div class="flex items-center space-x-4 py-4 mb-6">
              <h3 class="text-lookerheading text-center font-bold text-4xl md:text-[40px] leading-normal pb-2">
                <span class="relative after:absolute after:left-0 after:bottom-[-5px] after:bg-[#07A9F9] after:h-[9px] after:w-20 after:rounded-[5px]">
                  Here's </span>What you can expect from our Looker BI services:
              </h3>
            </div>
            <br /> <br />
            <div class="flex flex-wrap justify-around gap-10">
              <div class="explore-card max-w-sm z-10 text-center flex bg-white rounded-md border border-solid border-heading">
                <div class="p-6 text-start">
                  <div class="text-center flex items-center mb-5">
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Looker_BI_services(1).logo.png"
                      alt="logo"
                    />
                  </div>
                  <a href="#">
                    <h5 class="text-lookerheading text-xl leading-none font-semibold mt-1.5 mb-14">
                      Customized Dashboards and Reports
                    </h5>
                  </a>
                  <p class="mb-7 text-[#202020] text-base leading-none font-medium">
                    Our expert team designs tailored dashboards and reports that
                    deliver a clear and comprehensive overview of your data,
                    tailored to your specific needs. Whether you require
                    high-level summaries or in-depth insights, we've got you
                    covered.
                  </p>
                  {/* btn cursor-pointer w-44 bg-lookerheading hover:bg-sky-800 transition duration-200 delay-75 p-4 rounded-[5px] shadow-lg text-white text-lg font-semibold */}
                  <Link href="/contact?id=looker-bi">
                    <button class="butn explore-btn">Explore Now</button>
                  </Link>
                </div>
              </div>

              <div class="explore-card max-w-sm z-10 text-center flex bg-white rounded-md border border-solid border-heading">
                <div class="p-6 text-start">
                  <div class="text-center flex items-center mb-5">
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Looker_BI_services(2).logo.png"
                      alt="logo"
                    />
                  </div>
                  <a href="#">
                    <h5 class="text-lookerheading text-xl leading-none font-semibold mt-1.5 mb-12">
                      Streamline Data Collection & Analysis with Seamless
                      Integration
                    </h5>
                  </a>
                  <p class="mb-20 text-[#202020] text-base leading-none font-medium">
                    We seamlessly integrate Looker with your existing marketing
                    platforms, simplifying data collection and analysis.
                  </p>
                  {/* btn cursor-pointer w-44 bg-lookerheading hover:bg-sky-800 transition duration-200 delay-75 p-4 rounded-[5px] shadow-lg text-white text-lg font-semibold */}
                  <Link href="/contact?id=looker-bi">
                    <button class="butn explore-btn">Explore Now</button>
                  </Link>
                </div>
              </div>

              <div class="explore-card max-w-sm z-10 text-center flex bg-white rounded-md border border-solid border-heading">
                <div class="p-6 text-start">
                  <div class="text-center flex items-center mb-5">
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Looker_BI_services(3).logo.png"
                      alt="logo"
                    />
                  </div>
                  <a href="#">
                    <h5 class="text-lookerheading text-xl leading-none font-semibold mt-1.5 mb-12">
                      Make Informed Decisions with Data Modeling Expertise
                    </h5>
                  </a>
                  <p class="mb-8 text-[#202020] text-base leading-none font-medium">
                    Our data modeling services transform raw data into
                    meaningful insights. We help you make informed decisions
                    based on a solid foundation of data analytics, ensuring you
                    have the right information to make strategic choices.
                  </p>
                  {/* btn cursor-pointer w-44 bg-lookerheading hover:bg-sky-800 transition duration-200 delay-75 p-4 rounded-[5px] shadow-lg text-white text-lg font-semibold */}
                  <Link href="/contact?id=looker-bi">
                    <button class="butn mt-5 explore-btn">Explore Now</button>
                  </Link>
                </div>
              </div>

              <div class="explore-card max-w-sm z-10 text-center flex bg-white rounded-md border border-solid border-heading">
                <div class="p-6 text-start">
                  <div class="text-center flex items-center mb-5">
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Looker_BI_services(4).logo.png"
                      alt="logo"
                    />
                  </div>
                  <a href="#">
                    <h5 class="text-lookerheading text-xl leading-none font-semibold mt-1.5 mb-12">
                      Actionable Insights with Dashboard Embedding Services
                    </h5>
                  </a>
                  <p class="mb-7 text-[#202020] text-base leading-none font-medium">
                    We make sure your data insights are not just accessible but
                    also actionable. Our dashboard embedding services ensure
                    that you can readily share and collaborate on your data
                    insights, empowering your team to make informed decisions
                    based on real-time data.
                  </p>
                  {/* btn cursor-pointer w-44 bg-lookerheading hover:bg-sky-800 transition duration-200 delay-75 p-4 rounded-[5px] shadow-lg text-white text-lg font-semibold */}
                  <Link href="/contact?id=looker-bi">
                    <button class="butn explore-btn">Explore Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white relative">
          <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 md:pb-16 pb-8">
            <div class="flex items-center space-x-4 py-4 mb-6">
              <h2 class="text-lookerheading text-center font-bold text-4xl md:text-[40px] leading-normal pb-2">
                <span class="relative after:absolute after:left-0 after:bottom-[-5px] after:bg-[#07A9F9] after:h-[9px] after:w-20 after:rounded-[5px]">
                  Why</span> Choose AnalyticsLiv as Your Looker BI Partner?
              </h2>
            </div>

            <div>
              <Slider {...settings}>
                <div class="max-w-sm z-10 text-center flex bg-lookersection  rounded-md border border-solid border-heading w-[302px]">
                  <div class="p-6 text-start h-80">
                    <div class="text-center flex items-center">
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/static/Looker_BI_partner(1).logo.png"
                        alt="logo"
                      />
                    </div>
                    <br />
                    <a href="#">
                      <h5 class="text-lookerheading text-xl leading-none font-semibold mt-1.5 mb-4">
                        Unparalleled Expertise
                      </h5>
                    </a>
                    <br />
                    <p class="mb-3 text-[#202020] text-base leading-none font-medium">
                      Our team of experienced data analysts and Looker
                      specialists excel in turning raw data into actionable
                      insights. With us, you're in the hands of professionals
                      who understand the intricacies of data analysis.
                    </p>
                  </div>
                </div>

                <div class="max-w-sm z-10 text-center flex bg-lookersection  rounded-md border border-solid border-heading mr-8">
                  <div class="p-6 text-start h-80">
                    <div class="text-center flex items-center">
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/static/Looker_BI_partner(2).logo.png"
                        alt="logo"
                      />
                    </div>
                    <br />
                    <a href="#">
                      <h5 class="text-lookerheading text-xl leading-none font-semibold mt-1.5 mb-4">
                        Customized Solutions
                      </h5>
                    </a>
                    <br />
                    <p class="mb-3 text-[#202020] text-base leading-none font-medium">
                      We tailor Looker dashboards and data analysis to meet your
                      specific needs and goals. Our solutions are not
                      one-size-fits-all; they're designed to fit your business
                      perfectly.
                    </p>
                  </div>
                </div>

                <div class="max-w-sm z-10 text-center flex bg-lookersection  rounded-md border border-solid border-heading mr-8">
                  <div class="p-6 text-start h-80">
                    <div class="text-center flex items-center">
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/static/Looker_BI_partner(3).logo.png"
                        alt="logo"
                      />
                    </div>
                    <br />
                    <a href="#">
                      <h5 class="text-lookerheading text-xl leading-none font-semibold mt-1.5 mb-4">
                        Strategic Guidance for Growth and Efficiency
                      </h5>
                    </a>
                    <p class="mb-3 text-[#202020] text-base leading-none font-medium">
                      Beyond just generating reports, we provide strategic
                      guidance to help you make data-driven decisions that drive
                      growth and efficiency. We're not just your service
                      provider; we're your data partner.
                    </p>
                  </div>
                </div>

                <div class="max-w-sm z-10 text-center flex bg-lookersection  rounded-md border border-solid border-heading mr-8">
                  <div class="p-6 text-start h-80">
                    <div class="text-center flex items-center">
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/static/Looker_BI_partner(4).logo.png"
                        alt="logo"
                      />
                    </div>
                    <br />
                    <a href="#">
                      <h5 class="text-lookerheading text-xl leading-none font-semibold mt-1.5 mb-4">
                        Continuous Support for Your Evolving Needs
                      </h5>
                    </a>
                    <p class="mb-3 text-[#202020] text-base leading-none font-medium">
                      We offer ongoing support, ensuring that your Looker
                      dashboards are always up-to-date and optimized for your
                      evolving needs. Your success is our priority, and we're
                      here to assist you every step of the way.
                    </p>
                  </div>
                </div>

                <div class="max-w-sm z-10 text-center flex bg-lookersection  rounded-md border border-solid border-heading mr-8">
                  <div class="p-6 text-start h-80">
                    <div class="text-center flex items-center">
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/static/Looker_BI_partner(5).logo.png"
                        alt="logo"
                      />
                    </div>
                    <br />
                    <a href="#">
                      <h5 class="text-lookerheading text-xl leading-none font-semibold mt-1.5 mb-4">
                        Proven Track Record of Success
                      </h5>
                    </a>
                    <p class="mb-3 text-[#202020] text-base leading-none font-medium">
                      Our portfolio showcases successful collaborations with a
                      wide range of businesses, demonstrating our ability to
                      deliver results. We have a track record of helping
                      businesses like yours thrive.
                    </p>
                  </div>
                </div>

                <div class="max-w-sm z-10 text-center flex bg-lookersection  rounded-md border border-solid border-heading mr-8">
                  <div class="p-6 text-start h-80">
                    <div class="text-center flex items-center">
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/static/Looker_BI_partner(6).logo.png"
                        alt="logo"
                      />
                    </div>
                    <br />
                    <a href="#">
                      <h5 class="text-lookerheading text-xl leading-none font-semibold mt-1.5 mb-4">
                        Data Security You Can Trust
                      </h5>
                    </a>
                    <br />
                    <p class="mb-3 text-[#202020] text-base leading-none font-medium">
                      We prioritize data security and ensure that your sensitive
                      information remains confidential and protected. With us,
                      your data is in safe hands.
                    </p>
                  </div>
                </div>

                <div class="max-w-sm z-10 text-center flex bg-lookersection  rounded-md border border-solid border-heading mr-8">
                  <div class="p-6 text-start h-80">
                    <div class="text-center flex items-center">
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/static/Looker_BI_partner(7).logo.png"
                        alt="logo"
                      />
                    </div>
                    <br />
                    <a href="#">
                      <h5 class="text-lookerheading text-xl leading-none font-semibold mt-1.5 mb-4">
                        Scalability for Future Growth
                      </h5>
                    </a>
                    <br />
                    <p class="mb-3 text-[#202020] text-base leading-none font-medium">
                      As your business grows, our Looker solutions can scale
                      with you, accommodating increased data volumes and
                      complexity. You won't outgrow our services; we grow with
                      you.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>

        <section>
          <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
            <div class="text-left">
              <h2 class="text-lookerheading font-bold text-4xl md:text-[40px] leading-normal pb-5">
                Embark on Your Data-Driven Journey to Success with AnalyticsLiv
              </h2>
              <p class="text-[#202020] text-base leading-none font-medium">
                Choose AnalyticsLiv as your partner for Looker dashboards and
                data analysis, and embark on a data-driven journey towards
                success. We're here to help you transform your data into a
                powerful engine for growth and efficiency.
              </p>
              <br /> <br />
              <h3 class="text-lookerheading text-3xl font-medium">
                Ready to Transform Your Data?
              </h3>
              <br /> <br />
              <Link href="/contact?id=looker-bi">
                {/* bg-lookerheading btn cursor-pointer hover:bg-sky-800 transition duration-200 delay-75 rounded-[5px] shadow-lg text-white text-lg font-semibold py-[15px] px-[50px] hover:scale-110 */}
                <button
                  class="butn
                 "
                >
                  Contact Us Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}

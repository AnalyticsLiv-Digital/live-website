import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import Link from "next/link";


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
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };

        return (
            <>
                <Head>
                    <title>AnalyticsLiv - Data Reporting and Analysis</title>
                    <meta name="description" content="Experts in GA4, DV360, Google Ads, Meta Ads, Microsoft Ads" />
                    <link rel="canonical" href="https://www.analyticsliv.com/services/data-reporting-analysis"></link>
                </Head>
                <section>
                    <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
                        <div>

                        </div>
                        <div class="grid lg:grid-cols-2 gap-10">
                            <div class="text-center sm:text-left flex flex-col justify-center">
                                <h2 class="text-analyticsheading text-[40px] font-bold inline leading-normal">
                                    <span
                                        class="relative after:absolute after:left-0 after:bottom-[-5px] after:bg-[#07A9F9] after:h-[9px] after:w-20 after:rounded-[5px]">
                                        Data </span> Reporting & Analysis
                                </h2> <br /> <br />
                                <p class="text-black text-base font-medium">At AnalyticsLiv, we're passionate about transforming
                                    your data into actionable insights using various reporting tool like Looker Studio, PowerBI and
                                    others
                                </p> <br />
                                <Link href="/contact?id=data-reporting"><button
                                    class=" bg-analyticsheading btn cursor-pointer hover:bg-sky-800 transition duration-200 delay-75 rounded-[5px] shadow-lg text-white text-lg font-semibold py-[15px] px-[50px] hover:scale-110">Get
                                    in Touch</button></Link>
                            </div>
                            <div class="right flex lg:justify-end">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/static/Data_Reporting_img.png" alt="Data_Reporting_img" />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-analyticssection relative">

                    <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 md:pb-16 pb-8">
                        <div class="flex items-center space-x-4 py-4 mb-6">
                            <h2 class="text-analyticsheading text-[40px] font-bold inline">
                                <span
                                    class="relative after:absolute after:left-0 after:bottom-0 after:bg-[#07A9F9] after:h-[9px] after:w-20 after:rounded-2xl">
                                    Here's </span> why you should partner with us:
                            </h2> <br /> <br />
                        </div>



                        <div className="flex flex-col gap-3">
                            <Slider {...settings}>
                                <div class="ml-1 max-w-[22rem]  z-10 text-center flex bg-white rounded-md border border-solid border-analyticsheading">

                                    <div class="p-6 text-start h-80">
                                        <div class="text-center flex items-center"><img
                                            src="https://storage.googleapis.com/website-bucket-uploads/static/data-reporting(1).logo.png" alt="logo" />
                                        </div> <br />
                                        <a href="#">
                                            <h5
                                                class="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                                                Unparalleled Expertise</h5>
                                        </a>
                                        <p class="mb-3 text-[#202020] text-base leading-none font-medium">Our team of
                                            experienced data analysts and Looker Studio specialists possesses
                                            in-depth knowledge to expertly handle your data and deliver meaningful
                                            insights.</p>
                                    </div>
                                </div>

                                <div
                                    class="ml-1 max-w-[22rem] z-10 text-center flex bg-white rounded-md border border-solid border-analyticsheading">
                                    <div class="p-6 text-start h-80">
                                        <div class="text-center flex items-center"><img
                                            src="https://storage.googleapis.com/website-bucket-uploads/static/data-reporting(2).logo.png" alt="logo" /></div>
                                        <br />
                                        <a href="#">
                                            <h5
                                                class="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                                                Customized Solutions</h5>
                                        </a>
                                        <p class="mb-3 text-[#202020] text-base leading-none font-medium">We craft
                                            tailored Looker dashboards that perfectly align with your unique
                                            business needs and objectives, providing a holistic view of your data.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    class="ml-1 max-w-[22rem] z-10 text-center flex bg-white rounded-md border border-solid border-analyticsheading">
                                    <div class="p-6 text-start h-80">
                                        <div class="text-center flex items-center"><img
                                            src="https://storage.googleapis.com/website-bucket-uploads/static/data-reporting(3).logo.png" alt="logo" />
                                        </div> <br />
                                        <a href="#">
                                            <h5
                                                class="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                                                Continuous Support</h5>
                                        </a>
                                        <p class="mb-3 text-[#202020] text-base leading-none font-medium">We ensure
                                            your Looker dashboards remain up-to-date and aligned with your evolving
                                            business requirements.</p>
                                    </div>
                                </div>

                                <div
                                    class="ml-1 max-w-[22rem] z-10 text-center flex bg-white rounded-md border border-solid border-analyticsheading">
                                    <div class="p-6 text-start h-80">
                                        <div class="text-center flex items-center"><img
                                            src="https://storage.googleapis.com/website-bucket-uploads/static/data-reporting(4).logo.png" alt="logo" />
                                        </div>
                                        <br />
                                        <a href="#">
                                            <h5
                                                class="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                                                Proven Track Record</h5>
                                        </a>
                                        <p class="mb-3 text-[#202020] text-base leading-none font-medium">We have a
                                            history of successful collaborations with diverse businesses,
                                            consistently delivering exceptional data insights.</p>
                                    </div>
                                </div>

                                <div
                                    class="ml-1 max-w-[22rem] z-10 text-center flex bg-white rounded-md border border-solid border-analyticsheading">
                                    <div class="p-6 text-start h-80">
                                        <div class="text-center flex items-center"><img
                                            src="https://storage.googleapis.com/website-bucket-uploads/static/data-reporting(5).logo.png" alt="logo" />
                                        </div>
                                        <br />
                                        <a href="#">
                                            <h5
                                                class="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                                                Data Security</h5>
                                        </a>
                                        <p class="mb-3 text-[#202020] text-base leading-none font-medium">Data security
                                            is our top priority. We employ stringent measures to safeguard your
                                            sensitive information.</p>
                                    </div>
                                </div>

                                <div
                                    class=" ml-1 max-w-[22rem] z-10 text-center flex bg-white rounded-md border border-solid border-analyticsheading">
                                    <div class="p-6 text-start h-80">
                                        <div class="text-center flex items-center"><img
                                            src="https://storage.googleapis.com/website-bucket-uploads/static/data-reporting(6).logo.png" alt="logo" />
                                        </div>
                                        <br />
                                        <a href="#">
                                            <h5
                                                class="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                                                Scalability</h5>
                                        </a>
                                        <p class="mb-3 text-[#202020] text-base leading-none font-medium">Our solutions
                                            seamlessly adapt to increasing data volumes and complexity, ensuring
                                            your analytics capabilities remain robust.</p>
                                    </div>
                                </div>
                            </Slider>


                        </div>
                    </div>
                </section>
                <section>
                    <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
                        <div class="flex items-center space-x-4 py-4 mb-6">
                            <h2 class="text-analyticsheading text-center font-bold text-4xl md:text-[40px] leading-normal pb-2"> <span
                                class="relative after:absolute after:left-0 after:bottom-[-5px] after:bg-[#07A9F9] after:h-[9px] after:w-20 after:rounded-[5px]">Data
                            </span> Reporting & Analysis Services :</h2>
                        </div> <br /> <br />
                        <div class="flex flex-wrap justify-around gap-10">

                            <div
                                class="max-w-sm z-10 text-center flex bg-analyticssection rounded-md border border-solid border-analyticsheading">
                                <div class="p-6 text-start">
                                    <div class="text-center flex items-center mb-5"><img
                                        src="https://storage.googleapis.com/website-bucket-uploads/static/Analysis_services.logo.png" alt="logo" />
                                    </div>
                                    <a href="#">
                                        <h5 class="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-7">Monthly,
                                            Quarterly, and
                                            Annual Analysis</h5>
                                    </a>
                                    <p class="mb-8 text-[#202020] text-base leading-none font-medium">We provide comprehensive data
                                        insights across various time periods to track trends and identify patterns.</p>
                                    <Link href="/contact?id=data-reporting"><button
                                        class=" bg-analyticsheading btn cursor-pointer hover:bg-sky-800 transition duration-200 delay-75 py-[15px] px-[50px] rounded-[5px] shadow-lg text-white text-lg font-semibold">Explore
                                        Now</button></Link>
                                </div>
                            </div>

                            <div
                                class="max-w-sm z-10 text-center flex bg-analyticssection rounded-md border border-solid border-analyticsheading">
                                <div class="p-6 text-start">
                                    <div class="text-center flex items-center mb-5"><img
                                        src="https://storage.googleapis.com/website-bucket-uploads/static/Analysis_services(1).logo.png" alt="logo" />
                                    </div>
                                    <a href="#">
                                        <h5 class="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-12">Campaign
                                            Optimization</h5>
                                    </a>
                                    <p class="mb-8 text-[#202020] text-base leading-none font-medium">We optimize your marketing
                                        campaigns based on data-driven insights, maximizing their effectiveness and ROI.</p>
                                    <Link href="/contact?id=data-reporting"><button
                                        class="btn cursor-pointer bg-analyticsheading hover:bg-sky-800 transition duration-200 delay-75 py-[15px] px-[50px] rounded-[5px] shadow-lg text-white text-lg font-semibold">Explore
                                        Now</button></Link>
                                </div>
                            </div>

                            <div
                                class="max-w-sm z-10 text-center flex bg-analyticssection rounded-md border border-solid border-analyticsheading">
                                <div class="p-6 text-start">
                                    <div class="text-center flex items-center mb-5"><img
                                        src="https://storage.googleapis.com/website-bucket-uploads/static/Analysis_services(2).logo.png" alt="logo" />
                                    </div>
                                    <a href="#">
                                        <h5 class="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-12">A/B Testing
                                        </h5>
                                    </a>
                                    <p class="mb-8 text-[#202020] text-base leading-none font-medium">We conduct A/B tests to evaluate
                                        different strategies and optimize your website or app for better performance.</p>
                                    <Link href="/contact?id=data-reporting"><button
                                        class="btn cursor-pointer bg-analyticsheading hover:bg-sky-800 transition duration-200 delay-75 py-[15px] px-[50px] rounded-[5px] shadow-lg text-white text-lg font-semibold">Explore
                                        Now</button></Link>
                                </div>
                            </div>

                            <div
                                class="max-w-sm z-10 text-center flex bg-analyticssection rounded-md border border-solid border-analyticsheading">
                                <div class="p-6 text-start">
                                    <div class="text-center flex items-center mb-5"><img
                                        src="https://storage.googleapis.com/website-bucket-uploads/static/Analysis_services(3).logo.png" alt="logo" />
                                    </div>
                                    <a href="#">
                                        <h5 class="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-12">Customer
                                            Segmentation</h5>
                                    </a>
                                    <p class="mb-5 text-[#202020] text-base leading-none font-medium">We segment your customer base
                                        into distinct groups based on shared characteristics, enabling targeted marketing campaigns
                                        and personalized customer experiences.</p>
                                    <Link href="/contact?id=data-reporting"><button
                                        class="btn cursor-pointer bg-analyticsheading hover:bg-sky-800 transition duration-200 delay-75 py-[15px] px-[50px] rounded-[5px] shadow-lg text-white text-lg font-semibold">Explore
                                        Now</button></Link>
                                </div>
                            </div>

                            <div
                                class="max-w-sm z-10 text-center flex bg-analyticssection rounded-md border border-solid border-analyticsheading">
                                <div class="p-6 text-start">
                                    <div class="text-center flex items-center mb-5"><img
                                        src="https://storage.googleapis.com/website-bucket-uploads/static/Analysis_services(4).logo.png" alt="logo" />
                                    </div>
                                    <a href="#">
                                        <h5 class="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-12">Forecasting and Predictive
                                            Analytics</h5>
                                    </a>
                                    <p class="mb-5 text-[#202020] text-base leading-none font-medium">We leverage advanced predictive modeling to forecast future trends and anticipate customer behavior, allowing you to make proactive decisions.</p>
                                    <Link href="/contact?id=data-reporting"><button
                                        class="btn cursor-pointer bg-analyticsheading hover:bg-sky-800 transition duration-200 delay-75 py-[15px] px-[50px] rounded-[5px] shadow-lg text-white text-lg font-semibold">Explore
                                        Now</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
                        <div class="text-left">
                            <h2 class="text-analyticsheading font-bold text-4xl md:text-[40px] leading-normal pb-2">Ready to Empower Your Analytics?</h2> <br /> <br />
                            <p class="text-analyticsheading text-2xl md:text-3xl font-medium">Partner with AnalyticsLiv and transform your data into a powerful engine for growth and success. Contact us today to embark on your data-driven journey.
                            </p> <br /> <br />
                            <Link href="/contact?id=data-reporting"><button
                                class="btn cursor-pointer bg-analyticsheading hover:bg-sky-800 transition duration-200 delay-75 rounded-[5px] shadow-lg text-white text-lg font-semibold py-[15px] px-[50px] hover:scale-110">Contact Us Now</button></Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Scroll from 'react-scroll';

const { Element: ScrollElement } = Scroll;





const index = () => {
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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
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
                <title>AnalyticsLiv - Analytics Services Offered</title>
                <meta name="description" content="Experts in GA4, DV360, Google Ads, Meta Ads, Microsoft Ads" />
                <link rel="canonical" href="https://analyticsliv.com/services/analytics"></link>
            </Head>
            <ScrollElement
                id="web-app-measurement"
                name="web-app-measurement"
            ></ScrollElement>
            <section>
                <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">

                    <div class="grid lg:grid-cols-2 gap-10">
                        <div class="text-left">
                            <h2 class="text-analyticsheading text-[40px] font-bold inline">
                                <span
                                    class="relative after:absolute after:left-0 after:bottom-0 after:bg-[#07A9F9] after:h-[9px] after:w-20 after:rounded-2xl">
                                    Web </span> and App Measurement
                            </h2> <br /> <br />
                            <h3 class="text-analyticsheading text-[30px] font-medium">Decode Your Users with Web and App Analytics</h3>
                            <br />
                            <p class="text-analyticsheading text-base font-medium">AnalyticsLiv goes beyond mere data; we deliver
                                actionable insights that fuel business growth. Our results-oriented approach seamlessly
                                streamlines
                                customer acquisition, activation, and retention across every stage of the customer journey.</p>
                            <br />
                            <Link href="/contact?id=analytics"><button
                                class="butn">Get
                                in Touch</button></Link>
                        </div>
                        <div class="right flex lg:justify-end">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Web_service_img.png" alt="Web_service_img" />
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
                                How </span> we can assist you
                        </h2> <br /> <br />
                    </div>
                    <p class="text-analyticsheading text-[30px] font-medium mt-1.5">Our streamlined process activates your data in just a
                        few weeks:</p><br /><br />


                    <div>
                        <Slider {...settings}>
                            <div
                                className="max-w-sm h-90 z-10 text-center flex bg-white rounded-md border border-solid border-analyticsheading">
                                <div className="p-6 text-start">
                                    <div className="text-center flex items-center"><img
                                        src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Needs.logo.png" alt="Needs.logo" />
                                    </div> <br />
                                    <a href="#">
                                        <h5 className="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                                            Understanding Your Needs</h5>
                                    </a> <br />
                                    <p className="mb-3 text-[#202020] text-base leading-none font-medium">Gain a
                                        deep
                                        understanding of your business and objectives.</p>
                                </div>
                            </div>

                            <div
                                className="max-w-sm h-90 z-10 text-center flex bg-white rounded-md border border-solid border-analyticsheading">
                                <div className="p-6 text-start">
                                    <div className="text-center flex items-center"><img
                                        src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_key-data.logo.png"
                                        alt="key-data.logo" /></div>
                                    <br />
                                    <a href="#">
                                        <h5 className="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                                            Identifying Key
                                            Data
                                            Points</h5>
                                    </a> <br />
                                    <p className="mb-3 text-[#202020] text-base leading-none font-medium">Pinpoint
                                        essential data
                                        for effective insights.</p>
                                </div>
                            </div>

                            <div
                                className="max-w-sm h-90 z-10 text-center flex bg-white rounded-md border border-solid border-analyticsheading">
                                <div className="p-6 text-start">
                                    <div className="text-center flex items-center"><img
                                        src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_collections.logo.png"
                                        alt="collections.logo" />
                                    </div> <br />
                                    <a href="#">
                                        <h5 className="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                                            Collecting Data
                                            Points</h5>
                                    </a> <br />
                                    <p className="mb-3 text-[#202020] text-base leading-none font-medium">Centralize
                                        your data for
                                        immediate action.</p>
                                </div>
                            </div>

                            <div
                                className="max-w-sm h-90 z-10 text-center flex bg-white rounded-md border border-solid border-analyticsheading">
                                <div className="p-6 text-start">
                                    <div className="text-center flex items-center"><img
                                        src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_integrated.logo.png"
                                        alt="integrated.logo" />
                                    </div>
                                    <br />
                                    <a href="#">
                                        <h5 className="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-5">
                                            Building
                                            Integrated
                                            Analytics
                                            Platforms</h5>
                                    </a>
                                    <p className="mb-3 text-[#202020] text-base leading-none font-medium">Seamlessly
                                        integrate data
                                        across platforms.</p>
                                </div>
                            </div>

                            <div
                                className="max-w-sm h-90 z-10 text-center flex bg-white rounded-md border border-solid border-analyticsheading">
                                <div className="p-6 text-start">
                                    <div className="text-center flex items-center"><img
                                        src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Effortless.logo.png"
                                        alt="Effortless.logo" />
                                    </div>
                                    <br />
                                    <a href="#">
                                        <h5 className="text-analyticsheading text-xl leading-none font-semibold mt-1.5 mb-4">
                                            Effortless Access</h5>
                                    </a> <br />
                                    <p className="mb-3 text-[#202020] text-base leading-none font-medium">Access
                                        your
                                        data and derive actionable insights promptly.</p>
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
            <section>
                <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
                    <div class="text-left">
                        <h2 class="text-analyticsheading text-[40px] font-bold inline">
                            <span
                                class="relative after:absolute after:left-0 after:bottom-[-5px] after:bg-[#07A9F9] after:h-[9px] after:w-20 after:rounded-[5px]">
                                Explore </span> Our Web & App Measurement Service :
                        </h2> <br />
                        <h3 class="text-analyticsheading text-[30px] font-medium">Basic Analytics Services - For essential insights</h3>
                    </div> <br />
                    <div class="relative text-center flex flex-col items-center justify-center mt-4 gap-10">
                        <div class="max-[1023px]:hidden">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/image circle(1).png" alt="" />
                        </div>
                        <div class="lg:hidden">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/image circle.png" alt="" />
                        </div>
                    </div> <br />
                    <div class="text-center pt-5">
                        <Link href="/contact?id=measurement"><button
                            class="butn">Explore
                            Basic
                            Services</button></Link>
                    </div>
                </div>

            </section>

            <section class="bg-analyticssection">
                <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
                    <div class="text-left">
                        <h3 class="text-analyticsheading text-[30px] font-medium">Advanced Analytics Services - For profound insights
                        </h3>
                    </div> <br />
                    <div class="relative text-center flex items-center justify-center mt-4">
                        <div class="max-[1023px]:hidden">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/image (2) circle.png" alt="" />
                        </div> <br />
                        <div class="lg:hidden">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/image (2) circle(1).png" alt="" />
                        </div>
                    </div> <br />
                    <div class="text-center pt-5">
                        <Link href="/contact?id=advance-analytics"><button
                            class="butn">Explore
                            Advance
                            Services</button></Link>
                    </div>
                </div>
            </section>

            <ScrollElement
                id="audit-and-health-check"
                name="audit-and-health-check"
            ></ScrollElement>
            <section class="analyticsaudit">
                <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
                    <div class="text-left">
                        <h2 class="text-analyticsheading text-[40px] font-semibold inline">Audit and Health Check</h2> <br /> <br />
                        <h3 class="text-black text-[30px] font-medium">Verify and Audit Your GA4 Configuration</h3>
                        <br />
                    </div> <br /> <br />

                    <div class="pl-12">
                        <ul>
                            <li class="bg-no-repeat bg-0.2em bg-left bg-center bg-contain pl-10 leading-6">
                                <span class="text-analyticsheading sm:text-[30px] text-2xl font-medium">Website Implementation
                                    Audit</span>
                            </li>
                        </ul> <br />
                        <div class="flex flex-wrap justify-around gap-10">
                            <Link href="/contact?id=ecommerce-audit"><button
                                class="butn">E-commerce
                                Audit</button></Link>
                            <Link href="/contact?id=pixel-audit"><button
                                class="butn">Pixel
                                Audit</button></Link>
                            <Link href="/contact?id=events-audit"><button
                                class="butn">Events
                                Audit</button></Link>
                        </div>
                    </div> <br /> <br />

                    <div class="pl-12">
                        <ul>
                            <li class="bg-no-repeat bg-0.2em bg-left bg-center bg-contain pl-10 leading-6">
                                <span class="text-analyticsheading sm:text-[30px] text-2xl font-medium">Health Check</span>
                            </li>
                        </ul> <br />
                        <div class="flex flex-wrap justify-around gap-10">
                            <Link href="/contact?id=revenue-discrepancy"><button
                                class="butn">Revenue/
                                conversion <br />
                                discrepancies</button></Link>
                            <Link href="/contact?id=gtm-health-check"><button
                                class="butn">Tag
                                Manager <br /> Health
                                Check</button></Link>
                            <Link href="/contact?id=firebase-healthcheck"><button
                                class="butn">GA4,
                                GTM, Firebase <br />Health Check</button></Link>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}

export default index
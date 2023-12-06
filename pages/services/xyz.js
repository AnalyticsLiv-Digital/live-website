import React from 'react'
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Scroll from 'react-scroll';
import ScrollProgress from '../../components/ScrollProgress';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Element: ScrollElement } = Scroll;


const index= () => {
    useEffect(() => {
        AOS.init();
      }, []);
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
      <title>AnalyticsLiv - Services Offered</title>
      <meta name="description" content="Experts in GA4, DV360, Google Ads, Meta Ads, Microsoft Ads"/>
      <link rel="canonical"href="https://www.analyticsliv.com/services"></link>
    </Head>
    <ScrollProgress/>
    <div className='overflow-x-hidden'>
        <section className="relative">
    <div className="overflow-hidden pb-20">
        <img src="https://storage.googleapis.com/website-bucket-uploads/static/services.png" className="w-full -rotate-6"/>
    </div>
    <div className='relative'>
    
    <svg xmlns="http://www.w3.org/2000/svg" className='absolute w-28 lg:w-52 lg:right-20 right-6 lg:-top-40 -top-28' preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
        <path fill='#38bdf8 ' d="M7.932 1.248a.5.5 0 0 0-.864 0l-7 12A.5.5 0 0 0 .5 14h14a.5.5 0 0 0 .432-.752l-7-12Z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className='absolute w-28 lg:w-52 lg:right-12 right-2 lg:-top-40 -top-28 rotate-45 ' preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
        <path fill="none" stroke="#1e293b" strokeLinejoin="round" d="m7.5 1.5l-7 12h14l-7-12Z"/>
    </svg>
    </div>
    <h1 className='absolute lg:right-48 right-16 lg:-bottom-4 bottom-2 tracking-wider text-cyan-900 text-3xl lg:text-4xl uppercase font-semibold text-right pr-12'>Services</h1>
</section>

<section>
    <div className="py-2 md:py-10 my-4 lg:mx-12">
       <div className="mx-8 lg:w-4/5">
       <ScrollElement
        id="data-collection"
        name="data-collection"
      ></ScrollElement>
        <div data-aos="fade-right" data-aos-once="true">
            <h2 className="text-2xl text-gray-800 uppercase">
                Data Collection
            </h2>
            <div className="bg-slate-800 h-1 my-4"></div>
           <div className="lg:flex">
            <p className="text-gray-600 lg:w-2/3">
                Based on the principal of “Begin with the end in Mind”,
                create measurement frameworks, data architectures to help
                businesses achieve comprehensive collection of data points
                for gaining access to objective information about the
                Business KPIs. Track your customer’s movement and actions
                to understand user interaction and experiences, and to
                attribute conversions accurately.
            </p>
            <img className="lg:w-1/3" src="https://storage.googleapis.com/website-bucket-uploads/static/services1.jpg"/>
            </div>
        </div>
        <div className="w-full" data-aos="fade-left" data-aos-once="true">
            <h2 className="text-xl text-gray-800 uppercase">
                
                SERVICES TO OFFER
            </h2>
            <div className="lg:flex uppercase">
            <ul className="space-y-2 px-2 lg:px-8 pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Implementation Audit & Recommendation
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Google Tag Manager Clean Up
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Enhanced eCommerce Implementation
                </li>
                
            </ul>
            <ul className="space-y-2 px-2 lg:px-8 pt-2 lg:pt-10 lg:w-1/2">
                
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Cross-Domain Tracking
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Goals & Events Tracking
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Integrating online & offline data
                </li>
            </ul>
        </div>
        </div>
       </div>
       
    </div>
</section>

<section>
    <div className="py-10 my-4 lg:mx-12 lg:text-right">
       <div className="mx-8 lg:w-4/5 lg:ml-48 "> 
       <ScrollElement
        id="data-reporting"
        name="data-reporting"
      ></ScrollElement>      
        <div data-aos="fade-right" data-aos-once="true">
            <h2 className="text-2xl text-gray-800 uppercase">
                Data Reporting
            </h2>
            <div className="bg-slate-800 h-1 my-4"></div>
           <div className="lg:flex flex-row-reverse">
            <p className="text-gray-600 lg:w-2/3">
                Measurement Plan implemented helps in reporting the data to various Analytics and Advertising platforms.

                Analytics Platforms: Google Analytics, GA4, Mix Panel, Exponea, Firebase
                
                Advertising Platforms: Facebook, Google Ads, DV360, CM360, SA360, LinkedIn, Snapchat, TikTok, Twitter, Reddit, Verizon, Taboola, Outbrain & more
            </p>
            <img className="lg:w-1/4" src="https://storage.googleapis.com/website-bucket-uploads/static/services2.jpg"/>
            </div>
        </div>
        <div className="w-full text-left" data-aos="fade-left" data-aos-once="true">
            <h2 className="text-xl text-gray-800 uppercase">
                
                SERVICES TO OFFER
            </h2>
            <div className="lg:flex uppercase">
            <ul className="space-y-2 px-2 lg:px-8 pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Google Analytics Configuration
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Enhanced eCommerce Reporting
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Custom Channel Grouping
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Facebook Ads Reporting
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Google Marketing Platform Reporting
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    A/B Testing & Heat map
                </li>
            </ul>
            <ul className="space-y-2 px-2 lg:px-8 pt-2 lg:pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Google Analytics Audit
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Supermetrics & Other Paid Connectors
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Audience Metrics Reports
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Google Ads Reporting
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Google Data Studio Dashboarding
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Campaign Analysis Reports
                </li>
            </ul>
        </div>
        </div>
       </div>
       
    </div>
    
</section>

<section>
    <div className="py-10 my-4 lg:mx-12">
       <div className="mx-8 lg:w-4/5">
       <ScrollElement
        id="insight-generation"
        name="insight-generation"
      ></ScrollElement>
        <div data-aos="fade-right" data-aos-once="true">
            <h2 className="text-2xl text-gray-800 uppercase">
                Insight Generation
            </h2>
            <div className="bg-slate-800 h-1 my-4"></div>
           <div className="lg:flex">
            <p className="text-gray-600 lg:w-2/3">
                Data from multiple sources after being reported, is visualized 
                and analyzed for generating actionable insights.
            </p>
            <img className="lg:w-1/3" src="https://storage.googleapis.com/website-bucket-uploads/static/services3.jpg"/>
            </div>
        </div>
        <div className="w-full" data-aos="fade-left" data-aos-once="true">
            <h2 className="text-xl text-gray-800 uppercase">
                
                SERVICES TO OFFER
            </h2>
            <div className="lg:flex uppercase">
            <ul className="space-y-2 px-2 lg:px-8 pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Cohort Analysis
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Funnel Analytics and Visualization
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    User Journey Analysis
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Creating and managing centralized CDP
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Investigating User Behavior & Affinity
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Shopping Behavior Analysis
                </li>
            </ul>
            <ul className="space-y-2 px-2 lg:px-8 pt-2 lg:pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Feature Attribution Analysis
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Campaign Attribution Analysis
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Recency & Frequency Analysis
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2  inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Dashboarding & creating model using real     time ETL Jobs
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Business ROI Analysis
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Keyword Analysis
                </li>
            </ul>
        </div>
        </div>
       </div>
       
    </div>
</section>

<section>
    <div className="py-10 my-4 lg:mx-12 lg:text-right">
       <div className="mx-8 lg:w-4/5 lg:ml-48 ">   
       <ScrollElement
        id="data-utilization"
        name="data-utilization"
      ></ScrollElement>    
        <div data-aos="fade-right" data-aos-once="true">
            <h2 className="text-2xl text-gray-800 uppercase">
                Data Utilization
            </h2>
            <div className="bg-slate-800 h-1 my-4"></div>
           <div className="lg:flex flex-row-reverse">
            <p className="text-gray-600 lg:w-2/3">
                ML is playing a huge role in generating insights and 
                forecasting the future growth aspects for all businesses.
                We prepare the businesses to enable them into using the capabilities of Google Cloud Platform and its Machine learning capabilities using data from marketing and analytics platforms.
            </p>
            <img className="lg:w-1/3" src="https://storage.googleapis.com/website-bucket-uploads/static/services4.jpg"/>
            </div>
        </div>
        <div className="w-full text-left" data-aos="fade-left" data-aos-once="true">
            <h2 className="text-xl text-gray-800 uppercase">
                
                SERVICES TO OFFER
            </h2>
            <div className="lg:flex uppercase">
            <ul className="space-y-2 px-2 lg:px-8 pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Creating and managing centralized CDP
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Online Offline Data Integration through DWH
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Conversion API (Facebook Ads)
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    CLTV Data Model Creation
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Custom Attribution Model
                </li>
                
            </ul>
            <ul className="list-outside space-y-2 px-2 lg:px-8 pt-2 lg:pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Dashboarding & creating model using real time ETL Jobs
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <span>Offline Conversion Upload Architecture (Google Ads & DV360)</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Lead Conversion Modelling
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Conversion Rate Optimization
                </li>
            </ul>
        </div>
        </div>
       </div>
       
    </div>
</section>

<section>
    <div className="py-10 my-4 lg:mx-12">
       <div className="mx-8 lg:w-4/5">
       <ScrollElement
        id="paid-search-marketing"
        name="paid-search-marketing"
      ></ScrollElement>
        <div data-aos="fade-right" data-aos-once="true">
            <h2 className="text-2xl text-gray-800 uppercase">
                Paid Search Marketing
            </h2>
            <div className="bg-slate-800 h-1 my-4"></div>
           <div className="lg:flex">
            <p className="text-gray-600 lg:w-2/3">
                Paid search marketing is a form of online advertising where you only pay for visitors that click through to your website from a targeted advert or “sponsored” link.
            </p>
            <img className="lg:w-1/3" src="https://storage.googleapis.com/website-bucket-uploads/static/services5.jpg"/>
            </div>
        </div>
        <div className="w-full" data-aos="fade-left" data-aos-once="true">
            <h2 className="text-xl text-gray-800 uppercase">
               
                SERVICES TO OFFER
            </h2>
            <div className="lg:flex uppercase">
            <ul className="space-y-2 px-2 lg:px-8 pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Google Ads & Microsoft Ads Audit
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Campaign Monitoring and Optimization
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Conversion Action Tracking (Online & Offline)
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    PLA Planning & Management
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Search & Shopping Campaign Set Up
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    UTM & Campaign Naming Structure
                </li>
            </ul>
            <ul className="space-y-2 px-2 lg:px-8 pt-2 lg:pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Keyword Research
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Product Integrations
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    RLSA Campaign Set Up
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2  inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Search Ads Reporting Dashboard
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Troubleshooting Data Discrepancy
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    Feed Creation and Management
                </li>
            </ul>
        </div>
        </div>
       </div>
       
    </div>
</section>

<section>
    <div className="py-10 my-4 lg:mx-12 lg:text-right">
       <div className="mx-8 lg:w-4/5 lg:ml-48 "> 
       <ScrollElement
        id="media-planning"
        name="media-planning"
      ></ScrollElement>      
        <div data-aos="fade-right" data-aos-once="true">
            <h2 className="text-2xl text-gray-800 uppercase">
                Media Planning & Buying
            </h2>
            <div className="bg-slate-800 h-1 my-4"></div>
           <div className="lg:flex flex-row-reverse">
            <p className="text-gray-600 lg:w-2/3">
                Media buying is done for online advertising to identify and purchase 
                ad space on channels that are relevant to the target audience at the
                optimal time, for the least amount of money. Platforms: DV360, CM360
                (Ad server), Facebook Ads, YouTube Advertising, LinkedIn Ads, Taboola
                Ads, Outbrain Ads, Verizon Ads, Snapchat Ads, TikTok Ads
            </p>
            <img className="lg:w-1/3" src="https://storage.googleapis.com/website-bucket-uploads/static/services6.jpg"/>
            </div>
        </div>
        <div className="w-full text-left" data-aos="fade-left" data-aos-once="true">
            <h2 className="text-xl text-gray-800 uppercase">
               
                SERVICES TO OFFER
            </h2>
            <div className="lg:flex uppercase">
            <ul className="space-y-4 px-2 lg:px-8 pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <div className="pl-10">Platform & Campaign Audit</div>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <div className="pl-10">Campaign Monitoring and Optimization</div>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <div className="pl-10">Audience & Media Channel Analysis</div>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <div className="pl-10">Media Planning & Buying</div>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <div className="pl-10">One-View Reporting</div>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <div className="pl-10">Dynamic Ads Set Up (DV360)</div>
                </li>
                
            </ul>
            <ul className="list-outside space-y-4 px-2 lg:px-8 pt-4 lg:pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-8 fill-cyan-800 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <div className="pl-10">Conversion / Pixel / Events Configuration</div>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <div className="pl-10">Product Integrations</div>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <div className="pl-10">Targeting Criteria Identification</div>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <div className="pl-10">Troubleshooting Data Discrepancy</div>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-8 fill-cyan-800 mr-2 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <div className="pl-10">UTM & Campaign Naming Structure</div>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-8 fill-cyan-800 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3l-3-8Z"/>
                    </svg>
                    <div className="pl-10">Campaign Trafficking </div>
                </li>
            </ul>
        </div>
        </div>
       </div>
       
    </div>
</section>
</div>
    </>
  )
}

export default index
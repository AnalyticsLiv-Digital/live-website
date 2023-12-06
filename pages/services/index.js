import React from 'react'
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Scroll from 'react-scroll';
import ScrollProgress from '../../components/ScrollProgress';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import Link from 'next/link';


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

  const [activetab, setActivetab] = useState("1");

  return (
    <>
    
    <Head>
      <title>AnalyticsLiv - Services Offered</title>
      <meta name="description" content="Experts in GA4, DV360, Google Ads, Meta Ads, Microsoft Ads"/>
      <link rel="canonical" href="https://www.analyticsliv.com/services"></link>
    </Head>
    <ScrollProgress/>

    <section className="relative">
        <div className="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16 grid grid-cols-1 md:gap-12 lg:gap-20">
            <div className="top-banner text-center md:flex md:items-center md:justify-between">
                <h1 className="text-start text-black sm:text-[40px] text-[33px] font-semibold pb-10">At
                    AnalyticsLiv, <br/>
                    we craft global solutions……</h1>
                <div className="text-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/Hand_service_img.png" alt="Hand_service_img"/>
                </div>
                <div className="absolute hidden md:block sm:top-[41%] md:top-[27%] lg:top-1/3 left-0 inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-24 md:w-40" width="213" height="225"
                        viewBox="0 0 213 225" fill="none">
                        <path
                            d="M-41.7459 103.817C-47.6849 88.485 -77.1186 7.77481 92.0951 1.15802C261.309 -5.45878 209.028 95.1528 187.867 132.382C166.705 169.611 174.474 221.4 123.636 224.253C72.7984 227.107 46.2064 176.864 21.3556 159.53C4.05609 147.622 -23.1619 147.677 -41.7459 103.817Z"
                            fill="#60B8C4" />
                    </svg>
                </div>
            </div> <br/> <br/>
            <div
                className="bottom-banner text-center md:flex md:items-center md:justify-between sm:pb-20 md:pb-[100px] lg:pb-[70px]">
                <div className="text-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/Laptop_service_img.png" alt="laptop_service_img"/>
                </div>
                <h2 className="text-right text-black sm:text-[40px] text-[33px] font-semibold pt-10">… designed to
                    excel in today's <br/> digital-driven landscape</h2>
                <div className="absolute hidden md:block bottom-0 right-0 inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-24 md:w-40" width="263" height="223"
                        viewBox="0 0 263 223" fill="none">
                        <path
                            d="M4.19636 160.152C4.19636 160.152 -20.6305 106.763 50.4623 68.6248C121.555 30.4871 101.026 9.62789 147.511 1.06463C193.996 -7.49862 209.604 37.3276 218.857 58.2543C225.953 74.283 245.201 89.9738 262.527 113.029C277.292 132.689 287.185 197.006 242.773 215.062C198.362 233.117 177.883 213.373 161.5 200.84C145.118 188.308 119.364 172.6 80.2444 188.696C41.1248 204.792 15.7755 185.791 4.19636 160.152Z"
                            fill="#5D8DBC" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
  
    <section className="expertise relative overflow-hidden">
        <div className="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16 relative">
            <div>
                <h2 className=" text-black text-[50px] font-semibold">
                    <span
                        className="relative after:absolute after:left-0 after:bottom-0 after:bg-[#FF7D7D] after:h-[9px] after:w-20 after:rounded-2xl">
                        We </span> are Expert in
                </h2>
            </div> <br/>
       
            <div className="flex max-[1023px]:hidden">
                <div className="p-4">
                    <button onClick={() => setActivetab('1')}
                        className={`${activetab==1 && 'bg-[#30486A] text-white'} ${activetab!=1 && ' text-black hover:text-servicemedia'} tab text-[40px] font-semibold tablink block p-5 rounded-3xl text-start active`}>
                        Media</button>
                    <button onClick={() => setActivetab('2')}
                        className={`${activetab==2 && 'bg-[#6A305D] text-white'} ${activetab!=2 && ' text-black hover:text-serviceanalytics'} tab  text-[40px] font-semibold tablink block p-5 rounded-3xl text-start`}>Analytics</button>
                    <button onClick={() => setActivetab('3')}
                        className={`${activetab==3 && 'bg-[#1B8AAD] text-white'} ${activetab!=3 && ' text-black hover:text-servicesolutions'} tab hidden text-[40px] font-semibold tablink block p-5 rounded-3xl text-start`}>Solutions</button>
                    <button onClick={() => setActivetab('4')}
                        className={`${activetab==4 && 'bg-[#6A3030] text-white'} ${activetab!=4 && ' text-black hover:text-servicetraining'} tab  text-[40px] font-semibold tablink block p-5 rounded-3xl text-start`}>Training
                        and Consultation</button>
                </div>

                <div className="w-3/4 p-4">
                    <div id="tab1" className={`${activetab==1 && 'block'} ${activetab!=1 && 'hidden'} relative tab-content bg-servicemedia p-8 rounded-[40px]`}>
                        <div
                            className="absolute bottom-[calc(100%+1rem)] right-[-5rem] h-44 w-44 bg-transparent border-2 border-servicemedia rounded-full transition-transform ease-in-out duration-500">
                        </div>
                        <div
                            className="absolute right-[-310px] bottom-[-111px] z-[-1] h-64 w-64 bg-servicemedia rounded-[30px] transform rotate-[-10deg] transition-transform ease-in-out duration-500">
                        </div>
                        <h2 className="text-white text-[35px] font-semibold leading-normal">Strengthening Businesses</h2>
                        <p className="text-white text-[16px] font-semibold">Our focus is not limited to targeting.
                            We transform customers into devoted brand advocates</p>
                        <ul className="list-disc text-white text-[16px] font-semibold ml-[18px]">
                            <li><Link className="underline" href="/services/app-marketing">Mobile app marketing</Link></li>
                            <li><Link className="underline" href="/services/lead-generation">Lead generation</Link></li>
                            <li><Link className="underline" href="/services/ecommerce-marketing">Search/E-Commerce Marketing</Link></li>
                            <li><Link className="underline" href="/services/programatic-advertising">Programatic Media Buying</Link></li>
                        </ul>
                    </div>

                    <div id="tab2" className={`${activetab==2 && 'block'} ${activetab!=2 && 'hidden'} relative tab-content bg-serviceanalytics mt-[115px] p-8 rounded-[40px]`}>
                        <div
                            className="absolute bottom-[calc(100%+1rem)] right-[-5rem] h-44 w-44 bg-transparent border-2 border-serviceanalytics rounded-full transition-transform ease-in-out duration-500">
                        </div>
                        <div
                            className="absolute right-[-310px] bottom-[-111px] z-[-1] h-64 w-64 bg-serviceanalytics rounded-[30px] transform rotate-[-10deg] transition-transform ease-in-out duration-500">
                        </div>
                        <h2 className="text-white text-[35px] font-semibold leading-[45px]">Navigating the Digital Landscape
                            with Expertise
                        </h2>
                        <ul className="text-white text-[16px] font-semibold">
                            <li><Link className="underline" href="/services/analytics?id=ga4-implementation">GA4 Implementation</Link></li>
                            <li><Link className="underline" href="/services/analytics?id=audit-and-health-check">Audit and Health Check</Link></li>
                            <li><Link className="underline" href="/services/analytics?id=web-app-measurement">Web and App measurement</Link></li>
                            <li><Link className="underline" href="/services/data-reporting-analysis">Data Reporting & Analysis</Link></li>
                            <li><Link className="underline" href="/services/looker-bi-platform">Looker BI Platform</Link></li>
                        </ul>
                    </div>

                    <div id="tab3" className={`${activetab==3 && 'block'} ${activetab!=3 && 'hidden'} relative tab-content bg-servicesolutions mt-[220px] p-8 rounded-[40px]`}>
                        <div
                            className="absolute bottom-[calc(100%+1rem)] right-[-1rem] h-44 w-44 bg-transparent border-2 border-servicesolutions rounded-full transition-transform ease-in-out duration-500">
                        </div>
                        <div
                            className="absolute right-[-310px] bottom-[-111px] z-[-1] h-64 w-64 bg-servicesolutions rounded-[30px] transform rotate-[-10deg] transition-transform ease-in-out duration-500">
                        </div>
                        <ul className="list-disc text-white text-[26px] font-semibold ml-[18px] leading-normal">
                            <li><a href="">Preserving Historical UA Data</a></li>
                            <li><a href="">GDPR Compliance</a></li>
                            <li><a href="">Data Science Solutions</a></li>
                        </ul>
                    </div>

                    <div id="tab4"
                        className={`${activetab==4 && 'block'} ${activetab!=4 && 'hidden'} relative tab-content bg-servicetraining w3-container city mt-[300px] p-8 rounded-[40px]`}>
                        <div
                            className="absolute bottom-[calc(100%+1rem)] right-[-1rem] h-44 w-44 bg-transparent border-2 border-servicetraining rounded-full transition-transform ease-in-out duration-500">
                        </div>
                        <div
                            className="absolute right-[-310px] bottom-[-111px] z-[-1] h-64 w-64 bg-servicetraining rounded-[30px] transform rotate-[-10deg] transition-transform ease-in-out duration-500">
                        </div>
                        <h2 className="text-white text-[30px] font-semibold leading-normal">Starting Your Analytics Journey
                            or Feeling
                            Confused ?</h2> <br/>
                        <p className="text-white text-[26px] font-semibold">Schedule a One-Hour Consultation</p> <br/>
                        <Link className="underline text-white text-[16px] font-semibold" href="/services/training">Training Details</Link>
                    </div>

                </div>
            </div>

       
            <div className="flex flex-col justify-start max-w-md lg:hidden">
                <div className="panel_list bg-white mb-4">
                    <div className="panel_heading p-4 cursor-pointer inline-block bg-servicemedia text-white">
                        <h3 className="m-0 text-[40px] font-semibold rounded-3xl text-start">Media</h3>
                    </div>
                    <div className="panel_para p-4 hidden text-base bg-servicemedia mt-2">
                        <h2 className="text-white text-[35px] font-semibold leading-normal">Strengthening Businesses</h2>
                        <p className="text-white text-[16px] font-semibold">Our focus is not limited to targeting.
                            We transform customers into devoted brand advocates</p>
                        <ul className="list-disc text-white text-[16px] font-semibold ml-[18px]">
                            <li><a className="underline" href="">Mobile app marketing</a></li>
                            <li><a className="underline" href="">Lead generation</a></li>
                            <li><a className="underline" href="">Search/E-Commerce Marketing</a></li>
                            <li><a className="underline" href="">Programatic Media Buying</a></li>
                        </ul>
                    </div>
                </div>
            
                <div className="panel_list bg-white mb-4">
                    <div className="panel_heading p-4 cursor-pointer inline-block bg-serviceanalytics text-white">
                        <h3 className="m-0 text-[40px] font-semibold rounded-3xl text-start">Analytics</h3>
                    </div>
                    <div className="panel_para p-4 hidden text-base bg-serviceanalytics mt-2">
                        <h2 className="text-white text-[35px] font-semibold leading-[45px]">Navigating the Digital Landscape
                            with Expertise
                        </h2>
                        <ul className="text-white text-[16px] font-semibold">
                            <li><a href="../src/Analytics.html">GA4 Implementation</a></li>
                            <li><a href="../src/Analytics.html">Audit and Health Check</a></li>
                            <li><a href="../src/Analytics.html">Web and App measurement</a></li>
                            <li><a href="../src/Data_reporting_&_analysis.html">Data Reporting & Analysis</a></li>
                            <li><a href="../src/Looker_bi_platform_services.html">Looker BI Platform</a></li>
                        </ul>
                    </div>
                </div>
            
                <div className="panel_list bg-white mb-4">
                    <div className="panel_heading p-4 cursor-pointer inline-block bg-servicesolutions text-white">
                        <h3 className="m-0 text-[40px] font-semibold rounded-3xl text-start">Solutions</h3>
                    </div>
                    <div className="panel_para p-4 hidden text-base bg-servicesolutions mt-2">
                        <ul className="list-disc text-white text-[26px] font-semibold ml-[18px] leading-normal">
                            <li><a href="">Preserving Historical UA Data</a></li>
                            <li><a href="">GDPR Compliance</a></li>
                            <li><a href="">Data Science Solutions</a></li>
                        </ul>
                    </div>
                </div>
            
                <div className="panel_list bg-white mb-1">
                    <div className="panel_heading p-4 cursor-pointer inline-block bg-servicetraining text-white w-72">
                        <h3 className="m-0 text-[40px] font-semibold rounded-3xl text-start">Training
                            and Consultation</h3>
                    </div>
                    <div className="panel_para p-4 hidden text-base bg-servicetraining mt-2">
                        <h2 className="text-white text-[30px] font-semibold leading-normal">Starting Your Analytics Journey
                            or Feeling
                            Confused ?</h2> <br/>
                        <p className="text-white text-[26px] font-semibold">Schedule a One-Hour Consultation</p> <br/>
                        <a className="underline text-white text-[16px] font-semibold" href="../src/Training.html">Training Details</a>
                    </div>
                </div>
            </div>
        
        </div>
    </section>
  
    <section>
        <div className="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
            <h2 className="text-black text-start text-6xl font-bold pb-2 md:mb-16">Case Studies</h2>
            <div
                className="case md:flex text-left justify-evenly items-center bg-servicesection min-[375px]:px-10 md:px-20 px-2 min-[375px]:py-8 md:py-8 py-4 md:rounded-full rounded-xl mt-8">
                <div className="md:w-3/4">
                    <h3 className="relative lg:text-3xl text-[19px] leading-normal font-bold mb-4">
                        <img className="absolute top-[3px] -left-[35px]" src="https://storage.googleapis.com/website-bucket-uploads/static/point(1).png" alt="arrow"/>
                        Universal Analytics (GA3) to GA4 Migration
                        for a Website
                    </h3>
                    <p className="text-serviceheading text-base font-medium">The migration process was smooth and successful
                        without any data loss,
                        increasing efficiency and reducing manual effort by 30%. The client now has a more comprehensive
                        understanding of user behaviour across devices and sessions, enabling them to make more informed
                        decisions and improve website performance.
                    </p>
                </div>
                <div className="text-center pt-4 md:pt-0 items-center space-x-4">
                    <img className="inline w-40" src="https://storage.googleapis.com/website-bucket-uploads/static/Case_studies.png" alt="creative"/>
                    <Link href="/case-studies/ua-to-ga4-migration-for-a-website"><button
                        className="btn bg-serviceheading cursor-pointer hover:bg-blue-400 transition duration-200 delay-75 px-16 py-2 text-white text-2xl font-semibold rounded-full mt-8">View</button></Link>
                </div>
            </div>
            <div
                className="case md:flex text-left justify-evenly items-center bg-servicesection min-[375px]:px-10 md:px-20 px-2 min-[375px]:py-8 md:py-8 py-4 md:rounded-full rounded-xl mt-8">
                <div className="md:w-3/4">
                    <h3 className="relative lg:text-3xl text-[19px] leading-normal font-bold mb-4">
                        <img className="absolute top-[3px] -left-[35px]" src="https://storage.googleapis.com/website-bucket-uploads/static/point(1).png" alt="arrow"/>
                        GA4 Enhanced Ecommerce Implementation
                        Using GTM and Shopify Integration
                    </h3>
                    <p className="text-serviceheading text-base font-medium">We successfully implemented 90% of purchase events,
                        with the exception of UA, which is at 70% and all GA4 enhanced ecommerce events and Shopify
                        parameters are being successfully sent to GA4.</p>
                </div>
                <div className="text-center pt-4 md:pt-0 items-center space-x-4">
                    <img className="inline w-40" src="https://storage.googleapis.com/website-bucket-uploads/static/Case_studies(1).png" alt="icons"/>
                    <Link href="/case-studies/ga4-enhanced-ecommerce-implementation-using-gtm-and-shopify-integration"><button
                        className="btn bg-serviceheading cursor-pointer hover:bg-blue-400 transition duration-200 delay-75 px-16 py-2 text-white text-2xl font-semibold rounded-full mt-8">View</button></Link>
                </div>
            </div>
            <div className="text-center">
            <Link href="/case-studies"><button
                    className="btn cursor-pointer w-44 bg-serviceheading hover:bg-sky-800 transition duration-200 delay-75 p-4 rounded-[5px] shadow-lg text-white text-lg font-semibold mt-8">More
                    Case Study</button></Link>
            </div>

        </div>
    </section>

    <div className="bg-serviceheading">
        <div className="md:mt-4 px-4 md:px-20 py-8 md:py-11">
            
                <div className="flex flex-wrap items-center justify-between ">
                    <h2 className="text-white text-[32px] font-bold mt-4">Optimize Your Camapigns  with DV360</h2>
                    <Link href="/contact?id=dv360"><button id="output"
                        className="btn text-[25px] cursor-pointer w-44 bg-white hover:bg-slate-100 transition duration-200 delay-75 mt-4 p-4 rounded-[5px] shadow-lg shadow-gray-400 text-serviceheading font-semibold">Contact Us</button></Link>
                </div>
            
        </div>
    </div>

    </>
  )
}

export default index
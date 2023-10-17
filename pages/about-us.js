import React, {useEffect} from 'react'
import ScrollProgress from '../components/ScrollProgress'
import Head from 'next/head'
import AOS from 'aos';
import 'aos/dist/aos.css';

const aboutus = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Head>
      <title>AnalyticsLiv - About us</title>
      <meta name="description" content="Google Marketing Platform Partner - Our Journey"/>
    </Head>
    <ScrollProgress/>
    
    <section className='overflow-x-hidden'>
        <div className="relative" data-aos="fade-down" data-aos-once="true">
            <img src="https://storage.googleapis.com/website-bucket-uploads/static/about us.png" className="lg:w-full"/>
            <div className="absolute w-24 h-24 lg:w-80 lg:h-80 bg-gradient-to-b from-blue-900 to-transparent blur rounded-full top-2 right-0"></div>
            <div className="absolute w-16 h-16 lg:w-40 lg:h-40 bg-gradient-to-b from-amber-400 to-transparent blur rounded-full right-8 -bottom-2 lg:bottom-8 lg:right-40"></div>
            <h1 className="uppercase tracking-wider absolute right-6 bottom-4 text-white lg:text-3xl">We are AnalyticsLiv!</h1>
        </div>

        <div data-aos="zoom-in" data-aos-once="true" className="lg:flex justify-evenly p-8">
             <div className="md:pt-16 lg:w-1/2 pb-6 lg:pb-0">
                <img src="https://storage.googleapis.com/website-bucket-uploads/static/story.png" className="mx-auto w-3/4 lg:w-fit"/>
             </div>
             <div className="lg:w-1/2 lg:space-y-4 space-y-2 tracking-wider">
                <h1 className="uppercase tracking-wider font-semibold text-slate-800 text:xl lg:text-3xl text-center lg:text-left">Our Story</h1>
                <h2 className="text-cyan-500 underline underline-offset-4 lg:text-xl font-semibold text-center lg:text-left uppercase">Genesis</h2>
                <p className="lg:pr-24 text-slate-600 text-justify">
                    The thought was brewed over multiple cups of cutting chai(tea) in the after
                    hours of a corporate professional’s life. Three individuals restricted by 
                    internal processes and systems yearning to create data-centric tangible value 
                    for their customers through a fluidic approach. Analytics Liv Digital was 
                    conceived with the motto that an agency’s rigid protocols shouldn’t act as 
                    a bottleneck for customer’s progression.<br/>
                    Our team consists of highly motivated and skilled specialists who know how 
                    to deal with any issue that you may come across. This creates a basis for 
                    lasting relationships with our clients built on trust and mutual understanding.
                    We are devoted to creating unique and innovative solutions along with the high-
                    quality supporting services.

                </p>
             </div>
        </div>
        <div className="w-1/3 h-0.5 bg-cyan-600 mx-auto rounded-xl"></div>

        <div className="lg:flex px-2 lg:px-8 py-8 tracking-wider">
            <div data-aos="fade-right" data-aos-once="true" className="flex justify-evenly lg:w-1/2">
                <div className="px-3 pt-12">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/mission.gif" className="inline "/>
                </div>
                <div className="w-2/3">
                    <h1 className="inline text-cyan-500 underline underline-offset-4 text-xl font-semibold ">Mission</h1>
                <p className="pt-6 text-slate-700">
                    We learned over the years how different strategies of data come together to help businesses. We intend to spread our learnings while aligning the businesses with the ever changing technology around data, analytics and its usage to empower the business.
                </p>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-once="true" className="flex justify-evenly pt-8 lg:pt-0 lg:w-1/2">
                <div className="px-3 pt-12">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/vision.gif" className="inline "/>
                </div>
                <div className="w-2/3">
                    <h1 className="inline text-cyan-500 underline underline-offset-4 text-xl font-semibold ">Vision</h1>
                <p className="pt-6 text-slate-700">
                    Enable Business partners to harness the power of data in decision making and gaining digital transformation.
                </p>
                </div>
            </div>
        </div>
        <div className="w-1/3 h-0.5 bg-cyan-600 mx-auto rounded-xl"></div>

        <div data-aos="fade-up" data-aos-once="true" className="lg:flex lg:flex-row-reverse justify-evenly p-8">
            <div className="pt-16 lg:w-1/2 pb-6 lg:pb-0">
               <img src="https://storage.googleapis.com/website-bucket-uploads/static/aboutus.png" className="mx-auto w-3/4 lg:w-fit"/>
            </div>
            <div className="lg:w-1/2 tracking-wider lg:space-y-4 lg:pl-28 space-y-2">
               <h1 className="uppercase font-semibold text-slate-800 text:xl lg:text-3xl text-center lg:text-left">About us</h1>
               <p className="text-slate-600 text-justify">
                Analytics Liv Digital (“AnalyticsLiv”) is a new age marketing firm focused on delivering data driven customer experiences.
                Cutting through the noise of digital data fatigue to take cognizance of a brand’s first party data is our prime focus.
                A website, mobile app, PPC campaigns or landing pages- whatever be your customer touchpoint(s), we will make it count.<br/>
                We believe that one size doesn’t fit all as each customer is on it’s unique journey towards achieving enhanced digital
                marketing maturity. Our customer centric ethos drives us to operate on an outside-in approach via which the brand’s present
                digital journey is internalized for crafting relevant customized offerings.<br/>
                We create unique and innovative solutions for our customers along with the high-quality support services and personal approach
                to any case. Feel free to entrust your business to our experts, and you’ll see the difference!
                

               </p>
            </div>
       </div>

       <div data-aos="zoom-in" data-aos-once="true" className="relative py-8 space-y-6 bg-gray-100 ">
        <h1 className="relative uppercase tracking-wider text-center lg:text-3xl">Platform Expertise</h1>
        <div className="flex lg:flex-row justify-evenly">
        <div className=" space-y-2">
            <img src="https://storage.googleapis.com/website-bucket-uploads/static/Bigquery.png" className="mx-auto "/>
            <div className="text-slate-700">Big Query</div>
        </div>

        <div className="hidden lg:block space-y-2">
            <img src="https://storage.googleapis.com/website-bucket-uploads/static/datastudio.png" className="mx-auto"/>
            <h2 className="text-slate-700 text-center">Data Studio<br/> 360</h2>
        </div>

        <div className="space-y-2">
            <img src="https://storage.googleapis.com/website-bucket-uploads/static/dv360.png" className="mx-auto"/>
            <h2 className="text-slate-700 text-center">Display and Video <br/> 360</h2>
        </div>

        <div className="hidden lg:block space-y-2">
            <img src="https://storage.googleapis.com/website-bucket-uploads/static/googlecampaignmanager.png" className="mx-auto"/>
            <h2 className="text-slate-700 text-center">Google Campaign <br/>Manager</h2>
        </div>

        </div>

        <div className="flex flex-row justify-evenly">
            <div className="space-y-2">
                <img src="https://storage.googleapis.com/website-bucket-uploads/static/GAnalytics.png" className="mx-auto"/>
                <h2 className="text-slate-700 text-center">Google Analytics</h2>
            </div>
    
            <div className="hidden lg:block space-y-2">
                <img src="https://storage.googleapis.com/website-bucket-uploads/static/Google ads.png" className="h-2/3 mx-auto"/>
                <h2 className="text-slate-700 text-center">Google Ads</h2>
            </div>
    
            <div className="space-y-2">
                <img src="https://storage.googleapis.com/website-bucket-uploads/static/Google tag manager.png" className="mx-auto"/>
                <h2 className="text-slate-700 text-center">Google Tag<br/> Manager</h2>
            </div>
                
        </div>

        <div className="flex flex-row text-center justify-around">
            <div className="space-y-2 hidden lg:block">
                <img src="https://storage.googleapis.com/website-bucket-uploads/static/Linkedin.png" className="mx-auto"/>
                <h2 className="text-slate-700 text-center">LinkedIn<br/> Marketing</h2>
            </div>
     
            <div className="space-y-2">
                <img src="https://storage.googleapis.com/website-bucket-uploads/static/optimize.png" className="mx-auto"/>
                <h2 className="text-slate-700 text-center">Optimize 360</h2>
            </div>
    
            <div className="space-y-2">
                <img src="https://storage.googleapis.com/website-bucket-uploads/static/search ads.png" className="mx-auto"/>
                <h2 className="text-slate-700 text-center">Search Ads</h2>
            </div>
                
        </div>
        <div className="lg:hidden flex flex-row text-center justify-around">
            <div className="space-y-2">
                <img src="https://storage.googleapis.com/website-bucket-uploads/static/Linkedin.png" className="mx-auto"/>
                <h2 className="text-slate-700 text-center">LinkedIn<br/> Marketing</h2>
            </div>
            <div className="space-y-2">
                <img src="https://storage.googleapis.com/website-bucket-uploads/static/Google ads.png" className="mx-auto h-16"/>
                <h2 className="text-slate-700 text-center">Google Ads</h2>
            </div>
        </div>
        <div className="lg:hidden flex flex-row text-center justify-around">
            <div className="space-y-2">
                <img src="https://storage.googleapis.com/website-bucket-uploads/static/datastudio.png" className="mx-auto"/>
                <h2 className="text-slate-700 text-center">Data Studio<br/> 360</h2>
            </div>
            <div className="space-y-2">
                <img src="https://storage.googleapis.com/website-bucket-uploads/static/googlecampaignmanager.png" className="mx-auto"/>
                <h2 className="text-slate-700">Google Campaign <br/>Manager</h2>
            </div>
        </div>
       </div>

       <div data-aos="fade-down" data-aos-once="true" className="py-8 lg:px-16">
         <h1 className="relative text-slate-800 uppercase tracking-wider text-center lg:text-left lg:inset-x-12 lg:text-3xl font-semibold">Solutions Offered</h1>
         <div className="lg:flex px-8 justify-center uppercase">
            <ul className="space-y-2 px-8 pt-2 lg:pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-2 inline fill-amber-400" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z"/>
                    </svg>
                    Measurement Strategy
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-2 inline fill-amber-400" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z"/>
                    </svg>
                    Search Engine Marketing
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-2 inline fill-amber-400" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z"/>
                    </svg>
                    Media Planning & Buying
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-2 inline fill-amber-400" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z"/>
                    </svg>
                    ETL / Data Warehousing
                </li>
            </ul>
            <ul className="space-y-2 px-6 pt-2 lg:pt-10 lg:w-1/2">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-2 inline fill-amber-400" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z"/>
                    </svg>
                    <div className="inline whitespace-pre">Data Tracking</div>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-2 inline fill-amber-400" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z"/>
                    </svg>
                    Social Media Marketing
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-2 inline fill-amber-400" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z"/>
                    </svg>
                    Reporting & Analysis
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-2 inline fill-amber-400" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5l-3-9.9Z"/>
                    </svg>
                    <div className="inline whitespace pre">Marketing Consulting </div> 
                </li>
            </ul>
            <div>
                <img src="https://storage.googleapis.com/website-bucket-uploads/static/services7.jpg"/>
            </div>
       </div>
       </div>
      </section>

    </>
  )
}

export default aboutus
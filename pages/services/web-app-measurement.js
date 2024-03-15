'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image';


const webapp = () => {

    const [activetab, setActivetab] = useState("1");

    return (
        <>
            <Head>
                <title>AnalyticsLiv - Analytics Services Offered</title>
                <meta name="description" content="Experts in GA4, DV360, Google Ads, Meta Ads, Microsoft Ads" />
                <link rel="canonical" href="https://www.analyticsliv.com/services/analytics"></link>
            </Head>

            <section className='webapphome w-full relative font-gilroy overflow-hidden'>
                <div className='h-full'>
                    <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 h-full z-20">
                        <div className="z-10 flex lg:flex-nowrap items-center flex-wrap justify-between gap-7 pb-8">
                            <div className="space-y-4 w-full lg:w-1/2 lg:order-1 order-2 lg:mb-7">
                                <h1 className="2xl:text-[33px] lg:text-[29px] text-[27px] leading-[1.5em] font-gilory font-semibold text-maintext pt-4">
                                    AnalyticsLiv Digital: Unlock Powerful Insights with App & Web Analytics
                                </h1>
                                <h3 className="text-[22px] text-[#333333] font-semibold leading-[1.5em]">
                                    Master the User Journey, Drive Growth, and Make Data-Driven Decisions
                                </h3>
                                <div className='flex max-[455px]:flex-wrap flex-nowrap items-center gap-5'>
                                    <Link href="/contact?id=programatic-advertising">
                                        <button className="bg-[#30486ae3] text-white w-[208px] hover:bg-white border border-solid hover:border-[#30486ae3] hover:text-[#30486ae3] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">GET A FREE AUDIT</button>
                                    </Link>
                                    <Link href="/contact?id=programatic-advertising">
                                        <button className="bg-[#30486ae3] text-white w-[208px] hover:bg-white border border-solid hover:border-[#30486ae3] hover:text-[#30486ae3] text-base font-normal tracking-wider rounded-xl py-3 px-6 max-[425px]:mt-0 mt-6">CONTACT US</button>
                                    </Link>
                                </div>
                            </div>
                            <div className=" w-full lg:w-1/2 flex items-center lg:justify-end justify-center lg:order-2 order-1">
                                <img src="/Web_App_Measurenment_Sub_IMG.png" alt="" className='lg:h-[470px] md:h-[400px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=' relative wepappour overflow-hidden'>
                <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
                    <div>
                        <h3 className='text-[28px] font-gilroy font-semibold text-[#18265b] leading-[1.5em]'>Our Expertise</h3>
                    </div>
                    <div className='flex flex-wrap lg:flex-nowrap items-center justify-center'>
                        <div className=" w-full lg:w-[40%] flex items-center lg:justify-start justify-center">
                            <img src="/Web_App_Measurenment_Main_Img.png" alt="" className='lg:h-[470px] md:h-[400px]' />
                        </div>
                        <div className='w-full lg:w-[60%] py-7 grid lg:grid-cols-2 md:grid-cols-2 gap-10'>
                            <div className='fs border-[3px] border-[#0000] border-solid hover:border-t-[#d054cec7] shadow-webappourexper rounded-b-[15px] p-5'>
                                <div>
                                    <img src="/Data-Driven Approach blue.png" alt="" className='h-16 w-16' />
                                    <h6 className='text-base text-txt font-gilroy font-semibold mt-3 mb-5 leading-[27px]'>Google Analytics 4 (GA4)</h6>
                                </div>
                                <p className='text-[13px] font-gilroy2 font-medium leading-[32px]'>We help you implement and configure GA4 to capture comprehensive user data, measure campaign effectiveness, and gain a holistic view of your audience.</p>
                            </div>
                            <div className='sd border-[3px] border-[#0000] border-solid hover:border-t-[#d054cec7] shadow-webappourexper rounded-b-[15px] p-5'>
                                <div>
                                    <img src="/Transparency You Can Trust blue.png" alt="" className='h-16 w-16' />
                                    <h6 className='text-base text-txt font-gilroy font-semibold mt-3 mb-5 leading-[27px]'>Engagement Analytics</h6>
                                </div>
                                <p className='text-[13px] font-gilroy2 font-medium leading-[32px]'>Platforms like MoEngage and Firebase Analytics provide deep dives into user engagement. We help you analyze user behavior, identify areas for improvement, and drive in-app engagement.</p>
                            </div>
                            <div className='trd border-[3px] border-[#0000] border-solid hover:border-t-[#d054cec7] shadow-webappourexper rounded-b-[15px] p-5'>
                                <div>
                                    <img src="/Performance at the Forefront blue.png" alt="" className='h-16 w-16' />
                                    <h6 className='text-base text-txt font-gilroy font-semibold mt-3 mb-5 leading-[27px]'>Product Analytics</h6>
                                </div>
                                <p className='text-[13px] font-gilroy2 font-medium leading-[32px]'>Tools like Mixpanel and others offer granular product usage data. We empower you to understand how users interact with your product features, identify pain points, and optimize for better user experience.</p>
                            </div>
                            <div className='trd border-[3px] border-[#0000] border-solid hover:border-t-[#d054cec7] shadow-webappourexper rounded-b-[15px] p-5'>
                                <div>
                                    <img src="/Custom_Analytics_Solution.png" alt="" className='h-16 w-16' />
                                    <h6 className='text-base text-txt font-gilroy font-semibold mt-3 mb-5 leading-[27px]'>Custom Analytics Solutions</h6>
                                </div>
                                <p className='text-[13px] font-gilroy2 font-medium leading-[32px]'>Our team of experts can tailor solutions using various analytics platforms and custom dashboards to meet your specific needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='progracont relative overflow-hidden'>
                <div className='relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20'>
                    <div className='flex md:flex-nowrap flex-wrap items-center mx-auto'>
                        <div className='md:w-[66%] w-full'>
                            <div>
                                <div>
                                    <div><h3 className='text-[#ffffff] text-[25px] leading-8 md:mb-[20px] mb-6 font-gilroy font-semibold'>Ready to Unlock the Power of App & Web Analytics?</h3></div>
                                    <div>
                                        <div className='text-[#ffffff] text-base leading-8 md:mb-[15px] mb-6 font-gilroy2 font-medium'>
                                            <p className='text-[18px] mb-3'> Contact AnalyticsLiv Digital today to schedule a free consultation and discuss how we can help you leverage data to gain a competitive edge and achieve your business goals. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[33%] w-full flex items-end md:justify-end justify-center'>
                            <div className='p-[10px] pl-0'>
                                <div className='w-full flex'>
                                    <div className='flex items-center md:justify-end justify-center'>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="border border-solid border-[#ffffff] bg-[#ffffff] text-[#de668a] text-base font-normal tracking-wider rounded-xl py-3 px-6">Let's Connect</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='webappbenefit relative bg-[#000] overflow-hidden'>
                <div className='relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20'>
                    <div>
                        <div className='flex items-center justify-start'>
                            <h2 className='text-[#ffffffe8] lg:text-[28px] leading-[1.5em] text-[20px] font-semibold text-center'>Benefits of Our App & Web Analytics Services</h2>
                        </div>
                        <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pt-[50px]">
                            <div class="flex items-start justify-center md:w-[95%] w-[280px] m-auto mb-5 webbox xl:h-[235px] lg:h-[285px] h-[240px] p-[10px] pt-6 border border-[#333] rounded-[10px]">
                                <div className='cursor-pointer'>
                                    <div className='inbox relative pb-4'>
                                        <Image
                                            src="/data-collection.png"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}

                                        />
                                    </div>
                                    <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>Improved User Experience</h2>
                                    <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>Gain insights into user behavior to refine your app or website design and functionality.</p>

                                </div>
                            </div>
                            <div class="flex items-start justify-center md:w-[95%] w-[280px] m-auto mb-5 webbox xl:h-[235px] lg:h-[285px] h-[240px] p-[10px] pt-6 border border-[#333] rounded-[10px]">
                                <div className='cursor-pointer'>
                                    <div className='inbox relative pb-4'>
                                        <Image
                                            src="/report (3).png"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}

                                        />
                                    </div>
                                    <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>Enhanced Marketing ROI</h2>
                                    <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>Optimize marketing campaigns based on user data for better targeting and improved return on investment.</p>

                                </div>
                            </div>
                            <div class="flex items-start justify-center md:w-[95%] w-[280px] m-auto mb-5 webbox xl:h-[235px] lg:h-[285px] h-[240px] p-[10px] pt-6 border border-[#333] rounded-[10px]">

                                <div className='cursor-pointer'>

                                    <div className='inbox relative pb-4'>
                                        <Image
                                            src="/analyzing (1).png"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}

                                        />
                                    </div>
                                    <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>Data-Driven Decision Making</h2>
                                    <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>Make informed decisions backed by accurate data and analytics.</p>

                                </div>
                            </div>
                            <div class="flex items-start justify-center md:w-[95%] w-[280px] m-auto mb-5 webbox xl:h-[235px] lg:h-[285px] h-[240px] p-[10px] pt-6 border border-[#333] rounded-[10px]">
                                <div className='cursor-pointer'>
                                    <div className='inbox relative pb-4'>
                                        <Image
                                            src="/insight (1).png"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}

                                        />
                                    </div>
                                    <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>Increased Customer Acquisition & Retention</h2>
                                    <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>Understand user acquisition trends and implement strategies to acquire and retain customers.</p>
                                </div>
                            </div>
                            <div class="flex items-start justify-center md:w-[95%] w-[280px] m-auto mb-5 webbox xl:h-[235px] lg:h-[285px] h-[240px] p-[10px] pt-6 border border-[#333] rounded-[10px]">
                                <div className='cursor-pointer'>
                                    <div className='inbox relative pb-4'>
                                        <Image
                                            src="/insight (1).png"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}

                                        />
                                    </div>
                                    <h2 className='text-[18px] mb-2 font-medium text-[#efefef] leading-normal'>Actionable Insights</h2>
                                    <p className='text-[14px] font-medium text-[#878787] leading-[1.7em]'>Our team translates complex data into clear, actionable insights that you can use to optimize your digital strategies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#282833] webomphen relative overflow-hidden font-gilroy'>
                <div className='inrwebomphen relative'>
                    <div className='relative z-20 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                        <div className='flex items-center justify-start pb-7'>
                            <h3 className='text-[#efefef] text-[28px] font-semibold leading-[1.5em] not-italic pb-5'>Our Approach</h3>
                        </div>

                        <div className='lg:flex lg:flex-nowrap flex-wrap items-center hidden webbox rounded-xl'>
                            <div className='text-black xl:w-[35%] lg:w-[35%] w-full mt-[11px]'>
                                <div className='p-8 pl-[25px] -mr-[30px] rounded-l-[10px] xl:w-[400px] xl:ml-auto'>
                                    <div onClick={() => setActivetab('1')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '1' ? 'border-t-[#0092f4ab]' : ''}`}>
                                        <div><img src="/Campaign Strategy and Setup white.png" alt="" className='h-10 w-10' /></div>
                                        <p >Needs Assessment</p>
                                    </div>
                                    <div onClick={() => setActivetab('2')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '2' ? 'border-t-[#0092f4ab]' : ''}`}>
                                        <div><img src="/Audience Targeting white.png" alt="" className='h-10 w-10' /></div>
                                        <p>Data Collection & Analysis</p>
                                    </div>
                                    <div onClick={() => setActivetab('3')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '3' ? 'border-t-[#0092f4ab]' : ''}`}>
                                        <div><img src="/Ad Format Optimization white.png" alt="" className='h-10 w-10' /></div>
                                        <p>Reporting & Recommendations</p>
                                    </div>
                                    <div onClick={() => setActivetab('4')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '4' ? 'border-t-[#0092f4ab]' : ''}`}>
                                        <div><img src="/Real-Time Bidding white.png" alt="" className='h-10 w-10' /></div>
                                        <p>Data-Driven Decisions</p>
                                    </div>
                                    <div onClick={() => setActivetab('5')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '5' ? 'border-t-[#0092f4ab]' : ''}`}>
                                        <div><img src="/Continuous Campaign Management & Optimization white.png" alt="" className='h-10 w-[56px]' /></div>
                                        <p>Ongoing Support</p>
                                    </div>
                                </div>
                            </div>

                            <div className='xl:w-[60%] lg:w-[65%] w-full h-[500px] flex items-start justify-center rounded-[15px] pt-5 mb-[65px]'>
                                <div id="tab1" className={`${activetab == 1 && 'block'} ${activetab != 1 && 'hidden'} relative py-[30px] px-[50px] text-base font-medium leading-8`}>
                                    <div className='relative'>
                                        <p className='text-[#efefef] text-[20px] font-semibold mb-5'>Needs Assessment</p>
                                        <p className='text-[#ffffff] mb-[10px]'>Deep understanding of your organization's specific goals, challenges, and requirements related to analytics. We delve into the key performance indicators (KPIs) that matter most to your business, as well as any pain points or areas for improvement.Implementation & Configuration:</p>
                                        <p className='text-[#ffffff]'>Once we have a clear understanding of your needs, we proceed to set up and configure the analytics platforms that best align with your requirements. This includes selecting the appropriate tools, integrating them with your existing systems if needed, and customizing configurations to ensure they capture the relevant data accurately.</p>
                                        <div className=''>
                                            <Link href="/contact?id=programatic-advertising">
                                                <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab2" className={`${activetab == 2 && 'block'} ${activetab != 2 && 'hidden'} relative py-[30px] px-[50px] text-base font-medium leading-8`}>
                                    <div className='relative pl-1'>
                                        <p className='text-[#efefef] text-[20px] font-semibold mb-5'>Data Collection & Analysis</p>
                                        <p className='text-[#ffffff]'>With the analytics platforms in place, we start collecting data from various sources such as your website, mobile apps, social media channels, and other digital touchpoints. We then employ advanced analytics techniques to sift through this data, uncovering trends, patterns, and insights that reveal valuable information about user behavior, market trends, and performance metrics.</p>
                                        <div className=''>
                                            <Link href="/contact?id=programatic-advertising">
                                                <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab3" className={`${activetab == 3 && 'block'} ${activetab != 3 && 'hidden'} relative py-[30px] px-[40px] text-base font-medium leading-8`}>
                                    <div className='relative pl-1'>
                                        <p className='text-[#efefef] text-[20px] font-semibold mb-5'>Reporting & Recommendations</p>
                                        <p className='text-[#ffffff] mb-[10px]'>The insights gleaned from data analysis are translated into comprehensive reports that provide a clear picture of your digital landscape. These reports include data visualizations such as charts, graphs, and dashboards to make complex information easily understandable.</p>
                                        <p className='text-[#ffffff]'>Along with reporting, we offer actionable recommendations aimed at improving performance, enhancing user experience, and achieving your strategic objectives.</p>
                                        <div className=''>
                                            <Link href="/contact?id=programatic-advertising">
                                                <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab4" className={`${activetab == 4 && 'block'} ${activetab != 4 && 'hidden'} relative py-[30px] px-[50px] text-base font-medium leading-8`}>
                                    <p className='text-[#efefef] text-[20px] font-semibold mb-5'>Data-Driven Decisions</p>
                                    <p className='text-[#ffffff]'>Armed with actionable insights from our reports and recommendations, you can make informed, data-driven decisions to optimize your digital presence. Whether it's refining marketing strategies, fine-tuning product offerings, or enhancing customer journeys, our analytics-driven approach empowers you to maximize opportunities and mitigate risks effectively.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>

                                <div id="tab5" className={`${activetab == 5 && 'block'} ${activetab != 5 && 'hidden'} relative py-[30px] px-[50px] text-base font-medium leading-8`}>
                                    <p className='text-[#efefef] text-[20px] font-semibold mb-5'>Ongoing Support</p>
                                    <p className='text-[#ffffff] mb-[10px]'>Our commitment doesn't end with implementation and reporting. We provide continuous support to ensure you extract the maximum value from your analytics platform over time. </p>
                                    <p className='text-[#ffffff]'>This includes monitoring performance metrics, conducting periodic reviews, making adjustments as needed, and staying updated with emerging trends and technologies to keep your analytics strategy relevant and effective.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                        <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/*  */}
                        <div className="flex flex-col justify-start max-w-md m-auto lg:hidden">
                            <div className="panel_list webbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivetab('1')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '1' ? 'border-t-[#0092f4ab]' : ''}`}>
                                    <div><img src="/Campaign Strategy and Setup white.png" alt="" className='h-10 w-10' /></div>
                                    <p >Needs Assessment</p>
                                </div>
                                <div id="tab1" className={`${activetab == 1 && 'items-center justify-center'} ${activetab != 1 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#ffffff] mb-[10px]'>Deep understanding of your organization's specific goals, challenges, and requirements related to analytics. We delve into the key performance indicators (KPIs) that matter most to your business, as well as any pain points or areas for improvement.Implementation & Configuration</p>
                                    <p className='text-[#ffffff]'>Once we have a clear understanding of your needs, we proceed to set up and configure the analytics platforms that best align with your requirements. This includes selecting the appropriate tools, integrating them with your existing systems if needed, and customizing configurations to ensure they capture the relevant data accurately.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list webbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivetab('2')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '2' ? 'border-t-[#0092f4ab]' : ''}`}>
                                    <div><img src="/Audience Targeting white.png" alt="" className='h-10 w-10' /></div>
                                    <p>Data Collection & Analysis</p>
                                </div>
                                <div id="tab2" className={`${activetab == 2 && ' items-center justify-center'} ${activetab != 2 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#ffffff]'>With the analytics platforms in place, we start collecting data from various sources such as your website, mobile apps, social media channels, and other digital touchpoints. We then employ advanced analytics techniques to sift through this data, uncovering trends, patterns, and insights that reveal valuable information about user behavior, market trends, and performance metrics.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list webbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivetab('3')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '3' ? 'border-t-[#0092f4ab]' : ''}`}>
                                    <div><img src="/Ad Format Optimization white.png" alt="" className='h-10 w-10' /></div>
                                    <p>Reporting & Recommendations</p>
                                </div>
                                <div id="tab3" className={`${activetab == 3 && 'items-center justify-center'} ${activetab != 3 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#ffffff] mb-[10px]'>The insights gleaned from data analysis are translated into comprehensive reports that provide a clear picture of your digital landscape. These reports include data visualizations such as charts, graphs, and dashboards to make complex information easily understandable</p>
                                    <p className='text-[#ffffff]'>Along with reporting, we offer actionable recommendations aimed at improving performance, enhancing user experience, and achieving your strategic objectives.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list webbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivetab('4')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '4' ? 'border-t-[#0092f4ab]' : ''}`}>
                                    <div><img src="/Real-Time Bidding white.png" alt="" className='h-10 w-10' /></div>
                                    <p>Data-Driven Decisions</p>
                                </div>
                                <div id="tab4" className={`${activetab == 4 && ' items-center justify-center'} ${activetab != 4 && 'hidden'} relative p-5 pt-[10px] text-[13px] font-medium leading-8`}>
                                    <p className='text-[#ffffff]'>Armed with actionable insights from our reports and recommendations, you can make informed, data-driven decisions to optimize your digital presence. Whether it's refining marketing strategies, fine-tuning product offerings, or enhancing customer journeys, our analytics-driven approach empowers you to maximize opportunities and mitigate risks effectively.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="panel_list webbox mb-4 rounded-b-[15px]">
                                <div onClick={() => setActivetab('5')} className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === '5' ? 'border-t-[#0092f4ab]' : ''}`}>
                                    <div><img src="/Continuous Campaign Management & Optimization white.png" alt="" className='h-10 w-[56px]' /></div>
                                    <p>Ongoing Support</p>
                                </div>
                                <div id="tab5" className={`${activetab == 5 && ' items-center justify-center'} ${activetab != 5 && 'hidden'} relative p-5 pt-[10px] font-gilroy2 text-[13px] font-medium leading-8`}>
                                    <p className='text-[#ffffff] mb-[10px]'>Our commitment doesn't end with implementation and reporting. We provide continuous support to ensure you extract the maximum value from your analytics platform over time. </p>
                                    <p className='text-[#ffffff]'>This includes monitoring performance metrics, conducting periodic reviews, making adjustments as needed, and staying updated with emerging trends and technologies to keep your analytics strategy relevant and effective.</p>
                                    <div className=''>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default webapp
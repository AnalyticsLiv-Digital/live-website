'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'


const Casestudies = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <>
            <section className='casestudy'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div className='flex items-center justify-center'>
                        <h2 className='text-maintext text-[40px] font-bold not-italic text-center tracking-widest'>CASE STUDIES</h2>
                    </div>
                    <div data-aos="zoom-in" data-aos-once="true" className='text-center lg:flex items-center justify-between gap-[30px]'>
                        <div className='lg:w-[66%]'>
                            <h5 className='text-start text-xl font-medium text-maintext mb-2'>Check out our latest Case Studies</h5>
                            <div className='grid lg:grid-cols-2 gap-[30px]'>
                                <div className='first group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] pb-[95px] text-center relative 2xl:h-[750px] xl:h-[756px] lg:h-[582px]'>
                                    <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="/case-studies/ua-to-ga4-migration-for-a-website">
                                        <Image
                                            src="/casestudy1.png"
                                            width={300}
                                            height={300}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='w-full'
                                        />
                                        <h3 className='text-lg text-slate-900 font-semibold text-left pt-5'>Universal Analytics (GA3) to GA4 Migrationfor a Website</h3>
                                        <p className='align-middle text-left text-xs pt-4 text-gray-500 leading-[21px]'>The client faced difficulty migrating their website from Universal Analytics to Google Analytics 4 and had limited knowledge of GA4.</p>
                                        <div className='absolute bottom-[2%] xl:bottom-[3%] 2xl:right-[30%] xl:right-[22%] lg:right-[20%]'>
                                            <div className='flex w-[180px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                                <div className='flex items-center justify-center gap-[5px]'>
                                                    <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                                    <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='second group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] pb-[95px] text-center relative 2xl:h-[750px] xl:h-[756px] lg:h-[582px]'>
                                    <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="/case-studies/ga4-enhanced-ecommerce-implementation-using-gtm-and-shopify-integration">
                                        <Image
                                            src="/shopify.jpg"
                                            width={300}
                                            height={300}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='w-full'
                                        />
                                        <h3 className='text-lg text-slate-900 font-semibold text-left pt-5'>GA4 Enhanced Using GTM and Shopify Integration</h3>
                                        <p className='align-middle text-left text-xs pt-4 text-gray-500 leading-[21px]'>The client faced difficulty migrating their website from Universal Analytics to Google Analytics 4 and had limited knowledge of GA4.</p>
                                        <div className='absolute bottom-[2%] xl:bottom-[3%] 2xl:right-[30%] xl:right-[22%] lg:right-[20%]'>
                                            <div className='flex w-[180px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                                <div className='flex items-center justify-center gap-[5px]'>
                                                    <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                                    <span className='text-homepagebtn group-hover:text-white mt-[2px]'><FaLongArrowAltRight /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:grid lg:w-[33%]'>
                            <h5 className='text-start text-xl font-medium leading-none text-maintext mb-2'>Check out more case studies</h5>
                            <div className='third hidden lg:grid gap-[30px] 2xl:h-[750px] xl:h-[756px] lg:h-[582px]'>
                                <div className='home-blog group rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] text-center relative'>
                                    <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="/case-studies/skyrocket-your-campaigns-ctr-with-a-95-percent-surge-in-14-days" className='grid gap-1'>
                                        <div className='grid gap-4'>
                                            <Image
                                                src="/casestd.png"
                                                width={300}
                                                height={300}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[70%] m-auto 2xl:h-[210px] xl:h-[235px] h-[134px]'
                                            />
                                        </div>
                                        <div className='grid gap-1'>
                                            <h3 className='text-left text-slate-900 font-semibold whitespace-relaxed pt-[15px]'>Skyrocket Your Campaign's CTR with a 95% Surge in 14 Days!</h3>

                                        </div>
                                    </a>
                                </div>
                                <div className='home-blog group rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] text-center relative'>
                                    <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="/case-studies/driving-campaigns-in-dv360-to-post-click-attribution-success-with-36-percent-reduction-in-cpi" className='grid gap-1'>
                                        <div className='grid gap-4'>
                                            <Image
                                                src="/casestd2.png"
                                                width={300}
                                                height={300}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-[70%] m-auto 2xl:h-[210px] xl:h-[235px] h-[134px]'
                                            />
                                        </div>
                                        <div className='grid gap-1'>
                                            <h3 className='text-left text-slate-900 font-semibold whitespace-relaxed pt-[15px]'>Driving the Campaigns in DV360 to Post Click Attribution Success with a 36% reduction in CPI</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Casestudies
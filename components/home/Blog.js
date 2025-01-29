'use client'
import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";

const Blogs = () => {
    
    return (
        <>
            <section className='blog font-gilroy'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div className='flex items-center pb-5'>
                        <h2 className='text-maintext lg:text-[26px] text-[19px] font-semibold not-italic text-left tracking-widest'>Check out our latest blogs</h2>
                    </div>
                    <div className='text-center lg:flex items-center justify-between gap-[30px]'>
                       
                        <div className='lg:w-[66%]'>
                            <h5 className='text-start text-[15px] font-normal text-maintext mb-2 opacity-0'>Check out our latest blogs</h5>
                            <div className='grid lg:grid-cols-2 gap-[30px]'>
                                <div className='first relative group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] pb-[70px] text-center 2xl:h-[540px] lg:h-[495px]'>
                                    <a href="/blogs/ai-powered-google-analytics-4-insights">
                                        <Image
                                            src="https://storage.googleapis.com/website-bucket-uploads/static/public/blog1.png"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='mb-[3px] w-full'
                                        />
                                        <div className='flex items-center justify-between gap-3'>
                                            <div className='flex items-center justify-between gap-1'>
                                                <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3'>BLOG</span>
                                            </div>
                                            <div className='flex items-center justify-between gap-1'>
                                                <Image
                                                    src="/calendar1.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}					
                                                />
                                                <span className='text-[10px] font-normal'>February 15, 2024</span>
                                            </div>

                                        </div>
                                        <h3 className='text-lg text-slate-900 text-start font-semibold whitespace-relaxed pt-5'>AI-Powered Google Analytics 4 Insights</h3>
                                        <p className='align-middle text-left text-xs pt-4 pb-7 text-gray-500 leading-[21px]'>Picture Google Analytics 4 (GA4) as a super-smart friend who uses Artificial Intelligence (AI) to help you understand your data better. It's like having a super detective for your business data, pointing out things you might have missed.</p>
                                        <div className='absolute bottom-[3%] 2xl:right-[30%] xl:right-[25%] lg:right-[20%]'>
                                            <div className='flex w-[180px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                                <div className='flex items-center justify-center gap-[5px]'>
                                                    <button className='font-medium text-[#4186F5] group-hover:text-white'>Read More</button>
                                                    <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='second group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797]  hover:shadow-serviceoffer p-[25px] pb-[70px] text-center relative 2xl:h-[540px] lg:h-[495px]'>
                                    
                                    <a href="/blogs/unlocking-the-power-of-bigquery-for-using-looker-studio-and-reporting-tool">
                                        <Image
                                            src="/secondblog.png"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='mb-[3px] w-full'
                                        />
                                        <div className='flex items-center justify-between'>
                                        <div className='flex items-center justify-between gap-1'>
                                        <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3'>BLOG</span>
                                            </div>
                                            <div className='flex items-center justify-between gap-1'>
                                                <Image
                                                    src="/calendar1.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                />
                                                <span className='text-[10px] font-normal'>February 7, 2024</span>
                                            </div>
                                            
                                        </div>
                                        <h3 className='text-lg text-slate-900 text-start font-semibold whitespace-relaxed pt-5'>Your Ultimate Guide to Using Looker Studio and Reporting Tool</h3>
                                        <p className='align-middle text-left text-xs pt-4 pb-7 text-gray-500 leading-[21px]'>Obtaining data from the user interface of Google Analytics 4 (GA4) according to your specific requirements can be quite challenging and sometimes even impossible.</p>
                                        <div className='absolute bottom-[3%] 2xl:right-[30%] xl:right-[25%] lg:right-[20%]'>
                                            <div className='flex w-[180px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                                <div className='flex items-center justify-center gap-[5px]'>
                                                    <button className='font-medium text-[#4186F5] group-hover:text-white'>Read More</button>
                                                    <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:grid lg:w-[33%]'>
                            <h5 className='text-start text-[15px] font-normal leading-none text-maintext mb-2'>More blogs</h5>
                            <div className='third hidden lg:grid gap-[30px] 2xl:h-[540px] lg:h-[495px]'>
                                <div className='home-blog3 group rounded bg-no-repeat bg-cover border border-solid hover:border-[#979797] hover:shadow-serviceoffer p-[25px] pb-3 text-center relative'>
                                    <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>BLOG</span>
                                    <a href="/blogs/traversing-essentials-of-gdpr-cookie-consent" className='grid gap-1'>
                                        <div className='grid gap-4'>
                                            <Image
                                                src="https://storage.googleapis.com/website-bucket-uploads/static/public/blog3.png"
                                                width={500}
                                                height={500}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-full m-auto h-[130px] 2xl:h-[180px]'
                                            />
                                        </div>
                                        <h3 className='text-[13px] text-white font-medium text-start whitespace-relaxed pt-[15px]'>Traversing Essentials of GDPR Cookie Consent</h3>

                                    </a>
                                </div>
                                <div className='home-blog3 group rounded bg-no-repeat bg-cover border border-solid hover:border-[#979797] hover:shadow-serviceoffer p-[25px] pb-3 text-center relative'>
                                    <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>BLOG</span>
                                    <a href="/blogs/dv-360-ad-personalization-helpful-complex-privacy-breach" className='grid gap-1'>
                                        <div className='grid gap-4'>
                                            <Image
                                                src="https://storage.googleapis.com/website-bucket-uploads/static/public/blog.png"
                                                width={500}
                                                height={500}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='w-full m-auto h-[130px] 2xl:h-[180px]'
                                            />
                                        </div>
                                        <h3 className='text-[13px] text-white font-medium text-start whitespace-relaxed pt-[15px]'>Ad Personalization:  Helpful, Complex, Privacy Breach ?</h3>

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

export default Blogs
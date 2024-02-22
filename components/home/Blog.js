'use client'
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";

const Blogs = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <>
            <section className='blog'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div className='flex items-center justify-between'>
                        <span className='bg-[#4186F5] w-[140px] h-2.5'></span>
                        <h2 className='text-maintext text-[40px] font-bold not-italic text-center tracking-widest'>BLOGS</h2>
                        <span className='bg-[#4186F5] w-[140px] h-2.5'></span>
                    </div>
                    <div data-aos="zoom-in" data-aos-once="true" className='text-center grid lg:grid-cols-3 gap-4 p-8 md:p-12'>
                        <div>
                            <h5 className='text-start text-xl font-medium text-maintext mb-2'>Check out our latest blogs</h5>
                        <div className='first group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] text-center relative 2xl:h-[540px] lg:h-[495px]'>
                            <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>BLOG</span>
                            <a href="">
                                <Image
                                    src="/blog1.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    priority={true}
                                    className='mb-[13px] w-full'
                                />
                                <div className='flex items-center justify-between gap-3'>
                                    <div className='flex items-center justify-between gap-1'>
                                        <Image
                                            src="/calendar1.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                        <span className='text-[10px] font-normal'>15th Feb 2024</span>
                                    </div>
                                    <div className='flex items-center justify-between gap-1'>
                                        <Image
                                            src="/calendar2.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                        <span className='text-[10px] font-normal'>Abhishek Tiwari</span>
                                    </div>
                                </div>
                                <h3 className='text-lg text-slate-900 text-start font-semibold whitespace-relaxed pt-5'>AI-Powered Google Analytics 4 Insights</h3>
                                <p className='align-middle text-left text-xs pt-4 pb-7 text-gray-500'>Picture Google Analytics 4 (GA4) as a super-smart friend who uses Artificial Intelligence (AI) to help you understand your data better. It's like having a super detective for your business data, pointing out things you might have missed.</p>
                                <div className='2xl:mt-7'>
                                    <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                     <button className='font-medium text-[#4186F5] group-hover:text-white'>Read More</button>
                                        <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        </div>
                        <div className='second group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797]  hover:shadow-serviceoffer p-[25px] mt-[35px] text-center relative 2xl:h-[540px] lg:h-[495px]'>
                            <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>BLOG</span>
                            <a href="">
                                <Image
                                    src="/blog2.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    priority={true}
                                    className='mb-[13px] w-full'
                                />
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center justify-between gap-1'>
                                        <Image
                                            src="/calendar1.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                        <span className='text-[10px] font-normal'>07th Feb 2024</span>
                                    </div>
                                    <div className='flex items-center justify-between gap-1'>
                                        <Image
                                            src="/calendar2.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                        <span className='text-[10px] font-normal'>Atharva Tandale</span>
                                    </div>
                                </div>
                                <h3 className='text-lg text-slate-900 text-start font-semibold whitespace-relaxed pt-5'>Your Ultimate Guide to Using Looker Studio and Reporting Tool</h3>
                                <p className='align-middle text-left text-xs pt-4 pb-7 text-gray-500'>Obtaining data from the user interface of Google Analytics 4 (GA4) according to your specific requirements can be quite challenging and sometimes even impossible.</p>
                                <div className='xl:mt-3'>
                                    <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                      <button className='font-medium text-[#4186F5] group-hover:text-white'>Read More</button>
                                        <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='hidden lg:grid'>
                        <h5 className='text-start text-xl font-medium leading-none text-maintext mb-2'>Check out more blogs</h5>
                        <div className='third hidden lg:grid gap-2 2xl:h-[540px] lg:h-[495px] overflow-scroll'>
                            <div className='home-blog group rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] text-center relative'>
                                <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>BLOG</span>
                                <a href="" className='grid md:grid-cols-2 gap-1'>
                                    <div className='grid gap-4'>
                                        <Image
                                            src="/blog3.png"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='mb-[7px] w-full'
                                        />
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center justify-between gap-1'>
                                                <Image
                                                    src="/calendar1.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                />
                                                <span className='text-[5px] font-normal'>Jan 5, 2024</span>
                                            </div>
                                            <div className='flex items-center justify-between gap-1'>
                                                <Image
                                                    src="/calendar2.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                />
                                                <span className='text-[5px] font-normal'>Akanksha Porwal</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid gap-1'>
                                        <h3 className='text-[8px] text-slate-900 text-start font-semibold whitespace-relaxed'>Traversing Essentials of GDPR Cookie Consent</h3>
                                        <p className='align-middle text-left text-[6px] pt-1 pb-4 text-gray-500'>The GDPR Cookie consent is required by law in many jurisdictions, Started from the European Union, United States, and to the globe. It is the process of obtaining users' permission before storing their data, which can be used later for personalized Advertising.
The General Data Protection Regulation (GDPR) in the EU requires websites to obtain explicit consent from users before setting any non-essential cookies.</p>
                                        <div>
                                            <div className='flex m-auto items-center p-1 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                               <button className='font-medium text-[6px] text-[#4186F5] group-hover:text-white'>Read More</button>
                                                <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='home-blog group rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] text-center relative'>
                                <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>BLOG</span>
                                <a href="" className='grid md:grid-cols-2 gap-1'>
                                    <div className='grid gap-4'>
                                        <Image
                                            src="/blog.png"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='mb-[7px] w-full'
                                        />
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center justify-between gap-1'>
                                                <Image
                                                    src="/calendar1.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                />
                                                <span className='text-[5px] font-normal'>Dec 5, 2023</span>
                                            </div>
                                            <div className='flex items-center justify-between gap-1'>
                                                <Image
                                                    src="/calendar2.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                />
                                                <span className='text-[5px] font-normal'>Rajneesh Dhiman</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid gap-1'>
                                        <h3 className='text-[8px] text-slate-900 text-start font-semibold whitespace-relaxed'>Traversing Essentials of GDPR
                                            Cookie Consent</h3>
                                        <p className='align-middle text-left text-[6px] pt-1 pb-4 text-gray-500'>The GDPRCookie consent is required by law in many jurisdictions, Started from the European Union, United States, and to the globe. It is the process of obtaining users' permission before storing their data, which can be used later for personalized Advertising.</p>
                                        <div>
                                            <div className='flex m-auto items-center p-1 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                               <button className='font-medium text-[6px] text-[#4186F5] group-hover:text-white'>Read More</button>
                                                <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='home-blog group rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-serviceoffer p-[25px] text-center relative'>
                                <span className='bg-[#FFA9A3] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>BLOG</span>
                                <a href="" className='grid md:grid-cols-2 gap-1'>
                                    <div className='grid gap-4'>
                                        <Image
                                            src="/blog4.png"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            priority={true}
                                            className='mb-[7px] w-full'
                                        />
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center justify-between gap-1'>
                                                <Image
                                                    src="/calendar1.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                />
                                                <span className='text-[5px] font-normal'>Nov 28, 2023</span>
                                            </div>
                                            <div className='flex items-center justify-between gap-1'>
                                                <Image
                                                    src="/calendar2.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                />
                                                <span className='text-[5px] font-normal'>Shubhangi Chauhan</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid gap-1'>
                                        <h3 className='text-[8px] text-slate-900 text-start font-semibold whitespace-relaxed'>Empower Your Compliance Journey: Top GDPR Tools for 2023 Revealed!</h3>
                                        <p className='align-middle text-left text-[6px] pt-1 pb-4 text-gray-500'>Unravel the complexities of GDPR compliance effortlessly with our curated list of powerful tools designed to safeguard your organization's data practices. Since its enforcement in 2018, the General Data Protection Regulation (GDPR) has reshaped how businesses handle personal information.</p>
                                        <div>
                                            <div className='flex m-auto items-center p-1 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn'>
                                               <button className='font-medium text-[6px] text-[#4186F5] group-hover:text-white'>Read More</button>
                                                <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
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
        </>
    )
}

export default Blogs
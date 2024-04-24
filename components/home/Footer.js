'use client'
import React from 'react'
import Image from 'next/image'
import { FaSquareFacebook } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link'

const Footer = () => {
    const backgroundImageUrl = 'url("/src/assets/MAP.png")';

    return (
        <section className='homeftr relative overflow-hidden font-gilroy'>
            <div className='inrhomeftr relative'>

                <div className='px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 relative z-20'>
                    <footer className="bg-cover bg-opacity-60 f">
                        <div className='relative opacity-100'>
                            <div className='text-end flex items-center justify-start my-4 pb-5'>
                                <a href="/" className='inline-block'>
                                    <img src="AnalyticsLiv 3.png" alt="" className='w-[130px]' />
                                </a>
                            </div>
                            <div className='flex flex-wrap items-start justify-between pb-7'>
                                <div className='left-footer md:w-2/5 w-full pb-7'>
                                    <div className='text-left'>
                                        <div className='relative text-white'>
                                            <p className='text-[15px] font-medium leading-[1.3em] mb-4 uppercase'>Connect with us</p>
                                            <div className='flex items-center justify-start'>
                                                <div>
                                                    <div className='ml-0 flex items-center mb-4'>
                                                        <FaPhoneVolume className='w-[20px] h-[20px] mr-[7px]' />
                                                        <span className='text-[13px] font-normal leading-5'><a href="tel:+918320576622">+91 83205 76622</a></span>
                                                    </div>
                                                    <div className='ml-0 flex items-center mb-4'>
                                                        <IoIosMail className='w-[20px] h-[20px] mr-[7px]' />
                                                        <span className='text-[13px] font-normal leading-5'><a href="mailto:support@analyticsliv.com" className=''>support@analyticsliv.com</a></span>
                                                    </div>
                                                    <div className='ml-0 flex items-center mb-4'>
                                                        <FaLocationDot className='w-[20px] h-[20px] mr-[7px]' />
                                                        <span className='text-[13px] font-normal leading-5'><a href="https://maps.app.goo.gl/uhJUZFbZZTAL8qr57" className=''>503, 31FIVE, Corporate Rd, Makarba, <br /> Ahmedabad, Gujarat 380015</a></span>
                                                    </div>
                                                    <div className='ml-0 flex items-center mb-4'>
                                                        <FaLocationDot className='w-[20px] h-[20px] mr-[7px]' />
                                                        <span className='text-[13px] font-normal leading-5'><a href="https://maps.app.goo.gl/hGrtt44ZuX7ZrEH99" className=''>3104 E Camelback Rd ,Suite #7406, <br /> Phoenix, AZ 85016, USA</a></span>
                                                    </div>
                                                    <div className='ml-0 flex items-center mb-4'>
                                                        <FaLocationDot className='w-[20px] h-[20px] mr-[7px]' />
                                                        <span className='text-[13px] font-normal leading-5'><a href="https://maps.app.goo.gl/UKxCEvJCHZq9dzcZ8" className=''>Via Natale Prampolini, <br /> 15 - 00132, Roma, Italy</a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='social flex items-center justify-start lg:pl-0 -mr-[5px] text-white'>
                                            <a href="https://m.facebook.com/100070503960704/"><FaSquareFacebook className='w-[20px] h-[20px] mt-4 mr-2' /></a>
                                            <a href="https://in.linkedin.com/company/analytics-liv-digital/"><FaLinkedin className='w-[20px] h-[20px] mt-4 mx-2' /></a>
                                            <a href="https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw"><FaYoutube className='w-[20px] h-[20px] mt-4 mx-2' /></a>
                                            <a href="https://www.instagram.com/analyticsliv_digital/"><FaInstagramSquare className='w-[20px] h-[20px] mt-4 mx-2' /></a>
                                        </div>
                                    </div>
                                    <div className=' grid grid-cols-2 items-center justify-center mt-7 md:mb-0 rounded-[10px] shadow-foter1 lg:p-4 lg:w-9/12 w-[90%]'>
                                        <div className='sm:pr-5'>
                                            <Image
                                                src="/Help.png"
                                                width={200}
                                                height={200}
                                                alt="Picture of the author"
                                                priority={true}
                                                className='mx-auto my-6'
                                            />
                                        </div>
                                        <div className='text-center'>
                                            <Link href="/contact"><button className='ftbutn'>LET'S CONNECT</button></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='md:w-3/5 w-full flex flex-wrap items-start justify-end'>
                                    <div className='right-footer1  sm:w-[33.33%] w-full pb-7 sm:pt-0 pt-5'>
                                        <div className='text-[15px] text-[#ffffff] font-medium leading-[1.3em] mb-4 uppercase'>What We Do</div>
                                        <div className=''>
                                            <ul className='uppercase tracking-wider text-start'>
                                                <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/services/programatic-advertising">Advertising</Link> </li>
                                                <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/services/analytics?id=audit-and-health-check">Analytics</Link> </li>
                                                <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/services/analytics?id=audit-and-health-check#">Solutions</Link> </li>
                                                <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/services/training">Training</Link> </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='right-footer2  sm:w-[33.33%] w-full pb-7 sm:pt-0'>
                                        <div className='text-[15px] text-[#ffffff] font-medium leading-[1.3em] mb-4 uppercase'>Company</div>
                                        <div className=''>
                                            <ul className='uppercase tracking-wider text-start'>
                                                <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/about-us">Vision</Link> </li>
                                                <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/about-us">Mission</Link> </li>
                                                <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/about-us">About Team</Link> </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='right-footer2  sm:w-[33.33%] w-full pb-7 sm:pt-0'>
                                        <div className='text-[15px] text-[#ffffff] font-medium leading-[1.3em] mb-4 uppercase'>Quick Links</div>
                                        <div className=''>
                                            <ul className='uppercase tracking-wider text-start'>
                                                <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/blogs">Blogs</Link> </li>
                                                <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/case-studies">Case Study</Link> </li>
                                                <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/careers">Careers</Link> </li>
                                                <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/contact">Contact Us</Link> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='pb-6'>
                                <div className='bg-[#fdfdfd] w-full h-0.5 my-2'></div>
                            </div>

                            <div className='flex items-center md:justify-start justify-center'>
                                <div className='text-[14px] font-normal text-white'>© Created by Analytics Liv Digital LLP, In Collaboration With Collabro LLC, All rights reserved.</div>
                            </div>

                        </div>
                    </footer>
                </div>
            </div>
        </section>
    )
}

export default Footer
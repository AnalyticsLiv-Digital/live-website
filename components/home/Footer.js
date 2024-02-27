'use client'
import React from 'react'
import Image from 'next/image'
import { FaSquareFacebook } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import Link from 'next/link'

const Footer = () => {
    const backgroundImageUrl = 'url("/src/assets/MAP.png")';

    return (
        <section className='footer bg-homepagebg relative overflow-hidden'>
            {/* Back-Ground design  */}
            {/* <div className='absolute -top-[7%] right-0 w-[40%] h-[35%] flex'>
                < img className="bgd w-[570px] h-[300px] rounded-full blur-xl" />
            </div> */}
            {/*  */}
            {/* Back-Ground design  */}
            {/* <div className='absolute bottom-0 w-[33rem] h-[13rem]'>
                < img className="bgd2 w-[550px] h-[333px] rounded-full blur-xl" />
            </div> */}
            {/*  */}
            <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16 relative z-10'>
                <footer className="bg-cover bg-opacity-60 f">
                    <div className='relative opacity-100'>
                        <div className='top-footer w-[55%] m-auto'>
                            <div className=' grid md:grid-cols-2 items-center justify-center mt-7 rounded-[10px] shadow-foter p-4'>
                                <div className='sm:pr-11'>
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
                                    <h3 className='text-homepagebtn text-[22px] leading-normal font-semibold text-center sm:mt-6 mt-2 mb-4'>Need Quick Advice <br />Chat With Our Expert</h3>
                                    <a href="/contact"><button className='butn mt-4'>LET'S CONNECT</button></a>
                                </div>
                            </div>
                        </div>
                        <div className='botm-footer block lg:flex lg:justify-between text-sm text-[#000] sm:font-semibold font-medium pt-7'>
                            <div className='w-10/12 mx-auto text-center lg:text-left lg:w-[40%] py-4'>
                                <div className='relative'>
                                    <span className='text-[18px] leading-[1.3em]'>Connect with us</span>
                                    <div className='my-2 w-full h-0.5 bg-sky-800'></div>
                                    <div className='flex items-center lg:justify-start justify-center'>
                                        <div>
                                            <div className='ml-0 flex items-center mb-4'>
                                                <FaPhoneVolume className='w-6 h-6 mr-1' />
                                                <span className='text-[15px] leading-5'><a href="tel:+918320576622">+91 83205 76622</a></span>
                                            </div>
                                            <div className='ml-0 flex items-center mb-4'>
                                                <IoIosMail className='w-6 h-6 mr-1' />
                                                <span className='text-[15px] leading-5'><a href="mailto:support@analyticsliv.com" className=''>support@analyticsliv.com</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='social flex items-center justify-center lg:justify-start lg:pl-0 mr-[33px]'>
                                    <a href="https://m.facebook.com/100070503960704/"><FaSquareFacebook className='w-7 h-7 mt-4 mr-2' /></a>
                                    <a href="https://in.linkedin.com/company/analytics-liv-digital/"><FaLinkedin className='w-7 h-7 mt-4 mx-2' /></a>
                                    <a href="https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw"><FaYoutube className='w-7 h-7 mt-4 mx-2' /></a>
                                    <a href="https://www.instagram.com/analyticsliv_digital/"><FaInstagramSquare className='w-7 h-7 mt-4 mx-2' /></a>
                                </div>
                            </div>
                            <div className='quick-links lg:mt-4 mt-8 w-5/6 mx-auto lg:w-[40%]'>
                                <div className='text-center lg:text-right text-[18px] leading-[1.3em]'>Quick Links</div>
                                <div className='bg-sky-800 w-full h-0.5 my-2'></div>
                                <div className='lg:block hidden'>
                                    <ul className='uppercase tracking-wider md:space-x-2 md:flex lg:justify-end md:justify-center gap-5'>
                                        <li className='py-[10px] md:py-0 text-[15px] leading-5'> <Link href="/services">SERVICES</Link> </li>
                                        <li className='py-[10px] md:py-0 text-[15px] leading-5'> <Link href="/blogs">BLOGS</Link> </li>
                                        <li className='py-[10px] md:py-0 text-[15px] leading-5'> <Link href="/about-us">ABOUT US</Link> </li>
                                        <li className='py-[10px] md:py-0 text-[15px] leading-5'> <Link href="/contact">CONTACT</Link> </li>
                                        <li className='py-[10px] md:py-0 text-[15px] leading-5'> <Link href="/careers">CAREERS</Link> </li>
                                    </ul>
                                </div>
                                {/*  */}
                                <div className='lg:hidden block'>
                                    <div>
                                        <ul className='uppercase tracking-wider flex justify-between gap-5 mb-4'>
                                            <li className='py-[10px] md:py-0 text-[15px] leading-5'> <Link href="/services">SERVICES</Link> </li>
                                            <li className='py-[10px] md:py-0 text-[15px] leading-5'> <Link href="/blogs">BLOGS</Link> </li>
                                        </ul>
                                        <ul className='uppercase tracking-wider flex justify-between gap-5 mb-4'>
                                            <li className='py-[10px] md:py-0 text-[15px] leading-5'> <Link href="/about-us">ABOUT US</Link> </li>
                                            <li className='py-[10px] md:py-0 text-[15px] leading-5'> <Link href="/contact">CONTACT</Link> </li>
                                        </ul>
                                        <ul className='uppercase tracking-wider flex items-center justify-center text-center gap-5'>
                                            <li className='py-[10px] md:py-0 text-[15px] leading-5'> <Link href="/careers">CAREERS</Link> </li>
                                        </ul>
                                    </div>

                                </div>




                                {/*  */}
                                <div className='text-end flex items-end lg:justify-end justify-center'>
                                    <a href="/">
                                        <Image
                                            src="/AnalyticsLiv 2.png"
                                            width={200}
                                            height={200}
                                            alt="Picture of the author"
                                            priority={true}
                                        />
                                    </a>
                                </div>
                                <div className='text-center md:text-right text-[15px] font-normal'>© Created by Analytics Liv Digital LLP, All rights Reserved.</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Footer
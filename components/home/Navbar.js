'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubheaderVisible, setIsSubheaderVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
            <nav className='sticky container mx-auto min-w-full top-0 z-50 shadow-md bg-white'>
                <div className='hidden lg:flex py-6  flex-wrap px-4 lg:flex-row items-center justify-between h-[80px]'>
                    <div className='bg-white rounded-[40px] py-1 px-2'>
                        <a href='/' className='text-2xl font-semibold flex items-center space-x-3 w-52 h-12'>
                            <Image
                                src="https://storage.googleapis.com/website-bucket-uploads/static/public/analyticsLiv-logo.png"
                                width={500}
                                height={500}
                                alt="analyticsLiv-logo"
                                priority={true}
                            />
                        </a>
                    </div>
                    <div className='lg:flex lg:items-center text-center bg-white rounded-[40px] py-1 px-4'>
                        <ul className='lg:flex font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center uppercase tracking-wide cursor-pointer'>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/Services">Services</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/Resources">Resources</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/About">About Us</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/Contact">Contact</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/Careers" className='text-[#BE123C] hover:text-amber-500'>WE ARE HIRING</Link>
                            </li>
                        </ul>
                        <a href="/" className='text-2xl font-semibold w-52 h-12'>
                            <Image
                                src="/google_cerified.png"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </a>
                    </div>
                </div>
                {/*  */}
                <div className='lg:hidden p-2 sticky top-0 left-0 right-0 z-30 bg-white'>
                    <div className='relative flex items-center justify-between z-10'>
                        <div className='bg-white rounded-[40px] py-1 px-2'>
                            <a href="/">
                                <Image
                                    src="https://storage.googleapis.com/website-bucket-uploads/static/public/analyticsLiv-logo.png"
                                    width={200}
                                    height={200}
                                    alt="analyticsLiv-logo"
                                    className='inline-block h-10 md:mx-4 cursor-pointer'
                                />
                            </a>
                            <button onClick={toggleMenu} className=' absolute inline-flex right-2 top-1 items-center justify-center p-2 rounded-md text-gray-400 hover:text-slate-900 focus:outline-none '>
                                {
                                    isMenuOpen ? (<FaXmark className='w-6 h-6 text-gray-400 hover:text-slate-900' />) : (<FaBars className='w-6 h-6 text-gray-400 hover:text-slate-900' />)
                                }
                            </button>
                        </div>
                    </div>

                    <div className={`space-y-4 px-4 pt-20 grid pb-5 bg-white ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        <ul className='rounded-[40px] py-1 px-4 text-2xl'>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2 text-base font-medium'>
                                <Link href="/Services" onMouseEnter={() => setIsSubheaderVisible(true)} onMouseLeave={() => setIsSubheaderVisible(false)}>Services</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2 text-base font-medium'>
                                <Link href="/Resources">Resources</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2 text-base font-medium'>
                                <Link href="/About">About Us</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2 text-base font-medium'>
                                <Link href="/Contact">Contact</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2 text-base font-medium'>
                                <Link href="/Careers" className='text-[#BE123C] hover:text-amber-500'>WE ARE HIRING</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`subheader ${isSubheaderVisible ? 'opacity-100' : 'opacity-0'} absolute w-full text-sm  flex-col z-100 divide-y bg-gray-100 text-cyan-900 items-center align-middle font-semibold transition-opacity ease-in-out duration-300`}>
                    <div className='p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white left-0 absolute text-left w-full transition-all duration-150 ease-linear'>
                        <div className='container w-full flex flex-wrap justify-between mx-2'>
                            <ul
                                class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                <div class="flex items-center">

                                    <h3 class="text-heading font-poppins text-2xl font-bold">Marketing Services</h3>
                                </div> <br />

                                <div class="flex items-center py-3 gap-2
                                    ">
                                    <img src='/media-inner-mobile.png' />
                                        <a href="/services/app-marketing"
                                            class="text-heading font-poppins text-base font-medium leading-normal">Mobile app marketing</a>
                                </div>
                                <div class="flex items-center py-3 gap-2">
                                <img src='/media-inner-lead.png' />
                                    <a href="/services/lead-generation"
                                        class="text-heading font-poppins text-base font-medium leading-normal">Lead generation</a>
                                </div>
                                <div class="flex items-center py-3 gap-2">
                                    <img src="/media-inner-E-commerce.png" alt="paid_logo" class="w-[29px] -ml-[5px]" />
                                    <a href="/services/ecommerce-marketing"
                                        class="text-heading font-poppins text-base font-medium leading-normal">eCommerce Marketing</a>
                                </div>
                                <div class="flex items-center py-3 gap-2">
                                    <img src="/media-inner-paid.png" alt="paid_logo" />
                                    <a href="/services/programatic-advertising"
                                        class="text-heading font-poppins text-base font-medium leading-normal">Programmatic Media Solutions</a>
                                </div>
                                <div class="flex items-center py-3 gap-2">
                                    <img src="/SEM.png" alt="paid_logo" className='w-[23px]' />
                                    <a href="#"
                                        class="text-heading font-poppins text-base font-medium leading-normal">SEM</a>
                                </div>
                            </ul>
                            <ul
                                class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                <div class="flex items-center">

                                    <h3 class="text-heading font-poppins text-2xl font-bold">Analytics Services</h3>
                                </div> <br />

                                <div class="flex items-center py-3 gap-2
                                    ">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/public/Analytics-audit-logo.png" alt="audit_logo" />
                                    <a href="/services/analytics?id=audit-and-health-check"
                                        class="text-heading font-poppins text-base font-medium leading-normal">Audit
                                        and Health Check</a>
                                </div>
                                <div class="flex items-center py-3 gap-2">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_webapp_logo.png" alt="webapp_logo" />
                                    <a href="/services/analytics?id=web-app-measurement"
                                        class="text-heading font-poppins text-base font-medium leading-normal">Web
                                        and App measurement</a>
                                </div>
                                <div class="flex items-center py-3 gap-2">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/Analytis_data-reporting.logo.png"
                                            alt="data-reporting_logo" />
                                    <a href="/services/data-reporting-analysis"
                                        class="text-heading font-poppins text-base font-medium leading-normal">Data
                                        Reporting & Analysis</a>
                                </div>
                                <div class="flex items-center py-3 gap-2">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/public/Analytics_Looker.logo.png" alt="Looker_logo" />
                                    <a href="/services/looker-bi-platform"
                                        class="text-heading font-poppins text-base font-medium leading-normal">Looker
                                        BI Platform</a>
                                </div>
                            </ul>
                            <ul
                                class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                <div class="flex items-center">

                                    <h3 class="text-heading font-poppins text-[20px] font-bold">Solutions</h3>
                                </div> <br />

                                
                                <div class="flex items-center py-3 gap-2">
                                    <img src="/solutions_GDRP.logo.png" alt="GDRP_logo" />
                                    <a href="#"
                                        class="text-heading font-poppins text-base font-medium leading-normal">GDPR
                                        Compliance</a>
                                </div>
                                <div class="flex items-center py-3 gap-2">
                                    <img src="/Solutions_Data-Science.logo.png"
                                            alt="Data-Science_logo" />
                                    <a href="#"
                                        class="text-heading font-poppins text-base font-medium leading-normal">Data
                                        Science Solution & Automation</a>
                                </div>
                                <div class="flex items-center py-3 gap-2
                                    ">
                                    <img src="/solutions_Data_Attribution.png"
                                            alt="data-migration_logo" className='w-[23px]' />
                                    <a href="#"
                                        class="text-heading font-poppins text-base font-medium leading-normal">Custom Data Attribution Model</a>
                                </div>
                            </ul>
                            <ul
                                class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                <div class="flex items-center">
                                    <h3 class="text-heading font-poppins text-2xl font-bold">Training &
                                        Consultation</h3>
                                </div> <br />
                                <div class="flex items-center py-3 gap-2
                                    ">
                                    <img src="/training_Schedule.png"
                                            alt="Training-Details_logo" className='w-[24px]'/>
                                    <a href="/services/training"
                                        class="text-heading font-poppins text-base font-medium leading-normal">Schedule a One-Hour Consultation</a>
                                </div>
                                <div class="flex items-center py-3 gap-2
                                    ">
                                    <img src="/solutions_Training-Details.logo.png"
                                            alt="Training-Details_logo" />
                                    <a href="/services/training"
                                        class="text-heading font-poppins text-base font-medium leading-normal">Training
                                        Details</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*  */}
            </nav>
        </>
    )
}

export default Navbar
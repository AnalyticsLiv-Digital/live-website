import React from 'react'
import Advertising from '../components/dv360/Advertising'
import AnalyticsLiv from '../components/dv360/AnalyticsLiv'
import Businessfacing from '../components/dv360/Businessfacing'
import Buypremium from '../components/dv360/Buypremium'
import Casestudy from '../components/dv360/Casestudy'
import Clients from '../components/dv360/Clients'
import Contact from '../components/dv360/Contact'
import Discuss from '../components/dv360/Discuss'
import Globalreach from '../components/dv360/Globalreach'
import Leaders from '../components/dv360/Leaders'
import Services from '../components/dv360/Services'
import Targeting from '../components/dv360/Targeting'
import Navbar from '../components/dv360/Navbar'
import Link from 'next/link'
import * as Scroll from 'react-scroll';
import { useEffect, useState } from 'react';
import { Transition } from "@headlessui/react";
import ScrollProgress from '../components/ScrollProgress'
import Head from 'next/head'
import Home from '../components/programmaticAdvertising/Home'
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from 'next/image'

export default function ProgrammaticAdvertising() {
    const [isOpen, setIsOpen] = useState(false);
    const { Element: ScrollElement } = Scroll;

    const scrolling = () => {
        {
            Scroll.scroller.scrollTo("top", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }
    }


    const scrolling1 = () => {
        {
            Scroll.scroller.scrollTo("testimonials", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }
    }
    const scrolling2 = () => {
        {
            Scroll.scroller.scrollTo("services", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }
    }
    const scrolling4 = () => {
        {
            Scroll.scroller.scrollTo("case-studies", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }
    }
    const scrolling3 = () => {
        {
            Scroll.scroller.scrollTo("expertise", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }
    }

    return (
        <>
            <Head>
                <link rel="icon" href="https://storage.googleapis.com/website-bucket-uploads/static/favicon.png" type="image/icon type"></link>
                <meta name="description" content="Leading programmatic advertising agency offering programmatic marketing, buying, display, targeting & consultancy. Trusted by top ad companies." />
                <title>Top Programmatic Advertising Agency & Services</title>
                <link rel="canonical" href="https://analyticsliv.com/programmatic-advertising"></link>
            </Head>
            <header className="sticky min-w-full top-0 z-50 shadow-md bg-white">
                <div className="navbar hidden lg:flex py-2 h-auto flex-wrap px-4 lg:flex-row items-center justify-between">
                    <img alt="analyticsliv-logo" className="h-8 lg:ml-4 w-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" />
                    <nav className="lg:flex text-center">
                        <ul className="lg:flex text-base font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center tracking-wide cursor-pointer">
                            <li onClick={scrolling1} className="hover:text-amber-500">Testimonials</li>
                            <li onClick={scrolling2} className="hover:text-amber-500">Services</li>
                            <li onClick={scrolling3} className="hover:text-amber-500">Expertise</li>
                            <li onClick={scrolling4} className="hover:text-amber-500">Case Studies</li>

                        </ul>
                        <a href="tel:8320576622">
                            <button className="cta px-5 py-2 bg-sky-300 rounded-2xl mx-2 text-base font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
                        </a>
                        <a href='https://enterprisemarketingportal.google/auth/find-a-partner/analyticslivdigitalllp-in?a=42968127' className="hidden md:inline px-4">
                            <img alt="analyticsliv-gmp-partner" className="h-10 w-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg" />
                        </a>
                    </nav>
                </div>

                <div className="relative flex items-center lg:hidden p-2">
                    <img onClick={() => setIsOpen(false)} src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" alt='AnalyticsLiv Logo' className="relative h-8 md:mx-4" />
                    <a className="ml-4" href="tel:8320576622">
                        <button className="cta px-3 py-1.5 bg-sky-300 rounded-2xl mx-2 text-base font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
                    </a>
                    <button
                        onClick={() => { setIsOpen(!isOpen); }}
                        type="button"
                        className=" absolute inline-flex right-2 items-center justify-center p-2 rounded-md text-gray-400 hover:text-slate-900  focus:outline-none "
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {() => (
                        <div className="bg-white lg:hidden absolute w-full" id="mobile-menu">
                            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
                                <p onClick={() => { setIsOpen(!isOpen); scrolling1(); }}
                                    className=" text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <div>Testimonials</div>

                                </p>

                                <p onClick={() => { setIsOpen(!isOpen); scrolling2(); }}
                                    href="#"
                                    className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <div >Services</div>

                                </p>

                                <p onClick={() => { setIsOpen(!isOpen); scrolling3(); }}

                                    className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <div >Expertise</div>
                                </p>

                                <p onClick={() => { setIsOpen(!isOpen); scrolling4(); }}

                                    className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <div >Case Studies</div>
                                </p>


                            </div>
                        </div>
                    )}
                </Transition>
                <ScrollProgress color="red" showSpinner={false} />
            </header>

            <Home />
            <AnalyticsLiv />
            <section className='flex max-md:flex-col items-center justify-around px-[10%] py-10'>
                <div className='md:w-[50%]'>
                    <img src="/DV_Infographics_Transparent.png" alt="Programmatic Advertising" className=' lg:h-[400px]' />
                </div>
                <div className='md:w-[50%] text-start flex flex-col justify-center items-center pt-12 gap-5'>
                    <h2 className='text-2xl font-bold'>Run Brand Marketing & Performance Campaigns Programmatically</h2>
                    <h3 className='text-sm font-normal text-justify'>At AnalyticsLiv, we are a performance focused programmatic advertising agency helping brands scale with precision. Our team uses Display & Video 360 (DV360) and Sparkler to build high-impact campaigns, leveraging programmatic buying, targeting, and optimization to maximize both reach and return on ad spend.</h3>
                    <h3 className='text-sm font-normal text-justify'>As a full-service programmatic marketing agency, we design and execute campaigns that cover the entire digital funnel from awareness to conversion. Whether your goal is brand lift, video views, or sales, our DV360-certified experts deliver results with advanced tools, custom bidding strategies, and deep analytics.</h3>
                </div>
            </section>
            <ScrollElement id="testimonials" name="testimonials" ></ScrollElement>
            <Clients />
            <Advertising />
            <ScrollElement id="services" name="services" ></ScrollElement>
            <Services />
            <Globalreach />
            <Discuss />
            <Buypremium />
            <Targeting />
            <section className='busines-facing overflow-hidden'>
                <div className='w-full relative'>
                    <div className='firstbg lg:w-[99%] z-20 relative'>
                        <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-11'>
                            <div className='md:w-[70%]'>
                                <h3 className='text-[#fff] text-[30px] font-medium'>
                                    Your Expert Partner in Programmatic Marketing

                                </h3>
                                <p className='text-[#fff] text-sm font-medium pt-4'>AnalyticsLiv is among the most trusted programmatic ad companies, delivering measurable success across industries</p>
                                <p className='text-[#fff] text-sm font-medium pt-4 pb-8'>Whether you're looking to scale reach, drive conversions, or improve ROAS, our programmatic marketing experts are here to help.</p>
                                <div className='w-[200px]'>
                                    <div onClick={scrolling} className='flex items-center justify-between cursor-pointer gap-4 border border-solid border-[#fff] px-5 py-2 rounded-[10px] text-[#fff] text-[16px] font-bold leading-normal hover:bg-[#fff] hover:text-homepagebtn'>
                                        <button >Get in Touch</button>
                                        <FaArrowRightLong />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='secondbg absolute top-0 right-0 z-0 hidden lg:block'>
                        <Image
                            src="/Laptop hand.png"
                            width={500}
                            height={500}
                            alt="Picture of Media_planing"
                            className='lg:w-[500px] w-[270px] rr h-[382px]'
                        />
                    </div>
                </div>
            </section>
            <ScrollElement id="expertise" name="expertise" ></ScrollElement>
            <Leaders headingFontSize="32px" />
            <ScrollElement id="case-studies" name="case-studies" ></ScrollElement>
            <Casestudy />
            <Contact />
        </>
    )
}

'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Marquee from "react-fast-marquee";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { motion } from "framer-motion";
import * as Scroll from 'react-scroll';
import { Transition } from "@headlessui/react";
import ScrollProgress from '../components/ScrollProgress'

const ServerSideTracking = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { Element: ScrollElement } = Scroll;

    const scrolling = () => {
        {
            Scroll.scroller.scrollTo("form", {
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
            Scroll.scroller.scrollTo("why-us", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }

    }

    const scrolling4 = () => {
        {
            Scroll.scroller.scrollTo("faqs", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }

    }

    const scrolling3 = () => {
        {
            Scroll.scroller.scrollTo("additional-services", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }

    }
    // // // // Form // / // //
    const initialValues = { fullName: '', email: '', contact: '', message: '', website: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showWaiting, setShowWaiting] = useState(false);
    const [selected, setSelected] = useState("");
    const [formSubmit, setFormSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        //console.log(formValues);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    };

    useEffect(() => {
        //console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
            setShowWaiting(true);
            dataLayer.push({
                event: 'dv360_submission'
            });
            fetch('/api/gtmss', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'mode': 'no-cors'
                },
                body: JSON.stringify({
                    "fullName": formValues.fullName,
                    "email": formValues.email,
                    "contact": formValues.contact,
                    "message": formValues.message,
                    "website": formValues.website
                }),
            })
                .then((response) => response.json())
                .then((data) => {

                    setFormSubmit(true);
                    setShowWaiting(false);
                    window.open("https://calendly.com/analyticsliv/30min", '_blank');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const mobile = /^(?=.*\d).{8,}$/i;
        if (!values.fullName) {
            errors.fullName = "Name is required!";
        }





        if (!values.website) {
            errors.website = "Website is required!";
        }




        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        /*  if (!values.contact) {
              errors.contact = "Contact is required!";
          } else if (!mobile.test(values.contact)) {
              errors.contact = "This is not a valid phone number!";
          }
          */

        return errors;
    };

    // // // // Toggle // // // // //
    const Trusteddata = {
        brand: [
            { logo: "/ThoughtSpot_logo.png", alt: "ThoughtSpot" },
            { logo: "/Brizo_logo.png", alt: "Brizo" },
            { logo: "/bluecrew.png", alt: "BlueCrew" },
            { logo: "/edanz_logo.png", alt: "Edanz" },
            { logo: "/shoebacca.png", alt: "Shoebacca" },
            { logo: "/wholesalesockdeals.png", alt: "WholesaleSockDeals" }
        ]
    };
    const [isFs4mVisible, setIsFs4mVisible] = useState(false);
    const [isSec4mVisible, setIsSec4mVisible] = useState(false);
    const [isThr4mVisible, setIsThr4mVisible] = useState(false);
    const [isFur4mVisible, setIsFur4mVisible] = useState(false);

    const toggleFs4mVisibility = () => {
        setIsFs4mVisible(prevState => !prevState);
    };

    const toggleSec4mVisibility = () => {
        setIsSec4mVisible(prevState => !prevState);
    };

    const toggleThr4mVisibility = () => {
        setIsThr4mVisible(prevState => !prevState);
    };

    const toggleFur4mVisibility = () => {
        setIsFur4mVisible(prevState => !prevState);
    };
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 988,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    // // // // // FAQ SECTION // // // // // // // // // //   
    const [isFaqfstVisible, setIsFaqfstVisible] = useState(false);
    const [isFaqsecVisible, setIsFaqsecVisible] = useState(false);
    const [isFaqthrdVisible, setIsFaqthrdVisible] = useState(false);
    const [isFaqfurVisible, setIsFaqfurVisible] = useState(false);

    const toggleFaqfstVisibility = () => {
        setIsFaqfstVisible(prevState => !prevState);
    };
    const toggleFaqsecVisibility = () => {
        setIsFaqsecVisible(prevState => !prevState);
    };
    const toggleFaqthrdVisibility = () => {
        setIsFaqthrdVisible(prevState => !prevState);
    };
    const toggleFaqfurVisibility = () => {
        setIsFaqfurVisible(prevState => !prevState);
    };

    return (
        <>
            <Head>
                <link rel="icon" href="https://storage.googleapis.com/website-bucket-uploads/static/favicon.png" type="image/icon type"></link>
                <meta name="description" content="AnalyticsLiv Digital is one of the leading Web and App analytics agency. We help our customers embrace Google Products to improve their customer experiences." />
                <title>GTM Server Side - AnalyticsLiv</title>

            </Head>
            <header className="sticky min-w-full top-0 z-50 shadow-md bg-white">
                <div className="navbar hidden lg:flex py-2 h-auto flex-wrap px-4 lg:flex-row items-center justify-between">
                    <a className="">
                        <img alt="analyticsliv-logo" className="h-8 lg:ml-4 w-auto cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" />
                    </a>
                    <nav className="lg:flex text-center">
                        <ul className="lg:flex text-base font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center tracking-wide cursor-pointer">
                            <li onClick={scrolling1} className="hover:text-amber-500">Testimonials</li>
                            <li onClick={scrolling2} className="hover:text-amber-500">Why us</li>
                            <li onClick={scrolling3} className="hover:text-amber-500">Additional Services</li>
                            <li onClick={scrolling4} className="hover:text-amber-500">FAQs</li>

                        </ul>
                        <a href="tel:8320576622">
                            <button className="cta px-5 py-2 bg-sky-300 rounded-2xl mx-2 text-base font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
                        </a>
                        <span className="hidden md:inline px-4">
                            <img alt="analyticsliv-gmp-partner" className="h-10 w-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg" />
                        </span>
                    </nav>
                </div>


                <div className="relative  flex lg:hidden p-2">
                    <Link href="#"><img onClick={() => setIsOpen(false)} src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="relative h-10 md:mx-4 cursor-pointer" /></Link>
                    <a className="ml-4" href="tel:8320576622">
                        <button className="cta px-5 py-2 bg-sky-300 rounded-2xl mx-2 text-base font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
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
                                    <div >Why us</div>

                                </p>

                                <p onClick={() => { setIsOpen(!isOpen); scrolling3(); }}

                                    className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <div >Additional Services</div>
                                </p>

                                <p onClick={() => { setIsOpen(!isOpen); scrolling4(); }}

                                    className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <div >FAQs</div>
                                </p>


                            </div>
                        </div>
                    )}
                </Transition>
                <ScrollProgress color="red" showSpinner={false} />
            </header>


            <section className='ssthome w-full relative font-gilroy overflow-hidden' id='serverside '>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className='h-full'>
                        <div className="relative px-4 md:px-12 pt-8 md:pt-[10px] pb-8 md:pb-16 h-full z-20">

                            <ScrollElement id="serverside" name="serverside" ></ScrollElement>


                            <div className="z-10 flex lg:flex-nowrap items-center flex-wrap justify-between gap-7 pb-8">
                                <div className="w-full lg:w-1/2 order-1 lg:mt-8">
                                    <h1 className="lg:text-[41px] text-[32px] lg:leading-[62px] leading-normal font-gilroy font-normal text-[#006EF5] mb-4">
                                        The Future of Performance Marketing: Server-Side Tracking
                                    </h1>
                                    <h2 className="font-gilroy text-[20px] leading-[30px] font-normal text-[#152e55] mb-5">Cookieless, Compliant Data with Server-Side Tracking</h2>
                                    {/* <p className="text-base font-normal leading-[28px] mb-[10px]">
                                    Move Beyond Unsafe Browser Tracking and Unreliable Third-Party Cookies. Our Server-side Tracking Solution Provides Access to The Data You Need While Ensuring Full Compliance. With Major Platforms Phasing Out Cookie Support.
                                </p> */}
                                    <div className='flex items-center lg:justify-start justify-center gap-5'>

                                        <button onClick={scrolling} className="cursor-pointer bg-sky-500 hover:bg-sky-600 transition duration-200 delay-75 font-semibold text-white shadow-md shadow-gray-600 rounded-xl py-3 px-6 mt-2 uppercase">future-proof your <br /> analytics today</button>

                                    </div>
                                </div>
                                {/*  */}
                                <div className='w-full lg:w-1/2 flex items-center lg:justify-end justify-center order-2 relative md:my-0'>
                                    {/* <div className="relative flex md:justify-end justify-center my-4 md:my-0"> */}
                                        <div className="absolute rounded-full bg-sky-100 w-56 h-56 left-0 -top-10 z-0 blur-xl"></div>
                                        <div className="z-10 text-center bg-gray-50 py-8 md:p-8 md:w-3/4 rounded-xl shadow-xl shadow-gray-400">
                                            <ScrollElement
                                                id="contact-form"
                                                name="contact-form"
                                            ></ScrollElement>
                                            {!formSubmit && <div className="block">
                                                <h2 className="text-sky-900 md:p-0 p-[10px]">We understand the importance of Server-Side Tracking</h2>
                                                <h2 className="font-semibold text-2xl p-4 border-dashed border-b-2 border-sky-200">Let us help you !!</h2>
                                                <ScrollElement id="form" name="form" ></ScrollElement>

                                                <form className="px-4 md:pt-4 pb-2 space-y-4 text-gray-600" onSubmit={handleSubmit}>
                                                    <div>
                                                        <input type="text" placeholder="FULL NAME*" className="bg-transparent px-4 border-b-2 w-full py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="fullName" name="fullName" value={formValues.fullName} onChange={handleChange} />
                                                        <span className="text-xs text-red-600 float-left">{formErrors.fullName}</span>
                                                    </div>

                                                    <div>
                                                        <input type="email" placeholder="EMAIL*" className="bg-transparent border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="email" name="email" value={formValues.email} onChange={handleChange} />
                                                        <span className="text-xs text-red-600 float-left">{formErrors.email}</span>
                                                    </div>
                                                    <div>
                                                        <input type="tel" placeholder="CONTACT NO." className="bg-transparent border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="contact" name="contact" value={formValues.contact} onChange={handleChange} />

                                                    </div>
                                                    <div>
                                                        <input type="text" placeholder="WEBSITE*" className="bg-transparent px-4 border-b-2 w-full py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="website" name="website" value={formValues.website} onChange={handleChange} />
                                                        <span className="text-xs text-red-600 float-left">{formErrors.website}</span>
                                                    </div>
                                                    <div>
                                                        <textarea type="" placeholder="TYPE MESSAGE" className="bg-transparent border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="message" name="message" value={formValues.message} onChange={handleChange}></textarea>

                                                    </div>
                                                    <div>
                                                        <button className="cta cursor-pointer bg-sky-500 hover:bg-sky-600 transition duration-200 delay-75 font-semibold text-white px-8 py-2 rounded-xl shadow-md shadow-gray-600"> CONTACT US </button>
                                                    </div>
                                                </form>
                                            </div>}

                                            {formSubmit && <div>
                                                <h2 className="md:text-xl text-sky-900">Thank you for showing interest with us!</h2>
                                                <h2 className="font-semibold text-2xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">We will get back to you shortly !!</h2>
                                                <img alt="Thankyou image" className="w-64 mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg" />
                                            </div>}

                                        </div>
                                    {/* </div> */}
                                </div>
                                {/*  */}
                            </div>

                            <div className=''>
                                <div>
                                    <ScrollElement id="testimonials" name="testimonials"></ScrollElement>
                                    <h2 className='text-center font-bold font-gilroy text-base text-maintext leading-[24px]'>Trusted by Organisations Worldwide</h2>
                                </div>
                                <div className='w-[90%] m-auto'>
                                    <Marquee gradient={false} pauseOnHover="true">
                                        <div className='flex space-x-8 justify-center py-4 px-4 mt-[10px]'>
                                            {Trusteddata.brand.map((brand, index) => (
                                                <div key={index}>
                                                    <img src={brand.logo} alt={brand.alt} className='h-[50px] mx-5' />
                                                </div>
                                            ))}
                                        </div>
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sstwhy relative wepappour overflow-hidden'>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className="relative px-4 md:px-12 pt-8 pb-8 md:pb-16 z-20">
                        <div>
                            <h3 className='text-[32px] font-gilroy font-semibold text-[#18265b] leading-[1.5em]'>Why Server-Side Tracking Matters</h3>
                        </div>
                        <div className=''>
                            <h2 className='text-[19px] font-gilroy text-[#000] leading-[1.7em] my-5'>Traditional, client-side tracking relies on code placed on your website to collect user data. While convenient, it has limitations. Browser ad blockers can hinder data collection, and privacy regulations restrict how cookies can be used.</h2>
                            <p className='text-[18px] font-gilroy text-[#000] leading-[1.7em]'>Server-side tracking offers a robust alternative. Data is collected and processed on your server before being sent to analytics platforms.</p>
                            <div className='w-full py-7 grid lg:grid-cols-4 md:grid-cols-2 gap-10'>
                                <div className='fs border-[3px] border-[#00000014] border-solid hover:border-t-[#30486a] shadow-webappourexper rounded-b-[15px] p-5'>
                                    <div>
                                        <img src="/Data-Driven Approach blue.png" alt="" className='h-16 w-16' />
                                        <h6 className='text-base text-txt font-gilroy font-semibold mt-4 mb-6 leading-[27px]'>Enhanced Data Accuracy</h6>
                                    </div>
                                    <p className='text-xs font-gilroy2 font-normal leading-[22px]'>Overcome browser limitations and ad blockers to capture a more complete picture of user behavior.</p>
                                </div>
                                <div className='sd border-[3px] border-[#00000014] border-solid hover:border-t-[#30486a] shadow-webappourexper rounded-b-[15px] p-5'>
                                    <div>
                                        <img src="/Transparency You Can Trust blue.png" alt="" className='h-16 w-16' />
                                        <h6 className='text-base text-txt font-gilroy font-semibold mt-4 mb-6 leading-[27px]'>Improved Privacy Compliance</h6>
                                    </div>
                                    <p className='text-xs font-gilroy2 font-normal leading-[22px]'>Mitigate privacy concerns by giving you more control over data collection and storage.</p>
                                </div>
                                <div className='trd border-[3px] border-[#00000014] border-solid hover:border-t-[#30486a] shadow-webappourexper rounded-b-[15px] p-5'>
                                    <div>
                                        <img src="/Performance at the Forefront blue.png" alt="" className='h-16 w-16' />
                                        <h6 className='text-base text-txt font-gilroy font-semibold mt-4 mb-6 leading-[27px]'>Flexibility & Security</h6>
                                    </div>
                                    <p className='text-xs font-gilroy2 font-normal leading-[22px]'>Leverage server-side processing for complex data manipulation and analysis, ensuring data security.</p>
                                </div>
                                <div className='trd border-[3px] border-[#00000014] border-solid hover:border-t-[#30486a] shadow-webappourexper rounded-b-[15px] p-5'>
                                    <div>
                                        <img src="/Custom_Analytics_Solution.png" alt="" className='h-16 w-16' />
                                        <h6 className='text-base text-txt font-gilroy font-semibold mt-4 mb-6 leading-[27px]'>Deeper User Insights</h6>
                                    </div>
                                    <p className='text-xs font-gilroy2 font-normal leading-[22px]'>Gain a more holistic understanding of user journeys by combining server-side data with traditional web analytics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sstchoose powerup relative overflow-hidden'>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
                        <div>
                            <ScrollElement id="why-us" name="why-us" ></ScrollElement>
                            <h3 className='text-[32px] font-gilroy font-semibold text-[#fff] leading-[1.5em]'>Why Choose AnalyticsLiv for Server-Side Tracking?</h3>
                        </div>
                        <p className='text-[18px] font-gilroy text-[#fff] leading-[1.7em] my-5'>At AnalyticsLiv, we're experts in unlocking the power of server-side tracking. <br /> We offer </p>
                        <div className='lg:flex items-center justify-start lg:mt-10'>
                            {/* <div className='lg:w-[40%] w-full flex items-center justify-center'>
                            <img src="/Server_Side_tracking_sub_img.png" alt="" className='lg:h-auto md:h-[400px]' />
                        </div> */}
                            <div className='lg:w-[40%] w-full flex items-center justify-center'>
                                <img src="/Server_Side_tracking_sub_img_White_Circle.png" alt="" className='lg:h-auto md:h-[400px]' />
                            </div>
                            <div className='grid md:grid-cols-2 items-start lg:justify-start gap-7 lg:w-[60%] w-full lg:mt-0 mt-5'>
                                <div className={`fs4m pwb flex items-start gap-5 w-full max-[350px]:w-[285px] bg-[#0000001f] p-[25px] pt-6 border border-[#131314] hover:shadow-mediadv360 rounded-[10px] ${isFs4mVisible ? 'xl:h-[180px] lg:h-[200px]' : 'h-[100px]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full' onClick={toggleFs4mVisibility}>
                                            <div className={`flex items-center justify-between gap-5 text-[#ffffff] ${isFs4mVisible ? 'mb-6' : 'mb-0'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <div className='inbox relative mr-[13px]'>
                                                        <img src="/Market.png" alt="" className='h-12 w-12' />
                                                    </div>
                                                    <h2 className='text-base font-semibold font-gilroy text-[#ffffff] leading-normal'>Expertise & Experience</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isFs4mVisible ? <FaChevronUp className='w-5 h-10' /> : <FaChevronDown className='w-5 h-10' />}
                                                </div>
                                            </div>
                                            {isFs4mVisible && (
                                                <p className='text-xs font-medium text-[#ffffff] font-gilroy leading-[22px]'>
                                                    Our data analysts understand the intricacies of server-side implementation and optimization.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`sec4m pwb flex items-start gap-5 w-full max-[350px]:w-[285px] bg-[#0000001f] p-[25px] pt-6 border border-[#131314] hover:shadow-mediadv360 rounded-[10px] ${isSec4mVisible ? 'xl:h-[180px] lg:h-[200px]' : 'h-[100px]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full' onClick={toggleSec4mVisibility}>
                                            <div className={`flex items-center justify-between gap-5 text-[#ffffff] ${isSec4mVisible ? 'mb-6' : 'mb-0'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <div className='inbox relative mr-[13px]'>
                                                        <img src="/Message.png" alt="" className='h-12 w-12' />
                                                    </div>
                                                    <h2 className='text-base font-semibold font-gilroy text-[#ffffff] leading-normal'>Customizable Solutions</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isSec4mVisible ? <FaChevronUp className='w-5 h-10' /> : <FaChevronDown className='w-5 h-10' />}
                                                </div>
                                            </div>
                                            {isSec4mVisible && (
                                                <div>
                                                    <p className='text-xs font-medium text-[#ffffff] font-gilroy leading-[22px]'>We tailor server-side tracking solutions to your specific business needs and goals.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`thr4m pwb flex items-start gap-5 w-full max-[350px]:w-[285px] bg-[#0000001f] p-[25px] pt-6 border border-[#131314] hover:shadow-mediadv360 rounded-[10px] ${isThr4mVisible ? 'xl:h-[188px] lg:h-[205px]' : 'h-[100px]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full' onClick={() => toggleThr4mVisibility()}>
                                            <div className={`flex items-center justify-between gap-5 text-[#ffffff] ${isThr4mVisible ? 'mb-6' : 'mb-0'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <div className='inbox relative mr-[13px]'>
                                                        <img src="/Media.png" alt="" className='h-12 w-12' />
                                                    </div>
                                                    <h2 className='text-base font-semibold text-[#ffffff] font-gilroy leading-normal'>End-to-End Support</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isThr4mVisible ? <FaChevronUp className='w-5 h-10' /> : <FaChevronDown className='w-5 h-10' />}
                                                </div>
                                            </div>
                                            {isThr4mVisible && (
                                                <div>
                                                    <p className='text-xs font-medium text-[#ffffff] font-gilroy leading-[22px]'>We guide you through every step, from implementation to ongoing data analysis and reporting.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`fur4m pwb flex items-start gap-5 w-full max-[350px]:w-[285px] bg-[#0000001f] p-[25px] pt-6 border border-[#131314] hover:shadow-mediadv360 rounded-[10px] ${isFur4mVisible ? 'xl:h-[188px] lg:h-[205px]' : 'h-[100px]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full' onClick={() => toggleFur4mVisibility()}>
                                            <div className={`flex items-center justify-between gap-5 text-[#ffffff] ${isFur4mVisible ? 'mb-6' : 'mb-0'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <div className='inbox relative mr-[13px]'>
                                                        <img src="/Measurment.png" alt="" className='h-12 xl:w-[65px] lg:w-[100px] w-[50px]' />
                                                    </div>
                                                    <h2 className='text-base font-semibold text-[#ffffff] font-gilroy leading-normal'>Data Security & Compliance</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isFur4mVisible ? <FaChevronUp className='w-5 h-10' /> : <FaChevronDown className='w-5 h-10' />}
                                                </div>
                                            </div>
                                            {isFur4mVisible && (
                                                <div>
                                                    <p className='text-xs font-medium text-[#ffffff] font-gilroy leading-[22px]'>We prioritize data security and ensure compliance with relevant data privacy regulations.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sstframewrk font-gilroy'>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                        <h2 className='text-[32px] font-semibold text-[#18265b] leading-[1.5em] font-gilroy'>Our Framework for Implementing Server-Side Tracking</h2>
                        <p className='text-[18px] font-gilroy text-[#000] leading-[1.7em] my-5'>We follow a structured framework to ensure a seamless server-side tracking implementation:</p>
                        <div className='pt-10 gap-5'>
                            <Slider {...settings}>
                                <div aria-hidden="true" className="m-auto text-center">
                                    <div className='service1 relative w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                        <div className='flex items-center justify-center'>
                                            <Image
                                                src="/leader1.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of Media_planing"
                                            />
                                        </div>
                                        <h6 className='text-[#000] text-base font-gilroy font-semibold leading-normal pt-6'>Define Goals & Objectives</h6>
                                        <p className='text-[#000] text-xs font-gilroy font-medium pt-11 text-start leading-[22px]'>Identify your key tracking objectives (e.g., user behavior analysis, conversion rate optimization).</p>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="m-auto text-center">
                                    <div className='service2 relative w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                        <div className='flex items-center justify-center'>
                                            <Image
                                                src="/leader2.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of Media_planing"
                                            />
                                        </div>
                                        <h6 className='text-[#000] text-base font-gilroy font-semibold leading-normal pt-6'>Data Source Mapping</h6>
                                        <p className='text-[#000] text-xs font-gilroy font-medium pt-11 text-start leading-[22px]'>Determine the data points you want to collect and identify their sources (e.g., website interactions, user attributes).</p>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="m-auto text-center">
                                    <div className='service3 relative w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                        <div className='flex items-center justify-center'>
                                            <Image
                                                src="/leader3.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of Media_planing"
                                            />
                                        </div>
                                        <h6 className='text-[#000] text-base font-gilroy font-semibold leading-normal pt-6'>Server-Side Integration</h6>
                                        <p className='text-[#000] text-xs font-gilroy font-medium pt-11 text-start leading-[22px]'>Our team seamlessly integrates server-side tracking code with your website architecture.</p>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="m-auto text-center">
                                    <div className='service4 relative w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                        <div className='flex items-center justify-center'>
                                            <Image
                                                src="/leader4.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of Media_planing"
                                            />
                                        </div>
                                        <h6 className='text-[#000] text-base font-gilroy font-semibold leading-normal pt-6'>Data Collection & Validation</h6>
                                        <p className='text-[#000] text-xs font-gilroy font-medium pt-11 text-start leading-[22px]'>We establish secure data collection processes and validate data integrity.</p>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="m-auto text-center">
                                    <div className='service5 relative w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                        <div className='flex items-center justify-center'>
                                            <Image
                                                src="/leader5.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of Media_planing"
                                            />
                                        </div>
                                        <h6 className='text-[#000] text-base font-gilroy font-semibold leading-normal pt-6'>Integration with Analytics Platforms</h6>
                                        <p className='text-[#000] text-xs font-gilroy font-medium pt-11 text-start leading-[22px]'>We connect your server-side tracking data with your preferred analytics platforms.</p>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="m-auto text-center">
                                    <div className='service6 relative w-[329px] m-auto h-[286px] border border-solid border-[#E2E2E2] rounded-[10px] p-5 text-center'>
                                        <div className='flex items-center justify-center'>
                                            <Image
                                                src="/leader5.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of Media_planing"
                                            />
                                        </div>
                                        <h6 className='text-[#000] text-base font-gilroy font-semibold leading-normal pt-6'>Reporting & Optimization</h6>
                                        <p className='text-[#000] text-xs font-gilroy font-medium pt-11 text-start leading-[22px]'>We provide comprehensive reports and insights to help you understand user behavior and optimize your marketing efforts.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sstservice approach relative overflow-hidden font-gilroy'>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className='relative z-20 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                        <div>
                            <ScrollElement id="additional-services" name="additional-services" ></ScrollElement>
                            <div className='text-start'>
                                <h2 className='text-[32px] font-gilroy font-semibold text-[#fff] leading-[1.5em] tracking-wide text-left block'>Additional Services</h2>
                            </div>
                            <p className='text-[#fff] text-[18px] font-normal leading-normal pt-7 my-5'>In Addition to server-side tracking implementation, AnalyticsLiv offers a range of complementary services:</p>
                            <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center pt-8'>
                                <div className='lg:w-3/5'>
                                    <Image
                                        src="/Data_Science_Mid_Img.png"
                                        width={500}
                                        height={500}
                                        alt="Picture of Google Marketing Platform Partner"
                                        priority={true}
                                        className='lg:h-auto'
                                    />
                                </div>
                                <div className='lg:w-2/5 grid gap-4'>
                                    <div className="first group border hover:shadow-none shadow-serviceoffer border-solid border-[#13131400] rounded-[20px] p-5">
                                        <div className="flex items-start justify-start gap-4 pb-4">
                                            <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                                <Image
                                                    src="/service_need 1.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className=''
                                                />
                                            </div>
                                            <h6 className='text-base font-semibold text-[#fff] leading-normal'>Data Analytics & Visualization</h6>
                                        </div>
                                        <p className='text-xs font-normal text-[#fff] leading-[22px]'>We transform raw data into actionable insights with clear visualizations for informed decision-making.</p>
                                    </div>
                                    <div className="second group border hover:shadow-none shadow-serviceoffer border-solid border-[#13131400] rounded-[20px] p-5">
                                        <div className="flex items-start justify-start gap-4 pb-4">
                                            <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                                <Image
                                                    src="/service_need 2.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className=''
                                                />
                                            </div>
                                            <h6 className='text-base font-semibold text-[#fff] leading-normal'>Marketing Attribution Modeling</h6>
                                        </div>
                                        <p className='text-xs font-normal text-[#fff] leading-[22px]'>We help you understand which marketing channels contribute most to conversions.</p>
                                    </div>
                                    <div className="third group border hover:shadow-none shadow-serviceoffer border-solid border-[#13131400] rounded-[20px] p-5">
                                        <div className="flex items-start justify-start gap-4 pb-4">
                                            <div className='rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center'>
                                                <Image
                                                    src="/service_need 3.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="Picture of the author"
                                                    priority={true}
                                                    className=''
                                                />
                                            </div>
                                            <h6 className='text-base font-semibold text-[#fff] leading-normal'>Marketing Campaign Optimization</h6>
                                        </div>
                                        <p className='text-xs font-normal text-[#fff] leading-[22px]'>We leverage data insights to optimize your marketing campaigns for maximum return on investment (ROI).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sstcont progracont relative overflow-hidden font-gilroy'>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className='relative px-4 md:px-12 pt-8 pb-8 z-20'>
                        <div className='flex md:flex-nowrap flex-wrap items-center mx-auto'>
                            <div className='md:w-[66%] w-full'>
                                <div>
                                    <div>
                                        <div><h3 className='text-[#ffffff] text-[30px] leading-8 md:mb-[20px] mb-6 font-gilroy font-semibold'>Contact us</h3></div>
                                        <div>
                                            <div className='text-[#ffffff] text-base leading-8 md:mb-[15px] mb-6 font-gilroy2 font-medium'>
                                                <p className='text-[22px] mb-3'>Ready to Take Control of Your User Data?</p>
                                                Contact AnalyticsLiv today to schedule a free consultation and unlock the power of server-side tracking!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[33%] w-full'>
                                <div className='p-[10px] pl-0'>
                                    <div className='w-full flex lg:justify-end justify-center'>
                                        <div className='flex items-center md:justify-end justify-center'>
                                            {/* <Link href="/contact?id=programatic-advertising"> */}
                                            <button onClick={scrolling} className="border border-solid border-[#ffffff] bg-[#ffffff] text-[#de668a] text-base font-normal tracking-wider rounded-xl py-3 px-6">Let's Connect</button>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sstfaq relative overflow-hidden font-gilroy'>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className="relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20">
                        <div>
                            <ScrollElement id="faqs" name="faqs" ></ScrollElement>
                            <h3 className='text-[32px] font-semibold text-[#000000] leading-[1.5em] font-gilroy mb-2'>FAQ's</h3>
                        </div>
                        <div className='md:flex items-center justify-start mt-10'>
                            <div className='items-start lg:justify-start justify-center gap-7 w-full'>
                                <div className={`faqfst flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full text-[#000000]' onClick={toggleFaqfstVisibility}>
                                            <div className={`flex items-center w-full justify-between gap-5 ${isFaqfstVisible ? 'mb-[13px]' : 'mb-0'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <h2 className='text-[17px] font-medium leading-normal'>Is server-side tracking complex to implement?</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isFaqfstVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isFaqfstVisible && (
                                                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                    While server-side tracking requires technical expertise, AnalyticsLiv makes the process seamless. Our team guides you through every step, ensuring a smooth implementation.
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`faqsec flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full text-[#000000]' onClick={toggleFaqsecVisibility}>
                                            <div className={`flex items-center justify-between gap-5 ${isFaqsecVisible ? 'mb-[10px]' : 'mb-0'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <h2 className='text-[17px] font-medium leading-normal'>Can server-side tracking replace client-side tracking entirely?</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isFaqsecVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isFaqsecVisible && (
                                                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                    Server-side tracking offers distinct advantages, but it doesn't eliminate the need for client-side tracking entirely. They can work together to provide a more comprehensive view of user behavior.
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`faqthrd flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full text-[#000000]' onClick={() => toggleFaqthrdVisibility()}>
                                            <div className={`flex items-center justify-between gap-5 ${isFaqthrdVisible ? 'mb-[10px]' : 'mb-0'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <h2 className='text-[17px] font-medium leading-normal'>How does server-side tracking improve data security?</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isFaqthrdVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isFaqthrdVisible && (
                                                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                    By processing data on your server, you have greater control over data access and storage. Server-side tracking also reduces reliance on browser cookies, which can be vulnerable to security breaches.
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`faqfur flex items-start gap-5 mb-5 max-[350px]:w-[285px] powerbox2 p-[15px] border-b border-[#d5d8dc] hover:shadow-mediadv360 h-auto rounded-[10px]`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='cursor-pointer w-full text-[#000000]' onClick={() => toggleFaqfurVisibility()}>
                                            <div className={`flex items-center justify-between gap-5 ${isFaqfurVisible ? 'mb-[10px]' : 'mb-0'}`}>
                                                <div className='flex items-center justify-start'>
                                                    <h2 className='text-[17px] font-medium leading-normal'>How long does it take to see results from your solutions?</h2>
                                                </div>
                                                <div className='clk'>
                                                    {isFaqfurVisible ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
                                                </div>
                                            </div>
                                            {isFaqfurVisible && (
                                                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='text-[14px] font-medium leading-[1.7em] pb-2'>
                                                    The time to see results varies depending on the complexity of your data and the specific solution implemented. However, we prioritize delivering measurable impact quickly. Our agile approach allows for rapid prototyping, iterative refinements, and continuous optimization to ensure you start seeing value as soon as possible.
                                                </motion.div>
                                            )}
                                        </div>
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

export default ServerSideTracking
"use client"
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MetaSchemaOg from '../components/MetaSchemaOg';
import { InlineWidget } from 'react-calendly';
import Brands from '../components/brands';
import * as Scroll from 'react-scroll';
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/bootstrap.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { Transition } from '@headlessui/react'
import Head from 'next/head';

const { Element: ScrollElement } = Scroll;

const Ppc = () => {

    const sliderRef = useRef(null);
    const itemRefs = useRef([]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [showCalendly, setShowCalendly] = useState(false);

    const initialValues = { firstName: '', lastName: '', email: '', contactno: '', company: '', purpose: '', requirements: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showWaiting, setShowWaiting] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleContactChange = (e) => {
        setFormValues({ ...formValues, ['contactno']: e });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = [];
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!formValues?.firstName?.trim()) errors?.push("First Name");
        if (!formValues?.lastName?.trim()) errors?.push("Last Name");
        if (!formValues?.email?.trim() || !regex.test(formValues?.email)) errors?.push("Email");
        if (!formValues?.requirements) errors?.push("Requirements");
        console.log("formeror-", formValues?.requirements)
        console.log("errors?.length,", errors?.length)
        if (errors?.length > 0) {
            setFormErrors(errors);
            setIsLoading(false);
            return;
        }
        console.log("check log-", formErrors)
        // setFormErrors(validate(formValues));
        setIsSubmit(true);
        setShowWaiting(true);
        dataLayer.push({
            event: 'ga4_submission'
        });
        fetch('/api/ppccontact', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
            },
            body: JSON.stringify({
                "fullName": formValues.firstName + " " + formValues.lastName,
                // "lastName": formValues.lastName,
                "email": formValues.email,
                "contact": formValues.contactno,
                "message": formValues.requirements
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
                setShowWaiting(false);
            });

    };

    const scrolling = () => {
        {
            Scroll.scroller.scrollTo("contact-form", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }
    }

    const scrolling1 = () => {
        {
            Scroll.scroller.scrollTo("expertise", {
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

    const scrolling3 = () => {
        {
            Scroll.scroller.scrollTo("why-analyticsliv", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }
    }

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);

        setTimeout(() => {
            if (itemRefs.current[index]) {
                itemRefs.current[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }
        }, 100);

    };

    const content = [
        {
            question: "What can I expect from AnalyticsLiv’s PPC services?",
            answer:
                "We work closely with you to develop a custom strategy, manage the campaigns, and ensure you get clear insights through ongoing reports and optimizations.",
        },
        {
            question: "What’s the difference between Performance Marketing and SEO?",
            answer:
                "While SEO focuses on organic visibility, performance marketing like Google Ads drives instant traffic and conversions with measurable returns.",
        },
        {
            question: "How much do PPC services cost?",
            answer:
                "We offer flexible packages tailored to your goals. Whether you need a white label PPC agency, local PPC expert, or full-scale Google Ads services agency, we have a solution.",
        },
        {
            question: "What results can I expect?",
            answer:
                "Our clients typically see increases in leads, improved ROAS, and scalable growth within weeks of campaign launch.",
        },
    ];

    const cardsData = [
        {
            title: 'Local Google Advertising Campaigns',
            description: "From Google Maps to local search ads, we run hyper-targeted campaigns that put your business in front of nearby customers, driving calls, store visits, and local leads.",
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Remarketing_%20and_Retargeting.svg',
        },
        {
            title: 'Google Ads for Small Business',
            description: 'We create cost-effective campaigns for small businesses, helping you compete with larger brands, attract the right audience, and maximize visibility within your budget.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Keyword_Research_and_Strategy.svg',
        },
        {
            title: 'PPC Marketing for eCommerce',
            description: 'Our data-driven PPC strategies help eCommerce brands scale by driving high-intent traffic, boosting product sales, and optimizing campaigns for maximum profitability.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Campaign_Setup_and_Management.svg',
        },
        {
            title: 'White Label PPC Services for Agencies',
            description: 'We support marketing agencies with seamless white-label PPC services, enabling you to deliver expert campaign management under your own brand without additional overhead.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Ad_Copywriting_and_Optimization.svg',
        },
        {
            title: 'Google Ads for Small Business',
            description: 'We create cost-effective campaigns for small businesses, helping you compete with larger brands, attract the right audience, and maximize visibility within your budget.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Keyword_Research_and_Strategy.svg',
        },
        {
            title: 'PPC Marketing for eCommerce',
            description: 'Our data-driven PPC strategies help eCommerce brands scale by driving high-intent traffic, boosting product sales, and optimizing campaigns for maximum profitability.',
            image: 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Campaign_Setup_and_Management.svg',
        },
    ];

    const settings = {
        infinite: true,
        initialSlide: 0.5,
        slidesToShow: 2.5,
        slidesToScroll: 1.5,
        arrows: true,
        dots: true,
        swipe: true,
        touchMove: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1184,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    initialSlide: 0.5,
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    initialSlide: 0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settingsMobile = {
        infinite: true,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
    };

    const handleNext = () => sliderRef.current.slickNext();
    const handlePrev = () => sliderRef.current.slickPrev();

    const handleCalendly = () => {
        setShowCalendly(true);
    }

    return (
        <>
            <Head>
                <link rel="icon" href="https://storage.googleapis.com/website-bucket-uploads/static/favicon.png" type="image/icon type"></link>
            </Head>
            <MetaSchemaOg
                url="https://analyticsliv.com/ppc"
                title="Google Ads Services Agency | PPC Experts | AnalyticsLiv"
                description="Drive traffic & leads with certified Google Ads experts. AnalyticsLiv offers PPC management, eCommerce ads & white label PPC services for businesses."
                twitterTitle="Google Ads Services Agency | PPC Experts | AnalyticsLiv"
                twitterDescription="Drive traffic & leads with certified Google Ads experts. AnalyticsLiv offers PPC management, eCommerce ads & white label PPC services for businesses."
                extraHead={
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
                    />
                }
                faqData={content}
            />
            <nav className='flex max-lg:hidden justify-around items-center py-3 px-[4%]'>
                <div className='md:w-[25%] 2xl:w-[40%]'>
                    <img alt="logo" className="w-[200px] 2xl:w-[250px]" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" />
                </div>
                <div className="mdLw-[75%] 2xl:w-[55%] text-[#0F172A] lg:flex text-center items-center justify-evenly">
                    <ul className="lg:flex w-full text-sm xl:text-base font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center tracking-wide cursor-pointer">
                        <button onClick={scrolling1} className="hover:underline hover:text-black">Expertise</button>
                        <button onClick={scrolling2} className="hover:underline hover:text-black">Services</button>
                        <button onClick={scrolling3} className="hover:underline hover:text-black">What you'll get</button>
                    </ul>
                    <a href="tel:8320576622">
                        <button className="mainbutn-opposite">Call Us Now</button>
                    </a>
                </div>
                <img alt="gmp partner" className="h-10 w-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg" />
            </nav>

            {/* mobile menu */}
            <div className='z-50 relative'>
                <div className="relative z-30 flex lg:hidden p-2">
                    <Link href="/"><img onClick={() => setIsOpen(false)} src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" alt='AnalyticsLiv Logo' className="relative h-10 md:mx-4 cursor-pointer" /></Link>
                    {/* <a className="ml-4" href="tel:8320576622">
                            <button className="cta px-5 py-2 bg-sky-300 rounded-2xl mx-2 text-sm font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
                        </a> */}
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
                        <div className="bg-white z-50 lg:hidden absolute w-full" id="mobile-menu">
                            <div className="px-4 pt-2 z-50 pb-3 space-y-1 sm:px-3">
                                <p onClick={() => { setIsOpen(!isOpen); scrolling1(); }}
                                    className=" text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <div>Expertise</div>
                                </p>
                                <p onClick={() => { setIsOpen(!isOpen); scrolling2(); }}
                                    href="#"
                                    className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <div >Services</div>

                                </p>
                                <p onClick={() => { setIsOpen(!isOpen); scrolling3(); }}
                                    href="#"
                                    className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <div >What you'll get</div>

                                </p>
                                <a href="tel:8320576622">
                                    <button className="ga4butn-opposite">Call Us Now</button>
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </div>

            <main className='pt-10'>
                {showCalendly && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex items-center justify-center p-4"
                        onClick={() => setShowCalendly(false)}>
                        <div className="relative bg-white rounded-lg shadow-lg sm:p-4 flex flex-col items-center justify-center 
                        max-w-[380px] w-[100%] sm:w-[90%] h-[80vh] sm:max-w-[400px] sm:h-[450px] lg:max-w-[450px] lg:h-[500px]">

                            <button
                                className="absolute top-1 left-1 text-gray-500 text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center"
                                onClick={() => setShowCalendly(false)}
                            >
                                ✖
                            </button>

                            <div className="w-full h-full flex justify-center items-center">
                                <InlineWidget
                                    url="https://calendly.com/analyticsliv/30min"
                                    styles={{ width: "100%", height: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                )}

                <section className='flex max-lg:flex-col justify-between items-center px-[5%]'>
                    <div className='lg:w-[50%] xl:w-[45%] flex flex-col gap-7 md:gap-14 2xl:gap-16 justify-around items-center lg:items-start'>
                        <div className='flex flex-col gap-5 lg:gap-8 2xl:gap-10'>
                            <h1 className='text-[#0E1947] text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold max-lg:text-center'>Drive Qualified Traffic & Leads with Powerful Performance Marketing Strategies</h1>
                            <h2 className='text-xs 2xl:text-sm font-normal max-lg:text-center'>At AnalyticsLiv, we are a Certified Performance Marketing
                                Agency that specializes in Google Ads services, PPC marketing, and data-driven ad strategies. Whether you're a startup or
                                an established brand, our campaigns are tailored to drive measurable results, boost visibility, and grow your business.
                            </h2>
                            <div className='flex justify-center lg:justify-start items-center gap-3 lg:gap-2 lg:gap-5'>
                                <a href='/contact'><button className='mainbutn'>Talk to our PPC Expert</button></a>
                                <div onClick={() => handleCalendly()} className='group hover:cursor-pointer flex items-center gap-2'>
                                    <button className='text-xs 2xl:text-sm translate-x-1 group-hover:translate-x-0 transition-all duration-300 font-bold max-sm:w-full max-lg:text-center'>Book a Call Today</button>
                                    <div className="opacity-0 translate-x-2 sm:translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Stroke%201.svg' alt='arrow right' className='w-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex max-lg:justify-center justify-start items-center gap-7 lg:gap-10'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/clutch_review.png' alt='clutch_review' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/trustpilot_review.png' alt='trustpilot_review' className='max-sm:hidden' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Trustpilot_mobile.svg' alt='trustpilot_review' className='sm:hidden' />
                        </div>
                    </div>

                    <div className='lg:w-[500px] max-md:mt-12 shadow-ga4FormShadow rounded-[20px] max-lg:px-5 max-lg:py-6 lg:p-6 2xl:p-8 '>

                        <ScrollElement id="contact-form" name="contact-form"></ScrollElement>
                        {
                            formSubmit ?
                                <div>
                                    <div className='analyticsliv-form-thankyou flex flex-col justify-around md:h-[420px] items-center gap-4 relative text-slate-700'>
                                        <img
                                            src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Thank_You_img.png'
                                            alt='analyticsLiv'
                                            className="w-44 xl:w-80" />
                                        <h2 className='align-middle text-xl text-center'>We will get back to you soon.</h2>
                                    </div>
                                </div>
                                :
                                <div className='landing-form flex flex-col gap-[15px] 2xl:gap-[18px]'>
                                    <div className='text-center flex flex-col gap-[5px]'>
                                        <div className='text-[17px] font-extrabold'>Expert PPC Strategies That Work</div>
                                        <div className='text-[13px] font-normal'>Leverage expert-led campaigns to increase traffic, conversions, and brand reach with precision targeting</div>
                                    </div>
                                    <form onSubmit={handleSubmit} className='flex flex-col gap-[14px] 2xl:gap-[16px]'>
                                        <div className='flex flex-col gap-4 2xl:gap-[14px]'>
                                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                                <div>
                                                    <div className='text-sm 2xl:text-[13px] font-semibold text-[#14183E] pb-1 2xl:pb-0.5'>First Name*</div>
                                                    <input type="text" placeholder="First Name" className="text-sm 2xl:text-base px-4 py-2 2xl:py-2 border-[0.5px] border-[#D2D5DA] focus:border-[1.5px] focus:border-[#08A4F7] shadow-inputShadow rounded-md w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                                                        id="firstName" name="firstName" value={formValues?.firstName} onChange={handleChange} />
                                                    <p className="text-red-600 text-sm">{formErrors?.firstName}</p>
                                                </div>
                                                <div>
                                                    <div className='text-sm 2xl:text-[13px] font-semibold text-[#14183E] pb-1 2xl:pb-0.5'>Last Name*</div>
                                                    <input type="text" placeholder="Last Name" className="text-sm 2xl:text-base px-4 py-2 2xl:py-2 border-[0.5px] border-[#D2D5DA] focus:border-[1.5px] focus:border-[#08A4F7] shadow-inputShadow rounded-md w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                                                        id="lastName" name="lastName" value={formValues?.lastName} onChange={handleChange} />
                                                    <p className="text-red-600 text-sm">{formErrors?.lastName}</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <label className="text-sm 2xl:text-[13px] font-semibold text-[#14183E]">Contact No</label>
                                                <PhoneInput
                                                    containerClass="custom-phone-input-container"
                                                    inputClass="custom-phone-input"
                                                    required
                                                    containerStyle={{
                                                        width: '100%',
                                                        height: '45px',
                                                        boxShadow: '0px 2px 2px 0px #0000000D'
                                                    }}
                                                    inputStyle={{
                                                        width: '100%',
                                                        height: '30px',
                                                        marginTop: '6px',
                                                        border: '0.5px solid #D2D5DA',
                                                        borderRadius: '8px',
                                                        fontSize: '14px',
                                                        paddingLeft: '60px',
                                                    }}
                                                    buttonStyle={{
                                                        border: 'none',
                                                        borderRadius: '8px 0 0 8px',
                                                    }}
                                                    name="contactno"
                                                    id="contact"
                                                    value={formValues?.contactno}
                                                    onChange={handleContactChange}
                                                    country={"in"}
                                                    preferredCountries={['in', 'us', 'au']}
                                                    enableSearch={true}
                                                />
                                            </div>
                                            <div className='w-full'>
                                                <div className='text-sm 2xl:text-[13px] font-semibold text-[#14183E] pb-1 lg:pb-[5px] lg:pt-1 2xl:pt-0 2xl:pb-0.5'>Email*</div>
                                                <input type="email" id='email' placeholder="Enter Your Email" className="text-sm 2xl:text-base px-5 py-2 2xl:py-2 border-[0.5px] border-[#D2D5DA] focus:border-[1.5px] focus:border-[#08A4F7] shadow-inputShadow rounded-md w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                                                    name="email" value={formValues?.email} onChange={handleChange} />
                                                <p className="text-red-600 text-sm">{formErrors?.email}</p>

                                            </div>
                                            <div className=''>
                                                <div className='text-sm 2xl:text-[13px] font-semibold text-[#14183E] pb-1 2xl:pb-0.5'>Requirements*</div>
                                                <textarea placeholder="Write Message..." rows={2} className="text-sm 2xl:text-base px-5 py-2 border-[0.5px] border-[#D2D5DA] focus:border-[1.5px] focus:border-[#08A4F7] shadow-inputShadow rounded-md md:col-span-2 max-h-20 overflow-auto w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                                                    id="requirements" name="requirements" value={formValues?.requirements} onChange={handleChange}></textarea>

                                                <p className="text-red-600 text-sm">{formErrors?.requirements}</p>

                                                {
                                                    formErrors?.length > 0 &&
                                                    <p className="text-red-500 text-xs font-medium text-left w-full pl-2 pt-1">
                                                        {formErrors?.join(", ")} {formErrors?.length === 1 ? "is" : "are"} required.
                                                    </p>
                                                }
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <button disabled={showWaiting} className={`${showWaiting ? 'cursor-not-allowed' : 'cursor-pointer'} mainbutn w-full`}>
                                                {showWaiting ? 'Loading...' : 'Contact Us'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                        }
                    </div>
                </section>

                <section className='px-4 md:px-[5%] py-12'>
                    <Brands />
                </section>

                <section id='expertise' className='px-4 lg:px-[5%] md:pt-6 flex max-md:flex-col justify-center items-center gap-8 md:gap-5 lg:gap-24 2xl:gap-10'>
                    <div className='md:w-[50%] flex justify-center'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Choose_img_Left_crop.png' alt='why choose us' className='' />
                    </div>
                    <div className='md:w-[50%] flex flex-col gap-5'>
                        <h2 className='text-[#0E1947] text-lg xl:text-[27px] 2xl:text-3xl font-bold'>
                            Why to Choose a Performance Marketing Agency for Your Business?
                        </h2>
                        <div className='text-sm font-normal'>We’re more than just a Google Ads agency - we are your strategic partner for consistent growth and ROI.</div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex max-2xl:items-center gap-4'>
                                <div className='bg-[#F0FCFF] max-2xl:min-w-[30px] max-2xl:min-h-[30px] 2xl:p-2.5 max-2xl:flex max-2xl:justify-center max-2xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-2xl:w-5 rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <h4 className='text-[#0E1947] text-base font-bold'>Targeted Reach</h4>
                                    <div className='text-xs font-normal'>Get in front of potential customers actively searching for what you offer with Google Business Advertising.</div>
                                </div>
                            </div>
                            <div className='flex max-2xl:items-center gap-4'>
                                <div className='bg-[#F0FCFF] max-2xl:min-w-[30px] max-2xl:min-h-[30px] 2xl:p-2.5 max-2xl:flex max-2xl:justify-center max-2xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-2xl:w-5 rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <h4 className='text-[#0E1947] text-base font-bold'>Increased Visibility</h4>
                                    <div className='text-xs font-normal'>Achieve top placements on Google Search and Microsoft Ads platforms.</div>
                                </div>
                            </div>
                            <div className='flex max-2xl:items-center gap-4'>
                                <div className='bg-[#F0FCFF] max-2xl:min-w-[30px] max-2xl:min-h-[30px] 2xl:p-2.5 max-2xl:flex max-2xl:justify-center max-2xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-2xl:w-5 rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <h4 className='text-[#0E1947] text-base font-bold'>Measurable Results</h4>
                                    <div className='text-xs font-normal'>With our PPC management services, track performance through transparent, real-time reporting.</div>
                                </div>
                            </div>
                            <div className='flex max-2xl:items-center gap-4'>
                                <div className='bg-[#F0FCFF] max-2xl:min-w-[30px] max-2xl:min-h-[30px] 2xl:p-2.5 max-2xl:flex max-2xl:justify-center max-2xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-2xl:w-5 rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <h4 className='text-[#0E1947] text-base font-bold'>Improved Brand Awareness</h4>
                                    <div className='text-xs font-normal'>Position your business as a leader with consistent, high-impact ad visibility.</div>
                                </div>
                            </div>
                            <div className='flex max-2xl:items-center gap-4'>
                                <div className='bg-[#F0FCFF] max-2xl:min-w-[30px] max-2xl:min-h-[30px] 2xl:p-2.5 max-2xl:flex max-2xl:justify-center max-2xl:items-center rounded-[5px]'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Tick%20Square.svg' alt='tick squar'
                                        className='max-2xl:w-5 rounded-[5px]' />
                                </div>
                                <div className='flex flex-col items-start justify-between'>
                                    <h4 className='text-[#0E1947] text-base font-bold'>Cost-Effective Lead Generation</h4>
                                    <div className='text-xs font-normal'>Compared to traditional marketing, Google advertising services bring in quality leads at a better ROI.</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={scrolling} className='mainbutn'>Contact Now</button>
                        </div>
                    </div>
                </section>

                <section id='services' className="ana-services pt-14 pb-14 xl:pt-16 lg:pl-10 2xl:pl-[5%] max-md:overflow-hidden">
                    <div className="flex max-md:flex-col items-center justify-between px-[3%]">
                        <div className="md:w-[60%] max-md:px-4 flex flex-col justify-start">
                            <h2 className="text-[#100F1B] text-xl md:text-3xl font-bold text-center md:text-start">
                                Our Proven Performance Marketing Process
                            </h2>
                            <div className="text-[#373642] max-md:text-center text-[13px] md:text-base font-normal pt-8">
                                In today's digital world, it's critical to rank on search engines and dominate ad space.
                                As a Google Ads management company, our strategy combines intent-based targeting, compelling creatives,
                                and real-time data optimization.
                            </div>
                        </div>
                        <div className="flex flex-col max-sm:hidden justify-center items-center gap-2 max-md:pt-5">
                            <div className="flex justify-center items-center gap-5">
                                <button
                                    onClick={handlePrev}
                                    className="carousel-button group relative overflow-hidden z-10 bg-white border border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline rounded-[8px] px-4 py-3 mb-3 transition-all duration-300 ease-linear hover:bg-[#08A4F7]"
                                >
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector%20(1).svg' alt='left vector' className='w-3.5 h-3.5 group-hover:hidden block' />

                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Stroke%20right%20white.svg' alt='right vector' className='w-3.5 h-3.5 hidden group-hover:block' />

                                </button>
                                <button
                                    onClick={handleNext}
                                    className="carousel-button group relative overflow-hidden z-10 bg-white border border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline rounded-[8px] px-4 py-3 mb-3 transition-all duration-300 ease-linear hover:bg-[#08A4F7]"
                                >
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector.svg' alt='right vector' className='w-3.5 h-3.5 group-hover:hidden block' />
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Stroke%20left%20white.svg' alt='left vector' className='w-3.5 h-3.5 hidden group-hover:block' />
                                </button>
                            </div>
                            {/* <a href='/services'><button className="mainbutn-opposite">Read More Here</button></a> */}
                        </div>
                    </div>
                    <div className="max-sm:hidden sm:pl-5 xl:pl-[3%] py-8 carousel-custom overflow-hidden">
                        <Slider ref={sliderRef} {...settings}>
                            {cardsData?.map((card, index) => (
                                <div key={index} className=" custom-padding-370 custom-padding-540 sm:px-4 flex justify-center">
                                    <div className="border rounded-3xl border-[#F2F2F2] mx-auto h-[280px] w-[320px] md:w-[440px] lg:w-[420px] 2xl:w-[480px]">
                                        <div className="h-[140px] text-[#373642] text-sm font-normal p-5 md:p-8">
                                            {card.description}
                                        </div>
                                        <div className="h-[140px] bg-[#08A4F7] rounded-b-3xl">
                                            <div className="flex items-center">
                                                <div className="w-[30%] h-[100px] pl-2 md:pl-3 2xl:pl-8">
                                                    <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/white_bg.png" alt="white_bg" className="absolute max-md:h-24 max-md:w-24" />
                                                    <img src={card.image} alt={card.title} className="relative max-md:h-16 max-md:w-16 md:w-16 top-4 left-4 md:top-5 md:left-5" />
                                                </div>
                                                <div className="flex flex-col max-md:pl-10 h-[140px] items-start justify-center gap-1 text-white">
                                                    <div className="text-xl font-bold">{card.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="sm:hidden sm:pl-5 xl:pl-16 py-8 carousel-custom overflow-hidden">
                        <Slider {...settingsMobile}>
                            {cardsData?.map((card, index) => (
                                <div key={index} className="sm:px-4 flex justify-center">
                                    <div className="border rounded-3xl border-[#F2F2F2] mx-auto h-[280px] w-[320px] md:w-[440px] lg:w-[420px] 2xl:w-[480px]">
                                        <div className="h-[140px] text-[#373642] text-sm font-normal p-5 md:p-8">
                                            {card?.description}
                                        </div>
                                        <div className="h-[140px] bg-[#08A4F7] rounded-b-3xl">
                                            <div className="flex items-center">
                                                <div className="w-[30%] h-[100px] pl-2 md:pl-3 2xl:pl-8">
                                                    <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/white_bg.png" alt="white_bg" className="absolute max-md:h-24 max-md:w-24" />
                                                    <img src={card?.image} alt={card?.title} className="relative max-md:h-16 max-md:w-16 top-4 left-5" />
                                                </div>
                                                <div className="flex flex-col max-md:pl-14 h-[140px] items-start justify-center gap-1 text-white">
                                                    <div className="text-lg font-bold">{card?.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>

                <section id='why-analyticsliv' className='bg-[#30486A] rounded-[5px] text-white mx-[3%] xl:mx-[5%] py-7 px-5 xl:px-7 2xl:p-12'>
                    <h2 className='text-lg md:text-2xl 2xl:text-3xl font-bold text-center pb-8 2xl:pb-12'>Why Brands Choose AnalyticsLiv as Their PPC Marketing Agency</h2>
                    <div className='flex max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-6 items-center gap-2 xl:gap-5 2xl:gap-10'>
                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-stretch lg:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/big-data-analytics%20(1)%201.svg' alt='Data-Driven Approach'
                                className='bg-[#FAE0E1] rounded-[5px] px-5 min-w-[80px] min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[80px]' />
                            <div className='flex flex-col justify-around gap-3'>
                                <h3 className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Data-Driven Approach</h3>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>We analyze campaign data continuously to ensure optimal performance.</div>
                            </div>
                        </div>

                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-stretch lg:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/report%20(5)%201.svg' alt='Transparent Reporting'
                                className='bg-[#F3DEB3] rounded-[5px] px-5 min-w-[80px] min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[80px]' />
                            <div className='flex flex-col justify-around gap-3'>
                                <h3 className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Transparent Reporting</h3>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>Receive detailed reports, dashboards, and insights weekly or monthly.</div>
                            </div>
                        </div>

                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-stretch lg:w-[25%] 2xl:w-[20%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/team-bonding%201.svg' alt='Certified Experts'
                                className='bg-[#CBCFFA] rounded-[5px] px-5 min-w-[80px] min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[80px]' />
                            <div className='flex flex-col justify-around gap-3'>
                                <h3 className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>Certified Experts</h3>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>Work with our experienced team of Google Ads specialists and PPC experts.</div>
                            </div>
                        </div>

                        <div className='flex gap-3 xl:gap-3 2xl:gap-5 items-stretch lg:w-[27%] xl:w-[25%]'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/wealth.svg' alt='ROI-Focused Execution'
                                className='bg-[#D7FACB] rounded-[5px] px-5 min-w-[80px] min-h-[70px] lg:min-h-[80px] max-h-[70px] lg:max-h-[80px]' />
                            <div className='flex flex-col justify-around gap-3'>
                                <h3 className='text-xs xl:text-[13px] 2xl:text-sm font-bold'>ROI-Focused Execution</h3>
                                <div className='text-[10px] xl:text-[11px] 2xl:text-xs font-normal'>We’re a best PPC agency that focuses on results, not just impressions.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex max-lg:flex-col-reverse overflow-hidden pt-8 lg:pt-16'>
                    <div className='lg:w-[40%] bg-[#30486A] flex flex-col justify-center items-start gap-7 max-lg:py-7 px-4 lg:px-20'>
                        <h3 className='text-2xl md:text-3xl 2xl:text-4xl font-bold text-white'>Excited to Get Started?</h3>
                        <div className='text-base font-normal text-[#E2DEDC]'>Let’s make your budget work smarter. Get a free consultation with a Google-certified PPC ad agency.</div>
                        <button onClick={scrolling} className='mainbutn'>Contact Us Now</button>
                    </div>
                    <div className='lg:w-[60%] min-h-[250px] sm:min-h-[350px] overflow-hidden 2xl:min-h-[430px] flex'>
                        <div className='w-full lg:w-[70%] relative'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/people_collaborate.png' alt='people_collaborate' className='absolute sm:w-full sm:h-full' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Frame%2047.png' alt='Frame 47' className='absolute px-5 md:right-[50px] 2xl:right-[16%] pt-8' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Rectangle%2026.png' alt='Rectangle 26' className='absolute right-0 top-16' />
                        </div>
                        <div className='bg-[#08A4F7] w-[30%] flex justify-center max-md:hidden items-start'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Frame%2049.png' alt='Frame 49' className='' />
                        </div>
                    </div>
                </section>

                <section className="faq-section flex md:mb-3 flex-col md:flex-row px-4 py-7 md:py-14 md:px-8 lg:px-16 md:pb-5 xl:mb-10 xl:pt-14 gap-5 lg:gap-8">
                    <div className="md:w-1/3 flex flex-col md:gap-7 justify-center max-md:text-center sm:justify-start md:pt-7">
                        <h3 className="text-3xl max-md:flex max-sm:flex-col max-md:justify-center max-md:items-center max-md:gap-2.5 lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800">
                            Frequently Asked <div className="text-[#08A4F7] lg:pt-3 xl:pt-4 2xl:pt-5">Questions</div>
                        </h3>
                        <p className="mt-4 max-md:mb-5 text-base xl:text-lg text-gray-600 leading-snug">
                            Discover key FAQs designed to simplify your marketing and analytics approach, helping you achieve better results with actionable guidance.
                        </p>
                    </div>

                    <div className="md:w-2/3 max-h-[400px] overflow-y-auto custom-scrollbar py-5 pr-3 lg:pr-5">

                        <div className="flex flex-col gap-5">
                            {content?.map((item, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (itemRefs.current[index] = el)}
                                    className={`faq-click rounded-2xl px-4 lg:px-12 py-4 lg:py-5 cursor-pointer ${activeIndex === index ? 'text-white bg-[#08A4F7]' : 'text-[#232A42]'
                                        }`}
                                    style={{
                                        boxShadow: activeIndex === index ? 'none' : '18px 15px 35px 0px #00000017',
                                    }}
                                    onClick={() => handleToggle(index)}
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <h3 className="text-[13px] sm:text-base font-semibold">{item?.question}</h3>

                                            {activeIndex === index && (
                                                <div className="text-[10px] sm:text-xs pt-3 font-normal w-[95%]">{item?.answer}</div>
                                            )}
                                        </div>
                                        <img
                                            src={`${activeIndex === index ? 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector_up.png' : 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector_down.png'
                                                }`}
                                            alt={activeIndex === index ? 'Collapse' : 'Expand'}
                                            className="cursor-pointer w-4"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <footer className='bg-[#08A4F7] flex max-lg:flex-col max-lg:gap-3 items-start lg:items-center justify-around max-md:py-4 max-lg:py-4 lg:py-4 lg:h-[190px] xl:h-[160px] max-2xl:px-[4%]'>
                    <div>
                        <div className='text-white text-base md:text-[28px] font-bold lg:leading-8'>Ready to Partner with a Leading Google Ads Agency?</div>
                        <h2 className='text-xs text-white max-lg:pt-3 lg:pt-3'>From Google Ads for small business to white label PPC services and advanced eCommerce PPC strategy, <br className='max-md:hidden'></br>AnalyticsLiv delivers full-service AdWords management.</h2>
                        <h2 className='text-xs text-white max-lg:pt-3 lg:pt-1'>Whether you're searching for a PPC agency near me, or a specialized Google Ads expert, we’re here to help.</h2>
                    </div>
                    <div onClick={scrolling} className="contact-us-btn flex cursor-pointer items-center rounded-md max-lg:mt-1">
                        <div

                            className="relative overflow-hidden rounded-l-[5px] group text-white h-[45px] md:h-[50px] flex items-center justify-between w-full lg:w-[300px] 2xl:w-[540px] border border-white hover:border-r-[#08A4F7]"
                        >
                            {/* Background slider */}
                            <div className="absolute inset-0 bg-white -translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out z-0"></div>

                            {/* Text Content */}
                            <h2 className="relative z-10 pl-3 pr-2 md:pr-5 lg:pl-[22px] py-3 text-[11px] md:text-sm 2xl:text-base text-white group-hover:text-[#08A4F7] transition-colors duration-500">
                                Book Your Free Strategy Call Now
                            </h2>
                        </div>

                        <div className="h-[45px] md:h-[50px] bg-white px-3 flex justify-center items-center group w-14 rounded-r-[5px]">
                            <img
                                src="https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/tap%20(1)%201.png"
                                alt="Hire Google Analytics Expert"
                                className="group-hover:w-7 w-8 transition-all duration-300"
                            />
                        </div>
                    </div>
                </footer>

            </main>
        </>
    )
}
export default Ppc
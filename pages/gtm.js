import React, { useEffect, useTransition } from 'react'
import { Link } from 'react-scroll';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import ScrollProgress from '../components/ScrollProgress';
import Marquee from 'react-fast-marquee';
import Head from 'next/head';
import teleImg from '../public/phone 2.png'
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';
import Slider from "react-slick";
import * as Scroll from 'react-scroll';
import { scroller } from 'react-scroll';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function gtmNew({ brandsdata }) {
    const initialValues = { fullName: '', email: '', contact: '', message: '', website: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showWaiting, setShowWaiting] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedContent, setSelectedContent] = useState(null);
    const [isSticky, setIsSticky] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [imgSrc, setImgSrc] = useState('/phone%202.png'); // default image

    const handleMouseEnter = () => {
        // setTimeout(() => {
            setImgSrc('/phone (3).png');
        // }, 200);
    };

    const handleMouseLeave = () => {
        setImgSrc('/phone%202.png'); // revert to the default image when not hovering
    };

    const handleTouchStart = () => {
        // setTimeout(() => {
        setImgSrc('/phone (3).png');
        // }, 200);
    };

    const handleTouchEnd = () => {
        setImgSrc('/phone%202.png'); // revert to the default image when not hovering
    };

    const toggleShowMore = () => {
        setShowMore(prevShowMore => !prevShowMore);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
        // console.log(formValues); // Add this line to check if the state updates correctly
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        // console.log("formValues", formValues)
    };

    useEffect(() => {
        //console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
            setShowWaiting(true);
            dataLayer.push({
                event: 'gtm_submission'
            });
            fetch('/api/gtmcontact', {
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
                    // window.open("https://calendly.com/analyticsliv/30min", '_blank');
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


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollPosition / totalHeight) * 100;

            if (scrollPercent > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleReadMore = (content) => {
        setSelectedContent(content);
    };

    const handleClosePopup = () => {
        setSelectedContent(null);
    };
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 right-[-12px] md:right-[-20px] lg:right-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
                onClick={onClick}
            >
                <FaArrowRight size={20} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 left-[-12px] md:left-[-20px] lg:left-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
                onClick={onClick}
            >
                <FaArrowLeft size={20} />
            </div>
        );
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
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
                    speed: 1000,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 988,
                settings: {
                    dots: false,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    speed: 1000,
                    // nextArrow: false,
                    // prevArrow: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const ourServices = [

        {
            id: 1,
            path: '/check-upp.png',
            title: "Google Tag Manager Health Check",
            description: "Detailed audit of Google Tag Manager setup to streamline your tags, ensuring accurate and efficient tracking for all your analytics and marketing tools",
        },
        {
            id: 2,
            path: '/check-uppp.png',
            title: "Boost Performance with Server-side Tagging",
            description: "Enhance your website's speed and security with server-side tagging, reducing the impact of ad blockers and improving overall performance.",
        },
        {
            id: 3,
            path: '/check-upppp.png',
            title: "Track Key Interactions with Custom Events",
            description: "We set up tailored event tracking in GA4 to measure essential user interactions, helping you make data-driven decisions to elevate your website or app",
            fullContent: "Which products are performing well on your website/app or struggling to grasp the situation, it suggests that managing and comprehending your e-commerce data effectively might be a challenge. This implementation helps Ecommerce/Retail/Travel Clients to receive accurate e-commerce data that helps in boosting their growth through a range of strategies.",
        },
        {
            id: 4,
            path: '/check-uppppp.png',
            title: "Maximize E-commerce Success",
            description: "From product views to completed purchases, our enhanced e-commerce implementation captures the full customer journey, empowering you to refine your growth strategies",
        },
        {
            id: 5,
            path: '/check-upppppp.png',
            title: "Seamless Cross-Domain Tracking",
            description: "Connect user journeys across multiple domains, giving you a unified view of interactions for deeper insights and better reporting",
        },
        {
            id: 6,
            path: '/check-uppppppp.png',
            title: "Customize Your Data with Advanced Tracking",
            description: "We configure custom dimensions and metrics in GA4 or Firebase, providing enriched data for more precise analysis and smarter decision-making",
        }
    ];

    const content = [
        {
            id: 1,
            path: '/check-up (7).png',
            title: "Conversion API Setup & Implementation",
            description: "Conversion APIs (CAPI) setups for Facebook or any other marketing tools that allows businesses to send data about customer interactions and conversions directly to tool's servers.",
        },
        {
            id: 2,
            path: '/check-up (8).png',
            title: "Offline And Online Data Integration",
            description: "If you're interested in visualizing your offline data as reports and conducting more thorough analysis, importing your offline data into GA4 is a definite step.",
        },
        {
            id: 3,
            path: '/check-up (9).png',
            title: "Form Field Analysis",
            description: "Forms play a significant role in your business and collecting insights from user submissions is valuable, then form tracking becomes essential.",
        },
        {
            id: 4,
            path: '/check-up (10).png',
            title: "Custom Campaign Attribution",
            description: "This solution refers to the practice of creating and defining your own rules or models for assigning credit to various marketing channels or touchpoints in a customer's journey like First click, Last click, Last paid click, First Paid click.",
        },
        {
            id: 5,
            path: '/check-up (11).png',
            title: "Facebook CAPI Implementation For Shopify",
            description: "We have expertise in setting up Enhanced Ecommerce Tracking for Shopify for Facebook with custom approaches to capture maximum amount of ecommerce data and to improve the accuracy and enhancement of tracking",
        },
        {
            id: 6,
            path: '/check-up (12).png',
            title: "User ID Implementation",
            description: "Fortunately, with the help of the user ID implementation solution, we can definitely unify our users and gain better insights. We can apply this solution to both the web and the app.",
        },
        {
            id: 7,
            path: '/check-up (13).png',
            title: "Client ID Implementation",
            description: "Google Analytics automatically tracks Client IDs & displays them in user exploration reports, BigQuery reports & more. However, if you want to analyse users alongside events, enhanced ecommerce data, custom Client ID implementation is the solution.",
        }, {
            id: 8,
            path: '/check-up (14).png',
            title: "App To Web View Stitching Solution",
            description: "When an app includes a webview, Firebase may not be able to track events that occur within the webview. To address this, we must find a solution and the solution to handle this issue is the app to web view stitching.",
        },
        {
            id: 9,
            path: '/check-up (15).png',
            title: "Marketing Pixels Implementation",
            description: "Pixel implementation typically refers to the process of embedding a tracking pixel or snippet of code into a website, app, or digital platform to collect data and monitor user interactions.",
        },
        {
            id: 10,
            path: '/check-up (16).png',
            title: "Shopify And Enhanced E-commerce Integration",
            description: "Integration of Google Analytics 4 (GA4) with a Shopify store allows for the tracking and analysis of user behavior and e-commerce transactions.",
        },
        {
            id: 11,
            path: '/check-up (17).png',
            title: "GDPR Cookie Integration",
            description: "GDPR Cookie Integration refers to the process of incorporating mechanisms and practices into a website or online platform to ensure compliance with the General Data Protection Regulation (GDPR) requirements related to the use of cookies.",
        },
        {
            id: 12,
            path: '/check-up (18).png',
            title: "Website A/B Testing",
            description: "To validate which variant is working as expected. Before making the changes live to 100% of audiences, this can be tested out for a targeted specified audience using A/B tests tools and then it can be rolled out to wider users.",
        }
    ];

    const scrolling1 = () => {
        {
            Scroll.scroller.scrollTo("gtmform", {
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
            Scroll.scroller.scrollTo("solutions", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }

    }

    const scrolling4 = () => {
        {
            Scroll.scroller.scrollTo("resources", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }

    }

    const scrolling5 = () => {
        scroller.scrollTo("servicesMobile", {
            duration: 500,
            smooth: true,
            offset: -100,
        });
    }
    const scrolling6 = () => {
        scroller.scrollTo("gtmForm1", {
            duration: 500,
            smooth: true,
            offset: -100,
        });
    }


    return (
        <>
            <script>

            </script>
            <Head>
                <link rel="icon" href="https://storage.googleapis.com/website-bucket-uploads/static/favicon.png" type="image/icon type"></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins"
                    rel="stylesheet"
                />
                <meta name="description" content="AnalyticsLiv Digital is one of the leading Web and App analytics agency. We help our customers embrace Google Products to improve their customer experiences." />
                <title>Google Tag Manager - AnalyticsLiv</title>

            </Head>
            <div>
                <header className="sticky min-w-full top-0 z-50 shadow-md bg-white">
                    <div className="navbar hidden h-[70px] lg:flex xl:items-center xl:justify-between py-2 flex-wrap px-4 xl:flex-row items-center justify-between xl:w-[100%]">
                        <a href="/" className="xl:w-[20%] lg:w-[18%] w-[15%]">
                            <img alt="logo" className="h-12 w-48 xl:h-12 lg:ml-4 xl:w-52 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" />
                        </a>
                        <nav className="lg:flex lg:justify-between w-[90%] lg:w-[70%] xl:w-[56%]">
                            <ul className="lg:flex lg:items-center lg:justify-around text-[17px] font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-2 lg:w-auto space-x-3 xl:space-x-8 items-center tracking-wide cursor-pointer">
                                {/* <li onClick={scrolling1} className="hover:text-amber-500">Clients</li> */}
                                <li onClick={scrolling2} className="hover:text-[#0D8CA4]">Services</li>
                                <li onClick={scrolling3} className="hover:text-[#0D8CA4]">Solutions</li>
                                <li onClick={scrolling4} className="hover:text-[#0D8CA4]">Resources</li>
                            </ul>
                            <a href="tel:8320576622" className='lg:mx-1'>
                                <button className="gtmbutn4 lg:w-[180px] cta px-4 py-3 border rounded-[5px] w-[100%] flex flex-nowrap gap-1 
                                max-lg:mx-2 max-sm:ml-3 text-sm font-semibold cursor-pointer"                onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>
                                    <img src={imgSrc} alt='tele' className='h-5 duration-[0]' />+91 83205 76622</button>
                            </a>
                            <span className="hidden md:inline px-4 lg:w[10%]">
                                <img alt="gmp partner" className="h-10 w-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg" />
                            </span>
                        </nav>
                    </div>


                    <div className="relative flex items-center justify-between lg:hidden p-2">
                        <a href="/"><img onClick={() => setIsOpen(false)} src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="relative left-0 h-8 md:mx-4 cursor-pointer" /></a>
                        <a className="mr-12" href="tel:8320576622">
                            <button className="cta px-1 py-1.5 flex mx-2 w-[132px] rounded-[5px] text-white bg-[#0D8CA4] text-xs font-semibold 
                            cursor-pointer hover:bg-white hover:text-[#0D8CA4]" onMouseEnter={handleTouchStart}
                                onMouseLeave={handleTouchEnd}>
                                <img src={imgSrc} alt='tele' className='h-4 pr-1 duration-75' />+91 83205 76622
                            </button>
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


                                    <p onClick={() => { setIsOpen(!isOpen); scrolling5(); }}
                                        href="#"
                                        className="text-slate-900 block px-3 py-2 rounded-md text-lg font-medium"
                                    >
                                        <div >Services</div>

                                    </p>
                                    <p onClick={() => { setIsOpen(!isOpen); scrolling3(); }}
                                        className=" text-slate-900 block px-3 py-2 rounded-md text-lg font-medium"
                                    >
                                        <div>Solutions</div>

                                    </p>
                                    <p onClick={() => { setIsOpen(!isOpen); scrolling4(); }}

                                        className="text-slate-900 block px-3 py-2 rounded-md text-lg font-medium"
                                    >
                                        Resources
                                    </p>
                                </div>
                            </div>
                        )}
                    </Transition>
                    <ScrollProgress color="red" showSpinner={false} />
                </header>
                <section className='md:px-10 xl:px-20 max-md:px-4 max-xl:flex-wrap-reverse flex justify-around overflow-hidden' style={{
                    backgroundImage: 'url(/Rectangle.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className='relative w-[55%] flex flex-col justify-end'>
                        <div
                            className="absolute top-[-28%] left-[-40%] h-[66vh] w-[78dvh] opacity-[0.3] bg-[#48C8FF] rounded-[270px] z-0"
                            style={{
                                boxShadow: '160px 160px 160px 160px rgba(72, 200, 255, 1)',
                            }}
                        ></div>
                        {/* White circular background */}
                        <div
                            className="absolute max-lg:hidden bottom-[-160px] left-[-60%] xl:left-[-200px] h-[217px] w-[217px] sm:h-[418px] sm:w-[418px] md:h-[85dvh] md:w-[85dvh] 
                            xl:h-[650px] xl:w-[670px] 2xl:h-[98vh] 2xl:w-[100dvh] bg-white rounded-full z-0"
                            style={{
                                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
                            }}
                        ></div>

                        <div className='max-xl:flex'>
                            <img src='/Hero_img_Left.png' className='relative max-lg:hidden max-xl:left-[-40%]' alt='main' />
                        </div>

                    </div>
                    <div className='xl:w-[50%] max-md:items-center max-xl:text-center lg:pl-12 mt-7 xl:h-[50%] 2xl:pt-[10vh]  text-white flex flex-col max-md:gap-6 gap-4 lg:gap-[2vh]'>
                        <div className='text-2xl md:text-3xl xl:text-4xl font-semibold lg:leading-[50px]'>Optimize Your Website
                            and Mobile Apps Data with Google Tag Manager </div>
                        <div className='text-sm lg:text-base font-normal xl:leading-[23px] max-sm:pb-5'>As a certified Google Tag Manager partner, we specialize in comprehensive tag management services. We help streamline your tracking and analytics setup, ensuring efficient and accurate data collection.</div>
                        <a onClick={scrolling6}
                            className='max-sm:hidden' target='_'><button style={{ boxShadow: '3px 3px 7px rgba(0, 0, 0, 0.3)' }}
                                className='gtmbutn gtmform '>
                                Let’s Get in Touch
                            </button></a>
                    </div>
                    <div className='lg:hidden items-center w-full justify-between flex px-0'>
                        <img src="/GTM_Certified_Partner (3).png" className='h-14 w-40 pt-2' alt="GTM Certified Partner" />
                        <span className="">
                            <img alt="gmp partner" className="h-14 mb-[5px] w-42" src="/Google_Partner_Logo_White_Colour_Mix.png" />
                        </span>
                    </div>
                </section>
                <img src="/GTM_Certified_Partner (3).png" className='hidden relative mx-auto max-md:h-16 lg:h-20 lg:w-56 max-lg:mt-3 lg:hidden' alt="GTM Certified Partner" />



                <section className='max-xl:flex-wrap-reverse flex max-xl:justify-center lg:pl-10 mb-10 lg:mb-2'>
                    <div className='block xl:w-[55%] pt-12 lg:pb-12'>
                        <div className='text-xl md:text-2xl font-semibold text-[#246096] max-lg:text-center text-start lg:pl-10 max-sm:px-1.5'>Integrating GTM as your Tag Management System:</div>

                        <div className="flex max-lg:flex-wrap max-lg:justify-center md:pt-10">
                            <div className="flex-shrink-0 pt-12">
                                <img src="/GTM_Certified_Partner.png" className=' max-lg:hidden' alt="GTM Certified Partner" />
                            </div>

                            <div className="flex flex-col justify-center gap-4 lg:gap-8 max-sm:px-1">
                                <div className="flex items-center">
                                    <div className="h-5 w-16 bg-gradient-to-r from-[#FEFFFF] to-[#D9EFFF] rounded-r-full flex-shrink-0"></div>
                                    <img src="/checklist.png" alt="checklist" className="ml-[-12px]" />
                                    <span className="ml-2 text-[#0D8CA4] text-sm md:text-base font-medium">Make dynamic changes to live Website/App</span>
                                </div>

                                <div className="flex items-center lg:ml-8">
                                    <div className="h-5 w-16 bg-gradient-to-r from-[#FEFFFF] to-[#D9EFFF] rounded-r-full flex-shrink-0"></div>
                                    <img src="/checklist.png" alt="checklist" className="ml-[-12px]" />
                                    <span className="ml-2 text-[#0D8CA4] text-sm md:text-base font-medium">Track marketing pixels accurately</span>
                                </div>

                                <div className="flex items-center lg:ml-8">
                                    <div className="h-5 w-16 bg-gradient-to-r from-[#FEFFFF] to-[#D9EFFF] rounded-r-full flex-shrink-0"></div>
                                    <img src="/checklist.png" alt="checklist" className="ml-[-12px]" />
                                    <span className="ml-2 text-[#0D8CA4] text-sm md:text-base font-medium">Unlock power of GTM tag management system</span>
                                </div>

                                <div className="flex items-center">
                                    <div className="h-5 w-16 bg-gradient-to-r from-[#FEFFFF] to-[#D9EFFF] rounded-r-full flex-shrink-0"></div>
                                    <img src="/checklist.png" alt="checklist" className="ml-[-12px]" />
                                    <span className="ml-2 text-[#0D8CA4] text-sm md:text-base font-medium">Improve page performance via server-side tagging</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {formSubmit ? <div className='gtmForm1 xl:absolute max-md:mx-4 overflow-auto z-10 h-[480px] md:h-[500px] 2xl:h-[550px] md:my-10 right-[10%] max-md:mt-4 md:top-[450px] xl:w-[420px] border-[5px] rounded-lg border-[#FFFFFF] shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] text-center flex flex-col justify-around items-center px-3 md:px-7 py-2 md:py-5 bg-white'>
                        <h2 className="md:text-xl text-sky-900">Thank you for showing interest with us!</h2>
                        <h2 className="font-semibold text-2xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">We will get back to you shortly !!</h2>
                        <img alt="Thankyou" className="w-64 mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg" />
                    </div> :
                        <div className='gtmForm1 xl:absolute max-md:mx-4 overflow-auto z-10 h-[480px] md:h-[500px] 2xl:h-[550px] md:my-10 right-[10%] max-md:mt-4 md:top-[450px] xl:w-[420px] border-[5px] rounded-lg border-[#FFFFFF] shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] 
                        text-center flex flex-col justify-around items-center px-3 md:px-4 py-2 md:py-3 bg-white'>

                            <div className='text-2xl md:text-[28px] font-semibold text-[#246096]'>We are here to Help you</div>

                            <div className='text-sm font-normal leading-4 text-[#0D8CA4]'>For better understanding of centralized and optimized your tag management system</div>

                            <form className='flex flex-col gap-3.5 md:gap-5 w-[90%] md:w-[80%]' onSubmit={handleSubmit}>

                                <input type='text' placeholder='Name*' style={{ boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)' }}
                                    className='px-3 py-2 text-sm border border-[#246096] rounded-md' id="fullName" name="fullName" value={formValues.fullName} required onChange={handleChange} />

                                <input type='email' placeholder='Email*' style={{ boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)' }}
                                    className='px-3 py-2 text-sm border border-[#246096] rounded-md' id="email" name="email" value={formValues.email} required onChange={handleChange} />

                                <input type='number' placeholder='Contact No' style={{ boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)' }}
                                    className='px-3 py-2 text-sm border border-[#246096] rounded-md' id="contact" name="contact" value={formValues.contact} onChange={handleChange} />

                                <input type='text' placeholder='Your Website*' style={{ boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)' }}
                                    className='px-3 py-2 text-sm border border-[#246096] rounded-md' id="website" name="website" value={formValues.website} required onChange={handleChange} />

                                <textarea placeholder='Type Your Message' rows="3" className='px-3 py-2 text-sm border border-[#246096] rounded-md' style={{ boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)' }} id="message" name="message" value={formValues.message} onChange={handleChange} />

                                <button className='gtmbutn4 hover:border-black hover:border-[1px] border border-[#FFFFFF] rounded-md shadow-[2px_2px_3px_1px_rgba(0,0,0,0.25)] py-2 font-medium'>Submit</button>

                            </form>

                        </div>}
                </section>

                <section className='services mt-5 text-center pb-12 max-md:hidden'>
                    <div className='text-[34px] font-bold text-[#152F2E] pb-8 xl:font-extrabold'>
                        {/* Our Services */}
                        <span className='inline-block relative'>
                            Our&nbsp;
                            <span
                                className='absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
                                style={{
                                    width: '50px',
                                    height: '5px',
                                    borderRadius: '10px',
                                    top: 'calc(100% )', // Adjust this value as needed
                                    left: '0', // Position relative to the parent span
                                }}
                            ></span>
                        </span>
                        Services
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 place-items-center md:px-7 xl:px-16'>
                        {ourServices.map((item) => (
                            <div className='flex flex-col max-[340px]:w-[280px] w-[340px] h-[200px] md:w-[380px] md:h-[230px] border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#bdbdbd] hover:shadow-xl hover:translate-y-[-2 px] transition-all duration-300 ease-in-out justify-around items-center px-4 md:px-5 py-5 text-center' key={item.id}>

                                {/* <div className='flex flex-col max-[340px]:w-[280px] w-[340px] h-[200px] md:w-[380px] md:h-[230px] border-[3px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md justify-around items-center px-4 md:px-5 py-5 text-center' key={item.id}> */}
                                <img src={item.path} alt='check-up' className='h-10 w-10 md:h-12 md:w-12' />
                                <h1 className='sm:text-[15px] font-semibold'>{item.title}</h1>
                                <div className='text-xs font-normal text-[#152F2E]'>
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='servicesMobile text-center pb-12 md:hidden'>
                    <div className='text-2xl font-bold text-[#152F2E] pb-5'>
                        <span className='inline-block relative'>
                            Our&nbsp;
                            <span
                                className='absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
                                style={{
                                    width: '38px',
                                    height: '5px',
                                    borderRadius: '10px',
                                    top: 'calc(100% )', // Adjust this value as needed
                                    left: '0', // Position relative to the parent span
                                }}
                            ></span>
                        </span>
                        Services                        </div>
                    <div className='w-[90%] mx-auto relative carousel-custom'>
                        <Slider {...settings}>
                            {ourServices.map((item) => (
                                <div className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0 border border-[#EBEBEB] p-4 py-4  px-5 mr-4 gap-5"
                                    key={item.id}>
                                    <img src={item.path} alt='check-up' className='h-10 w-10 mx-auto md:h-12 md:w-12' />
                                    <h1 className='text-sm sm:text-[15px] font-semibold py-2'>{item.title}</h1>
                                    <div className='text-xs py-3 font-normal text-[#152F2E]'>
                                        {item.description}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>

                <div className="bg-[#E8FBFB] py-5 flex flex-col gap-3 px-4 lg:px-20">
                    <h2 className="text-center font-bold text-base lg:text-3xl xl:font-extrabold">Trusted by Organisations Worldwide</h2>
                    <div className="brandsimages flex space-x-8 justify-center py-4 px-4 mt-4">
                        <Marquee gradient={false} pauseOnHover="true">
                            {
                                brandsdata.brand.map((brands, key) => (
                                    <div key={key}><img src={brands.logo} alt={brands.brands} /></div>

                                ))
                            }
                        </Marquee>
                    </div>
                </div>
                <section className="solutions py-10 lg:py-16">
                    <div>
                        <div className="text-2xl md:text-3xl xl:text-[34px] font-bold xl:font-extrabold text-center">
                            <span className='inline-block relative'>
                                Custom&nbsp;
                                <span
                                    className='absolute block w-[80px] xl:w-[112px] bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
                                    style={{
                                        // width: '102px',
                                        height: '5px',
                                        borderRadius: '10px',
                                        top: 'calc(100% )', // Adjust this value as needed
                                        left: '0', // Position relative to the parent span
                                    }}
                                ></span>
                            </span>
                            Solutions
                        </div>

                    </div>
                    <div className="pt-8 w-[90%] mx-auto relative carousel-custom">
                        <Slider {...settings}>
                            {content.map((item) => (
                                <div
                                    key={item.id}
                                    className="text-center md:w-[20%] flex flex-col justify-center items-center h-[231px] w-[300px] flex-shrink-0  border-[1px] rounded-[5px] border-[#EBEBEB] hover:border-[#b1afaf] hover:shadow-md hover:translate-y-[-2 px] transition-all duration-300 ease-in-out p-4 py-4 px-10 mr-4 gap-5"
                                >
                                    <img
                                        src={item.path}
                                        alt="check-up"
                                        className="h-10 w-10 md:h-12 md:w-12 mb-4 mx-auto"
                                    />
                                    <h1 className=" text-sm sm:text-[15px] font-semibold mb-2">{item.title}</h1>
                                    <div className="text-xs font-normal text-[#152F2E]">
                                        {item.description}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </section>
                <div className='mx-auto flex justify-center md:pt-3'>
                    <a className=' max-xl:hidden'
                        // href='https://calendly.com/analyticsliv/30min?month=2024-08'
                        onClick={scrolling6}
                        target='_'><button style={{ boxShadow: '3px 3px 7px rgba(0, 0, 0, 0.3)' }}
                            className='gtmbutn1'>
                            Let’s Get in Touch

                        </button></a>
                    <a className='xl:hidden'
                        // href='https://calendly.com/analyticsliv/30min?month=2024-08'
                        onClick={scrolling6}
                        target='_'><button style={{ boxShadow: '3px 3px 7px rgba(0, 0, 0, 0.3)' }}
                            className='gtmbutn1'>
                            Let’s Get in Touch

                        </button></a>
                </div>

                <section>
                    <div className='bg-[#E8FBFB] py-10 mt-10 flex flex-col gap-8 items-center justify-around'>
                        <div className='text-xl xl:text-3xl font-semibold'>Let’s hear from our client </div>
                        <iframe
                            className='border rounded-lg md:rounded-2xl xl:rounded-[40px] w-[90%] h-[180px] md:h-[250px] md:w-[400px] lg:h-[370px] lg:w-[630px]'
                            src="https://www.youtube.com/embed/m0Oo0IL6gAQ"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </section>
                <section className='resources'>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-center pt-12 xl:font-extrabold xl:text-[34px]">

                            {/* Success Stories */}
                            <span className='inline-block relative'>
                                Success&nbsp;
                                <span
                                    className='absolute underline-width-mobile block w-[90px] xl:w-[127px] bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
                                    style={{
                                        // width: '117px',
                                        height: '5px',
                                        borderRadius: '10px',
                                        top: 'calc(100% )', // Adjust this value as needed
                                        left: '0', // Position relative to the parent span
                                    }}
                                ></span>
                            </span>
                            Stories
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 w-full justify-center justify-items-center items-center gap-4 p-8 md:p-12">

                        <div className='group xl:w-[380px] lg:w-[310px] w-[300px] lg:h-[480px] xl:h-[540px] h-[440px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                            <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                            <a href="https://storage.googleapis.com/website-bucket-uploads/cs/5492gjsetdcghtc86683.pdf" target='_blank'>
                                <div>
                                    <img src="/casestudy1.png" alt="" className='w-[350px] h-[250px]  xl:h-[350px]' />
                                </div>
                                <div className='flex flex-col gap-7'>
                                    <h3 className='text-base text-slate-900 font-semibold text-left pt-5'>Universal Analytics (GA3) to GA4 Migration for a Website</h3>
                                    <div className='flex items-center justify-center bottom-[25px]'>
                                        <div className='flex items-end'>
                                            <div className='flex w-[200px] m-auto items-center py-2.5 justify-center gap-1.5 border border-solid text-center border-[#0D8CA4] cursor-pointer rounded-[10px] group-hover:bg-[#0D8CA4] font-medium'>
                                                <button className='font-medium text-[#0D8CA4] group-hover:text-white text-sm'>View</button>
                                                <span className='text-homepagebtn group-hover:text-white'>
                                                    <img src='/arrow-right (8).png' alt='arrow right' className='h-4 w-4 group-hover:hidden' />
                                                    <img src='/arrow-right (7).png' alt='arrow right hover' className='h-4 w-4 hidden group-hover:block' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='max-lg:hidden group xl:w-[380px] lg:w-[310px] w-[300px] xl:h-[540px] h-[480px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                            <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                            <a href="https://storage.googleapis.com/website-bucket-uploads/cs/dv66hpaft245xdg90y5vr.pdf" target='_blank'>
                                <div>
                                    <img src="/castdyinner7.jpg" alt="" className='w-[350px] h-[250px] xl:h-[350px]' />
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Maximising Revenue and User Insights using Firebase In App Purchases for Mobile Apps</h3>
                                    <div className='flex items-center justify-center bottom-[25px]' >
                                        <div className='flex w-[200px] m-auto items-center py-2.5 justify-center gap-1.5 border border-solid text-center border-[#0D8CA4] cursor-pointer rounded-[10px] group-hover:bg-[#0D8CA4] font-medium'>
                                            <button className='font-medium text-[#0D8CA4] group-hover:text-white text-sm'>View</button>
                                            <span className='text-homepagebtn group-hover:text-white'>
                                                <img src='/arrow-right (8).png' alt='arrow right' className='h-4 w-4 group-hover:hidden' />
                                                <img src='/arrow-right (7).png' alt='arrow right hover' className='h-4 w-4 hidden group-hover:block' />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='max-lg:hidden group xl:w-[380px] lg:w-[310px] w-[300px] xl:h-[540px] h-[480px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                            <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                            <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                                <div>
                                    <img src="/casestudy2.png" alt="" className='w-[350px] h-[250px] xl:h-[350px]' />
                                </div>
                                <div className='flex flex-col gap-2 xl:gap-4'>

                                    <h3 className='text-bas text-slate-900 font-semibold text-left pt-2'>From Inefficiency to Precision: Learn How AnalyticsLiv Achieved a 78% CPC Reduction for a News Publisher Giant</h3>
                                    {/* <div className='grid grid-rows-2 gap-10 pt-10 2xl:pt-14'> */}
                                    <div className='flex items-center justify-center bottom-[25px]'>
                                        <div className='flex items-end'>
                                            <div className='flex w-[200px] m-auto items-center py-2.5 justify-center gap-1.5 border border-solid text-center border-[#0D8CA4] cursor-pointer rounded-[10px] group-hover:bg-[#0D8CA4] font-medium'>
                                                <button className='font-medium text-[#0D8CA4] group-hover:text-white text-sm'>View</button>
                                                <span className='text-homepagebtn group-hover:text-white'>
                                                    <img src='/arrow-right (8).png' alt='arrow right' className='h-4 w-4 group-hover:hidden' />
                                                    <img src='/arrow-right (7).png' alt='arrow right hover' className='h-4 w-4 hidden group-hover:block' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {showMore && (
                            <>
                                <div className='lg:hidden group xl:w-[380px] lg:w-[310px] w-[300px] xl:h-[540px] h-[480px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                                    <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="https://storage.googleapis.com/website-bucket-uploads/cs/dv66hpaft245xdg90y5vr.pdf" target='_blank'>
                                        <div>
                                            <img src="/castdyinner7.jpg" alt="" className='w-[350px] h-[250px] xl:h-[350px]' />
                                        </div>
                                        <div className='flex flex-col gap-5'>
                                            <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Maximising Revenue and User Insights using Firebase In App Purchases for Mobile Apps</h3>
                                            <div className='flex items-center justify-center bottom-[25px]' >
                                                <div className='flex w-[200px] m-auto items-center py-2.5 justify-center gap-1.5 border border-solid text-center border-[#0D8CA4] cursor-pointer rounded-[10px] group-hover:bg-[#0D8CA4] font-medium'>
                                                    <button className='font-medium text-[#0D8CA4] group-hover:text-white text-sm'>View</button>
                                                    <span className='text-homepagebtn group-hover:text-white'>
                                                        <img src='/arrow-right (8).png' alt='arrow right' className='h-4 w-4 group-hover:hidden' />
                                                        <img src='/arrow-right (7).png' alt='arrow right hover' className='h-4 w-4 hidden group-hover:block' />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='lg:hidden group xl:w-[380px] lg:w-[310px] w-[300px] xl:h-[540px] h-[480px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                                    <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                                    <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                                        <div>
                                            <img src="/casestudy2.png" alt="" className='w-[350px] h-[250px] xl:h-[350px]' />
                                        </div>
                                        <div className='flex flex-col gap-2 xl:gap-4'>

                                            <h3 className='text-bas text-slate-900 font-semibold text-left pt-2'>From Inefficiency to Precision: Learn How AnalyticsLiv Achieved a 78% CPC Reduction for a News Publisher Giant</h3>
                                            {/* <div className='grid grid-rows-2 gap-10 pt-10 2xl:pt-14'> */}
                                            <div className='flex items-center justify-center bottom-[25px]'>
                                                <div className='flex items-end'>
                                                    <div className='flex w-[200px] m-auto items-center py-2.5 justify-center gap-1.5 border border-solid text-center border-[#0D8CA4] cursor-pointer rounded-[10px] group-hover:bg-[#0D8CA4] font-medium'>
                                                        <button className='font-medium text-[#0D8CA4] group-hover:text-white text-sm'>View</button>
                                                        <span className='text-homepagebtn group-hover:text-white'>
                                                            <img src='/arrow-right (8).png' alt='arrow right' className='h-4 w-4 group-hover:hidden' />
                                                            <img src='/arrow-right (7).png' alt='arrow right hover' className='h-4 w-4 hidden group-hover:block' />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="lg:hidden flex justify-center mb-7">
                        <button
                            onClick={toggleShowMore}
                            className="px-4 py-2 bg-[#0D8CA4] text-white font-medium rounded-[10px]"
                        >
                            {showMore ? 'Show Less' : 'View More'}
                        </button>
                    </div>
                </section>
                <section id="sticky-section" className={`bg-red-500 max-md:py-3 md:py-5 max-md:gap-0 flex items-center justify-between lg:justify-center 
                    lg:gap-16 xl:gap-16 px-3.5 md:px-5 lg:px-24 xl:px-56  transform transition-all duration-1000 ease-in-out ${isSticky ? 'sticky translate-y-0  transform transition-all duration-1000 ease-out' : 'transform transition-all duration-1000 ease-in-out translate-y-10'}`}>
                    <div className='text-[12px] max-sm:w-[60%] md:text-xl font-semibold text-white'>Want to Optimize your GTM and Improve site performance ?</div>
                    <a onClick={scrolling6}
                        target='_blank' className='max-sm:w-[107px] bg-white text-red-400 cursor-pointer shadow-foter 
                        py-2 border rounded-[5px] px-2 sm:px-3 text-[11px] md:text-sm font-semibold hover:text-[14.1px]'>
                        {/* <img src='/phone%202.png' alt='tele' /> */}
                        Contact Us Now</a>
                </section>

            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API

    const res = await fetch(`${process.env.domain}/api/ga4brands`)
    const brandsdata = await res.json()


    //console.log(brandsdata);
    // Pass data to the page via props
    return { props: { brandsdata } }
}


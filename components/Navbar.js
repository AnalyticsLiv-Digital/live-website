"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import Head from "next/head";
import { motion } from "framer-motion";
import { GoChevronRight } from "react-icons/go";

const navbar = () => {
    const [isShadow, setIsShadow] = useState(false);
    const [isWebResources, setIsWebResources] = useState(false);
    const [isWebServices, setIsSWebervices] = useState(false);
    const [isResources, setIsResources] = useState(false);
    const [isServices, setIsServices] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [submenu, setSubmenu] = useState("0");
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    let initialVal = { name: '', email: '', contact: '', url: '' }
    const [formValues, setFormValues] = useState(initialVal);
    const [formErrors, setFormErrors] = useState([]);

    const handleChange = (e) => {

        e.preventDefault();
        const { name, value } = e.target;

        setFormValues({ ...formValues, [name]: value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const errors = [];

        if (!formValues?.name?.trim()) errors?.push("Name");
        if (!formValues?.email?.trim()) errors?.push("Email");
        if (!formValues?.url?.trim()) errors?.push("Website URL");

        if (errors?.length > 0) {
            setFormErrors(errors);
            setIsLoading(false);
            return;
        }

        await fetch("api/navbar/services", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": formValues?.name,
                "email": formValues?.email,
                "contact": formValues?.contact,
                "url": formValues?.url,
                "type": "services"
            }),

        })
            .then((res) => res.json())
            .then((data) => {
                setIsSubmit(true);
                setIsLoading(false);
                setFormValues(initialVal)
                setFormErrors([]);
            })
            .catch((error) => {
                console.log("Error:", error);
                alert('There is some issue sending your data, Please try again later !')
            })

        // setIsSubmit(true);
        setIsLoading(false);
        setFormValues(initialVal)

    }

    useEffect(() => {
        let headerSize = () => {
            const totalScroll = document.documentElement.scrollTop;

            if (totalScroll > 10) {
                setIsShadow(true);
            } else if (totalScroll < 10) {
                setIsShadow(false);
            }
        };

        window.addEventListener("scroll", headerSize);

        return () => window.removeEventListener("scroll", headerSize);
    });


    const servicesData = [
        {
            title: "Data Foundation",
            links: [
                { href: "/services/web-app-measurement", label: "Account health and Opportunity", imgSrc: "media-inner-paid.png" },
                { href: "/services/web-app-measurement", label: "GA4 Implementation & Optimization", imgSrc: "SEM.png" },
                { href: "/services/server-side-tracking", label: "Server Side Tracking", imgSrc: "media-inner-E-commerce.png" },
                { href: "/services/gdpr-compliance", label: "Cookie Consent Solution", imgSrc: "media-inner-lead.png" },
                // { href: "/services/app-marketing", label: "Mobile App Marketing", imgSrc: "media-inner-mobile.png" },
            ],
        },
        {
            title: "Data Transformation",
            links: [
                { href: "/services/data-science", label: "Cloud Migration & Engineering", imgSrc: "Analytics_webapp_logo.png" },
                { href: "/services/custom-pipeline", label: "Custom Pipeline", imgSrc: "sst.png" },
                { href: "/", label: "Custom Dashboard", imgSrc: "cro_logo.png" },
                // { href: "/services/data-reporting-analysis", label: "Reporting & Dashboarding", imgSrc: "Analytis_data-reporting.logo.png" },
                // { href: "/services/google-tag-manager", label: "Google Tag Manager Tagging", imgSrc: "GTM_Gradiant_Logo_for_Header.png" },
            ],
        },
        {
            title: "Data Driven Marketing",
            links: [
                { label: "PPC campaign Management", href: "/services/ppc", imgSrc: "solutions_GDRP.logo.png" },
                { label: "Programmatic Advertising (DV360)", href: "/services/programatic-advertising", imgSrc: "Solutions_Data-Science.logo.png" },
                { label: "Conversion Rate Optimization (CRO)", href: "/services/CRO", imgSrc: "solutions_Data_Attribution.png" },
                { label: "Data Insight & Reporting", href: "/services/data-reporting-analysis", imgSrc: "solutions_Data_Attribution.png" },
            ],
        },
        {
            title: "Product & Solutions",
            links: [
                { label: "MAdKpi", href: "https://madkpi.com/", imgSrc: "training_Schedule.png" },
                { label: "MMM Modeling", href: "/", imgSrc: "solutions_Training-Details.logo.png" },
                { label: "Product & Content Recommendation", href: "/", imgSrc: "solutions_Training-Details.logo.png" },
                { label: "RFM Analysis", href: "/services/customer-segmentation", imgSrc: "solutions_Training-Details.logo.png" },
            ],
        },
    ];


    return (
        <>
            <Head>
                <meta charset="UTF-8" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <meta name="description" content="" />
                <meta charset="utf-8" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta http-equiv="cache-control" content="no-cache" />
                <meta http-equiv="Pragma" content="no-cache" />
                <meta http-equiv="Expires" content="-1" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
                />
            </Head>
            <div className=" sticky top-0 z-50 bg-header-linear h-[55px] sm:h-[50px] text-white flex justify-center items-center px-2">
                <div className="text-xs max-sm:py-1.5 sm:text-base md:text-base font-normal text-center flex max-sm:flex-col max-sm:gap-1 justify-center items-center">
                    Your Partner for Google Marketing Platform Success
                    <a href="tel:+918320576622" className="ml-2 sm:ml-5 bg-white px-2 py-1 sm:px-3 sm:py-[5px] rounded-[5px]"><div className="flex justify-center items-center text-[#0E1947] text-[11px] sm:text-sm md:text-[13px] sm:hover:underline sm:hover:text-[13.2px] font-bold">
                        Call Us Now
                        <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/telephone%20(9).svg" alt="Ringer Volume" className="max-sm:w-3 max-sm:ml-1.5 sm:pl-2" /></div></a>
                </div>
            </div>
            <header className="sticky min-w-full top-[55px] sm:top-[50px] z-50 bg-white ">
                {/* <div> sm:w-1/3*/}
                <div className="hidden lg:inline">
                    <div className={`flex ${isShadow ? "shadow-navShadow" : null} items-center justify-between py-0 px-5`}>
                        <Link className="logo" href="/">
                            <img
                                alt="AnalyticsLiv Logo"
                                aria-label="logo"
                                src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png"
                                className="h-8 2xl:h-10 lg:mx-4 cursor-pointer"
                            />
                        </Link>
                        <div className="flex items-center">
                            <div
                                className="navbar hidden lg:flex py-2 h-auto flex-wrap px-4 lg:flex-row items-center justify-end"
                            >
                                {/* <Link className="logo" href="/"><img alt="logo" aria-label="logo" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="h-10 lg:mx-4 cursor-pointer" /></Link> */}
                                <nav className="lg:flex text-center">
                                    <ul className="lg:flex text-[10px] xl:text-[14px]  font-semibold text-[#0E1947] text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto items-center tracking-wide cursor-pointer">
                                        <li
                                            className="relative flex items-center gap-[5px] hover:border-b-2 hover:border-[#0E1947] duration-100 delay-75 ease-in-out py-2"
                                            onMouseEnter={() => {
                                                setIsSWebervices(true);
                                            }}
                                            onMouseLeave={() => {
                                                setIsSWebervices(false);
                                                setHoveredIndex(0);
                                            }}
                                        >
                                            <Link className="header-links" href="/services">
                                                Services
                                            </Link>
                                            <span className="">
                                                {isWebServices ? (
                                                    <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Up%20Arrow%20Navbar.png" alt="up down" className="w-4" />
                                                ) : (
                                                    <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Down%20Arrow.png" alt="arrow down" className="w-4" />
                                                )}
                                            </span>
                                        </li>
                                        <li
                                            className="lg:ml-[19px] flex items-center gap-[5px] hover:border-b-2 hover:border-[#0E1947] duration-100 delay-75 ease-in-out py-2"
                                            onMouseEnter={() => setIsWebResources(true)}
                                            onMouseLeave={() => setIsWebResources(false)}
                                        >
                                            <a href=""> Resources </a>
                                            {isWebResources && (
                                                <motion.div
                                                    initial={{ y: 1, opacity: 0 }}
                                                    animate={{ y: -1, opacity: 1 }}
                                                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                                                    id="submenu2"
                                                    className="subheader blogs-cs text-transform-none absolute w-56 text-sm flex flex-col lg:-ml-20 mt-[-7px] xl:mt-[-2px] bg-header-linear shadow-xl items-center align-middle font-semibold"
                                                >
                                                    <Link href="/blogs" className="border-b border-gray-300 w-full">
                                                        <div className="py-2 text-transform-none text-white opacity-70 hover:opacity-100 text-base font-normal leading-normal">
                                                            Blogs
                                                        </div>
                                                    </Link>
                                                    <Link href="/case-studies" className="w-full">
                                                        <div className="py-2 text-transform-none text-white opacity-70 hover:opacity-100 text-base font-normal leading-normal">
                                                            Case Studies
                                                        </div>
                                                    </Link>
                                                    {/*<Link  href='/webinars'><div className="py-2 w-56 hover:bg-cyan-500">Webinars</div></Link>*/}
                                                </motion.div>
                                            )}
                                            <span className="">
                                                {isWebResources ? (
                                                    <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Up%20Arrow%20Navbar.png" alt="up down" className="w-4" />
                                                ) : (
                                                    <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Down%20Arrow.png" alt="arrow down" className="w-4" />
                                                )}
                                            </span>
                                        </li>
                                        <Link className="header-links" href="/about-us">
                                            <li className="lg:ml-[19px] hover:border-b-2 hover:border-[#0E1947] duration-100 delay-75 ease-in-out py-2">
                                                Who We Are
                                            </li>
                                        </Link>
                                        <Link className="header-links" href="/contact">
                                            <li className="lg:ml-[19px] hover:border-b-2 hover:border-[#0E1947] duration-100 delay-75 ease-in-out py-2">
                                                Contact Us
                                            </li>
                                        </Link>
                                        <Link className="header-links" href="/engagement">
                                            <li className="lg:ml-[19px] hover:border-b-2 hover:border-[#0E1947] duration-100 delay-75 ease-in-out py-2">
                                                Engagement
                                            </li>
                                        </Link>
                                        <Link className="header-links" href="/careers">
                                            <li className="lg:ml-[19px] hover:border-b-2 hover:border-[#0E1947] duration-100 delay-75 ease-in-out py-2">
                                                Careers
                                            </li>
                                        </Link>
                                    </ul>
                                    {/* <span className="hidden md:inline px-4">
              <img alt="marketing-partner" aria-label="marketing-partner" src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg" />
            </span> */}
                                </nav>
                            </div>
                            <div className="hidden md:flex items-start pt-0 justify-end">
                                <span className="text-right flex items-start justify-end">
                                    <img
                                        alt="marketing-partner"
                                        aria-label="marketing-partner"
                                        src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg"
                                        className="w-[70%] xl:w-[80%] 2xl:w-[90%]"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* </div> */}

                <div className={`relative ${isShadow ? "shadow-navShadow" : null} flex lg:hidden p-2`}>
                    <Link href="/">
                        <img
                            onClick={() => setIsOpen(false)}
                            src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png"
                            className="relative h-10 md:mx-4 cursor-pointer"
                            alt="AnalyticsLiv Logo"
                        />
                    </Link>
                    <button
                        onClick={() => {
                            setIsOpen(!isOpen);
                            setIsServices(false);
                            setIsResources(false);
                        }}
                        type="button"
                        className=" absolute inline-flex right-2 items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#0E1947]  focus:outline-none "
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
                        <div
                            className="bg-white lg:hidden absolute w-full"
                            id="mobile-menu"
                        >
                            <div className="px-4 text-[#0E1947] pt-2 pb-3 space-y-1 sm:px-3">
                                <p className=" text-[#0E1947] block px-3 py-2 rounded-md text-base font-normal">
                                    <div
                                        onClick={() => {
                                            setIsServices(!isServices);
                                            setIsResources(false);
                                        }}
                                    >
                                        Services
                                    </div>
                                    {isServices ? (
                                        <motion.div
                                            initial={{ y: 4, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                            }}
                                            className="transition ease-out duration-200 px-2 text-cyan-400 text-base font-medium divide-y-2"
                                        >
                                            <div
                                                onClick={() => {
                                                    setSubmenu("1");
                                                }}
                                            >
                                                <div className="py-2 w-56 ">Data Foundation</div>
                                            </div>
                                            {submenu == "1" && (
                                                <motion.div
                                                    onClick={() => {
                                                        setIsOpen(!isOpen);
                                                        setIsServices(false);
                                                    }}
                                                    initial={{ y: 10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 260,
                                                        damping: 20,
                                                    }}
                                                    className="transition ease-out duration-200 px-2"
                                                >
                                                    <div class="flex items-center py-1">
                                                        <Link
                                                            href="/services/web-app-measurement"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            Account health and Opportunity
                                                        </Link>
                                                    </div>
                                                    <div class="flex items-center py-1">
                                                        <Link
                                                            href="/services/web-app-measurement"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            GA4 Implementation & Optimization
                                                        </Link>
                                                    </div>
                                                    <div class="flex items-center py-1">
                                                        <Link
                                                            href="/services/server-side-tracking"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            Server Side Tracking
                                                        </Link>
                                                    </div>
                                                    <div class="flex items-center py-1">
                                                        <Link
                                                            href="/services/gdpr-compliance"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            Cookie Consent Solution
                                                        </Link>
                                                    </div>

                                                    {/* <div
                                                        class="flex items-center py-1
                                    "
                                                    >
                                                        <img
                                                            src="https://storage.googleapis.com/website-bucket-uploads/static/media-inner-search.png"
                                                            alt="display_logo"
                                                        />
                                                        <Link
                                                            href="/services/app-marketing"
                                                            class="text-menuheading text-base font-normal leading-normal"
                                                        >
                                                            Mobile app marketing
                                                        </Link>
                                                    </div> */}
                                                </motion.div>
                                            )}
                                            <div
                                                onClick={() => {
                                                    setSubmenu("2");
                                                }}
                                            >
                                                <div className="py-2 w-56 ">
                                                    Data Transformation
                                                </div>
                                            </div>
                                            {submenu == "2" && (
                                                <motion.div
                                                    onClick={() => {
                                                        setIsOpen(!isOpen);
                                                        setIsServices(false);
                                                    }}
                                                    initial={{ y: 10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 260,
                                                        damping: 20,
                                                    }}
                                                    className="transition ease-out duration-200 px-2"
                                                >
                                                    <div class="flex items-center py-1">
                                                        <Link
                                                            href="/services/data-science"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            Cloud Migration & Engineering
                                                        </Link>
                                                    </div>
                                                    <div class="flex items-center py-1">
                                                        <Link
                                                            href="/services/custom-pipeline"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            Custom Pipeline
                                                        </Link>
                                                    </div>
                                                    <div class="flex items-center py-1">
                                                        <Link
                                                            href="/"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            Custom Dashboard
                                                        </Link>
                                                    </div>

                                                    {/* <div class="flex items-center py-1">
                                                        <Link
                                                            href="/services/data-reporting-analysis"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            Reporting Dashboarding
                                                        </Link>
                                                    </div>
                                                    <div class="flex items-center py-1">
                                                        <img
                                                            src="/GTM_Gradiant_Logo_for_Header.png"
                                                            className="h-9 w-9"
                                                            alt="data-reporting_logo"
                                                        />
                                                        <Link
                                                            href="/services/google-tag-manager"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            Google Tag Manager Tagging
                                                        </Link>
                                                    </div> */}
                                                </motion.div>
                                            )}
                                            <div
                                                onClick={() => {
                                                    setSubmenu("3");
                                                }}
                                            >
                                                <div className="py-2 w-56 ">Data Driven Marketing</div>
                                            </div>
                                            {submenu == "3" && (
                                                <motion.div
                                                    onClick={() => {
                                                        setIsOpen(!isOpen);
                                                        setIsServices(false);
                                                    }}
                                                    initial={{ y: 10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 260,
                                                        damping: 20,
                                                    }}
                                                    className="transition ease-out duration-200 px-2"
                                                >
                                                    <div class="flex items-center py-1">
                                                        <Link
                                                            href="/services/ppc"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            PPC campaign Management
                                                        </Link>
                                                    </div>
                                                    <div class="flex items-center py-1">
                                                        <Link
                                                            href="/services/programatic-advertising"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            Programmatic Advertising (DV360)
                                                        </Link>
                                                    </div>
                                                    <div class="flex items-center py-1">
                                                        <Link
                                                            href="/services/CRO"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            Conversion Rate Optimization (CRO)
                                                        </Link>
                                                    </div>
                                                    <div class="flex items-center py-1">
                                                        <Link
                                                            href="/services/data-reporting-analysis"
                                                            class="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            Data Insight & Reporting
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                            <div
                                                onClick={() => {
                                                    setSubmenu("4");
                                                }}
                                            >
                                                <div className="py-2 w-56 ">
                                                    Product & Solutions
                                                </div>
                                            </div>
                                            {submenu == "4" && (
                                                <motion.div
                                                    onClick={() => {
                                                        setIsOpen(!isOpen);
                                                        setIsServices(false);
                                                    }}
                                                    initial={{ y: 10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 260,
                                                        damping: 20,
                                                    }}
                                                    className="transition ease-out duration-200 px-2"
                                                >
                                                    <div
                                                        className="flex items-center py-1"
                                                    >
                                                        <Link
                                                            href="/"
                                                            className="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            MAdKpi
                                                        </Link>
                                                    </div>
                                                    <div
                                                        className="flex items-center py-1"
                                                    >
                                                        <Link
                                                            href="/"
                                                            className="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            MMM Modeling
                                                        </Link>
                                                    </div>
                                                    <div
                                                        className="flex items-center py-1"
                                                    >
                                                        <Link
                                                            href="/"
                                                            className="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            Product & Content Recommendation
                                                        </Link>
                                                    </div>
                                                    <div
                                                        className="flex items-center py-1"
                                                    >
                                                        <Link
                                                            href="/services/customer-segmentation"
                                                            className="text-menuheading text-sm font-normal leading-normal"
                                                        >
                                                            RFM Analysis
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    ) : (
                                        <></>
                                    )}
                                </p>

                                <p
                                    href="#"
                                    className="text-[#0E1947] block px-3 py-2 rounded-md text-base font-normal"
                                >
                                    <div
                                        onClick={() => {
                                            setIsResources(!isResources);
                                            setIsServices(false);
                                        }}
                                        className="text-[#0E1947]"
                                    >
                                        Resources
                                    </div>
                                    {isResources ? (
                                        <motion.div
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                            }}
                                            className="px-4 text-cyan-400  divide-y-2"
                                        >
                                            <Link
                                                onClick={() => {
                                                    setIsOpen(!isOpen);
                                                    setIsResources(false);
                                                }}
                                                href="/blogs"
                                            >
                                                <div className="py-2 w-56 ">Blogs</div>
                                            </Link>
                                            <Link
                                                onClick={() => {
                                                    setIsOpen(!isOpen);
                                                    setIsResources(false);
                                                }}
                                                href="/case-studies"
                                            >
                                                <div className="py-2 w-56 ">Case Studies</div>
                                            </Link>
                                        </motion.div>
                                    ) : (
                                        <></>
                                    )}
                                </p>

                                <Link
                                    onClick={() => setIsOpen(!isOpen)}
                                    href="about-us"
                                    className="text-[#0E1947] block px-3 py-2 rounded-md text-base font-normal"
                                >
                                    Who We Are
                                </Link>

                                <Link
                                    onClick={() => setIsOpen(!isOpen)}
                                    href="/contact"
                                    className="text-[#0E1947] block px-3 py-2 rounded-md text-base font-normal"
                                >
                                    Contact Us
                                </Link>

                                <Link
                                    onClick={() => setIsOpen(!isOpen)}
                                    href="/engagement"
                                    className="text-[#0E1947] block px-3 py-2 rounded-md text-base font-normal"
                                >
                                    Engagement
                                </Link>

                                <Link
                                    onClick={() => setIsOpen(!isOpen)}
                                    href="/careers"
                                    className="text-[#0E1947] block px-3 py-2 rounded-md text-base font-normal"
                                >
                                    Careers
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>

                {isWebServices && (
                    <motion.div
                        initial={{ y: 1, opacity: 0 }}
                        animate={{ y: 5, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 30 }}
                        onMouseEnter={() => setIsSWebervices(true)}
                        onMouseLeave={() => { setIsSWebervices(false); setHoveredIndex(0) }}
                        // onClick={() => setIsSWebervices(false)}
                        className="top-[37px] xl:top-[42px] absolute w-full text-sm z-[9999] bg-header-linear shadow-xl text-white font-semibold"
                    >
                        <div className="flex">
                            <div className="container w-[43%] pt-5 pb-5 flex justify-evenly items-center">
                                <div className="w-[38%] ml-[0%]">
                                    {servicesData?.map((service, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center justify-between py-4 transition-all duration-75 px-4 border-b border-gray-300 font-medium ${hoveredIndex === index ? "opacity-100 transition duration-100" : " opacity-70"
                                                }`}
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(hoveredIndex)}
                                        >
                                            <h3 className="text-white text-[10px] xl:text-[12px] 2xl:text-[14px]">
                                                {service?.title}
                                            </h3>
                                            {hoveredIndex === index && (
                                                <div
                                                ><GoChevronRight className="w-9" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="w-[1px] h-[240px] ml-[0%] opacity-70 bg-gray-300"></div>

                                <div className="w-[35%] ml-[0%] flex py-4">
                                    {hoveredIndex !== null && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="py-8 grid grid-cols-1 2xl:grid-cols-1 max-2xl:w-full justify-items-start gap-5 2xl:gap-5 rounded-md max-h-[500px]"
                                        >
                                            {servicesData[hoveredIndex]?.links?.map((link, linkIndex) => (
                                                <div key={linkIndex} className="">
                                                    {/* <img src={link?.imgSrc} alt={link?.label} className="w-6 h-6" /> */}
                                                    <Link
                                                        href={link?.href}
                                                        onClick={() => setIsSWebervices(false)}
                                                        className="text-[10px] xl:text-[11px] 2xl:text-[13px] font-normal text-white opacity-70 hover:opacity-100"
                                                    >
                                                        {link?.label}
                                                    </Link>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>

                            </div>
                            <div className="flex justify-center w-[57%] pt-7 gap-5">
                                <div className="min-w-[250px]">
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Resources_Girl_Img_2.png" alt="Analyticsliv Services"
                                        className="" />
                                </div>

                                <div className="bg-white p-4 2xl:p-5 rounded-[20px] text-center mb-7 w-[50%] 2xl:w-[50%]">
                                    {
                                        isSubmit ?
                                            <>
                                                <div className='flex flex-col justify-between items-center gap-4 relative text-slate-700'>
                                                    <img
                                                        src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Thank_You_img.png'
                                                        alt='analyticsLiv'
                                                        className="w-44" />
                                                    <h2 className='align-middle text-xl pt-3'>We will get back to you soon.</h2>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="text-base xl:text-lg font-extrabold text-black pb-1">Transform Your Campaigns Today!</div>
                                                <div className="text-[10px] font-normal text-black pb-2.5 leading-[14px]">Run Brand Marketing & Performance Campaigns<br></br> Programmatically</div>
                                                <form className="flex flex-col items-center h-full w-full" onSubmit={handleSubmit}>
                                                    <input autoComplete="off" className="border border-[#DBDBDB] text-gray-600 placeholder-slate-300 font-normal focus:outline-none py-1.5 2xl:py-2 px-5 h-[28px] rounded-[30px] w-full text-[10px]" placeholder="Full Name*" type="text" name="name" value={formValues?.name} onChange={handleChange} />
                                                    <div className="flex items-center gap-4 w-full text-[10px] mt-3">
                                                        <input autoComplete="off" className="border border-[#DBDBDB] text-gray-600 placeholder-slate-300 font-normal focus:outline-none py-1.5 2xl:py-2 px-5 h-[28px] rounded-[30px] w-full text-[10px]" placeholder="Email*" type="email" name="email" value={formValues?.email} onChange={handleChange} />
                                                        <input autoComplete="off" className="border border-[#DBDBDB] text-gray-600 placeholder-slate-300 font-normal focus:outline-none py-1.5 2xl:py-2 px-5 h-[28px] rounded-[30px] w-full text-[10px]" placeholder="Mobile" type="number" name="contact" value={formValues?.contact} onChange={handleChange} />
                                                    </div>
                                                    <input autoComplete="off" className="border border-[#DBDBDB] mt-3 text-gray-600 placeholder-slate-300 font-normal focus:outline-none py-1.5 2xl:py-2 px-5 h-[28px] rounded-[30px] w-full text-[10px]" placeholder="Website url*" type="text" name="url" value={formValues?.url} onChange={handleChange} />

                                                    {
                                                        formErrors?.length > 0 &&
                                                        <p className="text-red-500 text-xs font-medium text-left w-full pl-2 pt-1">
                                                            {formErrors?.join(", ")} {formErrors?.length === 1 ? "is" : "are"} required.
                                                        </p>
                                                    }

                                                    {
                                                        isLoading ?
                                                            <button className="text-white text-xs font-semibold bg-btn-linear rounded-[30px] w-full py-2 2xl:py-2 mt-[15px] cursor-not-allowed" disabled>Submitting...</button>
                                                            : <button className="text-white text-xs font-semibold bg-btn-linear hover:text-gray-100 transition-all ease-linear duration-150 rounded-[30px] w-full py-2 2xl:py-2 mt-[15px]">Discuss Your Project</button>
                                                    }

                                                </form>
                                            </>
                                    }
                                </div>


                            </div>
                        </div>
                    </motion.div>
                )}

            </header>
        </>
    );
};

export default navbar;

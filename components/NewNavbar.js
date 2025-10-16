'use client'
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { GoChevronRight, GoGrabber, GoX } from 'react-icons/go';

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const [expandedSubService, setExpandedSubService] = useState(null);
  const [expandedResources, setExpandedResources] = useState(false);
  const [service, setService] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const servicesData = [
    {
      title: "Media Activation",
      services: [
        { label: "Creative Strategy & Design", href: "/services/creative" },
        { label: "Performance Marketing", href: "/services/ppc" },
        { label: "Search Engine Optimization", href: "/services/seo" },
        { label: "Programmatic Advertising", href: "/services/programatic-advertising" },
        { label: "Conversion Rate Optimization", href: "/services/conversion-rate-optimization" }
      ]
    },
    {
      title: "Digital Analytics",
      services: [
        {
          label: "Digital Analytics Implementation", href: "/services/ga4-mixpanel-analytics-audit"
          // subServices: [
          //   { label: "Audit & GA4 Mixpanel", href: "/services/ga4-mixpanel-analytics-audit" },
          //   { label: "GTM", href: "/services/google-tag-manager" }
          // ]
        },
        {
          label: "Privacy-First Tracking",
          subServices: [
            { label: "Server-Side Tagging Solutions", href: "/services/server-side-tracking" },
            { label: "Cookie Consent & Preference Management", href: "/services/gdpr-compliance" },
            { label: "Conversion API Implementation", href: "/services/data-reporting-analysis" }
          ]
        },
        { label: "Interactive Dashboards", href: "/services/interactive-dashboards" }
      ]
    },
    {
      title: "Cloud & Technology",
      services: [
        { label: "Cloud Strategy & Architecture", href: "/services/data-science" },
        { label: "Cloud Migration & Transformation", href: "/services/custom-pipeline" }
      ]
    },
    {
      title: "Digital Transformation",
      services: [
        { label: "Business Transformation Consulting", href: "/services/business-transformation" },
        { label: "End-to-End Digital Solutions", href: "/services/end-to-end-digital-solutions" },
        { label: "Agentic AI & Automation", href: "/services/agentic-ai-automation" },
        { label: "Business Solutions", href: "/services/business-solutions" },
        { label: "Partnerships", href: "/partnerships" }
      ]
    }
  ];

  return (
    <div
      className="sticky top-0 z-50"
      style={{
        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"',
      }}
    >
      {/* <div className="w-full bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white text-xs sm:text-sm relative overflow-hidden">

        <div className="mx-auto max-w-7xl flex max-md:flex-col items-center justify-between px-3.5 md:px-6 py-2 relative">
          <div className="flex items-center max-sm:justify-center max-md:text-center md:space-x-3">
            <span className="text-slate-200 font-medium tracking-wide">
              Your Partner for
              <span className="text-transparent bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text font-semibold mx-1">
                Google Marketing Platform
              </span>
              Success
            </span>
          </div>
          <a
            href="tel:+918320576622"
            className="group max-sm:text-xs max-sm:mt-1 inline-flex items-center gap-2.5 rounded-full backdrop-blur-sm px-2 sm:px-4 py-1 border border-white/10 hover:from-white/15 hover:to-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-blue-300 group-hover:text-blue-200 transition-colors duration-200"
              >
                <path d="M6.62 10.79a15.464 15.464 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
              </svg>
              <div className="absolute inset-0 rounded-full border border-blue-300/30 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500"></div>
            </div>
            <span className="text-white/90 font-medium group-hover:text-white max-sm:text-xs transition-colors duration-200">
              Call Us Now
            </span>
            <div className="w-1 h-1 bg-blue-300/50 rounded-full group-hover:bg-blue-200 group-hover:scale-150 transition-all duration-200"></div>
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div> */}

      <header className="bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png"
                alt="AnalyticsLiv"
                className="h-8 md:h-7 lg:h-8 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center  max-lg:mx-2 gap-6 text-xs lg:text-sm 2xl:text-base font-medium text-slate-700">
              <div
                className="group relative"
                onMouseEnter={() => setService(true)}
                onMouseLeave={() => setService(false)}
              >
                <a href="/services" className="inline-flex items-center h-8 gap-1 hover:text-slate-900">
                  Services
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                  </svg>
                </a>

                {service && (
                  <div className="absolute left-[-200px] w-[980px] rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/90 backdrop-blur-xl p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/10"></div>

                    <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
                      <div className="group">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600/80 mb-3 pb-2 border-b border-slate-200/40 group-hover:text-slate-700 transition-colors duration-200">
                          Media Activation
                        </h4>
                        <ul className="mt-4 space-y-2 text-sm">
                          <li>
                            <a
                              href="/services/creative"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Creative Strategy &amp; Design
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/ppc"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Performance Marketing
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/seo"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Search Engine Optimization
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/programatic-advertising"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Programmatic Advertising
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/conversion-rate-optimization"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Conversion Rate Optimization
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="group">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600/80 mb-3 pb-2 border-b border-slate-200/40 group-hover:text-slate-700 transition-colors duration-200">
                          Digital Analytics
                        </h4>
                        <ul className="mt-4 space-y-2 text-sm">
                          <li>
                            <a
                              href="/services/ga4-mixpanel-analytics-audit"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Digital Analytics Implementation
                            </a>
                          </li>
                          <li className="relative group/sub">
                            <div className="flex items-center justify-between rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50 cursor-pointer">
                              <span>Privacy-First Tracking</span>
                              <svg
                                className="w-3 h-3 text-slate-500 group-hover/sub:text-slate-700 transition-all duration-200 group-hover/sub:rotate-90"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>

                            <div className="absolute left-full top-0 ml-2 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/60 p-4 z-50 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0">
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50/30 to-indigo-50/20"></div>
                              <div className="relative space-y-1">
                                <a
                                  href="/services/server-side-tracking"
                                  className="block text-xs text-slate-600 hover:text-slate-800 hover:bg-blue-50/60 py-2 px-3 rounded-lg transition-all duration-200 hover:translate-x-1"
                                >
                                  <div className="flex items-center space-x-2">
                                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                    <span>Server-Side Tagging Solutions</span>
                                  </div>
                                </a>
                                <a
                                  href="/services/gdpr-compliance"
                                  className="block text-xs text-slate-600 hover:text-slate-800 hover:bg-blue-50/60 py-2 px-3 rounded-lg transition-all duration-200 hover:translate-x-1"
                                >
                                  <div className="flex items-center space-x-2">
                                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                    <span>Cookie Consent &amp; Preference Management</span>
                                  </div>
                                </a>
                                <a
                                  href="/services/data-reporting-analysis"
                                  className="block text-xs text-slate-600 hover:text-slate-800 hover:bg-blue-50/60 py-2 px-3 rounded-lg transition-all duration-200 hover:translate-x-1"
                                >
                                  <div className="flex items-center space-x-2">
                                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                    <span>Conversion API Implementation</span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a
                              href="/services/interactive-dashboards"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Interactive Dashboards
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="group">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600/80 mb-3 pb-2 border-b border-slate-200/40 group-hover:text-slate-700 transition-colors duration-200">
                          Cloud &amp; Technology
                        </h4>
                        <ul className="mt-4 space-y-2 text-sm">
                          <li>
                            <a
                              href="/services/data-science"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Cloud Strategy &amp; Architecture
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/custom-pipeline"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Cloud Migration &amp; Transformation
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="group">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600/80 mb-3 pb-2 border-b border-slate-200/40 group-hover:text-slate-700 transition-colors duration-200">
                          Digital Transformation
                        </h4>
                        <ul className="mt-4 space-y-2 text-sm">
                          <li>
                            <a
                              href="/services/business-transformation"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Business Transformation Consulting
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/end-to-end-digital-solutions"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              End-to-End Digital Solutions
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/agentic-ai-automation"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Agentic AI &amp; Automation
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/business-solutions"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Business Solutions
                            </a>
                          </li>
                          <li>
                            <a
                              href="/partnerships"
                              className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                            >
                              Partnerships
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent rounded-full"></div>
                  </div>
                )}
              </div>

              <div className="group relative">
                <button className="inline-flex items-center gap-1 hover:text-slate-900">
                  Resources
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                  </svg>
                </button>
                <div className="invisible absolute left-0 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <a
                    href="/blogs"
                    className="block rounded-xl px-3 py-2 hover:bg-slate-50"
                  >
                    Blog
                  </a>
                  <a
                    href="/case-studies"
                    className="block rounded-xl px-3 py-2 hover:bg-slate-50"
                  >
                    Case Studies
                  </a>
                </div>
              </div>

              <a href="/about-us" className="hover:text-slate-900">
                Who We Are
              </a>
              <a href="/contact" className="hover:text-slate-900">
                Contact Us
              </a>
              <a href="/engagement" className="hover:text-slate-900">
                Engagement
              </a>
              <a href="/careers" className="hover:text-slate-900">
                Careers
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="/contact"
                className="rounded-xl bg-slate-900 px-3 lg:px-4 py-2 text-xs lg:text-sm text-white"
              >
                Book a Call
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-slate-300 text-slate-700 hover:bg-white/20 transition-all duration-200"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <GoX className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <GoGrabber className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {isOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                    onClick={toggleMenu}
                  />
                  <motion.div
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '100%', opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.2
                    }}
                    className="fixed top-0 right-0 min-h-screen w-full bg-gradient-to-br from-white/95 to-slate-50/90 backdrop-blur-xl border-l border-slate-200/50 shadow-2xl z-50 overflow-y-auto"
                  >
                    {/* Menu Header */}
                    <div className="flex items-center justify-end px-3 pt-2">
                      <button
                        onClick={toggleMenu}
                        className="w-8 h-5 rounded-lg bg-slate-100/50 hover:bg-slate-200/50 flex items-center justify-center transition-colors duration-200"
                      >
                        <GoX className="w-4 h-4 text-slate-800 font-bold" />
                      </button>
                    </div>

                    {/* Menu Content */}
                    <div className="px-4 pb-2 overflow-y-auto">
                      {/* Services Section */}
                      <div className="">
                        <button
                          onClick={() => {
                            setExpandedService(expandedService === 'services' ? null : 'services');
                            if (expandedResources) setExpandedResources(false);
                          }}
                          className="w-full flex items-center justify-between p-3 rounded-xl text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 transition-all duration-200"
                        >
                          <span className="font-bold">Services</span>
                          <motion.div
                            animate={{ rotate: expandedService === 'services' ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <GoChevronRight className="w-4 h-4 text-slate-500" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {expandedService === 'services' && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="overflow-hidden ml-4 space-y-1"
                            >
                              {servicesData && servicesData?.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="space-y-1">
                                  <button
                                    onClick={() => setExpandedSubService(
                                      expandedSubService === categoryIndex ? null : categoryIndex
                                    )}
                                    className="w-full flex items-center justify-between p-2 rounded-lg text-sm text-slate-600 hover:bg-blue-50/50 transition-all duration-200"
                                  >
                                    <span className="font-medium">{category?.title}</span>
                                    <motion.div
                                      animate={{ rotate: expandedSubService === categoryIndex ? 90 : 0 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <GoChevronRight className="w-3 h-3" />
                                    </motion.div>
                                  </button>

                                  <AnimatePresence>
                                    {expandedSubService === categoryIndex && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="overflow-hidden ml-3 space-y-1"
                                      >
                                        {category?.services && category?.services?.map((service, serviceIndex) => (
                                          <div key={serviceIndex}>
                                            {service?.subServices ? (
                                              <div className="space-y-1">
                                                <div className="text-xs font-medium text-slate-600 px-2 py-1">
                                                  {service?.label}
                                                </div>
                                                {service?.subServices?.map((subService, subIndex) => (
                                                  <motion.a
                                                    key={subIndex}
                                                    href={subService?.href}
                                                    initial={{ x: -10, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: subIndex * 0.05 }}
                                                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-slate-800 hover:bg-blue-50/50 transition-all duration-200"
                                                    onClick={toggleMenu}
                                                  >
                                                    <div className="w-1 h-1 bg-slate-400 rounded-full font-medium"></div>
                                                    <span>{subService?.label}</span>
                                                  </motion.a>
                                                ))}
                                              </div>
                                            ) : (
                                              <motion.a
                                                href={service?.href}
                                                initial={{ x: -10, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: serviceIndex * 0.05 }}
                                                className="block px-3 py-2 rounded-lg text-xs text-slate-600 hover:text-slate-800 hover:bg-blue-50/50 transition-all duration-200 font-semibold"
                                                onClick={toggleMenu}
                                              >
                                                {service?.label}
                                              </motion.a>
                                            )}
                                          </div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Resources Section */}
                      <div className="">
                        <button
                          onClick={() => {
                            setExpandedResources(!expandedResources);
                            if (expandedService === 'services') setExpandedService(null);
                          }}
                          className="w-full flex items-center justify-between p-3 rounded-xl text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 transition-all duration-200"
                        >
                          <span className="font-bold">Resources</span>
                          <motion.div
                            animate={{ rotate: expandedResources ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <GoChevronRight className="w-4 h-4 text-slate-500" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {expandedResources && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="overflow-hidden ml-4"
                            >
                              <motion.a
                                href="/blogs"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.05 }}
                                className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-slate-800 hover:bg-blue-50/50 transition-all duration-200"
                                onClick={toggleMenu}
                              >
                                Blog
                              </motion.a>
                              <motion.a
                                href="/case-studies"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-slate-800 hover:bg-blue-50/50 transition-all duration-200"
                                onClick={toggleMenu}
                              >
                                Case Studies
                              </motion.a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Direct Links */}
                      <div className="">
                        {[
                          { label: "Who We Are", href: "/about-us" },
                          { label: "Contact Us", href: "/contact" },
                          { label: "Engagement", href: "/engagement" },
                          { label: "Careers", href: "/careers" }
                        ]?.map((item, index) => (
                          <motion.a
                            key={item?.label}
                            href={item?.href}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="block p-3 rounded-xl text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 transition-all duration-200 font-bold"
                            onClick={toggleMenu}
                          >
                            {item?.label}
                          </motion.a>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent rounded-full mb-4"></div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NewNavbar;


// {/* <li className="relative group/sub">
//                             <div className="flex items-center justify-between rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50 cursor-pointer">
//                               <span>Digital Analytics Implementation</span>
//                               <svg
//                                 className="w-3 h-3 text-slate-500 group-hover/sub:text-slate-700 transition-all duration-200 group-hover/sub:rotate-90"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M9 5l7 7-7 7"
//                                 />
//                               </svg>
//                             </div>

//                             <div className="absolute left-full top-0 ml-2 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/60 p-4 z-50 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0">
//                               <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50/30 to-indigo-50/20"></div>
//                               <div className="relative space-y-1">
//                                 <a
//                                   href="/services/ga4-mixpanel-analytics-audit"
//                                   className="block text-xs text-slate-600 hover:text-slate-800 hover:bg-blue-50/60 py-2 px-3 rounded-lg transition-all duration-200 hover:translate-x-1"
//                                 >
//                                   <div className="flex items-center space-x-2">
//                                     <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
//                                     <span>Audit &amp; GA4 Mixpanel</span>
//                                   </div>
//                                 </a>
//                                 <a
//                                   href="/services/google-tag-manager"
//                                   className="block text-xs text-slate-600 hover:text-slate-800 hover:bg-blue-50/60 py-2 px-3 rounded-lg transition-all duration-200 hover:translate-x-1"
//                                 >
//                                   <div className="flex items-center space-x-2">
//                                     <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
//                                     <span>GTM</span>
//                                   </div>
//                                 </a>
//                               </div>
//                               <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
//                                 <div className="w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-white/95"></div>
//                               </div>
//                             </div>
//                           </li> */}
import Head from 'next/head'
import React from 'react'
import { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import { ScaleLoader } from 'react-spinners';
import Marquee from "react-fast-marquee";
import StructuredData from '../components/StructuredData';
import Testimonial from '../components/home/Testimonial'
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
import ScrollProgress from '../components/ScrollProgress'
import { Transition } from "@headlessui/react";

const { Element: ScrollElement } = Scroll;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function ga4({ brandsdata }) {

  const initialValues = { fullName: '', email: '', contact: '', message: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showWaiting, setShowWaiting] = useState(false);
  const [selected, setSelected] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        event: 'ga4_submission'
      });
      fetch('/api/ga4contact', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'mode': 'no-cors'
        },
        body: JSON.stringify({
          "fullName": formValues.fullName,
          "email": formValues.email,
          "contact": formValues.contact,
          "message": formValues.message
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



    if (!values.message) {
      errors.message = "Message is required!";
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
      Scroll.scroller.scrollTo("case-studies", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
    }

  }

  const scrolling4 = () => {
    {
      Scroll.scroller.scrollTo("testimonial", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
    }

  }

  const scrolling5 = () => {
    {
      Scroll.scroller.scrollTo("data-visualisation", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
    }

  }



  const stuctureData = { "@context": "https://schema.org", "@graph": [{ "@type": "WebPage", "@id": "https://analyticsliv.com/", "url": "https://analyticsliv.com/", "name": "Leading Web and App Analytics Agency in India - AnalyticsLiv", "isPartOf": { "@id": "https://analyticsliv.com/#website" }, "primaryImageOfPage": { "@id": "https://analyticsliv.com/#primaryimage" }, "image": { "@id": "https://analyticsliv.com/#primaryimage" }, "thumbnailUrl": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "datePublished": "2023-01-11T18:27:34+00:00", "dateModified": "2023-04-07T20:48:38+00:00", "description": "AnalyticsLiv Digital is one of the leading Web and App analytics agency. We help our customers embrace Google Products to improve their customer experiences.", "breadcrumb": { "@id": "https://analyticsliv.com/#breadcrumb" }, "inLanguage": "en-US", "potentialAction": [{ "@type": "ReadAction", "target": ["https://analyticsliv.com/"] }] }, { "@type": "ImageObject", "inLanguage": "en-US", "@id": "https://analyticsliv.com/#primaryimage", "url": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "contentUrl": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "width": 1200, "height": 628 }, { "@type": "BreadcrumbList", "@id": "https://analyticsliv.com/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }] }, { "@type": "WebSite", "@id": "https://analyticsliv.com/#website", "url": "https://analyticsliv.com/", "name": "Analyticsliv", "description": "", "potentialAction": [{ "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://www.analyticsliv.com/blogs/search?s={search_term_string}" }, "query-input": "required name=search_term_string" }], "inLanguage": "en-US" }, { "@type": "Organization", "@id": "https://www.analyticsliv.com/#organization", "name": "Analyticsliv", "url": "https://www.analyticsliv.com/", "logo": { "@type": "ImageObject", "inLanguage": "en-US", "@id": "https://www.analyticsliv.com/#/schema/logo/image/", "url": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "contentUrl": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "width": 512, "height": 114, "caption": "Analyticsliv" }, "image": { "@id": "https://www.analyticsliv.com/#/schema/logo/image/" }, "sameAs": ["https://m.facebook.com/100070503960704/", "https://in.linkedin.com/company/analytics-liv-digital", "https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw", "https://www.instagram.com/analyticsliv_digital"] }] };


  return (
    <>
      <Head>
        <link rel="icon" href="https://storage.googleapis.com/website-bucket-uploads/static/favicon.png" type="image/icon type"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins"
          rel="stylesheet"
        />
        <meta name="description" content="AnalyticsLiv Digital is one of the leading Web and App analytics agency. We help our customers embrace Google Products to improve their customer experiences." />
        <title>Google Analytics 4 - AnalyticsLiv</title>
      </Head>
      <StructuredData data={stuctureData} />
      {showWaiting && <div className="fixed z-50 flex backdrop-blur top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"><ScaleLoader
        color="#271d90"
        loading
        size={100}
        className="m-auto align-middle"
      /></div>}
      <div style={{ fontFamily: "'Poppins', sans-serif" }}>

        <header className="sticky min-w-full top-0 z-50 shadow-md bg-white">
          <div className="navbar hidden lg:flex py-2 h-auto flex-wrap px-4 lg:flex-row items-center justify-between">
            <a className="">
              <img alt="logo" className="h-8 lg:ml-4 w-auto cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" />
            </a>
            <nav className="lg:flex text-center">
              <ul className="lg:flex text-sm font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center tracking-wide cursor-pointer">
                <li onClick={scrolling1} className="hover:text-amber-500">Expertise</li>
                <li onClick={scrolling2} className="hover:text-amber-500">Services</li>
                <li onClick={scrolling3} className="hover:text-amber-500">Case Studies</li>
                <li onClick={scrolling4} className="hover:text-amber-500">Testimonial</li>
                {/* <li onClick={scrolling5} className="hover:text-amber-500">Data Visualisation</li> */}
              </ul>
              <a href="tel:8320576622">
                <button className="cta px-5 py-2 bg-sky-300 rounded-2xl mx-2 text-sm font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
              </a>
              <span className="hidden md:inline px-4">
                <img alt="gmp partner" className="h-10 w-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg" />
              </span>
            </nav>
          </div>


          <div className="relative  flex lg:hidden p-2">
            <Link href="/"><img onClick={() => setIsOpen(false)} src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="relative h-10 md:mx-4 cursor-pointer" /></Link>
            <a className="ml-4" href="tel:8320576622">
              <button className="cta px-5 py-2 bg-sky-300 rounded-2xl mx-2 text-sm font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
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
                    <div>Expertise</div>

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
                    Case Studies
                  </p>

                  <p onClick={() => { setIsOpen(!isOpen); scrolling4(); }}

                    className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Testimonial
                  </p>

                  {/* <p onClick={() => { setIsOpen(!isOpen); scrolling5(); }}

                    className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Data Visualisation
                  </p> */}
                </div>
              </div>
            )}
          </Transition>
          <ScrollProgress color="red" showSpinner={false} />
        </header>

        <section>
          <div className="flex items-center justify-between mt-4 md:px-20 pl-4">
            <div className="flex items-center m-2 md:float-none"><img alt="GA4 logo" src="https://storage.googleapis.com/website-bucket-uploads/static/Ga4_logo.png" />
              <h1 className="  md:text-5xl text-2xl font-bold ml-4">Google Analytics 4</h1>
            </div>
          </div>

          <div className="relative md:flex items-center md:px-20 pl-4">
            <div className="absolute z-0 bg-gradient-to-r from-sky-200 to-transparent md:w-96 md:h-96 w-40 h-40 md:top-0 md:-left-36 top-12 -left-16 rounded-full"></div>
            <div className="pt-12 md:w-3/4 z-10">
              <h2 className="text-2xl font-bold">Is your GA4 ready to </h2>
              <ul style={{ color: '#E37400' }} className="mt-6 mx-2 font-semibold">
                <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_6.png' />
                  Explore new features of analytics</li>
                <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_6.png' />
                  Better understand website traffic</li>
                <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_6.png' />
                  Spend Marketing Budgets more wisely</li>
              </ul>
              <img alt="img new" className="" src="https://storage.googleapis.com/website-bucket-uploads/static/IMG_New.png" />
              <div className="w-full flex justify-center mt-[-39px] mb-[31px] lg:hidden">
                <button
                  onClick={scrolling}
                  className="cta schedule-button bg-amber-500 hover:bg-amber-600 transition-all delay-100 p-4 rounded-xl shadow-md shadow-gray-400 hover:shadow-gray-600 text-white font-semibold"
                >
                  Signup for free audit
                </button>
              </div>
            </div>
            <div className="text-center bg-sky-50 p-4 md:p-8 md:w-3/5 rounded-xl shadow-xl">

              {!formSubmit && <div className="block">
                <h2 className="md:text-xl text-sky-900">Deep dive into GA4 with our Free Audit </h2>
                <h2 className="font-semibold text-2xl p-4 md:p-6 border-dashed border-b-2 border-sky-200">Let us help you !!</h2>
                <ScrollElement
                  id="contact-form"
                  name="contact-form"
                ></ScrollElement>
                <form className="px-8 pt-6 pb-2 space-y-2" onSubmit={handleSubmit}>
                  <div>
                    <input type="text" placeholder="FULL NAME*" className="bg-sky-50 border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="fullName" name="fullName" value={formValues.fullName} onChange={handleChange} />
                    <span className="text-xs text-red-600 float-left">{formErrors.fullName}</span>
                  </div>

                  <div>
                    <input type="email" placeholder="EMAIL*" className="bg-sky-50 border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="email" name="email" value={formValues.email} onChange={handleChange} />
                    <span className="text-xs text-red-600 float-left">{formErrors.email}</span>
                  </div>
                  <div>
                    <input type="tel" placeholder="CONTACT NO." className="bg-sky-50 border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="contact" name="contact" value={formValues.contact} onChange={handleChange} />

                  </div>
                  <div>
                    <textarea type="" placeholder="TYPE MESSAGE*" className="bg-sky-50 border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="message" name="message" value={formValues.message} onChange={handleChange}></textarea>
                    <span className="text-xs text-red-600 float-left">{formErrors.message}</span>
                  </div>
                  <div>
                    {/* <button className="cta bg-amber-500 hover:bg-amber-600 font-semibold text-white px-8 py-2 rounded-xl shadow-md shadow-gray-400 hover:shadow-gray-600 transition-transform delay-100">SIGN UP </button> */}
                    <button
                      className="cta font-semibold text-white px-8 py-2 rounded-xl shadow-md shadow-gray-400 hover:shadow-gray-600 transition-transform delay-100"
                      style={{ backgroundColor: '#1A73E8' }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1558B5'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1A73E8'}
                    >
                      SIGN UP
                    </button>

                  </div>

                </form>
              </div>}

              {formSubmit && <div>
                <h2 className="md:text-xl text-sky-900">Thank you for showing interest with us!</h2>
                <h2 className="font-semibold text-2xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">We will get back to you shortly !!</h2>
                <img alt="thank you" src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg" />
              </div>}
              <a
                href="https://docs.google.com/spreadsheets/d/1a3W4-dojm1F3T7v_mfqd_-kfQXq42q-zM2JHHAH2QbM"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs text-blue-600 hover:text-blue-600 underline"
              >
                View Sample GA4 Audit
              </a>

            </div>
          </div>
        </section>



        {/* <section>
          <div className="main bg-cover bg-center relative text-white" style={{ backgroundImage: "url('/ga4-head.png')", height: "105vh" }}>
            <div className="relative md:flex items-center md:px-10 md:py-10">
              <div className="pt-6 md:w-3/4 z-10 text-white">
                <h2 className="font-poppins text-3xl md:text-5xl font-semibold leading-tight text-left">SMART . FAST . ACCURATE</h2>
                <p className="font-poppins text-lg leading-7 mt-4 w-full md:w-1/2">
                  Unleash the full potential of Data with AnalyticsLiv, a certified Google Analytics Partner.
                </p>
                <div className="w-full flex mt-6">
                  <button
                    onClick={scrolling}
                    className="bg-blue-500 hover:bg-blue-600 transition-all delay-100 p-4 rounded-xl shadow-md hover:shadow-gray-600 text-white font-semibold"
                  >
                    Sign up for a Free Audit
                  </button>
                </div>
              </div>

              <div className="text-center bg-sky-50 p-4 md:p-8 md:w-1/2 rounded-xl shadow-xl mt-8 md:mt-0">

                {!formSubmit && <div className="block">
                  <h2 className="font-poppins text-lg font-medium leading-7 text-center text-sky-900">
                    We Understand setting up GA4 can be complex sometimes.
                  </h2>

                  <h2 className="font-semibold text-2xl border-dashed border-b-2 border-sky-200 text-black">Let us help you !!</h2>
                  <ScrollElement
                    id="contact-form"
                    name="contact-form"
                  ></ScrollElement>
                  <form className="px-8 pt-6 pb-2 space-y-2" onSubmit={handleSubmit}>
                    <div>
                      <input type="text" placeholder="FULL NAME*" className="bg-sky-50 border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="fullName" name="fullName" value={formValues.fullName} onChange={handleChange} />
                      <span className="text-xs text-red-600 float-left">{formErrors.fullName}</span>
                    </div>

                    <div>
                      <input type="email" placeholder="EMAIL*" className="bg-sky-50 border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="email" name="email" value={formValues.email} onChange={handleChange} />
                      <span className="text-xs text-red-600 float-left">{formErrors.email}</span>
                    </div>
                    <div>
                      <input type="tel" placeholder="CONTACT NO." className="bg-sky-50 border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="contact" name="contact" value={formValues.contact} onChange={handleChange} />

                    </div>
                    <div>
                      <textarea placeholder="TYPE MESSAGE*" className="bg-sky-50 border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="message" name="message" value={formValues.message} onChange={handleChange}></textarea>
                      <span className="text-xs text-red-600 float-left">{formErrors.message}</span>
                    </div>
                    <div>
                      <button
                        className="cta font-semibold text-white px-8 py-2 rounded-xl shadow-md shadow-gray-400 hover:shadow-gray-600 transition-transform delay-100"
                        style={{ backgroundColor: '#1A73E8' }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1558B5'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1A73E8'}
                      >
                        SIGN UP
                      </button>
                    </div>

                  </form>
                </div>}

                {formSubmit && <div>
                  <h2 className="md:text-xl text-sky-900">Thank you for showing interest with us!</h2>
                  <h2 className="font-semibold text-2xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">We will get back to you shortly !!</h2>
                  <img alt="thank you" src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg" />
                </div>}
                <a
                  href="https://docs.google.com/spreadsheets/d/1a3W4-dojm1F3T7v_mfqd_-kfQXq42q-zM2JHHAH2QbM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-600 underline"
                >
                  View Sample GA4 Audit
                </a>

              </div>
            </div>
          </div>
        </section> */}

        {/* <section>
          <div className="flex flex-col md:flex-row items-center w-full mt-5 relative h-screen">
            <div className="flex flex-col justify-center sm:absolute	bg-white z-10 left-0 w-full md:w-2/3 lg:w-1/2 h-auto md:h-3/5 p-6 md:p-6 sm:rounded-3xl shadow-lg pl-8">
              <p className="text-xl md:text-4xl font-semibold leading-snug text-left text-blue-400 mb-1">
                Get captivating customer insights and Analysis.
              </p>

              <p className="text-base md:text-lg leading-relaxed mt-4 text-gray-700">
                By partnering with AnalyticsLiv, a Google Analytics Partner, you gain access to expert guidance and the latest tools to harness the power of GA4. Let's turn your data into a competitive advantage!
              </p>
              <button className="mt-6 py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition-all duration-700 ease-in-out w-max">
                Get started today
              </button>
            </div>
            <div className="sm:absolute w-full md:w-1/2 lg:w-2/3 right-0 h-5/6 max-sm:h-1/2">
              <img src="/ga4-second.png" alt="Customer Insights and Analysis" className="w-full h-full object-cover transform scale-x-[-1]" />
            </div>
          </div>
        </section> */}

        {/* <section>
          <div className="mx-4 sm:mx-auto max-w-7xl">
            <div className="mid3 text-2xl text-blue-500 font-semibold text-center py-4">
              <p>Google Analytics - The support system of every marketing team, how it helps ?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 pb-8">
              <div className="event1 bg-blue-100 shadow-md rounded-md p-4">
                <div className="flex items-center pb-4">
                  <div className="bg-blue-500 rounded-full w-14 h-14 overflow-hidden">
                    <img src="/logo22.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="even1 ml-4">
                    <p>Data Foundation & Automation :</p>
                  </div>
                </div>
                <div className="evevent2b">
                  <p>Establish a robust GA4 implementation, ensuring accurate data collection with built-in automation.</p>
                </div>
              </div>

              <div className="event1 bg-blue-100 shadow-md rounded-md p-4">
                <div className="flex items-center pb-4">
                  <div className="bg-blue-500 rounded-full w-14 h-14 overflow-hidden">
                    <img src="/location.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="even1 ml-4">
                    <p>Customer Journey Mapping :</p>
                  </div>
                </div>
                <div className="evevent2b">
                  <p>GA4's advanced capabilities to map customer journey across touchpoints, revealing valuable insights into user behaviour.</p>
                </div>
              </div>

              <div className="event1 bg-blue-100 shadow-md rounded-md p-4">
                <div className="flex items-center pb-4">
                  <div className="bg-blue-500 rounded-full w-14 h-14 overflow-hidden">
                    <img src="/search.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="even1 ml-4">
                    <p>Actionable Insights and Machine Learning :</p>
                  </div>
                </div>
                <div className="evevent2b">
                  <p>Leverage Google's machine learning to uncover hidden trends, predict future customer actions</p>
                </div>
              </div>

              <div className="event1 bg-blue-100 shadow-md rounded-md p-4">
                <div className="flex items-center pb-4">
                  <div className="bg-blue-500 rounded-full w-14 h-14 overflow-hidden">
                    <img src="/garph.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="even1 ml-4">
                    <p>Seamless Integration & Reporting :</p>
                  </div>
                </div>
                <div className="evevent2b">
                  <p>Integrate GA4 with your existing marketing ecosystem, enabling 360° view across platforms and generate actionable reports</p>
                </div>
              </div>

            </div>
            <div className='flex justify-center w-full'>
              <div className="event1 bg-blue-100 shadow-md rounded-md p-4 w-full md:w-3/5">
                <div className="event1a flex items-center pb-4">
                  <div className="bg-blue-500 rounded-full w-14 h-14 overflow-hidden">
                    <img src="/hand.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="even1 ml-4">
                    <p>Expert Guidance & Support :</p>
                  </div>
                </div>
                <div className="evee">
                  <p>Our team of Google Analytics certified consultants provide ongoing support and guidance to ensure you get the most out of GA4.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}


        {/* <section>
          <div className="flex flex-col p-8">
            <div className="mid3 text-2xl text-blue-500 font-semibold text-center py-4">
              <p>Don't just collect data, make it work for you!</p>
            </div>
            <div className='w-full flex flex-col justify-center items-center md:flex-row'>
              <div className="flex flex-col items-center sm:items-start h-full w-1/2">
                <div className="flex items-center justify-center">
                  <img className="w-2/3" src="/laptop.png" alt="" />
                </div>
              </div>

              <div className="flex flex-col gap-8 w-1/2">
                <div className="space-y-8">
                  <div className="flex flex-col items-start gap-8">
                    <div className="flex items-center gap-8">
                      <div className="bg-blue-500 rounded-full w-14 h-14 overflow-hidden">
                        <img src="/clock.png" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">Reduced Reporting Time :</p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <p>Spend less time gathering data and more time making strategic decisions. (Example: Short testimonial about reduced reporting time can be included here)</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-8">
                    <div className="flex items-center gap-8">
                      <div className="bg-blue-500 rounded-full w-14 h-14 overflow-hidden">
                        <img src="/idea.png" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">Cross-Platform Insights :</p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <p>Gain a holistic view of customer behavior across websites and apps.</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-8">
                    <div className="flex items-center gap-8">
                      <div className="bg-blue-500 rounded-full w-14 h-14 overflow-hidden">
                        <img src="/speaket.png" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">Improved Marketing ROI :</p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <p>Optimize campaigns based on actionable insights and data-driven strategies.</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-8">
                    <div className="flex items-center gap-8">
                      <div className="bg-blue-500 rounded-full w-14 h-14 overflow-hidden">
                        <img src="/graph.png" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">Predictive Analytics :</p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <p>Anticipate future customer actions and personalize experiences for better engagement.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section>
          <div className="bg-white py-4">
            <h2 className="text-center font-bold text-xl">200+ Clients served for GA4</h2>
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
        </section>

        <section>
          <ScrollElement
            id="expertise"
            name="expertise"
          ></ScrollElement>
          <div className="bg-sky-300 relative md:flex md:justify-around md:mt-4 px-4 md:px-20 pt-8 pb-16">
            <div className="text-center mb-8 md:mb-0">
              <h2 className="text-4xl font-bold md:mb-16">Our expert can help you</h2>
              <ul className="my-6 mx-2 text-sm text-left font-semibold space-y-4 mb-8">
                <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_6.png' />
                  Set up your GA4 account and configure the tracking code</li>
                <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_6.png' />
                  Import your historical data from Universal Analytics</li>
                <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_6.png' />
                  Create custom reports and dashboards</li>
                <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_6.png' />
                  Track your website traffic and marketing campaigns</li>
                <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_6.png' />
                  Analyse your data and identify trends</li>
                <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_6.png' />
                  Make data-driven decisions that will help you grow your business</li>
              </ul>
              <button onClick={scrolling} className="cta schedule-button bg-amber-500 hover:bg-amber-600 transition-all delay-100 p-4 rounded-xl shadow-md shadow-gray-400 hover:shadow-gray-600 text-white font-semibold">Schedule Free Consultation</button>
            </div>
            <div className="text-center">
              <img alt="graph" src="https://storage.googleapis.com/website-bucket-uploads/static/graph.png" />
            </div>
          </div>
        </section>

        <section>
          <ScrollElement
            id="services"
            name="services"
          ></ScrollElement>
          <div className="relative md:flex justify-around md:mt-4 px-4 md:px-20 md:pt-4 pb-4 md:pb-16">
            <div className="text-center">
              <img alt="offer" src="https://storage.googleapis.com/website-bucket-uploads/static/Offer.png" />
            </div>
            <div className='text-center'>
              <h2 className=" text-4xl text-left font-bold md:mb-16">Menu of Services</h2>
              <ul className="my-6 mx-2 text-left text-sm font-semibold space-y-4 mb-8">
                <li><svg xmlns="http://www.w3.org/2000/svg" className="inline mr-4" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
                  GA4 Audit :
                  <div className="pl-9 text-amber-500">Know about your current GA4 configuration and its gaps</div>
                </li>
                <li><svg xmlns="http://www.w3.org/2000/svg" className="inline mr-4" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
                  Full Service Management :
                  <div className="pl-9 text-amber-500">Configuration, management, and analysis of your GA4 account </div>
                </li>
                <li><svg xmlns="http://www.w3.org/2000/svg" className="inline mr-4" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
                  Consulting :
                  <div className="pl-9 text-amber-500">Get guidance and support on how GA4 can help improve your business. </div>
                </li>
                <li><svg xmlns="http://www.w3.org/2000/svg" className="inline mr-4" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
                  Training :
                  <div className="pl-9 text-amber-500">Get trained by Analytics veterans on how to use GA4 & manage
                    your account yourself. </div>
                </li>
                <li><svg xmlns="http://www.w3.org/2000/svg" className="inline mr-4" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
                  GA4 Insights and Analysis :
                  <div className="pl-9 text-amber-500">Visualize GA4 Data & Generate insights to take actions. </div>
                </li>
              </ul>
              <button onClick={scrolling} className="cta schedule-button bg-sky-400 hover:bg-sky-500 text-white p-4 rounded-xl shadow-md shadow-gray-400 hover:shadow-gray-600 transition-all delay-100 font-semibold">Schedule Free Consultation</button>

            </div>
          </div>

        </section>

        {/* <section>
          <div className="max-2xl:min-h-screen pb-10">
            <div>
              <p className="font-bold max-md:px-3 md:font-semibold text-xl md:text-2xl lg:text-2xl lg:px-10 text-center text-blue-400">
                Explore the full range of GA4 functionalities we can help you implement:
              </p>
            </div>

            <div className="md:mt-10 2xl:pl-[730px] lg:px-10 max-2xl:min-h-screen overflow-hidden max-lg:flex max-lg:flex-col">
              <div className="float-left lg:pt-96 xl:pt-72 m-auto lg:pr-20 lg:pl-10 max-sm:py-10">
                <img src="/Ga4.png" alt="logo" />
              </div>

              <div className="max-md:px-5 md:ml-16 max-sm:flex max-sm:flex-col max-sm:items-center">
                <div className="flex flex-col items-center md:flex md:flex-row sm:py-5 lg:transform lg:-translate-x-32">
                  <p className="rounded-full bg-blue-50 p-3 md:p-8 lg:p-10 max-sm:w-max md:absolute md:z-10 text-lg font-extrabold sm:text-2xl lg:mt-5 text-blue-400">
                    1
                  </p>
                  <span className="bg-blue-50 py-2 relative z-0 px-3 md:px-24 lg:px-32 xl:px-48 lg:ml-2 border border-transparent rounded-3xl md:mt-3 lg:mt-7">
                    Built-in Automation for streamlined workflows.
                  </span>
                </div>
                <div className="flex flex-col items-center md:flex md:flex-row py-8 lg:py-5 lg:transform lg:-translate-x-10">
                  <p className="rounded-full bg-blue-50 p-3 md:p-8 lg:p-10 max-sm:w-max max-sm:h-max md:absolute md:z-10 text-lg font-extrabold sm:text-2xl lg:mt-5 text-blue-400">
                    2
                  </p>
                  <span className="bg-blue-50 py-2 relative z-0 px-3 md:px-24 xl:px-48 lg:ml-2 border border-transparent rounded-3xl md:mt-3 lg:mt-7">
                    Intuitive and Flexible Reporting for deeper analysis.
                  </span>
                </div>
                <div className="flex flex-col items-center md:flex md:flex-row py-5 lg:py-7 lg:transform lg:translate-x-7">
                  <p className="rounded-full bg-blue-50 p-3 md:p-8 lg:p-10 max-sm:w-max max-sm:h-max md:absolute md:z-10 text-lg font-extrabold sm:text-2xl lg:mt-5 text-blue-400">
                    3
                  </p>
                  <span className="bg-blue-50 py-2 relative z-0 px-3 md:px-24 xl:px-48 lg:ml-2 border border-transparent rounded-3xl md:mt-3 lg:mt-7">
                    Cross-Platform Attribution for accurate campaign measurement.
                  </span>
                </div>
                <div className="flex flex-col items-center md:flex md:flex-row py-7 lg:transform lg:translate-x-7">
                  <p className="rounded-full bg-blue-50 p-3 md:p-8 lg:p-10 max-sm:w-max max-sm:h-max md:absolute md:z-10 text-lg font-extrabold sm:text-2xl lg:mt-5 text-blue-400">
                    4
                  </p>
                  <span className="bg-blue-50 py-2 relative z-0 px-3 md:px-24 xl:px-56 lg:ml-2 border border-transparent rounded-3xl md:mt-3 lg:mt-7">
                    Explorations for custom data analysis.
                  </span>
                </div>
                <div className="flex flex-col items-center md:flex md:flex-row py-5 lg:transform xl:-translate-x-10">
                  <p className="rounded-full bg-blue-50 p-3 md:p-8 lg:p-10 max-sm:w-max max-sm:h-max md:absolute md:z-10 text-lg font-extrabold sm:text-2xl lg:mt-5 text-blue-400">
                    5
                  </p>
                  <span className="bg-blue-50 py-2 relative z-0 px-3 md:px-24 xl:px-44 lg:ml-2 border border-transparent rounded-3xl md:mt-3 lg:mt-7">
                    Easy Data Collection & Management with integrated tools.
                  </span>
                </div>
                <div className="flex flex-col items-center md:flex md:flex-row py-8 lg:transform lg:translate-x-28 xl:translate-x-36">
                  <p className="rounded-full bg-blue-50 p-3 md:p-8 lg:p-10 max-sm:w-max max-sm:h-max md:absolute md:z-10 text-lg font-extrabold sm:text-2xl lg:mt-5 text-blue-400">
                    6
                  </p>
                  <span className="bg-blue-50 py-2 relative z-0 px-3 md:px-24 xl:px-40 lg:ml-2 border border-transparent rounded-3xl md:mt-3 lg:mt-7">
                    Seamless Integration with existing marketing platforms.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </section> */}

        <ScrollElement
          id="case-studies"
          name="case-studies"
        ></ScrollElement>
        <section className='casestudy'>
          <div className="bg-sky-300 relative text-center md:px-20 px-2 md:pt-8 py-4 md:pb-6 space-y-8">
            <h2 className="text-4xl text-left font-bold md:mb-16">Case Studies</h2>
            <div className="cstudy md:flex text-left justify-evenly bg-white md:px-20 px-2 md:py-8 py-4 md:rounded-full rounded-xl shadow-md shadow-gray-600">
              <div className="md:w-3/4">
                <h2 className="text-2xl font-bold mb-4"><svg xmlns="http://www.w3.org/2000/svg" className='inline mr-4 rotate-90' height="1em" viewBox="0 0 448 512"><path d="M160 64c0-8.8 7.2-16 16-16s16 7.2 16 16V200c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c8.8 0 16 7.2 16 16c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c7.8 0 14.3 5.6 15.7 13c1.6 8.2 7.3 15.1 15.1 18s16.7 1.6 23.3-3.6c2.7-2.1 6.1-3.4 9.9-3.4c8.8 0 16 7.2 16 16l0 16V392c0 39.8-32.2 72-72 72H272 212.3h-.9c-37.4 0-72.4-18.7-93.2-49.9L50.7 312.9c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4L116 353.2c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23V320 64zM176 0c-35.3 0-64 28.7-64 64V261.7C91.2 238 55.5 232.8 28.5 250.7C-.9 270.4-8.9 310.1 10.8 339.5L78.3 440.8c29.7 44.5 79.6 71.2 133.1 71.2h.9H272h56c66.3 0 120-53.7 120-120V288l0-16c0-35.3-28.7-64-64-64c-4.5 0-8.8 .5-13 1.3c-11.7-15.4-30.2-25.3-51-25.3c-6.9 0-13.5 1.1-19.7 3.1C288.7 170.7 269.6 160 248 160c-2.7 0-5.4 .2-8 .5V64c0-35.3-28.7-64-64-64zm48 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z" /></svg>
                  Universal Analytics (GA3) to GA4 Migration for a Website</h2>
                <p className="text-amber-600">The migration process was smooth and successful without any data loss,
                  increasing efficiency and reducing manual effort by 30%. The client now has a more comprehensive understanding of user behaviour across devices and sessions, enabling them to make more informed decisions and improve website performance.
                </p>
              </div>
              <div className="text-center space-x-4">
                <img alt="GA3 logo" src="https://storage.googleapis.com/website-bucket-uploads/static/UA_Logo.png" className="inline" />
                <img alt="arrow" src="https://storage.googleapis.com/website-bucket-uploads/static/curved_arrow.png" className="inline" />
                <img alt="GA4 logo" src="https://storage.googleapis.com/website-bucket-uploads/static/Ga4_logo_png 1.png" className="inline" />
                <a onClick={scrolling} href="#"><button className="cta bg-amber-500 hover:bg-amber-600 transition-all delay-100 px-16 py-2 text-white font-semibold rounded-full shadow-lg shadow-gray-400 mt-8">View</button></a>
              </div>

            </div>

            <div className="cstudy md:flex text-left justify-evenly bg-white px-2 md:px-20 py-4 md:py-8 md:rounded-full rounded-xl shadow-md shadow-gray-600">
              <div className="md:w-3/4">
                <h2 className="text-2xl font-bold mb-4"><svg xmlns="http://www.w3.org/2000/svg" className='inline mr-4 rotate-90' height="1em" viewBox="0 0 448 512"><path d="M160 64c0-8.8 7.2-16 16-16s16 7.2 16 16V200c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c8.8 0 16 7.2 16 16c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c7.8 0 14.3 5.6 15.7 13c1.6 8.2 7.3 15.1 15.1 18s16.7 1.6 23.3-3.6c2.7-2.1 6.1-3.4 9.9-3.4c8.8 0 16 7.2 16 16l0 16V392c0 39.8-32.2 72-72 72H272 212.3h-.9c-37.4 0-72.4-18.7-93.2-49.9L50.7 312.9c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4L116 353.2c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23V320 64zM176 0c-35.3 0-64 28.7-64 64V261.7C91.2 238 55.5 232.8 28.5 250.7C-.9 270.4-8.9 310.1 10.8 339.5L78.3 440.8c29.7 44.5 79.6 71.2 133.1 71.2h.9H272h56c66.3 0 120-53.7 120-120V288l0-16c0-35.3-28.7-64-64-64c-4.5 0-8.8 .5-13 1.3c-11.7-15.4-30.2-25.3-51-25.3c-6.9 0-13.5 1.1-19.7 3.1C288.7 170.7 269.6 160 248 160c-2.7 0-5.4 .2-8 .5V64c0-35.3-28.7-64-64-64zm48 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z" /></svg>
                  GA4 Enhanced Ecommerce Implementation
                  Using GTM and Shopify Integration</h2>
                <p className="text-sky-600">We successfully implemented 90% of purchase events, with the exception of UA, which is at 70% and all GA4 enhanced ecommerce events and Shopify parameters are being successfully sent to GA4.
                </p>
              </div>
              <div className="text-center pt-4 md:pt-0 space-x-4">
                <img alt="GTM logo" src="https://storage.googleapis.com/website-bucket-uploads/static/GTM_logo.png" className="inline" />
                <img alt="AI" src="https://storage.googleapis.com/website-bucket-uploads/static/AI.png" className="inline" />
                <img alt="Shopify logo" src="https://storage.googleapis.com/website-bucket-uploads/static/Shopify_logo.png" className="inline" />
                <a onClick={scrolling} href="#"><button className="cta bg-sky-400 hover:bg-sky-500 transition-all delay-100 px-16 py-2 text-white font-semibold rounded-full shadow-lg shadow-gray-400 mt-8">View</button></a>
              </div>
            </div>
            <a href="https://analyticsliv.com/case-studies"><button className="hidden more-casestudy my-8 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-3 shadow-md shadow-gray-400 hover:shadow-gray-600 transition-all delay-100 rounded-full">More Case Studies</button></a>
          </div>
        </section>


        <section>
          <ScrollElement
            id="testimonial"
            name="testimonial"
          ></ScrollElement>
          <Testimonial />
        </section>
        <div className='md:flex justify-center md:space-x-20 items-center px-2 md:px-16 bg-sky-300 py-2 text-center'>
          <h2 className='text-left mb-2'>Customize Your Data Visualization with GA4</h2>
          <button onClick={scrolling} className="cta px-5 py-2 bg-sky-400 rounded-2xl mx-2 text-sm font-semibold cursor-pointer hover:bg-sky-500">CONTACT US</button>
        </div>
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
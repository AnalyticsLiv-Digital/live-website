import Head from 'next/head'
import React from 'react'
import { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import { ScaleLoader } from 'react-spinners';
import Marquee from "react-fast-marquee";
import StructuredData from '../components/StructuredData';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
import ScrollProgress from '../components/ScrollProgress'
import { Transition } from "@headlessui/react";
import Iframe from 'react-iframe'


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

export default function gtm({brandsdata}) {

    const initialValues = { fullName: '', email: '', contact: '',message : '',website : ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showWaiting, setShowWaiting] = useState(false);
    const [selected, setSelected] = useState("");
    const [formSubmit, setFormSubmit] = useState(false);
    const [toggle1, setToggle1] = useState(true);
    const [toggle2, setToggle2] = useState(true);
    const [toggle3, setToggle3] = useState(true);
    const [toggle4, setToggle4] = useState(true);
    const [toggle5, setToggle5] = useState(true);
    const [toggle6, setToggle6] = useState(true);

    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
       // console.log(formValues);
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
                event:'gtm_submission'
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


    const scrolling = () => {
        {
            Scroll.scroller.scrollTo("form", {
              duration: 500,
              smooth: true,
              offset: -100,
            });
          }
    }

    const scrolling1 = () =>{
      {
        Scroll.scroller.scrollTo("clients", {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      }

    }

    const scrolling2 = () =>{
      {
        Scroll.scroller.scrollTo("services", {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      }

    }

    const scrolling3 = () =>{
      {
        Scroll.scroller.scrollTo("solutions", {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      }

    }

    const scrolling4 = () =>{
      {
        Scroll.scroller.scrollTo("testimonials", {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      }

    }

    const scrolling5 = () =>{
      {
        Scroll.scroller.scrollTo("case-studies", {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      }

    }



    const stuctureData = {"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://analyticsliv.com/","url":"https://analyticsliv.com/","name":"Leading Web and App Analytics Agency in India - AnalyticsLiv","isPartOf":{"@id":"https://analyticsliv.com/#website"},"primaryImageOfPage":{"@id":"https://analyticsliv.com/#primaryimage"},"image":{"@id":"https://analyticsliv.com/#primaryimage"},"thumbnailUrl":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","datePublished":"2023-01-11T18:27:34+00:00","dateModified":"2023-04-07T20:48:38+00:00","description":"AnalyticsLiv Digital is one of the leading Web and App analytics agency. We help our customers embrace Google Products to improve their customer experiences.","breadcrumb":{"@id":"https://analyticsliv.com/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://analyticsliv.com/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://analyticsliv.com/#primaryimage","url":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","contentUrl":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","width":1200,"height":628},{"@type":"BreadcrumbList","@id":"https://analyticsliv.com/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]},{"@type":"WebSite","@id":"https://analyticsliv.com/#website","url":"https://analyticsliv.com/","name":"Analyticsliv","description":"","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.analyticsliv.com/blogs/search?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://www.analyticsliv.com/#organization","name":"Analyticsliv","url":"https://www.analyticsliv.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://www.analyticsliv.com/#/schema/logo/image/","url":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","contentUrl":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","width":512,"height":114,"caption":"Analyticsliv"},"image":{"@id":"https://www.analyticsliv.com/#/schema/logo/image/"},"sameAs":["https://m.facebook.com/100070503960704/","https://in.linkedin.com/company/analytics-liv-digital","https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw","https://www.instagram.com/analyticsliv_digital"]}]};
    

  return (
    <><Head>
        <link rel="icon" href="https://storage.googleapis.com/website-bucket-uploads/static/favicon.png" type="image/icon type"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins"
          rel="stylesheet"
        />
                <meta name="description" content="AnalyticsLiv Digital is one of the leading Web and App analytics agency. We help our customers embrace Google Products to improve their customer experiences."/>
                <title>Google Tag Manager - AnalyticsLiv</title>
                
            </Head>
            <StructuredData data={stuctureData} />
            <div className="gtm">
    {showWaiting && <div className="fixed z-50 flex backdrop-blur top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"><ScaleLoader
  color="#271d90"
  loading
  size={100}
  className="m-auto align-middle"
/></div>}
    <div style={{fontFamily: "'Poppins', sans-serif"}}>

    <header className="sticky min-w-full top-0 z-50 shadow-md bg-white">
    <div className="navbar hidden lg:flex py-2 h-auto flex-wrap px-4 lg:flex-row items-center justify-between">
        <a className="">
          <img alt="logo" className="h-8 lg:ml-4 w-auto cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png"/>
        </a>
        <nav className="lg:flex text-center">
          <ul className="lg:flex text-sm font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center tracking-wide cursor-pointer">
            <li onClick={scrolling1} className="hover:text-amber-500">Clients</li>
            <li onClick={scrolling2} className="hover:text-amber-500">Services</li>
            <li onClick={scrolling3} className="hover:text-amber-500">Custom Solutions</li>
            <li onClick={scrolling4} className="hover:text-amber-500">Testimonial</li>
            <li onClick={scrolling5} className="hover:text-amber-500">Case Studies</li>
          </ul>
          <a href="tel:7979634379">
          <button className="cta px-5 py-2 bg-sky-300 rounded-2xl mx-2 text-sm font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
          </a>
          <span className="hidden md:inline px-4">
            <img alt="gmp partner" className="h-10 w-auto"   src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg" />
          </span>
        </nav>
    </div>


    <div className="relative  flex lg:hidden p-2">
  <Link href="/"><img onClick={() => setIsOpen(false)} src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="relative h-10 md:mx-4 cursor-pointer"/></Link>
  <a className="ml-4" href="tel:7979634379">
          <button className="cta px-5 py-2 bg-sky-300 rounded-2xl mx-2 text-sm font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
          </a>
              <button
                onClick={() => {setIsOpen(!isOpen);}}
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
            <div className="bg-white lg:hidden absolute w-full"  id="mobile-menu">
              <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
                <p onClick={() => {setIsOpen(!isOpen); scrolling1();}}
                  className=" text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                 <div>Clients</div>
                  
                </p>

                <p onClick={() => {setIsOpen(!isOpen); scrolling2();}}
                  href="#"
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div >Services</div>
                  
                </p>

                <p onClick={() => {setIsOpen(!isOpen); scrolling3();}}
                 
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Custom Solutions
                </p>

                <p onClick={() => {setIsOpen(!isOpen); scrolling4();}}
    
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Testimonials
                </p>

                <p onClick={() => {setIsOpen(!isOpen); scrolling5();}}
        
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Case Studies
                </p>
              </div>
            </div>
          )}
        </Transition>
        <ScrollProgress color="red" showSpinner={false}/>
  </header>

  <section className="banner relative h-full py-16">
        <div className="mx-auto">
            <div className="md:mx-16 mx-4 pb-16 my-2 md:px-4 md:text-center border-b-2">
                <div className="flex items-center justify-center space-x-4 py-4 mb-6">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/gtm_logo.png" alt="logo" />
                    <h1 className="md:text-4xl text-xl font-bold leading-normal not-italic text-h1">Google Tag Manager
                        Consulting Services</h1>
                </div>
                <div className="lg:flex lg:justify-between">
                    <div className="left space-y-4 lg:w-[85%] mb-5">
                        <h1 className="py-4 md:text-[25px] text-lg text-start font-semibold text-btn leading-10">Are You
                            Using Google
                            Tag Manager (GTM)?</h1>

                        <div className="py-3 text-center">

                            <img className='mx-auto' src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/OBJECTS.png" alt="objects"/>
                        </div>

                        <div className="py-3 text-center">
                            <ul className="my-6 mx-2 text-black text-left md:text-xl text-base font-normal space-y-4 mb-8">
                                <li className="flex">
                                    <div>
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                    </div>
                                    <span>Unlock power of GTM tag Management system</span>
                                </li>
                                <li className="flex">
                                    <div>
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                    </div>
                                    <span>Make dynamic changes to live website</span>
                                </li>
                                <li className="flex">
                                    <div>
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                    </div>
                                    <span>Track marketing pixels accurately</span>
                                </li>
                                <li className="flex">
                                    <div>
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                    </div>
                                    <span>Improve page performance via Server-side tagging</span>
                                </li>
                            </ul>
                            <button onClick={scrolling} 
                                className="btn cursor-pointer w-44 bg-btn  hover:bg-sky-800 transition duration-200 delay-75 mx-2 p-4 rounded-[15px] shadow-lg shadow-gray-400 text-white font-semibold">Let’s
                                chat to get
                                best out of GTM</button>
                        </div>

                    </div>
                    <ScrollElement
        id="form"
        name="form"
      ></ScrollElement>

                   {!formSubmit &&
                    <div className="right relative lg:flex lg:justify-end my-4 md:my-0 h-[37rem]">
                        <div className="absolute rounded-[319px] bg-[#D6E4EE] w-56 h-56 left-0 -top-10 z-[-1] blur-2xl">
                        </div>
                        <div className="form z-10 text-center bg-back py-8 md:p-8 lg:w-3/4 rounded-[39px]">
                            <div className="block">
                                <h2 className="text-txt text-xl">We understand maintaining centralized tag Management System is not an easy job</h2>
                                <h1
                                    className="text-black font-semibold text-[29px] p-4 border-dashed border-b-2 border-sky-200">
                                    Let us
                                    help
                                    you
                                    !!</h1>
                            </div>
                            <form className="px-4 md:pt-4 pb-2 space-y-4 text-gray-600" onSubmit={handleSubmit}>
                      <div>
                        <input type="text" placeholder="FULL NAME*" className="bg-transparent px-4 border-b-2 w-full py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="fullName" name="fullName" value={formValues.fullName} onChange={handleChange}/>
                       <span className="text-xs text-red-600 float-left">{formErrors.fullName}</span>
                      </div>
                      
                      <div>
                        <input type="email" placeholder="EMAIL*" className="bg-transparent border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="email" name="email" value={formValues.email} onChange={handleChange}/>
                        <span className="text-xs text-red-600 float-left">{formErrors.email}</span>
                      </div>
                      <div>
                        <input type="tel" placeholder="CONTACT NO." className="bg-transparent border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="contact" name="contact" value={formValues.contact} onChange={handleChange} />
                        
                      </div>
                      <div>
                        <input type="text" placeholder="WEBSITE*" className="bg-transparent px-4 border-b-2 w-full py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="website" name="website" value={formValues.website} onChange={handleChange}/>
                        <span className="text-xs text-red-600 float-left">{formErrors.website}</span>
                      </div>
                      <div>
                        <textarea type="" placeholder="TYPE MESSAGE" className="bg-transparent border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200"  id="message" name="message" value={formValues.message} onChange={handleChange}></textarea>
                        
                      </div>
                      <div>
                        <button className="cta cursor-pointer bg-sky-500 hover:bg-sky-600 transition duration-200 delay-75 font-semibold text-white px-8 py-2 rounded-xl shadow-md shadow-gray-600"> CONTACT US </button>
                      </div>
                    </form>
                        </div>
                    </div>}

                    {formSubmit && <div className='w-full text-center'>
          <h2 className="md:text-xl text-sky-900">Thank you for showing interest with us!</h2>
        <h2 className="font-semibold text-2xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">We will get back to you shortly !!</h2>
        <img alt="Thankyou" className="w-64 mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg"/>
        </div>}
                </div>

            </div>
        </div>
    </section>


    <ScrollElement
        id="clients"
        name="clients"
      ></ScrollElement>
    <section>
 
 <div className="bg-white py-4">
  <h2 className="text-center font-bold text-xl">Thanks For Choosing AnalytiscLiv</h2>
   <div className="brandsimages flex space-x-8 justify-center py-4 px-4 mt-4">
   <Marquee gradient={false} pauseOnHover="true">
        
        { 
                brandsdata.brand.map((brands,key) => (
                 <div key={key}><img src={brands.logo} alt={brands.brands}/></div>
             
           ))
           } 
                 
                 </Marquee>
   </div>
 </div>
</section>

<ScrollElement
        id="services"
        name="services"
      ></ScrollElement>
    <section className="py-4">
        <div className="max-w-screen-xl mx-auto">
            <div className="md:mx-16 mx-4 pb-16 my-2 md:px-4 md:text-center">
                <div className="flex items-center justify-center space-x-4 py-4 mb-6">
                    <span className="bg-menu w-[150px] h-[10px]"></span>
                    <h2 className="text-black text-center text-4xl md:text-5xl lg:text-6xl font-bold pb-2">Menu Of
                        Services</h2>
                    <span className="bg-menu w-[150px] h-[10px]"></span>
                </div>
                <div className="in-menu my-3 min-[500px]:mx-[52px] mx-0">
                  


                {toggle1 &&
                    <div className="first-dp  py-10 px-5">
                        <div className="head1  relative sm:w-[400px] lg:w-[550px] m-auto text-center p-4">
                            <div
                                className="f bg-menu inline-block relative md:pt-5 md:pb-6 lg:pt-4 lg:pb-[10px] pt-3 pb-2  max-[639px]:rounded-[20%] max-[639px]:py-3 max-[639px]:px-5">
                                <div
                                    className="right-triangle w-0 h-0 absolute sm:left-[-76px] md:left-[-87px] sm:top-[6px] md:top-[18px] transform rotate-270 border-blue-400 max-[639px]:hidden">
                                </div>
                                <div className="max-[374px]:block mx-auto text-center flex items-center justify-center">
                                    <img className="h-12 w-12 mr-3" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/stethoscope 1.png"
                                        alt="stethoscope"/>
                                    <h3
                                        className="text-black text-center flex items-center justify-center sm:text-2xl lg:text-4xl text-xl font-bold">
                                        Google
                                        Tag Manager Health Check</h3>
                                    <img onClick={() => {setToggle1(!toggle1); setToggle2(true); setToggle3(true); setToggle4(true); setToggle5(true); setToggle6(true);}} className="down ml-3 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/down-arrow (8) 1.png"
                                        alt="down-arrow"/>
                                </div>
                                <div
                                    className="triangle w-0 absolute right-[-100px] sm:top-[10px] md:top-5 transform rotate-90 h-0 border-blue-300 max-[639px]:hidden">
                                </div>
                            </div> <br/>
                            <br/>
                        </div>


                    </div>} 

                    {!toggle1 &&
                    <div className="first-dp py-10 px-5 ad">
                        <div className="head1  relative sm:w-[400px] lg:w-[550px] m-auto text-center p-4">
                            <div
                                className="f bg-menu inline-block relative md:pt-5 md:pb-6 lg:pt-4 lg:pb-[10px] pt-3 pb-2  max-[639px]:rounded-[20%] max-[639px]:py-3 max-[639px]:px-5">
                                <div
                                    className="right-triangle w-0 h-0 absolute sm:left-[-76px] md:left-[-87px] sm:top-[6px] md:top-[18px] transform rotate-270 border-blue-400 max-[639px]:hidden">
                                </div>
                                <div className="max-[374px]:block mx-auto text-center flex items-center justify-center">
                                    <img className="h-12 w-12 mr-3" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/stethoscope 1.png"
                                        alt="stethoscope"/>
                                    <h3
                                        className="text-black text-center flex items-center justify-center sm:text-2xl lg:text-4xl text-xl font-bold">
                                        Google
                                        Tag Manager Health Check</h3>
                                    <img onClick={() => {setToggle1(!toggle1); setToggle2(true); setToggle3(true); setToggle4(true); setToggle5(true); setToggle6(true);}} className="down ml-3 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/down-arrow (8) 1.png"
                                        alt="down-arrow"/>
                                </div>
                                <div
                                    className="triangle w-0 absolute right-[-100px] sm:top-[10px] md:top-5 transform rotate-90 h-0 border-blue-300 max-[639px]:hidden">
                                </div>
                            </div> <br/>
                            <div className="drp bg-menu">
                                <div className="flex">
                                    <div>
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                    </div>
                                    <p className="text-start ml-3 text-black text-[20px] font-medium">Comprehensive audit
                                        will
                                        be
                                        conducted and that stats efficient
                                        review
                                        of your existing Google
                                        Tag
                                        Manager setup. This involves, identifying and eliminating unnecessary or
                                        outdated
                                        tags,
                                        triggers, and variables, as well as reorganizing the structure to improve
                                        efficiency
                                        and
                                        performance.
                                    </p>
                                </div> <br/>
                                <div className="flex">
                                    <div>
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                    </div>
                                    <p className="text-start ml-3 text-black text-[20px] font-medium">By performing this
                                        cleanup, we
                                        aim to simplify the tracking
                                        process
                                        for analytics and marketing tags on your website. This ensures that only
                                        relevant
                                        and
                                        crucial tracking elements are in use, and flow in our marketing platforms like
                                        Google
                                        Analytics, Google Ads, Facebook etc.
                                    </p>
                                </div> <br/>
                                <div className="flex">
                                    <div>
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                    </div>
                                    <div className="text-start  min-[320px]:ml-3 md:ml-[5px] lg:ml-0">
                                        <p className="text-start text-black text-[20px] font-medium">In need to validate
                                            whether
                                            your Google Analytics is tracking
                                            properly? <br/>
                                            AnalyticsLiv can provide detailed audits to validate the health of analytics
                                            data
                                            setup. Google Analytics audit will cover the following:
                                        <ul
                                            className="text-start ml-5 inline-block list-disc text-black text-[20px] font-medium">
                                            <li>Gaps in data tracking</li>
                                            <li>Errors or bugs</li>
                                            <li>reported</li>
                                            <li>Account or product linking</li>
                                            <li>Data tracking</li>
                                            <li>Conversions</li>
                                            <li>Account setup, and many more</li>
                                        </ul>
                                        </p>
                                    </div>
                                </div> <br/>
                                <div className="flex">
                                    <div>
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                    </div>
                                    <p className="text-start ml-3 text-black text-[20px] font-medium">Our team of certified
                                        experts
                                        will fix the problems that are
                                        observed. This will also cover recommended and suggested tracking which might be
                                        missing
                                        to
                                        avail analysis for businesses.
                                    </p>
                                </div> <br/>
                                <div className="text-center">
                                    <button onClick={scrolling} 
                                        className="btn cursor-pointer w-44 bg-btn  hover:bg-sky-800 transition duration-200 delay-75 mx-2 p-4 rounded-[15px] shadow-lg shadow-gray-400 text-white font-semibold">Do
                                        your GTM health check up now</button>
                                </div>
                            </div>
                            <br/>
                        </div>


                    </div>} 
                    
                    <br/>
             




                    {toggle2 &&
                    <div className="first-dp py-10 px-5">
                        <div className="head1 relative sm:w-[400px] lg:w-[550px] m-auto text-center p-4">
                            <div
                                className="f bg-menu inline-block relative md:pt-5 md:pb-5 lg:pt-4 lg:pb-[10px] pt-3 pb-2 max-[639px]:rounded-[20%] max-[639px]:py-3 max-[639px]:px-5">
                                <div
                                    className="right-triangle1 w-0 h-0 absolute sm:left-[-68px] md:left-[-79px] sm:top-[-1px] md:top-[10px] lg:top-[2px] lg:left-[-71px] transform rotate-270 border-blue-400 max-[639px]:hidden">
                                </div>
                                <div className="max-[374px]:block mx-auto text-center flex items-center justify-center">
                                    <img className="h-12 w-12 mr-3" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/server_img.png" alt="server_img"/>
                                    <h3
                                        className="text-black text-center flex items-center justify-center sm:text-2xl lg:text-4xl text-xl font-bold">
                                        Server-side Tagging</h3>
                                    <img onClick={() => {setToggle1(true); setToggle2(!toggle2); setToggle3(true); setToggle4(true); setToggle5(true); setToggle6(true);}} className="down ml-3 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/down-arrow (8) 1.png"
                                        alt="down-arrow"/>
                                </div>
                                <div
                                    className="triangle w-0 absolute right-[-100px] sm:top-[0px] md:top-3 lg:top-1 transform rotate-90 h-0 border-blue-300 max-[639px]:hidden">
                                </div>
                            </div>
                        </div> <br/>
             
                    </div>} 

                    {!toggle2 &&
                    <div className="first-dp py-10 px-5 ad">
                        <div className="head1 relative sm:w-[400px] lg:w-[550px] m-auto text-center p-4">
                            <div
                                className="f bg-menu inline-block relative md:pt-5 md:pb-5 lg:pt-4 lg:pb-[10px] pt-3 pb-2 max-[639px]:rounded-[20%] max-[639px]:py-3 max-[639px]:px-5">
                                <div
                                    className="right-triangle1 w-0 h-0 absolute sm:left-[-68px] md:left-[-79px] sm:top-[-1px] md:top-[10px] lg:top-[2px] lg:left-[-71px] transform rotate-270 border-blue-400 max-[639px]:hidden">
                                </div>
                                <div className="max-[374px]:block mx-auto text-center flex items-center justify-center">
                                    <img className="h-12 w-12 mr-3" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/server_img.png" alt="server_img"/>
                                    <h3
                                        className="text-black text-center flex items-center justify-center sm:text-2xl lg:text-4xl text-xl font-bold">
                                        Server-side Tagging</h3>
                                    <img onClick={() => {setToggle1(true); setToggle2(!toggle2); setToggle3(true); setToggle4(true); setToggle5(true); setToggle6(true);}} className="down ml-3 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/down-arrow (8) 1.png"
                                        alt="down-arrow"/>
                                </div>
                                <div
                                    className="triangle w-0 absolute right-[-100px] sm:top-[0px] md:top-3 lg:top-1 transform rotate-90 h-0 border-blue-300 max-[639px]:hidden">
                                </div>
                            </div>
                        </div>

                       
                        <div className="drp">
                            <div className="flex">
                                <div>
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                </div>
                                <p className="text-start ml-3 text-black text-[20px] font-medium">Server-side tagging is a
                                    method used in web analytics and digital marketing to manage and deploy various
                                    tracking
                                    tags and scripts on a website's server using CDP platforms rather than directly on
                                    the
                                    client's browser. This approach offers several advantages and is becoming
                                    increasingly
                                    popular due to privacy concerns, performance optimization, and the need for more
                                    control
                                    over data collection.
                                </p>
                            </div> <br/>
                            <div className="flex">
                                <div>
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                </div>
                                <p className="text-start ml-3 text-black text-[20px] font-medium">Some other key aspects of
                                    the
                                    server-side tagging are:
                                    Improve the page load time, reduce ad blocker impact, flexibility, improve
                                    securities,
                                    and many more.
                                </p>
                            </div> <br/>
                            <div className="flex">
                                <div>
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                </div>
                                <div className="text-start  min-[320px]:ml-3 md:ml-[5px] lg:ml-0">
                                    <p className="text-start text-black text-[20px] font-medium">If you're interested in
                                        implementing server-side tagging, please feel free to contact us for more
                                        details.
                                    </p>
                                </div>
                            </div> <br/>

                            <div className="text-center">
                                <button onClick={scrolling} 
                                    className="btn cursor-pointer w-44 bg-btn  hover:bg-sky-800 transition duration-200 delay-75 mx-2 p-4 rounded-[15px] shadow-lg shadow-gray-400 text-white font-semibold">Contact
                                    Us</button>
                            </div>
                        </div>
                        
                    </div>}
                   

                    <br/>
                    


                    {toggle3 &&
                    <div className="first-dp py-10 px-5">
                        <div className="head1 relative sm:w-[400px] lg:w-[550px] m-auto text-center p-4">
                            <div
                                className="f bg-menu inline-block relative md:pt-5 md:pb-6 lg:pt-4 lg:pb-[10px] pt-3 pb-2 max-[639px]:rounded-[20%] max-[639px]:py-3 max-[639px]:px-5">
                                <div
                                    className="right-triangle w-0 h-0 absolute sm:left-[-76px] md:left-[-87px] sm:top-[6px] md:top-[18px] transform rotate-270 border-blue-400 max-[639px]:hidden">
                                </div>
                                <div className="max-[374px]:block mx-auto text-center flex items-center justify-center">
                                    <img className="h-12 w-12 mr-3" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/Goals_tracking.png"
                                        alt="Goals_tracking"/>
                                    <h3
                                        className="text-black text-center flex items-center justify-center sm:text-2xl lg:text-4xl text-xl font-bold">
                                        Goals Conversions & Events Tracking</h3>
                                    <img onClick={() => {setToggle1(true); setToggle2(true); setToggle3(!toggle3); setToggle4(true); setToggle5(true); setToggle6(true);}} className="down ml-3 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/down-arrow (8) 1.png"
                                        alt="down-arrow"/>
                                </div>
                                <div
                                    className="triangle w-0 absolute right-[-100px] sm:top-[10px] md:top-5 transform rotate-90 h-0 border-blue-300 max-[639px]:hidden">
                                </div>
                            </div>
                        </div> <br/>
                    </div>}
                    <></>
                    {!toggle3 &&
                    <div className="first-dp py-10 px-5 ad">
                        <div className="head1 relative sm:w-[400px] lg:w-[550px] m-auto text-center p-4">
                            <div
                                className="f bg-menu inline-block relative md:pt-5 md:pb-6 lg:pt-4 lg:pb-[10px] pt-3 pb-2 max-[639px]:rounded-[20%] max-[639px]:py-3 max-[639px]:px-5">
                                <div
                                    className="right-triangle w-0 h-0 absolute sm:left-[-76px] md:left-[-87px] sm:top-[6px] md:top-[18px] transform rotate-270 border-blue-400 max-[639px]:hidden">
                                </div>
                                <div className="max-[374px]:block mx-auto text-center flex items-center justify-center">
                                    <img className="h-12 w-12 mr-3" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/Goals_tracking.png"
                                        alt="Goals_tracking"/>
                                    <h3
                                        className="text-black text-center flex items-center justify-center sm:text-2xl lg:text-4xl text-xl font-bold">
                                        Goals Conversions & Events Tracking</h3>
                                    <img onClick={() => {setToggle1(true); setToggle2(true); setToggle3(!toggle3); setToggle4(true); setToggle5(true); setToggle6(true);}} className="down ml-3 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/down-arrow (8) 1.png"
                                        alt="down-arrow"/>
                                </div>
                                <div
                                    className="triangle w-0 absolute right-[-100px] sm:top-[10px] md:top-5 transform rotate-90 h-0 border-blue-300 max-[639px]:hidden">
                                </div>
                            </div>
                        </div> <br/>

                        <div className="drp">
                            <div className="flex">
                                <div>
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                </div>
                                <p className="text-start ml-3 text-black text-[20px] font-medium">If you're uncertain about
                                    what's happening on your website/app, such as which sections users are engaging with
                                    the
                                    most, or which buttons, forms, and other elements are performing well, you might be
                                    missing out on valuable insights in the website, to measure user interactions. To
                                    define
                                    your key KPIs helpful for business as per industries can be converted as
                                    conversions.
                                    This helps to measure where the conversions came from, converting from
                                    non-convertors to
                                    convertors. Events can be conversions and decided based on the business’ KPI
                                    standards
                                </p>
                            </div> <br/>
                            <div className="flex">
                                <div>
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                </div>
                                <p className="text-start ml-3 text-black text-[20px] font-medium">The Custom event tracking
                                    in
                                    GA4 can help you gather this information, providing clarity on user behavior and
                                    interaction patterns. This knowledge can guide improvements to your website's
                                    layout,
                                    content, and functionality, leading to enhanced user experiences and better outcomes
                                    for
                                    your business. Unlike default tracking, which covers basic activities like
                                    pageviews,
                                    custom event tracking lets you capture specific actions that are crucial to business
                                    goals.
                                </p>
                            </div> <br/>

                            <div className="text-center">
                                <button onClick={scrolling} 
                                    className="btn cursor-pointer w-44 bg-btn  hover:bg-sky-800 transition duration-200 delay-75 mx-2 p-4 rounded-[15px] shadow-lg shadow-gray-400 text-white font-semibold">Contact
                                    Us</button>
                            </div>
                        </div>
                    </div>} <br/>
                 



                    {toggle4 &&
                    <div className="first-dp py-10 px-5">
                        <div className="head1 relative sm:w-[400px] lg:w-[550px] m-auto text-center p-4">
                            <div
                                className="f bg-menu inline-block relative md:pt-6 md:pb-6 lg:pt-4 lg:pb-[10px] pt-3 pb-[13px] max-[639px]:rounded-[20%] max-[639px]:py-3 max-[639px]:px-5">
                                <div
                                    className="right-triangle w-0 h-0 absolute sm:left-[-76px] md:left-[-87px] sm:top-[6px] md:top-[18px] transform rotate-270 border-blue-400 max-[639px]:hidden">
                                </div>
                                <div className="max-[374px]:block mx-auto text-center flex items-center justify-center">
                                    <img  className="h-12 w-12 mr-3" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/ECommerse_img.png"
                                        alt="ECommerse_img"/>
                                    <h3
                                        className="text-black text-center flex items-center justify-center sm:text-[23px] lg:text-3xl text-xl font-bold">
                                        Enhanced E-commerce Implementation</h3>
                                    <img onClick={() => {setToggle1(true); setToggle2(true); setToggle3(true); setToggle4(!toggle4); setToggle5(true); setToggle6(true);}} className="down ml-3 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/down-arrow (8) 1.png"
                                        alt="down-arrow"/>
                                </div>
                                <div
                                    className="triangle w-0 absolute right-[-100px] sm:top-[10px] md:top-5 transform rotate-90 h-0 border-blue-300 max-[639px]:hidden">
                                </div>
                            </div>
                        </div> <br/>

                    </div>}
                    <></>
                    {!toggle4 &&
                    <div className="first-dp py-10 px-5 ad">
                        <div className="head1 relative sm:w-[400px] lg:w-[550px] m-auto text-center p-4">
                            <div
                                className="f bg-menu inline-block relative md:pt-6 md:pb-6 lg:pt-4 lg:pb-[10px] pt-3 pb-[13px] max-[639px]:rounded-[20%] max-[639px]:py-3 max-[639px]:px-5">
                                <div
                                    className="right-triangle w-0 h-0 absolute sm:left-[-76px] md:left-[-87px] sm:top-[6px] md:top-[18px] transform rotate-270 border-blue-400 max-[639px]:hidden">
                                </div>
                                <div className="max-[374px]:block mx-auto text-center flex items-center justify-center">
                                    <img className="h-12 w-12 mr-3" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/ECommerse_img.png"
                                        alt="ECommerse_img"/>
                                    <h3
                                        className="text-black text-center flex items-center justify-center sm:text-[23px] lg:text-3xl text-xl font-bold">
                                        Enhanced E-commerce Implementation</h3>
                                    <img onClick={() => {setToggle1(true); setToggle2(true); setToggle3(true); setToggle4(!toggle4); setToggle5(true); setToggle6(true);}} className="down ml-3 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/down-arrow (8) 1.png"
                                        alt="down-arrow"/>
                                </div>
                                <div
                                    className="triangle w-0 absolute right-[-100px] sm:top-[10px] md:top-5 transform rotate-90 h-0 border-blue-300 max-[639px]:hidden">
                                </div>
                            </div>
                        </div> <br/>

                        <div className="drp">
                            <div className="flex">
                                <div>
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                </div>
                                <p className="text-start ml-3 text-black text-[20px] font-medium">Which products are
                                    performing
                                    well on your website/app or struggling to grasp the situation, it suggests that
                                    managing
                                    and comprehending your e-commerce data effectively might be a challenge.
                                    This implementation helps Ecommerce/Retail/Travel Clients to receive accurate
                                    e-commerce
                                    data that helps in boosting their growth through a range of strategies. 
                                </p>
                            </div> <br/>
                            <div className="flex">
                                <div>
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                </div>
                                <p className="text-start ml-3 text-black text-[20px] font-medium">With enhanced ecommerce,
                                    you
                                    can track various stages of the customer journey, including promotions, product
                                    views,
                                    product detail, adding items to the cart, checkout journey steps, and completing
                                    purchases. This provides valuable data to analyze user interactions and identify
                                    areas
                                    for improvement in the e-commerce process in the website.
                                </p>
                            </div> <br/>

                            <div className="text-center">
                                <button onClick={scrolling} 
                                    className="btn cursor-pointer w-44 bg-btn  hover:bg-sky-800 transition duration-200 delay-75 mx-2 p-4 rounded-[15px] shadow-lg shadow-gray-400 text-white font-semibold">Contact
                                    Us</button>
                            </div>
                        </div>
                    </div>} <br/>
                 



                    {toggle5 &&
                    <div className="first-dp py-10 px-5">
                        <div className="head1 relative sm:w-[400px] lg:w-[550px] m-auto text-center p-4">
                        <div
                                className="f bg-menu inline-block relative max-[639px]:py-3 max-[639px]:px-5 md:pt-5 md:pb-6 lg:pt-4 lg:pb-[10px] pt-3 pb-2 max-[639px]:rounded-[20%]">
                                <div
                                    className="right-triangle w-0 h-0 absolute sm:left-[-76px] md:left-[-87px] sm:top-[6px] md:top-[18px] transform rotate-270 border-blue-400 max-[639px]:hidden">
                                </div>
                                <div className="max-[374px]:block mx-auto text-center flex items-center justify-center">
                                    <img className="h-12 w-12 mr-3" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/cross_domain.png"
                                        alt="Configuration_img"/>
                                    <h3
                                        className="text-black text-center flex items-center justify-center sm:text-2xl lg:text-4xl text-xl font-bold">
                                        Cross Domain Tracking</h3>
                                    <img onClick={() => {setToggle1(true); setToggle2(true); setToggle3(true); setToggle4(true); setToggle5(!toggle5); setToggle6(true);}}  className="down ml-3 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/down-arrow (8) 1.png"
                                        alt="down-arrow"/>
                                </div>
                                <div
                                    className="triangle w-0 absolute right-[-100px] sm:top-[10px] md:top-5 transform rotate-90 h-0 border-blue-300 max-[639px]:hidden">
                                </div>
                            </div>
                        </div> <br/>

                    </div>}
                    <></>
                    {!toggle5 &&
                    <div className="first-dp py-10 px-5 ad">
                        <div className="head1 relative sm:w-[400px] lg:w-[550px] m-auto text-center p-4">
                        <div
                                className="f bg-menu inline-block relative max-[639px]:py-3 max-[639px]:px-5 md:pt-5 md:pb-6 lg:pt-4 lg:pb-[10px] pt-3 pb-2 max-[639px]:rounded-[20%]">
                                <div
                                    className="right-triangle w-0 h-0 absolute sm:left-[-76px] md:left-[-87px] sm:top-[6px] md:top-[18px] transform rotate-270 border-blue-400 max-[639px]:hidden">
                                </div>
                                <div className="max-[374px]:block mx-auto text-center flex items-center justify-center">
                                    <img  className="h-12 w-12 mr-3" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/cross_domain.png"
                                        alt="Configuration_img"/>
                                    <h3
                                        className="text-black text-center flex items-center justify-center sm:text-2xl lg:text-4xl text-xl font-bold">
                                        Cross Domain Tracking</h3>
                                    <img onClick={() => {setToggle1(true); setToggle2(true); setToggle3(true); setToggle4(true); setToggle5(!toggle5); setToggle6(true);}} className="down ml-3 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/down-arrow (8) 1.png"
                                        alt="down-arrow"/>
                                </div>
                                <div
                                    className="triangle w-0 absolute right-[-100px] sm:top-[10px] md:top-5 transform rotate-90 h-0 border-blue-300 max-[639px]:hidden">
                                </div>
                            </div>
                        </div> <br/>

                        <div className="drp">
                            <div className="flex">
                                <div>
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                </div>
                                <p className="text-start ml-3 text-black text-[20px] font-medium">Server-side tagging is a
                                    method used in web analytics and digital marketing to manage and deploy various
                                    tracking
                                    tags and scripts on a website's server using CDP platforms rather than directly on
                                    the
                                    client's browser. This approach offers several advantages and is becoming
                                    increasingly
                                    popular due to privacy concerns, performance optimization, and the need for more
                                    control
                                    over data collection.
                                </p>
                            </div> <br/>
                            <div className="flex">
                                <div>
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                </div>
                                <p className="text-start ml-3 text-black text-[20px] font-medium">We help our clients in
                                    stitching the journey of users browsing through their different cross-domains
                                    through
                                    custom implementation with the help of cross-domain tracking. By stitching this you
                                    will
                                    get a unified user journey report
                                </p>
                            </div> <br/>

                            <div className="text-center">
                                <button onClick={scrolling} 
                                    className="btn cursor-pointer w-44 bg-btn  hover:bg-sky-800 transition duration-200 delay-75 mx-2 p-4 rounded-[15px] shadow-lg shadow-gray-400 text-white font-semibold">Contact
                                    Us</button>
                            </div>
                        </div>
                    </div>} <br/>
                   





                    {toggle6 &&
                    <div className="first-dp py-10 px-5">
                        <div className="head1 relative sm:w-[400px] lg:w-[550px] m-auto text-center p-4">
                            <div
                                className="f bg-menu inline-block relative max-[639px]:py-3 max-[639px]:px-5 md:pt-5 md:pb-6 lg:pt-4 lg:pb-[10px] pt-3 pb-2 max-[639px]:rounded-[20%]">
                                <div
                                    className="right-triangle w-0 h-0 absolute sm:left-[-76px] md:left-[-87px] sm:top-[6px] md:top-[18px] transform rotate-270 border-blue-400 max-[639px]:hidden">
                                </div>
                                <div className="max-[374px]:block mx-auto text-center flex items-center justify-center">
                                    <img className="h-12 w-12 mr-3" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/Configuration.png"
                                        alt="Configuration_img"/>
                                    <h3
                                        className="text-black text-center flex items-center justify-center sm:text-2xl lg:text-4xl text-xl font-bold">
                                        Configuration Of Custom Dimensions</h3>
                                    <img onClick={() => {setToggle1(true); setToggle2(true); setToggle3(true); setToggle4(true); setToggle5(true); setToggle6(!toggle6);}} className="down ml-3 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/down-arrow (8) 1.png"
                                        alt="down-arrow"/>
                                </div>
                                <div
                                    className="triangle w-0 absolute right-[-100px] sm:top-[10px] md:top-5 transform rotate-90 h-0 border-blue-300 max-[639px]:hidden">
                                </div>
                            </div>
                        </div> <br/>

                    </div>}
                    <></>
                    {!toggle6 &&
                    <div className="first-dp py-10 px-5 ad">
                        <div className="head1 relative sm:w-[400px] lg:w-[550px] m-auto text-center p-4">
                            <div
                                className="f bg-menu inline-block relative max-[639px]:py-3 max-[639px]:px-5 md:pt-5 md:pb-6 lg:pt-4 lg:pb-[10px] pt-3 pb-2 max-[639px]:rounded-[20%]">
                                <div
                                    className="right-triangle w-0 h-0 absolute sm:left-[-76px] md:left-[-87px] sm:top-[6px] md:top-[18px] transform rotate-270 border-blue-400 max-[639px]:hidden">
                                </div>
                                <div className="max-[374px]:block mx-auto text-center flex items-center justify-center">
                                    <img className="h-12 w-12 mr-3" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/Configuration.png"
                                        alt="Configuration_img"/>
                                    <h3
                                        className="text-black text-center flex items-center justify-center sm:text-2xl lg:text-4xl text-xl font-bold">
                                        Configuration Of Custom Dimensions</h3>
                                    <img onClick={() => {setToggle1(true); setToggle2(true); setToggle3(true); setToggle4(true); setToggle5(true); setToggle6(!toggle6);}} className="down ml-3 cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/down-arrow (8) 1.png"
                                        alt="down-arrow"/>
                                </div>
                                <div
                                    className="triangle w-0 absolute right-[-100px] sm:top-[10px] md:top-5 transform rotate-90 h-0 border-blue-300 max-[639px]:hidden">
                                </div>
                            </div>
                        </div> <br/>

                        <div className="drp">
                            <div className="flex">
                                <div>
                                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow5.png" className="inline mr-4" alt="#"/>
                                </div>
                                <p className="text-start ml-3 text-black text-[20px] font-medium">If you need to include
                                    extra
                                    information with your events in GA4 or Firebase, we can efficiently manage this
                                    within
                                    the analytics platform. Custom dimensions and metrics are valuable features that
                                    enhance
                                    our data analysis capabilities. These dimensions allow us to enrich our event
                                    tracking
                                    with the specific information that matters most to our analysis. Please feel free to
                                    reach out to us anytime for further assistance and support. We're here to help.
                                </p>
                            </div> <br/>

                            <div className="text-center">
                                <button onClick={scrolling} 
                                    className="btn cursor-pointer w-44 bg-btn  hover:bg-sky-800 transition duration-200 delay-75 mx-2 p-4 rounded-[15px] shadow-lg shadow-gray-400 text-white font-semibold">Contact
                                    Us</button>
                            </div>
                        </div>
                    </div>} <br/>





                   

                    <div className="flex items-center justify-between text-start max-[680px]:block">
                        <h2 className="text-black text-[30px] font-bold mb-6">To Improve Your Conversion Rate
                        
                        </h2>
                        <button onClick={scrolling} 
                            className="bttn cursor-pointer w-44 bg-btn  hover:bg-sky-800 transition duration-200 delay-75 mx-2 p-4 rounded-[15px] opacity-80 shadow-lg shadow-gray-400 text-white font-semibold">Let’s
                            Get Started</button>
                    </div> <br/>
                </div>
            </div>
        </div>
    </section>
   
    <ScrollElement
        id="solutions"
        name="solutions"
      ></ScrollElement>
    <section className="py-4">
        <div className="max-w-screen-xl mx-auto">
            <div className="md:mx-16 mx-4 pb-16 my-2 md:px-4 md:text-center">
                <div className="flex items-center justify-center space-x-4 py-4 mb-6">
                    <span className="bg-menu w-[150px] h-[10px]"></span>
                    <h2 className="text-black text-center text-4xl md:text-5xl lg:text-6xl font-bold pb-2">Custom Solution
                    </h2>
                    <span className="bg-menu w-[150px] h-[10px]"></span>
                </div>
                <div className="inner-consulting grid items-center md:grid-cols-1 lg:grid-cols-2 py-[60px] md:gap-8 gap-16">
                    <div className="left-con text-left">
                        <h1 className="text-black lg:text-[48px] text-3xl leading-normal font-bold mb-[50px]">Conversion
                            API(CAPI)
                            Setup & Implementation</h1>
                        <p className="text-black text-[20px] font-medium">Conversion APIs (CAPI) setups for Facebook or any
                            other marketing tools that allows businesses to send data about customer interactions and
                            conversions directly to tool's servers. It is an alternative or complementary method to the
                            traditional configuration like Facebook Pixel for tracking and measuring website events,
                            especially in cases where third-party cookies are restricted or for more accurate event
                            tracking.</p>
                    </div>
                    <div className="right-con flex lg:justify-end justify-center">
                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/Conversion_Section_Right_img.png" alt="Tag-manager"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
   

    <section className="py-[60px] bg-sec">
        <div className="max-w-screen-xl mx-auto">

            <div
                className="inner-data mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-data flex lg:justify-end xl:justify-start justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/Frame.png" alt="Frame.img"/>
                </div>
                <div className="right-data text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">Offline And Online
                        Data
                        Integration</h1>
                    <p className="text-black text-[20px] font-medium">If you're interested in visualizing your offline data
                        as
                        reports and conducting more thorough analysis, importing your offline data into GA4 is a
                        definite
                        step.
                        <br/> <br/> After successfully importing all your offline data by following specific steps into
                        GA4,
                        you'll have the capability to view and analyze your information directly within the platform.
                        This
                        integration will provide you with the opportunity to gather valuable insights by merging data
                        from
                        both
                        online and offline sources, giving you a complete perspective on your business interactions.
                    </p>
                </div>
            </div>

        </div>
    </section>
    

    <section className="py-[60px]">
        <div className="max-w-screen-xl mx-auto">
            <div
                className="inner-form-field mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-form text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">Form Field
                        Analysis</h1>
                    <p className="text-black text-[20px] font-medium">Forms play a significant role in your
                        business and collecting insights from user submissions is valuable, then form tracking becomes
                        essential. <br/><br/>

                        With the help of the form field analysis, we can capture user information, such as contact
                        details, subscriptions, registrations, and more. The form field analysis can help to determine
                        the objectives of each form on your website. Is it for lead generation, sign-ups, inquiries, or
                        something else? <br/><br/>

                        We can calculate the percentage of users who start filling out a form versus those who
                        successfully submit it. This helps identify potential drop-off points.</p>
                </div>
                <div className="right-form flex lg:justify-end justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/form-field.png" alt="Setup_IMG"/>
                </div>
            </div>
        </div>
    </section>
    

    <section className="py-[60px] bg-sec">
        <div className="max-w-screen-xl mx-auto">
            <div
                className="inner-custom mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-tag flex lg:justify-end xl:justify-start justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/Custom_Campaign_Attri_IMG.png" alt="custom-campaign.img"/>
                </div>
                <div className="right-custom text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">Custom Campaign
                        Attribution</h1>
                    <p className="text-black text-[20px] font-medium">To make sure your campaign tracking, UTM tagging are
                        proper and most importantly it is getting attributed properly in Reporting. With our custom
                        attribution approach you will get accurate count with less (not set), actual (direct) / (none)
                        in source/medium and campaign. <br/> <br/>
                        This solution refers to the practice of creating and defining your own rules or models for
                        assigning credit to various marketing channels or touchpoints in a customer's journey like First
                        click, Last click, Last paid click, First Paid click. In digital marketing and analytics,
                        attribution is the process of determining which marketing channels or interactions contributed
                        to a desired outcome, such as a conversion or a sale.
                    </p>
                </div>
            </div>
        </div>
    </section>
    

    <section className="py-[60px]">
        <div className="max-w-screen-xl mx-auto">
            <div
                className="inner-facebook mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-form text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">Facebook
                        Conversion API Implementation For Shopify</h1>
                    <p className="text-black text-[20px] font-medium">We have expertise in setting up Enhanced Ecommerce
                        Tracking for Shopify for Facebook with custom approaches to capture maximum amount of ecommerce
                        data and to improve the accuracy and enhancement of tracking we can implement conversion API for
                        facebook by setting up Google Tag Manager Server Side Container and configure it to deduplicate
                        the browser and server-side events data.</p>
                </div>
                <div className="right-facebook flex lg:justify-end justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/Facebook_API_IMG.png" alt="Facebook_API_IMG"/>
                </div>
            </div>
        </div>
    </section>
    

    <section className="py-[60px] bg-sec">
        <div className="max-w-screen-xl mx-auto">
            <div
                className="inner-user mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-tag flex lg:justify-end xl:justify-start justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/Client.png" alt="Users.img"/>
                </div>
                <div className="right-user text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">User ID
                        Implementation</h1>
                    <p className="text-black text-[20px] font-medium">There are countless ways in which users can explore
                        our website/app. Keeping track of the same user's journey across different
                        devices/browsers/platforms etc. is tricky without any custom approach. <br/><br/>
                        Fortunately, with the help of the user ID implementation solution, we can definitely unify our
                        users and gain better insights. We can apply this solution to both the web and the app. We've
                        already assisted many clients in uniting their users and using this information to make smart
                        business decisions in the field of analytics. Why wait? Please contact us to get in touch with
                        us, and let's start implementing these improvements in your website or app right away!
                    </p>
                </div>
            </div>
        </div>
    </section>
   

    <section className="py-[60px]">
        <div className="max-w-screen-xl mx-auto">
            <div
                className="inner-client mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-client text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">Client ID
                        Implementation</h1>
                    <p className="text-black text-[20px] font-medium">Google Analytics automatically tracks Client IDs and
                        displays them in user exploration reports, BigQuery reports, and more. However, if you want to
                        analyse users alongside events, enhanced ecommerce data, or conduct other types of in-depth
                        analysis, custom Client ID implementation is the solution. <br/> <br/>
                        It enables you to use Client IDs for comprehensive user analysis with various parameters,
                        enhancing your ability to gain valuable insights from your data.</p>
                </div>
                <div className="right-client flex lg:justify-end justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/Client_id_implementation_Section_right.png" alt="Client-id_Img"/>
                </div>
            </div>
        </div>
    </section>
    

    <section className="py-[60px] bg-sec">
        <div className="max-w-screen-xl mx-auto">
            <div
                className="inner-app mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-tag flex lg:justify-end xl:justify-start justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/web.png" alt="Web.img"/>
                </div>
                <div className="right-app text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">App To Web View
                        Stitching Solution</h1>
                    <p className="text-black text-[20px] font-medium">When an app includes a webview, Firebase may not be
                        able to track events that occur within the webview. To address this, we must find a solution and
                        the solution to handle this issue is the app to web view stitching. <br/> <br/>
                        We've assisted numerous clients in addressing this significant issue within their apps. Our
                        solution aids in enhancing and unifying user journeys in analytics, contributing to improved
                        insights and user experiences.
                    </p>
                </div>
            </div>
        </div>
    </section>
   

    <section className="py-[60px]">
        <div className="max-w-screen-xl mx-auto">
            <div
                className="inner-marketing mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-marketing text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">Marketing Pixels
                        Implementation</h1>
                    <p className="text-black text-[20px] font-medium">Pixel implementation typically refers to the process
                        of embedding a tracking pixel or snippet of code into a website, app, or digital platform to
                        collect data and monitor user interactions. Pixels are often used for various purposes,
                        including analytics, advertising, and remarketing. <br/><br/>
                        We're here to provide support and implement various types of pixels, including those for
                        platforms like Google Ads, Facebook, Twitter, TikTok, and more. Whether you need assistance with
                        tracking, analytics, or advertising, we will cover each of them.</p>
                </div>
                <div className="right-marketing flex lg:justify-end justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/Pixels_implementation_Section_right.png" alt="Marketing-pixels_Img"/>
                </div>
            </div>
        </div>
    </section>
   

    <section className="py-[60px] bg-sec">
        <div className="max-w-screen-xl mx-auto">
            <div
                className="inner-shopify mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-tag flex lg:justify-end xl:justify-start justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/IMG (2).png" alt="Shopify-enhanced.img"/>
                </div>
                <div className="right-shopify text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">Shopify And
                        Enhanced E-commerce Integration</h1>
                    <p className="text-black text-[20px] font-medium">Integration of Google Analytics 4 (GA4) with a Shopify
                        store allows for the tracking and analysis of user behavior and e-commerce transactions. Through
                        GA4 integration in Shopify and with the help of custom approaches, you can comprehensively track
                        enhanced e-commerce journeys and capture all relevant events. Additionally, you have the
                        flexibility to include various custom parameters with enhanced e-commerce data, enabling clients
                        to perform in-depth product analysis. <br/><br/>
                        We've successfully assisted numerous clients with Shopify integration, leading to significant
                        increases in their revenue. If you're looking to optimize your Shopify store's performance and
                        gain valuable insights, our expertise in GA4 integration can help you achieve your goals.
                    </p>
                </div>
            </div>
        </div>
    </section>
    

    <section className="py-[60px]">
        <div className="max-w-screen-xl mx-auto">
            <div
                className="inner-gdpr mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-gdpr text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">GDPR Cookie
                        Integration</h1>
                    <p className="text-black text-[20px] font-medium">GDPR Cookie Integration refers to the process of
                        incorporating mechanisms and practices into a website or online platform to ensure compliance
                        with the General Data Protection Regulation (GDPR) requirements related to the use of cookies.
                        The GDPR, which came into effect in May 2018, places strict regulations on how websites and
                        applications collect, store, and process user data, including cookies. <br/><br/>
                        The process can help in auditing the cookies of our website, Implement a cookie consent banner
                        or pop-up that informs users about the use of cookies when they visit your site for the first
                        time ,user friendly opt-out mechanism etc. <br/><br/>
                        Remember that GDPR compliance is an ongoing process, and it's essential to stay updated on any
                        changes in regulations and adapt your cookie practices accordingly. Consulting with legal
                        experts and privacy professionals is often a wise choice to ensure full compliance so why wait,
                        please reach out for more details.
                    </p>
                </div>
                <div className="right-gdpr flex lg:justify-end justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/GDPR_Cookie_Section_right.png" alt="GDPR-Cookie_Img"/>
                </div>
            </div>
        </div>
    </section>
    
    <section className="py-[60px] bg-sec">
        <div className="max-w-screen-xl mx-auto">
            <div
                className="inner-website mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-tag flex lg:justify-end xl:justify-start justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/Website_AB_testing_Section_Left.png" alt="Website_AB.img"/>
                </div>
                <div className="right-website text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">Website A/B
                        Testing</h1>
                    <p className="text-black text-[20px] font-medium">To validate which variant is working as expected.
                        Before making the changes live to 100% of audiences, this can be tested out for a targeted
                        specified audience using A/B tests tools and then it can be rolled out to wider users. Within
                        Google Tag Manager, A/B testing can be integrated and allows to perform analysis with key
                        metrics to make decisions.
                    </p>
                </div>
            </div>
        </div>
    </section>
   

    
    <section className="py-[60px]">
        <div className="max-w-screen-xl mx-auto">
            <div
                className="inner-gdpr mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-gdpr text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">Tab Enablement
                    </h1>
                    <p className="text-black text-[20px] font-medium">This solution helps to measure if site is functioning,
                        user can interact with Tab key available in keyboard. To see how many users are using this
                        feature and intersecting the same in website.
                    </p>
                </div>
                <div className="right-gdpr flex lg:justify-end justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/IMG (3).png" alt="GDPR-Cookie_Img"/>
                </div>
            </div>
        </div>
    </section>
   

  
    <section className="py-[60px] bg-sec">
        <div className="max-w-screen-xl mx-auto">
            <div
                className="inner-website mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 grid items-center md:grid-cols-1 lg:grid-cols-2 py-7 md:gap-8 gap-16">
                <div className="left-tag flex lg:justify-end xl:justify-start justify-center">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/image 5.png" alt="Website_AB.img"/>
                </div>
                <div className="right-website text-left">
                    <h1 className="text-black lg:text-[48px] text-3xl font-bold leading-normal mb-[50px]">Integrating
                        Traffic Source Data With Salesforce API</h1>
                    <p className="text-black text-[20px] font-medium">Using this solution it fetches the users’ traffic
                        source data and integrates them with the Salesforce Lead forms on the site. This data is now
                        available in their Salesforce database and they can easily see the performance of each channel
                        without the help of Google Analytics.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className="review-slider">
   <ScrollElement
        id="testimonials"
        name="testimonials"
      ></ScrollElement>
    <div className="relative h-full pb-16 my-10" style={{backgroundImage: 'url(https://storage.googleapis.com/website-bucket-uploads/static/Working_woman.png)', backgroundRepeat:'no-repeat'}} >
      <h2 className="font-bold text-4xl py-8 md:py-12 text-center">Let's See What Our Clients Have To Say</h2>
      <div className="relative z-10 md:w-1/3 mx-4 md:mx-auto mt-4 bg-sky-100/90  px-8 pt-4 pb-0">
      <div className="relative w-20 rounded-full bg-white p-4 -top-12 mx-28 md:mx-auto shadow-md shadow-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12" viewBox="0 0 24 24">
            <path fill="CornflowerBlue" d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
          </svg>
        </div>
      <Carousel className="pb-4" ssr={true} showDots={true} responsive={responsive} infinite={true} autoPlay autoPlaySpeed={4000} transitionDuration={500} removeArrowOnDeviceType={["tablet", "mobile"]}>
        <div>
       
        <div className="relative flex items-center my-2 w-full justify-center space-x-4 text-center">
          <img alt="client avatar" src="https://storage.googleapis.com/website-bucket-uploads/static/Character_1.png" className=""/>
          <h2 className="font-bold text-3xl">Una</h2>
        </div>
        <p className=" mx-auto">"AnalyticsLiv helped us set up and manage our GA4 account, and we're so glad 
          we did. They were patient and knowledgeable, and they always made sure we 
          understood what they were doing. We're now able to track our website traffic and 
          marketing campaigns more effectively, and we're confident that we're making better 
          business decisions as a result."</p>
          </div>

          <div>
        
        <div className="relative flex items-center my-4 w-full justify-center space-x-4 text-center">
          <img alt="client avatar" src="https://storage.googleapis.com/website-bucket-uploads/static/Character_1.png" className=""/>
          <h2 className="font-bold text-3xl">Ebenezer Ferreira</h2>
        </div>
        <p className=" mx-auto">"AnalyticsLiv has been FUTEK web analytics partner for almost 3 years now. They supported us with GTM implementation, GA to GA4 migration, Looker studio dashboard creations and Google cloud storage implementation. They respond to our request in a timely manner and make their best efforts to resolve the web analytics issues. We are happy with the support provided by AnalyticsLiv"</p>
          </div>

          <div>
        
        <div className="relative flex items-center my-4 w-full justify-center space-x-4 text-center">
          <img alt="client avatar" src="https://storage.googleapis.com/website-bucket-uploads/static/Character_1.png" className=""/>
          <h2 className="font-bold text-3xl">Bobby Bruno</h2>
        </div>
        <p className=" mx-auto">"AnalyticsLiv team was an excellent asset to our businesses' switch from Universal Analytics to GA4. They had excellent communication throughout the project, giving me feedback, updates and ideas as the project went on. I would be happy to recommend the AnalyticsLiv team for analytics and tag manager work, and look forward to working with them in the future. Thank you!"</p>
          </div>

         <div>
          <div className="relative flex items-center my-4 w-full justify-center space-x-4 text-center">
          <img alt="client avatar" src="https://storage.googleapis.com/website-bucket-uploads/static/Character_1.png" className=""/>
          <h2 className="font-bold text-3xl">Charles Lundy</h2>
        </div>
        <p className=" mx-auto">"The AnalyticsLiv team estimated the job length accurately and then carried out the work exactly as briefed, to time and budget. We had one brief hiccup in the conversion tracking code but that was swiftly fixed once identified. Would definitely consider using it again and for more advanced reporting functionality in future"</p>
          </div>


          
          </Carousel>
      </div>
      <div className="relative md:w-1/3 z-0 bg-sky-100/90 h-52 rounded-b-full mx-4 md:mx-auto pb-0"></div>
    </div>
                
    
                
  </section> 
  <ScrollElement
        id="case-studies"
        name="case-studies"
      ></ScrollElement>
    <section className="py-[60px] bg-sec">
        <div className="max-w-screen-xl mx-auto">
            <div className="inner-case mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16 py-7 md:gap-8 gap-16">
                <h2 className="text-black text-start text-6xl font-bold pb-2 md:mb-16">Case Studies</h2>
                <div
                    className="case md:flex text-left justify-evenly items-center bg-white min-[375px]:px-10 md:px-20 px-2 min-[375px]:py-8 md:py-8 py-4 md:rounded-full rounded-xl mt-8">
                    <div className="md:w-3/4">
                        <h3 className="relative lg:text-3xl text-[19px] leading-normal font-bold mb-4">
                            <img className="absolute top-[3px] -left-[35px]" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/point 1.png" alt="arrow"/>
                            Universal Analytics (GA3) to GA4 Migration
                            for a Website
                        </h3>
                        <p className="text-casep">The client faced difficulty migrating their website from Universal
                            Analytics to Google Analytics 4 and had limited knowledge of GA4.</p>
                    </div>
                    <div className="text-center pt-4 md:pt-0 items-center space-x-4">
                        <img className="inline w-40" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/CREATIVE.png" alt="creative"/>
                        <button onClick={scrolling} 
                            className="cta cs-btn bttn bg-bacbtn cursor-pointer hover:bg-blue-400 transition duration-200 delay-75 px-16 py-2 text-#000 text-2xl font-semibold rounded-full mt-8"><a href="https://storage.googleapis.com/website-bucket-uploads/cs/5492gjsetdcghtc86683.pdf" target="_blank">View</a></button>
                    </div>
                </div>
                <div
                    className="case md:flex text-left justify-evenly items-center bg-white min-[375px]:px-10 md:px-20 px-2 min-[375px]:py-8 md:py-8 py-4 md:rounded-full rounded-xl mt-8">
                    <div className="md:w-3/4">
                        <h3 className="relative lg:text-3xl text-[19px] leading-normal font-bold mb-4">
                            <img className="absolute top-[3px] -left-[35px]" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/point 1.png" alt="arrow"/>
                            GA4 Enhanced Ecommerce Implementation Using GTM and Shopify Integration
                        </h3>
                        <p className="text-casep">A Shopify-powered e-commerce business in the East was facing challenges
                            with Universal Analytics (UA) in capturing purchase data reliably.</p>
                    </div>
                    <div className="text-center pt-4 md:pt-0 items-center space-x-4">
                        <img className="inline w-40" src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/ICONS.png" alt="icons"/>
                        <button onClick={scrolling} 
                            className="cta cs-btn bttn bg-bacbtn cursor-pointer hover:bg-blue-400 transition duration-200 delay-75 px-16 py-2 text-#000 text-2xl font-semibold rounded-full mt-8"><a href="https://storage.googleapis.com/website-bucket-uploads/cs/56445jydcsddg2300.pdf" target="_blank">View</a></button>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
    <section className="hidden faQ py-4">
        <div className="max-w-screen-xl mx-auto">
            <div className="inner-faQ mt-4 px-4 md:px-20 pt-4 pb-4 md:pb-16">
                <h2 className="text-black text-[50px] text-center font-bold mb-[34px]">Frequently Asked Questions</h2>
                <form>
                    <label htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative mb-[52px]">
                        <input type="search" id="default-search"
                            className="block w-full py-[27px] px-10 min-[375px]:text-base md:text-xl text-[#202020] border border-gray-300 rounded-[100px] bg-menu focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search your question here ..." required/>
                        <div className="absolute inset-y-0 right-10 flex items-center pointer-events-none">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/search_icon (1).png"
                                className="min-[375px]:h-[30px] min-[375px]:w-[30px] md:h-[40px] md:w-[40px]"
                                alt="search_icon"/>
                        </div>
                    </div>
                    <div
                        className="Questions grid md:grid-cols-1 lg:grid-cols-2 gap-x-[36px] min-[375px]:gap-y-10 md:gap-y-[60px]">
                        <div
                            className="first bg-menu cursor-pointer text-start rounded-[100px] flex items-center min-[375px]:px-10 min-[375px]:py-5 lg:px-[30px] lg:py-5 min-[1440px]:px-[60px] min-[1440px]:py-[30px]">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow1 (1).png"
                                className="min-[375px]:h-[30px] min-[375px]:w-[30px] md:h-10 md:w-10" alt="question_arrow"/>
                            <h3 className="min-[375px]:text-base text-black md:text-xl font-semibold">What is the difference
                                between property and data stream ?</h3>
                        </div>
                        <div
                            className="first bg-menu cursor-pointer text-start rounded-[100px] flex items-center min-[375px]:px-10 min-[375px]:py-5 lg:px-[30px] lg:py-5 min-[1440px]:px-[60px] min-[1440px]:py-[30px]">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow1 (1).png"
                                className="min-[375px]:h-[30px] min-[375px]:w-[30px] md:h-10 md:w-10" alt="question_arrow"/>
                            <h3 className="min-[375px]:text-base text-black md:text-xl font-semibold">How to use UTM
                                tracking in GA4 ?</h3>
                        </div>
                        <div
                            className="first bg-menu cursor-pointer text-start rounded-[100px] flex items-center min-[375px]:px-10 min-[375px]:py-5 lg:px-[30px] lg:py-5 min-[1440px]:px-[60px] min-[1440px]:py-[30px]">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow1 (1).png"
                                className="min-[375px]:h-[30px] min-[375px]:w-[30px] md:h-10 md:w-10" alt="question_arrow"/>
                            <h3 className="min-[375px]:text-base text-black md:text-xl font-semibold">What is the difference
                                between property and data stream ?</h3>
                        </div>
                        <div
                            className="first bg-menu cursor-pointer text-start rounded-[100px] flex items-center min-[375px]:px-10 min-[375px]:py-5 lg:px-[30px] lg:py-5 min-[1440px]:px-[60px] min-[1440px]:py-[30px]">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/gtm_lp/arrow1 (1).png"
                                className="min-[375px]:h-[30px] min-[375px]:w-[30px] md:h-10 md:w-10" alt="question_arrow"/>
                            <h3 className="min-[375px]:text-base text-black md:text-xl font-semibold">What is the difference
                                between property and data stream ?</h3>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </section>

     <div className='mt-10 md:flex justify-center md:space-x-20 items-center px-2 md:px-16 bg-sec py-2 text-center'>
    <h2 className='text-left text-[30px] mb-2 font-bold'>To Improve Your Conversion Rate</h2>
    <button onClick={scrolling}  className="bttn cursor-pointer w-44 bg-btn  hover:bg-sky-800 transition duration-200 delay-75 mx-2 p-4 rounded-[15px] opacity-80 shadow-lg shadow-gray-400 text-white font-semibold">Lets Get Started</button>
  </div>

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
    return { props: { brandsdata} }
  }
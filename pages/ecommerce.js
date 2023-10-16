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
import { Transition } from "@headlessui/react";
import ScrollProgress from '../components/ScrollProgress'


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

export default function ecommerce({brandsdata}) {

    const initialValues = { fullName: '', email: '', contact: '',message : '', website: ''};
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
                event:'ecommerce_submission'
            });
            fetch('/api/ecommercecontact', {
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
                   "website" : formValues.website
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
            Scroll.scroller.scrollTo("contact-form", {
              duration: 500,
              smooth: true,
              offset: -100,
            });
          }
    }

    const scrolling1 = () =>{
      {
        Scroll.scroller.scrollTo("services", {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      }

    }

    const scrolling2 = () =>{
      {
        Scroll.scroller.scrollTo("audit", {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      }

    }

    const scrolling3 = () =>{
      {
        Scroll.scroller.scrollTo("expertise", {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      }

    }

    const scrolling4 = () =>{
        {
          Scroll.scroller.scrollTo("process", {
            duration: 500,
            smooth: true,
            offset: -100,
          });
        }
  
      }

    const scrolling5 = () =>{
      {
        Scroll.scroller.scrollTo("testimonial", {
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
                <title>Ecommerce - AnalyticsLiv</title>
                
            </Head>
            <StructuredData data={stuctureData} />
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
          <img className="h-8 lg:ml-4 w-auto cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png"/>
        </a>
        <nav className="lg:flex text-center">
          <ul className="lg:flex text-sm font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center tracking-wide cursor-pointer">
            <li onClick={scrolling1} className="hover:text-amber-500">Services</li>
            <li onClick={scrolling2} className="hover:text-amber-500">Audit</li>
            <li onClick={scrolling3} className="hover:text-amber-500">Expertise</li>
            <li onClick={scrolling4} className="hover:text-amber-500">Process</li>
            <li onClick={scrolling5} className="hover:text-amber-500">Testimonials</li>
    
          </ul>
          <a href="tel:7979634379">
          <button className="cta px-5 py-2 bg-sky-300 rounded-2xl mx-2 text-sm font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
          </a>
          <span className="hidden md:inline px-4">
            <img className="h-10 w-auto"   src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg" />
          </span>
        </nav>
    </div>


    <div className="relative  flex lg:hidden p-2">
  <Link href="#"><img onClick={() => setIsOpen(false)} src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="relative h-10 md:mx-4 cursor-pointer"/></Link>
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
                 <div>Services</div>
                  
                </p>

                <p onClick={() => {setIsOpen(!isOpen); scrolling2();}}
                  href="#"
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div >Audit</div>
                  
                </p>

                <p onClick={() => {setIsOpen(!isOpen); scrolling3();}}
                 
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Expertise
                </p>

                <p onClick={() => {setIsOpen(!isOpen); scrolling4();}}
                 
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Our Process
                </p>

                <p onClick={() => {setIsOpen(!isOpen); scrolling5();}}
    
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Testimonials
                </p>


              </div>
            </div>
          )}
        </Transition>
        <ScrollProgress color="red" showSpinner={false}/>
  </header>

  
  <section className="md:px-20 pl-4 py-16 bg-[url('https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/ellipse.png')] bg-no-repeat bg-[left_top_5rem]">
        <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-4 px-4">
                <div className="lg:text-left text-center">
                    <h1 className="text-3xl	leading-[45px] font-bold">
                    Optimize Your <br className="hidden lg:block" /> Ads Performance
                    </h1>
                    <div className="p-8">
                        <p className="text-xl leading-[30px] text-[#30486A]">
                        Discover How AnalyticsLiv Achieved an Impressive <span className="font-bold">6.95x</span> ROAS
                            from <span className="font-bold">2.18x</span>
                        </p>
                    </div>
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/banner-hero.png" alt="banner-hero" className="mx-auto" />
                </div>
      
                <div>
                <ScrollElement
        id="contact-form"
        name="contact-form"
      ></ScrollElement>
                     {!formSubmit && <div className="bg-[#F8FDFE] rounded-[39px] p-6 shadow-lg text-center">
                        <h4 className="text-xl font-medium leading-[30px] text-[#30486A] text-center mb-2">
                            Driving Performance from Paid Campaigns can <br className="hidden lg:block" /> be complex
                            sometimes
                        </h4>
                        <h3 className="text-3xl font-semibold leading-[45px] text-black text-center">
                            Let us help you !!
                        </h3>
                        <hr className="border-t-2 border-dashed border-[#22D3EE] my-2" />
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
                    </div>}
                    {formSubmit && <div className='w-full text-center'>
          <h2 className="md:text-xl text-sky-900">Thank you for showing interest with us!</h2>
        <h1 className="font-semibold text-2xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">We will get back to you shortly !!</h1>
        <img className="w-64 mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg"/>
        </div>}


                </div>


            </div>
        </div>
    </section>

    <section>
 
     <div className="bg-white py-4">
      <h1 className="text-center font-bold text-xl">Thanks For Choosing AnalytiscLiv</h1>
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

  <section className="lg:py-24 py-12 md:px-20 pl-4">
        <div className="max-w-screen-xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 gap-4 px-4 flex flex-col">
                <div className="lg:text-left text-center lg:order-first sm:order-last">
                    <h2 className="lg:text-[30px] text-[24px] lg:leading-[45px] font-bold mb-8">
                        Is Your Campaigns Strategy <br className="lg:block hidden" />Ready to
                    </h2>
                    <div>
                        <ul>
                            <li className="flex gap-4 items-start mb-2">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/arrow.svg" alt="arrow"  className="mt-1"/>
                                <p className="text-xl leading-[30px] text-[#30486A] text-left">Explore the full potential of First
                                    Party Data</p>
                            </li>
                            <li className="flex gap-4 items-start mb-2">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/arrow.svg" alt="arrow" className="mt-1"/>
                                <p className="text-xl leading-[30px] text-[#30486A] text-left">Serve Personalized Ads backed by data
                                </p>
                            </li>
                            <li className="flex gap-4 items-start mb-2">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/arrow.svg" alt="arrow" className="mt-1" />
                                <p className="text-xl leading-[30px] text-[#30486A] text-left">Smart Bidding Strategies to Advantage <br className="lg:block hidden" />
                                    Turn Performance Max effectively</p>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-20 text-left">
                        <a onClick={scrolling} className="block text-center commonBtn cursor-pointer text-[23px] leading-[20px] font-semibold text-white py-[35px] px-[45px] lg:h-[93px] bg-[#629DF5] max-w-[50%] w-full rounded-[15px]  min-w-[341px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:mx-0 mx-auto
                                        ">Learn How</a>
                    </div>
                </div>
                <div className="lg:order-last order-first">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/empowering-hero.png" alt="empowering-hero" className="mx-auto" />
                </div>
            </div>
        </div>
    </section>

    <section className="lg:py-24 py-12 md:px-20 pl-4">
        <div className="max-w-screen-xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 gap-4 px-4 flex flex-col">
                <div className="lg:text-left text-center lg:order-first sm:order-last">
                    <h2 className="lg:text-[45px] text-[35px] lg:leading-[75px] leading-[49px] font-bold mb-8">
                        Empowering e-commerce
                    </h2>
                    <p
                        className="lg:text-[32px] text-[24px] lg:leading-[48px] leading-[39px] font-medium text-[ mb-8#000000]">
                        Discover How the AnalyticsLiv Achieved an Impressive 6.95x ROAS from a Previous 2.18x
                    </p>
                    <div className="mt-20 text-left">
                        <a onClick={scrolling} className="block text-center cursor-pointer commonBtn text-[23px] leading-[20px] font-semibold text-white py-[40px] px-[45px] lg:h-[93px] bg-[#4285F4] max-w-[50%] w-full rounded-[15px]  min-w-[341px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 sm:mx-auto
                                        ">Learn How</a>
                    </div>
                </div>
                <div className="lg:order-last order-first">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/empowering-hero.png" alt="empowering-hero" className="mx-auto" />
                </div>
            </div>
        </div>
    </section>
    <ScrollElement
        id="services"
        name="services"
      ></ScrollElement>
    <section className="md:px-20 pl-4 lg:py-24 py-12 bg-[#2EE3F9]">
    <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-4 px-4">
                <div className="flex items-end lg:pb-10">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/experi_Profesn.png" alt="empowering-hero" className="mx-auto" />
                </div>
                <div className="">
                    <h2 className="lg:text-[50px] text-[35px] lg:leading-[55px] leading-[49px] font-bold mb-8">
                        Menu of Services
                    </h2>
                    <div>
                        <ul>
                            <li className="flex items-start gap-4 mb-4">
                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                        fill="none">
                                        <circle cx="5" cy="5" r="5" fill="black" />
                                    </svg>
                                </span>
                                <div>
                                    <h6 className="text-xl font-bold leading-[30px] mb-2">Strategy Creation</h6>
                                    <p className="text-base font-medium leading-6">Planning quarterly media spends across
                                        Search, Social,  PMax, Display, Video & App marketing platforms</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 mb-4">
                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                        fill="none">
                                        <circle cx="5" cy="5" r="5" fill="black" />
                                    </svg>
                                </span>
                                <div>
                                    <h6 className="text-xl font-bold leading-[30px] mb-2">Set Up & Optimization :</h6>
                                    <p className="text-base font-medium leading-6">Campaign trafficking & Conversion
                                        Configurations;
                                        Optimizations in Bidding, Keyword Research, Audiences & Placements</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 mb-4">
                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                        fill="none">
                                        <circle cx="5" cy="5" r="5" fill="black" />
                                    </svg>
                                </span>
                                <div>
                                    <h6 className="text-xl font-bold leading-[30px] mb-2">Data Management & Reporting
                                    </h6>
                                    <p className="text-base font-medium leading-6">Using Cloud services to match ad data
                                        with website data; Automated reporting on Looker Studio using APIs</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 mb-4">
                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                        fill="none">
                                        <circle cx="5" cy="5" r="5" fill="black" />
                                    </svg>
                                </span>
                                <div>
                                    <h6 className="text-xl font-bold leading-[30px] mb-2">Ad Copy Design</h6>
                                    <p className="text-base font-medium leading-6">Expertise in defining and designing ad
                                        copies including data driven
                                        creatives - rich media ad formats</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 mb-4">
                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                        fill="none">
                                        <circle cx="5" cy="5" r="5" fill="black" />
                                    </svg>
                                </span>
                                <div>
                                    <h6 className="text-xl font-bold leading-[30px] mb-2">Audit</h6>
                                    <p className="text-base font-medium leading-6">Experienced Campaign Managers presenting
                                        comprehensive
                                        audit & opportunities analysis</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 mb-4">
                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                        fill="none">
                                        <circle cx="5" cy="5" r="5" fill="black" />
                                    </svg>
                                </span>
                                <div>
                                    <h6 className="text-xl font-bold leading-[30px] mb-2">Training & Support</h6>
                                    <p className="text-base font-medium leading-6">Training program for media  teams; Team
                                        of Ad experts for ongoing campaign support </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="lg:py-20 py-12">
        <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="lg:text-[50px] text-[35px] lg:leading-[75px] leading-[49px] font-bold mb-20 text-center">
                Past Results Managed
            </h2>
            <div className="flex gap-20 justify-center lg:flex-nowrap flex-wrap">
                <div className="">
                    <div className="w-[298px] h-[298px] rounded-full postResultBg flex items-center justify-center lg:mx-0 mx-auto">
                        <div className="text-center ">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/ad_managed_icon.png" alt="ad_managed_icon" className="mx-auto mb-10" />
                            <h4 className="text-[25px] leading-[37.5px] font-medium min-h-[75px]">$20 Millions +</h4>
                        </div>
                    </div>
                    <h3 className="text-[30px] leading-[45px] font-semibold pt-14 text-center">Ad budget managed</h3>
                </div>
                <div className="">
                    <div className="w-[298px] h-[298px] rounded-full postResultBg flex items-center justify-center lg:mx-0 mx-auto">
                        <div className="text-center ">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/revenue_generate_icon.png" alt="revenue_generate_icon"
                                className="mx-auto mb-10" />
                            <h4 className="text-[25px] leading-[37.5px] font-medium min-h-[75px]">30% + Improvement
                                <br className="lg:block hidden" /> in CPA
                            </h4>
                        </div>
                    </div>
                    <h3 className="text-[30px] leading-[45px] font-semibold pt-14 text-center">Performance Generated</h3>
                </div>
                <div className="">
                    <div className="w-[298px] h-[298px] rounded-full postResultBg flex items-center justify-center lg:mx-0 mx-auto">
                        <div className="text-center ">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/revenue_growth_icon.png" alt="revenue_growth_icon"
                                className="mx-auto mb-10" />
                            <h4 className="text-[25px] leading-[37.5px] font-medium">$100 Millions</h4>
                        </div>
                    </div>
                    <h3 className="text-[30px] leading-[45px] font-semibold pt-14 text-center">Revenue Generated</h3>
                </div>
            </div>
        </div>
    </section>

    


    
    <ScrollElement
        id="audit"
        name="audit"
      ></ScrollElement>
    <section className="py-16 bg-[#31E3F9]">
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 px-4">
                <div>
                    <h2
                        className="lg:text-[45px] text-[35px] lg:leading-[75px] leading-[49px] font-bold text-center lg:mb-16 mb-6">
                        Request for an Audit
                    </h2>
                    <h4
                        className="lg:text-[30px] text-[24px] lg:leading-[45px] leading-[39px] font-bold text-[#30486A] text-center mb-20">
                        Why Choose
                        AnalyticsLiv
                        E-commerce Experts for Your Marketing Needs</h4>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 px-4">
                    <div className="bg-white rounded-[20px] p-10">
                        <h4
                            className="lg:text-[30px] text-[24px] lg:leading-[40px] leading-[39px] font-bold mb-4 lg:h-[120px]">
                            Dedicated Account
                            Manager</h4>
                        <p className="text-base font-medium leading-[24px]">Get a personal account manager and direct access
                            to our team for in-depth discussions on your campaign goals, strategies, and requirements.
                        </p>
                    </div>
                    <div className="bg-white rounded-[20px] p-10">
                        <h4
                            className="lg:text-[30px] text-[24px] lg:leading-[40px] leading-[39px] font-bold mb-4 lg:h-[120px]">
                            Actionable Insights, Every
                            Week</h4>
                        <p className="text-base font-medium leading-[24px]">Receive weekly reports and bi-weekly calls to
                            understand results, processes, and action plans.
                        </p>
                    </div>
                    <div className="bg-white rounded-[20px] p-10">
                        <h4
                            className="lg:text-[30px] text-[24px] lg:leading-[40px] leading-[39px] font-bold mb-4 lg:h-[120px]">
                            Cutting-Edge Strategy</h4>
                        <p className="text-base font-medium leading-[24px]">Gain a competitive advantage with cutting-edge
                            strategies, and exclusive offers.
                        </p>
                    </div>
                    <div className="bg-white rounded-[20px] p-10">
                        <h4
                            className="lg:text-[30px] text-[24px] lg:leading-[40px] leading-[39px] font-bold mb-4 lg:h-[120px]">
                            Certified Experts</h4>
                        <p className="text-base font-medium leading-[24px]">Work with a Google and Facebook Ads marketing
                            expert with a track record of managing over $100k/month ad budgets.
                        </p>
                    </div>
                    <div className="bg-white rounded-[20px] p-10">
                        <h4
                            className="lg:text-[30px] text-[24px] lg:leading-[40px] leading-[39px] font-bold mb-4 lg:h-[120px]">
                            Proven Scaling Experience
                        </h4>
                        <p className="text-base font-medium leading-[24px]">Our team has successfully scaled brands from
                            scratch to 7 figures per month, ensuring your business growth.</p>
                    </div>
                    <div className="bg-white rounded-[20px] p-10">
                        <h4
                            className="lg:text-[30px] text-[24px] lg:leading-[40px] leading-[39px] font-bold mb-4 lg:h-[120px]">
                            Values-Driven</h4>
                        <p className="text-base font-medium leading-[24px]">We believe in sharing values and creating
                            win-win situations, fostering a collaborative partnership.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <ScrollElement
        id="expertise"
        name="expertise"
      ></ScrollElement>
    <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 gap-4 px-4">
                <div>
                    <h2
                        className="lg:text-[45px] text-[35px] lg:leading-[75px] leading-[49px] leading-[61px] font-bold text-center mb-16">
                        Platform Expertise
                    </h2>
                </div>
            </div>
            <div className="platFormExpert rounded-[20px] p-8 flex lg:flex-row flex-col mb-10 lg:gap-0 gap-6">
                <div className="text-center lg:border-r-[1px] border-solid border-[#C3C3C3] basis-1/4">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/googleAds.png" alt="googleAds" className="mx-auto mb-4" />
                    <h4 className="text-[25px] leading-[37.5px] font-bold text-[#30486A]">Google Ads</h4>
                </div>
                <div className="flex justify-between basis-3/4 lg:flex-row flex-col gap-6">
                    <div className="text-center basis-2/6">
                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/expertise.png" alt="expertise" className="mx-auto mb-4" />
                        <p className="text-base leading-[24px] font-medium text-black">10 + years <br
                                className="hidden lg:block" />
                            Experience</p>
                    </div>
                    <div className="text-center basis-2/6">
                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/awareness.png" alt="awareness" className="mx-auto mb-4" />
                        <p className="text-base leading-[24px] font-medium text-black">20 + Certified <br
                                className="hidden lg:block" />
                            Experts</p>
                    </div>
                    <div className="text-center basis-2/6">
                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/handshake.png" alt="handshake" className="mx-auto mb-4" />
                        <p className="text-base leading-[24px] font-medium text-black">20 + Certified<br
                                className="hidden lg:block" />
                            Experts</p>
                    </div>

                </div>
            </div>
            <div className="platFormExpert rounded-[20px] p-8 flex lg:flex-row flex-col mb-10 lg:gap-0 gap-6">
                <div className="text-center border-r-[1px] border-solid border-[#C3C3C3] basis-1/4">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/meta_logo.png" alt="meta_logo" className="mx-auto" />
                    <h4 className="text-[25px] leading-[37.5px] font-bold text-[#30486A]">Meta Ads</h4>
                </div>
                <div className="flex justify-between basis-3/4 lg:flex-row flex-col gap-6">
                    <div className="text-center basis-2/6">
                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/expertise.png" alt="expertise" className="mx-auto mb-4" />
                        <p className="text-base leading-[24px] font-medium text-black">9 + years <br
                                className="hidden lg:block" />
                            Experience</p>
                    </div>
                    <div className="text-center basis-2/6">
                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/awareness.png" alt="awareness" className="mx-auto mb-4" />
                        <p className="text-base leading-[24px] font-medium text-black">16 + Certified <br
                                className="hidden lg:block" />
                            Experts</p>
                    </div>
                    <div className="text-center basis-2/6">
                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/handshake.png" alt="handshake" className="mx-auto mb-4" />
                        <p className="text-base leading-[24px] font-medium text-black">35 + Certified <br
                                className="hidden lg:block" />
                            Experts</p>
                    </div>

                </div>
            </div>
            <div className="platFormExpert rounded-[20px] p-8 flex lg:flex-row flex-col mb-10 lg:gap-0 gap-6">
                <div className="text-center border-r-[1px] border-solid border-[#C3C3C3] basis-1/4">
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/play.png" alt="play" className="mx-auto" />
                    <h4 className="text-[25px] leading-[37.5px] font-bold text-[#30486A]">Display & Video <br
                            className="hidden lg:block" />
                        360</h4>
                </div>
                <div className="flex justify-between basis-3/4 lg:flex-row flex-col gap-6">
                    <div className="text-center basis-2/6">
                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/expertise.png" alt="expertise" className="mx-auto mb-4" />
                        <p className="text-base leading-[24px] font-medium text-black">7 + years <br
                                className="hidden lg:block" />
                            Experience</p>
                    </div>
                    <div className="text-center basis-2/6">
                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/awareness.png" alt="awareness" className="mx-auto mb-4" />
                        <p className="text-base leading-[24px] font-medium text-black">10 + Certified <br
                                className="hidden lg:block" />
                            Experts</p>
                    </div>
                    <div className="text-center basis-2/6">
                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/handshake.png" alt="handshake" className="mx-auto mb-4" />
                        <p className="text-base leading-[24px] font-medium text-black">25 + Certified<br
                                className="hidden lg:block" />
                            Experts</p>
                    </div>

                </div>
            </div>
            <div
                className="platFormExpert rounded-[20px] p-8 flex lg:flex-row flex-col mb-10 lg:h-[190px] items-center lg:gap-0 gap-6">
                <div className="text-center border-r-[1px] border-solid border-[#C3C3C3] basis-1/4">
                    <h4 className="text-[25px] leading-[37.5px] font-bold text-[#30486A]">Other <br
                            className="hidden lg:block" />
                        Platforms</h4>
                </div>
                <div className="basis-3/4 lg:pl-10">
                    <div className="text-left">
                        <p className="text-[25px] leading-[37.5px] font-medium text-black">
                            LinkedIn, X, Bing Ads, Tik Tok Ads, Snap Ads, Reddit Ads, Amazon Ads, Apple Ads</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <ScrollElement
        id="process"
        name="process"
      ></ScrollElement>
    <section className="py-24">
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 gap-4 px-4">
                <div>
                    <h2 className="lg:text-[45px] text-[35px] lg:leading-[61px] leading-[49px] font-bold text-center mb-20">
                        Our Process
                    </h2>
                    <div>
                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/ecomlp/process_Design.png" alt="process_Design" />
                    </div>
                    <div className="pt-14">
                        <h4
                            className="lg:text-[35px] text-[28px] font-semibold lg:leading-[52px] leading-[39px] text-center mb-10">
                            Contact us today to
                            schedule a free personalized consultation
                        </h4>
                        <div className="text-center">
                            <a onClick={scrolling} className="inline-block cursor-pointer commonBtn text-[25px] leading-[20px] font-semibold text-white py-[22px] px-[45px] lg:h-[64px] bg-[#629DF5] rounded-[15px] mx-auto min-w-[218px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
                                        ">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="review-slider">
   <ScrollElement
        id="testimonial"
        name="testimonial"
      ></ScrollElement>
    <div className="relative h-full pb-16" style={{backgroundImage: 'url(https://storage.googleapis.com/website-bucket-uploads/static/Working_woman.png)', backgroundRepeat:'no-repeat'}} >
      <h1 className="font-bold text-4xl py-8 md:py-12 text-center">Let's See What Our Clients Have To Say</h1>
      <div className="relative z-10 md:w-1/3 mx-4 md:mx-auto mt-4 bg-sky-100/90  px-8 pt-4 pb-0">
      <div className="relative w-20 rounded-full bg-white p-4 -top-12 mx-28 md:mx-auto shadow-md shadow-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12" viewBox="0 0 24 24">
            <path fill="CornflowerBlue" d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
          </svg>
        </div>
      <Carousel className="pb-4" ssr={true} showDots={true} responsive={responsive} infinite={true} autoPlay autoPlaySpeed={4000} transitionDuration={500} removeArrowOnDeviceType={["tablet", "mobile"]}>
        <div>
       
        <div className="relative flex items-center my-2 w-full justify-center space-x-4 text-center">
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/Character_1.png" className=""/>
          <h1 className="font-bold text-3xl">Amit</h1>
        </div>
        <p className=" mx-auto">"We are very happy with the Audit and Approach of AnalyticsLiv team. They have been extremely instrumental in our growth in terms of revenue and number of conversions, while making sure that we are optimized for CPA"</p>
          </div>

          <div>
        
        <div className="relative flex items-center my-4 w-full justify-center space-x-4 text-center">
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/Character_1.png" className=""/>
          <h1 className="font-bold text-3xl">Nathan</h1>
        </div>
        <p className=" mx-auto">"Our App received thousand of Installs and users who are relevant with the 4M strategy of AnalyticsLiv team. They are good and prompt in their response. We are in US timezone but they did not let that be a hurdle in their communication"</p>
          </div>

          <div>
        
        <div className="relative flex items-center my-4 w-full justify-center space-x-4 text-center">
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/Character_2.png" className=""/>
          <h1 className="font-bold text-3xl">Nikola McCarthy</h1>
        </div>
        <p className=" mx-auto">""</p>
          </div>



          
          </Carousel>
      </div>
      <div className="relative md:w-1/3 z-0 bg-sky-100/90 h-52 rounded-b-full mx-4 md:mx-auto pb-0"></div>
    </div>
                
    
                
  </section> 
  
  <section>
  <ScrollElement
        id="data-visualisation"
        name="data-visualisation"
      ></ScrollElement>
  <h1 className="font-bold text-4xl py-4 md:pb-8 text-center">Unified Ad Data Visualizations</h1>
  <Carousel className="h-100" ssr={true} showDots={true} responsive={responsive} infinite={true} autoPlay autoPlaySpeed={4000} transitionDuration={500} removeArrowOnDeviceType={["tablet", "mobile"]}>
        
        <div className='md:w-2/3 mx-4 md:mx-auto h-auto'>
          <img className='mx-auto' style={{height:'440px'}} src='https://storage.googleapis.com/website-bucket-uploads/static/dashboard_images/image_1_Small.png'></img>
        </div>

        <div className='md:w-2/3 mx-4 md:mx-auto h-auto'>
          <img className='mx-auto'  style={{height:'440px'}} src='https://storage.googleapis.com/website-bucket-uploads/static/dashboard_images/image_2_Small.png'></img>
        </div>

        <div className='md:w-2/3 mx-4 md:mx-auto h-auto'>
          <img className='mx-auto'  style={{height:'440px'}} src='https://storage.googleapis.com/website-bucket-uploads/static/dashboard_images/image_3_Small.png'></img>
        </div>

        <div className='md:w-2/3 mx-4 md:mx-auto h-auto'>
          <img className='mx-auto'  style={{height:'440px'}} src='https://storage.googleapis.com/website-bucket-uploads/static/dashboard_images/image_4_Small.png'></img>
        </div>

        <div className='md:w-2/3 mx-4 md:mx-auto'>
          <img className='mx-auto'  style={{height:'440px'}} src='https://storage.googleapis.com/website-bucket-uploads/static/dashboard_images/image_5_Small.png'></img>
        </div>

        <div className='md:w-2/3 mx-4 md:mx-auto h-auto'>
          <img className='mx-auto' style={{height:'440px'}}  src='https://storage.googleapis.com/website-bucket-uploads/static/dashboard_images/image_6_Small.png'></img>
        </div>

        <div className='md:w-2/3 mx-4 md:mx-auto h-auto'>
          <img className='mx-auto'  style={{height:'440px'}} src='https://storage.googleapis.com/website-bucket-uploads/static/dashboard_images/image_7_Small.png'></img>
        </div>

        <div className='md:w-2/3 mx-4 md:mx-auto h-auto'>
          <img className='mx-auto'  style={{height:'440px'}} src='https://storage.googleapis.com/website-bucket-uploads/static/dashboard_images/image_8_small.png'></img>
        </div>

        <div className='md:w-2/3 mx-4 md:mx-auto h-auto'>
          <img className='mx-auto'  style={{height:'440px'}} src='https://storage.googleapis.com/website-bucket-uploads/static/dashboard_images/image_9_Small.png'></img>
        </div>

        <div className='md:w-2/3 mx-4 md:mx-auto h-auto'>
          <img className='mx-auto'  style={{height:'440px'}} src='https://storage.googleapis.com/website-bucket-uploads/static/dashboard/image9.png'></img>
        </div>


          </Carousel>
  </section>
  <div className='md:flex justify-center md:space-x-20 items-center px-2 md:px-16 bg-sky-300 py-2 text-center'>
    <h2 className='text-left mb-2 font-bold'>Get Your PPC Ad Strategy Audit Today</h2>
    <button onClick={scrolling}  className="cta px-5 py-2 bg-sky-400 rounded-2xl mx-2 text-sm font-semibold cursor-pointer hover:bg-sky-500">CONTACT US</button>
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
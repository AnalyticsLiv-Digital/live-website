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

export default function dv360({brandsdata}) {

    const initialValues = { fullName: '', email: '', contact: '',message : ''};
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
                event:'dv360_submission'
            });
            fetch('/api/dv360contact', {
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

    const scrolling1 = () =>{
      {
        Scroll.scroller.scrollTo("expertise", {
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
        Scroll.scroller.scrollTo("case-studies", {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      }

    }

    const scrolling4 = () =>{
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
                <title>DV360 - AnalyticsLiv</title>
                
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
            <li onClick={scrolling1} className="hover:text-amber-500">Expertise</li>
            <li onClick={scrolling2} className="hover:text-amber-500">Services</li>
            <li onClick={scrolling3} className="hover:text-amber-500">Case Studies</li>
            <li onClick={scrolling4} className="hover:text-amber-500">Testimonial</li>
    
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
                 <div>Expertise</div>
                  
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
                  Case Studies
                </p>

                <p onClick={() => {setIsOpen(!isOpen); scrolling4();}}
    
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Testimonial
                </p>


              </div>
            </div>
          )}
        </Transition>
  </header>

    
  <section>
  <ScrollElement
        id="expertise"
        name="expertise"
      ></ScrollElement>
    <div className="md:mx-16 mx-4 pb-16 my-2 md:px-4 border-b-2">
        <div className="flex justify-between">
            <div className="flex items-center space-x-4 py-4">
                <img className="md:w-12 w-10" src="https://storage.googleapis.com/website-bucket-uploads/static/DV360_logo.png"/>
                <h1 className="md:text-4xl text-xl font-bold text-gray-400">Display & Video 360</h1>
            </div>
            <div><img className="w-16" src="https://storage.googleapis.com/website-bucket-uploads/static/sparkler (1) 1.png"/></div>
        </div>
        <div className="relative md:flex md:justify-between">
            <div className="space-y-4 md:w-3/4">
                <h1 className="py-4 text-xl font-semibold text-sky-600">Is your Brand ready to </h1>
                <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="lightblue" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
                        Enhance its Reach by 10x
                    </li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="lightblue" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
                        Buy Placements on Premium Websites and Apps
                    </li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="lightblue" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
                        Turn Engagements into Experiences
                    </li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="lightblue" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
                        Get 10x traffic in just few Hours
                    </li>
                </ul>
                <div className="mx-8"><img src="https://storage.googleapis.com/website-bucket-uploads/static/Brand_IMG.png"/></div>
            </div>
            <div className="relative flex justify-end my-4 md:my-0">
                <div className="absolute rounded-full bg-sky-100 w-56 h-56 left-0 -top-10 z-0 blur-xl"></div>
                <div className="z-10 text-center bg-gray-50 py-8 md:p-8 md:w-3/4 rounded-xl shadow-xl shadow-gray-400">
                <ScrollElement
        id="contact-form"
        name="contact-form"
      ></ScrollElement>              
  {!formSubmit &&<div className="block">
                      <h2 className="text-sky-900">We Understand Its difficult to get DV360 Account and control the outcome</h2>
                    <h1 className="font-semibold text-2xl p-4 border-dashed border-b-2 border-sky-200">Let us help you !!</h1>
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
                        <textarea type="" placeholder="TYPE MESSAGE*" className="bg-transparent border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200"  id="message" name="message" value={formValues.message} onChange={handleChange}></textarea>
                        <span className="text-xs text-red-600 float-left">{formErrors.message}</span>
                      </div>
                      <div>
                        <button className="cta cursor-pointer bg-sky-500 hover:bg-sky-600 transition duration-200 delay-75 font-semibold text-white px-8 py-2 rounded-xl shadow-md shadow-gray-600"> CONTACT US </button>
                      </div>
                    </form>
                    </div>}

                            {formSubmit && <div>
          <h2 className="md:text-xl text-sky-900">Thank you for showing interest with us!</h2>
        <h1 className="font-semibold text-2xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">We will get back to you shortly !!</h1>
        <img className="w-64 mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg"/>
        </div>}

                  </div>
            </div>
        </div>
    </div>
  </section>

  <section>
 
     <div className="bg-white py-4">
      <h1 className="text-center font-bold text-xl">200+ Clients served for GA4</h1>
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

 <section>
 <ScrollElement
        id="services"
        name="services"
      ></ScrollElement>
    <div className="bg-green-100 relative text-center md:flex justify-around items-center md:mt-4 px-4 md:px-20 pt-8 md:pt-4 md:pb-16">
      <div className="text-left">
        <h1 className="text-4xl text-left font-bold md:mb-16">Menu of Services</h1>
        <ul className="my-6 mx-2 text-left text-sm font-semibold space-y-4 mb-8">
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Media Planning & Buying
            <div className="pl-9 font-normal text-emerald-800">
                Plan your media strategy & proactively buy Premium Placements,
                Run Connected TV Ads, Digital Out of home advertising
            </div>
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Trafficking
            <div className="pl-9 font-normal text-emerald-800">
                Creating Campaigns, Uploading Creatives, UTM Tracking 
            </div>
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Reporting
            <div className="pl-9 font-normal text-emerald-800">
                Create Auto generated reports in DV360  to  draw real time 
                performance comparison
            </div> 
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Training:
            <div className="pl-9 font-normal text-emerald-800">
                Make your team members an Expert in DV360  Platform with 
                Training from Our Experts
            </div>
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Creatives : Rich Media, Data-Driven, Animated
            <div className="pl-9 font-normal text-emerald-800">
                Enhance the Experience of Users
            </div>
          </li>
      </ul>
      <button onClick={scrolling} className="cta cursor-pointer bg-sky-700 hover:bg-sky-800 transition duration-200 delay-75 ml-8 p-4 rounded-xl shadow-lg shadow-gray-400 text-white font-semibold">Schedule Free Consultation</button>
      </div>
      <div className="text-center mt-8 md:mt-0">
        <img className="w-3/4 h-auto mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Services_IMG.png" />
      </div>
    </div>
  </section>

  <section>
    <div className="relative text-center md:flex justify-around items-center md:mt-4 px-4 md:px-20 md:pt-4 md:pb-16">
      <div className="text-center">
        <img className="w-3/4 h-auto mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Reach_Section_Left_IMG.png" />
      </div>
      <div>
        <h1 className="text-4xl text-left font-bold md:mb-16">Get Global Reach</h1>
        <ul className="my-6 mx-2 text-left text-sm font-semibold space-y-4 mb-8">
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            100+ Exchanges and Sub Exchanges
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Buy Display, Video, Audio, Native, Connected TV Ads
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            3rd Party Audience Avalilability
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Consolidated Frequency Management
          </li>
      </ul>
      </div>
    </div>
  </section>

  <section>
    <div className="bg-green-100 relative text-center md:flex justify-around items-center md:mt-4 px-4 md:px-20 pt-8 md:pt-4 md:pb-16">
      <div className="text-left">
        <h1 className="text-4xl text-left font-bold md:mb-16">Buy Premium Placements</h1>
        <ul className="my-6 mx-2 text-left text-sm font-semibold space-y-4 mb-8">
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Consolidated Media Buying Management
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Buy Display, Video, Audio, Native, Connected TV Ads
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Re-targeting & Re-marketing possibility
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Buy from popular OTTs, Publishers at fixed price
          </li>
      </ul>
      <button onClick={scrolling} className="cta cursor-pointer bg-sky-700 hover:bg-sky-800 transition duration-200 delay-75 ml-8 p-4 rounded-xl shadow-lg shadow-gray-400 text-white font-semibold">Schedule Free Consultation</button>
      </div>
      <div className="text-center mt-8 md:mt-0">
        <img className="w-3/4 h-auto mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Placement_section_Right.png" />
      </div>
    </div>
  </section>

  <section>
    <div className="relative text-center md:flex justify-around items-center md:mt-4 px-4 md:px-20 md:pt-4 md:pb-16">
      <div className="text-center">
        <img className="w-3/4 h-auto mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Targeting_section_Left.png" />
      </div>
      <div>
        <h1 className="text-4xl text-left font-bold md:mb-16">Granular Targeting</h1>
        <ul className="my-6 mx-2 text-left text-sm font-semibold space-y-4 mb-8">
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            First Party Audiences Available from
             <ul style={{"list-style":"square inside"}} className="pl-8">
                <li>Floodlight,</li>
                <li>Google Ads</li>
                <li>Google Analytics 4</li>
            </ul>      
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Google Audiences - In-Market, Affinity
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Custom Lists - Intent Based & Affinity based
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="MediumSeaGreen" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            3rd Party Audiences
          </li>
      </ul>
      </div>
    </div>
  </section>

  <section>
  <ScrollElement
        id="case-studies"
        name="case-studies"
      ></ScrollElement>
    <div className="bg-emerald-100 relative text-center md:px-20 px-2 md:pt-8 py-4 md:pb-16 space-y-8">
      <h1 className="text-4xl text-left font-bold md:mb-16">Case Studies</h1>
      <div className="md:flex text-left justify-evenly items-center bg-white md:px-20 px-2 md:py-8 py-4 md:rounded-full rounded-xl shadow-md shadow-gray-600">
      <div className="md:w-3/4">
        <h1 className="text-2xl font-bold mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="inline mr-4" width="24" height="24" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M17.9 4.2A3 3 0 0 0 15.5 3h-11a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h11a3 3 0 0 0 2.4-1.2l4.5-6a3 3 0 0 0 0-3.6l-4.5-6Z" clipRule="evenodd"/></svg>
            Programmatic Ads bringing 19% improvement 
            in cost of acquiring a new customer
        </h1>
        <p className="text-emerald-800">Effective Cost Per Acquisition has been reduced by 19% as compared to the previous month
        </p>
      </div>
      <div className="text-center pt-4 md:pt-0 items-center space-x-4">
        <img src="https://storage.googleapis.com/website-bucket-uploads/static/CREATIVE.png" className="inline w-40" />
        <button onClick={scrolling} className="cta bg-emerald-500 cursor-pointer hover:bg-emerald-600 transition duration-200 delay-75 px-16 py-2 text-white font-semibold rounded-full shadow-md shadow-gray-400 mt-8">View</button>
      </div>
      
      </div>

      <div className="md:flex text-left justify-evenly items-center bg-white px-2 md:px-20 py-4 md:py-8 md:rounded-full rounded-xl shadow-md shadow-gray-600">
        <div className="md:w-3/4">
          <h1 className="text-2xl font-bold mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="inline mr-4" width="24" height="24" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M17.9 4.2A3 3 0 0 0 15.5 3h-11a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h11a3 3 0 0 0 2.4-1.2l4.5-6a3 3 0 0 0 0-3.6l-4.5-6Z" clipRule="evenodd"/></svg>
            Programmatic Ads Buying resulting in 40% improvement in CPA
        </h1>
        <ul  style={{"list-style":"square inside"}} className="pl-8 text-emerald-800">
            <li>40% of improvement in cost of acquiring a user</li>
            <li>50+% improvement in acquiring qualified user</li>
        </ul>
        </div>
        <div className="text-center items-center pt-4 md:pt-0 space-x-4">
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/result.png" className="inline w-40" />
          <button onClick={scrolling} className="cta bg-emerald-500 cursor-pointer hover:bg-emerald-600 transition duration-200 delay-75 px-16 py-2 text-white font-semibold rounded-full shadow-md shadow-gray-400 mt-8">View</button>
        </div>        
        </div>
    </div>
  </section>

<section className="review-slider">
   <ScrollElement
        id="testimonial"
        name="testimonial"
      ></ScrollElement>
    <div className="relative h-full" style={{backgroundImage: 'url(https://storage.googleapis.com/website-bucket-uploads/static/Working_woman.png)', backgroundRepeat:'no-repeat'}} >
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
          <h1 className="font-bold text-3xl">Una</h1>
        </div>
        <p className=" mx-auto">"AnalyticsLiv helped us set up and manage our GA4 account, and we're so glad 
          we did. They were patient and knowledgeable, and they always made sure we 
          understood what they were doing. We're now able to track our website traffic and 
          marketing campaigns more effectively, and we're confident that we're making better 
          business decisions as a result."</p>
          </div>

          <div>
        
        <div className="relative flex items-center my-4 w-full justify-center space-x-4 text-center">
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/Character_1.png" className=""/>
          <h1 className="font-bold text-3xl">Ebenezer Ferreira</h1>
        </div>
        <p className=" mx-auto">"AnalyticsLiv has been FUTEK web analytics partner for almost 3 years now. They supported us with GTM implementation, GA to GA4 migration, Looker studio dashboard creations and Google cloud storage implementation. They respond to our request in a timely manner and make their best efforts to resolve the web analytics issues. We are happy with the support provided by AnalyticsLiv"</p>
          </div>

          <div>
        
        <div className="relative flex items-center my-4 w-full justify-center space-x-4 text-center">
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/Character_1.png" className=""/>
          <h1 className="font-bold text-3xl">Bobby Bruno</h1>
        </div>
        <p className=" mx-auto">"AnalyticsLiv team was an excellent asset to our businesses' switch from Universal Analytics to GA4. They had excellent communication throughout the project, giving me feedback, updates and ideas as the project went on. I would be happy to recommend the AnalyticsLiv team for analytics and tag manager work, and look forward to working with them in the future. Thank you!"</p>
          </div>

         <div>
          <div className="relative flex items-center my-4 w-full justify-center space-x-4 text-center">
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/Character_1.png" className=""/>
          <h1 className="font-bold text-3xl">Charles Lundy</h1>
        </div>
        <p className=" mx-auto">"The AnalyticsLiv team estimated the job length accurately and then carried out the work exactly as briefed, to time and budget. We had one brief hiccup in the conversion tracking code but that was swiftly fixed once identified. Would definitely consider using it again and for more advanced reporting functionality in future"</p>
          </div>


          
          </Carousel>
      </div>
      <div className="relative md:w-1/3 z-0 bg-sky-100/90 h-52 rounded-b-full mx-4 md:mx-auto pb-0"></div>
    </div>
                
    
                
  </section> 

<div className='sticky bottom-0 z-20 shadow-sm border-t-2 border-emerald-200 flex justify-center space-x-20 items-center px-16 bg-emerald-100 py-2 text-center'>
    <h2>Optimize your campaigns with DV360</h2>
    <button onClick={scrolling}  className="cta px-5 py-2 bg-sky-500 rounded-2xl mx-2 text-sm font-semibold cursor-pointer hover:bg-sky-500">CONTACT US</button>
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
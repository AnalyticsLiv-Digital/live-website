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





    const stuctureData = {"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://analyticsliv.com/","url":"https://analyticsliv.com/","name":"Leading Web and App Analytics Agency in India - AnalyticsLiv","isPartOf":{"@id":"https://analyticsliv.com/#website"},"primaryImageOfPage":{"@id":"https://analyticsliv.com/#primaryimage"},"image":{"@id":"https://analyticsliv.com/#primaryimage"},"thumbnailUrl":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","datePublished":"2023-01-11T18:27:34+00:00","dateModified":"2023-04-07T20:48:38+00:00","description":"AnalyticsLiv Digital is one of the leading Web and App analytics agency. We help our customers embrace Google Products to improve their customer experiences.","breadcrumb":{"@id":"https://analyticsliv.com/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://analyticsliv.com/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://analyticsliv.com/#primaryimage","url":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","contentUrl":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","width":1200,"height":628},{"@type":"BreadcrumbList","@id":"https://analyticsliv.com/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]},{"@type":"WebSite","@id":"https://analyticsliv.com/#website","url":"https://analyticsliv.com/","name":"Analyticsliv","description":"","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://analyticsliv.com/blogs/search?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://analyticsliv.com/#organization","name":"Analyticsliv","url":"https://analyticsliv.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://analyticsliv.com/#/schema/logo/image/","url":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","contentUrl":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","width":512,"height":114,"caption":"Analyticsliv"},"image":{"@id":"https://analyticsliv.com/#/schema/logo/image/"},"sameAs":["https://m.facebook.com/100070503960704/","https://in.linkedin.com/company/analytics-liv-digital","https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw","https://www.instagram.com/analyticsliv_digital"]}]};
    

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
          <img alt="analyticsliv-logo" className="h-8 lg:ml-4 w-auto cursor-pointer" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png"/>
        </a>
        <nav className="lg:flex text-center">
          <ul className="lg:flex text-base font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center tracking-wide cursor-pointer">
            <li onClick={scrolling1} className="hover:text-amber-500">Expertise</li>
            <li onClick={scrolling2} className="hover:text-amber-500">Services</li>
            <li onClick={scrolling3} className="hover:text-amber-500">Case Studies</li>
            <li onClick={scrolling4} className="hover:text-amber-500">Testimonial</li>
    
          </ul>
          <a href="tel:8320576622">
          <button className="cta px-5 py-2 bg-sky-300 rounded-2xl mx-2 text-base font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
          </a>
          <span className="hidden md:inline px-4">
            <img alt="analyticsliv-gmp-partner" className="h-10 w-auto"   src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg" />
          </span>
        </nav>
    </div>


    <div className="relative  flex lg:hidden p-2">
  <Link href="#"><img onClick={() => setIsOpen(false)} src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="relative h-10 md:mx-4 cursor-pointer"/></Link>
  <a className="ml-4" href="tel:8320576622">
          <button className="cta px-5 py-2 bg-sky-300 rounded-2xl mx-2 text-base font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
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
                <img alt="Display & Video 360" className="md:w-12 w-10" src="https://storage.googleapis.com/website-bucket-uploads/static/DV360_logo.png"/>
                <h1 className="md:text-4xl text-xl font-bold text-gray-400">Display & Video 360</h1>
            </div>
            <div><img alt="sparkler" className="w-16" src="https://storage.googleapis.com/website-bucket-uploads/static/sparkler (1) 1.png"/></div>
        </div>
        <div className="relative md:flex md:justify-between">
            <div className="space-y-4 md:w-3/4">
                <h2 className="py-4 text-xl font-semibold text-sky-600">Is your Brand ready to </h2>
                <ul>
                    <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
                        Enhance its Reach by 10x
                    </li>
                    <li><img  alt="arrow"className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
                        Buy Placements on Premium Websites and Apps
                    </li>
                    <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
                        Turn Engagements into Experiences
                    </li>
                    <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
                        Get 10x traffic in just few Hours
                    </li>
                </ul>
                <div className="mx-8"><img alt="brand image" src="https://storage.googleapis.com/website-bucket-uploads/static/Brand_IMG.png"/></div>
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
                    <h2 className="font-semibold text-2xl p-4 border-dashed border-b-2 border-sky-200">Let us help you !!</h2>
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

                            {formSubmit && <div>
          <h2 className="md:text-xl text-sky-900">Thank you for showing interest with us!</h2>
        <h2 className="font-semibold text-2xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">We will get back to you shortly !!</h2>
        <img alt="Thankyou image" className="w-64 mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg"/>
        </div>}

                  </div>
            </div>
        </div>
    </div>
  </section>

  {/* <section>
 
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
  </section> */}

 <section>
 <ScrollElement
        id="services"
        name="services"
      ></ScrollElement>
    <div className="bg-green-100 relative text-center md:flex justify-around items-center md:mt-4 px-4 md:px-20 pt-8 md:pt-4 md:pb-16">
      <div className="text-left">
        <h2 className="text-4xl text-left font-bold md:mb-16">Menu of Services</h2>
        <ul className="my-6 mx-2 text-left text-base font-semibold space-y-4 mb-8">
          <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Media Planning & Buying
            <div className="pl-9 font-normal text-emerald-800">
                Plan your media strategy & proactively buy Premium Placements,
                Run Connected TV Ads, Digital Out of home advertising
            </div>
          </li>
          <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Trafficking
            <div className="pl-9 font-normal text-emerald-800">
                Creating Campaigns, Uploading Creatives, UTM Tracking 
            </div>
          </li>
          <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Reporting
            <div className="pl-9 font-normal text-emerald-800">
                Create Auto generated reports in DV360  to  draw real time 
                performance comparison
            </div> 
          </li>
          <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Training:
            <div className="pl-9 font-normal text-emerald-800">
                Make your team members an Expert in DV360  Platform with 
                Training from Our Experts
            </div>
          </li>
          <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Creatives : Rich Media, Data-Driven, Animated
            <div className="pl-9 font-normal text-emerald-800">
                Enhance the Experience of Users
            </div>
          </li>
      </ul>
      <button onClick={scrolling} className="cta cursor-pointer bg-sky-700 hover:bg-sky-800 transition duration-200 delay-75 ml-8 p-4 rounded-xl shadow-lg shadow-gray-400 text-white font-semibold">Schedule Free Consultation</button>
      </div>
      <div className="text-center mt-8 md:mt-0">
        <img alt="services" className="w-3/4 h-auto mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Services_IMG.png" />
      </div>
    </div>
  </section>

  <section>
    <div className="relative text-center md:flex justify-around items-center md:mt-4 px-4 md:px-20 md:pt-4 md:pb-16">
      <div className="text-center">
        <img alt="reach section left" className="w-3/4 h-auto mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Reach_Section_Left_IMG.png" />
      </div>
      <div>
        <h2 className="text-4xl text-left font-bold md:mb-16">Get Global Reach</h2>
        <ul className="my-6 mx-2 text-left text-base font-semibold space-y-4 mb-8">
          <li><img  alt="arrow"className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            100+ Exchanges and Sub Exchanges
          </li>
          <li><img  alt="arrow"className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Buy Display, Video, Audio, Native, Connected TV Ads
          </li>
          <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            3rd Party Audience Avalilability
          </li>
          <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Consolidated Frequency Management
          </li>
      </ul>
      </div>
    </div>
  </section>

  <section>
    <div className="bg-green-100 relative text-center md:flex justify-around items-center md:mt-4 px-4 md:px-20 pt-8 md:pt-4 md:pb-16">
      <div className="text-left">
        <h2 className="text-4xl text-left font-bold md:mb-16">Buy Premium Placements</h2>
        <ul className="my-6 mx-2 text-left text-base font-semibold space-y-4 mb-8">
          <li><img  alt="arrow"className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Consolidated Media Buying Management
          </li>
          <li><img  alt="arrow"className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Buy Display, Video, Audio, Native, Connected TV Ads
          </li>
          <li><img  alt="arrow"className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Re-targeting & Re-marketing possibility
          </li>
          <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Buy from popular OTTs, Publishers at fixed price
          </li>
      </ul>
      <button onClick={scrolling} className="cta cursor-pointer bg-sky-700 hover:bg-sky-800 transition duration-200 delay-75 ml-8 p-4 rounded-xl shadow-lg shadow-gray-400 text-white font-semibold">Schedule Free Consultation</button>
      </div>
      <div className="text-center mt-8 md:mt-0">
        <img alt="right section" className="w-3/4 h-auto mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Placement_section_Right.png" />
      </div>
    </div>
  </section>

  <section>
    <div className="relative text-center md:flex justify-around items-center md:mt-4 px-4 md:px-20 md:pt-4 md:pb-16">
      <div className="text-center">
        <img alt="left section" className="w-3/4 h-auto mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Targeting_section_Left.png" />
      </div>
      <div>
        <h2 className="text-4xl text-left font-bold md:mb-16">Granular Targeting</h2>
        <ul className="my-6 mx-2 text-left text-base font-semibold space-y-4 mb-8">
          <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            First Party Audiences Available from
             <ul style={{"list-style":"square inside"}} className="pl-8">
                <li>Floodlight,</li>
                <li>Google Ads</li>
                <li>Google Analytics 4</li>
            </ul>      
          </li>
          <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Google Audiences - In-Market, Affinity
          </li>
          <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
            Custom Lists - Intent Based & Affinity based
          </li>
          <li><img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png'/>
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
      <h2 className="text-4xl text-left font-bold md:mb-16">Case Studies</h2>
      <div className="md:flex text-left justify-evenly items-center bg-white md:px-20 px-2 md:py-8 py-4 md:rounded-full rounded-xl shadow-md shadow-gray-600">
      <div className="md:w-3/4">
        <h2 className="text-2xl font-bold mb-4"><svg xmlns="http://www.w3.org/2000/svg" className='inline mr-4 rotate-90' height="1em" viewBox="0 0 448 512"><path d="M160 64c0-8.8 7.2-16 16-16s16 7.2 16 16V200c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c8.8 0 16 7.2 16 16c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c7.8 0 14.3 5.6 15.7 13c1.6 8.2 7.3 15.1 15.1 18s16.7 1.6 23.3-3.6c2.7-2.1 6.1-3.4 9.9-3.4c8.8 0 16 7.2 16 16l0 16V392c0 39.8-32.2 72-72 72H272 212.3h-.9c-37.4 0-72.4-18.7-93.2-49.9L50.7 312.9c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4L116 353.2c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23V320 64zM176 0c-35.3 0-64 28.7-64 64V261.7C91.2 238 55.5 232.8 28.5 250.7C-.9 270.4-8.9 310.1 10.8 339.5L78.3 440.8c29.7 44.5 79.6 71.2 133.1 71.2h.9H272h56c66.3 0 120-53.7 120-120V288l0-16c0-35.3-28.7-64-64-64c-4.5 0-8.8 .5-13 1.3c-11.7-15.4-30.2-25.3-51-25.3c-6.9 0-13.5 1.1-19.7 3.1C288.7 170.7 269.6 160 248 160c-2.7 0-5.4 .2-8 .5V64c0-35.3-28.7-64-64-64zm48 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z"/></svg>
            Programmatic Ads bringing 19% improvement 
            in cost of acquiring a new customer
        </h2>
        <p className="text-emerald-800">Effective Cost Per Acquisition has been reduced by 19% as compared to the previous month
        </p>
      </div>
      <div className="text-center pt-4 md:pt-0 items-center space-x-4">
        <img alt="creative" src="https://storage.googleapis.com/website-bucket-uploads/static/CREATIVE.png" className="inline w-40" />
        <button onClick={scrolling} className="cta bg-emerald-500 cursor-pointer hover:bg-emerald-600 transition duration-200 delay-75 px-16 py-2 text-white font-semibold rounded-full shadow-md shadow-gray-400 mt-8">View</button>
      </div>
      
      </div>

      <div className="md:flex text-left justify-evenly items-center bg-white px-2 md:px-20 py-4 md:py-8 md:rounded-full rounded-xl shadow-md shadow-gray-600">
        <div className="md:w-3/4">
          <h2 className="text-2xl font-bold mb-4"><svg xmlns="http://www.w3.org/2000/svg" className='inline mr-4 rotate-90' height="1em" viewBox="0 0 448 512"><path d="M160 64c0-8.8 7.2-16 16-16s16 7.2 16 16V200c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c8.8 0 16 7.2 16 16c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c7.8 0 14.3 5.6 15.7 13c1.6 8.2 7.3 15.1 15.1 18s16.7 1.6 23.3-3.6c2.7-2.1 6.1-3.4 9.9-3.4c8.8 0 16 7.2 16 16l0 16V392c0 39.8-32.2 72-72 72H272 212.3h-.9c-37.4 0-72.4-18.7-93.2-49.9L50.7 312.9c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4L116 353.2c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23V320 64zM176 0c-35.3 0-64 28.7-64 64V261.7C91.2 238 55.5 232.8 28.5 250.7C-.9 270.4-8.9 310.1 10.8 339.5L78.3 440.8c29.7 44.5 79.6 71.2 133.1 71.2h.9H272h56c66.3 0 120-53.7 120-120V288l0-16c0-35.3-28.7-64-64-64c-4.5 0-8.8 .5-13 1.3c-11.7-15.4-30.2-25.3-51-25.3c-6.9 0-13.5 1.1-19.7 3.1C288.7 170.7 269.6 160 248 160c-2.7 0-5.4 .2-8 .5V64c0-35.3-28.7-64-64-64zm48 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z"/></svg>
            Programmatic Ads Buying resulting in 40% improvement in CPA
        </h2>
        <ul  style={{"list-style":"square inside"}} className="pl-8 text-emerald-800">
            <li>40% of improvement in cost of acquiring a user</li>
            <li>50+% improvement in acquiring qualified user</li>
        </ul>
        </div>
        <div className="text-center items-center pt-4 md:pt-0 space-x-4">
          <img alt="result" src="https://storage.googleapis.com/website-bucket-uploads/static/result.png" className="inline w-40" />
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
    <div className="relative h-full" style={{backgroundImage: 'url(https://storage.googleapis.com/website-bucket-uploads/static/Working_woman.png)', backgroundRepeat:'repeat'}} >
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
          <h2 className="font-bold text-3xl">Kal Cooper</h2>
        </div>
        <p className=" mx-auto">"We used DV360 account for generating Installs and getting qualified players onto our betting ads platform and we are very happy that we chose AnalyticsLiv team to drive these campaigns, as they worked very responsibly and analytically. Kept us informed about the progress and collaborated on multiple occassions to keep us involved and informed"</p>
          </div>

          <div>
        
        <div className="relative flex items-center my-4 w-full justify-center space-x-4 text-center">
          <img alt="client avatar" src="https://storage.googleapis.com/website-bucket-uploads/static/Character_2.png" className=""/>
          <h2 className="font-bold text-3xl">Suzie</h2>
        </div>
        <p className=" mx-auto">"The most I enjoyed working with a strategy team after a long time. These guys are clear with their goals and measurement, highly knowledgeable about the platform and its abilities. Its a delight to have found a data oriented partner to run our campaigns in DV360."</p>
          </div>

          <div>
        
        <div className="relative flex items-center my-4 w-full justify-center space-x-4 text-center">
          <img alt="client avatar" src="https://storage.googleapis.com/website-bucket-uploads/static/Character_2.png" className=""/>
          <h2 className="font-bold text-3xl">Nikola McCarthy</h2>
        </div>
        <p className=" mx-auto">"Highly recommended for anything related to campaign management, planning, reporting and execution. Response has been timely and excellent skills in telling data stories with visualization."</p>
          </div>


          
          </Carousel>
      </div>
      <div className="relative md:w-1/3 z-0 bg-sky-100/90 h-52 rounded-b-full mx-4 md:mx-auto pb-0"></div>
    </div>
                
    
                
  </section> 

<div className='sticky bottom-0 text-base md:text-regular z-20 shadow-sm border-t-2 border-emerald-200 md:flex md:justify-center justify-between md:space-x-20 items-center md:px-16 px-2 bg-emerald-100 py-2 text-center'>
    <h2 className="mb-2 text-left font-bold">Optimize your campaigns with DV360</h2>
    <button onClick={scrolling}  className="cta md:px-5 px-4 py-2 bg-sky-500 rounded-2xl md:mx-2 text-base font-semibold cursor-pointer hover:bg-sky-500">CONTACT US</button>
  </div>

 

  </div>

    </>
  )
}



// export async function getServerSideProps(context) {
    // Fetch data from external API
  
    // const res = await fetch(`${process.env.domain}/api/ga4brands`)
    // const brandsdata = await res.json()

 
  //console.log(brandsdata);
    // Pass data to the page via props
    // return { props: { brandsdata} }
  // }
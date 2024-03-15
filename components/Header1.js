import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NextNProgress from 'nextjs-progressbar';
import { Transition } from "@headlessui/react";
import Head from 'next/head';
import Script from 'next/script';
import { motion } from "framer-motion"

const header = () => {
  const [header, setHeader] = useState(80);
  const [isWebResources, setIsWebResources] = useState(false);
  const [isWebServices, setIsSWebervices] = useState(false);
  const [isResources, setIsResources] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submenu, setSubmenu] = useState("0");

useEffect(() => {

    let headerSize = () => {
        
        const totalScroll = document.documentElement.scrollTop;
       
       if(( totalScroll > 130)){
        setHeader(60);
       }else if(( totalScroll < 100)){
        setHeader(80);
       }

        
    }

    window.addEventListener("scroll", headerSize);

    return () => window.removeEventListener("scroll", headerSize);
});
  return (
    <>
    <Head><meta charset="UTF-8" />

<meta name="viewport" content="width=device-width, initial-scale=1" />


  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="description" content="" />
  <meta charset="utf-8" />
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  <meta http-equiv="cache-control" content="no-cache" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="-1" />
  </Head>


    <header className="sticky min-w-full top-0 z-50 shadow-md bg-white font-gilroy">
        
        <div style={{height: header}} className="navbar hidden lg:flex py-2 h-auto flex-wrap px-4 lg:flex-row items-center justify-between">
            
        <Link className="logo" href="/"><img alt="logo" aria-label="logo" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="h-10 lg:mx-4 cursor-pointer"/></Link>
            <nav className="lg:flex text-center">
                <ul className="lg:flex font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center  uppercase tracking-wide cursor-pointer">
                <li className="relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2" onMouseEnter={()=>setIsSWebervices(true)} onMouseLeave={()=>setIsSWebervices(false)}>
                <Link className="header-links" href="/services">Services</Link>
               
                    
                      
                    </li>
                    <li className="hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2" onMouseEnter={()=>setIsWebResources(true)} onMouseLeave={()=>setIsWebResources(false)}>
                    Resources
                   {isWebResources && <motion.div initial={{ y: 10, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} onMouseEnter={()=>setIsWebResources(true)} onMouseLeave={()=>setIsWebResources(false)} id="submenu2" className="subheader absolute w-56 text-sm flex flex-col lg:-ml-20 lg:mt-2 divide-y bg-gray-100 text-cyan-900 items-center align-middle font-semibold">
                            <Link  href='/blogs'><div className="py-2 w-56 hover:bg-cyan-500">Blogs</div></Link>
                            <Link  href='/case-studies'><div className="py-2 w-56 hover:bg-cyan-500">Case Studies</div></Link>
                            {/*<Link  href='/webinars'><div className="py-2 w-56 hover:bg-cyan-500">Webinars</div></Link>*/}
                             </motion.div>} 
                    </li>
                    <Link className="header-links" href="/about-us"><li className="hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2">
                    About Us
                    </li></Link>
                    <Link className="header-links" href="/contact"><li className="hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2">
                    Contact
                    </li></Link>
                    <Link className="header-links" href="/careers"><li className="hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2 text-rose-700 animate-pulse hover:animate-none">
                    We Are Hiring
                    </li></Link>
                </ul>
                <span className="hidden md:inline px-4">
                    <img alt="marketing-partner" aria-label="marketing-partner" src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg"/>
                </span>
                
            </nav>
        </div>
        
  <div className="relative  flex lg:hidden p-2">
  <Link href="/"><img onClick={() => setIsOpen(false)} src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="relative h-10 md:mx-4 cursor-pointer"/></Link>
              <button
                onClick={() => {setIsOpen(!isOpen); setIsServices(false); setIsResources(false);}}
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
                <p
                  className=" text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                 <div onClick={() => {setIsServices(!isServices); setIsResources(false);}} >Services</div>
                  {isServices ? (<motion.div initial={{ y: 10, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}className='transition ease-out duration-200 px-4 text-cyan-400  divide-y-2'>
                            
                            <div onClick={() => {setSubmenu("1")}} ><div className="py-2 w-56 ">Media</div></div>
                            {submenu=="1" && <motion.div onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} initial={{ y: 10, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}className='transition ease-out duration-200 px-4 '>
                            <div class="flex items-center py-1 gap-2
                                    ">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/media-inner-search.png" alt="display_logo"/>
                                        <Link href="/services/app-marketing"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Mobile app marketing</Link>
                                    </div>
                                    <div class="flex items-center py-1 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/media-inner-paid.png" alt="paid_logo"/>
                                        <Link href="/services/lead-generation"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Lead generation</Link>
                                    </div>
                                    <div class="flex items-center py-1 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/media-inner-paid.png" alt="paid_logo"/>
                                        <Link href="/services/ecommerce-marketing"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Search/E-Commerce Marketing</Link>
                                    </div>
                                    <div class="flex items-center py-1 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/media-inner-paid.png" alt="paid_logo"/>
                                        <Link href="/services/programatic-advertising"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Programatic Media Buying</Link>
                                    </div>
                            </motion.div>}  
                            <div onClick={() => {setSubmenu("2")}} ><div className="py-2 w-56 ">Analytics</div></div>
                            {submenu=="2" && <motion.div onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} initial={{ y: 10, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}className='transition ease-out duration-200 px-4 '>
                            
                                    <div class="flex items-center py-1 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_webapp_logo.png" alt="webapp_logo"/>
                                        <Link href="/services/web-app-measurement"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Web
                                            and App measurement</Link>
                                    </div>
                                    <div class="flex items-center py-1 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_GA4_logo.png" alt="GA4_logo"/>
                                        <Link href="/services/analytics?id=ga4-implementation"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">GA4
                                            Implementation</Link>
                                    </div>
                                    <div class="flex items-center py-1 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Analytis_data-reporting.logo.png"
                                            alt="data-reporting_logo"/>
                                        <Link href="/services/data-reporting-analysis"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Data
                                            Reporting & Analysis</Link>
                                    </div>
                                    <div class="flex items-center py-1 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Looker.logo.png" alt="Looker_logo"/>
                                        <Link href="/services/looker-bi-platform"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Looker
                                            BI Platform</Link>
                                    </div>
                            </motion.div>}  
                            <div onClick={() => {setSubmenu("3")}} ><div className="hidden py-2 w-56 ">Solutions</div></div>
                            {submenu=="3" && <motion.div onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} initial={{ y: 10, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}className='transition ease-out duration-200 px-4 '>
                            <div class="flex items-center py-1 gap-2
                                    ">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/solutions_data-migration.logo.png"
                                            alt="data-migration_logo"/>
                                        <Link href="#"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Seamless
                                            Data Migration</Link>
                                    </div>
                                    <div class="flex items-center py-1 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/solutions_GDRP.logo.png" alt="GDRP_logo"/>
                                        <Link href="#"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">GDPR
                                            Compliance</Link>
                                    </div>
                                    <div class="flex items-center py-1 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Solutions_Data-Science.logo.png"
                                            alt="Data-Science_logo"/>
                                        <Link href="#"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Data
                                            Science Solution & Automation</Link>
                                    </div>
                            </motion.div>}  
                            <div onClick={() => {setSubmenu("4")}} ><div className="py-2 w-56 ">Training & Consultation</div></div>
                            {submenu=="4" && <motion.div onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} initial={{ y: 10, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}className='transition ease-out duration-200 px-4 '>
                            <div class="flex items-center py-1 gap-2
                                    ">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/solutions_Training-Details.logo.png"
                                            alt="Training-Details_logo"/>
                                        <Link href="/services/training"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Training
                                            Details</Link>
                                    </div>
                            </motion.div>}  
              
                       </motion.div>):(<></>)}
                </p>

                <p
                  href="#"
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div onClick={() => {setIsResources(!isResources); setIsServices(false);}}>Resources</div>
                  {isResources ? (<motion.div initial={{ y: 10, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='px-4 text-cyan-400  divide-y-2'>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsResources(false);}}  href='/blogs'><div className="py-2 w-56 ">Blogs</div></Link>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsResources(false);}} href='/case-studies'><div className="py-2 w-56 ">Case Studies</div></Link>
                       </motion.div>):(<></>)}
                </p>

                <Link onClick={() => setIsOpen(!isOpen)}
                  href="about-us"
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </Link>

                <Link onClick={() => setIsOpen(!isOpen)}
                  href="/contact"
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>

                <Link onClick={() => setIsOpen(!isOpen)}
                  href="/careers"
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  We are Hiring!
                </Link>
              </div>
            </div>
          )}
        </Transition>
        {isWebServices && <motion.div  initial={{ y: 10, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{  type: "spring",  stiffness: 260,  damping: 20  }} onMouseEnter={()=>setIsSWebervices(true)} onMouseLeave={()=>setIsSWebervices(false)} onClick={()=>setIsSWebervices(false)} className="subheader absolute w-full text-sm flex flex-col z-100 divide-y bg-gray-100 text-cyan-900 items-center align-middle font-semibold">
 
                               <div
                            class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white left-0 absolute text-left w-full transition-all duration-150 ease-linear">
                            <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">

                                <ul
                                    class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                    <div class="flex items-center">

                                        <h3 class="text-menuheading font-poppins text-2xl font-bold">Media</h3>
                                    </div> <br/>

                                    <div class="flex items-center py-3 gap-2
                                    ">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/media-inner-mobile.png" alt="display_logo"/>
                                        <Link href="/services/app-marketing"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Mobile app marketing</Link>
                                    </div>
                                    <div class="flex items-center py-3 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/media-inner-lead.png" alt="paid_logo"/>
                                        <Link href="/services/lead-generation"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Lead generation</Link>
                                    </div>
                                    <div class="flex items-center py-3 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/media-inner-E-commerce.png" alt="paid_logo"/>
                                        <Link href="/services/ecommerce-marketing"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Search/E-Commerce Marketing</Link>
                                    </div>
                                    <div class="flex items-center py-3 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/media-inner-paid.png" alt="paid_logo"/>
                                        <Link href="/services/programatic-advertising"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Programatic Media Buying</Link>
                                    </div>
                                </ul>
                                <ul
                                    class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                    <div class="flex items-center">

                                        <h3 class="text-menuheading font-poppins text-2xl font-bold">Analytics</h3>
                                    </div> <br/>

                                    
                                    <div class="flex items-center py-3 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_webapp_logo.png" alt="webapp_logo"/>
                                        <Link href="/services/web-app-measurement"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Web
                                            and App measurement</Link>
                                    </div>
                                    <div class="flex items-center py-3 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_GA4_logo.png" alt="GA4_logo"/>
                                        <Link href="/services/analytics?id=ga4-implementation"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">GA4
                                            Implementation</Link>
                                    </div>
                                    <div class="flex items-center py-3 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Analytis_data-reporting.logo.png"
                                            alt="data-reporting_logo"/>
                                        <Link href="/services/data-reporting-analysis"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Data
                                            Reporting & Analysis</Link>
                                    </div>
                                    <div class="flex items-center py-3 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Analytics_Looker.logo.png" alt="Looker_logo"/>
                                        <Link href="/services/looker-bi-platform"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Looker
                                            BI Platform</Link>
                                    </div>
                                </ul>
                                <ul
                                    class="hidden px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                    <div class="flex items-center">

                                        <h3 class="text-menuheading font-poppins text-2xl font-bold">Solutions</h3>
                                    </div> <br/>

                                    <div class="flex items-center py-3 gap-2
                                    ">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/solutions_data-migration.logo.png"
                                            alt="data-migration_logo"/>
                                        <Link href="#"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Seamless
                                            Data Migration</Link>
                                    </div>
                                    <div class="flex items-center py-3 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/solutions_GDRP.logo.png" alt="GDRP_logo"/>
                                        <Link href="#"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">GDPR
                                            Compliance</Link>
                                    </div>
                                    <div class="flex items-center py-3 gap-2">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Solutions_Data-Science.logo.png"
                                            alt="Data-Science_logo"/>
                                        <Link href="#"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Data
                                            Science Solution & Automation</Link>
                                    </div>
                                </ul>
                                <ul
                                    class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                    <div class="flex items-center">
                                        <h3 class="text-menuheading font-poppins text-2xl font-bold">Training &
                                            Consultation</h3>
                                    </div> <br/>
                                    <div class="flex items-center py-3 gap-2
                                    ">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/solutions_Training-Details.logo.png"
                                            alt="Training-Details_logo"/>
                                        <Link href="/services/training"
                                            class="text-menuheading font-poppins text-base font-medium leading-normal">Training
                                            Details</Link>
                                    </div>
                                </ul>

                            </div>
                        </div>
                        </motion.div>}
        {/*<NextNProgress color="red" showSpinner={false}/>*/}
      </header>
      
      </>
  )
}

export default header
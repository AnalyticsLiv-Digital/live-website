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


    <header className="sticky min-w-full top-0 z-50 shadow-md bg-white">
        
        <div style={{height: header}} className="navbar hidden lg:flex py-2 h-auto flex-wrap px-4 lg:flex-row items-center justify-between">
            
        <Link className="logo" href="/"><img alt="logo" aria-label="logo" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="h-10 lg:mx-4 cursor-pointer"/></Link>
            <nav className="lg:flex text-center">
                <ul className="lg:flex font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center  uppercase tracking-wide cursor-pointer">
                <li className="relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2" onMouseEnter={()=>setIsSWebervices(true)} onMouseLeave={()=>setIsSWebervices(false)}>
                <Link className="header-links" href="/services">Services</Link>
               
                    {isWebServices && <motion.div  initial={{ y: 10, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{  type: "spring",  stiffness: 260,  damping: 20  }} onMouseEnter={()=>setIsSWebervices(true)} onMouseLeave={()=>setIsSWebervices(false)} className="subheader absolute w-56 text-sm flex flex-col lg:-ml-20 lg:mt-2 divide-y bg-gray-100 text-cyan-900 items-center align-middle font-semibold">
 
                            <Link scroll={false} href={{ pathname: '/services',query: { id: 'data-collection' }}}><div className="w-56 py-2 hover:bg-cyan-500">Data Collection</div></Link>
                            <Link scroll={false} href={{ pathname: '/services',query: { id: 'data-reporting' }}}><div className="w-56 py-2 hover:bg-cyan-500">Data reporting</div></Link>
                            <Link scroll={false} href={{ pathname: '/services',query: { id: 'insight-generation' }}}><div className="w-56 py-2 hover:bg-cyan-500">Insight Generation</div></Link>
                            <Link scroll={false} href={{ pathname: '/services',query: { id: 'data-utilization' }}}><div className="w-56 py-2 hover:bg-cyan-500">Data Utilization</div></Link>
                            <Link scroll={false} href={{ pathname: '/services',query: { id: 'paid-search-marketing' }}}><div className="w-56 py-2 hover:bg-cyan-500">Paid Search Marketing</div></Link>
                            <Link scroll={false} href={{ pathname: '/services',query: { id: 'media-planning' }}}><div className="w-56 py-2 hover:bg-cyan-500">Media Planning & Buying</div></Link>
                             
                        </motion.div>}
                      
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
                    <Link className="gmp-link" href="https://marketingplatform.google.com/about/partners/company/5088705549172736/gacp/5074370206629888/service/5141028099063808" target="_blank"><img alt="marketing-partner" aria-label="marketing-partner" src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg"/></Link>
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
                            
                            <Link onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} scroll={false} href={{ pathname: '/services',query: { id: 'data-collection' }}}><div className="py-2 w-56 ">Data Collection</div></Link>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} scroll={false} href={{ pathname: '/services',query: { id: 'data-reporting' }}}><div className="py-2 w-56 ">Data reporting</div></Link>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} scroll={false} href={{ pathname: '/services',query: { id: 'insight-generation' }}}><div className="py-2 w-56 ">Insight Generation</div></Link>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} scroll={false} href={{ pathname: '/services',query: { id: 'data-utilization' }}}><div className="py-2 w-56 ">Data Utilization</div></Link>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} scroll={false} href={{ pathname: '/services',query: { id: 'paid-search-marketing' }}}><div className="py-2 w-56 ">Paid Search Marketing</div></Link>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} scroll={false} href={{ pathname: '/services',query: { id: 'media-planning' }}}><div className="py-2 w-56 ">Media Planning & Buying</div></Link>
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

                <a onClick={() => setIsOpen(!isOpen)}
                  href="about-us"
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </a>

                <a onClick={() => setIsOpen(!isOpen)}
                  href="/contact"
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>

                <a onClick={() => setIsOpen(!isOpen)}
                  href="/careers"
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  We are Hiring!
                </a>
              </div>
            </div>
          )}
        </Transition>
        {/*<NextNProgress color="red" showSpinner={false}/>*/}
      </header>
      </>
  )
}

export default header
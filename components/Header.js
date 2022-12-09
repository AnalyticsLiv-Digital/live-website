import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NextNProgress from 'nextjs-progressbar';
import { Transition } from "@headlessui/react";

const submenushow = (e) => {
    document.getElementById('submenu'+e).style.display = 'block';
    
}
const submenuhide = (e) => {
    document.getElementById('submenu'+e).style.display = 'none';
   
}

const header = () => {
  const [header, setHeader] = useState(80);
  
  const [isResources, setIsResources] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
useEffect(() => {

    let headerSize = () => {
        
        const totalScroll = document.documentElement.scrollTop;
       if(totalScroll >> 200){
        setHeader(60);
       }else{
        setHeader(80);
       }

        
    }

    window.addEventListener("scroll", headerSize);

    return () => window.removeEventListener("scroll", headerSize);
});
  return (
    <header className="sticky min-w-full top-0 z-50 shadow-md bg-white">
        
        <div style={{height: header}} className="navbar hidden lg:flex py-2 h-auto flex-wrap px-4 lg:flex-row items-center justify-between">
            
        <Link href="/"><img src="/static/logo.png" className="h-10 lg:mx-4 cursor-pointer"/></Link>
            <nav className="lg:flex text-center">
                <ul className="lg:flex text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center  uppercase tracking-wide cursor-pointer">
                <li className="hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2" onMouseEnter={()=>submenushow(1)} onMouseLeave={()=>submenuhide(1)}>
                <Link href="/services">Services</Link>
            
                    <div style={{display : "none"}} onMouseEnter={()=>submenushow(1)} onMouseLeave={()=>submenuhide(1)} id="submenu1" className="absolute w-56 text-sm flex flex-col lg:-ml-20 lg:mt-3 divide-y bg-gray-100 bg-opacity-90 text-cyan-900 items-center align-middle font-semibold transition ease-in-out delay-150 hover:-translate-y-1 ">
                    
                            <Link scroll={false} href={{ pathname: '/services',query: { id: 'data-collection' }}}><div className="py-2 w-56 hover:bg-cyan-500">Data Collection</div></Link>
                            <Link scroll={false} href={{ pathname: '/services',query: { id: 'data-reporting' }}}><div className="py-2 w-56 hover:bg-cyan-500">Data reporting</div></Link>
                            <Link scroll={false} href={{ pathname: '/services',query: { id: 'insight-generation' }}}><div className="py-2 w-56 hover:bg-cyan-500">Insight Generation</div></Link>
                            <Link scroll={false} href={{ pathname: '/services',query: { id: 'data-utilization' }}}><div className="py-2 w-56 hover:bg-cyan-500">Data Utilization</div></Link>
                            <Link scroll={false} href={{ pathname: '/services',query: { id: 'paid-search-marketing' }}}><div className="py-2 w-56 hover:bg-cyan-500">Paid Search Marketing</div></Link>
                            <Link scroll={false} href={{ pathname: '/services',query: { id: 'media-planning' }}}><div className="py-2 w-56 hover:bg-cyan-500">Media Planning & Buying</div></Link>
                           
                        </div>
                        
                    </li>
                    <li className="hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2" onMouseEnter={()=>submenushow(2)} onMouseLeave={()=>submenuhide(2)}>
                    Resources
                    <div style={{display : "none"}} onMouseEnter={()=>submenushow(2)} onMouseLeave={()=>submenuhide(2)} id="submenu2" className="absolute w-56 text-sm flex flex-col lg:-ml-20 lg:mt-3 divide-y bg-gray-100 bg-opacity-90 text-cyan-900 items-center align-middle font-semibold">
                            <Link  href='/blogs'><div className="py-2 w-56 hover:bg-cyan-500">Blogs</div></Link>
                            <Link  href='/case-studies'><div className="py-2 w-56 hover:bg-cyan-500">Case Studies</div></Link>
                            <Link  href='/webinars'><div className="py-2 w-56 hover:bg-cyan-500">Webinars</div></Link>
                             </div>
                    </li>
                    <Link href="/about-us"><li className="hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2">
                    About Us
                    </li></Link>
                    <Link href="/contact"><li className="hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2">
                    Contact
                    </li></Link>
                    <Link href="/careers"><li className="hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2 text-rose-700 animate-pulse hover:animate-none">
                    We Are Hiring
                    </li></Link>
                </ul>
                <span className="hidden md:inline px-4">
                    <Link href="https://marketingplatform.google.com/about/partners/company/5088705549172736/gacp/5074370206629888/service/5141028099063808" target="_blank"><img src="/static/gmp.svg"/></Link>
                </span>
                
            </nav>
        </div>
        
  <div className="relative  flex lg:hidden p-2">
  <Link href="/"><img onClick={() => setIsOpen(false)} src="/static/logo.png" className="relative h-10 md:mx-4 cursor-pointer"/></Link>
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
            <div className="bg-white lg:hidden" id="mobile-menu">
              <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className=" text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                 <div onClick={() => {setIsServices(!isServices); setIsResources(false);}} >Services</div>
                  {isServices ? (<div className='px-4 text-cyan-400  divide-y-2'>
                            
                            <Link onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} scroll={false} href={{ pathname: '/services',query: { id: 'data-collection' }}}><div className="py-2 w-56 ">Data Collection</div></Link>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} scroll={false} href={{ pathname: '/services',query: { id: 'data-reporting' }}}><div className="py-2 w-56 ">Data reporting</div></Link>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} scroll={false} href={{ pathname: '/services',query: { id: 'insight-generation' }}}><div className="py-2 w-56 ">Insight Generation</div></Link>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} scroll={false} href={{ pathname: '/services',query: { id: 'data-utilization' }}}><div className="py-2 w-56 ">Data Utilization</div></Link>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} scroll={false} href={{ pathname: '/services',query: { id: 'paid-search-marketing' }}}><div className="py-2 w-56 ">Paid Search Marketing</div></Link>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsServices(false);}} scroll={false} href={{ pathname: '/services',query: { id: 'media-planning' }}}><div className="py-2 w-56 ">Media Planning & Buying</div></Link>
                       </div>):(<></>)}
                </a>

                <a
                  href="#"
                  className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div onClick={() => {setIsResources(!isResources); setIsServices(false);}}>Resources</div>
                  {isResources ? (<div className='px-4 text-cyan-400  divide-y-2'>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsResources(false);}}  href='/blogs'><div className="py-2 w-56 ">Blogs</div></Link>
                            <Link onClick={() => {setIsOpen(!isOpen); setIsResources(false);}} href='/case-studies'><div className="py-2 w-56 ">Case Studies</div></Link>
                       </div>):(<></>)}
                </a>

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
        <NextNProgress color="red" showOnShallow={true}/>
      </header>

  )
}

export default header
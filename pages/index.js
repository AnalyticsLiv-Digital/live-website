import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Counter from '../components/Counter'
import { useEffect } from 'react'
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollProgress from '../components/ScrollProgress';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <ScrollProgress/>
        <Head>
      <title>Test</title>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
    </Head>
        <div className='overflow-x-hidden'>
      <section className="bg-slate-500 ">
            <div className="text-center xl:text-left xl:flex xl:items-center xl:justify-between xl:pl-12">
            <div className="py-8 xl:w-2/5 xl:pr-16">
            <h1 className="title-font font-medium uppercase leading-relaxed tracking-wide text-4xl xl:text-5xl text-white">Unleash the Power of Data</h1>
            
            <p className="whitespace-pre-line text-xl text-gray-300 mt-8 ">
                Data analytics and Marketing Digital 
                Solutions helps businesses in gaining 
                digital maturity through optimized 
                utilization of data
            </p>
            </div>
            <div className="xl:w-3/5 flex flex-col  md:ml-auto w-full  md:mt-0">
                <img src="/static/hero.jpg" className="h-full"/>
                </div>
            </div>
         </section>

    <section>
        <div className="bg-stone-300">
             <div className="w-full py-4">
                <div className="text-center md:flex space-y-6 md:space-y-0 py-3">
                    <div className="font-medium text-4xl md:w-1/4">
                        <span className=""><Counter x={100} /></span>
                        <span className="block font-medium text-xl ">Satisfied Clients</span>
                    </div>
                    <div className="font-medium text-4xl md:w-1/4">
                        <span><Counter x={150} /></span>
                        <span className="block font-medium text-xl ">Successful Projects</span>
                    </div>
                    <div className="font-medium text-4xl md:w-1/4">
                        <span><Counter x={20} /></span>
                        <span className="block font-medium text-xl ">Certified Experts</span>
                    </div>
                    <div className="font-medium text-4xl md:w-1/4">
                        <span><Counter x={40} /></span>
                        <span className="block font-medium text-xl ">Solutions</span>
                    </div>
                </div>               
             </div>
                 
             </div>
        
    </section>

    <section>
        <div style={{backgroundImage: `url("/static/flow.png")`}} className="lg:flex pb-6 lg:pb-0 bg-cover bg-fixed ">
            
            <div data-aos="fade-right" data-aos-once="true" className="max-w-full lg:min-w-1/2 content-center py-24">
                <motion.img 
                             initial={{ scale: 0.5 }}
                             animate={{ scale: 1 }}
                             transition={{
                               duration: 1
                             }} 
                className="h-96 lg:w-1/2 lg:h-full  m-auto" src="/static/left.png"/>
              </div>


            <div data-aos="fade-left" data-aos-once="true" className="text-center lg:w-1/3 lg:text-left m-auto">
                <div className="text-gray-500 font-medium text-xl ">360° Solutions</div>
                <h1 className="font-medium text-3xl whitespace-pre m-auto leading-relaxed">How are we Helpful?</h1>
                <p className="text-slate-700 pb-4 px-4 lg:pb-0 lg:px-0 m-auto">
                    The Google Marketing Platform is a unified analytics and marketing platform
                    that enables meaningful insights for effective marketing steering and 
                    activation. If you are looking for help implementing Google Marketing Platform
                    products or need technical expertise for a custom project, AnalyticsLiv is here
                    to help. We are more than just a digital agency — we’re a reliable partner and 
                    co-worker. AnalyticsLiv is a digitally-savvy team of Marketing and Analytics 
                    specialists with 8+ years of experience in the industry. We create data driven 
                    marketing strategies to help our clients’ businesses stand out.
                </p>
                <Link href="/services"><div className="bg-blue-400 hover:bg-blue-500 transition duration-200 delay-75 text-white tracking-wide font-semibold rounded w-1/3 mx-auto lg:my-8 text-center px-2 py-2 shadow-md shadow-slate-800">Learn More</div></Link>
            </div>
        </div>
    </section>

   <section className="bg-slate-900">
        <div  className="relative w-100% lg:flex justify-evenly py-6">
        <div data-aos="fade-left" data-aos-once="true" className="lg:hidden w-full">
                <img src="/static/collab.png" />
            </div>
            
            <div data-aos="fade-right" data-aos-once="true" className="lg:w-1/2 w-4/5 m-auto">
               <h1 className="font-medium text-white text-3xl pt-8 pb-4 whitespace-pre leading-relaxed text-center md:text-left">What We Do?</h1>
               <div className="bg-black w-100% h-0.5 rounded-full"></div>
               <ul className="text-purple-100 leading-6 py-4 tracking-widest">
                  <li className="my-2">Understand context, needs and expected outcomes</li>
                  <li className="my-2">Audit current web analytics and data capabilities and management</li>
                  <li className="my-2">Design tracking structure</li>
                  <li className="my-2">Manage testing and optimisation</li>
                  <li className="my-2">Transfer knowledge to customer</li>
               </ul>
            </div>
            <div data-aos="fade-left" data-aos-once="true" className="hidden lg:block lg:w-1/3 w-full">
                <img src="/static/collab.png" />
            </div>
        </div>
   </section>

   <section className="relative bg-slate-900">
    
    <div className="w-100% lg:flex py-6">
        <div data-aos="fade-right" data-aos-once="true" className="lg:w-1/3 m-auto">
            <img src="/static/team.png" className="m-auto"/>
        </div>
        <div  data-aos="fade-left" data-aos-once="true" className="lg:w-1/2 w-4/5 m-auto">
           <h1 className="font-medium text-white text-3xl pt-8 pb-4 whitespace-pre m-auto leading-relaxed text-center md:text-left">Services we Offer</h1>
           <div className="bg-black w-100% h-0.5 rounded-full"></div>
           <div className="lg:flex lg:space-x-10 py-4">
           <ul className="text-purple-200 tracking-widest ">
              <li className="my-2 flex items-center"><img src="/static/icon-1.png" className="mr-4"/> Data Collection</li>
              <li className="my-2 flex items-center"><img src="/static/icon-2.png" className="mr-4"/> Data Reporting</li>
              <li className="my-2 flex items-center"><img src="/static/icon-3.png" className="mr-4"/> Insight Generation</li>
            </ul>
            <ul className="text-purple-200 tracking-widest ">
              <li className="my-2 flex items-center"><img src="/static/icon-4.png" className="mr-4"/> Data Utilization</li>
              <li className="my-2 flex items-center"><img src="/static/icon-5.png" className="mr-4"/> Paid Search Marketing</li>
              <li className="my-2 flex items-center"><img src="/static/icon-6.png" className="mr-4"/> Media Planning & Buying</li>
           </ul>
           </div>
           
           <div className="relative w-full">
           <Link href="/services"><button className="text-white border rounded px-4 py-2 ml-4 shadow-sm shadow-lime-300 hover:bg-emerald-600 transition origin-top-left duration-300 delay-150 ease-in">Learn More</button></Link>
           </div>
        </div>
        
    </div>
    <div className="relative mt-16 pb-8 ">
        <img className="absolute -top-28 right-0  bg-gradient-to-b from-blue-400 to-transparent w-96 h-96 rounded-full blur-2xl "/>
        <img className="absolute mt-24 bottom-0 left-0 bg-gradient-to-t from-red-800 to-transparent w-96 h-96 rounded-full blur-2xl "/>
        <h1 className="text-white w-full h-auto font-semibold text-xl pt-6 text-center uppercase tracking-widest ">Hear from the clients !</h1>
        <div className="text-justify items-center lg:flex lg:justify-evenly py-12 lg:py-24">
            
            <div className=" rounded relative pt-3 px-2 lg:pt-4 lg:px-4 pb-8 lg:backdrop-blur bg-gray-200 shadow-lg shadow-black  w-4/5 mx-auto lg:w-1/4 text-center ">  
            <h2 className="lg:text-2xl text-slate-900 font-medium underline ">Nikola McCarthy</h2>
            <h4 className="ml-8 lg:ml-0 text-sm text-gray-800">Director at Tasman Digital</h4>
            <div className="text-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-8 mx-auto' preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                <path fill="currentColor" d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054c.062-.372.166-.703.31-.992c.145-.29.331-.517.559-.683c.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992a4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054c.062-.372.166-.703.31-.992c.145-.29.331-.517.559-.683c.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992a4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
            </div>
            <p className="align-middle  overflow-hidden h-24 text-sm text-gray-700">Highly recommended for anything related to campaign management, 
                planning, reporting and execution. Response has been timely and excellent skills in 
                telling data stories with visualization.</p>
          </div>

          <div className="hidden lg:block rounded relative lg:pt-4 lg:px-4 pb-8 bg-gray-200 shadow-lg shadow-black h-auto lg:w-1/3 mx-auto text-center ">
               
            <h2 className="text-2xl text-slate-900 font-medium underline ">Greg Jones</h2>
            <h4 className="text-sm text-gray-800">Managing Director at PhysioEd. LLC</h4>
            <div className="text-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-10 mx-auto' preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                <path fill="currentColor" d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054c.062-.372.166-.703.31-.992c.145-.29.331-.517.559-.683c.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992a4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054c.062-.372.166-.703.31-.992c.145-.29.331-.517.559-.683c.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992a4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
            </div>
            <p className="align-middle text-ellipsis overflow-hidden h-32 text-sm text-gray-700">This was a comprehensive analytics project for our 
                membership-based website, PhysioEd.com. Data is an important component to our business
                decisions. AnalyticsLiv team worked through a long list of tasks successfully.</p>
          </div>

          <div className="hidden lg:block rounded relative lg:pt-4 lg:px-4 pb-8 lg:backdrop-blur bg-gray-200 shadow-lg shadow-black text-ellipsis lg:w-1/4 mx-auto text-center ">
            
            <h2 className="text-2xl text-slate-900 font-medium underline ">Max Bidna</h2>
            <h4 className="text-sm text-gray-800">CEO at Hell's Creative</h4>
            <div className="text-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-8 mx-auto' preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                <path fill="currentColor" d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054c.062-.372.166-.703.31-.992c.145-.29.331-.517.559-.683c.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992a4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054c.062-.372.166-.703.31-.992c.145-.29.331-.517.559-.683c.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992a4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
            </div>
            <p className="align-middle text-ellipsis overflow-hidden h-24 text-sm text-gray-700">AnalyticsLiv has been an amazing partner to our 
                fast growing agency! They helped us think through the best reporting options for our clients and 
                quickly customized numerous Google Data Studio to fit our clients’ unique requests. Team is always 
                responsive, not too pushy, and really understands how to cut then report data. We will be working 
                with the team and AnalyticsLiv for years to come!</p>
          </div>
        </div>
        
    </div>
   </section>
   <section>
    <div style={{backgroundImage: `url("/static/bg2.png")`}} className="bg-cover lg:bg-fixed">
        <h1 className="text-black w-full h-auto font-bold text-3xl pt-12 text-center uppercase tracking-widest">B L O G S</h1>
         <div data-aos="zoom-in" data-aos-once="true" className="text-center lg:flex justify-evenly  p-12">
            <div className="rounded backdrop-blur-xl border-1 border-amber-100 bg-white shadow-lg shadow-gray-800/40 h-84 lg:w-1/4 p-4 text-center">
                <img src="/static/blog1.png" className="stretch"/>
                <h2 className="text-lg text-slate-900 font-semibold whitespace-relaxed ">Why you should move to GA4</h2>
                <p className="align-middle text-left text-ellipsis pt-4 overflow-hidden  h-36 text-m text-gray-500">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint
                </p>
            </div>

            <div className="hidden lg:block rounded backdrop-blur-xl border-1 border-amber-100 bg-white shadow-lg shadow-gray-800/40 h-84 w-1/4 p-4 text-center ">
                <img src="/static/blog2.png"/>
                <h2 className="text-lg text-slate-900 font-semibold whitespace-relaxed ">Be visible before others do!</h2>
                <p className="align-middle text-left text-ellipsis pt-4 overflow-hidden  h-36 text-m text-gray-500">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint
                </p>
            </div>

            <div className="hidden lg:block rounded backdrop-blur-xl border-1 border-amber-100 bg-white shadow-lg shadow-gray-800/40 h-84 w-1/4 p-4 text-center ">
                <img src="/static/blog3.png"/>
                <h2 className="text-lg text-slate-900 font-semibold whitespace-relaxed ">The game changers in marketing.</h2>
                <p className="align-middle text-left text-ellipsis pt-4 overflow-hidden  h-36 text-m text-gray-500">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint.
                </p>
            </div>
         </div>
    </div>
   </section>
  
   <section>
    <div data-aos="flip-up" data-aos-once="true" className="bg-slate-900  lg:py-20">
        <div className="lg:flex lg:rounded-lg bg-white shadow-lg shadow-gray-800/40 lg:w-3/5 mx-auto">
            <div className="lg:w-2/3"><img src="/static/help.png" /></div>
            <div className="lg:w-1/3 align-middle rounded-lg bg-purple-200 text-center py-8 lg:py-0">
                <img srcSet='static/support.png' className="mx-auto mt-2"/>
                <h1 className="font-medium text-slate-700 text-2xl whitespace-pre lg:mt-6 mb-4 tracking-wider">Let Us Help!</h1>
            
                <Link href="/contact">
                <button className="rounded-xl bg-cyan-500 hover:bg-blue-500 transition duration-200 delay-75 shadow-md text-white shadow-gray-500/40 mt-1 w-1/2 lg:w-52 p-2 border border-slate-200">Request A Quote</button></Link>
                <div className="mt-4 text-gray-700">Or Contact Us @</div>
                <div className="underline text-sm cursor-pointer text-blue-900"><a >data.analytics@analyticsliv.com</a></div>
            </div>
        </div>
    </div>
   </section>
    </div>
    </>
  )
}

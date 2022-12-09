import React from 'react'
import ScrollProgress from '../components/ScrollProgress'
import Head from 'next/head'
import { useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const contact = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    const [formstatus, setFormStatus] = useState(0);
  return (
    <>
    <Head>
      <title>Test</title>

    </Head>
    <ScrollProgress/>
    <section className="relative pt-12 pb-12 bg-slate-900">
        
        <div className="z-0 absolute blur-sm lg:w-80 w-40 lg:h-80 h-40 rounded-full bg-gradient-to-b from-violet-500 via-slate-900 to-transparent top-10 lg:left-96 lg:ml-28 left-1/2 -ml-20"></div>
        

        <div className="relative z-10 pt-12 ">
            <h1 className=" text-center tracking-wide text-white uppercase text-2xl mb-8">Contact Us</h1>
            <div className="relative overflow-hidden lg:w-4/5 lg:p-8 pt-2 rounded-lg mx-2 lg:mx-auto bg-white">
                <div className="absolute rounded-full w-40 h-40 bg-gradient-to-b from-rose-500 to-transparent blur -right-10 top-0"></div>
                <div className="absolute rounded-full w-40 h-40 bg-gradient-to-r from-cyan-500 to-transparent blur left-1/2 -bottom-10"></div>
                <div className="relative mx-2 z-20 lg:flex">
                    <div className="relative overflow-hidden lg:w-1/3 rounded-lg bg-slate-900 space-y-9 px-4 py-12 align-middle text-white">
                        <h1 className="font-semibold uppercase tracking-wider">Contact Information</h1>
                        <h2 className="uppercase">Make an appointment for first consultation.</h2>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7L4 8v10h16V8Zm0-2l8-5H4ZM4 8V6v12Z"></path>
                            </svg>
                            <span>data.analytics@analyticsliv.com</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19.95 21q-3.225 0-6.287-1.425q-3.063-1.425-5.425-3.8q-2.363-2.375-3.8-5.438Q3 7.275 3 4.05v-.525Q3 3.25 3.05 3H8.9l.925 5.025l-2.85 2.875q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.9-2.9l5 1v5.85q-.25.025-.525.038Q20.2 21 19.95 21Z"></path>
                            </svg>
                            <span>+91 80087 83679</span>
                        </div>
                        <div className="space-x-2 pl-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M9.71 10.46h2.239a.77.77 0 1 0 0-1.542H9.71a.77.77 0 1 0 0 1.542Zm9.718-8.458H4.555a2.573 2.573 0 0 0-2.563 2.563v14.873a2.573 2.573 0 0 0 2.563 2.564h14.873a2.573 2.573 0 0 0 2.564-2.564V4.565a2.573 2.573 0 0 0-2.564-2.563Zm-1.072 9.678l-.02 2.675a4.051 4.051 0 0 1-4.038 4.022h-4.64a4.05 4.05 0 0 1-4.041-4.025V9.657a4.053 4.053 0 0 1 4.042-4.03h2.823a4.46 4.46 0 0 1 3.12 2.2a3.156 3.156 0 0 1 .362 1.367c.068.506.103.881.33 1.09c.32.289 1.508.094 1.743.278l.178.14l.11.221l.035.178Zm-4.097 1.863H9.71a.75.75 0 1 0 0 1.5h4.549a.75.75 0 1 0 0-1.5Z"></path>
                            </svg>
                        </div>
                        <div className="absolute rounded-full w-56 h-56 bg-white lg:left-48 -right-24 -bottom-24"></div>
                        <div className="absolute rounded-full lg:w-36 lg:h-36 w-24 h-24 bg-amber-400 right-10 lg:bottom-10 bottom-8"></div>
                    </div>
                    <div className="relative lg:w-2/3 rounded-lg p-4 bg-white font-regular">
                        <form className="space-y-4 md:space-y-6 ">
                            <div className="relative w-full md:flex justify-evenly md:space-x-4">
                                <div className="relative">
                                    <input type="text" id="firstname" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent dark:bg-gray-700 border-0 border-b-2 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" "/>
                                    <label for="firstname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">First Name</label>
                                </div>
                                <div className="relative">
                                    <input type="text" id="lastname" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent dark:bg-gray-700 border-0 border-b-2 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" "/>
                                    <label for="lastname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Last Name</label>
                                </div>
                            </div>
                            <div className="w-full md:flex justify-evenly md:space-x-4">
                                <div className="relative">
                                    <input type="email" id="email" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent dark:bg-gray-700 border-0 border-b-2 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" "/>
                                    <label for="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail</label>
                                </div>
                                <div className="relative">
                                    <input type="tel" id="tel" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent dark:bg-gray-700 border-0 border-b-2 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" "/>
                                    <label for="tel" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Contact No</label>
                                </div>
                            </div>
                            <div className="w-full md:flex space-y-4 justify-evenly md:space-x-4">
                                <div className="relative">
                                    <input type="Cname" id="email" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent dark:bg-gray-700 border-0 border-b-2 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" "/>
                                    <label for="Cname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Company Name</label>
                                </div>
                                <select className="pb-4 pl-2 w-full md:w-1/3 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-slate-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 outline-none" placeholder="Role in Comapany">
                                    <option>Role in Company</option>
                                    <option>C-Level Executive</option>
                                    <option>Management/Executive</option>
                                    <option>Professional</option>
                                    <option>Department Manager</option>
                                    <option>Finance Head</option>
                                    </select>
                            </div>
                            <div className="relative w-full md:flex justify-evenly ">
                                <select className="pb-4 pl-2 w-full md:w-4/5 mt-4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-slate-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 outline-none" placeholder="Contact for">
                                    <option>Contact For</option>
                                    <option>Web Analytics Service</option>
                                    <option>Display &amp; Video 360 Self Serve</option>
                                    <option>Google Cloud Platform</option>
                                    <option>Mobile App Analytics Service</option>
                                    <option>Advanced Funnel Optimization</option>
                                    </select>
                            </div>
                            <div className="w-full flex justify-evenly space-x-4">
                                <textarea className="pl-2 mt-4 resize-none lg:h-28 text-sm w-full md:w-4/5 text-gray-700 bg-transparent border-0 border-b-2 border-slate-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 outline-none" placeholder="Requirements"></textarea>
                            </div>
                            <div className="text-center">
                                <button className="tracking-wider mt-4 px-8 py-2 m-auto bg-slate-900 text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default contact
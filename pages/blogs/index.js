import React, {useEffect} from 'react'
import ScrollProgress from '../../components/ScrollProgress'
import Head from 'next/head';
import BlogCard from '../../components/BlogCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blogdata = [{
    title: "xyz",
    thumb :"/static/blog2.png",
    date :"Nov 29 2022", 
    author : "Anshul",
    slug:"why-god-why",
    excerpt: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
},{
    title: "We shall overcome",
    thumb :"/static/blog1.png",
    date :"Nov 29 2022", 
    author : "Admin",
    slug:"we-are-great",
    excerpt: "Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
}]

const index = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return(
    <><Head>
    <title>Test</title>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
    AOS.init();
    </script>
  </Head>
    <div>
        <ScrollProgress/>
    <div className="relative pb-4 ">
        <div className="">
          <div className="absolute right-0 bg-cyan-700 w-4/5 lg:w-4/5 h-full opacity-70 rounded-bl-full"></div>
          <div className="absolute right-0 top-0 -bottom-10 lg:left-52 lg:mt-20 bg-red-700 opacity-80 w-20 h-20 lg:w-60 lg:h-60 rounded-full"></div>
          <div className="absolute right-6 -bottom-8 lg:-bottom-16 lg:left-80 lg:top-0 bg-yellow-300 opacity-90 w-28 h-28 lg:w-48 lg:h-48 rounded-full"></div>
        </div>
        <img src="/static/marketing.jpg" className="absolute h-32 lg:h-48 lg:right-56 rounded-lg"/>
        <div className="relative lg:flex rounded backdrop-blur-xl bg-white h-20 lg:h-40 w-4/5 md:w-3/5 lg:w-1/3 p-6 lg:top-20 top-10 text-left mx-auto mb-6">
            <div className="lg:pt-16">
            <h2 className="lg:text-2xl text-slate-700 font-semibold whitespace-relaxed ">B L O G S.</h2>
            <div className="bg-slate-700 h-1 w-6 ml-12 lg:ml-20"></div>
            </div>
            
        </div>
       
    </div>

    <section>
        <div className="text-center pt-7 lg:pt-12 z-2">
            <h1 className="text-center mb-4 text-lg font-medium tracking-wide text-cyan-800 text-lg">Search</h1>
            <input type="search" placeholder="Search" className="bg-stone-100 w-3/5 lg:w-2/5 rounded-l-full border border-cyan-500 py-2 pl-9 focus:outline-none focus:caret-gray-400"/>
            <input type="submit" value="Search" id="Search" className="bg-cyan-500 text-white rounded-r-full border border-cyan-500 py-2 px-4 -ml-2 focus:outline-none"/>
        </div>
    </section>
    
    <section>
    <div className="flex flex-row w-full">
        <div className="divide-y">
            <span></span>
        </div>
      <div className="h-100% w-1/3 my-8 space-y-4 mx-16">
        <div className="flex space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="none" stroke="#65217a" stroke-width="2" d="m12 3l9 4.5l-9 4.5l-9-4.5L12 3Zm4.5 7.25L21 12.5L12 17l-9-4.5l4.5-2.25m9 5L21 17.5L12 22l-9-4.5l4.5-2.25"/>
            </svg>
            <h2 className="font-medium py-1">Resources</h2>
        </div>
        <div> 
            <h2 className="text-cyan-500 font-medium text-center">Blogs</h2>
        </div>
        <div className="space-y-2 text-sm text-left pl-10">
            <h2 className="text-base text-sm text-slate-800 font-medium pl-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-6 left-20 fill-purple-900" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                </svg>
             Categories
            </h2>
            <div>GA 4</div>
            <div>Social Media Marketing</div>
            <div>Analytics</div>
            <div>Data Reporting</div>
            <div>Media</div>
        </div>
       
      </div>
      <div className="">
        <div className="my-8 mx-14 grid grid-cols-3 gap-14 ">
           <div data-aos="zoom-in" data-aos-once="true" className="relative rounded text-center shadow-lg shadow-gray-500 ">
            <img src="/static/blog2.png" className="rounded-t "/>
            <div className="mx-4 mt-2 mb-8 text-left">
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Nov 9, 2022</span>
                </div>
                <h1 className="font-medium text-base text-slate-800  ">Why you should move to GA4?</h1>
                <span className="font-normal text-xs text-gray-400 py-2">Cameron Williamson</span> 
                <p className="font-normal text-sm text-gray-600 py-1">
                   Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                </p>
                <div className="absolute 
                w-full h-10 bg-gradient-to-t from-gray-300 to-transparent 
                bottom-0 left-0 text-center pt-2 cursor-pointer 
                font-medium text-gray-800 hover:text-cyan-500">
                    Read More
            </div>
            </div>
           </div>

           <div data-aos="zoom-in" data-aos-once="true" className="relative rounded text-center shadow-lg shadow-gray-500 ">
            <img src="/static/blog1.png" className="rounded-t "/>
            <div className="mx-4 mt-2 mb-8 text-left">
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Nov 9, 2022</span>
                </div>
                <h1 className="font-medium text-base text-slate-800  ">Why you should move to GA4?</h1>
                <span className="font-normal text-xs text-gray-400 py-2">Cameron Williamson</span> 
                <p className="font-normal text-sm text-gray-600 py-1">
                   Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                </p>
                <div className="absolute 
                w-full h-10 bg-gradient-to-t from-gray-300 to-transparent 
                bottom-0 left-0 text-center pt-2 cursor-pointer 
                font-medium text-gray-800 hover:text-cyan-500">
                    Read More
            </div>
            </div>
           </div>

        {blogdata.map((blog,key) => (
        <BlogCard key={key} blog={blog}/>
      ))}
           

           <div data-aos="zoom-in" data-aos-once="true" className="relative rounded text-center shadow-lg shadow-gray-500 ">
            <img src="/static/blog3.png" className="rounded-t "/>
            <div className="mx-4 mt-2 mb-8 text-left">
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Nov 9, 2022</span>
                </div>
                <h1 className="font-medium text-base text-slate-800  ">Why you should move to GA4?</h1>
                <span className="font-normal text-xs text-gray-400 py-2">Cameron Williamson</span> 
                <p className="font-normal text-sm text-gray-600 py-1">
                   Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                </p>
                <div className="absolute 
                w-full h-10 bg-gradient-to-t from-gray-300 to-transparent 
                bottom-0 left-0 text-center pt-2 cursor-pointer 
                font-medium text-gray-800 hover:text-cyan-500">
                    Read More
            </div>
            </div>
           </div>

           <div data-aos="zoom-in" data-aos-once="true" className="relative rounded text-center shadow-lg shadow-gray-500 ">
            <img src="/static/blog1.png" className="rounded-t "/>
            <div className="mx-4 mt-2 mb-8 text-left">
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Nov 9, 2022</span>
                </div>
                <h1 className="font-medium text-base text-slate-800  ">Why you should move to GA4?</h1>
                <span className="font-normal text-xs text-gray-400 py-2">Cameron Williamson</span> 
                <p className="font-normal text-sm text-gray-600 py-1">
                   Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                </p>
                <div className="absolute 
                w-full h-10 bg-gradient-to-t from-gray-300 to-transparent 
                bottom-0 left-0 text-center pt-2 cursor-pointer 
                font-medium text-gray-800 hover:text-cyan-500">
                    Read More
            </div>
            </div>
           </div>

           <div data-aos="zoom-in" data-aos-once="true" className="relative rounded text-center ">
            <img src="/static/blog2.png" className="rounded-t "/>
            <div className="mx-4 mt-2 mb-8 text-left">
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Nov 9, 2022</span>
                </div>
                <h1 className="font-medium text-base text-slate-800  ">Why you should move to GA4?</h1>
                <span className="font-normal text-xs text-gray-400 py-2">Cameron Williamson</span> 
                <p className="font-normal text-sm text-gray-600 py-1">
                   Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                </p>
                <div className="absolute 
                w-full h-10 bg-gradient-to-t from-gray-300 to-transparent 
                bottom-0 left-0 text-center pt-2 cursor-pointer 
                font-medium text-gray-800 hover:text-cyan-500">
                    Read More
            </div>
            </div>
           </div>

           <div data-aos="zoom-in" data-aos-once="true" className="relative rounded text-center shadow-lg shadow-gray-500 ">
            <img src="/static/blog3.png" className="rounded-t "/>
            <div className="mx-4 mt-2 mb-8 text-left">
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Nov 9, 2022</span>
                </div>
                <h1 className="font-medium text-base text-slate-800  ">Why you should move to GA4?</h1>
                <span className="font-normal text-xs text-gray-400 py-2">Cameron Williamson</span> 
                <p className="font-normal text-sm text-gray-600 py-1">
                   Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                </p>
                <div className="absolute 
                w-full h-10 bg-gradient-to-t from-gray-300 to-transparent 
                bottom-0 left-0 text-center pt-2 cursor-pointer 
                font-medium text-gray-800 hover:text-cyan-500">
                    Read More
            </div>
            </div>
           </div>

           <div data-aos="zoom-in" data-aos-once="true" className="relative rounded text-center shadow-lg shadow-gray-500 ">
            <img src="/static/blog1.png" className="rounded-t "/>
            <div className="mx-4 mt-2 mb-8 text-left">
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Nov 9, 2022</span>
                </div>
                <h1 className="font-medium text-base text-slate-800  ">Why you should move to GA4?</h1>
                <span className="font-normal text-xs text-gray-400 py-2">Cameron Williamson</span> 
                <p className="font-normal text-sm text-gray-600 py-1">
                   Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                </p>
                <div className="absolute 
                w-full h-10 bg-gradient-to-t from-gray-300 to-transparent 
                bottom-0 left-0 text-center pt-2 cursor-pointer 
                font-medium text-gray-800 hover:text-cyan-500">
                    Read More
            </div>
            </div>
           </div>

           <div data-aos="zoom-in" data-aos-once="true" className="relative rounded text-center ">
            <img src="/static/blog2.png" className="rounded-t "/>
            <div className="mx-4 mt-2 mb-8 text-left">
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Nov 9, 2022</span>
                </div>
                <h1 className="font-medium text-base text-slate-800  ">Why you should move to GA4?</h1>
                <span className="font-normal text-xs text-gray-400 py-2">Cameron Williamson</span> 
                <p className="font-normal text-sm text-gray-600 py-1">
                   Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                </p>
                <div className="absolute 
                w-full h-10 bg-gradient-to-t from-gray-300 to-transparent 
                bottom-0 left-0 text-center pt-2 cursor-pointer 
                font-medium text-gray-800 hover:text-cyan-500">
                    Read More
            </div>
            </div>
           </div>

           <div data-aos="zoom-in" data-aos-once="true" className="relative rounded text-center shadow-lg shadow-gray-500 ">
            <img src="/static/blog3.png" className="rounded-t "/>
            <div className="mx-4 mt-2 mb-8 text-left">
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Nov 9, 2022</span>
                </div>
                <h1 className="font-medium text-base text-slate-800  ">Why you should move to GA4?</h1>
                <span className="font-normal text-xs text-gray-400 py-2">Cameron Williamson</span> 
                <p className="font-normal text-sm text-gray-600 py-1">
                   Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                </p>
                <div className="absolute 
                w-full h-10 bg-gradient-to-t from-gray-300 to-transparent 
                bottom-0 left-0 text-center pt-2 cursor-pointer 
                font-medium text-gray-800 hover:text-cyan-500">
                    Read More
            </div>
            </div>
           </div>
           </div>

           

        </div>
      </div>
      </section>
    </div>
    </>
  )
}

export default index
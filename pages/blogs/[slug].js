import React, { useState,useEffect } from 'react'
import { Router, useRouter } from 'next/router'
import ScrollProgress from '../../components/ScrollProgress';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';


const slug = ()=>{
    useEffect(() => {
        AOS.init();
      }, []);
    const router = useRouter();
    const {slug} = router.query;
    return (<>
    <Head>
    <title>Test</title>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
    AOS.init();
    </script>
  </Head>
    <section>
        <ScrollProgress/>
    <div className="lg:flex">
        <div className="hidden lg:block h-100% w-1/6 my-8 space-y-4 mx-4">
            <div className="flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="none" stroke="#65217a" stroke-width="2" d="m12 3l9 4.5l-9 4.5l-9-4.5L12 3Zm4.5 7.25L21 12.5L12 17l-9-4.5l4.5-2.25m9 5L21 17.5L12 22l-9-4.5l4.5-2.25"/>
                </svg>
                <h2 className="font-medium py-1">Resources</h2>
            </div>
            <div> 
                <h2 className="text-cyan-500 font-medium ml-8">Blogs</h2>
            </div>
            <div className="space-y-2 text-sm text-left pl-10">
                <h2 className="text-base text-sm text-slate-800 font-medium pl-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-6 left-12 fill-purple-900" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
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
        
          <div className=" mx-4 lg:w-2/3 text-left pr-4 my-4">
            <h1 className="text-4xl font-medium tracking-wider">
            {slug} The GA4 Attribution Model: How to implement and succeed.
            </h1>
            <div className="my-3 flex space-x-2 justify-between">
                <div>
                    <span className="flex text-sm font-medium text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-cyan-500 mr-1 -mt-0.5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path d="M12 14q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Zm-4 0q-.425 0-.713-.288Q7 13.425 7 13t.287-.713Q7.575 12 8 12t.713.287Q9 12.575 9 13t-.287.712Q8.425 14 8 14Zm8 0q-.425 0-.712-.288Q15 13.425 15 13t.288-.713Q15.575 12 16 12t.712.287Q17 12.575 17 13t-.288.712Q16.425 14 16 14Zm-4 4q-.425 0-.712-.288Q11 17.425 11 17t.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17t-.287.712Q12.425 18 12 18Zm-4 0q-.425 0-.713-.288Q7 17.425 7 17t.287-.712Q7.575 16 8 16t.713.288Q9 16.575 9 17t-.287.712Q8.425 18 8 18Zm8 0q-.425 0-.712-.288Q15 17.425 15 17t.288-.712Q15.575 16 16 16t.712.288Q17 16.575 17 17t-.288.712Q16.425 18 16 18ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z"/>
                    </svg>
                    <h4>Sep 07,2022</h4>
                </span>
                </div>
                <div className="flex space-x-2 pr-4">
                <span className="flex text-sm font-medium text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-amber-400 mr-1 -mt-0.5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M9 3V1h6v2Zm2 11h2V8h-2Zm1 8q-1.85 0-3.488-.712q-1.637-.713-2.862-1.938t-1.938-2.862Q3 14.85 3 13t.712-3.488Q4.425 7.875 5.65 6.65t2.862-1.937Q10.15 4 12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025Q21 11.45 21 13q0 1.85-.712 3.488q-.713 1.637-1.938 2.862t-2.862 1.938Q13.85 22 12 22Z"/>
                    </svg>
                    <h4>3 Minutes Read</h4>
                </span>
                <span className="flex text-sm font-medium text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-purple-700 mr-1 -mt-0.5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                        <path d="M232 92.7L163.3 24a16.1 16.1 0 0 0-22.6 0l-25.1 25.1l-58.1 21.8a15.9 15.9 0 0 0-10.1 12.3L26.6 207.8a4 4 0 0 0 6.8 3.5l55-55.1A31.7 31.7 0 0 1 84 140a32 32 0 1 1 32 32a31.7 31.7 0 0 1-16.2-4.4l-55.1 55a4 4 0 0 0 3.5 6.8l124.6-20.7a16.2 16.2 0 0 0 12.3-10.2l21.8-58.1l25.1-25.1a15.9 15.9 0 0 0 0-22.6Zm-32 32L131.3 56L152 35.3l68.7 68.7ZM116 156a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z"/>
                    </svg>
                    <h4>By Charles & Eva</h4>
                </span>
                </div>
            </div>
            <div className="mb-4">
                <span className="bg-gray-100 px-2 py-0.5 font-medium text-sm rounded text-gray-400">GA4</span>
                <span className="bg-gray-100 px-2 py-0.5 font-medium text-sm rounded text-gray-400">Analytics</span>
                <span className="bg-gray-100 px-2 py-0.5 font-medium text-sm rounded text-gray-400">UA vs GA4</span>
            </div>
             <img src="/static/big-image.png"/>
            <div className="py-4">
                <h2 className="font-medium text-lg">The GA4 Attribution Model: How to implement and succeed.</h2>
                <p className="whitespace-pre-line">
It’s no secret that the new version of Google Analytics (called GA4) is already taking over the market. And 
opinions are abuzz. In this series, we are focussing on how to take advantage and succeed. As, this new version
is here with some exciting additions like integral machine learning models, AI-based predictive audience, and
cross-device measurement capabilities.

For this blog, we have picked up one of the most talked about topics in the world of data analytics – Attribution
Modeling.

The ability to analyze marketing data across all of your channels is critical for any business growth. This might 
include getting answers on:

How can you assess your channels to know exactly where to invest more? 
Which ads make potential customers move to the next step in the funnel? 
How is the value of a conversion distributed across channels? 
Well, it’s all about getting the attribution right, the one that makes sense for your business.

The previous version of GA, widely known as Universal Analytics 360 is based on the last non-direct click 
attribution model, by default. It provides an option to choose different models but temporarily within
multi-channel funnel reports and reflects on just those reports. On the other side, GA4’s default model is
data-driven (I know pretty exciting) but it also provides an enhanced feature where you can change the
model from Property Settings. And you guessed it right, the impact will be seen on all the reports. This will
ensure deeper and actionable insights since all your conversions and revenue reports will now be based on
the model most apt for your business.

We will talk about DDA in more detail in our next blog, but for now, let’s take a look at how you can make
these changes within the GA interface.
                </p>
            </div>
        </div>

        <div className="lg:w-1/5 space-y-4">
            <div className="space-y-6">
                <h3 className="w-full text-slate-700 pt-2 px-3 font-bold tracking-wider">Similar Posts</h3>
                <div className="min-w-full px-3">
                    <img src="/static/blog-random1.png"/>
                    <h2 className="font-medium">The New era of AI</h2>
                    <span className="text-xs text-slate-400">Nov 09, 2022</span>
                    <div className="flex text-sm font-medium text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-purple-700 mr-1 -mt-0.5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                            <path d="M232 92.7L163.3 24a16.1 16.1 0 0 0-22.6 0l-25.1 25.1l-58.1 21.8a15.9 15.9 0 0 0-10.1 12.3L26.6 207.8a4 4 0 0 0 6.8 3.5l55-55.1A31.7 31.7 0 0 1 84 140a32 32 0 1 1 32 32a31.7 31.7 0 0 1-16.2-4.4l-55.1 55a4 4 0 0 0 3.5 6.8l124.6-20.7a16.2 16.2 0 0 0 12.3-10.2l21.8-58.1l25.1-25.1a15.9 15.9 0 0 0 0-22.6Zm-32 32L131.3 56L152 35.3l68.7 68.7ZM116 156a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z"/>
                        </svg>
                        <h4 className="">By Rahul Nayyar</h4>
                    </div>
                </div>

                <div className="min-w-full px-3">
                    <img src="/static/blog-random2.png"/>
                    <h2 className="font-medium">Work from anywhere.</h2>
                    <span className="text-xs text-slate-400">Sep  20, 2022</span>
                    <div className="flex text-sm font-medium text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-purple-700 mr-1 -mt-0.5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                            <path d="M232 92.7L163.3 24a16.1 16.1 0 0 0-22.6 0l-25.1 25.1l-58.1 21.8a15.9 15.9 0 0 0-10.1 12.3L26.6 207.8a4 4 0 0 0 6.8 3.5l55-55.1A31.7 31.7 0 0 1 84 140a32 32 0 1 1 32 32a31.7 31.7 0 0 1-16.2-4.4l-55.1 55a4 4 0 0 0 3.5 6.8l124.6-20.7a16.2 16.2 0 0 0 12.3-10.2l21.8-58.1l25.1-25.1a15.9 15.9 0 0 0 0-22.6Zm-32 32L131.3 56L152 35.3l68.7 68.7ZM116 156a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z"/>
                        </svg>
                        <h4>By Kunal Kaushal</h4>
                    </div>
                </div>
            </div>

            <div className="lg:block space-y-6">
                <h3 className="text-slate-700 min-w-full pl-2 font-bold tracking-wider">Recent Posts</h3>
                <div className=" px-3 min-w-full">
                    <img src="/static/blog-random3.png"/>
                    <h2 className="font-medium">Apps to make life easier</h2>
                    <span className="text-xs text-slate-400">Sep 05, 2022</span>
                    <div className="flex text-sm font-medium text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-purple-700 mr-1 -mt-0.5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                            <path d="M232 92.7L163.3 24a16.1 16.1 0 0 0-22.6 0l-25.1 25.1l-58.1 21.8a15.9 15.9 0 0 0-10.1 12.3L26.6 207.8a4 4 0 0 0 6.8 3.5l55-55.1A31.7 31.7 0 0 1 84 140a32 32 0 1 1 32 32a31.7 31.7 0 0 1-16.2-4.4l-55.1 55a4 4 0 0 0 3.5 6.8l124.6-20.7a16.2 16.2 0 0 0 12.3-10.2l21.8-58.1l25.1-25.1a15.9 15.9 0 0 0 0-22.6Zm-32 32L131.3 56L152 35.3l68.7 68.7ZM116 156a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z"/>
                        </svg>
                        <h4 className="">By Pehal Gami</h4>
                    </div>
                </div>

                <div className="px-3">
                    <img src="/static/blog-random4.png"/>
                    <h2 className="font-medium">Videos to learn it all</h2>
                    <span className="text-xs text-slate-400">Nov 07, 2022</span>
                    <div className="flex text-sm font-medium text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-purple-700 mr-1 -mt-0.5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                            <path d="M232 92.7L163.3 24a16.1 16.1 0 0 0-22.6 0l-25.1 25.1l-58.1 21.8a15.9 15.9 0 0 0-10.1 12.3L26.6 207.8a4 4 0 0 0 6.8 3.5l55-55.1A31.7 31.7 0 0 1 84 140a32 32 0 1 1 32 32a31.7 31.7 0 0 1-16.2-4.4l-55.1 55a4 4 0 0 0 3.5 6.8l124.6-20.7a16.2 16.2 0 0 0 12.3-10.2l21.8-58.1l25.1-25.1a15.9 15.9 0 0 0 0-22.6Zm-32 32L131.3 56L152 35.3l68.7 68.7ZM116 156a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z"/>
                        </svg>
                        <h4>By Kavya Verma</h4>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section></>)
};

export default slug;
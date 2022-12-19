import React, { useState,useEffect } from 'react'
import { Router, useRouter } from 'next/router'
import ScrollProgress from '../../components/ScrollProgress';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';


const slug = ()=>{
    useEffect(() => {
        AOS.init();
      }, []);
    const router = useRouter();
    const {slug} = router.query;
    return (<>
    <Head>
    <title>AnalyticsLiv - {slug}</title>
  </Head>
  <ScrollProgress/>
    <section> 
    <div className="relative lg:flex ">
        
        <div className='hidden lg:fixed text-center space-y-1 left-5 top-40  '>
                                  
        <a target="blank" href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//www.analyticsliv.com/blogs/${slug}`}>
            <div className='rounded-full p-2 bg-blue-700'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-white' preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                 </svg>
                 
            </div>
            </a>
            <a target="blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.analyticsliv.com/blogs/${slug}`}>
                <div className=' rounded-full p-2 bg-indigo-900'>
                 <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-white' preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path  d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/>
                 </svg>
             </div>
             </a>
            <a target="blank" href={`http://twitter.com/share?text=Check this blog by AnalyticsLiv&url=https%3A//www.analyticsliv.com/blogs/${slug}`}>

            <div className=' rounded-full p-2 bg-cyan-500'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-white' preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                <path  d="M251.1 67.4A12 12 0 0 0 240 60h-28.2A52 52 0 0 0 116 88v.8c-37.3-11.5-67.2-41-67.5-41.3a12 12 0 0 0-20.3 6.4c-9 49.6 6 83 20.1 102.2a112.3 112.3 0 0 0 22 22.5C55.9 193 36 200.7 35.8 200.8a11.7 11.7 0 0 0-7.2 7.5a12.3 12.3 0 0 0 1.4 10.4c1.9 2.9 13.4 17.3 50 17.3c72.1 0 132.5-55.1 139.3-126.4l29.2-29.1a12.2 12.2 0 0 0 2.6-13.1Zm-51.8 28.4a11.3 11.3 0 0 0-3.5 7.7C191.9 164.3 141 212 80 212a89.4 89.4 0 0 1-12.5-.8c10.4-6.7 22.2-16.1 30.5-28.5a12.1 12.1 0 0 0 1.6-9.8a11.8 11.8 0 0 0-6.2-7.6c-2-1.1-45.6-24.2-43.9-85.4c17.2 13.1 45 30.7 76.5 35.9a12 12 0 0 0 14-11.8V88a28.3 28.3 0 0 1 28.4-28a28 28 0 0 1 25.3 16.8a11.9 11.9 0 0 0 11 7.2h6.3Z"/>
                </svg>
            </div>
            </a>
            <a href={`mailto:?subject=I wanted you to see this site&amp;body=Check out this site https%3A//www.analyticsliv.com/blogs/${slug}`}
   title="Share by Email">
            <div className='absolute rounded-full p-2 bg-amber-400'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-white' preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363q.025-.187.075-.337l-7.05-4.1q-.425.375-.95.587Q6.575 15 6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.212q.525.213.95.588l7.05-4.1q-.05-.15-.075-.337Q15 5.175 15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.213q-.525-.212-.95-.587L8.9 11.3q.05.15.075.337Q9 11.825 9 12t-.025.362q-.025.188-.075.338l7.05 4.1q.425-.375.95-.588Q17.425 16 18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22Z"/>
                </svg>
            </div>
            </a>
           </div>
           
          <div className="  lg:w-2/3 mx-auto text-left p-8 my-4">
          <h1 className=" text-4xl font-bold tracking-wide text-slate-800">
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
            <div className="mb-4 flex justify-between mr-8">
                <div>
                <span className="bg-gray-100 px-2 py-0.5 font-medium text-sm rounded text-gray-400">GA4</span>
                <span className="bg-gray-100 px-2 py-0.5 font-medium text-sm rounded text-gray-400">Analytics</span>
                <span className="bg-gray-100 px-2 py-0.5 font-medium text-sm rounded text-gray-400">UA vs GA4</span>
                </div>
                <div className='flex space-x-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 fill-slate-800 hover:fill-blue-700' preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                 </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-slate-800 hover:fill-indigo-900' preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path  d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/>
                 </svg> 
                 <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-slate-800 hover:fill-green-700' preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                    <path d="M232 96a16 16 0 0 0-16-16h-32V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a7.9 7.9 0 0 0 4.6 7.2a8.1 8.1 0 0 0 3.4.8a7.7 7.7 0 0 0 5-1.8L72 154v30a16 16 0 0 0 16 16h93.6l37.4 30.2a7.8 7.8 0 0 0 8.4 1a7.9 7.9 0 0 0 4.6-7.2ZM66.6 137.8L40 159.2V48h128v88H71.6a7.7 7.7 0 0 0-5 1.8Zm122.8 48a7.7 7.7 0 0 0-5-1.8H88v-32h80a16 16 0 0 0 16-16V96h32v111.2Z"/>
                </svg> 
                 
                </div>
            </div>
             <img src="/static/big-image.png" className="w-screen"/>

             
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

        <div className="sticky top-0 lg:w-1/5 mx-auto space-y-4">
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

            
            </div>
        </div>
        <div className="lg:block space-y-6">
                <h3 className="text-slate-700 min-w-full pl-2 font-bold tracking-wider">Recent Posts</h3>
                <div className=" px-3 ">
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
</section></>)
};

export default slug;
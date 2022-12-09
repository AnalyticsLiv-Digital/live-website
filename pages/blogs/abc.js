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
                <table cellSpacing={0} style={{borderCollapse: 'collapse', border: 'none', tableLayout: 'fixed', width: '100%'}}>
          <tbody>
            <tr>
              <td style={{backgroundColor: '#9fbbe8', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderTop: '1px solid #000000', verticalAlign: 'top'}}>
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Features</strong></span></span></span></p>
              </td>
              <td style={{backgroundColor: '#9fbbe8', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderTop: '1px solid #000000', verticalAlign: 'top'}}>
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>GA4</strong></span></span></span></p>
              </td>
              <td style={{backgroundColor: '#9fbbe8', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderTop: '1px solid #000000', verticalAlign: 'top'}}>
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>UA</strong></span></span></span></p>
              </td>
            </tr>
            <tr>
              <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderTop: '1px solid #000000', verticalAlign: 'top'}}>
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Recognition of the logged-in user</strong></span></span></span></p>
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Identification of the total number of purchases has been done for a particular product</strong></span></span></span></p>
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Engagement rate &amp; Engaged session</strong></span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Bounce rate</strong></span></span></span></p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Convenience to utilize both, eCommerce and enhanced eCommerce tracking</strong></span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Cross domain tracking</strong></span></span></span></p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Number of scope availability</strong></span></span></span></p>
                <br />
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Features to track an automatic event</strong></span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Get safe data from measurement protocol</strong></span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>User id feature</strong></span></span></span></p>
                <br />
                <br />
                <br />
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Tracking of the first visit of users</strong></span></span></span></p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Data retention feature</strong></span></span></span></p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Reporting characteristics</strong></span></span></span></p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}><strong>Enhanced eCommerce reporting characteristics</strong></span></span></span></p>
              </td>
              <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderTop: '1px solid #000000', verticalAlign: 'top'}}>
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>By the ‘signed as user id’ dimension, we can quickly identify the logged-in user.</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>GA4 provides a by default metrics called ‘purchases’ in which we can quickly identify the number of purchases occurring for a particular product.</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>GA4 includes engagement sessions and engagement rate metrics.</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>Bounce rate calculation is different in GA4 than in UA.</span></span></span></p>
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>Here the bounce rate needs to be calculated manually (percentage of the session that was not the engaged session)</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>GA4 allows only enhanced eCommerce tracking</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>GA4 does not require any code adjustment from the gtm side. The implementation of cross-domain tracking can be easily set up in the GA4.</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>There are only 2 types of scopes available in GA4</span></span></span></p>
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>Eg: Event scope and user scope</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>Available</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>GA4 provides safe data against measurement protocol spam</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>GA4 has a feature to choose an option for the user identification in the same GA4 property eg: blended or observed</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>GA4 can track the first visit of a user automatically on the web and app</span></span></span></p>
                <br />
                <br />
                <br />
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>In the GA4, we can retain our user-level and event-level data from 2-14 months only</span></span></span></p>
                <br />
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>In the GA4 we have fewer predefined reports. If we want to create any new report for any type of specific analysis, then we can investigate the ‘explore’ tab, here we have the right to create any type of report (blank, free form, funnel exploration, and path exploration) as per the business requirement.</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>GA4 provides a deeper analysis of enhanced eCommerce.</span></span></span></p>
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>Eg: we have different types of item and promotion level dimensions and metrics with the help of it we will quickly create our new explorer report based on the business requirement.</span></span></span></p>
                <br />
                &nbsp;</td>
              <td style={{borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', borderTop: '1px solid #000000', verticalAlign: 'top'}}>
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>Not providing any dimension for the logged-in user identification.</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>UA does not have such a type of metric available.</span></span></span></p>
                <br />
                <br />
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>UA does not have such metrics available in the report.</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>Here the bounce rate is present by default and is calculated as the percentage of all sessions on your site in which users viewed only a single page and triggered only a single request to the Analytics server.</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>UA allows both eCommerce and enhanced eCommerce tracking</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>UA requires code adjustment from the gtm side and the implementation is quite more extensive than GA4.</span></span></span></p>
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>There are 4 types of scopes available in UA</span></span></span></p>
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>Eg: hit scope, session scope, user scope, and product scope</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>Not available</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>UA does not provide such type of feature</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>In UA we have to create another user id view for the user identification.</span></span></span></p>
                <br />
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>In UA, tracking of the first visit for the users cannot be done automatically in an app. We need to manually do this by coding also first visit feature was not available in the UA for the website.</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>In the UA we have many options for data retention like:14 months, 26 months, 38 months, and 50 months and Do not automatically expire</span></span></span></p>
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>UA has features to provide many types of pre-defined reports for the analysis(acquisition, behaviour, etc).</span></span></span></p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                &nbsp;
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>In the UA we have limited numbers of enhanced eCommerce reporting features and also have limitation in the dimensions and metrics due to which, deep analysis cannot be possible</span></span></span></p>
                <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: '"Bookman Old Style",serif'}}><span style={{color: '#000000'}}>Eg: Analysis of the product and promotion data simultaneously cannot be possible in UA</span></span></span></p>
              </td>
            </tr>
          </tbody>
        </table>
        <blockquote>
          <p>&nbsp;</p>
        </blockquote>
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
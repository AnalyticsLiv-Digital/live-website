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
  <ScrollProgress/>
    <section>
        
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
                <div>
        <p><span style={{fontSize: '26pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>E-commerce Funnel</span></span></span></p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>When we run an online business, customers visit the website to browse the merchandise and add it to their baskets. Now that they are still on the fence about making a purchase, we are interested in how many people are leaving their shopping carts empty. In order to comprehend user behaviour on websites and apps, funnel comes to our aid in this situation.</span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Four steps make up a typical ecommerce conversion funnel. The consumer makes decisions at each level based on how they perceive your brand, your product, and the competition. They are:</span></span></span></p>
        <ol>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Awareness</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Interest</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Desire</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Action</span></span></span></li>
        </ol>
        <p>&nbsp;</p>
        <p style={{marginLeft: '48px'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh6.googleusercontent.com/dHNPPAc8y_euMaeVpWKy5Y8EBeO0UX79b_FcdHVaOQFYDEn7oY2KUoj__0zRN-3WIhkD8jSuBQYbHa33EnJF4DXQL_wGWjHavUj8hfwI4XNKCDpujd9HJRbaakufZtYPtL1kBRtPiC89hkuXg6bCFOvyVMJefw2LbdLaTyjRXIkqZT4DBalDg7hxJ4dquQ" style={{height: '404px', width: '602px'}} /></span></span></span></p>
        <p>&nbsp;</p>
        <h1><span style={{fontSize: '20pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Types of Funnels in Analytics:</span></span></span></h1>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>When it comes to funnel visualisation in Analytics, there are different ways available to visualise the available data.</span></span></span></p>
        <p>&nbsp;</p>
        <ol>
          <li style={{listStyleType: 'decimal'}}>
            <h2><span style={{fontSize: '16pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Funnels In UA:</span></span></span></h2>
          </li>
        </ol>
        <p style={{marginLeft: '48px'}}><br />
          <span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>In UA, there are two types to visualise the data in the funnel Analytics.&nbsp;</span></span></span></p>
        <p>&nbsp;</p>
        <ul>
          <li style={{listStyleType: 'disc'}}>
            <h3 style={{marginLeft: '48px'}}><span style={{fontSize: '13.999999999999998pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#434343'}}>Funnel Visualization</span></span></span></h3>
          </li>
        </ul>
        <p style={{marginLeft: '96px'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>In your analytics property, you can navigate to Conversions&gt; Goals&gt; Funnel Visualization. We can create the goals depending on the business models of the various clients which can differ from one company to another.</span></span></span></p>
        <p style={{marginLeft: '96px'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh4.googleusercontent.com/NDTZ_0V0uYnCHrbREajPnNesFrKEk7Ij-vwluTr80SIBJTV_xvR_EzZA8AxMC6HXtntWarrPKBIeLcsa-7_hG2XG3Z8YnS4zHu6BVdCJgc0dGY9RoyLOnmURxJSC_clje_h-c6BjMBRr7HnSfdd6xMIr0Vk_1WOdHIjdhXGR6xLBS2vEFKYBISMUMV3cfA" style={{height: '335px', width: '602px'}} /></span></span></span></p>
        <ul>
          <li style={{listStyleType: 'disc'}}>
            <h3 style={{marginLeft: '48px'}}><span style={{fontSize: '13.999999999999998pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#434343'}}>Shopping Behavior &amp; Checkout Behavior Funnels</span></span></span></h3>
          </li>
        </ul>
        <p style={{marginLeft: '96px'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>In your Analytics property, you can navigate to Conversions&gt; Ecommerce&gt; Shopping Behavior/Checkout Behavior.&nbsp;</span></span></span></p>
        <p>&nbsp;</p>
        <p style={{marginLeft: '96px'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><strong>Shopping Behavior&nbsp;</strong></span></span></span></p>
        <p style={{marginLeft: '96px'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh3.googleusercontent.com/AIMzLnivuj3nnHgd6fxeQ6Tum2N9LDIgCG5Vn98-IC_wBUS81g3jjr8gZW2RkfP0x_0iCGNh8gvGpBc39wOje0rkVvDtgH8OPdqpWUd28BxcWAu3McxuLRaKIJhdcadFHVN0p6FxW2w6ydM_Yfs9SdLhHu0NI3eEQNXga6X4wwAxy1Uuwex6IWS5uPRJqw" style={{height: '211px', width: '602px'}} /></span></span></span></p>
        <p>&nbsp;</p>
        <p style={{marginLeft: '96px'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Here you can see the Shopping Behaviour Funnel where you can see the data mentioned below:</span></span></span></p>
        <ol>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>All Sessions: The number of sessions represented with the bars on the website. In the next step, it is showing the number of sessions with product view and so on.</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>In between each step, the grey arrows show the percentage of sessions that moved to the next step.</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>On each step, the red arrow shows the drop off activity in which users didn't move to the next step.</span></span></span></li>
        </ol>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><strong>Checkout Behavior:</strong></span></span></span></p>
        <p style={{marginLeft: '96px'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>This funnel shows you the steps of the checkout process which has been set to view the data in Analytics.</span></span></span><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}> </span></span></span></p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><strong><img src="https://lh5.googleusercontent.com/NIXSzfoc-8IrbQAcMp2SJsVWiyK2BJIeqGK_J3N2vjnajGZo1CLEaW_4qW9g6mFLsK64k-KYZakClfnD98IVy-3vVNIZAVGN9EPAB_X8ORfqr8cElcVXgByO2G9w2k6bm20fKBSOOrdlcXAv4UunXv0ms10MY0_ufsLhO3zup91YiWsJsYwnmenGBd85sQ" style={{height: '255px', width: '602px'}} /></strong></span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>UA automatically calculates the funnel phases for both reports based on your labelling. This makes sending the necessary e-commerce data types crucial. Even for a professional developer, it may take several iterations of creation and testing to ensure that the tags provide the correct data.</span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>However, there are limitations here in the both types of funnels are:</span></span></span></p>
        <ol>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>The shopping funnel &amp; checkout funnel are based on complete session data. That's why it is difficult to understand that 3.26% is the ratio of the number of sessions that finished the chosen objective to the total sessions that entered the funnel and not the number of users. For example, if we want to understand the number of users who have dropped out will not be able to make it through.</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Also, the funnels visulization in Goals can be created only on the page url/screenfor the pageviews and not on any custom clicks/events on the website which makes it a major drawback in UA(Whereas this feature is available if you have GA360 account). For example, If a user visits the same step twice—by returning from another step or refreshing the page/screen—the second session will appear as an exit to that step's page/screen since the Funnel Visualization report only displays one session for each step in the funnel. If a user goes from /url1 to /url2 and back,</span></span></span></li>
        </ol>
        <p style={{marginLeft: '48px'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>You would observe a session to /url1, a session to /url2, and an exit from /url2 to /url1 in the example.</span></span></span></p>
        <p style={{marginLeft: '48px'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh6.googleusercontent.com/_halOOlj9TN7-28i-AReJr19nk4t-goA8ct3SZaSXgeBoydq0kKr4D0gNrg9KIhL1EHTlV9TaEGGuTeNDRdzikG5b5Bm1Uc-2XetxvikkoMLlzGrGTMNsf_ba02fQ_0jaz90y-c_sCJYkCQ2L0SH89NqWjEwTU_rcKuYdMRAczcpezxBWRubqJ9x3G-3kw" style={{height: '316px', width: '602px'}} /></span></span></span></p>
        <p style={{marginLeft: '48px'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>As we can see in the screenshot up top, each funnel we establish in UA displays how many sessions it takes the user to complete it. Additionally, we can view the user's entrance and exit points at each stage. For example, from the /homepage, the user reaches the cart page before leaving the funnel to access other pages, such as the /signin page.</span></span></span></p>
        <ol start={3}>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>In addition to these, we won't be able to alter or add any more checkout or shopping funnel phases in UA because they are already predefined from the backend based on e-commerce steps. For example, If we want to add a step of product click on the product list pages then one must integrate utilising several methods or create a completely unique one in the dashboard or any other tool, but not in the UA.</span></span></span></li>
        </ol>
        <p style={{marginLeft: '48px'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>&nbsp;</span></span></span></p>
        <h2><span style={{fontSize: '16pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Funnels In GA4:</span></span></span></h2>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Now, in GA4 everything is event based(pageviews (i.e., URL visits), session starts, video plays, etc.) and Google has streamlined reporting to make it easier for you to track the user experience from beginning to end from platform to platform as well as swiftly acquire marketing insights linked to your chosen funnel stage.</span></span></span></p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>The funnel exploration feature of GA4 gives you a comprehensive picture of how customers interact with your company throughout the customer lifecycle, from acquisition and conversion through monetization and retention.</span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>The funnel exploration helps identify the path users take to complete a desired journey which could lead to purchase or form submission on the website. This indicates that not all website visitors proceed through the processes outlined in your funnel. There will inevitably be a drop off to some extent.</span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Because GA4 works for both websites and mobile apps, you may build bespoke funnels based on events or page urls/screens, and there are no restrictions on the path or events that can be used to create a desired funnel. You can navigate to the ‘Explore’ section and there will be various option available to choose and create the custom reports.</span></span></span></p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh3.googleusercontent.com/CZSFrVDivjYXDd3Dqk_kDluFMD8e1b8gjbU4LntNkiUv9I8Zdiwq8Hf2BgEKUMX5pHm6wQWJBzVMvzwlyXetUCp38stRPMpo_fzSyOtMJ54HgNL6Itnd46jG4XZUPhvh4LawHujFEu5T_RWbkhihQq208v3ytLMV5aLxJ5kVKwg3N8U8TPeaPaj1-0a_9w" style={{height: '228px', width: '602px'}} /></span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>One of the options available is, ‘Funnel exploration’ or if you are already in one of the custom report you will get a dropdown to choose the reports from:</span></span></span></p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh3.googleusercontent.com/yG0tZI1KBauZQi_Ztt1mt-b0jsmPGKbX4IYBiou48Z3qmLuH83h38MSBUFvPbj_iwkn6_oLJowCOHcCyJwricWGShjn5pLfwer5y1pnnybyHv7qh9tE6RtJSsrd9niHM0eVUE9fPgAHG9mTqB1Uv4ldI_yRvFxINdQ0m_DEKtteh8YNDNBt7gAI4d05LBA" style={{height: '347px', width: '602px'}} /></span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Now we will check the funnel by adding each feature available in GA4 one by one to understand the data in detail and how we can use the features available in the reporting to make better decisions.</span></span></span></p>
        <p>&nbsp;</p>
        <h3><span style={{fontSize: '13.999999999999998pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#434343'}}>Basic Funnel:</span></span></span></h3>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Now let’s take a look at a funnel created in GA4 based on the checkout process for e-commerce so that would be relatively easy to understand.&nbsp;</span></span></span></p>
        <p>&nbsp;</p>
        <h4><span style={{fontSize: '12pt'}}><span style={{fontFamily: 'Arial'}}><span style={{color: '#666666'}}>Checkout Behavior Funnel in GA4</span></span></span></h4>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Let’s consider below steps which are the events triggered at checkout steps for any website in GA4:</span></span></span></p>
        <ol>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>add_to_cart</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>begin_checkout</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>add_shipping_info</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>add_payment_info</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>purchase</span></span></span></li>
        </ol>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>We can create a funnel in GA4 of upto 10 steps, if you have more than that we can help you out creating the custom funnel in Data Studio.</span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Now as we all know that these are all event names set by GA4 to pass based on the website flow to get the checkout process. Below we have created a funnel for steps mentioned above:</span></span></span></p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh3.googleusercontent.com/nGagQ2ruR3qIeVK1n9II3-n6xfIZ3v6SK12ScLvTCrtT0U4lWtOIh27mjgiDU_L-aut94hCDwfZLBAL2i4DAaQ9DCZSkQ8UJwOCWkzkce7tZiO8GXUjPapMhjBqSZ8AOv9OnCotAEo1Pu8JppK3BF_5s120cUVjeSfKqvImW_O3KHIITbrR2cwmjStWE9w" style={{height: '360px', width: '602px'}} /></span></span></span></p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Let us explain you the funnel shown above in detail and what it is showing:</span></span></span></p>
        <ol>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Here the data shown is of the Active Users, are users who have engaged on your site over a certain time period. Google Analytics 4 looks at active users in terms of one day, seven days, and 30 days.count shown in bars on the website or app who have completed the journey from add to cart to final purchase. For example: 2.9K of Active users were total users count and all the percentage shown are based on the active users who have navigated to the next step or have dropped off from the funnel.</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>The percentage shown above the bar is the percentage of total users who have further moved to the next step in the journey. For example, 37.8% of users have proceeded to the begin_checkout step.</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Like in UA also we have similar data, here in GA4 the red arrow showing the number of Active Users and percentage who have dropped off from the first step of the journey which has been set in the funnel and below, we can see the table for the Completion rate, Abandonments and Abandonment rate of each step separately. For example, 1.8K Active Users i.e. 62.2% of total(2889) have dropped off from the first step. For 3rd step of adding shipping information, the completion rate is 51.1% and Abandonment rate is 48.9%&nbsp;</span></span></span></li>
        </ol>
        <p>&nbsp;</p>
        <h4><span style={{fontSize: '12pt'}}><span style={{fontFamily: 'Arial'}}><span style={{color: '#666666'}}>Shopping Behavior Funnel in GA4</span></span></span></h4>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Arial'}}><span style={{color: '#000000'}}>Here, we have considered funnel based events mentioned below for each step:</span></span></span></p>
        <ol>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Arial'}}><span style={{color: '#000000'}}>session_start</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Arial'}}><span style={{color: '#000000'}}>view_item</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Arial'}}><span style={{color: '#000000'}}>add_to_cart</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Arial'}}><span style={{color: '#000000'}}>begin_checkout</span></span></span></li>
          <li style={{listStyleType: 'decimal'}}><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Arial'}}><span style={{color: '#000000'}}>purchase</span></span></span></li>
        </ol>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh4.googleusercontent.com/6PAVCpC9cdhbru6gviGqRo9q_HjogILwdO6x_J9Hbm51_el35mUN-cXyD1DOmEGYL0KKgqEzXNCGz5qkq-F2JTdYIrqbzxMcB09yOhdKZnFuyPkTCLsQWaj1eWpbgzumQ0W8-uSGuCdxy0aHtbBzfR3V-RhtL77VWPBw5vTSusHKDNHKxLEjSLDqgK7sOA" style={{height: '377px', width: '602px'}} /></span></span></span></p>
        <h3><span style={{fontSize: '13.999999999999998pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#434343'}}>Benefits of GA4 Funnel</span></span></span></h3>
        <h3><span style={{fontSize: '13.999999999999998pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#434343'}}>Funnel with Segment</span></span></span></h3>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Here in GA4, we have functionality of adding custom segments based on users and events data which is being collected in the GA4 property. We can roll out a different blog on custom segment creation.</span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh6.googleusercontent.com/e9DIU6J6Z-BvTGGMRijMuWZ1SWC3qUdwIwNwZdDn4JClIExdpoGDQRjiS9vpYd-VL33tnImrGHvYZtdZq0F_fQmAshLyRZmAgiIl5k4dxxqPzyPrgXiMNeTKg-F-5kyyM9WSK-BtxwIV-yV8cp75kJzh9sEQbTJSYLomQIoeX_z_Rs8ZNgsFYKf6rjYj9Q" style={{height: '301px', width: '602px'}} /></span></span></span></p>
        <p><br />
          &nbsp;</p>
        <h3><span style={{fontSize: '13.999999999999998pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#434343'}}>Funnel Breakdown with Dimensions</span></span></span></h3>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Now that we are aware of how many users there are at each stage, we want to know which types of devices or channels these users are using. Consequently, we can add the dimension needed to fully comprehend each user base and we have breakdown the funnel based on the First User Default Channel Grouping and it will be applied to each and every step in the funnel. Also, the data for completion rate and abandonment rate will be divided based on the channels.&nbsp;</span></span></span></p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh5.googleusercontent.com/DI2vIF0Jzu4yf4tVuZTrVmFAF03i9kQHNsjJ9s9-6nE20Omqy9yWrkyNWzu6fRZW2sLng7MpkqoaCEFOPKAQEMaSpN9Ai2fSdyUr9nxIe7PzL-M5TnpAuOHIqht0c9NlbkXpl-Yn43xMWz9zx4w8dh-bVLyLgXLOTv8CjI0vZ4q9pZNi3-UIjWobNpZnPg" style={{height: '299px', width: '602px'}} /></span></span></span></p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>For example: the total users were 850 on the 3rd step of add shipping information, out of it 405 were from Paid Search, 233 from Organic search and so on.</span></span></span></p>
        <h3><span style={{fontSize: '13.999999999999998pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#434343'}}>Funnel with Elapsed Time:</span></span></span></h3>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh6.googleusercontent.com/k12L9TeExuJ_ItQeOaEh--AGyv0bbQqjj3PlaN3gaPeaKQtDDtmq_5q2So11uEgSwLoKz0JBsan82exP5q246rqne8iLAqvUzcZs_jq_VrBgDat7UtwfgovK1tMANTNGVSHV2vXDUY3f-IAkO5YXHHuz820FqjcXZkb8KeiVQnddo2-4I7YBfmDBo7GeoA" style={{height: '277px', width: '602px'}} /></span></span></span></p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>The funnel with elapsed time, you can notice the average time which has elapsed based on the user engagement duration between each step of the funnel. For example: 6h 23 m is the average time taken by the users to move to the next step i.e. Begin checkout.</span></span></span></p>
        <p>&nbsp;</p>
        <h3><span style={{fontSize: '13.999999999999998pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#434343'}}>Funnel with Next Action:</span></span></span></h3>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Finally, you can see the top five actions people do after finishing a certain phase using the new funnel exploration tool. Select "Event name" as the dimension and then select "Next Action." The top five actions that users do after a certain funnel phase are then displayed to you by GA4 when you click on that step.</span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh6.googleusercontent.com/ckrRL9Aq_sfoyg8Ig248yWfBgP7SRq34NoEi6O-kiC3PmyySlXE5DOXfwS4A-9y7XB-TbY7DX2y36lCzh3f8Ygq_fReiwggms5UvP1ixkWJ0gDsSZbODO5D45gZFH8rFjHzUXcN0aGwz8niZK7xtan7DJAA-zXWQO6Q27ie33BvZhW-oey_jZ2zG5EH64A" style={{height: '329px', width: '602px'}} /></span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>For example: as you can observe in the funnel, after completing the add to cart event users are likely to perform the&nbsp; events shown on the pop-up of step-1 in the funnel like pageview, header clicks and then again add to cart.</span></span></span></p>
        <h3><span style={{fontSize: '13.999999999999998pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#434343'}}>Funnel with Filters:</span></span></span></h3>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Arial'}}><span style={{color: '#000000'}}>Now in the funnel if you would like to view the data for specific medium the data is coming from like the Organic users on the website, then we can add a filter with the value to see the required changes in the data.</span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Arial'}}><span style={{color: '#000000'}}><img src="https://lh6.googleusercontent.com/63Qsn3lzz4aC1ABu0I9QAkVAsicgdgJyTrDioPYkyOKVT9FUDxqd2z_zEX4ggZz1kBAViSIQNIWBq__6y1zQpo_DmImKFZYjjjleks_8wn-4uNv_N6O5TMoPUyGM9sbihZyE0cbEvfNdDIzhc-wzpRy34cRk7HNMLRxEeG-N2yjL0NeJSPGEir6G2LGlzQ" style={{height: '283px', width: '602px'}} /></span></span></span></p>
        <p>&nbsp;</p>
        <h2><span style={{fontSize: '16pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Conclusion:</span></span></span></h2>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>We can see that the GA4 comes with a variety of new features in the funnel which can be used in a better way to meet the business goals.</span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>To take advantage of GA4's features like make Google Analytics 4 your cross-platform Analytics solution, cross domain tracking and many more.</span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}><img src="https://lh3.googleusercontent.com/RVF2fCb2ALRZstmw8IE5jdhnWwu8U1XC-efQSPi7pWyAtagImqVITfYcnEMCTHPEqlY2FuTA-jp1cMVJjUNo9XSDoG7-1eJTUlAoJJTGDP_-ub3hHvJ-PDd3feG3vxtbR8uDbMFAr-pMvClI_dzMrgF_z1x_LNjgd18jrG3T-W-yQ-ezYgMnzdRPUh2TGA" style={{height: '269px', width: '602px'}} /></span></span></span></p>
        <p>&nbsp;</p>
        <p><span style={{fontSize: '11pt'}}><span style={{fontFamily: 'Roboto,sans-serif'}}><span style={{color: '#000000'}}>Migrate now to GA4, as Google has stated that it will terminate its Universal Analytics (UA) platform and switch to a completely redesigned GA4 platform starting in June 2023 to satisfy all of your tracking requirements. In case you haven't migrated, reach out to us and we will help you with the easy migration process.</span></span></span></p>
        <p>&nbsp;</p>
      </div>
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
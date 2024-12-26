import React from 'react'

const HomeCaseStudies = () => {
    return (
        <section className="font-lato max-md:pb-7 md:pt-5 lg:pt-10 md:pb-7 lg:pb-14 px-4 md:px-16">
            <div className="flex max-md:flex-col-reverse justify-between py-10 items-center overflow-hidden relative">
                <div>
                    <button className="mainbutn max-md:mt-5">Read More Case Studies</button>
                </div>
                <div className="absolute max-md:hidden lg:top-[20%] md:top-[80px] 2xl:top-[-10px] left-[18%] lg:left-[8%] 2xl:left-[7%] z-10 w-full">
                    <img src="/Arrow (1).png" alt="arrow" className="w-[40%] 2xl:w-[45%]" />
                </div>
                <div className="flex flex-col md:w-[40%] lg:w-[50%] 2xl:w-[45%] gap-6 justify-center md:justify-start items-center md:items-start">
                    <h2 className="text-[#100F1B] text-2xl lg:text-3xl font-bold text-center md:text-left">Read Our Case Studies</h2>
                    <p className="text-[#373642] text-sm lg:text-lg font-normal text-center md:text-left">
                        Explore our Remarkable Achievements for insightful perspectives and expert knowledge on a topic that you can consultated with us.                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <a href='case-studies/elevate-the-brand-reach-with-discovery-campaigns' className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative">
                    <div className='flex flex-col justify-evenly h-full'>
                        <div className="absolute w-[100px] text-center top-4 2xl:top-6 left-4 2xl:left-6 bg-[#A2EC4E99] text-white font-semibold px-3 py-1 rounded-tl-2xl 2xl:rounded-tl-[20px] rounded-br-md text-sm">Marketing</div>
                        <img
                            src="/Case_study_10_Brand_Reach_Discovery_Campaign 1.png"
                            alt="Brand_Reach_Discovery_Campaign"
                            className="rounded-md mb-4 w-full"
                        />
                        <h3
                            className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            Elevate the brand reach with Discovery Campaigns 17% higher CTR compared to Pmax
                        </h3>
                        <p
                            className="text-sm text-[#373642] mb-4"
                            style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                WebkitLineClamp: 3,
                            }}
                        >
                            In the shopping season of black Friday and cyber Monday, our objective was to increase the reach of brand
                            and drive huge amount of relevant traffic to the website by expanding the audience size in top of the funnel
                            with the help of discovery campaigns
                        </p>
                        <div className="flex justify-between items-center text-sm text-[#0066cc]">
                            <span className="text-[#6B7280]">25th Nov 2024</span>
                            <button className="text-[#08A4F7] text-base font-medium hover:underline">Read Full</button>
                        </div>
                    </div>
                </a>
                <a href='/case-studies/ga4-enhanced-ecommerce-implementation-using-gtm-and-shopify-integration' className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative">
                    <div className='flex flex-col justify-evenly h-full'>

                        <div className="absolute w-[100px] text-center top-4 2xl:top-6 left-4 2xl:left-6 bg-[#EC954E99] text-white font-semibold px-3 py-1 rounded-tl-[20px] 2xl:rounded-tl-3xl rounded-br-md text-sm">Analytics</div>
                        <img
                            src="/shopify.png"
                            alt="Gshopify"
                            className="rounded-md mb-4 w-full"
                        />
                        <h3
                            className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            GA4 Enhanced Ecommerce Implementation Using GTM and Shopify Integration
                        </h3>
                        <p
                            className="text-sm text-[#373642] mb-4"
                            style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                WebkitLineClamp: 3,
                            }}
                        >
                            A Shopify-powered e-commerce business in the East was facing challenges with Universal Analytics (UA) in
                            capturing purchase data reliably. The client was unable to track data for resale products put on the post-purchase
                            page and upsell products bought through third-party interfaces.
                        </p>
                        <div className="flex justify-between items-center text-sm text-[#0066cc]">
                            <span className="text-[#6B7280]">06th Aug 2024</span>
                            <button className="text-[#08A4F7] text-base font-medium hover:underline">Read Full</button>
                        </div>
                    </div>
                </a>
                <a href='/case-studies/180-percent-increase-in-lead-volume-and-60-percent-reduction-cpl' className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative">
                    <div className='flex flex-col justify-evenly h-full'>

                        <div className="absolute w-[100px] text-center top-4 2xl:top-6 left-4 2xl:left-6 bg-[#A2EC4E99] text-white font-semibold px-3 py-1 rounded-tl-2xl 2xl:rounded-tl-[20px] rounded-br-md text-sm">Marketing</div>
                        <img
                            src="/increase_in_leadvolume.png"
                            alt="increase_in_leadvolume"
                            className="rounded-md mb-4 w-full"
                        />
                        <h3
                            className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            Maximizing Lead Generation: 180% Increase in Lead Volume and 60% Reduction in CPL
                        </h3>
                        <p
                            className="text-sm text-[#373642] mb-4"
                            style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                WebkitLineClamp: 3,
                            }}
                        >
                            We Sort It, a New Zealand-based cleaning and lawn care service provider, faced challenges with low lead volume
                            and high costs per lead. Through advanced audience targeting and leveraging Facebook's Advantage Detailed Targeting
                            feature, we achieved a 180% increase in lead volume and a 60% reduction in cost per lead. By aligning campaign strategies
                            with the client’s goals, we ensured improved performance, cost efficiency, and high-quality leads.
                        </p>
                        <div className="flex justify-between items-center text-sm text-[#0066cc]">
                            <span className="text-[#6B7280]">9th Aug 2024</span>
                            <button className="text-[#08A4F7] text-base font-medium hover:underline">Read Full</button>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default HomeCaseStudies

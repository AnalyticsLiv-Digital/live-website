import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const content = [
        {
            question: "Why should I choose AnalyticsLiv for my analytics and marketing needs?",
            answer:
                "AnalyticsLiv combines technical expertise in analytics and data-driven marketing with a proven track record of delivering measurable results. Our customized solutions are designed to fit your specific business goals and drive ROI.",
        },
        {
            question: "Can AnalyticsLiv handle both analytics and digital marketing services?",
            answer:
                "Yes, we offer end-to-end solutions. From advanced analytics implementations like GA4 to media services such as PPC management, programmatic advertising, and campaign optimization using tools like DV360, we ensure seamless integration and performance.",
        },
        {
            question: "What industries do you specialize in?",
            answer:
                "We have extensive experience across multiple industries, including e-commerce, media, publishing, retail, and more. Our solutions are tailored to meet the unique needs of each sector.",
        },
        {
            question: "How soon can we see results from your services?",
            answer:
                "The timeline depends on the service. For instance, GA4 implementation and dashboard setup can be completed within a few weeks, while marketing campaigns may show results within the first month of optimization. We’ll set realistic timelines during the consultation.",
        },
        {
            question: "Do you provide case studies or examples of your work?",
            answer:
                "Absolutely! We’re happy to share relevant case studies and success stories that highlight how we’ve helped businesses like yours achieve measurable success.",
        },
        {
            question: "Can you integrate with my existing tools and platforms?",
            answer:
                "Yes, we specialize in integrating analytics and marketing tools with your existing tech stack, whether it's CRM systems, e-commerce platforms, or ad platforms.",
        },
        {
            question: "What is your process for setting up a PPC or programmatic campaign?",
            answer:
                "Our process includes: Understanding your business goals and target audience. Conducting thorough keyword and audience research. Setting up and managing campaigns on platforms like Google Ads and DV360.  Continuous monitoring and optimization for maximum ROI.",
        },
        {
            question: "What kind of support does AnalyticsLiv provide after implementation?",
            answer:
                "We offer ongoing support, including performance tracking, troubleshooting, campaign optimizations, and periodic strategy reviews to ensure sustained success.",
        },
        {
            question: "How do I schedule a demo or consultation?",
            answer:
                "Simply fill out the form on our website or contact us directly at [insert contact info]. Our team will get back to you within 24 hours to set up a call or meeting.",
        },
        {
            question: "How does AnalyticsLiv measure success?",
            answer:
                "We measure success based on KPIs tailored to your business goals, such as revenue growth, cost-per-acquisition (CPA), return on ad spend (ROAS), and customer retention rates. Regular reporting ensures transparency and accountability.",
        },
    ];

    return (
        <section className="flex mb-14 md:mb-3 flex-col md:flex-row px-4 py-5 md:py-8 md:px-14 lg:px-16 md:pb-12 xl:pt-5 gap-5 lg:gap-8">
            <div className="md:w-1/3 flex flex-col md:gap-7 justify-center max-md:text-center sm:justify-start md:pt-7">
                <h3 className="text-3xl max-md:flex max-sm:flex-col max-md:justify-center max-md:items-center max-md:gap-2.5 lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800">
                    Frequently Asked <div className="text-[#08A4F7] lg:pt-3 xl:pt-4 2xl:pt-5">Questions</div>
                </h3>
                <p className="mt-4 max-md:mb-5 text-base xl:text-lg text-gray-600 leading-snug">
                    Discover key FAQs designed to simplify your marketing and analytics approach, helping you achieve better results with actionable guidance.
                </p>
            </div>

            <div className="md:w-2/3 max-h-[400px] overflow-y-auto custom-scrollbar py-5 pr-3 lg:pr-5">

                <div className="flex flex-col gap-5">
                    {content?.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl px-4 lg:px-12 py-4 lg:py-5 cursor-pointer ${activeIndex === index ? 'text-white bg-[#08A4F7]' : 'text-[#232A42]'
                                }`}
                            style={{
                                boxShadow: activeIndex === index ? 'none' : '18px 15px 35px 0px #00000017',
                            }}
                            onClick={() => handleToggle(index)}
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <div className="text-[13px] sm:text-base font-semibold">{item?.question}</div>

                                    {activeIndex === index && (
                                        <div className="text-[10px] sm:text-xs pt-3 font-normal w-[95%]">{item?.answer}</div>
                                    )}
                                </div>
                                <img
                                    src={`${activeIndex === index ? 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector_up.png' : 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector_down.png'
                                        }`}
                                    alt={activeIndex === index ? 'Collapse' : 'Expand'}
                                    // onClick={() => handleToggle(index)}
                                    className="cursor-pointer w-4"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

};

export default FAQ;












// import React, { useState } from 'react';

// const FAQ = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const handleToggle = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     const content = [
//         {
//             question: "Why should I choose AnalyticsLiv for my analytics and marketing needs?",
//             answer:
//                 "AnalyticsLiv combines technical expertise in analytics and data-driven marketing with a proven track record of delivering measurable results. Our customized solutions are designed to fit your specific business goals and drive ROI.",
//         },
//         {
//             question: "Can AnalyticsLiv handle both analytics and digital marketing services?",
//             answer:
//                 "Yes, we offer end-to-end solutions. From advanced analytics implementations like GA4 to media services such as PPC management, programmatic advertising, and campaign optimization using tools like DV360, we ensure seamless integration and performance.",
//         },
//         {
//             question: "What industries do you specialize in?",
//             answer:
//                 "We have extensive experience across multiple industries, including e-commerce, media, publishing, retail, and more. Our solutions are tailored to meet the unique needs of each sector.",
//         },
//         {
//             question: "How soon can we see results from your services?",
//             answer:
//                 "The timeline depends on the service. For instance, GA4 implementation and dashboard setup can be completed within a few weeks, while marketing campaigns may show results within the first month of optimization. We’ll set realistic timelines during the consultation.",
//         },
//         {
//             question: "Do you provide case studies or examples of your work?",
//             answer:
//                 "Absolutely! We’re happy to share relevant case studies and success stories that highlight how we’ve helped businesses like yours achieve measurable success.",
//         },
//         {
//             question: "Can you integrate with my existing tools and platforms?",
//             answer:
//                 "Yes, we specialize in integrating analytics and marketing tools with your existing tech stack, whether it's CRM systems, e-commerce platforms, or ad platforms.",
//         },
//         {
//             question: "What is your process for setting up a PPC or programmatic campaign?",
//             answer:
//                 "Our process includes: Understanding your business goals and target audience. Conducting thorough keyword and audience research. Setting up and managing campaigns on platforms like Google Ads and DV360.  Continuous monitoring and optimization for maximum ROI.",
//         },
//         {
//             question: "What kind of support does AnalyticsLiv provide after implementation?",
//             answer:
//                 "We offer ongoing support, including performance tracking, troubleshooting, campaign optimizations, and periodic strategy reviews to ensure sustained success.",
//         },
//         {
//             question: "How do I schedule a demo or consultation?",
//             answer:
//                 "Simply fill out the form on our website or contact us directly at [insert contact info]. Our team will get back to you within 24 hours to set up a call or meeting.",
//         },
//         {
//             question: "How does AnalyticsLiv measure success?",
//             answer:
//                 "We measure success based on KPIs tailored to your business goals, such as revenue growth, cost-per-acquisition (CPA), return on ad spend (ROAS), and customer retention rates. Regular reporting ensures transparency and accountability.",
//         },
//     ];

//     return (
//         <section className="pt-4 px-4 md:px-10 xl:px-16 pb-16">
//             <div className="text-[#232A42] text-2xl md:text-3xl font-bold text-center">
//                 Frequently Asked <span className="text-[#08A4F7]">Questions</span>
//             </div>
//             <div className="text-[#525252] py-10 px-4 md:px-20 text-sm md:text-base font-medium text-center">
//                 Comprehensive FAQs to Elevate Your Marketing & Analytics Strategy.
//             </div>

// <div className="flex flex-col gap-5">
//     {content?.map((item, index) => (
//         <div
//             key={index}
//             className={`rounded-2xl px-4 md:px-12 py-4 md:py-5 cursor-pointer ${activeIndex === index ? 'text-white bg-[#08A4F7]' : 'text-[#232A42]'
//                 }`}
//             style={{
//                 boxShadow: activeIndex === index ? 'none' : '18px 15px 35px 0px #00000017',
//             }}
//             onClick={() => handleToggle(index)}
//         >
//             <div className="flex items-center justify-between gap-3">
//                 <div>
//                     <div className="text-[13px] sm:text-base font-semibold">{item?.question}</div>

//                     {activeIndex === index && (
//                         <div className="text-[10px] sm:text-xs pt-3 font-normal w-[95%]">{item?.answer}</div>
//                     )}
//                 </div>
//                 <img
//                     src={`${activeIndex === index ? 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector_up.png' : 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector_down.png'
//                         }`}
//                     alt={activeIndex === index ? 'Collapse' : 'Expand'}
//                     // onClick={() => handleToggle(index)}
//                     className="cursor-pointer max-sm:w-5"
//                 />
//             </div>
//         </div>
//     ))}
// </div>
//         </section>
//     );
// };

// export default FAQ;
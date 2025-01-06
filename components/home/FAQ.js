import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const content = [
        {
            question: "Do you specialize in both residential and commercial landscaping?",
            answer:
                "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
        },
        {
            question: "Do you provide sustainable and eco-friendly landscaping options?",
            answer:
                "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
        },
        {
            question: "How do I request a consultation or estimate for my landscaping project?",
            answer:
                "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
        },
        {
            question: "What factors influence the cost of a landscaping project?",
            answer:
                "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
        },
        {
            question: "How often should I schedule landscape maintenance services?",
            answer:
                "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
        },
    ];

    return (
        <section className="font-lato pt-4 px-4 md:px-10 xl:px-16 pb-16">
            <div className="text-[#232A42] text-2xl md:text-3xl font-bold text-center">
                Frequently Asked <span className="text-[#08A4F7]">Questions</span>
            </div>
            <div className="text-[#525252] py-10 px-4 md:px-20 text-sm md:text-base font-medium text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas.
                Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis.
            </div>

            <div className="flex flex-col gap-5">
                {content?.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl px-4 md:px-12 py-4 md:py-5 cursor-pointer ${activeIndex === index ? 'text-white bg-[#08A4F7]' : 'text-[#232A42]'
                            }`}
                        style={{
                            boxShadow: activeIndex === index ? 'none' : '18px 15px 35px 0px #00000017',
                        }}
                        onClick={() => handleToggle(index)}
                    >
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <div className="text-[15px] sm:text-lg font-semibold">{item?.question}</div>

                                {activeIndex === index && (
                                    <div className="text-[12px] sm:text-base pt-3 font-normal w-[95%]">{item?.answer}</div>
                                )}
                            </div>
                            <img
                                src={`${activeIndex === index ? 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector_up.png' : 'https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector_down.png'
                                    }`}
                                alt={activeIndex === index ? 'Collapse' : 'Expand'}
                                // onClick={() => handleToggle(index)}
                                className="cursor-pointer max-sm:w-5"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import MetaSchemaOg from "../../components/MetaSchemaOg";

const ecommerce_marketing = () => {
  const [activetab, setActivetab] = useState("1");
  return (
    <>
      <MetaSchemaOg
        url="https://analyticsliv.com/services/ecommerce-marketing"
        title="Best Ecommerce Marketing Services in India | AnalyticsLiv"
        description="Boost your online sales with AnalyticsLiv. We offer expert ecommerce marketing services and digital marketing strategies for ecommerce businesses to drive growth and maximize ROI."
        twitterTitle="Best Ecommerce Marketing Services in India | AnalyticsLiv"
        twitterDescription="Boost your online sales with AnalyticsLiv. We offer expert ecommerce marketing services and digital marketing strategies for ecommerce businesses to drive growth and maximize ROI."
      />

      <section>
        <div className="relative md:px-24 px-4">
          <div className="-z-10 absolute left-0">
            <img src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/Bottom_3.png" />
          </div>
          <div className="z-0 md:flex justify-between md:py-12 py-4">
            <div className="space-y-4 w-full md:w-2/3 md:pr-16">
              <h1 className="text-4xl md:text-6xl font-['Poppins'] font-bold text-gray-600 pt-4">
                ECOMMERCE MARKETING
              </h1>
              <h3 className="tracking-widest uppercase font-semibold text-xl text-stone-500">
                Maximize Sales and Accelerate Growth with Performance Max,
                Google Ads, and Facebook Ads
              </h3>
              <p className="md:pt-6 text-gray-700 font-[Poppins]">
                Are you an ecommerce business ready to unleash the full
                potential of your online store? Our Ecommerce Marketing
                services, powered by Performance Max, Google Ads, and Facebook
                Ads, will empower your brand to reach, engage, and convert
                customers like never before. With our expertise in these leading
                ad platforms, we'll drive targeted traffic, boost conversions,
                and maximize your online sales.
              </p>
              <Link href="/contact?id=ecommerce-marketing">
                <button className="butn mt-6">
                  LET'S WORK TOGETHER{" "}
                  {/* <img
                    className="inline ml-2 hover:animate-pulse"
                    src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/arrow_1.png"
                  /> */}
                </button>
              </Link>
            </div>
            <div className="py-6 md:py-0">
              <img src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/rafiki.png" alt="digital marketing for ecommerce business" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#282833] webomphen relative overflow-hidden font-gilroy">
        <div className="inrwebomphen relative">
          <div className="relative z-20 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-0">
            <div className="flex items-center justify-start pb-7 md:pb-0">
              <h3 className="text-[#efefef] text-[28px] font-semibold leading-[1.5em] not-italic pb-5 md:pb-0">
                WHAT WE OFFER
              </h3>
            </div>

            <div className="lg:flex lg:flex-nowrap flex-wrap items-center hidden webbox rounded-xl">
              <div className="text-black xl:w-[35%] lg:w-[35%] w-full mt-[11px]">
                <div className="p-8 pl-[25px] -mr-[30px] rounded-l-[10px] xl:w-[400px] xl:ml-auto">
                  <div
                    onClick={() => setActivetab("1")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "1" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/static/public/Campaign%20Strategy%20and%20Setup%20white.png"
                        alt="Campaign Strategy and Planning"
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Strategic Campaign Planning:</p>
                  </div>
                  <div
                    onClick={() => setActivetab("2")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "2" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/static/public/Audience%20Targeting%20white.png"
                        alt="Performance Max Campaigns"
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Performance Max Campaigns:</p>
                  </div>
                  <div
                    onClick={() => setActivetab("3")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "3" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/static/public/Ad%20Format%20Optimization%20white.png"
                        alt="Targeted Audience Reach"
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Targeted Audience Reach:</p>
                  </div>
                  <div
                    onClick={() => setActivetab("4")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "4" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="/Real-Time Bidding white.png"
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Compelling Ad Creation:</p>
                  </div>
                  <div
                    onClick={() => setActivetab("5")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "5" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="/Continuous Campaign Management & Optimization white.png"
                        alt=""
                        className="h-10 w-[56px]"
                      />
                    </div>
                    <p>Optimized Landing Pages:</p>
                  </div>
                  <div
                    onClick={() => setActivetab("6")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "6" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/static/public/Campaign%20Strategy%20and%20Setup%20white.png"
                        alt="Campaign Strategy and Planning"
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Performance Tracking and Analytics:</p>
                  </div>
                  <div
                    onClick={() => setActivetab("7")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "7" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/static/public/Ad%20Format%20Optimization%20white.png"
                        alt="Remarketing and Dynamic Ads"
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Remarketing and Dynamic Ads:</p>
                  </div>
                  <div
                    onClick={() => setActivetab("8")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "8" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="/Continuous Campaign Management & Optimization white.png"
                        alt=""
                        className="h-10 w-[56px]"
                      />
                    </div>
                    <p>Continuous Optimization:</p>
                  </div>
                </div>
              </div>

              <div className="xl:w-[60%] lg:w-[65%] w-full h-[500px] flex items-start justify-center rounded-[15px] pt-5 mb-[65px]">
                <div
                  id="tab1"
                  className={`${activetab == 1 && "block"} ${activetab != 1 && "hidden"
                    } relative py-[30px] px-[50px] text-base font-medium leading-8`}
                >
                  <div className="relative">
                    <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                      Strategic Campaign Planning:
                    </p>
                    <p className="text-[#ffffff] mb-[10px]">
                      Our team of ecommerce marketing specialists will
                      collaborate closely with you to understand your unique
                      business goals, target audience, and competitive
                      landscape. We'll develop a comprehensive campaign strategy
                      that aligns with your objectives and ensures maximum
                      impact across Performance Max, Google Ads, and Facebook
                      Ads.
                    </p>

                    <div className="">
                      <Link href="/contact?id=ecommerce-marketing">
                        <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  id="tab2"
                  className={`${activetab == 2 && "block"} ${activetab != 2 && "hidden"
                    } relative py-[30px] px-[50px] text-base font-medium leading-8`}
                >
                  <div className="relative pl-1">
                    <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                      Performance Max Campaigns:
                    </p>
                    <p className="text-[#ffffff]">
                      With Performance Max, we can supercharge your ecommerce
                      marketing efforts. This cutting-edge ad product harnesses
                      the power of Google's AI technology to reach potential
                      customers across multiple platforms and networks. We'll
                      leverage Performance Max to deliver highly personalized
                      and dynamic ads that drive engagement and conversions.
                    </p>
                    <div className="">
                      <Link href="/contact?id=ecommerce-marketing">
                        <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  id="tab3"
                  className={`${activetab == 3 && "block"} ${activetab != 3 && "hidden"
                    } relative py-[30px] px-[40px] text-base font-medium leading-8`}
                >
                  <div className="relative pl-1">
                    <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                      Targeted Audience Reach:
                    </p>
                    <p className="text-[#ffffff] mb-[10px]">
                      Using the advanced targeting capabilities of Google Ads
                      and Facebook Ads, we'll ensure your ads reach your ideal
                      audience. From demographic targeting and interest-based
                      targeting to remarketing to previous website visitors,
                      we'll ensure your ads are displayed to the right people at
                      the right time. By focusing on relevant audiences, we'll
                      drive higher engagement and conversion rates.
                    </p>
                    <div className="">
                      <Link href="/contact?id=ecommerce-marketing">
                        <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="tab4"
                  className={`${activetab == 4 && "block"} ${activetab != 4 && "hidden"
                    } relative py-[30px] px-[50px] text-base font-medium leading-8`}
                >
                  <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                    Compelling Ad Creation:
                  </p>
                  <p className="text-[#ffffff]">
                    Our creative experts will design captivating ad creatives
                    that showcase your products and entice potential customers
                    to click. Whether it's eye-catching visuals, persuasive ad
                    copy, or compelling video content, we'll create assets that
                    highlight the unique value of your ecommerce brand. By
                    delivering compelling ads, we'll capture attention and drive
                    traffic to your online store.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  id="tab5"
                  className={`${activetab == 5 && "block"} ${activetab != 5 && "hidden"
                    } relative py-[30px] px-[50px] text-base font-medium leading-8`}
                >
                  <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                    Optimized Landing Pages:
                  </p>
                  <p className="text-[#ffffff] mb-[10px]">
                    We'll optimize your ecommerce website's landing pages to
                    create a seamless user experience. Our experts will design
                    conversion-focused pages that are visually appealing, easy
                    to navigate, and optimized for mobile devices. By
                    streamlining the path to purchase, we'll increase
                    conversions and drive more sales for your business.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  id="tab6"
                  className={`${activetab == 6 && "block"} ${activetab != 6 && "hidden"
                    } relative py-[30px] px-[50px] text-base font-medium leading-8`}
                >
                  <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                    Performance Tracking and Analytics:
                  </p>
                  <p className="text-[#ffffff]">
                    Our data-driven approach ensures that we constantly monitor
                    and analyze campaign performance. We'll provide you with
                    detailed reports, key metrics, and actionable insights to
                    measure the effectiveness of your campaigns. With this
                    information, we'll make data-backed decisions, optimize
                    campaigns, and drive continuous improvements to maximize
                    your ROI.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
                <div
                  id="tab7"
                  className={`${activetab == 7 && "block"} ${activetab != 7 && "hidden"
                    } relative py-[30px] px-[50px] text-base font-medium leading-8`}
                >
                  <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                    Remarketing and Dynamic Ads:
                  </p>
                  <p className="text-[#ffffff]">
                    We'll implement remarketing strategies to re-engage users
                    who have previously interacted with your website or shown
                    interest in your products. Through dynamic remarketing ads,
                    personalized product recommendations, and enticing offers,
                    we'll bring back potential customers and drive them to
                    complete their purchases.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
                <div
                  id="tab8"
                  className={`${activetab == 8 && "block"} ${activetab != 8 && "hidden"
                    } relative py-[30px] px-[50px] text-base font-medium leading-8`}
                >
                  <p className="text-[#efefef] text-[20px] font-semibold mb-5">
                    Continuous Optimization:
                  </p>
                  <p className="text-[#ffffff]">
                    We believe in continuous improvement. Our team will
                    regularly optimize your campaigns to ensure maximum
                    performance. We'll fine-tune targeting, test different ad
                    variations, adjust bidding strategies, and leverage the
                    latest features and trends in ecommerce marketing. This
                    iterative approach will help you stay ahead of the
                    competition and drive sustainable growth.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col justify-start max-w-md m-auto lg:hidden">
              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("1")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "1" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/static/public/Campaign%20Strategy%20and%20Setup%20white.png"
                      alt="Campaign Strategy and Planning"
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Strategic Campaign Planning:</p>
                </div>
                <div
                  id="tab1"
                  className={`${activetab == 1 && "items-center justify-center"
                    } ${activetab != 1 && "hidden"
                    } relative p-5 pt-[10px] text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    Our team of ecommerce marketing specialists will collaborate
                    closely with you to understand your unique business goals,
                    target audience, and competitive landscape. We'll develop a
                    comprehensive campaign strategy that aligns with your
                    objectives and ensures maximum impact across Performance
                    Max, Google Ads, and Facebook Ads.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("2")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "2" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/static/public/Audience%20Targeting%20white.png"
                      alt="Performance Max Campaigns"
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Performance Max Campaigns:</p>
                </div>
                <div
                  id="tab2"
                  className={`${activetab == 2 && " items-center justify-center"
                    } ${activetab != 2 && "hidden"
                    } relative p-5 pt-[10px] text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff]">
                    With Performance Max, we can supercharge your ecommerce
                    marketing efforts. This cutting-edge ad product harnesses
                    the power of Google's AI technology to reach potential
                    customers across multiple platforms and networks. We'll
                    leverage Performance Max to deliver highly personalized and
                    dynamic ads that drive engagement and conversions.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("3")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "3" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/static/public/Ad%20Format%20Optimization%20white.png"
                      alt="Targeted Audience Reach"
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Targeted Audience Reach:</p>
                </div>
                <div
                  id="tab3"
                  className={`${activetab == 3 && "items-center justify-center"
                    } ${activetab != 3 && "hidden"
                    } relative p-5 pt-[10px] text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    Using the advanced targeting capabilities of Google Ads and
                    Facebook Ads, we'll ensure your ads reach your ideal
                    audience. From demographic targeting and interest-based
                    targeting to remarketing to previous website visitors, we'll
                    ensure your ads are displayed to the right people at the
                    right time. By focusing on relevant audiences, we'll drive
                    higher engagement and conversion rates.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("4")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "4" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="/Real-Time Bidding white.png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Compelling Ad Creation:</p>
                </div>
                <div
                  id="tab4"
                  className={`${activetab == 4 && " items-center justify-center"
                    } ${activetab != 4 && "hidden"
                    } relative p-5 pt-[10px] text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff]">
                    Our creative experts will design captivating ad creatives
                    that showcase your products and entice potential customers
                    to click. Whether it's eye-catching visuals, persuasive ad
                    copy, or compelling video content, we'll create assets that
                    highlight the unique value of your ecommerce brand. By
                    delivering compelling ads, we'll capture attention and drive
                    traffic to your online store.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("5")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "5" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="/Continuous Campaign Management & Optimization white.png"
                      alt=""
                      className="h-10 w-[56px]"
                    />
                  </div>
                  <p>Optimized Landing Pages:</p>
                </div>
                <div
                  id="tab5"
                  className={`${activetab == 5 && " items-center justify-center"
                    } ${activetab != 5 && "hidden"
                    } relative p-5 pt-[10px] font-gilroy2 text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    We'll optimize your ecommerce website's landing pages to
                    create a seamless user experience. Our experts will design
                    conversion-focused pages that are visually appealing, easy
                    to navigate, and optimized for mobile devices. By
                    streamlining the path to purchase, we'll increase
                    conversions and drive more sales for your business.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("6")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "6" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/static/public/Campaign%20Strategy%20and%20Setup%20white.png"
                      alt="Campaign Strategy and Planning"
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Performance Tracking and Analytics:</p>
                </div>
                <div
                  id="tab6"
                  className={`${activetab == 6 && " items-center justify-center"
                    } ${activetab != 6 && "hidden"
                    } relative p-5 pt-[10px] font-gilroy2 text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    Our data-driven approach ensures that we constantly monitor
                    and analyze campaign performance. We'll provide you with
                    detailed reports, key metrics, and actionable insights to
                    measure the effectiveness of your campaigns. With this
                    information, we'll make data-backed decisions, optimize
                    campaigns, and drive continuous improvements to maximize
                    your ROI.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("7")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "7" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/static/public/Ad%20Format%20Optimization%20white.png"
                      alt="Remarketing and Dynamic Ads"
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Remarketing and Dynamic Ads:</p>
                </div>
                <div
                  id="tab7"
                  className={`${activetab == 7 && " items-center justify-center"
                    } ${activetab != 7 && "hidden"
                    } relative p-5 pt-[10px] font-gilroy2 text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    We'll implement remarketing strategies to re-engage users
                    who have previously interacted with your website or shown
                    interest in your products. Through dynamic remarketing ads,
                    personalized product recommendations, and enticing offers,
                    we'll bring back potential customers and drive them to
                    complete their purchases.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="panel_list webbox mb-4 rounded-b-[15px]">
                <div
                  onClick={() => setActivetab("8")}
                  className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 font-medium whychoose relative border-[3px] border-solid border-[#efefef08] shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "8" ? "border-t-[#0092f4ab]" : ""
                    }`}
                >
                  <div>
                    <img
                      src="/Continuous Campaign Management & Optimization white.png"
                      alt=""
                      className="h-10 w-[56px]"
                    />
                  </div>
                  <p>Continuous Optimization:</p>
                </div>
                <div
                  id="tab8"
                  className={`${activetab == 8 && " items-center justify-center"
                    } ${activetab != 8 && "hidden"
                    } relative p-5 pt-[10px] font-gilroy2 text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    We believe in continuous improvement. Our team will
                    regularly optimize your campaigns to ensure maximum
                    performance. We'll fine-tune targeting, test different ad
                    variations, adjust bidding strategies, and leverage the
                    latest features and trends in ecommerce marketing. This
                    iterative approach will help you stay ahead of the
                    competition and drive sustainable growth.
                  </p>
                  <div className="">
                    <Link href="/contact?id=ecommerce-marketing">
                      <button className="bg-[#ffffff] text-[#de668a] border border-solid hover:bg-[#de668a] hover:text-[#ffffff] text-base font-normal tracking-wider rounded-xl py-3 px-6 mt-6">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 md:px-20 pt-4 pb-16 md:pb-20">
        <div>
          <div className="text-start">
            <h2 className="text-maintext lg:text-[28px] text-2xl font-semibold not-italic text-center  block">
              Why Choose Us
            </h2>
          </div>
          <div className=" grid xl:grid-cols-3 md:grid-cols-2 gap-8 pt-[50px]">
            <div className="first group bg-white shadow-serviceoffer border border-solid border-[#FDFDFD] rounded-[10px] p-5">
              <div className="flex items-center justify-start gap-4">
                <div className="rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/service_need 1.svg"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    priority={true}
                    className="transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0"
                  />
                </div>
                <h6 className="text-[#000] text-[18px] font-semibold leading-normal font-gilroy">
                  Performance Max Expertise:
                </h6>
              </div>
              <p className="text-[#000] text-[14px] font-normal leading-[26px] pt-5 text-start">
                {/* Our certified team of experts consists of seasoned campaign management, data scientists, and analytics experts who bring a wealth of experience to the table. */}
                As pioneers in Performance Max campaigns, we have extensive
                experience leveraging this game-changing ad product. Our team
                has successfully implemented Performance Max campaigns for
                ecommerce businesses across various industries, delivering
                tangible results and driving online sales.
              </p>
            </div>
            <div className="second group bg-white border shadow-serviceoffer border-solid border-[#FDFDFD] rounded-[10px] p-5">
              <div className="flex items-center justify-start gap-4">
                <div className="rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/service_need 2.svg"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    priority={true}
                    className="transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0"
                  />
                </div>
                <h6 className="text-[#000] text-[18px] font-semibold leading-normal font-gilroy">
                  Dedicated Digital Marketing Experts:
                </h6>
              </div>
              <p className="text-[#000] text-[14px] font-normal leading-[26px] pt-5 text-start">
                Our dedicated team of digital marketing experts brings a wealth
                of knowledge and experience to every project. We stay up-to-date
                with the latest industry trends and best practices, ensuring
                that your campaigns are optimized for success and aligned with
                your business objectives.
              </p>
            </div>
            <div className="third group bg-white border shadow-serviceoffer border-solid border-[#FDFDFD] rounded-[10px] p-5">
              <div className="flex items-center justify-start gap-4">
                <div className="rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/service_need 3.svg"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    priority={true}
                    className="transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0"
                  />
                </div>
                <h6 className="text-[#000] text-[18px] font-semibold leading-normal font-gilroy">
                  Proven Track Record:
                </h6>
              </div>
              <p className="text-[#000] text-[14px] font-normal leading-[26px] pt-5 text-start">
                We have a track record of delivering exceptional outcomes for
                ecommerce businesses. Our results- driven approach, combined
                with our deep understanding of the ecommerce landscape, allows
                us to create customized strategies tailored to your goals,
                target audience, and budget
              </p>
            </div>
            <div className="first group bg-white shadow-serviceoffer border border-solid border-[#FDFDFD] rounded-[10px] p-5">
              <div className="flex items-center justify-start gap-4">
                <div className="rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/service_need 1.svg"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    priority={true}
                    className="transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0"
                  />
                </div>
                <h6 className="text-[#000] text-[18px] font-semibold leading-normal font-gilroy">
                  Data-Driven Decision Making:
                </h6>
              </div>
              <p className="text-[#000] text-[14px] font-normal leading-[26px] pt-5 text-start">
                Our data-driven approach underpins every decision we make. By
                leveraging detailed reporting and analytics, we gain valuable
                insights into campaign performance, user behavior, and market
                trends. This enables us to refine strategies optimize-campaigns,
                and identify new opportunities for growth
              </p>
            </div>
            <div className="second group bg-white border shadow-serviceoffer border-solid border-[#FDFDFD] rounded-[10px] p-5">
              <div className="flex items-center justify-start gap-4">
                <div className="rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/service_need 2.svg"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    priority={true}
                    className="transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0"
                  />
                </div>
                <h6 className="text-[#000] text-[18px] font-semibold leading-normal font-gilroy">
                  Continuous Campaign Optimization:
                </h6>
              </div>
              <p className="text-[#000] text-[14px] font-normal leading-[26px] pt-5 text-start">
                We are committed to driving maximum ROI and long- term growth
                for your ecommerce business. Through continuous campaign
                optimization, we fine-tune targeting, adjust bidding strategies,
                and leverage emerging trends in ecommerce marketing. Our goal is
                to keep your brand at the forefront of your target audience's
                minds, resulting in increased traffic, conversions, and online
                sales
              </p>
            </div>
            <div className="third group bg-white border shadow-serviceoffer border-solid border-[#FDFDFD] rounded-[10px] p-5">
              <div className="flex items-center justify-start gap-4">
                <div className="rounded-full bg-[#EAF0FF] w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/service_need 3.svg"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    priority={true}
                    className="transform translate-x-[-20px] transition-transform duration-300 ease-linear group-hover:translate-x-0"
                  />
                </div>
                <h6 className="text-[#000] text-[18px] font-semibold leading-normal font-gilroy">
                  Unlock the Full Potential of Your Ecommerce Business:
                </h6>
              </div>
              <p className="text-[#000] text-[14px] font-normal leading-[26px] pt-5 text-start">
                Ready to take your ecommerce business to new heights? Our
                Ecommerce Marketing services, powered by Performance Max, Google
                Ads, and Facebook Ads, will help you drive targeted traffic,
                increase conversions, and boost online sales. Contact us today
                to discuss how we can accelerate your ecommerce success and
                unlock the full potential of your online store.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="md:hidden">
        <div>
          <img
            className="w-full"
            src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/phone_whyus.png"
          />
        </div>
      </section> */}

      {/* <section>
        <div className="flex md:justify-between items-center py-4 md:py-0 px-4 md:px-28">
          <div className="absolute md:relative w-3/4 md:w-1/2 opacity-50 ">
            <img src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/7.png" />
          </div>
          <div className="w-full font-[Poppins] text-lg text-zinc-800">
            Don't let your app get lost in the crowded marketplace. Let our App
            Marketing Services powered by DV360 and Google Ads drive your app's
            success, increase downloads, and boost user engagement. Contact us
            today to discuss how we can take your app marketing efforts to new
            heights!
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ecommerce_marketing;

{
  /* <section>
        <div className="md:px-24 px-4 pt-6 md:py-8 space-y-6">
          <div className="bg-purple-800 rounded-xl">
            <h1 className="md:hidden text-4xl md:text-7xl pb-2 tracking-tighter text-center font-['Poppins'] font-bold text-gray-200 pt-4">
              WHAT WE OFFER
            </h1>
          </div>
          <div className="md:flex justify-evenly">
            <div className="flex flex-wrap-reverse md:flex-nowrap md:justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 pl-6 pb-4 md:pb-0 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Strategic Campaign Planning:
                </h2>
                <p className="text-neutral-700 text-base font-normal pr-4">
                  Our team of ecommerce marketing specialists will collaborate
                  closely with you to understand your unique business goals,
                  target audience, and competitive landscape. We'll develop a
                  comprehensive campaign strategy that aligns with your
                  objectives and ensures maximum impact across Performance Max,
                  Google Ads, and Facebook Ads.
                </p>
              </div>
              <div className="w-full relative">
                <img
                  className="relative mx-auto h-full w-auto md:mx-0 md:w-auto md:float-right"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/campaign_planning.png"
                />
              </div>
            </div>
            <div>
              <h1 className="hidden md:block text-4xl md:text-7xl tracking-tighter text-center font-['Poppins'] font-bold text-gray-400 pt-4">
                WHAT
                <br /> WE
                <br /> OFFER
              </h1>
            </div>
          </div>

          <div className="md:flex md:justify-end">
            <div className="flex flex-wrap md:flex-nowrap justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 md:pr-8 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="w-full">
                <img
                  className="mx-auto h-full w-auto md:mx-0 md:w-auto md:float-left"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/performance_max.png"
                />
              </div>
              <div className="px-4 py-4 md:pl-4 md:py-0 space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Performance Max Campaigns:
                </h2>
                <p className="text-neutral-700 text-base font-normal">
                  With Performance Max, we can supercharge your ecommerce
                  marketing efforts. This cutting-edge ad product harnesses the
                  power of Google's AI technology to reach potential customers
                  across multiple platforms and networks. We'll leverage
                  Performance Max to deliver highly personalized and dynamic ads
                  that drive engagement and conversions.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex justify-start">
            <div className="flex flex-wrap-reverse md:flex-nowrap md:justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 md:pl-6 px-4 pb-4 md:pb-0 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="md:w-3/4 space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Targeted Audience Reach:
                </h2>
                <p className="text-neutral-700 text-base font-normal">
                  Using the advanced targeting capabilities of Google Ads and
                  Facebook Ads, we'll ensure your ads reach your ideal audience.
                  From demographic targeting and interest-based targeting to
                  remarketing to previous website visitors, we'll ensure your
                  ads are displayed to the right people at the right time. By
                  focusing on relevant audiences, we'll drive higher engagement
                  and conversion rates.
                </p>
              </div>
              <div className="">
                <img
                  className="mx-auto h-full w-auto md:mx-0 md:w-auto md:float-right"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/target_audience.png"
                />
              </div>
            </div>
          </div>

          <div className="md:flex md:justify-end">
            <div className="flex flex-wrap md:flex-nowrap justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto md:pr-8 md:pt-6 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="w-full relative">
                <img
                  className="relative mx-auto h-full w-auto md:mx-0 md:w-auto md:float-left"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/ad_creation.png"
                />
              </div>
              <div className="px-4 py-4 md:pl-4 space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Compelling Ad Creation:
                </h2>
                <p className="text-neutral-700 text-base font-normal">
                  Our creative experts will design captivating ad creatives that
                  showcase your products and entice potential customers to
                  click. Whether it's eye-catching visuals, persuasive ad copy,
                  or compelling video content, we'll create assets that
                  highlight the unique value of your ecommerce brand. By
                  delivering compelling ads, we'll capture attention and drive
                  traffic to your online store.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex justify-start">
            <div className="flex flex-wrap-reverse md:flex-nowrap md:justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 pl-6 pb-4 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Optimized Landing Pages:
                </h2>
                <p className="text-neutral-700 text-base font-normal pr-4">
                  We'll optimize your ecommerce website's landing pages to
                  create a seamless user experience. Our experts will design
                  conversion-focused pages that are visually appealing, easy to
                  navigate, and optimized for mobile devices. By streamlining
                  the path to purchase, we'll increase conversions and drive
                  more sales for your business.
                </p>
              </div>
              <div className="relative w-full">
                <img
                  className="mx-auto h-full w-auto md:mx-0 md:w-auto md:float-right relative"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/optimized_landing.png"
                />
              </div>
            </div>
          </div>

          <div className="md:flex md:justify-end">
            <div className="flex flex-wrap md:flex-nowrap  font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 md:pr-8 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="relative w-full md:w-auto">
                <img
                  className="mx-auto h-full w-auto md:mx-0 md:w-auto md:relative"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/performance_analysis.png"
                />
              </div>
              <div className="px-4 py-4 md:w-4/5 md:pl-4 md:py-0 space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Performance Tracking and Analytics:
                </h2>
                <p className="text-neutral-700 text-base font-normal">
                  Our data-driven approach ensures that we constantly monitor
                  and analyze campaign performance. We'll provide you with
                  detailed reports, key metrics, and actionable insights to
                  measure the effectiveness of your campaigns. With this
                  information, we'll make data-backed decisions, optimize
                  campaigns, and drive continuous improvements to maximize your
                  ROI.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex justify-between">
            <div className="flex flex-wrap-reverse md:flex-nowrap md:justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 pl-6 pb-4 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Remarketing and Dynamic Ads:
                </h2>
                <p className="text-neutral-700 text-base font-normal pr-4">
                  We'll implement remarketing strategies to re-engage users who
                  have previously interacted with your website or shown interest
                  in your products. Through dynamic remarketing ads,
                  personalized product recommendations, and enticing offers,
                  we'll bring back potential customers and drive them to
                  complete their purchases.
                </p>
              </div>
              <div className="w-full relative">
                <img
                  className="mx-auto h-full w-auto md:mx-0 md:w-auto md:float-right"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/remarketing.png"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap-reverse md:flex-nowrap md:justify-between">
            <Link href="/contact?id=ecommerce-marketing">
              <div className="bg-purple-800 w-full md:w-auto my-4 md:my-0 p-8 h-64 rounded-xl relative">
                <h1 className="text-4xl font-semibold pr-14 text-purple-100">
                  TALK TO
                  <br />
                  OUR
                  <br />
                  EXPERTS
                </h1>
                <div className="relative mt-4 md:mt-0">
                  <img
                    className="float-right"
                    src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/clarity_talk-bubbles-line.png"
                  />
                </div>
              </div>
            </Link>
            <div className="flex flex-wrap-reverse md:flex-nowrap  font-[Poppins] md:w-3/4 md:h-64 h-auto md:pt-8 md:pr-8 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="px-4 py-4 md:w-4/5 md:pl-6 md:py-0 space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Continuous Optimization:
                </h2>
                <p className="text-neutral-700 text-base font-normal">
                  We believe in continuous improvement. Our team will regularly
                  optimize your campaigns to ensure maximum performance. We'll
                  fine-tune targeting, test different ad variations, adjust
                  bidding strategies, and leverage the latest features and
                  trends in ecommerce marketing. This iterative approach will
                  help you stay ahead of the competition and drive sustainable
                  growth.
                </p>
              </div>
              <div className="relative w-full md:w-auto">
                <img
                  className="relative md:mx-0 mx-auto h-full"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/continuous_optimise.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */
}

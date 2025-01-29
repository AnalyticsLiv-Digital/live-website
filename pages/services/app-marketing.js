import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import OgTags from "../../components/OgTags";

const app_marketing = () => {
  const [activetab, setActivetab] = useState("1");

  return (
    <>
      <OgTags
        url="https://analyticsliv.com/services/app-marketing"
        title="Best Mobile App Marketing Services in India | AnalyticsLiv"
        description="Maximize your app's reach with AnalyticsLiv's top mobile app marketing services in India. Increase downloads, user engagement, and retention with proven strategies."
        twitterTitle="Best Mobile App Marketing Services in India | AnalyticsLiv"
        twitterDescription="Maximize your app's reach with AnalyticsLiv's top mobile app marketing services in India. Increase downloads, user engagement, and retention with proven strategies."
      />

      <section>
        <div className="relative md:px-24 px-4">
          <div className="-z-10 absolute left-0">
            <img src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/Bottom_3.png" />
          </div>
          <div className="z-0 md:flex justify-between md:py-12 py-4">
            <div className="space-y-4 w-full md:w-2/3 md:pr-16">
              <h1 className="text-4xl md:text-6xl font-['Poppins'] font-bold text-gray-600 pt-4">
                APP MARKETING
              </h1>
              <h2 className="tracking-widest uppercase font-semibold text-xl text-stone-500">
                Boost Your App's Success with DV360 <br /> and Google Ads
              </h2>
              <p className="md:pt-6 text-gray-700 font-[Poppins]">
                Are you looking to maximize the reach and success of your mobile
                app? Our App Marketing Services can help you achieve just that!
                With our expertise in utilizing cutting-edge tools like DV360
                and Google Ads, we'll drive user acquisition, engagement, and
                retention to propel your app towards greater visibility and
                profitability.
              </p>
              <Link href="/contact?id=app-marketing">
                <button className="butn mt-6">
                  LET'S WORK TOGETHER
                  {/* <img className="inline ml-2 hover:animate-pulse" src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/arrow_1.png"/> */}
                </button>
              </Link>
            </div>
            <div className="py-6 md:py-0">
              <img src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/amico.png" alt="mobile app marketing services" />
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
                        src="/Campaign Strategy and Setup white.png"
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Campaign Strategy and Planning:</p>
                  </div>
                  <div
                    onClick={() => setActivetab("2")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "2" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="/Audience Targeting white.png"
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Audience Targeting and Segmentation:</p>
                  </div>
                  <div
                    onClick={() => setActivetab("3")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "3" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="/Ad Format Optimization white.png"
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Compelling Ad Creatives:</p>
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
                    <p>Multi-Channel Advertising:</p>
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
                    <p>Campaign Optimization and Performance Tracking:</p>
                  </div>
                  <div
                    onClick={() => setActivetab("6")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "6" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="/Campaign Strategy and Setup white.png"
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Remarketing and Retention Strategies:</p>
                  </div>
                  <div
                    onClick={() => setActivetab("7")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${activetab === "7" ? "border-t-[#0092f4ab]" : ""
                      }`}
                  >
                    <div>
                      <img
                        src="/Ad Format Optimization white.png"
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p>Analytics and Insights:</p>
                  </div>
                  {/* <div
                    onClick={() => setActivetab("8")}
                    className={`ourcom flex items-center gap-[17px] text-base text-[#efefef] bg-[#13131400] mb-5 cursor-pointer font-medium whychoose relative border-[3px] border-solid border-[#de668a14] hover:shadow-programatic rounded-b-[5px] py-4 px-5 ${
                      activetab === "4" ? "border-t-[#0092f4ab]" : ""
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
                  </div> */}
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
                      Campaign Strategy and Planning:
                    </p>
                    <p className="text-[#ffffff] mb-[10px]">
                      Our experienced team will work closely with you to
                      understand your app's unique value proposition, target
                      audience, and goals. We'll develop a comprehensive
                      campaign strategy that aligns with your objectives,
                      ensuring maximum impact and return on investment.
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
                      Audience Targeting and Segmentation:
                    </p>
                    <p className="text-[#ffffff]">
                      Leveraging the power of DV360 and Google Ads, we'll
                      identify and target your ideal audience segments with
                      precision. By analyzing user data, demographics,
                      interests, and behavior, we'll deliver your app's message
                      to the right people at the right time, boosting engagement
                      and conversion rates.
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
                      Compelling Ad Creatives:
                    </p>
                    <p className="text-[#ffffff] mb-[10px]">
                      Our creative team will design visually stunning and
                      compelling ad creatives that capture attention and drive
                      clicks. Whether it's static ads, interactive rich media,
                      or video ads, we'll craft assets that effectively showcase
                      your app's features and benefits, enticing users to
                      download and engage with it.
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
                    Multi-Channel Advertising:
                  </p>
                  <p className="text-[#ffffff]">
                    With DV360 and Google Ads, we'll implement a multi-channel
                    advertising approach to ensure maximum reach and exposure
                    for your app. We'll leverage display networks, search ads,
                    video ads, and app install campaigns to engage users across
                    various platforms and devices, expanding your app's reach
                    and visibility.
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
                    Campaign Optimization and Performance Tracking:
                  </p>
                  <p className="text-[#ffffff] mb-[10px]">
                    Our team will continuously monitor and optimize your app
                    marketing campaigns to maximize performance. We'll fine-tune
                    targeting, adjust bidding strategies, and optimize ad
                    placements to drive better results. With detailed
                    performance tracking and reporting, you'll have complete
                    visibility into campaign effectiveness, user engagement, and
                    return on ad spend.
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
                    Remarketing and Retention Strategies:
                  </p>
                  <p className="text-[#ffffff]">
                    We'll implement remarketing campaigns to re-engage users who
                    have shown interest in your app but haven't converted.
                    Through strategic messaging and offers, we'll entice them to
                    return and take action. Additionally, we'll assist in
                    developing retention strategies to keep existing users
                    active and loyal, enhancing long-term app success.
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
                    Analytics and Insights:
                  </p>
                  <p className="text-[#ffffff]">
                    Our team will utilize advanced analytics tools to provide
                    in-depth insights into user behavior, app usage, and
                    conversion metrics. These insights will enable data-driven
                    decision-making, allowing us to refine strategies, optimize
                    campaigns, and identify opportunities for further growth and
                    monetization.
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
                      src="/Campaign Strategy and Setup white.png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Campaign Strategy and Planning:</p>
                </div>
                <div
                  id="tab1"
                  className={`${activetab == 1 && "items-center justify-center"
                    } ${activetab != 1 && "hidden"
                    } relative p-5 pt-[10px] text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    Our experienced team will work closely with you to
                    understand your app's unique value proposition, target
                    audience, and goals. We'll develop a comprehensive campaign
                    strategy that aligns with your objectives, ensuring maximum
                    impact and return on investment.
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
                      src="/Audience Targeting white.png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Audience Targeting and Segmentation:</p>
                </div>
                <div
                  id="tab2"
                  className={`${activetab == 2 && " items-center justify-center"
                    } ${activetab != 2 && "hidden"
                    } relative p-5 pt-[10px] text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff]">
                    Leveraging the power of DV360 and Google Ads, we'll identify
                    and target your ideal audience segments with precision. By
                    analyzing user data, demographics, interests, and behavior,
                    we'll deliver your app's message to the right people at the
                    right time, boosting engagement and conversion rates.
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
                      src="/Ad Format Optimization white.png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Compelling Ad Creatives:</p>
                </div>
                <div
                  id="tab3"
                  className={`${activetab == 3 && "items-center justify-center"
                    } ${activetab != 3 && "hidden"
                    } relative p-5 pt-[10px] text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    Our creative team will design visually stunning and
                    compelling ad creatives that capture attention and drive
                    clicks. Whether it's static ads, interactive rich media, or
                    video ads, we'll craft assets that effectively showcase your
                    app's features and benefits, enticing users to download and
                    engage with it.
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
                  <p>Multi-Channel Advertising:</p>
                </div>
                <div
                  id="tab4"
                  className={`${activetab == 4 && " items-center justify-center"
                    } ${activetab != 4 && "hidden"
                    } relative p-5 pt-[10px] text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff]">
                    With DV360 and Google Ads, we'll implement a multi-channel
                    advertising approach to ensure maximum reach and exposure
                    for your app. We'll leverage display networks, search ads,
                    video ads, and app install campaigns to engage users across
                    various platforms and devices, expanding your app's reach
                    and visibility.
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
                  <p>Campaign Optimization and Performance Tracking:</p>
                </div>
                <div
                  id="tab5"
                  className={`${activetab == 5 && " items-center justify-center"
                    } ${activetab != 5 && "hidden"
                    } relative p-5 pt-[10px] font-gilroy2 text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    Our team will continuously monitor and optimize your app
                    marketing campaigns to maximize performance. We'll fine-tune
                    targeting, adjust bidding strategies, and optimize ad
                    placements to drive better results. With detailed
                    performance tracking and reporting, you'll have complete
                    visibility into campaign effectiveness, user engagement, and
                    return on ad spend.
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
                      src="/Campaign Strategy and Setup white.png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Remarketing and Retention Strategies:</p>
                </div>
                <div
                  id="tab6"
                  className={`${activetab == 6 && " items-center justify-center"
                    } ${activetab != 6 && "hidden"
                    } relative p-5 pt-[10px] font-gilroy2 text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    We'll implement remarketing campaigns to re-engage users who
                    have shown interest in your app but haven't converted.
                    Through strategic messaging and offers, we'll entice them to
                    return and take action. Additionally, we'll assist in
                    developing retention strategies to keep existing users
                    active and loyal, enhancing long-term app success.
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
                      src="/Ad Format Optimization white.png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                  <p>Analytics and Insights:</p>
                </div>
                <div
                  id="tab7"
                  className={`${activetab == 7 && " items-center justify-center"
                    } ${activetab != 7 && "hidden"
                    } relative p-5 pt-[10px] font-gilroy2 text-[13px] font-medium leading-8`}
                >
                  <p className="text-[#ffffff] mb-[10px]">
                    Our team will utilize advanced analytics tools to provide
                    in-depth insights into user behavior, app usage, and
                    conversion metrics. These insights will enable data-driven
                    decision-making, allowing us to refine strategies, optimize
                    campaigns, and identify opportunities for further growth and
                    monetization.
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

      <section className="hidden md:block">
        <div
          className="relative h-[727px] py-4 bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://storage.googleapis.com/website-bucket-uploads/static/marketing/us.png)",
          }}
        >
          <div className="absolute w-96 top-10 left-28">
            <h3 className="font-bold text-7xl leading-[3.5rem] text-black text-opacity-40">
              WHY CHOOSE US
            </h3>
          </div>
          <div className="relative mx-auto h-[690px] w-[597px]">
            <div className="relative float-right w-56 text-stone-600">
              <div className="absolute top-8 -left-8 w-4 h-4 border-2 border-purple-800 bg-yellow-400 rounded-full"></div>
              <div className="">
                Proven track record of delivering exceptional results for app
                clients across various industries.
              </div>
            </div>
            <div className="absolute right-[244px] top-12 border-l-2 border-dashed border-purple-800 w-1.5 h-24"></div>
            <div className="relative top-24 left-24 w-56 text-stone-600">
              <div className="">
                Expertise in leveraging tools like DV360 and Google Ads for app
                marketing success.
              </div>
              <div className="absolute -right-9 top-10 w-4 h-4 border-2 border-purple-800 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="absolute right-[244px] top-[154px] border-l-2 border-dashed border-purple-800 w-1.5 h-96"></div>
            <div className="absolute -right-10 top-[240px] w-56 text-stone-600">
              <div className="absolute md:-top-6 left-3 w-4 h-4 border-2 border-purple-800 bg-yellow-400 rounded-full"></div>
              <div className="">
                Highly skilled team of digital marketing professionals and
                creative experts.
              </div>
            </div>
            <div className="absolute right-[168px] top-[140px] border-b-2 border-dashed border-purple-800 h-1.5 w-[72px]"></div>
            <div className="relative top-[240px] w-56 text-stone-600">
              <div className="">
                Customized strategies tailored to your app's unique goals and
                target audience
              </div>
              <div className="absolute -right-8 top-[52px] w-4 h-4 border-2 border-purple-800 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="absolute right-[160px] top-[144px] border-l-2 border-dashed border-purple-800 h-[72px] w-1.5"></div>
            <div className="relative top-96 w-56 text-stone-600">
              <div className="">
                Continuous campaign optimization to drive maximum performance
                and ROI.
              </div>
              <div className="absolute right-4 top-0 w-4 h-4 border-2 border-purple-800 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="absolute left-64 bottom-[317px] border-b-2 border-dashed border-purple-800 h-1.5 w-[87px]"></div>
            <div className="relative float-right top-[328px] w-56 text-stone-600">
              <div className="absolute -top-4 w-4 h-4 border-2 border-purple-800 bg-yellow-400 rounded-full"></div>
              <div className="">
                Transparent reporting and regular communication to keep you
                informed every step of the way.
              </div>
            </div>
            <div className="absolute left-[208px] bottom-[152px] border-b-2 border-dashed border-purple-800 h-1.5 w-[163px]"></div>
          </div>
        </div>
      </section>

      <section className="md:hidden">
        <div>
          <img
            className="w-full"
            src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/phone_whyus.png"
          />
        </div>
      </section>

      {/* <section>
        <div className="flex md:justify-between items-center py-4 px-4 md:px-28">
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

export default app_marketing;

{
  /* <div className="px-4 md:px-20 pt-4 pb-8 md:pb-16">
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
      </div> */
}

{
  /* <section>
        <div className="md:px-24 px-4 pt-6 md:py-8 space-y-6">
          <div className="bg-purple-800 rounded-xl">
            <h1 className="md:hidden text-4xl md:text-7xl pb-2 tracking-tighter text-center font-['Poppins'] font-bold text-gray-200 pt-4">
              WHAT WE OFFER
            </h1>
          </div>
          <div className="md:flex justify-evenly">
            <div className="flex flex-wrap-reverse md:flex-nowrap md:justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 pl-6 pb-4 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Campaign Strategy and Planning:
                </h2>
                <p className="text-neutral-700 text-base font-normal pr-4">
                  Our experienced team will work closely with you to understand
                  your app's unique value proposition, target audience, and
                  goals. We'll develop a comprehensive campaign strategy that
                  aligns with your objectives, ensuring maximum impact and
                  return on investment.
                </p>
              </div>
              <div className="w-full">
                <img
                  className="mx-auto h-full md:mx-0 md:float-right md:w-auto"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/pawn.png"
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
            <div className="flex flex-wrap md:flex-nowrap justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 pr-8 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="w-full">
                <img
                  className="mx-auto h-full w-auto md:mx-0 md:w-auto md:float-left"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/target.png"
                />
              </div>
              <div className="px-4 py-4 md:pl-4 md:py-0 space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Audience Targeting and Segmentation:
                </h2>
                <p className="text-neutral-700 text-base font-normal">
                  Leveraging the power of DV360 and Google Ads, we'll identify
                  and target your ideal audience segments with precision. By
                  analyzing user data, demographics, interests, and behavior,
                  we'll deliver your app's message to the right people at the
                  right time, boosting engagement and conversion rates.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex justify-start">
            <div className="flex flex-wrap-reverse md:flex-nowrap md:justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 pl-6 pb-4 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Compelling Ad Creatives:
                </h2>
                <p className="text-neutral-700 text-base font-normal pr-4">
                  Our creative team will design visually stunning and compelling
                  ad creatives that capture attention and drive clicks. Whether
                  it's static ads, interactive rich media, or video ads, we'll
                  craft assets that effectively showcase your app's features and
                  benefits, enticing users to download and engage with it.
                </p>
              </div>
              <div className="w-full">
                <img
                  className="mx-auto h-full w-auto md:mx-0 md:w-auto md:float-right"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/Play.png"
                />
              </div>
            </div>
          </div>

          <div className="md:flex md:justify-end">
            <div className="flex flex-wrap md:flex-nowrap justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 pr-8 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="w-full relative">
                <img
                  className="relative mx-auto h-full w-auto md:mx-0 md:w-auto md:float-left"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/multi_channel.png"
                />
              </div>
              <div className="px-4 py-4 md:pl-4 md:py-0 space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Multi-Channel Advertising:
                </h2>
                <p className="text-neutral-700 text-base font-normal">
                  With DV360 and Google Ads, we'll implement a multi-channel
                  advertising approach to ensure maximum reach and exposure for
                  your app. We'll leverage display networks, search ads, video
                  ads, and app install campaigns to engage users across various
                  platforms and devices, expanding your app's reach and
                  visibility.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex justify-start">
            <div className="flex flex-wrap-reverse md:flex-nowrap md:justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 pl-6 pb-4 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Campaign Optimization and Performance Tracking:
                </h2>
                <p className="text-neutral-700 text-base font-normal pr-4">
                  Our team will continuously monitor and optimize your app
                  marketing campaigns to maximize performance. We'll fine-tune
                  targeting, adjust bidding strategies, and optimize ad
                  placements to drive better results. With detailed performance
                  tracking and reporting, you'll have complete visibility into
                  campaign effectiveness, user engagement, and return on ad
                  spend.
                </p>
              </div>
              <div className="relative w-full">
                <img
                  className="mx-auto h-full w-auto md:mx-0 md:w-auto md:float-right relative"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/optimise.png"
                />
              </div>
            </div>
          </div>

          <div className="md:flex md:justify-end">
            <div className="flex flex-wrap md:flex-nowrap justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 pr-8 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="w-full relative">
                <img
                  className="mx-auto h-full w-auto md:mx-0 md:w-auto md:float-left relative"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/retention.png"
                />
              </div>
              <div className="px-4 py-4 md:pl-4 md:py-0 space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Remarketing and Retention Strategies:
                </h2>
                <p className="text-neutral-700 text-base font-normal">
                  We'll implement remarketing campaigns to re-engage users who
                  have shown interest in your app but haven't converted. Through
                  strategic messaging and offers, we'll entice them to return
                  and take action. Additionally, we'll assist in developing
                  retention strategies to keep existing users active and loyal,
                  enhancing long-term app success.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex justify-between">
            <div className="flex flex-wrap-reverse md:flex-nowrap md:justify-between font-[Poppins] md:w-3/4 md:h-64 h-auto pt-8 pl-6 pb-4 bg-neutral-200 bg-opacity-30 rounded-xl shadow-md shadow-neutral-400">
              <div className="space-y-4">
                <h2 className="uppercase font-bold text-xl">
                  Analytics and Insights:
                </h2>
                <p className="text-neutral-700 text-base font-normal pr-4">
                  Our team will utilize advanced analytics tools to provide
                  in-depth insights into user behavior, app usage, and
                  conversion metrics. These insights will enable data-driven
                  decision-making, allowing us to refine strategies, optimize
                  campaigns, and identify opportunities for further growth and
                  monetization.
                </p>
              </div>
              <div className="w-full relative">
                <img
                  className="mx-auto h-full w-auto md:mx-0 md:w-auto md:float-right relative"
                  src="https://storage.googleapis.com/website-bucket-uploads/static/marketing/insights.png"
                />
              </div>
            </div>
            <Link href="/contact?id=app-marketing">
              <div className="bg-purple-800 my-4 md:my-0 p-8 h-64 rounded-xl relative">
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
          </div>
        </div>
      </section> */
}

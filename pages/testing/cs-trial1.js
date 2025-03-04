import Head from "next/head";
import React, { useRef } from "react";
import ScrollProgress from "../../components/ScrollProgress";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import { ScaleLoader } from "react-spinners";

const index = (
  {
    // casestudyDat
  }
) => {
  // var cd = casestudyDat.data[0];
  var cd = {
    _id: "67569d613effe018dd003dc8",
    id: "134246",
    slug: "180-percent-increase-in-lead-volume-and-60-percent-reduction-cpl",
    description:
      "We Sort It, a New Zealand-based cleaning and lawn care service provider, faced challenges with low lead volume and high costs per lead. Through advanced audience targeting and leveraging Facebook's Advantage Detailed Targeting feature, we achieved a 180% increase in lead volume and a 60% reduction in cost per lead. By aligning campaign strategies with the client’s goals, we ensured improved performance, cost efficiency, and high-quality leads.",
    title:
      "How FlaxitUp cut Stockout Risks by 35% and Transformed Inventory Management with Automation",
    filename:
      "https://storage.googleapis.com/website-bucket-uploads/cs/1733729399146434.pdf",
    publishdate: "9th Dec 2024",
    coverimage:
      "https://storage.googleapis.com/website-bucket-uploads/cs/1733729425065265.png",
    content: [
      {
        heading: "About The Business",
        description:
          "FlaxitUp is a thriving food chain with 10 outlets across Mumbai. Known for high-quality meals and a customer-centric approach, the company faced increasing operational challenges as it expanded. Their website , https://flaxitup.com/ , serves as a central hub for customer interaction and order placement.",
        _id: "67569d613effe018dd003dc9",
      },
      {
        heading: "The Challenge",
        description:
          "The client faced several operational bottlenecks:  **Fragmented Data Sources: Manual entries in Google Sheets, form submissions, and third-party platforms (Swiggy, Zomato) led to inefficiencies and data inconsistencies.  **Delayed & Unorganized Forecasting: Manual stock forecasting led to delays, with stockout risks increasing by 35%.  **Lack of Real-Time Alerts: Missed form deadlines and emergency orders often went unnoticed, leading to 20% higher operational inefficiencies.",
        _id: "67569d613effe018dd003dca",
      },
      {
        heading: "The Approach",
        description:
          "To streamline operations and enhance data accuracy, we implemented an automated, data-driven system:  **Automated Data Integration: Integrated Petpooja for real-time stock updates, reducing manual intervention. With the help ofApp Script automated data collection, instantly feeding responses into BigQuery  **Advanced Forecasting System: Analyzed consumption trends for 150+ items, using past data to predict stock requirements with 90% accuracy  **Real-Time Alert & Notification System: Alerts 2 hours before form deadlines, reducing missed submissions by 40%.  **Performance Scoring & Incentive Automation: Deductions for missed deadlines, incomplete checklists, stale items, and customer complaints.",
        _id: "67569d613effe018dd003dcb",
      },
      {
        heading: "The Result",
        description:
          "**Operational Efficiency: Eliminated 90% of manual processes, allowing teams to focus on strategic initiatives.  **Enhanced Accuracy: Addressed stock forecasting errors, reducing discrepancies by 28%.  **Optimized Inventory Management: Improved stock forecasting, cutting wastage and ensuring availability.",
        _id: "67569d613effe018dd003dcb",
      },
      {
        heading: "The Conclusion",
        description:
          "FlaxitUp’s automation journey showcases the power of integrating APIs, real-time data processing, and advanced forecasting tools. By tackling complex operational inefficiencies, we delivered a scalable, robust system that streamlined resource management and reinforced FlaxitUp’s commitment to operational excellence and customer satisfaction. This initiative has positioned them for sustained growth in the highly competitive food industry.",
        _id: "67569d613effe018dd003dcc",
      },
    ],
    active: true,
    open: true,
    __v: 0,
  };
  // var cd1 = {
  //     "_id": "67569d613effe018dd003dc8",
  //     "id": "134246",
  //     "slug": "180-percent-increase-in-lead-volume-and-60-percent-reduction-cpl",
  //     "description": "We Sort It, a New Zealand-based cleaning and lawn care service provider, faced challenges with low lead volume and high costs per lead. Through advanced audience targeting and leveraging Facebook's Advantage Detailed Targeting feature, we achieved a 180% increase in lead volume and a 60% reduction in cost per lead. By aligning campaign strategies with the client’s goals, we ensured improved performance, cost efficiency, and high-quality leads.",
  //     "title": "Maximizing Lead Generation: 180% Increase in Lead Volume and 60% Reduction in CPL",
  //     "filename": "https://storage.googleapis.com/website-bucket-uploads/cs/1733729399146434.pdf",
  //     "publishdate": "9th Dec 2024",
  //     "coverimage": "https://storage.googleapis.com/website-bucket-uploads/cs/1733729425065265.png",
  //     "content": [
  //         {
  //             "heading": "About The Business",
  //             "description": "We Sort It, a New Zealand-based brand offering professional cleaning and lawn mowing services for both residential and commercial clients. The services include regular cleaning, deep cleaning, garden maintenance, lawn care, and more. With a focus on quality, reliability, and sustainability, they ensure your space remains clean, neat, and well-maintained",
  //             "_id": "67569d613effe018dd003dc9"
  //         },
  //         {
  //             "heading": "The Challenge",
  //             "description": "We Sort It faced two key challenges: low overall lead volume, resulting in fewer qualified leads, and an unsustainable cost per lead that hindered profitability due to the business's low-cost service model.",
  //             "_id": "67569d613effe018dd003dca"
  //         },
  //         {
  //             "heading": "The Approach",
  //             "description": "To tackle low lead volume and high costs, we analyzed account data and refined audience targeting strategies. By replacing limited region-based and interest-based targeting with Facebook’s Advantage Detailed Targeting, powered by machine learning, we expanded reach and improved performance.",
  //             "_id": "67569d613effe018dd003dcb"
  //         },
  //         {
  //             "heading": "The Conclusion",
  //             "description": "This approach resulted in a 180% increase in lead volume and a 60% decrease in cost per lead, aligning results with the client’s business objectives.",
  //             "_id": "67569d613effe018dd003dcc"
  //         }
  //     ],
  //     "active": true,
  //     "open": true,
  //     "__v": 0
  // }
  useEffect(() => {
    AOS.init();
    console.log(cd.open);
  }, []);
  const initialValues = { fullName: "", email: "", company: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showWaiting, setShowWaiting] = useState(false);
  const [selected, setSelected] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [formFixed, setFormFixed] = useState(false);

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const dataLayerpush = () => {
    dataLayer.push({
      event: "free_casestudy_download",
      eventCategory: cd.title,
      eventAction: "download",
    });
  };

  useEffect(() => {
    let headerSize = () => {
      const totalScroll = document.documentElement.scrollTop;

      if (totalScroll > 50) {
        setFormFixed(true);
      } else if (totalScroll < 45) {
        setFormFixed(false);
      }
    };

    window.addEventListener("scroll", headerSize);

    return () => window.removeEventListener("scroll", headerSize);
  });

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //console.log(formValues);
      setShowWaiting(true);
      dataLayer.push({
        event: "casestudy_download",
        eventCategory: cd.title,
        eventAction: "download",
      });
      fetch("/api/casestudylead", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formValues?.fullName,
          email: formValues?.email,
          casestudy: cd?.title,
          company: formValues?.company,
          id: cd?._id || "",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('Success:', data);
          setFormSubmit(true);
          setShowWaiting(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setShowWaiting(false);
          alert("there is some issue , please try again !");
        });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const mobile = /^(?=.*\d).{8,}$/i;
    if (!values.fullName) {
      errors.fullName = "Fullname is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.company) {
      errors.company = "Company is required!";
    }

    return errors;
  };

  var url = "https://analyticsliv.com/case-studies/" + cd.slug;

  const scrollToDownload = () => {
    const element = document.getElementById("download-cs");
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  function formatDescription(description) {
    return description
      .split("\n")
      .flatMap((chunk, index) => {
        let trimmedChunk = chunk.trim();

        // Split content into sections by ** for proper bullet point handling
        const sections = trimmedChunk
          .split(/(\*\*.*?:.*?)(?=\*\*|$)/g)
          .filter(Boolean);

        return sections.map((section, i) => {
          const match = section.match(/\*\*(.*?)\:(.*)/);

          if (match) {
            const boldText = match[1].trim();
            const remainingText = match[2].trim();

            return (
              <div
                key={`${index}-${i}`}
                className="flex items-start w-full space-x-2 mt-2 lg:ml-10"
              >
                <div className="w-2 h-2 mt-1.5 2xl:mt-2 bg-[#0E1947] min-w-[8px] rounded-full"></div>
                <p className="text-sm 2xl:text-base text-black">
                  <span className="font-semibold">{boldText}</span>:{" "}
                  {remainingText}
                </p>
              </div>
            );
          }

          // Render normal paragraphs for content outside ** blocks
          return section.trim() ? (
            <p
              key={`${index}-${i}`}
              className="text-sm 2xl:text-base text-black"
            >
              {section.trim()}
            </p>
          ) : null;
        });
      })
      .filter(Boolean); // Remove null entries
  }

  useEffect(() => {
    const handleScroll = () => {
      const form = formRef.current;
      const caseStudy = document.getElementById("caseStudySection");
      form.style.position = "absolute";
      form.style.top = "120px";
      form.style.right = "3%";

      if (form && caseStudy) {
        const formTop = form.getBoundingClientRect().top;
        const caseStudyTop = caseStudy.getBoundingClientRect().top;

        if (formTop <= 0 && caseStudyTop > form.offsetHeight) {
          form.style.position = "fixed";
          form.style.top = "120px";
          form.style.right = "3%";
        } else if (caseStudyTop <= form.offsetHeight) {
          form.style.position = "absolute";
          form.style.top = `${
            window.scrollY + caseStudyTop - form.offsetHeight
          }px`;
        } else {
          form.style.position = "absolute";
          form.style.top = "370px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>AnalyticsLiv - Case Sudies</title>
        <link rel="canonical" href={url}></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
        />
      </Head>
      <ScrollProgress />
      {showWaiting && (
        <div className="fixed flex backdrop-blur top-0 left-0 right-0 z-40 w-full p-4 md:overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
          <ScaleLoader
            color="#271d90"
            loading
            size={100}
            className="m-auto align-middle"
          />
        </div>
      )}
      <div className="overflow-hidden">
        <section className="relative">
          <div className="relative w-full">
            <div className="relative">
              <div className="bg-header-linear relative lg:flex max-lg:flex-col justify-center lg:justify-between items-center px-[5%]">
                <div className="lg:w-[50%] xl:w-[55%] py-10 flex flex-col gap-8 lg:gap-10">
                  {/* <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-white font-bold">{cd?.title}</h1> */}
                  <h1 className="text-2xl lg:text-2xl xl:text-3xl 2xl:text-[35px] text-white font-bold">
                    19% Lower Cost Per Acquisition:
                    <br className="max-sm:hidden"></br>A Case Study in DV360 Ad
                    Optimization
                  </h1>

                  <p className="text-xs md:text-[14px] text-white">
                    The client is an automotive manufacturer that produces cars,
                    vans, and SUVs. The clients vehicles are sold in New Zealand
                    through a network of authorised dealerships. In New Zealand,
                    the client offers a range of vehicles and is responsible for
                    marketing, sales, and after-sales service of the brand's
                    products.
                  </p>
                  <div className="flex items-center justify-start gap-3 sm:gap-7">
                    <button
                      // onClick={scrollToDownload}
                      className="bg-white px-2 sm:px-4 w-max py-2 md:px-4 md:py-[6.5px] xl:px-4 xl:py-[8px] 2xl:px-4 2xl:py-[8px] rounded-[5px]
                                text-[#0E1947] text-[11px] sm:text-sm md:text-base 2xl:text-lg sm:hover:underline md:hover:text-[16.2px] 2xl:hover:text-[18.2px] font-bold"
                    >
                      <img src="/shoebacca.png" className="w-28" />
                    </button>
                    <button
                      // onClick={scrollToDownload}
                      className="flex items-center justify-center gap-1 sm:gap-3 bg-white px-2 py-3 sm:px-4 w-max sm:py-2 md:px-4 md:py-[5px] xl:px-4 xl:py-[4px] 2xl:px-4 2xl:py-[7px] rounded-[5px]
                                text-[#0E1947] text-[10px] sm:text-sm md:text-base 2xl:text-lg sm:hover:underline md:hover:text-[16.2px] 2xl:hover:text-[18.2px] font-bold"
                    >
                      Watch Video Testimonial
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Cassie_img.png"
                        className="w-5 sm:w-8"
                      />
                    </button>
                  </div>
                </div>

                <div className="lg:w-[45%] max-lg:hidden mr-5 2xl:mr-10 flex flex-col items-end relative">
                  <div className="bg-white flex flex-col justify-center items-start w-[160px] xl:w-[171px] h-[147px] z-20 absolute right-[265px] top-14 p-3">
                    <div className="text-[#131126] text-2xl font-bold text-start">
                      19%
                    </div>
                    <div className="text-[#131126] font-bold text-[10px] pb-3">
                      Lower Cost Per Acquisition
                    </div>
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Group%201000004378.png"
                      alt=""
                    />
                  </div>
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/CaseStufy_Girl.png"
                    alt={cd?.title}
                    className="mt-7 z-30"
                  />
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Ellipse%203563.png"
                    alt="Casestudy"
                    className="z-10 absolute top-[105px] right-[-7%]"
                  />
                </div>
              </div>
              {/* <div
                  id="formContainer"
                  className="lg:w-[330px] xl:w-[400px] max-lg:hidden 2xl:w-[425px] absolute right-[3%] top-[370px] z-40 bg-white shadow-csFormShadow my-3 rounded-[5px]"
                > */}
              <div
                id="formContainer"
                ref={formRef}
                className="absolute top-[370px] right-[3%] lg:w-[330px] xl:w-[400px] z-40 max-lg:hidden 2xl:w-[425px] bg-white shadow-csFormShadow my-3 rounded-[5px]"
              >
                {formSubmit ? (
                  <div className="relative p-7 space-y-4 h-full">
                    <h3 className="align-middle font-medium text-4xl text-[#0E1947]">
                      Thank You for your interest.
                    </h3>
                    <h2 className="align-middle text-xl text-[#0E1947]">
                      The download link for this case study has been sent to the
                      email-id provided.
                    </h2>
                    <div>
                      <a href="#" className="text-blue-500 underline">
                        Click here
                      </a>{" "}
                      to go to Home Page
                    </div>
                    <div className="absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75"></div>
                  </div>
                ) : (
                  <form className="space-y-4 md:space-y-4 px-3 md:px-4 py-4 md:py-4">
                    <div className="text-xl 2xl:text-[23px] font-semibold text-center">
                      Enter your details to download the casestudy.
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-[#08A4F7] rounded-[5px] appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                        placeholder=" "
                        required
                        value={formValues.fullName}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="fullName"
                        className="absolute text-xs text-[#08A4F7] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Full Name*
                      </label>
                      <p className="text-red-600 text-sm">
                        {formErrors.fullName}
                      </p>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border border-[#08A4F7] rounded-[5px] appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                        // className="block px-2.5 pb-1.5 pt-2.5 w-full text-sm text-gray-900 bg-transparent  border border-[#08A4F7] rounded-[5px] appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                        placeholder=" "
                        required
                        value={formValues.email}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="email"
                        className="absolute text-xs text-[#08A4F7] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        E-mail*
                      </label>
                      <p className="text-red-600 text-sm">{formErrors.email}</p>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border border-[#08A4F7] rounded-[5px] appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                        placeholder=" "
                        required
                        value={formValues.company}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="company"
                        className="absolute text-xs text-[#08A4F7]  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Company*
                      </label>
                      <p className="text-red-600 text-sm">
                        {formErrors.company}
                      </p>
                    </div>

                    <div className="text-center">
                      <button
                        className="group mainbutn w-full rounded-[5px] flex justify-center items-center gap-3"
                        onClick={handleSubmit}
                      >
                        <div className="max-w-fit">Get Case Study</div>
                        <img
                          src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/download_icon_white%201.png"
                          alt="Download casestudy"
                          className="block group-hover:hidden"
                        />
                        <img
                          src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/download_icon_blue_cs.png"
                          alt="Download casestudy"
                          className="hidden group-hover:block"
                        />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <div className="max-lg:px-[5%] lg:pl-[5%] lg:pr-[40%] xl:pr-[37%] pt-[30px]">
                <div className="2xl:pt-5 pb-3">
                  <div>
                    <h3 className="inline font-semibold text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-[#0E1947]">
                      Challenge
                    </h3>
                    <div className="mt-[30px]">
                      <div className="text-[#5A5A5A] text-sm 2xl:text-base font-normal">
                        Client struggled to convert ad viewers into car buyers
                        despite running ads. Analysis revealed two key issues:
                      </div>
                      <div className="text-[#5A5A5A] text-sm 2xl:text-base font-normal">
                        <span className="text-black">
                          Ineffective Creative Sizes:
                        </span>{" "}
                        Certain creatives  weren't driving conversions despite
                        budget allocation.
                      </div>
                      <div className="flex items-start w-full space-x-2 mt-5 lg:ml-10">
                        <div className="w-2 h-2 mt-1.5 2xl:mt-2 bg-[#0E1947] min-w-[8px] rounded-full"></div>
                        <p className="text-sm 2xl:text-base text-black">
                          <span className="font-semibold">
                            Low-Quality Creatives:
                          </span>{" "}
                          Blurry or low-quality visuals in some ads were
                          hindering user experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-[30px]">
                    <h3 className="inline font-semibold text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-[#0E1947]">
                      Approach
                    </h3>
                    <div className="mt-[30px]">
                      <div className="text-black text-sm 2xl:text-base font-normal">
                        Our data-driven approach leveraged DV360 to optimise ad
                        performance:
                      </div>
                      <div className="flex items-start w-full space-x-2 mt-5 lg:ml-10">
                        <div className="w-2 h-2 mt-1.5 2xl:mt-2 bg-[#0E1947] min-w-[8px] rounded-full"></div>
                        <p className="text-sm 2xl:text-base text-black">
                          <span className="font-semibold">
                            Creative Size Analysis:
                          </span>{" "}
                          We identified the most effective ad sizes (e.g.,
                          300x250, 300x600) for the "Fuel Your Drive" campaign.
                        </p>
                      </div>
                      <div className="flex items-start w-full space-x-2 mt-[10px] lg:ml-10">
                        <div className="w-2 h-2 mt-1.5 2xl:mt-2 bg-[#0E1947] min-w-[8px] rounded-full"></div>
                        <p className="text-sm 2xl:text-base text-black">
                          <span className="font-semibold">
                            Budget Optimization:
                          </span>{" "}
                          Budget was shifted towards well-performing formats,
                          minimizing spending on underperforming ones.
                        </p>
                      </div>
                      <div className="flex items-start w-full space-x-2 mt-[10px] lg:ml-10">
                        <div className="w-2 h-2 mt-1.5 2xl:mt-2 bg-[#0E1947] min-w-[8px] rounded-full"></div>
                        <p className="text-sm 2xl:text-base text-black">
                          <span className="font-semibold">
                            High-Quality Creatives:
                          </span>{" "}
                          We collaborated with the client to replace low-quality
                          visuals with clear, visually appealing elements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-[30px]">
                    <h3 className="inline font-semibold text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-[#0E1947]">
                      Results
                    </h3>
                    <div className="mt-[30px]">
                      <div className="flex items-start w-full space-x-2 mt-5 lg:ml-10">
                        <div className="w-2 h-2 mt-1.5 2xl:mt-2 bg-[#0E1947] min-w-[8px] rounded-full"></div>
                        <p className="text-sm 2xl:text-base text-black">
                          <span className="font-semibold">
                            Increased Conversions:
                          </span>{" "}
                          Effective cost per acquisition (CPA) dropped by 19%
                          compared to the previous month, indicating a
                          significant improvement in conversion rates.
                        </p>
                      </div>
                      <div className="flex items-start w-full space-x-2 mt-[10px] lg:ml-10">
                        <div className="w-2 h-2 mt-1.5 2xl:mt-2 bg-[#0E1947] min-w-[8px] rounded-full"></div>
                        <p className="text-sm 2xl:text-base text-black">
                          <span className="font-semibold">
                            Enhanced User Experience:
                          </span>{" "}
                          High-quality creatives provided a more engaging user
                          experience, leading to better ad reception.
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    src="/Achievments.png"
                    alt="achievements"
                    className="w-full mt-8"
                  />

                  <div className="mt-[30px]">
                    <h3 className="inline font-semibold text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-[#0E1947]">
                      Conclusion
                    </h3>
                    <div id="caseStudySection"></div>
                    <div className="text-black text-sm 2xl:text-base font-normal mt-[30px]">
                      This case study demonstrates the power of data-driven
                      creative optimization in DV360. By analysing performance
                      and implementing strategic adjustments, we helped [Client
                      Name] achieve significant cost savings and improved
                      conversions, ultimately propelling their car sales efforts
                      in New Zealand.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {cd?.open && (
              <div
                id=""
                className={`mx-[5%] lg:hidden p-4 lg:p-8 bg-header-linear py-4 md:flex items-center gap-12 mt-12 mb-12`}
              >
                <div className="text-white md:w-[50%] flex flex-col gap-10">
                  <div className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-white font-bold">
                    Download the case study here!
                  </div>
                  <div>
                    You're close to scaling your business! This case study
                    reveals how AnalyticsLiv empowers top companies to expand
                    their business successfully.
                  </div>
                  <div className="text-sm sm:text-base font-normal">
                    Let's Collaborate for Mutual Success!{" "}
                    <br className="sm:hidden"></br>{" "}
                    <a
                      href="/contact"
                      className="text-sm sm:text-base font-bold sm:ml-3 underline"
                    >
                      Contact Us Now
                    </a>
                  </div>
                </div>
                <div className="md:w-[40%] bg-white my-3 rounded-[5px]">
                  {formSubmit ? (
                    <div className="relative p-4 space-y-4 h-full">
                      <h3 className="align-middle font-medium text-4xl text-[#0E1947]">
                        Thank You for your interest.
                      </h3>
                      <h2 className="align-middle text-xl text-[#0E1947]">
                        The download link for this case study has been sent to
                        the email-id provided.
                      </h2>
                      <div>
                        <a href="#" className="text-blue-500 underline">
                          Click here
                        </a>{" "}
                        to go to Home Page
                      </div>
                      <div className="absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75"></div>
                    </div>
                  ) : (
                    <form className="space-y-4 md:space-y-4 px-3 md:px-4 py-4 md:py-4">
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-[#ECECEC] rounded-[5px] appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                          placeholder=" "
                          required
                          value={formValues.fullName}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="fullName"
                          className="absolute text-xs text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        >
                          Full Name*
                        </label>
                        <p className="text-red-600 text-sm">
                          {formErrors.fullName}
                        </p>
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border border-[#ECECEC] rounded-[5px] appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                          placeholder=" "
                          required
                          value={formValues.email}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="email"
                          className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        >
                          E-mail*
                        </label>
                        <p className="text-red-600 text-sm">
                          {formErrors.email}
                        </p>
                      </div>

                      <div className="relative">
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border border-[#ECECEC] rounded-[5px] appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                          placeholder=" "
                          required
                          value={formValues.company}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="company"
                          className="absolute text-xs text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        >
                          Company*
                        </label>
                        <p className="text-red-600 text-sm">
                          {formErrors.company}
                        </p>
                      </div>

                      <div className="text-center">
                        <button
                          className="group mainbutn w-full rounded-[5px] flex justify-center items-center gap-3"
                          onClick={handleSubmit}
                        >
                          <div className="max-w-fit">Get Case Study</div>
                          <img
                            src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/download_icon_white%201.png"
                            alt="Download casestudy"
                            className="block group-hover:hidden"
                          />
                          <img
                            src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/download_icon_blue_cs.png"
                            alt="Download casestudy"
                            className="hidden group-hover:block"
                          />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            <h1 className="px-[5%] pb-11 md:pt-3 lg:pt-7 text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-[#0E1947] font-bold">
              Related Case Studies
            </h1>

            <div className="px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 lg:gap-4 2xl:gap-7 pb-16">
              <a
                href="case-studies/elevate-the-brand-reach-with-discovery-campaigns"
                className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative"
              >
                <div className="flex flex-col justify-evenly h-full">
                  {/* <div className="absolute w-[100px] text-center top-4 2xl:top-6 left-4 2xl:left-6 bg-[#A2EC4E99] text-white font-semibold px-3 py-1 rounded-tl-2xl 2xl:rounded-tl-[20px] rounded-br-md text-sm">Marketing</div> */}
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Case_study_10_Brand_Reach_Discovery_Campaign%201.png"
                    alt="Brand_Reach_Discovery_Campaign"
                    className="rounded-md mb-4 w-full"
                  />
                  <h3
                    className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Elevate the brand reach with Discovery Campaigns 17% higher
                    CTR compared to Pmax
                  </h3>
                  <p
                    className="text-sm text-[#373642] mb-4"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 3,
                    }}
                  >
                    In the shopping season of black Friday and cyber Monday, our
                    objective was to increase the reach of brand and drive huge
                    amount of relevant traffic to the website by expanding the
                    audience size in top of the funnel with the help of
                    discovery campaigns
                  </p>
                  <div className="flex justify-between items-center text-sm text-[#0066cc]">
                    <span className="text-[#6B7280]">25th Nov 2024</span>
                    <button className="text-[#08A4F7] text-base font-medium hover:underline">
                      Read Full
                    </button>
                  </div>
                </div>
              </a>
              <a
                href="/case-studies/ga4-enhanced-ecommerce-implementation-using-gtm-and-shopify-integration"
                className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative"
              >
                <div className="flex flex-col justify-evenly h-full">
                  {/* <div className="absolute w-[100px] text-center top-4 2xl:top-6 left-4 2xl:left-6 bg-[#EC954E99] text-white font-semibold px-3 py-1 rounded-tl-[20px] 2xl:rounded-tl-3xl rounded-br-md text-sm">Analytics</div> */}
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/shopify.png"
                    alt="Gshopify"
                    className="rounded-md mb-4 w-full"
                  />
                  <h3
                    className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    GA4 Enhanced Ecommerce Implementation Using GTM and Shopify
                    Integration
                  </h3>
                  <p
                    className="text-sm text-[#373642] mb-4"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 3,
                    }}
                  >
                    A Shopify-powered e-commerce business in the East was facing
                    challenges with Universal Analytics (UA) in capturing
                    purchase data reliably. The client was unable to track data
                    for resale products put on the post-purchase page and upsell
                    products bought through third-party interfaces.
                  </p>
                  <div className="flex justify-between items-center text-sm text-[#0066cc]">
                    <span className="text-[#6B7280]">06th Aug 2024</span>
                    <button className="text-[#08A4F7] text-base font-medium hover:underline">
                      Read Full
                    </button>
                  </div>
                </div>
              </a>
              <a
                href="/case-studies/180-percent-increase-in-lead-volume-and-60-percent-reduction-cpl"
                className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative"
              >
                <div className="flex flex-col justify-evenly h-full">
                  {/* <div className="absolute w-[100px] text-center top-4 2xl:top-6 left-4 2xl:left-6 bg-[#A2EC4E99] text-white font-semibold px-3 py-1 rounded-tl-2xl 2xl:rounded-tl-[20px] rounded-br-md text-sm">Marketing</div> */}
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/increase_in_leadvolume.png"
                    alt="increase_in_leadvolume"
                    className="rounded-md mb-4 w-full"
                  />
                  <h3
                    className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Maximizing Lead Generation: 180% Increase in Lead Volume and
                    60% Reduction in CPL
                  </h3>
                  <p
                    className="text-sm text-[#373642] mb-4"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 3,
                    }}
                  >
                    We Sort It, a New Zealand-based cleaning and lawn care
                    service provider, faced challenges with low lead volume and
                    high costs per lead. Through advanced audience targeting and
                    leveraging Facebook's Advantage Detailed Targeting feature,
                    we achieved a 180% increase in lead volume and a 60%
                    reduction in cost per lead. By aligning campaign strategies
                    with the client’s goals, we ensured improved performance,
                    cost efficiency, and high-quality leads.
                  </p>
                  <div className="flex justify-between items-center text-sm text-[#0066cc]">
                    <span className="text-[#6B7280]">9th Aug 2024</span>
                    <button className="text-[#08A4F7] text-base font-medium hover:underline">
                      Read Full
                    </button>
                  </div>
                </div>
              </a>
              <a
                href="/case-studies/driving-campaigns-in-dv360-to-post-click-attribution-success-with-36-percent-reduction-in-cpi"
                className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative"
              >
                <div className="flex flex-col justify-evenly h-full">
                  {/* <div className="absolute w-[100px] text-center top-4 2xl:top-6 left-4 2xl:left-6 bg-[#A2EC4E99] text-white font-semibold px-3 py-1 rounded-tl-2xl 2xl:rounded-tl-[20px] rounded-br-md text-sm">Marketing</div> */}
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/cs/Case_study_4_Post_Click_Tracking_1.png"
                    alt="increase_in_leadvolume"
                    className="rounded-md mb-4 w-full"
                  />
                  <h3
                    className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Driving the Campaigns in DV360 to Post Click Attribution
                    Success with a 36% reduction in CPI
                  </h3>
                  <p
                    className="text-sm text-[#373642] mb-4"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 3,
                    }}
                  >
                    Implementing post-click conversions in DV360 attribution led
                    to increased conversions, a 36% lower CPI, and a notable 38%
                    boost in overall click-through rate, showcasing the
                    effectiveness of our refined attribution model.
                  </p>
                  <div className="flex justify-between items-center text-sm text-[#0066cc]">
                    <span className="text-[#6B7280]">4th Sept 2024</span>
                    <button className="text-[#08A4F7] text-base font-medium hover:underline">
                      Read Full
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;

import React, { useEffect, useState } from "react";
import "@fontsource/lato";
import { scroller } from "react-scroll";
import { ScaleLoader } from "react-spinners";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";

export default function CookieConsent({ brandsdata }) {
  const initialValues = { fullName: "", email: "", contact: "", company: "" };
  const [formSubmit, setFormSubmit] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showWaiting, setShowWaiting] = useState(false);
  
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-[-12px] md:right-[-20px] lg:right-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaArrowRight size={20} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-[-12px] md:left-[-20px] lg:left-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaArrowLeft size={20} />
      </div>
    );
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          speed: 1000,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 988,
        settings: {
          dots: false,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          speed: 1000,
          // nextArrow: false,
          // prevArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const scrolling1 = () => {
    scroller.scrollTo("webinarForm", {
      duration: 500,
      smooth: true,
      offset: -100,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setShowWaiting(true);
      // dataLayer.push({
      //     event: 'gtm_submission'
      // });
      fetch("/api/webinar/cookieContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify({
          fullName: formValues.fullName,
          email: formValues.email,
          contact: formValues.contact,
          company: formValues.company,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setFormSubmit(true);
          setShowWaiting(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullName = "Name is required!";
    }

    const mobile = /^\+?(\d{1,3})[-.\s]?(\d{5,14})$/;

    if (!values.contact) {
      errors.contact = "Contact is required!";
    } else if (!mobile.test(values.contact)) {
      errors.contact = "This is not a valid phone number!";
    }

    if (!values.company) {
      errors.company = "Company name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollPosition / totalHeight) * 100;

      if (scrollPercent > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="font-lato">
      <div className="bg-[#2E2C37]">
        <div className="flex justify-between max-sm:gap-2 px-2 md:px-16 pt-5 ">
          <img
            src="/AnalyticsLiv Logo.png"
            alt="analyticsliv-logo"
            className="max-sm:h-11 max-md:h-16 max-sm:w-[140px] max-md:w-[30%] bg-white rounded-full px-4"
          />
          <img
            src="/Google_Marketing_Plateform_Certified_Logo 1.png"
            alt="google-partner"
            className="max-sm:h-11 max-md:h-16 max-sm:w-[140px] max-md:w-[30%] "
          />
        </div>
        <div
          className=" 2xl:h-[750px] xl:h-[560px] max-sm:h-[450px] max-md:h-[350px] max-lg:h-[400px] max-xl:h-[525px] mt-5"
          style={{
            backgroundImage: "url(/vectormain.png)",
            backgroundSize: "contain",
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex-grow flex justify-between items-center relative max-sm:px-2 sm:pr-5 2xl:px-10">
            <div className="text-left max-md:pt-5 flex-1 sm:pl-[5dvw] md:px-[4dvw] lg:px-0 lg:pl-[13dvw] xl:pl-[17dvw] 2xl:pt-0 xl:pt-[100px] 2xl:pl-[11dvw]">
              <div className="text-2xl md:text-3xl 2xl:text-4xl md:pt-4 lg:pt-14 xl:pt-5 2xl:pt-48 font-black text-white mb-6 max-sm:mb-5 font-lato max-lg:text-center">
                Join <span className="flashing-text">WEBINAR</span> for,
                <br></br>
                Google Basic Consent vs. Advanced Consent - Optimising Your Data
                Strategy
              </div>
              <div className="text-base text-white mb-12 sm:mb-8 xl:mb-5 font-lato max-lg:text-center">
                You should Join this insightful webinar, Whether you're in
                marketing, web management, or data analytics, this webinar will
                simplify the process of managing consent for you.
              </div>
              <div className="flex justify-center lg:justify-start lg:gap-16 max-md:justify-evenly items-center gap-0 sm:gap-5 md:gap-12">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/calendar (5).png"
                    alt="calender"
                    className=" w-[65px] h-[65px] max-lg:w-[35px] max-lg:h-[35px] lg:w-[55px] lg:h-[55px]"
                  />
                  <div className="text-white text-xs sm:text-base font-extrabold pt-1.5 sm:pt-3 text-center">
                    15th Oct
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="/clock (3) 2.png"
                      alt="clock"
                      className="w-[65px] h-[65px] max-lg:w-[35px] max-lg:h-[35px] lg:w-[55px] lg:h-[55px]"
                    />
                    <div className="text-white text-xs sm:text-base font-extrabold pt-1.5 sm:pt-3">
                      9:00 PM IST{" "}
                      <span className="max-sm:hidden">
                        / 11:30 AM EST / 8:30 AM PST
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={scrolling1}
                  className="cookiebutton py-2 px-4 text-xs font-semibold md:px-5 md:py-3 lg:py-2.5 lg:px-6 xl:py-2 lg:text-sm lg:font-semibold 2xl:py-3 2xl:px-8 xl:text-lg xl:font-bold 
                  border border-[#FFFFFF] rounded-md shadow-[2px_2px_3px_1px_rgba(0,0,0,0.25)] mt-6 md:mt-8 lg:mt-6 xl:mt-10"
                >
                  RESERVE YOUR SPOT
                </button>
              </div>
            </div>

            <div className="flex-none">
              <img
                src="/IMG.png"
                alt="main-img"
                className="2xl:h-[750px] max-2xl:h-[560px] max-xl:h-[525px] max-lg:h-[438px] max-md:h-[250px] max-lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="flex justify-center lg:justify-evenly max-lg:flex-col xl:gap-36 xl:px-28">
        {showWaiting ? (
          <div className="fixed flex backdrop-blur top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <ScaleLoader
              color="#271d90"
              loading
              size={100}
              className="m-auto align-middle"
            />
          </div>
        ) : formSubmit ? (
          <div
            className="webinarForm max-md:mx-4 max-lg:mx-28 overflow-auto z-10 h-[400px] md:h-[475px] lg:h-[500px] xl:h-[530px] 2xl:h-[550px] 
            md:my-10 max-md:mt-4 xl:top-[400px] 2xl:top-[550px] lg:w-[350px] xl:w-[420px] border-[5px] rounded-lg border-[#FFFFFF] 
            shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] text-center flex flex-col justify-around items-center px-3 md:px-4 py-2 md:py-5 bg-white"
          >
            <h2 className="md:text-xl text-[#3C292A]">
              Thank you for showing interest with us!
            </h2>
            <h2 className="font-extrabold text-3xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">
              We will get back to you shortly !!
            </h2>
            <img
              alt="Thankyou"
              className="w-64 mx-auto"
              src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg"
            />
          </div>
        ) : (
          <div
            className="webinarForm max-md:mx-4 max-lg:mx-28 overflow-auto z-10 h-[400px] md:h-[475px] lg:h-[500px] xl:h-[530px] 2xl:h-[550px] 
            md:my-10 max-md:mt-4 xl:top-[400px] 2xl:top-[550px] lg:w-[350px] xl:w-[420px] border-[5px] rounded-lg border-[#FFFFFF] 
            shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] text-center flex flex-col justify-around items-center px-3 md:px-4 xl:px-7 py-2 md:py-3 bg-white"
          >
            <h1 className="font-extrabold text-3xl md:text-[28px] text-[#3C292A]">
              On Demand Webinar
            </h1>

            <div className="text-sm font-normal leading-4 text-[#3C292A]">
              Register Now to optimize your data strategy while staying
              compliant with evolving privacy regulations.
            </div>

            <form
              className="flex flex-col gap-3.5 md:gap-6 lg:gap-8 2xl:gap-8 w-[90%] md:w-[90%]"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Name*"
                style={{ boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.3)" }}
                className="px-3 py-2 text-sm border border-[#3C292A] rounded-md"
                id="fullName"
                name="fullName"
                value={formValues.fullName}
                required
                onChange={handleChange}
              />

              <input
                type="email"
                placeholder="Email*"
                style={{ boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.3)" }}
                className="px-3 py-2 text-sm border border-[#3C292A] rounded-md"
                id="email"
                name="email"
                value={formValues.email}
                required
                onChange={handleChange}
              />

              <input
                type="number"
                placeholder="Contact No*"
                style={{ boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.3)" }}
                className="px-3 py-2 text-sm border border-[#3C292A] rounded-md"
                id="contact"
                name="contact"
                required
                value={formValues.contact}
                onChange={handleChange}
              /> 


              <input
                type="text"
                placeholder="Your company"
                style={{ boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.3)" }}
                className="px-3 py-2 text-sm border border-[#3C292A] rounded-md"
                id="company"
                name="company"
                value={formValues.company}
                onChange={handleChange}
              />
              <p className="text-red-600 text-sm">{formErrors.contact}</p>

              <button className="gtmbutn4 bg-gradient-to-l from-[#EB5442] to-[#ED7754] hover:border-black hover:border-[1px] hover:text-[#EB5442] border border-[#FFFFFF] rounded-md shadow-[2px_2px_3px_1px_rgba(0,0,0,0.25)] py-2 text-sm font-extrabold">
                REGISTER NOW
              </button>
            </form>
          </div>
        )}
        <div className="w-full lg:w-[50%] xl:w-[50%] 2xl:w-[55%] pt-12 sm:pt-5 lg:pb-10">
          <div className="text-[35px] font-bold text-[#3C292A] pb-2 lg:pb-4 xl:pb-8 xl:font-extrabold text-center ">
            <span className="inline-block relative">
              Meet&nbsp;
              <span
                className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                style={{
                  width: "80px",
                  height: "5px",
                  borderRadius: "10px",
                  top: "calc(100% )",
                  left: "0",
                }}
              ></span>
            </span>
            Our Presenters
          </div>

          {/* mobile view */}

          <div className="pb-8 pt-8 md:hidden max-sm:pb-2 w-[90%] mx-auto relative carousel-custom">
            <Slider {...settings}>
              <div className="flex flex-col w-[200px] justify-center items-center">
                <img
                  src="/Shubhangi_Webinar_Profile_Pic_New.png"
                  alt=""
                  className="pb-3 mx-auto"
                />
                <div className="text-base font-black text-center text-[#3C292A] pb-2">
                  Shubhangi Chauhan
                </div>
                <div className="text-sm font-normal text-center">
                  Account Manager
                </div>
              </div>
              <div className="flex flex-col w-[200px] justify-center items-center">
                <img
                  src="/Abhishek_Webinar_Profile_Pic_New (1).png"
                  alt=""
                  className="pb-3 mx-auto"
                />
                <div className="text-base font-black text-center text-[#3C292A] pb-2">
                  Abhishek Tiwari
                </div>
                <div className="text-sm font-normal text-center">
                  CSM & GA4 Expert
                </div>
              </div>
              <div className="flex flex-col w-[200px] justify-center items-center">
                <img
                  src="/Anshul_Webinar_Profile_Pic_New.png"
                  alt=""
                  className="pb-3 mx-auto"
                />
                <div className="text-base font-black text-center text-[#3C292A] pb-2">
                  Anshul Dhurandhar
                </div>
                <div className="text-sm font-normal text-center">
                  GTM Expert
                </div>
              </div>
            </Slider>
          </div>

          {/* desktop view */}
          <div className="max-md:hidden lg:border-b lg:border-b-[#BBBBBB] lg:pb-5 xl:pb-10 2xl:pb-14 flex max-sm:flex-col max-sm:gap-14 items-center justify-around xl::justify-between">
            <div className="flex flex-col">
              <img
                src="/Shubhangi_Webinar_Profile_Pic_New.png"
                alt=""
                className="pb-3"
              />
              <div className="text-base font-black text-center text-[#3C292A] pb-2">
                Shubhangi Chauhan
              </div>
              <div className="text-sm font-normal text-center">
                Account Manager
              </div>
            </div>
            <div className="flex flex-col">
              <img
                src="/Abhishek_Webinar_Profile_Pic_New (1).png"
                alt=""
                className="pb-3"
              />
              <div className="text-base font-black text-center text-[#3C292A] pb-2">
                Abhishek Tiwari
              </div>
              <div className="text-sm font-normal text-center">
                CSM & GA4 Expert
              </div>
            </div>
            <div className="flex flex-col">
              <img
                src="/Anshul_Webinar_Profile_Pic_New.png"
                alt=""
                className="pb-3"
              />
              <div className="text-base font-black text-center text-[#3C292A] pb-2">
                Anshul Dhurandhar
              </div>
              <div className="text-sm font-normal text-center">GTM Expert</div>
            </div>
          </div>
          <div className="flex justify-center max-md:pb-10">
            <div className="shadow-cookiePageShadow w-[330px] sm:w-[350px] lg:w-[450px] lg:py-3 rounded-3xl mt-[40px]">
              <div className="flex justify-evenly py-5">
                <div className="flex flex-col justify-center items-center">
                  <img className="pb-2" src="/Duration.png" alt="time" />
                  <div className="text-xl font-bold">Duration</div>
                  <div className="text-sm font-normal text-center ">1 Hour</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="pb-2"
                    src="/reduce-cost (2) 1.png"
                    alt="time"
                  />
                  <div className="text-xl font-bold">Cost</div>
                  <div className="text-sm font-normal text-center ">Free</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex max-xl:flex-col bg-[#F5FDFF] md:pt-7 xl:pt-0 md:mt-16 xl:mt-0">
        <section className="w-full xl:px-20">
          <div className="text-2xl md:text-[35px] font-bold text-[#3C292A] pt-16 pb-16 xl:font-extrabold text-center">
            <span className="inline-block relative">
              In this&nbsp;
              <span
                className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                style={{
                  width: "90px",
                  marginTop: "8px",
                  height: "5px",
                  borderRadius: "10px",
                  top: "calc(100% )",
                  left: "0",
                }}
              ></span>
            </span>
            webinar, you'll learn :
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 max-md:gap-8 md:gap-16 max-sm:grid-cols-1 justify-around md:px-10 2xl:px-24 pb-8 xl:pb-20">
            <div className="flex flex-col items-center max-md:gap-4 md:gap-10">
              <img src="/image 1 1.png" className=" h-32 w-32" alt="privacy" />
              <div className="text-sm font-medium text-center">
                The fundamentals of consent <br></br>& its role in data privacy.
              </div>
            </div>
            <div className="flex flex-col items-center max-md:gap-4 md:gap-10">
              <img src="/image 2 1.png" className=" h-32 w-32" alt="privacy" />
              <div className="text-sm font-medium text-center">
                A comparison of Basic & <br></br>Advanced Consent Modes.
              </div>
            </div>
            <div className="flex flex-col items-center max-md:gap-4 md:gap-10">
              <img
                src="/image 3 1.png"
                className=" h-32 w-32"
                alt="online-privacy"
              />
              <div className="text-sm font-medium text-center">
                How to implement Google’s <br></br>Consent Mode for websites and
                <br></br> PPC campaigns.
              </div>
            </div>
            <div className="flex flex-col items-center max-md:gap-4 md:gap-10">
              <img src="/image 4 1.png" className=" h-32 w-32" alt="settings" />
              <div className="text-base font-medium text-center">
                Insights on tools like Cookiebot<br></br> and OneTrust for
                effective <br></br>consent management.
              </div>
            </div>
          </div>
        </section>
      </section>
      x
      <section
        id="sticky-section"
        className={`bg-gradient-to-l from-[#EB5442] to-[#ED7754] max-md:py-3 md:py-5 max-md:gap-0 flex items-center justify-between lg:justify-center 
                      lg:gap-16 xl:gap-16 px-3.5 md:px-5 lg:px-8 xl:px-16 2xl:px-56  transform transition-all duration-1000 ease-in-out ${
                        isSticky
                          ? "sticky translate-y-0  transform transition-all duration-1000 ease-out"
                          : "transform transition-all duration-1000 ease-in-out translate-y-10"
                      }`}
      >
        <div className="text-[12px] max-sm:w-[60%] max-lg:w-[77%] md:text-xl font-semibold text-white">
          Are you looking for the right partner to implement Cookie consent for
          your business?
        </div>
        <a
          onClick={scrolling1}
          target="_blank"
          className="max-sm:w-[107px] bg-white text-[#ED7754] cursor-pointer shadow-foter 
                        text-center py-2 border rounded-[5px] px-2 sm:px-3 text-[11px] xl:text-base md:text-sm font-semibold
                          cookiebutton hover:border-white hover:border-[1px] hover:text-white border-[#FFFFFF] text-sm"
        >
          Contact Us Now
        </a>
      </section>
      <div className="bg-[#E8FBFB] py-5 flex flex-col gap-3 px-4 lg:px-20">
        <h2 className="text-center font-bold text-base lg:text-3xl xl:font-extrabold">
          Trusted by Organisations Worldwide
        </h2>
        <div className="brandsimages flex space-x-8 justify-center py-4 px-4 mt-4">
          <Marquee gradient={false} pauseOnHover="true">
            {brandsdata?.brand.map((brands, key) => (
              <div key={key}>
                <img src={brands.logo} alt={brands.brands} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <section className="bg-[#2E2C37] w-full h-full flex justify-center py-2 px-2 md:px-4 md:py-4 lg:py-8 lg:px-10">
        <img
          onClick={scrolling1}
          src="/Webinar_Landing_Page_Banner_1 (1).png"
          alt="footer-banner"
          className="w-full cursor-pointer"
        />
      </section>
    </main>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API

  const res = await fetch(`${process.env.domain}/api/ga4brands`);
  const brandsdata = await res.json();

  //console.log(brandsdata);
  // Pass data to the page via props
  return { props: { brandsdata } };
}

{
  /* <div className=" pt-10 max-xl:pb-8 max-md:px-3 lg:pt-20 flex max-lg:flex-col items-center gap-2 2xl:gap-5">
            <img
              src="/Point_Icon.png"
              alt="point-img"
              className="max-sm:h-8 max-sm:w-9"
            />
            <div className="max-md:text-center">
              Whether you're in marketing, web management, or data analytics,
              this webinar will <br className="max-md:hidden"></br>simplify the
              process of managing consent for you.
            </div>
          </div> */
}

{
  /* <div className="flex justify-center pb-5">
                <button
                  onClick={scrolling1}
                  className="gtmbutn4 bg-gradient-to-l from-[#EB5442] to-[#ED7754] hover:border-black hover:text-[#EB5442] hover:border-[1px] border border-[#FFFFFF] rounded-md shadow-[2px_2px_3px_1px_rgba(0,0,0,0.25)] py-2 text-xs px-4 font-extrabold"
                >
                  RESERVE YOUR SPOT
                </button>
              </div> */
}

{
  /* <div className=" pt-10 max-xl:pb-8 max-md:px-3 lg:pt-20 flex max-lg:flex-col items-center gap-2 2xl:gap-5">
            <img
              src="/Point_Icon.png"
              alt="point-img"
              className="max-sm:h-8 max-sm:w-9"
            />
            <div className="max-md:text-center">
              Whether you're in marketing, web management, or data analytics,
              this webinar will simplify the
              process of managing consent for you.
            </div>
          </div> */
}

{
  /* <div className="border-b-[#D3D3D3] border-b flex justify-center gap-7 py-3">
                <img src="/Time.png" alt="time" />
                <div className="flex flex-col">
                  <div className="text-lg font-bold text-left">
                    Tuesday, Oct 15th
                  </div>
                  <div className="text-sm font-normal text-left">9 PM IST</div>
                </div>
              </div> */
}

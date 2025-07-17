import React, { useEffect, useState } from "react";
import MetaSchemaOg from "../../components/MetaSchemaOg";
import LearningCarousel from "../../components/LookerWeb";
import { FiMenu, FiX } from "react-icons/fi";
import * as Scroll from "react-scroll";
import Head from "next/head";
import Footer from "../../components/Footer";

const { Element: ScrollElement } = Scroll;

const LookerStudio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const initialValues = {
    fullName: "",
    email: "",
    contactno: "",
    company: "",
    profession: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showWaiting, setShowWaiting] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const scrolling = () => {
    {
      Scroll.scroller.scrollTo("contact-form", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
      setMenuOpen(false);
    }
  };
  const scrolling1 = () => {
    {
      Scroll.scroller.scrollTo("webinar-time", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
      setMenuOpen(false);
    }
  };
  const scrolling2 = () => {
    {
      Scroll.scroller.scrollTo("speakers", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
      setMenuOpen(false);
    }
  };
  const scrolling3 = () => {
    {
      Scroll.scroller.scrollTo("learn", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
      setMenuOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;
    setFormValues((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^[0-9]{8,15}$/;

    if (!formValues?.fullName?.trim()) errors?.push("Name");
    if (!formValues?.email?.trim() || !emailRegex.test(formValues?.email))
      errors.push("Email");
    // if (!formValues?.contactno?.trim() || !phoneRegex.test(formValues?.contactno)) errors.push("Contact Number");
    if (!formValues?.company) errors?.push("Company");
    console.log("errors?.length,", errors?.length);
    if (errors?.length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }
    console.log("check log-", formErrors);
    // setFormErrors(validate(formValues));
    setIsSubmit(true);
    setShowWaiting(true);
    dataLayer.push({
      event: "webinar_submission",
    });
    fetch("/api/webinar/cookieContact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({
        fullName: formValues.fullName,
        email: formValues.email,
        contact: formValues.contactno,
        company: formValues.company,
        profession: formValues.profession,
        type: "Looker-studio",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormSubmit(true);
        setShowWaiting(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setShowWaiting(false);
      });
  };

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // Clean up on unmount
    return () => {
      document.body.removeChild(tag);
    };
  }, []);

  useEffect(() => {
    let player = null;
    let interval = null;

    (window).onYouTubeIframeAPIReady = () => {
      player = new (window).YT.Player('youtube-player', {
        videoId: 'hBvIw2Y4C60',
        events: {
          onStateChange: (event) => {
            const state = event.data;

            if (state === 1) {
              // ▶️ Video Played
              gtag('event', 'video_play', {
                event_category: 'YouTube Video',
                event_label: 'Looker Webinar',
                value: 1,
              });

              // Start tracking time
              interval = setInterval(() => {
                const duration = player.getDuration();
                const currentTime = player.getCurrentTime();
                const percentage = Math.floor((currentTime / duration) * 100);
                player.percentageWatched = percentage;
              }, 1000);
            }

            if (state === 2) {
              // ⏸️ Video Paused
              clearInterval(interval);
              const watched = player.percentageWatched || 0;
              gtag('event', 'video_pause', {
                event_category: 'YouTube Video',
                event_label: 'Looker Webinar',
                value: watched,
              });
            }

            if (state === 0) {
              // ⏹️ Video Ended
              clearInterval(interval);
              gtag('event', 'video_end', {
                event_category: 'YouTube Video',
                event_label: 'Looker Webinar',
                value: 100,
              });
            }
          },
        },
      });
    };

    return () => clearInterval(interval);
  }, []);



  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://storage.googleapis.com/website-bucket-uploads/static/favicon.png"
          type="image/icon type"
        ></link>
      </Head>
      <MetaSchemaOg
        url="https://analyticsliv.com/webinar/looker-studio"
        title="Free Looker Studio Webinar | AnalyticsLiv"
        description="Join our free webinar to master Looker Studio dashboards and unlock powerful data insights with experts from AnalyticsLiv"
        twitterTitle="Free Looker Studio Webinar | AnalyticsLiv"
        twitterDescription="Learn from experts at AnalyticsLiv how to create impactful dashboards and visualize data effectively with Looker Studio. Reserve your free seat today!"
        extraHead={
          <>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=Poppins:wght@400;600;700&family=Satisfy&display=swap"
            />
            <style>
              {`
          body {
              font-family: 'Open Sans', sans-serif;
          }
          .font-thabit {
              font-family: 'Thabit', monospace;
          }
        `}
            </style>
          </>
        }
      />

      <div className="font-sans pb-16">
        <section className="relative flex flex-col justify-between overflow-hidden">
          {/* Background image as full section background */}
          <img
            src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Rectangle%204.png"
            alt=""
            className="absolute inset-0 w-full h-full overflow-hidden z-0"
          />

          {/* HEADER */}
          <header className="relative z-[1000] px-[5%] py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="lg:w-[30%]">
              <img
                alt="logo"
                className="w-[170px] lg:w-[180px] 2xl:w-[220px]"
                src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png"
              />
            </div>
            <div className="hidden w-[70%] lg:flex justify-between pr-40 items-center">
              <div className="webinar-header w-[80%] flex justify-around items-center text-[#464646] text-sm 2xl:text-[15px] font-bold">
                <div
                  onClick={scrolling1}
                  className="cursor-pointer opacity-90 hover:opacity-100 hover:underline"
                >
                  Webinar Date & Time
                </div>
                <div
                  onClick={scrolling2}
                  className="cursor-pointer opacity-90 hover:opacity-100 hover:underline"
                >
                  Our Speakers
                </div>
                <div
                  onClick={scrolling3}
                  className="cursor-pointer opacity-90 hover:opacity-100 hover:underline"
                >
                  What you’ll Learn
                </div>
              </div>
              <button onClick={scrolling} className="register-now relative w-max group">
                <div className="z-20 relative bg-white border border-[#0D7078] rounded-full pl-3 3xl:pl-4 pr-2.5 3xl:pr-3.5 py-3 3xl:py-4 shadow-webinarShadow transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/popup/Add%20User.png"
                    alt="User Icon"
                    className="w-[24px] 3xl:w-[30px]"
                  />
                </div>
                <div className="absolute top-1.5 3xl:top-[9px] left-8 z-10 w-[190px] 3xl:w-[220px] bg-[#0D7078] pl-9 3xl:pl-12 pr-5 py-1.5 3xl:py-2 rounded-lg text-white text-base 3xl:text-xl font-semibold 3xl:font-bold 
                transition-all duration-300 transform group-hover:translate-x-1 group-hover:scale-[1.01] group-hover:bg-[#0a5a62]"
                >
                  REGISTER NOW
                </div>
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[#0D7078] text-2xl"
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
              <div className="fixed top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col gap-4 text-[#464646] font-semibold text-sm z-[999]">
                <div onClick={scrolling1} className="border-b pb-2">
                  Webinar Date & Time
                </div>
                <div onClick={scrolling2} className="border-b pb-2">
                  Our Speakers
                </div>
                <div onClick={scrolling3} className="border-b pb-2">
                  What you’ll Learn
                </div>
                <div className="mt-2">
                  <button
                    onClick={scrolling}
                    className="register-now w-full flex items-center justify-center gap-2 bg-[#0D7078] text-white px-4 py-2 rounded-md text-sm"
                  >
                    REGISTER NOW
                  </button>
                </div>
              </div>
            )}
          </header>

          {/* MAIN CONTENT */}
          <div className="relative z-20 flex flex-col lg:flex-row justify-between px-[5%] grow pt-5 2xl:pt-14 pb-12 3xl:pb-24 overflow-hidden">
            {/* LEFT TEXT BLOCK */}
            <div className="w-full lg:w-[45%] 3xl:w-[40%]">
              <div className="relative inline-block">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/popup/OBJECTS.png"
                  alt=""
                  className="max-3xl:w-[200px]"
                />
                <div className="absolute top-3 3xl:top-4 left-7 3xl:left-6 text-2xl 3xl:text-[33px] font-semibold font-thabit">
                  WEBINAR on
                </div>
              </div>
              <div className="text-[#1C1C1C] text-[36px] 3xl:text-[50px] font-semibold leading-10 pt-5 3xl:pt-8 pb-6">
                Data <span className="font-satisfy">Storytelling</span> with
              </div>
              <div className="text-[42px] lg:text-[55px] 3xl:text-[65px] text-[#4186F4] font-poppins font-semibold leading-6 3xl:leading-10">
                Looker Studio
              </div>
              <div className="text-[#464646] text-lg 3xl:text-2xl font-normal pt-10">
                Join the live session with experts from AnalyticsLiv.
                <br />
                We share expert strategies on transforming raw data into
                compelling stories using Looker Studio.
              </div>

              <div
                id="webinar-time"
                className="shadow-webinarTime bg-[#8BCBFF4A] flex max-sm:grid max-sm:grid-cols-2 max-sm:gap-5 max-sm:mx-auto px-4 3xl:px-[25px] max-sm:py-8 py-4 2xl:py-[20px] mt-11 justify-between 3xl:justify-evenly items-start rounded-[17px] border border-[#B9B9B999]"
              >
                <div className="flex flex-col items-center gap-3">
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/popup/Date.png"
                    alt=""
                  />
                  <div className="text-xs text-center">24 July 2025</div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/popup/Time%20(1).png"
                    alt=""
                  />
                  <div className="text-xs text-center">
                    8:00 PM IST<br></br>7:30 AM PST
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/popup/Duration%20(1).png"
                    alt=""
                  />
                  <div className="text-xs text-center">1 Hour</div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/popup/Cost.png"
                    alt=""
                  />
                  <div className="text-xs text-center">Free</div>
                </div>
                <div className="max-sm:col-span-2 max-sm:flex max-sm:justify-center">
                  <button
                    onClick={scrolling}
                    className="register-now bg-[#0C7077] shadow-teamShadow px-3 2xl:px-4 py-2 max-sm:mt-2 sm:my-4 flex justify-center items-center gap-2 rounded-[10px] text-white transition-all duration-300 transform hover:scale-[1.01] hover:bg-[#095c61] group"
                  >
                    <div className="text-sm 2xl:text-base font-bold transition-all duration-300 transform group-hover:translate-x-0.5">
                      REGISTER NOW
                    </div>
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/popup/Right%20Arrow.png"
                      alt="Arrow Icon"
                      className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>

              <div className="relative mt-10 max-lg:hidden">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/popup/Layer_1.png"
                  alt=""
                  className="absolute bottom-[-45px] 3xl:bottom-[-100px] right-[-25px] 3xl:right-[-50px] max-3xl:w-24"
                />
              </div>
            </div>

            {/* RIGHT IMAGE BLOCK */}
            <div className="max-lg:hidden w-full lg:w-[60%] flex justify- relative ">
              <div className="absolute bottom-[-30px] 2xl:bottom-[-80px] 3xl:bottom-[-100px] right-56 w-full max-w-[400px] 2xl:max-w-[500px] 3xl:max-w-[580px] z-10 pointer-events-none overflow-hidden">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/popup/header-pic.png"
                  alt=""
                  className=""
                />
              </div>

              {/* Decorative element */}
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/popup/Group%2014.png"
                alt=""
                className="absolute top-[12%] right-[1%] 3xl:right-[-3%] z-20 max-3xl:w-[360px]"
              />
            </div>
          </div>
        </section>

        <section className="w-full max-lg:px-[3%] lg:pl-[5%] pb-12 bg-white">
          <div
            id="contact-form"
            className="flex max-lg:flex-col justify-between items-center"
          >
            {/* Left Form */}
            {formSubmit ? (
              <div>
                <div
                  className="landing-thankyou flex flex-col justify-around lg:h-[500px] items-center gap-4 relative text-slate-700
                w-full lg:w-[450px] xl:w-[600px] max-lg:p-10 max-xl:p-5 rounded-2xl shadow-lg border border-gray-100"
                >
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Thank_You_img.png"
                    alt="analyticsLiv"
                    className="w-44 lg:w-72 xl:w-96"
                  />
                  <h2 className="align-middle text-xl text-center font-bold">
                    We will get back to you soon.
                  </h2>
                </div>
              </div>
            ) : (
              <div className="landing-form w-full lg:w-[40%] 2xl:w-[40%] rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-[#18998A] text-white text-center py-5 px-6">
                  <p className="text-base 2xl:text-lg">
                    Welcome to <span className="font-bold">AnalyticsLiv</span>
                  </p>
                  <h2 className="text-2xl 2xl:text-3xl font-normal mt-3">
                    Register Now!{" "}
                    <span className="font-semibold">For Free webinar</span>
                  </h2>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="bg-white px-6 py-8 space-y-6"
                >
                  {/* Name and Email */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative w-full">
                      <label className="block text-sm font-medium text-[#000000] mb-2.5">
                        Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        id="fullName"
                        name="fullName"
                        value={formValues?.fullName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-[9px] py-[12px] 2xl:py-[20px] px-[14px] 2xl:px-[20px] pr-10 text-sm"
                      />
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/popup/Group%2041.png"
                        alt="icon"
                        className="max-2xl:w-[17px] absolute top-[54px] 2xl:top-[61px] right-3 transform -translate-y-1/2"
                      />
                    </div>
                    <div className="relative w-full">
                      <label className="block text-sm font-medium text-[#000000] mb-2.5">
                        E-mail<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        id="email"
                        name="email"
                        value={formValues?.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-[9px] py-[12px] 2xl:py-[20px] px-[14px] 2xl:px-[20px] pr-10 text-sm"
                      />
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/popup/Group%20(3).png"
                        alt="icon"
                        className="max-2xl:w-[18px] absolute top-[54px] 2xl:top-[61px] right-3 transform -translate-y-1/2"
                      />
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-[#000000] mb-2.5">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your number"
                      name="contactno"
                      id="contact"
                      value={formValues?.contactno}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-[9px] py-[12px] 2xl:py-[20px] px-[14px] 2xl:px-[20px] pr-10 text-sm"
                    />
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/popup/Vector%20(10).png"
                      alt="icon"
                      className="max-2xl:w-3 absolute top-[54px] 2xl:top-[61px] right-3 transform -translate-y-1/2"
                    />
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-[#000000] mb-2.5">
                      Company<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      id="company"
                      name="company"
                      value={formValues?.company}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-[9px] py-[12px] 2xl:py-[20px] px-[14px] 2xl:px-[20px] pr-10 text-sm"
                    />
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/popup/Group%203984.png"
                      alt="icon"
                      className="max-2xl:w-3 absolute top-[54px] 2xl:top-[61px] right-3 transform -translate-y-1/2"
                    />
                  </div>

                  {/* Profession */}
                  <div>
                    <label className="block text-sm font-medium text-[#000000] mb-2.5">
                      Profession
                    </label>
                    <div className="flex max-sm:flex-col sm:items-center justify-between pr-4 gap-2 sm:gap-6 text-sm">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="profession"
                          value="Working Professional"
                          onChange={handleChange}
                          checked={
                            formValues.profession === "Working Professional"
                          }
                          className="accent-[#18998A]"
                          id="role"
                        />
                        Working Professional
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="profession"
                          value="Student"
                          onChange={handleChange}
                          checked={formValues.profession === "Student"}
                          className="accent-[#18998A]"
                          id="role"
                        />
                        Student
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="profession"
                          value="Others"
                          onChange={handleChange}
                          checked={formValues.profession === "Others"}
                          className="accent-[#18998A]"
                          id="role"
                        />
                        Others
                      </label>
                    </div>
                  </div>
                  {formErrors?.length > 0 && (
                    <p className="text-red-500 text-xs font-medium text-left w-full pl-2 pt-1">
                      {formErrors?.join(", ")}{" "}
                      {formErrors?.length === 1 ? "is" : "are"} required.
                    </p>
                  )}
                  {/* Join Button */}
                  {/* <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-3 bg-[#22A395] hover:bg-[#127f74] text-white font-semibold py-3 rounded-md mt-6 text-2xl"
                                >
                                    JOIN FREE
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/popup/Right%20Arrow%20(1).png' alt=''
                                        className='w-7' />
                                </button> */}
                  <button
                    className={`${showWaiting ? "cursor-not-allowed" : "cursor-pointer"
                      } w-full flex items-center justify-center gap-3 bg-[#22A395] hover:bg-[#127f74] text-white font-semibold py-3 rounded-md mt-6 text-2xl`}
                  >
                    {showWaiting ? (
                      "Loading..."
                    ) : (
                      <>
                        JOIN FREE
                        <img
                          src="https://storage.googleapis.com/website-bucket-uploads/popup/Right%20Arrow%20(1).png"
                          alt=""
                          className="w-7"
                        />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* Right Speaker Section */}
            <div
              id="speakers"
              className="max-lg:rounded-[50px] max-lg:mt-16 lg:rounded-l-[75px] shadow-webinarSpeaker px-12 2xl:px-20 3xl:px-32 py-10 text-center bg-white"
            >
              <h2 className="text-[#323232] text-xl sm:text-2xl font-bold mb-10">
                MEET OUR SPEAKERS
              </h2>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                {/* Speaker 1 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute h-[168px] w-[168px] top-[-20px] right-[-18px] rounded-full border border-[#221858] z-10" />
                    <div className="absolute h-[153px] w-[153px] top-[-13px] right-[-11px] rounded-full border border-[#22185899] z-20" />
                    <div className="absolute h-[140px] w-[140px] top-[-6px] right-[-5px] rounded-full border border-[#2218584D] z-30" />
                    {/* Image */}
                    <div className="relative z-40 w-full h-full rounded-full overflow-hidden">
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/popup/Abhishek_Tiwari_2_1.png"
                        alt="Abhishek Tiwari"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="font-semibold text-base 3xl:text-lg shadow-md px-4 py-2 rounded-full bg-white -mt-2 relative z-40">
                    Abhishek Tiwari
                  </div>
                  <div className="mt-2 text-sm 3xl:text-base font-medium text-gray-800">
                    Looker Studio Expert.
                  </div>
                  <p className="text-xs 3xl:text-sm text-[#656565] max-w-[230px] 3xl:max-w-[260px] mt-1 text-center">
                    He specializes in data storytelling and visualization
                    techniques.
                  </p>
                </div>

                {/* Speaker 2 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute h-[168px] w-[168px] top-[-20px] right-[-18px] rounded-full border border-[#221858] z-10" />
                    <div className="absolute h-[153px] w-[153px] top-[-13px] right-[-11px] rounded-full border border-[#22185899] z-20" />
                    <div className="absolute h-[140px] w-[140px] top-[-6px] right-[-5px] rounded-full border border-[#2218584D] z-30" />
                    {/* Image */}
                    <div className="relative z-40 w-full h-full rounded-full overflow-hidden">
                      <img
                        src="https://storage.googleapis.com/website-bucket-uploads/popup/Sakina_Webinar_Img_2.png"
                        alt="Sakina Furniturewala"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="font-semibold text-base 3xl:text-lg shadow-md px-4 py-2 rounded-full bg-white -mt-2 relative z-40">
                    Sakina Furniturewala
                  </div>
                  <div className="mt-2 text-sm 3xl:text-base font-medium text-gray-800">
                    Looker Studio Expert.
                  </div>
                  <p className="text-xs 3xl:text-sm text-[#656565] max-w-[230px] 3xl:max-w-[260px] mt-1 text-center">
                    She focuses on analytics solutions and data-driven insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* youtube */}
        <section
          className="pt-8 lg:pt-16 pb-12 lg:pb-20 w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(110, 216, 212, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)",
          }}
        >
          <div className="w-full px-[3%] flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Left side - YouTube & Text */}
            <div className="flex max-lg:flex-col 2xl:w-[65%] lg:gap-8 justify-between items-center text-center lg:text-left lg:items-center lg:justify-start">
              <h2 className="text-2xl 2xl:text-3xl text-center lg:text-right font-semibold text-[#1c1c1c] mb-6">
                Watch Our Previous Webinar
              </h2>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
                <div id="youtube-player" className="w-full aspect-video rounded-2xl" />
              </div>
              {/* <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full aspect-video rounded-2xl"
                  src="https://www.youtube.com/embed/hBvIw2Y4C60"
                  title="Previous Webinar"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div> */}
            </div>

            {/* Right side - Event Info */}
            <div className="flex flex-col 2xl:w-[35%] 3xl:ml-16 text-center lg:text-left">
              <div>
                <h2 className="text-2xl 2xl:text-3xl font-semibold text-[#1c1c1c] mb-2">
                  Know More About Event
                </h2>
              </div>
              <p className="text-xs 2xl:text-sm text-gray-700 max-w-md mb-6">
                For Professionals, data analysts, marketers, businesses and
                learning enthusiasts
              </p>

              {/* Round Icons */}
              <div className="flex max-md:flex-wrap justify-center lg:justify-start gap-8 mb-8">
                {[
                  {
                    src: "https://storage.googleapis.com/website-bucket-uploads/popup/Looker_Studio_Blue_Logo%203.png",
                    label: "Looker Studio",
                  },
                  {
                    src: "https://storage.googleapis.com/website-bucket-uploads/popup/Data%20Visualisation.png",
                    label: "Data Visualization",
                  },
                  {
                    src: "https://storage.googleapis.com/website-bucket-uploads/popup/Dashboarding.png",
                    label: "Dashboarding",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Outer shadow / eclipse effect */}
                    <div className="relative">
                      <div className="absolute top-[-8px] right-[-8px] bg-[#08836626] rounded-full h-[120px] 2xl:h-[145px] w-[120px] 2xl:w-[145px] blur-[4px]"></div>
                      <div className="w-[103px] 2xl:w-32 h-[103px] 2xl:h-32 rounded-full bg-white border border-[#C0C0C080] flex flex-col items-center justify-center relative z-10">
                        <img src={item.src} alt={item.label} className="" />
                        <div className="text-[10px] 2xl:text-xs text-center text-[#333] mt-1 2xl:mt-2">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Registered Viewers and CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-white -ml-0">
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/popup/image%20(23).png"
                      alt="Viewer 1"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-white -ml-4">
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/popup/image%20(24).png"
                      alt="Viewer 2"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-white -ml-4">
                    <img
                      src="https://storage.googleapis.com/website-bucket-uploads/popup/image%20(25).png"
                      alt="Viewer 3"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="w-8 h-8 p-1 bg-[#221858] text-xs text-center pt-[5px] font-bold rounded-full text-white border-[3px] border-white -ml-4">
                    50+
                  </div>
                  <div className="text-xs 2xl:text-sm 3xl:text-base font-semibold">
                    Registered Viewers
                  </div>
                </div>
                <button
                  onClick={scrolling}
                  className="register-now bg-[#0C7077] hover:bg-[#095e64] flex gap-2 items-center justify-center transition-all duration-300 transform hover:scale-[1.01] text-white font-semibold px-3.5 2xl:px-6 py-1.5 2xl:py-2 rounded-md shadow-md text-xs 2xl:text-base group"
                >
                  REGISTER NOW
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/popup/Right%20Arrow%20(1).png"
                    alt="Arrow"
                    className="w-5 transition-transform duration-300 transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[3%]">
          <LearningCarousel />
        </section>

        <section className="max-md:mt-14 mb-4 md:my-20 px-[5%] bg-white">
          <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* Card 1 */}
            <div className="relative rounded-xl text-white max-lg:h-64 flex flex-col justify-center items-center font-semibold text-lg">
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/popup/Frame%2082.png"
                alt=""
                className="absolute z-0"
              />
              <div className="relative z-10">
                <div className="text-2xl 2xl:text-3xl font-bold">
                  245+ <br />
                  Clients
                </div>
                <div className="text-base lg:text-lg font-normal mt-5">
                  Across the<br></br> globe
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-xl text-white max-lg:h-64 flex flex-col justify-center items-center font-semibold text-lg">
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/popup/Frame%2084.png"
                alt=""
                className="absolute z-0"
              />
              <div className="relative z-10">
                <div className="text-2xl 2xl:text-3xl font-bold">
                  465+ <br />
                  Dashboards
                </div>
                <div className="text-base lg:text-lg font-normal mt-5">
                  Across<br></br> platforms
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-xl text-white max-lg:h-64 flex flex-col justify-center items-center font-semibold text-lg">
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/popup/Frame%2082.png"
                alt=""
                className="absolute z-0"
              />
              <div className="relative z-10">
                <div className="text-2xl 2xl:text-3xl font-bold">
                  37+ <br />
                  Platforms
                </div>
                <div className="text-base lg:text-lg font-normal mt-5">
                  Including Ads and<br></br> CRM
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-xl text-white max-lg:h-64 flex flex-col justify-center items-center font-semibold text-lg">
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/popup/Frame%2084.png"
                alt=""
                className="absolute z-0"
              />
              <div className="relative z-10">
                <div className="text-2xl 2xl:text-3xl font-bold">
                  30+ <br />
                  Professionals
                </div>
                <div className="text-base lg:text-lg font-normal mt-5">
                  Experts in various<br></br> fields
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LookerStudio;

import { Transition } from '@headlessui/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'
import * as Scroll from 'react-scroll';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/bootstrap.css";
import MetaSchemaOg from '../components/MetaSchemaOg'

const { Element: ScrollElement } = Scroll;

export default function Ga4({ brandsdata }) {

  const sliderRef = useRef(null);
  const testimonialSliderRef = useRef(null);

  const initialValues = { firstName: '', lastName: '', email: '', contactno: '', company: '', purpose: '', requirements: '', receiveUpdates: true, };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showWaiting, setShowWaiting] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormValues((prev) => ({ ...prev, [name]: val }));
  };


  const handleContactChange = (e) => {
    setFormValues({ ...formValues, ['contactno']: e });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues?.firstName?.trim()) errors?.push("First Name");
    if (!formValues?.lastName?.trim()) errors?.push("Last Name");
    if (!formValues?.email?.trim() || !regex.test(formValues?.email)) errors?.push("Email");
    if (!formValues?.requirements) errors?.push("Requirements");
    console.log("formeror-", formValues?.requirements)
    console.log("errors?.length,", errors?.length)
    if (errors?.length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }
    console.log("check log-", formErrors)
    // setFormErrors(validate(formValues));
    setIsSubmit(true);
    setShowWaiting(true);
    dataLayer.push({
      event: 'ga4_submission'
    });
    fetch('/api/ga4contact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'mode': 'no-cors'
      },
      body: JSON.stringify({
        "fullName": formValues.firstName + " " + formValues.lastName,
        // "lastName": formValues.lastName,
        "email": formValues.email,
        "contact": formValues.contactno,
        "message": formValues.requirements,
        "receiveUpdates": formValues.receiveUpdates,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormSubmit(true);
        setShowWaiting(false);
        window.open("https://calendly.com/analyticsliv/30min", '_blank');
      })
      .catch((error) => {
        console.error('Error:', error);
        setShowWaiting(false);
      });

  };

  const scrolling = () => {
    {
      Scroll.scroller.scrollTo("contact-form", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
    }
  }

  const scrolling1 = () => {
    {
      Scroll.scroller.scrollTo("expertise", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
    }

  }

  const scrolling2 = () => {
    {
      Scroll.scroller.scrollTo("services", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
    }
  }

  const scrolling3 = () => {
    {
      Scroll.scroller.scrollTo("case-studies", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
    }
  }

  const scrolling4 = () => {
    {
      Scroll.scroller.scrollTo("testimonial", {
        duration: 500,
        smooth: true,
        offset: -100,
      });
    }
  }

  const handleNext = () => sliderRef.current.slickNext();
  const handlePrev = () => sliderRef.current.slickPrev();

  const handleNextTestimonial = () => testimonialSliderRef.current.slickNext();
  const handlePrevTestimonial = () => testimonialSliderRef.current.slickPrev();

  const cardsData = [
    {
      image: 'https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/workflow%201.png',
      title: 'Proven GA4 Implementation Services',
      description: 'We ensure seamless GA4 implementation with precise configuration, event tracking, and eCommerce integration. As a trusted GA4 Implementation Service provider, we make sure your data is clean, compliant, and conversion-ready.',
    },
    {
      image: 'https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/analytics%20(6)%201.png',
      title: 'Strategic Analytics Architecture & Tag Governance',
      description: 'We go beyond setup by designing a scalable analytics architecture tailored to your business goals. From proper tag taxonomy to data layer strategy, our experts ensure your GA4 framework is built for long-term clarity and performance.',
    },
    {
      image: 'https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Customized%20Conversion%20Tracking%20Solutions.png',
      title: 'Customized Conversion Tracking Solutions',
      description: 'Work with a Conversion Tracking Specialist to identify critical KPIs and user interactions. We build tailored tracking plans to measure success accurately across platforms.',
    },
    {
      image: 'https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Actionable%20Insights%20%26%20Customer%20Journey%20Mapping.png',
      title: 'Actionable Insights & Customer Journey Mapping',
      description: "Use our Customer Journey Builder tools to visualize your users' full path to conversion. Our analysis turns raw data into meaningful strategies that improve acquisition, retention, and ROI.",
    },
    {
      image: 'https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Training%20%26%20Enablement.png',
      title: 'Training & Enablement',
      description: 'Want to manage analytics internally? Our consultants provide 1:1 and team-based GA4 training sessions to empower your teams and upskill internal stakeholders.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const servieSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  }
  return (
    <>
      <MetaSchemaOg
        url="https://analyticsliv.com/ga4"
        title="GA4 Consulting Services by Certified Experts"
        description="Hire certified Google Analytics consultants for seamless GA4 setup, advanced tracking, and insights that drive growth and smarter business decisions."
        twitterTitle="GA4 Consulting Services by Certified Experts"
        twitterDescription="Hire certified Google Analytics consultants for seamless GA4 setup, advanced tracking, and insights that drive growth and smarter business decisions."
        extraHead={
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
          />
        }
      />
      <div>

        {/* desktop menu */}
        <nav className='flex max-lg:hidden justify-around items-center py-3 px-[4%] 3xl:px-[6%]'>
          <div className='md:w-[25%] 2xl:w-[40%]'>
            <img alt="logo" className="w-[200px] 2xl:w-[250px]" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" />
          </div>
          <div className="mdLw-[75%] 2xl:w-[55%] text-[#0F172A] lg:flex text-center items-center justify-evenly">
            <ul className="lg:flex w-full text-sm xl:text-base font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center tracking-wide cursor-pointer">
              <button onClick={scrolling1} className="hover:underline hover:text-black">Expertise</button>
              <button onClick={scrolling2} className="hover:underline hover:text-black">Services</button>
              <button onClick={scrolling3} className="hover:underline hover:text-black">Case Studies</button>
              <button onClick={scrolling4} className="hover:underline hover:text-black">Testimonial</button>
            </ul>
            <a href="tel:8320576622" className='max-2xl:ml-5'>
              <button className="ga4butn-opposite">Call Us Now</button>
            </a>
          </div>
          <img alt="gmp partner" className="h-10 w-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/gmp.svg" />
        </nav>

        {/* mobile menu */}
        <div className='z-50 relative'>
          <div className="relative z-30 flex lg:hidden p-2">
            <Link href="/"><img onClick={() => setIsOpen(false)} src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" alt='AnalyticsLiv Logo' className="relative h-10 md:mx-4 cursor-pointer" /></Link>
            {/* <a className="ml-4" href="tel:8320576622">
                            <button className="cta px-5 py-2 bg-sky-300 rounded-2xl mx-2 text-sm font-semibold cursor-pointer hover:bg-sky-400">CALL US</button>
                        </a> */}
            <button
              onClick={() => { setIsOpen(!isOpen); }}
              type="button"
              className=" absolute inline-flex right-2 items-center justify-center p-2 rounded-md text-gray-400 hover:text-slate-900  focus:outline-none "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {() => (
              <div className="bg-white z-50 lg:hidden absolute w-full" id="mobile-menu">
                <div className="px-4 pt-2 z-50 pb-3 space-y-1 sm:px-3">
                  <p onClick={() => { setIsOpen(!isOpen); scrolling1(); }}
                    className=" text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <div>Expertise</div>
                  </p>

                  <p onClick={() => { setIsOpen(!isOpen); scrolling2(); }}
                    href="#"
                    className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <div >Services</div>

                  </p>

                  <p onClick={() => { setIsOpen(!isOpen); scrolling3(); }}

                    className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Case Studies
                  </p>

                  <p onClick={() => { setIsOpen(!isOpen); scrolling4(); }}

                    className="text-slate-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Testimonial
                  </p>
                  <a href="tel:8320576622">
                    <button className="ga4butn-opposite">Call Us Now</button>
                  </a>
                </div>
              </div>
            )}
          </Transition>
        </div>

        {/* landing */}
        <section className='flex max-md:flex-col justify-between items-center max-md:text-center px-[4%] 3xl:px-[6%] max-md:pt-12 md:pt-3 lg:mt-6 lg:mb-3 3xl:mb-6 gap-10'>
          <div className='md:w-[70%] lg:w-[50%] 2xl:w-[40%] 3xl:w-[52%] flex flex-col gap-7 md:gap-10'>
            <h1 className='text-[#0F172A] text-2xl xl:text-[28px] 2xl:text-[32px] 3xl:text-[46px] 3xl:leading-[50px] font-extrabold'>Google Analytics 4 <span className='relative z-10'>(GA4)<img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Vector%2014.png' alt='analytics service providers' className='absolute right-0 top-8 3xl:top-[50px] z-20' /></span><br className='max-lg:hidden'></br> Implementation and Consulting to<br className='max-2xl:hidden'></br> Power Smarter Decisions</h1>
            <h4 className='text-[#0F172A] text-[11px] xl:text-xs 2xl:text-sm font-normal'>As a leading Google Analytics Certified Agency, AnalyticsLiv specializes in<br className='max-lg:hidden'></br> custom Google Analytics 4 Consulting Services. Whether you’re looking to<br className='max-lg:hidden'></br> implement GA4 from scratch, or improve existing setups, our certified team of<br className='max-lg:hidden'></br> Google Analytics Consultants and Data Analytics Consultants is here to help</h4>
            <div className='flex max-md:items-center lg:items-center gap-3 lg:gap-11 max-lg:flex-col'>
              <button onClick={scrolling} className="ga4butn w-max">Call Us Now</button>
              <button onClick={() => setIsVideoOpen(true)} className='group flex items-center gap-3'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/ytplay.png' alt='Data Analytics Consultant' />
                <div className='text-lg font-bold text-[#2563EB] group-hover:underline'>Client Success</div>
              </button>
              {isVideoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                  <div className="relative w-[90%] max-w-3xl aspect-video">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src="https://www.youtube.com/embed/m0Oo0IL6gAQ?autoplay=1"
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      onClick={() => setIsVideoOpen(false)}
                      className="absolute -top-3 -right-3 bg-white text-black rounded-full py-1 px-2 shadow-md hover:bg-gray-100"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/GA4_Right_Image.png' alt='google analytics consultants' />
          </div>
        </section>

        {/* why choose, form section */}
        <ScrollElement id="expertise" name="expertise"></ScrollElement>
        <section className='px-[4%] 3xl:px-[6%] flex max-md:flex-col items-center gap-8 max-md:pb-12 md:gap-8 py-8 justify-between'>
          <div className='w-full md:w-[50%] lg:w-[60%] mt-8 lg:mt-4'>
            <div className="flex justify-between items-center gap-5">
              <h2 className='md:text-2xl xl:text-[32px] 2xl:text-[34px] font-bold lg:leading-10'>Why Choose AnalyticsLiv as Your<br className='max-md:hidden'></br> Analytics Partner?</h2>
              <div className='flex items-center gap-3 pr-5 2xl:pr-16 3xl:pr-36'>
                <button
                  onClick={handlePrev}
                  className="group"
                >
                  <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Button.png' alt='left vector' className='' />
                </button>
                <button
                  onClick={handleNext}
                  className="group"
                >
                  <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Button%20(1).png' alt='right vector' className='' />
                </button>
              </div>
            </div>
            <div className="md:mt-2 pt-8 pb-20 lg:pt-6 lg:pb-20 carousel-custom1 overflow-hidden">
              <Slider ref={sliderRef} {...settings}>
                {cardsData?.map((card, index) => (
                  <div>
                    <div className="max-w-[320px] xl:max-w-[349px] 2xl:max-w-[369px] flex flex-col gap-3">
                      <div className="">
                        <img src={card?.image} alt={card?.title} className="max-md:h-16 max-md:w-16" />
                      </div>
                      <h3 className="text-[#0F172A] text-base xl:text-xl 2xl:text-[22px] font-bold leading-7">{card?.title}</h3>
                      <h5 className="text-[#0F172A] text-xs xl:text-sm 2xl:text-base">{card?.description}</h5>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className='md:w-[500px] shadow-ga4FormShadow rounded-[20px] max-md:px-5 max-md:py-6 md:p-6 2xl:p-8 '>

            <ScrollElement id="contact-form" name="contact-form"></ScrollElement>
            {
              formSubmit ?
                <div>
                  <div className='analyticsliv-form-thankyou flex flex-col justify-around md:h-[420px] items-center gap-4 relative text-slate-700'>
                    <img
                      src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Thank_You_img.png'
                      alt='analyticsLiv'
                      className="w-44 xl:w-80" />
                    <h2 className='align-middle text-xl text-center'>We will get back to you soon.</h2>
                  </div>
                </div>
                :
                <div className='flex flex-col gap-[15px] 2xl:gap-[18px]'>
                  <div className='text-center flex flex-col gap-[5px]'>
                    <h2 className='text-[10px] sm:text-xs xl:text-sm'>Partner with a Leading Google Analytics Certified Agency</h2>
                    <div className='text-xl font-extrabold'>Let us help you !!</div>
                  </div>
                  <form onSubmit={handleSubmit} className='flex flex-col gap-[14px] 2xl:gap-[16px]'>
                    <div className='flex flex-col gap-4 2xl:gap-[14px]'>
                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div>
                          <div className='text-sm 2xl:text-[13px] font-semibold text-[#14183E] pb-1 2xl:pb-0.5'>First Name*</div>
                          <input type="text" placeholder="First Name" className="text-sm 2xl:text-base px-4 py-2 2xl:py-2 border-[0.5px] border-[#D2D5DA] focus:border-[1.5px] focus:border-[#EA580C] shadow-inputShadow rounded-md w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                            id="firstname" name="firstName" value={formValues?.firstName} onChange={handleChange} />
                          <p className="text-red-600 text-sm">{formErrors?.firstName}</p>
                        </div>
                        <div>
                          <div className='text-sm 2xl:text-[13px] font-semibold text-[#14183E] pb-1 2xl:pb-0.5'>Last Name*</div>
                          <input type="text" placeholder="Last Name" className="text-sm 2xl:text-base px-4 py-2 2xl:py-2 border-[0.5px] border-[#D2D5DA] focus:border-[1.5px] focus:border-[#EA580C] shadow-inputShadow rounded-md w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                            id="lastname" name="lastName" value={formValues?.lastName} onChange={handleChange} />
                          <p className="text-red-600 text-sm">{formErrors?.lastName}</p>
                        </div>
                      </div>
                      <div className="">
                        <label className="text-sm 2xl:text-[13px] font-semibold text-[#14183E]">Contact No</label>
                        <PhoneInput
                          containerClass="custom-phone-input-container"
                          inputClass="custom-phone-input1"
                          required
                          containerStyle={{
                            width: '100%',
                            height: '45px',
                            boxShadow: '0px 2px 2px 0px #0000000D'
                          }}
                          inputStyle={{
                            width: '100%',
                            height: '30px',
                            marginTop: '6px',
                            border: '0.5px solid #D2D5DA',
                            borderRadius: '8px',
                            fontSize: '14px',
                            paddingLeft: '60px',
                          }}
                          buttonStyle={{
                            border: 'none',
                            borderRadius: '8px 0 0 8px',
                          }}
                          name="contactno"
                          id="contactno"
                          value={formValues?.contactno}
                          onChange={handleContactChange}
                          country={"in"}
                          preferredCountries={['in', 'us', 'au']}
                          enableSearch={true}
                        />
                      </div>
                      <div className='w-full'>
                        <div className='text-sm 2xl:text-[13px] font-semibold text-[#14183E] pb-1 lg:pb-[5px] lg:pt-1 2xl:pt-0 2xl:pb-0.5'>Email*</div>
                        <input type="email" placeholder="Enter Your Email" className="text-sm 2xl:text-base px-5 py-2 2xl:py-2 border-[0.5px] border-[#D2D5DA] focus:border-[1.5px] focus:border-[#EA580C] shadow-inputShadow rounded-md w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                          name="email" value={formValues?.email} onChange={handleChange} />
                        <p className="text-red-600 text-sm">{formErrors?.email}</p>

                      </div>
                      <div className=''>
                        <div className='text-sm 2xl:text-[13px] font-semibold text-[#14183E] pb-1 2xl:pb-0.5'>Requirements*</div>
                        <textarea placeholder="Write Message..." rows={2} className="text-sm 2xl:text-base px-5 py-2 border-[0.5px] border-[#D2D5DA] focus:border-[1.5px] focus:border-[#EA580C] shadow-inputShadow rounded-md md:col-span-2 max-h-20 overflow-auto w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                          id="requirements" name="requirements" value={formValues?.requirements} onChange={handleChange}></textarea>

                        <p className="text-red-600 text-sm">{formErrors?.requirements}</p>

                        {
                          formErrors?.length > 0 &&
                          <p className="text-red-500 text-xs font-medium text-left w-full pl-2 pt-1">
                            {formErrors?.join(", ")} {formErrors?.length === 1 ? "is" : "are"} required.
                          </p>
                        }
                      </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                      <div className="flex items-start xl:items-center gap-1">
                        <input
                          type="checkbox"
                          id="receiveUpdates"
                          name="receiveUpdates"
                          checked={formValues?.receiveUpdates}
                          onChange={handleChange}
                          className={`accent-[#EA580C]`}
                        />
                        <label htmlFor="receiveUpdates" className="text-[9px] 2xl:text-[11px]">
                          Yes, I’d like to receive the latest analytics tips, GA4 updates, and insights via email.
                        </label>
                      </div>
                      <button className={`${showWaiting ? 'cursor-not-allowed' : 'cursor-pointer'} ga4butn w-full`}>
                        {showWaiting ? 'Loading...' : 'Contact Us'}
                      </button>
                    </div>
                  </form>
                </div>
            }
          </div>
        </section>

        {/* brands logo */}
        <section className='px-[4%] 3xl:px-[6%] md:py-8'>
          <div className="bg-white py-4">
            <h2 className="text-center text-[24px] text-[#0F172A] font-bold text-xl xl:text-[34px]">200+ Clients served for GA4</h2>
            <div className="brandsimages flex space-x-8 justify-center py-4 px-4 mt-[40px]">
              <Marquee gradient={false} pauseOnHover="true">
                {
                  brandsdata?.brand?.map((brands, key) => (
                    <div key={key}><img src={brands.logo} alt={brands.brands} /></div>
                  ))
                }
              </Marquee>
            </div>
          </div>
        </section>

        {/* services */}
        <ScrollElement id="services" name="services"></ScrollElement>
        <section className='px-[4%] 3xl:px-[6%] pt-7 pb-10'>
          <div>
            <h2 className='text-center text-[#0F172A] text-2xl xl:text-[28px] 2xl:text-[32px] font-bold'>Comprehensive Analytics Consulting Services</h2>
            <h3 className='text-center text-sm text-[#0F172A] pt-[15px]'>As one of the most agile Analytics Consulting Companies, we deliver full-spectrum analytics services:</h3>
            <div className='max-lg:hidden flex max-md:flex-wrap items-center justify-between pt-[36px]'>
              <div className='border h-[190px] xl:h-[200px] w-[180px] xl:w-[205px] px-[10px] xl:px-[14px] py-[25px] xl:py-[35px] border-[#2563EB] hover:shadow-ga4Show rounded-lg flex flex-col justify-between items-center gap-[27px]'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/settings%20(7).png' alt='GA4 Setup, Reporting & Debugging' />
                <h3 className='text-[#0F172A] text-xs xl:text-sm text-center'>GA4 Setup, Reporting & Debugging</h3>
              </div>
              <div className='border h-[190px] xl:h-[200px] w-[180px] xl:w-[205px] px-[10px] xl:px-[14px] py-[25px] xl:py-[35px] border-[#2563EB] hover:shadow-ga4Show rounded-lg flex flex-col justify-between items-center gap-[27px]'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/dashboard%20(13).png' alt='Custom Dashboards via Looker Studio & BigQuery' />
                <h3 className='text-[#0F172A] text-xs xl:text-sm text-center'>Custom Dashboards via Looker Studio & BigQuery</h3>
              </div>
              <div className='border h-[190px] xl:h-[200px] w-[180px] xl:w-[205px] px-[10px] xl:px-[14px] py-[25px] xl:py-[35px] border-[#2563EB] hover:shadow-ga4Show rounded-lg flex flex-col justify-between items-center gap-[27px]'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/customer-segment%20(2).png' alt='Audience Segmentation & Funnel Analysis' />
                <h3 className='text-[#0F172A] text-xs xl:text-sm text-center'>Audience Segmentation & Funnel Analysis</h3>
              </div>
              <div className='border h-[190px] xl:h-[200px] w-[180px] xl:w-[205px] px-[10px] xl:px-[14px] py-[25px] xl:py-[35px] border-[#2563EB] hover:shadow-ga4Show rounded-lg flex flex-col justify-between items-center gap-[27px]'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/data-collection%20(8).png' alt='Privacy-Compliant Data Collection' />
                <h3 className='text-[#0F172A] text-xs xl:text-sm text-center'>Privacy-Compliant Data Collection</h3>
              </div>
              <div className='border h-[190px] xl:h-[200px] w-[180px] xl:w-[205px] px-[10px] xl:px-[14px] py-[25px] xl:py-[35px] border-[#2563EB] hover:shadow-ga4Show rounded-lg flex flex-col justify-between items-center gap-[27px]'>
                <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/order-tracking%20(1).png' alt='Enhanced Ecommerce Tracking' />
                <h3 className='text-[#0F172A] text-xs xl:text-sm text-center'>Enhanced Ecommerce <br></br>Tracking</h3>
              </div>
            </div>
            <div className="lg:hidden md:mt-2 py-8 carousel-custom overflow-hidden">
              <Slider {...servieSettings}>
                <div className='border h-[170px] w-[180px] xl:w-[205px] px-[10px] xl:px-[14px] py-[25px] xl:py-[35px] border-[#2563EB] hover:shadow-ga4Show rounded-lg flex flex-col justify-between items-center gap-[27px]'>
                  <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/settings%20(7).png' alt='GA4 Setup, Reporting & Debugging' className='mx-auto pb-5' />
                  <div className='text-[#0F172A] text-xs text-center'>GA4 Setup, Reporting & Debugging</div>
                </div>
                <div className='border h-[170px] w-[180px] xl:w-[205px] px-[10px] xl:px-[14px] py-[25px] xl:py-[35px] border-[#2563EB] hover:shadow-ga4Show rounded-lg flex flex-col justify-between items-center gap-[27px]'>
                  <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/dashboard%20(13).png' alt='Custom Dashboards via Looker Studio & BigQuery' className='mx-auto pb-5' />
                  <div className='text-[#0F172A] text-xs text-center'>Custom Dashboards via Looker Studio & BigQuery</div>
                </div>
                <div className='border h-[170px] w-[180px] xl:w-[205px] px-[10px] xl:px-[14px] py-[25px] xl:py-[35px] border-[#2563EB] hover:shadow-ga4Show rounded-lg flex flex-col justify-between items-center gap-[27px]'>
                  <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/customer-segment%20(2).png' alt='Audience Segmentation & Funnel Analysis' className='mx-auto pb-5' />
                  <div className='text-[#0F172A] text-xs text-center'>Audience Segmentation & Funnel Analysis</div>
                </div>
                <div className='border h-[170px] w-[180px] xl:w-[205px] px-[10px] xl:px-[14px] py-[25px] xl:py-[35px] border-[#2563EB] hover:shadow-ga4Show rounded-lg flex flex-col justify-between items-center gap-[27px]'>
                  <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/data-collection%20(8).png' alt='Privacy-Compliant Data Collection' className='mx-auto pb-5' />
                  <div className='text-[#0F172A] text-xs text-center'>Privacy-Compliant Data Collection</div>
                </div>
                <div className='border h-[170px] w-[180px] xl:w-[205px] px-[10px] xl:px-[14px] py-[25px] xl:py-[35px] border-[#2563EB] hover:shadow-ga4Show rounded-lg flex flex-col justify-between items-center gap-[27px]'>
                  <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/order-tracking%20(1).png' alt='Enhanced Ecommerce Tracking' className='mx-auto pb-5' />
                  <div className='text-[#0F172A] text-xs text-center'>Enhanced Ecommerce Tracking</div>
                </div>
              </Slider>
            </div>
          </div>
        </section>

        <section className='px-[4%] 3xl:px-[6%] py-8 md:pt-14 md:pb-10 flex max-md:flex-col justify-between items-center w-full gap-8'>
          <div className='flex md:w-[45%] 2xl:w-[50%] items-start gap-5'>
            <div className='mt-14'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Screenshot_143.png' alt='Google Analytics Expert' className='2xl:w-[225px]' />
            </div>
            <div className=''>
              <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/team-meeting-modern-office.png' alt='Data Analytics Service Providers' className='2xl:w-[225px]' />
            </div>
            <div className='mt-6'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Screenshot_144.png' alt='Hire Google Analytics Expert' className='2xl:w-[225px]' />
            </div>
          </div>
          <div className='flex flex-col gap-5 2xl:gap-6'>
            <h2 className='font-extrabold text-[30px] 2xl:text-[40px] text-[#0F172A] leading-9 md:leading-[44px]'>
              Why Businesses Hire Our Google<br></br> Analytics Experts
            </h2>
            <div className='text-[#475569] text-sm 2xl:text-[15px] flex flex-col gap-1'>
              <h4>Trusted by global brands</h4>
              <h4>Transparent processes & fast turnarounds</h4>
              <h4>Flexible support plans for businesses of all sizes</h4>
              <h4>100% certified Google Analytics Experts & strategists</h4>
            </div>
            <div className='text-[#475569] text-sm 2xl:text-[15px]'>
              Whether you're a startup or enterprise, we’re one of the few Data Analytics<br></br> Service Providers
              offering both deep technical implementation and strategic<br></br> consulting.
            </div>
            <div onClick={scrolling} className='flex items-center gap-6 group w-max'>
              <div className='text-[#2563EB] text-base font-semibold cursor-pointer'>Connect with expert today</div>
              <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Vector.png' alt='certified google analytics expert'
                className='cursor-pointer transition-transform duration-300 ease-in-out group-hover:-translate-x-3' />
            </div>
          </div>
        </section>

        {/* case studies */}
        <ScrollElement id="case-studies" name="case-studies"></ScrollElement>
        <section className='px-[4%] 3xl:px-[6%] pt-8 pb-0'>
          <div className='text-[34px] font-extrabold text-center'>Case Studies</div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 justify-items-center items-center py-5 md:py-10'>
            <div className='flex flex-col max-md:gap-5 md:h-[420px] lg:h-[480px] xl:h-[560px] 2xl:h-[644px] 3xl:h-[730px] 3xl:w-[500px]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/cs/1748238244750565.png' alt='Mapped GA4 Data with Backend at 99% Accuracy Using GTM' className='rounded-xl' />
              <div className='flex flex-col justify-between h-full gap-3 md:mt-5'>
                <h3 className='text-[#111D15] text-lg xl:text-[22px] 2xl:text-2xl font-semibold' style={{
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>How We Mapped GA4 Data with Backend at 99% Accuracy Using GTM</h3>
                <div className='text-[#666666] text-sm xl:text-base' style={{
                  display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>By leveraging Google Tag Manager (GTM) and custom scripts, we achieved 99% accuracy in subscription event tracking without backend support.</div>
                <a href='/case-studies/ga4-backend-data-mapping-accuracy-gtm' target='_blank'>
                  <button className='ga4butn-opposite group w-max flex gap-2 items-center'>
                    <div className=''>Read Full</div>
                    <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Icon.png' alt='Google Analytics 4 Consulting Services' className='block group-hover:hidden' />
                    <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Icon%20(1).png' alt='Google Analytics 4 Consulting Services' className='hidden group-hover:block' />
                  </button>
                </a>
              </div>
            </div>
            <div className='flex flex-col justify-between max-md:gap-5 md:h-[420px] lg:h-[480px] xl:h-[560px] 2xl:h-[644px] 3xl:h-[730px] 3xl:w-[500px]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/cs/shopify.jpg' alt='Enhanced Ecommerce Implementation' className='rounded-xl' />
              <div className='flex flex-col justify-between h-full gap-3 md:mt-5'>
                <h3 className='text-[#111D15] text-lg xl:text-[22px] 2xl:text-2xl font-semibold 3xl:mt-1' style={{
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>GA4 Enhanced Ecommerce Implementation</h3>
                <div className='text-[#666666] text-sm xl:text-base' style={{
                  display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>We successfully implemented 90% of purchase events, with the exception of UA, which is at 70% and all GA4 enhanced ecommerce events and Shopify parameters are being successfully sent to GA4</div>
                <a href='/case-studies/ga4-enhanced-ecommerce-implementation-using-gtm-and-shopify-integration' target='_blank'>
                  <button className='ga4butn-opposite group w-max flex gap-2 items-center'>
                    <div className=''>Read Full</div>
                    <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Icon.png' alt='GA4 Implementation Service' className='block group-hover:hidden' />
                    <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Icon%20(1).png' alt='GA4 Implementation Service' className='hidden group-hover:block' />
                  </button>
                </a>
              </div>
            </div>
            <div className='flex flex-col justify-between max-md:gap-5 md:h-[420px] lg:h-[480px] xl:h-[560px] 2xl:h-[644px] 3xl:h-[730px] 3xl:w-[500px]'>
              <img src='https://storage.googleapis.com/website-bucket-uploads/cs/1729089625023594.png' alt='Boosting Conversion Rates with Customised Cookie Consent Mode' className='rounded-xl' />
              <div className='flex flex-col justify-between h-full gap-3 md:mt-5'>
                <h3 className='text-[#111D15] text-lg xl:text-[22px] 2xl:text-2xl font-semibold' style={{
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>Boosting Conversion Rates with Customised Cookie Consent Mode</h3>
                <div className='text-[#666666] text-sm xl:text-base pb-5 xl:pb-6' style={{
                  display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>We achieved improved conversion rate by 12% and reduced bounce rates by 10%.</div>
                <a href='/case-studies/boosting-conversion-rates-with-customised-cookie-consent-mode' target='_blank'>
                  <button className='ga4butn-opposite group w-max flex gap-2 items-center'>
                    <div className=''>Read Full</div>
                    <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Icon.png' alt='GA4 Implementation Service' className='block group-hover:hidden' />
                    <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Icon%20(1).png' alt='GA4 Implementation Service' className='hidden group-hover:block' />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <ScrollElement id="testimonial" name="testimonial"></ScrollElement>
        <section className='px-[4%] 3xl:px-[6%] pb-12'>
          <div className='w-full mt-8 max-md:flex-col md:flex justify-between md:gap-5 items-center'>
            <div className="md:w-[40%] flex flex-col gap-3 md:gap-8">
              <div className='text-2xl xl:text-[32px] 2xl:text-[34px] font-bold xl:leading-10'>Trusted by Brands,<br></br> Loved by Clients</div>
              <div className='text-[#666666] text-xs xl:text-sm 2xl:text-base'>Positive outcomes speak louder than promises. Here's what our<br className='max-lg:hidden'></br> clients say about their journey with us.</div>
              <div className='flex items-center gap-3 md:mt-3 xl:mt-5'>
                <button
                  onClick={handlePrevTestimonial}
                  className="group"
                >
                  <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Button.png' alt='left vector' className='' />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="group"
                >
                  <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Button%20(1).png' alt='right vector' className='' />
                </button>
              </div>
            </div>
            <div className="md:w-[60%] 2xl:w-[55%] mt-8 md:mt-2 pb-8 carousel-custom overflow-hidden">
              <Slider ref={testimonialSliderRef} {...testimonialSettings}>
                <div className=''>
                  <div className='flex max-md:flex-col justify-between items-start md:items-center gap-6 px-[26px] py-[20px] border-t-[10px] border-r-[10px] rounded-[20px] border-[#E06B2E]'>
                    <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Bobby_Bruno_1.png' alt='Google Analytics Certified Agency' className='' />
                    <div className='flex flex-col gap-4 justify-between'>
                      <div className='flex justify-between items-start'>
                        <div className='flex flex-col gap-1.5 2xl:gap-1.5'>
                          <div className='text-[#111D15] text-sm lg:text-lg 2xl:text-xl font-semibold'>Bobby Bruno</div>
                          <div className='text-[#666666] text-[10px] lg:text-sm 2xl:text-base font-normal'>CMO</div>
                          <div className='text-[#111D15] text-[10px] lg:text-sm 2xl:text-base font-semibold'>Wholesale Socks Deals</div>
                          <div className='flex items-center gap-1'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='Google Analytics Certified Agency' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='Google Analytics Certified Agency' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='Google Analytics Certified Agency' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='certified google analytics expert' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='certified google analytics expert' />
                          </div>
                        </div>
                        <div className='bg-[#ED7536] p-[10px] rounded max-lg:hidden'>
                          <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/%E2%80%9C.png' alt='certified google analytics expert' />
                        </div>
                      </div>
                      <div className='text-[#666666] text-[10px] lg:text-sm 2xl:text-base'>
                        AnalyticsLiv team was an excellent asset to our businesses' switch
                        from Universal Analytics to GA4. They had excellent communication
                        throughout the project, giving me feedback, updates and ideas as
                        the project went on.<br />I would be happy to recommend the AnalyticsLiv
                        team for analytics and tag manager work, and look forward to working with
                        them in the future. Thank you!
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='flex max-md:flex-col justify-between items-start md:items-center gap-6 px-[26px] py-[20px] border-t-[10px] border-r-[10px] rounded-[20px] border-[#E06B2E]'>
                    <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Charles%20Lundy.png' alt='analytics service providers' className='' />
                    <div className='flex flex-col gap-4 justify-between'>
                      <div className='flex justify-between items-start'>
                        <div className='flex flex-col gap-1.5 2xl:gap-1.5'>
                          <div className='text-[#111D15] text-sm lg:text-lg 2xl:text-xl font-semibold'>Charles Lundy</div>
                          <div className='text-[#666666] text-[10px] lg:text-sm 2xl:text-base font-normal'>Co-Founder</div>
                          <div className='text-[#111D15] text-[10px] lg:text-sm 2xl:text-base font-semibold'>Mex Insurance</div>
                          <div className='flex items-center gap-1'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='analytics service providers' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='analytics service providers' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='analytics service providers' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='Google Analytics Expert' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='Google Analytics Expert' />
                          </div>
                        </div>
                        <div className='bg-[#ED7536] p-[10px] rounded max-lg:hidden'>
                          <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/%E2%80%9C.png' alt='Google Analytics Expert' />
                        </div>
                      </div>
                      <div className='text-[#666666] text-[10px] lg:text-sm 2xl:text-base'>
                        The AnalyticsLiv team estimated the job length accurately and then carried out the work exactly as briefed,
                        to time and budget. We had one brief hiccup in the conversion tracking code but that was swiftly fixed once identified.
                        Would definitely consider using it again and for more advanced reporting functionality in future
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='flex max-md:flex-col justify-between items-start md:items-center gap-6 px-[26px] py-[20px] border-t-[10px] border-r-[10px] rounded-[20px] border-[#E06B2E]'>
                    <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/Ebenezer_Ferreira.png' alt='Google Analytics 4 Consulting Services' className='' />
                    <div className='flex flex-col gap-4 justify-between'>
                      <div className='flex justify-between items-start'>
                        <div className='flex flex-col gap-1.5 2xl:gap-1.5'>
                          <div className='text-[#111D15] text-sm lg:text-lg 2xl:text-xl font-semibold'>Ebenezer Ferreira</div>
                          <div className='text-[#666666] text-[10px] lg:text-sm 2xl:text-base font-normal'>Sr. Product Marketing Manager</div>
                          <div className='text-[#111D15] text-[10px] lg:text-sm 2xl:text-base font-semibold'>FUTEK</div>
                          <div className='flex items-center gap-1'>
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='Google Analytics 4 Consulting Services' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='Google Analytics 4 Consulting Services' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='Google Analytics 4 Consulting Services' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='conversion tracking specialist' />
                            <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/star.png' alt='conversion tracking specialist' />
                          </div>
                        </div>
                        <div className='bg-[#ED7536] p-[10px] rounded max-lg:hidden'>
                          <img src='https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/%E2%80%9C.png' alt='Hire Google Analytics Expert' />
                        </div>
                      </div>
                      <div className='text-[#666666] text-[10px] lg:text-sm 2xl:text-base'>
                        AnalyticsLiv has been FUTEK web analytics partner for almost 3 years now.
                        They supported us with GTM implementation, GA to GA4 migration, Looker studio
                        dashboard creations and Google cloud storage implementation. They respond to our
                        request in a timely manner and make their best efforts to resolve the web analytics
                        issues. We are happy with the support provided by AnalyticsLiv
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className='bg-[#2563EB] flex max-lg:flex-col max-lg:gap-3 items-start md:items-center justify-around max-md:py-2 max-lg:py-4 lg:h-[160px] max-2xl:px-[4%]'>
          <div>
            <div className='text-white text-base md:text-[28px] font-bold lg:leading-8'>Let’s Build Smarter Analytics Together</div>
            <div className='text-xs text-white max-lg:pt-2 lg:pt-3'>Partner with one of the leading Analytics Service Providers and unlock the full<br className='max-md:hidden'></br> potential of GA4. Ready to transform your data strategy?</div>
          </div>
          <div onClick={scrolling} className="flex cursor-pointer items-center rounded-md ">
            <div

              className="relative overflow-hidden rounded-l-[5px] group text-white h-[45px] md:h-[50px] flex items-center justify-between w-full lg:w-[370px] 2xl:w-[540px] border border-white hover:border-r-[#2563EB]"
            >
              {/* Background slider */}
              <div className="absolute inset-0 bg-white -translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out z-0"></div>

              {/* Text Content */}
              <h2 className="relative z-10 pl-3 pr-2 md:pr-5 lg:pl-[22px] py-3 text-[11px] md:text-sm 2xl:text-base text-white group-hover:text-[#2563EB] transition-colors duration-500">
                Hire a Certified Google Analytics Expert Today
              </h2>
            </div>

            <div className="h-[45px] md:h-[50px] bg-white px-3 flex justify-center items-center group w-14 rounded-r-[5px]">
              <img
                src="https://storage.googleapis.com/website-bucket-uploads/ua-and-ga4/tap%20(1)%201.png"
                alt="Hire Google Analytics Expert"
                className="group-hover:w-7 w-8 transition-all duration-300"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}


export async function getServerSideProps(context) {
  // Fetch data from external API

  const res = await fetch(`${process.env.domain}/api/ga4brands`)
  const brandsdata = await res.json()


  //console.log(brandsdata);
  // Pass data to the page via props
  return { props: { brandsdata } }
}
import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { InlineWidget } from "react-calendly";
import * as Scroll from "react-scroll";
import { useRouter } from "next/router";

const { Element: ScrollElement } = Scroll;

const training = () => {
  const { query } = useRouter();
  useEffect(() => {
    if (query.id !== undefined) {
      setTimeout(() => {
        Scroll.scroller.scrollTo(query.id, {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      }, 100);
    }
  }, [query]);
  return (
    <>
      <Head>
        <title>Google Ads Training Services | AnalyticsLiv</title>
        <meta
          name="description"
          content="Master Google Ads with expert training from AnalyticsLiv. Learn PPC strategies, campaign optimization, and boost your ROI with hands-on, results-driven guidance."
        />
        <link
          rel="canonical"
          href="https://analyticsliv.com/services/training"
        ></link>
      </Head>
      <section className="pb-16">
        <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 lg:flex justify-around lg:items-center">
          <div class="inner-banner lg:w-1/2 text-center flex flex-col justify-center">
            <div class="px-4 md:px-16 pt-4 flex flex-col justify-center">
              <div class="2xl:text-[33px] lg:text-[28px] text-[27px] font-['Poppins'] font-semibold text-maintext">
                Dive into the Analytics Universe with Our Tailored Training for
                Corporates and Developers – Your Journey Begins Here
              </div>
              <div class="flex justify-center">
                <Link href="/contact?id=training">
                  <button class="butn mt-8">
                    Get the Curriculum and Estimate
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-1/2 max-lg:hidden'>
            <img src='/Training_Page-banner.png' className='w-full h-full' alt='Google Ads Training' />
          </div>
        </div>
      </section>

      <section>
        <div class="md:mt-4 px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16">
          {/* <div class="text-left">
            <h2 class="text-black text-3xl font-semibold leading-normal">
              Customized Corporate Training
            </h2>
          </div> */}
          <br /> <br />
          <div>
            <ul>
              <li class="pb-5">
                <div class="flex">
                  <div class="max-sm:pt-2.5">
                    <img
                      class="pr-2.5"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Audit-arrow.png"
                      alt="arrow"
                    />
                  </div>
                  <h1 class="text-trainingheading text-3xl font-semibold leading-normal">
                    Customized Corporate Training
                  </h1>
                </div>
                <br /> <br />
                <div class="grid lg:grid-cols-2 justify-center gap-10">
                  <div class="flex items-center justify-center">
                    <div class="max-w-sm h-[400px] sm:h-96 z-10 text-center flex bg-trainingsection rounded-md">
                      <div class="p-6 text-start">
                        <div class="text-center flex items-center mb-5">
                          <img
                            src="https://storage.googleapis.com/website-bucket-uploads/static/Customized(1).logo.png"
                            alt="logo"
                          />
                        </div>
                        <h5 class="text-trainingheading text-[25px] leading-none font-semibold mt-1.5 mb-10">
                          Tailored to Your Needs
                        </h5>
                        <p class="sm:mb-8 text-[#202020] font-['Poppins'] text-base leading-none font-medium">
                          We believe that one size does not fit all. Our
                          training programs are customized to align with your
                          industry, business goals, and team's current skill
                          level.
                        </p>
                        <br />
                        <Link href="/contact?id=training">

                          <button class="butn">Explore Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-center">
                    <div class="max-w-sm  h-[400px] sm:h-96 z-10 text-center flex bg-trainingsection rounded-md">
                      <div class="p-6 text-start">
                        <div class="text-center flex items-center mb-5">
                          <img
                            src="https://storage.googleapis.com/website-bucket-uploads/static/Customized(2).logo.png"
                            alt="logo"
                          />
                        </div>
                        <h5 class="text-trainingheading text-[25px] leading-none font-semibold mt-1.5 mb-10">
                          Flexible Delivery
                        </h5>
                        <p class="mb-4 sm:mb-8 text-[#202020] font-['Poppins'] text-base leading-none font-medium">
                          Choose from in-person training sessions, live virtual
                          classes, or self-paced online courses, depending on
                          your team's preferences and availability.
                        </p>
                        <br />
                        <Link href="/contact?id=training">

                          <button class="butn">Explore Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <br />
              <li class="pb-5">
                <div class="flex">
                  <div class="max-sm:pt-2.5">
                    <img
                      class="pr-2.5"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Audit-arrow.png"
                      alt="arrow"
                    />
                  </div>
                  <h3 class="text-trainingheading text-3xl font-semibold leading-normal">
                    Comprehensive Curriculum
                  </h3>
                </div>
                <br /> <br />
                <div class="grid lg:grid-cols-3 justify-center gap-10">
                  <div class="flex content-between justify-center">
                    <div class="max-w-sm h-[450px] xl:h-[420px] z-10 text-center flex bg-trainingsection rounded-md">
                      <div class="p-6 text-start">
                        <div class="text-center flex items-center mb-5">
                          <img
                            src="https://storage.googleapis.com/website-bucket-uploads/static/Curriculum(1).logo.png"
                            alt="logo"
                          />
                        </div>
                        <h5 class="text-trainingheading text-[25px] leading-none font-semibold mt-1.5 mb-10">
                          Google Analytics Fundamentals
                        </h5>
                        <p class="mb-4 text-[#202020] font-['Poppins'] text-base leading-none font-medium">
                          Lay the foundation with comprehensive training on
                          Google Analytics basics, including account setup,
                          tracking implementation, and reporting.
                        </p>
                        <br />
                        <Link href="/contact?id=training">

                          <button class="butn">Explore Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="flex content-between justify-center">
                    <div class="max-w-sm h-[450px] xl:h-[420px] z-10 text-center flex bg-trainingsection rounded-md">
                      <div class="p-6 text-start">
                        <div class="text-center flex items-center mb-5">
                          <img
                            src="https://storage.googleapis.com/website-bucket-uploads/static/Curriculum(2).logo.png"
                            alt="logo"
                          />
                        </div>
                        <h5 class="text-trainingheading text-[25px] leading-none font-semibold mt-1.5 mb-10">
                          Advanced Techniques
                        </h5>
                        <p class="mb-4 text-[#202020] font-['Poppins'] text-base leading-none font-medium">
                          Elevate your team's expertise with advanced topics
                          such as data analysis, conversion optimization, and
                          e-commerce tracking.
                        </p>
                        <br /> <br />
                        <Link href="/contact?id=training">

                          <button class="butn">Explore Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="flex content-between justify-center">
                    <div class="max-w-sm h-[450px] xl:h-[420px] z-10 text-center flex bg-trainingsection rounded-md">
                      <div class="p-6 text-start">
                        <div class="text-center flex items-center mb-5">
                          <img
                            src="https://storage.googleapis.com/website-bucket-uploads/static/Curriculum(3).logo.png"
                            alt="logo"
                          />
                        </div>
                        <h5 class="text-trainingheading text-[25px] leading-none font-semibold mt-1.5 mb-10">
                          Practical Applications
                        </h5>
                        <p class="mb-4 text-[#202020] font-['Poppins'] text-base leading-none font-medium">
                          Our training goes beyond theory. We focus on
                          real-world applications, ensuring your team can
                          immediately apply what they learn to improve your
                          company's online presence.
                        </p>
                        <br />
                        <Link href="/contact?id=training">

                          <button class="butn">Explore Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <br />
              <li class="pb-5">
                <div class="flex">
                  <div class="max-sm:pt-2.5">
                    <img
                      class="pr-2.5"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Audit-arrow.png"
                      alt="arrow"
                    />
                  </div>
                  <h3 class="text-trainingheading text-3xl font-semibold leading-normal">
                    Hands-On Learning
                  </h3>
                </div>
                <br /> <br />
                <div class="grid lg:grid-cols-2 justify-center gap-10">
                  <div class="flex items-center justify-center">
                    <div class="max-w-sm h-[430px] lg:h-[420px] z-10 text-center flex bg-trainingsection rounded-md">
                      <div class="p-6 text-start">
                        <div class="text-center flex items-center mb-5">
                          <img
                            src="https://storage.googleapis.com/website-bucket-uploads/static/Hands-On(1).logo.png"
                            alt="logo"
                          />
                        </div>
                        <h5 class="text-trainingheading text-[25px] leading-none font-semibold mt-1.5 mb-10">
                          Interactive Workshops
                        </h5>
                        <p class="mb-8 text-[#202020] font-['Poppins'] text-base leading-none font-medium">
                          Engage your team with hands-on workshops and exercises
                          that reinforce learning and promote practical skill
                          development.
                        </p>
                        <br />
                        <Link href="/contact?id=training">

                          <button class="butn">Explore Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-center">
                    <div class="max-w-sm h-[430px] lg:h-[420px] z-10 text-center flex bg-trainingsection rounded-md">
                      <div class="p-6 text-start">
                        <div class="text-center flex items-center mb-5">
                          <img
                            src="https://storage.googleapis.com/website-bucket-uploads/static/Hands-On(2).logo.png"
                            alt="logo"
                          />
                        </div>
                        <h5 class="text-trainingheading text-[25px] leading-none font-semibold mt-1.5 mb-10">
                          Case Studies
                        </h5>
                        <p class="mb-8 text-[#202020] font-['Poppins'] text-base leading-none font-medium">
                          Explore real case studies and success stories to gain
                          insights into how other organizations have leveraged
                          Google Analytics to achieve their objectives.
                        </p>
                        <br />
                        <Link href="/contact?id=training">

                          <button class="butn">Explore Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <br />
              <li class="pb-5">
                <div class="flex">
                  <div class="max-sm:pt-2.5">
                    <img
                      class="pr-2.5"
                      src="https://storage.googleapis.com/website-bucket-uploads/static/Audit-arrow.png"
                      alt="arrow"
                    />
                  </div>
                  <h3 class="text-trainingheading text-3xl font-semibold leading-normal">
                    Certified Instructors
                  </h3>
                </div>
                <br /> <br />
                <div class="flex items-center justify-center">
                  <div class="max-w-sm h-[430px] lg:h-[420px] z-10 text-center flex bg-trainingsection rounded-md">
                    <div class="p-6 text-start">
                      <div class="text-center flex items-center mb-5">
                        <img
                          src="https://storage.googleapis.com/website-bucket-uploads/static/Expert_trainers.logo.png"
                          alt="logo"
                        />
                      </div>

                      <h5 class="text-trainingheading text-[25px] leading-none font-semibold mt-1.5 mb-10">
                        Expert Trainers
                      </h5>

                      <p class="mb-8 text-[#202020] font-['Poppins'] text-base leading-none font-medium">
                        Our trainers are Google Analytics certified experts with
                        years of experience in the field. They are passionate
                        about sharing their knowledge and expertise with your
                        team.
                      </p>
                      <br />
                      <Link href="/contact?id=training">

                        <button class="butn">Explore Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ScrollElement
        id="training-calendly"
        name="training-calendly"
      ></ScrollElement>
      <div className="relative h-[100dvh] 2xl:h-[80dvh] mb-36 lg:mb-28 xl:mb-64 bg-[#f5f5f5] rounded-lg space-y-9 pb-28 align-middle text-white">
        <div className="inline-widget bg-[#fff]">
          <div className="pb-4">
            <div className="flex justify-center">
              <img
                src="/AnalyticsLiv 2.png"
                alt=""
                className="max-w-[200px] max-h-[100px]"
              />
            </div>
            <div className="flex items-center justify-center">
              <div>
                <p className="text-sm font-semibold text-homepagebtn leading-[18px] sm:leading-[5px]">
                  Book A Slot for Media & Analytics Consultancy
                </p>
              </div>
            </div>
          </div>
          <InlineWidget url="https://calendly.com/analyticsliv/30min" />
        </div>
      </div>
      {/* <section>
        <div class="px-4 md:px-20 pb-8 md:pb-16">
          <p class="text-trainingheading text-base font-medium">
            In the ever-evolving digital landscape, maintaining GDPR compliance
            has become a paramount concern for organizations worldwide. As
            websites continue to serve as crucial platforms for content
            dissemination, businesses seek effective solutions to align their
            website analytics with the stringent regulations enforced by the
            General Data Protection Regulation (GDPR). One such solution that
            has gained prominence is Google Analytics.
          </p>
        </div>
      </section> */}
    </>
  );
};

export default training;

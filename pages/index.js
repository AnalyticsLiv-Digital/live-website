import StructuredData from '../components/StructuredData';
import React, { useEffect, useState } from 'react'
import MetaSchemaOg from '../components/MetaSchemaOg'
import Head from 'next/head';
import { schemaHome } from '../utils/schema';
// import YtPlaylist from '../components/YtPlaylist';
import { InlineWidget } from 'react-calendly';
import Faq from '../components/Faq';
import HowWeOperate from '../components/home/HowWeOperate';
import { METRICS, services } from '../utils/const';

const page = ({ ytPlaylistdata }) => {
  const stuctureData = { "@context": "https://schema.org", "@graph": [{ "@type": "WebPage", "@id": "https://analyticsliv.com/", "url": "https://analyticsliv.com/", "name": "Leading Web and App Analytics Agency in India - AnalyticsLiv", "isPartOf": { "@id": "https://analyticsliv.com/#website" }, "primaryImageOfPage": { "@id": "https://analyticsliv.com/#primaryimage" }, "image": { "@id": "https://analyticsliv.com/#primaryimage" }, "thumbnailUrl": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "datePublished": "2023-01-11T18:27:34+00:00", "dateModified": "2023-04-07T20:48:38+00:00", "description": "AnalyticsLiv Digital is one of the leading Web and App analytics agency. We help our customers embrace Google Products to improve their customer experiences.", "breadcrumb": { "@id": "https://analyticsliv.com/#breadcrumb" }, "inLanguage": "en-US", "potentialAction": [{ "@type": "ReadAction", "target": ["https://analyticsliv.com/"] }] }, { "@type": "ImageObject", "inLanguage": "en-US", "@id": "https://analyticsliv.com/#primaryimage", "url": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "contentUrl": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "width": 1200, "height": 628 }, { "@type": "BreadcrumbList", "@id": "https://analyticsliv.com/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }] }, { "@type": "WebSite", "@id": "https://analyticsliv.com/#website", "url": "https://analyticsliv.com/", "name": "Analyticsliv", "description": "", "potentialAction": [{ "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://analyticsliv.com/blogs/search?s={search_term_string}" }, "query-input": "required name=search_term_string" }], "inLanguage": "en-US" }, { "@type": "Organization", "@id": "https://analyticsliv.com/#organization", "name": "Analyticsliv", "url": "https://analyticsliv.com/", "logo": { "@type": "ImageObject", "inLanguage": "en-US", "@id": "https://analyticsliv.com/#/schema/logo/image/", "url": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "contentUrl": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "width": 512, "height": 114, "caption": "Analyticsliv" }, "image": { "@id": "https://analyticsliv.com/#/schema/logo/image/" }, "sameAs": ["https://m.facebook.com/100070503960704/", "https://in.linkedin.com/company/analytics-liv-digital", "https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw", "https://www.instagram.com/analyticsliv_digital"] }] };

  const [showCalendly, setShowCalendly] = useState(false);
  const [active, setActive] = useState("media");

  const handleCalendly = () => {
    setShowCalendly(true);
  }

  useEffect(() => {
    const headlines = [
      document.getElementById("headline0"),
      document.getElementById("headline1"),
      document.getElementById("headline2"),
    ];
    let hIdx = 0;

    // Ensure the first headline is visible at start
    headlines[0].classList.add("active");

    const interval = setInterval(() => {
      const current = headlines[hIdx];
      current.classList.remove("active");
      current.classList.add("exiting");

      // Reset the current after exit animation
      setTimeout(() => {
        current.classList.remove("exiting");
        current.style.opacity = "0";
        current.style.transform = "translateY(20px)";
      }, 700);

      // Move to next headline
      hIdx = (hIdx + 1) % headlines.length;

      const next = headlines[hIdx];
      // Reset inline styles and show the next headline
      setTimeout(() => {
        next.style.opacity = "1";
        next.style.transform = "translateY(0)";
        next.classList.add("active");
      }, 700);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const activeService = services[active];

  const content = [
    { question: 'Why should I choose AnalyticsLiv for my analytics and marketing needs?', answer: 'AnalyticsLiv combines technical expertise in analytics and data-driven marketing with a proven track record of delivering measurable results. Our customized solutions are designed to fit your specific business goals and drive ROI.' },
    { question: 'Do you handle GA4 migrations end‑to‑end?', answer: 'Yes - audit, event model, GTM/SS tagging, consent mode, and Looker dashboards, mapped to business KPIs.' },
    { question: 'Can you work with our existing media team?', answer: 'We can run media or operate as an analytics & experimentation layer to improve CPA/ROAS with your current agency.' },
    { question: 'What results can we expect in the first 90 days?', answer: 'A measurement plan, tracking reliability ≥90%, quick‑win CRO tests, and early CPA/ROAS lifts from structured experiments.' },
  ]

  useEffect(() => {
    const rail = document.getElementById("rail");
    const buttons = document.querySelectorAll("[data-vert]");

    function renderRail(key = "commerce") {
      if (!rail) return;
      rail.innerHTML = METRICS[key]
        .map(
          (m) => `
        <div class='relative min-w-[260px] snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
          <div class='absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-25'></div>
          <div class='text-2xl font-extrabold text-slate-900'>${m.kpi}</div>
          <div class='mt-1 text-slate-700'>${m.desc}</div>
          <p class='mt-2 text-sm text-slate-500'>${m.note}</p>
        </div>
      `
        )
        .join("");
    }

    renderRail("commerce");

    buttons.forEach((btn) =>
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("bg-slate-900", "text-white"));
        btn.classList.add("bg-slate-900", "text-white");
        renderRail(btn.getAttribute("data-vert") || "commerce");
      })
    );
  }, []);

  return (
    <>
      <Head>
        {schemaHome()}
      </Head>
      <MetaSchemaOg
        url="https://analyticsliv.com/"
        title="Google Marketing Platform (GMP) Certified Partner | AnalyticsLiv"
        description="AnalyticsLiv, a certified GMP partner, helps brands optimize the customer journey from acquisition to conversion and retention through personalized data driven solutions."
        twitterTitle="Google Marketing Platform (GMP) Certified Partner | AnalyticsLiv"
        twitterDescription="Data Influences every touchpoint. As GMP partner we help brands from acquisition to conversion and better retention using personalized data driven solutions"
        faqData={content}
      />

      <main className="min-h-screen overflow-x-hidden bg-white text-slate-800"
        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"' }}>

        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50">
          <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-24 text-center">

            <div class="flex flex-wrap items-center justify-center gap-3 opacity-95">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-gray-300 bg-white text-xs font-semibold"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>GMP Certified</span>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-gray-300 bg-white text-xs font-semibold"><span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>Google Partner</span>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-gray-300 bg-white text-xs font-semibold"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>Meta Partner</span>
            </div>

            <h1 className="hero-headline relative h-[300px] md:h-[225px] xl:h-[175px] text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl overflow-hidden">
              <span
                id="headline0"
                className="absolute inset-0 flex items-center justify-center opacity-100 translate-y-0 transition-all duration-700"
              >
                Turning Data into Measurable Growth
              </span>
              <span
                id="headline1"
                className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-5 transition-all duration-700"
              >
                Data. Technology. Marketing. Growth with Purpose.
              </span>
              <span
                id="headline2"
                className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-5 transition-all duration-700"
              >
                Better Data. Bigger Outcomes
              </span>
            </h1>

            {/* Subtext */}
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              We help brands activate analytics, transform their technology, and scale performance across PPC, SEO, DV360 and beyond.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#book-calendly"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-md hover:bg-emerald-700 transition"
              >
                Book a Strategy Call
              </a>
              <a
                href="#why"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition"
              >
                Why AnalyticsLiv?
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-4xl font-bold">
              One Stack. Four Capabilities.
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-center text-slate-600">
              Click each capability to see how it contributes to growth.
            </p>

            <div className="mt-12 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-20">
              {/* Service Diagram */}
              <div className="relative w-[300px] h-[300px] md:w-[440px] md:h-[430px] mx-auto rounded-full bg-[radial-gradient(circle_at_center,#f0fdf4,#fff)] flex items-center justify-center">
                <div className="max-md:text-xs bg-white px-2.5 md:px-5 py-3 rounded-full font-bold shadow-md text-center z-10 pointer-events-none leading-snug max-w-[135px] md:max-w-[190px]">
                  AnalyticsLiv Stack
                  <br />
                  <span className="text-[10px] md:text-xs text-slate-500">
                    Integrated • Scalable • Outcome-Driven
                  </span>
                </div>
                {/* Media connector */}
                <div
                  className="absolute bg-slate-300 z-0 w-[2px] h-[60px] animate-pulseLine"
                  style={{ top: "18%", left: "50%", transform: "translateX(-50%)" }}
                ></div>

                {/* Analytics connector */}
                <div
                  className="absolute bg-slate-300 z-0 h-[2px] w-[50px] animate-pulseLine"
                  style={{ top: "50%", left: "18%", transform: "translateY(-50%)" }}
                ></div>

                {/* Cloud connector */}
                <div
                  className="absolute bg-slate-300 z-0 w-[2px] h-[60px] animate-pulseLine"
                  style={{ bottom: "18%", left: "50%", transform: "translateX(-50%)" }}
                ></div>

                {/* Transform connector */}
                <div
                  className="absolute bg-slate-300 z-0 h-[2px] w-[60px] animate-pulseLine"
                  style={{ top: "50%", right: "18%", transform: "translateY(-50%)" }}
                ></div>

                {Object.keys(services).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`absolute py-2 rounded-full border border-slate-300 shadow transition hover:scale-105 ${active === key
                      ? "bg-green-700 text-white ring-2 ring-emerald-300"
                      : "bg-white text-slate-700 hover:bg-green-700 hover:text-white"
                      } ${key === "media"
                        ? "top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 md:px-4"
                        : key === "analytics"
                          ? "top-1/2 left-[10%] md:left-[12%] -translate-x-1/2 -translate-y-1/2 px-2 md:px-4"
                          : key === "cloud"
                            ? "bottom-[12%] left-1/2 -translate-x-1/2 translate-y-1/2 px-2 md:px-4"
                            : "top-1/2 right-[10%] md:right-[12%] translate-x-1/2 -translate-y-1/2 px-2 md:px-[10px]"
                      }`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                ))}
              </div>

              {/* Service Detail */}
              <div className="mt-10 lg:mt-0 max-w-md space-y-4">
                <h3 className="text-2xl font-bold">{activeService.title}</h3>
                <p className="text-slate-700">{activeService.body}</p>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  {activeService.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a
                  href={activeService.cta}
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-green-700 text-white shadow-lg shadow-green-700/20 hover:shadow-green-700/30 transition mt-4"
                >
                  Explore {activeService.title}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="impact outcomes" className="bg-slate-50 py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-3 flex max-md:flex-col items-center justify-between">
              <div className="flex max-sm:flex-col items-center justify-start gap-4 mt-2">
                <div className="mb-10 text-center sm:text-start">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Showcase</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Work That Moved the Needle</h2>
                </div>
              </div>
              <div className="inline-flex gap-2 rounded-full border border-slate-200 bg-white px-2 py-1">
                <button className="px-3 py-1.5 text-sm rounded-xl bg-slate-900 text-white" data-vert="commerce">
                  Commerce
                </button>
                <button className="px-3 py-1.5 text-sm rounded-xl" data-vert="travel">
                  Travel
                </button>
                <button className="px-3 py-1.5 text-sm rounded-xl" data-vert="bfsi">
                  BFSI
                </button>
                <button className="px-3 py-1.5 text-sm rounded-xl" data-vert="media">
                  Media
                </button>
              </div>
            </div>

            <div className="relative">
              <div id="rail" className="flex gap-4 overflow-x-auto pb-2 snap-x scrollbar-hide"></div>
            </div>
          </div>
        </section>

        <section id="partnerships" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Strategic Partnerships</p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Certified, Proven &amp; Trusted</h2>
                <p className="mt-2 max-w-xl text-slate-700">Deep product access and faster support through certified partnerships—so your roadmap moves quicker.</p>
                <ul className="mt-4 space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-3"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600"></span><span>Priority support & beta programs</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600"></span><span>Solution design reviews with vendor teams</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600"></span><span>Faster troubleshooting & escalation paths</span></li>
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 2xl:py-10 shadow-sm">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-items-center">
                  <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/CE4F38BB.png" alt="GMP Certified" className="h-16 md:h-14 2xl:h-16 w-auto object-contain" />
                  <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Partner-RGB.png" alt="Google Partner" className="h-14 2xl:h-16 w-auto object-contain" />
                  <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/MBP%20Badge%20-%20Dark%20backgrounds%401x.png" alt="Meta Business Partner" className="h-14 2xl:h-16 w-auto object-contain" />
                  <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/GA4_Logo.png" alt="GA4" className="h-11 lg:h-12 w-auto object-contain mt-2.5 lg:mt-5" />
                  <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Moengage_New_Logo.jpeg" alt="Moenga" className="h-11 lg:h-12 w-auto object-contain mt-2.5 lg:mt-5" />
                  <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/gtm.jpg" alt="gtm" className="h-11 lg:h-12 w-auto object-contain mt-2.5 lg:mt-5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <HowWeOperate />

        <section id="why" className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Why AnalyticsLiv</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Built for Incrementality from Day One</h2>
              <p className="mt-2 text-slate-600 max-w-3xl mx-auto">Signals → Supply → Strategy → Stories → Scale. Five layers that compound performance.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-5">
              <div className="border border-gray-200 rounded-xl bg-white shadow-sm shadow-black/5 hover:shadow-md transition p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-indigo-200 bg-indigo-50 text-indigo-700 mb-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>Signals</div>
                <h3 className="text-lg font-semibold">Measurement Architecture</h3>
                <p className="mt-2 text-slate-700">Event values, enhanced conversions, server‑side tagging, governance.</p>
              </div>
              <div className="border border-gray-200 rounded-xl bg-white shadow-sm shadow-black/5 hover:shadow-md transition p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-200 bg-emerald-50 text-emerald-700 mb-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>Supply</div>
                <h3 className="text-lg font-semibold">SPO & Private Marketplaces</h3>
                <p className="mt-2 text-slate-700">Curated PMPs, brand safety, IVT controls, viewability.</p>
              </div>
              <div className="border border-gray-200 rounded-xl bg-white shadow-sm shadow-black/5 hover:shadow-md transition p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-sky-200 bg-sky-50 text-sky-700 mb-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-600"></span>Strategy</div>
                <h3 className="text-lg font-semibold">Custom Bidding & Audiences</h3>
                <p className="mt-2 text-slate-700">Bids tuned to profit signals, audience windows, frequency & reach pacing.</p>
              </div>
              <div className="border border-gray-200 rounded-xl bg-white shadow-sm shadow-black/5 hover:shadow-md transition p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-amber-200 bg-amber-50 text-amber-700 mb-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span>Stories</div>
                <h3 className="text-lg font-semibold">Reporting People Believe</h3>
                <p className="mt-2 text-slate-700">ROAS, MER, new‑to‑brand, assisted impact, cohorts in Looker.</p>
              </div>
              <div className="border border-gray-200 rounded-xl bg-white shadow-sm shadow-black/5 hover:shadow-md transition p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 mb-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-600"></span>Scale</div>
                <h3 className="text-lg font-semibold">Playbooks that Compound</h3>
                <p className="mt-2 text-slate-700">Velocity, experimentation cadence, and quarterly action plans.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="insights" aria-labelledby="insights-head" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-[1150px] w-[92vw] mx-auto">
            <div className="flex max-sm:flex-col items-center justify-between gap-4 mb-10">
              <h2 id="insights-head" className="text-[30px] font-extrabold text-slate-900">
                Latest Insights & Playbooks
              </h2>
              <span className="inline-block px-4 py-1.5 border border-slate-300 rounded-full bg-white shadow-sm text-slate-600 font-medium text-sm">
                Practical, no-fluff guidance
              </span>
            </div>

            <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">

              <article className="flex flex-col justify-around h-[275px] border border-slate-200 rounded-2xl bg-gradient-to-tr from-blue-50 to-white p-6 shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  The clean-room checklist for retail marketers
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  How to prep consented data, ship audiences, and measure incrementality.
                </p>
                <a href="#" className="inline-flex items-center px-5 py-2 w-max rounded-lg bg-blue-100 text-blue-700 font-semibold transition hover:bg-blue-200">
                  Read
                </a>
              </article>

              <article className="flex flex-col justify-around h-[275px] border border-slate-200 rounded-2xl bg-gradient-to-tr from-green-50 to-white p-6 shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Server-side tagging without the headaches
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  What to measure, how to avoid duplication, and keep costs in control.
                </p>
                <a href="#" className="inline-flex items-center px-5 py-2 w-max rounded-lg bg-green-100 text-green-700 font-semibold transition hover:bg-green-200">
                  Read
                </a>
              </article>

              <article className="flex flex-col justify-around h-[275px] border border-slate-200 rounded-2xl bg-gradient-to-tr from-purple-50 to-white p-6 shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Creative testing frameworks for DV360
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  From concept sprints to LTV-weighted bidding signals.
                </p>
                <a href="#" className="inline-flex items-center px-5 py-2 w-max rounded-lg bg-purple-100 text-purple-700 font-semibold transition hover:bg-purple-200">
                  Read
                </a>
              </article>

              <article className="flex flex-col justify-around h-[275px] border border-slate-200 rounded-2xl bg-gradient-to-tr from-pink-50 to-white p-6 shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Building an LTV model in BigQuery
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Starter schema, cohort logic, and activation via reverse ETL.
                </p>
                <a href="#" className="inline-flex items-center px-5 py-2 w-max rounded-lg bg-pink-100 text-pink-700 font-semibold transition hover:bg-pink-200">
                  Read
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="clients" className="py-5 md:py-10">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Trusted by</p>
            <h2 className="text-2xl font-bold sm:text-3xl text-slate-900 mb-8">Brands we’ve partnered with</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center">
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Amul_official_logo.svg%20(1).png" alt="Amul" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Shoebacca%20logo.png" alt="Shoebacca" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Washington_examinor_logo.png" alt="Washington Examiner" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Anantara_logo_New.png" alt="Anantara" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Auxi_logo.coloured.png" alt="Auxi" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Algovation_logo.png" alt="Algovation" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/shiprocket_logo.png" alt="Shiprocket" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/we_sort_it_logo.png" alt="We Sort It" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mex_insurance_logo.png" alt="Mexico Insurance Services" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/issta_Logo.png" alt="ISSTA" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/IRIS_LOGO.png" alt="IRIS" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/league_logo_svg%201.png" alt="League" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-600">…and 200+ other growth-focused businesses across B2B, D2C, travel, and finance.</p>
          </div>
        </section>

        <section id="faq" className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                FAQs
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
                Common Questions About AnalyticsLiv
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
                Everything you need to know about our services, processes, and how we ensure measurable growth for your business.
              </p>
            </div>

            <Faq content={content} />
          </div>
          <div id='book-calendly'></div>
        </section>

        {showCalendly && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCalendly(false)}>
            <div className="relative bg-white rounded-lg shadow-lg sm:p-4 flex flex-col items-center justify-center 
                        max-w-[380px] w-[100%] sm:w-[90%] h-[80vh] sm:max-w-[400px] sm:h-[450px] lg:max-w-[450px] lg:h-[500px]">

              <button
                className="absolute top-1 left-1 text-gray-500 text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setShowCalendly(false)}
              >
                ✖
              </button>

              <div className="w-full h-full flex justify-center items-center">
                <InlineWidget
                  url="https://calendly.com/analyticsliv/30min"
                  styles={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        )}

        <section className="bg-gradient-to-b from-blue-50 to-white py-16 text-gray-800">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-blue-900">
              Ready to See What Clean Data + Smart Media Can Do?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Get a tailored plan in 30 minutes. We’ll map your KPIs, quick wins, and 90‑day milestones.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleCalendly()}
                className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition duration-300"
                data-gtm="cta_calendly"
              >
                Book on Calendly
              </button>

              <a
                href="mailto:sales@analyticsliv.com"
                className="px-4 py-2 rounded-md border border-blue-300 text-blue-700 font-medium bg-blue-50 hover:bg-blue-100 transition duration-300"
                data-gtm="cta_email"
              >
                Email Us
              </a>

              <a
                href="tel:+918320576622"
                className="px-4 py-2 rounded-md border border-blue-300 text-blue-700 font-medium bg-blue-50 hover:bg-blue-100 transition duration-300"
                data-gtm="cta_phone"
              >
                +91 83205 76622
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default page

'use client'
import React, { useEffect, useRef, useState } from 'react'
import "aos/dist/aos.css"; // Import scroller for smooth scrolling
import MetaSchemaOg from '../components/MetaSchemaOg';
import { InlineWidget } from 'react-calendly';

const aboutus = () => {

  const [showCalendly, setShowCalendly] = useState(false);

  const handleCalendly = () => {
    setShowCalendly(true);
  }
  const milestones = [
    {
      year: "2019",
      color: "text-emerald-600",
      front: "Founded to fix broken measurement",
      back: "Our Foundation Year",
    },
    {
      year: "2021",
      color: "text-indigo-600",
      front: "Privacy-first GA4 & CRO expansion",
      back: (
        <>
          <img
            src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Partner-RGB.png"
            data-fallback="https://analyticsliv.com/assets/img/Partner-RGB.png"
            alt="Google Partner"
            className="logo-anim logo-delay-1 h-10 sm:h-12 mx-auto"
          />
          <p className="logo-text logo-text-delay mt-2 text-slate-600 text-xs sm:text-sm">
            Google Partner
          </p>
        </>
      ),
    },
    {
      year: "2022",
      color: "text-amber-600",
      front: "Scaling further",
      back: (
        <>
          <img
            src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/CE4F38BB.png"
            data-fallback="https://analyticsliv.com/assets/img/CE4F38BB.png"
            alt="Google Marketing Platform Partner"
            className="logo-anim logo-delay-1 h-10 sm:h-12 mx-auto"
          />
          <p className="logo-text logo-text-delay mt-2 text-slate-600 text-xs sm:text-sm">
            Google Marketing Platform Partner
          </p>
        </>
      ),
    },
    {
      year: "2023",
      color: "text-pink-600",
      front: "Cross-channel media growth",
      back: (
        <>
          <p className="logo-text logo-text-delay mt-2 text-slate-600 text-xs sm:text-sm">
            Microsoft Ads Partner
          </p>
        </>
      ),
    },
    {
      year: "2024",
      color: "text-sky-600",
      front: "Analytics & Tagging Excellence",
      back: (
        <>
          <div className='flex items-center justify-center gap-3'>

            <img
              src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/GA4_Logo.png"
              alt="GA Certified"
              className="logo-anim logo-delay-1 h-10 sm:h-8 mx-auto"
            />
            <img
              src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/gtm.jpg"
              alt="GTM Certified"
              className="logo-anim logo-delay-1 h-10 sm:h-8 mx-auto"
            />
          </div>
          <p className="logo-text logo-text-delay mt-2 text-slate-600 text-xs sm:text-sm">
            GA & GTM Certified
          </p>
          <img
            src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/MBP%20Badge%20-%20Dark%20backgrounds%401x.png"
            data-fallback="https://analyticsliv.com/assets/img/MBP-Badge.png"
            alt="Meta Business Partner"
            className="logo-anim logo-delay-2 h-8 sm:h-10 mx-auto mt-2"
          />
          <p className="logo-text logo-text-delay mt-1 text-slate-600 text-xs sm:text-sm">
            Meta Business Partner
          </p>
        </>
      ),
    },
    {
      year: "2025",
      color: "text-rose-600",
      front: "Global recognition",
      back: <p className="text-slate-600 text-xs sm:text-sm">Recognized as growth partner worldwide</p>,
    },
  ];
  const milestoneSectionRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll("[data-seqflip]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("visible");
                card.classList.add("auto-flip");
                setTimeout(() => card.classList.remove("auto-flip"), 4000);
              }, i * 700);
            });
          } else {
            cards.forEach((card) => card.classList.remove("visible"));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (milestoneSectionRef.current) observer.observe(milestoneSectionRef.current);

    // Image fallback
    document.querySelectorAll("img[data-fallback]").forEach((img) => {
      img.addEventListener(
        "error",
        () => {
          const fb = img.getAttribute("data-fallback");
          if (fb && img.src !== fb) img.src = fb;
        },
        { once: true }
      );
    });
  }, []);

  return (
    <>
      <MetaSchemaOg
        url="https://analyticsliv.com/about-us"
        title="AnalyticsLiv - About us"
        description="AnalyticsLiv is a global team of data scientists, engineers, and marketers delivering privacy-first analytics, programmatic and performance media, and measurable growth."
        twitterTitle="AnalyticsLiv - About us"
        twitterDescription="AnalyticsLiv is a global team of data scientists, engineers, and marketers delivering privacy-first analytics, programmatic and performance media, and measurable growth."
      />

      <main className="min-h-screen bg-white text-slate-800"
        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"' }}>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50"></div>
          <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-bold text-emerald-700">
              About AnalyticsLiv
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Turning Complexity into{" "}
              <span className="bg-gradient-to-r from-slate-900 to-emerald-600 bg-clip-text text-transparent">
                Clarity & Growth
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
              We blend analytics, technology, and creativity into outcomes that matter. Our philosophy: measurable
              progress, transparent processes, and teams who care about your success.
            </p>
          </div>
        </section>

        {/* MILESTONES */}
        <section ref={milestoneSectionRef} className="bg-gradient-to-r from-indigo-50 via-white to-emerald-50 py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">Milestones & Partnerships</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 justify-items-center">
              {milestones.map((m, idx) => (
                <div key={idx} className={`flip-card h-[210px] w-[210px] 2xl:h-[220px] 2xl:w-[220px] year-${m.year}`} data-seqflip>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className={`year-label ${m.color}`}>{m.year}</div>
                      <p className="mt-2 text-slate-600 text-sm sm:text-base">{m.front}</p>
                    </div>
                    <div className="flip-card-back">{m.back}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Impact by the Numbers</h2>
            <p className="mt-2 text-slate-600">A quick glance at the scale and reliability of our work.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><div className="text-4xl font-extrabold">250+</div><p className="mt-2 text-slate-600">Projects delivered</p></div>
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><div className="text-4xl font-extrabold">95%</div><p className="mt-2 text-slate-600">Measurement reliability</p></div>
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><div className="text-4xl font-extrabold">40%+</div><p className="mt-2 text-slate-600">Median ROAS uplift</p></div>
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><div className="text-4xl font-extrabold">20+</div><p className="mt-2 text-slate-600">Industries served</p></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Our Philosophy</h2>
            <p className="mt-2 max-w-3xl mx-auto text-slate-600">We believe in durable measurement, scalable systems, and experimentation that proves incremental value.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><h3 className="font-semibold">Integrity in Data</h3><p className="mt-2 text-slate-600">Consent-safe, accurate, and aligned with your KPIs.</p></div>
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><h3 className="font-semibold">Designed for Scale</h3><p className="mt-2 text-slate-600">Cloud-ready, modular, and future-proof.</p></div>
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><h3 className="font-semibold">Obsessed with Outcomes</h3><p className="mt-2 text-slate-600">Every test and activation tied to measurable impact.</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">Meet Our Pods</h2>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><h3 className="font-semibold text-lg">Analytics Pod</h3><p className="mt-2 text-slate-600 text-sm">Data scientists & analysts ensuring reliable KPIs.</p></div>
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><h3 className="font-semibold text-lg">Media Pod</h3><p className="mt-2 text-slate-600 text-sm">Media planners & optimizers driving ROAS uplift.</p></div>
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><h3 className="font-semibold text-lg">Tech Pod</h3><p className="mt-2 text-slate-600 text-sm">Engineers building scalable cloud & tracking systems.</p></div>
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><h3 className="font-semibold text-lg">Creative Pod</h3><p className="mt-2 text-slate-600 text-sm">Designers & storytellers shaping user-first experiences.</p></div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">Why Clients Choose Us</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><h3 className="font-semibold">Privacy-First Measurement</h3><p className="mt-2 text-slate-600 text-sm">GA4, consent mode & server-side tagging.</p></div>
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><h3 className="font-semibold">Proven ROI Uplift</h3><p className="mt-2 text-slate-600 text-sm">40%+ median ROAS uplift across industries.</p></div>
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><h3 className="font-semibold">Cross-Functional Pods</h3><p className="mt-2 text-slate-600 text-sm">Analytics + Media + Tech + Creative in sync.</p></div>
              <div className="border border-slate-200 rounded-xl bg-white shadow-md hover:shadow-lg p-6"><h3 className="font-semibold">Global Experience</h3><p className="mt-2 text-slate-600 text-sm">20+ industries, from e-commerce to BFSI.</p></div>
            </div>
          </div>
        </section>

        <section id="process" className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">How we deliver</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Strategic Process for Scalable Growth</h2>
              <p className="mt-2 text-slate-600 max-w-3xl mx-auto">Clear steps, clean measurement, and relentless optimization—so performance compounds month after month.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <ol className="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                <li>
                  <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-slate-900 ring-4 ring-slate-100"></div>
                  <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div className="text-xs font-semibold tracking-wider text-slate-500">01. Discovery &amp; Goals</div>
                    <p className="mt-1 text-slate-800">ICP, margins, seasonality, account state, success metrics.</p>
                  </div>
                </li>
                <li>
                  <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-sky-600 ring-4 ring-slate-100"></div>
                  <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div className="text-xs font-semibold tracking-wider text-slate-500">02. Tracking &amp; Data</div>
                    <p className="mt-1 text-slate-800">GA4 &amp; GTM, enhanced conversions, server‑side where relevant, QA.</p>
                  </div>
                </li>
                <li>
                  <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-emerald-600 ring-4 ring-slate-100"></div>
                  <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div className="text-xs font-semibold tracking-wider text-slate-500">03. Keywords &amp; Audiences</div>
                    <p className="mt-1 text-slate-800">Intent buckets, negatives, audience overlays, lookalikes.</p>
                  </div>
                </li>
                <li>
                  <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-indigo-600 ring-4 ring-slate-100"></div>
                  <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div className="text-xs font-semibold tracking-wider text-slate-500">04. Account Structure</div>
                    <p className="mt-1 text-slate-800">Signal density, bidding control, clean reporting.</p>
                  </div>
                </li>
              </ol>

              <ol className="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                <li>
                  <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-amber-600 ring-4 ring-slate-100"></div>
                  <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div className="text-xs font-semibold tracking-wider text-slate-500">05. Creatives &amp; Testing</div>
                    <p className="mt-1 text-slate-800">Message‑match, LP design, experimentation velocity.</p>
                  </div>
                </li>
                <li>
                  <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-fuchsia-600 ring-4 ring-slate-100"></div>
                  <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div className="text-xs font-semibold tracking-wider text-slate-500">06. Budget &amp; Optimization</div>
                    <p className="mt-1 text-slate-800">Pacing, waste cuts, guardrails, incrementality checks.</p>
                  </div>
                </li>
                <li>
                  <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-slate-900 ring-4 ring-slate-100"></div>
                  <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div className="text-xs font-semibold tracking-wider text-slate-500">07. Insights &amp; QBRs</div>
                    <p className="mt-1 text-slate-800">Board‑ready insights: CPA/ROAS, MER, LTV, cohorts.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white text-center max-sm:px-3">
          <h3 className="text-2xl font-bold">Let’s Build Measurable Growth Together</h3>
          <p className="mt-2 max-w-2xl mx-auto text-slate-300">Tell us your goals, we’ll return with a roadmap and outcomes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="/contact" className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-md">Contact Us</a>
            <button onClick={() => handleCalendly()} className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10">Book a Strategy Call</button>
          </div>
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


        {/* Global Flip Animations */}
        <style jsx>{`
        .flip-card {
          background: transparent;
          perspective: 1000px;
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          transition: opacity 0.6s ease, transform 0.6s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
        }

        .flip-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.9s ease-in-out, box-shadow 1.5s ease;
          transform-style: preserve-3d;
          border-radius: 1rem;
        }

        .flip-card.auto-flip .flip-card-inner {
          transform: rotateY(180deg);
          animation: pulseGlow 2s ease-in-out;
          animation-delay: 0.25s;
        }

        .flip-card.year-2019.auto-flip .flip-card-inner {
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.6);
        }
        .flip-card.year-2021.auto-flip .flip-card-inner {
          box-shadow: 0 0 25px rgba(79, 70, 229, 0.6);
        }
        .flip-card.year-2022.auto-flip .flip-card-inner {
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.6);
        }
        .flip-card.year-2023.auto-flip .flip-card-inner {
          box-shadow: 0 0 25px rgba(236, 72, 153, 0.6);
        }
        .flip-card.year-2024.auto-flip .flip-card-inner {
          box-shadow: 0 0 25px rgba(14, 165, 233, 0.6);
        }
        .flip-card.year-2025.auto-flip .flip-card-inner {
          box-shadow: 0 0 25px rgba(244, 63, 94, 0.6);
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            transform: rotateY(180deg) scale(1);
          }
          50% {
            box-shadow: 0 0 40px currentColor;
            transform: rotateY(180deg) scale(1.05);
          }
          100% {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            transform: rotateY(180deg) scale(1);
          }
        }

        .logo-anim,
        .logo-text {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .flip-card.auto-flip .logo-anim {
          opacity: 1;
          transform: translateY(0);
        }
        .flip-card.auto-flip .logo-text {
          opacity: 1;
          transform: translateY(0);
        }
        .logo-delay-1 {
          transition-delay: 0.2s;
        }
        .logo-delay-2 {
          transition-delay: 0.5s;
        }
        .logo-text-delay {
          transition-delay: 0.8s;
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          border: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }
        .flip-card-front {
          background: #fff;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
        }
        .flip-card-back {
          background: #f8fafc;
          transform: rotateY(180deg);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
        }
        .year-label {
          font-size: 2.25rem;
          line-height: 1;
          font-weight: 800;
          text-align: center;
          display: block;
          width: 100%;
        }

        @media (max-width: 640px) {
          .flip-card {
            width: 100%;
            height: 180px;
          }
          .year-label {
            font-size: 1.75rem;
          }
          h1 {
            font-size: 2rem;
          }
          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
      </main>
    </>

  )
}

export default aboutus

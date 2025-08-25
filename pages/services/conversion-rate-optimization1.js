import React from "react";
import NewNavbar from "../../components/NewNavbar";
import Footer from "../../components/Footer";

const CRO1 = () => {
  return (
    <div>
      <NewNavbar />
      <div class="bg-white text-slate-800">
        <section class="relative overflow-hidden border-b border-slate-200">
          <div class="absolute inset-0 bg-gradient-to-br from-[#EEF6FF] via-white to-[#F7F7FF]"></div>
          <div class="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <div class="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p class="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-emerald-700">
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Conversion Rate Optimization
                </p>
                <h1 class="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                  From Clicks to Customers:{" "}
                  <span class="bg-gradient-to-r from-slate-900 to-emerald-600 bg-clip-text text-transparent">
                    CRO That Compounds Growth
                  </span>
                </h1>
                <p class="mt-5 max-w-2xl text-lg text-slate-600">
                  We turn your website into a performance engine with research,
                  testing, and design—converting visitors into customers for
                  ecommerce, banking, travel, and media.
                </p>
                <div class="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    class="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:opacity-90"
                  >
                    Get a CRO Audit
                  </a>
                  <a
                    href="#services"
                    class="rounded-2xl border border-slate-300 px-6 py-3"
                  >
                    View Services
                  </a>
                </div>
              </div>
              <div class="order-first md:order-none">
                <div class="relative mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div class="grid gap-4 sm:grid-cols-2">
                    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                      <div class="text-3xl font-extrabold text-slate-900">
                        95%+
                      </div>
                      <div class="mt-1 text-sm text-slate-600">
                        Experiment accuracy*
                      </div>
                    </div>
                    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                      <div class="text-3xl font-extrabold text-slate-900">
                        10+/mo
                      </div>
                      <div class="mt-1 text-sm text-slate-600">
                        A/B test velocity*
                      </div>
                    </div>
                    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                      <div class="text-3xl font-extrabold text-slate-900">
                        +30%
                      </div>
                      <div class="mt-1 text-sm text-slate-600">
                        Avg. conversion lift*
                      </div>
                    </div>
                    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                      <div class="text-3xl font-extrabold text-slate-900">
                        ‑40%
                      </div>
                      <div class="mt-1 text-sm text-slate-600">
                        Bounce rate drop*
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="success" class="py-16">
          <div class="mx-auto max-w-7xl px-6">
            <div class="mb-10 text-center">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Selected outcomes
              </p>
              <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
                Experiments That Drove Measurable Revenue
              </h2>
              <p class="mt-2 text-slate-600 max-w-3xl mx-auto">
                Aligned, comparable metrics across verticals — quick to scan,
                easy to trust. Replace with your verified case studies.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <article class="group relative flex flex-col items-center justify-between rounded-3xl border border-emerald-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md">
                <div>
                  <div class="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                    ✓
                  </div>
                  <div class="mt-3 text-4xl font-extrabold text-slate-900 leading-none">
                    +22%
                  </div>
                  <div class="mt-1 text-sm font-medium text-slate-700">
                    Checkout Completion
                  </div>
                  <p class="mt-2 text-sm text-slate-600">
                    Ecommerce: streamlined steps, trust cues, mobile-first UI.
                  </p>
                </div>
                <div class="mt-4 h-px w-12 bg-emerald-200"></div>
                <div class="mt-3 text-xs uppercase tracking-wide text-emerald-700">
                  Retail
                </div>
              </article>

              <article class="group relative flex flex-col items-center justify-between rounded-3xl border border-sky-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md">
                <div>
                  <div class="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 border border-sky-200">
                    ✈
                  </div>
                  <div class="mt-3 text-4xl font-extrabold text-slate-900 leading-none">
                    +15%
                  </div>
                  <div class="mt-1 text-sm font-medium text-slate-700">
                    Bookings Confirmed
                  </div>
                  <p class="mt-2 text-sm text-slate-600">
                    Travel: fare card hierarchy, urgency & reassurance copy.
                  </p>
                </div>
                <div class="mt-4 h-px w-12 bg-sky-200"></div>
                <div class="mt-3 text-xs uppercase tracking-wide text-sky-700">
                  Travel
                </div>
              </article>

              <article class="group relative flex flex-col items-center justify-between rounded-3xl border border-indigo-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md">
                <div>
                  <div class="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-200">
                    🏦
                  </div>
                  <div class="mt-3 text-4xl font-extrabold text-slate-900 leading-none">
                    +18%
                  </div>
                  <div class="mt-1 text-sm font-medium text-slate-700">
                    Applications Submitted
                  </div>
                  <p class="mt-2 text-sm text-slate-600">
                    BFSI: form reduction, progressive steps, trust badges.
                  </p>
                </div>
                <div class="mt-4 h-px w-12 bg-indigo-200"></div>
                <div class="mt-3 text-xs uppercase tracking-wide text-indigo-700">
                  Banking
                </div>
              </article>

              <article class="group relative flex flex-col items-center justify-between rounded-3xl border border-amber-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md">
                <div>
                  <div class="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-200">
                    📰
                  </div>
                  <div class="mt-3 text-4xl font-extrabold text-slate-900 leading-none">
                    +27%
                  </div>
                  <div class="mt-1 text-sm font-medium text-slate-700">
                    Email Opt‑ins
                  </div>
                  <p class="mt-2 text-sm text-slate-600">
                    Media: message‑matched templates & paywall micro‑journeys.
                  </p>
                </div>
                <div class="mt-4 h-px w-12 bg-amber-200"></div>
                <div class="mt-3 text-xs uppercase tracking-wide text-amber-700">
                  Publisher
                </div>
              </article>

              <article class="group relative flex flex-col items-center justify-between rounded-3xl border border-rose-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md">
                <div>
                  <div class="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 border border-rose-200">
                    📈
                  </div>
                  <div class="mt-3 text-4xl font-extrabold text-slate-900 leading-none">
                    +30%
                  </div>
                  <div class="mt-1 text-sm font-medium text-slate-700">
                    Avg. Conversion Lift
                  </div>
                  <p class="mt-2 text-sm text-slate-600">
                    Cross‑industry median uplift over first 90 days of testing.
                  </p>
                </div>
                <div class="mt-4 h-px w-12 bg-rose-200"></div>
                <div class="mt-3 text-xs uppercase tracking-wide text-rose-700">
                  Multi‑vertical
                </div>
              </article>

              <article class="group relative flex flex-col items-center justify-between rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md">
                <div>
                  <div class="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 border border-slate-200">
                    ⚙
                  </div>
                  <div class="mt-3 text-4xl font-extrabold text-slate-900 leading-none">
                    10+/mo
                  </div>
                  <div class="mt-1 text-sm font-medium text-slate-700">
                    Test Velocity
                  </div>
                  <p class="mt-2 text-sm text-slate-600">
                    High‑tempo iteration with rigorous QA and rollout gates.
                  </p>
                </div>
                <div class="mt-4 h-px w-12 bg-slate-200"></div>
                <div class="mt-3 text-xs uppercase tracking-wide text-slate-700">
                  Program
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="services" class="py-16">
          <div class="mx-auto max-w-7xl px-6">
            <div class="mb-10 text-center">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                What we deliver
              </p>
              <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
                CRO Services That Turn Traffic Into Revenue
              </h2>
              <p class="mt-2 text-slate-600 max-w-3xl mx-auto">
                Research‑backed hypotheses, fast test velocity, and design
                systems that scale.
              </p>
            </div>

            <div class="grid gap-6 md:grid-cols-2">
              <div class="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="h-5 w-5">
                      <path fill="currentColor" d="M3 12l7-9 7 9-7 9-7-9z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-slate-900">
                    Funnel &amp; UX Audit
                  </h3>
                </div>
                <p class="mt-2 text-slate-700">
                  Heuristic analysis + GA4 funnels, heatmaps & replays to
                  surface friction and prioritize ROI fixes.
                </p>
                <ul class="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <li>Heuristics & copy mapping</li>
                  <li>Behavior analytics review</li>
                  <li>Form UX teardown</li>
                  <li>Speed & visual stability</li>
                </ul>
              </div>

              <div class="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 rounded-xl border border-emerald-200 bg-white flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="h-5 w-5">
                      <path
                        fill="currentColor"
                        d="M5 3h14v2H5V3zm0 14h14v2H5v-2zM5 8h14v2H5V8zm0 4h14v2H5v-2z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-slate-900">
                    A/B &amp; Multivariate Testing
                  </h3>
                </div>
                <p class="mt-2 text-slate-700">
                  95%+ significance, power checks, experiment design playbooks,
                  and rollout criteria.
                </p>
                <ul class="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <li>Hypotheses (ICE/PIE)</li>
                  <li>Sample size &amp; power</li>
                  <li>Test templates</li>
                  <li>Winners → rollouts</li>
                </ul>
              </div>

              <div class="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 rounded-xl border border-sky-200 bg-white flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="h-5 w-5">
                      <path
                        fill="currentColor"
                        d="M12 3l9 4-9 4-9-4 9-4zm0 7l9 4-9 4-9-4 9-4zm0 7l9 4-9 4-9-4 9-4z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-slate-900">
                    Landing Pages &amp; Copy
                  </h3>
                </div>
                <p class="mt-2 text-slate-700">
                  Message‑matched pages and creative systems aligned to
                  acquisition channels.
                </p>
                <ul class="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <li>LP templates</li>
                  <li>Ad scent matching</li>
                  <li>Trust & risk reversal</li>
                  <li>Mobile‑first layouts</li>
                </ul>
              </div>

              <div class="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 rounded-xl border border-indigo-200 bg-white flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="h-5 w-5">
                      <path
                        fill="currentColor"
                        d="M12 2a5 5 0 015 5v3h3l-6 6-6-6h3V7a5 5 0 015-5z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-slate-900">
                    Personalization &amp; Segmentation
                  </h3>
                </div>
                <p class="mt-2 text-slate-700">
                  Audience‑based variants for commerce, BFSI and travel
                  journeys.
                </p>
                <ul class="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <li>Behavioral segments</li>
                  <li>Offer maps</li>
                  <li>CDP/CRM hooks</li>
                  <li>Geo/device targeting</li>
                </ul>
              </div>

              <div class="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm md:col-span-2">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 rounded-xl border border-amber-200 bg-white flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="h-5 w-5">
                      <path
                        fill="currentColor"
                        d="M3 4h18v4H3V4zm0 6h18v10H3V10z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-slate-900">
                    Analytics, Heatmaps &amp; Insights
                  </h3>
                </div>
                <p class="mt-2 text-slate-700">
                  GA4 events & cohorts with Hotjar/Clarity — plus conversion
                  reporting (ROAS, MER, LTV) with clear next steps.
                </p>
                <ul class="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <li>Funnels & cohorts</li>
                  <li>Session replays</li>
                  <li>ROI dashboards</li>
                  <li>Test learnings repo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="process" class="bg-slate-50 py-16">
          <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-10">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                How we deliver
              </p>
              <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
                A Testing Engine That Compounds Results
              </h2>
            </div>
            <div class="grid gap-6 lg:grid-cols-2">
              <ol class="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-slate-900 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      01. Research &amp; Deep Insights
                    </div>
                    <p class="mt-1 text-slate-800">
                      Funnels, GA4 event behaviors, heatmaps &amp; replays to
                      locate friction.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-emerald-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      02. Hypothesis &amp; Prioritization
                    </div>
                    <p class="mt-1 text-slate-800">
                      ICE/PIE frameworks; focus on high‑impact hypotheses first.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-sky-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      03. Experiment Design
                    </div>
                    <p class="mt-1 text-slate-800">
                      A/B, multivariate &amp; UX copy tests, with sample‑size
                      &amp; power checks.
                    </p>
                  </div>
                </li>
              </ol>
              <ol class="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-indigo-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      04. Execution at Scale
                    </div>
                    <p class="mt-1 text-slate-800">
                      GTM + GA4 integrated testing, QA, and rollouts.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-amber-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      05. Analysis &amp; Learnings
                    </div>
                    <p class="mt-1 text-slate-800">
                      95%+ confidence; clear winner rules; insights recap.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-rose-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      06. Iterate &amp; Scale
                    </div>
                    <p class="mt-1 text-slate-800">
                      Roll out winners and feed learnings into the next batch of
                      tests.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section id="clients" class="bg-slate-50 py-16">
          <div class="mx-auto max-w-7xl px-6 text-center">
            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Trusted by
            </p>
            <h2 class="text-2xl font-bold sm:text-3xl text-slate-900 mb-8">
              Brands we’ve partnered with
            </h2>
            <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center">
              <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Shoebacca%20logo.png"
                  alt="Shoebacca"
                  class="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
              <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Washington_examinor_logo.png"
                  alt="Washington Examiner"
                  class="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
              <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Anantara_logo_New.png"
                  alt="Anantara"
                  class="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
              <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Auxi_logo.coloured.png"
                  alt="Auxi"
                  class="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
              <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Algovation_logo.png"
                  alt="Algovation"
                  class="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
              <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/shiprocket_logo.png"
                  alt="Shiprocket"
                  class="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
              <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/we_sort_it_logo.png"
                  alt="We Sort It"
                  class="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
              <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mex_insurance_logo.png"
                  alt="Mexico Insurance Services"
                  class="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
              <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/issta_Logo.png"
                  alt="ISSTA"
                  class="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
              <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/IRIS_LOGO.png"
                  alt="IRIS"
                  class="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
              <div class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/league_logo_svg%201.png"
                  alt="League"
                  class="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
            </div>
            <p class="mt-6 text-sm text-slate-600">
              …and 200+ other growth-focused businesses across B2B, D2C, travel,
              and finance.
            </p>
          </div>
        </section>

        <section id="faq" class="py-16">
          <div class="mx-auto max-w-7xl px-6">
            <div class="mb-8 text-center">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                FAQs
              </p>
              <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
                Everything About Our CRO Program
              </h2>
              <p class="mt-2 text-slate-600 max-w-3xl mx-auto">
                A quick primer on timelines, tools, pricing, and how we measure
                lift.
              </p>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
              <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary class="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">
                  How long until we see results?
                  <span class="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p class="mt-2 text-slate-700">
                  Most clients see a measurable uplift within 4–6 weeks as the
                  first wave of experiments conclude. We prioritize “fast wins”
                  while building a long‑term testing engine.
                </p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary class="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">
                  Which tools do you use?
                  <span class="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p class="mt-2 text-slate-700">
                  GA4 for analytics, Hotjar/Clarity for behavior,
                  VWO/Optimizely/Google Optimize alternatives for testing. We
                  plug into your stack or propose one.
                </p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary class="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">
                  What does pricing look like?
                  <span class="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p class="mt-2 text-slate-700">
                  Engagements are typically monthly retainers, scoped by test
                  velocity and design needs. We can start lean and scale as wins
                  compound.
                </p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary class="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">
                  How do you ensure statistical validity?
                  <span class="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p class="mt-2 text-slate-700">
                  We define MDE, run power calculations, and target 95%+
                  confidence. Tests have clear stop rules and winner criteria to
                  avoid false positives.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section id="contact" class="bg-slate-900 py-16 text-white">
          <div class="mx-auto max-w-7xl px-6">
            <div class="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 class="text-2xl font-bold">Start with a first CRO audit</h3>
                <p class="mt-2 max-w-2xl text-slate-300">
                  We’ll review your funnels, highlight friction, and propose
                  experiments that can move the needle fastest.
                </p>
                <ul class="mt-4 space-y-2 text-slate-300">
                  <li class="flex items-start gap-3">
                    <span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                    <span>Heuristics &amp; GA4 event review</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                    <span>Hypotheses &amp; ICE score</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                    <span>Prioritized 30‑day test plan</span>
                  </li>
                </ul>
              </div>
              <div class="rounded-3xl border border-white/20 bg-white/5 p-6">
                <form
                  action="#"
                  method="post"
                  class="grid gap-3 md:grid-cols-2"
                >
                  <label class="text-sm" for="name">
                    Full name
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    />
                  </label>
                  <label class="text-sm" for="email">
                    Work email
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    />
                  </label>
                  <label class="text-sm md:col-span-1" for="company">
                    Company
                    <input
                      id="company"
                      name="company"
                      placeholder="Company name"
                      class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    />
                  </label>
                  <label class="text-sm md:col-span-1" for="stack">
                    Current stack
                    <input
                      id="stack"
                      name="stack"
                      placeholder="e.g., GA4, Optimize, VWO"
                      class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    />
                  </label>
                  <label class="text-sm md:col-span-2" for="message">
                    Goals &amp; pain points
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="What’s your funnel goal? Where are users dropping?"
                      class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    ></textarea>
                  </label>
                  <div class="md:col-span-2">
                    <button
                      class="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-md transition hover:opacity-90"
                      type="submit"
                    >
                      Request Audit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CRO1;

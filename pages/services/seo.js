import React from "react";
import NewNavbar from "../../components/NewNavbar";
import Footer from "../../components/Footer";

const Seo = () => {
  return (
    <div>
      <NewNavbar />
      <div class="min-h-screen bg-white text-slate-800">
        <section class="relative overflow-hidden border-b border-slate-200">
          <div class="absolute inset-0 bg-gradient-to-br from-[#EEF6FF] via-white to-[#F7F7FF]"></div>
          <div class="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <div class="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p class="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-emerald-700">
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Search Engine Optimization
                </p>
                <h1 class="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                  SEO That{" "}
                  <span class="bg-gradient-to-r from-slate-900 to-emerald-600 bg-clip-text text-transparent">
                    Ranks, Resonates &amp; Revenues
                  </span>
                </h1>
                <p class="mt-5 max-w-2xl text-lg text-slate-600">
                  More than rankings—we align technical SEO, content velocity,
                  and authority building to deliver compounding visibility,
                  engaged audiences, and measurable revenue lift.
                </p>
                <div class="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    class="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:opacity-90"
                  >
                    Get a SEO Audit
                  </a>
                  <a
                    href="#seo-services"
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
                      <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-30"></div>
                      <div class="text-3xl font-extrabold text-slate-900">
                        +200%
                      </div>
                      <div class="mt-1 text-sm text-slate-600">
                        Traffic growth*
                      </div>
                    </div>
                    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                      <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-30"></div>
                      <div class="text-3xl font-extrabold text-slate-900">
                        Top 3
                      </div>
                      <div class="mt-1 text-sm text-slate-600">
                        120+ keywords*
                      </div>
                    </div>
                    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                      <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-30"></div>
                      <div class="text-3xl font-extrabold text-slate-900">
                        -50%
                      </div>
                      <div class="mt-1 text-sm text-slate-600">Lower CAC*</div>
                    </div>
                    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                      <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-30"></div>
                      <div class="text-3xl font-extrabold text-slate-900">
                        200+
                      </div>
                      <div class="mt-1 text-sm text-slate-600">
                        Sites optimized*
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
                SEO That Moved the Needle
              </h2>
              <p class="mt-2 text-slate-600 max-w-3xl mx-auto">
                Flash metrics from commerce, publishing, BFSI, and multi‑market
                SEO programs.
              </p>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <article class="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm text-center">
                <div class="text-4xl font-extrabold text-slate-900">+120%</div>
                <p class="mt-1 text-sm text-slate-600">
                  Organic traffic uplift
                </p>
                <div class="mt-2 text-xs uppercase text-emerald-700">
                  Commerce
                </div>
              </article>
              <article class="rounded-3xl border border-sky-200 bg-white p-6 shadow-sm text-center">
                <div class="text-4xl font-extrabold text-slate-900">3×</div>
                <p class="mt-1 text-sm text-slate-600">Top keyword rankings</p>
                <div class="mt-2 text-xs uppercase text-sky-700">Publisher</div>
              </article>
              <article class="rounded-3xl border border-indigo-200 bg-white p-6 shadow-sm text-center">
                <div class="text-4xl font-extrabold text-slate-900">+65%</div>
                <p class="mt-1 text-sm text-slate-600">Leads via organic</p>
                <div class="mt-2 text-xs uppercase text-indigo-700">BFSI</div>
              </article>
              <article class="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm text-center">
                <div class="text-4xl font-extrabold text-slate-900">-40%</div>
                <p class="mt-1 text-sm text-slate-600">
                  CAC from organic vs paid
                </p>
                <div class="mt-2 text-xs uppercase text-rose-700">
                  Multi‑vertical
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="seo-services" class="scroll-mt-24 py-16">
          <div class="mx-auto max-w-7xl px-6">
            <div class="mb-10 text-center">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                What we deliver
              </p>
              <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
                SEO Services That Drive Real Impact
              </h2>
              <p class="mt-2 text-slate-600 max-w-3xl mx-auto">
                Each pillar crafted to be quickly scannable, SEO‑friendly, and
                client‑ready.
              </p>
            </div>
            <div class="grid gap-6 md:grid-cols-3">
              <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <h3 class="text-lg font-semibold text-slate-900">
                  Technical SEO
                </h3>
                <p class="mt-2 text-slate-600 text-sm">
                  Site speed, crawlability, schema & core vitals—so Google loves
                  your site.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <h3 class="text-lg font-semibold text-slate-900">
                  Content Strategy
                </h3>
                <p class="mt-2 text-slate-600 text-sm">
                  Topic clusters, long‑tail mapping & velocity to outpace
                  competitors.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <h3 class="text-lg font-semibold text-slate-900">
                  On‑Page & UX
                </h3>
                <p class="mt-2 text-slate-600 text-sm">
                  Optimized copy, CTAs & layouts to convert visits into leads.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <h3 class="text-lg font-semibold text-slate-900">
                  Authority & Links
                </h3>
                <p class="mt-2 text-slate-600 text-sm">
                  Clean link building & digital PR that compounds rankings.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <h3 class="text-lg font-semibold text-slate-900">
                  Local & Multi‑Market
                </h3>
                <p class="mt-2 text-slate-600 text-sm">
                  GMB, maps, and international SEO for growth beyond borders.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <h3 class="text-lg font-semibold text-slate-900">
                  Reporting & ROI
                </h3>
                <p class="mt-2 text-slate-600 text-sm">
                  Dashboards that tie rankings to traffic, leads, and revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="seo-process" class="bg-slate-50 py-16">
          <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-10">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                How we deliver
              </p>
              <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
                A Program Designed for Momentum—From Sprint 1
              </h2>
              <p class="mt-2 text-slate-600 max-w-3xl mx-auto">
                Clear phases, measurable milestones, and compounding
                improvements across tech, content, and authority.
              </p>
            </div>

            <div class="grid gap-6 lg:grid-cols-2">
              <ol class="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-slate-900 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      01. Discovery & Audit
                    </div>
                    <p class="mt-1 text-slate-800">
                      Stack, rankings, competitors, and opportunity sizing.
                      Crawl, GSC, logs, and analytics baselines.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-emerald-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      02. Technical Foundations
                    </div>
                    <p class="mt-1 text-slate-800">
                      Indexation rules, Core Web Vitals, schema,
                      canonicalization, and scalable IA fixes shipped.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-sky-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      03. Content Roadmap
                    </div>
                    <p class="mt-1 text-slate-800">
                      Topic clusters, briefs, and templates prioritized by
                      impact and feasibility.
                    </p>
                  </div>
                </li>
              </ol>

              <ol class="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-indigo-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      04. Authority Growth
                    </div>
                    <p class="mt-1 text-slate-800">
                      Digital PR, partnerships, and relevance‑first link systems
                      with governance.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-amber-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      05. Optimization & Testing
                    </div>
                    <p class="mt-1 text-slate-800">
                      SERP CTR lift tests, internal link tests, and UX copy
                      improvements tied to conversions.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-rose-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      06. Reporting & Iteration
                    </div>
                    <p class="mt-1 text-slate-800">
                      Looker dashboards across traffic, rankings, and
                      conversions, with next‑step actions monthly.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div class="mt-8 grid gap-4 md:grid-cols-3">
              <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div class="text-sm font-semibold text-slate-900">
                  Tracking & Tech
                </div>
                <p class="mt-1 text-sm text-slate-700">
                  GA4 + GSC + Looker Studio with keyword, content, and revenue
                  views wired to KPIs.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div class="text-sm font-semibold text-slate-900">
                  What you get monthly
                </div>
                <p class="mt-1 text-sm text-slate-700">
                  Roadmap, new briefs, shipped fixes, rank movement review, and
                  executive summary.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div class="text-sm font-semibold text-slate-900">
                  Outcomes we track
                </div>
                <p class="mt-1 text-sm text-slate-700">
                  Share of voice ↑ · Top‑3 keywords ↑ · Organic conversions ↑ ·
                  CAC ↓
                </p>
              </div>
            </div>

            <div class="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-r from-emerald-50 via-white to-sky-50 p-6 text-center">
              <h3 class="text-lg font-semibold text-slate-900">
                Ready to see where your SEO can compound fastest?
              </h3>
              <p class="mt-1 text-slate-600">
                Start with a audit—technical, content, and authority
                opportunities mapped to ROI.
              </p>
              <a
                href="#contact"
                class="mt-4 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-sm hover:opacity-90"
              >
                Get a SEO Audit
              </a>
            </div>
          </div>
        </section>

        <section id="clients" class="bg-slate-50 pt-8 pb-16">
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
                Everything About Our SEO Program
              </h2>
              <p class="mt-2 text-slate-600 max-w-3xl mx-auto">
                A quick primer on timelines, tools, content, and ROI tracking.
              </p>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
              <details
                class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                open
              >
                <summary class="flex justify-between font-semibold text-slate-900 cursor-pointer">
                  How long until results?
                  <span class="text-slate-400 group-open:rotate-180">▾</span>
                </summary>
                <p class="mt-2 text-slate-700">
                  Most SEO programs show traction in 3–6 months, with
                  compounding growth thereafter.
                </p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary class="flex justify-between font-semibold text-slate-900 cursor-pointer">
                  What tools do you use?
                  <span class="text-slate-400 group-open:rotate-180">▾</span>
                </summary>
                <p class="mt-2 text-slate-700">
                  Google Search Console, GA4, Screaming Frog, Ahrefs, Looker
                  Studio, and more.
                </p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary class="flex justify-between font-semibold text-slate-900 cursor-pointer">
                  Do you provide content as well?
                  <span class="text-slate-400 group-open:rotate-180">▾</span>
                </summary>
                <p class="mt-2 text-slate-700">
                  Yes, from content briefs and outlines to full copy
                  optimization.
                </p>
              </details>
              <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary class="flex justify-between font-semibold text-slate-900 cursor-pointer">
                  How do you measure ROI?
                  <span class="text-slate-400 group-open:rotate-180">▾</span>
                </summary>
                <p class="mt-2 text-slate-700">
                  Organic traffic growth, conversions, keyword visibility, and
                  assisted revenue.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section id="contact" class="bg-slate-900 py-16 text-white">
          <div class="mx-auto max-w-7xl px-6">
            <div class="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 class="text-2xl font-bold">Start with a first SEO audit</h3>
                <p class="mt-2 max-w-2xl text-slate-300">
                  We’ll review your site’s technical health, keyword
                  opportunities, and authority signals—then deliver a
                  prioritized plan.
                </p>
                <ul class="mt-4 space-y-2 text-slate-300">
                  <li class="flex items-start gap-3">
                    <span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                    <span>Technical & content gap analysis</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                    <span>Backlink health & authority opportunities</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                    <span>90‑day roadmap with quick wins</span>
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
                  <label class="text-sm md:col-span-1" for="site">
                    Website
                    <input
                      id="site"
                      name="site"
                      placeholder="https://"
                      class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    />
                  </label>
                  <label class="text-sm md:col-span-2" for="message">
                    Goals & pain points
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Where do you need SEO lift?"
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

export default Seo;

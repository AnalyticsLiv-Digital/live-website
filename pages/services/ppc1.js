import React, { useState } from "react";
import Faq from "../../components/Faq";
import MetaSchemaOg from "../../components/MetaSchemaOg";

const Ppc1 = () => {
  const [active, setActive] = useState("tracking");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    spend: "",
    message: "",
    pageSource: "ppc",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/serviceContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMessage("Your request has been submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          company: "",
          spend: "",
          message: "",
          pageSource: "ppc",
        });
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const content = [
    {
      question: "What’s the difference between SEM and PPC?",
      answer:
        "SEM includes both PPC (paid) and SEO (organic). PPC is the paid component-buying visibility on SERPs via Google Ads and Microsoft Advertising",
    },
    {
      question: "How much does PPC cost?",
      answer:
        "Budgets vary by competition and goals. We align spend to targets, then improve efficiency with negatives, creative testing, and bid strategy tuning.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Most accounts see qualified traffic quickly, with conversions stabilizing as data accrues. Expect early wins in weeks with steady improvements after.",
    },
    {
      question: "Can you manage everything end‑to‑end?",
      answer:
        "Yes-strategy, setup, tracking, creatives, landing pages, optimization, and reporting are all included.",
    },
  ];

  return (
    <>
      <main
        class="min-h-screen bg-white text-slate-800"
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"',
        }}
      >
        <section class="relative overflow-hidden border-b border-slate-200">
          <div class="absolute inset-0 bg-gradient-to-br from-[#EEF6FF] via-white to-[#F7F7FF]"></div>
          <div class="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <div class="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p class="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-sky-700">
                  <span class="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                  Performance Marketing
                </p>

                <h1 class="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                  Profit‑Focused PPC,{" "}
                  <span class="bg-gradient-to-r from-slate-900 to-sky-600 bg-clip-text text-transparent">
                    Engineered for Scale
                  </span>
                </h1>
                <p class="mt-5 max-w-2xl text-lg text-slate-600">
                  Drive predictable growth across Search, Shopping, Performance
                  Max, and YouTube with GA4‑clean tracking and data‑obsessed
                  execution.
                </p>

                <div class="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    class="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:opacity-90"
                  >
                    Get a First PPC Audit
                  </a>
                  <a
                    href="#pricing"
                    class="rounded-2xl border border-slate-300 px-6 py-3"
                  >
                    View Pricing
                  </a>
                </div>
                <ul class="mt-7 grid gap-3 sm:grid-cols-2">
                  <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span class="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-emerald-500"></span>
                    <p class="text-slate-700">
                      Strategy‑first account structures that protect ROAS
                    </p>
                  </li>
                  <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span class="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-emerald-500"></span>
                    <p class="text-slate-700">
                      GA4‑based measurement, Looker reporting, clear insights
                    </p>
                  </li>
                </ul>
              </div>

              <div class="">
                <div class="relative mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div class="grid gap-4 sm:grid-cols-2">
                    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                      <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-40"></div>
                      <div class="text-3xl font-extrabold text-slate-900">
                        3.2×
                      </div>
                      <div class="mt-1 text-sm text-slate-600">
                        Median ROAS uplift in 90 days*
                      </div>
                    </div>
                    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                      <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-40"></div>
                      <div class="text-3xl font-extrabold text-slate-900">
                        ₹10Cr+
                      </div>
                      <div class="mt-1 text-sm text-slate-600">
                        Ad spend managed to date*
                      </div>
                    </div>
                    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                      <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-40"></div>
                      <div class="text-3xl font-extrabold text-slate-900">
                        120+
                      </div>
                      <div class="mt-1 text-sm text-slate-600">
                        Clients served across B2B, D2C, Apps*
                      </div>
                    </div>
                    <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                      <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-40"></div>
                      <div class="text-3xl font-extrabold text-slate-900">
                        ‑28%
                      </div>
                      <div class="mt-1 text-sm text-slate-600">
                        Avg. CPA reduction in first quarter*
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 text-xs text-slate-500">
                    *Illustrative placeholders — replace with your verified
                    latest numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" class="py-16">
          <div class="max-w-7xl mx-auto px-6">
            <div class="mb-10 text-center">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                What sets us apart
              </p>
              <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
                Technology, Transparency & Momentum—Every Month
              </h2>
              <p class="mt-2 text-slate-600 max-w-3xl mx-auto">
                You get clean data, proactive optimization, and board‑ready
                reporting that turns PPC into an engine of predictable growth.
              </p>
            </div>
            <div class="grid gap-6 md:grid-cols-2">
              <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div class="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                  Tracking & Tech
                </div>
                <ul class="space-y-2 text-slate-700">
                  <li class="flex items-start gap-3">
                    <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-600"></span>
                    <span>
                      GA4 + GTM done right (events, parameters, enhanced
                      conversions)
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-600"></span>
                    <span>
                      Server‑side tagging where relevant; consent mode
                      compliance
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-600"></span>
                    <span>Feed & product data hygiene for Shopping / PMax</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-600"></span>
                    <span>Looker/Studio dashboards wired to business KPIs</span>
                  </li>
                </ul>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div class="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  What you get monthly
                </div>
                <ul class="space-y-2 text-slate-700">
                  <li class="flex items-start gap-3">
                    <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                    <span>
                      Roadmap & tests: ad copy, creatives, assets, audiences,
                      bids
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                    <span>
                      Budget pacing alerts and waste‑cut opportunities
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                    <span>
                      Insights tied to CPL/CPA, ROAS, MER, LTV, cohorts
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                    <span>
                      Quarterly strategy reviews with action‑led recommendations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="py-12">
          <div class="mx-auto max-w-7xl px-6">
            <div class="mb-6 flex items-end justify-between">
              <div>
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Performance at a glance
                </p>
                <h2 class="text-2xl font-bold sm:text-3xl text-slate-900">
                  Outcomes we optimize every week
                </h2>
              </div>
            </div>
            <div class="grid gap-4 md:grid-cols-4">
              <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div class="text-sm font-semibold text-slate-900">
                  Revenue Efficiency
                </div>
                <div class="mt-1 text-2xl font-extrabold text-slate-900">
                  ROAS ↑
                </div>
                <p class="mt-1 text-sm text-slate-600">
                  Bid strategy guardrails and query hygiene to protect margin.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div class="text-sm font-semibold text-slate-900">
                  Acquisition Cost
                </div>
                <div class="mt-1 text-2xl font-extrabold text-slate-900">
                  CPA ↓
                </div>
                <p class="mt-1 text-sm text-slate-600">
                  Negatives, audience layering, and creative testing.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div class="text-sm font-semibold text-slate-900">
                  Incrementality
                </div>
                <div class="mt-1 text-2xl font-extrabold text-slate-900">
                  Lift ↑
                </div>
                <p class="mt-1 text-sm text-slate-600">
                  PMax budget split and remarketing windows that add net new.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div class="text-sm font-semibold text-slate-900">Quality</div>
                <div class="mt-1 text-2xl font-extrabold text-slate-900">
                  Conv. Rate ↑
                </div>
                <p class="mt-1 text-sm text-slate-600">
                  Message‑matched LPs and CRO quick wins.
                </p>
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
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">
                Our Strategic Process for Scalable Growth
              </h2>
              <p class="mt-2 text-slate-600 max-w-3xl mx-auto">
                Clear steps, clean measurement, and relentless optimization—so
                performance compounds month after month.
              </p>
            </div>

            <div class="grid gap-6 lg:grid-cols-2">
              <ol class="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-slate-900 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      01. Discovery &amp; Goals
                    </div>
                    <p class="mt-1 text-slate-800">
                      Business deep‑dive — ICP, margins, seasonality, account
                      state, success metrics.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-sky-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      02. Tracking &amp; Data
                    </div>
                    <p class="mt-1 text-slate-800">
                      GA4 &amp; GTM, enhanced conversions, server‑side where
                      relevant, QA.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-emerald-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      03. Keywords &amp; Audiences
                    </div>
                    <p class="mt-1 text-slate-800">
                      Theme research, intent buckets, negatives, audience
                      overlays.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-indigo-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      04. Account Structure
                    </div>
                    <p class="mt-1 text-slate-800">
                      Signal density, bidding control, clean reporting.
                    </p>
                  </div>
                </li>
              </ol>

              <ol class="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-amber-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      05. Creatives &amp; LPs
                    </div>
                    <p class="mt-1 text-slate-800">
                      Message‑matched copy, extensions, high‑converting landing
                      pages.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-rose-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      06. Optimization
                    </div>
                    <p class="mt-1 text-slate-800">
                      Query mining, budget pacing, bid tuning, tests, waste
                      cuts.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="absolute -left-2.5 h-5 w-5 rounded-full bg-teal-600 ring-4 ring-slate-100"></div>
                  <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div class="text-xs font-semibold tracking-wider text-slate-500">
                      07. Reporting &amp; Insights
                    </div>
                    <p class="mt-1 text-slate-800">
                      CPL/CPA, ROAS, MER, LTV, cohorts — with clear next steps.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div class="mt-10 text-center">
              <a
                href="#contact"
                class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-sm hover:opacity-90"
              >
                Get your first PPC audit
              </a>
            </div>
          </div>
        </section>

        <section id="services" class="scroll-mt-24 py-16">
          <div class="mx-auto max-w-7xl px-6">
            <div class="mb-8">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                What We Manage
              </p>
              <h2 class="text-2xl font-bold sm:text-3xl text-slate-900">
                Search, Shopping, Performance Max, YouTube &amp; Remarketing
              </h2>
            </div>
            <div class="grid gap-4 md:grid-cols-3">
              <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 class="text-lg font-semibold text-slate-900">
                  Search (Google &amp; Bing)
                </h3>
                <p class="mt-1 text-slate-700">
                  Tight match types, query mining, and negative systems to
                  protect ROAS.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 class="text-lg font-semibold text-slate-900">
                  Shopping &amp; Performance Max
                </h3>
                <p class="mt-1 text-slate-700">
                  Feed optimization, product groups, and PMax guardrails to curb
                  waste.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 class="text-lg font-semibold text-slate-900">
                  YouTube &amp; Discovery
                </h3>
                <p class="mt-1 text-slate-700">
                  Full‑funnel creatives, audience layering, and action‑led
                  optimization.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 class="text-lg font-semibold text-slate-900">
                  Remarketing
                </h3>
                <p class="mt-1 text-slate-700">
                  Abandoners, high‑value segments, time windows—tailored
                  creatives and caps.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 class="text-lg font-semibold text-slate-900">
                  App Campaigns
                </h3>
                <p class="mt-1 text-slate-700">
                  Install &amp; in‑app action optimization with GA4/SKAN
                  measurement.
                </p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 class="text-lg font-semibold text-slate-900">
                  Account Restructure
                </h3>
                <p class="mt-1 text-slate-700">
                  Rebuilds for signal density, less overlap, and better bidding
                  control.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="process" class="scroll-mt-24 py-8">
          <div class="mx-auto max-w-7xl px-6">
            <div class="mb-8">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                How We Work
              </p>
            </div>
            <div className="flex w-fit mb-6 rounded-full overflow-hidden border border-black">
              <button
                onClick={() => setActive("tracking")}
                className={`px-5 sm:px-6 py-2 font-medium transition-all duration-300 ${
                  active === "tracking"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                Tracking & Tech
              </button>
              <button
                onClick={() => setActive("monthly")}
                className={`px-9 sm:px-12 py-2 font-medium transition-all duration-300 ${
                  active === "monthly"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                Monthly
              </button>
            </div>
            <div className="relative">
              {/* Tracking & Tech Card */}
              <div
                className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 ${
                  active === "tracking"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 pointer-events-none absolute inset-0"
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  Tracking &amp; Tech
                </h3>
                <ul className="mt-2 space-y-2 text-slate-700">
                  {[
                    "Google Ads, Microsoft Advertising",
                    "GA4 + GTM (web & server-side)",
                    "Looker Studio dashboards & BigQuery exports",
                    "Feed management & CRO toolset",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Monthly Card */}
              <div
                className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 ${
                  active === "monthly"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 pointer-events-none absolute inset-0"
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  What you get monthly
                </h3>
                <ul className="mt-2 space-y-2 text-slate-700">
                  {[
                    "Account management & daily optimizations",
                    "Ad creation & testing roadmap",
                    "Landing page recommendations",
                    "Executive summary & deep-dive report",
                    "Strategy review & next-month plan",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-slate-900"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" class="scroll-mt-24 py-16">
          <div class="mx-auto max-w-7xl px-6">
            <div class="mb-8">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Pricing
              </p>
              <h2 class="text-2xl font-bold sm:text-3xl text-slate-900">
                Flexible models aligned to outcomes
              </h2>
            </div>
            <div class="grid gap-6 md:grid-cols-3">
              <div class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 class="text-lg font-semibold text-slate-900">
                  Starter Management
                </h3>
                <p class="mt-2 text-slate-700">
                  For early‑stage or niche accounts. Fixed fee, focused scope,
                  fast feedback.
                </p>
              </div>
              <div class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 class="text-lg font-semibold text-slate-900">
                  Growth Management
                </h3>
                <p class="mt-2 text-slate-700">
                  Scaling spend with performance targets. Tiered fee across
                  spend brackets.
                </p>
              </div>
              <div class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 class="text-lg font-semibold text-slate-900">
                  Custom / Hybrid
                </h3>
                <p class="mt-2 text-slate-700">
                  Multi‑market or complex stacks. Hybrid retainer + performance
                  incentives.
                </p>
              </div>
            </div>
            <p class="mt-4 text-sm text-slate-600">
              We’ll recommend the most efficient model after a quick audit.
            </p>
          </div>
        </section>

        <section id="faqs" class="scroll-mt-24 py-16">
          <div class="mx-auto max-w-7xl px-6">
            <div class="mb-8">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                FAQs
              </p>
              <h2 class="text-2xl font-bold sm:text-3xl text-slate-900">
                What clients ask us
              </h2>
            </div>
            <Faq content={content} />
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
              …and 200+ other growth-focused businesses across B2B, D2C, and
              apps.
            </p>
          </div>
        </section>
        <section id="contact" class="bg-slate-900 py-16 text-white">
          <div class="mx-auto max-w-7xl px-6">
            <div class="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 class="text-2xl font-bold">Get your first PPC audit</h3>
                <p class="mt-2 max-w-2xl text-slate-300">
                  Share your goals, monthly ad spend, and markets. We’ll return
                  with a prioritized 90‑day plan.
                </p>
                <ul class="mt-4 space-y-2 text-slate-300">
                  <li class="flex items-start gap-3">
                    <span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                    <span>Structure &amp; waste analysis</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                    <span>Tracking &amp; conversion quality check</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                    <span>Keyword, query &amp; audience opportunities</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                    <span>PMax &amp; Shopping improvements</span>
                  </li>
                </ul>
              </div>
              <div class="rounded-3xl border border-white/20 bg-white/5 p-6">
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  method="post"
                  className="grid gap-3 md:grid-cols-2"
                >
                  <label className="text-sm" for="fullName">
                    Full name
                    <input
                      value={formData.fullName}
                      onChange={handleChange}
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="Your Full Name"
                      className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    />
                  </label>
                  <label className="text-sm" for="email">
                    Work email
                    <input
                      value={formData.email}
                      onChange={handleChange}
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    />
                  </label>
                  <label className="text-sm md:col-span-1" for="company">
                    Company
                    <input
                      value={formData.company}
                      onChange={handleChange}
                      id="company"
                      name="company"
                      placeholder="Company name"
                      className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    />
                  </label>
                  <label className="text-sm md:col-span-1" for="spend">
                    Monthly ad spend
                    <input
                      value={formData.spend}
                      onChange={handleChange}
                      id="spend"
                      name="spend"
                      placeholder="e.g. ₹2,00,000"
                      className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    />
                  </label>
                  <label className="text-sm md:col-span-2" for="message">
                    Goals &amp; markets
                    <textarea
                      value={formData.message}
                      onChange={handleChange}
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Targets, products, and geographies"
                      className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    ></textarea>
                  </label>
                  <div className="md:col-span-2">
                    <button
                      disabled={loading}
                      className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-md transition hover:opacity-90"
                      type="submit"
                    >
                      {loading ? "Submitting..." : "Request Audit"}
                    </button>
                  </div>
                  {responseMessage && (
                    <p className="md:col-span-2 mt-2 text-sm text-white">
                      {responseMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Ppc1;

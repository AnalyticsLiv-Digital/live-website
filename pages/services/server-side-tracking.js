'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Marquee from "react-fast-marquee";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import MetaSchemaOg from '../../components/MetaSchemaOg';

const Serversidetracking = () => {
    const [activeMode, setActiveMode] = useState("hybrid"); // default state
    function Feature({ title, text }) {
        return (
            <div className="rounded-2xl border border-slate-200 p-4">
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
            </div>
        );
    }

    function Kpi({ title, value, description }) {
        return (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <div className="mt-1 text-3xl font-extrabold text-slate-900">{value}</div>
                <p className="mt-1 text-sm text-slate-600">{description}</p>
            </div>
        );
    }
    return (
        <>
            <MetaSchemaOg
                url="https://analyticsliv.com/services/server-side-tracking"
                title="Expert Server-Side Analytics Tracking Solutions | AnalyticsLiv"
                description="Get accurate, secure tracking with AnalyticsLiv’s server-side analytics tracking. Boost your data quality, privacy, and analytical performance for better marketing outcomes."
                twitterTitle="Expert Server-Side Analytics Tracking Solutions | AnalyticsLiv"
                twitterDescription="Get accurate, secure tracking with AnalyticsLiv’s server-side analytics tracking. Boost your data quality, privacy, and analytical performance for better marketing outcomes."
            />

            <main class="min-h-screen bg-white text-slate-800">
                <section class="relative overflow-hidden border-b border-slate-200">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#EEF6FF] via-white to-[#F7F7FF]"></div>
                    <div class="relative mx-auto max-w-7xl px-6 max-sm:pt-8 max-sm:pb-12 sm:py-16 lg:py-16">
                        <div class="grid items-center gap-12 md:grid-cols-2">
                            <div>
                                <p class="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-emerald-700">
                                    <span class="dot bg-emerald-500"></span>
                                    Privacy‑First Measurement
                                </p>
                                <h1 class="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                                    Server‑Side Tracking <span class="bg-gradient-to-r from-slate-900 to-emerald-600 bg-clip-text text-transparent">That Restores Accuracy</span>
                                </h1>
                                <p class="mt-5 max-w-2xl text-lg text-slate-600">
                                    Clean data, faster pages, and durable attribution. We implement GA4 + GTM Server, Consent Mode v2, Enhanced Conversions, and Meta/Google CAPI—wired to your KPIs.
                                </p>
                                <div class="mt-7 flex flex-wrap items-center gap-3">
                                    <a href="#contact" class="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:opacity-90">Get a Tracking Audit</a>
                                    <a href="#comparison" class="rounded-2xl border border-slate-300 px-6 py-3">See Why Server‑Side</a>
                                </div>
                                <ul class="mt-6 grid gap-3 sm:grid-cols-2 text-slate-700">
                                    <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><span class="dot mt-1 bg-emerald-500"></span><p>90%+ event reliability post ‑ implementation*</p></li>
                                    <li class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><span class="dot mt-1 bg-emerald-500"></span><p>20–40% faster LCP by moving tags off the page*</p></li>
                                </ul>
                            </div>
                            <div class="">
                                <div class="relative mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-subtle">
                                    <div class="grid gap-4 sm:grid-cols-2">
                                        <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                                            <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full kpi-ring opacity-40"></div>
                                            <div class="text-3xl font-extrabold text-slate-900">92%</div>
                                            <div class="mt-1 text-sm text-slate-600">Data accuracy with Consent Mode v2*</div>
                                        </div>
                                        <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                                            <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full kpi-ring opacity-40"></div>
                                            <div class="text-3xl font-extrabold text-slate-900">‑30%</div>
                                            <div class="mt-1 text-sm text-slate-600">Tag‑caused page weight*</div>
                                        </div>
                                        <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                                            <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full kpi-ring opacity-40"></div>
                                            <div class="text-3xl font-extrabold text-slate-900">+18%</div>
                                            <div class="mt-1 text-sm text-slate-600">Modeled conversions recovered*</div>
                                        </div>
                                        <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                                            <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full kpi-ring opacity-40"></div>
                                            <div class="text-3xl font-extrabold text-slate-900">BigQuery</div>
                                            <div class="mt-1 text-sm text-slate-600">First‑party data foundation</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="benefits" class="py-16">
                    <div class="mx-auto max-w-7xl px-6">
                        <div class="mb-10 text-center">
                            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">What you get</p>
                            <h2 class="text-2xl md:text-3xl font-bold text-slate-900">Durable Measurement, Cleaner Pages, Better ROI</h2>
                            <p class="mt-2 text-slate-600 max-w-3xl mx-auto">A modern stack that respects privacy and still measures outcomes you can optimize.</p>
                        </div>
                        <div class="grid gap-6 md:grid-cols-3">
                            <div class="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
                                <h3 class="text-lg font-semibold text-slate-900">GA4 + GTM Server</h3>
                                <p class="mt-2 text-slate-700">Event models, parameters, and server containers hosted on gcloud, AWS or GCP App Engine.</p>
                                <ul class="mt-3 space-y-1 text-sm text-slate-600">
                                    <li>Event & parameter design</li>
                                    <li>SS container setup & routing</li>
                                    <li>Webhooks & header enrichment</li>
                                </ul>
                            </div>
                            <div class="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm">
                                <h3 class="text-lg font-semibold text-slate-900">Consent Mode v2 & ECL</h3>
                                <p class="mt-2 text-slate-700">CMP integration, advanced mode, and Enhanced Conversions for modeled recovery.</p>
                                <ul class="mt-3 space-y-1 text-sm text-slate-600">
                                    <li>TCF/US‑state strings</li>
                                    <li>Cookieless pings & modeling</li>
                                    <li>PII hashing & governance</li>
                                </ul>
                            </div>
                            <div class="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-sm">
                                <h3 class="text-lg font-semibold text-slate-900">CAPI & Channel Feeds</h3>
                                <p class="mt-2 text-slate-700">Server‑to‑server for Google Ads, Meta, LinkedIn, and more—with deduping.</p>
                                <ul class="mt-3 space-y-1 text-sm text-slate-600">
                                    <li>Event IDs & deduplication</li>
                                    <li>Offline & LTV uploads</li>
                                    <li>Product/feed hygiene</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="comparison" className="bg-slate-50 py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        {/* Heading */}
                        <div className="mb-8 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Clarity
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Client-Side vs Server-Side - What Actually Changes
                            </h2>
                            <p className="mt-2 text-slate-600 max-w-3xl mx-auto">
                                Same business questions, different mechanics. Hover to learn more; toggle to see our
                                recommendation by context.
                            </p>
                        </div>

                        {/* Toggle Buttons */}
                        <div className="mx-auto mb-6 flex w-full max-w-md items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                            {["client", "hybrid", "server"].map((mode) => (
                                <button
                                    key={mode}
                                    onClick={() => setActiveMode(mode)}
                                    className={`flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition-colors duration-200 ${activeMode === mode
                                        ? "bg-slate-900 text-white"
                                        : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                >
                                    {mode === "client"
                                        ? "Client-Side"
                                        : mode === "hybrid"
                                            ? "Hybrid (Recommended)"
                                            : "Server-Side"}
                                </button>
                            ))}
                        </div>

                        {/* Comparison Grid */}
                        <div className="grid gap-4 md:grid-cols-2">
                            {/* Client Side Card */}
                            <div
                                className={`rounded-3xl border-2 bg-white p-6 shadow-sm group ${activeMode === "client" ? "border-emerald-200" : "border-slate-200"
                                    }`}
                            >
                                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                                    Client-Side
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <Feature title="Data Quality" text="Susceptible to ad-blockers, ITP/ETP; lower event match rates." />
                                    <Feature title="Performance" text="Tags run in browser → scripts add weight; CLS/LCP risk." />
                                    <Feature title="Privacy & Control" text="Harder to enforce governance; PII risks without hashing." />
                                    <Feature title="Use Cases" text="Small sites, low compliance needs, simple pixels." />
                                </div>
                            </div>

                            {/* Server Side Card */}
                            <div
                                className={`rounded-3xl border-2 bg-white p-6 shadow-sm group ${activeMode === "server" ? "border-emerald-200" : "border-slate-200"
                                    }`}
                            >
                                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                    Server-Side
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <Feature title="Data Quality" text="Higher match rates via CAPI & modeled fills; resilient to blockers." />
                                    <Feature title="Performance" text="Offloads scripts to edge/server → faster pages, better CWV." />
                                    <Feature title="Privacy & Control" text="Hashing, header enrichment, policy filters at the server." />
                                    <Feature title="Use Cases" text="Regulated markets, performance-sensitive sites, multi-channel." />
                                </div>
                            </div>
                        </div>

                        {/* KPIs */}
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <Kpi
                                title="Modeled Conversion Recovery"
                                value="+10–25%"
                                description="with Consent Mode v2 + ECL and server-side routing*"
                            />
                            <Kpi
                                title="Page Performance"
                                value="LCP −200-500ms"
                                description="by removing heavy third-party scripts from the browser*"
                            />
                            <Kpi
                                title="Governance"
                                value="Policy Filters"
                                description="strip PII, enforce mappings, and log decisions centrally"
                            />
                        </div>
                    </div>
                </section>
                <section id="process" class="py-16">
                    <div class="mx-auto max-w-7xl px-6">
                        <div class="mb-8 text-center">
                            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">How we deliver</p>
                            <h2 class="text-2xl md:text-3xl font-bold text-slate-900">A Proven 6‑Step Rollout for Server‑Side Success</h2>
                        </div>
                        <div class="grid gap-6 lg:grid-cols-2">
                            <ol class="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                                <li><div class="absolute -left-2.5 h-5 w-5 rounded-full bg-slate-900 ring-4 ring-slate-100"></div>
                                    <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                                        <div class="text-xs font-semibold tracking-wider text-slate-500">01. Audit & Plan</div>
                                        <p class="mt-1 text-slate-800">Event inventory, consent posture, gaps, and success metrics.</p>
                                    </div></li>
                                <li><div class="absolute -left-2.5 h-5 w-5 rounded-full bg-emerald-600 ring-4 ring-slate-100"></div>
                                    <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                                        <div class="text-xs font-semibold tracking-wider text-slate-500">02. Architecture</div>
                                        <p class="mt-1 text-slate-800">GTM Server on App Engine/Cloud Run, DNS, custom endpoints.</p>
                                    </div></li>
                                <li><div class="absolute -left-2.5 h-5 w-5 rounded-full bg-sky-600 ring-4 ring-slate-100"></div>
                                    <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                                        <div class="text-xs font-semibold tracking-wider text-slate-500">03. Consent & ECL</div>
                                        <p class="mt-1 text-slate-800">CMP integration, Consent Mode v2, enhanced conversions.</p>
                                    </div></li>
                            </ol>
                            <ol class="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                                <li><div class="absolute -left-2.5 h-5 w-5 rounded-full bg-indigo-600 ring-4 ring-slate-100"></div>
                                    <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                                        <div class="text-xs font-semibold tracking-wider text-slate-500">04. CAPI & Channels</div>
                                        <p class="mt-1 text-slate-800">Google Ads, Meta, LinkedIn, etc. with dedup IDs & policy filters.</p>
                                    </div></li>
                                <li><div class="absolute -left-2.5 h-5 w-5 rounded-full bg-amber-600 ring-4 ring-slate-100"></div>
                                    <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                                        <div class="text-xs font-semibold tracking-wider text-slate-500">05. QA & Hardening</div>
                                        <p class="mt-1 text-slate-800">Event parity checks, payload inspection, security & logging.</p>
                                    </div></li>
                                <li><div class="absolute -left-2.5 h-5 w-5 rounded-full bg-rose-600 ring-4 ring-slate-100"></div>
                                    <div class="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                                        <div class="text-xs font-semibold tracking-wider text-slate-500">06. Dashboards & Handover</div>
                                        <p class="mt-1 text-slate-800">Looker Studio + BigQuery; playbooks & runbooks for the team.</p>
                                    </div></li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="clients" class="bg-slate-50 pt-12 pb-16">
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
                            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">FAQs</p>
                            <h2 class="text-2xl md:text-3xl font-bold text-slate-900">Everything About Server‑Side Tracking</h2>
                            <p class="mt-2 text-slate-600 max-w-3xl mx-auto">Timelines, hosting choices, costs, and how we prove impact.</p>
                        </div>
                        <div class="grid gap-4 md:grid-cols-2">
                            <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <summary class="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">What does the rollout typically involve?<span class="text-slate-400 group-open:rotate-180 transition">▾</span></summary>
                                <p class="mt-2 text-slate-700">GTM server container on App Engine or Cloud Run, DNS for first‑party endpoint, CMP hookup for Consent Mode v2, CAPI with dedup IDs, and Looker dashboards.</p>
                            </details>
                            <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <summary class="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">Do we still keep any client‑side tags?<span class="text-slate-400 group-open:rotate-180 transition">▾</span></summary>
                                <p class="mt-2 text-slate-700">Yes—hybrid is common. We keep lightweight client‑side triggers for consent and event IDs, while routing heavy lifting via the server container.</p>
                            </details>
                            <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <summary class="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">How do you prove ROI?<span class="text-slate-400 group-open:rotate-180 transition">▾</span></summary>
                                <p class="mt-2 text-slate-700">We measure event delivery rate, modeled conversions gained, match quality, CWV improvements, and media outcomes (CPA/ROAS) before vs after.</p>
                            </details>
                            <details class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <summary class="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">What about costs?<span class="text-slate-400 group-open:rotate-180 transition">▾</span></summary>
                                <p class="mt-2 text-slate-700">Cloud hosting is usage‑based and modest for most sites. We right‑size architecture and provide cost dashboards so there are no surprises.</p>
                            </details>
                        </div>
                    </div>
                </section>

                <section id="contact" class="bg-slate-900 py-16 text-white">
                    <div class="mx-auto max-w-7xl px-6">
                        <div class="grid items-center gap-8 md:grid-cols-2">
                            <div>
                                <h3 class="text-2xl font-bold">Start with a first tracking audit</h3>
                                <p class="mt-2 max-w-2xl text-slate-300">We’ll review your tags, consent posture, and data gaps—and send a prioritized rollout plan.</p>
                                <ul class="mt-4 space-y-2 text-slate-300">
                                    <li class="flex items-start gap-3"><span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span><span>Event & parameter map</span></li>
                                    <li class="flex items-start gap-3"><span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span><span>Server architecture options</span></li>
                                    <li class="flex items-start gap-3"><span class="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span><span>90‑day implementation plan</span></li>
                                </ul>
                            </div>
                            <div class="rounded-3xl border border-white/20 bg-white/5 p-6">
                                <form action="#" method="post" class="grid gap-3 md:grid-cols-2">
                                    <label class="text-sm" for="name">Full name
                                        <input id="name" name="name" required placeholder="Your name" class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label class="text-sm" for="email">Work email
                                        <input id="email" type="email" name="email" required placeholder="name@company.com" class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label class="text-sm md:col-span-1" for="company">Company
                                        <input id="company" name="company" placeholder="Company name" class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label class="text-sm md:col-span-1" for="stack">Current stack
                                        <input id="stack" name="stack" placeholder="e.g., GA4, GTM, CAPI" class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label class="text-sm md:col-span-2" for="message">Goals & pain points
                                        <textarea id="message" name="message" rows="4" placeholder="What are you solving for?" class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"></textarea>
                                    </label>
                                    <div class="md:col-span-2">
                                        <button class="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-md transition hover:opacity-90" type="submit">Request Audit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}

export default Serversidetracking

import React, { useState } from "react";
import MetaSchemaOg from "../../components/MetaSchemaOg";
import Faq from "../../components/Faq";

const BusinessStrategy = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        role: "",
        message: "",
        pageSource: "BusinessStrategy",
    });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
                    role: "",
                    message: "",
                    pageSource: "BusinessStrategy"
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

    const faqContent = [
        {
            question: 'How is this different from a typical consulting strategy engagement?',
            answer: 'We connect strategy, analytics, and execution. That means GA4, media, CRM and product data are part of the process, and we leave you with roadmaps, tests, dashboards and rituals — not just a slide deck.'
        },
        {
            question: 'How long does a typical engagement take?',
            answer: 'Strategy sprints run for 4-6 weeks. Full transformation programs usually run 8-16 weeks, depending on markets and stakeholders involved.'
        },
        {
            question: 'Do you also help with implementation?',
            answer: 'Yes. We can stay on as a strategy partner, or hand over to your internal teams and existing agencies. Our media, analytics, cloud and CRO teams can support execution if you prefer a single partner.'
        },
        {
            question: 'What if our data is not perfect yet?',
            answer: 'Very few organizations have perfect data. We\'ll assess data quality upfront, set realistic confidence levels, and in parallel define the tracking, GA4 and cloud improvements required to make strategy more measurable over time.'
        }
    ];

    return (
        <>
            <MetaSchemaOg
                url="https://analyticsliv.com/services/business-strategy"
                title="Business Strategy & Transformation Consulting | AnalyticsLiv"
                description="Transform your business with data-driven strategy. From boardroom vision to measurable execution - we help leadership teams design strategies that actually work."
                twitterTitle="Business Strategy & Transformation | AnalyticsLiv"
                twitterDescription="Transform your business with data-driven strategy consulting."
                faqData={faqContent}
            />

            <div style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                <style jsx>{`
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.5); }
            50% { box-shadow: 0 0 40px rgba(102, 126, 234, 0.8); }
          }
          .gradient-bg-hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            animation: gradient-shift 15s ease infinite;
            background-size: 200% 200%;
          }
          .float-animation {
            animation: float 6s ease-in-out infinite;
          }
          .pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
        `}</style>

                {/* HERO SECTION */}
                <section className="relative overflow-hidden gradient-bg-her py-12 md:py-16 lg:py-20">
                    {/* Animated Background Blobs */}
                    {/* <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div> */}

                    <div className="relative mx-auto max-w-7xl px-6">
                        <div className="grid items-center gap-12 lg:grid-cols-2">

                            {/* Left Content */}
                            <div className="text-black">
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/20 backdrop-blur-md px-5 py-2 text-sm font-semibold">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
                                    </span>
                                    Business Strategy & Transformation
                                </div>

                                <h1 className="text-4xl font-black leading-tight lg:text-6xl">
                                    Strategy That Connects
                                    <span className="block mt-2 text-blue-400">Boardroom to Dashboards</span>
                                </h1>

                                <p className="mt-6 text-lg lg:text-xl text-black/90 leading-relaxed">
                                    We help leadership teams design <strong>data-backed strategy</strong>, align marketing, product, and technology, and ship a roadmap that your teams can actually execute.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <a href="#contact" className="rounded-full bg-black px-8 py-4 font-bold text-white shadow-2xl transition hover:scale-105">
                                        Schedule a Strategy Call →
                                    </a>
                                    <a href="#framework" className="rounded-full px-8 py-4 font-semibold text-black transition hover:bg-black/20 bg-black/10 backdrop-blur-md border border-black/20">
                                        See Our Framework
                                    </a>
                                </div>

                                {/* Quick Stats */}
                                <div className="mt-10 grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-xl md:text-3xl font-black text-blue-400">2-3×</div>
                                        <div className="text-sm text-black/80">Decision Velocity</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xl md:text-3xl font-black text-blue-400">20-30%</div>
                                        <div className="text-sm text-black/80">Media Efficiency</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xl md:text-3xl font-black text-blue-400">90 Days</div>
                                        <div className="text-sm text-black/80">To Impact</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Floating Cards */}
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Card 1 */}
                                    <div className="rounded-3xl p-6 transition-all hover:transform hover:-translate-y-2 hover:shadow-xl bg-white backdrop-blur-md border border-gray-600 float-animation">
                                        <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-medium text-black/70">Analytics-Driven</div>
                                        <div className="mt-1 text-lg md:text-2xl font-black text-black">GA4 + Cloud</div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="rounded-3xl p-6 transition-all hover:transform hover:-translate-y-2 hover:shadow-xl bg-white backdrop-blur-md border border-gray-600 float-animation" style={{ animationDelay: '0.5s' }}>
                                        <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-medium text-black/70">Rapid Execution</div>
                                        <div className="mt-1 text-lg md:text-2xl font-black text-black">90-Day Plan</div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="rounded-3xl p-6 transition-all hover:transform hover:-translate-y-2 hover:shadow-xl bg-white backdrop-blur-md border border-gray-600 float-animation" style={{ animationDelay: '1s' }}>
                                        <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-400">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-medium text-black/70">ROI Focused</div>
                                        <div className="mt-1 text-lg md:text-2xl font-black text-black">Measurable</div>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="rounded-3xl p-6 transition-all hover:transform hover:-translate-y-2 hover:shadow-xl bg-white backdrop-blur-md border border-gray-600 float-animation" style={{ animationDelay: '1.5s' }}>
                                        <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-medium text-black/70">Team Alignment</div>
                                        <div className="mt-1 text-lg md:text-2xl font-black text-black">80%+ Adoption</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* WHO WE WORK WITH */}
                <section className="py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-12">
                            <p className="text-sm font-bold uppercase tracking-wider text-purple-600 mb-3">Where Strategy Lands</p>
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900">
                                Built for Leaders Who Care About
                                <span className="ml-2 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Measurable Outcomes</span>
                            </h2>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">

                            {/* Founders & CXOs */}
                            <div className="group relative rounded-3xl overflow-hidden transition-all hover:transform hover:-translate-y-2 hover:shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-violet-600 opacity-10 group-hover:opacity-20 transition"></div>
                                <div className="relative bg-white border-2 border-purple-200 rounded-3xl p-8">
                                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-600 shadow-lg">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-3">Founders & CXOs</h3>
                                    <p className="text-slate-600 mb-4 leading-relaxed">
                                        Clarify where growth will come from, how to fund it, and how to track it in a single view.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-slate-700">North Star & KPI tree</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-slate-700">12-18 month growth narrative</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-slate-700">Strategic bets & risk lens</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Marketing & Growth */}
                            <div className="group relative rounded-3xl overflow-hidden transition-all hover:transform hover:-translate-y-2 hover:shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 opacity-10 group-hover:opacity-20 transition"></div>
                                <div className="relative bg-white border-2 border-pink-200 rounded-3xl p-8">
                                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-3">Marketing & Growth Leaders</h3>
                                    <p className="text-slate-600 mb-4 leading-relaxed">
                                        Turn strategy into experiments, campaigns, and budgets that finance will sign off on.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-pink-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-slate-700">Channel & portfolio strategy</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-pink-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-slate-700">Test roadmap & learning agenda</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-pink-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-slate-700">Revenue & CAC/LTV lenses</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Product, Data & Tech */}
                            <div className="group relative rounded-3xl overflow-hidden transition-all hover:transform hover:-translate-y-2 hover:shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-10 group-hover:opacity-20 transition"></div>
                                <div className="relative bg-white border-2 border-cyan-200 rounded-3xl p-8">
                                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-3">Product, Data & Tech</h3>
                                    <p className="text-slate-600 mb-4 leading-relaxed">
                                        Align roadmaps, analytics, and infrastructure so every sprint moves the strategy forward.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-cyan-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-slate-700">Data & tracking requirements</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-cyan-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-slate-700">Experience & feature priorities</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-cyan-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-slate-700">Cloud & tooling implications</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* STRATEGY FRAMEWORK */}
                <section id="framework" className="py-20 bg-slate-800 text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6">
                        <div className="text-center mb-16">
                            <p className="text-sm font-bold uppercase tracking-wider text-purple-300 mb-3">Our Approach</p>
                            <h2 className="text-3xl lg:text-5xl font-black">
                                A Framework That Connects
                                <span className="block mt-2 bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                                    Insight → Bets → Roadmap → Measurement
                                </span>
                            </h2>
                            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
                                We don't just write a strategy deck. We align <strong>data, media, product, and technology</strong> into one operating model.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-4">

                            {/* Phase 1 */}
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-violet-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition"></div>
                                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6 transition-all hover:transform hover:-translate-y-2">
                                    <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold">
                                        <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                                        01 · DIAGNOSE
                                    </div>
                                    <h3 className="text-2xl font-black mb-3">Insight Layer</h3>
                                    <p className="text-white/70 mb-4 text-sm leading-relaxed">
                                        Market, customer, funnel and unit economics analysis from your existing data stack.
                                    </p>
                                    <ul className="space-y-2 text-sm text-white/60">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                            GA4, CRM & revenue analysis
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                            Channel & cohort performance
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                            Competitive & category scan
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Phase 2 */}
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition"></div>
                                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 transition-all hover:transform hover:-translate-y-2">
                                    <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold">
                                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                                        02 · DESIGN
                                    </div>
                                    <h3 className="text-2xl font-black mb-3">Strategy Layer</h3>
                                    <p className="text-white/70 mb-4 text-sm leading-relaxed">
                                        Clear bets on segments, propositions, channels and capabilities to unlock growth.
                                    </p>
                                    <ul className="space-y-2 text-sm text-white/60">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                            Positioning & ICP definition
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                            Value prop & journeys
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                            Channel & investment thesis
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Phase 3 */}
                            <div className="group relative h-full">
                                <div className="absolute -inset-1 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition"></div>
                                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-6 transition-all hover:transform hover:-translate-y-2">
                                    <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                        03 · BUILD
                                    </div>
                                    <h3 className="text-2xl font-black mb-3">Execution Layer</h3>
                                    <p className="text-white/70 mb-4 text-sm leading-relaxed">
                                        Roadmaps, test plans and operating model required to deliver the strategy.
                                    </p>
                                    <ul className="space-y-2 text-sm text-white/60">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                            90-day & annual roadmap
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                            CRO & media test backlog
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                            Data & cloud requirements
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Phase 4 */}
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition"></div>
                                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-yellow-500/30 rounded-3xl p-6 transition-all hover:transform hover:-translate-y-2">
                                    <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-bold">
                                        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                        04 · ENABLE
                                    </div>
                                    <h3 className="text-2xl font-black mb-3">Governance Layer</h3>
                                    <p className="text-white/70 mb-4 text-sm leading-relaxed">
                                        Cadence, dashboards and ownership so strategy doesn't die after the offsite.
                                    </p>
                                    <ul className="space-y-2 text-sm text-white/60">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                                            KPI tree & scorecards
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                                            Rituals & review forums
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                                            Change & capability plan
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 7 STEP PROCESS */}
                <section id="process" className="py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-16">
                            <p className="text-sm font-bold uppercase tracking-wider text-purple-600 mb-3">How We Deliver</p>
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900">
                                From First Call to
                                <span className="ml-2 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Board-Ready Plan</span>
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                                A transparent, time-boxed engagement that moves from insight → alignment → roadmap → pilots without losing momentum.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Center Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-300 via-pink-300 to-cyan-300 hidden lg:block"></div>

                            <div className="space-y-12">

                                {/* Step 1 */}
                                <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                                    <div className="lg:text-right">
                                        <div className="inline-block lg:block mr-5">
                                            <div className="inline-flex items-center gap-3 mb-3">
                                                <span className="text-6xl font-black bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">01</span>
                                                <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase">Discovery</span>
                                            </div>
                                            <h3 className="text-2xl font-black text-slate-900 mb-2">Discovery & Alignment</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                Stakeholder interviews, current state mapping, definition of goals, constraints and success metrics.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block"></div>
                                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 shadow-lg flex items-center justify-center pulse-glow">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                                    <div className="lg:order-2">
                                        <div className="inline-block lg:block ml-5">
                                            <div className="inline-flex items-center gap-3 mb-3">
                                                <span className="text-6xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">02</span>
                                                <span className="px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold uppercase">Data Deep-Dive</span>
                                            </div>
                                            <h3 className="text-2xl font-black text-slate-900 mb-2">Data & Diagnosis</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                Deep-dive into GA4, CRM, revenue and media data to understand segments, funnels and unit economics.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:order-1 hidden lg:block"></div>
                                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg flex items-center justify-center pulse-glow">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                                    <div className="lg:text-right">
                                        <div className="inline-block lg:block mr-5">
                                            <div className="inline-flex items-center gap-3 mb-3">
                                                <span className="text-6xl font-black bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">03</span>
                                                <span className="px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase">Strategic Options</span>
                                            </div>
                                            <h3 className="text-2xl font-black text-slate-900 mb-2">Strategy Options & Bets</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                Develop 2-3 strategic routes with trade-offs across audience, proposition, channels, and capabilities.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block"></div>
                                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg flex items-center justify-center pulse-glow">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                                    <div className="lg:order-2">
                                        <div className="inline-block lg:block ml-5">
                                            <div className="inline-flex items-center gap-3 mb-3">
                                                <span className="text-6xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">04</span>
                                                <span className="px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase">Roadmap</span>
                                            </div>
                                            <h3 className="text-2xl font-black text-slate-900 mb-2">Roadmap & Operating Model</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                Translate chosen strategy into 90-day plan, 12-18 month roadmap, roles, forums and KPIs.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:order-1 hidden lg:block"></div>
                                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg flex items-center justify-center pulse-glow">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105">
                                Talk Through the Process
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* 90-DAY DELIVERABLES */}
                <section className="py-20 bg-slate-800 text-white relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
                            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl"></div>
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6">
                        <div className="text-center mb-12">
                            <p className="text-sm font-bold uppercase tracking-wider text-yellow-200 mb-3">What You Get</p>
                            <h2 className="text-3xl lg:text-5xl font-black">
                                In 90 Days, Walk Away With
                                <span className="block mt-2">More Than Just a Deck</span>
                            </h2>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">

                            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all hover:transform hover:-translate-y-2 hover:shadow-xl">
                                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-black mb-3">Strategy & Narrative</h3>
                                <ul className="space-y-3 text-white/90">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>North Star & KPI tree</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Strategic bets & portfolio</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Customer, product & channel POV</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Board-ready narrative & slides</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all hover:transform hover:-translate-y-2 hover:shadow-xl">
                                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-black mb-3">Roadmap & Experiments</h3>
                                <ul className="space-y-3 text-white/90">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>90-day program with owners</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>CRO & media test backlog</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Data & tracking requirements</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Risks, dependencies & scenarios</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all hover:transform hover:-translate-y-2 hover:shadow-xl">
                                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-black mb-3">Measurement & Governance</h3>
                                <ul className="space-y-3 text-white/90">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>KPI dashboards & scorecards spec</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Review forums & cadence</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Decision rights & RACI</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Change & capability plan</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ENGAGEMENT MODELS */}
                <section id="pricing" className="py-20 bg-slate-50">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-16">
                            <p className="text-sm font-bold uppercase tracking-wider text-purple-600 mb-3">How We Work With You</p>
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900">
                                Engagement Models That
                                <span className="ml-2 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Match Your Stage</span>
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                                We scope strategy engagements based on <strong>complexity, timelines, and leadership involvement</strong> — not just hours.
                            </p>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-3">

                            {/* Sprint */}
                            <div className="relative rounded-3xl bg-white border-2 border-slate-200 p-8 transition-all hover:transform hover:-translate-y-2 hover:shadow-xl">
                                <div className="mb-4">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-4">
                                        QUICK START
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2">Strategy Sprint</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        4-6 weeks focused on a specific problem — new market, new product, or channel portfolio.
                                    </p>
                                </div>
                                <div className="my-6 space-y-3">
                                    <div className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-slate-700">Focused diagnosis</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-slate-700">Strategic options & recommendation</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-slate-700">90-day experiment plan</span>
                                    </div>
                                </div>
                                <a href="#contact" className="block w-full text-center rounded-full border-2 border-purple-600 px-6 py-3 font-semibold text-purple-600 transition hover:bg-purple-600 hover:text-white">
                                    Learn More
                                </a>
                            </div>

                            {/* Transformation (Most Popular) */}
                            <div className="relative rounded-3xl overflow-hidden transition-all hover:shadow-2xl transform lg:-translate-y-4">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-violet-600 opacity-10"></div>
                                <div className="relative bg-white border-4 border-purple-600 rounded-3xl p-8">
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="inline-flex items-center gap-2 px-6 py-2 mt-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-black shadow-lg">
                                            ⭐ MOST POPULAR
                                        </span>
                                    </div>
                                    <div className="mb-4 mt-4">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white text-xs font-bold mb-4">
                                            COMPREHENSIVE
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 mb-2">Growth & Transformation Program</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            8-16 week engagement to align leadership, design roadmap, and launch first wave of pilots.
                                        </p>
                                    </div>
                                    <div className="my-6 space-y-3">
                                        <div className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-slate-700">End-to-end framework & roadmap</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-slate-700">Pilot design & launch support</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm text-slate-700">Measurement, dashboards & governance</span>
                                        </div>
                                    </div>
                                    <a href="#contact" className="block w-full text-center rounded-full bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3 font-bold text-white shadow-lg transition hover:scale-105">
                                        Get Started
                                    </a>
                                </div>
                            </div>

                            {/* Retainer */}
                            <div className="relative rounded-3xl bg-white border-2 border-slate-200 p-8 transition-all hover:transform hover:-translate-y-2 hover:shadow-xl">
                                <div className="mb-4">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold mb-4">
                                        ONGOING
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2">Strategy Partner Retainer</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Ongoing partner for growth, working alongside your leadership, media, and product teams.
                                    </p>
                                </div>
                                <div className="my-6 space-y-3">
                                    <div className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-slate-700">Quarterly strategy refresh</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-slate-700">Experiment review & support</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-slate-700">Org enablement & hiring inputs</span>
                                    </div>
                                </div>
                                <a href="#contact" className="block w-full text-center rounded-full border-2 border-cyan-600 px-6 py-3 font-semibold text-cyan-600 transition hover:bg-cyan-600 hover:text-white">
                                    Learn More
                                </a>
                            </div>

                        </div>

                        <p className="mt-8 text-center text-sm text-slate-500">
                            Exact commercials are tailored to your scope, regions, and team structure. We'll share a proposal after a short discovery call.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="pt-12 pb-16 bg-white">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="text-center mb-12">
                            <p className="text-sm font-bold uppercase tracking-wider text-purple-600 mb-3">FAQs</p>
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900">
                                What Leadership Teams
                                <span className="ml-2 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Ask Us</span>
                            </h2>
                        </div>
                        <Faq content={faqContent} />
                    </div>
                </section>

                {/* CONTACT FORM - Using SEO page pattern */}
                <section id="contact" className="bg-slate-900 py-16 text-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid items-center gap-8 md:grid-cols-2">
                            <div>
                                <h3 className="text-2xl font-bold">Ready to Design a Strategy Your Teams Can Actually Execute?</h3>
                                <p className="mt-2 max-w-2xl text-slate-300">
                                    Share where you are today, where you want to get to, and what's blocking you. We'll come back with a point of view, not a generic credentials deck.
                                </p>
                                <ul className="mt-4 space-y-2 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                                        <span>30-45 min leadership discovery session</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                                        <span>Lightweight data & performance review</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                                        <span>Proposed approach, team structure and timelines</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
                                <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-2">
                                    <label className="text-sm" htmlFor="fullName">Full name
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
                                    <label className="text-sm" htmlFor="email">Work email
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
                                    <label className="text-sm md:col-span-1" htmlFor="company">Company
                                        <input
                                            value={formData.company}
                                            onChange={handleChange}
                                            id="company"
                                            name="company"
                                            placeholder="Company name"
                                            className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                                        />
                                    </label>
                                    <label className="text-sm md:col-span-1" htmlFor="role">Role
                                        <input
                                            value={formData.role}
                                            onChange={handleChange}
                                            id="role"
                                            name="role"
                                            placeholder="CEO, CMO, VP Growth..."
                                            className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                                        />
                                    </label>
                                    <label className="text-sm md:col-span-2" htmlFor="message">What are you trying to solve?
                                        <textarea
                                            value={formData.message}
                                            onChange={handleChange}
                                            id="message"
                                            name="message"
                                            rows="4"
                                            placeholder="Example: We want to improve CAC/LTV, enter a new market, or align leadership around a common growth plan."
                                            className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                                        ></textarea>
                                    </label>
                                    <div className="md:col-span-2">
                                        <button
                                            disabled={loading}
                                            className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-md transition hover:opacity-90 disabled:opacity-50"
                                            type="submit"
                                        >
                                            {loading ? "Submitting..." : "Submit & Request Strategy Session →"}
                                        </button>
                                    </div>
                                    {responseMessage && (
                                        <p className="md:col-span-2 mt-2 text-sm text-white">{responseMessage}</p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BusinessStrategy;
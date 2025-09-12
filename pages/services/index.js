import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const ServicesPage = () => {
    return (
        <>
              <Head>
        <style>{`
          .kpi-card { transition: box-shadow .2s, transform .2s; }
          .kpi-card:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(15,23,42,.08); }
          .ring-soft::after { content: ''; position: absolute; inset: -10px; border-radius: 24px; border: 1px dashed rgba(15,23,42,.08); }
        `}</style>
      </Head>
        <div className="min-h-screen bg-white text-slate-800"
            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"' }}>
            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden border-b border-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EEF6FF] via-white to-[#F7F7FF]"></div>
                    <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium tracking-wide text-blue-700 shadow-sm mb-6">
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Our Services
                        </div>
                        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                            Services
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600 leading-relaxed">
                            Everything we offer, organized the way your team works.
                        </p>
                    </div>
                </section>

                {/* Services Content */}
                <section className="py-20 bg-gradient-to-b from-white to-slate-50">
                    <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-4">
                        {/* Sidebar Navigation */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-28 space-y-3">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">Navigate Services</h3>
                                <nav className="space-y-2 text-sm">
                                    <a
                                        href="#media"
                                        className="group block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-200 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:bg-blue-600"></div>
                                            <span className="font-medium text-slate-700 group-hover:text-blue-700">Media Activation</span>
                                        </div>
                                    </a>
                                    <a
                                        href="#analytics"
                                        className="group block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:border-emerald-200 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-emerald-500 group-hover:bg-emerald-600"></div>
                                            <span className="font-medium text-slate-700 group-hover:text-emerald-700">Digital Analytics</span>
                                        </div>
                                    </a>
                                    <a
                                        href="#cloud"
                                        className="group block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 hover:border-purple-200 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-purple-500 group-hover:bg-purple-600"></div>
                                            <span className="font-medium text-slate-700 group-hover:text-purple-700">Cloud & Technology</span>
                                        </div>
                                    </a>
                                    <a
                                        href="#transformation"
                                        className="group block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:border-orange-200 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-orange-500 group-hover:bg-orange-600"></div>
                                            <span className="font-medium text-slate-700 group-hover:text-orange-700">Digital Transformation</span>
                                        </div>
                                    </a>
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="lg:col-span-3 space-y-16">
                            {/* Media Activation */}
                            <section id="media" className="scroll-mt-28">
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
                                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                        Media Activation
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900">Media Activation</h2>
                                    <p className="mt-2 text-slate-600">Drive engagement and conversions through strategic media placement</p>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Creative Strategy & Design</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">Audience‑first creative, landing page design, and ad experiences that convert.</p>
                                    </div>

                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-indigo-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Performance Marketing</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">Search, social, and display performance with rigorous experimentation.</p>
                                    </div>

                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-cyan-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-cyan-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Search Engine Optimization</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">Technical SEO + content velocity for sustainable organic growth.</p>
                                    </div>

                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-sky-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Programmatic Advertising</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">DV360, CTV, YouTube, and custom bidding strategies.</p>
                                    </div>

                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Conversion Rate Optimization</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">Hypothesis‑driven A/B testing to reduce CPA and improve ROAS.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Digital Analytics */}
                            <section id="analytics" className="scroll-mt-28">
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 mb-4">
                                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                        Digital Analytics
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900">Digital Analytics</h2>
                                    <p className="mt-2 text-slate-600">Transform data into actionable insights for your business</p>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-emerald-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Digital Analytics Implementation</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">GA4 + GTM event models aligned to business KPIs.</p>
                                    </div>

                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-teal-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-teal-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Privacy‑First Tracking</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">Consent mode, server‑side tagging, and durable measurement.</p>
                                    </div>

                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-green-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Interactive Dashboards</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">Looker Studio + BigQuery for unified reporting.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Cloud & Technology */}
                            <section id="cloud" className="scroll-mt-28">
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 mb-4">
                                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                                        Cloud & Technology
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900">Cloud & Technology</h2>
                                    <p className="mt-2 text-slate-600">Scalable technology solutions for modern businesses</p>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-purple-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Cloud Strategy & Architecture</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">Secure, scalable architectures for analytics and apps.</p>
                                    </div>

                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-violet-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-violet-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Cloud Migration & Transformation</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">Modernize data and workloads with zero‑downtime plans.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Digital Transformation */}
                            <section id="transformation" className="scroll-mt-28">
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 mb-4">
                                        <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                                        Digital Transformation
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900">Digital Transformation</h2>
                                    <p className="mt-2 text-slate-600">Complete digital evolution for your organization</p>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-orange-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Business Transformation Consulting</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">From vision to roadmap with measurable outcomes.</p>
                                    </div>

                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-amber-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">End‑to‑End Digital Solutions</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">Strategy, build, launch, and iterate—under one roof.</p>
                                    </div>

                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-yellow-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Agentic AI & Automation</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">AI agents, copilots, and workflow automation tailored to your stack.</p>
                                    </div>

                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-orange-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Business Solutions</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">Pre‑built accelerators for ecommerce, leadgen, and more.</p>
                                    </div>

                                    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-red-50 p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 mb-4">
                                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 mb-2">Partnerships</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">Certified partner ecosystem across Google & Meta.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section class="relative overflow-hidden" aria-label="Key performance indicators">
    <div class="absolute inset-0 bg-gradient-to-br from-[#EEF6FF] via-white to-[#FFF8F0]"></div>
    <div class="relative mx-auto max-w-7xl px-6 py-14">
      <div class="mx-auto max-w-3xl text-center">
        <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Why brands choose AnalyticsLiv</p>
        <h2 class="text-2xl md:text-3xl font-bold text-slate-900">Impact at Scale — Clear. Measurable. Repeatable.</h2>
      </div>

      <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <article class="kpi-card relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ring-soft">
          <div>
            <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M3 13h8v8H3v-8zm10-3h8v11h-8V10zM3 3h18v5H3V3z"/></svg>
            </div>
            <div class="text-3xl font-extrabold text-slate-900">
              <span class="kpi" data-target="50" data-prefix="$" data-suffix="M+">50</span>
            </div>
            <div class="mt-1 text-sm font-medium text-slate-700">Ad Spend Optimized</div>
            <p class="mt-1 text-sm text-slate-600">Driving efficient growth across 200+ campaigns.</p>
          </div>
        </article>

        <article class="kpi-card relative flex flex-col justify-between rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm ring-soft">
          <div>
            <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M3 12l5 5L21 4l-2-2-11 11-3-3-2 2z"/></svg>
            </div>
            <div class="text-3xl font-extrabold text-slate-900">
              <span class="kpi" data-target="30" data-suffix="%+">30</span>
            </div>
            <div class="mt-1 text-sm font-medium text-slate-700">Avg. Conversion Lift</div>
            <p class="mt-1 text-sm text-slate-600">Ecommerce, BFSI &amp; Travel funnels.</p>
          </div>
        </article>

        <article class="kpi-card relative flex flex-col justify-between rounded-3xl border border-indigo-200 bg-white p-6 shadow-sm ring-soft">
          <div>
            <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-700" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M12 1l9 4v6c0 5-3.8 9.7-9 11-5.2-1.3-9-6-9-11V5l9-4z"/></svg>
            </div>
            <div class="text-3xl font-extrabold text-slate-900">
              <span class="kpi" data-target="95" data-suffix="%+">{`>95%`}</span>
            </div>
            <div class="mt-1 text-sm font-medium text-slate-700">Data Accuracy</div>
            <p class="mt-1 text-sm text-slate-600">GA4 + server‑side GTM with validation.</p>
          </div>
        </article>

        <article class="kpi-card relative flex flex-col justify-between rounded-3xl border border-amber-200 bg-white p-6 shadow-sm ring-soft">
          <div>
            <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-700" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M12 12a5 5 0 110-10 5 5 0 010 10zm0 2c-4.4 0-8 2-8 4.5V21h16v-2.5c0-2.5-3.6-4.5-8-4.5z"/></svg>
            </div>
            <div class="text-3xl font-extrabold text-slate-900">
              <span class="kpi" data-target="200" data-suffix="+">200</span>
            </div>
            <div class="mt-1 text-sm font-medium text-slate-700">Brands Partnered</div>
            <p class="mt-1 text-sm text-slate-600">Across 15+ countries and multiple verticals.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
  
                {/* <section className="py-16 bg-gradient-to-r from-[#EEF6FF] to-[#F7F7FF]">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-8 md:grid-cols-4">
                            <div className="text-center">
                                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                                    <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                                </div>
                                <div className="text-3xl font-bold text-blue-600">500+</div>
                                <div className="text-sm text-slate-600">Projects Delivered</div>
                            </div>

                            <div className="text-center">
                                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <div className="h-6 w-6 rounded-full bg-emerald-500"></div>
                                </div>
                                <div className="text-3xl font-bold text-emerald-600">98%</div>
                                <div className="text-sm text-slate-600">Client Satisfaction</div>
                            </div>

                            <div className="text-center">
                                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
                                    <div className="h-6 w-6 rounded-full bg-purple-500"></div>
                                </div>
                                <div className="text-3xl font-bold text-purple-600">24/7</div>
                                <div className="text-sm text-slate-600">Support Available</div>
                            </div>

                            <div className="text-center">
                                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center">
                                    <div className="h-6 w-6 rounded-full bg-orange-500"></div>
                                </div>
                                <div className="text-3xl font-bold text-orange-600">5★</div>
                                <div className="text-sm text-slate-600">Average Rating</div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
                    <div className="relative mx-auto max-w-7xl px-6 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white mb-6">
                            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
                            Ready to Get Started?
                        </div>
                        <h3 className="text-4xl font-bold mb-4">Need help picking the right services?</h3>
                        <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-300 leading-relaxed">
                            Tell us your goals—we'll recommend an outcome‑focused plan.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-6">
                            <Link
                                href="/contact"
                                className="group rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                            >
                                <span className="flex items-center gap-2">
                                    Talk to Us
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                            <Link
                                href="mailto:support@analyticsliv.com"
                                className="group rounded-2xl border border-white/30 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                            >
                                <span className="flex items-center gap-2">
                                    Email Us
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                            </Link>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-blue-500/10 blur-xl"></div>
                        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-purple-500/10 blur-xl"></div>
                    </div>
                </section>
            </main>
        </div>
        </>
    );
};

export default ServicesPage;

import React, { useEffect, useState } from "react";

const NewNavbar = () => {
  useEffect(() => {
    const btn = document.getElementById("menuBtn");
    const menu = document.getElementById("mobileMenu");

    if (btn && menu) {
      const toggleMenu = () => menu.classList.toggle("hidden");
      btn.addEventListener("click", toggleMenu);

      // Cleanup listener on unmount
      return () => btn.removeEventListener("click", toggleMenu);
    }
  }, []);

  const [service, setService] = useState(false);
  return (
    <div
      className="sticky top-0 z-50"
      style={{
        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"',
      }}
    >
      <div class="w-full bg-slate-900 text-white text-sm">
        <div class="mx-auto max-w-7xl flex items-center justify-between px-6 py-2">
          <span>Your Partner for Google Marketing Platform Success</span>
          <a
            href="tel:+918320576622"
            class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 hover:bg-white/15"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-4 w-4"
            >
              <path d="M6.62 10.79a15.464 15.464 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
            </svg>
            Call Us Now
          </a>
        </div>
      </div>
      <div
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"',
        }}
      >
        <header class=" bg-white/95 backdrop-blur border-b border-slate-200">
          <div class="mx-auto max-w-7xl px-6">
            <div class="flex h-16 items-center justify-between">
              <a href="/" class="flex items-center gap-3">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png"
                  alt="AnalyticsLiv"
                  class="h-8 w-auto"
                />
              </a>
              <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
                <div
                  class="group relative"
                  onMouseEnter={() => setService(true)}
                  onMouseLeave={() => setService(false)}
                >
                  <button class="inline-flex items-center h-8 gap-1 hover:text-slate-900">
                    Services
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                    </svg>
                  </button>

                  {service && (
                    <div className="absolute left-[-200px] w-[980px] rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/90 backdrop-blur-xl p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/10"></div>

                      {/* Content */}
                      <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
                        <div className="group">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600/80 mb-3 pb-2 border-b border-slate-200/40 group-hover:text-slate-700 transition-colors duration-200">
                            Media Activation
                          </h4>
                          <ul className="mt-4 space-y-2 text-sm">
                            <li>
                              <a
                                href="/services/creative"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Creative Strategy &amp; Design
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/ppc"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Performance Marketing
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/seo"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Search Engine Optimization
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/programatic-advertising"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Programmatic Advertising
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/conversion-rate-optimization"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Conversion Rate Optimization
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="group">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600/80 mb-3 pb-2 border-b border-slate-200/40 group-hover:text-slate-700 transition-colors duration-200">
                            Digital Analytics
                          </h4>
                          <ul className="mt-4 space-y-2 text-sm">
                            {/* <li>
                              <a
                                href="/services/analytics"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Analytics &amp; GA4
                              </a>
                            </li> */}
                            <li className="relative group/sub">
                              <div className="flex items-center justify-between rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50 cursor-pointer">
                                <span>Digital Analytics Implementation</span>
                                <svg
                                  className="w-3 h-3 text-slate-500 group-hover/sub:text-slate-700 transition-all duration-200 group-hover/sub:rotate-90"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </div>

                              {/* Sub-category dropdown */}
                              <div className="absolute left-full top-0 ml-2 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/60 p-4 z-50 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0">
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50/30 to-indigo-50/20"></div>
                                <div className="relative space-y-1">
                                  <a
                                    href="/services/web-app-measurement"
                                    className="block text-xs text-slate-600 hover:text-slate-800 hover:bg-blue-50/60 py-2 px-3 rounded-lg transition-all duration-200 hover:translate-x-1"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                      <span>Audit &amp; GA4 Mixpanel</span>
                                    </div>
                                  </a>
                                  <a
                                    href="/services/google-tag-manager"
                                    className="block text-xs text-slate-600 hover:text-slate-800 hover:bg-blue-50/60 py-2 px-3 rounded-lg transition-all duration-200 hover:translate-x-1"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                      <span>GTM</span>
                                    </div>
                                  </a>
                                </div>

                                {/* Arrow pointing to parent */}
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                                  <div className="w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-white/95"></div>
                                </div>
                              </div>
                            </li>
                            <li className="relative group/sub">
                              <div className="flex items-center justify-between rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50 cursor-pointer">
                                <span>Privacy-First Tracking</span>
                                <svg
                                  className="w-3 h-3 text-slate-500 group-hover/sub:text-slate-700 transition-all duration-200 group-hover/sub:rotate-90"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </div>

                              {/* Sub-category dropdown */}
                              <div className="absolute left-full top-0 ml-2 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/60 p-4 z-50 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0">
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50/30 to-indigo-50/20"></div>
                                <div className="relative space-y-1">
                                  <a
                                    href="/services/server-side-tracking"
                                    className="block text-xs text-slate-600 hover:text-slate-800 hover:bg-blue-50/60 py-2 px-3 rounded-lg transition-all duration-200 hover:translate-x-1"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                      <span>Server-Side Tagging Solutions</span>
                                    </div>
                                  </a>
                                  <a
                                    href="/services/gdpr-compliance"
                                    className="block text-xs text-slate-600 hover:text-slate-800 hover:bg-blue-50/60 py-2 px-3 rounded-lg transition-all duration-200 hover:translate-x-1"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                      <span>
                                        Cookie Consent &amp; Preference
                                        Management
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="/services/data-reporting-analysis"
                                    className="block text-xs text-slate-600 hover:text-slate-800 hover:bg-blue-50/60 py-2 px-3 rounded-lg transition-all duration-200 hover:translate-x-1"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                      <span>Conversion API Implementation</span>
                                    </div>
                                  </a>
                                </div>

                                {/* Arrow pointing to parent */}
                                {/* <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                                  <div className="w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-white/95"></div>
                                </div> */}
                              </div>
                            </li>
                            <li>
                              <a
                                href="/services/gdpr-compliance"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Interactive Dashboards
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="group">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600/80 mb-3 pb-2 border-b border-slate-200/40 group-hover:text-slate-700 transition-colors duration-200">
                            Cloud &amp; Technology
                          </h4>
                          <ul className="mt-4 space-y-2 text-sm">
                            <li>
                              <a
                                href="/services/data-science"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Cloud Strategy &amp; Architecture
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/custom-pipeline"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Cloud Migration &amp; Transformation
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="group">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600/80 mb-3 pb-2 border-b border-slate-200/40 group-hover:text-slate-700 transition-colors duration-200">
                            Digital Transformation
                          </h4>
                          <ul className="mt-4 space-y-2 text-sm">
                            <li>
                              <a
                                href="/services/business-transformation"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Business Transformation Consulting
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/end-to-end-digital-solutions"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                End-to-End Digital Solutions
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/agentic-ai-automation"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Agentic AI &amp; Automation
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/business-solutions"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Business Solutions
                              </a>
                            </li>
                            <li>
                              <a
                                href="/partnerships"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Partnerships
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent rounded-full"></div>
                    </div>
                  )}

                  {/* {service && (
                    <div class=" absolute left-0 w-[980px]  rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl transition ">
                      <div class="grid grid-cols-2 gap-6 lg:grid-cols-4">
                        <div>
                          <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Media Activation
                          </h4>
                          <ul class="mt-2 space-y-1.5 text-sm">
                            <li>
                              <a
                                href="/services/creative"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Creative Strategy &amp; Design
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/ppc"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Performance Marketing
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/seo"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Search Engine Optimization
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/programmatic"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Programmatic Advertising
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/cro"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Conversion Rate Optimization
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Digital Analytics
                          </h4>
                          <ul class="mt-2 space-y-1.5 text-sm">
                            <li>
                              <a
                                href="/services/analytics"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Analytics &amp; GA4
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/privacy-first-tracking"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Privacy-First Tracking
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/interactive-dashboards"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Interactive Dashboards
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Cloud &amp; Technology
                          </h4>
                          <ul class="mt-2 space-y-1.5 text-sm">
                            <li>
                              <a
                                href="/services/cloud-strategy-architecture"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Cloud Strategy &amp; Architecture
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/cloud-migration-transformation"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Cloud Migration &amp; Transformation
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Digital Transformation
                          </h4>
                          <ul class="mt-2 space-y-1.5 text-sm">
                            <li>
                              <a
                                href="/services/business-transformation"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Business Transformation Consulting
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/end-to-end-digital-solutions"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                End-to-End Digital Solutions
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/agentic-ai-automation"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Agentic AI &amp; Automation
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/business-solutions"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Business Solutions
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/partnerships"
                                class="block rounded-lg px-2 py-1 hover:bg-slate-50"
                              >
                                Partnerships
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )} */}
                </div>

                <div class="group relative">
                  <button class="inline-flex items-center gap-1 hover:text-slate-900">
                    Resources
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                    </svg>
                  </button>
                  <div class="invisible absolute left-0 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <a
                      href="/blogs"
                      class="block rounded-xl px-3 py-2 hover:bg-slate-50"
                    >
                      Blog
                    </a>
                    <a
                      href="/case-studies"
                      class="block rounded-xl px-3 py-2 hover:bg-slate-50"
                    >
                      Case Studies
                    </a>
                  </div>
                </div>

                <a href="/about-us" class="hover:text-slate-900">
                  Who We Are
                </a>
                <a href="/contact" class="hover:text-slate-900">
                  Contact Us
                </a>
                <a href="/engagement" class="hover:text-slate-900">
                  Engagement
                </a>
                <a href="/careers" class="hover:text-slate-900">
                  Careers
                </a>
              </nav>

              <div class="hidden md:flex items-center gap-3">
                <a
                  href="/contact"
                  class="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white"
                >
                  Book a Call
                </a>
              </div>

              <button
                id="menuBtn"
                class="md:hidden rounded-xl border border-slate-300 p-2"
                aria-label="Open menu"
              >
                <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5">
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="mobileMenu"
            class="md:hidden hidden border-t border-slate-200 bg-white"
          >
            <div class="mx-auto max-w-7xl px-6 py-3">
              <details class="group">
                <summary class="cursor-pointer rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50">
                  Services
                </summary>
                <div class="mt-2 grid grid-cols-1 gap-4">
                  <a
                    href="/services/creative"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Creative Strategy &amp; Design
                  </a>
                  <a
                    href="/services/ppc"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Performance Marketing
                  </a>
                  <a
                    href="/services/seo"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Search Engine Optimization
                  </a>
                  <a
                    href="/services//services/programatic-advertising"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Programmatic Advertising
                  </a>
                  <a
                    href="/services/conversion-rate-optimization"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Conversion Rate Optimization
                  </a>
                  <a
                    href="/services/analytics"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Analytics &amp; GA4
                  </a>
                  <a
                    href="/services/privacy-first-tracking"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Privacy‑First Tracking
                  </a>
                  <a
                    href="/services/interactive-dashboards"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Interactive Dashboards
                  </a>
                  <a
                    href="/services/cloud-strategy-architecture"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Cloud Strategy &amp; Architecture
                  </a>
                  <a
                    href="/services/cloud-migration-transformation"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Cloud Migration &amp; Transformation
                  </a>
                  <a
                    href="/services/business-transformation"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Business Transformation Consulting
                  </a>
                  <a
                    href="/services/end-to-end-digital-solutions"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    End‑to‑End Digital Solutions
                  </a>
                  <a
                    href="/services/agentic-ai-automation"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Agentic AI &amp; Automation
                  </a>
                  <a
                    href="/services/business-solutions"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Business Solutions
                  </a>
                  <a
                    href="/partnerships"
                    class="block rounded-lg px-3 py-1.5 hover:bg-slate-50"
                  >
                    Partnerships
                  </a>
                </div>
              </details>
              <a
                href="/about-us"
                class="mt-2 block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                Who We Are
              </a>
              <a
                href="/contact"
                class="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                Contact Us
              </a>
              <a
                href="/engagement"
                class="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                Engagement
              </a>
              <a
                href="/careers"
                class="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                Careers
              </a>
              <a
                href="tel:+918320576622"
                class="mt-2 block rounded-lg bg-slate-900 px-3 py-2 text-center text-white"
              >
                Talk to Sales
              </a>
            </div>
          </div>

          {/* <script>
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mobileMenu');
    btn && btn.addEventListener('click', ()=> menu.classList.toggle('hidden'));
    </script> */}
        </header>
      </div>
    </div>
  );
};

export default NewNavbar;

                  {/* <div className="absolute left-[-200px] w-[980px] rounded-3xl border border-slate-200 bg-gradient-to-br from-white/100 to-slate-50/100 backdrop-blur-xl p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl">
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/80 via-blue-50/60 to-indigo-50/50"></div>
</div> */}

                  {/* {service && (
                    <div className="absolute left-[-200px] w-[980px] rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/90 backdrop-blur-xl p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/10"></div>

                      <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
                        <div className="group">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600/80 mb-3 pb-2 border-b border-slate-200/40 group-hover:text-slate-700 transition-colors duration-200">
                            Media Activation
                          </h4>
                          <ul className="mt-4 space-y-2 text-sm">
                            <li>
                              <a
                                href="/services/creative"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Creative Strategy &amp; Design
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/ppc"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Performance Marketing
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/seo"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Search Engine Optimization
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/programmatic"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Programmatic Advertising
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/cro"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Conversion Rate Optimization
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="group">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600/80 mb-3 pb-2 border-b border-slate-200/40 group-hover:text-slate-700 transition-colors duration-200">
                            Digital Analytics
                          </h4>
                          <ul className="mt-4 space-y-2 text-sm">
                            <li>
                              <a
                                href="/services/analytics"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Analytics &amp; GA4
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/privacy-first-tracking"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Privacy-First Tracking
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/interactive-dashboards"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Interactive Dashboards
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="group">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600/80 mb-3 pb-2 border-b border-slate-200/40 group-hover:text-slate-700 transition-colors duration-200">
                            Cloud &amp; Technology
                          </h4>
                          <ul className="mt-4 space-y-2 text-sm">
                            <li>
                              <a
                                href="/services/cloud-strategy-architecture"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Cloud Strategy &amp; Architecture
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/cloud-migration-transformation"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Cloud Migration &amp; Transformation
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="group">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600/80 mb-3 pb-2 border-b border-slate-200/40 group-hover:text-slate-700 transition-colors duration-200">
                            Digital Transformation
                          </h4>
                          <ul className="mt-4 space-y-2 text-sm">
                            <li>
                              <a
                                href="/services/business-transformation"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Business Transformation Consulting
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/end-to-end-digital-solutions"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                End-to-End Digital Solutions
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/agentic-ai-automation"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Agentic AI &amp; Automation
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/business-solutions"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Business Solutions
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/partnerships"
                                className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/40 hover:text-slate-800 transition-all duration-200 hover:translate-x-1 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                              >
                                Partnerships
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent rounded-full"></div>
                    </div>
                  )} */}
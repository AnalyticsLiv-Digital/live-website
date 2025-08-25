import Head from "next/head";
import React, { useState } from "react";
import NewNavbar from "../../components/NewNavbar";
import Footer from "../../components/Footer";

const Creative = () => {
  const [activeTab, setActiveTab] = useState("brand");

  return (
    <>
      <Head>
        <style>{`
          .shine { position: relative; overflow: hidden; }
          .shine:after {
            content: "";
            position: absolute; inset: -100%;
            background: conic-gradient(from 180deg at 50% 50%, rgba(244,63,94,.12), rgba(99,102,241,.12), rgba(16,185,129,.12), rgba(14,165,233,.12), rgba(244,63,94,.12));
            animation: spin 20s linear infinite;
            pointer-events: none;
          }
          @keyframes spin { to { transform: rotate(1turn); } }
          .chip { display:inline-flex; align-items:center; gap:.45rem; padding:.35rem .6rem; border-radius:999px; border:1px solid rgba(15,23,42,.1); font-size:.75rem; background:#fff; }
          .glow { box-shadow: 0 12px 40px rgba(2,6,23,.08); }
          .grad-card { background-image: linear-gradient(120deg, rgba(244,63,94,.08), rgba(99,102,241,.08)); }
          .stat { background: linear-gradient(180deg,#fff,#f8fafc); }
          .carousel-track { display:flex; gap:2rem; animation: slide 28s linear infinite; }
          @keyframes slide { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        `}</style>
      </Head>

      <body
        class="bg-white text-slate-800"
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"',
        }}
      >
        <NewNavbar />
        <section class="relative overflow-hidden border-b border-slate-200">
          <div class="absolute inset-0 bg-gradient-to-br from-[#FFF7ED] via-white to-[#F0F9FF]"></div>
          <div class="relative mx-auto max-w-7xl px-6 py-20 text-center">
            <p class="mb-3 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-pink-700">
              <span class="h-1.5 w-1.5 rounded-full bg-pink-500"></span>
              Creative Strategy & Design
            </p>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900">
              Audience‑First Creative That{" "}
              <span class="bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Wins Attention & Converts
              </span>
            </h1>
            <p class="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
              From concepts to conversion, we design ad experiences, landing
              pages, and creative systems that stand out and deliver measurable
              results.
            </p>
            <div class="mt-8 flex justify-center gap-4">
              <a
                href="#contact"
                class="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow hover:opacity-90"
              >
                Get a Creative Audit
              </a>
              <a
                href="#showcase"
                class="rounded-2xl border border-slate-300 px-6 py-3"
              >
                See Creative Blueprints
              </a>
            </div>
          </div>
        </section>
        {/* <section class="relative overflow-hidden border-b border-slate-200">
  <div class="absolute inset-0 bg-gradient-to-br from-[#FFF6F0] via-white to-[#F0F9FF]"></div>
  <div class="relative mx-auto max-w-7xl px-6 py-18 md:py-20 text-center">
    <p class="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-rose-700">
      <span class="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
      Creative Strategy & Design
    </p>
    <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900">
      Audience‑First Creative That Wins Attention & Converts
    </h1>
    <p class="mt-5 max-w-3xl mx-auto text-lg text-slate-600">Brand clarity, scroll‑stopping ads, and frictionless experiences—engineered for performance and built to scale.</p>

    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 stat">
        <div class="text-2xl font-extrabold text-slate-900">+25–60%</div>
        <div class="text-xs text-slate-600 mt-1">CTR lift after creative refresh*</div>
      </div>
      <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 stat">
        <div class="text-2xl font-extrabold text-slate-900">‑15–35%</div>
        <div class="text-xs text-slate-600 mt-1">CPA reduction with DCO*</div>
      </div>
      <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 stat">
        <div class="text-2xl font-extrabold text-slate-900">90‑day</div>
        <div class="text-xs text-slate-600 mt-1">Design system rollout</div>
      </div>
      <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 stat">
        <div class="text-2xl font-extrabold text-slate-900">↓ Ad Fatigue</div>
        <div class="text-xs text-slate-600 mt-1">Rotation & concept testing cadence</div>
      </div>
    </div>
    <p class="mt-2 text-xs text-slate-500">*Replace with your verified case study metrics.</p>

    <div class="mt-6 flex justify-center gap-4">
      <a href="#contact" class="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow hover:opacity-90">Get a Free Creative Audit</a>
      <a href="#showcase" class="rounded-2xl border border-slate-300 px-6 py-3">See Blueprints</a>
    </div>
  </div>
</section> */}

        <section id="showcase" className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Showcase
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Creative Blueprints We Deliver — Fast
              </h2>
              <p className="mt-2 text-slate-600 max-w-3xl mx-auto">
                Three reference stacks we implement most often. Tailored,
                documented, production-ready.
              </p>
            </div>

            {/* Tabs */}
            <div className="mx-auto mb-6 flex w-full max-w-2xl items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
              {[
                { id: "brand", label: "Brand & Story" },
                { id: "performance", label: "Performance Creatives" },
                { id: "experience", label: "Experience & UX" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`w-1/3 rounded-xl px-3 py-2 text-sm font-semibold ${
                    activeTab === tab.id
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="shine rounded-3xl border border-slate-200 bg-white p-6 glow">
                {activeTab === "brand" && (
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Brand & Storytelling System
                    </h3>
                    <div className="mt-4 grid gap-3 text-sm text-slate-700">
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>Positioning</strong>: value prop, tone-of-voice,
                        messaging ladders
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>Identity</strong>: logo/wordmark, color, type,
                        layout rules
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>Design Tokens</strong>: components, grid,
                        spacing, accessibility
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>Asset Hub</strong>: templates, motion presets,
                        brand kit
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>Govern</strong>: review workflow, usage
                        guidelines, QA
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "performance" && (
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Performance Creative Engine
                    </h3>
                    <div className="mt-4 grid gap-3 text-sm text-slate-700">
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>Concepts</strong>: hooks, angles, social proofs,
                        UGC frameworks
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>Production</strong>: static, carousels,
                        video/motion, HTML5
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>DCO</strong>: feeds, variants, geo/lang
                        personalization
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>Testing</strong>: holdouts, multi-arm bandit,
                        fatigue rotation
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>Measure</strong>: CTR/CPA/ROAS dashboards,
                        creative learnings
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "experience" && (
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Experience & Interaction Design
                    </h3>
                    <div className="mt-4 grid gap-3 text-sm text-slate-700">
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>UX Research</strong>: jobs-to-be-done,
                        heuristics, user flows
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>UI Systems</strong>: components, states,
                        micro-interactions
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>LPs & Funnels</strong>: hero/message match,
                        offer frameworks
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>Performance</strong>: CWV-aware creative, speed
                        budgets
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 stat">
                        <strong>QA & A11y</strong>: review gates, WCAG,
                        cross-device checks
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div class="rounded-3xl border border-slate-200 bg-white p-6 glow">
                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
                    <div class="text-2xl font-extrabold text-slate-900">
                      ↑ CTR
                    </div>
                    <div class="text-xs text-slate-700">
                      Hooks • creative angles • thumb‑stoppers
                    </div>
                  </div>
                  <div class="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-center">
                    <div class="text-2xl font-extrabold text-slate-900">
                      ↓ CPA
                    </div>
                    <div class="text-xs text-slate-700">
                      Message‑match LPs • rapid tests
                    </div>
                  </div>
                  <div class="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center">
                    <div class="text-2xl font-extrabold text-slate-900">
                      ↑ Engagement
                    </div>
                    <div class="text-xs text-slate-700">
                      Motion • interactivity • story arcs
                    </div>
                  </div>
                  <div class="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-center">
                    <div class="text-2xl font-extrabold text-slate-900">
                      ↓ Time‑to‑Ship
                    </div>
                    <div class="text-xs text-slate-700">
                      Design tokens • templates
                    </div>
                  </div>
                </div>
                <div class="mt-6 flex flex-wrap items-center justify-center gap-2">
                  <span class="chip">Design Systems</span>
                  <span class="chip">Brand Playbooks</span>
                  <span class="chip">UGC & Motion</span>
                  <span class="chip">DCO & Personalization</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" class="py-16 bg-slate-50">
          <div class="mx-auto max-w-7xl px-6 text-center">
            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Capabilities
            </p>
            <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
              Creative Labs — What We Do
            </h2>
            <p class="mt-2 text-slate-600 max-w-3xl mx-auto">
              Six practice areas. Click into one and we’ll ship a plan,
              concepts, and a pilot—fast.
            </p>
          </div>

          <div class="mx-auto mt-10 max-w-7xl px-6 grid gap-6 md:grid-cols-3">
            <div class="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-6 hover:shadow-md transition">
              <div class="flex items-center gap-3">
                <span class="text-lg">🎯</span>
                <h3 class="text-lg font-semibold text-slate-900">
                  Creative Strategy
                </h3>
              </div>
              <p class="mt-2 text-sm text-slate-700">
                Positioning, personas, messaging, go‑to‑market angles.
              </p>
              <div class="mt-3 flex flex-wrap gap-2 text-xs">
                <span class="chip">Briefs</span>
                <span class="chip">Roadmaps</span>
                <span class="chip">Insight Sprints</span>
              </div>
            </div>
            <div class="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 hover:shadow-md transition">
              <div class="flex items-center gap-3">
                <span class="text-lg">🧩</span>
                <h3 class="text-lg font-semibold text-slate-900">
                  Brand & Identity
                </h3>
              </div>
              <p class="mt-2 text-sm text-slate-700">
                Logos, typography, color, tokens, templates, guidelines.
              </p>
              <div class="mt-3 flex flex-wrap gap-2 text-xs">
                <span class="chip">Design Tokens</span>
                <span class="chip">Brand Hub</span>
                <span class="chip">Motion Presets</span>
              </div>
            </div>
            <div class="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 hover:shadow-md transition">
              <div class="flex items-center gap-3">
                <span class="text-lg">📣</span>
                <h3 class="text-lg font-semibold text-slate-900">
                  Performance Creatives
                </h3>
              </div>
              <p class="mt-2 text-sm text-slate-700">
                Meta/Google/YouTube ads, carousels, HTML5, UGC.
              </p>
              <div class="mt-3 flex flex-wrap gap-2 text-xs">
                <span class="chip">Concepts</span>
                <span class="chip">Production</span>
                <span class="chip">Playbook</span>
              </div>
            </div>
            <div class="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 hover:shadow-md transition">
              <div class="flex items-center gap-3">
                <span class="text-lg">🧪</span>
                <h3 class="text-lg font-semibold text-slate-900">
                  Landing Pages & CRO
                </h3>
              </div>
              <p class="mt-2 text-sm text-slate-700">
                Message‑match LPs, funnels, testing & conversion design.
              </p>
              <div class="mt-3 flex flex-wrap gap-2 text-xs">
                <span class="chip">LP Frameworks</span>
                <span class="chip">A/B & MAB</span>
                <span class="chip">Story Blocks</span>
              </div>
            </div>
            <div class="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6 hover:shadow-md transition">
              <div class="flex items-center gap-3">
                <span class="text-lg">🎬</span>
                <h3 class="text-lg font-semibold text-slate-900">
                  Motion & Video
                </h3>
              </div>
              <p class="mt-2 text-sm text-slate-700">
                Shorts, edits, motion design, bumpers, storyboards.
              </p>
              <div class="mt-3 flex flex-wrap gap-2 text-xs">
                <span class="chip">Cuts</span>
                <span class="chip">Captions</span>
                <span class="chip">Variations</span>
              </div>
            </div>
            <div class="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-6 hover:shadow-md transition">
              <div class="flex items-center gap-3">
                <span class="text-lg">✨</span>
                <h3 class="text-lg font-semibold text-slate-900">
                  Personalization & DCO
                </h3>
              </div>
              <p class="mt-2 text-sm text-slate-700">
                Feeds, geo/lang variants, dynamic offers, automation.
              </p>
              <div class="mt-3 flex flex-wrap gap-2 text-xs">
                <span class="chip">DCO</span>
                <span class="chip">Catalog</span>
                <span class="chip">Rules</span>
              </div>
            </div>
          </div>
        </section>

        <section id="process" class="py-16">
          <div class="max-w-7xl mx-auto px-6 text-center">
            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              How we deliver
            </p>
            <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
              From Insight to Launch — Clear, Fast, Repeatable
            </h2>
            <p class="mt-2 text-slate-600 max-w-3xl mx-auto">
              A storyboard‑style timeline. Every step ships artifacts you can
              use.
            </p>
          </div>

          <div class="max-w-7xl mx-auto px-6 mt-10">
            <ol class="relative grid gap-6 md:grid-cols-5">
              <div class="pointer-events-none absolute left-0 right-0 top-10 hidden md:block">
                <div class="mx-10 h-1 rounded-full bg-gradient-to-r from-rose-400 via-indigo-400 to-emerald-400"></div>
              </div>

              <li class="relative rounded-2xl border border-slate-200 bg-white p-6 glow text-center">
                <div class="mx-auto mb-2 h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                  🔎
                </div>
                <h3 class="font-semibold text-slate-900">Research</h3>
                <p class="mt-1 text-sm text-slate-700">
                  Audience, competitive, creative audit.
                </p>
                <div class="mt-2 text-xs text-slate-600">
                  Artifacts: Insight deck
                </div>
              </li>
              <li class="relative rounded-2xl border border-slate-200 bg-white p-6 glow text-center">
                <div class="mx-auto mb-2 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  🧭
                </div>
                <h3 class="font-semibold text-slate-900">Strategy</h3>
                <p class="mt-1 text-sm text-slate-700">
                  Positioning, angles, test plan.
                </p>
                <div class="mt-2 text-xs text-slate-600">
                  Artifacts: Creative brief
                </div>
              </li>
              <li class="relative rounded-2xl border border-slate-200 bg-white p-6 glow text-center">
                <div class="mx-auto mb-2 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  🧩
                </div>
                <h3 class="font-semibold text-slate-900">Design System</h3>
                <p class="mt-1 text-sm text-slate-700">
                  Tokens, templates, brand hub.
                </p>
                <div class="mt-2 text-xs text-slate-600">
                  Artifacts: Figma library
                </div>
              </li>
              <li class="relative rounded-2xl border border-slate-200 bg-white p-6 glow text-center">
                <div class="mx-auto mb-2 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center">
                  🎬
                </div>
                <h3 class="font-semibold text-slate-900">Production & Test</h3>
                <p class="mt-1 text-sm text-slate-700">
                  Variants, DCO, LPs, rapid tests.
                </p>
                <div class="mt-2 text-xs text-slate-600">
                  Artifacts: Asset set
                </div>
              </li>
              <li class="relative rounded-2xl border border-slate-200 bg-white p-6 glow text-center">
                <div class="mx-auto mb-2 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                  📈
                </div>
                <h3 class="font-semibold text-slate-900">Scale & Refresh</h3>
                <p class="mt-1 text-sm text-slate-700">
                  Rotation cadence, fatigue watch.
                </p>
                <div class="mt-2 text-xs text-slate-600">
                  Artifacts: Learnings repo
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section class="bg-slate-50 py-16">
          <div class="max-w-7xl mx-auto px-6">
            <div class="text-center">
              <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
                Outcomes Our Creative Drives
              </h2>
            </div>
            <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div class="rounded-2xl border border-slate-200 bg-white p-5 text-center grad-card">
                <div class="text-2xl font-extrabold text-slate-900">↑ CTR</div>
                <div class="text-xs text-slate-700 mt-1">
                  Better hooks & creative angles
                </div>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-5 text-center grad-card">
                <div class="text-2xl font-extrabold text-slate-900">↓ CPA</div>
                <div class="text-xs text-slate-700 mt-1">
                  Message match + LPs that convert
                </div>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-5 text-center grad-card">
                <div class="text-2xl font-extrabold text-slate-900">↑ ROAS</div>
                <div class="text-xs text-slate-700 mt-1">
                  DCO & audience‑specific variants
                </div>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-5 text-center grad-card">
                <div class="text-2xl font-extrabold text-slate-900">
                  ↑ Brand Recall
                </div>
                <div class="text-xs text-slate-700 mt-1">
                  Consistent, memorable identity
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" class="py-14">
          <div class="mx-auto max-w-7xl px-6">
            <p class="text-center mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Trusted by
            </p>
            <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4">
              <div class="carousel-track">
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Shoebacca%20logo.png"
                  alt="Shoebacca"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />

                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Washington_examinor_logo.png"
                  alt="Washington Examiner"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />

                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Anantara_logo_New.png"
                  alt="Anantara"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />

                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Auxi_logo.coloured.png"
                  alt="Auxi"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />

                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Algovation_logo.png"
                  alt="Algovation"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />

                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/shiprocket_logo.png"
                  alt="Shiprocket"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/we_sort_it_logo.png"
                  alt="we sort it"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mex_insurance_logo.png"
                  alt="Mex insurancw"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/IRIS_LOGO.png"
                  alt="Iris logo"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/league_logo_svg%201.png"
                  alt="League logo"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/issta_Logo.png"
                  alt="issta_logo"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />

                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Shoebacca%20logo.png"
                  alt="Shoebacca"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />

                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Washington_examinor_logo.png"
                  alt="Washington Examiner"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />

                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Anantara_logo_New.png"
                  alt="Anantara"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />

                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Auxi_logo.coloured.png"
                  alt="Auxi"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />

                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Algovation_logo.png"
                  alt="Algovation"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />

                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/shiprocket_logo.png"
                  alt="Shiprocket"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />

                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/we_sort_it_logo.png"
                  alt="we sort it"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mex_insurance_logo.png"
                  alt="Mex insurancw"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/IRIS_LOGO.png"
                  alt="Iris logo"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/league_logo_svg%201.png"
                  alt="League logo"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
                <img
                  src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/issta_Logo.png"
                  alt="issta_logo"
                  class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="bg-slate-900 py-16 text-white">
          <div class="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 class="text-2xl font-bold">Get a first Creative Audit</h3>
              <p class="mt-2 text-slate-300">
                We’ll review your brand, ads, and key pages—then deliver a
                prioritized roadmap to lift CTR and conversion.
              </p>
              <ul class="mt-4 space-y-2 text-slate-300 text-sm">
                <li class="flex items-start gap-3">
                  <span class="inline-block h-2.5 w-2.5 rounded-full bg-white mt-2"></span>
                  <span>Brand & story assessment</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="inline-block h-2.5 w-2.5 rounded-full bg-white mt-2"></span>
                  <span>Creative concept & format gaps</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="inline-block h-2.5 w-2.5 rounded-full bg-white mt-2"></span>
                  <span>LP message‑match & UX quick wins</span>
                </li>
              </ul>
            </div>
            <div class="rounded-3xl border border-white/20 bg-white/5 p-6">
              <form class="grid gap-3 md:grid-cols-2">
                <label class="text-sm">
                  Full name
                  <input
                    class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    placeholder="Your name"
                  />
                </label>
                <label class="text-sm">
                  Work email
                  <input
                    type="email"
                    class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    placeholder="name@company.com"
                  />
                </label>
                <label class="text-sm md:col-span-2">
                  What should we audit?
                  <textarea
                    rows="4"
                    class="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"
                    placeholder="Share links to brand kit, ads, and pages"
                  ></textarea>
                </label>
                <div class="md:col-span-2">
                  <button
                    class="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow hover:opacity-90"
                    type="button"
                  >
                    Request Audit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="mx-auto max-w-7xl px-6 mt-6 text-center text-sm text-white/70">
            © 2025 Analytics Liv Digital LLP
          </div>
        </section>

        <Footer />
      </body>
    </>
  );
};

export default Creative;

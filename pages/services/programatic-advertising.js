'use client'
import React, { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import MetaSchemaOg from '../../components/MetaSchemaOg';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    AreaChart,
    Area,
    ComposedChart,
} from "recharts";
import Faq from '../../components/Faq';

const ProgramaticAd = () => {

    const [activeTab, setActiveTab] = useState("tab-ctv");
    const [spend, setSpend] = useState(2000000);
    const [monthCount, setMonthCount] = useState(6);
    const [playing, setPlaying] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        spend: "",
        message: "",
        pageSource: "programmatic advertising",
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
                setFormData({ fullName: "", email: "", company: "", spend: "", message: "", pageSource: "programmatic advertising", });
            } else {
                setResponseMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setResponseMessage("Server error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const chartInstances = useRef({});
    const cpaBase = [1000, 960, 920, 880, 850, 820, 800, 780, 760, 740, 730, 720];
    const roasBase = [1.2, 1.3, 1.5, 1.7, 1.8, 2.0, 2.2, 2.3, 2.5, 2.7, 2.8, 3.0];
    const ctrBase = [0.8, 0.9, 0.95, 1.0, 1.02, 1.05, 1.07, 1.1, 1.12, 1.15, 1.14, 1.16];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const genData = (len) =>
        months.slice(0, len).map((month, i) => ({
            month,
            cpa: cpaBase[i],
            roas: roasBase[i],
            ctr: ctrBase[i],
        }));
    const [chartData, setChartData] = useState(genData(monthCount));
    // Update chart data when monthCount changes
    useEffect(() => {
        setChartData(genData(monthCount));
    }, [monthCount]);


    // --- Update Charts on State Change ---
    useEffect(() => {
        const cpaData = [1000, 960, 920, 880, 850, 820, 800, 780, 760, 740, 730, 720].slice(0, monthCount);
        const roasData = [1.2, 1.3, 1.5, 1.7, 1.8, 2.0, 2.2, 2.3, 2.5, 2.7, 2.8, 3.0].slice(0, monthCount);
        const ctrData = [0.8, 0.9, 0.95, 1.0, 1.02, 1.05, 1.07, 1.1, 1.12, 1.15, 1.14, 1.16].slice(0, monthCount);

        if (chartInstances.current.cpa) {
            chartInstances.current.cpa.data.labels = genData(monthCount);
            chartInstances.current.cpa.data.datasets[0].data = cpaData;
            chartInstances.current.cpa.update();
        }
        if (chartInstances.current.roas) {
            chartInstances.current.roas.data.labels = genData(monthCount);
            chartInstances.current.roas.data.datasets[0].data = roasData;
            chartInstances.current.roas.update();
        }
        if (chartInstances.current.ctr) {
            chartInstances.current.ctr.data.labels = genData(monthCount);
            chartInstances.current.ctr.data.datasets[0].data = ctrData;
            chartInstances.current.ctr.update();
        }
    }, [monthCount]);

    // --- Animation Loop ---
    useEffect(() => {
        let timer;
        if (playing) {
            timer = setInterval(() => {
                setMonthCount((prev) => (prev >= 12 ? 3 : prev + 1));
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [playing]);

    // --- Price Calculation ---
    const fmt = (n) => n.toLocaleString("en-IN");
    const starterFee = Math.max(50000, Math.round(spend * 0.05));
    const growthFee = Math.max(120000, Math.round(spend * 0.09));
    const entFee = Math.max(250000, Math.round(spend * 0.12));

    const tabs = [
        {
            id: "tab-ctv",
            title: "CTV, YouTube & Online Video",
            description:
                "Reach new customers with sequenced creatives, brand lift and action-led optimization.",
            items: [
                "YouTube In-Stream, Shorts",
                "CTV & OTT deals",
                "Brand lift studies",
                "Frequency & reach pacing",
            ],
        },
        {
            id: "tab-display",
            title: "Display, Discovery & Native",
            description:
                "Clean placements, zero-waste targeting and outcomes that ladder into ROAS.",
            items: [
                "PMPs & programmatic guaranteed",
                "Contextual & affinity",
                "Dynamic creatives",
                "Viewability & IVT controls",
            ],
        },
        {
            id: "tab-audio",
            title: "Digital Audio & Podcast",
            description:
                "High-attention formats with measured lift and incremental reach.",
            items: [
                "Spotify & partner networks",
                "Host-read & dynamic",
                "Brand safety tiers",
                "Geo & device controls",
            ],
        },
        {
            id: "tab-data",
            title: "Data, Audiences & Custom Bidding",
            description:
                "Value-based bidding tuned to your profit. First-party data onboarding & modeling.",
            items: [
                "GA4 & Floodlight alignment",
                "Modeled conversions",
                "First-party audience graphs",
                "Lookalikes & exclusions",
            ],
        },
    ];

    const content = [
        { question: 'How quickly do we see impact?', answer: 'Pilot waves typically show lift in 4–6 weeks with reliable baselines.' },
        { question: 'Do you support MMM & incrementality testing?', answer: 'Yes - geo splits, PSA tests, and MMM hooks for finance teams.' },
        { question: 'Can you work with our creative team?', answer: 'We supply briefs, variants, and sequencing frameworks or handle end‑to‑end.' },
        { question: 'What does onboarding involve?', answer: 'Audit → tracking alignment → SPO → launch plan with measurable goals.' }
    ]

    return (
        <>
            <MetaSchemaOg
                url="https://analyticsliv.com/services/programatic-advertising"
                title="DV360 & Programmatic Advertising | AnalyticsLiv"
                description="Programmatic on DV360 across CTV, YouTube, Display, Audio & Native. Custom bidding, SPO, and privacy-safe measurement. See demo charts and case studies."
                twitterTitle="DV360 & Programmatic Advertising | AnalyticsLiv"
                twitterDescription="Programmatic on DV360 across CTV, YouTube, Display, Audio & Native. Custom bidding, SPO, and privacy-safe measurement. See demo charts and case studies."
                faqData={content}
            />
            <main className="min-h-screen bg-white text-slate-800"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"' }}>

                <section className="relative overflow-hidden border-b border-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EEF6FF] via-white to-[#F7F7FF]"></div>
                    <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
                        <div className="grid items-center gap-7 md:gap-12 md:grid-cols-2">
                            <div>
                                <p class="inline-flex items-center gap-[0.4rem] border border-blue-200 text-blue-700 bg-white px-2.5 py-1 rounded-full text-xs font-semibold">
                                    <span class="inline-block w-[6px] h-[6px] rounded-full bg-indigo-500"></span>
                                    Google Marketing Platform Certified Partner
                                </p>
                                <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl text-slate-900">
                                    DV360 & Programmatic Advertising <span className="bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-transparent">That Wins Markets</span>
                                </h1>
                                <p className="mt-5 max-w-2xl text-lg text-slate-600">We plan, buy and optimize programmatic across <strong>CTV</strong>, <strong>YouTube</strong>, <strong>Display</strong>, <strong>Audio</strong> & <strong>Native</strong>—with <strong>custom bidding</strong>, <strong>SPO</strong>, and <strong>privacy‑safe measurement</strong>.</p>
                                <div className="mt-7 flex flex-wrap items-center gap-3">
                                    <a href="#contact" className="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:opacity-90">Get a DV360 Audit</a>
                                    <a href="#pricing" className="rounded-2xl border border-slate-300 px-6 py-3">View Pricing</a>
                                </div>
                                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                                    <li className="flex items-start gap-3 card p-4"><span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-emerald-500"></span><p className="text-slate-700">DV360 + Floodlight aligned with GA4 & consent‑mode</p></li>
                                    <li className="flex items-start gap-3 card p-4"><span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-emerald-500"></span><p className="text-slate-700">Custom bidding, curated PMPs, creative sequencing</p></li>
                                </ul>
                            </div>
                            <div className="">
                                <div className="relative mx-auto w-full max-w-xl card p-6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="relative overflow-hidden card p-5"><div className="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-40"></div><div className="text-3xl font-extrabold text-slate-900">3.4×</div><div className="mt-1 text-sm text-slate-600">Median ROAS uplift in 90 days*</div></div>
                                        <div className="relative overflow-hidden card p-5"><div className="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-40"></div><div className="text-3xl font-extrabold text-slate-900">‑38%</div><div className="mt-1 text-sm text-slate-600">Avg. CPM reduction via PMP & curation*</div></div>
                                        <div className="relative overflow-hidden card p-5"><div className="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-40"></div><div className="text-3xl font-extrabold text-slate-900">150+</div><div className="mt-1 text-sm text-slate-600">Brands trust our programmatic execution*</div></div>
                                        <div className="relative overflow-hidden card p-5"><div className="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-40"></div><div className="text-3xl font-extrabold text-slate-900">95%+</div><div className="mt-1 text-sm text-slate-600">Attribution reliability across DV360 & CTV*</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="showcase" className="py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-10 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Selected outcomes</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Proof That Our DV360 Playbook Works</h2>
                            <p className="mt-2 text-slate-600 max-w-3xl mx-auto">Highlights pulled from your uploaded case studies. Click through for methodology and charts.</p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block" rel="noopener">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-indigo-600/10 text-indigo-700 border border-indigo-200 flex items-center justify-center">CB</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">Artarium — Value‑Based Custom Bidding</h3>
                                        <p className="text-xs text-slate-500">DV360 • Custom Bid • Floodlight</p>
                                    </div>
                                </div>
                                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-800">
                                    <li className="rounded-xl bg-slate-50 border border-slate-200 p-3"><span className="text-2xl font-extrabold">95%↓</span><div className="text-xs text-slate-500">CPA</div></li>
                                    <li className="rounded-xl bg-slate-50 border border-slate-200 p-3"><span className="text-2xl font-extrabold">13×</span><div className="text-xs text-slate-500">High‑value actions</div></li>
                                </ul>
                                <p className="mt-3 text-sm text-slate-600">Targeted value signals + audience curation + inventory controls.</p>
                                <span className="mt-2 inline-flex items-center text-indigo-700 text-sm font-semibold">Read case study <span className="ml-1 ticker">→</span></span>
                            </div>

                            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block" rel="noopener">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-emerald-600/10 text-emerald-700 border border-emerald-200 flex items-center justify-center">EV</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">Artarium — Event‑Based Creative Sequencing</h3>
                                        <p className="text-xs text-slate-500">DV360 • Sequencing • Seasonal</p>
                                    </div>
                                </div>
                                <ul className="mt-3 grid grid-cols-3 gap-2 text-sm text-slate-800">
                                    <li className="rounded-xl bg-slate-50 border border-slate-200 p-3"><span className="text-2xl font-extrabold">30%↑</span><div className="text-xs text-slate-500">Conversions</div></li>
                                    <li className="rounded-xl bg-slate-50 border border-slate-200 p-3"><span className="text-2xl font-extrabold">66%↑</span><div className="text-xs text-slate-500">CTR</div></li>
                                    <li className="rounded-xl bg-slate-50 border border-slate-200 p-3"><span className="text-2xl font-extrabold">50%↓</span><div className="text-xs text-slate-500">CPC</div></li>
                                </ul>
                                <p className="mt-3 text-sm text-slate-600">Seasonal narratives + audience windows + format mix.</p>
                                <span className="mt-2 inline-flex items-center text-emerald-700 text-sm font-semibold">Read case study <span className="ml-1 ticker">→</span></span>
                            </div>

                            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block" rel="noopener">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-amber-600/10 text-amber-700 border border-amber-200 flex items-center justify-center">PM</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">Shoebacca — 26% Higher ROAS via PMax + DV360</h3>
                                        <p className="text-xs text-slate-500">PMax • DV360 • Remarketing</p>
                                    </div>
                                </div>
                                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-800">
                                    <li className="rounded-xl bg-slate-50 border border-slate-200 p-3"><span className="text-2xl font-extrabold">26%↑</span><div className="text-xs text-slate-500">ROAS</div></li>
                                    <li className="rounded-xl bg-slate-50 border border-slate-200 p-3"><span className="text-2xl font-extrabold">110%↑</span><div className="text-xs text-slate-500">Revenue (remarketing assist)</div></li>
                                </ul>
                                <p className="mt-3 text-sm text-slate-600">Clean signals + product feeds + cross‑channel remarketing.</p>
                                <span className="mt-2 inline-flex items-center text-amber-700 text-sm font-semibold">Read case study <span className="ml-1 ticker">→</span></span>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="capabilities" className="py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-8 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">What we deliver</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">A Programmatic Stack Built for Incrementality</h2>
                            <p className="mt-2 text-slate-600 max-w-3xl mx-auto">From signal design to supply curation, our stack compounds performance.</p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-4">
                            <div className="card p-6">
                                <div className="pill border-indigo-200 bg-indigo-50 text-indigo-700 mb-2">Signals</div>
                                <h3 className="text-lg font-semibold">Measurement Architecture</h3>
                                <p className="mt-2 text-slate-700">Floodlights, GA4, consent mode, server‑side where relevant. Clean, durable data.</p>
                                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                                    <li>Enhanced conversions</li>
                                    <li>Event value mapping</li>
                                    <li>Incrementality baselines</li>
                                </ul>
                            </div>
                            <div className="card p-6">
                                <div className="pill border-emerald-200 bg-emerald-50 text-emerald-700 mb-2">Supply</div>
                                <h3 className="text-lg font-semibold">SPO & Private Marketplaces</h3>
                                <p className="mt-2 text-slate-700">Transparent supply paths focused on premium reach and brand safety.</p>
                                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                                    <li>PMP curation & deals</li>
                                    <li>CTV & YouTube mixes</li>
                                    <li>Viewability & IVT controls</li>
                                </ul>
                            </div>
                            <div className="card p-6">
                                <div className="pill border-sky-200 bg-sky-50 text-sky-700 mb-2">Strategy</div>
                                <h3 className="text-lg font-semibold">Custom Bidding & Audiences</h3>
                                <p className="mt-2 text-slate-700">Bids tuned to <em>profit signals</em>, not just clicks. Sequenced creatives by stage.</p>
                                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                                    <li>First‑party data onboarding</li>
                                    <li>Lookalikes & modeled reach</li>
                                    <li>Frequency & reach pacing</li>
                                </ul>
                            </div>
                            <div className="card p-6">
                                <div className="pill border-amber-200 bg-amber-50 text-amber-700 mb-2">Stories</div>
                                <h3 className="text-lg font-semibold">Reporting People Believe</h3>
                                <p className="mt-2 text-slate-700">Board‑ready views: ROAS, MER, new‑to‑brand, assisted impact, cohorts.</p>
                                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                                    <li>Looker dashboards</li>
                                    <li>Channel lift analysis</li>
                                    <li>Quarterly strategy reviews</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="manage" className="bg-slate-50 py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        {/* Heading */}
                        <div className="mb-6 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                What we manage
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Channels, Formats & Tactics — All in One Team
                            </h2>
                        </div>

                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`tab-btn rounded-xl border px-4 py-2 text-sm transition ${activeTab === tab.id
                                        ? "bg-slate-900 text-white border-slate-900"
                                        : "border-slate-300 text-slate-700"
                                        }`}
                                >
                                    {tab.title.split(" & ")[0]}
                                </button>
                            ))}
                        </div>

                        {/* Active Tab Content */}
                        <div className="mx-auto max-w-5xl">
                            {tabs.map(
                                (tab) =>
                                    activeTab === tab.id && (
                                        <div key={tab.id} className="card p-6">
                                            <h3 className="text-lg font-semibold text-slate-900">
                                                {tab.title}
                                            </h3>
                                            <p className="mt-1 text-slate-700">{tab.description}</p>
                                            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                                                {tab.items.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                </section>

                <section id="kpi" className="py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-8 max-md:flex-col flex items-center max-md:gap-5 md:items-end justify-between">
                            <div>
                                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Live demo</p>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Campaign KPI Trend (Demo)</h2>
                                <p className="mt-1 text-slate-600">Three distinct charts with different data patterns. Toggle months to see the animation.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <input
                                    type="range"
                                    min="3"
                                    max="12"
                                    value={monthCount}
                                    onChange={(e) => setMonthCount(Number(e.target.value))}
                                    className="w-40"
                                />
                                <button
                                    onClick={() => setPlaying(!playing)}
                                    className="rounded-xl border border-slate-300 px-3 py-1.5 text-sm"
                                >
                                    {playing ? "⏸ Pause" : "▶ Play"}
                                </button>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="card p-5 bg-white rounded-xl shadow-md">
                                <h3 className="text-lg font-semibold mb-2">CPA</h3>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="cpa" stroke="#5cc6ff" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* ROAS Bar Chart */}
                            <div className="card p-5 bg-white rounded-xl shadow-md">
                                <h3 className="text-lg font-semibold mb-2">ROAS</h3>
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="roas" fill="#5cc6ff" radius={[6, 6, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* CTR Line Chart */}
                            <div className="card p-5 bg-white rounded-xl shadow-md">
                                <h3 className="text-lg font-semibold mb-2">CTR</h3>
                                <ResponsiveContainer width="100%" height={200}>
                                    <ComposedChart data={chartData}>
                                        <defs>
                                            <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#5cc6ff" stopOpacity={0.9} />
                                                <stop offset="100%" stopColor="#5cc6ff" stopOpacity={0.5} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="ctr"
                                            fill="url(#lineFill)"
                                            stroke={false}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="ctr"
                                            stroke="#5cc6ff"
                                            strokeWidth={2}
                                        />
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="process" className="bg-slate-50 py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-10">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">How we deliver</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">A Transparent, Test‑Led Program</h2>
                        </div>
                        <div className="grid gap-6 lg:grid-cols-2">
                            <ol className="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                                <li><div className="absolute -left-2.5 h-5 w-5 rounded-full bg-slate-900 ring-4 ring-slate-100"></div>
                                    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm"><div className="text-xs font-semibold tracking-wider text-slate-500">01. Audit & Objectives</div><p className="mt-1 text-slate-800">ICP, margins, attribution, data quality, success metrics.</p></div></li>
                                <li><div className="absolute -left-2.5 h-5 w-5 rounded-full bg-indigo-600 ring-4 ring-slate-100"></div>
                                    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm"><div className="text-xs font-semibold tracking-wider text-slate-500">02. Tracking & Signals</div><p className="mt-1 text-slate-800">GA4 + Floodlight + server‑side where relevant.</p></div></li>
                                <li><div className="absolute -left-2.5 h-5 w-5 rounded-full bg-emerald-600 ring-4 ring-slate-100"></div>
                                    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm"><div className="text-xs font-semibold tracking-wider text-slate-500">03. Supply & Safety</div><p className="mt-1 text-slate-800">PMPs, curated deals, brand suitability, viewability.</p></div></li>
                            </ol>
                            <ol className="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                                <li><div className="absolute -left-2.5 h-5 w-5 rounded-full bg-amber-600 ring-4 ring-slate-100"></div>
                                    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm"><div className="text-xs font-semibold tracking-wider text-slate-500">04. Creative & Sequencing</div><p className="mt-1 text-slate-800">Event‑based narratives by funnel stage.</p></div></li>
                                <li><div className="absolute -left-2.5 h-5 w-5 rounded-full bg-rose-600 ring-4 ring-slate-100"></div>
                                    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm"><div className="text-xs font-semibold tracking-wider text-slate-500">05. Optimization & Tests</div><p className="mt-1 text-slate-800">Bid tuning, budget pacing, lift tests, waste cuts.</p></div></li>
                                <li><div className="absolute -left-2.5 h-5 w-5 rounded-full bg-teal-600 ring-4 ring-slate-100"></div>
                                    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm"><div className="text-xs font-semibold tracking-wider text-slate-500">06. Reporting & Insights</div><p className="mt-1 text-slate-800">ROAS, MER, LTV, cohorts — board‑ready dashboards.</p></div></li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="pricing" className="bg-slate-50 py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        {/* Heading */}
                        <div className="mb-6 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Pricing
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Flexible Models Aligned to Outcomes
                            </h2>
                            <p className="mt-1 text-slate-600">
                                Slide your monthly media spend to preview a typical engagement.
                            </p>
                        </div>

                        {/* Slider & Cards */}
                        <div className="mx-auto max-w-3xl card p-6">
                            <label className="text-sm font-medium text-slate-700">
                                Monthly media spend: <span className="font-semibold">₹{fmt(spend)}</span>
                            </label>
                            <input
                                type="range"
                                min="100000"
                                max="20000000"
                                step="100000"
                                value={spend}
                                onChange={(e) => setSpend(Number(e.target.value))}
                                className="mt-3 w-full"
                            />

                            <div className="mt-5 grid gap-4 md:grid-cols-3">
                                {/* Starter */}
                                <div className="card p-5">
                                    <h3 className="text-lg font-semibold">Starter</h3>
                                    <p className="text-sm text-slate-600">For lean accounts & pilots</p>
                                    <div className="mt-3 text-2xl font-extrabold">₹{fmt(starterFee)}+</div>
                                    <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                                        <li>DV360 setup & QA</li>
                                        <li>2–3 PMPs</li>
                                        <li>Monthly report</li>
                                    </ul>
                                </div>

                                {/* Growth */}
                                <div className="card p-5 border-indigo-300">
                                    <h3 className="text-lg font-semibold">Growth</h3>
                                    <p className="text-sm text-slate-600">Scaling spend & markets</p>
                                    <div className="mt-3 text-2xl font-extrabold">₹{fmt(growthFee)}+</div>
                                    <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                                        <li>Custom bidding</li>
                                        <li>5–8 PMPs</li>
                                        <li>Weekly insights</li>
                                    </ul>
                                </div>

                                {/* Enterprise */}
                                <div className="card p-5">
                                    <h3 className="text-lg font-semibold">Enterprise</h3>
                                    <p className="text-sm text-slate-600">Complex & multi‑geo</p>
                                    <div className="mt-3 text-2xl font-extrabold">₹{fmt(entFee)}+</div>
                                    <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                                        <li>SS tagging + MMM hooks</li>
                                        <li>10+ PMPs</li>
                                        <li>Dedicated pod</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="mt-3 text-xs text-slate-500">
                                Exact fees follow scope and geographies. Hybrid retainer + performance incentives available.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="faq" className="py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-8 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">FAQs</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Everything About Our Programmatic Service</h2>
                            <p className="mt-2 text-slate-600 max-w-3xl mx-auto">Timelines, tools, and how we prove incrementality.</p>
                        </div>
                        <Faq content={content} />
                    </div>
                </section>

                <section id="contact" className="bg-slate-900 py-16 text-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid items-center gap-8 md:grid-cols-2">
                            <div>
                                <h3 className="text-2xl font-bold">Start with a first DV360 audit</h3>
                                <p className="mt-2 max-w-2xl text-slate-300">We’ll review your account, tracking and supply paths—and return with a 90‑day plan.</p>
                                <ul className="mt-4 space-y-2 text-slate-300">
                                    <li className="flex items-start gap-3"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span><span>Floodlight & GA4 alignment</span></li>
                                    <li className="flex items-start gap-3"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span><span>PMP & curation opportunities</span></li>
                                    <li className="flex items-start gap-3"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span><span>Custom bid strategy ideas</span></li>
                                </ul>
                            </div>
                            <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
                                <form onSubmit={handleSubmit} action="#" method="post" className="grid gap-3 md:grid-cols-2">
                                    <label className="text-sm" for="fullName">Full name
                                        <input value={formData.fullName} onChange={handleChange} id="fullName" name="fullName" required placeholder="Your Full Name" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label className="text-sm" for="email">Work email
                                        <input value={formData.email} onChange={handleChange} id="email" type="email" name="email" required placeholder="name@company.com" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label className="text-sm md:col-span-1" for="company">Company
                                        <input value={formData.company} onChange={handleChange} id="company" name="company" placeholder="Company name" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label className="text-sm md:col-span-1" for="spend">Monthly spend
                                        <input value={formData.spend} onChange={handleChange} id="spend" name="spend" placeholder="e.g., ₹10,00,000" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label className="text-sm md:col-span-2" for="message">Goals & pain points
                                        <textarea value={formData.message} onChange={handleChange} id="message" name="message" rows="4" placeholder="Targets, geos, formats" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"></textarea>
                                    </label>
                                    <div className="md:col-span-2">
                                        <button disabled={loading} className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-md transition hover:opacity-90" type="submit">
                                            {loading ? "Submitting..." : "Request Audit"}
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
            </main>
        </>
    )
}

export default ProgramaticAd
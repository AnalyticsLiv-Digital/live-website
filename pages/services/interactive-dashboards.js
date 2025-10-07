"use client";
import { useState, useEffect } from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    BarChart,
    Bar,
    ComposedChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";
import Faq from "../../components/Faq";
import MetaSchemaOg from "../../components/MetaSchemaOg";

const InteractiveDashboards = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        message: "",
        pageSource: "Interactive Dashboards",
    });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const [activeTab, setActiveTab] = useState("looker");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formFilled, setFormFilled] = useState(false);
    const [currentDemo, setCurrentDemo] = useState("");
    const [selectedDashboard, setSelectedDashboard] = useState("");
    const [formDataUnlock, setFormDataUnlock] = useState({
        name: "",
        email: "",
        company: "",
    });

    const lookerSamples = [
        {
            img: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Screenshot_1.png",
            title: "E-Commerce Dashboard",
            demo: "/C-Suite-Dashboards.html",
        },
        {
            img: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Screenshot_2.png",
            title: "Marketing Dashboard",
            demo: "/C-Suite-Dashboards.html",
        },
        {
            img: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Screenshot_3.png",
            title: "Finance Dashboard",
            demo: "/C-Suite-Dashboards.html",
        },
    ];

    const interactiveSamples = [
        {
            img: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Screenshot_8.png",
            title: "C-Suite Dashboard (Demo)",
            demo: "/C-Suite-Dashboards.html",
        },
        {
            img: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Screenshot_9.png",
            title: "SEO Dashboard",
            demo: "/C-Suite-Dashboards.html",
        },
        {
            img: "https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Screenshot_7.png",
            title: "Sales Funnel Dashboard",
            demo: "/C-Suite-Dashboards.html",
        },
    ];

    const handleOpenDemo = (demo, title) => {
        setCurrentDemo(demo);
        setSelectedDashboard(title);
        setFormFilled(false);
        setIsModalOpen(true);
    };

    const handleSubmitUnlock = async (e) => {
        e.preventDefault();
        console.log("formDataUnlock-------", formDataUnlock, selectedDashboard)

        if (!formDataUnlock.name || !formDataUnlock.email) {
            return setResponseMessage("Please fill in required fields.");
        }

        setLoading(true);
        setResponseMessage("");

        try {
            const payload = {
                fullName: formDataUnlock.name,
                email: formDataUnlock.email,
                company: formDataUnlock.company || "",
                dashboard: selectedDashboard || "",
            };

            const res = await fetch("/api/dashboardLead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setResponseMessage("Thank you! Your request has been submitted successfully.");
                setFormDataUnlock({ name: "", email: "", company: "" });
                setFormFilled(true);

                // 🔹 After successful submission — handle tab-specific behavior
                if (activeTab === "looker") {
                    // Redirect user to selected Looker dashboard
                    let dashboardURL = "";

                    switch (selectedDashboard) {
                        case "E-Commerce Dashboard":
                            dashboardURL =
                                "https://lookerstudio.google.com/reporting/a99c2003-6ce4-4829-a189-e20467ae6b9e/page/luPqD";
                            break;
                        case "Marketing Dashboard":
                            dashboardURL =
                                "https://lookerstudio.google.com/reporting/85854b92-da63-49bd-a24d-b720049839b7/page/VSGKD";
                            break;
                        case "Finance Dashboard":
                            dashboardURL =
                                "https://lookerstudio.google.com/reporting/a99c2003-6ce4-4829-a189-e20467ae6b9e/page/luPqD";
                            break;
                        default:
                            dashboardURL = "";
                    }

                    if (dashboardURL) {
                        window.open(dashboardURL, "_blank");
                    }
                    setIsModalOpen(false);
                } else {
                    // 🔹 Interactive tab — keep the download logic
                    const link = document.createElement("a");
                    link.href = "/C-Suite-Dashboards.html";
                    link.download = "C-Suite-Dashboards.html";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            } else {
                setResponseMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setResponseMessage("Server error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const currentSamples =
        activeTab === "looker" ? lookerSamples : interactiveSamples;

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
                setFormData({ fullName: "", email: "", company: "", message: "", pageSource: "Interactive Dashboards", });
            } else {
                setResponseMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setResponseMessage("Server error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const revBase = [1.0, 1.1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0];
    const cpaBase = [980, 940, 910, 880, 860, 830, 820, 800, 780, 760, 750, 740];
    const crBase = [1.1, 1.15, 1.2, 1.22, 1.25, 1.28, 1.3, 1.32, 1.34, 1.35, 1.36, 1.38];

    const genData = (len) =>
        months.slice(0, len).map((month, i) => ({
            month,
            rev: revBase[i],
            cpa: cpaBase[i],
            cr: crBase[i]
        }));

    const [monthCount, setMonthCount] = useState(6);
    const [chartData, setChartData] = useState(genData(6));

    useEffect(() => {
        setChartData(genData(monthCount));
    }, [monthCount]);

    const content = [
        { question: 'Can we keep using our spreadsheets?', answer: 'Yes. We automate Google Sheets/Excel as part of the stack — scheduled refresh, deduping, and email/Slack alerts.' },
        { question: 'How do you manage access and security?', answer: 'Role‑based access in Tableau/Power BI, secure connectors, and data contracts for governed usage.' },
        { question: 'What does onboarding look like?', answer: 'Audit → KPI taxonomy → data connectors → model build → dashboard layouts → QA & training.' },
        { question: 'Do you support embedded analytics?', answer: 'Yes. We support secure embedding for customer portals and internal tools.' }
    ]

    return (
        <>
            <MetaSchemaOg
                url="https://analyticsliv.com/services/interactive-dashboards"
                title="Interactive Dashboards | AnalyticsLiv"
                description="Looker Studio, Tableau, Power BI, Spreadsheet automations, and Cloud-to-Dashboard pipelines. Production-ready dashboards delivered fast—aligned to your KPIs."
                twitterTitle="Interactive Dashboards | AnalyticsLiv"
                twitterDescription="Looker Studio, Tableau, Power BI, Spreadsheet automations, and Cloud-to-Dashboard pipelines. Production-ready dashboards delivered fast—aligned to your KPIs."
                faqData={content}
            />
            <main className="min-h-screen bg-white text-slate-800"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"' }}>
                <section className="relative overflow-hidden border-b border-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EEF6FF] via-white to-[#F7F7FF]"></div>
                    <div className="relative mx-auto max-w-7xl px-6 py-12 2xl:py-20">
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div>
                                <p className="inline-flex items-center gap-[0.4rem] border border-blue-200 text-blue-700 bg-white px-2.5 py-1 rounded-full text-xs font-semibold">
                                    <span className="inline-block w-[6px] h-[6px] rounded-full bg-indigo-500"></span>
                                    Digital Analytics
                                </p>
                                <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl text-slate-900">
                                    Interactive Dashboards <span className="bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-transparent">People Trust</span>
                                </h1>
                                <p className="mt-5 max-w-2xl text-lg text-slate-600">Executive-ready reporting in <strong>Looker Studio</strong>, <strong>Tableau</strong>, and <strong>Power BI</strong> — powered by clean data, KPI governance, and cloud-to-dashboard automation.</p>
                                <div className="mt-7 flex flex-wrap items-center gap-3">
                                    <a href="#contact" className="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:opacity-90">Get a Free Dashboard Audit</a>
                                    <a href="#showcase" className="rounded-2xl border border-slate-300 px-6 py-3">See Case Study</a>
                                </div>
                                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                                    <li className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-4"><span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-emerald-500"></span><p className="text-slate-700">KPI taxonomy + governance with definitions your teams align on</p></li>
                                    <li className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-4"><span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-emerald-500"></span><p className="text-slate-700">Warehouse-first models (BigQuery/Snowflake) for speed & accuracy</p></li>
                                </ul>
                            </div>

                            <div className="">
                                <div className="relative mx-auto w-full max-w-xl rounded-xl border border-gray-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5">
                                            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-40"></div>
                                            <div className="text-3xl font-extrabold text-slate-900">350+</div>
                                            <div className="mt-1 text-sm text-slate-600">Dashboards shipped*</div>
                                        </div>
                                        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5">
                                            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-40"></div>
                                            <div className="text-3xl font-extrabold text-slate-900">85</div>
                                            <div className="mt-1 text-sm text-slate-600">Data sources unified*</div>
                                        </div>
                                        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5">
                                            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-40"></div>
                                            <div className="text-3xl font-extrabold text-slate-900">4×</div>
                                            <div className="mt-1 text-sm text-slate-600">Faster reporting vs. manual sheets*</div>
                                        </div>
                                        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5">
                                            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full ring-animated opacity-40"></div>
                                            <div className="text-3xl font-extrabold text-slate-900">2–6w</div>
                                            <div className="mt-1 text-sm text-slate-600">Typical time‑to‑value*</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="deliver" className="py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-10 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">What we deliver</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Production‑Ready Dashboards Your Teams Will Use</h2>
                            <p className="mt-2 text-slate-600 max-w-3xl mx-auto">Executive, function and analyst views; drilldowns; cross‑filters; and alerting—aligned to business KPIs.</p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl border border-emerald-200 bg-emerald-50 flex items-center justify-center">✓</div>
                                    <h3 className="text-lg font-semibold text-slate-900">Access, Security & Governance</h3>
                                </div>
                                <p className="mt-2 text-slate-700">RBAC & row‑level security, change logs, and data QA with clear runbooks.</p>
                                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                                    <li>RLS & RBAC</li><li>SLAs & alerts</li><li>Audit & docs</li><li>Governed models</li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl border border-sky-200 bg-sky-50 flex items-center justify-center">⚙</div>
                                    <h3 className="text-lg font-semibold text-slate-900">Distribution & Adoption</h3>
                                </div>
                                <p className="mt-2 text-slate-700">Email/PDF schedules, Slack/Teams alerts, and embedded analytics where needed.</p>
                                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                                    <li>Schedules</li><li>Embeds</li><li>Slack/Teams</li><li>Training</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="showcase" className="py-5 lg:py-8">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-10 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Selected proof</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Cloud Data → Dashboards That Drive Decisions</h2>
                            <p className="mt-2 text-slate-600 max-w-3xl mx-auto">Snippet from our cloud migration & analytics stack work. Click through for detail.</p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-6 hover:shadow-md transition block" aria-label="Cloud Migration case study">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-200">CM</div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-slate-500">Tech · BigQuery · Looker</p>
                                        <h3 className="text-lg font-semibold text-slate-900">Zero‑Downtime Migration + Dashboards</h3>
                                    </div>
                                </div>
                                <ul className="mt-3 text-sm text-slate-700 space-y-1.5">
                                    <li>92% data accuracy (governed KPIs)</li>
                                    <li>Unified exec & marketing views</li>
                                    <li>Scheduled refresh & alerting</li>
                                </ul>
                                <span className="mt-4 inline-flex items-center gap-2 text-indigo-700 font-semibold">Read case study →</span>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-6">
                                <h4 className="font-semibold text-slate-900">Dashboard Gallery</h4>
                                <p className="mt-1 text-sm text-slate-600">Examples for e‑commerce, B2B leadgen, and subscription products.</p>
                                <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-700">
                                    <li className="rounded-lg border border-slate-200 p-2">CEO Overview</li>
                                    <li className="rounded-lg border border-slate-200 p-2">Performance Marketing</li>
                                    <li className="rounded-lg border border-slate-200 p-2">SEO & Content</li>
                                    <li className="rounded-lg border border-slate-200 p-2">Product & Funnel</li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-6">
                                <h4 className="font-semibold text-slate-900">Data Sources</h4>
                                <p className="mt-1 text-sm text-slate-600">Ads, analytics, CRM, subscriptions, finance.</p>
                                <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-700">
                                    <li className="rounded-lg border border-slate-200 p-2">Google Ads</li>
                                    <li className="rounded-lg border border-slate-200 p-2">Meta Ads</li>
                                    <li className="rounded-lg border border-slate-200 p-2">GA4</li>
                                    <li className="rounded-lg border border-slate-200 p-2">Shopify</li>
                                    <li className="rounded-lg border border-slate-200 p-2">HubSpot/Salesforce</li>
                                    <li className="rounded-lg border border-slate-200 p-2">Stripe</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cloud" className="py-8">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-8 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Under the hood</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Cloud Data → Dashboard, Reliably</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 items-start">
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-6">
                                <h3 className="text-lg font-semibold text-slate-900">Modern data stack</h3>
                                <ul className="mt-3 space-y-2 text-slate-700">
                                    <li>BigQuery / Snowflake / Redshift warehouses</li>
                                    <li>dbt transformations & tests</li>
                                    <li>Reverse ETL for activation</li>
                                    <li>Semantic metrics layer</li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-6">
                                <h3 className="text-lg font-semibold text-slate-900">Reference architecture</h3>
                                <div className="mt-3 grid grid-cols-6 gap-2 text-xs">
                                    <div className="col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-3">Sources<br /><span className="text-slate-500">GA4 • Ads • CRM • ERP</span></div>
                                    <div className="col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-3">Ingest<br /><span className="text-slate-500">ETL / Streaming</span></div>
                                    <div className="col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-3">Warehouse<br /><span className="text-slate-500">BigQuery / Snowflake</span></div>
                                    <div className="col-span-3 rounded-xl border border-slate-200 bg-slate-50 p-3">Transform<br /><span className="text-slate-500">dbt, SQL</span></div>
                                    <div className="col-span-3 rounded-xl border border-slate-200 bg-slate-50 p-3">Metrics Layer<br /><span className="text-slate-500">Semantic model</span></div>
                                    <div className="col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-3">Reverse ETL<br /><span className="text-slate-500">Activation</span></div>
                                    <div className="col-span-4 rounded-xl border border-slate-200 bg-slate-50 p-3">Visualization<br /><span className="text-slate-500">Looker • Tableau • Power BI</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="kpi" className="py-16 bg-slate-50">
                    <div className="mx-auto max-w-7xl px-6">
                        {/* Header */}
                        <div className="mb-8 flex max-md:flex-col max-md:items-center items-end justify-between">
                            <div>
                                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Live demo
                                </p>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                    KPI Trends — Sample Data
                                </h2>
                                <p className="mt-1 text-slate-600">
                                    Toggle months to see smooth updates across three charts.
                                </p>
                            </div>
                            <div className="flex items-center gap-3 max-md:mt-4">
                                <label className="text-sm text-slate-600">Months</label>
                                <input
                                    type="range"
                                    min="3"
                                    max="12"
                                    value={monthCount}
                                    onChange={(e) => setMonthCount(Number(e.target.value))}
                                    className="w-40"
                                />
                            </div>
                        </div>

                        {/* Charts */}
                        <div className="grid gap-6 md:grid-cols-3">
                            {/* Revenue Chart */}
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-5 bg-white rounded-xl shadow-md">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold">Revenue (₹ Cr)</h3>
                                    <span className="text-xs text-slate-500">Higher is better</span>
                                </div>
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="rev" fill="#5cc6ff" radius={[6, 6, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* CPA Chart */}
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-5 bg-white rounded-xl shadow-md">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold">CPA (₹)</h3>
                                    <span className="text-xs text-slate-500">Lower is better</span>
                                </div>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line
                                            type="monotone"
                                            dataKey="cpa"
                                            stroke="#5cc6ff"
                                            strokeWidth={2}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Conversion Rate Chart */}
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-5 bg-white rounded-xl shadow-md">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold">Conv. Rate (%)</h3>
                                    <span className="text-xs text-slate-500">Stability</span>
                                </div>
                                <ResponsiveContainer width="100%" height={200}>
                                    <ComposedChart data={chartData}>
                                        <defs>
                                            <linearGradient id="crFill" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#5cc6ff" stopOpacity={0.8} />
                                                <stop offset="100%" stopColor="#5cc6ff" stopOpacity={0.4} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="cr"
                                            fill="url(#crFill)"
                                            stroke={false}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="cr"
                                            stroke="#5cc6ff"
                                            strokeWidth={2}
                                        />
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="samples" className="py-16 bg-slate-50">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Sample Dashboards</h2>
                        <p className="mt-2 text-slate-600">
                            Preview our Looker Studio and Interactive dashboards. Fill out the form once to unlock the full dashboard view.
                        </p>

                        {/* Tabs */}
                        <div className="mt-6 flex justify-center gap-3">
                            <button
                                onClick={() => setActiveTab('looker')}
                                className={`tab-btn px-4 py-2 rounded-xl border transition ${activeTab === 'looker'
                                    ? 'bg-slate-900 text-white border-slate-900'
                                    : 'bg-white text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                Looker Studio
                            </button>
                            <button
                                onClick={() => setActiveTab('interactive')}
                                className={`tab-btn px-4 py-2 rounded-xl border transition ${activeTab === 'interactive'
                                    ? 'bg-slate-900 text-white border-slate-900'
                                    : 'bg-white text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                Interactive
                            </button>
                        </div>

                        {/* Dashboard Grid */}
                        <div className="grid gap-6 mt-8 md:grid-cols-3">
                            {currentSamples.map((item, i) => (
                                <div key={i} className="card p-4 bg-white rounded-xl shadow-sm">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="rounded-xl w-full h-40 object-cover"
                                        style={{ filter: "blur(3px)" }}
                                    />
                                    <h3 className="mt-3 font-semibold">{item.title}</h3>
                                    <button
                                        onClick={() => handleOpenDemo(item.demo, item.title)}
                                        className="mt-3 bg-slate-900 text-white px-4 py-2 rounded-xl"
                                    >
                                        See Full Dashboard
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-2xl p-6 max-w-3xl w-full relative">
                                <button
                                    onClick={handleClose}
                                    className="absolute top-3 right-3 text-slate-500 text-2xl"
                                >
                                    &times;
                                </button>

                                {/* Only show form for Interactive tab or before submission */}
                                {!formFilled || activeTab === "looker" ? (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Fill details to unlock dashboard
                                        </h3>
                                        <form onSubmit={handleSubmitUnlock} className="space-y-3">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                className="w-full border p-2 rounded"
                                                required
                                                value={formDataUnlock.name}
                                                onChange={(e) =>
                                                    setFormDataUnlock({ ...formDataUnlock, name: e.target.value })
                                                }
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                className="w-full border p-2 rounded"
                                                required
                                                value={formDataUnlock.email}
                                                onChange={(e) =>
                                                    setFormDataUnlock({ ...formDataUnlock, email: e.target.value })
                                                }
                                            />
                                            <input
                                                type="text"
                                                name="company"
                                                placeholder="Company"
                                                className="w-full border p-2 rounded"
                                                value={formDataUnlock.company}
                                                onChange={(e) =>
                                                    setFormDataUnlock({
                                                        ...formDataUnlock,
                                                        company: e.target.value,
                                                    })
                                                }
                                            />
                                            <button
                                                type="submit"
                                                className="bg-emerald-600 text-white px-4 py-2 rounded-xl w-full"
                                            >
                                                Unlock Dashboard
                                            </button>
                                        </form>
                                    </div>
                                ) : (
                                    // Only show iframe if interactive and form submitted
                                    activeTab === "interactive" && (
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">
                                                {selectedDashboard}
                                            </h3>
                                            <iframe
                                                src={currentDemo}
                                                className="w-full h-96 rounded-xl mt-4"
                                            ></iframe>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}

                </section>

                <section id="process" class="py-12">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="text-center mb-10">
                            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">How we deliver</p>
                            <h2 class="text-2xl md:text-3xl font-bold text-slate-900">From Strategy to Run — Fast</h2>
                        </div>
                        <div class="grid gap-6 lg:grid-cols-2">
                            <ol class="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                                <li><div class="absolute -left-2.5 h-5 w-5 rounded-full bg-slate-900 ring-4 ring-slate-100"></div>
                                    <div class="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-5"><div class="text-xs font-semibold tracking-wider text-slate-500">01. Discovery & KPIs</div><p class="mt-1 text-slate-800">Use‑case mapping, KPI trees & success metrics.</p></div></li>
                                <li><div class="absolute -left-2.5 h-5 w-5 rounded-full bg-indigo-600 ring-4 ring-slate-100"></div>
                                    <div class="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-5"><div class="text-xs font-semibold tracking-wider text-slate-500">02. Data & Modeling</div><p class="mt-1 text-slate-800">Pipelines, dbt models, tests, metrics layer.</p></div></li>
                                <li><div class="absolute -left-2.5 h-5 w-5 rounded-full bg-emerald-600 ring-4 ring-slate-100"></div>
                                    <div class="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-5"><div class="text-xs font-semibold tracking-wider text-slate-500">03. Design & Build</div><p class="mt-1 text-slate-800">Wireframes, RBAC/RLS, schedules & alerts.</p></div></li>
                            </ol>
                            <ol class="relative border-l border-slate-200 pl-6 space-y-6 lg:space-y-8">
                                <li><div class="absolute -left-2.5 h-5 w-5 rounded-full bg-amber-600 ring-4 ring-slate-100"></div>
                                    <div class="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-5"><div class="text-xs font-semibold tracking-wider text-slate-500">04. UAT & Training</div><p class="mt-1 text-slate-800">Stakeholder testing, docs, and go‑live runbook.</p></div></li>
                                <li><div class="absolute -left-2.5 h-5 w-5 rounded-full bg-rose-600 ring-4 ring-slate-100"></div>
                                    <div class="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-5"><div class="text-xs font-semibold tracking-wider text-slate-500">05. Run & Improve</div><p class="mt-1 text-slate-800">Iterate with adoption and outcome metrics.</p></div></li>
                                <li><div class="absolute -left-2.5 h-5 w-5 rounded-full bg-teal-600 ring-4 ring-slate-100"></div>
                                    <div class="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-5"><div class="text-xs font-semibold tracking-wider text-slate-500">06. Support & SLAs</div><p class="mt-1 text-slate-800">Data quality checks, refresh SLAs & enhancements.</p></div></li>
                            </ol>
                        </div>
                        <div class="mt-10 text-center">
                            <a href="#contact" class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-sm hover:opacity-90">
                                Request your dashboard demo
                            </a>
                        </div>
                    </div>
                </section>

                <section id="pricing" className="py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-8 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Pricing</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Flexible Models Aligned to Outcomes</h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-6">
                                <h3 className="text-lg font-semibold text-slate-900">Pilot Dashboards</h3>
                                <p className="mt-2 text-slate-700">2–3 core views, governed KPIs, scheduled refresh.</p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                    <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>Looker Studio or Tableau</li>
                                    <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>1–2 sources via BigQuery</li>
                                    <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>QA, alerts & enablement</li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-6">
                                <h3 className="text-lg font-semibold text-slate-900">Growth Program</h3>
                                <p className="mt-2 text-slate-700">Cross‑function views, modelled data, role‑based access.</p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                    <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>Tableau/Power BI + governed sources</li>
                                    <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>DBT models & versioning</li>
                                    <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>Weekly insights & roadmap</li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-6">
                                <h3 className="text-lg font-semibold text-slate-900">Enterprise</h3>
                                <p className="mt-2 text-slate-700">Multi‑geo, RLS/SSAS, advanced governance.</p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                    <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>Power BI with RLS</li>
                                    <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>Data contracts & SLAs</li>
                                    <li className="flex items-start gap-2"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>Dedicated pod</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-slate-600 text-center">Exact fees depend on scope, sources, and governance needs.</p>
                    </div>
                </section>

                <section id="faq" className="py-4 lg:py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-8 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">FAQs</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Everything About Our Dashboards Service</h2>
                            <p className="mt-2 text-slate-600 max-w-3xl mx-auto">Your Questions Answered</p>
                        </div>
                        <Faq content={content} />
                    </div>
                </section>

                <section id="contact" className="bg-slate-900 py-16 text-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid items-center gap-8 md:grid-cols-2">
                            <div>
                                <h3 className="text-2xl font-bold">Get your first dashboard audit</h3>
                                <p className="mt-2 max-w-2xl text-slate-300">Share your goals, current tooling, and data sources. We’ll return with a prioritized plan.</p>
                                <ul className="mt-4 space-y-2 text-slate-300">
                                    <li className="flex items-start gap-3"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span><span>KPI & governance review</span></li>
                                    <li className="flex items-start gap-3"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span><span>Data quality & refresh checks</span></li>
                                    <li className="flex items-start gap-3"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span><span>Layout & UX recommendations</span></li>
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
                                    <label className="text-sm md:col-span-1" for="tools">Current tools
                                        <input value={formData.tools} onChange={handleChange} id="tools" name="tools" placeholder="Looker, Tableau, Power BI, Sheets…" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label className="text-sm md:col-span-2" for="message">Goals & pain points
                                        <textarea value={formData.message} onChange={handleChange} id="message" name="message" rows="4" placeholder="Targets, sources, stakeholders" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"></textarea>
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

export default InteractiveDashboards

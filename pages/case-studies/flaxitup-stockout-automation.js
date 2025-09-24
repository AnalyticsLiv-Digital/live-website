import Head from "next/head";
import Link from "next/link";
import { generateBreadcrumbSchemas, generateCaseStudySchema } from "../../utils/schema";
import CaseStudyDownloadModal from "../../components/CaseStudyDownloadModal";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

const FlaxitUpCaseStudy = () => {

    const [showCalendly, setShowCalendly] = useState(false);

    const handleCalendly = () => {
        setShowCalendly(true);
    }

    const cd = {
        slug: "flaxitup-stockout-automation",
        title: "FlaxitUp Cuts Stockout Risks by 35% with Automation",
        description:
            "How FlaxitUp reduced stockout risks by 35%, improved forecasting accuracy by 28%, and automated operations with data-driven workflows and dashboards.",
        coverimage:
            "https://storage.googleapis.com/website-bucket-uploads/cs/1743678291655764.png",
        id: "cs4",
        pdf: "https://storage.googleapis.com/website-bucket-uploads/cs/1743678159051732.pdf",
    };

    const csSchema = generateCaseStudySchema(cd);
    const breadcrumbSchema = generateBreadcrumbSchemas(
        "https://analyticsliv.com/case-studies/flaxitup-stockout-automation"
    );

    return (
        <>
            <Head>
                <title>
                    FlaxitUp — 35% Stockout Risk Reduction & 90% Less Manual Work | AnalyticsLiv
                </title>
                <meta
                    name="description"
                    content="Discover how FlaxitUp reduced stockout risks by 35%, improved forecasting accuracy by 28%, and automated operations with data-driven workflows and dashboards. Read the full case study by AnalyticsLiv."
                />
                <link
                    rel="canonical"
                    href="https://analyticsliv.com/case-studies/flaxitup-stockout-automation"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(csSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
            </Head>

            <main
                className="bg-white text-slate-800"
                style={{
                    fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"',
                }}
            >
                {/* HERO */}
                <section className="relative overflow-hidden border-b border-slate-200">
                    <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#6BB343]/40 bg-white px-4 py-1 text-xs font-medium tracking-wide text-[#6BB343]">
                                Case Study · Food Chain
                            </p>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                                {cd.title}
                            </h1>
                            <h2 className="mt-5 text-lg text-slate-600">How <strong>FlaxitUp</strong> streamlined operations and reduced forecasting errors through automation, APIs, and real-time dashboards.</h2>
                            <div className="mt-7 flex flex-wrap items-center gap-3 2xl:gap-6">
                                <a href="/case-studies" className="rounded-2xl border border-slate-300 px-6 py-3">Back to Case Studies</a>
                                <button onClick={() => handleCalendly()} className="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow hover:opacity-90">Book a Strategy Call</button>
                            </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-[#6BB343]">
                                    90%
                                </div>
                                <p className="text-sm mt-1">Reduction in Manual Work</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-[#6BB343]">
                                    35%
                                </div>
                                <p className="text-sm mt-1">Decrease in Stockout Risks</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-[#6BB343]">
                                    28%
                                </div>
                                <p className="text-sm mt-1">Improvement in Forecast Accuracy</p>
                            </div>
                        </div>
                    </div>
                </section>

                {showCalendly && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex items-center justify-center p-4"
                        onClick={() => setShowCalendly(false)}>
                        <div className="relative bg-white rounded-lg shadow-lg sm:p-4 flex flex-col items-center justify-center 
                        max-w-[380px] w-[100%] sm:w-[90%] h-[80vh] sm:max-w-[400px] sm:h-[450px] lg:max-w-[450px] lg:h-[500px]">

                            <button
                                className="absolute top-1 left-1 text-gray-500 text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center"
                                onClick={() => setShowCalendly(false)}
                            >
                                ✖
                            </button>

                            <div className="w-full h-full flex justify-center items-center">
                                <InlineWidget
                                    url="https://calendly.com/analyticsliv/30min"
                                    styles={{ width: "100%", height: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* BACKGROUND */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Background
                            </h2>
                            <p className="text-slate-700"><strong>FlaxitUp</strong>, a growing food chain with 10 outlets across Mumbai, faced mounting operational complexity. Their website (<a href="https://flaxitup.com/" className="text-[#F15A29] hover:underline" target="_blank">flaxitup.com</a>) served as a key hub for customer interactions, but data fragmentation and manual processes created bottlenecks.</p>
                        </div>
                        <div className="flex justify-center">

                            <div className="h-48 w-56 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/flax-logo-1.png" alt="FlaxitUp logo" className="w-40" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CHALLENGES */}
                <section className="bg-slate-50 py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                            Challenges
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Fragmented Data Sources",
                                    desc: "Manual entries and third-party apps caused inefficiencies and inconsistencies.",
                                },
                                {
                                    title: "Forecasting Errors",
                                    desc: "Unit discrepancies led to errors up to 28% in stock predictions.",
                                },
                                {
                                    title: "Stockout Risks",
                                    desc: "Manual processes increased stockout risks by 35%.",
                                },
                                {
                                    title: "Missed Alerts",
                                    desc: "Lack of real-time notifications led to operational delays and inefficiencies.",
                                },
                                {
                                    title: "Performance Tracking Issues",
                                    desc: "Inconsistent branch metrics created disputes in incentive systems.",
                                },
                            ].map((c, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                                >
                                    <h3 className="font-semibold">{c.title}</h3>
                                    <p className="text-sm text-slate-600 mt-2">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* APPROACH */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center md:text-left">
                                Our Approach
                            </h2>
                            <ol className="relative border-l border-slate-200 pl-6 space-y-6">
                                {[
                                    {
                                        title: "Automated Data Integration",
                                        desc: "Integrated Petpooja, Swiggy, Zomato, and FamePilot APIs for unified tracking, with Google Forms + App Script automation feeding BigQuery.",
                                    },
                                    {
                                        title: "Advanced Forecasting",
                                        desc: "Custom algorithm predicted requirements for 150+ items with 90% accuracy and reconciled units via conversion matrix.",
                                    },
                                    {
                                        title: "Real-Time Alerts",
                                        desc: "Google Chat notifications for form deadlines, emergency orders, procurement, and performance summaries.",
                                    },
                                    {
                                        title: "Performance Scoring",
                                        desc: "Automated incentive system with real-time notifications for transparency and motivation.",
                                    },
                                    {
                                        title: "Unified Dashboards",
                                        desc: "Looker Studio dashboards unified stock, sales, and customer feedback into a single view.",
                                    },
                                ].map((a, i) => (
                                    <li key={i}>
                                        <span className="absolute -left-2.5 h-5 w-5 rounded-full bg-[#6BB343] ring-4 ring-slate-100"></span>
                                        <p className="font-semibold">{a.title}</p>
                                        <p className="text-sm text-slate-600">{a.desc}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className='flex justify-center w-full'>
                            <CaseStudyDownloadModal
                                isOpen={true}
                                onClose={() => { }}
                                casestudy={cd}
                                parentContext="inline"
                                color="brand"
                            />
                        </div>
                    </div>
                </section>

                {/* RESULTS */}
                <section className="bg-slate-900 py-16 text-white">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Results</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { value: "90%", label: "Reduction in Manual Work" },
                                { value: "35%", label: "Decrease in Stockout Risks" },
                                { value: "28%", label: "Improvement in Forecast Accuracy" },
                                { value: "Real-Time", label: "Alerts & Dashboards" },
                            ].map((r, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow"
                                >
                                    <div className={`text-4xl font-extrabold ${i === 3 ? 'text-[#F15A29]' : 'text-[#6BB343]'}`}>
                                        {r.value}
                                    </div>
                                    <p className="mt-1 text-sm">{r.label}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-slate-300 max-w-3xl mx-auto">
                            FlaxitUp's automation journey improved <strong>accuracy</strong>, reduced <strong>stockout risks</strong>, and empowered <strong>data-driven decisions</strong> with real-time dashboards and alerts.
                        </p>
                    </div>
                </section>

                {/* CONCLUSION */}
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <blockquote className="text-xl font-medium text-slate-800">
                            "AnalyticsLiv's automation-first approach helped us cut stockout risks, reduce manual effort, and make smarter operational decisions with real-time insights."
                        </blockquote>
                        <p className="mt-4 text-slate-500">— FlaxitUp</p>
                    </div>
                </section>

                {/* RELATED CASE STUDIES */}
                <section className="bg-slate-50 py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                            Related Case Studies
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Shoebacca Performance Max",
                                    text: "26% higher ROAS with new customer bidding.",
                                },
                                {
                                    title: "DV360 Ad Placements",
                                    text: "21% CPV improvement with curated video ads.",
                                },
                                {
                                    title: "Consent Mode v2",
                                    text: "Balanced compliance & growth with GDPR readiness.",
                                },
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                                >
                                    <h3 className="font-semibold text-slate-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-[#6BB343] py-16 text-white text-center">
                    <div className="mx-auto max-w-3xl px-6">
                        <h2 className="text-3xl font-bold">Want results like this?</h2>
                        <p className="mt-2 text-lg text-white/80">
                            Let's automate your operations with scalable, real-time systems.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-slate-900 font-semibold shadow hover:bg-[#F15A29]"
                        >
                            Book a Strategy Call
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
};

export default FlaxitUpCaseStudy;
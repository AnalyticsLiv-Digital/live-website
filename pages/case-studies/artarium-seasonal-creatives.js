import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { generateBreadcrumbSchemas, generateCaseStudySchema } from "../../utils/schema";
import CaseStudyDownloadModal from "../../components/CaseStudyDownloadModal";
import { InlineWidget } from "react-calendly";

const ArtariumCaseStudy = () => {
    const [showCalendly, setShowCalendly] = useState(false);
    const handleCalendly = () => {
        setShowCalendly(true);
    }
    //pdfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    const cd = {
        slug: "artarium-seasonal-creatives",
        title: "Seasonal Creative Personalization on DV360 Increases Conversions by 30%",
        description:
            "Artarium crafts unique decor pieces to transform spaces and uplift moods.",
        coverimage:
            "https://analyticsliv.com/static/logo.png",
        id: "cs10",
        pdf: "https://storage.googleapis.com/website-bucket-uploads/cs/_%5BArtarium%5D%20Case%20Study%20Event%20Based%20Creatives%20.pdf",
    };

    const csSchema = generateCaseStudySchema(cd);
    const breadcrumbSchema = generateBreadcrumbSchemas(
        "https://analyticsliv.com/case-studies/artarium-seasonal-creatives"
    );

    return (
        <>
            <Head>
                <title>
                    Artarium — Seasonal Event-Based Creatives Drive Efficiency | AnalyticsLiv
                </title>
                <meta
                    name="description"
                    content="Seasonal Creative Personalization on DV360 Increases Conversions by 30%."
                />
                <link
                    rel="canonical"
                    href="https://analyticsliv.com/case-studies/artarium-seasonal-creatives"
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

            <main className="bg-white text-slate-800"
                style={{
                    fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"',
                }}>
                {/* HERO */}
                <section className="relative overflow-hidden border-b border-slate-200">
                    <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-emerald-700">
                                Case Study · DV360 · Retail
                            </p>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                                Seasonal Creative Personalization on DV360 Increases Conversions by 30%
                            </h1>
                            <p className="mt-5 text-lg text-slate-600">
                                Artarium crafts unique decor pieces to transform spaces and uplift moods.
                            </p>
                            <div className="mt-7 flex flex-wrap items-center gap-3">
                                <a href="/case-studies" className="rounded-2xl border border-slate-300 px-6 py-3">Back to Case Studies</a>
                                <button onClick={() => handleCalendly()} className="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow hover:opacity-90">Book a Strategy Call</button>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                { stat: "30%", label: "Conversion Uplift" },
                                { stat: "66%", label: "CPA Improvement" },
                                { stat: "-50%", label: "Spend Reduced" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
                                >
                                    <div className="text-3xl font-extrabold text-emerald-600">
                                        {item.stat}
                                    </div>
                                    <p className="text-sm mt-1">{item.label}</p>
                                </div>
                            ))}
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
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Background</h2>
                            <p className="text-slate-700">
                                Artarium crafts unique decor pieces to transform spaces and uplift moods.
                                With strong focus on design and quality, the brand brings artistic wonders
                                to life.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="h-16 w-48 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/cs/1743762353533510.png" alt="Artarium | AnalyticsLiv" />
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
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Underperforming Creatives",
                                    desc: "Generic visuals weren’t resonating with audiences.",
                                },
                                {
                                    title: "Limited Relevance",
                                    desc: "Campaigns missed cultural context during peak festive periods.",
                                },
                                {
                                    title: "Budget Waste",
                                    desc: "Spend not translating proportionally into conversions.",
                                },
                                {
                                    title: "Fragmented Journeys",
                                    desc: "Multiple user paths complicated optimization.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                                >
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* APPROACH + DOWNLOAD CASE STUDY */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center md:text-left">
                                Our Approach
                            </h2>
                            <ol className="relative border-l border-slate-200 pl-6 space-y-6">
                                {[
                                    {
                                        title: "Dual-Campaign Structure",
                                        desc: "General creatives + Holi-themed creatives launched in parallel.",
                                    },
                                    {
                                        title: "Audience & Geo Sync",
                                        desc: "Mapped festive creatives to regions and audiences celebrating Holi.",
                                    },
                                    {
                                        title: "Rapid Iteration",
                                        desc: "Weekly creative swap tests based on engagement + CPA.",
                                    },
                                    {
                                        title: "DV360 Hygiene",
                                        desc: "Tight frequency caps, exclusions, and inventory tuning.",
                                    },
                                ].map((step, i) => (
                                    <li key={i}>
                                        <span className="absolute -left-2.5 h-5 w-5 rounded-full bg-emerald-600 ring-4 ring-slate-100"></span>
                                        <p className="font-semibold">{step.title}</p>
                                        <p className="text-sm text-slate-600">{step.desc}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <CaseStudyDownloadModal
                            isOpen={true}
                            onClose={() => { }}
                            casestudy={cd}
                            parentContext="inline"
                        />
                    </div>
                </section>

                {/* RESULTS */}
                <section className="bg-slate-900 py-16 text-white">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Results</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { stat: "30%", desc: "Increase in Conversions" },
                                { stat: "66%", desc: "Improvement in CPA" },
                                { stat: "-50%", desc: "Reduced Spend" },
                                { stat: "Higher QoQ", desc: "Creative Engagement" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow"
                                >
                                    <div className="text-4xl font-extrabold text-emerald-400">
                                        {item.stat}
                                    </div>
                                    <p className="mt-1 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-slate-300 max-w-3xl mx-auto">
                            Seasonal creative alignment produced better conversion efficiency with half
                            the spend compared to the prior period.
                        </p>
                    </div>
                </section>

                {/* CONCLUSION */}
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <blockquote className="text-xl font-medium text-slate-800">
                            “Right-message, right-moment creative is the simplest lever to unlock paid
                            efficiency.”
                        </blockquote>
                        <p className="mt-4 text-slate-500">— Artarium + AnalyticsLiv</p>
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
                                    title: "Value-Based Bidding",
                                    desc: "Custom signals improve CPA predictability.",
                                },
                                {
                                    title: "Feed-based Display",
                                    desc: "Dynamic product creatives at scale.",
                                },
                                {
                                    title: "Geo Sequencing",
                                    desc: "State-wise rollouts aligned to calendars.",
                                },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                                >
                                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                    <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-emerald-600 py-16 text-white text-center">
                    <div className="mx-auto max-w-3xl px-6">
                        <h2 className="text-3xl font-bold">Want results like this?</h2>
                        <p className="mt-2 text-lg text-emerald-100">
                            Let’s build data-driven marketing success together.
                        </p>
                    </div>
                    <div className="mt-6">
                        <Link
                            href="/contact"
                            className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow hover:opacity-90"
                        >
                            Book a Call
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ArtariumCaseStudy;

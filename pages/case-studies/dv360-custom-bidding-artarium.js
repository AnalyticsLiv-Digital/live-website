import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { generateBreadcrumbSchemas, generateCaseStudySchema } from "../../utils/schema";
import CaseStudyDownloadModal from "../../components/CaseStudyDownloadModal";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

const page = () => {

    const [showCalendly, setShowCalendly] = useState(false);

    const handleCalendly = () => {
        setShowCalendly(true);
    }

    const cd = {
        slug: 'dv360-custom-bidding-artarium',
        title: '13x Conversions, 95% Lower CPA, 42% Higher CTR using DV360 Custom Bidding',
        description: 'Artarium was born from a passion for art and craftsmanship. They create unique decor pieces designed to transform spaces and uplift moods. With a keen eye for design and quality, they bring artistic wonders to life, making every space feel inspiring and elegant.',
        coverimage: 'https://storage.googleapis.com/website-bucket-uploads/cs/1743762207479201.png',
        id: 'cs1',
        pdf: 'https://storage.googleapis.com/website-bucket-uploads/cs/1743762198760388.pdf',
    }
    const csSchema = generateCaseStudySchema(cd);
    const breadcrumbSchema = generateBreadcrumbSchemas('https://analyticsliv.com/case-studies/dv360-custom-bidding-artarium');
    return (
        <>
            <Head>
                <title>
                    Artarium Case Study — 13x More Conversions & 95% Lower CPA with DV360 Custom Bidding | AnalyticsLiv
                </title>
                <meta
                    name="description"
                    content="See how Artarium achieved 13x more conversions, 95% lower CPA, and 42% higher CTR by leveraging DV360 Custom Bidding. Full case study by AnalyticsLiv."
                />
                <link rel="canonical" href="https://analyticsliv.com/case-studies/dv360-custom-bidding-artarium" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(csSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbSchema),
                    }}
                />
            </Head>

            <main className="bg-white text-slate-800" style={{
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
                                13x Conversions, 95% Lower CPA, 42% Higher CTR using DV360
                                Custom Bidding
                            </h1>
                            <p className="mt-5 text-lg text-slate-600">
                                Artarium was born from a passion for art and craftsmanship.
                            </p>
                            <div class="mt-7 flex flex-wrap items-center gap-3 2xl:gap-6">
                                <a href="/case-studies" class="rounded-2xl border border-slate-300 px-6 py-3">Back to Case Studies</a>
                                <button onClick={() => handleCalendly()} class="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow hover:opacity-90">Book a Strategy Call</button>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                { stat: "13×", text: "More Conversions" },
                                { stat: "95%", text: "CPA Reduction" },
                                { stat: "42%", text: "CTR Improvement" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
                                >
                                    <div className="text-3xl font-extrabold text-emerald-600">
                                        {item.stat}
                                    </div>
                                    <p className="text-sm mt-1">{item.text}</p>
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
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Background
                            </h2>
                            <p className="text-slate-700">
                                Artarium was born from a passion for art and craftsmanship. They
                                create unique decor pieces designed to transform spaces and
                                uplift moods. With a keen eye for design and quality, they bring
                                artistic wonders to life, making every space feel inspiring and
                                elegant.
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
                                    title: "Cost Efficiency",
                                    text: "Reduce CPA while scaling conversions and controlling spend.",
                                },
                                {
                                    title: "Signal Quality",
                                    text: "Train custom bidding with funnel-weighted high-intent signals.",
                                },
                                {
                                    title: "Audience Progression",
                                    text: "Nudge users from awareness to purchase with progressive weights.",
                                },
                                {
                                    title: "Learning Stability",
                                    text: "Maintain spend during learning to avoid model reset.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                                >
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-sm text-slate-600 mt-2">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* APPROACH + FORM */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center md:text-left">
                                Our Approach
                            </h2>
                            <ol className="relative border-l border-slate-200 pl-6 space-y-6">
                                {[
                                    {
                                        title: "Funnel-Weighted Model",
                                        text: "Custom bidding with higher weight for purchase + mid-funnel events.",
                                    },
                                    {
                                        title: "Learning Phase Strategy",
                                        text: "Initial maximize-spend to stabilize training across audiences.",
                                    },
                                    {
                                        title: "Target Value Alignment",
                                        text: "Weekly 5–10% tuning to align line items to target value.",
                                    },
                                    {
                                        title: "Signal Refinement",
                                        text: "Prioritized high-intent users for smarter bid allocation.",
                                    },
                                ].map((step, i) => (
                                    <li key={i}>
                                        <span className="absolute -left-2.5 h-5 w-5 rounded-full bg-emerald-600 ring-4 ring-slate-100"></span>
                                        <p className="font-semibold">{step.title}</p>
                                        <p className="text-sm text-slate-600">{step.text}</p>
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
                                { stat: "13×", text: "Increase in Conversions" },
                                { stat: "95%", text: "Reduction in CPA" },
                                { stat: "42%", text: "Increase in CTR" },
                                { stat: "Faster", text: "Optimization Cycles" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow"
                                >
                                    <div className="text-4xl font-extrabold text-emerald-400">
                                        {item.stat}
                                    </div>
                                    <p className="mt-1 text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-slate-300 max-w-3xl mx-auto">
                            Custom bidding produced 13× conversions, 95% lower CPA, and 42%
                            higher CTR by aligning value signals with intent.
                        </p>
                    </div>
                </section>

                {/* CONCLUSION */}
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <blockquote className="text-xl font-medium text-slate-800">
                            “Aligning bids to true customer value turns DV360 into a precision
                            engine for profitable growth.”
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
                                    title: "Seasonal Creative Playbooks",
                                    text: "Event-based creatives that lift conversion rates.",
                                },
                                {
                                    title: "Audience Laddering",
                                    text: "Progressive remarketing to purchase.",
                                },
                                {
                                    title: "Creative QA Framework",
                                    text: "Preventing waste with proactive QA.",
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
                <section className="bg-emerald-600 py-16 text-white text-center">
                    <div className="mx-auto max-w-3xl px-6">
                        <h2 className="text-3xl font-bold">Want results like this?</h2>
                        <p className="mt-2 text-lg text-emerald-100">
                            Let’s build data-driven marketing success together.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-slate-900 font-semibold shadow hover:opacity-90"
                        >
                            Book a Strategy Call
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default page

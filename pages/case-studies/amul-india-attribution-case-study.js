import Head from "next/head";
import Link from "next/link";
import { generateBreadcrumbSchemas, generateCaseStudySchema } from "../../utils/schema";
import CaseStudyDownloadModal from "../../components/CaseStudyDownloadModal";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

const AmulIndiaCaseStudy = () => {

    const [showCalendly, setShowCalendly] = useState(false);

    const handleCalendly = () => {
        setShowCalendly(true);
    }

    const cd = {
        slug: "amul-india-attribution-case-study",
        title: "Amul India - Attribution & Insights Across Channels",
        description:
            "How Amul India partnered with AnalyticsLiv to implement attribution modeling, boosting ROAS by 320% across dairy e-commerce.",
        coverimage:
            "https://storage.googleapis.com/website-bucket-uploads/cs/amul-india-attribution-case-study-attribution-case-study-cover.png",
        id: "cs7",
        pdf: "https://storage.googleapis.com/website-bucket-uploads/cs/amul-india-attribution-case-study-attribution-growth-case-study.pdf",
    };

    const csSchema = generateCaseStudySchema(cd);
    const breadcrumbSchema = generateBreadcrumbSchemas(
        "https://analyticsliv.com/case-studies/amul-india-attribution-case-study"
    );

    return (
        <>
            <Head>
                <title>
                    Amul India - +320% ROAS with Cross-Channel Attribution | AnalyticsLiv
                </title>
                <meta
                    name="description"
                    content="Discover how Amul India partnered with AnalyticsLiv to implement attribution modeling, boosting ROAS by 320% across dairy e-commerce. Read the full case study."
                />
                <link
                    rel="canonical"
                    href="https://analyticsliv.com/case-studies/amul-india"
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
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50"></div>
                    <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
                        <div className="grid items-center gap-10 md:grid-cols-2">
                            <div>
                                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-emerald-700">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Dairy · E-commerce
                                </p>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                                    {cd.title}
                                </h1>
                                <h2 className="mt-5 max-w-2xl text-lg text-slate-600">Unified attribution modeling and GA4-driven measurement enabled Amul to scale dairy e-commerce with +320% ROAS.</h2>
                                <div className="mt-7 flex flex-wrap items-center gap-3">
                                    <a href="/case-studies" className="rounded-2xl border border-slate-300 px-6 py-3">Back to Case Studies</a>
                                    <button onClick={() => handleCalendly()} className="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow hover:opacity-90">Book a Strategy Call</button>
                                </div>
                            </div>
                            <div className="order-first md:order-none">
                                <div className="relative mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-3xl font-extrabold text-slate-900">+320%</div><div className="mt-1 text-sm text-slate-600">ROAS Increase</div></div>
                                        <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-3xl font-extrabold text-slate-900">‑27%</div><div className="mt-1 text-sm text-slate-600">CPA Reduction</div></div>
                                        <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-3xl font-extrabold text-slate-900">+40%</div><div className="mt-1 text-sm text-slate-600">New-to-Brand Customers</div></div>
                                        <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-3xl font-extrabold text-slate-900">99%</div><div className="mt-1 text-sm text-slate-600">Attribution Accuracy</div></div>
                                    </div>
                                </div>
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

                {/* BACKGROUND & CHALLENGE */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-3">
                        <div className="md:col-span-1 space-y-10">
                            <h2 className="text-2xl font-bold text-slate-900">Background & Challenge</h2>
                            <div className="flex justify-start ml-24">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Amul_official_logo.svg.png" alt="Amul India" className="h-16" />
                            </div>
                        </div>
                        <div className="md:col-span-2 space-y-4 text-slate-700">
                            <p>Amul faced fragmented tracking across digital channels, making it difficult to attribute sales to campaigns. Rising CPAs and lack of incrementality insights limited efficient budget allocation.</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Inconsistent event taxonomy across GA4 and CRM</li>
                                <li>No unified attribution view across campaigns</li>
                                <li>High CPAs in prospecting channels</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* APPROACH */}
                <section className="bg-slate-50 py-16 border-y border-slate-200">
                    <div className="max-w-7xl mx-auto px-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Approach</h2>
                        <div className="px-6 grid gap-10 md:grid-cols-2 items-start">
                            <div>
                                <ol className="relative border-l border-slate-200 pl-6 space-y-6">
                                    <li>
                                        <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-emerald-600 ring-4 ring-slate-100"></div>
                                        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                                            <div className="text-xs font-semibold tracking-wider text-slate-500">01. Tracking & Data</div>
                                            <p className="mt-1">Aligned GA4 + Floodlight with CRM data. Introduced consent mode and durable identifiers.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-indigo-600 ring-4 ring-slate-100"></div>
                                        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                                            <div className="text-xs font-semibold tracking-wider text-slate-500">02. Attribution & Modeling</div>
                                            <p className="mt-1">Implemented cross-channel attribution in GA4 + MMM baselines to inform budget reallocation.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-amber-600 ring-4 ring-slate-100"></div>
                                        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                                            <div className="text-xs font-semibold tracking-wider text-slate-500">03. Optimization</div>
                                            <p className="mt-1">Shifted budgets to high-incrementality channels. Improved creatives and funnels for dairy ecommerce.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-rose-600 ring-4 ring-slate-100"></div>
                                        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                                            <div className="text-xs font-semibold tracking-wider text-slate-500">04. Reporting & Insights</div>
                                            <p className="mt-1">Delivered Looker dashboards for CMO with clear ROAS, CPA, incrementality and cohort trends.</p>
                                        </div>
                                    </li>
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
                    </div>
                </section>

                {/* RESULTS */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-8 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Results That Matter</h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-4">
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="text-sm font-semibold text-slate-900">ROAS</div><div className="mt-1 text-2xl font-extrabold text-slate-900">+320%</div></div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="text-sm font-semibold text-slate-900">CPA</div><div className="mt-1 text-2xl font-extrabold text-slate-900">‑27%</div></div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="text-sm font-semibold text-slate-900">New Customers</div><div className="mt-1 text-2xl font-extrabold text-slate-900">+40%</div></div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="text-sm font-semibold text-slate-900">Attribution Accuracy</div><div className="mt-1 text-2xl font-extrabold text-slate-900">99%</div></div>
                        </div>
                        <div className="mt-10 text-center">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-sm hover:opacity-90">Talk to Us</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-slate-900 py-14 text-white text-center">
                    <h3 className="text-2xl font-bold">Want results like these?</h3>
                    <p className="mt-2 text-slate-300">Let's build your next success story-start with a free strategy call.</p>
                    <div className="mt-6">
                        <Link href="/contact" className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow hover:opacity-90">Book a Call</Link>
                    </div>
                </section>
            </main>
        </>
    );
};

export default AmulIndiaCaseStudy;
import Head from "next/head";
import Link from "next/link";
import { generateBreadcrumbSchemas, generateCaseStudySchema } from "../../utils/schema";
import CaseStudyDownloadModal from "../../components/CaseStudyDownloadModal";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

const ConsentModeV2CaseStudy = () => {

    const [showCalendly, setShowCalendly] = useState(false);

    const handleCalendly = () => {
        setShowCalendly(true);
    }

    const cd = {
        slug: "consent-mode-v2",
        title: "Balancing Compliance & Growth with Consent Mode v2",
        description:
            "How a fast-growing ecommerce brand achieved GDPR compliance while recovering lost conversions and unlocking modeled insights in GA4 and Google Ads.",
        coverimage:
            "https://storage.googleapis.com/website-bucket-uploads/cs/1755864560957320.png",
        id: "cs5",
        pdf: "https://storage.googleapis.com/website-bucket-uploads/cs/1755864551345419.pdf",
    };

    const csSchema = generateCaseStudySchema(cd);
    const breadcrumbSchema = generateBreadcrumbSchemas(
        "https://analyticsliv.com/case-studies/consent-mode-v2"
    );

    return (
        <>
            <Head>
                <title>
                    Consent Mode v2 - 100% GDPR Compliance & Smarter Attribution | AnalyticsLiv
                </title>
                <meta
                    name="description"
                    content="Discover how a fast-growing ecommerce brand achieved 100% GDPR compliance while recovering lost conversions with Consent Mode v2 and GTM. Read the full case study by AnalyticsLiv."
                />
                <link
                    rel="canonical"
                    href="https://analyticsliv.com/case-studies/consent-mode-v2"
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
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-indigo-700">
                                Case Study · Ecommerce
                            </p>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                                {cd.title}
                            </h1>
                            <h2 className="mt-5 text-lg text-slate-600">How a <strong>fast-growing ecommerce brand</strong> achieved GDPR compliance while recovering lost conversions and unlocking modeled insights in GA4 and Google Ads.</h2>
                            <div className="mt-7 flex flex-wrap items-center gap-3 2xl:gap-6">
                                <a href="/case-studies" className="rounded-2xl border border-slate-300 px-6 py-3">Back to Case Studies</a>
                                <button onClick={() => handleCalendly()} className="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow hover:opacity-90">Book a Strategy Call</button>
                            </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-indigo-600">
                                    100%
                                </div>
                                <p className="text-sm mt-1">GDPR Readiness</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-indigo-600">
                                    80%
                                </div>
                                <p className="text-sm mt-1">Reduction in Manual Effort</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-indigo-600">
                                    Smarter
                                </div>
                                <p className="text-sm mt-1">Attribution Decisions</p>
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
                            <p className="text-slate-700">This ecommerce brand relied heavily on <strong>Google Ads</strong> and <strong>organic search</strong> to drive growth. With tightening privacy regulations such as GDPR and ePrivacy Directive, the company faced a challenge: how to remain compliant while still capturing the data needed to scale campaigns effectively.</p>
                        </div>
                        {/* <div className="flex justify-center">
                            <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/consent_logo.png" alt="Consent Mode" className="h-16" />
                        </div> */}
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
                                    title: "Compliance Risks",
                                    desc: "Tags and cookies were firing without consent, exposing the brand to penalties.",
                                },
                                {
                                    title: "Data Gaps",
                                    desc: "Conversions were missing when users declined cookies, skewing reports.",
                                },
                                {
                                    title: "Attribution Blind Spots",
                                    desc: "Marketing couldn't clearly link ad spend to actual results.",
                                },
                                {
                                    title: "Scalability Issues",
                                    desc: "Every new update required manual fixes, creating inconsistency.",
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
                                        title: "OneTrust CMP Integration",
                                        desc: "Deployed OneTrust to capture user choices seamlessly across web & app.",
                                    },
                                    {
                                        title: "GTM + Consent Mode v2",
                                        desc: "Configured ad_storage, analytics_storage, and functionality_storage dynamically. Enabled GA4 cookieless pings for modeled conversions.",
                                    },
                                    {
                                        title: "Future-Proof Validation",
                                        desc: "Validated consent signals with DebugView & Tag Assistant. Built scalable GTM framework for easy updates.",
                                    },
                                ].map((a, i) => (
                                    <li key={i}>
                                        <span className="absolute -left-2.5 h-5 w-5 rounded-full bg-indigo-600 ring-4 ring-slate-100"></span>
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
                                color="indigo"
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
                                { value: "100%", label: "GDPR Readiness" },
                                { value: "80%", label: "Reduction in Manual Effort" },
                                { value: "Smarter", label: "Attribution with Modeled Conversions" },
                                { value: "Scalable", label: "Future-proof GTM Framework" },
                            ].map((r, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow"
                                >
                                    <div className="text-4xl font-extrabold text-indigo-400">
                                        {r.value}
                                    </div>
                                    <p className="mt-1 text-sm">{r.label}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-slate-300 max-w-3xl mx-auto">
                            The brand balanced <strong>compliance</strong> and <strong>growth</strong>, protecting user trust while regaining lost insights through GA4 modeled conversions.
                        </p>
                    </div>
                </section>

                {/* CONCLUSION */}
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <blockquote className="text-xl font-medium text-slate-800">
                            "With Consent Mode v2 and OneTrust CMP, AnalyticsLiv helped us achieve GDPR compliance without sacrificing insights. We now make smarter, data-driven budget decisions with confidence."
                        </blockquote>
                        <p className="mt-4 text-slate-500">— Ecommerce Brand</p>
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
                                    title: "Scaling Paid Media ROI for a D2C Brand",
                                    text: "Improved ROAS by 320% through PPC optimization.",
                                },
                                {
                                    title: "Driving Conversions with CRO for BFSI",
                                    text: "Experimentation framework delivered 65% increase in leads.",
                                },
                                {
                                    title: "Data Pipelines for Commerce Analytics",
                                    text: "Automated reporting improved data accuracy by 95%.",
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
                <section className="bg-indigo-600 py-16 text-white text-center">
                    <div className="mx-auto max-w-3xl px-6">
                        <h2 className="text-3xl font-bold">Want results like this?</h2>
                        <p className="mt-2 text-lg text-indigo-100">
                            Let's build privacy-first, data-smart solutions together.
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
    );
};

export default ConsentModeV2CaseStudy;
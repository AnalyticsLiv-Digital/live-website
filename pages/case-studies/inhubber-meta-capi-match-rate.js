import Head from "next/head";
import Link from "next/link";
import { generateBreadcrumbSchemas, generateCaseStudySchema } from "../../utils/schema";
import CaseStudyDownloadModal from "../../components/CaseStudyDownloadModal";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

const InhubberMetaCs = () => {

    const [showCalendly, setShowCalendly] = useState(false);

    const handleCalendly = () => {
        setShowCalendly(true);
    }

    const cd = {
        slug: "inhubber-meta-capi-match-rate",
        title: "Boosting Meta CAPI Match Rate in a Cookieless World",
        description:
            "How Inhubber increased Meta CAPI match rates from 43% to 87% by fixing identifiers, syncing client-server events, and enriching user data.",
        coverimage:
            "https://storage.googleapis.com/website-bucket-uploads/cs/1744002270316568.png",
        id: "cs2",
        pdf: "https://storage.googleapis.com/website-bucket-uploads/cs/Case%20Study%20_%20Boosting%20Facebook_Meta%20CAPI%20Match%20Rate%20in%20a%20Cookieless%20World.pdf",
    };

    const csSchema = generateCaseStudySchema(cd);
    const breadcrumbSchema = generateBreadcrumbSchemas(
        "https://analyticsliv.com/case-studies/inhubber-meta-capi-match-rate"
    );

    return (
        <>
            <Head>
                <title>
                    Boosting Meta CAPI Match Rate in a Cookieless World | AnalyticsLiv
                </title>
                <meta
                    name="description"
                    content="How Inhubber increased Meta CAPI match rates from 43% to 87% by fixing identifiers, syncing client-server events, and enriching user data."
                />
                <link
                    rel="canonical"
                    href="https://analyticsliv.com/case-studies/inhubber-meta-capi-match-rate"
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
                                Case Study · SaaS · Server-Side
                            </p>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                                {cd.title}
                            </h1>
                            <h2 className="mt-5 text-lg text-slate-600">How <strong>Inhubber</strong>, a German AI-powered contract management platform, increased its Meta CAPI match rate from <strong>43% to 87%</strong> with data enrichment and client–server synchronization.</h2>
                            <div class="mt-7 flex flex-wrap items-center gap-3 2xl:gap-6">
                                <a href="/case-studies" class="rounded-2xl border border-slate-300 px-6 py-3">Back to Case Studies</a>
                                <button onClick={() => handleCalendly()} class="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow hover:opacity-90">Book a Strategy Call</button>
                            </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-indigo-600">
                                    87%
                                </div>
                                <p className="text-sm mt-1">CAPI Match Rate</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-indigo-600">
                                    8/10
                                </div>
                                <p className="text-sm mt-1">Event Match Quality</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-indigo-600">
                                    Cookieless
                                </div>
                                <p className="text-sm mt-1">Future-Ready Setup</p>
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
                            <p className="text-slate-700"><strong>Inhubber</strong>, a German SaaS platform for
                                AI-powered contract management, is trusted for its precision, security, and compliance.
                                But with iOS 14+ restrictions and third-party cookie loss, their Meta CAPI match rates
                                dropped sharply — hurting attribution accuracy and campaign optimization.</p>
                        </div>
                        {/* <div className="flex justify-center">
                            <div className="h-16 w-48 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Shoebacca%20logo.png" alt="Shoebacca | AnalyticsLiv" />
                            </div>
                        </div> */}
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
                                    title: "Low CAPI Match Rate",
                                    desc: "Server-side events weren’t consistently matched with user profiles.",
                                },
                                {
                                    title: "Missing Identifiers",
                                    desc: "Key params (fbc, fbp) often absent, reducing match quality.",
                                },
                                {
                                    title: "Incomplete User Data",
                                    desc: "Emails, phone numbers, and addresses missing or inconsistent.",
                                },
                                {
                                    title: "No Client–Server Sync",
                                    desc: "Pixel & CAPI didn’t share event_id, causing duplication or loss.",
                                },
                                {
                                    title: "Implementation Errors",
                                    desc: "Improper hashing & formatting lowered Meta Event Match Quality.",
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
                                        title: "Event Parameter Optimization",
                                        desc: "Ensured fbc/fbp consistently included in server-side events.",
                                    },
                                    {
                                        title: "Client–Server Sync",
                                        desc: "Paired Pixel + CAPI via shared event_id for stronger matching.",
                                    },
                                    {
                                        title: "User Data Enhancement",
                                        desc: "Standardized, enriched, and hashed user details before sending.",
                                    },
                                    {
                                        title: "Implementation Refinement",
                                        desc: "Fixed formatting, missing fields, and incorrect hashing in CAPI.",
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
                                { value: "87%", label: "CAPI Match Rate" },
                                { value: "8/10", label: "Event Match Quality" },
                                { value: "↑", label: "Stronger Attribution" },
                                { value: "Future-Ready", label: "Cookieless Setup" },
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
                            Inhubber improved attribution accuracy and ad delivery by raising match rate from <strong>43% to 87%</strong> with enriched server-side data.
                        </p>
                    </div>
                </section>

                {/* CONCLUSION */}
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <blockquote className="text-xl font-medium text-slate-800">
                            “Through client–server sync and data enrichment, AnalyticsLiv helped us more than double our Meta CAPI match rate, making tracking resilient for a cookieless future.”
                        </blockquote>
                        <p className="mt-4 text-slate-500">— Inhubber</p>
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
                                    title: "We Sort It Server-Side",
                                    text: "Improved attribution with consent-safe sGTM.",
                                    link: "/case-studies/we-sort-it-facebook-ads"
                                },
                                {
                                    title: "Consent Mode v2",
                                    text: "Balanced compliance & growth with GDPR readiness.",
                                    link: "/case-studies/consent-mode-v2"

                                },
                                {
                                    title: "Shoebacca Performance Max",
                                    text: "26% ROAS improvement via new customer bidding.",
                                    link: "/case-studies/shoebacca-performance-max"
                                },
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.link}
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
                            Let’s fix your Meta CAPI setup and future-proof tracking in a cookieless world.
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

export default InhubberMetaCs;

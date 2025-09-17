import Head from "next/head";
import Link from "next/link";
import { generateBreadcrumbSchemas, generateCaseStudySchema } from "../../utils/schema";
import CaseStudyDownloadModal from "../../components/CaseStudyDownloadModal";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

const ShoebaccaCaseStudy = () => {

    const [showCalendly, setShowCalendly] = useState(false);

    const handleCalendly = () => {
        setShowCalendly(true);
    }

    const cd = {
        slug: "shoebacca-performance-max",
        title: "Shoebacca Achieves 26% Higher ROAS with Performance Max",
        description:
            "How Shoebacca, a Texas-based e-commerce brand, expanded new customer acquisition and scaled revenue with Performance Max optimization.",
        coverimage:
            "https://storage.googleapis.com/website-bucket-uploads/cs/1744002270316568.png",
        id: "cs2",
        pdf: "https://storage.googleapis.com/website-bucket-uploads/cs/1744002263636865.pdf",
    };

    const csSchema = generateCaseStudySchema(cd);
    const breadcrumbSchema = generateBreadcrumbSchemas(
        "https://analyticsliv.com/case-studies/shoebacca-performance-max"
    );

    return (
        <>
            <Head>
                <title>
                    Shoebacca — 26% Higher ROAS & Lower CPA via Performance Max | AnalyticsLiv
                </title>
                <meta
                    name="description"
                    content="Discover how Shoebacca achieved 26% higher ROAS and lower CPA by prioritizing new customer acquisition with Performance Max. Read the full case study by AnalyticsLiv."
                />
                <link
                    rel="canonical"
                    href="https://analyticsliv.com/case-studies/shoebacca-performance-max"
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
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-sky-700">
                                Case Study · E-commerce
                            </p>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                                {cd.title}
                            </h1>
                            <h2 className="mt-5 text-lg text-slate-600">How <strong>Shoebacca</strong>, a Texas-based e-commerce brand, expanded new customer acquisition and scaled revenue with Performance Max optimization.</h2>
                            <div class="mt-7 flex flex-wrap items-center gap-3 2xl:gap-6">
                                <a href="/case-studies" class="rounded-2xl border border-slate-300 px-6 py-3">Back to Case Studies</a>
                                <button onClick={() => handleCalendly()} class="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow hover:opacity-90">Book a Strategy Call</button>
                            </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-sky-600">
                                    26%
                                </div>
                                <p className="text-sm mt-1">ROAS Improvement</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-sky-600">
                                    Lower
                                </div>
                                <p className="text-sm mt-1">Cost Per Acquisition</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-sky-600">
                                    More
                                </div>
                                <p className="text-sm mt-1">New Customer Share</p>
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
                            <p className="text-slate-700"><strong>Shoebacca</strong> is a Texas-based online retailer offering one of the largest
                                assortments of footwear and apparel. Founded in 2002 with a strong community ethos, the brand
                                emphasizes hassle-free shopping with free shipping, returns, and a 110% price match guarantee.</p>
                        </div>
                        <div className="flex justify-center">
                            <div className="h-16 w-48 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Shoebacca%20logo.png" alt="Shoebacca | AnalyticsLiv" />
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
                                    title: "Limited New Users",
                                    desc: "Revenue was heavily dependent on retargeting existing customers.",
                                },
                                {
                                    title: "Scaling Challenges",
                                    desc: "Difficulty in acquiring new customers efficiently while maintaining ROAS.",
                                },
                                {
                                    title: "Attribution Gaps",
                                    desc: "Needed clarity on the real contribution of new vs. existing customer campaigns.",
                                },
                                {
                                    title: "Creative Demands",
                                    desc: "High-quality creatives were essential to drive conversions at scale.",
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
                                        title: "New Customer Bidding",
                                        desc: "Implemented dual bidding strategies: exclusive new customer bidding and higher weighting for new customers to compare performance.",
                                    },
                                    {
                                        title: "Advanced Audience Targeting",
                                        desc: "Used Customer Match, site visitors, custom intent, interest-based, and demographic signals to refine audience targeting.",
                                    },
                                    {
                                        title: "High-Quality Creatives",
                                        desc: "Designed engaging creatives to improve user experience and conversions.",
                                    },
                                    {
                                        title: "Continuous Optimization",
                                        desc: "Monitored campaign performance and iteratively optimized for better efficiency.",
                                    },
                                ].map((a, i) => (
                                    <li key={i}>
                                        <span className="absolute -left-2.5 h-5 w-5 rounded-full bg-sky-600 ring-4 ring-slate-100"></span>
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
                                color="sky"
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
                                { value: "26%", label: "Higher ROAS" },
                                { value: "Lower", label: "Acquisition Cost" },
                                { value: "More", label: "New Customer Share" },
                                { value: "Strategic", label: "Brand Visibility" },
                            ].map((r, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow"
                                >
                                    <div className="text-4xl font-extrabold text-sky-400">
                                        {r.value}
                                    </div>
                                    <p className="mt-1 text-sm">{r.label}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-slate-300 max-w-3xl mx-auto">
                            Shoebacca improved <strong>new customer acquisition</strong> and achieved <strong>26% higher ROAS</strong> by implementing a
                            data-driven Performance Max strategy.
                        </p>
                    </div>
                </section>

                {/* CONCLUSION */}
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <blockquote className="text-xl font-medium text-slate-800">
                            “AnalyticsLiv’s Performance Max optimization gave us the clarity and tools to acquire new customers while improving ROAS — a true growth enabler.”
                        </blockquote>
                        <p className="mt-4 text-slate-500">— Shoebacca</p>
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
                                    title: "DV360 Ad Placement Optimization",
                                    text: "21% CPV improvement with curated placements.",
                                },
                                {
                                    title: "Consent Mode v2 Implementation",
                                    text: "Balanced compliance & growth with GDPR readiness.",
                                },
                                {
                                    title: "Custom Bidding in DV360",
                                    text: "Value-based signals improved ROAS by 41%.",
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
                <section className="bg-sky-600 py-16 text-white text-center">
                    <div className="mx-auto max-w-3xl px-6">
                        <h2 className="text-3xl font-bold">Want results like this?</h2>
                        <p className="mt-2 text-lg text-sky-100">
                            Let’s scale your e-commerce performance with advanced bidding and targeting strategies.
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

export default ShoebaccaCaseStudy;

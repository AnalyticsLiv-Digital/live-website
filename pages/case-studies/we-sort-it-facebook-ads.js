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
        slug: "we-sort-it-facebook-ads",
        title: "We Sort It Achieves 180% More Leads & 60% Lower CPL with Facebook Advantage Targeting",
        description:
            "We Sort It is a New Zealand-based brand offering professional cleaning and lawn mowing services for both residential and commercial clients. With a focus on quality, reliability, and sustainability, their services include regular cleaning, deep cleaning, garden maintenance, lawn care, and more.",
        coverimage:
            "https://storage.googleapis.com/website-bucket-uploads/cs/1733729425065265.png",
        id: "cs3",
        pdf: "https://storage.googleapis.com/website-bucket-uploads/cs/1733729399146434.pdf",
    };

    const csSchema = generateCaseStudySchema(cd);
    const breadcrumbSchema = generateBreadcrumbSchemas(
        "https://analyticsliv.com/case-studies/we-sort-it-facebook-ads"
    );

    return (
        <>
            <Head>
                <title>We Sort It Case Study — 180% More Leads & 60% Lower CPL with Facebook Ads</title>
                <meta name="description" content='Discover how We Sort It, a New Zealand cleaning and lawn care brand, boosted leads by 180% and reduced CPL by 60% using Facebook Advantage Detailed Targeting.' />
                <link
                    rel="canonical"
                    href="https://analyticsliv.com/case-studies/we-sort-it-facebook-ads"
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
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-blue-700">
                                Case Study · Lead Generation
                            </p>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                                {cd.title}
                            </h1>
                            <h2 className="mt-5 text-lg text-slate-600">How <strong>We Sort It</strong>, a New Zealand-based cleaning and lawn care brand, maximized lead generation efficiency through Facebook Advantage Detailed Targeting.</h2>
                            <div class="mt-7 flex flex-wrap items-center gap-3 2xl:gap-6">
                                <a href="/case-studies" class="rounded-2xl border border-slate-300 px-6 py-3">Back to Case Studies</a>
                                <button onClick={() => handleCalendly()} class="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow hover:opacity-90">Book a Strategy Call</button>
                            </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-blue-600">
                                    +180%
                                </div>
                                <p className="text-sm mt-1">Lead Volume</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-blue-600">
                                    -60%
                                </div>
                                <p className="text-sm mt-1">Cost per Lead</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                                <div className="text-3xl font-extrabold text-blue-600">
                                    Higher
                                </div>
                                <p className="text-sm mt-1">Qualified Leads</p>
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
                            <p className="text-slate-700"><strong>We Sort It</strong> is a New Zealand-based brand offering professional cleaning and lawn mowing services for both residential and commercial clients. With a focus on quality, reliability, and sustainability, their services include regular cleaning, deep cleaning, garden maintenance, lawn care, and more.</p>
                        </div>
                        <div className="flex justify-center">
                            <div className="h-20 w-48 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/we_sort_it_logo.png" alt="We Sort It | AnalyticsLiv" />
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
                                    title: "Low Lead Volume",
                                    desc: "Few qualified leads were generated, limiting growth.",
                                },
                                {
                                    title: "High CPL",
                                    desc: "Acquiring leads was too expensive given the low-cost services.",
                                },
                                {
                                    title: "Narrow Targeting",
                                    desc: "Postal-code and interest targeting limited reach and efficiency.",
                                },
                                {
                                    title: "Scalability",
                                    desc: "Needed a sustainable way to grow without losing efficiency.",
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
                                        title: "Detailed Audit",
                                        desc: "Reviewed past performance and identified weak targeting and high CPL as bottlenecks.",
                                    },
                                    {
                                        title: "Advantage Detailed Targeting",
                                        desc: "Enabled Facebook’s machine learning to expand beyond selected targeting when beneficial.",
                                    },
                                    {
                                        title: "Audience Refinement",
                                        desc: "Balanced postal code targeting with broader signals to reach new high-intent users.",
                                    },
                                    {
                                        title: "Performance Validation",
                                        desc: "Tracked lead quality feedback from the client to confirm results matched business objectives.",
                                    },
                                ].map((a, i) => (
                                    <li key={i}>
                                        <span className="absolute -left-2.5 h-5 w-5 rounded-full bg-blue-600 ring-4 ring-slate-100"></span>
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
                                color="blue"
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
                                { value: "+180%", label: "Lead Volume" },
                                { value: "-60%", label: "Cost per Lead" },
                                { value: "Higher", label: "Qualified Leads" },
                                { value: "Sustainable", label: "Scalable Growth" },
                            ].map((r, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow"
                                >
                                    <div className="text-4xl font-extrabold text-blue-400">
                                        {r.value}
                                    </div>
                                    <p className="mt-1 text-sm">{r.label}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-slate-300 max-w-3xl mx-auto">
                            By leveraging <strong>Facebook Advantage Detailed Targeting</strong>, We Sort It scaled lead generation efficiently, improving both volume and cost per lead.
                        </p>
                    </div>
                </section>

                {/* CONCLUSION */}
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <blockquote className="text-xl font-medium text-slate-800">
                            “With Facebook Advantage Detailed Targeting, AnalyticsLiv helped us increase lead volume by 180% while reducing CPL by 60% - a transformative outcome.”
                        </blockquote>
                        <p className="mt-4 text-slate-500">— We Sort It</p>
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
                <section className="bg-blue-600 py-16 text-white text-center">
                    <div className="mx-auto max-w-3xl px-6">
                        <h2 className="text-3xl font-bold">Want results like this?</h2>
                        <p className="mt-2 text-lg text-blue-100">
                            Let’s maximize your lead generation efficiency with advanced targeting.
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


// import Head from "next/head";
// import Link from "next/link";
// import { generateBreadcrumbSchemas, generateCaseStudySchema } from "../../utils/schema";
// import CaseStudyDownloadModal from "../../components/CaseStudyDownloadModal";
// import { useState } from "react";
// import { InlineWidget } from "react-calendly";

// const page = () => {

//     const [showCalendly, setShowCalendly] = useState(false);

//     const handleCalendly = () => {
//         setShowCalendly(true);
//     }

//     const cd = {
//         slug: "we-sort-it-facebook-ads",
//         title: "We Sort It Case Study — 180% More Leads & 60% Lower CPL with Facebook Ads",
//         description:
//             "Discover how We Sort It, a New Zealand cleaning and lawn care brand, boosted leads by 180% and reduced CPL by 60% using Facebook Advantage Detailed Targeting.",
//         coverimage:
//             "https://storage.googleapis.com/website-bucket-uploads/cs/1744002270316568.png",
//         id: "cs3",
//         pdf: "https://storage.googleapis.com/website-bucket-uploads/cs/1744002263636865.pdf",
//     };

//     const csSchema = generateCaseStudySchema(cd);
//     const breadcrumbSchema = generateBreadcrumbSchemas(
//         "https://analyticsliv.com/case-studies/we-sort-it-facebook-ads"
//     );

//     return (
//         <>
//             <Head>
//                 <title>We Sort It Case Study — 180% More Leads & 60% Lower CPL with Facebook Ads</title>
//                 <meta name="description" content='Discover how We Sort It, a New Zealand cleaning and lawn care brand, boosted leads by 180% and reduced CPL by 60% using Facebook Advantage Detailed Targeting.' />
//                 <link
//                     rel="canonical"
//                     href="https://analyticsliv.com/case-studies/we-sort-it-facebook-ads"
//                 />
//                 <script
//                     type="application/ld+json"
//                     dangerouslySetInnerHTML={{ __html: JSON.stringify(csSchema) }}
//                 />
//                 <script
//                     type="application/ld+json"
//                     dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//                 />
//             </Head>

//             <main className="bg-white text-gray-900"
//                 style={{
//                     fontFamily:
//                         'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"',
//                 }}>
//                 {/* Hero Section */}
//                 <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
//                     <div className="max-w-5xl mx-auto px-6 text-center">
//                         <h1 className="text-4xl font-bold mb-4">{cd.title}</h1>
//                         <p className="text-lg mb-8">How <strong>We Sort It</strong>, a New Zealand-based cleaning and lawn care brand, maximized lead generation efficiency through Facebook Advantage Detailed Targeting.</p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <Link
//                                 href="/case-studies"
//                                 className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100"
//                             >
//                                 ← Back to Case Studies
//                             </Link>
//                             <button
//                                 onClick={() => setShowCalendly(true)}
//                                 className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-300"
//                             >
//                                 📅 Book a Strategy Call
//                             </button>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Background Section */}
//                 <section className="max-w-5xl mx-auto py-16 px-6">
//                     <h2 className="text-2xl font-bold mb-6">Background</h2>
//                     <p className="text-lg mb-6">
//                         <strong>We Sort It</strong> is a New Zealand-based cleaning and lawn care brand,
//                         trusted by households for reliable and affordable services. They
//                         wanted to scale lead generation while reducing costs through
//                         Facebook Ads.
//                     </p>
//                     <img src={cd.image} alt="We Sort It" className="h-16" />
//                 </section>

//                 {/* Challenges */}
//                 <section className="bg-gray-50 py-16">
//                     <div className="max-w-5xl mx-auto px-6">
//                         <h2 className="text-2xl font-bold mb-6">Challenges</h2>
//                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg list-disc pl-6">
//                             <li>High cost per lead (CPL) on previous campaigns</li>
//                             <li>Difficulty reaching the right audience segments</li>
//                             <li>Low engagement with static targeting</li>
//                         </ul>
//                     </div>
//                 </section>

//                 {/* Approach */}
//                 <section className="max-w-5xl mx-auto py-16 px-6">
//                     <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
//                     <ol className="list-decimal pl-6 space-y-4 text-lg">
//                         <li>Implemented Facebook Advantage Detailed Targeting Expansion.</li>
//                         <li>Tested multiple creative variations (ads & offers).</li>
//                         <li>Optimized campaign delivery based on lead quality.</li>
//                     </ol>
//                     <div className="mt-8">
//                         <button
//                             onClick={() => setShowDownload(true)}
//                             className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500"
//                         >
//                             📥 Download Full Case Study
//                         </button>
//                     </div>
//                 </section>

//                 {/* Results */}
//                 <section className="bg-blue-700 text-white py-16">
//                     <div className="max-w-5xl mx-auto px-6">
//                         <h2 className="text-2xl font-bold mb-6">Results</h2>
//                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
//                             <div className="p-6 bg-blue-600 rounded-xl shadow">
//                                 <p className="text-3xl font-bold">+180%</p>
//                                 <p className="mt-2">Leads Generated</p>
//                             </div>
//                             <div className="p-6 bg-blue-600 rounded-xl shadow">
//                                 <p className="text-3xl font-bold">-60%</p>
//                                 <p className="mt-2">Cost Per Lead</p>
//                             </div>
//                             <div className="p-6 bg-blue-600 rounded-xl shadow">
//                                 <p className="text-3xl font-bold">+2.5x</p>
//                                 <p className="mt-2">Conversion Rate</p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Conclusion */}
//                 <section className="max-w-5xl mx-auto py-16 px-6">
//                     <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
//                     <blockquote className="border-l-4 border-blue-600 pl-4 italic text-lg">
//                         “With Facebook Advantage Targeting, we achieved phenomenal growth in
//                         leads while slashing CPL — a game-changer for our brand.”
//                     </blockquote>
//                     <p className="mt-4 font-semibold">— We Sort It Marketing Team</p>
//                 </section>

//                 {/* CTA */}
//                 <section className="bg-blue-600 text-white text-center py-16">
//                     <h2 className="text-3xl font-bold mb-4">
//                         Ready to Scale Your Business with Facebook Ads?
//                     </h2>
//                     <p className="mb-6 text-lg">
//                         Let’s build campaigns that deliver leads & lower CPL.
//                     </p>
//                     <button
//                         onClick={() => setShowCalendly(true)}
//                         className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-300"
//                     >
//                         📅 Book Your Free Strategy Call
//                     </button>
//                 </section>
//             </main>

//             {/* Case Study Download Modal */}
//                 <CaseStudyDownloadModal
//                     isOpen={true}
//                     onClose={() => { }}
//                     casestudy={cd}
//                     parentContext="inline"
//                     color="blue"
//                 />

//             {/* Calendly Modal */}
//             {showCalendly && (
//                 <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
//                     <div className="bg-white rounded-2xl w-[90%] max-w-3xl p-6 relative">
//                         <button
//                             className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//                             onClick={() => setShowCalendly(false)}
//                         >
//                             ✖
//                         </button>
//                         <InlineWidget url="https://calendly.com/analyticsliv/30min" />
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }
// export default page

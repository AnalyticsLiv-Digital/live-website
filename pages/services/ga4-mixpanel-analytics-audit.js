"use client";
import { useEffect, useState } from "react"
import MetaSchemaOg from "../../components/MetaSchemaOg";
import Faq from "../../components/Faq";

const Ga4MixpanelAnalyticsAudit = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        message: "",
        stack: "",
        pageSource: "GA4 & Analytics",
    });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const totalSlides = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            document.querySelectorAll('.tilt').forEach((card) => {
                const rect = card.getBoundingClientRect();
                if (
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom
                ) {
                    const mx = e.clientX - rect.left;
                    const my = e.clientY - rect.top;
                    card.style.setProperty('--mx', mx + 'px');
                    card.style.setProperty('--my', my + 'px');
                }
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const testimonials = [
        {
            quote:
                "AnalyticsLiv team was an excellent asset to our businesses' switch from Universal Analytics to GA4. They had excellent communication throughout the project, giving me feedback, updates and ideas as the project went on. I would be happy to recommend the AnalyticsLiv team for analytics and tag manager work, and look forward to working with them in the future. Thank you!",
            author: "Bobby Bruno, CMO, Wholesale Socks Deals",
        },
        {
            quote:
                "The AnalyticsLiv team estimated the job length accurately and then carried out the work exactly as briefed, to time and budget. We had one brief hiccup in the conversion tracking code but that was swiftly fixed once identified. Would definitely consider using it again and for more advanced reporting functionality in future.",
            author: "Charles Lundy, Co-Founder, Mex Insurance",
        },
        {
            quote:
                "AnalyticsLiv has been FUTEK’s web analytics partner for almost 3 years now. They supported us with GTM implementation, GA to GA4 migration, Looker Studio dashboard creations, and Google Cloud Storage implementation. They respond to our requests in a timely manner and make their best efforts to resolve web analytics issues. We are happy with the support provided by AnalyticsLiv.",
            author: "Ebenezer Ferreira, Sr. Product Marketing Manager, FUTEK",
        },
    ];

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
                setFormData({ fullName: "", email: "", company: "", message: "", stack: "", pageSource: "GA4 & Analytics", });
            } else {
                setResponseMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setResponseMessage("Server error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const content = [
        { question: 'How fast can you audit our current setup?', answer: 'Typical express audits are 3–5 business days for one site/app. We’ll return a prioritized fix plan.' },
        { question: 'Can you work with our existing dashboards?', answer: 'Yes. We enhance your current Looker/Tableau/Power BI or deliver new executive views as needed.' },
        { question: 'Do you support server-side tagging?', answer: 'We implement and maintain sGTM with consent mode, enhanced conversions, and tag health monitoring.' },
        { question: 'What engagement models do you offer?', answer: 'Fixed-scope migrations, monthly retainers for governance, and on-demand analytics engineering.' }
    ]

    return (
        <>
            <MetaSchemaOg
                url="https://analyticsliv.com/services/ga4-mixpanel-analytics-audit"
                title="GA4 and Mixpanel Data Audit & Setup | AnalyticsLiv"
                description="Expert GA4 & Mixpanel analytics audits by AnalyticsLiv. We optimize tracking, fix data issues, and deliver accurate insights for performance-driven growth."
                twitterTitle="GA4 and Mixpanel Data Audit & Setup | AnalyticsLiv"
                twitterDescription="Expert GA4 & Mixpanel analytics audits by AnalyticsLiv. We optimize tracking, fix data issues, and deliver accurate insights for performance-driven growth."
                faqData={content}
            />

            <style jsx>{`
        .lift {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
        }

        .reveal {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: none;
        }

        .tilt-wrap {
          perspective: 1200px;
        }
        .tilt {
          transform-style: preserve-3d;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .tilt:hover {
          transform: rotateX(6deg) rotateY(-6deg) translateY(-2px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
        }

        .brand-card {
          position: relative;
          border-radius: 1.25rem;
          padding: 1px;
        }
        .brand-card.g-ga4 {
          background: conic-gradient(from 180deg, #4285f4, #fbbc05, #34a853, #ea4335);
        }
        .brand-card.g-mxp {
          background: conic-gradient(from 180deg, #7a3fff, #a855f7, #60a5fa, #7a3fff);
        }
        .brand-card.g-adbe {
          background: conic-gradient(from 180deg, #ff0000, #fb7185, #f97316, #ff0000);
        }
        .brand-card.g-moe {
          background: conic-gradient(from 180deg, #0ea5e9, #22d3ee, #3b82f6, #0ea5e9);
        }
        .brand-card.g-seg {
          background: conic-gradient(from 180deg, #10b981, #34d399, #06b6d4, #10b981);
        }
        .brand-card.g-tea {
          background: conic-gradient(from 180deg, #8b5cf6, #06b6d4, #10b981, #8b5cf6);
        }

        .brand-card .tilt {
          background: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(248, 250, 252, 0.95));
          overflow: hidden;
        }
        .brand-card::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: inherit;
          filter: blur(18px);
          opacity: 0;
          transition: opacity 0.35s ease;
          z-index: -1;
        }
        .brand-card.g-ga4::after {
          background: radial-gradient(closest-side, rgba(66, 133, 244, 0.45), transparent 72%);
        }
        .brand-card.g-mxp::after {
          background: radial-gradient(closest-side, rgba(122, 63, 255, 0.5), transparent 72%);
        }
        .brand-card.g-adbe::after {
          background: radial-gradient(closest-side, rgba(255, 0, 0, 0.5), transparent 72%);
        }
        .brand-card.g-moe::after {
          background: radial-gradient(closest-side, rgba(14, 165, 233, 0.5), transparent 72%);
        }
        .brand-card.g-seg::after {
          background: radial-gradient(closest-side, rgba(16, 185, 129, 0.5), transparent 72%);
        }
        .brand-card.g-tea::after {
          background: radial-gradient(closest-side, rgba(139, 92, 246, 0.5), transparent 72%);
        }
        .brand-card:hover::after {
          opacity: 0.7;
        }

        .logo-glow {
          position: relative;
          z-index: 1;
        }
        .logo-glow::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 140%;
          height: 140%;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.18), transparent 70%);
          transform: translate(-50%, -50%) scale(0);
          border-radius: 50%;
          z-index: -1;
          opacity: 0;
          transition: all 0.5s ease;
        }
        .brand-card:hover .logo-glow::before {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }

        @keyframes shimmer {
          0% {
            opacity: 0;
            transform: translateX(-100%) rotate(10deg);
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
            transform: translateX(100%) rotate(10deg);
          }
        }

        .brand-card:hover .tilt::after {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0)
          );
          animation: shimmer 1.2s ease-in-out;
        }

        @keyframes floaty {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .float-anim {
          animation: floaty 6s ease-in-out infinite;
        }

        .tool-label {
          margin-top: 0.6rem;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.1px;
          text-align: center;
          color: #0f172a;
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
          transition: text-shadow 0.25s ease, transform 0.25s ease;
        }
        .brand-card:hover .tool-label {
          text-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);
          transform: translateY(-2px);
        }

        .subchip {
          transition: background 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }
        .brand-card:hover .subchip {
          background: #c7d2fe;
          transform: scale(1.05);
        }

        .badge-plate {
          position: relative;
          border-radius: 1.25rem;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.5),
            rgba(56, 189, 248, 0.5),
            rgba(16, 185, 129, 0.45)
          );
        }
        .badge-card {
          position: relative;
          border-radius: 1.25rem;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.86));
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.1);
        }
        .badge-card:before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            400px 160px at var(--mx, 60%) 0%,
            rgba(99, 102, 241, 0.25),
            transparent 60%
          );
          pointer-events: none;
        }
        .badge-tilt {
          perspective: 1000px;
        }
        .badge-tilt .badge-card {
          transform-style: preserve-3d;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .badge-tilt:hover .badge-card {
          transform: rotateX(5deg) rotateY(-5deg);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
        }
                `}</style>

            <main className="min-h-screen bg-white text-slate-800"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"' }}>

                <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50">
                    <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                                Smarter Analytics. Faster Insights.
                            </h1>
                            <p className="mt-4 text-lg text-slate-600">
                                GA4, privacy-safe tracking, and leadership-ready dashboards—implemented right.
                            </p>
                            <div className="mt-6 flex gap-3 flex-wrap">
                                <a href="#contact" className="rounded-2xl bg-slate-900 px-6 py-3 text-white">
                                    Get an Audit
                                </a>
                                <a href="#case-studies" className="rounded-2xl border border-slate-300 px-6 py-3">
                                    See Case Studies
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 lift">
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="rounded-2xl border border-slate-200 p-4">
                                        <div className="text-2xl font-extrabold">200+</div>
                                        <div className="text-xs text-slate-500">GA4 setups</div>
                                    </div>
                                    <div className="rounded-2xl border border-slate-200 p-4">
                                        <div className="text-2xl font-extrabold">30%↑</div>
                                        <div className="text-xs text-slate-500">Accuracy uplift*</div>
                                    </div>
                                    <div className="rounded-2xl border border-slate-200 p-4">
                                        <div className="text-2xl font-extrabold">100+</div>
                                        <div className="text-xs text-slate-500">BI dashboards</div>
                                    </div>
                                    <div className="rounded-2xl border border-slate-200 p-4">
                                        <div className="text-2xl font-extrabold">24/7</div>
                                        <div className="text-xs text-slate-500">Tag monitors</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="clients" className="bg-slate-50 py-16">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Trusted by</p>
                        <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Growth-focused brands</h2>
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center">
                            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Amul_official_logo.svg%20(1).png" alt="Amul" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
                            </div>
                            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Shoebacca%20logo.png" alt="Shoebacca" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
                            </div>
                            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Washington_examinor_logo.png" alt="Washington Examiner" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
                            </div>
                            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Anantara_logo_New.png" alt="Anantara" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
                            </div>
                            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Auxi_logo.coloured.png" alt="Auxi" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
                            </div>
                            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Algovation_logo.png" alt="Algovation" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
                            </div>
                            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/shiprocket_logo.png" alt="Shiprocket" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
                            </div>
                            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/we_sort_it_logo.png" alt="We Sort It" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
                            </div>
                            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Mex_insurance_logo.png" alt="Mexico Insurance Services" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
                            </div>
                            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/issta_Logo.png" alt="ISSTA" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
                            </div>
                            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/IRIS_LOGO.png" alt="IRIS" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
                            </div>
                            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/league_logo_svg%201.png" alt="League" className="h-10 max-h-10 object-contain grayscale hover:grayscale-0 transition" loading="lazy" />
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-slate-600">…and 200+ other growth-focused businesses across commerce, travel, fintech, and media.</p>
                    </div>
                </section>

                <section id="services" className="py-14">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-8 text-center">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">What we deliver</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                From clean tracking to board-ready dashboards
                            </h2>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="p-5 rounded-2xl border border-slate-200 bg-white lift">
                                <h3 className="font-semibold">GA4 Migration</h3>
                                <p className="text-slate-600 mt-1">Mapped to KPIs & ecommerce flows.</p>
                            </div>
                            <div className="p-5 rounded-2xl border border-slate-200 bg-white lift">
                                <h3 className="font-semibold">Server-Side Tagging</h3>
                                <p className="text-slate-600 mt-1">Accuracy, speed, privacy.</p>
                            </div>
                            <div className="p-5 rounded-2xl border border-slate-200 bg-white lift">
                                <h3 className="font-semibold">Dashboards</h3>
                                <p className="text-slate-600 mt-1">Cohort, LTV & ROAS views.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="process" className="py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-10">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">How we deliver</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Our Strategic Process for Data Accuracy & Insights
                            </h2>
                        </div>
                        <ol className="grid grid-cols-2 md:grid-cols-6 gap-4">
                            <li className="relative rounded-2xl border border-slate-200 bg-white p-5 lift text-center">
                                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                                    1
                                </div>
                                <h3 className="font-semibold">Discovery & Audit</h3>
                                <p className="mt-1 text-sm text-slate-600">KPIs, stack review, gaps.</p>
                            </li>
                            <li className="relative rounded-2xl border border-slate-200 bg-white p-5 lift text-center">
                                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white">
                                    2
                                </div>
                                <h3 className="font-semibold">Tracking Plan</h3>
                                <p className="mt-1 text-sm text-slate-600">Event schema, ecommerce, consent.</p>
                            </li>
                            <li className="relative rounded-2xl border border-slate-200 bg-white p-5 lift text-center">
                                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                                    3
                                </div>
                                <h3 className="font-semibold">Implementation</h3>
                                <p className="mt-1 text-sm text-slate-600">sGTM, EC, offline joins.</p>
                            </li>
                            <li className="relative rounded-2xl border border-slate-200 bg-white p-5 lift text-center">
                                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                                    4
                                </div>
                                <h3 className="font-semibold">Validation & QA</h3>
                                <p className="mt-1 text-sm text-slate-600">DebugView, test orders, monitors.</p>
                            </li>
                            <li className="relative rounded-2xl border border-slate-200 bg-white p-5 lift text-center">
                                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-white">
                                    5
                                </div>
                                <h3 className="font-semibold">Dashboards</h3>
                                <p className="mt-1 text-sm text-slate-600">Executive views, LTV/cohorts.</p>
                            </li>
                            <li className="relative rounded-2xl border border-slate-200 bg-white p-5 lift text-center">
                                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-600 text-white">
                                    6
                                </div>
                                <h3 className="font-semibold">Training</h3>
                                <p className="mt-1 text-sm text-slate-600">Playbooks, alerts, governance.</p>
                            </li>
                        </ol>
                    </div>
                </section>

                <section id="capabilities" className="py-8 bg-slate-50">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-10">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">What sets us apart</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Technology, Transparency & Momentum—Every Month
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 lift">
                                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                                    Tracking & Tech
                                </div>
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-600"></span>
                                        <span>GA4 best practices; consent mode</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-600"></span>
                                        <span>Server-side tagging</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-600"></span>
                                        <span>LTV/ROAS warehouse views</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 lift">
                                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                    What you get monthly
                                </div>
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                                        <span>Tag health checks & fixes</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                                        <span>Dashboard updates & insights</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                                        <span>Strategy notes & next steps</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 lift">
                                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                                    Outcomes
                                </div>
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
                                        <span>Accurate, consent-safe measurement</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
                                        <span>Faster, clearer reporting</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
                                        <span>Better media allocation & LTV visibility</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="case-studies" className="py-16 bg-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-8 text-center">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Selected outcomes</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Case Studies</h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            <article className="rounded-2xl border border-slate-200 bg-white p-6 lift">
                                <div className="flex items-center justify-between gap-4">
                                    <img
                                        src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Amul_official_logo.svg%20(1).png"
                                        alt="Amul product"
                                        className="h-10 object-contain"
                                    />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                                        Analytics
                                    </span>
                                </div>
                                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                                    Amul India — Attribution & Insights
                                </h3>
                                <ul className="mt-2 text-slate-700 space-y-1 list-disc list-inside">
                                    <li>Strengthening e-commerce tracking with accurate data</li>
                                    <li>corrected conversions, and attribution mapping</li>
                                </ul>
                                <a href="/case-studies/amul-india-attribution-case-study" className="mt-4 inline-block text-slate-900 font-medium">
                                    Read case study →
                                </a>
                            </article>
                            <article className="rounded-2xl border border-slate-200 bg-white p-6 lift">
                                <div className="flex items-center justify-between gap-4">
                                    <img
                                        src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Washington_examinor_logo.png"
                                        alt="Washington Examiner"
                                        className="h-8 object-contain"
                                    />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">Publisher</span>
                                </div>
                                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                                    99% Accuracy in GA4 Tracking
                                </h3>
                                <ul className="mt-2 text-slate-700 space-y-1 list-disc list-inside">
                                    <li>accuracy in subscription event tracking </li>
                                    <li>Accurate Purchase Data Collection</li>
                                </ul>
                                <a href="/case-studies/ga4-subscription-tracking-gtm" className="mt-4 inline-block text-slate-900 font-medium">
                                    Read case study →
                                </a>
                            </article>
                            <article className="rounded-2xl border border-slate-200 bg-white p-6 lift">
                                <div className="flex items-center justify-between gap-4">
                                    <img
                                        src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/flax-logo-1.png"
                                        alt="Shiprocket"
                                        className="h-12 object-contain"
                                    />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                                        Food Chain
                                    </span>
                                </div>
                                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                                    FlaxitUp Cuts Stockout Risks
                                </h3>
                                <ul className="mt-2 text-slate-700 space-y-1 list-disc list-inside">
                                    <li>Real-Time Alerts & Dashboards</li>
                                    <li>Improvement in Forecast Accuracy</li>
                                </ul>
                                <a href="/case-studies/flaxitup-stockout-automation" className="mt-4 inline-block text-slate-900 font-medium">
                                    Read case study →
                                </a>
                            </article>
                            <article className="rounded-2xl border border-slate-200 bg-white p-6 lift">
                                <div className="flex items-center justify-between gap-4">
                                    <img
                                        src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/we_sort_it_logo.png"
                                        alt="We Sort It"
                                        className="h-12 object-contain"
                                    />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-rose-700">Lead Gen</span>
                                </div>
                                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                                    We Sort It Achieves 180% More Leads
                                </h3>
                                <ul className="mt-2 text-slate-700 space-y-1 list-disc list-inside">
                                    <li>60% Lower CPL</li>
                                    <li>Sustainable Scalable Growth</li>
                                </ul>
                                <a href="/case-studies/we-sort-it-facebook-ads" className="mt-4 inline-block text-slate-900 font-medium">
                                    Read case study →
                                </a>
                            </article>
                        </div>
                        <div className="text-center mt-10">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-white"
                            >
                                Talk to an Analytics Expert
                            </a>
                        </div>
                    </div>
                </section>

                <section id="tools" className="py-8 relative overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white"></div>
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-8">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Tools & Expertise</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Analytics Stack</h2>
                            <p className="mt-2 text-slate-600">Best-in-class tools we implement, manage, and scale.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
                            <div className="brand-card g-ga4 tilt-wrap reveal">
                                <div className="relative tilt rounded-2xl h-32 p-5 flex flex-col items-center justify-center border border-white/20 float-anim">
                                    <div className="tool-label">Google Analytics 4</div>
                                    <div className="text-xs text-slate-600 text-center mt-1">
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            Events
                                        </span>{' '}
                                        ·{' '}
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            Conversions
                                        </span>{' '}
                                        ·{' '}
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            Audiences
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="brand-card g-mxp tilt-wrap reveal">
                                <div
                                    className="relative tilt rounded-2xl h-32 p-5 flex flex-col items-center justify-center border border-white/20 float-anim"
                                    style={{ animationDelay: '.15s' }}
                                >
                                    <div className="tool-label">Mixpanel</div>
                                    <div className="text-xs text-slate-600 text-center mt-1">
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            Funnels
                                        </span>{' '}
                                        ·{' '}
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            Cohorts
                                        </span>{' '}
                                        ·{' '}
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            Retention
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="brand-card g-adbe tilt-wrap reveal">
                                <div
                                    className="relative tilt rounded-2xl h-32 p-5 flex flex-col items-center justify-center border border-white/20 float-anim"
                                    style={{ animationDelay: '.3s' }}
                                >
                                    <div className="tool-label">Adobe Analytics</div>
                                    <div className="text-xs text-slate-600 text-center mt-1">
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            Enterprise
                                        </span>{' '}
                                        ·{' '}
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            Workspaces
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="brand-card g-moe tilt-wrap reveal">
                                <div
                                    className="relative tilt rounded-2xl h-32 p-5 flex flex-col items-center justify-center border border-white/20 float-anim"
                                    style={{ animationDelay: '.45s' }}
                                >
                                    <div className="tool-label">MoEngage</div>
                                    <div className="text-xs text-slate-600 text-center mt-1">
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            Journeys
                                        </span>{' '}
                                        ·{' '}
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            Messaging
                                        </span>{' '}
                                        ·{' '}
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            CDP
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="brand-card g-seg tilt-wrap reveal">
                                <div
                                    className="relative tilt rounded-2xl p-5 h-32 flex flex-col items-center justify-center border border-white/20 float-anim"
                                    style={{ animationDelay: '.6s' }}
                                >
                                    <div className="tool-label mb-4">Segment</div>
                                    <div className="text-xs text-slate-600 text-center mt-1">
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            Pipes
                                        </span>{' '}
                                        ·{' '}
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            Destinations
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="brand-card g-tea tilt-wrap reveal">
                                <div
                                    className="relative tilt rounded-2xl p-5 h-32 flex flex-col items-center justify-center border border-white/20 float-anim"
                                    style={{ animationDelay: '.75s' }}
                                >
                                    <div className="tool-label mb-4">Tealium</div>
                                    <div className="text-xs text-slate-600 text-center mt-1">
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            TMS
                                        </span>{' '}
                                        ·{' '}
                                        <span className="inline-block text-[0.65rem] font-normal py-1 px-2 rounded-full bg-slate-50 text-slate-900 border border-slate-200 subchip">
                                            CDP
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <div className="text-center mb-5">
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Partnerships & Certifications
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                <div className="badge-tilt reveal">
                                    <div className="badge-plate rounded-2xl">
                                        <div
                                            className="badge-card p-[18px] float-anim"
                                            onMouseMove={(e) => {
                                                const rect = e.currentTarget.getBoundingClientRect();
                                                e.currentTarget.parentElement.style.setProperty(
                                                    '--mx',
                                                    e.clientX - rect.left + 'px'
                                                );
                                            }}
                                        >
                                            <span className="absolute top-2.5 right-3 py-1 px-2 text-[0.65rem] font-bold text-slate-900 bg-gradient-to-r from-slate-200 to-white rounded-full shadow-sm">
                                                Verified
                                            </span>
                                            <div className="flex items-center justify-center">
                                                <img
                                                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Partner-RGB.png"
                                                    alt="Google Partner"
                                                    className="h-10 object-contain"
                                                />
                                            </div>
                                            <div className="text-center mt-2 text-sm font-semibold text-slate-900">
                                                Google Partner
                                            </div>
                                            <div className="text-center text-[0.7rem] text-slate-500 mt-1">
                                                Ads · Analytics · Training
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="badge-tilt reveal">
                                    <div className="badge-plate rounded-2xl">
                                        <div
                                            className="badge-card p-[18px] float-anim"
                                            style={{ animationDelay: '.6s' }}
                                            onMouseMove={(e) => {
                                                const rect = e.currentTarget.getBoundingClientRect();
                                                e.currentTarget.parentElement.style.setProperty(
                                                    '--mx',
                                                    e.clientX - rect.left + 'px'
                                                );
                                            }}
                                        >
                                            <span className="absolute top-2.5 right-3 py-1 px-2 text-[0.65rem] font-bold text-slate-900 bg-gradient-to-r from-slate-200 to-white rounded-full shadow-sm">
                                                Certified
                                            </span>
                                            <div className="flex items-center justify-center">
                                                <img
                                                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/CE4F38BB.png"
                                                    alt="GMP Certified"
                                                    className="h-10 object-contain"
                                                />
                                            </div>
                                            <div className="text-center mt-2 text-sm font-semibold text-slate-900">
                                                Google Marketing Platform
                                            </div>
                                            <div className="text-center text-[0.7rem] text-slate-500 mt-1">GTM · GA4</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="badge-tilt reveal">
                                    <div className="badge-plate rounded-2xl">
                                        <div
                                            className="badge-card p-[18px] float-anim"
                                            style={{ animationDelay: '1.2s' }}
                                            onMouseMove={(e) => {
                                                const rect = e.currentTarget.getBoundingClientRect();
                                                e.currentTarget.parentElement.style.setProperty(
                                                    '--mx',
                                                    e.clientX - rect.left + 'px'
                                                );
                                            }}
                                        >
                                            <span className="absolute top-2.5 right-3 py-1 px-2 text-[0.65rem] font-bold text-slate-900 bg-gradient-to-r from-slate-200 to-white rounded-full shadow-sm">
                                                Partner
                                            </span>
                                            <div className="flex items-center justify-center">
                                                <img
                                                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/MBP%20Badge%20-%20Dark%20backgrounds%401x.png"
                                                    alt="Meta Business Partner"
                                                    className="h-10 object-contain"
                                                />
                                            </div>
                                            <div className="text-center mt-2 text-sm font-semibold text-slate-900">
                                                Meta Business Partner
                                            </div>
                                            <div className="text-center text-[0.7rem] text-slate-500 mt-1">
                                                Attribution · Catalogs · Pixels
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="impact" className="py-12">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 lift reveal">
                                <div className="text-3xl font-extrabold">+30%</div>
                                <div className="text-xs text-slate-500 mt-1">Median data accuracy*</div>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 lift reveal">
                                <div className="text-3xl font-extrabold">-40%</div>
                                <div className="text-xs text-slate-500 mt-1">Report turnaround time*</div>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 lift reveal">
                                <div className="text-3xl font-extrabold">95%+</div>
                                <div className="text-xs text-slate-500 mt-1">Consent-safe coverage*</div>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 lift reveal">
                                <div className="text-3xl font-extrabold">24/7</div>
                                <div className="text-xs text-slate-500 mt-1">Tag health monitoring</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonials" className="py-5 bg-slate-50">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-8">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">What clients say</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Real words. Real impact.</h2>
                        </div>
                        <div className="relative rounded-3xl border border-slate-200 bg-white p-8 overflow-hidden">
                            <div className="slides">
                                {testimonials.map((testimonial, index) => (
                                    <figure
                                        key={index}
                                        className="slide"
                                        style={{ display: currentSlide === index ? 'block' : 'none' }}
                                    >
                                        <blockquote className="text-lg text-slate-800">{testimonial.quote}</blockquote>
                                        <figcaption className="mt-3 text-sm text-slate-600">- {testimonial.author}</figcaption>
                                    </figure>
                                ))}
                            </div>
                            <div className="mt-6 flex items-center justify-center gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className="h-2.5 w-2.5 rounded-full"
                                        style={{ background: currentSlide === index ? '#0f172a' : '#cbd5e1' }}
                                        aria-label={`slide ${index + 1}`}
                                        onClick={() => setCurrentSlide(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="faq" className="py-8 lg:py-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-8 text-center">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">FAQs</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Everything About Our Analytics Service</h2>
                            <p className="mt-2 text-slate-600 max-w-3xl mx-auto">Your Questions Answered</p>
                        </div>
                        <Faq content={content} />
                    </div>
                </section>

                <section id="contact" className="bg-slate-900 py-16 text-white">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid items-center gap-8 md:grid-cols-2">
                            <div>
                                <h3 className="text-2xl font-bold">Get your analytics right — start with a first audit</h3>
                                <p className="mt-2 max-w-2xl text-slate-300">Share your stack and pain points. We’ll reply with a prioritized plan.</p>
                                <ul className="mt-4 space-y-2 text-slate-300">
                                    <li className="flex items-start gap-3"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span><span>Tracking & schema review</span></li>
                                    <li className="flex items-start gap-3"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span><span>Consent & privacy check</span></li>
                                    <li className="flex items-start gap-3"><span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span><span>Dashboard & KPIs alignment</span></li>
                                </ul>
                            </div>
                            <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
                                <form onSubmit={handleSubmit} action="#" method="post" className="grid gap-3 md:grid-cols-2">
                                    <label className="text-sm" for="fullName">Full name
                                        <input value={formData.fullName} onChange={handleChange} id="fullName" name="fullName" required placeholder="Your Name" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label className="text-sm" for="email">Work email
                                        <input value={formData.email} onChange={handleChange} id="email" type="email" name="email" required placeholder="name@company.com" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label className="text-sm md:col-span-1" for="company">Company
                                        <input value={formData.company} onChange={handleChange} id="company" name="company" placeholder="Company name" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label className="text-sm md:col-span-1" for="stack">Current stack
                                        <input value={formData.stack} onChange={handleChange} id="stack" name="stack" placeholder="e.g., GA4, GTM, BQ, Looker" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none" />
                                    </label>
                                    <label className="text-sm md:col-span-2" for="message">Goals & pain points
                                        <textarea value={formData.message} onChange={handleChange} id="message" name="message" rows="4" placeholder="What’s broken? What do you want to see?" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none"></textarea>
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

export default Ga4MixpanelAnalyticsAudit

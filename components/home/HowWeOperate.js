// components/HowWeOperate.tsx
"use client";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const dataLabels = ["Discovery", "Data", "Execution", "Optimization", "Impact"];

const datasets = {
    reliability: [70, 85, 90, 95, 97],
    efficiency: [10, 25, 40, 55, 70],
    cpa: [0, -10, -18, -25, -28],
};

const metricColors = {
    reliability: "#10B981",
    efficiency: "#10B981",
    cpa: "#10B981",
};

export default function HowWeOperate() {
    const [currentMetric, setCurrentMetric] = useState("reliability");

    const chartData = dataLabels.map((label, idx) => ({
        name: label,
        value: datasets[currentMetric][idx],
    }));

    const getYAxisTicks = (metric) => {
        if (metric === "cpa") {
            const min = Math.floor(Math.min(...datasets.cpa) / 5) * 5; // round down to multiple of 5
            const max = Math.ceil(Math.max(...datasets.cpa) / 5) * 5;  // round up
            const ticks = [];
            for (let i = 0; i <= (max - min) / 5; i++) {
                ticks.push(min + i * 5);
            }
            return ticks;
        } else {
            // For reliability and efficiency, use 10-unit gaps
            return Array.from({ length: 11 }, (_, i) => i * 10); // 0,10,20,30,...100
        }
    };

    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-center text-3xl font-bold text-slate-900 mb-10">How We Operate</h2>
                <p className="text-center text-slate-600 mb-12">
                    Our blueprint combines structured steps with measurable results. Explore our process below, and toggle metrics to see the transformation we bring.
                </p>

                <div className="max-lg:hidden flex justify-center gap-3 mb-8">
                    {(["reliability", "efficiency", "cpa"]).map((metric) => (
                        <button
                            key={metric}
                            className={`btn-tab ${currentMetric === metric ? "bg-slate-900 text-white" : ""}`}
                            onClick={() => setCurrentMetric(metric)}
                        >
                            {metric === "reliability" ? "Reliability %" : metric === "efficiency" ? "Efficiency Gain %" : "Avg. CPA Reduction"}
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-2 items-start">
                    {/* Timeline */}
                    <ol className="max-lg:mb-8 relative border-l border-slate-200 pl-6 space-y-6">
                        {[
                            {
                                title: "01. Discovery & Objectives",
                                desc: "ICP, baselines, metrics.",
                                example: "Case Example: Defined success metrics for Amul India, enabling +320% ROAS (90 days).",
                                color: "bg-slate-900",
                            },
                            {
                                title: "02. Data Architecture",
                                desc: "GA4, GTM, consent mode.",
                                example: "Proved 92% accuracy in server-side tracking audits.",
                                color: "bg-emerald-600",
                            },
                            {
                                title: "03. Execution",
                                desc: "Media activation & CRO.",
                                example: "PPC campaigns scaled with −28% avg. CPA in Q1.",
                                color: "bg-indigo-600",
                            },
                            {
                                title: "04. Optimization",
                                desc: "Budget pacing, bid tuning, waste cuts.",
                                example: "Programmatic: +41% ROAS via custom bidding.",
                                color: "bg-amber-600",
                            },
                            {
                                title: "05. Proof of Impact",
                                desc: "ROAS, MER, LTV reporting.",
                                example: "E-commerce clients saw 3× lead quality improvement with GA4 + DV360 demand gen.",
                                color: "bg-rose-600",
                            },
                        ].map((step, idx) => (
                            <li key={idx} className="relative">
                                <div className={`absolute -left-[34px] h-5 w-5 rounded-full ${step.color}`}></div>
                                <div className="card p-5">
                                    <div className="font-semibold text-slate-500">{step.title}</div>
                                    <p>{step.desc}</p>
                                    <p className="mt-2 text-xs text-emerald-600">{step.example}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div className="lg:hidden flex justify-center gap-3 mb-4">
                        {(["reliability", "efficiency", "cpa"]).map((metric) => (
                            <button
                                key={metric}
                                className={`btn-tab ${currentMetric === metric ? "bg-slate-900 text-white" : ""}`}
                                onClick={() => setCurrentMetric(metric)}
                            >
                                {metric === "reliability" ? "Reliability %" : metric === "efficiency" ? "Efficiency Gain %" : "Avg. CPA Reduction"}
                            </button>
                        ))}
                    </div>

                    {/* Chart */}
                    <div className="card p-2 md:p-6 h-[500px] md:h-[620px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={chartData}
                                margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                            >
                                <defs>
                                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#10B981" stopOpacity={0.2} />
                                        <stop offset="100%" stopColor="#10B981" stopOpacity={0.1} />
                                    </linearGradient>
                                </defs>

                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis ticks={getYAxisTicks(currentMetric)} />
                                <Tooltip />

                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#10B981"
                                    strokeWidth={3}
                                    fill="url(#colorGradient)"
                                    fillOpacity={1}
                                    dot={{ r: 2.5 }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          background: #fff;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
        }
        .btn-tab {
          border: 1px solid #e5e7eb;
          padding: 0.4rem 0.9rem;
          border-radius: 0.75rem;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
        </section>
    );
}

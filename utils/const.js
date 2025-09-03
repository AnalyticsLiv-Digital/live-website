export const services = {
    media: {
        title: "Media Activation",
        body: "PPC, SEO, Programmatic & CRO with performance guardrails. Driving incremental lift across paid channels with precision targeting and optimized creatives.",
        list: [
            "DV360, YouTube & Programmatic Buying",
            "Search & Shopping Campaigns",
            "CRO Experimentation & Landing Page Testing",
            "Creative Sequencing for Audience Journeys",
        ],
        cta: "/services/ppc",
    },
    analytics: {
        title: "Digital Analytics",
        body: "GA4, server-side, dashboards & governance for durable truth. Building trust in data pipelines and empowering decision-makers with clarity.",
        list: [
            "GA4 & Server-Side Tracking",
            "Consent Mode & Enhanced Conversions",
            "BigQuery & Data Warehousing",
            "Looker Studio Dashboards",
        ],
        cta: "/services/analytics",
    },
    cloud: {
        title: "Cloud & Technology",
        body: "Scalable pipelines, BigQuery, and cloud transformation roadmaps. Automating ETL, integrating APIs, and future-proofing data architectures.",
        list: [
            "Data Pipelines & Automation",
            "ETL & API Integrations",
            "Machine Learning Hooks",
            "Cloud Infrastructure Design",
        ],
        cta: "/services/cloud",
    },
    transform: {
        title: "Digital Transformation",
        body: "Consulting, agentic AI, business solutions & end-to-end delivery. Aligning people, process, and platforms for compounding outcomes.",
        list: [
            "AI & Business Solutions",
            "Change Management",
            "Innovation Roadmaps",
            "Enterprise Consulting",
        ],
        cta: "/services/transformation",
    },
};

export const METRICS = {
    commerce: [
        { kpi: "CPA ↓", desc: "−30% acquisition cost", note: "Query hygiene & CRO" },
        { kpi: "ROAS ↑", desc: "+320% return on ad spend", note: "Guardrails & feeds" },
        { kpi: "Waste ↓", desc: "−60% wasted spend", note: "PMax guardrails" },
        { kpi: "Accuracy", desc: "95%+ data reliability", note: "SS tagging" },
    ],
    travel: [
        { kpi: "Conv. Lift", desc: "+22% bookings", note: "Cross-device funnels" },
        { kpi: "CPA ↓", desc: "−18% cost/booking", note: "Audience windows" },
        { kpi: "Coverage", desc: "90%+ multi-device", note: "Identity stitching" },
        { kpi: "Velocity", desc: "10+ tests/mo", note: "High-tempo CRO" },
    ],
    bfsi: [
        { kpi: "Lead Quality", desc: "3× qualified leads", note: "Event values" },
        { kpi: "CPA ↓", desc: "−25% acquisition", note: "Targeting & LPs" },
        { kpi: "Accuracy", desc: "95%+ data reliability", note: "Consent mode" },
        { kpi: "Velocity", desc: "10+/mo tests", note: "Hypothesis engine" },
    ],
    media: [
        { kpi: "Subs ↑", desc: "+15% conversion", note: "Paywall tests" },
        { kpi: "Ad Yield", desc: "+12% RPM", note: "Inventory curation" },
        { kpi: "Retention", desc: "+9% 90-day", note: "Lifecycle journeys" },
        { kpi: "Accuracy", desc: "92%+ tracking", note: "Events & QA" },
    ],
};

export const ga4serviceContent = [
    {
        question: "GA4 Optimisation and Support",
        description: "Uncover Hidden Gaps, Eliminate Noise, and Maximise Accuracy",
        answer:
            "We dive deep into your GA4 setup with a comprehensive audit — from tracking and reporting accuracy to identifying redundant events, misattributions, and missing custom channel groupings. Clean, precise, and actionable analytics guaranteed.",
    },
    {
        question: "Website & Application tracking",
        description: "We Align Your Analytics with Industry Goals for Smarter Decisions",
        answer:
            "We capture all the critical data through custom event tracking for both web and app, designed to uncover deeper insights. By focusing on key industry-specific events and parameters, we empower you to make smarter, more impactful decisions that drive business growth.",
    },
    {
        question: "Targeted Segmentation & Audience Insights",
        description: "Unlock the Power of Data-Driven Targeting for Better Engagement",
        answer:
            "We craft customized segments and audience strategies for both web and app, capturing the right data to help you understand your users at a deeper level. By focusing on key behaviors and attributes, we provide insights that enable personalized experiences, boosting engagement and conversion rates.",
    },
    {
        question: "Goal/Key Event Tracking & Reporting",
        description: "Track What Matters. Measure What Moves the Needle",
        answer:
            "We help you define and implement meaningful goals and key events in GA4 tailored to your business objectives. From purchase completions and lead form submissions to scroll depth and video views, we ensure every critical user action is tracked with precision.",
    },
    {
        question: "GA4 Reporting & Insights",
        description: "Turn Complex Data into Clear Business Decisions",
        answer:
            "We build goal-aligned custom reports directly within GA4—tracking key metrics like engagement, conversions, and user behavior across your site and app. With advanced explorations, funnel/path analysis, and event-level insights, you get actionable data that fuels smarter, faster decisions.",
    },
    {
        question: "Adhoc Analytics Support",
        description: "When You Need Expertise, Fast.",
        answer:
            "Whether it’s a quick fix, troubleshooting, or answering those urgent questions, our Adhoc Analytics Support is here for you. Get the help you need, when you need it, to keep your analytics running smoothly and your data flowing seamlessly.",
    },
];

export const ga4content = [
    {
        question: "What does a GA4 audit include?",
        answer:
            "Our GA4 audit reviews your entire setup—from tracking accuracy and event structure to attribution issues and custom channel groupings. We identify gaps, remove redundancies, and deliver actionable fixes.",
    },
    {
        question: "Can you track both website and mobile app data?",
        answer:
            "Yes, we specialize in unified tracking for both websites and apps. We implement custom event tracking that aligns with your specific industry KPIs, giving you a full view of user behavior.",
    },
    {
        question: "How quickly can you help with urgent GA4 issues?",
        answer:
            "Our Adhoc Analytics Support is designed for exactly that. We’re available for troubleshooting, debugging, or addressing any urgent questions that arise—fast.",
    },
    {
        question: "Can you help improve attribution accuracy in GA4?",
        answer:
            "Yes. We fix misattributions caused by poor configuration, UTM issues, or missing channel groupings—helping you understand which sources truly drive conversions.",
    },
    {
        question: "Is this a one-time service or ongoing support?",
        answer:
            "We offer both. You can engage us for a one-time audit/setup or opt for ongoing GA4 optimisation and support to keep your analytics evolving with your business.",
    },
    {
        question: "How do you ensure tracking accuracy across platforms?",
        answer:
            "We use debugging tools, real-time data validation, and consistent tagging strategies across web and app to ensure accurate, cross-platform tracking.",
    },
    {
        question: "What industries do you specialize in for analytics setup?",
        answer:
            "We’ve worked with e-commerce, media, education, healthcare, SaaS, and service-based businesses. Each setup is tailored to industry-specific KPIs and user behavior patterns.",
    },
    {
        question: "Will I get documentation of all the changes and setup?",
        answer:
            "Yes, we provide detailed documentation of your GA4 configuration, events, goals, and any filters or custom setups for future reference and internal handover.",
    },
    {
        question: "What if I already have GA4 but the data looks off?",
        answer:
            "This is common. We’ll perform a health check to diagnose issues like incorrect tag firing, parameter misalignment, or broken events—and then clean up your setup.",
    },
];

export const dataVisualizationContent = [
    {
        question: "What platforms do you support for building dashboards?",
        answer:
            "We work with a wide range of tools including Looker Studio, Power BI, and Google Sheets. We also support custom setups using APIs, BigQuery, and third-party connectors like Supermetrics, Power My Analytics, Funnel.io, and more — depending on your business needs.",
    },
    {
        question: "Can you connect data from multiple sources like Google Ads, GA4, and CRM together in one dashboard?",
        answer:
            "Absolutely. Our dashboards are designed to bring all your data — from marketing, sales, customer service, or inventory — into one unified view. Whether you're using Google tools, eCommerce platforms, or other systems, we’ll integrate them smoothly.",
    },
    {
        question: "Can we create dashboards for different teams — like marketing, sales, and operations?",
        answer:
            "Yes! We design role-based dashboards so each team sees only the metrics they care about. This ensures clarity and focus for everyone — from executives to analysts.",
    },
    {
        question: "Will the dashboard update automatically?",
        answer:
            "Yes. We set up automated data refreshes using native connectors, third-party tools, or APIs, so your dashboard stays up to date without manual effort.",
    },
    {
        question: "Can you help if we already have a dashboard but it’s not working properly?",
        answer:
            "Definitely. We offer dashboard audits and optimization to fix errors, improve speed, add missing metrics, or restructure your data for better clarity.",
    },
    {
        question: "Can we export reports or receive them via email?",
        answer:
            "Yes. We can set up scheduled email reports in PDF/Excel formats and also offer one-click export options right from the dashboard.",
    },
];
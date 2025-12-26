export const stages = [
    {
        name: "Nascent",
        min: 0,
        max: 25,
        dot: "rgb(239, 68, 68)",
        next: "Emerging",
        explain: "Foundations are limited. Prioritize measurement accuracy, first-party data capture, and linkage to outcomes (leads/sales)."
    },
    {
        name: "Emerging",
        min: 26,
        max: 50,
        dot: "rgb(245, 158, 11)",
        next: "Connected",
        explain: "Basics are forming. Next: unify data, standardize KPIs, and scale beyond single-channel optimization."
    },
    {
        name: "Connected",
        min: 51,
        max: 75,
        dot: "rgb(34, 197, 94)",
        next: "Multi-Moment",
        explain: "Data and channels connect to outcomes. Next: experimentation at scale + attribution/MMM + AI-ready data products."
    },
    {
        name: "Multi-Moment",
        min: 76,
        max: 100,
        dot: "rgb(91, 94, 247)",
        explain: "You're ready for orchestration: real-time journey optimization, personalization, and continuous incrementality."
    }
];

export const categoryWeights = {
    measurement: 0.20,
    data: 0.20,
    activation: 0.15,
    reporting: 0.15,
    experimentation: 0.10,
    ai: 0.10,
    operating: 0.10
};

const q = (id, title, badge, hint) => ({ id, title, badge, hint, value: null });

export const baseModel = [
    {
        id: "measurement",
        name: "Measurement Foundation",
        desc: "Tracking, consent, instrumentation, data quality.",
        questions: [
            q("m_ga4", "GA4 is implemented with a consistent event taxonomy", "Measurement", "Key events + conversions with standardized naming."),
            q("m_gtm", "GTM is implemented and governed", "Tagging", "Environments, versioning, QA, change control exist."),
            q("m_consent", "Consent + Consent Mode v2 is configured", "Privacy", "Consent signals influence tags; PII controls exist."),
            q("m_ss", "Server-side tagging / secure collection is used", "Privacy-first", "Improves reliability and reduces PII leakage risk."),
            q("m_validate", "Conversion tracking is validated end-to-end", "Accuracy", "Deduping, offline reconciliation, periodic audits."),
            q("m_dq", "Data quality monitoring exists (alerts/anomalies)", "Reliability", "Automated checks for key KPIs.")
        ]
    },
    {
        id: "data",
        name: "Data & Identity",
        desc: "First-party data, warehouse, pipelines, identity, governance.",
        questions: [
            q("d_1p", "First-party data capture is structured (CRM/CDP/forms/orders)", "1P Data", "Identifiers captured responsibly and consistently."),
            q("d_bq", "A warehouse exists (e.g., BigQuery) with defined schemas", "Warehouse", "Centralized data with documentation + access controls."),
            q("d_dbt", "Pipelines are automated (dbt/airflow/etc.)", "Pipelines", "Repeatable transformations with testing and lineage."),
            q("d_id", "Identity strategy exists (user_id/hashed IDs)", "Identity", "Works across web/app/CRM while respecting privacy."),
            q("d_gov", "Governance exists (RBAC/audit/retention/PII scans)", "Governance", "Clear ownership and compliance workflows."),
            q("d_segments", "Data is activation-ready (audiences/segments/LTV cohorts)", "Activation", "Segments can be pushed to tools/media.")
        ]
    },
    {
        id: "activation",
        name: "Activation & Media",
        desc: "Integrations, value feedback, audiences, creative testing, budget allocation.",
        questions: [
            q("a_links", "Ads platforms are linked with clean measurement (UTM/channel mapping)", "Integrations", "Consistent attribution hygiene."),
            q("a_offline", "Offline/CRM conversions are imported", "Outcomes", "Lead quality / sales outcomes feed platforms."),
            q("a_aud", "Audience strategy exists (prospect/retarget/suppress)", "Audiences", "Segments refreshed, tested, outcome-driven."),
            q("a_creative", "Creative/messaging is tested systematically", "Creative", "Structured experiments not ad-hoc."),
            q("a_budget", "Multi-channel budget allocation is data-driven", "Optimization", "Uses incrementality, not just last-click."),
            q("a_full", "Brand + performance measurement is unified", "Full-funnel", "Includes consideration and revenue proxies.")
        ]
    },
    {
        id: "experimentation",
        name: "Experimentation & CRO",
        desc: "Testing cadence, funnel optimization, incrementality, personalization.",
        questions: [
            q("x_ab", "A/B testing tools/process exist (web/app)", "Testing", "Cadence, hypotheses, QA are defined."),
            q("x_lp", "Landing pages are optimized for conversion", "CRO", "Speed, UX, copy, forms optimized."),
            q("x_loop", "Experiment results are documented and reused", "Learning loop", "Knowledge base prevents repeated failures."),
            q("x_incr", "Incrementality mindset exists (holdouts/geo/lift)", "Incrementality", "Measures true impact beyond attribution."),
            q("x_funnel", "Funnels and journeys are instrumented & analyzed", "Journey", "Drop-offs tracked across steps/cohorts."),
            q("x_personal", "Personalization exists (rules-based or model-driven)", "Personalization", "Different experiences for segments/intent.")
        ]
    },
    {
        id: "reporting",
        name: "Reporting & Decisioning",
        desc: "KPI framework, dashboards, alerts, adoption, attribution, cadence.",
        questions: [
            q("r_kpi", "A single KPI tree / measurement framework exists", "KPI", "North-star + drivers with definitions."),
            q("r_dash", "Dashboards exist (Looker/Power BI) and are trusted", "Dashboards", "Definitions match finance/CRM; minimal manual."),
            q("r_auto", "Reporting is automated with refresh + alerts", "Automation", "Scheduled updates; anomaly alerts."),
            q("r_roles", "Role-based views exist (CXO/Marketing/Product)", "Adoption", "Right depth for each audience."),
            q("r_attr", "Attribution exists beyond last-click", "Attribution", "DDA/rules/MTA where possible."),
            q("r_rhythm", "Insights drive action (weekly reviews, owners, follow-ups)", "Operating rhythm", "Insights → decisions → tasks → re-measure.")
        ]
    },
    {
        id: "ai",
        name: "Advanced Analytics & AI",
        desc: "Models, MMM, forecasts, GenAI, MLOps.",
        questions: [
            q("ai_team", "Analytics/data science capability exists (in-house or partner)", "People", "Ability to build + maintain models."),
            q("ai_pred", "Predictive models exist (LTV/propensity/churn/lead scoring)", "Models", "Models used in workflows."),
            q("ai_mmm", "MMM or incrementality measurement exists", "MMM", "Budget decisions supported with causal thinking."),
            q("ai_fcst", "Forecasting exists (demand/pipeline/revenue)", "Forecasting", "Forward planning tied to performance."),
            q("ai_gen", "GenAI use cases exist (creative variants, insights, support)", "GenAI", "Use cases are governed and measurable."),
            q("ai_mlops", "Model monitoring and governance exist", "MLOps", "Drift checks, retraining cadence, documentation.")
        ]
    },
    {
        id: "operating",
        name: "Operating Model",
        desc: "Cross-functional team, documentation, security, stack strategy, roadmap, enablement.",
        questions: [
            q("o_xfn", "Cross-functional collaboration exists (marketing + data + product)", "Teams", "Clear ownership and shared goals."),
            q("o_docs", "Documentation exists (taxonomy/KPIs/pipelines/dashboards)", "Docs", "Fast onboarding and consistency."),
            q("o_sec", "Security & privacy controls are operationalized", "Compliance", "PII handling rules + incident response."),
            q("o_stack", "Tools rationalized with clear stack strategy", "Tech", "Defined architecture; minimal redundancy."),
            q("o_road", "Quarterly roadmap exists with measurable outcomes", "Roadmap", "Priorities tied to business impact."),
            q("o_enable", "Capability building exists (playbooks/training/certs)", "Enablement", "Continuous upskilling + adoption.")
        ]
    }
];

export const modeAddons = {
    general: [],
    ecommerce: [
        { cat: "measurement", q: q("ec_events", "Ecommerce events implemented (items, revenue, refunds)", "eCom", "GA4 ecommerce schema validated end-to-end.") },
        { cat: "data", q: q("ec_feed", "Product feed taxonomy is consistent (categories/attrs)", "Catalog", "Feed hygiene powers reporting + performance.") },
        { cat: "activation", q: q("ec_merchant", "Merchant Center + shopping measured correctly", "Shopping", "Product-level ROAS and revenue accuracy.") },
        { cat: "reporting", q: q("ec_profit", "Reporting includes profit/returns (not only ROAS)", "Profitability", "Optimizes on profit and LTV, not vanity ROAS.") }
    ],
    leadgen: [
        { cat: "measurement", q: q("lg_quality", "Lead quality tracked (MQL/SQL/Won)", "Lead quality", "CRM stages mapped to conversions + dashboards.") },
        { cat: "data", q: q("lg_crm", "CRM sync is robust with dedupe rules", "CRM", "Reliable IDs; lifecycle joins; dedupe strategy.") },
        { cat: "activation", q: q("lg_value", "Offline values passed back (pipeline/revenue value)", "Value-based", "Optimizes on revenue value, not CPL only.") },
        { cat: "reporting", q: q("lg_sla", "SLA exists between marketing & sales", "Ops", "Speed-to-lead & follow-up improves conversion.") }
    ],
    publisher: [
        { cat: "measurement", q: q("pb_tax", "Content taxonomy standardized (authors/categories/tags)", "Content", "Enables content insights + personalization.") },
        { cat: "data", q: q("pb_identity", "Subscriber/registration identity integrated safely", "Identity", "Connects registered journeys with privacy.") },
        { cat: "activation", q: q("pb_yield", "Yield + audience strategy connected (RPM/fill/viewability)", "Monetization", "Yield metrics + segments drive actions.") },
        { cat: "reporting", q: q("pb_eng", "Engagement cohorts instrumented (recirc/time/scroll)", "Engagement", "Retention and cohort tracking for decisions.") }
    ]
};

export const quickIds = new Set([
    "m_ga4", "m_gtm", "m_consent", "d_bq", "d_dbt",
    "a_offline", "r_kpi", "r_dash", "x_incr", "ai_pred"
]);

export const services = [
    { key: "ga4-gtm", title: "GA4 + GTM Implementation & Audit", body: "Event taxonomy, conversion validation, governance, accuracy fixes.", tags: "Measurement • Accuracy • Governance" },
    { key: "privacy", title: "Privacy-First Analytics (Consent + PII Controls)", body: "Consent Mode v2, server-side plan, PII filtering, RBAC guidance.", tags: "Privacy • Security • Risk" },
    { key: "bq-dbt", title: "BigQuery + dbt Data Foundation", body: "Automated pipelines, tested models, documentation, activation-ready datasets.", tags: "Warehouse • Pipelines • Data Products" },
    { key: "dashboards", title: "Executive Dashboards & Decisioning", body: "KPI tree, Looker/BI dashboards, alerts, weekly operating rhythm.", tags: "Reporting • Automation • Adoption" },
    { key: "attribution", title: "Attribution, Incrementality & MMM", body: "Holdouts/geo tests, MMM framework, true ROI optimization.", tags: "Causal • Budgeting • ROI" },
    { key: "cro", title: "Experimentation & CRO Program", body: "A/B cadence, hypotheses, landing optimization, funnel improvements.", tags: "CRO • Testing • Journey" },
    { key: "ai-genai", title: "AI / GenAI Enablement", body: "High-impact use cases, governance, measurement, workflow integration.", tags: "AI • GenAI • MLOps" },
    { key: "ecom", title: "eCommerce Measurement + Profit Layer", body: "Ecom accuracy, product reporting, margin/returns layer, feed governance.", tags: "eCommerce • Profit" },
    { key: "leadops", title: "Lead-to-Revenue Analytics + CRM Ops", body: "Lifecycle mapping, lead scoring, offline value import, speed-to-lead.", tags: "Lead-gen • CRM • Pipeline" },
    { key: "publisher", title: "Publisher Analytics + Yield & Engagement", body: "Content taxonomy, engagement cohorts, recirc analytics, yield reporting.", tags: "Publisher • Yield • Engagement" }
];

export const catReason = {
    measurement: {
        good: "Measurement foundations look strong (taxonomy/governance/consent trending mature).",
        mid: "Measurement is partly implemented but needs standardization and QA to become trusted.",
        bad: "Measurement foundations are missing/inconsistent—this blocks reliable ROI decisions."
    },
    data: {
        good: "Data foundation is in place (warehouse/pipelines/governance) enabling scalable insights.",
        mid: "Data exists, but pipelines/governance need strengthening to make it activation-ready.",
        bad: "Lack of a unified data foundation limits identity, segmentation, and advanced analytics."
    },
    activation: {
        good: "Activation loops are connected (offline outcomes/audiences) enabling smarter optimization.",
        mid: "Activation is present but mostly channel-level; needs outcome feedback + multi-channel orchestration.",
        bad: "Optimization is likely last-click/channel-only; outcomes aren't feeding back into media."
    },
    reporting: {
        good: "Decisioning is structured (KPI tree + trusted dashboards + cadence).",
        mid: "Dashboards exist but adoption/cadence needs tightening to drive actions consistently.",
        bad: "Without a KPI tree and trusted dashboards, teams can't align on performance truth."
    },
    experimentation: {
        good: "Experimentation is maturing (incrementality/testing) supporting true growth measurement.",
        mid: "Testing exists but needs a consistent learning loop and incrementality discipline.",
        bad: "No experimentation/incrementality means you can't prove true impact beyond attribution."
    },
    ai: {
        good: "Advanced analytics is active (predictive/MMM/GenAI) with potential for automation and personalization.",
        mid: "Some analytics exists, but models need operationalization (MLOps + workflow integration).",
        bad: "AI readiness is low—focus on foundations first, then move to high-impact AI use cases."
    },
    operating: {
        good: "Operating model supports scale (cross-functional ownership, documentation, roadmap).",
        mid: "Ownership exists but needs clearer governance, docs, and a measurable roadmap.",
        bad: "Without a strong operating model, improvements won't sustain or scale."
    }
};

export const catAction = {
    measurement: "Fix GA4/GTM governance, conversion validation, consent controls; then automate data quality checks.",
    data: "Strengthen warehouse + dbt models with governance (RBAC/PII scans) and activation-ready segments.",
    activation: "Implement offline outcome imports + audience strategy; test incrementality to guide budgets.",
    reporting: "Create KPI tree + executive dashboards; run a weekly decision cadence with owners & follow-ups.",
    experimentation: "Launch structured testing + learning loop; add incrementality framework (holdout/geo/lift).",
    ai: "Start 1–2 high-impact models (LTV/propensity/lead score) and operationalize with monitoring.",
    operating: "Define cross-functional ownership, documentation standards, and an outcome-based roadmap."
};
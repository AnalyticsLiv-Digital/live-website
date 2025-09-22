import React, { useState, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";

// Static case studies data
const staticCaseStudies = [
  {
    id: 1,
    title: "Amul India — Attribution & Insights",
    slug: "amul-india",
    description: "Unified measurement linking media to retail outcomes.",
    channel: "analytics",
    industry: "dairy",
    tags: ["Attribution"],
    coverimage:
      "https://storage.googleapis.com/website-bucket-uploads/case-studies/amul-hero.jpg",
    logoimage:
      "https://storage.googleapis.com/website-bucket-uploads/logos/amul.png",
    metrics: ["+320% ROAS", "Attribution"],
    isFeatured: true,
  },
  {
    id: 2,
    title: "Shoebacca — Performance Max",
    slug: "shoebacca-pmax",
    description: "26% higher ROAS with PMax + DV360 synergy.",
    channel: "pmax",
    industry: "ecommerce",
    tags: ["New Customers"],
    coverimage:
      "https://storage.googleapis.com/website-bucket-uploads/case-studies/shoebacca-hero.jpg",
    metrics: ["+26% ROAS", "New Customers"],
  },
  {
    id: 3,
    title: "Washington Examiner — 99% Accuracy with GTM",
    slug: "washington-examiner-gtm",
    description:
      "Mapped GA4 subscription data with 99% accuracy using only GTM.",
    channel: "analytics",
    industry: "publishing",
    tags: ["GA4", "GTM"],
    coverimage:
      "https://storage.googleapis.com/website-bucket-uploads/case-studies/washington-examiner-hero.jpg",
    metrics: ["99% Accuracy", "GA4", "GTM"],
  },
  {
    id: 4,
    title: "Artarium — Event‑Based Creatives (DV360)",
    slug: "artarium-event-creatives",
    description:
      "30% more conversions and 66% better CPA with festive narratives.",
    channel: "dv360",
    industry: "retail",
    tags: ["Seasonal"],
    coverimage:
      "https://storage.googleapis.com/website-bucket-uploads/case-studies/artarium-event-hero.jpg",
    metrics: ["+30% Conversions", "‑66% CPA", "Seasonal"],
  },
  {
    id: 5,
    title: "Artarium — Custom Bidding (DV360)",
    slug: "artarium-custom-bidding",
    description:
      "13× conversions, 95% lower CPA, and 42% higher CTR with value‑based bidding.",
    channel: "dv360",
    industry: "retail",
    tags: ["Custom Bids"],
    coverimage:
      "https://storage.googleapis.com/website-bucket-uploads/case-studies/artarium-custom-bid-hero.jpg",
    metrics: ["13× Conversions", "‑95% CPA", "Custom Bidding"],
  },
  {
    id: 6,
    title: "E‑commerce Optimization — CRO + Analytics",
    slug: "ecommerce-optimization",
    description:
      "A/B experimentation framework lifting conversion rates and AOV.",
    channel: "cro",
    industry: "ecommerce",
    tags: ["A/B Testing", "GA4"],
    coverimage:
      "https://storage.googleapis.com/website-bucket-uploads/case-studies/ecom-hero.jpg",
    metrics: ["A/B Testing", "Conversion Rate", "AOV"],
  },
  {
    id: 7,
    title: "Cloud Migration — Analytics Stack",
    slug: "cloud-migration",
    description:
      "From legacy to modern cloud analytics with automated pipelines.",
    channel: "analytics",
    industry: "technology",
    tags: ["BigQuery", "ETL"],
    coverimage:
      "https://storage.googleapis.com/website-bucket-uploads/case-studies/cloud-migration-hero.jpg",
    metrics: ["BigQuery", "ETL", "Automation"],
  },
  {
    id: 8,
    title: "Travel SEO — Organic Growth Strategy",
    slug: "travel-seo",
    description:
      "200% increase in organic traffic through technical SEO and content optimization.",
    channel: "seo",
    industry: "travel",
    tags: ["Technical SEO", "Content"],
    coverimage:
      "https://storage.googleapis.com/website-bucket-uploads/case-studies/travel-seo-hero.jpg",
    metrics: ["+200% Traffic", "Organic Growth", "Technical SEO"],
  },
];

const CaseStudyCard = ({ casestudy, isFeatured = false }) => {
  const getInitials = (title) => {
    if (!title) return "CS";
    return title
      .split(" ")
      .slice(0, 2)
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  const handleCardClick = (e) => {
    if (e.target.closest(".cta")) return; // Don't navigate if clicking CTA buttons
    window.location.href = `/case-studies/${casestudy.slug}`;
  };

  const handleDownloadClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Open lead modal - for now just alert
    alert(`Download PDF for: ${casestudy.title}`);
  };

  return (
    <article
      role="link"
      tabIndex={0}
      className={`card group relative overflow-hidden border border-slate-100 bg-white transition shadow-none hover:shadow-md cursor-pointer rounded-2xl ${
        isFeatured ? "sm:row-span-2" : ""
      }`}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleCardClick(e);
      }}
    >
      <div
        className={`thumb relative ${
          isFeatured ? "h-56 sm:h-full" : "aspect-[16/9]"
        }`}
      >
        {/* Skeleton loader */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>

        {/* Main image */}
        <img
          src={casestudy.coverimage}
          alt={casestudy.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-400 group-hover:scale-105"
          loading="lazy"
          onLoad={(e) => {
            const skeleton = e.target.previousElementSibling;
            if (skeleton) skeleton.remove();
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        {/* Channel/Industry badge */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-slate-700 border border-slate-200">
          {casestudy.channel.charAt(0).toUpperCase() +
            casestudy.channel.slice(1)}
          <span className="hidden sm:inline">
            ·{" "}
            {casestudy.industry.charAt(0).toUpperCase() +
              casestudy.industry.slice(1)}
          </span>
        </div>

        {/* Logo (for featured card) */}
        {isFeatured && casestudy.logoimage && (
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <img
              src={casestudy.logoimage}
              className="h-10 w-10 rounded-full border border-white bg-white p-1 shadow"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "inline-flex";
              }}
            />
            <span className="logo-fallback hidden inline-flex items-center justify-center w-10 h-10 rounded-full font-bold bg-white text-slate-900 border border-white text-sm">
              {getInitials(casestudy.title)}
            </span>
          </div>
        )}

        {/* Hover overlay - 40% height from bottom */}
        <div className="overlay absolute inset-x-0 bottom-0 h-2/5 opacity-0 transform translate-y-full transition-all duration-[450ms] ease-out group-hover:opacity-100 group-hover:translate-y-0">
          <div className="h-full bg-gradient-to-t from-[rgba(15,23,42,0.85)] to-[rgba(15,23,42,0.20)] text-white p-4 flex items-end">
            <div className="w-full flex items-end justify-between gap-4">
              <div className="min-w-0">
                <div className="text-[11px] opacity-80 pt-1">Case Study</div>
                <div className="text-sm md:text-base font-semibold truncate">
                  {casestudy.title}
                </div>
                <p className="mt-0.5 text-[11px] md:text-xs opacity-90 line-clamp-1 truncate">
                  {casestudy.description}
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button className="cta cta-primary inline-flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:opacity-90 transition-opacity">
                  Read more
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="cta cta-secondary inline-flex items-center gap-2 px-3 py-2 text-xs rounded-lg border border-white/55 bg-white/12 text-white backdrop-blur hover:bg-white/18 transition-colors"
                  onClick={handleDownloadClick}
                >
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card content below image */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:underline">
          {casestudy.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">
          {casestudy.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
          {casestudy.metrics?.slice(0, 2).map((metric, index) => (
            <span
              key={index}
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 ${
                metric.includes("+") ||
                metric.includes("‑") ||
                metric.includes("%")
                  ? "border border-emerald-200 text-emerald-700 bg-emerald-50"
                  : "border border-slate-200 text-slate-700"
              }`}
            >
              {metric}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl transition-colors
       border border-slate-300
        ${
          currentPage === 1
            ? "text-slate-400 cursor-not-allowed"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Previous
      </button>

      {/* Page numbers */}
      {getVisiblePages().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="px-3 py-2 text-slate-400">...</span>
          ) : (
            <button
              onClick={() => onPageChange(page)}
              className={`transition-colors border border-slate-300
              rounded-xl px-4 py-2 text-sm
              ${
                currentPage === page
                  ? "bg-slate-900 text-white"
                  : "text-slate-900 bg-white hover:bg-slate-100"
              }`}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
          currentPage === totalPages
            ? "text-slate-400 cursor-not-allowed"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        Next
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [channelFilter, setChannelFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique channels and industries
  const channels = [
    ...new Set(staticCaseStudies.map((item) => item.channel)),
  ].sort();
  const industries = [
    ...new Set(staticCaseStudies.map((item) => item.industry)),
  ].sort();

  // Filter case studies based on search and filters
  const filteredData = useMemo(() => {
    return staticCaseStudies.filter((item) => {
      const searchMatch =
        !searchQuery ||
        item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const channelMatch =
        !channelFilter ||
        item.channel?.toLowerCase() === channelFilter.toLowerCase();

      const industryMatch =
        !industryFilter ||
        item.industry?.toLowerCase() === industryFilter.toLowerCase();

      return searchMatch && channelMatch && industryMatch;
    });
  }, [searchQuery, channelFilter, industryFilter]);

  // Pagination logic
  const { paginatedData, totalPages } = useMemo(() => {
    const itemsPerPage = currentPage === 1 ? 5 : 6; // First page: 5 items, others: 6 items

    let startIndex;
    if (currentPage === 1) {
      startIndex = 0;
    } else {
      startIndex = 5 + (currentPage - 2) * 6; // 5 from first page + (page-2) * 6
    }

    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredData.slice(startIndex, endIndex);

    // Calculate total pages
    const totalItems = filteredData.length;
    const totalPagesCount =
      totalItems <= 5 ? 1 : Math.ceil((totalItems - 5) / 6) + 1;

    return {
      paginatedData: paginatedItems,
      totalPages: totalPagesCount,
    };
  }, [filteredData, currentPage]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, channelFilter, industryFilter]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // handlePageChange function with scroll to case studies section
  const handlePageChange = (page) => {
    setCurrentPage(page);

    // Scroll to the case studies grid section instead of top
    const caseStudiesSection = document.querySelector(
      '[data-section="case-studies-grid"]'
    );
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // Aligns to the top of the section
      });
    }
  };

  return (
    <>
      <Head>
        <title>Case Studies | AnalyticsLiv</title>
        <meta
          name="description"
          content="Explore real case studies where AnalyticsLiv delivered measurable growth across e-commerce, BFSI, travel, publishers, and more with data-driven marketing, CRO, PPC, and programmatic strategies."
        />
        <link rel="canonical" href="https://analyticsliv.com/case-studies" />

        {/* Open Graph */}
        <meta property="og:title" content="Case Studies | AnalyticsLiv" />
        <meta
          property="og:description"
          content="Real client success stories across industries — powered by AnalyticsLiv."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://analyticsliv.com/case-studies"
        />
        <meta
          property="og:image"
          content="https://analyticsliv.com/static/logo.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | AnalyticsLiv" />
        <meta
          name="twitter:description"
          content="Explore how AnalyticsLiv drives measurable growth for brands worldwide."
        />
        <meta
          name="twitter:image"
          content="https://analyticsliv.com/static/logo.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="bg-white text-slate-800"
        style={{
          fontFamily:
            'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
        }}
      >
        {/* Featured Case Study Banner */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50 rounded-3xl m-6 shadow-sm">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-[11px] font-medium text-emerald-700">
                Case Study · Dairy · Analytics
              </div>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Amul India — Attribution & Insights
              </h1>
              <p className="mt-3 text-slate-600 md:text-lg max-w-xl">
                Unified measurement linking media to retail outcomes. Building
                an always-on loop between media, distribution and sales.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50 transition-colors"
                >
                  ← All case studies
                </Link>
                <Link
                  href="/case-studies/amul-india"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-4 py-2 text-sm hover:bg-emerald-700 transition-colors"
                >
                  Read Case Study
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/logos/amul.png"
                alt="Amul logo"
                className="h-12 md:h-16 drop-shadow-md"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <img
                src="/assets/products/amul-butter.png"
                alt="Amul product"
                className="mt-6 ml-6 w-[480px] max-w-full rounded-3xl shadow-xl ring-1 ring-black/5"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1200&q=80&auto=format&fit=crop";
                }}
              />
              <div className="pointer-events-none absolute -z-10 -top-16 -right-16 h-64 w-64 rounded-full bg-red-500/10 blur-3xl"></div>
              <div className="pointer-events-none absolute -z-10 -bottom-10 -left-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* HERO SECTION */}
        <section className="border-t border-slate-100 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-emerald-700">
                  Case Studies
                </div>
                <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  <span
                    className="bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-600 bg-[length:200%_100%] bg-clip-text text-transparent"
                    style={{
                      animation: "shine 12s ease-in-out infinite",
                    }}
                  >
                    Delivering measurable outcomes
                  </span>
                  <span className="block mt-2 text-slate-700 text-xl md:text-2xl">
                    Every single day
                  </span>
                </h2>
                <p className="mt-4 max-w-2xl text-slate-600">
                  Browse real results by channel and industry. Click a card to
                  dive deeper, or download a PDF after a quick lead form.
                </p>
              </div>

              {/* Quick filter chips */}
              <div className="mt-2 w-full md:w-auto">
                <div className="flex gap-2 overflow-x-auto no-scrollbar">
                  {channels.slice(0, 4).map((channel) => (
                    <button
                      key={channel}
                      onClick={() =>
                        setChannelFilter(
                          channelFilter === channel ? "" : channel
                        )
                      }
                      className={`rounded-full border px-3 py-1.5 text-sm whitespace-nowrap transition-colors ${
                        channelFilter === channel
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-slate-300 text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      {channel.charAt(0).toUpperCase() + channel.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcomes ticker */}
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-white">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-white to-sky-50/50"></div>
              <div
                className="relative flex gap-6 whitespace-nowrap py-3 pl-4"
                style={{
                  animation: "ticker 60s linear infinite",
                }}
              >
                <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
                    +320% ROAS
                  </span>
                  Amul India — Attribution & Insights
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
                    +26% ROAS
                  </span>
                  Shoebacca — Performance Max
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
                    99% Accuracy
                  </span>
                  Washington Examiner — GTM
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
                    13× Conversions
                  </span>
                  Artarium — Custom Bidding
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
                    ‑66% CPA
                  </span>
                  Event‑based Creatives — DV360
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="py-6 border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <form
                onSubmit={handleSearch}
                className="flex items-center w-full md:w-2/3"
              >
                <input
                  type="search"
                  placeholder="Search by client, channel, industry, or outcome…"
                  className="w-full rounded-l-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-emerald-600 text-white rounded-r-xl border border-emerald-600 px-4 py-[15px] hover:bg-emerald-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>

              <div className="flex gap-3 w-full md:w-auto">
                <select
                  value={channelFilter}
                  onChange={(e) => setChannelFilter(e.target.value)}
                  className="rounded-xl border border-slate-300 px-3 py-3 w-1/2 md:w-auto focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">All Channels</option>
                  {channels.map((channel) => (
                    <option key={channel} value={channel}>
                      {channel.charAt(0).toUpperCase() + channel.slice(1)}
                    </option>
                  ))}
                </select>

                <select
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                  className="rounded-xl border border-slate-300 px-3 py-3 w-1/2 md:w-auto focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">All Industries</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry.charAt(0).toUpperCase() + industry.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results count */}
            {filteredData.length > 0 && (
              <div className="mt-4 text-sm text-slate-600">
                Showing {paginatedData.length} of {filteredData.length} case
                studies
                {currentPage > 1 && ` (Page ${currentPage} of ${totalPages})`}
              </div>
            )}
          </div>
        </section>

        {/* CASE STUDIES GRID */}
        <section
          className="py-14 border-t border-slate-100"
          data-section="case-studies-grid"
        >
          <div className="mx-auto max-w-7xl px-6">
            {filteredData.length > 0 ? (
              <>
                {/* First page special layout: Amul featured + 4 regular cards */}
                {currentPage === 1 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedData.map((casestudy, index) => (
                      <CaseStudyCard
                        key={casestudy.id}
                        casestudy={casestudy}
                        isFeatured={casestudy.isFeatured && index === 0}
                      />
                    ))}
                  </div>
                ) : (
                  /* Other pages: Regular 2x3 grid */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedData.map((casestudy) => (
                      <CaseStudyCard
                        key={casestudy.id}
                        casestudy={casestudy}
                        isFeatured={false}
                      />
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-12 h-12 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p className="text-slate-500 text-lg">
                  No case studies match your filters. Try clearing them.
                </p>
                <button
                  onClick={() => {
                    setChannelFilter("");
                    setIndustryFilter("");
                    setSearchQuery("");
                  }}
                  className="mt-4 inline-flex items-center rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm hover:bg-emerald-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-emerald-600 py-16 text-white text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-bold">Want results like these?</h2>
            <p className="mt-2 text-lg text-emerald-100">
              Let's build your next growth story together.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-slate-900 font-semibold shadow hover:opacity-90 transition-opacity"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Index;

// import React, { useState, useMemo } from "react";
// import Head from "next/head";
// import Link from "next/link";

// // Static case studies data
// const staticCaseStudies = [
//   {
//     id: 1,
//     title: "Amul India — Attribution & Insights",
//     slug: "amul-india",
//     description: "Unified measurement linking media to retail outcomes.",
//     channel: "analytics",
//     industry: "dairy",
//     tags: ["Attribution"],
//     coverimage:
//       "https://storage.googleapis.com/website-bucket-uploads/case-studies/amul-hero.jpg",
//     logoimage:
//       "https://storage.googleapis.com/website-bucket-uploads/logos/amul.png",
//     metrics: ["+320% ROAS", "Attribution"],
//     isFeatured: true,
//   },
//   {
//     id: 2,
//     title: "Shoebacca — Performance Max",
//     slug: "shoebacca-pmax",
//     description: "26% higher ROAS with PMax + DV360 synergy.",
//     channel: "pmax",
//     industry: "ecommerce",
//     tags: ["New Customers"],
//     coverimage:
//       "https://storage.googleapis.com/website-bucket-uploads/case-studies/shoebacca-hero.jpg",
//     metrics: ["+26% ROAS", "New Customers"],
//   },
//   {
//     id: 3,
//     title: "Washington Examiner — 99% Accuracy with GTM",
//     slug: "washington-examiner-gtm",
//     description:
//       "Mapped GA4 subscription data with 99% accuracy using only GTM.",
//     channel: "analytics",
//     industry: "publishing",
//     tags: ["GA4", "GTM"],
//     coverimage:
//       "https://storage.googleapis.com/website-bucket-uploads/case-studies/washington-examiner-hero.jpg",
//     metrics: ["99% Accuracy", "GA4", "GTM"],
//   },
//   {
//     id: 4,
//     title: "Artarium — Event‑Based Creatives (DV360)",
//     slug: "artarium-event-creatives",
//     description:
//       "30% more conversions and 66% better CPA with festive narratives.",
//     channel: "dv360",
//     industry: "retail",
//     tags: ["Seasonal"],
//     coverimage:
//       "https://storage.googleapis.com/website-bucket-uploads/case-studies/artarium-event-hero.jpg",
//     metrics: ["+30% Conversions", "‑66% CPA", "Seasonal"],
//   },
//   {
//     id: 5,
//     title: "Artarium — Custom Bidding (DV360)",
//     slug: "artarium-custom-bidding",
//     description:
//       "13× conversions, 95% lower CPA, and 42% higher CTR with value‑based bidding.",
//     channel: "dv360",
//     industry: "retail",
//     tags: ["Custom Bids"],
//     coverimage:
//       "https://storage.googleapis.com/website-bucket-uploads/case-studies/artarium-custom-bid-hero.jpg",
//     metrics: ["13× Conversions", "‑95% CPA", "Custom Bidding"],
//   },
//   {
//     id: 6,
//     title: "E‑commerce Optimization — CRO + Analytics",
//     slug: "ecommerce-optimization",
//     description:
//       "A/B experimentation framework lifting conversion rates and AOV.",
//     channel: "cro",
//     industry: "ecommerce",
//     tags: ["A/B Testing", "GA4"],
//     coverimage:
//       "https://storage.googleapis.com/website-bucket-uploads/case-studies/ecom-hero.jpg",
//     metrics: ["A/B Testing", "Conversion Rate", "AOV"],
//   },
//   {
//     id: 7,
//     title: "Cloud Migration — Analytics Stack",
//     slug: "cloud-migration",
//     description:
//       "From legacy to modern cloud analytics with automated pipelines.",
//     channel: "analytics",
//     industry: "technology",
//     tags: ["BigQuery", "ETL"],
//     coverimage:
//       "https://storage.googleapis.com/website-bucket-uploads/case-studies/cloud-migration-hero.jpg",
//     metrics: ["BigQuery", "ETL", "Automation"],
//   },
//   {
//     id: 8,
//     title: "Travel SEO — Organic Growth Strategy",
//     slug: "travel-seo",
//     description:
//       "200% increase in organic traffic through technical SEO and content optimization.",
//     channel: "seo",
//     industry: "travel",
//     tags: ["Technical SEO", "Content"],
//     coverimage:
//       "https://storage.googleapis.com/website-bucket-uploads/case-studies/travel-seo-hero.jpg",
//     metrics: ["+200% Traffic", "Organic Growth", "Technical SEO"],
//   },
// ];

// const CaseStudyCard = ({ casestudy, isFeatured = false }) => {
//   const getInitials = (title) => {
//     if (!title) return "CS";
//     return title
//       .split(" ")
//       .slice(0, 2)
//       .map((word) => word.charAt(0))
//       .join("")
//       .toUpperCase();
//   };

//   const handleCardClick = (e) => {
//     if (e.target.closest(".cta")) return; // Don't navigate if clicking CTA buttons
//     window.location.href = `/case-studies/${casestudy.slug}`;
//   };

//   const handleDownloadClick = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     // Open lead modal - for now just alert
//     alert(`Download PDF for: ${casestudy.title}`);
//   };

//   return (
//     <article
//       role="link"
//       tabIndex={0}
//       className={`card group relative overflow-hidden border border-slate-100 bg-white transition shadow-none hover:shadow-md cursor-pointer rounded-2xl ${
//         isFeatured ? "sm:row-span-2" : ""
//       }`}
//       onClick={handleCardClick}
//       onKeyDown={(e) => {
//         if (e.key === "Enter") handleCardClick(e);
//       }}
//     >
//       <div
//         className={`thumb relative ${
//           isFeatured ? "h-56 sm:h-full" : "aspect-[16/9]"
//         }`}
//       >
//         {/* Skeleton loader */}
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>

//         {/* Main image */}
//         <img
//           src={casestudy.coverimage}
//           alt={casestudy.title}
//           className="absolute inset-0 h-full w-full object-cover transition-transform duration-400 group-hover:scale-105"
//           loading="lazy"
//           onLoad={(e) => {
//             const skeleton = e.target.previousElementSibling;
//             if (skeleton) skeleton.remove();
//           }}
//           onError={(e) => {
//             e.target.style.display = "none";
//           }}
//         />

//         {/* Channel/Industry badge */}
//         <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-slate-700 border border-slate-200">
//           {casestudy.channel.charAt(0).toUpperCase() +
//             casestudy.channel.slice(1)}
//           <span className="hidden sm:inline">
//             ·{" "}
//             {casestudy.industry.charAt(0).toUpperCase() +
//               casestudy.industry.slice(1)}
//           </span>
//         </div>

//         {/* Logo (for featured card) */}
//         {isFeatured && casestudy.logoimage && (
//           <div className="absolute bottom-3 left-3 flex items-center gap-2">
//             <img
//               src={casestudy.logoimage}
//               className="h-10 w-10 rounded-full border border-white bg-white p-1 shadow"
//               onError={(e) => {
//                 e.target.style.display = "none";
//                 e.target.nextElementSibling.style.display = "inline-flex";
//               }}
//             />
//             <span className="logo-fallback hidden inline-flex items-center justify-center w-10 h-10 rounded-full font-bold bg-white text-slate-900 border border-white text-sm">
//               {getInitials(casestudy.title)}
//             </span>
//           </div>
//         )}

//         {/* Hover overlay - 40% height from bottom */}
//         <div className="overlay absolute inset-x-0 bottom-0 h-2/5 opacity-0 transform translate-y-full transition-all duration-[450ms] ease-out group-hover:opacity-100 group-hover:translate-y-0">
//           <div className="h-full bg-gradient-to-t from-[rgba(15,23,42,0.85)] to-[rgba(15,23,42,0.20)] text-white p-4 flex items-end">
//             <div className="w-full flex items-end justify-between gap-4">
//               <div className="min-w-0">
//                 <div className="text-[11px] opacity-80 pt-1">Case Study</div>
//                 <div className="text-sm md:text-base font-semibold truncate">
//                   {casestudy.title}
//                 </div>
//                 <p className="mt-0.5 text-[11px] md:text-xs opacity-90 line-clamp-1 truncate">
//                   {casestudy.description}
//                 </p>
//               </div>
//               <div className="flex gap-2 shrink-0">
//                 <button className="cta cta-primary inline-flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:opacity-90 transition-opacity">
//                   Read more
//                   <svg
//                     className="w-3 h-3"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//                 <button
//                   className="cta cta-secondary inline-flex items-center gap-2 px-3 py-2 text-xs rounded-lg border border-white/55 bg-white/12 text-white backdrop-blur hover:bg-white/18 transition-colors"
//                   onClick={handleDownloadClick}
//                 >
//                   <svg
//                     className="w-3 h-3"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
//                   </svg>
//                   Download
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Card content below image */}
//       <div className="p-6">
//         <h3 className="text-lg font-semibold text-slate-900 group-hover:underline">
//           {casestudy.title}
//         </h3>
//         <p className="mt-2 text-sm text-slate-600 line-clamp-2">
//           {casestudy.description}
//         </p>
//         <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
//           {casestudy.metrics?.slice(0, 2).map((metric, index) => (
//             <span
//               key={index}
//               className={`inline-flex items-center rounded-full px-2.5 py-0.5 ${
//                 metric.includes("+") ||
//                 metric.includes("‑") ||
//                 metric.includes("%")
//                   ? "border border-emerald-200 text-emerald-700 bg-emerald-50"
//                   : "border border-slate-200 text-slate-700"
//               }`}
//             >
//               {metric}
//             </span>
//           ))}
//         </div>
//       </div>
//     </article>
//   );
// };

// const Index = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [channelFilter, setChannelFilter] = useState("");
//   const [industryFilter, setIndustryFilter] = useState("");

//   // Get unique channels and industries
//   const channels = [
//     ...new Set(staticCaseStudies.map((item) => item.channel)),
//   ].sort();
//   const industries = [
//     ...new Set(staticCaseStudies.map((item) => item.industry)),
//   ].sort();

//   // Filter case studies based on search and filters
//   const filteredData = useMemo(() => {
//     return staticCaseStudies.filter((item) => {
//       const searchMatch =
//         !searchQuery ||
//         item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.tags?.some((tag) =>
//           tag.toLowerCase().includes(searchQuery.toLowerCase())
//         );

//       const channelMatch =
//         !channelFilter ||
//         item.channel?.toLowerCase() === channelFilter.toLowerCase();

//       const industryMatch =
//         !industryFilter ||
//         item.industry?.toLowerCase() === industryFilter.toLowerCase();

//       return searchMatch && channelMatch && industryMatch;
//     });
//   }, [searchQuery, channelFilter, industryFilter]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <Head>
//         <title>Case Studies | AnalyticsLiv</title>
//         <meta
//           name="description"
//           content="Explore real case studies where AnalyticsLiv delivered measurable growth across e-commerce, BFSI, travel, publishers, and more with data-driven marketing, CRO, PPC, and programmatic strategies."
//         />
//         <link rel="canonical" href="https://analyticsliv.com/case-studies" />

//         {/* Open Graph */}
//         <meta property="og:title" content="Case Studies | AnalyticsLiv" />
//         <meta
//           property="og:description"
//           content="Real client success stories across industries — powered by AnalyticsLiv."
//         />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:url"
//           content="https://analyticsliv.com/case-studies"
//         />
//         <meta
//           property="og:image"
//           content="https://analyticsliv.com/static/logo.png"
//         />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Case Studies | AnalyticsLiv" />
//         <meta
//           name="twitter:description"
//           content="Explore how AnalyticsLiv drives measurable growth for brands worldwide."
//         />
//         <meta
//           name="twitter:image"
//           content="https://analyticsliv.com/static/logo.png"
//         />

//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
//           rel="stylesheet"
//         />
//       </Head>

//       <div
//         className="bg-white text-slate-800"
//         style={{
//           fontFamily:
//             'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
//         }}
//       >
//         {/* Featured Case Study Banner */}
//         <section className="relative isolate overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50 rounded-3xl m-6 shadow-sm">
//           <div className="mx-auto max-w-7xl px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-[11px] font-medium text-emerald-700">
//                 Case Study · Dairy · Analytics
//               </div>
//               <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
//                 Amul India — Attribution & Insights
//               </h1>
//               <p className="mt-3 text-slate-600 md:text-lg max-w-xl">
//                 Unified measurement linking media to retail outcomes. Building
//                 an always-on loop between media, distribution and sales.
//               </p>
//               <div className="mt-6 flex gap-3">
//                 <Link
//                   href="/case-studies"
//                   className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50 transition-colors"
//                 >
//                   ← All case studies
//                 </Link>
//                 <Link
//                   href="/case-studies/amul-india"
//                   className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-4 py-2 text-sm hover:bg-emerald-700 transition-colors"
//                 >
//                   Read Case Study
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//             <div className="relative">
//               <img
//                 src="/assets/logos/amul.png"
//                 alt="Amul logo"
//                 className="h-12 md:h-16 drop-shadow-md"
//                 onError={(e) => {
//                   e.target.style.display = "none";
//                 }}
//               />
//               <img
//                 src="/assets/products/amul-butter.png"
//                 alt="Amul product"
//                 className="mt-6 ml-6 w-[480px] max-w-full rounded-3xl shadow-xl ring-1 ring-black/5"
//                 onError={(e) => {
//                   e.target.src =
//                     "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1200&q=80&auto=format&fit=crop";
//                 }}
//               />
//               <div className="pointer-events-none absolute -z-10 -top-16 -right-16 h-64 w-64 rounded-full bg-red-500/10 blur-3xl"></div>
//               <div className="pointer-events-none absolute -z-10 -bottom-10 -left-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl"></div>
//             </div>
//           </div>
//         </section>

//         {/* HERO SECTION */}
//         <section className="border-t border-slate-100 bg-gradient-to-b from-white to-slate-50">
//           <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
//             <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
//               <div>
//                 <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-medium tracking-wide text-emerald-700">
//                   Case Studies
//                 </div>
//                 <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
//                   <span
//                     className="bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-600 bg-[length:200%_100%] bg-clip-text text-transparent"
//                     style={{
//                       animation: "shine 12s ease-in-out infinite",
//                     }}
//                   >
//                     Delivering measurable outcomes
//                   </span>
//                   <span className="block mt-2 text-slate-700 text-xl md:text-2xl">
//                     Every single day
//                   </span>
//                 </h2>
//                 <p className="mt-4 max-w-2xl text-slate-600">
//                   Browse real results by channel and industry. Click a card to
//                   dive deeper, or download a PDF after a quick lead form.
//                 </p>
//               </div>

//               {/* Quick filter chips */}
//               <div className="mt-2 w-full md:w-auto">
//                 <div className="flex gap-2 overflow-x-auto no-scrollbar">
//                   {channels.slice(0, 4).map((channel) => (
//                     <button
//                       key={channel}
//                       onClick={() =>
//                         setChannelFilter(
//                           channelFilter === channel ? "" : channel
//                         )
//                       }
//                       className={`rounded-full border px-3 py-1.5 text-sm whitespace-nowrap transition-colors ${
//                         channelFilter === channel
//                           ? "border-emerald-500 bg-emerald-50 text-emerald-700"
//                           : "border-slate-300 text-slate-700 hover:border-slate-400"
//                       }`}
//                     >
//                       {channel.charAt(0).toUpperCase() + channel.slice(1)}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Outcomes ticker */}
//             <div className="relative mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-white">
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-white to-sky-50/50"></div>
//               <div
//                 className="relative flex gap-6 whitespace-nowrap py-3 pl-4"
//                 style={{
//                   animation: "ticker 60s linear infinite",
//                 }}
//               >
//                 <span className="inline-flex items-center gap-2 text-sm text-slate-600">
//                   <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
//                     +320% ROAS
//                   </span>
//                   Amul India — Attribution & Insights
//                 </span>
//                 <span className="inline-flex items-center gap-2 text-sm text-slate-600">
//                   <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
//                     +26% ROAS
//                   </span>
//                   Shoebacca — Performance Max
//                 </span>
//                 <span className="inline-flex items-center gap-2 text-sm text-slate-600">
//                   <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
//                     99% Accuracy
//                   </span>
//                   Washington Examiner — GTM
//                 </span>
//                 <span className="inline-flex items-center gap-2 text-sm text-slate-600">
//                   <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
//                     13× Conversions
//                   </span>
//                   Artarium — Custom Bidding
//                 </span>
//                 <span className="inline-flex items-center gap-2 text-sm text-slate-600">
//                   <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
//                     ‑66% CPA
//                   </span>
//                   Event‑based Creatives — DV360
//                 </span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* FILTER BAR */}
//         <section className="py-6 border-b border-slate-200 bg-white">
//           <div className="mx-auto max-w-7xl px-6">
//             <div className="flex flex-col md:flex-row gap-4 items-center">
//               <form
//                 onSubmit={handleSearch}
//                 className="flex items-center w-full md:w-2/3"
//               >
//                 <input
//                   type="search"
//                   placeholder="Search by client, channel, industry, or outcome…"
//                   className="w-full rounded-l-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <button
//                   type="submit"
//                   className="bg-emerald-600 text-white rounded-r-xl border border-emerald-600 px-4 py-[15px] hover:bg-emerald-700 transition-colors"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                     />
//                   </svg>
//                 </button>
//               </form>

//               <div className="flex gap-3 w-full md:w-auto">
//                 <select
//                   value={channelFilter}
//                   onChange={(e) => setChannelFilter(e.target.value)}
//                   className="rounded-xl border border-slate-300 px-3 py-3 w-1/2 md:w-auto focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                 >
//                   <option value="">All Channels</option>
//                   {channels.map((channel) => (
//                     <option key={channel} value={channel}>
//                       {channel.charAt(0).toUpperCase() + channel.slice(1)}
//                     </option>
//                   ))}
//                 </select>

//                 <select
//                   value={industryFilter}
//                   onChange={(e) => setIndustryFilter(e.target.value)}
//                   className="rounded-xl border border-slate-300 px-3 py-3 w-1/2 md:w-auto focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                 >
//                   <option value="">All Industries</option>
//                   {industries.map((industry) => (
//                     <option key={industry} value={industry}>
//                       {industry.charAt(0).toUpperCase() + industry.slice(1)}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CASE STUDIES GRID */}
//         <section className="py-14 border-t border-slate-100">
//           <div className="mx-auto max-w-7xl px-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredData.length > 0 ? (
//                 filteredData.map((casestudy, index) => (
//                   <CaseStudyCard
//                     key={casestudy.id}
//                     casestudy={casestudy}
//                     isFeatured={casestudy.isFeatured && index === 0}
//                   />
//                 ))
//               ) : (
//                 <div className="col-span-full text-center py-12">
//                   <div className="mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
//                     <svg
//                       className="w-12 h-12 text-slate-400"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                       />
//                     </svg>
//                   </div>
//                   <p className="text-slate-500 text-lg">
//                     No case studies match your filters. Try clearing them.
//                   </p>
//                   <button
//                     onClick={() => {
//                       setChannelFilter("");
//                       setIndustryFilter("");
//                       setSearchQuery("");
//                     }}
//                     className="mt-4 inline-flex items-center rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm hover:bg-emerald-700 transition-colors"
//                   >
//                     Clear all filters
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* CTA SECTION */}
//         <section className="bg-emerald-600 py-16 text-white text-center">
//           <div className="mx-auto max-w-3xl px-6">
//             <h2 className="text-3xl font-bold">Want results like these?</h2>
//             <p className="mt-2 text-lg text-emerald-100">
//               Let's build your next growth story together.
//             </p>
//             <Link
//               href="/contact"
//               className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-slate-900 font-semibold shadow hover:opacity-90 transition-opacity"
//             >
//               Book a Free Strategy Call
//             </Link>
//           </div>
//         </section>
//       </div>

//       <style jsx>{`
//         @keyframes shine {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }

//         @keyframes ticker {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }

//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }

//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Index;

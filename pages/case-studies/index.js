import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Casestudy from '../../components/Casestudy';

const index = ({ casestudyDat }) => {
  const router = useRouter();
  const { s } = router.query;

  const [casestudyData, setCasestudyData] = useState(casestudyDat?.casestudy || []);
  const [searchQuery, setSearchQuery] = useState(s || '');
  const [currentPage, setCurrentPage] = useState(1);
  const [channelFilter, setChannelFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');

  const itemsPerPage = 9;

  // Filter data based on search, channel, and industry
  const filteredData = casestudyData?.filter(item => {
    const searchMatch = !searchQuery ||
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const channelMatch = !channelFilter ||
      item.channel?.toLowerCase() === channelFilter.toLowerCase() ||
      item.tags?.some(tag => tag.toLowerCase() === channelFilter.toLowerCase());

    const industryMatch = !industryFilter ||
      item.industry?.toLowerCase() === industryFilter.toLowerCase() ||
      item.tags?.some(tag => tag.toLowerCase() === industryFilter.toLowerCase());

    return searchMatch && channelMatch && industryMatch;
  }) || [];

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      handleScrollToTop();
    }
  };

  const handleScrollToTop = () => {
    const targetElement = document.getElementById("case-studies-grid");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchFilteredData = async () => {
      if (s) {
        try {
          const res = await fetch(`/api/casestudiesfilter?search=${s}`);
          const data = await res.json();
          setCasestudyData(data.casestudy);
        } catch (error) {
          console.error("Error fetching filtered case studies:", error);
        }
      } else {
        setCasestudyData(casestudyDat?.casestudy || []);
      }
    };

    fetchFilteredData();
  }, [s, casestudyDat]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/case-studies?s=${searchQuery}`);
    } else {
      router.push(`/case-studies`);
    }
  };

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, channelFilter, industryFilter]);

  const gradientColors = [
    'from-emerald-50 via-white to-sky-50',
    'from-sky-50 via-white to-emerald-50',
    'from-indigo-50 via-white to-emerald-50',
    'from-amber-50 via-white to-emerald-50',
    'from-rose-50 via-white to-indigo-50',
    'from-green-50 via-white to-slate-50',
    'from-slate-50 via-white to-rose-50',
    'from-purple-50 via-white to-indigo-50',
    'from-teal-50 via-white to-emerald-50',
  ];

  return (
    <>
      <Head>
        <title>Case Studies | AnalyticsLiv</title>
        <meta name="description" content="Explore real case studies where AnalyticsLiv delivered measurable growth across e-commerce, BFSI, travel, publishers, and more with data-driven marketing, CRO, PPC, and programmatic strategies." />
        <link rel="canonical" href="https://analyticsliv.com/case-studies" />

        {/* Open Graph */}
        <meta property="og:title" content="Case Studies | AnalyticsLiv" />
        <meta property="og:description" content="Real client success stories across industries — powered by AnalyticsLiv." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://analyticsliv.com/case-studies" />
        <meta property="og:image" content="https://analyticsliv.com/static/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | AnalyticsLiv" />
        <meta name="twitter:description" content="Explore how AnalyticsLiv drives measurable growth for brands worldwide." />
        <meta name="twitter:image" content="https://analyticsliv.com/static/logo.png" />
      </Head>

      <div className="bg-white text-slate-800" style={{
        fontFamily:
          'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"',
      }}>
        {/* HERO */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              <span className="
             bg-[linear-gradient(90deg,#0f172a,#059669,#0ea5e9,#0f172a)] 
             bg-[length:200%_100%] 
             bg-clip-text text-transparent 
             animate-shift">
                Client Results & Case Studies
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Proof over promises - measurable growth delivered across industries.
            </p>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="py-6 border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 flex justify-center gap-4 items-center">
            <form onSubmit={handleSearch} className="flex items-center w-full sm:w-[67%]">
              <input
                type="search"
                placeholder="Search by client, channel, or outcome..."
                className="w-full rounded-l-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white rounded-r-xl border border-emerald-600 px-4 py-[15px] hover:bg-emerald-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            {/* <div className="flex gap-3 justify-between md:justify-end md:col-span-1">
              <select
                value={channelFilter}
                onChange={(e) => setChannelFilter(e.target.value)}
                className="rounded-xl border border-slate-300 px-3 py-3 w-1/2 md:w-auto focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">All Channels</option>
                <option value="analytics">Analytics</option>
                <option value="cro">CRO</option>
                <option value="dv360">DV360</option>
                <option value="pmax">Performance Max</option>
                <option value="programmatic">Programmatic</option>
              </select>
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="rounded-xl border border-slate-300 px-3 py-3 w-1/2 md:w-auto focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">All Industries</option>
                <option value="publishing">Publishing</option>
                <option value="retail">Retail</option>
                <option value="ecommerce">E-commerce</option>
                <option value="dairy">Dairy</option>
                <option value="technology">Technology</option>
                <option value="bfsi">BFSI</option>
                <option value="travel">Travel</option>
              </select>
            </div> */}
          </div>
        </section>

        {/* GRID */}
        <section className="py-16" id="case-studies-grid">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentData?.length > 0 ? (
                currentData.map((casest, index) => (
                  <Casestudy
                    key={casest.id || index}
                    casestudy={casest}
                    gradientClass={gradientColors[index % gradientColors.length]}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-slate-500 text-lg">No case studies found matching your criteria.</p>
                  <p className="text-slate-400 text-sm mt-2">Try adjusting your search or filters.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pb-12">
            <button
              className={`rounded-xl border px-4 py-2 text-sm transition-colors ${currentPage === 1
                ? 'border-slate-300 text-slate-400 cursor-not-allowed'
                : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`rounded-xl px-4 py-2 text-sm transition-colors ${currentPage === index + 1
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`rounded-xl border px-4 py-2 text-sm transition-colors ${currentPage === totalPages
                ? 'border-slate-300 text-slate-400 cursor-not-allowed'
                : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}

        {/* CTA */}
        <section className="bg-emerald-600 py-16 text-white text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-bold">Want results like these?</h2>
            <p className="mt-2 text-lg text-emerald-100">Let's build your next growth story together.</p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-slate-900 font-semibold shadow hover:opacity-90 transition-opacity"
            >
              Book a Strategy Call
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { s } = context.query;
  let apiUrl = `${process.env.domain}/api/allcasestudies`;

  if (s) {
    apiUrl = `${process.env.domain}/api/casestudiesfilter?search=${s}`;
  }

  const res = await fetch(apiUrl);
  const casestudyDat = await res.json();

  return { props: { casestudyDat } };
}

export default index;
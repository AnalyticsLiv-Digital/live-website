import React, { useState, useMemo } from "react";

const Index = ({ applications }) => {
  const job = applications.job;
  const [hoveredField, setHoveredField] = useState(null);
  const [copiedField, setCopiedField] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filterExperience, setFilterExperience] = useState("all");

  const handleCopy = (text, fieldKey) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => setCopiedField(null), 1000);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedApplications = useMemo(() => {
    let filtered = [...(job || [])];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter((application) => {
        const name = application.fullName || `${application.firstName || ""} ${application.lastName || ""}`;
        return (
          name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          application.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          application.contact?.includes(searchTerm)
        );
      });
    }

    // Experience filter
    if (filterExperience !== "all") {
      filtered = filtered.filter((application) => {
        const exp = parseFloat(application.experience);
        if (filterExperience === "0-2") return exp >= 0 && exp <= 2;
        if (filterExperience === "2-5") return exp > 2 && exp <= 5;
        if (filterExperience === "5+") return exp > 5;
        return true;
      });
    }

    // Sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        if (sortConfig.key === 'fullName') {
          aValue = a.fullName || `${a.firstName || ""} ${a.lastName || ""}`;
          bValue = b.fullName || `${b.firstName || ""} ${b.lastName || ""}`;
        }

        if (sortConfig.key === 'timestamp') {
          aValue = new Date(aValue);
          bValue = new Date(bValue);
        }

        if (sortConfig.key === 'experience') {
          aValue = parseFloat(aValue) || 0;
          bValue = parseFloat(bValue) || 0;
        }

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [job, searchTerm, sortConfig, filterExperience]);

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) {
      return <span className="ml-1 text-gray-400">⇅</span>;
    }
    return sortConfig.direction === 'asc' ? <span className="ml-1">↑</span> : <span className="ml-1">↓</span>;
  };

  return (
    <>
      <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto py-8">
          {/* Header Section */}
          <div className="mb-6">
            <h1 className="text-center font-bold text-3xl mb-2 text-gray-800">
              Applications For {job[0]?.postName || "Job Position"}
            </h1>
            <p className="text-center text-gray-600 mb-6">
              Total Candidates: <span className="font-semibold text-gray-800">{filteredAndSortedApplications.length}</span>
              {job?.length !== filteredAndSortedApplications.length && (
                <span className="text-gray-500"> (filtered from {job?.length})</span>
              )}
            </p>

            {/* Search and Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, email, or contact..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all bg-white text-gray-800"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
              </div>

              {/* Experience Filter */}
              <div className="relative">
                <select
                  value={filterExperience}
                  onChange={(e) => setFilterExperience(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all appearance-none bg-white text-gray-800"
                >
                  <option value="all">All Experience Levels</option>
                  <option value="0-2">0-2 Years</option>
                  <option value="2-5">2-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-700 text-gray-200">
                <tr className="text-center text-xl font-semibold">
                  <th
                    className="py-4 px-4 cursor-pointer hover:bg-gray-600 transition-colors"
                    onClick={() => handleSort('fullName')}
                  >
                    <div className="flex items-center justify-center h-[54px]">
                      Name
                      <SortIcon columnKey="fullName" />
                    </div>
                  </th>
                  <th
                    className="py-4 px-4 cursor-pointer hover:bg-gray-600 transition-colors"
                    onClick={() => handleSort('experience')}
                  >
                    <div className="flex items-center justify-center h-[54px]">
                      Experience
                      <SortIcon columnKey="experience" />
                    </div>
                  </th>
                  <th className="py-4 px-4">
                    <div className="flex items-center justify-center h-[54px]">
                      Resume
                    </div>
                  </th>
                  <th className="py-4 px-4">
                    <div className="flex items-center justify-center h-[54px]">
                      LinkedIn
                    </div>
                  </th>
                  <th className="py-4 px-4">
                    <div className="flex items-center justify-center h-[54px]">
                      Email
                    </div>
                  </th>
                  <th className="py-4 px-4">
                    <div className="flex items-center justify-center h-[54px]">
                      Contact
                    </div>
                  </th>
                  <th className="py-4 px-4">
                    <div className="flex items-center justify-center h-[54px]">
                      Notice Period
                    </div>
                  </th>
                  <th
                    className="py-4 px-4 cursor-pointer hover:bg-gray-600 transition-colors min-w-[140px]"
                    onClick={() => handleSort('timestamp')}
                  >
                    <div className="flex items-center justify-center h-[54px]">
                      Applied Date
                      <SortIcon columnKey="timestamp" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-center text-gray-300">
                {filteredAndSortedApplications && filteredAndSortedApplications.length > 0 ? (
                  filteredAndSortedApplications.map((application, key) => (
                    <tr
                      key={key}
                      className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
                    >
                      <td className="py-4 px-3 max-w-xs break-words">
                        {application?.fullName ? application.fullName : `${application?.firstName || ""} ${application?.lastName || ""}`}
                      </td>
                      <td className="py-4 px-6">{application.experience}</td>
                      <td className="py-4 px-6">
                        <a
                          href={`https://storage.googleapis.com/website-bucket-uploads/${application.resume}`}
                          target='_blank'
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:underline"
                        >
                          Resume
                        </a>
                      </td>
                      <td className="py-4 px-6">
                        {application.linkedin && (
                          <a
                            href={application.linkedin}
                            target='_blank'
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:underline"
                          >
                            LinkedIn
                          </a>
                        )}
                      </td>
                      <td className="py-4 px-6 min-w-[200px]">
                        <div className="flex items-center justify-center gap-2">
                          <span className="truncate">{application.email}</span>
                          <button
                            className={`flex-shrink-0 text-white text-xs px-2 py-1 rounded-md transition-all whitespace-nowrap ${
                              copiedField === `email-${key}`
                                ? 'bg-green-600'
                                : hoveredField === `email-${key}`
                                  ? 'bg-gray-600 opacity-100'
                                  : 'bg-gray-600 opacity-0'
                            }`}
                            onMouseEnter={() => setHoveredField(`email-${key}`)}
                            onMouseLeave={() => setHoveredField(null)}
                            onClick={() => handleCopy(application.email, `email-${key}`)}
                          >
                            {copiedField === `email-${key}` ? "Copied!" : "Copy"}
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6 min-w-[180px]">
                        <div className="flex items-center justify-center gap-2">
                          <span>{application.contact}</span>
                          <button
                            className={`flex-shrink-0 text-white text-xs px-2 py-1 rounded-md transition-all whitespace-nowrap ${
                              copiedField === `contact-${key}`
                                ? 'bg-green-600'
                                : hoveredField === `contact-${key}`
                                  ? 'bg-gray-600 opacity-100'
                                  : 'bg-gray-600 opacity-0'
                            }`}
                            onMouseEnter={() => setHoveredField(`contact-${key}`)}
                            onMouseLeave={() => setHoveredField(null)}
                            onClick={() => handleCopy(application.contact, `contact-${key}`)}
                          >
                            {copiedField === `contact-${key}` ? "Copied!" : "Copy"}
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6">{application.noticePeriod || 'N/A'}</td>
                      <td className="py-4 px-6 min-w-[140px]">
                        {application.timestamp ? (
                          <div className="flex flex-col items-center gap-0.5">
                            <span className="whitespace-nowrap">
                              {new Date(application.timestamp).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric'
                              })}
                            </span>
                            <span className="text-xs text-gray-400 whitespace-nowrap">
                              {new Date(application.timestamp).toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                          </div>
                        ) : (
                          'N/A'
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="py-6 text-gray-400 text-lg">
                      {searchTerm || filterExperience !== "all"
                        ? "No applications found. Try adjusting your filters."
                        : "🚀 No applications received yet! Stay tuned for new job submissions."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.domain}/api/admin/job/applications?post=${context.params.post}`
  );
  const applications = await res.json();

  // Pass data to the page via props
  return { props: { applications } };
}

export default Index;

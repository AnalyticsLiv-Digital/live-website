import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import GoogleButton from "react-google-button";
import Navbar from "../Navbar";

const UpworkJobs = () => {
  const { data: session, status } = useSession();

  // State management
  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Filter states
  const [filters, setFilters] = useState({
    search_term: "",
    country: "",
    min_budget: "",
    max_applicants: ""
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(20);

  // Modal states
  const [selectedJob, setSelectedJob] = useState(null);
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [generatedProposal, setGeneratedProposal] = useState("");
  const [proposalLoading, setProposalLoading] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  // Search terms from API guide
  const searchTerms = [
    "GA4", "GTM", "Google Ads", "YouTube Ads", "PPC", "DV360",
    "Programmatic Ads", "Conversion Tracking", "Server-Side Tagging",
    "Server-Side Tracking", "Pixel Implementation", "Conversion API",
    "Mixpanel", "Looker Studio", "Google Cloud"
  ];

  // Fetch jobs function
  const fetchJobs = async () => {
    setLoading(true);
    setError(null);

    try {
      const offset = (currentPage - 1) * limit;
      const params = new URLSearchParams({
        limit: limit.toString(),
        offset: offset.toString(),
        ...(filters.search_term && { search_term: filters.search_term }),
        ...(filters.country && { country: filters.country }),
        ...(filters.min_budget && { min_budget: filters.min_budget }),
        ...(filters.max_applicants && { max_applicants: filters.max_applicants })
      });

      const response = await fetch(`https://upwork-llm-bot-135392845747.europe-west1.run.app/jobs?${params}`);

      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }

      const data = await response.json();
      setJobs(data.jobs || []);
      setTotal(data.total || 0);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  // Generate proposal function
  const generateProposal = async (job) => {
    setProposalLoading(true);
    try {
      const response = await fetch('https://upwork-llm-bot-135392845747.europe-west1.run.app/generate-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          job_id: job.id,
          title: job.title,
          description: job.description,
          category: job.category,
          hourlyBudgetMin: job.hourlyBudgetMin,
          hourlyBudgetMax: job.hourlyBudgetMax,
          clientTotalSpent: job.clientTotalSpent,
          contractType: job.contractType,
          country: job.country,
          city: job.city,
          searchTerm: job.searchTerm,
          totalApplicants: job.totalApplicants
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate proposal');
      }

      const data = await response.json();
      setGeneratedProposal(data.proposal);
    } catch (err) {
      alert('Failed to generate proposal. Please try again.');
      console.error('Error generating proposal:', err);
    } finally {
      setProposalLoading(false);
    }
  };

  // Copy to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Proposal copied to clipboard!');
  };

  // Get applicant color
  const getApplicantColor = (count) => {
    if (count <= 5) return 'text-green-500';
    if (count <= 15) return 'text-yellow-500';
    return 'text-red-500';
  };

  // Get budget color
  const getBudgetColor = (min) => {
    if (min >= 75) return 'text-yellow-400';
    if (min >= 50) return 'text-green-500';
    if (min >= 30) return 'text-blue-400';
    return 'text-gray-400';
  };

  // Get time ago
  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffHrs = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffHrs / 24);

    if (diffHrs < 1) return 'Posted just now';
    if (diffHrs < 24) return `Posted ${diffHrs} hour${diffHrs > 1 ? 's' : ''} ago`;
    return `Posted ${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  // Apply filters
  const handleApplyFilters = () => {
    setCurrentPage(1);
    fetchJobs();
  };

  // Clear filters
  const handleClearFilters = () => {
    setFilters({
      search_term: "",
      country: "",
      min_budget: "",
      max_applicants: ""
    });
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Load jobs on mount and when page changes
  useEffect(() => {
    if (session) {
      fetchJobs();
    }
  }, [currentPage, session]);

  // Loading state
  if (status === 'loading') {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center space-y-4">
        <div className="flex items-center">
          <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
        <span className="text-lg font-semibold text-gray-700">Loading...</span>
      </div>
    );
  }

  // Not authenticated
  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <GoogleButton onClick={() => signIn()} />
      </div>
    );
  }

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img src="/logo22.jpg" alt="AnalyticsLiv Logo" className="h-12 w-12 rounded-lg" />
              <h1 className="text-4xl font-extrabold text-gray-800">Upwork Jobs</h1>
            </div>
            <div className="text-gray-600 font-medium">
              Total Jobs: <span className="text-[#0D8CA4] font-bold">{total}</span>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search Term */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Term
                </label>
                <select
                  value={filters.search_term}
                  onChange={(e) => setFilters({ ...filters, search_term: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D8CA4]"
                >
                  <option value="">All Skills</option>
                  {searchTerms.map(term => (
                    <option key={term} value={term}>{term}</option>
                  ))}
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={filters.country}
                  onChange={(e) => setFilters({ ...filters, country: e.target.value })}
                  placeholder="e.g., United States"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D8CA4]"
                />
              </div>

              {/* Min Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Min Budget ($/hr)
                </label>
                <input
                  type="number"
                  value={filters.min_budget}
                  onChange={(e) => setFilters({ ...filters, min_budget: e.target.value })}
                  placeholder="e.g., 50"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D8CA4]"
                />
              </div>

              {/* Max Applicants */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Applicants
                </label>
                <input
                  type="number"
                  value={filters.max_applicants}
                  onChange={(e) => setFilters({ ...filters, max_applicants: e.target.value })}
                  placeholder="e.g., 10"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D8CA4]"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleApplyFilters}
                className="px-6 py-2 bg-[#0D8CA4] text-white font-semibold rounded-md hover:bg-[#0a7186] transition duration-300"
              >
                Apply Filters
              </button>
              <button
                onClick={handleClearFilters}
                className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition duration-300"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="w-12 h-12 border-4 border-t-transparent border-[#0D8CA4] border-solid rounded-full animate-spin"></div>
            </div>
          )}

          {/* Jobs List */}
          {!loading && jobs.length > 0 && (
            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {job.searchTerm}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                      {job.contractType}
                    </span>
                    <span className="ml-auto text-sm text-gray-500">{getTimeAgo(job.createdDateTime)}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">💰 Budget:</span>
                      <span className={`font-semibold ${getBudgetColor(job.hourlyBudgetMin)}`}>
                        ${job.hourlyBudgetMin}-${job.hourlyBudgetMax}/hr
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">📍 Location:</span>
                      <span className="font-semibold text-gray-700">
                        {job.city ? `${job.city}, ` : ''}{job.country}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">💼 Client Spent:</span>
                      <span className="font-semibold text-gray-700">{job.clientTotalSpent}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">👥 Applicants:</span>
                      <span className={`font-semibold ${getApplicantColor(job.totalApplicants)}`}>
                        {job.totalApplicants}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedJob(job);
                        setDetailsModalOpen(true);
                      }}
                      className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => {
                        setSelectedJob(job);
                        setProposalModalOpen(true);
                        generateProposal(job);
                      }}
                      className="px-4 py-2 bg-[#0D8CA4] text-white font-semibold rounded-md hover:bg-[#0a7186] transition duration-300"
                    >
                      Generate Proposal
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Jobs Found */}
          {!loading && jobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No jobs found. Try adjusting your filters.</p>
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300"
              >
                Previous
              </button>

              <span className="px-4 py-2 text-gray-700 font-medium">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Details Modal */}
      {detailsModalOpen && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
              <h2 className="text-2xl font-bold text-gray-800">{selectedJob.title}</h2>
              <button
                onClick={() => setDetailsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Category</h3>
                <p className="text-gray-600">{selectedJob.category}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
                <p className="text-gray-600 whitespace-pre-wrap">{selectedJob.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Budget</h3>
                  <p className="text-gray-600">${selectedJob.hourlyBudgetMin}-${selectedJob.hourlyBudgetMax}/hr</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Contract Type</h3>
                  <p className="text-gray-600">{selectedJob.contractType}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
                  <p className="text-gray-600">{selectedJob.city ? `${selectedJob.city}, ` : ''}{selectedJob.country}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Client Spent</h3>
                  <p className="text-gray-600">{selectedJob.clientTotalSpent}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Applicants</h3>
                  <p className={`font-semibold ${getApplicantColor(selectedJob.totalApplicants)}`}>
                    {selectedJob.totalApplicants}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Posted</h3>
                  <p className="text-gray-600">{getTimeAgo(selectedJob.createdDateTime)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Proposal Modal */}
      {proposalModalOpen && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="bg-gray-800 text-white p-6 rounded-t-lg flex justify-between items-center">
              <h2 className="text-2xl font-bold">Generated Proposal</h2>
              <button
                onClick={() => {
                  setProposalModalOpen(false);
                  setGeneratedProposal("");
                }}
                className="text-white hover:text-gray-300 text-3xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Job: {selectedJob.title}</p>
              </div>

              {proposalLoading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-12 h-12 border-4 border-t-transparent border-[#0D8CA4] border-solid rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600">Generating your personalized proposal using AI... (2-5 seconds)</p>
                </div>
              ) : (
                <>
                  <div className="bg-gray-50 p-4 rounded-md mb-4 max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-gray-800 font-sans">{generatedProposal}</pre>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => copyToClipboard(generatedProposal)}
                      className="flex-1 px-4 py-2 bg-[#0D8CA4] text-white font-semibold rounded-md hover:bg-[#0a7186] transition duration-300"
                    >
                      Copy to Clipboard
                    </button>
                    <button
                      onClick={() => {
                        setGeneratedProposal("");
                        generateProposal(selectedJob);
                      }}
                      className="flex-1 px-4 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
                    >
                      Regenerate
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpworkJobs;

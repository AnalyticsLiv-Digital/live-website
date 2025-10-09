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
    max_applicants: "",
    last_n_hours: "",
    contract_type: ""
  });

  // Title search state
  const [titleSearch, setTitleSearch] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(20);

  // Modal states
  const [selectedJob, setSelectedJob] = useState(null);
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [generatedProposal, setGeneratedProposal] = useState("");
  const [proposalLoading, setProposalLoading] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [filtersModalOpen, setFiltersModalOpen] = useState(false);

  // Sync jobs states
  const [syncLoading, setSyncLoading] = useState(false);
  const [syncStatus, setSyncStatus] = useState(null);
  const [lastSyncTime, setLastSyncTime] = useState(null);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

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

      // If title search is active, use the search-jobs endpoint
      if (titleSearch.trim()) {
        const params = new URLSearchParams({
          title: titleSearch.trim(),
          limit: limit.toString(),
          offset: offset.toString()
        });

        const response = await fetch(`https://upwork-llm-bot-135392845747.europe-west1.run.app/search-jobs?${params}`);

        if (!response.ok) {
          throw new Error('Failed to search jobs by title');
        }

        const data = await response.json();
        setJobs(data.jobs || []);
        setTotal(data.total || 0);
      } else {
        // Otherwise use the regular jobs endpoint with filters
        const params = new URLSearchParams({
          limit: limit.toString(),
          offset: offset.toString(),
          ...(filters.search_term && { search_term: filters.search_term }),
          ...(filters.max_applicants && { max_applicants: filters.max_applicants }),
          ...(filters.last_n_hours && { last_n_hours: filters.last_n_hours }),
          ...(filters.contract_type && { contract_type: filters.contract_type })
        });

        const response = await fetch(`https://upwork-llm-bot-135392845747.europe-west1.run.app/jobs?${params}`);

        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }

        const data = await response.json();
        setJobs(data.jobs || []);
        setTotal(data.total || 0);
      }
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

  // Check cooldown on mount
  useEffect(() => {
    const storedSyncTime = localStorage.getItem('lastUpworkSyncTime');
    if (storedSyncTime) {
      const syncTime = parseInt(storedSyncTime);
      const currentTime = Date.now();
      const timeDiff = currentTime - syncTime;
      const cooldownMs = 10 * 60 * 1000; // 10 minutes in milliseconds

      if (timeDiff < cooldownMs) {
        setLastSyncTime(syncTime);
        setCooldownRemaining(Math.ceil((cooldownMs - timeDiff) / 1000));
      }
    }
  }, []);

  // Update cooldown timer
  useEffect(() => {
    if (cooldownRemaining > 0) {
      const timer = setInterval(() => {
        setCooldownRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cooldownRemaining]);

  // Clear all filters and search
  const handleClearAll = async () => {
    setTitleSearch("");
    setFilters({
      search_term: "",
      max_applicants: "",
      last_n_hours: "",
      contract_type: ""
    });
    setCurrentPage(1);

    // Fetch jobs with no filters
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        limit: limit.toString(),
        offset: '0'
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

  // Sync jobs from Upwork
  const syncUpworkJobs = async () => {
    // Check cooldown
    if (cooldownRemaining > 0) {
      const minutes = Math.floor(cooldownRemaining / 60);
      const seconds = cooldownRemaining % 60;
      alert(`⏳ Please wait! You can trigger sync again in ${minutes}m ${seconds}s`);
      return;
    }

    if (window.confirm('🔄 This will fetch latest jobs from Upwork and update the database. Continue?')) {
      setSyncLoading(true);
      setSyncStatus('pending');

      try {
        const response = await fetch('https://upwork-llm-bot-135392845747.europe-west1.run.app/fetch-upwork-jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Failed to sync jobs');
        }

        const data = await response.json();

        // Set sync status
        setSyncStatus('completed');

        // Store sync time in localStorage
        const currentTime = Date.now();
        localStorage.setItem('lastUpworkSyncTime', currentTime.toString());
        setLastSyncTime(currentTime);
        setCooldownRemaining(10 * 60); // 10 minutes in seconds

        // Show success message
        alert(`✅ Sync completed successfully! ${data.message || 'Jobs updated in database.'}`);

        // Refresh the jobs list
        fetchJobs();

      } catch (err) {
        setSyncStatus('failed');
        alert('❌ Failed to sync jobs. Please try again later.');
        console.error('Error syncing jobs:', err);
      } finally {
        setSyncLoading(false);
        setTimeout(() => setSyncStatus(null), 3000);
      }
    }
  };

  // Format cooldown time
  const formatCooldownTime = () => {
    if (cooldownRemaining <= 0) return '';
    const minutes = Math.floor(cooldownRemaining / 60);
    const seconds = cooldownRemaining % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Count active filters
  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.search_term) count++;
    if (filters.max_applicants) count++;
    if (filters.last_n_hours) count++;
    if (filters.contract_type) count++;
    return count;
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

  // Format date and time
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);

    // Format: "Oct 6, 2025 at 7:35 PM"
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };

    return date.toLocaleString('en-US', options);
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
      max_applicants: "",
      last_n_hours: "",
      contract_type: ""
    });
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Track if initial fetch is done
  const [initialFetchDone, setInitialFetchDone] = useState(false);

  // Load jobs on mount and when page changes
  useEffect(() => {
    if (session && !initialFetchDone) {
      fetchJobs();
      setInitialFetchDone(true);
    }
  }, [session]);

  // Load jobs when page changes (but only after initial fetch)
  useEffect(() => {
    if (session && initialFetchDone && currentPage > 1) {
      fetchJobs();
    }
  }, [currentPage]);

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
            <div className="flex items-center gap-4">
              {/* Sync Button */}
              <button
                onClick={syncUpworkJobs}
                disabled={syncLoading || cooldownRemaining > 0}
                className={`flex items-center gap-2 px-6 py-2.5 font-semibold rounded-md transition duration-300 ${
                  syncLoading || cooldownRemaining > 0
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {syncLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
                    <span>Syncing...</span>
                  </>
                ) : cooldownRemaining > 0 ? (
                  <>
                    <span>🔒</span>
                    <span>Wait {formatCooldownTime()}</span>
                  </>
                ) : syncStatus === 'completed' ? (
                  <>
                    <span>✅</span>
                    <span>Sync Jobs</span>
                  </>
                ) : (
                  <>
                    <span>🔄</span>
                    <span>Sync Jobs</span>
                  </>
                )}
              </button>

              {/* Total Jobs */}
              <div className="text-gray-600 font-medium">
                Total Jobs: <span className="text-[#0D8CA4] font-bold">{total}</span>
              </div>
            </div>
          </div>

          {/* Main Search Bar */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex gap-3 items-center">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="🔍 Search jobs by title (e.g., Python Developer, Web Designer)..."
                  value={titleSearch}
                  onChange={(e) => setTitleSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setCurrentPage(1);
                      fetchJobs();
                    }
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D8CA4] text-base"
                />
              </div>

              <button
                onClick={() => {
                  setCurrentPage(1);
                  fetchJobs();
                }}
                className="px-8 py-3 bg-[#0D8CA4] text-white font-semibold rounded-lg hover:bg-[#0a7388] transition-colors shadow-sm"
              >
                Search
              </button>

              <button
                onClick={() => setFiltersModalOpen(!filtersModalOpen)}
                className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors shadow-sm ${
                  getActiveFiltersCount() > 0
                    ? 'bg-[#0D8CA4] text-white hover:bg-[#0a7388]'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span>⚙️</span>
                <span>Filters</span>
                {getActiveFiltersCount() > 0 && (
                  <span className="bg-white text-[#0D8CA4] px-2 py-0.5 rounded-full text-xs font-bold">
                    {getActiveFiltersCount()}
                  </span>
                )}
              </button>

              {(titleSearch || getActiveFiltersCount() > 0) && (
                <button
                  onClick={handleClearAll}
                  className="px-5 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Active Search/Filters Display */}
            {(titleSearch || getActiveFiltersCount() > 0) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {titleSearch && (
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm">
                    <span className="font-medium">Title:</span>
                    <span>{titleSearch}</span>
                    <button
                      onClick={async () => {
                        setTitleSearch("");
                        setCurrentPage(1);

                        // If there are active filters, fetch with filters, otherwise fetch all
                        if (getActiveFiltersCount() > 0) {
                          fetchJobs();
                        } else {
                          handleClearAll();
                        }
                      }}
                      className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                    >
                      ✕
                    </button>
                  </div>
                )}
                {filters.search_term && (
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm">
                    <span className="font-medium">Skill:</span>
                    <span>{filters.search_term}</span>
                    <button
                      onClick={() => {
                        setFilters({ ...filters, search_term: "" });
                        setCurrentPage(1);
                      }}
                      className="ml-1 hover:bg-green-200 rounded-full p-0.5"
                    >
                      ✕
                    </button>
                  </div>
                )}
                {filters.max_applicants && (
                  <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full text-sm">
                    <span className="font-medium">Max Applicants:</span>
                    <span>≤{filters.max_applicants}</span>
                    <button
                      onClick={() => {
                        setFilters({ ...filters, max_applicants: "" });
                        setCurrentPage(1);
                      }}
                      className="ml-1 hover:bg-purple-200 rounded-full p-0.5"
                    >
                      ✕
                    </button>
                  </div>
                )}
                {filters.last_n_hours && (
                  <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full text-sm">
                    <span className="font-medium">Posted:</span>
                    <span>Last {filters.last_n_hours} hrs</span>
                    <button
                      onClick={() => {
                        setFilters({ ...filters, last_n_hours: "" });
                        setCurrentPage(1);
                      }}
                      className="ml-1 hover:bg-orange-200 rounded-full p-0.5"
                    >
                      ✕
                    </button>
                  </div>
                )}
                {filters.contract_type && (
                  <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 px-3 py-1.5 rounded-full text-sm">
                    <span className="font-medium">Type:</span>
                    <span>{filters.contract_type}</span>
                    <button
                      onClick={() => {
                        setFilters({ ...filters, contract_type: "" });
                        setCurrentPage(1);
                      }}
                      className="ml-1 hover:bg-pink-200 rounded-full p-0.5"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Advanced Filters Modal/Collapsible */}
          {filtersModalOpen && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-2 border-[#0D8CA4]">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-gray-800">⚙️ Advanced Filters</h2>
                <button
                  onClick={() => setFiltersModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search Term */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    💼 Skill / Technology
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

                {/* Max Applicants */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    👥 Competition Level
                  </label>
                  <select
                    value={filters.max_applicants}
                    onChange={(e) => setFilters({ ...filters, max_applicants: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D8CA4]"
                  >
                    <option value="">Any</option>
                    <option value="5">Low Competition (≤5)</option>
                    <option value="10">Medium Competition (≤10)</option>
                    <option value="20">High Competition (≤20)</option>
                  </select>
                </div>

                {/* Last N Hours */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    🕒 Time Posted
                  </label>
                  <select
                    value={filters.last_n_hours}
                    onChange={(e) => setFilters({ ...filters, last_n_hours: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D8CA4]"
                  >
                    <option value="">Any Time</option>
                    <option value="1">Last 1 Hour</option>
                    <option value="5">Last 5 Hours</option>
                    <option value="12">Last 12 Hours</option>
                  </select>
                </div>

                {/* Contract Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    📋 Contract Type
                  </label>
                  <select
                    value={filters.contract_type}
                    onChange={(e) => setFilters({ ...filters, contract_type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D8CA4]"
                  >
                    <option value="">All Types</option>
                    <option value="HOURLY">Hourly</option>
                    <option value="FIXED">Fixed Price</option>
                  </select>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    setCurrentPage(1);
                    fetchJobs();
                    setFiltersModalOpen(false);
                  }}
                  className="px-6 py-2.5 bg-[#0D8CA4] text-white font-semibold rounded-lg hover:bg-[#0a7186] transition duration-300 shadow-sm"
                >
                  Apply Filters
                </button>
                <button
                  onClick={() => {
                    setFilters({
                      search_term: "",
                      max_applicants: "",
                      last_n_hours: "",
                      contract_type: ""
                    });
                    setCurrentPage(1);
                  }}
                  className="px-6 py-2.5 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition duration-300"
                >
                  Clear Filters
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                💡 <strong>Note:</strong> Title search and filters use different search methods. Title search looks for job titles, while filters search by skills and criteria.
              </p>
            </div>
          )}

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
                    <span className="ml-auto text-sm text-gray-500">
                      {formatDateTime(job.createdDateTime)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">💰 Budget:</span>
                      <span className={`font-semibold ${getBudgetColor(job.hourlyBudgetMin)}`}>
                        {job.hourlyBudgetMin && job.hourlyBudgetMax
                          ? `$${job.hourlyBudgetMin}-$${job.hourlyBudgetMax}/hr`
                          : job.amountDisplay || '0'}
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
                  <p className="text-gray-600">{formatDateTime(selectedJob.createdDateTime)}</p>
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

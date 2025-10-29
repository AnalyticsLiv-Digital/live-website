import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import GoogleButton from "react-google-button";
import Navbar from "../Navbar";

const CandidateAnalysis = () => {
  const { data: session, status } = useSession();

  // Toggle between Video Analysis and Resume Scoring
  const [activeTab, setActiveTab] = useState("video"); // "video" or "resume"

  // Video Analysis States
  const [videoFile, setVideoFile] = useState(null);
  const [videoAnalysisResult, setVideoAnalysisResult] = useState(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoFileName, setVideoFileName] = useState("");
  const [candidateName, setCandidateName] = useState("");

  // Resume Scoring States
  const [resumeForm, setResumeForm] = useState({
    NAME: "",
    SUMMARY: "",
    WORK_EXPERIENCE_PERSONAL_PROJECTS: "",
    EDUCATION: "",
    SKILLS_TOOLS: "",
    CERTIFICATIONS_EXTRAS: "",
    JD: ""
  });
  const [resumeScoringResult, setResumeScoringResult] = useState(null);
  const [resumeLoading, setResumeLoading] = useState(false);

  // Resume Parsing States
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeFileName, setResumeFileName] = useState("");
  const [resumeParseLoading, setResumeParseLoading] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  // Use internal API routes to avoid CORS issues
  const VIDEO_API_URL = "/api/admin/candidate-analysis/video";
  const RESUME_API_URL = "/api/admin/candidate-analysis/resume";
  const RESUME_PARSE_API_URL = "/api/admin/candidate-analysis/resume-parse";

  // Handle Video File Upload
  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoFileName(file.name);
    }
  };

  // Handle Video Analysis Submit
  const handleVideoAnalysisSubmit = async (e) => {
    e.preventDefault();
    if (!videoFile) {
      alert("Please upload a video file");
      return;
    }

    setVideoLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", videoFile);

      const response = await fetch(VIDEO_API_URL, {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API Error: ${response.status}`);
      }

      const data = await response.json();
      setVideoAnalysisResult(data);
    } catch (error) {
      console.error("Error analyzing video:", error);
      alert(`Failed to analyze video: ${error.message}`);
    } finally {
      setVideoLoading(false);
    }
  };

  // Handle Resume File Upload
  const handleResumeFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      setResumeFileName(file.name);
    }
  };

  // Handle Resume Parse Submit
  const handleResumeParseSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please upload a resume file");
      return;
    }

    setResumeParseLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", resumeFile);

      const response = await fetch(RESUME_PARSE_API_URL, {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API Error: ${response.status}`);
      }

      const data = await response.json();

      // Parse and fill the form with extracted data
      fillFormWithParsedData(data);
      setShowEditForm(true);

    } catch (error) {
      console.error("Error parsing resume:", error);
      alert(`Failed to parse resume: ${error.message}`);
    } finally {
      setResumeParseLoading(false);
    }
  };

  // Fill form with parsed resume data
  const fillFormWithParsedData = (parsedData) => {
    // Format work experience
    let workExperience = "";
    if (parsedData.workExperience && parsedData.workExperience.length > 0) {
      workExperience = parsedData.workExperience.map(exp => {
        let expText = `${exp.jobTitle} at ${exp.company} (${exp.dates})\n`;
        if (exp.responsibilities && exp.responsibilities.length > 0) {
          expText += exp.responsibilities.map(r => `- ${r}`).join('\n');
        }
        return expText;
      }).join('\n\n');
    }

    // Format education
    let education = "";
    if (parsedData.education && parsedData.education.length > 0) {
      education = parsedData.education.map(edu =>
        `${edu.degree} from ${edu.school} (${edu.graduationDate})`
      ).join('\n');
    }

    // Format skills
    let skills = "";
    if (parsedData.skills && parsedData.skills.length > 0) {
      skills = parsedData.skills.join(', ');
    }

    // Format certifications
    let certifications = "";
    if (parsedData.certifications && parsedData.certifications.length > 0) {
      certifications = parsedData.certifications.join('\n');
    }

    // Update form state
    setResumeForm({
      NAME: parsedData.personalDetails?.name || "",
      SUMMARY: parsedData.summary || "",
      WORK_EXPERIENCE_PERSONAL_PROJECTS: workExperience,
      EDUCATION: education,
      SKILLS_TOOLS: skills,
      CERTIFICATIONS_EXTRAS: certifications,
      JD: resumeForm.JD // Keep existing JD if any
    });
  };

  // Handle Resume Form Change
  const handleResumeFormChange = (e) => {
    const { name, value } = e.target;
    setResumeForm({ ...resumeForm, [name]: value });
  };

  // Handle Resume Scoring Submit
  const handleResumeScoringSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!resumeForm.NAME || !resumeForm.JD) {
      alert("Please fill in at least Name and Job Description");
      return;
    }

    setResumeLoading(true);

    try {
      const response = await fetch(RESUME_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(resumeForm)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API Error: ${response.status}`);
      }

      const data = await response.json();
      setResumeScoringResult(data);
    } catch (error) {
      console.error("Error scoring resume:", error);
      alert(`Failed to score resume: ${error.message}`);
    } finally {
      setResumeLoading(false);
    }
  };

  // Download Report as JSON
  const downloadJSON = (data, filename) => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Download Report as PDF using browser print
  const downloadPDF = (type) => {
    if (type === 'video' && videoAnalysisResult) {
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Video Analysis Report - ${candidateName || 'Candidate'}</title>
          <style>
            @media print {
              body { margin: 0; padding: 20px; }
              .page-break { page-break-before: always; }
            }
            body { font-family: Arial, sans-serif; color: #2d2d2d; line-height: 1.6; }
            .header { background: #14a800; color: white; padding: 30px; margin: -20px -20px 30px; }
            .header h1 { margin: 0; font-size: 32px; }
            .header p { margin: 5px 0 0; font-size: 14px; opacity: 0.9; }
            .meta { color: #808080; font-size: 12px; margin-bottom: 20px; }
            h2 { color: #2d2d2d; font-size: 20px; border-bottom: 2px solid #14a800; padding-bottom: 8px; margin-top: 30px; }
            .metric-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e0e0e0; }
            .metric-label { font-weight: 600; }
            .metric-value { color: #14a800; font-weight: bold; }
            .section { margin: 20px 0; }
            .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #808080; font-size: 11px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Video Analysis Report</h1>
            <p>Candidate: ${candidateName || 'Not Provided'}</p>
          </div>

          <div class="meta">Generated: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</div>

          <div class="section">
            <h2>Key Metrics</h2>
            <div class="metric-row">
              <span class="metric-label">Communication Score:</span>
              <span class="metric-value">${videoAnalysisResult.communication_score.toFixed(2)}</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">Expression Score:</span>
              <span class="metric-value">${videoAnalysisResult.expression_score.toFixed(2)}</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">Confidence Score:</span>
              <span class="metric-value">${(videoAnalysisResult.confidence_score).toFixed(2)}</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">Engagement Score:</span>
              <span class="metric-value">${videoAnalysisResult.engagement_score.toFixed(2)}</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">Nervousness Score:</span>
              <span class="metric-value">${(videoAnalysisResult.nervousness_score).toFixed(2)}</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">Emotion Stability:</span>
              <span class="metric-value">${videoAnalysisResult.emotion_stability_score.toFixed(2)}</span>
            </div>
          </div>

          <div class="section">
            <h2>Detailed Metrics</h2>
            <div class="metric-row">
              <span class="metric-label">Eye Contact:</span>
              <span class="metric-value">${videoAnalysisResult.details.eye_contact.toFixed(2)}%</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">Smile Intensity:</span>
              <span class="metric-value">${videoAnalysisResult.details.smile_intensity.toFixed(2)}/10</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">Head Stability:</span>
              <span class="metric-value">${videoAnalysisResult.details.head_stability.toFixed(2)}%</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">Expression Consistency:</span>
              <span class="metric-value">${videoAnalysisResult.details.expression_consistency.toFixed(2)}%</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">Mood Changes:</span>
              <span class="metric-value">${videoAnalysisResult.details.mood_changes}</span>
            </div>
          </div>

          <div class="section">
            <h2>Emotion Distribution</h2>
            ${Object.entries(videoAnalysisResult.details.dominant_emotions_over_time).map(([emotion, percentage]) => `
              <div class="metric-row">
                <span class="metric-label">${emotion.charAt(0).toUpperCase() + emotion.slice(1)}:</span>
                <span class="metric-value">${percentage.toFixed(2)}%</span>
              </div>
            `).join('')}
          </div>

          <div class="footer">
            <p>AnalyticsLiv - Candidate Analysis System</p>
            <p>This is a confidential document. Please handle with care.</p>
          </div>
        </body>
        </html>
      `;

      const printWindow = window.open('', '_blank');
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 250);

    } else if (type === 'resume' && resumeScoringResult) {
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Resume Scoring Report - ${resumeForm.NAME}</title>
          <style>
            @media print {
              body { margin: 0; padding: 20px; }
              .page-break { page-break-before: always; }
            }
            body { font-family: Arial, sans-serif; color: #2d2d2d; line-height: 1.6; }
            .header { background: #14a800; color: white; padding: 30px; margin: -20px -20px 30px; }
            .header h1 { margin: 0; font-size: 32px; }
            .header p { margin: 5px 0 0; font-size: 14px; opacity: 0.9; }
            .meta { color: #808080; font-size: 12px; margin-bottom: 20px; }
            .score-card { background: linear-gradient(135deg, #14a800 0%, #0d7a00 100%); color: white; padding: 30px; border-radius: 12px; margin: 20px 0; text-align: center; }
            .score-card .score { font-size: 48px; font-weight: bold; margin: 10px 0; }
            .score-card .decision { display: inline-block; background: ${resumeScoringResult.decision === 'YES' ? '#22c55e' : resumeScoringResult.decision === 'NO' ? '#ef4444' : '#fbbf24'}; padding: 10px 30px; border-radius: 8px; font-size: 20px; font-weight: bold; margin-top: 15px; }
            .score-card .threshold { font-size: 14px; opacity: 0.9; margin-top: 10px; }
            h2 { color: #2d2d2d; font-size: 20px; border-bottom: 2px solid #14a800; padding-bottom: 8px; margin-top: 30px; }
            .report-box { background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .report-box h3 { margin-top: 0; color: #1e40af; }
            .detail-item { background: ${(score) => score >= 80 ? '#f0fdf4' : score >= 60 ? '#fefce8' : '#fef2f2'}; border-left: 4px solid ${(score) => score >= 80 ? '#22c55e' : score >= 60 ? '#eab308' : '#ef4444'}; padding: 15px; margin: 15px 0; border-radius: 8px; }
            .detail-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
            .detail-title { font-weight: bold; font-size: 16px; text-transform: capitalize; }
            .detail-score { font-size: 20px; font-weight: bold; color: ${(score) => score >= 80 ? '#16a34a' : score >= 60 ? '#ca8a04' : '#dc2626'}; }
            .progress-bar { background: #e5e7eb; height: 8px; border-radius: 4px; overflow: hidden; margin: 10px 0; }
            .progress-fill { height: 100%; background: ${(score) => score >= 80 ? '#22c55e' : score >= 60 ? '#eab308' : '#ef4444'}; border-radius: 4px; }
            .detail-rationale { font-size: 13px; color: #4b5563; line-height: 1.6; }
            .weights-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 20px 0; }
            .weight-item { background: white; border: 1px solid #e5e7eb; padding: 15px; border-radius: 8px; text-align: center; }
            .weight-label { font-size: 12px; color: #6b7280; text-transform: capitalize; }
            .weight-value { font-size: 20px; font-weight: bold; color: #14a800; }
            .summary-box { background: #f9fafb; border: 1px solid #e5e7eb; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #808080; font-size: 11px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Resume Scoring Report</h1>
            <p>Candidate: ${resumeForm.NAME}</p>
          </div>

          <div class="meta">Generated: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</div>

          <div class="score-card">
            <div>Overall Score</div>
            <div class="score">${resumeScoringResult.overall_score.toFixed(1)}</div>
            <div class="threshold">Threshold: ${resumeScoringResult.threshold}</div>
            <div class="decision">${resumeScoringResult.decision}</div>
          </div>

          ${resumeForm.SUMMARY ? `
          <div class="summary-box">
            <h3 style="margin-top: 0;">Candidate Summary</h3>
            <p>${resumeForm.SUMMARY}</p>
          </div>
          ` : ''}

          <div class="report-box">
            <h3>Overall Assessment</h3>
            <p>${resumeScoringResult.overall_report}</p>
          </div>

          <h2>Detailed Breakdown</h2>
          ${resumeScoringResult.details.map(detail => {
            const bgColor = detail.score >= 80 ? '#f0fdf4' : detail.score >= 60 ? '#fefce8' : '#fef2f2';
            const borderColor = detail.score >= 80 ? '#22c55e' : detail.score >= 60 ? '#eab308' : '#ef4444';
            const textColor = detail.score >= 80 ? '#16a34a' : detail.score >= 60 ? '#ca8a04' : '#dc2626';
            return `
              <div style="background: ${bgColor}; border-left: 4px solid ${borderColor}; padding: 15px; margin: 15px 0; border-radius: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <span style="font-weight: bold; font-size: 16px; text-transform: capitalize;">${detail.name.replace(/_/g, ' ')}</span>
                  <span style="font-size: 20px; font-weight: bold; color: ${textColor};">${detail.score}/100</span>
                </div>
                <div style="background: #e5e7eb; height: 8px; border-radius: 4px; overflow: hidden; margin: 10px 0;">
                  <div style="width: ${detail.score}%; height: 100%; background: ${borderColor}; border-radius: 4px;"></div>
                </div>
                <p style="font-size: 13px; color: #4b5563; line-height: 1.6; margin: 10px 0 0;">${detail.rationale}</p>
              </div>
            `;
          }).join('')}

          <div class="page-break"></div>

          <h2>Scoring Weights Configuration</h2>
          <div class="weights-grid">
            ${Object.entries(resumeScoringResult.weights).map(([key, value]) => `
              <div class="weight-item">
                <div class="weight-label">${key.replace(/_/g, ' ')}</div>
                <div class="weight-value">${value}x</div>
              </div>
            `).join('')}
          </div>

          <div class="footer">
            <p>AnalyticsLiv - Candidate Analysis System</p>
            <p>This is a confidential document. Please handle with care.</p>
          </div>
        </body>
        </html>
      `;

      const printWindow = window.open('', '_blank');
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  // Clear Results
  const clearVideoAnalysis = () => {
    setVideoFile(null);
    setVideoFileName("");
    setVideoAnalysisResult(null);
    setCandidateName("");
  };

  const clearResumeScoring = () => {
    setResumeForm({
      NAME: "",
      SUMMARY: "",
      WORK_EXPERIENCE_PERSONAL_PROJECTS: "",
      EDUCATION: "",
      SKILLS_TOOLS: "",
      CERTIFICATIONS_EXTRAS: "",
      JD: ""
    });
    setResumeScoringResult(null);
    setResumeFile(null);
    setResumeFileName("");
    setShowEditForm(false);
  };

  // Get score color (Upwork-inspired)
  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  // Get score background color
  const getScoreBgColor = (score) => {
    if (score >= 80) return "bg-green-50 border-green-200";
    if (score >= 60) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  // Get decision badge color (Upwork-inspired)
  const getDecisionColor = (decision) => {
    if (decision === "YES") return "bg-green-600 text-white";
    if (decision === "NO") return "bg-red-600 text-white";
    return "bg-yellow-600 text-white";
  };

  // Loading state
  if (status === "loading") {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center space-y-4 bg-gray-50">
        <div className="flex items-center">
          <div className="w-12 h-12 border-4 border-t-transparent border-green-600 border-solid rounded-full animate-spin"></div>
        </div>
        <span className="text-lg font-semibold text-gray-700">Loading...</span>
      </div>
    );
  }

  // Not authenticated
  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <GoogleButton onClick={() => signIn()} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 p-3 rounded-xl shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Candidate Analysis</h1>
                <p className="text-sm text-gray-600">Comprehensive evaluation and scoring system</p>
              </div>
            </div>
          </div>

          {/* Tab Toggle - Upwork Style */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1.5 mb-6 inline-flex gap-1">
            <button
              onClick={() => setActiveTab("video")}
              className={`py-2.5 px-6 font-semibold rounded-lg transition-all duration-200 ${
                activeTab === "video"
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Video Analysis
              </span>
            </button>
            <button
              onClick={() => setActiveTab("resume")}
              className={`py-2.5 px-6 font-semibold rounded-lg transition-all duration-200 ${
                activeTab === "resume"
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume Scoring
              </span>
            </button>
          </div>

          {/* Video Analysis Section */}
          {activeTab === "video" && (
            <div className="space-y-6">
              {/* Upload Form */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Upload Candidate Video</h2>
                </div>

                <form onSubmit={handleVideoAnalysisSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Candidate Name
                    </label>
                    <input
                      type="text"
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      placeholder="Enter candidate name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Video File (MP4, AVI, MOV)
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="flex-1 cursor-pointer">
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-green-500 hover:bg-green-50 transition-all duration-200">
                          <div className="text-center">
                            <svg className="mx-auto h-16 w-16 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="mt-3 text-base font-medium text-gray-700">
                              {videoFileName || "Click to upload video file"}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Supported formats: MP4, AVI, MOV
                            </p>
                          </div>
                        </div>
                        <input
                          type="file"
                          accept="video/*"
                          onChange={handleVideoFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={videoLoading || !videoFile}
                      className={`px-8 py-3 font-semibold rounded-lg transition-all duration-200 shadow-sm ${
                        videoLoading || !videoFile
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700 hover:shadow-md"
                      }`}
                    >
                      {videoLoading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
                          Analyzing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Analyze Video
                        </span>
                      )}
                    </button>
                    {videoAnalysisResult && (
                      <button
                        type="button"
                        onClick={clearVideoAnalysis}
                        className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200"
                      >
                        Clear Results
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Video Analysis Results */}
              {videoAnalysisResult && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Analysis Results</h2>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => downloadPDF('video')}
                        className="px-5 py-2.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </button>
                      <button
                        onClick={() => downloadJSON(videoAnalysisResult, "video-analysis-report.json")}
                        className="px-5 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        JSON
                      </button>
                    </div>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: 'Communication', value: videoAnalysisResult.communication_score },
                      { label: 'Expression', value: videoAnalysisResult.expression_score },
                      { label: 'Confidence', value: videoAnalysisResult.confidence_score },
                      { label: 'Engagement', value: videoAnalysisResult.engagement_score }
                    ].map((metric, idx) => (
                      <div key={idx} className={`border rounded-xl p-5 ${getScoreBgColor(metric.value)}`}>
                        <p className="text-sm font-medium text-gray-600 mb-2">{metric.label}</p>
                        <p className={`text-3xl font-bold ${getScoreColor(metric.value)}`}>
                          {metric.value.toFixed(1)}
                        </p>
                        <div className="mt-3 bg-white rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${
                              metric.value >= 80 ? 'bg-green-600' :
                              metric.value >= 60 ? 'bg-yellow-600' :
                              'bg-red-600'
                            }`}
                            style={{ width: `${metric.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Detailed Metrics */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-gray-900">Detailed Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        { label: 'Eye Contact', value: videoAnalysisResult?.details?.eye_contact, unit: '%' },
                        { label: 'Head Stability', value: videoAnalysisResult?.details?.head_stability, unit: '%' },
                        { label: 'Smile Intensity', value: (videoAnalysisResult?.details?.smile_intensity), unit: '%' },
                        { label: 'Nervousness', value: videoAnalysisResult?.details?.nervousness, unit: '%', isNegative: true }
                      ].map((metric, idx) => (
                        <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-sm font-semibold text-gray-700">{metric.label}</p>
                            <span className={`text-lg font-bold ${metric.isNegative ? 'text-red-600' : 'text-green-600'}`}>
                              {metric.value.toFixed(1)}{metric.unit}
                            </span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2.5 overflow-hidden">
                            <div
                              className={`h-2.5 rounded-full transition-all duration-500 ${
                                metric.isNegative ? 'bg-red-500' : 'bg-green-600'
                              }`}
                              style={{ width: `${metric.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Emotion Distribution */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mt-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Emotion Distribution</h4>
                      <div className="space-y-4">
                        {Object.entries(videoAnalysisResult.details.dominant_emotions_over_time).map(([emotion, percentage]) => (
                          <div key={emotion}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-gray-700 capitalize">{emotion}</span>
                              <span className="text-sm font-bold text-gray-900">{percentage.toFixed(1)}%</span>
                            </div>
                            <div className="bg-white rounded-full h-3 overflow-hidden shadow-inner">
                              <div
                                className={`h-3 rounded-full transition-all duration-500 ${
                                  emotion === "happy" ? "bg-green-500" :
                                  emotion === "sad" ? "bg-blue-500" :
                                  "bg-gray-400"
                                }`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Resume Scoring Section */}
          {activeTab === "resume" && (
            <div className="space-y-6">
              {/* Resume Upload & Parse Section */}
              {!showEditForm && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Upload Resume for Auto-Fill</h2>
                      <p className="text-sm text-gray-600">Upload a resume file to automatically extract candidate information</p>
                    </div>
                  </div>

                  <form onSubmit={handleResumeParseSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Resume File (PDF, DOC, DOCX)
                      </label>
                      <div className="flex items-center gap-4">
                        <label className="flex-1 cursor-pointer">
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200">
                            <div className="text-center">
                              <svg className="mx-auto h-16 w-16 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <p className="mt-3 text-base font-medium text-gray-700">
                                {resumeFileName || "Click to upload resume file"}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Supported formats: PDF, DOC, DOCX
                              </p>
                            </div>
                          </div>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeFileChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={resumeParseLoading || !resumeFile}
                        className={`px-8 py-3 font-semibold rounded-lg transition-all duration-200 shadow-sm ${
                          resumeParseLoading || !resumeFile
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-md"
                        }`}
                      >
                        {resumeParseLoading ? (
                          <span className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
                            Parsing Resume...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Parse Resume & Auto-Fill
                          </span>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowEditForm(true)}
                        className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200"
                      >
                        Skip & Enter Manually
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Resume Form */}
              {showEditForm && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Candidate Information</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowEditForm(false)}
                    className="px-4 py-2 bg-purple-100 text-purple-700 font-semibold rounded-lg hover:bg-purple-200 transition-all duration-200 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Upload Resume Instead
                  </button>
                </div>

                <form onSubmit={handleResumeScoringSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="NAME"
                        value={resumeForm.NAME}
                        onChange={handleResumeFormChange}
                        placeholder="Enter candidate name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Summary
                      </label>
                      <input
                        type="text"
                        name="SUMMARY"
                        value={resumeForm.SUMMARY}
                        onChange={handleResumeFormChange}
                        placeholder="Brief professional summary"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Work Experience / Personal Projects
                    </label>
                    <textarea
                      name="WORK_EXPERIENCE_PERSONAL_PROJECTS"
                      value={resumeForm.WORK_EXPERIENCE_PERSONAL_PROJECTS}
                      onChange={handleResumeFormChange}
                      rows="4"
                      placeholder="Describe work experience and projects"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Education
                      </label>
                      <textarea
                        name="EDUCATION"
                        value={resumeForm.EDUCATION}
                        onChange={handleResumeFormChange}
                        rows="3"
                        placeholder="Educational background"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Skills / Tools
                      </label>
                      <textarea
                        name="SKILLS_TOOLS"
                        value={resumeForm.SKILLS_TOOLS}
                        onChange={handleResumeFormChange}
                        rows="3"
                        placeholder="Technical skills and tools"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Certifications / Extras
                    </label>
                    <textarea
                      name="CERTIFICATIONS_EXTRAS"
                      value={resumeForm.CERTIFICATIONS_EXTRAS}
                      onChange={handleResumeFormChange}
                      rows="3"
                      placeholder="Certifications, awards, and additional qualifications"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Job Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="JD"
                      value={resumeForm.JD}
                      onChange={handleResumeFormChange}
                      rows="5"
                      placeholder="Paste the complete job description here"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={resumeLoading}
                      className={`px-8 py-3 font-semibold rounded-lg transition-all duration-200 shadow-sm ${
                        resumeLoading
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700 hover:shadow-md"
                      }`}
                    >
                      {resumeLoading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
                          Scoring...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                          Score Resume
                        </span>
                      )}
                    </button>
                    {resumeScoringResult && (
                      <button
                        type="button"
                        onClick={clearResumeScoring}
                        className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200"
                      >
                        Clear Results
                      </button>
                    )}
                  </div>
                </form>
              </div>
              )}

              {/* Resume Scoring Results */}
              {resumeScoringResult && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Scoring Results</h2>
                        <p className="text-sm text-gray-600">Candidate: {resumeForm.NAME}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => downloadPDF('resume')}
                        className="px-5 py-2.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </button>
                      <button
                        onClick={() => downloadJSON(resumeScoringResult, "resume-scoring-report.json")}
                        className="px-5 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        JSON
                      </button>
                    </div>
                  </div>

                  {/* Overall Score Card */}
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 mb-8 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium opacity-90 mb-2">Overall Score</p>
                        <p className="text-6xl font-bold mb-2">{resumeScoringResult.overall_score.toFixed(1)}</p>
                        <p className="text-sm opacity-80">Threshold: {resumeScoringResult.threshold}</p>
                      </div>
                      <div>
                        <span className={`inline-block px-8 py-4 rounded-xl text-2xl font-bold shadow-lg ${getDecisionColor(resumeScoringResult.decision)}`}>
                          {resumeScoringResult.decision}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Overall Report */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Overall Assessment</h3>
                        <p className="text-gray-700 leading-relaxed">{resumeScoringResult.overall_report}</p>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Scores */}
                  <div className="space-y-5">
                    <h3 className="text-xl font-bold text-gray-900">Detailed Breakdown</h3>
                    {resumeScoringResult.details.map((detail, index) => (
                      <div key={index} className={`border rounded-xl p-6 transition-all duration-200 hover:shadow-md ${getScoreBgColor(detail.score)}`}>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-bold text-gray-900 capitalize">
                            {detail.name.replace(/_/g, " ")}
                          </h4>
                          <span className={`text-2xl font-bold ${getScoreColor(detail.score)}`}>
                            {detail.score}<span className="text-lg">/100</span>
                          </span>
                        </div>
                        <div className="bg-white rounded-full h-3 mb-4 overflow-hidden shadow-inner">
                          <div
                            className={`h-3 rounded-full transition-all duration-500 ${
                              detail.score >= 80 ? "bg-green-600" :
                              detail.score >= 60 ? "bg-yellow-600" :
                              "bg-red-600"
                            }`}
                            style={{ width: `${detail.score}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{detail.rationale}</p>
                      </div>
                    ))}
                  </div>

                  {/* Scoring Weights */}
                  <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Scoring Weights Configuration</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(resumeScoringResult.weights).map(([key, value]) => (
                        <div key={key} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                          <p className="text-sm text-gray-600 capitalize mb-1">{key.replace(/_/g, " ")}</p>
                          <p className="text-xl font-bold text-green-600">{value}x</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CandidateAnalysis;

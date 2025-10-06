import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import TestimonialCarousel from "../../components/TestimonialCarousel";
import TeamGallery from "../../components/TeamGallery";

const Careers = ({ jobsdata }) => {
  const [activeModal, setActiveModal] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role: "",
    resume: null,
    cover: "",
    post: "",
  });
  const [errors, setErrors] = useState({});
  const [showWaiting, setShowWaiting] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formValues.name?.trim()) newErrors.name = "Full Name is required";
    if (!formValues.email?.trim()) newErrors.email = "Email is required";
    if (!formValues.role?.trim()) newErrors.role = "Please select a role";
    if (!formValues.resume || formValues.resume.trim() === "") {
      newErrors.resume = "Please upload your resume";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") return;
    if (files) {
      setFormValues((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const uploadResume = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileSize = file.size;
    if (fileSize > 10_000_000) {
      alert("File size should be less than 10MB");
      document.getElementById("resume_file").value = "";
      return;
    }

    // generate new filename
    const ext = file.name.split(".").pop();
    const newFilename = `${Date.now()}${Math.floor(
      Math.random() * 1000
    )}.${ext}`;

    // get signed URL from API
    const res = await fetch(`/api/resumegoogleupload?file=${newFilename}`);
    const { url, fields } = await res.json();
    console.log(res.json);
    const formData = new FormData();
    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const upload = await fetch(url, {
      method: "POST",
      mode: "no-cors", // no-cors, *cors, same-origin
      body: formData,
    }).then((data) => {
      /*console.log(data.json)*/
    });

    setFormValues({ ...formValues, resume: newFilename });
    if (upload) {
      console.log("Uploaded successfully!");
      setFormValues({ ...formValues, resume: newFilename });
    } else {
      console.log(upload);
      setFormValues({ ...formValues, resume: newFilename });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowWaiting(true);

      // Fire GTM dataLayer event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "job_application",
        eventCategory: formValues.role,
        eventAction: "apply",
      });

      try {
        const response = await fetch("/api/jobapplication", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
        });

        if (response.ok) {
          setFormSubmit(true);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setShowWaiting(false);
      }
    }
  };

  const openModal = (jobId) => {
    setActiveModal(jobId);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    const handleBackdropClick = (e) => {
      if (e.target.classList.contains("modal")) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleBackdropClick);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleBackdropClick);
    };
  }, []);

  // Color scheme array for rotating colors
  const colorSchemes = [
    {
      border: "border-emerald-200",
      bg: "bg-emerald-600",
      bgHover: "hover:bg-emerald-700",
    },
    { border: "border-sky-200", bg: "bg-sky-600", bgHover: "hover:bg-sky-700" },
    {
      border: "border-indigo-200",
      bg: "bg-indigo-600",
      bgHover: "hover:bg-indigo-700",
    },
    {
      border: "border-rose-200",
      bg: "bg-rose-600",
      bgHover: "hover:bg-rose-700",
    },
    {
      border: "border-purple-200",
      bg: "bg-purple-600",
      bgHover: "hover:bg-purple-700",
    },
    {
      border: "border-amber-200",
      bg: "bg-amber-600",
      bgHover: "hover:bg-amber-700",
    },
  ];

  const getColorScheme = (index) => {
    return colorSchemes[index % colorSchemes.length];
  };

  return (
    <>
      <Head>
        <title>Careers at AnalyticsLiv | Join Our Data & Marketing Team</title>
        <meta
          name="description"
          content="Explore open roles at AnalyticsLiv. Join a Google Marketing Platform Certified Partner working across GA4, PPC, Programmatic, CRO, and Cloud."
        />
        <link rel="canonical" href="https://analyticsliv.com/careers" />
        <meta
          property="og:title"
          content="Careers at AnalyticsLiv | Join Our Data & Marketing Team"
        />
        <meta
          property="og:description"
          content="Explore open roles at AnalyticsLiv. Be part of a certified partner in GA4, PPC, CRO, DV360, and Cloud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://analyticsliv.com/careers" />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/website-bucket-uploads/static/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Careers at AnalyticsLiv | Join Our Data & Marketing Team"
        />
        <meta
          name="twitter:description"
          content="Explore open roles and apply to join AnalyticsLiv's growing team."
        />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/website-bucket-uploads/static/logo.png"
        />
      </Head>

      <style jsx>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientBG 8s ease infinite;
        }
        @keyframes gradientBG {
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

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
        }
        .modal-content {
          background: #fff;
          max-width: 880px;
          width: 95%;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          overflow-y: auto;
          max-height: 85vh;
        }
        .modal-content h3 {
          margin-bottom: 0.75rem;
        }
        .modal-content ul {
          list-style: disc;
          padding-left: 1.25rem;
        }
        .modal-content li {
          margin: 0.25rem 0;
        }
        @keyframes gradientBG {
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
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientBG 8s ease infinite;
        }
        .carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div
        style={{
          backgroundColor: "white",
          color: "#1e293b",
          fontFamily:
            'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji"',
        }}
      >
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-gray-200">
          <div className="animate-gradient absolute inset-0 bg-gradient-to-r from-emerald-400 via-sky-500 to-indigo-500"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-extrabold tracking-tight mb-4">
              Grow With AnalyticsLiv
            </h1>
            <p className="max-w-2xl mx-auto mb-6 text-lg">
              We're building the future of analytics, media, and technology -
              and we want curious, driven minds to join us.
            </p>
            <a
              href="#roles"
              className="inline-block rounded-2xl bg-white px-6 py-3 text-slate-800 font-semibold shadow-md transition-opacity duration-300 hover:opacity-90"
            >
              View Open Roles
            </a>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-[clamp(1.875rem,4vw,2.25rem)] font-bold text-slate-900 mb-12">
              Why Work With Us
            </h2>
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
              {[
                {
                  title: "Impact at Scale",
                  description:
                    "Work with commerce, travel, banking, and media brands shaping markets.",
                  gradient: "linear-gradient(135deg, #ecfdf5, white)",
                },
                {
                  title: "Continuous Learning",
                  description:
                    "Get certifications, mentorship, and growth opportunities at every step.",
                  gradient: "linear-gradient(135deg, #f0f9ff, white)",
                },
                {
                  title: "Innovation First",
                  description:
                    "Be part of building privacy-safe analytics, AI, and automation solutions.",
                  gradient: "linear-gradient(135deg, #eef2ff, white)",
                },
                {
                  title: "Flexible & Inclusive",
                  description:
                    "Hybrid work, inclusive culture, and clear growth paths for everyone.",
                  gradient: "linear-gradient(135deg, #fffbeb, white)",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
                  style={{ background: item.gradient }}
                >
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roles" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[clamp(1.875rem,4vw,2.25rem)] font-bold text-slate-900 text-center mb-12">
              Open Roles
            </h2>
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
              {jobsdata &&
                jobsdata?.job &&
                jobsdata?.job
                  .filter((job) => job.active)
                  .map((job, index) => {
                    const colorScheme = getColorScheme(index);
                    return (
                      <div
                        key={job.id}
                        className="relative rounded-2xl border p-6 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
                        style={{
                          borderColor:
                            colorScheme.border
                              .replace("border-", "")
                              .replace("-200", "") === "emerald"
                              ? "#a7f3d0"
                              : colorScheme.border
                                .replace("border-", "")
                                .replace("-200", "") === "sky"
                                ? "#bae6fd"
                                : colorScheme.border
                                  .replace("border-", "")
                                  .replace("-200", "") === "indigo"
                                  ? "#c7d2fe"
                                  : colorScheme.border
                                    .replace("border-", "")
                                    .replace("-200", "") === "rose"
                                    ? "#fecdd3"
                                    : colorScheme.border
                                      .replace("border-", "")
                                      .replace("-200", "") === "purple"
                                      ? "#ddd6fe"
                                      : "#fed7aa",
                        }}
                      >
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {job.title}
                        </h3>
                        <div className="text-slate-600 text-sm mb-1">
                          <span className="overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                            {job.brief}
                          </span>
                          <button
                            onClick={() => openModal(job.id)}
                            className="text-blue-700 font-semibold hover:underline"
                          >
                            Read more
                          </button>
                        </div>
                        <p className="text-xs text-slate-500 mb-4">
                          Location: {job.location} | Experience:{" "}
                          {job.experience}
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => openModal(job.id)}
                            className="rounded-md bg-slate-200 px-3 py-1 text-sm transition-colors duration-300 hover:bg-slate-300"
                          >
                            View JD
                          </button>
                          <Link href={`#apply`}>
                            <button
                              className="rounded-md px-4 py-2 text-sm text-white"
                              style={{
                                backgroundColor:
                                  colorScheme.border
                                    .replace("border-", "")
                                    .replace("-200", "") === "emerald"
                                    ? "#059669"
                                    : colorScheme.border
                                      .replace("border-", "")
                                      .replace("-200", "") === "sky"
                                      ? "#0284c7"
                                      : colorScheme.border
                                        .replace("border-", "")
                                        .replace("-200", "") === "indigo"
                                        ? "#4f46e5"
                                        : colorScheme.border
                                          .replace("border-", "")
                                          .replace("-200", "") === "rose"
                                          ? "#e11d48"
                                          : colorScheme.border
                                            .replace("border-", "")
                                            .replace("-200", "") === "purple"
                                            ? "#9333ea"
                                            : "#d97706",
                              }}
                            >
                              Apply Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </section>

        {/* JD MODALS */}
        {activeModal && jobsdata && jobsdata?.job && (
          <div className="modal">
            <div className="modal-content">
              {(() => {
                const job = jobsdata?.job?.find((j) => j.id === activeModal);
                console.log("job job ---", job);
                if (!job) return null;

                return (
                  <>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "700" }}>
                      {job?.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#64748b",
                        marginBottom: "1rem",
                      }}
                    >
                      Location: {job?.location} | Experience: {job?.experience}
                    </p>

                    <div>
                      <div
                        style={{ fontWeight: "600", marginBottom: "0.5rem" }}
                      >
                        Description:
                      </div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#64748b",
                          marginBottom: "1rem",
                        }}
                      >
                        {job?.our_description}
                      </p>
                    </div>

                    {job?.details &&
                      job?.details?.map((detail, index) => (
                        <div key={index} style={{ marginBottom: "1.30rem" }}>
                          <h4
                            style={{
                              fontWeight: "600",
                              marginBottom: "0.5rem",
                            }}
                          >
                            {detail?.heading}
                          </h4>
                          <ul
                            style={{ color: "#374151", fontSize: "0.875rem" }}
                          >
                            {detail?.points?.map((point, pointIndex) => (
                              <li
                                key={pointIndex}
                                style={{ margin: "0.25rem 0" }}
                              >
                                {point?.trim()}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    <div>
                      <div
                        style={{ fontWeight: "600", marginBottom: "0.5rem" }}
                      >
                        Posted on:
                      </div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#64748b",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {job?.postingdate}
                      </p>
                    </div>

                    <div
                      style={{
                        marginTop: "1.5rem",
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "0.75rem",
                      }}
                    >
                      <Link href={`#apply`}>
                        <button
                          onClick={closeModal}
                          style={{
                            borderRadius: "0.25rem",
                            backgroundColor: "#059669",
                            color: "white",
                            padding: "0.5rem 1rem",
                            textDecoration: "none",
                          }}
                        >
                          Apply
                        </button>
                      </Link>
                      <button
                        onClick={closeModal}
                        style={{
                          borderRadius: "0.25rem",
                          backgroundColor: "#0f172a",
                          color: "white",
                          padding: "0.5rem 1rem",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        <section id="apply" className="py-10 md:py-20">
          <div className="max-w-3xl mx-auto px-6">
            {formSubmit ? (
              <section className="py-20 text-center">
                <div className="max-w-xl mx-auto">
                  <img
                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Thank_You_img.png"
                    alt="Thank you"
                    className="mx-auto mb-6 rounded-lg shadow-md"
                  />
                  <p className="mt-2 text-slate-600">
                    Our team will review your application and get back to you
                    soon.
                  </p>
                </div>
              </section>
            ) : (
              <div>
                <h2 className="text-center text-slate-900 font-bold mb-12 text-[clamp(1.875rem,4vw,2.25rem)]">
                  Apply Now
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="grid gap-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-md"
                >
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      className={`mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800 ${errors.name ? "border-red-500" : "border-slate-300"
                        }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      className={`mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800 ${errors.email ? "border-red-500" : "border-slate-300"
                        }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Role Applying For
                    </label>
                    <select
                      name="role"
                      value={formValues.post || ""}
                      onChange={(e) => {
                        const selectedJob = jobsdata?.job?.find(
                          (job) => job.id === e.target.value
                        );
                        setFormValues((prev) => ({
                          ...prev,
                          post: selectedJob?.id || "",
                          role: selectedJob?.title || "",
                        }));
                      }}
                      className={`mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800 ${errors.role ? "border-red-500" : "border-slate-300"
                        }`}
                    >
                      <option value="">Select a role</option>
                      {jobsdata?.job
                        ?.filter((job) => job.active)
                        .map((job) => (
                          <option key={job.id} value={job.id}>
                            {job.title}
                          </option>
                        ))}
                    </select>
                    {errors.role && (
                      <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                    )}
                  </div>

                  {/* Resume */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Resume Upload
                    </label>
                    <input
                      id="resume_file"
                      type="file"
                      accept=".pdf, .jpg, .jpeg, .docx"
                      onChange={uploadResume}
                      className={`mt-1 w-full rounded-lg border px-3 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-white hover:file:bg-slate-700 ${errors.resume ? "border-red-500" : "border-slate-300"
                        }`}
                    />
                    {errors.resume && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.resume}
                      </p>
                    )}
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Cover Letter (Optional)
                    </label>
                    <textarea
                      name="cover"
                      rows="5"
                      value={formValues.cover}
                      onChange={handleChange}
                      className="mt-1 w-full max-h-[180px] overscroll-y-auto rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-800"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={showWaiting}
                    className="rounded-lg bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-700 transition-colors duration-300 disabled:opacity-50"
                  >
                    {showWaiting ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* PERKS */}
        <section className="bg-[linear-gradient(90deg,#ecfdf5,white,#f0f9ff)] py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-[clamp(1.875rem,4vw,2.25rem)] font-bold text-slate-900 mb-2">
              Perks & Benefits
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto mb-12">
              We believe people do their best work when they're supported and
              inspired. Here's how we make it happen.
            </p>
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
              {[
                {
                  title: "Hybrid Work",
                  description:
                    "Balance your schedule with flexible remote and office options.",
                },
                {
                  title: "Learning & Growth",
                  description:
                    "Annual budgets for certifications, training, and conferences.",
                },
                {
                  title: "Health & Wellness",
                  description:
                    "Comprehensive insurance and wellness programs for peace of mind.",
                },
                {
                  title: "Performance Bonuses",
                  description:
                    "Be rewarded with incentives that recognize your impact and success.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl text-center"
                >
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white text-slate-800">
          <section className="py-20 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Life at AnalyticsLiv
              </h2>
              <p className="mt-2 text-slate-600 max-w-3xl mx-auto">
                We believe in curiosity, collaboration, and creativity. Here’s a
                peek into our culture.
              </p>
              <TestimonialCarousel />

              <TeamGallery />
            </div>
          </section>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 text-center text-white bg-[linear-gradient(90deg,#0f172a,#374151)]">
          <h3 className="text-2xl font-bold mb-2">
            Don't see the role you're looking for?
          </h3>
          <p>
            Send your CV to{" "}
            <a
              href="mailto:hr@analyticsliv.com"
              className="underline font-semibold text-white"
            >
              hr@analyticsliv.com
            </a>
          </p>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`${process.env.domain}/api/alljobs`);
  const jobsdata = await res.json();

  // Pass data to the page via props
  return { props: { jobsdata } };
}

export default Careers;

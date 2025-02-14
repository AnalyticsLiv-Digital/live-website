import React, { useState } from "react";

const Index = ({ applications }) => {
  const job = applications.job;
  const [hoveredField, setHoveredField] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldKey) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => setCopiedField(null), 1000);
  };

  return (
    <>
      <div className="min-h-screen bg-white px-12">
        <div className="container mx-auto">
          <h1 className="text-center font-bold text-3xl py-8 text-gray-800">
            Applications For {job[0].postName}
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-700 text-gray-200">
                <tr className="text-center text-xl font-semibold h-[70px]">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Experience</th>
                  <th className="py-3 px-4">Resume</th>
                  <th className="py-3 px-4">LinkedIn</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Notice Period</th>
                </tr>
              </thead>
              <tbody className="text-center text-gray-300">
                {job &&
                  job.map((job, key) => (
                    <tr
                      key={key}
                      className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
                    >
                      <td className="py-3 px-3 max-w-xs break-words">
                        {job.firstName} {job.lastName}
                      </td>
                      <td className="py-4 px-6">{job.experience}</td>
                      <td className="py-4 px-6">
                        <a
                          href={`https://storage.googleapis.com/website-bucket-uploads/${job.resume}`}
                          target='_blank'
                          className="text-gray-400 hover:underline"
                        >
                          Resume
                        </a>
                      </td>
                      <td className="py-4 px-6">
                        {job.linkedin && (
                          <a
                            href={job.linkedin}
                            target='_blank'
                            className="text-gray-400 hover:underline"
                          >
                            LinkedIn
                          </a>
                        )}
                      </td>

                      <td
                        className="py-4 px-6 relative"
                        onMouseEnter={() => setHoveredField(`email-${key}`)}
                        onMouseLeave={() => setHoveredField(null)}
                      >
                        {job.email}
                        {hoveredField === `email-${key}` && (
                          <button
                            className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-600 text-white text-xs px-2 py-1 rounded-md"
                            onClick={() => handleCopy(job.email, `email-${key}`)}
                          >
                            {copiedField === `email-${key}` ? "Copied!" : "Copy"}
                          </button>
                        )}
                      </td>

                      <td
                        className="py-4 px-6 relative"
                        onMouseEnter={() => setHoveredField(`contact-${key}`)}
                        onMouseLeave={() => setHoveredField(null)}
                      >
                        {job.contact}
                        {hoveredField === `contact-${key}` && (
                          <button
                            className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-600 text-white text-xs px-2 py-1 rounded-md"
                            onClick={() => handleCopy(job.contact, `contact-${key}`)}
                          >
                            {copiedField === `contact-${key}` ? "Copied!" : "Copy"}
                          </button>
                        )}
                      </td>
                      <td className="py-4 px-6">{job.noticePeriod}</td>
                    </tr>
                  ))}
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
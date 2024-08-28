import React from 'react';
import Navbar from '../Navbar';

const Index = ({ jobs }) => {
  const job = jobs.job;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white p-6">
        <div className="container mx-auto">
          <h1 className="text-center font-extrabold text-4xl py-2 text-gray-800">
            Jobs
          </h1>
          <div className="flex justify-start py-4">
            <a
              href="/admin/jobs/create"
              className="bg-gray-700 text-lg px-8 flex gap-2 text-white font-semibold py-2 rounded hover:bg-gray-600 transition duration-300"
            >
              Add <img src='/plus.png' className="w-full h-full" alt="Plus Icon" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-700 text-gray-200">
                <tr className="text-center font-semibold">
                  <th className="py-3 px-4">Job Title</th>
                  <th className="py-3 px-4">Edit</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Preview</th>
                  <th className="py-3 px-4">Applications</th>
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
                        {job.title}
                      </td>
                      <td className="py-4 px-6">
                        <a href={`/admin/jobs/edit/${job.id}`} className="text-gray-400 hover:underline">
                          Edit
                        </a>
                      </td>
                      <td className={`py-4 px-6 ${job.active ? "text-green-500" : "text-red-500"}`}>
                        {job.active ? "Active" : "Inactive"}
                      </td>
                      <td className="py-4 px-6">
                        <a href={`/careers/${job.id}`} className="text-gray-400 hover:underline">
                          Preview
                        </a>
                      </td>
                      <td className="py-4 px-6">
                        <a href={`/admin/jobs/candidates/${job.id}`} className="text-gray-400 hover:underline">
                          Applications
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`${process.env.domain}/api/alljobsadmin`);
  const jobs = await res.json();

  // Pass data to the page via props
  return { props: { jobs } };
}

export default Index;
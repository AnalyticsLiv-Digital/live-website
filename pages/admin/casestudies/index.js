import React from 'react';
import { useSession, signIn } from "next-auth/react";
import GoogleButton from 'react-google-button';
import Navbar from '../Navbar';

const Index = ({ casestudies }) => {
  const { data: session, status } = useSession();
  const casestudy = casestudies.casestudy;

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

  if (session) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white p-6">
          <div className="container mx-auto">
            <h1 className="text-center font-extrabold text-4xl py-4 text-gray-800">
              Case Studies
            </h1>
            <div className="flex justify-start py-4">
              <a
                href="/admin/casestudies/create"
                className="bg-gray-700 text-xl px-8 flex gap-2 text-white font-semibold py-2 rounded hover:bg-gray-600 transition duration-300"
              >
                Add <img src='/plus.png' className="w-full h-full" alt="Plus Icon" />
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-700 text-gray-200">
                  <tr className="text-center text-xl font-semibold h-[70px]">
                    <th className="py-3 px-4">Case Study Name</th>
                    <th className="py-3 px-4">Link</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Preview</th>
                    <th className="py-3 px-4">Edit</th>
                  </tr>
                </thead>
                <tbody className="text-center text-gray-300">
                  {casestudy && casestudy.map((casestudy, key) => (
                    <tr
                      key={key}
                      className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
                    >
                      <td className="py-3 px-3 max-w-xs break-words">
                        {casestudy.title}
                      </td>
                      <td className="py-4 px-6">
                        <a href={`${casestudy.filename}`} className="text-gray-400 hover:underline">
                          Link
                        </a>
                      </td>
                      <td className={`py-4 px-6 ${casestudy.active ? "text-green-500" : "text-red-500"}`}>
                        {casestudy.active ? "Active" : "Inactive"}
                      </td>
                      <td className="py-4 px-6">
                        <a href={`/case-studies/${casestudy.slug}`} className="text-gray-400 hover:underline">
                          Preview
                        </a>
                      </td>
                      <td className="py-4 px-6">
                        <a href={`/admin/casestudies/edit/${casestudy.slug}`} className="text-gray-400 hover:underline">
                          Edit
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

  return (
    <div className="min-h-screen flex items-center justify-center">
      <GoogleButton onClick={() => signIn()}>Sign in</GoogleButton>
    </div>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API

  const res = await fetch(`${process.env.domain}/api/allcasestudiesadmin`)
  const casestudies = await res.json()

  // Pass data to the page via props
  return { props: { casestudies } }
}

export default Index;
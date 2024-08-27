import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import GoogleButton from "react-google-button";
import Navbar from "../Navbar";

const index = ({ blogDat }) => {
  const blogsData = blogDat.blog;
  const { data: session } = useSession();

  const [selectedDocId, setSelectedDocId] = useState(null);

  const handleDocIdClick = (docId) => {
    setSelectedDocId(docId);
  };

  const closeModal = () => {
    setSelectedDocId(null);
  };

  if (session) {
    return (
      <>  
      <Navbar />
          <div className="min-h-screen bg-gray-900 p-6">
        <div className="container mx-auto">
          <h1 className="text-center font-bold text-4xl py-2 text-gray-100">
            Blogs
          </h1>
          <div className="flex justify-start md:pl-6 pl-2 py-4">
            <a
              href="/admin/blogs/create"
              className="bg-gray-700 text-white font-semibold text-base py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
            >
              Create a New Blog +
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-700 text-gray-200">
                <tr className="text-center font-semibold">
                  <th className="py-3 px-4">Blog Name</th>
                  <th className="py-3 px-4">Author</th>
                  <th className="py-3 px-4" style={{ width: "200px" }}>
                    Document ID
                  </th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Preview</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center text-gray-300">
                {blogsData &&
                  blogsData.map((blog, key) => (
                    <tr
                      key={key}
                      className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
                    >
                      <td className="py-4 px-6 max-w-xs break-words">
                        {blog.title}
                      </td>
                      <td className="py-4 px-6">{blog.author}</td>
                      <td
                        className="py-4 px-6 truncate cursor-pointer"
                        style={{
                          maxWidth: "200px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                        onClick={() => handleDocIdClick(blog.document_id)}
                        title="Click to view full ID"
                      >
                        {blog.document_id}
                      </td>
                      <td className="py-4 px-6">{blog.date}</td>
                      <td
                        className={`py-4 px-6 ${
                          blog.active ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {blog.active ? "Active" : "Inactive"}
                      </td>
                      <td className="py-4 px-6">
                        <a
                          href={`/blogs/${blog.slug}`}
                          className="text-gray-400 hover:underline"
                        >
                          Preview
                        </a>
                      </td>
                      <td className="py-4 px-6">
                        <a
                          href={`/admin/blogs/edit/${blog.slug}`}
                          className="text-gray-400 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal to display full Document ID */}
        {selectedDocId && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-gray-100 text-xl font-semibold mb-4">
                Full Document ID
              </h2>
              <p className="text-gray-300 break-words">{selectedDocId}</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      </>

    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <GoogleButton onClick={() => signIn()} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.domain}/api/allblogsadmin`);
  const blogDat = await res.json();

  return { props: { blogDat } };
}

export default index;
import React from "react";
import GoogleButton from "react-google-button";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";

const index = ({ data }) => {
  const { data: session } = useSession();
  const [loginState, setLoginState] = useState(!!session);
  const router = useRouter();

  if (session) {
    return (
      <>
        {" "}
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
            <DashboardCard
              href="/admin/blogs"
              title="Blogs"
              count={data.blog}
            />
            <DashboardCard
              href="/admin/casestudies"
              title="Case Studies"
              count={data.casestudy}
            />
            <DashboardCard
              href="/admin/jobs"
              title="Jobs/Applications"
              count={`${data.job}/${data.jobapplications}`}
            />
            <DashboardCard
              href="/admin/leads"
              title="Leads"
              count={data.leads}
            />
          </div>
          <button
            onClick={() => signOut()}
            className="mt-8 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300"
          >
            Sign out
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <GoogleButton onClick={() => signIn()} />
    </div>
  );
};

const DashboardCard = ({ href, title, count }) => (
  <a
    href={href}
    className="bg-white shadow-md rounded-lg p-6 text-center transform hover:scale-105 transition duration-300"
  >
    <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
    <h2 className="text-4xl font-bold text-gray-500 mt-2">{count}</h2>
  </a>
);

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.domain}/api/admin/total`);
  const data = await res.json();
  return { props: { data } };
}

export default index
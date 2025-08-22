import React from "react";
import GoogleButton from "react-google-button";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";

const index = ({ data }) => {
  const { data: session, status } = useSession();

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
  const imgUrl = [
    "https://storage.googleapis.com/website-bucket-uploads/static/public/blogs.png",
    "/casestudy.png",
    "/job.png",
    "/leads.png",
    "https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/youtube.svg"
  ];

  if (session) {
    return (
      <>
        <div className="bg-gray-100 min-h-[100dvh]">
          <Navbar />

          <div className="flex flex-col max-md:gap-6 gap-12 items-center justify-evenly pb-10">
            <h1 className="text-center font-extrabold text-4xl pt-14 pb-10 text-gray-800">
              Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 max-md:gap-4 gap-8 max-w-4xl max-md:px-4 w-full">
              <DashboardCard
                href="/admin/blogs"
                title="Blogs"
                count={data.blog}
                imgUrl={imgUrl[0]}
              />
              <DashboardCard
                href="/admin/casestudies"
                title="Case Studies"
                count={data.casestudy}
                imgUrl={imgUrl[1]}
              />
              <DashboardCard
                href="/admin/jobs"
                title="Jobs/Applications"
                count={`${data.job}/${data.jobapplications}`}
                imgUrl={imgUrl[2]}
              />
              <DashboardCard
                href="/admin/leads"
                title="Leads"
                count={data.leads}
                imgUrl={imgUrl[3]}
              />
              <DashboardCard
                href="/admin/ytPlaylist"
                title="Yt Playlist"
                count={data.ytplaylist}
                imgUrl={imgUrl[4]}
              />
            </div>
          </div>
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

const DashboardCard = ({ href, title, count, imgUrl }) => (
  <a
    href={href}
    className="bg-white shadow-md rounded-lg p-6 text-center transform hover:scale-105 transition duration-300"
  >
    <div className="flex justify-center items-center">
      <img src={imgUrl} alt={title} className="w-9 h-9 mr-3" />
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
    </div>
    <h2 className="text-4xl font-bold text-gray-500 mt-2">{count}</h2>
  </a>
);

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.domain}/api/admin/total`);
  const data = await res.json();
  return { props: { data } };
}

export default index;
import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import GoogleButton from "react-google-button";
import Navbar from "../Navbar";

const Index = ({ ytPlaylistDat }) => {
    const ytPlaylistData = ytPlaylistDat.ytPlaylist;
    const { data: session, status } = useSession();
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    if (status === "loading") {
        return (
            <div className="flex flex-col min-h-screen justify-center items-center space-y-4">
                <div className="flex items-center">
                    <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
                <span className="text-lg font-semibold text-gray-700">Loading...</span>
            </div>
        );
    }

    const handleIdClick = (ids) => {
        setSelectedPlaylist(ids);
        console.log("object", selectedPlaylist)
    };

    const closeModal = () => {
        setSelectedPlaylist(null);
        console.log("selec", selectedPlaylist)
    };

    if (session) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-white p-6">
                    <div className="container mx-auto">
                        <h1 className="text-center font-extrabold text-4xl py-4 text-gray-800">
                            YouTube Playlists
                        </h1>
                        <div className="flex justify-start py-4">
                            <a
                                href="/admin/ytPlaylist/create"
                                className="bg-gray-700 text-xl px-8 flex gap-2 text-white font-semibold py-2 rounded hover:bg-gray-600 transition duration-300"
                            >
                                Add <img src="/plus.png" className="w-full h-full" alt="Plus Icon" />
                            </a>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
                                <thead className="bg-gray-700 text-gray-200">
                                    <tr className="text-center text-xl font-semibold h-[70px]">
                                        <th className="py-3 px-4">Playlist Name</th>
                                        {/* <th className="py-3 px-4 w-[250px]">IDs</th> */}
                                        <th className="py-3 px-4">Status</th>
                                        <th className="py-3 px-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center text-gray-300">
                                    {ytPlaylistData &&
                                        ytPlaylistData?.map((ytPlaylist, key) => (
                                            <tr
                                                key={key}
                                                className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
                                            >
                                                <td className="py-3 px-3 max-w-xs break-words">{ytPlaylist.title}</td>
                                                {/* <td
                                                    className="py-4 px-12 flex flex-col justify-start items-start"
                                                    style={{
                                                        maxWidth: "200px",
                                                        maxHeight: "150px",
                                                        marginBottom: "10px",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() => handleIdClick(ytPlaylist.ids)}
                                                    title="Click to view all ID"
                                                >
                                                    {ytPlaylist?.ids?.map((id) => (
                                                        <li key={id}>{id}</li>
                                                    ))}
                                                </td>
                                                {JSON.stringify(selectedPlaylist) === JSON.stringify(ytPlaylist.ids) && (
                                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                                            {selectedPlaylist.map((id) => (
                                                                <li key={id}>{id}</li>
                                                            ))}
                                                            <button
                                                                onClick={closeModal}
                                                                className="mt-4 bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
                                                            >
                                                                Close
                                                            </button>
                                                        </div>
                                                    </div>
                                                )} */}
                                                <td
                                                    className={`py-4 px-6 ${ytPlaylist.active === "true" ? "text-green-500" : "text-red-500"
                                                        }`}
                                                >
                                                    {ytPlaylist.active === "true" ? "Active" : "Inactive"}
                                                </td>
                                                <td className="py-4 px-6">
                                                    <a
                                                        href={`/admin/ytPlaylist/edit/${ytPlaylist._id}`}
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
    const res = await fetch(`${process.env.domain}/api/allytplaylists`);
    const ytPlaylistDat = await res.json();
    return { props: { ytPlaylistDat } };
}

export default Index;




// import React, { useState } from "react";
// import { useSession, signIn } from "next-auth/react";
// import GoogleButton from "react-google-button";
// import Navbar from "../Navbar";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Index = ({ ytPlaylistDat }) => {
//     const ytPlaylistData = ytPlaylistDat.ytPlaylist;
//     const { data: session, status } = useSession();
//     const [selectedPlaylist, setSelectedPlaylist] = useState(null);

//     if (status === "loading") {
//         return (
//             <div className="flex flex-col min-h-screen justify-center items-center space-y-4">
//                 <div className="flex items-center">
//                     <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
//                 </div>
//                 <span className="text-lg font-semibold text-gray-700">Loading...</span>
//             </div>
//         );
//     }

//     const handleRowClick = (playlist) => {
//         if (selectedPlaylist?.title === playlist.title) {
//             setSelectedPlaylist(null);
//         } else {
//             setSelectedPlaylist(playlist);
//         }
//     };

//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,

//     };

//     if (session) {
//         return (
//             <>
//                 <Navbar />
//                 <div className="min-h-screen bg-white p-6">
//                     <div className="container mx-auto">
//                         <h1 className="text-center font-extrabold text-4xl py-4 text-gray-800">
//                             YouTube Playlists
//                         </h1>
//                         <div className="flex justify-start py-4">
//                             <a
//                                 href="/admin/ytPlaylist/create"
//                                 className="bg-gray-700 text-xl px-8 flex gap-2 text-white font-semibold py-2 rounded hover:bg-gray-600 transition duration-300"
//                             >
//                                 Add <img src="/plus.png" className="w-full h-full" alt="Plus Icon" />
//                             </a>
//                         </div>
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full bg-gray-800 shadow-md rounded-lg">
//                                 <thead className="bg-gray-700 text-gray-200">
//                                     <tr className="text-center text-xl font-semibold h-[70px]">
//                                         <th className="py-3 px-4">Playlist Name</th>
//                                         <th className="py-3 px-4">Status</th>
//                                         <th className="py-3 px-4">Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="text-center text-gray-300">
//                                     {ytPlaylistData &&
//                                         ytPlaylistData.map((ytPlaylist, key) => (
//                                             <React.Fragment key={key}>
//                                                 <tr
//                                                     className={`border-b border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer ${selectedPlaylist?.title === ytPlaylist.title
//                                                         ? "bg-gray-700"
//                                                         : ""
//                                                         }`}
//                                                     onClick={() => handleRowClick(ytPlaylist)}
//                                                 >
//                                                     <td className="py-3 px-3 max-w-xs break-words">{ytPlaylist.title}</td>
//                                                     <td
//                                                         className={`py-4 px-6 ${ytPlaylist.active === "true"
//                                                             ? "text-green-500"
//                                                             : "text-red-500"
//                                                             }`}
//                                                     >
//                                                         {ytPlaylist.active === "true" ? "Active" : "Inactive"}
//                                                     </td>
//                                                     <td className="py-4 px-6">
//                                                         <a
//                                                             href={`/admin/ytPlaylist/edit/${ytPlaylist._id}`}
//                                                             className="text-gray-400 hover:underline"
//                                                         >
//                                                             Edit
//                                                         </a>
//                                                     </td>
//                                                 </tr>
//                                                 {selectedPlaylist?.title === ytPlaylist.title && (
//                                                     <tr colSpan="3" className="h-[400px]">
//                                                         <td colSpan="3" className="py-4">
//                                                             {/* <div className="bg-gray-900 p-6 flex carousel-custom rounded-lg">
//                                                                 <Slider {...settings}>
//                                                                     {ytPlaylist.ids.map((videoId) => (
//                                                                         <div key={videoId} className="p-2 flex">
//                                                                             <iframe
//                                                                                 width="300"
//                                                                                 height="200"
//                                                                                 src={`https://www.youtube.com/embed/${videoId}`}
//                                                                                 title="YouTube video"
//                                                                                 frameBorder="0"
//                                                                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                                                                 allowFullScreen
//                                                                             ></iframe>
//                                                                         </div>
//                                                                     ))}
//                                                                 </Slider>
//                                                             </div> */}
//                                                             <div className="carousel-custom">
//                                                                 <Slider {...settings}>
//                                                                     {ytPlaylist.ids.map((id, index) => (
//                                                                         <div key={index} className="text-center px-5">
//                                                                             <iframe
//                                                                                 width="100%"
//                                                                                 height="400"
//                                                                                 src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
//                                                                                 title={`YouTube Video ${index + 1}`}
//                                                                                 frameBorder="0"
//                                                                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                                                                 allowFullScreen
//                                                                             // onMouseEnter={handleVideoPlay}
//                                                                             // onMouseLeave={handleVideoPause}
//                                                                             ></iframe>
//                                                                         </div>
//                                                                     ))}
//                                                                 </Slider>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 )}
//                                             </React.Fragment>
//                                         ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-900">
//             <GoogleButton onClick={() => signIn()} />
//         </div>
//     );
// };

// export async function getServerSideProps(context) {
//     const res = await fetch(`${process.env.domain}/api/allytplaylists`);
//     const ytPlaylistDat = await res.json();
//     return { props: { ytPlaylistDat } };
// }

// export default Index;
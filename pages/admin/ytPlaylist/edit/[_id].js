import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import GoogleButton from "react-google-button";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Index = ({ ytPlaylistDat }) => {
    const ytPlaylistData = ytPlaylistDat?.ytPlaylist[0];
    const initialValues = {
        _id: ytPlaylistData?._id,
        title: ytPlaylistData?.title,
        active: ytPlaylistData?.active,
        ids: ytPlaylistData?.ids || [],
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [newId, setNewId] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleAddId = () => {
        if (newId.trim()) {
            const updatedIds = [...formValues.ids, newId];
            setFormValues({ ...formValues, ids: updatedIds });
            setNewId("");
        }
    };

    const handleRemoveId = (index) => {
        const updatedIds = [...formValues.ids];
        updatedIds.splice(index, 1);
        setFormValues({ ...formValues, ids: updatedIds });
    };

    // Drag-and-drop logic for reordering IDs
    const moveItem = (fromIndex, toIndex) => {
        const updatedIds = [...formValues.ids];
        const [movedItem] = updatedIds.splice(fromIndex, 1);
        updatedIds.splice(toIndex, 0, movedItem);
        setFormValues({ ...formValues, ids: updatedIds });
    };

    const { data: session } = useSession();

    // Drag-and-drop item component
    const DraggableItem = ({ id, index }) => {
        const [, drag] = useDrag(() => ({
            type: "ITEM",
            item: { id, index },
        }));

        const [, drop] = useDrop(() => ({
            accept: "ITEM",
            hover: (item) => {
                if (item.index !== index) {
                    moveItem(item.index, index);
                    item.index = index;
                }
            },
        }));

        return (
            <div
                ref={(node) => drag(drop(node))}
                className="flex justify-between items-center bg-slate-800 px-2 py-1 rounded"
            >
                <span className="flex-1 text-sm text-gray-200">{id}</span>
                <button
                    type="button"
                    onClick={() => handleRemoveId(index)}
                    className="text-red-500 hover:underline"
                >
                    Remove
                </button>
            </div>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch("/api/admin/ytPlaylist/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to update data");
                }
                return response.json();
            })
            .then(() => {
                alert("Data updated successfully");
                setLoading(false);
                router.push("/admin/ytPlaylist");
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
                alert("Error updating data");
            });
    };

    const handleCancel = () => {
        router.push("/admin/ytPlaylist");
    };

    if (session) {
        return (
            <div className="p-6 bg-gray-50">
                <div className="max-w-2xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-base font-semibold mb-2 text-gray-200">
                                Playlist Title
                            </label>
                            <input
                                required
                                className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                                type="text"
                                name="title"
                                value={formValues.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-base font-semibold mb-2 text-gray-200">
                                Active
                            </label>
                            <select
                                required
                                className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                                name="active"
                                value={formValues.active}
                                onChange={handleChange}
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-base font-semibold mb-2 text-gray-200">
                                Playlist IDs
                            </label>
                            <div className="flex items-center mb-4">
                                <input
                                    className="flex-1 px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                                    type="text"
                                    value={newId}
                                    onChange={(e) => setNewId(e.target.value)}
                                    placeholder="Enter ID"
                                />
                                <button
                                    type="button"
                                    onClick={handleAddId}
                                    className="ml-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                                >
                                    Add
                                </button>
                            </div>
                            {formValues.ids.length > 0 && (
                                <DndProvider backend={HTML5Backend}>
                                    <div className="mt-2 text-sm text-gray-300 space-y-1">
                                        {formValues?.ids?.map((id, index) => (
                                            <DraggableItem key={index} id={id} index={index} />
                                        ))}
                                    </div>
                                </DndProvider>
                            )}
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <button
                                type="submit"
                                className={`px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300 ${loading ? "cursor-not-allowed" : ""}`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        <span
                                            style={{
                                                border: "2px solid #ffffff",
                                                borderTop: "2px solid #00bcd4",
                                                borderRadius: "50%",
                                                width: "12px",
                                                height: "12px",
                                                marginRight: "8px",
                                                animation: "spin 0.6s linear infinite",
                                            }}
                                        ></span>
                                        Loading...
                                    </span>
                                ) : (
                                    "Submit"
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <>
            Not signed in <br />
            <GoogleButton onClick={() => signIn()} />
        </>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(
        `${process.env.domain}/api/findytplaylist?_id=${context.params._id}`
    );
    const ytPlaylistDat = await res.json();
    return { props: { ytPlaylistDat } };
}

export default Index;




// import React, { useState } from "react";
// import { useSession, signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import GoogleButton from "react-google-button";

// const Index = ({ ytPlaylistDat }) => {
//     const ytPlaylistData = ytPlaylistDat?.ytPlaylist[0];
//     const initialValues = {
//         _id: ytPlaylistData?._id,
//         title: ytPlaylistData?.title,
//         active: ytPlaylistData?.active,
//         ids: ytPlaylistData?.ids || [],
//     };

//     const [formValues, setFormValues] = useState(initialValues);
//     const [newId, setNewId] = useState("");
//     const [loading, setLoading] = useState(false);
//     const router = useRouter();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({ ...formValues, [name]: value });
//     };

//     const handleAddId = () => {
//         if (newId.trim()) {
//             const updatedIds = [...formValues.ids, newId];
//             setFormValues({ ...formValues, ids: updatedIds });
//             setNewId("");
//         }
//     };

//     const handleRemoveId = (index) => {
//         const updatedIds = [...formValues.ids];
//         updatedIds.splice(index, 1);
//         setFormValues({ ...formValues, ids: updatedIds });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         fetch("/api/admin/ytPlaylist/update", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formValues),
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Failed to update data");
//                 }
//                 return response.json();
//             })
//             .then(() => {
//                 alert("Data updated successfully");
//                 setLoading(false);
//                 router.push("/admin/ytPlaylist");
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//                 setLoading(false);
//                 alert("Error updating data");
//             });
//     };

//     const handleCancel = () => {
//         router.push("/admin/ytPlaylist");
//     };

//     const { data: session } = useSession();

//     if (session) {
//         return (
//             <div className="p-6 bg-gray-50">
//                 <div className="max-w-2xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg">
//                     <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         <div>
//                             <label className="block text-base font-semibold mb-2 text-gray-200">
//                                 Playlist Title
//                             </label>
//                             <input
//                                 required
//                                 className="w-full px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
//                                 type="text"
//                                 name="title"
//                                 value={formValues.title}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-base font-semibold mb-2 text-gray-200">
//                                 Active
//                             </label>
//                             <select
//                                 required
//                                 className="w-full px-2 py-1 text-sm text-gray-300 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
//                                 name="active"
//                                 value={formValues.active}
//                                 onChange={handleChange}
//                             >
//                                 <option value="true">Yes</option>
//                                 <option value="false">No</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label className="block text-base font-semibold mb-2 text-gray-200">
//                                 Playlist IDs
//                             </label>
//                             <div className="flex items-center mb-4">
//                                 <input
//                                     className="flex-1 px-2 py-1 text-sm text-gray-200 bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
//                                     type="text"
//                                     value={newId}
//                                     onChange={(e) => setNewId(e.target.value)}
//                                     placeholder="Enter ID"
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={handleAddId}
//                                     className="ml-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
//                                 >
//                                     Add
//                                 </button>
//                             </div>
//                             {formValues.ids.length > 0 && (
//                                 <div className="mt-2 text-sm text-gray-300 space-y-1">
//                                     {formValues?.ids?.map((id, index) => (
//                                         <div key={index} className="flex justify-between items-center bg-slate-800 px-2 py-1 rounded">
//                                             <span className="flex-1 text-sm text-gray-200">{id}</span>
//                                             <button
//                                                 type="button"
//                                                 onClick={() => handleRemoveId(index)}
//                                                 className="text-red-500 hover:underline"
//                                             >
//                                                 Remove
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                         <div className="flex justify-between items-center mt-6">
//                             <button
//                                 type="submit"
//                                 className={`px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300 ${loading ? "cursor-not-allowed" : ""}`}
//                                 disabled={loading}
//                             >
//                                 {loading ? (
//                                     <span style={{ display: "flex", alignItems: "center" }}>
//                                         <span
//                                             style={{
//                                                 border: "2px solid #ffffff",
//                                                 borderTop: "2px solid #00bcd4",
//                                                 borderRadius: "50%",
//                                                 width: "12px",
//                                                 height: "12px",
//                                                 marginRight: "8px",
//                                                 animation: "spin 0.6s linear infinite",
//                                             }}
//                                         ></span>
//                                         Loading...
//                                     </span>
//                                 ) : (
//                                     "Submit"
//                                 )}
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={handleCancel}
//                                 className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
//     return (
//         <>
//             Not signed in <br />
//             <GoogleButton onClick={() => signIn()} />
//         </>
//     );
// };

// export async function getServerSideProps(context) {
//     const res = await fetch(
//         `${process.env.domain}/api/findytplaylist?_id=${context.params._id}`
//     );
//     const ytPlaylistDat = await res.json();
//     return { props: { ytPlaylistDat } };
// }

// export default Index;
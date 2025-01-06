import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import GoogleButton from "react-google-button";

const Index = () => {
    const { data: session } = useSession();
    const [loginstate, setLoginstate] = useState(session ? true : false);
    const router = useRouter();

    const initialValues = {
        title: "",
        ids: [],
        active: "false",
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentId, setCurrentId] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleAddId = () => {
        if (currentId.trim()) {
            setFormValues((prev) => ({
                ...prev,
                ids: [...prev.ids, currentId.trim()],
            }));
            setCurrentId("");
        }
    };

    const handleRemoveId = (index) => {
        setFormValues((prev) => ({
            ...prev,
            ids: prev.ids.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        setLoading(true);
        alert("Submitted");

        fetch("/api/admin/ytPlaylist/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                mode: "no-cors",
            },
            body: JSON.stringify({
                title: formValues.title,
                ids: formValues.ids,
                active: formValues.active,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                alert("Data updated");
                setLoading(false);
                router.push("/admin/ytPlaylist");
            })
            .catch((error) => {
                setLoading(false);
                alert("Error occurred");
            });
    };

    const handleCancel = () => {
        router.push("/admin/ytPlaylist");
    };

    if (session) {
        return (
            <div className="p-6 bg-gray-50">
                <div className="max-w-2xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Create New Blog</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-base font-semibold mb-2 text-gray-200">
                                Playlist Title
                            </label>
                            <input
                                required
                                className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                                type="text"
                                name="title"
                                value={formValues.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-base font-semibold mb-2 text-gray-200">
                                Playlist Ids -
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    className="w-full px-2 py-1 text-sm text-white bg-transparent border-b-2 border-slate-500 focus:outline-none focus:border-cyan-500"
                                    type="text"
                                    value={currentId}
                                    onChange={(e) => setCurrentId(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={handleAddId}
                                    className="px-4 py-1 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300"
                                >
                                    Add
                                </button>
                            </div>
                            <ul className="mt-2 text-sm text-gray-300 space-y-1">
                                {formValues.ids.map((id, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between items-center bg-slate-800 px-2 py-1 rounded"
                                    >
                                        <span>{id}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveId(index)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <label className="block text-base font-semibold mb-2 text-gray-200">
                                Active -
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
            <GoogleButton onClick={() => signIn()}>Sign in</GoogleButton>
        </>
    );
};

export default Index;
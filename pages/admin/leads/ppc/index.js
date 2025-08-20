import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import GoogleButton from "react-google-button";
import Navbar from "../../Navbar";

const index = ({ leadDat }) => {
    const leadsData = leadDat.ppc;
    const { data: session, status } = useSession();

    const [hoveredField, setHoveredField] = useState(null);
    const [copiedField, setCopiedField] = useState(null);

    const handleCopy = (text, fieldKey) => {
        navigator.clipboard.writeText(text);
        setCopiedField(fieldKey);
        setTimeout(() => setCopiedField(null), 1000);
    };

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
                    <div className="">
                        <h1 className="text-center font-extrabold text-4xl py-4 text-gray-800">
                            PPC Leads
                        </h1>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
                                <thead className="bg-gray-700 text-gray-200">
                                    <tr className="text-center text-xl font-semibold h-[70px]">
                                        <th className="py-3 px-4">Full Name</th>
                                        <th className="py-3 px-4">Email</th>
                                        <th className="py-3 px-4">Contact</th>
                                        <th className="py-3 px-4">message</th>
                                        <th className="py-3 px-4">Receive Updates</th>
                                        <th className="py-3 px-4">Time</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center text-gray-300">
                                    {leadsData &&
                                        leadsData?.map((contact, key) => (
                                            <tr
                                                key={key}
                                                className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
                                            >
                                                <td className="py-4 px-6">{contact.fullName}</td>
                                                <td className="py-4 px-6 relative"
                                                    onMouseEnter={() => setHoveredField(`email-${key}`)}
                                                    onMouseLeave={() => setHoveredField(null)}>
                                                    {contact.email}
                                                    {hoveredField === `email-${key}` && (
                                                        <button
                                                            className="absolute top-1/2 right-[5%] -translate-y-1/2 bg-gray-600 text-white text-xs px-2 py-1 rounded-md"
                                                            onClick={() => handleCopy(contact.email, `email-${key}`)}
                                                        >
                                                            {copiedField === `email-${key}` ? "Copied!" : "Copy"}
                                                        </button>
                                                    )}
                                                </td>
                                                <td className="py-4 px-6 relative"
                                                    onMouseEnter={() => setHoveredField(`contact-${key}`)}
                                                    onMouseLeave={() => setHoveredField(null)}>
                                                    {contact.contact}
                                                    {hoveredField === `contact-${key}` && (
                                                        <button
                                                            className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-600 text-white text-xs px-2 py-1 rounded-md"
                                                            onClick={() => handleCopy(contact.contact, `contact-${key}`)}
                                                        >
                                                            {copiedField === `contact-${key}` ? "Copied!" : "Copy"}
                                                        </button>
                                                    )}
                                                </td>
                                                <td className="py-4 px-6">{contact.message}</td>
                                                <td className="py-4 px-6">{contact.receiveUpdates ? "yes" : "-"}</td>
                                                <td className="py-4 px-6">{contact.timestamp}</td>
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
    const res = await fetch(`${process.env.domain}/api/admin/leads?type=ppc`);
    const leadDat = await res.json();
    return { props: { leadDat } };
}

export default index;
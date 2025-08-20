import React from "react";
import GoogleButton from "react-google-button";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar";

const Index = ({ data }) => {
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
        "/phone (3).png",
        "/ChatBot_1.gif",
        "/DV_Logo.svg",
        "/Ga4.png",
        "/GTM_Gradiant_Logo_for_Header.png",
        "/E-commerce.png",
        "/E-commerce.png"
    ];

    if (session) {
        return (
            <>
                <div className="bg-gray-100 min-h-[100dvh]">
                    <Navbar />

                    <div className="flex flex-col gap-5 items-center justify-center">
                        <h1 className="text-center font-extrabold text-4xl pt-14 pb-10 text-gray-800">
                            Leads Dashboard
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[10%] max-md:gap-4 gap-6 2xl:gap-10 max-md:px-4 w-full">
                            <LeadsCard
                                href="/admin/leads/contact"
                                title="Contact Leads"
                                count={data.contacts}
                                imgUrl={imgUrl[0]}
                            />
                            <LeadsCard
                                href="/admin/leads/chatbot"
                                title="Chatbot Leads"
                                count={data.ChatBotLeads}
                                imgUrl={imgUrl[1]}
                            />
                            <LeadsCard
                                href="/admin/leads/dv360"
                                title="DV360 Leads"
                                count={data.dv360contacts}
                                imgUrl={imgUrl[2]}
                            />
                            <LeadsCard
                                href="/admin/leads/ga4"
                                title="GA4 Leads"
                                count={data.ga4contacts}
                                imgUrl={imgUrl[3]}
                            />
                            <LeadsCard
                                href="/admin/leads/gtm"
                                title="GTM Leads"
                                count={data.gtmcontacts}
                                imgUrl={imgUrl[4]}
                            />
                            <LeadsCard
                                href="/admin/leads/popup"
                                title="Popup Leads"
                                count={data.PopupContacts}
                                imgUrl={imgUrl[5]}
                            />
                            <LeadsCard
                                href="/admin/leads/ecommerce"
                                title="Ecommerce Leads"
                                count={data.ecommercecontacts}
                                imgUrl={imgUrl[6]}
                            />
                            <LeadsCard
                                href="/admin/leads/ppc"
                                title="PPC Leads"
                                count={data.ppccontact}
                                imgUrl={imgUrl[6]}
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

const LeadsCard = ({ href, title, count, imgUrl }) => (
    <a
        href={href}
        className="bg-white shadow-md rounded-lg p-4 2xl:p-6 text-center transform hover:scale-105 transition duration-300"
    >
        <div className="flex justify-center items-center">
            <img src={imgUrl} alt={title} className="min-w-9 min-h-9 max-w-14 max-h-14 mr-3" />
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

export default Index;
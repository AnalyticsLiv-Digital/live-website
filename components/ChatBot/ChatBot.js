"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { usePathname } from "next/navigation";
import CustomInputWithImage from "./inputBtn";
// import "./chatStyle.css";

export default function App() {
  const [showBot, setShowBot] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [showCross, setShowCross] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const pathname = usePathname();
  const isBlogSlugPage = pathname.startsWith("/blogs/");

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  useEffect(() => {
    setTimeout(() => {
      setShowMsg(true);
    }, 5000);
  }, [])

  const handleToggleBot = () => {

    setShowBot((prev) => {
      const newVal = !prev;
      if (!newVal) {
        sessionStorage.setItem("welcome_hidden", "true");
        setShowMsg(false);
      }
      return newVal;
    });
  };

  const handleMsg = () => {
    setShowMsg(false);
    sessionStorage.setItem("welcome_hidden", "true");
  }

  const handleShowCross = () => {
    setShowCross(true);
  }

  const handleHideCross = () => {
    setShowCross(false);
  }

  return (
    <div className="">
      {showBot && (
        <div
          className={`font-sans transition-all duration-500 ease-in-out transform fixed right-5 md:right-1 bottom-0 z-40 
    ${showBot ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}
    max-md:my-8 md:m-8 flex flex-col md:w-[370px] max-xl:max-h-[400px] max-[1536px]:max-h-[400px] 2xl:max-h-[460px] min-h-[250px] 2xl:min-h-[300px]
    bg-white shadow-lg rounded-md overflow-hidden custom-scrollbar`}
        > <style>{`
            .open-sans-font {
              font-family: 'Open Sans', sans-serif;
            }
          `}</style>
          <Chatbot
            config={{
              ...config,
              customComponents: {
                ...config.customComponents,
                header: () => config.customComponents.header(handleToggleBot),
                userInput: (props) => <CustomInputWithImage {...props} />,
              },
            }}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            // messageHistory={loadMessages()}
            // saveMessages={saveMessages}
            runInitialMessagesWithHistory={true}
          // disableScrollToBottom={true}
          />
        </div>
      )}

      <div onMouseEnter={handleShowCross} onMouseLeave={handleHideCross} className="fixed bottom-[70px] 2xl:bottom-24 z-[100000] right-[75px] sm:right-24">

        <p onClick={handleMsg} className={`transition-all duration-300 transform cursor-pointer z-[100001] bg-gray-600 text-white
        ${showCross ? 'opacity-70' : 'lg:opacity-0 lg:pointer-events-none'} ${showBot ? 'hidden' : ''} ${!showMsg ? 'hidden' : ''}
            fixed border rounded-full text-[8px] 2xl:text-[10px] px-[5px] py-[2px]
            ${isBlogSlugPage ? 'bottom-[125px] 2xl:bottom-[145px] right-[285px] sm:right-[305px] 2xl:right-[305px] ' : 'bottom-[115px] 2xl:bottom-[145px] right-[230px] sm:right-[252px] 2xl:right-[285px] '} 
            `}
        >
          ✖
        </p>

        <div onClick={handleToggleBot} className={`transition-all duration-300 transform text-black ${isBlogSlugPage ? 'w-[220px]' : 'w-[165px] 2xl:w-[200px]'}  text-left flex items-start justify-start gap-2 shadow-md text-[10px] 2xl:text-xs cursor-pointer border bg-white p-2 rounded-md 
        ${showBot ? 'hidden' : ''} ${showMsg ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/public/AnalyticsLiv%20Logo%202%201.png" alt="Analyticsliv"
            className="w-[15px] 2xl:w-5" />
          <div>
            <p className="pb-[5px] 2xl:pb-2 2xl:pt-0.5">Hi there !</p>
            <p>Welcome to AnalyticsLiv !</p>
          </div>
        </div>
      </div>
      <button
        className={`transition-all duration-500 ease-in-out transform fixed bottom-4 right-5 md:right-10 z-[100000] 
    h-16 2xl:h-20 w-16 2xl:w-20 
    ${showBot ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        onClick={handleToggleBot}
      >
        <img src="/ChatBot_1.gif" alt="chatbot" />
      </button>
    </div>
  );
}

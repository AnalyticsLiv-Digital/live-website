"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
// import "./chatStyle.css";

export default function App() {
  const [showBot, setShowBot] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [showCross, setShowCross] = useState(false);

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
          className="max-md:my-8 md:m-8 flex flex-col md:w-[370px] max-h-[380px] 2xl:max-h-[450px] min-h-[250px] 2xl:min-h-[300px] fixed right-10 bottom-[55px] 2xl:bottom-[72px] z-40 bg-white shadow-lg rounded-md overflow-y-hidden custom-scrollbar"
        >
          <Chatbot
            config={config}
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
            fixed bottom-[115px] 2xl:bottom-[145px] right-[230px] sm:right-[252px] 2xl:right-[285px] border rounded-full text-[8px] 2xl:text-[10px] px-[5px] py-[2px]`}
        >
          ✖
        </p>

        <div onClick={handleToggleBot} className={`transition-all duration-300 transform text-black w-[165px] 2xl:w-[200px] text-left flex items-start justify-start gap-2 shadow-md text-[10px] 2xl:text-xs cursor-pointer border bg-white p-2 rounded-md 
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
        className="app-chatbot-button right-5 md:right-10 h-16 2xl:h-20 w-16 2xl:w-20"
        onClick={handleToggleBot}
      >
        {showBot ? <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/ChatBot_Close_Btn.png" alt="chatbot" /> : <img src="/ChatBot_1.gif" alt="chatbot" />}
      </button>
    </div>
  );
}

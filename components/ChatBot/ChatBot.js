"use client";
import React from "react";
import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
// import "./chatStyle.css";

export default function App() {
  const [showBot, setShowBot] = useState(false);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };


  return (
    <div className="">
      {showBot && (
        <div
          className="max-md:my-8 md:m-8 flex flex-col md:w-[370px] max-h-[380px] 2xl:max-h-[450px] min-h-[250px] 2xl:min-h-[300px] fixed right-10 bottom-[55px] 2xl:bottom-[72px] z-[9999] bg-white shadow-lg rounded-md overflow-y-hidden custom-scrollbar"
        // style={{ maxHeight: "400px", minHeight: "300px" }}
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
      <button
        className="app-chatbot-button right-5 md:right-10 h-16 2xl:h-20 w-16 2xl:w-20"
        onClick={() => setShowBot((prev) => !prev)}
      >
        <img src="/ChatBot_1.gif" alt="chatbot" />
        {/* <div>Albot</div>
        <svg viewBox="0 0 640 512" className="app-chatbot-button-icon">
          <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"></path>
        </svg> */}
      </button>
    </div>
  );
}

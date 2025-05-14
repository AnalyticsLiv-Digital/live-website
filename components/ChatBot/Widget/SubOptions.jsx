import React, { useEffect, useState } from "react";
import { subServices } from "../../../utils/chatConfig";

const SubOptions = ({ actionProvider, state }) => {
  const [loading, setLoading] = useState(true);
  const [showText, setShowText] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const subOptions = subServices[state.option] || [];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setShowText(true);
    }, 1000);

    // Show options after another delay (1 second after text)
    setTimeout(() => {
      setShowOptions(true);
    }, 1500);
  }, [state.option]);

  // Hide all buttons once a sub-option is selected
  if (state.subOption) return <div className="flex items-end">
    <img src="https://storage.googleapis.com/website-bucket-uploads/static/public/AnalyticsLiv%20Logo%202%201.png" alt="analyticsLiv chatbot"
      className="w-5" />

    <div className="mr-14 react-chatbot-kit-chat-bot-message">
      <p className="bg-[#E1E1E1] rounded-[40px] text-[10px] 2xl:text-xs text-left">
        Great! Which of our service would you like to check out?
      </p>
    </div>
  </div>;

  return (
    <div className="max-2xl:pb-2 max-xl:pb-5">
      <div className="flex items-end mb-5">
        <img src="https://storage.googleapis.com/website-bucket-uploads/static/public/AnalyticsLiv%20Logo%202%201.png" alt="analyticsLiv chatbot"
          className="w-5" />

        <div className="mr-14 react-chatbot-kit-chat-bot-message">
          {loading ? (
            <div className="chatbot-loader-containerr bg-[#E1E1E1] rounded-[40px] text-xs text-left">
              <div id="chatbot-loaderr">
                <div id="chatbot-loader-dot1r"></div>
                <div id="chatbot-loader-dot2r"></div>
                <div id="chatbot-loader-dot3r"></div>
              </div>
            </div>
          ) : (
            showText && (
              <p className="bg-[#E1E1E1] rounded-[40px] text-[10px] 2xl:text-xs text-left">
                Great! Which of our service would you like to check out?
              </p>
            )
          )}
        </div>
      </div>
      <div className="flex justify-end flex-wrap">
        {showOptions &&
          subOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => actionProvider.handleSubOptionClick(option)}
              className="text-[#007AFF] text-xs rounded-[50px] text-center ml-[2px] mb-[4px] px-2 2xl:px-[15px] py-0.5 2xl:py-[5px] font-normal border border-[#007AFF] hover:bg-[#0263CD] hover:text-white"
            >
              {option}
            </button>
          ))}
      </div>
    </div>
  );
};

export default SubOptions;

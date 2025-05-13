import React, { useState } from "react";

const CustomInputWithImage = ({ onSubmit }) => {
  const [userMessage, setUserMessage] = useState("");

  const handleSend = () => {
    if (userMessage.trim()) {
      onSubmit(userMessage);
      setUserMessage("");
    }
  };

  return (
    <div className="flex items-center p-2 bg-white border-t border-gray-300">
      <input
        className="flex-1 p-2 border border-gray-200 rounded mr-2 text-sm"
        type="text"
        value={userMessage}
        placeholder="Type a message..."
        onChange={(e) => setUserMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <img
        src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Frame%20(1).png"
        alt="Send"
        className="w-6 h-6 cursor-pointer"
        onClick={handleSend}
      />
    </div>
  );
};

export default CustomInputWithImage;

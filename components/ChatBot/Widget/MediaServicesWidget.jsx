import React from "react";

const MediaServicesWidget = ({ setState, actionProvider }) => {
  const subOptions = [
    "Programmatic Media DV360",
    "Search Engine Marketing",
    "eCommerce Marketing",
    "Lead Generation",
    "Mobile App Marketing",
  ];

  return (
    <div>
      <p>Select a sub-option:</p>
      <div className="flex flex-col justify-center items-center gap-3">
      {subOptions.map((option, index) => (
        <button
          key={index}
          onClick={() => actionProvider.handleSubOptionClick(option, "email")}
          className="bg-sky-400 rounded-md border border-gray-500 hover:bg-sky-500 w-full text-center px-5 py-2"
          >
          {option}
        </button>
      ))}
      </div>
    </div>
  );
};

export default MediaServicesWidget;

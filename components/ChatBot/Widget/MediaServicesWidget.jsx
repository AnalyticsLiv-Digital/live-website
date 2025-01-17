import React from "react";

const MediaServicesWidget = ({ setState, actionProvider, ...props }) => {
  // console.log("props in media service", props)
  const subOptions = [
    "Programmatic Media DV360",
    "Search Engine Marketing",
    "eCommerce Marketing",
    "Lead Generation",
    "Mobile App Marketing",
  ];

  return (
    <div className="max-2xl:pb-5">
      <p className="text-[10px] 2xl:text-sm font-medium">Select a sub-option:</p>
      <div className="flex flex-col justify-center items-center gap-1">
      {subOptions.map((option, index) => (
        <button
          key={index}
          onClick={() => actionProvider.handleSubOptionClick(option, "email")}
          className="bg-sky-400 text-gray-800 text-[10px] 2xl:text-xs rounded-md border border-gray-200 hover:bg-sky-500 w-full text-center px-2 py-0.5 2xl:py-1"
          >
          {option}
        </button>
      ))}
      </div>
    </div>
  );
};

export default MediaServicesWidget;

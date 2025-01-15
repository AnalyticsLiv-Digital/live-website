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
      {subOptions.map((option, index) => (
        <button
          key={index}
          onClick={() => actionProvider.handleSubOptionClick(option, "email")}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default MediaServicesWidget;

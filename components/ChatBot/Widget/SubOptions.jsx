import React from "react";

const SubOptions = ({ actionProvider, ...props }) => {
  console.log("props in Suboptions component ", props)
  const subOptionsMap = {
    "Media Services": [
      "Programmatic Media DV360",
      "Search Engine Marketing",
      "eCommerce Marketing",
      "Lead Generation",
      "Mobile App Marketing",
    ],
    "Analytics & Tagging Services": [
      "Web and App Measurement",
      "Server-Side Tracking",
      "Conversion Rate Optimization",
      "Reporting & Dashboarding",
      "Google Tag Manager Tagging",
    ],
    Solutions: [
      "GDPR Compliance",
      "Data Science Solution & Automation",
      "Customer Segmentation",
    ],
    "Training & Consultation": [
      "Schedule a One-Hour Consultation",
      "Training Details",
    ],
  };

  const subOptions = subOptionsMap[props?.option] || [];

  return (
    <div>
      {subOptions?.map((option, index) => (
        <button
          key={index}
          onClick={() => actionProvider.handleSubOptionClick(option, "email")}
          className="bg-sky-400 text-gray-800 text-[10px] 2xl:text-xs rounded-md border border-gray-200 hover:bg-sky-500 w-full text-center px-2 py-0.5 2xl:py-1"
          >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SubOptions;

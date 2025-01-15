import React from "react";

const SubOptions = ({ selectedService, ...props }) => {
  console.log("in suboptions -->>", props);
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

  const subOptions = subOptionsMap[selectedService] || [];

  return (
    <div>
      <p>Sub-options for {selectedService}:</p>
      {subOptions.map((option, index) => (
        <button key={index}>{option}</button>
      ))}
    </div>
  );
};

export default SubOptions;

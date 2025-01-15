import React from "react";

const Services = ({ setState, actionProvider }) => {
  const services = [
    { name: "Media Services", widgetName: "mediaServicesWidget" },
    {
      name: "Analytics & Tagging Services",
      widgetName: "analyticsServicesWidget",
    },
    { name: "Solutions", widgetName: "solutionsWidget" },
    { name: "Training & Consultation", widgetName: "trainingWidget" },
  ];

  return (
    <div>
      <p>Select a service:</p>
      {services.map((service, index) => (
        <button
          key={index}
          onClick={() =>
            actionProvider.handleOptionClick(service.name, service.widgetName)
          }
        >
          {service.name}
        </button>
      ))}
    </div>
  );
};

export default Services;

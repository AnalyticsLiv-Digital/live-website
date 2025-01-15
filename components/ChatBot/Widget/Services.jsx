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
      <div className="flex flex-col justify-center items-center gap-3">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() =>
              actionProvider.handleOptionClick(service.name, service.widgetName)
            }
            className="bg-sky-400 rounded-md border border-gray-500 hover:bg-sky-500 w-full text-center px-5 py-2"
          >
            {service.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Services;

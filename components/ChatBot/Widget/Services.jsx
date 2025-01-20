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
    <div className="max-2xl:pb-2 max-xl:pb-5">
      {/* <p className="text-[10px] 2xl:text-sm font-medium">Select a service:</p> */}
      <div className="flex flex-col justify-center items-center gap-1">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() =>
              actionProvider.handleOptionClick(service.name, service.widgetName)
            }
            className="bg-sky-400 text-gray-800 text-[10px] 2xl:text-xs rounded-md border border-gray-200 hover:bg-sky-500 w-full text-center px-2 py-0.5 2xl:py-1"
          >
            {service.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Services;

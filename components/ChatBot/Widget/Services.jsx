import React from "react";

const Services = ({ setState, actionProvider, ...props }) => {
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
    <div className="max-2xl:pb-2 max-xl:pb-5 pt-3">
      <div>
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() =>
              actionProvider.handleOptionClick(service.name, service.widgetName)
            }
            className={`text-white text-[10px] 2xl:text-xs rounded-md border border-gray-200 text-center px-2 2xl:px-2 py-0.5 2xl:py-1 
              ${props.state.option === service.name ? "bg-sky-500" : "bg-gray-500 hover:bg-sky-400"}`}
          >
            {service.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Services;

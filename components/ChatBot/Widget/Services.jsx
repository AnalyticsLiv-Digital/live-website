import React from "react";
import { services } from "../../../utils/chatConfig";

const Services = ({ actionProvider, state }) => {
  const handleClick = (serviceName) => {
    if (!state.option) {
      actionProvider.handleOptionClick(serviceName);
    }
  };

  // Don't render anything once a service is selected
  if (state.option) return null;

  return (
    <div className="max-2xl:pb-2 max-xl:pb-5 pt-3">
      <div className="flex justify-end flex-wrap ml-14">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => handleClick(service.name)}
            className="text-[#007AFF] text-xs rounded-[50px] text-center ml-[2px] mb-[4px] px-2 2xl:px-[15px] py-0.5 2xl:py-[5px] font-normal border border-[#007AFF] hover:bg-[#0263CD] hover:text-white"
          >
            {service.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Services;

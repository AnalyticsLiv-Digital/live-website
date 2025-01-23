import React from "react";
import { services } from "../../../utils/chatConfig";

const Services = ({ actionProvider, ...props }) => {
  
  return (
    <div className="max-2xl:pb-2 max-xl:pb-5 pt-3">
      <div>
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() =>
              actionProvider.handleOptionClick(service.name)
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

import React from "react";
import { subServices } from "../../../utils/chatConfig";

const SubOptions = ({ actionProvider, ...props }) => {
  // console.log("props in Suboptions component ", props.state)
  // console.log('awaitingInput in suboptionss', props.state.awaitingInput)
  const subOptions = subServices[props?.option] || [];

  return (
    <div className="max-2xl:pb-2 max-xl:pb-5">
      {subOptions?.map((option, index) => (
        <button
          key={index}
          onClick={() => actionProvider.handleSubOptionClick(option)}
          className={`text-white text-[10px] 2xl:text-xs rounded-md border border-gray-200 text-center px-2 2xl:px-2 py-0.5 2xl:py-1 
            ${props.state.subOption === option ? "bg-sky-500" : "bg-gray-500 hover:bg-sky-400"}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SubOptions;

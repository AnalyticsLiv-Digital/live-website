import { addUserMessage, createChatBotMessage } from "react-chatbot-kit";
import CoBotAvatar from "./CoBotAvatar";
import Services from "./Widget/Services";
import SubOptions from "./Widget/SubOptions";
import UserAvatar from "./UserAvatar";

const config = {
  lang: "no",
  botName: "AnalyticsBot",
  initialMessages: [
    createChatBotMessage("Welcome to AnalyticsLiv!", {
      withAvatar: true,
      delay: 500,
    }),
    createChatBotMessage(`We're thrilled to have you here!`, {
      withAvatar: false,
      delay: 1500,
    }),
    createChatBotMessage(
      `At AnalyticsLiv, we specialize in data-driven marketing solutions, including programmatic media buying, web and app measurement, and custom data science tools.`,
      {
        withAvatar: false,
        delay: 2500,
      }
    ),
    createChatBotMessage("How can we assist you today?", {
      delay: 3500,
      withAvatar: true,
      widget: "services",
    }),
  ],
  state: {
    option: "",
    subOption: "",
    email: "",
    phone: "",
    awaitingInput: "option",
    requirement: ""
  },
  customComponents: {
    header: (handleToggleBot) => (
      <div className="flex justify-between items-center py-1 z-30 bg-header-linear border-b border-b-[#c0baba]">
        <div className="sticky top-0 w-[90%] p-2 pl-3 sm:pl-5 rounded-[5px] text-[10px] sm:text-xs 2xl:text-sm text-white text-center font-bold flex items-center gap-2 sm:gap-3">
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/public/AnalyticsLiv%20Logo%202%201.png" alt="analyticsLiv" className="w-7 bg-white rounded-full p-1" />
          Let’s talk growth! We're here to help!
        </div>
        <p className={`transition-all duration-300 transform cursor-pointer text-[#AAAAAA] hover:text-[#969696]
              rounded-full text-[16px] 2xl:text-[20px] pr-3
            `}
          onClick={handleToggleBot}
        >
          ✖
        </p>
      </div>
    ),
    botAvatar: (props) => <CoBotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "services",
      widgetFunc: (props) => (
        <Services {...props} />
      )
    },
    {
      widgetName: "subOptions",
      widgetFunc: (props) => (
        <SubOptions {...props} />
      ),
      mapStateToProps: ["option"],
    }
  ],
};

export default config;
import { addUserMessage, createChatBotMessage } from "react-chatbot-kit";
import CoBotAvatar from "./CoBotAvatar";
import Services from "./Widget/Services";
import SubOptions from "./Widget/SubOptions";
import UserAvatar from "./UserAvatar";

const config = {
  lang: "no",
  botName: "AnalyticsBot",
  // customStyles: {
  //   botMessageBox: {
  //     backgroundColor: "#ced6de",
  //     // color: "black",
  //     text: "red",
  //     marginBottom: "10px", // Add space between each message
  //     borderRadius: "8px",
  //     fontColour: "red",
  //   },
  //   userChatMessage: {
  //     backgroundColor: "#3c005d",
  //   },
  //   chatButton: {
  //     // backgroundColor: "red",
  //     // color: "white",
  //   },
  // },
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
    option:"",
    subOption: "",
    email : "",
    phone : "",
    awaitingInput: "option",
    requirement : ""
  },
  customComponents: {
    header: () => (
      <div className="sticky top-0 z-30 p-2 rounded-lg bg-[#3c005d] text-white text-center font-bold shadow-md">
        🤖 You're with AnalyticsLiv Bot
      </div>
    ),
    botAvatar: (props) => <CoBotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
    // botMessageBox: (props) => (
    //   <div className="flex items-center gap-3 mb-5">
    //     <div className="flex-shrink-0">
    //       <CoBotAvatar />
    //     </div>
    //     <div className="bg-blue-300 text-white rounded-lg p-4 max-w-[250px]">
    //       {props.children}
    //     </div>
    //   </div>
    // ),
    // userMessageBox: (props) => (
    //   <div className="flex items-center gap-3 justify-end mb-5">
    //     <div className="bg-blue-600 text-white rounded-lg p-4 max-w-[250px]">
    //       {props.children}
    //     </div>
    //     <div className="flex-shrink-0">
    //       <UserAvatar />
    //     </div>
    //   </div>
    // ),
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
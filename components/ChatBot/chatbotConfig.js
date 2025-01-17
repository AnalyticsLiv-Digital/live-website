import { addUserMessage, createChatBotMessage } from "react-chatbot-kit";
import CoBotAvatar from "./CoBotAvatar";
import Services from "./Widget/Services";
import MediaServicesWidget from "./Widget/MediaServicesWidget";
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
      // customStyles: {
      //   text: "white",
      //   // backgroundColor: "#04668a",
      //   padding: "10px",
      //   color: "white",
      //   marginBottom: "10px",
      //   borderRadius: "8px",
      // },
    }),
    createChatBotMessage(`We're thrilled to have you here!`, {
      withAvatar: false,
      delay: 1000,
      // customStyles: {
      //   text: "white",
      //   // backgroundColor: "red",
      //   color: "white",
      //   padding: "10px",
      //   marginBottom: "10px",
      //   borderRadius: "8px",
      // },
    }),
    createChatBotMessage(
      `At AnalyticsLiv, we specialize in data-driven marketing solutions, including programmatic media buying, web and app measurement, and custom data science tools.`,
      {
        withAvatar: false,
        delay: 2000,
        // customStyles: {
        //   text: "white",
        //   // backgroundColor: "#04668a",
        //   padding: "10px",
        //   color: "white",
        //   marginBottom: "10px",
        //   borderRadius: "8px",
        // },
      }
    ),
    createChatBotMessage("How can we assist you today?", {
      delay: 3000,
      withAvatar: true,
      widget: "services",
      // customStyles: {
      //   text: "white",
      //   backgroundColor: "#04668a",
      //   padding: "10px",
      //   color: "white",
      //   marginBottom: "10px",
      //   borderRadius: "8px",
      // },
    }),
  ],
  state: {
    option:"",
    subOption: "",
    email : "",
    mobileNumber : ""
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
        // <div className="flex items-center gap-3 mb-5">
        //   <div className="flex-shrink-0">
        //     <CoBotAvatar />
        //   </div>
        //   <div className="bg-blue-300 text-white rounded-lg p-4 max-w-[250px]">
        //     <Services {...props} />
        //   </div>
        // </div>
      ),
      mapStateToProps: ["option"],
    },
    {
      widgetName: "mediaServicesWidget",
      widgetFunc: (props) => (
        <MediaServicesWidget {...props} />
        // <div className="flex items-center gap-3 mb-5">
        //   <div className="flex-shrink-0">
        //     <CoBotAvatar />
        //   </div>
        //   <div className="bg-blue-300 text-white rounded-lg p-4 max-w-[250px]">
        //     <MediaServicesWidget {...props} />
        //   </div>
        // </div>
      ),
      mapStateToProps: ["option"],
    },
    {
      widgetName: "subOptions",
      widgetFunc: (props) => (
        <SubOptions {...props} />
        // <div className="flex items-center gap-3 mb-5">
        //   <div className="flex-shrink-0">
        //     <CoBotAvatar />
        //   </div>
        //   <div className="bg-blue-300 text-white rounded-lg p-4 max-w-[250px]">
        //     <SubOptions {...props} />
        //   </div>
        // </div>
      ),
      mapStateToProps: ["option"],
    },
    // {
    //   widgetName: "analyticsServicesWidget",
    //   widgetFunc: (props) => <AnalyticsServicesWidget {...props} />,
    // },
    // {
    //   widgetName: "solutions",
    //   widgetFunc: (props) => <LocalStatistics />,
    // },
    // {
    //   widgetName: "training",
    //   widgetFunc: (props) => <Contact />,
    // },
  ],
};

export default config;

// import { createChatBotMessage } from "react-chatbot-kit";
// import CoBotAvatar from "./CoBotAvatar";
// import Services from "./Widget/Services";
// import MediaServicesWidget from "./Widget/MediaServicesWidget";
// import SubOptions from "./Widget/SubOptions";

// const config = {
//   lang: "no",
//   botName: "AnalyticsBot",
//   customStyles: {
//     botMessageBox: {
//       backgroundColor: "#04668a",
//     },
//     chatButton: {
//       backgroundColor: "#0f5faf",
//     },
//   },
//   initialMessages: [
//     createChatBotMessage("Welcome to AnalyticsLiv!", {
//       withAvatar: true,
//       // delay: 2000,
//     }),
//     createChatBotMessage(`We're thrilled to have you here!`, {
//       withAvatar: false,
//       delay: 1000,
//     }),
//     createChatBotMessage(
//       `At AnalyticsLiv, we specialize in data-driven marketing solutions, including programmatic media buying, web and app measurement, and custom data science tools.`,
//       {
//         withAvatar: false,
//         delay: 2000,
//       }
//     ),
//     createChatBotMessage("How can we assist you today?", {
//       delay: 3000,
//       withAvatar: true,
//       widget: "services",
//     }),
//   ],
//   state: {},
//   customComponents: {
//     header: () => (
//       <div
//         style={{
//           padding: "5px",
//           borderRadius: "3px",
//           backgroundColor: "#38bdf8",
//           color: "white",
//           width: "100%",
//         }}
//       >
//         You're with Analyticsliv Bot
//       </div>
//     ),
//     botAvatar: (props) => <CoBotAvatar {...props} />,
//     // userAvatar: (props) => <CoBotAvatar {...props} />,
//   },
//   widgets: [
//     {
//       widgetName: "services",
//       widgetFunc: (props) => <Services {...props} />,
//       // mapStateToProps: ["messages"],
//     },
//     {
//       widgetName: "mediaServicesWidget",
//       widgetFunc: (props) => <MediaServicesWidget {...props} />,
//     },
//     {
//       widgetName: "subOptions",
//       widgetFunc: (props) => <SubOptions {...props} />,
//     },
//     // {
//     //   widgetName: "analyticsServicesWidget",
//     //   widgetFunc: (props) => <AnalyticsServicesWidget {...props} />,
//     // },
//     // {
//     //   widgetName: "solutions",
//     //   widgetFunc: (props) => <LocalStatistics />,
//     // },
//     // {
//     //   widgetName: "training",
//     //   widgetFunc: (props) => <Contact />,
//     // },
//   ],
// };

// export default config;

import { createChatBotMessage } from "react-chatbot-kit";
import CoBotAvatar from "./CoBotAvatar";
import Services from "./Widget/Services";
import MediaServicesWidget from "./Widget/MediaServicesWidget";
import SubOptions from "./Widget/SubOptions";

const config = {
  lang: "no",
  botName: "AnalyticsBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a",
    },
    chatButton: {
      backgroundColor: "#0f5faf",
    },
  },
  initialMessages: [
    createChatBotMessage("Welcome to AnalyticsLiv!", {
      withAvatar: true,
      // delay: 2000,
    }),
    createChatBotMessage(`We're thrilled to have you here!`, {
      withAvatar: false,
      delay: 1000,
    }),
    createChatBotMessage(
      `At AnalyticsLiv, we specialize in data-driven marketing solutions, including programmatic media buying, web and app measurement, and custom data science tools.`,
      {
        withAvatar: false,
        delay: 2000,
      }
    ),
    createChatBotMessage("How can we assist you today?", {
      delay: 3000,
      withAvatar: true,
      widget: "services",
    }),
  ],
  state: {},
  customComponents: {
    header: () => (
      <div
        style={{
          padding: "5px",
          borderRadius: "3px",
          backgroundColor: "#0f5faf",
        }}
      >
        You're with Analyticsliv Bot
      </div>
    ),
    botAvatar: (props) => <CoBotAvatar {...props} />,
    // userAvatar: (props) => <CoBotAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "services",
      widgetFunc: (props) => <Services {...props} />,
      // mapStateToProps: ["messages"],
    },
    {
      widgetName: "mediaServicesWidget",
      widgetFunc: (props) => <MediaServicesWidget {...props} />,
    },
    {
      widgetName: "subOptions",
      widgetFunc: (props) => <SubOptions {...props} />,
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

import { services, subServices } from "../../utils/chatConfig";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.trim().toLowerCase();

    if (!message || message === "") {
      this.actionProvider.handleUnknown();
      console.log("Empty input ignored.");
      return;
    }

    const { awaitingInput } = this.state;

    // Handle specific awaiting input cases
    if (awaitingInput === "email") {
      this.actionProvider.handleEmailCollection(message);
    } else if (awaitingInput === "phone") {
      this.actionProvider.handlePhoneCollection(message);
    } else if (awaitingInput === "otherService") {
      this.actionProvider.handleOtherService(message);
    }
    else if (awaitingInput === "option") {
      const matchedService = services?.find((service) => {
        if (service.name.toLowerCase().includes(message)) {
          return true;
        }
      })
      if (matchedService) {
        this.actionProvider.handleOptionClick(matchedService.name);
      } else {
        this.actionProvider.handleUnknown();
      }
    }
    else if (awaitingInput === "subOption") {
      const matchedSubOption = subServices?.[this.state.option]?.find((subOption) => {
        if (subOption.toLowerCase().includes(message)) {
          return true;
        }
      })

      if (matchedSubOption) {
        this.actionProvider.handleSubOptionClick(matchedSubOption)
      }
      else {
        this.actionProvider.handleUnknown();
      }
    }
    else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;

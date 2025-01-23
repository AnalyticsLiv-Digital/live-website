class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.trim().toLowerCase();
    console.log("message", message)

    if (!message || message === "") {
      console.log("Empty input ignored.");
      return;
    }

    const { awaitingInput } = this.state;
    console.log('awaitingInput',awaitingInput)

    // Handle specific awaiting input cases
    if (awaitingInput === "email") {
      this.actionProvider.handleEmailCollection(message);
    } else if (awaitingInput === "phone") {
      this.actionProvider.handlePhoneCollection(message);
    } else if (awaitingInput === "otherService") {
      this.actionProvider.handleOtherService(message);
    }
    else if (awaitingInput === "option") {

    }
    else if (awaitingInput === "subOption") {

    }
    else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;

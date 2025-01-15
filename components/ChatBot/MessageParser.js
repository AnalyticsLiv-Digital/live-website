class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      message = message.toLowerCase();
      const { awaitingInput } = this.state;
      console.log("awaitingInput", awaitingInput, message);
  
      if (awaitingInput === "email") {
        this.actionProvider.handleEmailCollection(message);
      } else if (awaitingInput === "phone") {
        this.actionProvider.handlePhoneCollection(message);
      }
      // else {
      //   this.actionProvider.handleUnknown(); // Handle other generic user inputs
      // }
  
      // return this.actionProvider.handleOptions({ withAvatar: true });
    }
  }
  
  export default MessageParser;
  
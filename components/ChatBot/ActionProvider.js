// import SubOptions from "./widgets/SubOptions";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome, and stay safe!");

    this.addMessageToState(message);
  };

  addMessageToState = (message, awaitingInput) => {
    this.setState((state) => ({
      ...state,
      awaitingInput: awaitingInput,
      messages: [...state.messages, message],
    }));
  };

  handleOptionClick = (service, widgetName) => {
    const message = this.createChatBotMessage(`${service}`, {
      widget: widgetName,
      loading: true,
      terminateLoading: true,
      // withAvatar: true,
      // service,
    });

    this.addMessageToState(message);
  };

  handleSubOptionClick = (subOption, widgetName) => {
    const message = this.createChatBotMessage(`${subOption}`, {
      // widget: widgetName,
      loading: true,
      terminateLoading: true,
      // withAvatar: true,
      // service,
    });

    this.addMessageToState(message);
    this.handleAskForEmail();
  };

  handleAskForEmail() {
    const message = this.createChatBotMessage(
      "Could you please provide your email?",
      {
        // widget: widgetName,
        loading: true,
        terminateLoading: true,
        delay: 1000,
        // withAvatar: true,
        // service,
      }
    );
    this.addMessageToState(message, "email");
    // this.awaitingInput = "email";
  }

  handleAskForPhone() {
    const message = this.createChatBotMessage(
      "Could you please provide your phone number?",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
        // service,
      }
    );
    this.addMessageToState(message, "phone");
    // this.awaitingInput = "phone";
  }

  handleEmailCollection(message) {
    const email = message;

    if (this.validateEmail(email)) {
      this.setState((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          this.createChatBotMessage(
            `Thank you! We received your email: ${email}`
          ),
        ],
      }));

      // Optional: Send email to the backend
      this.handleAskForPhone();
      console.log("Collected email:", email); // Replace with API call if needed
    } else {
      this.setState((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          this.createChatBotMessage(
            "That doesn't seem like a valid email. Please try again."
          ),
        ],
      }));
      this.handleAskForEmail();
    }
  }

  validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  handlePhoneCollection(message) {
    const phone = message;

    if (this.validatePhone(phone)) {
      this.setState((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          this.createChatBotMessage(
            `Thank you! We received your phone number: ${phone}`
          ),
          this.createChatBotMessage(
            "You're all set! Let us know if you need further assistance."
          ),
        ],
      }));

      // Optional: Send phone to the backend
      console.log("Collected phone number:", phone); // Replace with API call if needed
      this.awaitingInput = null; // Reset the input expectation
    } else {
      this.setState((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          this.createChatBotMessage(
            "That doesn't seem like a valid phone number. Please try again."
          ),
        ],
      }));
    }
  }

  validatePhone(phone) {
    const regex = /^[0-9]{10}$/; // Example: Only 10-digit numbers
    return regex.test(phone);
  }
}

export default ActionProvider;

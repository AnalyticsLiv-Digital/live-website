class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome, and stay safe!", {
      withAvatar: true,
    });

    this.addMessageToState(message);
  };


  addMessageToState = (message, statValueWithKey) => {
    this.setState((state) => ({
      ...state,
      ...statValueWithKey,
      messages: [...state.messages, message],
    }));
  };

  handleOptionClick = (service, widgetName) => {
    const message = this.createChatBotMessage(`${service}`, {
      widget: "subOptions",
      loading: true,
      terminateLoading: true,
    });

    this.addMessageToState(message, { "option": service });
  };

  handleSubOptionClick = (subOption, widgetName) => {
    const message = this.createChatBotMessage(`${subOption}`, {
      loading: true,
      terminateLoading: true,
    });

    this.addMessageToState(message, { "subOption": subOption });
    this.handleAskForEmail();
  };

  handleAskForEmail() {
    const message = this.createChatBotMessage("Could you please provide your email?",{
        loading: true,
        terminateLoading: true,
        delay: 1000,
        withAvatar: true,
      }
    );
    this.addMessageToState(message, {"awaitingInput":"email"});
  }

  handleAskForPhone() {
    const message = this.createChatBotMessage("Could you please provide your phone number?", {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
      delay: 1000,
    }
    );
    this.addMessageToState(message, { "awaitingInput": "phone" });
  }

  handleEmailCollection(message) {
    const email = message;

    if (this.validateEmail(email)) {
      const message = this.createChatBotMessage(`Thank you! We received your email: ${email}`, {
        withAvatar: true,
      });

      this.addMessageToState(message, { "email": email });
      this.handleAskForPhone();
    } else {
      const message = this.createChatBotMessage("That doesn't seem like a valid email, can you please provide a valid email.", {
        withAvatar: true,
      });

      this.addMessageToState(message);

      // this.handleAskForEmail();
    }
  }

  validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  handlePhoneCollection(message) {
    const phone = message;

    if (this.validatePhone(phone)) {
      const message = this.createChatBotMessage(`Thank you! We received your phone number: ${phone}`, {
        withAvatar: true,
      });

      const thanksMessge = this.createChatBotMessage("You're all set! Let us know if you need further assistance.", {
        delay: 1000,
        withAvatar: true,
      });

      this.addMessageToState(message, { "phone": phone, "awaitingInput": null });
      this.addMessageToState(thanksMessge);
    } else {
      const message = this.createChatBotMessage("That doesn't seem like a valid phone number. Can you please provide a valid number.", {
        withAvatar: true,
      });

      this.addMessageToState(message);
    }
  }

  validatePhone(phone) {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  }
}

export default ActionProvider;
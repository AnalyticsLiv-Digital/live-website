class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.state = stateRef;
  }

  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome, and stay safe!", {
      withAvatar: true,
    });

    this.addMessageToState(message);
  };

  handleUnknown = () => {
    const responses = [
      "I'm sorry, I didn't understand that. Could you rephrase?",
      "Hmm, I didn't quite catch that. Could you provide more details?",
      "I'm not sure how to respond to that. Can you try again?",
      "I might need some clarification on that. What do you mean?",
      "Let me help you. Please type your response clearly.",
    ];

    // Choose a random response from the list
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];

      const message = this.createChatBotMessage(`${randomResponse}`, {
        loading: true,
        terminateLoading: true,
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

  handleOptionClick = (service) => {
    if (service === "Others") {
      const message = this.createChatBotMessage(`Please type your requirement in short.`, {
        loading: true,
        terminateLoading: true,
      });

      this.addMessageToState(message, { "option": service, awaitingInput: "otherService" });
    }
    else {
      const message = this.createChatBotMessage(`${service}`, {
        widget: "subOptions",
        loading: true,
        terminateLoading: true,
        type: "user",
      });

      this.addMessageToState(message, { "option": service, awaitingInput: "subOption" });
    }
  };

  handleSubOptionClick = (subOption, widgetName) => {
    const message = this.createChatBotMessage(`${subOption}`, {
      loading: true,
      terminateLoading: true,
      type: "user",
    });

    this.addMessageToState(message, { "subOption": subOption });
    this.handleAskForEmail();
  };

  handleOtherService(requirement) {
    const message = this.createChatBotMessage(`${requirement}`, {
      loading: true,
      terminateLoading: true,
      type: "user",
    });

    this.addMessageToState({ requirement: requirement });
    this.handleAskForEmail();
  }


  handleAskForEmail() {
    const message = this.createChatBotMessage("Could you please provide your email?", {
      loading: true,
      terminateLoading: true,
      delay: 1000,
      withAvatar: true,
    }
    );
    this.addMessageToState(message, { "awaitingInput": "email" });
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
        delay: 1000,
      });

      this.addMessageToState(message);
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
        delay: 1000,
      });

      const thanksMessge = this.createChatBotMessage("You're all set! Let us know if you need further assistance.", {
        delay: 2000,
        withAvatar: true,
      });

      this.addMessageToState(message, { "phone": phone, "awaitingInput": null });
      this.callApiWithState(phone);
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


  callApiWithState = async (phone) => {
    const { option, subOption, email, requirement } = this.state;
    const stateData = { option, subOption, email, phone: phone, requirement:requirement };

    try {
      const apiEndpoint = "/api/chatBotresponse";

      // Make a POST request with the state data
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stateData),
      });

      // Handle the response
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const responseData = await response.json();
    } catch (error) {
      console.log("Errror when calling the api ...")
    }
  };
}

export default ActionProvider;
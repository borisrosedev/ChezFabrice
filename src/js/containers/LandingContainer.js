import MessageService from "../services/MessageService.js";

class LandingContainer {
  constructor() {
    const messageService = new MessageService();
    messageService.message = {
      content: "Accueil",
      type: "info",
    };
  }

  onClick() {}
}

export default LandingContainer;

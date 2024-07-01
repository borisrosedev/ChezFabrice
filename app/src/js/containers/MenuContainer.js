import MessageService from "../services/MessageService.js";

class MenuContainer {
  constructor() {
    const messageService = new MessageService();
    messageService.message = {
      content: "Le menu",
      type: "info",
    };
  }
}

export default MenuContainer;

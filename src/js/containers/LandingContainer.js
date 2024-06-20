import MessageService from "../services/MessageService.js";

class LandingContainer {
  constructor() {
    const messageService = new MessageService();
    messageService.message = {
      content: "Accueil",
      type: "info",
    };

    const landingMenuButton = document.getElementById("landing-menu-button");
    landingMenuButton.onclick = (e) => this.onClick();
  }

  onClick() {
    window.location.hash = "#menu";
  }
}

export default LandingContainer;

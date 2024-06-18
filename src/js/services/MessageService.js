class MessageService {
  #message = "";

  constructor() {}

  get message() {
    return this.#message;
  }

  set message(val) {
    this.#message = val;

    // Find the message element in the DOM
    const messageElement = document.getElementById("message");

    messageElement.innerHTML = `<small class='notification ${val.type}'> ${val.content} </small>`;
  }
}

export default MessageService;

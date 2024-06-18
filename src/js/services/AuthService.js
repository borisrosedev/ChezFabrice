import CustomLocalStorageService from "./CustomLocalStorageService.js";
import LocalUsersService from "./LocalUsersService.js";
import MessageService from "./MessageService.js";

class AuthService {
  static async login({ email, password }) {
    const users = await LocalUsersService.getUsers();
    console.log("users", users);
    if (users.length) {
      const user = users.find((user) => user.email === email);
      if (user) {
        if (user.password === password) {
          CustomLocalStorageService.setSpecificItem("token", {
            isLoggedIn: true,
            email: user.email,
          });

          const navigatorToken =
            CustomLocalStorageService.getSpecificItem("token");

          if (navigatorToken.email == email) {
            new MessageService().message = {
              type: "positive",
              content: "Vous êtes connecté(e)",
            };
          }
        } else {
          new MessageService().message = {
            type: "negative",
            content: "Informations incorrectes",
          };
        }
      } else {
        new MessageService().message = {
          type: "negative",
          content: "Informations incorrectes",
        };
      }
    }
  }

  static isLoggedIn() {
    const token = CustomLocalStorageService.getSpecificItem("token");
    return token.isLoggedIn;
  }

  static logout(token) {
    CustomLocalStorageService.removeSpecificItem(token);
  }
}

export default AuthService;

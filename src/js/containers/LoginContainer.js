// le plus important la logique métier de la page login

import AuthService from "../services/AuthService.js";

class LoginContainer {
  // Je pars du principe qu'au moment où j'utilise cette classe l'interface login est déjà associé au html
  // Le constructeur est une fonction très particulière
  // Elle permet à une classe de créer des instances d'elle-même.
  // Elle permet à une classe de transmettre son prototype à d'autres objets qui deviennent ainsi ses instances.
  // Une classe n'a pas obligatoirement un constructeur
  constructor() {
    const form = document.getElementById("login-form");
    const self = this;

    form.onsubmit = function (e) {
      self.onSubmit(e);
    };
  }

  onSubmit(e) {
    e.preventDefault();
    // nous devons arrêter le rechargement de la page
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const emailValue = email.value;
    const passwordValue = password.value;
    if (!emailValue) {
      emailError.innerText = "Veuillez entrer un identifiant";
      return;
    }

    if (!passwordValue) {
      passwordError.innerText = "Veuillez entrer le mot de passe";
      return;
    }

    passwordError.innerText = emailError.innerText = "";
    console.log(emailValue, passwordValue);
    AuthService.login({ email: emailValue, password: passwordValue }).then(
      (result) => {
        if (result) {
          setTimeout(() => {
            window.location.hash = "";
          }, 2000);
        }
      },
    );
  }
}

export default LoginContainer;

// le plus important la logique métier de la page login

class RegisterContainer {
    // Je pars du principe qu'au moment où j'utilise cette classe l'interface login est déjà associé au html
    // Le constructeur est une fonction très particulière
    // Elle permet à une classe de créer des instances d'elle-même.
    // Elle permet à une classe de transmettre son prototype à d'autres objets qui deviennent ainsi ses instances.
    // Une classe n'a pas obligatoirement un constructeur
    constructor() {
      const form = document.getElementById("register-form");
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
      const confirmedPassword = document.getElementById("confirmed-password");

      const emailError = document.getElementById("email-error");
      const passwordError = document.getElementById("password-error");
      const confirmedPasswordError = document.getElementById("confirmed-password-error");


      const emailValue = email.value;
      const passwordValue = password.value;
      const confirmedPasswordValue = confirmedPassword.value;

      if (!emailValue) {
        emailError.innerText = "Veuillez entrer un identifiant";
        return;
      }
  
      if (!passwordValue) {
        emailError.innerText  = ""
        passwordError.innerText = "Veuillez entrer le mot de passe";
        return;
      }

      if(!confirmedPasswordValue){
        emailError.innerText  = passwordError.innerText = ""
        confirmedPasswordError.innerText = "Veuillez confirmer le mot de passe";
        return;
      }
  
      passwordError.innerText = emailError.innerText =  confirmedPasswordError.innerText = "";
      console.log(emailValue, passwordValue);
      

    }
  }
  
  export default RegisterContainer;
  
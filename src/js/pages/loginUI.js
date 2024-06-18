import form from "../components/form.js";
import CustomLocalStorageService from "../services/CustomLocalStorageService.js";

const loginUI = function () {
  const token = CustomLocalStorageService.getSpecificItem("token");

  console.log(token);
  if (token && token.isLoggedIn) {
    setTimeout(() => {
      window.location.hash = "";
    });
  }

  const data = {
    formId: "login-form",
    inputs: [
      {
        id: "email",
        type: "email",
        placeholder: "Entrez votre email",
      },
      {
        id: "password",
        type: "password",
        placeholder: "Entrez votre mot de passe",
      },
    ],
    buttons: [
      {
        type: "submit",
        id: "submit",
        content: "Valider",
      },
      {
        type: "reset",
        id: "reset",
        content: "Réinitialiser",
      },
    ],
  };

  return `

            <main class="main login__main">
                <section>
                  ${form(data)}
                </section>
                <section>
                  <small>Pas encore inscrit(e) ? Inscrivez-vous <a href="#register">ici</a> </small>
                </section>
             
            </main>

        
        `;
};

export default loginUI;

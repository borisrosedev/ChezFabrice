import form from "../components/form.js";

const loginUI = function () {
  const data = {
    formId: "login-form",
    inputs: {
      email: {
        id: "email",
        type: "email",
        placeholder: "Entrez votre email",
      },
      password: {
        id: "password",
        type: "password",
        placeholder: "Entrez votre mot de passe",
      },
    },
    buttons: {
      reset: {
        type: "reset",
        id: "reset",
        content: "Réinitialiser",
      },
      submit: {
        type: "submit",
        id: "submit",
        content: "Valider",
      },
    },
  };

  return `

            <main class="main login__main">
                <section>
                  ${form(data)}
                </section>
            </main>

        
        `;
};

export default loginUI;

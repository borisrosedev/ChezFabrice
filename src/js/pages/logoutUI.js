import button from "../components/button.js";
import message from "../components/message.js";

const logoutUI = function () {

  setTimeout(() => {
    window.location.hash=""
  }, 3000)

  const messageData = {
    card: {
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/08/03/09/30/stunning-8166666_1280.jpg",
      imageAlt: "",
      content: "Au revoir et à bientôt",
    },

    content: "Redirection vers la page d'accueil ...",
  };

  return `
            <main class="main logout__main">
                <section>
                    ${message(messageData)}
                </section>    
            </main>
        
        `;
};

export default logoutUI;

import button from "../components/button.js";
import message from "../components/message.js";

const landingUI = function () {
  const messageData = {
    card: {
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/08/03/09/30/stunning-8166666_1280.jpg",
      imageAlt: "",
      content: "Bienvenue Chez Fabrice",
    },

    content: "Tout est né d'une envie familiale. Fabrice, mon petit frère, a toujours été timide et ne sait pas se mettre en valeur alors avec Léo, mon autre frère, nous avons fait en sorte que cet endroit existe pour vous le présenter à travers un restaurant gastronomique et cette application qui propose des livraisons à domicile et des réservations",
  };

  return `
            <main class="main landing__main">
                <section>
                    ${message(messageData)}
                </section>
                <section>
                    ${button("Nos plats", "landing-menu-button", "button")}
                </section>
            
            </main>
        
        `;
};

export default landingUI;

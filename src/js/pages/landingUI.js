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

    content: "N'hésitez pas à découvrir nos plats",
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

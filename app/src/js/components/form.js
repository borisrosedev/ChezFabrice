import button from "./button.js";
import inputArticle from "./input-article.js";
import input from "./input.js";

const form = function (data) {
  // la méthode map permet de prendre chaque  donnée d'un tableau et d'effectuer un traitement sur cette donnée
  // la fonction de rappel qui se trouve à l'intérieur des parenthèses de la fonction map prend comme paramètre notamment l'élément (et si vous voulez l'ajouer l'index)

  return `
        
            <form  class="form" id="${data.formId}"> 
                <section>
                    ${data.inputs.map((el) => inputArticle(el.id, input(el.id, el.placeholder, el.type))).join("")}
                </section>
                <section>
                    ${data.buttons.map((el) => button(el.content, el.id, el.type)).join("")}
                </section>
            
            </form>

    `;
};

export default form;

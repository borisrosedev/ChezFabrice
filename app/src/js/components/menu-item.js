import figure from "./figure.js";

const menuItem = function (data) {
  return `
            <li class="list-item menu-item">
                <header>
                    ${data.name}
                </header>
                <section>
                    ${figure(data.urls[0], data.name)}
                </section>
                ${data.price ? ` <footer>
                <span aria-label="prix du produit">${data.price} €</span>
                </footer> `: ""}
               
            </li>
        
        `;
};

export default menuItem;

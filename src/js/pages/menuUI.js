import menuItemsList from "../components/menu-items-list.js";
import ProductsService from "../services/ProductsService.js";
import paragraph from "../components/paragraph.js";

const menuUI = async function () {
  const menuProducts = await ProductsService.getProducts();

  return `
            <main class="main menu__main">


                <section>
                  ${menuProducts && menuProducts.length ? menuItemsList(menuProducts) : paragraph("Aucun produit pour le moment")}
                </section>
            
            
            </main>
        
        `;
};

export default menuUI;

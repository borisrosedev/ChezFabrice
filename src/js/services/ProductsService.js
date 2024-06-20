import ApiDataSource from "../dataSources/remote/ApiDataSource.js";
import MessageService from "./MessageService.js";

class ProductsService {
  static async getProducts() {
    const products = await ApiDataSource.get(
      "https://chezbobo.onrender.com/products",
    );
    if (products.length) {
      new MessageService().message = {
        type: "positive",
        content: "Récupérer des produits depuis la base de données distante",
      };
      return products;
    } else {
      new MessageService().message = {
        type: "negative",
        content:
          "Erreur lors de la récupération des produits dans la base de données",
      };
    }
  }
}

export default ProductsService;

import { products } from "./database.js";
import type { Product } from "./types.js";

function addProduct(productData: Product) {
	products.push(productData);
}

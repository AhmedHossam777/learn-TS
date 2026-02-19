import { products } from "./database";
import type { Product } from "./types";

function addProduct(productData: Product) {
	products.push(productData);
}

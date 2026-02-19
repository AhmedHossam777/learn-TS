import { Category, type Product } from "./types.js";

export const products: Product[] = [
	{ id: 1, name: "Bread", price: 1.5, category: Category.Food, inStock: true },
	{ id: 2, name: "Cola", price: 0.99, category: Category.Drink, inStock: true },
	{ id: 3, name: "Chips", price: 2.5, category: Category.Snack, inStock: true },
	{ id: 4, name: "Cheese", price: 3.0, category: Category.Food, inStock: true },
	{ id: 5, name: "Water", price: 0.5, category: Category.Drink, inStock: true },
	{
		id: 6,
		name: "Chocolate",
		price: 1.75,
		category: Category.Snack,
		inStock: true,
	},
	{
		id: 7,
		name: "Dish Soap",
		price: 2.99,
		category: Category.Other,
		inStock: true,
	},
	{
		id: 8,
		name: "Paper Towels",
		price: 3.49,
		category: Category.Other,
		inStock: false,
	},
	{
		id: 9,
		name: "Orange Juice",
		price: 2.25,
		category: Category.Drink,
		inStock: true,
	},
	{
		id: 10,
		name: "Batteries",
		price: 4.99,
		category: Category.Other,
		inStock: false,
	},
];

//? CRUD : create, read, update, delete

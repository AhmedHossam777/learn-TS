export enum Category {
	Food = "Foood",
	Drink = "Drink",
	Snack = "Snack",
	Other = "Other",
}

export interface Product {
	id: number;
	name: string;
	price: number;
	category: Category;
	inStock: boolean;
}

export interface CartItem {
	quantity: number;
	product: Product;
	discount: number;
}

// type alaise
export type PaymentMethod = "cash" | "credit" | "wallet";

export type OrderStatus = "pending" | "processing" | "done" | "canceld";

export interface Reciept {
	items: CartItem[];
	total: number;
	payment: PaymentMethod;
	status: OrderStatus;
	data?: string;
}

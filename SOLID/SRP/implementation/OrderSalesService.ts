export interface Order {
  id: number;
  title: string;
  price: number;
  count: number; // > 500 -> 10%
}

export class OrderSalesService {
  async calculateTotal(order: Order): Promise<number> {
    let total: number;
    if (order.count >= 500) {
      total = order.count * order.price - order.count * order.price * 0.1;
    } else {
      total = order.count * order.price;
    }

    return total;
  }
}

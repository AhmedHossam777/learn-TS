import { OrderSalesService } from "./OrderSalesService";
import type { Order } from "./IOrder";
import { OrderRepository } from "./OrderRepository";
import { OrderNotificationService } from "./OrderNotification";

const orderRepo = new OrderRepository();
const orderSales = new OrderSalesService();
const orderNotificatoin = new OrderNotificationService();

// FACAD

class OrderService {
  async createOrder() {
    const order: Order = {
      id: 1,
      price: 20,
      count: 1,
      title: "order1",
    };
    // save to DB
    const createdorder = await orderRepo.saveToDB(order);
    // calculate total
    const total = await orderSales.calculateTotal(createdorder);
    // send email
    await orderNotificatoin.sendEmail(createdorder, total);
  }
}

interface Order {
  id: number;
  title: string;
  price: number;
  count: number;
}
export class OrderNotificationService {
  async sendEmail(order: Order, total: number) {
    setTimeout(() => {
      console.log(
        `order with id :${order.id} is bieng prepared and the total is: ${total}`,
      );
    }, 500);
  }

  // send Sms
  async sendSms() {
    // sms
  }
}

interface Order {
  id: number;
  title: string;
  price: number;
  count: number;
}

class OrderService {
  createOrder() {
    const order: Order = {
      id: 1,
      price: 20,
      count: 1,
      title: "order1",
    };
    // simulate saving to DB
    setTimeout(() => {
      console.log(`order : ${order} saved to DB`);
    }, 1000);

    // calcaulate total price
    const total = order.count * order.price;
    console.log(`total is: ${total}`);

    // notification
    setTimeout(() => {
      console.log(`order with id :${order.id} is bieng prepared`);
    }, 500);
  }
}

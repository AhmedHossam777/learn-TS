export interface Order {
  id: number;
  title: string;
  price: number;
  count: number;
}

export class OrderRepository {
  async saveToDB(order: Order) {
    // simulate saving to DB
    setTimeout(() => {
      console.log(`order : ${order} saved to DB`);
    }, 1000);

    return order;
  }

  async findOne() {
    setTimeout(() => {
      console.log("find one order");
    }, 200);
  }

  async findAll() {
    setTimeout(() => {
      console.log("find All order");
    }, 200);
    // const orders = await Orders.find()
  }

  async findDelete() {
    setTimeout(() => {
      console.log("delete order");
    }, 200);
  }

  async UpdateOne() {
    setTimeout(() => {
      console.log("update one order");
    }, 200);
  }
}

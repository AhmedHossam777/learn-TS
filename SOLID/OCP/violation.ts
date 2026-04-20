class PaymentProcessor {
  pay(method: string, amount: number) {
    if (method === "wallet") {
      // phone number -> pin -> pay
      // logic paying using wallet
      console.log(`paying ${amount}$ using ${method}`);
    } else if (method === "credit") {
      // card number , cvv , pin
      // logic paying using credit
      console.log(`paying ${amount}$ using ${method}`);
    } else if (method === "debit") {
      // logic paying using debit
      console.log(`paying ${amount}$ using ${method}`);
    } else if (method === "instapay") {
      // logic paying using instapay
      console.log(`paying ${amount}$ using ${method}`);
    } else if (method === "apple pay") {
      // logic paying using apple pay
      console.log(`paying ${amount}$ using ${method}`);
    } else {
      console.error("method is not exist");
    }
  }
}

const pp = new PaymentProcessor();
pp.pay("wallet", 500);
pp.pay("credit", 500);
pp.pay("instapay", 500);

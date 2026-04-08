interface PaymentMethod {
  pay(amount: number): string;
}

class CreditCardPayment implements PaymentMethod {
  pay(amount: number): string {
    return `paying ${amount} via credit card`;
  }
}

class WalletPayment implements PaymentMethod {
  pay(amount: number): string {
    return `paying ${amount} via Wallet`;
  }
}

class InstaPayPayment implements PaymentMethod {
  pay(amount: number): string {
    return `paying ${amount} via Inspay`;
  }
}

class DebitPayment implements PaymentMethod {
  pay(amount: number): string {
    return `paying ${amount} via Debit`;
  }
}

class OnlinePayment implements PaymentMethod {
  pay(amount: number): string {
    return `paying ${amount} via Online`;
  }
}

class PaymentService {
  processPayment(paymentMethod: PaymentMethod, amount: number) {
    const result = paymentMethod.pay(amount);
    return result;
  }
}

const ps = new PaymentService();
const dp = new DebitPayment();
const cp = new CreditCardPayment();
const ip = new InstaPayPayment();
const wp = new WalletPayment();
const op = new OnlinePayment();

const result1 = ps.processPayment(dp, 3000);
const result2 = ps.processPayment(wp, 3000);
const result3 = ps.processPayment(ip, 3000);
const result4 = ps.processPayment(cp, 3000);
const result5 = ps.processPayment(op, 5000);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

type Shape = {
  kind: "circle" | "rectangle" | "traingle";
  radius?: number;
  width?: number;
  height?: number;
};

class AreaCalculator {
  calculate(shape: Shape): number {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius! ** 2;
    } else if (shape.kind === "rectangle") {
      return shape.width! * shape.height!;
    } else if (shape.kind === "traingle") {
      // return // rere
    }

    throw new Error("Unknown shape");
  }
}

interface IShape {
  area(): number;
}

class Circle implements IShape {
  constructor(private readonly rad: number) {}
  area(): number {
    return Math.PI * this.rad! ** 2;
  }
}

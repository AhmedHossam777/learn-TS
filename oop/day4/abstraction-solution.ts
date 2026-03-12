abstract class PaymentProvider {
    validateAmount(amount:number):void{
        if (amount <= 0) throw new Error('invalid amount')
    }

    abstract processPayment(amount:number):void;
    abstract refund(amount:number):void;
    abstract getBalance():number

    checkout(amount:number):void{
        this.validateAmount(amount)
        this.processPayment(amount)
    }
}

class PaypalProvider extends PaymentProvider{
    processPayment(amount: number) {
        console.log('connnecting to paypal api...')
        console.log(`Sending ${amount} to pp acc`)
        console.log(`paypal fee ${0.03 * amount}`)
    }

    refund(amount: number) {
        console.log(`Refunding ${amount} from paypal account`)
    }

    getBalance(): number {
        return 1500;
    }
}

class StripeProvider extends PaymentProvider{
    processPayment(amount: number) {
        console.log("Initialise Stripe api")
        console.log(`Charing ${amount} via Stripe`)
        console.log(`Stripe fee ${0.03 * amount}`)
    }

    refund(amount: number) {
        console.log(`Refunding ${amount} from paypal account`)
    }

    getBalance(): number {
        return 1500;
    }
}

const pp = new PaypalProvider()
pp.checkout(90)

const stripe = new StripeProvider()
stripe.checkout(-900)
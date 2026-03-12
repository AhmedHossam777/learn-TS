// Payment -> Paypal, Stripe, Crypto


// paypal
function processPaypalPayment(amount: number) {
    console.log('connnecting to paypal api...')
    console.log(`Sending ${amount} to pp acc`)
    console.log(`paypal fee ${0.03 * amount}`)
}

function refundPaypalPayment(amount: number) {
    console.log(`Refunding ${amount} from paypal account`)
}

function getPaypalBalance(): number {
    return 1500
}

// Stripe
function processStripePayment(amount :number){
    console.log("Initialise Stripe api")
    console.log(`Charing ${amount} via Stripe`)
    console.log(`Stripe fee ${0.03 * amount}`)
}

function refundStripePayment(amount: number) {
    console.log(`Refunding ${amount} from paypal account`)
}

function getStripeBalance(): number {
    return 1500
}

// Crypto

function Checkout(method:string, amount:number){
    if (method === 'paypal'){
        processPaypalPayment(amount)
    }else if (method === 'stripe'){
        processStripePayment(amount)
    }

    // else if crypto
}


Checkout("paybal", 900)
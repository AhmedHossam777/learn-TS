class BankAccount {
    // private balance: number
    // private pin: number
    // private accountName: string

    constructor(private balance: number, private pin: number, private accountName: string) {
        // this.balance = balance
        // this.accountName = accountName
        // this.pin = pin
    }

    get Balance(): number {
        return this.balance
    }

    get AccountName() {
        return this.accountName
    }

    set AccountName(name: string) {
        this.accountName = name
    }

    changePin(newPin: number, oldPin: number) {
        this.authorize(oldPin)

        const pinStr = `${newPin}`
        if (pinStr.length !== 4) {
            throw new Error("invalid new pin")
        }

        this.pin = newPin
    }

    deposit(pin: number, amount: number) {
        this.authorize(pin)
        if (amount <= 0) {
            throw new Error("invalid amount")
        }

        this.balance += amount
    }

    withdraw(pin: number, amount: number) {
        this.authorize(pin)
        if (amount <= 0) {
            throw new Error("invalid amount")
        }
        if (amount > this.balance) {
            throw new Error("invalid amount")
        }

        this.balance -= amount
    }

    private authorize(pin: number) {
        if (this.pin !== pin) {
            throw new Error("unauthorized")
        }
    }
}

const acc = new BankAccount(0, 1131, "ahmed")

console.log(acc.Balance)
console.log(acc.AccountName)
acc.AccountName = "ibrahim"
console.log(acc.AccountName)

acc.deposit(1131, 90)
acc.withdraw(1131, 30)

console.log(acc.Balance)


const str = 'ahmed'
console.log(str.length)
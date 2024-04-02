"use strict";
class BankAccount {
    constructor(accountNumber, ownerName, balance = 0) {

        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;

    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Diposited $${amount} Into Account ${this.accountNumber} And Account Owner Name Is ${this.ownerName}. `)
        } else {
            console.log("Sorry, You Can't Deposit this type of Amount. Please Try Again.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`$${amount} withdraw from Account ${this.accountNumber}`)
        } else {
            console.log("Insufficient Funds")
        }
    }

    getBalance() {
        console.log("Your Current balance Is $" + this.balance)
    }

    displayAccountInfo() {
        console.log("Account Number : " + this.accountNumber);
        console.log("Owner Name : " + this.ownerName);
        console.log("Balance : $" + this.balance);
    }

}

const Person1 = new BankAccount(1001, "John Bro", 700);
Person1.deposit(500)
Person1.withdraw(50)
Person1.getBalance()
Person1.displayAccountInfo()

console.log();
console.log();

const Person2 = new BankAccount(1002, "Doe Bro", 1000);
Person2.deposit(0)
Person2.withdraw(2001)
Person2.getBalance()
Person2.displayAccountInfo()




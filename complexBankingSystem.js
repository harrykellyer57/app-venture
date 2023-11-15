// JavaScript Code for Complex Banking System

// filename: complexBankingSystem.js

// Class for creating Bank objects
class Bank {
  constructor(name, branch) {
    this.name = name;
    this.branch = branch;
    this.customers = [];

    console.log(`New bank "${name}", ${branch} branch, created.`);
  }

  // Add a new customer to the bank
  addCustomer(name, accountNumber, balance) {
    const customer = new Customer(name, accountNumber, balance);
    this.customers.push(customer);
  }

  // Retrieve a customer's details by account number
  getCustomerDetails(accountNumber) {
    const customer = this.customers.find(
      (customer) => customer.accountNumber === accountNumber
    );

    if (customer) {
      console.log("Customer Details:");
      console.log(`Name: ${customer.name}`);
      console.log(`Account Number: ${customer.accountNumber}`);
      console.log(`Balance: $${customer.balance}`);
    } else {
      console.log("Customer not found.");
    }
  }
}

// Class for creating Customer objects
class Customer {
  constructor(name, accountNumber, balance = 0) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;

    console.log(`New customer "${name}", account: ${accountNumber}, created.`);
  }

  // Deposit funds into the customer's account
  deposit(amount) {
    this.balance += amount;
    console.log(`$${amount} deposited into account: ${this.accountNumber}`);
  }

  // Withdraw funds from the customer's account
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`$${amount} withdrawn from account: ${this.accountNumber}`);
    } else {
      console.log("Insufficient funds in the account.");
    }
  }
}

// Example usage of the complex banking system

// Create a new bank
const myBank = new Bank("XYZ Bank", "Main");

// Add customers to the bank
myBank.addCustomer("John Doe", "123456789", 1000);
myBank.addCustomer("Jane Smith", "987654321", 500);

// Get customer details
myBank.getCustomerDetails("123456789");

// Deposit funds for customer
myBank.customers[0].deposit(200);

// Withdraw funds from customer's account
myBank.customers[1].withdraw(100);

// Get updated customer details
myBank.getCustomerDetails("987654321");

// Output:
// New bank "XYZ Bank", Main branch, created.
// New customer "John Doe", account: 123456789, created.
// New customer "Jane Smith", account: 987654321, created.
// Customer Details:
// Name: John Doe
// Account Number: 123456789
// Balance: $1000
// $200 deposited into account: 123456789
// $100 withdrawn from account: 987654321
// Customer Details:
// Name: Jane Smith
// Account Number: 987654321
// Balance: $400
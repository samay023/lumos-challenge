// tests/calculator.test.ts
import { Bank } from "../src/bank";
import { BankAccount } from "../src/bankAccount";

describe("Bank", () => {
  it("can add bank accounts to the bank", () => {
    const bank = new Bank();
    const account1 = new BankAccount({ name: "Alan" }, 100);
    const account2 = new BankAccount({ name: "John" }, 200);
    bank.addBankAccount(account1);
    bank.addBankAccount(account2);
    expect(bank.getBankAccountCount()).toBe(2);
  });

  it("can return the balances of all bank accounts", () => {
    const bank = new Bank();
    const account1 = new BankAccount({ name: "Alan" }, 100);
    const account2 = new BankAccount({ name: "John" }, 200);
    bank.addBankAccount(account1);
    bank.addBankAccount(account2);

    expect(bank.showBalancesOfAllAccounts()).toEqual([
      { accountHolder: "Alan", balance: 100 },
      { accountHolder: "John", balance: 200 },
    ]);
  });

  it("can return the total balance of all bank accounts", () => {
    const bank = new Bank();
    const account1 = new BankAccount({ name: "Alan" }, 100);
    const account2 = new BankAccount({ name: "John" }, 200);
    bank.addBankAccount(account1);
    bank.addBankAccount(account2);

    expect(bank.showTotalBalance()).toBe(300);
  });
});

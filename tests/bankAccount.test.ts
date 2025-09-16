import { BankAccount } from "../src/bankAccount";

describe("bank account", () => {
  describe("when creating a bank account", () => {
    test("can pass in an initial balance and account holder", () => {
      const bankAccount = new BankAccount(
        {
          name: "Alan",
        },
        100
      );
      expect(bankAccount.viewCurrentBalance()).toBe(100);
      expect(bankAccount.getAccountHolder()).toEqual({ name: "Alan" });
    });
  });
  describe("when transferring funds", () => {
    test("throws error if you are transferring to the same account", () => {
      const bankAccount1 = new BankAccount(
        {
          name: "Alan",
        },
        100
      );
      expect(() => bankAccount1.transferFunds(bankAccount1, 50)).toThrow(
        "Cannot transfer to the same bank account"
      );
    });
    test("throws error if you are transferring a negative amount", () => {
      const bankAccount1 = new BankAccount(
        {
          name: "John",
        },
        100
      );
      const bankAccount2 = new BankAccount(
        {
          name: "alan ",
        },
        200
      );
      expect(() => bankAccount1.transferFunds(bankAccount2, -50)).toThrow(
        "Transfer amount must be positive"
      );
    });

    test("throws error if you if the current balance will go negative", () => {
      const bankAccount1 = new BankAccount(
        {
          name: "John",
        },
        100
      );
      const bankAccount2 = new BankAccount(
        {
          name: "alan ",
        },
        200
      );

      expect(() => bankAccount1.transferFunds(bankAccount2, 150)).toThrow(
        "Current balance cannot be less than 0 after the transfer"
      );
    });
  });
});

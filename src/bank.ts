// Need a bank
// Need a bank account

import { type BankAccount } from "./bankAccount";

export interface Bank {
  showBalancesOfAllAccounts(): {
    accountHolder: string;
    balance: number;
  }[];
  showTotalBalance(): number;
}

export class Bank implements Bank {
  private bankAccounts: BankAccount[] = [];
  constructor() {}

  addBankAccount(account: BankAccount): void {
    this.bankAccounts.push(account);
  }

  getBankAccountCount(): number {
    return this.bankAccounts.length;
  }

  showBalancesOfAllAccounts() {
    return this.bankAccounts.map((account) => ({
      accountHolder: account.getAccountHolder().name,
      balance: account.viewCurrentBalance(),
    }));
  }

  showTotalBalance() {
    return this.bankAccounts.reduce(
      (total, account) => total + account.viewCurrentBalance(),
      0
    );
  }
}

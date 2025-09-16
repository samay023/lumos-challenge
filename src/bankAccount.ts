export interface BankAccount {
  viewCurrentBalance(): void;
  transferFunds(bankAccount: BankAccount, transferAmount: number): void;
}

interface AccountHolder {
  name: string;
}

export class BankAccount implements BankAccount {
  private balance: number;
  private accountId: string;

  constructor(
    private accountHolder: AccountHolder,
    private initialBalance: number
  ) {
    this.balance = this.initialBalance;
    this.accountId = Math.random().toString(36).substring(2, 15);
  }

  viewCurrentBalance(): number {
    return this.balance;
  }

  getAccountHolder(): AccountHolder {
    return this.accountHolder;
  }

  transferFunds(bankAccount: BankAccount, transferAmount: number): void {
    if (this.accountId === bankAccount.accountId) {
      throw new Error("Cannot transfer to the same bank account");
    }

    if (transferAmount < 0.1) {
      throw new Error("Transfer amount must be positive");
    }

    if (this.balance - transferAmount < 0) {
      throw new Error(
        "Current balance cannot be less than 0 after the transfer"
      );
    }
    this.balance -= transferAmount;
  }
}

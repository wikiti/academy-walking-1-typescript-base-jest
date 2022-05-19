export interface IAccountService {
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
  printStatement: () => void;
}

export interface IBalance {
  increase: (amount: number) => void;
  history: [string, number][];
}

export class AccountService implements IAccountService {
  balance: IBalance;

  constructor({ balance }: { balance: IBalance }) {
    this.balance = balance;
  }
  deposit(amount: number) {
    this.balance.increase(amount);
  }
  withdraw(amount: number) {}
  printStatement() {}
}

export interface IAccountService {
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
  printStatement: () => void;
}

export interface IBalance {
  increase: (amount: number) => void;
  decrease: (amount: number) => void;
  generateStatement: () => string;
  history: [string, number, number][];
}

export interface ILogger {
  log: (info: string) => void;
}

export class AccountService implements IAccountService {
  balance: IBalance;
  logSpy: ILogger;

  constructor({ balance, logSpy }: { balance: IBalance; logSpy: ILogger }) {
    this.balance = balance;
    this.logSpy = logSpy;
  }
  deposit(amount: number) {
    this.balance.increase(amount);
  }
  withdraw(amount: number) {
    this.balance.decrease(amount);
  }
  printStatement() {
    this.logSpy.log(this.balance.generateStatement());
  }
}

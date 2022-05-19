import { IBalance } from "./AccountService";

export class Balance implements IBalance {
  history: [string, number, number][] = [];
  private balanceAmount = 0;

  increase(amount: number) {
    const date = new Date();
    this.balanceAmount += amount;
    this.history.push([
      `${date.toISOString().split("T")[0]}`,
      amount,
      this.balanceAmount,
    ]);
  }

  decrease(amount: number) {
    const date = new Date();
    this.balanceAmount -= amount;
    this.history.push([
      `${date.toISOString().split("T")[0]}`,
      -amount,
      this.balanceAmount,
    ]);
  }

  generateStatement() {
    const history = this.history
      .reverse()
      .reduce((acc, [date, amount, balance]) => {
        return acc + "\n" + `${date} || ${amount} || ${balance}`;
      }, `Date || Amount || Balance`);
    return history;
  }
}

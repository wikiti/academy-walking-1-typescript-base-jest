import MockDate from "mockdate";
import { AccountService, IBalance } from "./AccountService";

describe("AcceptanceTest", () => {
  let sut: any;
  describe("Given a client makes a deposit of 1000 on 10-01-2012", () => {
    describe("And a deposit of 2000 on 13-01-2012", () => {
      describe("And a withdrawal of 500 on 14-01-2012", () => {
        describe("When they print their bank statement", () => {
          it.todo("Should log the statement");
        });
      });
    });
  });
});

describe("AccountService", () => {
  let sut: AccountService;
  let balance: IBalance;

  beforeEach(() => {
    MockDate.set("2012-01-10T14:14:29.963Z");
    const balanceHistory = [] as any;
    balance = {
      increase: jest.fn().mockImplementation((amount: number) => {
        const date = new Date();
        balanceHistory.push([`${date.toISOString().split("T")[0]}`, amount]);
      }),
      history: balanceHistory,
    };
    sut = new AccountService({
      balance,
    });
  });

  describe("deposit", () => {
    describe("When I deposit", () => {
      it("Should increase the money in the bank", () => {
        sut.deposit(1000);
        expect(balance.increase).toBeCalledWith(1000);
      });

      it("Should record the date of increase", () => {
        sut.deposit(1000);
        expect(balance.history).toEqual([["2012-01-10", 1000]]);
      });
    });
  });

  describe("printStatement", () => {
    it.todo("Should print the bank statement");
  });
});

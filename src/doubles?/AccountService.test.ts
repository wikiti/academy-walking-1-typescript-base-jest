import MockDate from "mockdate";
import { AccountService, IBalance, ILogger } from "./AccountService";
import { Balance } from "./Balance";

describe("AcceptanceTest", () => {
  let sut: any;
});

describe("AccountService", () => {
  let sut: AccountService;
  let balance: IBalance;
  let logSpy: ILogger;

  beforeEach(() => {
    MockDate.set("2012-01-10T14:14:29.963Z");
    balance = new Balance();
    logSpy = {
      log: jest.fn(),
    };
    sut = new AccountService({
      balance,
      logSpy,
    });
  });

  describe("deposit", () => {
    describe("When I deposit", () => {
      it("Should record the date of increase", () => {
        sut.deposit(1000);
        expect(balance.history).toEqual([["2012-01-10", 1000]]);
      });
    });

    describe("When I withdraw", () => {
      it("Should decrease my balance", () => {
        sut.deposit(1000);
        sut.withdraw(1000);
        expect(balance.history).toEqual([
          ["2012-01-10", 1000, 1000],
          ["2012-01-10", -1000, 0],
        ]);
      });
    });
  });

  describe("printStatement", () => {
    it("Should print the bank statement", () => {
      sut.deposit(1000);
      sut.printStatement();
      const statement = `Date || Amount || Balance
2012-01-10 || 1000 || 1000`;
      expect(logSpy.log).toBeCalledWith(statement);
    });
  });

  describe("Given a client makes a deposit of 1000 on 10-01-2012", () => {
    describe("And a deposit of 2000 on 13-01-2012", () => {
      describe("And a withdrawal of 500 on 14-01-2012", () => {
        describe("When they print their bank statement", () => {
          it("Should log the statement", () => {
            sut.deposit(1000);
            MockDate.set("2012-01-13T14:14:29.963Z");
            sut.deposit(2000);
            MockDate.set("2012-01-14T14:14:29.963Z");
            sut.withdraw(500);
            sut.printStatement();
            const statement = `Date || Amount || Balance
2012-01-14 || -500 || 2500
2012-01-13 || 2000 || 3000
2012-01-10 || 1000 || 1000`;
            expect(logSpy.log).toBeCalledWith(statement);
          });
        });
      });
    });
  });
});

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
    balance = {
      increase: jest.fn(),
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
    });
  });
});

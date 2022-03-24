import { Cell } from "../../main/game-of-life/cell";

describe("Cell", () => {
  describe("isDead", () => {
    it("should be dead if the cell dies", () => {
      const cell = new Cell();
      cell.die();

      expect(cell.isDead()).toEqual(true);
    });

    it("it should not be dead if the cell revives", () => {
      const cell = new Cell();
      cell.revive();

      expect(cell.isDead()).toEqual(false);
    });
  });

  describe("isAlive", () => {
    it("should be alive if the cell revives", () => {
      const cell = new Cell();
      cell.revive();

      expect(cell.isAlive()).toEqual(true);
    });
    it("should not be alive if the cell dies", () => {
      const cell = new Cell();
      cell.die();

      expect(cell.isAlive()).toEqual(false);
    })
  });
});

import { Cell } from "../../main/game-of-life/cell";

describe("Cell", () => {
  it("should be dead if the cell dies", () => {
    const cell = new Cell();
    cell.die();

    expect(cell.isDead()).toEqual(true);
    expect(cell.isAlive()).toEqual(false);
  });

  it("it should be alive if the cell revives", () => {
    const cell = new Cell();
    cell.revive();

    expect(cell.isAlive()).toEqual(true);
    expect(cell.isDead()).toEqual(false);
  });
});

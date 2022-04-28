import { Grid } from "../../main/game-of-life/grid";

describe("Grid", () => {
  it("should contain 16 cells if the grid is 4x4", () => {
    const grid = new Grid(4, 4);
    const rows = grid["cells"];
    const cells = rows.flat();

    expect(cells.length).toEqual(16);
  });

  // it("should be able to seed the grid", () => {
  //   const grid = new Grid(1, 2);
  //   grid.seed([[State.Alive, State.Dead]]);

  //   const firstCell = grid["cells"][0][0];
  //   const secondCell = grid["cells"][0][1];

  //   expect(firstCell.isAlive()).toEqual(true);
  //   expect(secondCell.isAlive()).toEqual(false);
  // });
});

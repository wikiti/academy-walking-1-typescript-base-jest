import { Grid } from "../../main/game-of-life/grid";

describe("Grid", () => {
  it("should contain 16 cells if the grid is 4x4", () => {
    const grid = new Grid(4, 4);
    const rows = grid["cells"];
    const cells = rows.flat();

    expect(cells.length).toEqual(16);
  });
});

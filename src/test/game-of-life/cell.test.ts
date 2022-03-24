describe("Cell", () => {
  it("should be represented as · if the cell is dead", () => {
    const cell = new Cell();
    cell.die();

    expect(cell.isDead()).toEqual(true);
    expect(cell.isAlive()).toEqual(false);
    expect(cell.display()).toEqual("·");
  });
});

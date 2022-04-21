describe("Mars rover", () => {
  it("should have a direction", () => {
    const rover = new Robot("N");
    expect(rover.currentDirection()).toEqual("N");
  });
});

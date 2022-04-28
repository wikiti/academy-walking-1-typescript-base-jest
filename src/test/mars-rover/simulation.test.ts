describe("Simulation", () => {
  it("simulates an empty list of commands", () => {
    const simulation = new Simulation("");

    expect(simulation.simulate()).toEqual("0:0:N");
  });
});

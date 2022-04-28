import { Simulation } from "../../main/mars-rover/simulation";

describe("Simulation", () => {
  it("simulates an empty list of commands", () => {
    const simulation = new Simulation("");

    expect(simulation.simulate()).toEqual("0:0:N");
  });
  it("simulates rotating once to the left", () => {
    const simulation = new Simulation("L");

    expect(simulation.simulate()).toEqual("0:0:W");
  });

  it("simulates rotating twice to the right", () => {
    const simulation = new Simulation("R");
    expect(simulation.simulate()).toEqual("0:0:E");
  });
});

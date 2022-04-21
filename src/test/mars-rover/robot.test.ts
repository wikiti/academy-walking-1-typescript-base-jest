import { Robot } from "../../main/mars-rover/robot";

describe("Mars rover", () => {
  it("should have a direction", () => {
    const rover = new Robot("N");
    expect(rover["direction"]).toEqual("N");
  });

  it("should be able to rotate to the left", () => {
    const rover = new Robot("N");
    rover.turnLeft();

    expect(rover["direction"]).toEqual("W");
  });
});

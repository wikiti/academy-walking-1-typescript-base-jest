import { Robot } from "../../main/mars-rover/robot";

describe("Mars rover", () => {
  it("should have a direction", () => {
    const rover = new Robot("N");
    expect(rover["direction"]).toEqual("N");
  });

  it("should turn to the left", () => {
    const rover = new Robot("N");
    rover.turnLeft();

    expect(rover["direction"]).toEqual("W");
  });

  it("should turn to the right", () => {
    const rover = new Robot("N");
    rover.turnRight();

    expect(rover["direction"]).toEqual("E");
  });
});

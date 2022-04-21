import { Robot } from "../../main/mars-rover/robot";
import { Direction, DirectionSide } from "../../main/mars-rover/direction";
import { Position } from "../../main/week4/tictactoe";

describe("Mars rover", () => {
  it("should have a direction", () => {
    const rover = new Robot(Direction.create("N"));
    expect(rover["direction"]).toEqual(Direction.create("N"));
  });

  it("should have a position", () => {
    const rover = new Robot({
      position: Position.create(1, 0),
      direction: Direction.create("N"),
    });
    expect(rover["direction"]).toEqual(Direction.create("N"));
  });

  describe("Turn left", () => {
    it.each<{ from: DirectionSide; to: DirectionSide }>([
      { from: "N", to: "W" },
      { from: "W", to: "S" },
      { from: "S", to: "E" },
      { from: "E", to: "N" },
    ])("should turn left from $from to $to", ({ from, to }) => {
      const rover = new Robot(Direction.create(from));
      rover.turnLeft();

      expect(rover["direction"]).toEqual(Direction.create(to));
    });
  });

  describe("Turn Right", () => {
    it.each<{ from: DirectionSide; to: DirectionSide }>([
      { from: "N", to: "E" },
      { from: "E", to: "S" },
      { from: "S", to: "W" },
      { from: "W", to: "N" },
    ])("should turn right from $from to $to", ({ from, to }) => {
      const rover = new Robot(Direction.create(from));
      rover.turnRight();

      expect(rover["direction"]).toEqual(Direction.create(to));
    });
  });
});

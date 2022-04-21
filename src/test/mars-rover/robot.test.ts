import { Robot } from "../../main/mars-rover/robot";
import { Direction, DirectionSide } from "../../main/mars-rover/direction";
import { Position } from "../../main/mars-rover/position";

describe("Mars rover", () => {
  it("should have a direction", () => {
    const rover = new Robot({
      direction: Direction.create("N"),
      position: Position.create(0, 0),
    });
    expect(rover["direction"]).toEqual(Direction.create("N"));
  });

  describe("Move", () => {
    it("should move forward facing north by one cell", () => {
      const rover = new Robot({
        direction: Direction.create("N"),
        position: Position.create(0, 0),
      });
      rover.move();
      expect(rover["position"]).toEqual(Position.create(0, 1));
    });

    it("should move forward facing east by one cell", () => {
      const rover = new Robot({
        direction: Direction.create("E"),
        position: Position.create(0, 0),
      });
      rover.move();
      expect(rover["position"]).toEqual(Position.create(1, 0));
    });

    it("should move forward facing west by one cell", () => {
      const rover = new Robot({
        direction: Direction.create("W"),
        position: Position.create(1, 0),
      });
      rover.move();
      expect(rover["position"]).toEqual(Position.create(0, 0));
    });
  });

  describe("Turn left", () => {
    it.each<{ from: DirectionSide; to: DirectionSide }>([
      { from: "N", to: "W" },
      { from: "W", to: "S" },
      { from: "S", to: "E" },
      { from: "E", to: "N" },
    ])("should turn left from $from to $to", ({ from, to }) => {
      const rover = new Robot({
        direction: Direction.create(from),
        position: Position.create(0, 0),
      });
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
      const rover = new Robot({
        direction: Direction.create(from),
        position: Position.create(0, 0),
      });
      rover.turnRight();

      expect(rover["direction"]).toEqual(Direction.create(to));
    });
  });
});

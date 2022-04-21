import { Robot } from "../../main/mars-rover/robot";
import { Direction, DirectionSide } from "../../main/mars-rover/direction";
import { Position } from "../../main/mars-rover/position";
import { Surface } from "../../main/mars-rover/surface";

describe("Mars rover", () => {
  const surface = new Surface();

  it("should have a direction", () => {
    const rover = new Robot({
      surface,
      direction: Direction.create("N"),
      position: Position.create(0, 0),
    });
    expect(rover["direction"]).toEqual(Direction.create("N"));
  });

  describe("Move", () => {
    it.each([
      {
        direction: Direction.create("N"),
        from: Position.create(0, 0),
        to: Position.create(0, 1),
      },
      {
        direction: Direction.create("E"),
        from: Position.create(0, 0),
        to: Position.create(1, 0),
      },
      {
        direction: Direction.create("W"),
        from: Position.create(1, 0),
        to: Position.create(0, 0),
      },
      {
        direction: Direction.create("S"),
        from: Position.create(0, 1),
        to: Position.create(0, 0),
      },
    ])(
      "should move forward facing north by one cell",
      ({ direction, from, to }) => {
        const rover = new Robot({
          surface,
          direction,
          position: from,
        });
        rover.move();
        expect(rover["position"]).toEqual(to);
      }
    );
  });

  describe("Wrap", () => {
    it("should wrap to right when facing left on left boundary", () => {
      const rover = new Robot({
        surface,
        direction: Direction.create("W"),
        position: Position.create(0, 0),
      });
      rover.move();
      expect(rover["position"]).toEqual(
        Position.create(Surface["size"] - 1, 0)
      );
    });
    it("should wrap to left when facing right on right boundary", () => {
      const rover = new Robot({
        surface,
        direction: Direction.create("E"),
        position: Position.create(9, 0),
      });
      rover.move();
      expect(rover["position"]).toEqual(Position.create(0, 0));
    });
  });

  describe("Turn left", () => {
    const position = Position.create(0, 0);

    it.each<{ from: DirectionSide; to: DirectionSide }>([
      { from: "N", to: "W" },
      { from: "W", to: "S" },
      { from: "S", to: "E" },
      { from: "E", to: "N" },
    ])("should turn left from $from to $to", ({ from, to }) => {
      const rover = new Robot({
        surface,
        direction: Direction.create(from),
        position,
      });
      rover.turnLeft();

      expect(rover["direction"]).toEqual(Direction.create(to));
    });
  });

  describe("Turn Right", () => {
    const position = Position.create(0, 0);
    it.each<{ from: DirectionSide; to: DirectionSide }>([
      { from: "N", to: "E" },
      { from: "E", to: "S" },
      { from: "S", to: "W" },
      { from: "W", to: "N" },
    ])("should turn right from $from to $to", ({ from, to }) => {
      const rover = new Robot({
        surface,
        direction: Direction.create(from),
        position,
      });
      rover.turnRight();

      expect(rover["direction"]).toEqual(Direction.create(to));
    });
  });
});

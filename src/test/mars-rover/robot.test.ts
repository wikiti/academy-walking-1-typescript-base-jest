import { Direction, Robot } from "../../main/mars-rover/robot";

describe("Mars rover", () => {
  it("should have a direction", () => {
    const rover = new Robot("N");
    expect(rover["direction"]).toEqual(Direction.create('N'));
  });

  describe("Turn left", () => {
    it("should turn to the left", () => {
      const rover = new Robot("N");
      rover.turnLeft();

      expect(rover["direction"]).toEqual(Direction.create('W'));
    });

    it("should turn left from west to south", () => {
      const rover = new Robot("W");
      rover.turnLeft();

      expect(rover["direction"]).toEqual(Direction.create('S'));
    });

    it("should turn left from south to east", () => {
      const rover = new Robot("S");
      rover.turnLeft();

      expect(rover["direction"]).toEqual(Direction.create('E'));
    });

    it("should turn left from south to east", () => {
      const rover = new Robot("E");
      rover.turnLeft();

      expect(rover["direction"]).toEqual(Direction.create('N'));
    });
  });

  describe("Turn Right", () => {
    it("should turn to the right", () => {
      const rover = new Robot("N");
      rover.turnRight();
  
      expect(rover["direction"]).toEqual(Direction.create('E'));
    });

    it("should turn to the right", () => {
      const rover = new Robot("E");
      rover.turnRight();
  
      expect(rover["direction"]).toEqual(Direction.create('S'));
    });
  })
  
});

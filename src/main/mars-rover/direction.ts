export type DirectionSide = "W" | "S" | "E" | "N";

export class Direction {
  private constructor(private direction: DirectionSide) {}

  current() {
    return this.direction;
  }

  isEqual(other: Direction) {
    return this.direction == other.direction;
  }

  static create(side: DirectionSide) {
    return new Direction(side);
  }

  static left(direction: Direction) {
    const side = Direction.map[direction.current()];

    return new Direction(side.left as DirectionSide);
  }

  static right(direction: Direction) {
    const side = Direction.map[direction.current()];

    return new Direction(side.right as DirectionSide);
  }

  static map = {
    N: {
      left: "W",
      right: "E",
    },
    W: {
      left: "S",
      right: "N",
    },
    S: {
      left: "E",
      right: "W",
    },
    E: {
      left: "N",
      right: "S",
    },
  };
}

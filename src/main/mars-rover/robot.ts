
type DirectionSide = "W" | "S" | "E" | "N";
export class Direction {
  private constructor(private direction: DirectionSide) {}

  current() {
    return this.direction;
  }

  static create(side: DirectionSide) {
    return new Direction(side);
  }

  static left(direction: Direction) {
    const side = Direction.map[direction.current()];

    return new Direction(side.left as DirectionSide);
  }

  static map = {
    N: {
      left: "W"
    },
    W: {
      left: "S"
    },
    S: {
      left: "E"
    },
    E: {
      left: "N"
    },
  };
}

export class Robot {
  private direction: Direction;

  constructor(directionSide: DirectionSide) {
    this.direction = Direction.create(directionSide);
  }

  turnLeft() {
    this.direction = Direction.left(this.direction);
    // if (this.direction == "N") {
    //   this.direction = "W";
    //   return;
    // }
    // if (this.direction == "W") {
    //   this.direction = "S";
    //   return;
    // }
    // if (this.direction == "S") {
    //   this.direction = "E";
    //   return;
    // }
  }

  turnRight() {
    this.direction = Direction.create('E');
  }
}

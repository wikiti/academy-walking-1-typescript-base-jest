class Direction {
  private constructor(direction: Direction) {}

  static map: Record<string, string> = {
    N: "W",
    W: "S",
    S: "E",
    E: "N",
  };
}

export class Robot {
  private direction: Direction;

  constructor(direction: Direction) {
    this.direction = direction;
  }

  turnLeft() {
    if (this.direction == "N") {
      this.direction = "W";
      return;
    }
    if (this.direction == "W") {
      this.direction = "S";
      return;
    }
    if (this.direction == "S") {
      this.direction = "E";
      return;
    }
  }

  turnRight() {
    this.direction = "E";
  }
}

type Direction = "N" | "S" | "E" | "W";

export class Robot {
  private direction: Direction;

  constructor(direction: Direction) {
    this.direction = direction;
  }

  turnLeft() {
    if (this.direction == "N") {
      this.direction = "W";
      return
    }
    if (this.direction == "W") {
      this.direction = "S";
    }
  
  }

  turnRight() {
    this.direction = "E";
  }
}

type Direction = "N" | "S" | "E" | "W";

export class Robot {
  private direction: Direction;

  constructor(direction: Direction) {
    this.direction = direction;
  }
}

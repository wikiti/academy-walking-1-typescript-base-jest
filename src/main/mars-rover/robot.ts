import { Direction } from "./direction";

export class Robot {
  private direction: Direction;

  constructor(direction: Direction) {
    this.direction = direction;
  }

  turnLeft() {
    this.direction = Direction.left(this.direction);
  }

  turnRight() {
    this.direction = Direction.right(this.direction);
  }
}

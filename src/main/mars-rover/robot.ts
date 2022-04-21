import { Direction } from "./direction";
import { Position } from "./position";
type Options = {
  direction: Direction;
  position: Position;
};
export class Robot {
  private direction: Direction;
  private position: Position;

  constructor(options: Options) {
    this.direction = options.direction;
    this.position = options.position;
  }

  turnLeft() {
    this.direction = Direction.left(this.direction);
  }

  turnRight() {
    this.direction = Direction.right(this.direction);
  }

  move() {
    if (this.direction.isEqual(Direction.create("N"))) {
      this.position = this.position.top();
      return;
    }

    this.position = this.position.right();
  }
}

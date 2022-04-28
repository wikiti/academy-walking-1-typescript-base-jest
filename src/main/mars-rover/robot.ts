import { Dir } from "fs";
import { Direction } from "./direction";
import { Position } from "./position";
import { Surface } from "./surface";
type Options = {
  surface: Surface;
  direction: Direction;
  position: Position;
};
export class Robot {
  private surface: Surface;
  private direction: Direction;
  private position: Position;

  constructor(options: Options) {
    this.surface = options.surface;
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
    this.position = this.surface.next(this.position, this.direction);
  }

  orientation(): Direction {
    return this.direction;
  }
}

import { Direction, DirectionSide } from "./direction";
import { Position } from "./position";

export class Surface {
  next(position: Position, direction: Direction) {
    const [xShift, yShift] = Surface.map[direction.current()];
    let xPosition = this.wrap(position.x() + xShift);
    let yPosition = this.wrap(position.y() + yShift);

    return Position.create(xPosition, yPosition);
  }

  private wrap(value: number) {
    if (value < 0) {
      return value + Surface.size;
    }
    if (value > Surface.size - 1) {
      return value - Surface.size;
    }

    return value;
  }

  static map = {
    N: [0, 1],
    W: [-1, 0],
    S: [0, -1],
    E: [1, 0],
  };

  private static size = 10;
}

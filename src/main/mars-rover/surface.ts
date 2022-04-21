import { Direction, DirectionSide } from "./direction";
import { Position } from "./position";

export class Surface {
  next(position: Position, direction: Direction) {
    const [xShift, yShift] = Surface.map[direction.current()];
    let xPosition = position.x() + xShift;
    let yPosition = position.y() + yShift;
    if (xPosition < 0) {
      xPosition += Surface.size;
    }
    if (yPosition < 0) {
      yPosition += Surface.size;
    }
    return Position.create(xPosition, yPosition);
  }

  static map = {
    N: [0, 1],
    W: [-1, 0],
    S: [0, -1],
    E: [1, 0],
  };

  private static size = 10;
}

import { Direction, DirectionSide } from "./direction";
import { Position } from "./position";

export class Surface {
  next(position: Position, direction: Direction ) {
    const [xShift, yShift] = Surface.map[direction.current()];

    return Position.create(position.x() + xShift, position.y() + yShift);
  }

  static map = {
    "N": [0, 1],
    "W": [-1, 0],
    "S": [0, -1],
    "E": [1, 0]
  }

  static size = 10;
};
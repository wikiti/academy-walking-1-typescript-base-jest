export enum Position {
  UpperLeft = "upper left",
  UpperMiddle = "upper middle",
  UpperRight = "upper right",
  MiddleLeft = "middle left",
  MiddleMiddle = "middle middle",
  MiddleRight = "middle right",
  BottomLeft = "bottom left",
  BottomMiddle = "bottom middle",
  BottomRight = "bottom right",
}

export enum Outcome {
  Draw = "draw",
  Win = "win",
  Loss = "loss",
}

type Coordinate = [number, number];
type PositionMap = Record<Position, Coordinate>;

type Symbol = "X" | "O" | null;

const postionMap: PositionMap = {
  [Position.UpperLeft]: [0, 0],
  [Position.UpperMiddle]: [0, 1],
  [Position.UpperRight]: [0, 2],
  [Position.MiddleLeft]: [1, 0],
  [Position.MiddleMiddle]: [1, 1],
  [Position.MiddleRight]: [1, 2],
  [Position.BottomLeft]: [2, 0],
  [Position.BottomMiddle]: [2, 1],
  [Position.BottomRight]: [2, 2],
};

function arraysAreEqual<T>(first: T[], second: T[]) {
  return JSON.stringify(first) === JSON.stringify(second);
}

export class Game {
  public board: Symbol[][];
  public nextPlayer: Symbol;

  constructor() {
    this.nextPlayer = "X";
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  public outcome() {
    if (arraysAreEqual(this.board[0], ["X", "X", "X"])) return Outcome.Win;
    if (arraysAreEqual(this.board[1], ["O", "O", "O"])) return Outcome.Loss;
    const column = [this.board[0][0],this.board[1][0], this.board[2][0]] 
    if (arraysAreEqual(column, ["X", "X", "X"])) return Outcome.Win;

    return Outcome.Draw;
  }

  public move(position: Position) {
    const [row, column] = postionMap[position];
    if (this.board[row][column] != null) throw new Error("Position occupied");

    this.board[row][column] = this.nextPlayer;

    if (this.nextPlayer == "X") this.nextPlayer = "O";
    else this.nextPlayer = "X";
  }
}

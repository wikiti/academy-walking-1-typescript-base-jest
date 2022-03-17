import { Game, Outcome, Position } from "../../main/week4/tictactoe";
describe("TicTacToe match", () => {
  it.each([
    [
      [],
      [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    ],
    [
      [Position.UpperLeft],
      [
        ["X", null, null],
        [null, null, null],
        [null, null, null],
      ],
    ],
    [
      [
        Position.UpperLeft,
        Position.UpperMiddle,
        Position.UpperRight,
        Position.MiddleLeft,
        Position.MiddleMiddle,
        Position.BottomLeft,
        Position.BottomMiddle,
        Position.BottomRight,
        Position.MiddleRight,
      ],
      [
        ["X", "O", "X"],
        ["O", "X", "X"],
        ["O", "X", "O"],
      ],
    ],
  ])(
    "can represent an ongoing game with moves '%p' the board status as a 3x3 matrix",
    (positions, expectedBoard) => {
      const game = new Game();
      positions.forEach((position) => {
        game.move(position);
      });

      expect(game.board).toEqual(expectedBoard);
    }
  );

  it("never starts with the O player", () => {
    const game = new Game();
    game.move(Position.BottomRight);

    expect(game.nextPlayer).toEqual("O");
  });

  it("does not allow a player to overwrite a taken position", () => {
    const game = new Game();
    game.move(Position.UpperLeft);

    expect(() => game.move(Position.UpperLeft)).toThrowError();
  });

  it("should report a draw if there are no winners", () => {
    const game = new Game();
    const positions = [
      Position.UpperLeft,
      Position.UpperMiddle,
      Position.UpperRight,
      Position.MiddleLeft,
      Position.MiddleMiddle,
      Position.BottomLeft,
      Position.BottomMiddle,
      Position.BottomRight,
      Position.MiddleRight,
    ];

    positions.forEach((position) => {
      game.move(position);
    });

    expect(game.outcome()).toEqual(Outcome.Draw);
  });

  it("should report a win if the first row is full of Xs", () => {
    const game = new Game();
    const positions = [
      Position.UpperLeft,
      Position.MiddleLeft,
      Position.UpperMiddle,
      Position.MiddleMiddle,
      Position.UpperRight,
    ];

    positions.forEach((position) => {
      game.move(position);
    });

    expect(game.outcome()).toEqual(Outcome.Win);
  });

  it("should report a loss if the second row is full of Os", () => {
    const game = new Game();
    const positions = [
      Position.UpperLeft,
      Position.MiddleLeft,
      Position.UpperMiddle,
      Position.MiddleMiddle,
      Position.BottomLeft,
      Position.MiddleRight,
    ];

    positions.forEach((position) => {
      game.move(position);
    });

    expect(game.outcome()).toEqual(Outcome.Loss);
  });
  it("should report a win if the first column is full of Xs", () => {
    const game = new Game();
    const positions = [
      Position.UpperLeft,
      Position.MiddleMiddle,
      Position.MiddleLeft,
      Position.MiddleRight,
      Position.BottomLeft,
    ];

    positions.forEach((position) => {
      game.move(position);
    });

    expect(game.outcome()).toEqual(Outcome.Win);
  });
});

// ["X", "null", "null"],
// ["X", "O", "O"],
// ["X", "null", "null"],

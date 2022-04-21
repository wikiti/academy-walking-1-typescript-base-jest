export class Position {
  private constructor(private X: number, private Y: number) {}

  x() {
    return this.X;
  }

  y() {
    return this.Y;
  }

  static create(X: number, Y: number) {
    return new Position(X, Y);
  }
}

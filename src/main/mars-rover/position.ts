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

  top() {
    return Position.create(this.X, this.Y + 1);
  }

  right() {
    return Position.create(this.X + 1, this.Y);
  }

  left() {
    return Position.create(this.X - 1, this.Y);
  }
}

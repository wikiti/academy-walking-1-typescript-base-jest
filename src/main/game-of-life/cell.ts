enum State {
  Dead = "dead",
  Alive = "alive",
}
export class Cell {
  private state: State = State.Dead;

  public die() {
    this.state = State.Dead;
  }
  public isDead(): boolean {
    return this.state === State.Dead;
  }
}

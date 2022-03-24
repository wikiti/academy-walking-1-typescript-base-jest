enum State {
  Dead = "dead",
  Alive = "alive",
}
export class Cell {
  private state: State = State.Dead;

  public die() {
    this.state = State.Dead;
  }

  public revive() {
    this.state = State.Alive;
  }

  public isDead(): boolean {
    return this.state === State.Dead;
  }

  public isAlive() {
    return true;
  }
}

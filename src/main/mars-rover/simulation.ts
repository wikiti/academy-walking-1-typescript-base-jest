import { Commander } from "./commander";
import { Direction } from "./direction";
import { Position } from "./position";
import { Robot } from "./robot";
import { Surface } from "./surface";

export class Simulation {
  private robot: Robot;
  private commander: Commander;

  constructor(input: string) {
    this.robot = new Robot({
      surface: new Surface(),
      direction: Direction.create("N"),
      position: Position.create(0, 0),
    });

    this.commander = new Commander(input, this.robot);
  }

  public simulate() {
    this.commander.execute();
    return this.outcome();
  }

  private outcome() {
    const currentOrientation = this.robot.orientation();
    const currentPosition = this.robot.currentPosition();
    return `${currentPosition.x()}:${currentPosition.y()}:${currentOrientation.current()}`;
  }
}

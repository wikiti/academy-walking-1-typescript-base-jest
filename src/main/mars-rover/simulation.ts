import { Direction } from "./direction";
import { Position } from "./position";
import { Robot } from "./robot";
import { Surface } from "./surface";

abstract class Command {
  protected robot: Robot;

  constructor(robot: Robot) {
    this.robot = robot;
  }

  public execute() {}
}

class TurnLeftCommand extends Command {
  public execute() {
    this.robot.turnLeft();
  }
}

class TurnRightCommand extends Command {
  public execute() {
    this.robot.turnRight();
  }
}

class MoveForwardCommand extends Command {
  public execute() {
    this.robot.move();
  }
}

export class Simulation {
  private input: string;
  private robot: Robot;

  constructor(input: string) {
    this.input = input;

    this.robot = new Robot({
      surface: new Surface(),
      direction: Direction.create("N"),
      position: Position.create(0, 0),
    });
  }

  simulate() {
    if (this.input === "L") {
      new TurnLeftCommand(this.robot).execute();
    }
    if (this.input === "R") {
      new TurnRightCommand(this.robot).execute();
    }
    if (this.input === "M") {
      new MoveForwardCommand(this.robot).execute();
    }

    return this.outcome();
  }

  private outcome() {
    const currentOrientation = this.robot.orientation();
    const currentPosition = this.robot.currentPosition();
    return `0:${currentPosition.y()}:${currentOrientation.current()}`;
  }
}

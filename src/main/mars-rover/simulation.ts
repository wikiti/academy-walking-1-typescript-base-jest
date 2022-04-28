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
  private commands: Command[];
  private robot: Robot;

  constructor(input: string) {
    this.robot = new Robot({
      surface: new Surface(),
      direction: Direction.create("N"),
      position: Position.create(0, 0),
    });
    this.commands = Simulation.inputToCommands(input, this.robot);
  }

  simulate() {
    this.commands.forEach((command) => command.execute());
    return this.outcome();
  }

  private outcome() {
    const currentOrientation = this.robot.orientation();
    const currentPosition = this.robot.currentPosition();
    return `${currentPosition.x()}:${currentPosition.y()}:${currentOrientation.current()}`;
  }

  static inputToCommands(input: string, robot: Robot) {
    return input.split("").map((i) => {
      if (i === "L") {
        return new TurnLeftCommand(robot);
      }
      if (i === "R") {
        return new TurnRightCommand(robot);
      }
      if (i === "M") {
        return new MoveForwardCommand(robot);
      }
      throw new Error("UnknownCommand");
    });
  }
}

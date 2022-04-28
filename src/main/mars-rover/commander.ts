import { Robot } from "./robot";
import { Simulation } from "./simulation";

abstract class Command {
  protected commander: Commander;
  protected robot: Robot;

  constructor(commander: Commander, robot: Robot) {
    this.commander = commander;
    this.robot = robot;
  }

  public execute() {}
  public undo() {}
  public isUndoable() {
    return true;
  }
}

class TurnLeftCommand extends Command {
  public execute() {
    this.robot.turnLeft();
  }

  public undo() {
    this.robot.turnRight();
  }
}

class TurnRightCommand extends Command {
  public execute() {
    this.robot.turnRight();
  }

  public undo() {
    this.robot.turnLeft();
  }
}

class MoveForwardCommand extends Command {
  public execute() {
    this.robot.move();
  }

  public undo() {
    this.robot.turnLeft();
    this.robot.turnLeft();
    this.robot.move();
    this.robot.turnLeft();
    this.robot.turnLeft();
  }
}

class UndoCommand extends Command {
  public execute() {
    const command = this.commander.undo();
  }

  public isUndoable() {
    return false;
  }
}

export class Commander {
  private commands: Command[];
  private robot: Robot;
  private history: Command[];

  constructor(input: string, robot: Robot) {
    this.robot = robot;
    this.commands = this.inputToCommands(input, this.robot);
    this.history = [];
  }

  public undo() {
    const lastCommand = this.history.pop();
    if (lastCommand) {
      lastCommand.undo();
    }
  }

  public execute() {
    this.commands.forEach((command) => this.executeCommand(command));
  }

  private executeCommand(command: Command) {
    if (command.isUndoable()) {
      this.history.push(command);
    }

    command.execute();
    // console.log(`Calling ${command.constructor.name}`);
  }

  public inputToCommands(input: string, robot: Robot) {
    return input.split("").map((i) => {
      const commandClass = Commander.inputMap[i];

      if (!commandClass) {
        throw new Error("UnknownCommand");
      }

      return new commandClass(this, robot);
    });
  }

  static inputMap: { [key: string]: { new (...args: any[]): Command } } = {
    L: TurnLeftCommand,
    R: TurnRightCommand,
    M: MoveForwardCommand,
    U: UndoCommand,
  };
}

export class Simulation {
  input: string;

  constructor(input: string) {
    this.input = input;
  }
  simulate() {
    if (this.input === "L") {
      return "0:0:W";
    }
    return "0:0:N";
  }
}

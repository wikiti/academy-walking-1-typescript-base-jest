import { Cell } from "./cell";

export class Grid {
  private cells: Cell[][];
  constructor(rows: number, columns: number) {
    this.cells = [];

    for (let i = 0; i < rows; ++i) {
      this.cells[i] = [];
      this.initializeRow(this.cells[i], columns);
    }
  }

  private initializeRow(row: Cell[], columns: number) {
    for (let i = 0; i < columns; ++i) {
      row[i] = new Cell();
    }
  }
}

import { numerals } from "../../main/week4/numerals";

describe("numerals", () => {
  it.each`
    input | output
    ${1}  | ${"I"}
    ${2}  | ${"II"}
    ${3}  | ${"III"}
    ${4}  | ${"IV"}
    ${5}  | ${"V"}
    ${6}  | ${"VI"}
    ${7}  | ${"VII"}
    ${8}  | ${"VIII"}
    ${9}  | ${"IX"}
    ${10} | ${"X"}
    ${11} | ${"XI"}
    ${12} | ${"XII"}
    ${13} | ${"XIII"}
    ${14} | ${"XIV"}
    ${15} | ${"XV"}
    ${20} | ${"XX"}
    ${40} | ${"XL"}
  `("Given $input, should return $output", ({ input, output }) => {
    expect(numerals(input)).toEqual(output);
  });
});

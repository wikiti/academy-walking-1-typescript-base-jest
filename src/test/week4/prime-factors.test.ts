import { primeFactors } from "../../main/week4/prime-factors";

describe("Find all prime factors of a number", () => {
  it.each`
    input | output
    ${1}  | ${[]}
    ${2}  | ${[2]}
    ${3}  | ${[3]}
    ${4}  | ${[2, 2]}
    ${5}  | ${[5]}
    ${6}  | ${[2, 3]}
    ${7}  | ${[7]}
    ${8}  | ${[2, 2, 2]}
  `("Given $input should return $output", ({ input, output }) => {
    expect(primeFactors(input)).toEqual(output);
  });
});

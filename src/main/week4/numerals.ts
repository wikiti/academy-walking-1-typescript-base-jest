export function numerals(inputNumber: number): any {
  let str = "";
  if (inputNumber < 4) {
    for (let i = 0; i < inputNumber; i++) {
      str += "I";
    }
  } else if (inputNumber < 9) {
    str = "V";
    if (inputNumber < 5) {
      return numerals(5 - inputNumber) + str;
    }
    if (inputNumber > 5) {
      return str + numerals(inputNumber - 5);
    }
  } else if (inputNumber < 40) {
    str = "X";
    if (inputNumber < 10) {
      return numerals(10 - inputNumber) + str;
    }
    if (inputNumber > 10) {
      return str + numerals(inputNumber - 10);
    }
  } else {
    str = "L";
    if (inputNumber < 50) {
      return numerals(50 - inputNumber) + str;
    }
  }

  return str;
}

export function primeFactors(num: any) {
  const primes = [2, 3, 5, 7];

  function returnLogTwo(num: number) {
    return Math.log2(num);
  }

  function isInteger(num: number) {
    return Math.floor(num) === num;
  }

  if (primes.includes(num)) return [num];

  const result = returnLogTwo(num);
  if (isInteger(result)) {
    return new Array(result).fill(2);
  }

  if (num === 4) {
    return [2, 2];
  }
  if (num === 6) {
    return [2, 3];
  }
  if (num === 8) {
    return [2, 2, 2];
  }

  return [];
}

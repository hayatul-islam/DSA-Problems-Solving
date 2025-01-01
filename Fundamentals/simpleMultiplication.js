// Simple Multiplication
// Multiply a given number by eight if it is even, and by nine if it is odd.

function simpleMultiplication(n) {
  return n * (n % 2 === 0 ? 8 : 9);
}

console.log(simpleMultiplication(5));
console.log(simpleMultiplication(4));

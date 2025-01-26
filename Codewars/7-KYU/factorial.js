// Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n) {
  let result = 1;
  if (n > 12 || n < 0) {
    throw new RangeError("Input must be between 0 and 12");
  }
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

function factorial2(n) {
  if (n < 0 || n > 12) {
    throw new RangeError();
  }

  return n >= 1 ? n * factorial2(n - 1) : 1;
}

console.log(factorial(5));
console.log(factorial2(5));

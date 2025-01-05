// Odd or Even?

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

function oddOrEven(arr) {
  const sum = arr.reduce((s, n) => s + n, 0);
  return sum % 2 === 0 ? "even" : "odd";
}

function oddOrEven2(arr) {
  return ["even", "odd"][arr.reduce((s, n) => s + n, 0) & 1];
}

console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven2([0, 1, 4]));

// Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  let digits = n.toString().split("");

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length - i - 1; j++) {
      if (digits[j] < digits[j + 1]) {
        // Swap digits[j] and digits[j + 1]
        let temp = digits[j];
        digits[j] = digits[j + 1];
        digits[j + 1] = temp;
      }
    }
  }

  return parseInt(digits.join(""), 10);
}

function descendingOrder2(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join(""),
    10
  );
}

console.log(descendingOrder(125678943));
console.log(descendingOrder2(125678943));

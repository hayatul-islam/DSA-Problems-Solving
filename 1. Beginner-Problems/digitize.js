// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

function digitize2(n) {
  let result = [];
  while (n > 0) {
    result.push(n % 10);
    n = Math.floor(n / 10);
  }

  return result.length > 0 ? result : [0];
}

console.log(digitize(4556));
console.log(digitize2(4556));

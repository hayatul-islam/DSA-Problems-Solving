// Number Manipulation I (Easy)

// For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

// In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

// Example:
// 192827764920 --> 192827000000
// 938473 --> 938000
// 2837743 --> 2830000

function manipulate(num) {
  let numStr = String(num);
  let midIndex = Math.floor(numStr.length / 2);

  let result = "";
  for (let i = 0; i < numStr.length; i++) {
    if (i >= midIndex) {
      result += 0;
    } else {
      result += numStr[i];
    }
  }

  return result;
}

console.log(manipulate(938473));
console.log(manipulate(2837743));
console.log(manipulate(192827764920));

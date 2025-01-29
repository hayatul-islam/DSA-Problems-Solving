// Array element parity

// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!

function solve(arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let abs = Math.abs(arr[i]);

    if (!hash[abs]) {
      hash[abs] = arr[i];
    } else {
      arr[i] !== hash[abs] && delete hash[abs];
    }
  }

  return Object.values(hash)[0];
}

console.log(solve([-4, 1, -3, -1, 2, -2, 4, -3, -3]));

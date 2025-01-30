// Form The Minimum
// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

// Examples
// [1, 3, 1] ==> 13
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679

function minValue(values) {
  let hash = {};
  let arr = [];
  let result = "";

  for (let i = 0; i < values.length; i++) {
    if (!hash[values[i]]) {
      hash[values[i]] = values[i];
      arr.push(values[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return Number(result);
}

console.log(minValue([4, 1, 3, 1]));
// console.log(minValue([5, 6, 9, 9, 7, 6, 4]));

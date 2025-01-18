// Find the stray number

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let num = {};
  for (let n of numbers) {
    num[n] = (num[n] || 0) + 1;
  }

  for (let key in num) {
    if (num[key] === 1) {
      return Number(key);
    }
  }
}

function stray2(numbers) {
  return numbers.find(
    (num) => numbers.indexOf(num) === numbers.lastIndexOf(num)
  );
}

console.log(stray([4, 2, 4, 4, 4]));
console.log(stray2([4, 2, 4, 4, 4]));

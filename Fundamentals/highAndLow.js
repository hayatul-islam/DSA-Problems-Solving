// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  const nums = numbers.split(" ");

  let high = nums[0];
  let low = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > high) {
      high = nums[i];
    }

    if (nums[i] < low) {
      low = nums[i];
    }
  }

  return `${high} ${low}`;
}

function highAndLow2(numbers) {
  numbers = numbers.split(" ");
  const high = Math.max(...numbers);
  const low = Math.min(...numbers);

  return `${high} ${low}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow2("1 2 3 4 5"));

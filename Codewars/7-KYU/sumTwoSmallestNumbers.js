// Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(arr) {
  let firstLowest = Infinity;
  let secondLowest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstLowest) {
      secondLowest = firstLowest;
      firstLowest = arr[i];
    } else if (arr[i] < secondLowest) {
      secondLowest = arr[i];
    }
  }

  return firstLowest + secondLowest;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

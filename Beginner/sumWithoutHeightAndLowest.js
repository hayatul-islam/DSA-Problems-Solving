// Sum without highest and lowest number

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(arr) {
  if (!Array.isArray(arr) && arr.length < 2) return 0;

  const max = Math.max(...arr);
  const low = Math.min(...arr);

  return arr.reduce((sum, n) => {
    n === max ? (n = 0) : n === low ? (n = 0) : n;
    return sum + n;
  }, 0);
}

function sumArray2(arr) {
  if (!Array.isArray(arr) && arr.length < 2) return 0;

  const max = Math.max(...arr);
  const low = Math.min(...arr);

  const total = arr.reduce((sum, n) => sum + n, 0);
  return total - low - max;
}

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray2([6, 2, 1, 8, 10]));

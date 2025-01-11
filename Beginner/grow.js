// Beginner - Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  return x.reduce((sum, v) => sum * v, 1);
}

function grow2(x) {
  return eval(x.join("*"));
}

console.log(grow([1, 2, 3, 4]));
console.log(grow2([1, 2, 3, 4]));

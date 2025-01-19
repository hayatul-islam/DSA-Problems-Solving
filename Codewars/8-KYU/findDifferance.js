// Difference of Volumes of Cuboids

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
  let totalA = 1;
  let totalB = 1;

  for (let n of a) {
    totalA *= n;
  }

  for (let n of b) {
    totalB *= n;
  }

  return Math.abs(totalA - totalB);
}

function findDifference2(a, b) {
  return Math.abs(a.reduce((t, n) => t * n, 1) - b.reduce((t, n) => t * n, 1));
}

console.log(findDifference([5, 19, 15], [17, 15, 9]));
console.log(findDifference2([5, 19, 15], [17, 15, 9]));
console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference2([3, 2, 5], [1, 4, 4]));

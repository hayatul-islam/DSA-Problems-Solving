// Small enough? - Beginner

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(arr, limit) {
  let isSmallEnough = true;
  for (let i = 0; i < arr.length; i++) {
    if (limit < arr[i]) {
      isSmallEnough = false;
    }
  }
  return isSmallEnough;
}

function smallEnough2(arr, limit) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) {
      return false;
    }
  }
  return true;
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 115], 100));
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));

console.log(smallEnough2([78, 117, 110, 99, 104, 117, 115], 100));
console.log(smallEnough2([101, 45, 75, 105, 99, 107], 107));

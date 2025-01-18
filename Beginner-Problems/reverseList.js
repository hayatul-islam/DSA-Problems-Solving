// Reverse List Order

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {
  const result = [];
  for (let i = list.length - 1; i >= 0; i--) {
    result.push(list[i]);
  }
  return result;
}

function reverseList2(list) {
  const result = [];
  for (const v of list) {
    result.unshift(v);
  }
  return result;
}

function reverseList3(list) {
  return list.reverse();
}

console.log(reverseList([1, 2, 3, 4]));
console.log(reverseList2([1, 2, 3, 4]));
console.log(reverseList3([1, 2, 3, 4]));

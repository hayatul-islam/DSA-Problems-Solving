// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(str) {
  let words = str.split(" ");
  let minLength = Infinity;

  for (let word of words) {
    if (word.length < minLength) {
      minLength = word.length;
    }
  }

  return minLength;
}

function findShort2(str) {
  return str
    .split(" ")
    .reduce((min, word) => Math.min(min, word.length), Infinity);
}

console.log(findShort("Shortest Word"));
console.log(findShort2("Shortest Word"));

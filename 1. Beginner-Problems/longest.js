// Two to One
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  const seen = {};
  const uniques = [];
  const combined = s1 + s2;

  for (let char of combined) {
    if (!seen[char]) {
      seen[char] = true;
      uniques.push(char);
    }
  }

  // sort the unique characters
  for (let i = 0; i < uniques.length; i++) {
    for (let j = 0; j < uniques.length - 1 - i; j++) {
      if (uniques[j] > uniques[j + 1]) {
        [uniques[j], uniques[j + 1]] = [uniques[j + 1], uniques[j]];
      }
    }
  }

  return uniques.join("");
}

function longest2(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  let seen = {};
  for (let s of str.toLowerCase()) {
    if (seen[s]) {
      return false;
    }

    seen[s] = true;
  }

  return true;
}

console.log(isIsogram("aba"));
console.log(isIsogram("Dermatoglyphics"));

// Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let countX = 0;
  let countO = 0;

  for (const s of str.toLowerCase()) {
    s === "x" ? countX++ : s === "o" ? countO++ : "";
  }
  return countX === countO;
}

function XO2(str) {
  return (
    (str = str.toLowerCase()), str.split("o").length === str.split("x").length
  );
}

console.log(XO("ooxx"));
console.log(XO2("ooxx"));

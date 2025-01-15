// Is the string uppercase?

// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function () {
  return this.toString()
    .split("")
    .every((char) => {
      return char === char.toUpperCase();
    });
};

String.prototype.isUpperCase2 = function () {
  return this.toString() === this.toUpperCase();
};

console.log("HE".isUpperCase());
console.log("HE".isUpperCase2());

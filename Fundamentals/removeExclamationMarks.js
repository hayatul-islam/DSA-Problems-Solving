// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(str) {
  return str.split("!").join("");
}

function removeExclamationMarks2(str) {
  return str.replace(/!/g, "");
}

function removeExclamationMarks3(str) {
  return str.replaceAll("!", "");
}

console.log(removeExclamationMarks("Hello World!"));
console.log(removeExclamationMarks2("Hello World!"));
console.log(removeExclamationMarks3("Hello World!"));

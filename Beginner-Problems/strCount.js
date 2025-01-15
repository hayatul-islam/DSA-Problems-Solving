// All Star Code Challenge #18
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
//  In languages with no distinct character data type, the second argument will be a string of length 1

function strCount(str, letter) {
  return str.split(letter).length - 1;
}

function strCount2(str, letter) {
  const matches = str.match(new RegExp(letter, "g"));
  return matches ? matches.length : 0;
}

console.log(strCount("Hello", "o"));

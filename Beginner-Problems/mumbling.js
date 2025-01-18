// Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
    if (i < s.length - 1) {
      result += "-";
    }
  }

  return result;
}

console.log(accum("abcdd"));

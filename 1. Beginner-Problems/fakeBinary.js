// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBinary(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      result += 0;
    } else {
      result += 1;
    }
  }

  return result;
}

function fakeBinary2(x) {
  return x
    .split("")
    .map((d) => (d < 5 ? "0" : "1"))
    .join("");
}

function fakeBinary3(x) {
  return [...x].reduce((pre, curr) => pre + (curr < 5 ? "0" : "1"), "");
}

console.log(fakeBinary("4543265622"));
console.log(fakeBinary3("4543265622"));

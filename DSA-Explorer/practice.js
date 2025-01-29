function correctPolishLetters(string) {
  const letters = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  let word = "";
  for (let s of string) {
    if (letters[s]) {
      word += letters[s];
    } else {
      word += s;
    }
  }

  return word;
}

// console.log(correctPolishLetters("Jędrzej Błądziński"));

function solve(arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let abs = Math.abs(arr[i]);

    if (!hash[abs]) {
      hash[abs] = arr[i];
    } else {
      arr[i] !== hash[abs] && delete hash[abs];
    }
  }

  return Object.values(hash)[0];
}

console.log(solve([-4, 1, -3, -1, 2, -2, 4, -3, -3]));

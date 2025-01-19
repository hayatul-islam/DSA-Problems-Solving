// Disemvowel Trolls

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let result = "";
  for (const s of str) {
    if (!"aeiouAEIOU".includes(s)) result += s;
  }
  return result;
}

function disemvowel2(str) {
  let result = "";
  for (let s of str) {
    /[aeiou]/.test(s) ? "" : (result += s);
  }

  return result;
}

function disemvowel3(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(disemvowel("Hello"));
console.log(disemvowel2("Hello"));
console.log(disemvowel3("Hello"));

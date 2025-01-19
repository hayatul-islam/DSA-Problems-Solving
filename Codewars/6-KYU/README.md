### 1. Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

```javascript
Examples (Input ==> Output):
"abc a" ==> "abc"
"abcd Z" ==> "Z"

function solution(x) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function high(x) {
  const alphabetValue = {};
  for (let i = 1; i <= 26; i++) {
    alphabetValue[String.fromCharCode(96 + i)] = i;
  }

  const words = x.split(" ");
  let sumArr = [];

  for (let i = 0; i < words.length; i++) {
    let total = 0;
    for (let s of words[i].toLowerCase()) {
      total += alphabetValue[s];
    }
    sumArr.push(total);
  }

  let highestScore = 0;
  let heightWord = "";
  for (let i = 0; i < sumArr.length; i++) {
    if (sumArr[i] > highestScore) {
      highestScore = sumArr[i];
      heightWord = words[i];
    }
  }

  return heightWord;
}

function high2(x) {
  let heightScore = 0;
  let heightWord = "";

  let currentScore = 0;
  let currentWord = "";

  for (let i = 0; i <= x.length; i++) {
    const char = x[i];

    if (char === " " || i === x.length) {
      if (currentScore > heightScore) {
        heightScore = currentScore;
        heightWord = currentWord;
      }
      currentScore = 0;
      currentWord = "";
    } else {
      currentWord += char;
      currentScore += char.toLowerCase().charCodeAt(0) - 96;
    }
  }

  return heightWord;
}

console.log(high("abc a"));
console.log(high("abcd Z"));

console.log(high2("abc a"));
console.log(high2("abcd Z"));
```

</details>

### .

```javascript
Examples (Input ==> Output):
 ==>

function solution() {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript

```

</details>

### .

```javascript
Examples (Input ==> Output):
 ==>

function solution() {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript

```

</details>

### .

```javascript
Examples (Input ==> Output):
 ==>

function solution() {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript

```

</details>

### .

```javascript
Examples (Input ==> Output):
 ==>

function solution() {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript

```

</details>

### .

```javascript
Examples (Input ==> Output):
 ==>

function solution() {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript

```

</details>

### .

```javascript
Examples (Input ==> Output):
 ==>

function solution() {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript

```

</details>

### .

```javascript
Examples (Input ==> Output):
 ==>

function solution() {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript

```

</details>

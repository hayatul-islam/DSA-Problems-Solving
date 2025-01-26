### 1. Two Sum

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: https://leetcode.com/problems/two-sum/

```javascript
Examples (Input ==> Output):
[1, 2, 3], 4 ==> [0, 2] or [2, 0]
[3, 2, 4], 6 ==> [1, 2] or [2, 1]

function solution(numbers, target) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      const sum = numbers[i] + numbers[j + i + 1];
      if (sum === target) {
        return [i, j + i + 1];
      }
    }
  }
}

function twoSum2(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([3, 2, 4, 5], 6));

console.log(twoSum2([1, 2, 3], 40));
console.log(twoSum2([3, 2, 4, 5], 60));
```

</details>

### 2. Highest Scoring Word

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

// optimized
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

### 3. Persistent Bugger.

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

```javascript
Examples (Input ==> Output):
39 ==> 3
999 ==> 4
4 ==> 0

function solution(n) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function persistence(num) {
  let count = 0;
  while (num >= 10) {
    let result = 1;
    for (let n of num.toString()) {
      result *= n;
    }
    num = result;
    count++;
  }

  return count;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
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

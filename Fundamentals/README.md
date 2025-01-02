### 1. String to Array

Write a function to split a string and convert it into an array of words.

```javascript
Examples (Input ==> Output):
"Hello World" ==> ["Hello", "World"]

function stringToArray(string) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function stringToArray(string) {
  return string.split(" ");
}

function stringToArray2(string) {
  return string.trim() ? string.split(" ") : [];
}

console.log(stringToArray("Hello World"));
console.log(stringToArray2("Hello World"));
```

</details>

### 2. Opposite number

Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

```javascript
Examples (Input ==> Output):
12 ==> -12
-12 ==> 12

function oppositeNumber(n) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function oppositeNumber(n) {
  return n * -1;
}

function oppositeNumber2(n) {
  return -n;
}

console.log(oppositeNumber(13));
console.log(oppositeNumber2(-8));
```

</details>

### 3. Simple Multiplication

Multiply a given number by eight if it is even, and by nine if it is odd.

```javascript
Examples (Input ==> Output):
4 ==> 32

function simpleMultiplication(n) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function simpleMultiplication(n) {
  return n * (n % 2 === 0 ? 8 : 9);
}

console.log(simpleMultiplication(5));
console.log(simpleMultiplication(4));
```

</details>

### 4. Square Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

```javascript
Examples (Input ==> Output):
[1, 2, 2] ==> 9

function squareSum(numbers) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
  }
  return sum;
}

function squareSum2(numbers) {
  return numbers.reduce((sum, num) => sum + num ** 2, 0);
}

console.log(squareSum([1, 2, 2]));
console.log(squareSum2([1, 2, 2]));
```

</details>

### 5. Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

```javascript
Examples (Input ==> Output):
"4543265622" ==> "0100011100"

function fakeBinary(x) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
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
console.log(fakeBinary2("4543265622"));
console.log(fakeBinary3("4543265622"));
```

</details>

### 6. Total Points

Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes: our team always plays 10 matches in the championship

```javascript
Examples
Input ==> Output
["3:1", "2:2", "0:1", ...] ==> 4

function totalPoints(matches) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function totalPoints(matches) {
  let total = 0;

  for (let i = 0; i < matches.length; i++) {
    const [x, y] = matches[i].split(":");
    if (x > y) {
      total += 3;
    } else if (y === x) {
      total += 1;
    }
  }
  return total;
}

function totalPoints2(matches) {
  return matches.reduce((total, match) => {
    const [x, y] = match.split(":");
    return total + (x > y ? 3 : x === y ? 1 : 0);
  }, 0);
}

// Example usage:
const results = [
  "3:1",
  "2:2",
  "0:1",
  "4:0",
  "1:1",
  "3:3",
  "2:1",
  "0:0",
  "1:2",
  "3:2",
];

console.log(totalPoints(results));
console.log(totalPoints2(results));
```

</details>

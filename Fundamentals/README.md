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
Examples (Input ==> Output):
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

### 7. Make Uppercase

Write a function which converts the input string to uppercase.

```javascript
Examples (Input ==> Output):
"hello" ==> "HELLO"

function makeUppercase(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function makeUppercase(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt();
    const char =
      charCode >= 97 && charCode <= 122
        ? String.fromCharCode(charCode - 32)
        : str[i];

    output += char;
  }
  return output;
}

function makeUppercase2(str) {
  return str.toUpperCase();
}

console.log(makeUppercase("hello"));
console.log(makeUppercase2("hello"));
```

</details>

### 8. Hero

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

```javascript
Examples (Input ==> Output):
10, 5 ==> true
7, 4 ==> false

function hero(bullets, dragons) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

function hero2(bullets, dragons) {
  return Math.floor(bullets / 2) >= dragons;
}

console.log(hero(10, 5));
console.log(hero2(7, 4));
```

</details>

### 9. Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

```javascript
Examples (Input ==> Output):
"Hello" ==> "ell"

function removeChar(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function removeChar(str) {
  let char = "";
  for (let i = 1; i < str.length - 1; i++) {
    char += str[i];
  }
  return char;
}

function removeChar2(str) {
  return str.slice(1, -1);
}

console.log(removeChar("Hello world"));
```

</details>

### 10. Century from year

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

```javascript
Examples (Input ==> Output):
1601 ==> 17
2000 ==> 20
2742 ==> 28

function century(year) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1201));
console.log(century(1700));
console.log(century(599));
```

</details>

-------------------- 7 kyu -----------------------

### 11. A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

```javascript
Examples (Input ==> Output):
-1  ==>  false
0  ==>  true
3  ==>  false
4  ==>  true
25  ==>  true

function isSquare(n) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function isSquare(n) {
  if (n < 0) {
    return false;
  }

  const sqrtN = Math.floor(Math.sqrt(n));
  return sqrtN * sqrtN === n;
}

function isSquare2(n) {
  return Math.sqrt(n) % 1 === 0;
}

function isSquare3(n) {
  return Number.isInteger(Math.sqrt(n));
}

console.log(isSquare3(1));
console.log(isSquare3(24));
```

</details>

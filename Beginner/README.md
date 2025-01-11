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

### 5. Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"

```javascript
Examples (Input ==> Output):
80, 1.8 ==> "Normal"

function calculateBmi(weight, height) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function calculateBmi(weight, height) {
  const bmi = weight / height ** 2;
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(calculateBmi(80, 1.8));
```

</details>

### 6. Fake Binary

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

### 7. Total Points

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

### 8. Make Uppercase

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

### 9. Hero

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

### 10. Remove First and Last Character

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

### 11. Century from year

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

### 12. Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

```javascript
Examples (Input ==> Output):
[1, 2, -3, -4, 5, -6, 7] ==> [4, -13]

function countPositivesSumNegatives(arr) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function countPositivesSumNegatives(arr) {
  if (!arr || arr.length === 0) return [];

  let positives = 0;
  let negatives = 0;

  for (const num of arr) {
    if (num > 0) {
      positives++;
    } else if (num < 0) {
      negatives += num;
    }
  }

  return [positives, negatives];
}

console.log(countPositivesSumNegatives([1, 2, -3, -4, 5, -6, 7]));
```

</details>

### 13. Calculate average

Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.

```javascript
Examples (Input ==> Output):
[1, 2, 3] ==> 2

function calculateAverage(arr) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((total, val) => total + val, 0);
  return sum / arr.length;
}

function calculateAverage2(arr) {
  return arr.length > 0
    ? arr.reduce((total, val) => total + val, 0) / arr.length
    : 0;
}

console.log(calculateAverage([1, 2, 3, 4]));
console.log(calculateAverage2([1, 2, 3, 4]));
```

</details>

### 14. Calculate Litters

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

```javascript
Examples (Input ==> Output):
3 ==> 1
6.7 ==> 3

function litters(time) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function litters(time) {
  return Math.floor(time * 0.5);
}

function litters2(time) {
  return Math.floor(time / 2);
}

// x >> n ===> Math.floor(x / 2^n)
function litters3(time) {
  return time >> 1; // Math.floor(time / 2^1)
}

console.log(litters(3));
console.log(litters2(7));
console.log(litters3(7));
```

</details>

### 15. Counting sheep..

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

Hint: Don't forget to check for bad values like null/undefined

```javascript
Examples (Input ==> Output):
[true, false, true] ==> 2

function countSheep(arr) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function countSheep(arr) {
  return arr.filter((sheep) => !!sheep).length;
}

function countSheep2(arr) {
  return arr.reduce((acc, curr) => acc + !!curr, 0);
}

console.log(countSheep([false, true, true, false]));
console.log(countSheep2([false, true, true, false]));
```

</details>

### 16. Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

```javascript
Examples (Input ==> Output):
35231 ==> [1,3,2,5,3]
0 ==> [0]

function digitize(arr) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

function digitize2(n) {
  let result = [];
  while (n > 0) {
    result.push(n % 10);
    n = Math.floor(n / 10);
  }

  return result.length > 0 ? result : [0];
}

console.log(digitize(4556));
console.log(digitize2(4556));
```

</details>

### 17. Remove String Spaces

Write a function that removes the spaces from the string, then return the resultant string.

```javascript
Examples (Input ==> Output):
"8aaaaa dddd     r " ===> "8aaaaaddddr"

function noSpace(x) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function noSpace(x) {
  return x.split(" ").join("");
}

function noSpace2(x) {
  return x.replace(/\s+/g, "");
}

console.log(noSpace("I l o v e     Js"));
console.log(noSpace2("I l o v e     Js"));
```

</details>

### 18. Removing Elements

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

None of the arrays will be empty, so you don't have to worry about that!

```javascript
Examples (Input ==> Output):
[1,2,3,4,5] ===> [1,3,5]

function removeEveryOther(arr) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function removeEveryOther(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    i % 2 === 0 && newArr.push(arr[i]);
  }

  return newArr;
}

function removeEveryOther2(arr) {
  return arr.filter((_, index) => index % 2 === 0);
}

console.log(removeEveryOther([1, 2, 3]));
console.log(removeEveryOther2([1, 2, 3]));
```

</details>

### 19. Area or Perimeter

You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

```javascript
Examples (Input ==> Output):
6, 10 ==> 32
3, 3 ==> 9

function areaOrPerimeter(length, width) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
const areaOrPerimeter = function (length, width) {
  return length === width ? length * width : 2 * (length + width);
};

console.log(areaOrPerimeter(6, 10));
```

</details>

### 20. Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.
It should look like this:

```javascript
Examples (Input ==> Output):
Sam Harris ==> S.H
patrick feeney ==> P.F

function abbrevName(name) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function abbrevName(name) {
  const words = name.split(" ");
  return `${words[0][0].toUpperCase()}.${words[1][0].toUpperCase()}`;
}

function abbrevName2(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

console.log(abbrevName("Hello World"));
console.log(abbrevName2("Hello World"));
```

</details>

### 21. Twice as old

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

```javascript
Examples (Input ==> Output):
36, 7 ==> 22

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

console.log(twiceAsOld(36, 7));
```

</details>

### 22. How good are you really?

There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

```javascript
Examples (Input ==> Output):
[3, 2], 5 ==> true
[5, 7], 5 ==> false

function betterThanAverage(classPoints, yourPoints) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function betterThanAverage(classPoints, yourPoints) {
  const classAvg =
    classPoints.reduce((sum, score) => sum + score, 0) / classPoints.length;
  return yourPoints > classAvg;
}

function betterThanAverage2(classPoints, yourPoints) {
  return (
    yourPoints >
    classPoints.reduce((sum, score) => sum + score, 0) / classPoints.length
  );
}

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage2([2, 3], 5));
```

</details>

### 23. Will there be enough space?

The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

```javascript
Examples (Input ==> Output):
100, 60, 50 ==> 10
20, 5, 5    ==> 0
10, 5, 5    ==> 0

function enough2(cap, on, wait) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function enough(cap, on, wait) {
  const space = on + wait - cap;
  return space > 0 ? space : 0;
}

function enough2(cap, on, wait) {
  return Math.max(0, on + wait - cap);
}

console.log(enough2(100, 60, 50));
console.log(enough2(10, 5, 5));
console.log(enough2(20, 5, 5));
```

</details>

### 24. Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

```javascript
Examples (Input ==> Output):
"Hello World!" ==> "Hello World"

function removeExclamationMarks(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
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
```

</details>

### 25. Will you make it?

You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.

```javascript
Examples (Input ==> Output):
50, 25, 2  ==> true
100, 50, 1 == > false

function zeroFuel(distanceToPump, mpg, fuelLeft) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return mpg * fuelLeft >= distanceToPump;
}

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
```

</details>

### 26. All Star Code Challenge #18

Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1

```javascript
Examples (Input ==> Output):
("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0

function strCount(str, letter) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function strCount(str, letter) {
  return str.split(letter).length - 1;
}

function strCount2(str, letter) {
  const matches = str.match(new RegExp(letter, "g"));
  return matches ? matches.length : 0;
}

console.log(strCount("Hello", "o"));
```

</details>

### 27. Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Assumptions
You can assume that you are only given words.
You cannot assume the size of the array.
You can assume that you do get an array.
What We're Testing
We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.

Disclaimer
This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line.

```javascript
Examples (Input ==> Output):
['hello', 'world']  =>  'hello world'

function smash(words) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function smash(words) {
  return words.join(" ");
}

console.log(smash(["Hello", "World"]));
```

</details>

### 28. altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.

```javascript
Examples (Input ==> Output):
"hello world".toAlternatingCase() ==> "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() ==> "hello world"
"hello WORLD".toAlternatingCase() ==> "HELLO world"
"HeLLo WoRLD".toAlternatingCase() ==> "hEllO wOrld"
"12345".toAlternatingCase()       ==> "12345"

String.prototype.toAlternatingCase = function () {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
};

console.log("hello world".toAlternatingCase());
console.log("HELLO WORLD".toAlternatingCase());
console.log("HeLLo WoRLD".toAlternatingCase());
console.log("12345".toAlternatingCase());
```

</details>

-------------------- 7 kyu -----------------------

### . A square of squares

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

### . Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

```javascript
Examples (Input ==> Output):
"find short"  ==>  4


function findShort(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function findShort(str) {
  let words = str.split(" ");
  let minLength = Infinity;

  for (let word of words) {
    if (word.length < minLength) {
      minLength = word.length;
    }
  }

  return minLength;
}

function findShort2(str) {
  return str
    .split(" ")
    .reduce((min, word) => Math.min(min, word.length), Infinity);
}

console.log(findShort("Shortest Word"));
console.log(findShort2("Shortest Word"));
```

</details>

### . Sum of the first nth term of Series

Sum of the first nth term of Series
Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

You will need to figure out the rule of the series to complete this.

Rules
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return "0.00".

You will only be given Natural Numbers as arguments.

```javascript
Examples (Input ==> Output):
1 ==> 1 --> "1.00"
2 ==> 1 + 1/4 --> "1.25"
5 ==> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


function seriesSum(n) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function seriesSum(n) {
  if (n === 0) return "0.00";
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
}

function seriesSum2(n, s = 0) {
  return n ? seriesSum2(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2);
}

console.log(seriesSum(5));
console.log(seriesSum2(5));
```

</details>

### . Sum of odd numbers

Given the triangle of consecutive odd numbers:

                 1
              3     5
           7     9    11
       13    15    17    19
    21    23    25    27    29

Calculate the sum of the numbers in the nth row of this triangle (starting at index

```javascript
Examples (Input ==> Output):
1 ==> 1
2 ==> 3 + 5 = 8


function sumOddNumbers(n) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function sumOddNumbers(n) {
  return n ** 3;
}

function sumOddNumbers2(n) {
  return n * n * n;
}

function sumOddNumbers3(n) {
  return Math.pow(n, 3);
}

console.log(sumOddNumbers(3));
console.log(sumOddNumbers2(3));
console.log(sumOddNumbers3(3));
```

</details>

### . Find the next perfect square!

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

```javascript
Examples (Input ==> Output):
121 ==> 144
625 ==> 676
114 ==> -1


function findNextSquare(sq) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function findNextSquare(sq) {
  const root = Math.sqrt(sq);
  return Number.isInteger(root) ? Math.pow(root + 1, 2) : -1;
}

function findNextSquare2(sq) {
  const root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare2(121));
```

</details>

### . Is this a triangle?

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

```javascript
Examples (Input ==> Output):
1,2,2 ==> true
4,2,3 ==> true
2,2,2 ==> true
1,2,3 ==> false
-5,1,3 ==> false


function isTriangle(a,b,c) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function isTriangle2(a, b, c) {
  return Math.max(a, b, c) < (a + b + c) / 2;
}

console.log(isTriangle(1, 2, 2));
console.log(isTriangle2(1, 2, 2));
```

</details>

### . Odd or Even?

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).

Have fun!

```javascript
Examples (Input ==> Output):
[0, 1, 4] ==> "odd"
[0, -1, -5] ==> "even"

function oddOrEven(arr) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function oddOrEven(arr) {
  const sum = arr.reduce((s, n) => s + n, 0);
  return sum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0, 1, 4]));
```

</details>

### . Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

```javascript
Examples (Input ==> Output):
"1 2 3 4 5 ==> "5 1"
"1 2 -3 4 5" ==> "5 -3"

function highAndLow(numbers) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function highAndLow(numbers) {
  const nums = numbers.split(" ");

  let high = nums[0];
  let low = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > high) {
      high = nums[i];
    }

    if (nums[i] < low) {
      low = nums[i];
    }
  }

  return `${high} ${low}`;
}

function highAndLow2(numbers) {
  numbers = numbers.split(" ");
  const high = Math.max(...numbers);
  const low = Math.min(...numbers);

  return `${high} ${low}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow2("1 2 3 4 5"));
```

</details>

### . Growth of a Population

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

At the end of the first year there will be:
1000 + 1000 \* 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be:
1070 + 1070 \* 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 \* 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.

```javascript
Examples (Input ==> Output):
1500, 5, 100, 5000 ==> 15

function nbYear(p0, percent, aug, p) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function nbYear(p0, percent, aug, p) {
  let years = 0;
  percent = percent / 100;

  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * percent + aug);
    years++;
  }

  return years;
}

console.log(nbYear(1500, 5, 100, 5000));
```

</details>

### . Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

```javascript
Examples (Input ==> Output):
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("This is an example!"));
```

</details>

### . Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

```javascript
Examples (Input ==> Output):
145263    ==> 54421
123456789 ==> 987654321

function descendingOrder(n) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function descendingOrder(n) {
  let digits = n.toString().split("");

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length - i - 1; j++) {
      if (digits[j] < digits[j + 1]) {
        // Swap digits[j] and digits[j + 1]
        let temp = digits[j];
        digits[j] = digits[j + 1];
        digits[j + 1] = temp;
      }
    }
  }

  return parseInt(digits.join(""), 10);
}

function descendingOrder2(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join(""),
    10
  );
}

console.log(descendingOrder(125678943));
console.log(descendingOrder2(125678943));
```

</details>

### . Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input strings will only contain letters.
Note: keep the original order of the names in the output.

```javascript
Examples (Input ==> Output):
["Ryan", "Kieran", "Jason", "Yous"] ==> ["Ryan", "Yous"]
["Peter", "Stephen", "Joe"]         ==> []

function friend(friends) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function friend(friends) {
  return friends.filter((friend) => friend.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
```

</details>

### . List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

```javascript
Examples (Input ==> Output):
[1,2,'a','b']    ==> [1,2]
[1,'a','b',0,15,-7] ==> [1,0,15]

function filterList(list) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function filterList(list) {
  return list.filter((v) => typeof v === "number" && v >= 0);
}

console.log(filterList([1, 2, "a", 0, "b", -9]));
```

</details>

### . Printer Errors

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

```javascript
Examples (Input ==> Output):
"aaabbbbhaijjjm"         => "0/14"
"aaaxbbbbyyhwawiwjjjwwm" => "8/22"

function printerError(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function printerError(str) {
  const allowColors = /^[a-m]+$/;
  const errors = str.split("").filter((char) => !allowColors.test(char)).length;
  return `${errors}/${str.length}`;
}

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
```

</details>

### . Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

```javascript
Examples (Input ==> Output):
9119 ==> 811181

function squareDigits(num) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function squareDigits(num) {
  let result = "";
  for (const n of String(num)) {
    result += n * n;
  }
  return result;
}

function squareDigits2(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((n) => n * n)
      .join("")
  );
}

console.log(squareDigits(9119));
console.log(squareDigits2(9119));
```

</details>

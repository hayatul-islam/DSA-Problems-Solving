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

### 29. Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

```javascript
Examples (Input ==> Output):
('+', 4, 7)   ==> 11
('-', 15, 18) ==> -3
('*', 5, 5)   ==> 25
('/', 49, 7)  ==> 7

function basicOp(operation, value1, value2) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}

function basicOp2(operation, value1, value2) {
  return eval(`${value1} ${operation} ${value2}`);
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 4, 7));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
```

</details>

### 30. Beginner - Reduce but Grow

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

```javascript
Examples (Input ==> Output):
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function grow(x) {
  return x.reduce((sum, v) => sum * v, 1);
}

function grow2(x) {
  return eval(x.join("*"));
}

console.log(grow([1, 2, 3, 4]));
console.log(grow2([1, 2, 3, 4]));
```

</details>

### 31. Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Note
If there is nothing to sum, the sum is default to 0.

```javascript
Examples (Input ==> Output):
[1, -4, 7, 12] ==> 20

function positiveSum(arr) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function positiveSum(arr) {
  return arr.reduce((sum, n) => sum + (n > 0 && n), 0);
}

console.log(positiveSum([1, -4, 7, 12]));
```

</details>

### 32. Sum without highest and lowest number

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

```javascript
Examples (Input ==> Output):
[1, -4, 7, 12]  ==> 20

function positiveSum(arr) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function sumArray(arr) {
  if (!Array.isArray(arr) && arr.length < 2) return 0;

  const max = Math.max(...arr);
  const low = Math.min(...arr);

  return arr.reduce((sum, n) => {
    n === max ? (n = 0) : n === low ? (n = 0) : n;
    return sum + n;
  }, 0);
}

function sumArray2(arr) {
  if (!Array.isArray(arr) && arr.length < 2) return 0;

  const max = Math.max(...arr);
  const low = Math.min(...arr);

  const total = arr.reduce((sum, n) => sum + n, 0);
  return total - low - max;
}

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray2([6, 2, 1, 8, 10]));
```

</details>

### 33. Is the string uppercase?

Task
Create a method to see whether the string is ALL CAPS.

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

```javascript
Examples (Input ==> Output):
"c" ==> false
"C"==> true
"hello I AM HAYATUL" ==> false
"HELLO I AM HAYATUL" ==> true

String.prototype.isUpperCase = function () {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
String.prototype.isUpperCase = function () {
  return this.toString()
    .split("")
    .every((char) => {
      return char === char.toUpperCase();
    });
};

String.prototype.isUpperCase2 = function () {
  return this.toString() === this.toUpperCase();
};

console.log("HE".isUpperCase());
console.log("HE".isUpperCase2());
```

</details>

### 34. If you can't sleep, just count sheeps!!

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

```javascript
Examples (Input ==> Output):
0 ==> ""
2 ==> "1 sheep...2 sheep..."

 function countSheep () {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function countSheep(num) {
  let count = "";
  for (let i = 1; i <= num; i++) {
    count += `${i} sheep...`;
  }

  return count;
}

console.log(countSheep(5));
```

</details>

### 35. Quarter of the year

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12

```javascript
Examples (Input ==> Output):
3  ==> 1
8  ==> 3
11 ==> 4

 function quarterOf (month) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));
```

</details>

### 36. Sort and Star

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "\*\*\*" between each of its letters.

You should not remove or add elements from/to the array.

```javascript
Examples (Input ==> Output):
 ["banana", "apple", "cherry"] ==> "a***p***p***l***e"

function solution(s) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
```

</details>

### 37. Third Angle of a Triangle

You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle

```javascript
Examples (Input ==> Output):
(30, 60) ==> 90
(43, 78) ==> 59

function solution(a, b) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function otherAngle(a, b) {
  return 180 - (a + b);
}

console.log(otherAngle(30, 60));
console.log(otherAngle(43, 78));
```

</details>

### 38. Count by X

Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

```javascript
Examples (Input ==> Output):
x = 1, n = 10 ==> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  ==> [2,4,6,8,10]

function solution(x, n) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));
console.log(countBy(3, 5));
```

</details>

### 39. Grasshopper - Check for factor

This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 \* 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.

```javascript
Examples (Input ==> Output):
 10, 2 ==> true
 63, 7 ==> true

function solution(base, factor) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false;
}

console.log(checkForFactor(10, 2));
console.log(checkForFactor(63, 7));
console.log(checkForFactor(2450, 5));
```

</details>

### 40. Sum The Strings

Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

```javascript
Examples (Input ==> Output):
"4",  "5" ==> "9"
"34", "5" ==> "39"
"", ""    ==> "0"
"2", ""   ==> "2"
"-5", "3" ==> "-2"

function solution(a, b) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function sumStr(a, b) {
  return (Number(a) + Number(b)).toString();
}

console.log(sumStr("4", "5"));
console.log(sumStr("", ""));
console.log(sumStr("-5", "3"));
```

</details>

### 41. Grasshopper - Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

```javascript
Examples (Input ==> Output):
2 ==> 3 (1 + 2)
8 ==> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

function solution(num) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(summation(8));
```

</details>

### 42. Opposites Attract

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

```javascript
Examples (Input ==> Output):
 0, 1, ==> true
 4, 1, ==> true
 4, 4, ==> false

function solution(flower1, flower2) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function loveFunc(flower1, flower2) {
  const evenFlower1 = flower1 % 2 === 0;
  const evenFlower2 = flower2 % 2 === 0;

  if (evenFlower1 && evenFlower2) {
    return false;
  } else if (!evenFlower1 && !evenFlower2) {
    return false;
  } else {
    return true;
  }
}

function loveFunc2(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

console.log(loveFunc2(1, 2));
console.log(loveFunc2(2, 2));
console.log(loveFunc2(0, 0));
console.log(loveFunc2(0, 1));
```

</details>

### 43. Transportation on vacation

After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

```javascript
Examples (Input ==> Output):
2 ==> 80
3 ==> 100
7 ==> 230

function solution(d) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function rentalCarCost(d) {
  const dis = d >= 7 ? 50 : d >= 3 ? 20 : 0;
  return 40 * d - dis;
}

console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(7));
console.log(rentalCarCost(10));
```

</details>

### 44. Difference of Volumes of Cuboids

In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.

```javascript
Examples (Input ==> Output):
[5, 19, 15], [17, 15, 9] ==> 870
[3, 2, 5], [1, 4, 4] ==> 14

function solution() {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function findDifference(a, b) {
  let totalA = 1;
  let totalB = 1;

  for (let n of a) {
    totalA *= n;
  }

  for (let n of b) {
    totalB *= n;
  }

  return Math.abs(totalA - totalB);
}

function findDifference2(a, b) {
  return Math.abs(a.reduce((t, n) => t * n, 1) - b.reduce((t, n) => t * n, 1));
}

console.log(findDifference([5, 19, 15], [17, 15, 9]));
console.log(findDifference2([5, 19, 15], [17, 15, 9]));
console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference2([3, 2, 5], [1, 4, 4]));
```

</details>

### 45. Reverse List Order

In this kata you will create a function that takes in a list and returns a list with the reverse order.

```javascript
Examples (Input ==> Output):
[1, 2, 3, 4]  ==> [4, 3, 2, 1]
[9, 2, 0, 7]  ==> [7, 0, 2, 9]

function solution(list) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function reverseList(list) {
  const result = [];
  for (let i = list.length - 1; i >= 0; i--) {
    result.push(list[i]);
  }
  return result;
}

function reverseList2(list) {
  const result = [];
  for (const v of list) {
    result.unshift(v);
  }
  return result;
}

function reverseList3(list) {
  return list.reverse();
}

console.log(reverseList([1, 2, 3, 4]));
console.log(reverseList2([1, 2, 3, 4]));
console.log(reverseList3([1, 2, 3, 4]));
```

</details>

### 46. Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

```javascript
Examples (Input ==> Output):
"String"      ==> "SSttrriinngg"
"Hello World" ==> "HHeelllloo  WWoorrlldd"
"1234!_ "     ==> "11223344!!__  "

function solution(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].repeat(2);
  }
  return result;
}

console.log(doubleChar("String"));
```

</details>

### 47. Polish alphabet

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

```javascript
Examples (Input ==> Output):
"Jędrzej Błądziński"  ==>  "Jedrzej Bladzinski"

function solution(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
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

console.log(correctPolishLetters("Jędrzej Błądziński"));
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

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

-------------------- 7 kyu -----------------------

### 22. A square of squares

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

### 23. Shortest Word

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

### 24. Sum of the first nth term of Series

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

### 25. Sum of odd numbers

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

### 26. Find the next perfect square!

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

### 27. Is this a triangle?

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

### 28. Odd or Even?

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

### 29. Highest and Lowest

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

### 30. Growth of a Population

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

### 31. Reverse words

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

### 32. Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

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

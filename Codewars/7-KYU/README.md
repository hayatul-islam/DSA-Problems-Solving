### 1. A square of squares

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

### 2. Shortest Word

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

### 3. Sum of the first nth term of Series

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

### 4. Sum of odd numbers

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

### 5. Find the next perfect square!

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

### 6. Is this a triangle?

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

### 7. Odd or Even?

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

### 8. Highest and Lowest

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

### 9. Growth of a Population

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

### 10. Reverse words

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

### 11. Descending Order

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

### 12. Friend or Foe?

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

### 13. List Filtering

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

### 14. Printer Errors

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

### 15. Square Every Digit

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

### 16. Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

```javascript
Examples (Input ==> Output):
"ooxx" => true
"xooxx" => false
"ooxXm" => true
"zpzpzpp" => true // when no 'x' and 'o' is present should return true
"zzoo" => false

function XO(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function XO(str) {
  let countX = 0;
  let countO = 0;

  for (const s of str.toLowerCase()) {
    s === "x" ? countX++ : s === "o" ? countO++ : "";
  }
  return countX === countO;
}

function XO2(str) {
  return (
    (str = str.toLowerCase()), str.split("o").length === str.split("x").length
  );
}

console.log(XO("ooxx"));
console.log(XO2("ooxx"));
```

</details>

### 17. Regex validate PIN code

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

```javascript
Examples (Input ==> Output):
"1234"   ==>  true
"12345"  ==>  false
"a234"   ==>  false

function validatePIN(pin) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function validatePIN(pin) {
  const reg = new RegExp(/^[0-9]{4}$|^[0-9]{6}$/);
  return reg.test(pin);
}

function validatePIN2(pin) {
  return /^[0-9]{4}$|^[0-9]{6}$/.test(pin);
}

console.log(validatePIN("2356"));
console.log(validatePIN("a356"));
console.log(validatePIN("235656"));
```

</details>

### 18. Beginner Series #3 Sum of Numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Your function should only return a number, not the explanation about how you get that number

```javascript
Examples (Input ==> Output):
(1, 0) ==> 1 (1 + 0 = 1)
(1, 2) ==> 3 (1 + 2 = 3)
(0, 1) ==> 1 (0 + 1 = 1)
(1, 1) ==> 1 (1 since both are same)
(-1, 0) ==> -1 (-1 + 0 = -1)
(-1, 2) ==> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function getSum(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

function getSum2(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(1, 1));
console.log(getSum(-1, 2));
```

</details>

### 19. String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

```javascript
Examples (Input ==> Output):
"abc", "bc" ==> true
"abc", "d" ==> false

function solution(str, ending) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function solution(str, ending) {
  return str.slice(str.length - ending.length) === ending;
}

function solution2(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abc", "bc"));
console.log(solution2("abc", "bc"));
```

</details>

### 20. Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

```javascript
Examples (Input ==> Output):
[]              ==> []
["a", "b", "c"] ==> ["1: a", "2: b", "3: c"]

function solution(arr) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function solution(arr) {
  return arr.map((line, index) => `${index + 1}: ${line}`);
}

console.log(solution(["a", "b", "c"]));
```

</details>

### 21. Count the divisors of a number

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000, but fixed tests go higher.

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

```javascript
Examples (Input ==> Output):
 4 ==> 3 // we have 3 divisors - 1, 2 and 4
 5 ==> 2
12 ==> 6
30 ==> 8

function solution(n) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(n / i)) count++;
  }
  return count;
}

function getDivisorsCnt2(n) {
  if (n < 1) return 0;

  let count = 0;
  const sqrt = Math.sqrt(n);

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      count++;

      if (i !== n / i) {
        count++;
      }
    }
  }
  return count;
}

function getDivisorsCnt3(n) {
  if (n < 1) return 0;

  let count = 0;
  const sqrt = Math.sqrt(n);

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      n / i === i ? count++ : (count += 2);
    }
  }

  return count;
}

console.log(getDivisorsCnt(5));
console.log(getDivisorsCnt(12));

console.log(getDivisorsCnt2(5));
console.log(getDivisorsCnt2(12));

console.log(getDivisorsCnt3(5));
console.log(getDivisorsCnt3(12));
```

</details>

---

### 22. Sort Numbers

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

```javascript
Examples (Input ==> Output):
 [1, 2, 10, 50, 5] ==> [1,2,5,10,50]
 null              ==> []

function solution() {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function solution(nums) {
  if (!Array.isArray(nums)) return [];
  return nums.sort((a, b) => a - b);
}

function solution2(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}

console.log(solution(null));
console.log(solution([1, 2, 10, 50, 5]));
```

</details>

### 23. Ones and Zeros

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

However, the arrays can have varying lengths, not just limited to 4.

```javascript
Examples (Input ==> Output):
[0, 0, 0, 1] ==> 1
[0, 0, 1, 0] ==> 2
[0, 1, 0, 1] ==> 5
[1, 0, 0, 1] ==> 9
[0, 0, 1, 0] ==> 2
[0, 1, 1, 0] ==> 6
[1, 1, 1, 1] ==> 15
[1, 0, 1, 1] ==> 11

function solution(arr) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
const binaryArrayToNumber = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result * 2 + arr[i];
  }
  return result;
};

const binaryArrayToNumber2 = (arr) => {
  return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber([0, 1, 1, 0]));
console.log(binaryArrayToNumber2([0, 1, 1, 0]));
```

</details>

### 24. Two to One

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

```javascript
Examples (Input ==> Output):
("xyaabbbccccdefww", "xxxxyyyyabklmopq") ==> "abcdefklmopqwxy"

function solution(a, b) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function longest(s1, s2) {
  const seen = {};
  const uniques = [];
  const combined = s1 + s2;

  for (let char of combined) {
    if (!seen[char]) {
      seen[char] = true;
      uniques.push(char);
    }
  }

  // sort the unique characters
  for (let i = 0; i < uniques.length; i++) {
    for (let j = 0; j < uniques.length - 1 - i; j++) {
      if (uniques[j] > uniques[j + 1]) {
        [uniques[j], uniques[j + 1]] = [uniques[j + 1], uniques[j]];
      }
    }
  }

  return uniques.join("");
}

function longest2(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
```

</details>

### 25. Sum of a sequence

Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

This is the first kata in the series:

Sum of a sequence (this kata)
Sum of a Sequence [Hard-Core Version]

```javascript
Examples (Input ==> Output):
2,2,2 ==> 2
2,6,2 ==> 12 (2 + 4 + 6)
1,5,1 ==> 15 (1 + 2 + 3 + 4 + 5)
1,5,3 ==> 5 (1 + 4)

function solution(begin, end, step){
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};

const sequenceSum2 = (begin, end, step) => {
  return begin > end ? 0 : begin + sequenceSum2(begin + step, end, step);
};

console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum2(1, 5, 1));
```

</details>

### 26. Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

```javascript
Examples (Input ==> Output):
"Hello" ==> "Hll"

function solution(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
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
```

</details>

### 27. Binary Addition

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

```javascript
Examples (Input ==> Output):
1, 1 ==> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 ==> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function solution(a, b) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function addBinary(a, b) {
  let sum = a + b;
  let binary = "";
  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }
  return binary;
}

function addBinary2(a, b) {
  const sum = a + b;
  return sum.toString(2);
}

console.log(addBinary(5, 9));
console.log(addBinary2(5, 9));
```

</details>

### 28. Remove the minimum

The museum of incredibly dull things
The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

```javascript
Examples (Input ==> Output):
[1,2,3,4,5], ==> [2,3,4,5]
[5,3,2,1,4], ==> [5,3,2,4]
[2,2,1,2,1], ==> [2,2,2,1]

function solution() {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function removeSmallest(numbers) {
  let minIndex = 0;
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[minIndex] > numbers[i]) {
      minIndex = i;
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (i !== minIndex) {
      result.push(numbers[i]);
    }
  }

  return result;
}

function removeSmallest2(numbers) {
  const minIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, index) => index !== minIndex);
}

console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest2([2, 2, 1, 2, 1]));
console.log(removeSmallest2([1, 2, 3, 4, 5]));
console.log(removeSmallest2([5, 3, 2, 1, 4]));
```

</details>

### 29. Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

```javascript
Examples (Input ==> Output):
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

function solution(numbers) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function stray(numbers) {
  let num = {};
  for (let n of numbers) {
    num[n] = (num[n] || 0) + 1;
  }

  for (let key in num) {
    if (num[key] === 1) {
      return Number(key);
    }
  }
}

function stray2(numbers) {
  return numbers.find(
    (num) => numbers.indexOf(num) === numbers.lastIndexOf(num)
  );
}

console.log(stray([4, 2, 4, 4, 4]));
console.log(stray2([4, 2, 4, 4, 4]));
```

</details>

### 30. Round up to the next multiple of 5

Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.

```javascript
Examples (Input ==> Output):
0    ==>   0
2    ==>   5
3    ==>   5
12   ==>   15
21   ==>   25
30   ==>   30
-2   ==>   0
-5   ==>   -5

function solution(n) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function roundToNext5(n) {
  while (n % 5 !== 0) {
    n++;
  }
  return n;
}

console.log(roundToNext5(2));
console.log(roundToNext5(12));
console.log(roundToNext5(21));
```

</details>

### 31. Mumbling

This time no story, no theory. The examples below show you how to write function accum:

The parameter of accum is a string which includes only letters from a..z and A..Z.

```javascript
Examples (Input ==> Output):
"abcd" ==> "A-Bb-Ccc-Dddd"
"RqaEzty" ==> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
"cwAt" ==> "C-Ww-Aaa-Tttt"

function solution(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function accum(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
    if (i < s.length - 1) {
      result += "-";
    }
  }

  return result;
}

console.log(accum("abcd"));
```

</details>

### 32. Small enough? - Beginner

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

```javascript
Examples (Input ==> Output):
[101, 45, 75, 105, 99, 107], 107 ==> true
[78, 117, 110, 99, 104, 117, 115], 100 ==> false

function solution(arr, limit) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function smallEnough(arr, limit) {
  let isSmallEnough = true;
  for (let i = 0; i < arr.length; i++) {
    if (limit < arr[i]) {
      isSmallEnough = false;
    }
  }
  return isSmallEnough;
}

function smallEnough2(arr, limit) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) {
      return false;
    }
  }
  return true;
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 115], 100));
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));

console.log(smallEnough2([78, 117, 110, 99, 104, 117, 115], 100));
console.log(smallEnough2([101, 45, 75, 105, 99, 107], 107));
```

</details>

### 33. Check the exam

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

```javascript
For Examples

Correct answer    |    Student's answer   |   Result
---------------------|-----------------------|-----------
["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →   6
["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →   7
["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →   16
["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →   0

function solution(array1, array2) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      score += 4;
    } else if (array2[i] === "") {
      score += 0;
    } else {
      score -= 1;
    }
  }
  return score < 0 ? 0 : score;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));
```

</details>

### 34. Find the capitals

Instructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

```javascript
Examples (Input ==> Output):
"CodEWaRs" ==> [0,3,4,6]

function solution(word) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function capitals(word) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
}

console.log(capitals("HelLo"));
```

</details>

### 35. Number of People in the Bus

There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

```javascript
Examples (Input ==> Output):
[[10, 0],[3, 5],[5, 8]] ==> 5
[[0, 0]] ==> 0

function solution(busStops) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function number(busStops) {
  let people = 0;
  for (let i = 0; i < busStops.length; i++) {
    people += busStops[i][0];
    people -= busStops[i][1];
  }

  return people;
}

function number2(busStops) {
  let people = 0;
  for (let i = 0; i < busStops.length; i++) {
    const [on, off] = busStops[i];
    people += on - off;
  }

  return people;
}

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);

console.log(number([[0, 0]]));
console.log(
  number2([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);

console.log(number2([[0, 0]]));
```

</details>

### 36. Make a function that does arithmetic!

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

Try to do it without using if statements!

```javascript
Examples (Input ==> Output):
5, 2, "add"      ==> 7
5, 2, "subtract" ==> 3
5, 2, "multiply" ==> 10
5, 2, "divide"   ==> 2.5

function solution(a, b, operator) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function arithmetic(a, b, operator) {
  const operations = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };

  return operations[operator];
}

function arithmetic2(a, b, operator) {
  const operations = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
  };

  return eval(a + operations[operator] + b);
}

console.log(arithmetic(5, 2, "add"));
console.log(arithmetic(5, 2, "subtract"));

console.log(arithmetic2(5, 2, "add"));
console.log(arithmetic2(5, 2, "subtract"));
```

</details>

### 37. Money, Money, Money

Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

Let P be the Principal = 1000.00
Let I be the Interest Rate = 0.05
Let T be the Tax Rate = 0.18
Let D be the Desired Sum = 1100.00

After 1st Year -->
P = 1041.00
After 2nd Year -->
P = 1083.86
After 3rd Year -->
P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

```javascript
Examples (Input ==> Output):
1000, 0.05, 0.18, 1100 ==> 3

function solution(principal, interest, tax, desired) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    let interests = principal * interest;
    let textInterest = interests * (1 - tax);
    principal += textInterest;
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
```

</details>

### 38. Fix string case

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

More examples in test cases. Good luck!

```javascript
Examples (Input ==> Output):
"coDe" ==> "code" Lowercase characters > uppercase. Change only the "D" to lowercase.
"CODe" ==> "CODE" Uppercase characters > lowecase. Change only the "e" to uppercase.
"coDE" ==> "code" Upper == lowercase. Change all to lowercase.

function solution(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function solve(str) {
  let lowercase = 0;
  let uppercase = 0;

  for (const s of str) {
    if (s === s.toUpperCase()) {
      uppercase++;
    } else {
      lowercase++;
    }
  }

  return lowercase >= uppercase ? str.toLowerCase() : str.toUpperCase();
}

console.log(solve("cODE"));
console.log(solve("coDE"));
console.log(solve("coDe"));
```

</details>

### 39. Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

```javascript
Examples (Input ==> Output):
"Dermatoglyphics" ==> true
"aba" ==> false
"moOse" ==> false (ignore letter case)

function solution(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function isIsogram(str) {
  let seen = {};
  for (let s of str.toLowerCase()) {
    if (seen[s]) {
      return false;
    }

    seen[s] = true;
  }

  return true;
}

console.log(isIsogram("aba"));
console.log(isIsogram("Dermatoglyphics"));
```

</details>

### 40. Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 _ 4 _ 3 _ 2 _ 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

```javascript
Examples (Input ==> Output):
0 ==> 1
5 ==> 120

function solution(n) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function factorial(n) {
  let result = 1;
  if (n > 12 || n < 0) {
    throw new RangeError("Input must be between 0 and 12");
  }
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

function factorial2(n) {
  if (n < 0 || n > 12) {
    throw new RangeError();
  }

  return n >= 1 ? n * factorial2(n - 1) : 1;
}

console.log(factorial(5));
console.log(factorial2(5));
```

</details>

### 41. Array element parity

In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!

```javascript
Examples (Input ==> Output):
[1, -1, 2, -2, 3, 3] ==> 3

function solution(arr) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
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
```

</details>

### 42. Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

```javascript
Examples (Input ==> Output):
[19, 5, 42, 2, 77] ==> 7

function solution(arr) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function sumTwoSmallestNumbers(arr) {
  let firstLowest = Infinity;
  let secondLowest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstLowest) {
      secondLowest = firstLowest;
      firstLowest = arr[i];
    } else if (arr[i] < secondLowest) {
      secondLowest = arr[i];
    }
  }

  return firstLowest + secondLowest;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
```

</details>

### 43. Functional Addition

Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6

```javascript
Examples (Input ==> Output):
(4)(1) ==> 5

function solution(n) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function add(n) {
  return (m) => n + m;
}

console.log(add(4)(1));
```

</details>

### 44. Linked Lists - Get Nth

Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

getNth(1 -> 2 -> 3 -> null, 0).data === 1
getNth(1 -> 2 -> 3 -> null, 1).data === 2
The index should be in the range [0..length-1]. If it is not, or if the list is empty, GetNth() should throw/raise an exception (ArgumentException in C#, InvalidArgumentException in PHP, Exception in Java).

```javascript
Examples (Input ==> Output):
getNth(1 -> 2 -> 3 -> null, 0).data ==> 1
getNth(1 -> 2 -> 3 -> null, 1).data ==> 2

function solution(node, index) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function getNth(node, index) {
  if (!node) {
    throw new Error("List is empty.");
  }

  let current = node;
  let count = 0;

  while (current !== null) {
    if (index === count) {
      return current;
    }

    current = current.next;
    count++;
  }

  throw new Error("Index out of range.");
}

console.log(getNth(null, 1).data);
```

</details>

### 45. Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

```javascript
Examples (Input ==> Output):
"abcdef" ==> ["AbCdEf", "aBcDeF"]

function solution(str) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function capitalize(s) {
  let odd = "";
  let even = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even += s[i].toUpperCase();
      odd += s[i];
    } else {
      even += s[i];
      odd += s[i].toUpperCase();
    }
  }

  return [even, odd];
}

console.log(capitalize("abcdef"));
```

</details>

### 46. Number Manipulation I (Easy)

For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

```javascript
Examples (Input ==> Output):
192827764920 ==> 192827000000
938473 ==> 938000
2837743 ==> 2830000

function solution(num) {
  // your code
}
```

<details>
  <summary>Solution</summary>

```javascript
function manipulate(num) {
  let numStr = String(num);
  let midIndex = Math.floor(numStr.length / 2);

  let result = "";
  for (let i = 0; i < numStr.length; i++) {
    if (i >= midIndex) {
      result += 0;
    } else {
      result += numStr[i];
    }
  }

  return result;
}

console.log(manipulate(938473));
console.log(manipulate(2837743));
console.log(manipulate(192827764920));
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

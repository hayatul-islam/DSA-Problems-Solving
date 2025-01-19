// Count the divisors of a number
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

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

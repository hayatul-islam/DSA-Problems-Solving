// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litters(time) {
  return Math.floor(time * 0.5);
}

function litters2(time) {
  return Math.floor(time / 2);
}

// time >> n ===> Math.floor(time / 2^n)
function litters3(time) {
  return time >> 1; // Math.floor(time / 2^1)
}

console.log(litters(3));
console.log(litters2(7));
console.log(litters3(7));

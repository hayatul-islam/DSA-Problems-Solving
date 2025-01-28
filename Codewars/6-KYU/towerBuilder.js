// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  let tower = [];

  for (let i = 0; i < nFloors; i++) {
    let star = "";
    for (let j = 0; j < nFloors - i - 1; j++) {
      star += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      star += "*";
    }

    for (let j = 0; j < nFloors - i - 1; j++) {
      star += " ";
    }
    tower.push(star);
  }

  return tower;
}

console.log(towerBuilder(4));

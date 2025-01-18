// Opposites Attract
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

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

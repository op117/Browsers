const flowers = [
  { name: 'tulip', color: 'red' },
  { name: 'dandelion', color: 'yellow' },
  { name: 'rose', color: 'red' },
  { name: 'daisy', color: 'white' },
  { name: 'lily', color: 'white' },
];

// Exercise 1
// use `map` to make the first letter of al flowers a capital.
// so 'tulip' becomes 'Tulip' etc.
const flowersWithCapitalizedNames = flowers.map(flower => ({
  ...flower,
  name: flower.name.charAt(0).toUpperCase() + flower.name.slice(1)
}));

console.log(flowersWithCapitalizedNames);

// Exercise 2
// use `filter` to get only the flowers with a name of 4 characters
const flowersWithFourLetters = flowers.filter(flower => flower.name.length === 4);

console.log(flowersWithFourLetters);

// Exercise 3
// use `reduce` to create an object that contains
// the total number of flowers for each color
const flowersByColor = flowers.reduce((acc, flower) => {
  acc[flower.color] = (acc[flower.color] || 0) + 1;
  return acc;
}, {});

console.log(flowersByColor);

// Exercise 4 (bonus)
// use `some` or `every` in combination with another array method
// to find out if all flowers with five letters are red
const areAllFiveLetterFlowersRed = flowers
  .filter(flower => flower.name.length === 5)
  .every(flower => flower.color === 'red');

console.log(areAllFiveLetterFlowersRed);
const country = "China";
const continent = "Asia";
let population = 1400;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
// undefined
console.log(typeof language);

language = "Chinese";
console.log(language);

// TypeError: Assignment to constant variable.
// isIsland = false;
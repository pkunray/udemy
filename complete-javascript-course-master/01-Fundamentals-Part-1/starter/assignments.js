const country = "China";
const continent = "Asia";
let population = 1400000000;

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

console.log(population / 2)
console.log(++population)

let populationFinland = 6000000;
console.log( population > populationFinland);

let populationAverage = 33000000;
console.log( population < populationAverage);

let populationPotugal = 11000000;

let description;
description = "Portugal is in Europe, and its " + populationPotugal / 1000000 + " million people speak portuguese";
console.log(description);
// const country = "China";
// const continent = "Asia";
// let population = 1400000000;

// console.log(country);
// console.log(continent);
// console.log(population);

// const isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// // undefined
// console.log(typeof language);

// language = "Chinese";
// console.log(language);

// TypeError: Assignment to constant variable.
// isIsland = false;

// console.log(population / 2)
// console.log(++population)

// let populationFinland = 6000000;
// console.log( population > populationFinland);

// let populationAverage = 33000000;
// console.log( population < populationAverage);

// let populationPotugal = 11000000;

// let description;
// description = "Portugal is in Europe, and its " + populationPotugal / 1000000 + " million people speak portuguese";
// console.log(description);

// description = `Portugal is in Europe, and its ${populationPotugal / 1000000} million people speak portuguese.`;

// console.log(description);

// const populationMillion = population / 1000000;

// if (populationMillion > 33){
//     console.log(`China's population is above average`);
// }else{
//     console.log(`China's population is ${33 - populationMillion} million below average`);
// }

// Coding Challenge #1
/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/


// let massMark = 78;
// let heightMark = 1.69;

// let massJohn = 92;
// let heightJohn = 1.95;

// /*
// let massMark = 95;
// let heightMark = 1.88;

// let massJohn = 85;
// let heightJohn = 1.76;
// */

// let BMIMark = massMark / heightMark ** 2;
// let BMIJohn = massJohn / heightJohn ** 2;

// let markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// // 4
// console.log('9' - '5');

// // '617'
// console.log('19' - '13' + '17');

// // 23
// console.log('19' - '13' + 17);

// // false
// console.log('123' < 57);

// // 1143
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// console.log(typeof numNeighbours);

// if (numNeighbours === 1){
//     console.log("Only 1 border!");
// }else if(numNeighbours > 1){
//     console.log("More than 1 border");
// }else{
//     console.log("No borders");
// }

const language = prompt("Please input the language you are speaking");

switch(language){
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}
const name1 = ["raza", "ramis", "ayesha", "sajida"];
const name2 = ["abiha", "fariha", "fardan","aban", "afrah"];

// name1.push(name2);
// console.log(name1);
// console.log(name1[4][4]);


// const fullName = name1.concat(name2);

// console.log(fullName);

// const allFulLName = [...name1, ...name2];

// console.log(allFulLName);


const anOtherArray = [1, 2, 3, 4, [3, 2, 1,], 5, 6,7 [4, 6, [7, 8, 9]]]

const realAnOtherArray = anOtherArray.flat()

console.log(realAnOtherArray);


console.log(Array.isArray("raza"));
console.log(Array.isArray(anOtherArray));

console.log(Array.from("raza"));
console.log(Array.from({name: "raza"}));

let score = 1000;
let score1 = 2000;
let score2 = 3000;

console.log(Array.of(score,score1,score2));
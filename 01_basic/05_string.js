const myname = "Raza";
const myrepo = 5;

// console.log(name + myrepo + "value");


console.log(`Hello my name is ${myname} and my repo is ${myrepo}`);


const gameName = "Midtoiwn";

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));


console.log(gameName.substring(0,4));
console.log(gameName.slice(-7 , 4 ));

const newString = "          Raza        ";

console.log(newString.trim());
console.log(newString);

const url = "https://raza.com/raza%20hussain";

console.log(url.replace(`%20`, `-`));
console.log(url.includes("raza"));

const  newStr = "Hello raza how are you"
console.log(newStr.split(" "));

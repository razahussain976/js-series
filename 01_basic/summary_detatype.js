// Primitive:

// 7 types: string , number, boolean, null, undefined, symbol,BigInt

const score = 100
const scorevalue = 100.4


const isLoggedIn = false
const outSideTemp = null

let email;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id,anotherId);

const bigNumber = 122131231231
const bigNumber1 = 122131231231n

console.log(typeof bigNumber, typeof bigNumber1);




// non primitive ;

//array object function

const array = ["raza", 23, "enter"];

const obj = {
    name:"raza",
    age: 23,
    education: "enter"
}

const func = function(){
    console.log(obj);
}







// 2 type memory in javascript 
// stack(primitive) , heap(non primitive)

const name1 = "raza";

let changename = name1;

changename = "ramis"

console.log(name1 ,  changename);

const namee= {
     name: "ramis",
     age : 23
}

const changenamee = namee;
changenamee.name = "raza"

console.log(namee, changenamee);
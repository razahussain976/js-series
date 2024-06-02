const userEmail = "";

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
};

// falsy value 

//false 0, -0, BigInt 0n, "", null, undefined, NaN;

// truthy value 

// "0", " ", 'false', [], {}, function (){}

// const emptyArray = [];

// // if (emptyArray.length === 0) {
// //     console.log("array is empty");
// // };

// const emptyobj = {};

// if(Object.keys(emptyobj).length === 0){
//     console.log("obj is empty");
// }

// Nullish coalecing operater (??) : null undifined

let val1;

val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// console.log(val1);

//terniary operater

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("pricee is less than 80") : console.log("price is greater than 80");












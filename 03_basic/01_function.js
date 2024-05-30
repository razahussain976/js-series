function sayMyName (){
    console.log("R");
    console.log("a");
    console.log("z");
    console.log("a");
}
// sayMyName()

// function addTwoNumbers (num1, num2){

// console.log(num1 + num2);
// }
// addTwoNumbers(2,5)

function addTwoNumbers (num1, num2){
// let result = num1 + num2
// return result 
return num1 + num2
}

let finalResult  = addTwoNumbers(1,3)
// console.log(finalResult);


function logInUserMessage(userName = "sam"){
if(userName === undefined){
    console.log(`plzzz enter a userName`);
return
}
return `${userName} just loggedIn` 
}


// console.log(logInUserMessage("raza"))
// console.log(logInUserMessage())
;

function calculatCarPrice (val1, val2, ...num1){
  return num1
}

// console.log(calculatCarPrice(100,200, 300,4000,2000));

const user = {
    userName: "Raza",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject(
//     {
//         userName: "Raza",
//         price: 1200
//     }
// )

const myNEwArray = [200,100,300,500];

function returnSecondValue(getArray) {
    return getArray [1]
}

// console.log(returnSecondValue(myNEwArray));
console.log(returnSecondValue([200,100,300,500]));
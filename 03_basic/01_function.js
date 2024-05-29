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
console.log(logInUserMessage())
;

var c = 200;
let a = 300;

if (true) {
    let a = 10;
const b = 20;
var c = 30;
// console.log("Inner", a);
}


// console.log(a);
// console.log(b);
console.log(c);


function one (){
    const username = "Raza";

    function two (){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website)
    two()
}

// one()

const fullName = "Raza Mubeen";

if(true){
    const username = "Raza";
    // console.log(fullName);
    if(username === "Raza"){
        const website = " Youtube";
        // console.log(username + website);
        // console.log(fullName);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++
console.log(addOne(5));
function addOne (num){
      
    return num + 1
}





// console.log(addTwo(6));
const addTwo = function(num){
    return num + 2
}

addTwo(6)




















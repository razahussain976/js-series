const user = {
    userName: "raza",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.userName = "Mubeen"
// user.welcomeMessage()
// console.log(user);


// // function abc (){
//     let userName = "raza"
//     console.log(this.userName);


// }
// abc()

// const abc = function() {

//     let userName = "raza"
//     console.log(this.userName);
// }


// const abc = () => {

//     let userName = "raza"
//     console.log(this.userName);
// }


// abc()


// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2
const addTwo = (num1,num2) => ({userName: "Raza"})


console.log(addTwo(2,5))





















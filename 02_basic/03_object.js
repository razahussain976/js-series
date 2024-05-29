// singleton 
// object.create


// Object literals


const mysmb = Symbol("key1");


const JsUser = {
    name: "Raza",
    "full name": "Raza Mubeen",
    [mysmb]: "mykey1",
    age: 18,
    location: "karachi",
    email: "raza@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysmb]);

// JsUser.email = "raza@google.com";
// Object.freeze(JsUser)

JsUser.email = "raza@chat.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
}


JsUser.greetingtwo = function(){
    console.log(`hello js user ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
console.log(JsUser);
// const tinderUser = new object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "raza";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com";
    fullName: {
        userFullName:{
            firstName: "Raza";
            lastName: "Mubeen"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1,obj2);


const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));



const course = {
    courseName: "Javascript",
    price: "999",
    coureInstructor
}
// course.coureInstructor

const {coureInstructor: instructor} = course // destractching

console.log(instructor

);

{
    "courseName": "Javascript",                  // json object
    "price": "999",
"    coureInstructor"
}










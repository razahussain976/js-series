// Dates

let date = new Date()

// console.log(date.toString());

// console.log("to date string",date.toDateString());
// console.log("to ios string",date.toISOString());
// console.log("to json string",date.toJSON());
// console.log("to local  date string",date.toLocaleDateString());
// console.log("to local  string",date.toLocaleString());
let myCreatedDate = new Date("03-28-2001")

// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate);
























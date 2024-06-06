// for off

// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello World!";

for (const greet of greeting) {
    // console.log(`Each character is ${greet}`);
}

// Map

const map = new Map()

map.set('pk', "Pakistan")
map.set('usa', "United State Of America")

// console.log(map)

for (const [key, value] of map) {
    // console.log(key, ":-" , value);
}

const myObject = {
    "game1" : "midtown",
    "game2" : "spiderman"
}

// forof loop is not working in object

for (const [key, value] of myObject) {
        // console.log(key, ":-" , value);
}








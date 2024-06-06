const coding = ["js", "rb", "py", "java", "cpp"];

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
})

// console.log(values);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNum = myNum.filter( (num) => num > 4)

// console.log(newNum);

// const newNum = myNum.filter( (num) =>{ 
//     return    num > 4
// })

// console.log(newNum);


// const newNumber = [];

// myNum.forEach( (num) =>{

// if (num > 4) {
//     newNumber.push(num)
// }
// })

// console.log(newNumber);


const books = [
    {title: "book 1", genre: "fiction", publish: 1981, edition: 2004},
    {title: "book 2", genre: "non-fiction", publish: 1992, edition: 2008},
    {title: "book 3", genre: "history", publish: 1999, edition: 2007},
    {title: "book 4", genre: "non-fiction", publish: 1989, edition: 2010},
    {title: "book 5", genre: "science", publish: 2009, edition: 2014},
]

// const userBooks = books.filter( (bk) => bk.genre === "science")
// const userBooks = books.filter( (bk) => {
//     return bk.publish >= 2000})
const userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === "science" })

     console.log(userBooks);













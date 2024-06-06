//map
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNumber = myNum.map( (num) => {return num + 10});
const newNumber = myNum.map( (num) => num * 10)
                        .map( (num) => num + 1)
                        .filter( (num) => num > 40)

// console.log(newNumber);

//reduce

const newNum = [1, 2, 3];

// const myTotal = newNum.reduce( function(acc,currvall)  {
//     console.log(`acc: ${acc} and currvall ${currvall}`);
//     return acc + currvall
// },0
// )


const myTotal = newNum.reduce( (acc,currvall) => acc + currvall ,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "javacource",
        price: 2999
    },
    {
        itemName: "app dev cource",
        price: 4999
    },
    {
        itemName: "deta science cource",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0)

console.log(priceToPay);


const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, cur){
//     console.log(`acc : ${acc} and cur : ${cur}`);
//     return acc + cur;
// }, 3);

// console.log(myTotal);

const myTotoal = myNums.reduce((acc, cur)=> (
    acc + cur
), 0);

console.log(myTotoal);


const shoppingCart = [
    {
        itemName : "Js Course",
        price : 2999
    },
    {
        itemName : "Python Course",
        price : 999
    },
    {
        itemName : "Mobile Dev",
        price : 12999
    }
];


const priceToPay =  shoppingCart.reduce((acc, item)=>(
    acc + item.price
), 0)

console.log(priceToPay);

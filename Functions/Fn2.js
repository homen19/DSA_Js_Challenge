

function calculateCartPrice (val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000, 500));

const user = {
    username : "Homen",
    prices : 199
}

function handleObject  (anyObject) {
    console.log(`Username is : ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200, 300, 400, 600]
function returnsecondValue(getArray) {
    return getArray[1];
}
console.log(returnsecondValue(myNewArray));
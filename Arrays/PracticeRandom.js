// Array Random task

// Collection of data it can be mixed data type
// Not an associative array here indexes are start with numerical value first index start with 0
// Dynamic in size 

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ['Shaktiman', 'Nagraj'];
const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(myArr[0]);

// push() method in array
myArr.push(6);
myArr.push(7);
console.log(myArr); //It will add 6 in the last

// pop() method
myArr.pop();
console.log(myArr);//It will delete the last element from the array

myArr.unshift(9);
console.log(myArr); //It will add element in the fist

// shift()

myArr.shift();
console.log(myArr); //It will delete the first element from the array

// include() methos

console.log(myArr.includes(6));
console.log(myArr.indexOf(10));//not exist in the array it will give -1


const newArr = myArr.join();
console.log(newArr);

// slice and splice method


console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B", myArr);


// splice
// splice manipulate in the original array example are given below
const myn2  = myArr.splice(1, 3);
console.log("C", myArr); //It will print the original manipulated array
console.log(myn2); //extracted elements.








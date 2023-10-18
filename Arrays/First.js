

// Creating javascript arrays :
// we can create in two ways 
// 1. using Array constructor
// 2. using array literal notation

let scores = new Array(1, 2, 3, 4, 5); //type 1 declaration
console.log(`Scores array elements are : ${scores}`);


let fruits = ['banana', 'mango', 'apple'];//type 2 declaration
console.log(`Fruits array elements are : ${fruits}`);


// getting the array size

console.log(`Size of the scores array is : ${scores}`);

console.log(`Size of the fruits arrry is : ${fruits}`);


// array operation

// 1. push() method for add elelment at the end

fruits.push('Pineapple');
console.log(fruits);

// 2. unshift() method for add element in the beginniing

fruits.unshift('Orange')
console.log(fruits);

// 3. pop() method to remove element from the end

fruits.pop();
console.log(fruits);

// 4. shift() method to remove elements from the beginning

fruits.shift();
console.log(fruits);

// 5. indexOf() method to find the index of the elements 

let indexBanana = fruits.indexOf('banana');
console.log(`Index of banana is : ${indexBanana}`);


// 6. Checking a value is array or not for that we use Array.isArray() method

console.log(Array.isArray(fruits));





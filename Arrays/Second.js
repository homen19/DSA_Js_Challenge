

// Day 2 Example

// 1. join() method in array
const arr = ['banana', 'mango', 'orange', 'pineapple', 'graps'];

const joinedWithComma = arr.join();
const joinedWithHyphen = arr.join('-');
const joinedWithSpace = arr.join(' ');
console.log(arr);
console.log(joinedWithComma);
console.log(joinedWithHyphen);
console.log(joinedWithSpace);

// 2. toString() method

const convertToString = arr.toString();
console.log(convertToString);


// 3. splice() method in javascript :

const fruits = ['banana', 'orange', 'applce', 'mango'];
fruits.splice(2, 0, 'Lemon', 'kiwi');
console.log(fruits);

const numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 2);
console.log(numbers);

const colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow");
console.log(colors);
// adding element using splice 
colors.splice(1, 0, "grape");
console.log(colors);


// 4. slice() 

const fruits2 = ["apple", "banana", "cherry", "date", "fig"];


const selectedFruits = fruits2.slice(1, 4);
console.log(selectedFruits);

// copying an array
const copyFruits2 = fruits2.slice();
console.log(copyFruits2);

console.log(fruits2 === copyFruits2);

// extracting elements from a specific index to the end of the array

const extract = fruits2.slice(2);
console.log(extract);



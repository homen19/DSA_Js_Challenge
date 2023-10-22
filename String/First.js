// String in javascript

// Declaration of String

let str = 'Hi';
let greeting = "Hello";

let name = `John`;

console.log(str)
console.log(greeting)
console.log(name);

let message = `Hi, I am ${name}`;
console.log(message);

let st = 'I\'m a string';
console.log(st)

console.log(st.length);


// accessing character in string
let str2 = "Hello";
console.log(str2[0]); //accessing first character
console.log(str2[str2.length-1]); //accessing last character

// String concatenation 

let firstname = 'John';
let msg = 'Hi ' +firstname;
console.log(msg);


let className = 'btn';
className += ' btn-primary';
className += ' none';
console.log(className);


// Converting values to string
// to convert a non-string value to a string we use one of the following
// 1. String(n)
// 2. "+n
// 3. n.toString()

// Note : toString() method doesnot work for undefined and null


let status = false;
let str3 = status.toString();
console.log(str3);
console.log(str3[1]);




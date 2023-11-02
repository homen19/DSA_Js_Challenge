

// for of 

// ["", "", ""]

// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    if(num == 3) break
    
}

// for in apply in string

const greetings = "Hello World";
for(const greet of greetings) {
    if(greet === " ") continue
    console.log(`Each character is : ${greet}`);
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('FN', "France")
map.set('IN', "India")
console.log(map);


for (const [key, value] of map) {
    console.log(key);
}


// const myObject = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':' , value);
// }

const myObject = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'

}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'ruby', 'python', 'java'];
for (const key in programming) {
    console.log(programming[key]);
}

// map is not iterable
// for (const key in map) {
//    console.log(key);
// }
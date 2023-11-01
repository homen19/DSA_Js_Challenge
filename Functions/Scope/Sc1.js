
// Scope in javascript
// var c = 300
let a = 300;


if (true) {
    let a = 10
    const b = 20
    c = 30
    // console.log("Inner a " +a);
}


// console.log("Outer a : "+a);
// console.log(b);
// console.log(c);

function one() {
    const userName = "Homen";
    function two () {
        const website = "youtube"
        // console.log(userName);
    }
    // console.log(website);

    two();
}
one();

if(true) {
    const userName = "homen";
    if(userName === "homen") {
        const website = "youtube";
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);




// ++++++++++Interesting+++++++++++++++++
console.log(addOne(5));
function addOne(num) {
    return num + 1;
}

console.log(addTwo(5));
const addTwo = function (num) {
    return num + 2;
}



function sayMyName() {
    console.log("This is the fn");
}


sayMyName();

// function addTwoNumbers (n1, n2) {
//     console.log(n1 + n2);
// }
function addTwoNumbers (n1, n2) {
    // let result = n1 + n2;
    // return result;

    return n1 + n2;
}
const result = addTwoNumbers(3, 5);
console.log("result : "+result);

function loginUser (username = "Sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUser("Homen"));
// console.log(loginUser());
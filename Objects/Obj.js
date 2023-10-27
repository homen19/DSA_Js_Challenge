// singleton

// object literals 
const mySym = Symbol("key1")

const JsUser = {
    name : "Homen",
    "full name" : "Homen Nath",
    [mySym] : "myKey1",
    age : 24,
    location: "Guwahati",
    email : "abc@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "saturday"]
};
console.log(JsUser["full name"]);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "homennath@chatGpt.com"
// Object.freeze(JsUser);
// JsUser.email = "Homennath@microsoft.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js user")
}
JsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
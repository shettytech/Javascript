const mySym = Symbol("key1")

const JsUSer = {
    name : "Pavithra",
    "fullName" : "Pavithra Shetty",
    [mySym] : "mysym1",
    age : "18",
    location : "SanDeigo",
    email : "pavi@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Saturday" ]

}

console.log(JsUSer);
//-------------------------------------------------------
//Object.freeze;
JsUSer.age = "30";
console.log(JsUSer);

//----------------------------------------------------------

JsUSer.age = "30";
console.log(JsUSer);

//----------------------------------------------------------

console.log(JsUSer.email);
console.log(JsUSer["email"])
console.log(JsUSer.fullName);
console.log(JsUSer["fullName"]);
//----------------------------------------------------------
//Functions

JsUSer.greetings = function() {
    console.log("Hello welcome to JS");
    
}

console.log(JsUSer);
console.log(JsUSer.greetings());
console.log(JsUSer.greetings);
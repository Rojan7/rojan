//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
//there are basically stack and heap in memory blocks
//stack is mostly for the primitivve data types where as heap is for the non primitive data types
//when you put anything in a stack you will get a copy of it but when you put anything in a heap you won't get copy rather you get refrence to same thing
let myyoutubename ="rojanadhikari@gmail.com"
let anotheryoutubename = myyoutubename
anotheryoutubename = "littleus@gmail.com"
console.log(myyoutubename)
console.log(anotheryoutubename)


let userone = {
    email : "user@gmail.com",
    upi : "rojan@hbl"
}
let usertwo = userone

usertwo.email ="rojan@email.com"//aba elle duitai lai change handinxa cause refrence ho ni ta bro
console.log(userone.email)
console.log(usertwo.email)

/*
- What is ECMAScript (ES)?

ECMAScript is the official standard/rules for JavaScript.
Think:

ECMAScript = Rule Book
JavaScript = Actual Player

- What is ES6?

ES6 means:ECMAScript 2015
Released in 2015.
It introduced many modern features.
*/

// Before ES6
var name = "Riku";
function greet() {
    return "Hello";
}
// After ES6
let name = "Riku";
const age = 20;
const greet = () => {
    return "Hello";
};

// Important ES6 Features :
// - let
// - const
// - Arrow Functions
// - Classes
// - Destructuring
// - Spread Operator
// - Template Literals
// - Modules

let age = 20;
const PI = 3.14;

// Arrow Function :
const greet = () => {
    console.log("Hello");
};

// Template Literals
// Before:
const name = "Riku";
console.log("Hello " + name);

// After:
console.log(`Hello ${name}`);

// Destructuring
const user = {
    name: "Riku",
    age: 20
};
const { name, age } = user;

// Spread Operator
const arr = [1,2,3];
const copy = [...arr];

// Classes
class Person {
//body
}

// Import / Export
import express from "express";

// This all are ES6 Module System.




/*
What is CommonJS?
Before ES6 modules existed:
Node.js used CommonJS.
CommonJS is the default old module system of Node.js.

Why Modules?
You want to use code from another file.
Modules solve this.


- CommonJS Was Popular?

Because:
Simple
Stable
Default in Node.js

*/




/*
- Type in package.json
Node needs to know:
Should I use CommonJS? -> "type": "commonjs"
OR
Should I use ES Modules? -> "type": "module"

*/

/*
| Feature       | CommonJS         | ES Modules   |
| ------------- | ---------------- | ------------ |
| Import        | require()        | import       |
| Export        | module.exports   | export       |
| Default Node  | Yes              | No           |
| Modern        | Older            | Modern       |
| React Uses    | No               | Yes          |
| Frontend Uses | No               | Yes          |
| Package.json  | commonjs/default | type: module |
*/
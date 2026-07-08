/*
Prototype :
Before classes existed, JavaScript used prototypes.
Every object in JavaScript has a hidden prototype.

Think:
Object
 ↓
Prototype
 ↓
Methods inherited
*/

let obj = {
    a: 1,
    b: "Harry"
}

console.log(obj)

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

//Rabbit inherit the property of animal
rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

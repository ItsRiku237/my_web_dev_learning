
/*
OOP :
OOP (Object-Oriented Programming) is a programming style where we organize code using objects.

Think of a real-world object : Car
Properties: color , brand , price
Actions : Start() , Stop() , Drive()

In programming: 
*/

/*
Classes :
ES6 introduced Classes.
Classes are a cleaner way to create objects.
Class = Blueprint
Object = Actual House
*/

/*
Methods :
Functions inside a class are called methods.

Constructor Method :
Constructor runs automatically when an object is created.
*/

/*
Extends Keyword :
Used for inheritance.
Inheritance means : Child gets Parent properties and methods.
*/

class Animal {
    constructor() {
        console.log("Object is created...")
    }
    eat() {
        console.log("Eating");
    }

}

class Dog extends Animal {
    jump() {
        console.log("Jumping");
    }
}
//Dog inherits Animal.
const d1 = new Dog();
const a1 = new Animal();
d1.eat(); //Eating
d1.jump(); //Jumping
a1.eat(); //Eating
a1.jump(); //Uncaught TypeError: a1.jump is not a function
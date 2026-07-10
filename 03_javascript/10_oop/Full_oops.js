/*
OOP :
OOP (Object-Oriented Programming) is a programming style where we organize code using objects.

Think of a real-world object : Car
Properties: color , brand , price
Actions : Start() , Stop() , Drive()

In programming: 
*/
const car = {
    brand: "BMW",
    color: "Black",

    start() {
        console.log("Car Started");
    }
};


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


/*
Method Overriding :
Child class replaces parent's method.
*/

class Animal {
    sound() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal {

    sound() {
        console.log("Bark");
    }

}
const d1 = new Dog();
const a1 = new Animal();
d1.sound(); // Parent method ignored.
a1.sound();

/*
super Keyword :
Used to access parent class.
*/
class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }

    eats() {
        console.log("Kha raha hoon")
    }
    jumps() {
        console.log("Kood raha hoon")
    }
}


class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created and he is a lion...")
    }

    eats() {
        super.eats()
        console.log("Kha raha hoon roar")
    }
}

let a = new Animal("Bunny");
let l = new Lion("Shera")

console.log(a)
console.log(l)

/* when we use super.eats() :
    l.eats()
    Kha raha hoon
    Kha raha hoon roar

    with out super.eats() :
    Kha raha hoon roar
*/



/*
Overriding Constructor :
When child class has its own constructor.
*/

class Animal {

    constructor(name) {
        this.name = name;
    }

}

// Child:
class Dog extends Animal {

    constructor(name, breed) {
        //Inside child constructor: super() must be called first.
        super(name);

        this.breed = breed;

    }

}

Object:
const d1 = new Dog(
    "Tommy",
    "German Shepherd"
);

console.log(d1.name); //Tommy
console.log(d1.breed); //German Shepherd



/*
Static Method :
Belongs to class, not object.
*/
class MathUtils {

    static add(a, b) {

        return a + b;

    }

}

// Call:
console.log(MathUtils.add(10, 20)); //Output : 30

/*
Wrong:
const obj = new MathUtils();
obj.add();

Error -> Why?

Static methods belong to:
MathUtils
not object.
*/


/*
Getter Method :
Getter retrieves a value like a property.
*/
class person {
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name;
    }
}

const p1 = new person("Riku");
console.log(p1.name); //Riku


/*
Setter Method :
Setter updates value.
*/
class Person {
    constructor(name) {
        this._name = name;
    }
    set name(value) {
        this._name = value;
    }
}
const p1 = new Person("Riku");
p1.name = "Rahul";
console.log(p1._name); // Rahul


// Getter + Setter Together
class User {

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }

}

let user = new User("John");
console.log(user.name); // John

user.name = "Harry" // Name is too short.
console.log(user.name)//Harry


/*
instanceof Operator :
Checks whether an object belongs to a class.

Syntax :
object instanceof ClassName

Returns : true or false
*/

class Person {}
const p1 = new Person();
console.log(p1 instanceof Person); //Output : true
console.log(p1 instanceof Array); //Output : false
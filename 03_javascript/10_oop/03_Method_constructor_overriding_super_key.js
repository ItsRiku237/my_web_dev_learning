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
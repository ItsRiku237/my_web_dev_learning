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
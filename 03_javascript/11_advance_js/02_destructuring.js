/*
Destructuring :
Extract values from arrays or objects and store them into variables easily.
*/

// Array Destructuring :
//  - Without destructuring:
const colors = ["Red", "Blue", "Green"];
const first = colors[0];
const second = colors[1];

//  - With destructuring:
const colors = ["Red", "Blue", "Green"];
const [first, second] = colors;

console.log(first); //Red
console.log(second); //Blue


// Skipping Values 
const colors = ["Red", "Blue", "Green"];
const [first, , third] = colors;
console.log(third); //Green



// Object Destructuring :
const person = {
    name: "Riku",
    age: 20
};

// Without destructuring :
const name = person.name;
const age = person.age;

// With destructuring :
const {name, age} = person;
console.log(name);//Riku
console.log(age);//20


// Rename Variables
const {name: fullName} = person;
console.log(fullName); //Output:Riku




// More uses :

let x , y = [2 ,3]
console.log(x,y); //undefiend

let [x , y] = [2 ,3]
console.log(x,y); //2 3

let [x , y] = [2 ,3 ,7]
console.log(x,y); //2 3

let [x , y, ...rest] = [2 ,3 ,7 ,9 ,5 ,10 ,12]
console.log(x,y,rest); //2 3 7 9 5 10 12
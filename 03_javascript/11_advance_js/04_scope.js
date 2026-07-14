/*
Scope :
Where a variable can be accessed.


Global Scope: Accessible everywhere.

Local Scope: Accessible only inside function.

Block Scope: Accessible only inside {}.
            let and const are block scoped.

var:
Function scoped.
Not block scoped.
*/

// Global Scope : Declared outside every function.
// - Accessible everywhere.
let name = "Riku";
function show() {
    console.log(name);
}
show();//Output:Riku


// Local Scope (Function Scope) : Declared inside a function.
// - only inside function acces.
function test() {
    let age = 20;
    console.log(age); //20
}
test();

// Outside:
console.log(age);//Output:ReferenceError


// Variables declared using: let , const
// - are block scoped.
// - Only inside block

Example:
if(true){
    let age = 20;
}
console.log(age); //Output:ReferenceError


// var is NOT Block Scoped
if(true){
    var x = 10;
}
console.log(x); //Output:10

// Because: var = function scoped
// not block scoped.
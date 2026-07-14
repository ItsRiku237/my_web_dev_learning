/*
Hoisting :
JavaScript moves declarations to the top before execution.

Think: JS reads code first -> Stores declarations -> Executes code
*/

// Hoisting with var :
console.log(a);//Output:undefined
var a = 10; 

/*
Why? JavaScript internally does:
var a;
console.log(a);
a = 10;
*/

// Hoisting with let :
console.log(b); //Output: ReferenceError
let b = 10;
//Uncaught ReferenceError: Cannot access 'b' before initialization


/*
Why? let is hoisted but not initialized.
It stays in:Temporal Dead Zone (TDZ) until declaration line.

Visualization:
Hoisted
↓
Not Initialized
↓
Error
*/

// Hoisting with const :
console.log(c); //Output: ReferenceError
const c = 10;
// Same reason.


// Hoisting with Function :
greet();
function greet() {
    console.log("Hello");
}
// Output:Hello
// Because entire function is hoisted.



// Function Expression :
greet();
var greet = function() {
    console.log("Hello");
};
// Output:TypeError

/*
Why? var greet;
Initially: undefined()
which is invalid.
*/

/*


| Feature                   | var           | let            | const   | function
| ------------------------- | ---------     | -----          | -----   |
| Redeclare                 | ✅            | ❌            | ❌     |
| Reassign                  | ✅            | ✅            | ❌     |
| Block Scope               | ❌            | ✅            | ✅     |
| Hoisted                   |✅(undefined)  |✅(TDZ Error)  | ✅(TDZ)| Works ✅
| Access Before Declaration | undefined      | Error         | Error   |

*/


/*

var → Hoisted + undefined
let → Hoisted + TDZ Error
const → Hoisted + TDZ Error
function → Fully Hoisted
Global Scope → Whole Program
Local Scope → Function
Block Scope → {}

*/
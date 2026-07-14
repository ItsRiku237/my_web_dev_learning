/*
Here are two module systems in JavaScript:
1. CommonJS (Old Node.js Way)
2. ES Modules / ES6 Modules (Modern JavaScript Way)

*/

// example 1 (sending):
module.exports = {
    a: 2,
    b: 7
}

// example 2 (sending):
let c = 23;
module.exports = c;

// example 3 (sending):
function add(a,b){
    return a+b;
}
module.exports = add;


/*
What is ES Modules (ESM) : ES6 introduced a new module system.

Uses:
import
export

instead of:
require
module.exports


- Why ES Modules?
Advantages: Cleaner Syntax , Modern Standard , Used in React , Used in Frontend , Used in Modern Node.js
*/
// "type":"module"

export const a = 1;
export const b = 2;
export const c = 3;

/*
let obj;
export default obj = {
    a:2,
    b:3
}
// same as bellow
*/ 
const obj = {
    a:2,
    b:3
}
export default obj;


// example (sending)
export function add1(a,b){
    return a+b;
}
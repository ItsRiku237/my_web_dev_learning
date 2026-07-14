/*
Spread Syntax (...) :
- Break apart values.
- Expands array/object values.
*/

// Array Example
const arr1 = [1,2,3];
const arr2 = [...arr1];
console.log(arr2); //Result:[1,2,3]

// Combine Arrays
const a = [1,2];
const b = [3,4];
const c = [...a, ...b];
console.log(c); //Output : [1,2,3,4]


// Object Example
const person = {
    name: "Riku"
};

const newPerson = {
    ...person,
    age: 20
};
console.log(newPerson); //{name: 'Riku', age: 20}


/*
Real-Life Example

Imagine:
Bag A → Books
Bag B ->Pens

Spread: Open both bags -> Put everything into one bag
*/


// More use :
function sum(a, b , c){
    return a + b +c
}

let arr = [2 , 3 ,5];
console.log(arr[0]+arr[1]+arr[2]); //10
console.log(sum(arr[0] , arr[1] , arr[2])); //10
console.log(sum(...arr)); //10
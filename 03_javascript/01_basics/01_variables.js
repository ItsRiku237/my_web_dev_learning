console.log("Hiy I am a full stack Devloper.") //is used to print output in the browser console.

var a = 5;
a = a + 6;
var b  = 6;
var c = "Riku";

console.log(a + b ) //11 + 6 = 17
console.log(a + b + 10 ) //11 + 6 + 10 = 27
console.log(a + b + c) // 17Riku [String + Number → string concatenation]

{
    var a = 23;
    // var is function scoped, not block scoped. So the value of a becomes 23 globally.
    console.log(a) // 23
}

console.log(typeof a , typeof b, typeof c ) // number number string ,Used to check data type of a variable.

// Rules of variables:
// - cannot start with number
// - can use _ and letters
var _x = "Ricz"; // valid
// var 23y = "Jubbu"; not valid

const  a1  = 50; //const means constant variable.
// a1 = a1 + 1; not allowed bcz  a1 is constant


// let is block scoped
// var is not block scoped
let z = 23;
z = z + 6;
console.log(z)

{
    // Here z is only inside this block.
    let z = 37;
    console.log(z)
}
// Outer z = 29
// Inner z = 37
console.log(z)

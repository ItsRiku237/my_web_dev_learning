/*
IIFE (Immediately Invoked Function Expression) :

-It Runs immediately after creation.
-Creates private scope.

Syntax:
(function(){
// code
})();

Normally we create a function and then call it.
function greet() {
    console.log("Hello");
}
greet();
*/

// In IIFE, the function is created and executed immediately.
(function() {
    console.log("Hello");
})();
// Output: Hello

/*
Why Use IIFE :
Suppose you have temporary variables.
*/

(function() {
    let secret = "Password123";
    console.log(secret);
})();

// Outside:
console.log(secret);

// Output: ReferenceError
// Because secret exists only inside IIFE.
// IIFE runs -> Work completed -> Variables destroyed


// Use :
async function sleep(){
    return new Promise ((resolve , reject) =>{
        setTimeout(() => {
            resolve(23);
        }, 3000);
    })
}

// let a = await sleep() // give error
(async function main(){
    let a = await sleep()
    console.log(a) // 23
})()
// without calling function is running
/*
The try-catch statement in JavaScript works synchronously , If an exceotion happen in schedule code like setTimeout
try-catch Doesn't Work.

- How setTimeout Works
When you use setTimeout, the function you pass to it is scheduled to run later, after the specified delay.
By the time the scheduled function runs, the JavaScript engine has already exited the try block.

- Why the Error Isn't Caught
If an error occurs inside the function passed to setTimeout, it happens asynchronously — outside the original try...catch scope.
Therefore, the catch block won't be triggered, and the script may terminate unexpectedly.
*/

try {
    setTimeout(function () {
        throw new Error("Something went wrong");
    }, 1000);
} catch (e) {
    console.log("Caught an error:", e.message);
}
// In this case, the error will not be caught by the catch block.



/*
Correct Way to Handle It : 
To catch errors in asynchronous code, you need to wrap the code inside the asynchronous function with its own try-catch:
*/
setTimeout(function () {
    try {
        throw new Error("Something went wrong");
    } catch (e) {
        console.log("Caught an error:", e.message);
    }
}, 1000);



/*
Note :
try-catch only works for synchronous code.
For asynchronous code like setTimeout, you must place the try...catch inside the callback function to handle errors.
*/
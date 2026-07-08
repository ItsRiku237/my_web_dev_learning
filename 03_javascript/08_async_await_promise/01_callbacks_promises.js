/*Synchronous Code:
Normally JavaScript executes code line by line.
JavaScript waits for one line to finish before moving to the next.
This is called Synchronous Execution.

Problem with Synchronous Execution:
Imagine downloading data from the internet.
If JavaScript waited 5 seconds here, the whole webpage would freeze.
To solve this problem, JavaScript uses Asynchronous Programming.
*/


/* Callback : 
A callback is simply a function passed as an argument to another function.
Think:"After finishing this work, call this function."*/

function greet(name) {
    console.log("Hello",name);
}

function processUser(callback) {
    const name = "Riku";
    callback(name);
}

processUser(greet); // Output: Hello Riku  





// Asynchronous Callback :
console.log("Start");

setTimeout(function(){
    console.log("Data downloaded");
}, 5000); // Wait for 5 seconds before executing

console.log("End");

/*Output:
Start
End
Data downloaded*/



/*
Callback Problem :
"Imagine:
Login
Fetch User
Fetch Posts
Fetch Comments"


login(function() {

    getUser(function() {

        getPosts(function() {

            getComments(function() {

                console.log("Done");

            });

        });

    });

});

This nested structure becomes difficult to read.

This is called : Callback Hell or Pyramid of Doom */



/*Promise :

Promises were introduced to solve callback hell.
A Promise represents: "I promise I will give you a result in the future." 

Promise States
1. Pending : Work is happening.
2. Fulfilled : Success.
3. Rejected : Failure.

*/

let MyPromise = new Promise(function(resolve, reject) {
    let success = true;
    if(success) {
        resolve("Task completed successfully");
    }
    else {
        reject("Task failed");
    }
});

MyPromise.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});
/*Output:
Task completed successfully
*/



// Example: Download Data

function fetchData() {
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("Data Received");
        }, 3000);
    });
}

fetchData().then((data) => {
    console.log(data);
});

/*Output after 3 sec:
Data Received*/


/* 
Promise Chaining Instead of nested callbacks:

login()
.then(() => getUser())
.then(() => getPosts())
.then(() => getComments())
.then(() => {
    console.log("Done");
})
.catch((error) => {
    console.log(error);
});

*/
console.log("This is Promise Static Methods");


/*
1. Promise.all()
Used when: "I need ALL promises to succeed.
*/
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Riku")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Riku 2")
        }, 1000);
    }
})

let p3 = Promise.all([prom1 , prom2])

p3.then((a) => {
    console.log(a);
}).catch((error) => {
    console.log(error);
})

/*Output:
Yes I am done 2
Yes I am done
["Riku" , "Riku 2"]
or
No Random number was supporting you 
*/




/*
2. Promise.allSettled()
Introduced because Promise.all has a limitation.
Sometimes we want: "Show all results whether they succeed or fail." 
*/

const P1 = Promise.resolve("User");
const P2 = Promise.reject("Error");
const P3 = Promise.resolve("Comments");

Promise.allSettled([P1, P2, P3])
.then((results) => {
    console.log(results);
});


/*Output:
[
  { status: 'fulfilled', value: 'User' },
    { status: 'rejected', reason: 'Error' },
    { status: 'fulfilled', value: 'Comments' }
]
*/




/*
3. Promise.race()
Race means:
"Whoever finishes first wins."
*/

const P4 = new Promise(resolve =>
    setTimeout(() =>
        resolve("First"), 2000)
);
const P5 = new Promise(resolve =>
    setTimeout(() =>
        resolve("Second"), 4000)
);

Promise.race([P4, P5])
.then((result) => {
    console.log(result);
});
/*Output:
First
*/
/*
Important Rule:
It doesn't matter if the first promise:
succeeds or fails 
The first completed promise wins.
*/




/*
4. Promise.any()
Very similar to race.
Difference:
Promise.any waits for the FIRST SUCCESS.
*/

const p1 = Promise.reject("Server 1 Failed");

const p2 = new Promise(resolve =>
    setTimeout(() =>
        resolve("Server 2 Success"), 2000)
);

const p3 = Promise.reject("Server 3 Failed");

Promise.any([p1, p2, p3])
.then(result => {
    console.log(result);
});

/*
Output:
Server 2 Success
*/



/*
5. Promise.resolve()
Creates a promise that is immediately successful.
*/

let promise = Promise.resolve("Hello");

promise.then(data => {
    console.log(data);
});

// Output: Hello




/*
6. Promise.reject()
Creates a promise that immediately fails or Rejects.
*/


Promise.reject(error)
Example
let promise = Promise.reject("Network Error");

promise.catch(error => {
    console.log(error);
});

// Output: Network Error


/*
| Method               | Success Condition          | Failure Condition                            |
| -------------------- | -------------------------- | -------------------------------------------- |
| Promise.resolve()    | Immediate success          | Never                                        |
| Promise.reject()     | Never                      | Immediate failure                            |
| Promise.all()        | All succeed                | Any one fails                                |
| Promise.allSettled() | Always returns all results | Never rejects because of individual failures |
| Promise.race()       | First settled promise      | First settled promise may fail               |
| Promise.any()        | First successful promise   | All promises fail                            |
*/
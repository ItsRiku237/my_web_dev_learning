/*async/await :
async/await is a cleaner way to work with Promises.
It makes asynchronous code look like normal synchronous code.

await means:await Keyword

await means:

"Wait until this Promise finishes." 
"Wait until this Promise finishes."
*/

async function getData() {

    //m-1
//  return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })

    //m-2
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    //m-3
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}

async function main(){
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2")

}

main()



/*
Promise Version :

fetchData()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});



Async/Await Version :

async function getData() {

    const data = await fetchData();

    console.log(data);

}

Much easier to read.
*/










// Example:
function fetchData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data Loaded");
        }, 3000);

    });

}

async function getData() {

    console.log("Loading...");

    const data = await fetchData();

    console.log(data);

}

getData();

/*
output:
Loading...

(3 seconds later)

Data Loaded
*/
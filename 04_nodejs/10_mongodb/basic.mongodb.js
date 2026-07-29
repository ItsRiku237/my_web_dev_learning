// /*
// use Web_dev
// show databases
// db.Learning_purpose.find()
// db.Learning_purpose.insertOne({"name" : "C++"})

// */

// Select the database to use.
use('Testing');

// Insert a few documents into the sales collection.
db.getCollection('Course').insertMany([
    {
        "name": "Python",
        "Price": 15000,
        "Instructor": "Alice"
    },
    {
        "name": "JavaScript",
        "Price": 18000,
        "Instructor": "Bob"
    },
    {
        "name": "C++",
        "Price": 22000,
        "Instructor": "Charlie"
    },
    {
        "name": "Ruby",
        "Price": 17000,
        "Instructor": "David"
    },
    {
        "name": "C#",
        "Price": 19000,
        "Instructor": "Eva"
    },
    {
        "name": "Swift",
        "Price": 21000,
        "Instructor": "Frank"
    },
    {
        "name": "Kotlin",
        "Price": 16000,
        "Instructor": "Grace"
    },
    {
        "name": "PHP",
        "Price": 23000,
        "Instructor": "Hank"
    },
    {
        "name": "TypeScript",
        "Price": 20000,
        "Instructor": "Ivy"
    },
    {
        "name": "Go",
        "Price": 18000,
        "Instructor": "Jack"
    }
]);



// Print a message to the output window.
console.log(`Done inserting data`);



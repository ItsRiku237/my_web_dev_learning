// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection


const express = require('express');
const mongoose = require('mongoose')

const Employee = require("./models/Employee")

const app = express();
const port = 3000;

conn = mongoose.connect("mongodb://localhost:27017/Company")

app.set('view engine', 'ejs');



const getRandom = (arr) => {
    // Math.floor(Math.random() * (b - a)) + a;
    let rno = Math.floor(Math.random()*(arr.length - 0))
    return arr[rno]
}


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/generate', async (req, res) => {
    // Clear the collection Employee
    await Employee.deleteMany({}) 

    // Generate random data

    let randomNames = ["Riku", "Jubbu", "Shibu", "Aaduu"]
    let randomLang = ["Java_script", "c++", "Python", "React"]
    let randomCities = ["Bilaspur", "Moradabad", "Mysore", "Kolkata"]

    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random()>0.5)?true:false
        })
        console.log(e)
    }
    res.render('index');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
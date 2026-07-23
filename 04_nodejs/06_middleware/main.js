const express = require('express');
const fs = require("fs")
const user = require('./routes/user.js')


const app = express();
const port = 3000;


// 2. Router-level middleware
app.use('/user', user)



//1. Application-level middleware :

//Middleware 1 : Logger for our application
app.use((req, res, next) => {
    console.log('m1');
    
    // console.log(req.headers); //It give all headers
    req.riku = "I am Riku bhai."
    
    //we can check all detail before executing actual requast method.
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
    console.log(`${Date.now()} is a ${req.method}`);
    
    // res.send('Hacked by Middleware 1') // dont do this bcz next middleware or method are not run. give error also.
    next();
});


//Middleware 2 :
// A middleware function with no mount path. The function is executed every time the app receives a request.
app.use((req, res, next) => {
    console.log('m2');
    req.riku = "I am Riku"
    next();
});


// Middleware 3:
// A middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.
app.use('/blog/:id', (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
});


// handler for the /user/:id path, which prints the user ID
app.get('/blog/:id', (req, res) => {
    res.send(req.params.id);
});



app.get('/', (req, res) => {
    res.send('Hello !');
});

app.get('/about', (req, res) => {
    res.send('about_us ' + req.riku); // req.riku use latest middleware value.
});

app.get('/contact/contact_manager', (req, res) => {
    res.send('contact_me');
});


// app.listen(3000);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});





/*
An Express application can use the following types of middleware:
1. Application-level middleware
2. Router-level middleware
3. Error-handling middleware
4. Built-in middleware
5. Third-party middleware


*/
# Express Middleware - Complete Notes + Code Analysis

## What is Middleware?

Middleware is a function that executes between:

```text
Request
   ↓
Middleware
   ↓
Route Handler
   ↓
Response
```

Think:

```text
Visitor
 ↓
Security Guard
 ↓
Reception
 ↓
Office
```

Before a request reaches the final route, middleware can:

* Modify request
* Modify response
* Execute code
* Log data
* Authenticate users
* End request-response cycle
* Pass control to next middleware

---

## Middleware Syntax

```javascript
app.use((req, res, next) => {

    console.log("Middleware");

    next();

});
```

### Parameters

```javascript
req
```

Request Object

```javascript
res
```

Response Object

```javascript
next
```

Pass control to next middleware or route.

---

## Why next() is Important?

Example:

```javascript
app.use((req,res,next)=>{
    console.log("M1");
    next();
});

app.get("/",(req,res)=>{
    res.send("Home");
});
```

Output:

```text
M1
Home
```

Without next():

```javascript
app.use((req,res,next)=>{
    console.log("M1");
});
```

Browser:

```text
Loading...
Loading...
Loading...
```

Request hangs forever.

---

# 5 Types of Middleware

---

## 1. Application-Level Middleware

Attached directly to app.
Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

Example:

```javascript
app.use((req,res,next)=>{
    console.log("Application Middleware");
    next();
});
```

Runs for:

```text
/
/about
/contact
/blog
```

every request.

---

## 2. Router-Level Middleware

Attached to Router.
Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

```javascript
const router = express.Router();
```
Load router-level middleware by using the router.use() and router.METHOD() functions.

Example:

```javascript
router.use((req,res,next)=>{
    console.log("Router Middleware");
    next();
});
```

Runs only for routes inside router.

---

## 3. Error Handling Middleware

Used to handle errors.
Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next):

Syntax:

```javascript
app.use((err,req,res,next)=>{

    console.log(err.message);

    res.status(500).send("Error");

});
```

Notice:

```javascript
(err,req,res,next)
```

4 parameters.

---

Example:

```javascript
app.get("/",(req,res)=>{

    throw new Error("Something Wrong");

});
```

Error middleware catches it.

---

## 4. Built-In Middleware

Provided by Express.

Examples:

### JSON Middleware

```javascript
app.use(express.json());
```

Converts:

```json
{
  "name":"Riku"
}
```

into:

```javascript
req.body
```

---

### Static Middleware

```javascript
app.use(express.static("public"));
```

Serves:

```text
CSS
JS
Images
```

---

### URL Encoded Middleware

```javascript
app.use(express.urlencoded());
```

Handles form data.

---

## 5. Third Party Middleware

Installed using npm.

Example:

```bash
npm install cors
```

Usage:

```javascript
const cors = require("cors");

app.use(cors());
```

Example:
The following example illustrates installing and loading the cookie-parsing middleware function cookie-parser.

```bash
npm install cookie-parser
```

Usage:

```javascript
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());
```

Examples:

```text
cors
helmet
morgan
cookie-parser
multer
```

---

# Analysis of Your main.js

---

## Step 1

```javascript
const express = require('express');
const fs = require("fs");
const user = require('./routes/user.js');
```

Imports:

```text
express → framework

fs → file system

user → router
```

---

## Step 2

```javascript
const app = express();
```

Creates Express application.

---

## Step 3

```javascript
app.use('/user', user)
```

Mounts router.

Meaning:

```text
/user/*
```

requests go to:

```text
user.js
```

---

# Middleware 1

```javascript
app.use((req,res,next)=>{
```

Runs for every request.

---

### What It Does

```javascript
console.log('m1');
```

Output:

```text
m1
```

---

```javascript
req.riku = "I am Riku bhai."
```

Adds custom property.

Now:

```javascript
req.riku
```

is available everywhere.

---

```javascript
fs.appendFileSync(...)
```

Stores logs.

Example:

```text
174945123123 GET
174945123999 POST
```

inside:

```text
logs.txt
```

---

Then:

```javascript
next();
```

moves to next middleware.

---

# Middleware 2

```javascript
app.use((req,res,next)=>{
```

Runs after Middleware 1.

---

Output:

```text
m2
```

---

Updates:

```javascript
req.riku = "I am Riku"
```

Old value:

```text
I am Riku bhai.
```

gets overwritten.

---

So:

```javascript
/about
```

returns:

```text
about_us I am Riku
```

NOT:

```text
I am Riku bhai.
```

---

# Middleware 3

```javascript
app.use('/blog/:id', ...)
```

Runs only for:

```text
/blog/10
/blog/20
/blog/abc
```

---

Example:

```text
/blog/10
```

Output:

```text
Request Type: GET
```

Then:

```javascript
next();
```

moves forward.

---

# Route

```javascript
app.get('/blog/:id')
```

Example:

```text
/blog/100
```

Output:

```text
100
```

because:

```javascript
req.params.id
```

is:

```text
100
```

---

# Route: /

```javascript
app.get('/')
```

Output:

```text
Hello !
```

---

# Route: /about

```javascript
app.get('/about')
```

Response:

```javascript
res.send('about_us ' + req.riku);
```

Final Output:

```text
about_us I am Riku
```

because middleware 2 overwrites middleware 1.

---

# Route Flow Example

Request:

```text
/about
```

Execution:

```text
Request
 ↓
M1
 ↓
M2
 ↓
/about Route
 ↓
Response
```

Output:

```text
about_us I am Riku
```

---

# Analysis of user.js

---

## Create Router

```javascript
const router = express.Router();
```

Creates mini app.

---

# Router Middleware 1

```javascript
router.use(...)
```

Runs for every:

```text
/user/*
```

request.

---

Example:

```text
/user/5
```

Output:

```text
Time: 174945123
```

---

# Router Middleware 2

```javascript
router.use('/:id', ...)
```

Runs only for:

```text
/user/5
/user/100
```

---

Middleware 1

```javascript
console.log(req.originalUrl);
```

Output:

```text
/user/5
```

---

Middleware 2

```javascript
console.log(req.method);
```

Output:

```text
GET
```

---

# GET Route 1

```javascript
router.get('/:id')
```

First handler:

```javascript
if(req.params.id === '0')
    next('route');
```

---

Meaning:

```text
Skip current route
Go to next matching route
```

---

Example:

```text
/user/0
```

Execution:

```text
Router GET #1
 ↓
next("route")
 ↓
Skip
 ↓
Router GET #2
```

Output:

```text
Special Page
```

---

Example:

```text
/user/5
```

Condition:

```javascript
5 === 0
```

False.

Then:

```javascript
res.send("Regular Page");
```

Output:

```text
Regular Page
```

---

# GET Route 2

```javascript
router.get('/:id')
```

Runs only when:

```javascript
next('route')
```

is called.

Example:

```text
/user/0
```

Output:

```text
Special Page
```

---

# Complete Flow

Request:

```text
http://localhost:3000/user/5
```

Execution:

```text
main.js
 ↓
app.use('/user', user)
 ↓
user.js
 ↓
Router Middleware 1
 ↓
Router Middleware 2
 ↓
GET Route #1
 ↓
Regular Page
```

Response:

```text
Regular Page
```

---

Request:

```text
http://localhost:3000/user/0
```

Execution:

```text
main.js
 ↓
app.use('/user', user)
 ↓
Router Middleware 1
 ↓
Router Middleware 2
 ↓
GET Route #1
 ↓
next('route')
 ↓
GET Route #2
 ↓
Special Page
```

Response:

```text
Special Page
```

---

# Relationship Between main.js and user.js

```text
main.js
│
├── Global Middleware
│
├── Routes
│
└── app.use('/user', user)
         ↓
       user.js
         ↓
     Router Middleware
         ↓
      Router Routes
```

---

# Execution Priority

```text
Request
 ↓
Application Middleware (main.js)
 ↓
Router Mount Check
 ↓
Router Middleware (user.js)
 ↓
Router Route
 ↓
Response
```

---

# Interview Revision

```text
Middleware
→ Function between request and response.

next()
→ Pass control to next middleware.

Application Middleware
→ app.use()

Router Middleware
→ router.use()

Error Middleware
→ app.use((err,req,res,next))

Built-In Middleware
→ express.json()
→ express.static()

Third Party Middleware
→ cors
→ multer
→ helmet

req
→ Request object

res
→ Response object

next('route')
→ Skip current route
→ Move to next matching route

app.use('/user', user)
→ Mount router

router.use()
→ Router middleware
```

# MERN Project Architecture & Flow (Employee Dummy Data Generator)

> **Project Goal:**
> When the user clicks **"Generate Now"**, the application should:
>
> * Delete all old employee records
> * Generate 10 new random employees
> * Save them into MongoDB
> * Display the page again

---

# 1. Project Folder Structure

```text
Employee-Generator/
│
├── node_modules/
│
├── models/
│   └── Employee.js          ← Mongoose Model
│
├── views/
│   └── index.ejs            ← Frontend (EJS Page)
│
├── app.js                   ← Express Server
│
├── package.json
│
└── package-lock.json
```

---

# 2. Responsibility of Every File

## app.js

**Role**

Main Brain of the project.

Responsibilities

* Start Express Server
* Connect MongoDB
* Load Employee Model
* Create Routes
* Generate Random Data
* Save Data into MongoDB
* Render EJS Pages

Think of it as

```text
Project Manager
```

---

## models/Employee.js

**Role**

Defines how an Employee document should look.

Responsibilities

* Create Schema
* Create Model
* Export Model

Think of it as

```text
Blueprint

OR

Database Design
```

---

## views/index.ejs

**Role**

Frontend.

Responsibilities

* Display Button
* Handle Button Click
* Send Request to Express

Think of it as

```text
User Interface (UI)
```

---

# 3. How All Files Connect

```text
Browser

↓

index.ejs

↓

fetch("/generate")

↓

Express (app.js)

↓

Employee Model

↓

MongoDB Database

↓

Employee Collection

↓

Store Documents

↓

Express sends Response

↓

Browser
```

This is the complete communication chain.

---

# 4. Relationship Between Files

```text
                app.js
                   │
        ┌──────────┴──────────┐
        │                     │
        │                     │
 views/index.ejs      models/Employee.js
        │                     │
        │                     │
        └──────────┬──────────┘
                   │
              MongoDB Database
```

Notice

* `index.ejs` never talks directly to MongoDB.
* MongoDB never talks directly to the browser.
* **Everything goes through Express (`app.js`).**

---

# 5. Step-by-Step Execution Flow

---

## Step 1

Run

```bash
node app.js
```

Node starts executing.

↓

---

## Step 2

Imports happen

```javascript
const express = require("express")
const mongoose = require("mongoose")
const Employee = require("./models/Employee")
```

Now

```text
Express Loaded

↓

Mongoose Loaded

↓

Employee Model Loaded
```

---

## Step 3

Connect Database

```javascript
mongoose.connect("mongodb://localhost:27017/Company")
```

MongoDB Connection

```text
Node

↓

MongoDB Server

↓

Company Database
```

If Company database doesn't exist

MongoDB creates it automatically.

---

## Step 4

View Engine

```javascript
app.set("view engine","ejs")
```

Now Express knows

```text
Whenever

res.render()

is called

↓

Use EJS
```

---

## Step 5

Server Starts

```javascript
app.listen(3000)
```

Browser can now visit

```text
localhost:3000
```

---

# 6. User Opens Website

Browser

↓

```text
localhost:3000
```

Route

```javascript
app.get("/",...)
```

runs

↓

```javascript
res.render("index")
```

Express searches

```text
views/

↓

index.ejs
```

HTML is created

↓

Browser displays

```text
Generate Now Button
```

---

# 7. User Clicks Button

Inside EJS

```javascript
fetch("/generate")
```

Browser sends

```text
GET

↓

/generate
```

to Express.

---

# 8. Express Receives Request

Route

```javascript
app.get("/generate")
```

starts executing.

---

# 9. Delete Previous Data

```javascript
await Employee.deleteMany({})
```

Meaning

```text
Employee Collection

↓

Delete Every Document
```

Collection stays.

Only data is removed.

Before

```text
Employee

Harry

Riku

John
```

After

```text
Employee

(empty)
```

---

# 10. Arrays are Created

```javascript
randomNames

randomLang

randomCities
```

These arrays act like

```text
Random Data Box
```

Example

```text
Names

↓

Riku

Harry

Aaduu

Shibu
```

---

# 11. Loop Runs 10 Times

```javascript
for(...)
```

Every iteration

↓

Create one Employee.

---

# 12. Random Name

```javascript
getRandom(randomNames)
```

Suppose

Returns

```text
Riku
```

---

# 13. Random Salary

```javascript
Math.random()
```

Suppose

Returns

```text
17352
```

---

# 14. Random Language

```javascript
getRandom(randomLang)
```

Returns

```text
Python
```

---

# 15. Random City

Returns

```text
Kolkata
```

---

# 16. Random Manager

```javascript
Math.random()>0.5
```

Maybe

```text
true
```

---

# 17. Create Document

```javascript
Employee.create(...)
```

This is actually

```text
Express

↓

Employee Model

↓

MongoDB

↓

Employee Collection

↓

Insert Document
```

MongoDB stores

```json
{
"name":"Riku",
"salary":17352,
"language":"Python",
"city":"Kolkata",
"isManager":true
}
```

Loop repeats

10 times.

---

# 18. After Loop

Collection becomes

```text
Employee

↓

10 Documents
```

---

# 19. Response

Your code

```javascript
res.render("index")
```

Again loads

```text
index.ejs
```

Browser receives HTML.

---

# 20. Complete Flow Diagram

```text
Browser

↓

index.ejs

↓

Click Button

↓

fetch("/generate")

↓

Express Route

↓

deleteMany()

↓

Loop

↓

Employee.create()

↓

Employee Model

↓

MongoDB

↓

Employee Collection

↓

10 Documents Stored

↓

Express

↓

res.render()

↓

Browser
```

---

# 21. How Mongoose Model Works

Your schema

```javascript
const employees_schema=new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    isManager:Boolean
})
```

is only a **Blueprint**.

Think

```text
Blueprint

↓

Employee Structure
```

Every employee must follow

```text
name

salary

language

city

isManager
```

---

Then

```javascript
mongoose.model("Employee",employees_schema)
```

creates

```text
Employee Model
```

Now you can write

```javascript
Employee.find()

Employee.create()

Employee.deleteMany()

Employee.updateOne()
```

Without model

These methods don't exist.

---

# 22. Why We Import Employee Model

```javascript
const Employee=require("./models/Employee")
```

Because Express doesn't know

```text
Which Collection?

Which Fields?

Which Database Structure?
```

The model tells Express

```text
Employee Collection

↓

name

salary

language

city

isManager
```

---

# 23. Data Flow Summary

```text
User

↓

Frontend (index.ejs)

↓

fetch()

↓

Express Route

↓

Employee Model

↓

MongoDB Database

↓

Employee Collection

↓

Stored Documents

↓

Express Response

↓

Browser
```

---

# 24. Important Concepts Used

| Concept          | Used For                              |
| ---------------- | ------------------------------------- |
| Express          | Create Web Server                     |
| Route            | Handle URL Requests                   |
| EJS              | Render HTML                           |
| Fetch API        | Send Request from Browser             |
| Mongoose         | Connect Node.js with MongoDB          |
| Schema           | Define Document Structure             |
| Model            | Perform CRUD Operations               |
| MongoDB          | Store Data                            |
| `deleteMany({})` | Remove all old documents              |
| `create()`       | Insert new document                   |
| `await`          | Wait for database operation to finish |
| `Math.random()`  | Generate random values                |
| `for` Loop       | Create 10 employees                   |

---

# 25. One-Line Revision

```text
Browser
    ↓
index.ejs
    ↓
fetch("/generate")
    ↓
Express Route
    ↓
Employee Model
    ↓
MongoDB
    ↓
Employee Collection
    ↓
Save 10 Employees
    ↓
Express Response
    ↓
Browser
```

---

# 26. Small Bug in Your Current Code

Your frontend does:

```javascript
let a = await fetch("/generate")
let r = await a.json()
```

But your backend returns:

```javascript
res.render("index")
```

`res.render()` sends **HTML**, not JSON.

So calling:

```javascript
a.json()
```

will throw an error.

### Option 1 (Recommended)

If using `fetch()`, return JSON:

```javascript
res.json({
    success: true,
    message: "10 Employees Generated"
});
```

### Option 2

If you want to reload the page after generation, don't use `fetch()`. Simply navigate to the route:

```javascript
window.location.href = "/generate";
```

or make `/generate` generate the data and then redirect:

```javascript
res.redirect("/");
```

This keeps the response type consistent and avoids parsing errors.

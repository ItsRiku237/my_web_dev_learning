## Response, Request and Routers
1. Handling post & other requests
2. Chaining of requests
3. Serving HTML files
4. Installing Postman
5. Express Router

# Express.js: Request, Response and Router

---

# Project Structure

```text
project/
│
├── main.js
│
├── routes/
│   └── blog.js
│
├── public/
│
├── templates/
│   └── index.html
│
├── package.json
│
└── node_modules/
```

---

# 1. Request (req) and Response (res)

In Express, every route receives two important objects:

```javascript
(req, res)
```

Example:

```javascript
app.get('/', (req, res) => {
    res.send("Hello World");
});
```

### Request (req)

Contains information sent by the client.

Examples:

```javascript
req.params
req.query
req.body
req.headers
req.url
```

Example:

```javascript
app.get('/user/:id', (req, res) => {
    console.log(req.params.id);
});
```

URL:

```text
/user/10
```

Output:

```text
10
```

---

### Response (res)

Used to send data back to the client.

Examples:

```javascript
res.send()
res.json()
res.sendFile()
res.status()
```

Example:

```javascript
res.send("Hello");
```

---

# 2. Handling POST & Other Requests

HTTP Methods:

```text
GET
POST
PUT
DELETE
PATCH
```

---

## GET Request

Used to fetch data.

```javascript
app.get('/', (req, res) => {
    res.send("GET Request");
});
```

URL:

```text
http://localhost:3000/
```

Output:

```text
GET Request
```

---

## POST Request

Used to create data.

```javascript
app.post('/', (req, res) => {
    res.send("POST Request");
});
```

Example:

```text
Create User
Create Blog
Register Account
```

---

## PUT Request

Used to update existing data.

```javascript
app.put('/', (req, res) => {
    res.send("PUT Request");
});
```

Example:

```text
Update User Profile
```

---

## DELETE Request

Used to remove data.

```javascript
app.delete('/', (req, res) => {
    res.send("DELETE Request");
});
```

Example:

```text
Delete User
Delete Blog
```

---

# REST API Mapping

```text
GET     -> Read Data
POST    -> Create Data
PUT     -> Update Data
DELETE  -> Delete Data
```

---

# 3. Chaining of Requests

Express allows method chaining.

Your Code:

```javascript
app.put('/', (req, res) => {
    res.send('PUT Request');
}).delete('/', (req, res) => {
    res.send('DELETE Request');
});
```

Equivalent to:

```javascript
app.put('/', (req, res) => {
    res.send('PUT Request');
});

app.delete('/', (req, res) => {
    res.send('DELETE Request');
});
```

Both are correct.

---

## Why Chaining?

Because Express methods return the app object.

```javascript
app.put(...)
   .delete(...)
   .post(...)
```

This makes code shorter.

---

# 4. Serving HTML Files

Sending HTML pages from server.

Your Code:

```javascript
app.get('/index', (req, res) => {

    res.sendFile(
        'templates/index.html',
        { root: __dirname }
    );

});
```

---

## Why __dirname?

Wrong:

```javascript
res.sendFile('templates/index.html');
```

Error:

```text
TypeError:
path must be absolute
```

Because Express needs full path.

---

Correct:

```javascript
res.sendFile(
    'templates/index.html',
    { root: __dirname }
);
```

---

## How it Works

Suppose:

```text
project/
│
├── main.js
│
└── templates/
    └── index.html
```

Request:

```text
/index
```

Flow:

```text
Browser
   ↓
GET /index
   ↓
Express Route
   ↓
sendFile()
   ↓
templates/index.html
   ↓
Browser Displays HTML
```

---

# 5. Express Router

One of the most important Express concepts.

---

## Problem Without Router

Imagine:

```text
100 Routes
200 Routes
300 Routes
```

All inside:

```javascript
main.js
```

File becomes huge.

Example:

```javascript
app.get('/blog', ...)
app.get('/blog/about', ...)
app.get('/blog/post', ...)
app.get('/user', ...)
app.get('/admin', ...)
```

Very messy.

---

## Solution: Router

Create separate route files.

Example:

```text
routes/
│
├── blog.js
├── users.js
└── admin.js
```

---

# Analysis of Your blog.js

```javascript
const express = require('express');
const router = express.Router();
```

Creates a mini Express application.

Think:

```text
app = Main Application

router = Mini Application
```

---

## Route 1

```javascript
router.get('/', (req, res) => {
  res.send('Blog home page');
});
```

Current Router URL:

```text
/
```

But router is mounted on:

```javascript
app.use('/blog', blog)
```

So actual URL becomes:

```text
/blog
```

Output:

```text
Blog home page
```

---

## Route 2

```javascript
router.get('/about', (req, res) => {
  res.send('About Blog');
});
```

Actual URL:

```text
/blog/about
```

Output:

```text
About Blog
```

---

## Route 3

```javascript
router.get('/blogpost/:slug', (req, res) => {
  res.send(`Fetch the blog post for ${req.params.slug}`);
});
```

URL:

```text
/blog/blogpost/nodejs
```

req.params:

```javascript
{
   slug: "nodejs"
}
```

Output:

```text
Fetch the blog post for nodejs
```

---

## Exporting Router

```javascript
module.exports = router;
```

Meaning:

```text
Share this router
with other files
```

---

# Analysis of Your main.js

---

## Import Router

```javascript
const blog = require('./routes/blog');
```

Imports blog router.

---

## Create Express App

```javascript
const app = express();
```

Main application object.

---

## Static Files

```javascript
app.use(express.static('public'));
```

Allows browser to access:

```text
public/style.css
public/logo.png
public/script.js
```

Directly.

Example:

```text
http://localhost:3000/logo.png
```

---

## Mount Router

```javascript
app.use('/blog', blog);
```

This is the most important line.

Meaning:

```text
Whenever URL starts with:

/blog

Use routes from:

blog.js
```

Visualization:

```text
Browser
   ↓
/blog/about
   ↓
main.js
   ↓
app.use('/blog', blog)
   ↓
blog.js
   ↓
router.get('/about')
   ↓
Response
```

---

# Relationship Between main.js and blog.js

Think of it like:

```text
main.js
│
├── Handles:
│   /
│   /index
│   /api
│
└── Delegates:
    /blog
        ↓
      blog.js
```

---

Flow:

```text
Request
   ↓
main.js
   ↓
Is URL /blog ?
   ↓
YES
   ↓
Forward to blog.js
   ↓
Matching Router Found
   ↓
Response Sent
```

---

# Complete Route Flow

```text
http://localhost:3000/blog/blogpost/nodejs

Browser
   ↓
main.js
   ↓
app.use('/blog', blog)
   ↓
blog.js
   ↓
router.get('/blogpost/:slug')
   ↓
req.params.slug = nodejs
   ↓
Response Sent
```

---

# Interview Revision

```text
req
→ Client request information

res
→ Server response object

GET
→ Read data

POST
→ Create data

PUT
→ Update data

DELETE
→ Delete data

Method Chaining
→ Multiple routes in one chain

sendFile()
→ Send HTML file

__dirname
→ Current project directory

express.Router()
→ Creates modular routes

module.exports
→ Export router

app.use('/blog', blog)
→ Mount router on /blog

req.params
→ Route parameters

express.static()
→ Serve CSS, JS, Images
```
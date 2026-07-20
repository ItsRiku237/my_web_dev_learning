## Agenda:
1. Why should we use express?
2. Why Nodemon?
3. Installing Express@4
4. Request parameters and queries
5. Static File


# Express.js Basics Notes
## 1. Why Should We Use Express?
### What is Express?

Express is a Node.js framework that helps us build:
* Websites
* REST APIs
* Backend Servers

### Without Express

Using Node.js built-in HTTP module:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(3000);
```

Works fine, but as the project grows:

```text
10 Routes
50 Routes
100 Routes
```

the code becomes difficult to manage.

---

### With Express

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000);
```

Cleaner and easier to maintain.

---

### Why Developers Use Express?

#### 1. Easy Routing

Without Express
if(req.url === "/about"){
   ...
}
```

With Express:
app.get("/about", (req,res)=>{
    res.send("About Page");
});
```

---

#### 2. Middleware Support

```javascript
app.use(express.json());
```

Used for:

* Authentication
* Logging
* Validation

---

#### 3. API Development

```javascript
app.get("/users");
app.post("/users");
app.put("/users/:id");
app.delete("/users/:id");
```

Perfect for CRUD APIs.

---

#### 4. Faster Development

* Less code
* Better readability
* Higher productivity

---

### Interview Answer

```text
Express is a lightweight Node.js framework used to create web servers and APIs quickly. It provides routing, middleware, request handling, and many utilities that make backend development easier than using the native HTTP module.
```


### Simple Express Server

server.js

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(3000, () => {
    console.log("Server Running");
});
```

Run:
```bash
nodemon server.js
```

Open:

```text
http://localhost:3000
```

Output:

```text
Welcome
```

---

# 4. Request Parameters and Query Parameters

## A. Route Parameters

Parameters are part of the URL path.

Example:

```text
/users/101
```

Here:

```text
101
```

is a route parameter.

---

### Example

```javascript
app.get("/users/:id", (req, res) => {
    res.send(req.params.id);
});
```

Visit:

```text
/users/101
```

Output:

```text
101
```

---

### req.params

```javascript
console.log(req.params);
```

Output:

```javascript
{
  id: "101"
}
```

---

### Multiple Parameters

```javascript
app.get("/users/:id/books/:bookId", (req, res) => {
    res.send(req.params);
});
```

URL:

```text
/users/5/books/10
```

Output:

```javascript
{
  id: "5",
  bookId: "10"
}
```

---

---

## B. Query Parameters

Queries come after:

```text
?
```

Example:

```text
/products?category=mobile
```

---

### Example

```javascript
app.get("/products", (req, res) => {
    res.send(req.query);
});
```

Visit:

```text
/products?category=mobile
```

Output:

```javascript
{
  category: "mobile"
}
```

---

### Multiple Query Parameters

URL:

```text
/products?category=mobile&price=10000
```

Output:

```javascript
{
  category: "mobile",
  price: "10000"
}
```

---

---

# 5. Static Files

### What Are Static Files?

Files that do not change frequently.

Examples:

```text
HTML
CSS
JavaScript
Images
Videos
PDF Files
```

---

### Example Folder Structure

```text
project
│
├── public
│   ├── Agenda.css
│   ├── app.js
│   └── logo.png
│
└── server.js
```

---

### Problem

The browser cannot access these files automatically.

We need Express Static Middleware.

---

### Solution

```javascript
app.use(express.static("public"));
```

---

### Example

server.js

```javascript
const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3000);
```

---

Folder:

```text
public
│
└── Agenda.css
```

Now browser can access:

```text
http://localhost:3000/style.css
```

---

### Why Static Files?

Without static middleware:

```text
CSS won't load
Images won't load
JavaScript won't load
```

The website appears broken.

---

# Quick Revision Notes

## Why Express?

* Node.js Framework
* Easy Routing
* Middleware Support
* REST API Development
* Less Code
* Faster Development

---

## Why Nodemon?

* Auto Restart Server
* Detects File Changes
* Saves Time
* Used During Development

---

## Install Express 4

```bash
npm init -y

npm install express@4
```

---

## Route Parameters

URL:

```text
/users/101
```

Route:

```javascript
app.get("/users/:id")
```

Access:

```javascript
req.params.id
```

---

## Query Parameters

URL:

```text
/products?category=mobile
```

Access:

```javascript
req.query.category
```

---

## Difference

```text
req.params -> Route Values
req.query  -> Query String Values
```
---
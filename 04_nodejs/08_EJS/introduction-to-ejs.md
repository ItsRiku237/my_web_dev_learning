# EJS (Embedded JavaScript) Complete Notes + Project Analysis

---

# What is EJS?

EJS stands for:

```text
Embedded JavaScript
```

It is a **Template Engine** for Express.js.

EJS allows us to:

* Write HTML
* Insert JavaScript inside HTML
* Display dynamic data
* Create reusable components
* Loop through data
* Use conditions

---

# Why EJS?

Without EJS:

```javascript
app.get("/", (req,res)=>{
    res.send(`
        <h1>Hello Adidas</h1>
    `);
});
```

Problems:

```text
❌ HTML inside JavaScript
❌ Difficult to maintain
❌ Not reusable
❌ Large projects become messy
```

---

# With EJS

main.js

```javascript
app.get("/",(req,res)=>{
    res.render("index");
});
```

index.ejs

```html
<h1>Hello Adidas</h1>
```

Benefits:

```text
✅ Clean
✅ Reusable
✅ Dynamic
✅ Easy to maintain
```

---

# What is a Template Engine?

Template Engine:

```text
Data + HTML
       ↓
Template Engine
       ↓
Final HTML
```

Example:

Data:

```javascript
{
   name:"Riku"
}
```

Template:

```html
<h1>Hello <%= name %></h1>
```

Output:

```html
<h1>Hello Riku</h1>
```

---

# Installing EJS

Install:

```bash
npm install ejs
```

---

# Configure EJS

main.js

```javascript
app.set('view engine','ejs');
```

Meaning:

```text
Express
 ↓
Use EJS
 ↓
Render .ejs files
```

---

# Folder Structure

Recommended:

```text
project/
│
├── main.js
│
├── views/
│   ├── index.ejs
│   └── navbar.ejs
│
├── package.json
│
└── node_modules/
```

---

# app.set('view engine','ejs')

Your code:

```javascript
app.set('view engine', 'ejs');
```

Meaning:

```text
Whenever
res.render()

is called

Express should use EJS.
```

---

# res.render()

Your code:

```javascript
res.render('index');
```

Express automatically searches:

```text
views/index.ejs
```

---

Flow:

```text
Browser
 ↓
GET /
 ↓
main.js
 ↓
res.render('index')
 ↓
views/index.ejs
 ↓
HTML Generated
 ↓
Browser
```

---

# Passing Data to EJS

Your code:

```javascript
let siteName = "Adidas";
let searchText = "Search Now";
let arr = [23,34,"Hiy"];

res.render('index',{
    siteName,
    searchText,
    arr
});
```

---

Data Sent:

```javascript
{
   siteName:"Adidas",
   searchText:"Search Now",
   arr:[23,34,"Hiy"]
}
```

---

# EJS Syntax

---

## 1. Output Data

Syntax:

```html
<%= variable %>
```

Example:

```html
<h1><%= siteName %></h1>
```

Output:

```html
<h1>Adidas</h1>
```

---

## 2. Execute JavaScript

Syntax:

```html
<% code %>
```

Example:

```html
<% console.log("Hello") %>
```

Runs JavaScript.

Does not display anything.

---

## 3. Unescaped HTML

Syntax:

```html
<%- variable %>
```

Example:

```html
<%- include('navbar') %>
```

Used for:

```text
Partials
Components
Reusable Layouts
```

---

# Analysis of Your main.js

---

## Import Express

```javascript
let express = require('express');
```

Imports Express.

---

## Create App

```javascript
let app = express();
```

Creates Express Application.

---

## Port

```javascript
const port = 3000;
```

Server runs on:

```text
http://localhost:3000
```

---

## Configure EJS

```javascript
app.set('view engine', 'ejs');
```

Sets EJS as template engine.

---

## Route

```javascript
app.get('/', (req,res)=>{
```

Runs when:

```text
http://localhost:3000/
```

is visited.

---

## Variables

```javascript
let siteName = "Adidas";
```

Brand Name.

---

```javascript
let searchText = "Search Now";
```

Search placeholder.

---

```javascript
let arr = [23,34,"Hiy"];
```

Array passed to EJS.

---

## Render

```javascript
res.render('index',{
    siteName,
    searchText,
    arr
});
```

Meaning:

```text
Render index.ejs
and provide data.
```

---

# Analysis of index.ejs

---

## Basic HTML

```html
<!DOCTYPE html>
<html>
```

Normal HTML page.

---

## Include Navbar

```html
<%- include('navbar'); %>
```

Most important line.

Meaning:

```text
Insert navbar.ejs here
```

Equivalent:

```html
index.ejs
     +
navbar.ejs
     ↓
Final HTML
```

---

# Why Include?

Without include:

```text
navbar copied
on every page
```

Bad practice.

---

With include:

```text
navbar.ejs
 ↓
Reusable
```

---

# Analysis of navbar.ejs

---

## Display Site Name

```html
<%= siteName %>
```

Value:

```javascript
siteName = "Adidas"
```

Output:

```html
Adidas
```

---

## Display Array Value

```html
<%= arr[0] %>
```

Array:

```javascript
[23,34,"Hiy"]
```

Output:

```html
23
```

---

## Display Search Placeholder

```html
<%= searchText %>
```

Value:

```javascript
Search Now
```

Output:

```html
<input placeholder="Search Now">
```

---

# Data Flow of Entire Project

---

Request:

```text
http://localhost:3000/
```

---

Execution Flow

```text
Browser
   ↓
GET /
   ↓
main.js
   ↓
app.get('/')
   ↓
Create Variables

siteName = Adidas

searchText = Search Now

arr = [23,34,"Hiy"]
   ↓
res.render('index')
   ↓
index.ejs
   ↓
include navbar.ejs
   ↓
navbar receives data
   ↓
siteName rendered
searchText rendered
arr rendered
   ↓
Final HTML Generated
   ↓
Browser Receives HTML
```

---

# Visual Flow

```text
main.js
│
│
├── siteName
├── searchText
└── arr
      │
      ▼
res.render('index')
      │
      ▼
index.ejs
      │
      ▼
include navbar.ejs
      │
      ▼
Use Variables
      │
      ▼
Final HTML
      │
      ▼
Browser
```

---

# Why Use EJS in Real Projects?

Used For:

```text
Admin Panels
Blogs
Portfolio Websites
E-Commerce Sites
CMS Systems
Dashboard Applications
```

---

# Common EJS Features

---

## Loop

```html
<% arr.forEach(item => { %>

    <li><%= item %></li>

<% }) %>
```

Output:

```html
<li>23</li>
<li>34</li>
<li>Hiy</li>
```

---

## Condition

```html
<% if(siteName === "Adidas"){ %>

    <h1>Welcome Adidas</h1>

<% } %>
```

---

## Include

```html
<%- include('navbar') %>
```

Reusable components.

---

# Interview Revision

```text
EJS
→ Embedded JavaScript

Purpose
→ Dynamic HTML Generation

Install
→ npm install ejs

Configure
→ app.set('view engine','ejs')

Render
→ res.render('index')

Data Passing
→ res.render('index',{data})

Display Variable
→ <%= variable %>

Run JS
→ <% code %>

Include File
→ <%- include('navbar') %>

Benefits
→ Dynamic Pages
→ Reusable Components
→ Clean Code
→ Easy Maintenance

Project Flow

Browser
 ↓
Route
 ↓
res.render()
 ↓
EJS Template
 ↓
HTML Generated
 ↓
Browser
```

---

# Suggested GitHub Folder

```text
10-EJS/
│
├── introduction-to-ejs.md
├── ejs-syntax.md
├── res-render.md
├── include-partials.md
├── passing-data-to-ejs.md
├── loops-and-conditions.md
└── ejs-project-analysis.md
```

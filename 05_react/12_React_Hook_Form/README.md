# 02_React_Hook_Form_Code_Analysis.md

# Project Flow

```
User
   │
   ▼
Fill Form
   │
   ▼
react-hook-form
   │
Validation
   │
   ▼
handleSubmit()
   │
   ▼
onSubmit(data)
   │
   ▼
fetch()
   │
   ▼
Express Backend
   │
   ▼
Response
   │
   ▼
Show Success / Error
```

---

# Step 1

Import Hook Form

```jsx
import { useForm } from "react-hook-form"
```

This gives you all form utilities.

---

# Step 2

```jsx
const {
  register,
  handleSubmit,
  setError,
  formState: { errors, isSubmitting },
} = useForm();
```

Each item has a purpose.

| Item | Purpose |
|------|----------|
| register | Connect input with Hook Form |
| handleSubmit | Validate then call function |
| setError | Show custom/server errors |
| errors | Contains validation errors |
| isSubmitting | True while form is submitting |

---

# Step 3

Register Inputs

```jsx
<input
 {...register("username")}
 />
```

Means

```
This input belongs to field:

username
```

---

# Step 4

Adding Validation

```jsx
register("username",{
 required:true
})
```

Means

```
Username cannot be empty.
```

---

Another validation

```jsx
minLength:3
```

means

```
Minimum 3 characters
```

---

Another

```jsx
maxLength:8
```

means

```
Maximum 8 characters
```

---

Your code

```jsx
register("username",{
 required:{
  value:true,
  message:"This field required"
 },
 minLength:{
  value:3,
  message:"Min length is 3"
 },
 maxLength:{
  value:8,
  message:"Max length is 8"
 }
})
```

Flow

```
User types

↓

Validation runs

↓

If invalid

↓

errors.username

↓

Message shown
```

---

# Step 5

Showing Errors

```jsx
{errors.username &&
<div className="red">
{errors.username.message}
</div>}
```

Example

```
Input

Ri

↓

Length = 2

↓

Error

↓

Min length is 3
```

---

# Password Validation

Exactly same.

```jsx
register("password",{
 required:...
 minLength:...
})
```

---

# Step 6

Submitting Form

Your code

```jsx
handleSubmit(onSubmit)
```

Flow

```
Click Submit

↓

Validate all fields

↓

No Error

↓

Call

onSubmit(data)
```

If validation fails

```
onSubmit()

does not run.
```

---

# Step 7

What is data?

Suppose user types

```
username

Riku

password

123456
```

Then

```jsx
data
```

becomes

```js
{
 username:"Riku",
 password:"123456"
}
```

---

# Step 8

Sending Data

```jsx
fetch("http://localhost:3000/",{
 method:"POST",
 headers:{
  "Content-Type":"application/json"
 },
 body:JSON.stringify(data)
})
```

Flow

```
JavaScript Object

↓

JSON.stringify()

↓

JSON

↓

POST Request

↓

Backend
```

---

# JSON.stringify()

Input

```js
{
 username:"Riku",
 password:"123"
}
```

Output

```json
{"username":"Riku","password":"123"}
```

---

# Content-Type

```jsx
headers:{
 "Content-Type":"application/json"
}
```

Means

```
Backend,

I am sending JSON.
```

---

# Await Response

```jsx
let r = await fetch(...)
```

Wait until server replies.

---

```jsx
let res = await r.text()
```

Read response as text.

---

# Step 9

Custom Error

```jsx
setError(
 "myform",
 {
   message:"Credentials invalid"
 }
)
```

Creates

```
errors.myform
```

Then

```jsx
{errors.myform.message}
```

shows

```
Credentials invalid
```

---

Another

```jsx
setError("blocked",{
 message:"User blocked"
})
```

Creates

```
errors.blocked
```

---

# Step 10

Loading State

```jsx
isSubmitting
```

Automatically becomes

```
false

↓

Click Submit

↓

true

↓

Request Finished

↓

false
```

---

Show Loading

```jsx
{isSubmitting &&
<div>Loading...</div>}
```

---

Disable Button

```jsx
<input
disabled={isSubmitting}
/>
```

Prevents multiple clicks.

---

# delay()

```jsx
const delay=(d)=>{
 return new Promise(resolve=>{
  setTimeout(resolve,d*1000)
 })
}
```

Purpose

```
Artificial delay

Only for learning/testing.
```

---

Example

```jsx
await delay(2)
```

Waits

```
2 seconds
```

before continuing.

---

# Complete Frontend Flow

```
Page Loads

↓

User fills form

↓

register stores values

↓

Submit Button

↓

handleSubmit

↓

Validation

↓

No Error

↓

onSubmit()

↓

fetch()

↓

Express Backend

↓

Response

↓

Console

↓

Custom Errors (if any)

↓

UI Updated
```

---

# Backend Analysis

Import

```js
import express from "express"
```

Creates Express server.

---

```js
import cors from "cors"
```

Allows frontend

```
localhost:5173

↓

localhost:3000
```

communication.

---

```js
import bodyParser from "body-parser"
```

Reads JSON body.

---

Enable Middleware

```js
app.use(cors())
```

Allow Cross-Origin requests.

---

```js
app.use(bodyParser.json())
```

Converts

```
JSON

↓

JavaScript Object

↓

req.body
```

---

GET Route

```js
app.get("/",...)
```

Browser visit

```
localhost:3000
```

returns

```
Hello World
```

---

POST Route

```js
app.post("/",...)
```

Frontend sends

```
JSON
```

Backend receives

```js
req.body
```

Example

```js
{
 username:"Riku",
 password:"123"
}
```

Print

```js
console.log(req.body)
```

Then reply

```
Hello World
```

---

# Complete Full Stack Flow

```
React Form

↓

Validation

↓

handleSubmit

↓

fetch()

↓

POST

↓

Express Server

↓

bodyParser

↓

req.body

↓

console.log()

↓

Response

↓

React receives response

↓

Finish
```

---

# What You Should Remember (Placement)

✅ useForm() creates and manages the form.

✅ register() connects inputs.

✅ handleSubmit() validates before calling your function.

✅ errors stores validation messages.

✅ setError() shows custom/backend errors.

✅ isSubmitting prevents multiple submissions.

✅ fetch() sends form data to backend.

✅ bodyParser.json() converts JSON into `req.body`.

✅ cors() allows React and Express to communicate.
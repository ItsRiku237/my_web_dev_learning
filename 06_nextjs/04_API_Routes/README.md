# 🚀 Next.js API Routes (App Router) - Complete Revision

> Beginner Friendly | Short Notes | Software Engineer Revision

> Link : https://nextjs.org/docs/app/api-reference/file-conventions/route

---

# 📚 Contents

1. What is an API?
2. Why API in Next.js?
3. Folder Structure
4. How API Routes Work
5. HTTP Methods
6. Request & Response
7. Real Project Flow
8. Analysis of Your Code
9. Best Practices
10. Interview Questions
11. Revision Cheat Sheet

---

# 1. What is an API?

API = **Application Programming Interface**

It is a bridge between

```
Frontend

⬇

Backend

⬇

Database
```

Example

```
React Form

↓

API

↓

MongoDB
```

Without API

Frontend cannot communicate with Backend.

---

# 2. Why API Routes in Next.js?

Normally MERN uses

```
React

↓

Express

↓

MongoDB
```

Next.js can do

```
Next.js

↓

API Route

↓

MongoDB
```

No separate Express server needed.

---

# 3. Folder Structure

```
app/

├── page.jsx

├── api/

│     ├── add/

│     │      route.js

│     │
│     ├── users/

│     │      route.js

│     │
│     └── login/

│            route.js
```

Every

```
route.js
```

becomes an API endpoint.

Example

```
app/api/add/route.js
```

URL

```
/api/add
```

---

# 4. API Flow

```
Client

↓

fetch()

↓

/api/add

↓

route.js

↓

Process Data

↓

Database (optional)

↓

Response

↓

Browser
```

---

# 5. HTTP Methods

## GET

Read Data

Example

```
Get Users
```

---

## POST

Create Data

Example

```
Register User
```

---

## PUT

Update Entire Data

Example

```
Update Profile
```

---

## PATCH

Update Some Fields

Example

```
Change Password
```

---

## DELETE

Delete Data

Example

```
Delete User
```

---

## HEAD

Returns only headers.

Rarely used.

---

# 6. Request & Response

Client sends

```jsx
fetch("/api/add",{

method:"POST",

body:...
})
```

↓

Server receives

```jsx
request
```

↓

Read body

```jsx
await request.json()
```

↓

Return

```jsx
NextResponse.json(...)
```

↓

Client receives JSON.

---

# 7. Real Project Example

## Registration

User enters

```
Name

Email

Password
```

↓

Click Register

↓

```
fetch("/api/register")
```

↓

API Route

↓

Validate

↓

Hash Password

↓

Store in MongoDB

↓

Return

```
Registration Successful
```

↓

Frontend shows

```
Success Message
```

---

# 8. Analysis of Your Code

---

## Home Page

```jsx
"use client"
```

Reason

Uses

```
Button Click

fetch()

console
```

Client Component.

---

### Data Object

```jsx
const data={

name:"Riku",

role:"Developer"

}
```

Created inside browser.

Current Value

```json
{
"name":"Riku",
"role":"Developer"
}
```

---

### fetch()

```jsx
fetch("/api/add")
```

Calls

```
app/api/add/route.js
```

URL

```
localhost:3000/api/add
```

---

### method

```jsx
method:"POST"
```

Means

```
Create/Send Data
```

---

### headers

```jsx
Content-Type:

application/json
```

Tells server

```
"I am sending JSON."
```

---

### body

```jsx
JSON.stringify(data)
```

Converts

Object

↓

JSON String

Example

Before

```js
{
name:"Riku"
}
```

After

```json
{"name":"Riku"}
```

Sent to server.

---

### await a.json()

Reads API response.

Example Response

```json
{
"success":true,
"data":{
"name":"Riku",
"role":"Developer"
}
}
```

---

### console.log(res)

Output

```
Browser Console
```

---

# API Route Analysis

---

```jsx
import { NextResponse }
```

Used for sending response.

---

### POST()

```jsx
export async function POST(request)
```

Runs when

```
POST /api/add
```

is called.

---

### request

Contains

- Headers
- Body
- Cookies
- URL

---

### request.json()

```jsx
let data=await request.json()
```

Reads body.

Received

```json
{
"name":"Riku",
"role":"Developer"
}
```

---

### console.log(data)

Output

```
VS Code Terminal
```

Because

API runs on server.

---

### Return

```jsx
NextResponse.json({

success:true,

data

})
```

Response becomes

```json
{
"success":true,

"data":{

"name":"Riku",

"role":"Developer"

}
}
```

Sent back to browser.

---

# 9. Complete Data Flow

Click

```
Button
```

↓

Browser

Creates

```js
{

name:"Riku",

role:"Developer"

}
```

↓

Convert

```jsx
JSON.stringify()
```

↓

POST

```
/api/add
```

↓

route.js receives

↓

request.json()

↓

Gets Object

↓

(Real Project)

Store in MongoDB

↓

Return

```json
{

success:true

}
```

↓

Browser

↓

await response.json()

↓

console.log()

Browser Console

---

# 10. Real Scenario

Imagine

Registration Form

User

```
Name

Email

Password
```

↓

Click Register

↓

Frontend

```jsx
fetch("/api/register")
```

↓

API Route

```jsx
request.json()
```

↓

Validate Data

↓

Hash Password

↓

Save MongoDB

↓

Return

```json
{

success:true

}
```

↓

Frontend

```
Registration Successful
```

---

# 11. Browser vs Server

## Browser

Runs

```jsx
handleClick()
```

Creates object

Calls fetch

Reads response

Shows UI

Console

```
Browser Console
```

---

## Server

Runs

```jsx
POST()
```

Reads request

Validates

Connects DB

Returns JSON

Console

```
VS Code Terminal
```

---

# 12. Best Practices

✅ Validate request data.

✅ Use async/await.

✅ Return proper status codes.

✅ Keep secrets on server.

✅ Connect database only in API/Server Components.

✅ Handle errors with try/catch.

Example

```jsx
try{

}catch(err){

return NextResponse.json({

success:false

})

}
```

---

# 13. Interview Questions

### Where do API Routes live?

```
app/api/.../route.js
```

---

### Which file handles requests?

```
route.js
```

---

### Which methods can be exported?

```jsx
GET

POST

PUT

PATCH

DELETE

HEAD
```

---

### How do you read request body?

```jsx
await request.json()
```

---

### How do you send JSON?

```jsx
NextResponse.json()
```

---

### Where does console.log() appear?

Inside API

↓

```
Terminal
```

Inside Client

↓

```
Browser Console
```

---

### Can API Routes connect to MongoDB?

✅ Yes

Very common.

---

# 14. Revision Cheat Sheet

## Client

```jsx
fetch()

↓

POST

↓

/api/add
```

---

## API Route

```jsx
POST(request)
```

↓

```jsx
await request.json()
```

↓

Process Data

↓

```jsx
NextResponse.json()
```

---

## Data Flow

```
Button Click

↓

fetch()

↓

API Route

↓

request.json()

↓

Database (Optional)

↓

NextResponse.json()

↓

Browser
```

---

## Important APIs

| API | Purpose |
|------|---------|
| `fetch()` | Call API |
| `request.json()` | Read Request Body |
| `NextResponse.json()` | Send JSON Response |
| `JSON.stringify()` | Object → JSON String |
| `response.json()` | JSON → JavaScript Object |

---

# 🎯 30-Second Revision

```
Client

↓

fetch()

↓

POST

↓

/api/add

↓

route.js

↓

request.json()

↓

Process Data

↓

MongoDB (Optional)

↓

NextResponse.json()

↓

Browser

↓

response.json()

↓

console.log()
```

---

# 🏆 Final Memory Trick

**Client sends → Server processes → Server responds → Client displays**

```
Client

(fetch)

        ↓

API Route

(request.json)

        ↓

Business Logic

(Database)

        ↓

NextResponse.json()

        ↓

Client

(response.json)
```
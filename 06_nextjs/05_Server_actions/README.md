# 🚀 Next.js Server Actions + MongoDB (Revision Guide)

> Beginner Friendly | Software Engineer Notes | App Router

---

# 📚 Contents

1. What is Server Action?
2. Why use Server Actions?
3. How Server Actions Work
4. Form Submission Flow
5. Creating a Server Action
6. MongoDB Connection
7. Store Data in MongoDB
8. Retrieve Data
9. Analysis of Your Code
10. Best Practices
11. Interview Questions
12. Revision Cheat Sheet

---

# 1. What is a Server Action?

A **Server Action** is a function that runs **only on the server**.

It allows a Client or Server Component to execute server-side code **without creating an API route**.

Instead of

```
Form

↓

API Route

↓

Database
```

You can directly do

```
Form

↓

Server Action

↓

Database
```

---

# 2. Why Use Server Actions?

Before

```
Frontend

↓

fetch()

↓

API Route

↓

Database
```

Now

```
Frontend

↓

Server Action

↓

Database
```

### Advantages

✅ Less code

✅ No fetch()

✅ No API route

✅ More secure

✅ Easy form handling

---

# 3. How Server Actions Work

```
User fills form

↓

Click Submit

↓

Form sends FormData

↓

Server Action

↓

Validate Data

↓

Database

↓

Return Response

↓

UI Updates
```

---

# 4. How to Create a Server Action

Create

```
action/

submit.js
```

```jsx
"use server";

export async function submit(formData){

    console.log(formData.get("name"));

}
```

Important

```
"use server"
```

means

```
Run on Server
```

---

# 5. Using Server Action

```jsx
import submit from "@/action/submit";
```

Attach

```jsx
<form action={submit}>
```

That's all.

No fetch()

No API.

---

# 6. FormData

When form submits,

Next.js automatically creates

```
FormData
```

Example

```
<input

name="name"
/>

↓

formData.get("name")
```

Reads value.

---

Example

```jsx
formData.get("email")
```

returns

```
riku@gmail.com
```

---

# 7. MongoDB Connection

Install

```bash
npm install mongoose
```

Create

```
lib/db.js
```

```js
import mongoose from "mongoose";

export async function connectDB(){

    if(mongoose.connections[0].readyState){
        return;
    }

    await mongoose.connect(process.env.MONGODB_URI);

}
```

---

`.env.local`

```
MONGODB_URI=

mongodb+srv://username:password@cluster.mongodb.net/mydb
```

Never expose this to client.

---

# 8. Create Model

```
models/User.js
```

```js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    name:String,

    address:String

});

export default mongoose.models.User ||

mongoose.model("User",UserSchema);
```

---

# 9. Store Data in MongoDB

```js
"use server";

import {connectDB} from "@/lib/db";

import User from "@/models/User";

export async function submit(formData){

    await connectDB();

    await User.create({

        name:formData.get("name"),

        address:formData.get("add")

    });

}
```

Flow

```
Form

↓

Server Action

↓

MongoDB

↓

Document Saved
```

---

# 10. Retrieve Data

```js
import {connectDB} from "@/lib/db";

import User from "@/models/User";

export default async function Home(){

    await connectDB();

    const users=await User.find();

    return(

        <div>

        {

        users.map(user=>(

        <p key={user._id}>

        {user.name}

        </p>

        ))

        }

        </div>

    );

}
```

Flow

```
MongoDB

↓

find()

↓

Server Component

↓

HTML

↓

Browser
```

---

# 11. Analysis of Your Code

## Home Page

```jsx
import submit_action from "@/action/form";
```

Imports Server Action.

---

```jsx
<form action={submit_action}>
```

When Submit is clicked,

Next.js automatically calls

```
submit_action()
```

No fetch() required.

---

```jsx
<input

name="name"
/>
```

Stored as

```
FormData

↓

name
```

---

```jsx
<input

name="add"
/>
```

Stored as

```
FormData

↓

add
```

---

Button

```jsx
Submit
```

↓

Calls

```
submit_action()
```

---

## action/form

```jsx
"use server";
```

Runs only on server.

---

```jsx
import fs from "fs/promises";
```

Reads/Writes files.

Server only.

---

```jsx
e.get("name")
```

Reads

```
Input name
```

---

```jsx
e.get("add")
```

Reads

```
Input address
```

---

```jsx
console.log(...)
```

Shows in

```
VS Code Terminal
```

Not Browser.

---

```jsx
fs.writeFile()
```

Creates

```
Riku.txt
```

Content

```
Name is Riku

Address is Odisha
```

---

# 12. Real Scenario

User enters

```
Name

↓

Riku

Address

↓

Odisha
```

↓

Click Submit

↓

FormData

```
name=Riku

add=Odisha
```

↓

Server Action

↓

Read Data

↓

Validate

↓

Save MongoDB

↓

Return Success

↓

User sees

```
Data Saved Successfully
```

---

# 13. API vs Server Action

| API Route | Server Action |
|------------|---------------|
| Need fetch() | No fetch() |
| Need route.js | No route.js |
| More Code | Less Code |
| REST API | Form Actions |
| Good for External APIs | Good for Forms |

---

# 14. Best Practices

✅ Keep Server Actions inside `action/`.

✅ Use `"use server"`.

✅ Validate user input.

✅ Connect MongoDB only on server.

✅ Store secrets in `.env.local`.

✅ Use Mongoose models.

---

# 15. Interview Questions

### What is Server Action?

A server-side function that can be called directly from forms or components without an API route.

---

### Why use `"use server"`?

To mark the function as server-only.

---

### Does Server Action need fetch()?

❌ No.

---

### Can Server Action access MongoDB?

✅ Yes.

---

### Can Server Action use fs?

✅ Yes.

---

### Where does `console.log()` appear?

```
Terminal
```

---

### What does `formData.get()` do?

Reads input values by their `name` attribute.

---

# 16. Revision Cheat Sheet

```
Form

↓

Submit

↓

Server Action

↓

formData.get()

↓

Validate

↓

MongoDB

↓

Success
```

---

### Important Functions

| Function | Purpose |
|----------|----------|
| `"use server"` | Server Action |
| `formData.get()` | Read Input |
| `connectDB()` | Connect MongoDB |
| `User.create()` | Insert Data |
| `User.find()` | Get Data |
| `fs.writeFile()` | Write File |
| `console.log()` | Terminal Output |

---

# 🎯 30-Second Revision

```
Server Action

↓

Runs on Server

↓

No fetch()

↓

Receives FormData

↓

formData.get()

↓

Validate

↓

MongoDB

↓

Save

↓

Return Response

↓

UI Updates
```
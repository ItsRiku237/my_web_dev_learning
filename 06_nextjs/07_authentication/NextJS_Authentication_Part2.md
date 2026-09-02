# 🚀 09_NextJS_Authentication_Part2.md

> **Next.js 14 + NextAuth.js + MongoDB**
>
> Beginner → Intermediate | Software Engineer Revision Notes

---

# 📚 Contents

1. Why Connect MongoDB?
2. Authentication Flow
3. Folder Structure
4. MongoDB Connection
5. User Schema
6. Saving User
7. Retrieving User
8. Protected Routes
9. Role Based Authentication
10. Production Flow
11. Best Practices
12. Interview Questions
13. Revision Cheat Sheet

---

# 1. Why Connect MongoDB?

Without Database

```
Google Login

↓

Logged In

↓

Close Browser

↓

No User Data Saved
```

---

With MongoDB

```
Google Login

↓

Save User

↓

Database

↓

Next Login

↓

Existing User
```

---

## Benefits

✅ Store Users

✅ Store Orders

✅ Wishlist

✅ Cart

✅ Address

✅ Payment Details

✅ User Roles

---

# 2. Authentication Flow

```
User

↓

Login with Google

↓

Google Verifies

↓

NextAuth

↓

MongoDB

↓

Check User

↓

Exists?

↓

Yes

↓

Login

↓

No

↓

Create User

↓

Session

↓

Dashboard
```

---

# 3. Production Folder Structure

```
app/

│

├── api/

│      auth/

│          [...nextauth]/

│                route.js

│

├── dashboard/

├── login/

├── profile/

│

lib/

│      db.js

│

models/

│      User.js

│      Product.js

│      Order.js

│

actions/

│

middleware.js

│

.env.local
```

---

# 4. Connect MongoDB

Install

```bash
npm install mongoose
```

---

## lib/db.js

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

## .env.local

```env
MONGODB_URI=

mongodb+srv://username:password@cluster.mongodb.net/flipkart
```

Never push this file to GitHub.

---

# 5. Create User Schema

```
models/User.js
```

```js
import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({

name:String,

email:String,

image:String,

role:{

type:String,

default:"user"

}

});

export default mongoose.models.User ||

mongoose.model("User",UserSchema);
```

---

# 6. Save User

When user logs in

```
Google

↓

NextAuth

↓

Database
```

Example

```js
await User.create({

name,

email,

image

});
```

Database

```
Users Collection

↓

{

name:"Riku",

email:"riku@gmail.com"

}
```

---

# 7. Retrieve User

```js
const user=await User.findOne({

email

});
```

or

```js
const users=await User.find();
```

Returns

```
Array of Users
```

---

# 8. Protected Routes

Public

```
/

Products

About
```

Private

```
Orders

Wishlist

Profile

Dashboard
```

Flow

```
User

↓

Logged In?

↓

Yes

↓

Open Dashboard

↓

No

↓

Redirect Login
```

---

# 9. Role-Based Authentication

Database

```
User

↓

role

↓

admin

or

user
```

Example

```js
if(user.role==="admin"){

// Allow

}
```

Flow

```
Admin

↓

Dashboard

↓

Allowed

-----------

User

↓

Dashboard

↓

Denied
```

---

# 10. Real Flipkart Flow

```
Open Flipkart

↓

Login

↓

Google

↓

Verified

↓

MongoDB

↓

User Exists?

↓

Yes

↓

Load Cart

↓

Load Wishlist

↓

Load Orders

↓

Home
```

---

# 11. Complete Production Flow

```
User

↓

Google Login

↓

NextAuth

↓

MongoDB

↓

User Collection

↓

Session Created

↓

Cookie

↓

Browser

↓

useSession()

↓

Dashboard

↓

Logout

↓

Session Removed
```

---

# 12. Where MongoDB Helps

Store

```
Users

Products

Orders

Addresses

Wishlist

Cart

Reviews

Coupons

Payments

Notifications
```

---

# 13. Example Collections

## Users

```
{

name,

email,

image,

role

}
```

---

## Products

```
{

title,

price,

stock

}
```

---

## Orders

```
{

userId,

products,

amount

}
```

---

## Wishlist

```
{

userId,

productId

}
```

---

# 14. Best Practices

✅ One DB connection.

✅ Store secrets in `.env.local`.

✅ Never expose MongoDB URL.

✅ Validate user.

✅ Use role-based authorization.

✅ Protect private pages.

✅ Use Middleware for protected routes.

---

# 15. Common Mistakes

❌ Connecting DB inside Client Component.

---

❌ Saving duplicate users.

---

❌ Exposing Secret Keys.

---

❌ Using localStorage for authentication.

---

❌ Forgetting to close database connection in non-managed environments (Mongoose connection reuse is preferred in Next.js).

---

# 16. Interview Questions

### Why MongoDB with NextAuth?

To store user information permanently.

---

### What is stored?

```
Name

Email

Image

Role
```

---

### Where is DB connection?

```
lib/db.js
```

---

### Where are Schemas?

```
models/
```

---

### Where are Secrets?

```
.env.local
```

---

### Where is Authentication Config?

```
app/api/auth/[...nextauth]/route.js
```

---

### Can NextAuth work without MongoDB?

✅ Yes.

OAuth login works.

But user data won't be stored permanently unless you configure an adapter/database.

---

### Why store users?

To

- Track Orders
- Wishlist
- Cart
- Profile
- Roles

---

# 17. Project Structure (Recommended)

```
app/

components/

models/

lib/

actions/

middleware.js

public/

.env.local

package.json
```

---

# 18. Revision Cheat Sheet

## Login

```
Google

↓

NextAuth

↓

MongoDB

↓

User

↓

Session

↓

Cookie

↓

Browser
```

---

## MongoDB Flow

```
connectDB()

↓

User.findOne()

↓

User Exists?

↓

No

↓

User.create()

↓

Session
```

---

## Folder Summary

| Folder | Purpose |
|----------|----------|
| app | Pages & API |
| components | Reusable UI |
| models | MongoDB Schemas |
| lib | Database Connection |
| actions | Server Actions |
| middleware.js | Route Protection |
| public | Images |
| .env.local | Secrets |

---

# 🎯 30-Second Revision

```
Login

↓

NextAuth

↓

Google

↓

Verified

↓

MongoDB

↓

Find User

↓

Not Found?

↓

Create User

↓

Session

↓

Cookie

↓

Browser

↓

useSession()

↓

Dashboard
```

---

# 🏆 Software Engineer Architecture

```
Frontend (Next.js)

↓

NextAuth

↓

Google / GitHub OAuth

↓

MongoDB

↓

Users Collection

↓

Session

↓

Middleware

↓

Protected Pages

↓

Dashboard / Orders / Cart / Wishlist
```

---

# 💡 Final Memory Trick

Remember the **6-Step Login Flow**:

```
1. User clicks Login

↓

2. OAuth (Google/GitHub)

↓

3. NextAuth verifies

↓

4. MongoDB finds or creates user

↓

5. Session + Cookie created

↓

6. Protected pages become accessible
```

This is the same overall authentication pattern used in many real-world applications such as Flipkart, Amazon, GitHub, and similar web apps (with implementation details varying by company).
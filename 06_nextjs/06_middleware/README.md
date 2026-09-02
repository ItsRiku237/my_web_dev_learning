# 🚀 Next.js Middleware (Latest Version) - Complete Revision Notes

> Version: Latest Next.js (App Router)
> Purpose: Quick Revision + Real-world Examples

---

# 📖 Table of Contents

1. What is Middleware?
2. Request Flow
3. When to Use Middleware
4. When NOT to Use Middleware
5. How to Create Middleware
6. NextRequest
7. NextResponse
8. Matcher
9. Redirect
10. Rewrite
11. Reading Cookies
12. Reading Headers
13. Adding Headers
14. Authentication Example
15. Authorization (Role-based)
16. Protect Multiple Routes
17. Excluding Routes
18. Middleware vs Server Components
19. Middleware vs Route Handlers
20. Middleware vs Server Actions
21. Complete Login Flow
22. Best Practices
23. Common Mistakes
24. Interview Questions

---

# 1. What is Middleware?

Middleware is a special function that runs **BEFORE** a request reaches:

- Page
- Layout
- Route Handler (API)
- Server Component

Think of Middleware as a **Security Guard** standing at the entrance of your application.

```
User Request
      │
      ▼
 Middleware
      │
      ▼
Page / Route / API
      │
      ▼
Response
```

Middleware decides whether:

- Allow request ✅
- Redirect 🔁
- Rewrite URL 🔄
- Block request ❌
- Modify request 📦

---

# 2. Where is Middleware Used?

Middleware is mainly used for:

✅ Authentication

Example:

```
User
 ↓
/dashboard

Middleware

Logged in?
      │
 Yes  │  No
      │
Dashboard   Login
```

---

✅ Authorization

Example:

```
/admin

Is user admin?

Yes → Open

No → Home Page
```

---

✅ Redirect

Example:

```
Old URL

/blog/react

↓

New URL

/articles/react
```

---

✅ Rewrite URL

Example

User types

```
/profile
```

Actually loads

```
/user/profile
```

User never sees the change.

---

✅ Add Headers

Useful for

- Version
- Security
- Tracking

---

# 3. Where NOT to Use Middleware

Never use Middleware for

❌ MongoDB Queries

❌ Fetch API Calls

❌ Heavy Calculations

❌ Upload Files

❌ Business Logic

Reason:

Middleware runs on every matching request.

Heavy work slows your entire application.

---

# 4. How to Create Middleware

Project Structure

```
app/
public/
middleware.js
package.json
```

Create

```
middleware.js
```

Example

```javascript
import { NextResponse } from "next/server";

export function middleware(request) {

    console.log("Middleware Running");

    return NextResponse.next();

}
```

Now every request passes through Middleware.

---

# 5. NextRequest

Middleware receives a special object

```javascript
request
```

Type

```javascript
NextRequest
```

Example

```javascript
export function middleware(request){

    console.log(request.url);

    return NextResponse.next();

}
```

Useful properties

```
request.url

request.cookies

request.headers

request.nextUrl

request.method
```

---

# 6. NextResponse

NextResponse controls what happens next.

There are four common methods.

---

Continue Request

```javascript
return NextResponse.next();
```

Meaning

```
Continue normally.
```

---

Redirect

```javascript
return NextResponse.redirect(
    new URL("/login", request.url)
);
```

Meaning

```
User moves to another page.
```

---

Rewrite

```javascript
return NextResponse.rewrite(
    new URL("/user/profile", request.url)
);
```

Meaning

```
Serve another page without changing browser URL.
```

---

JSON Response

Mostly used in Route Handlers, not Middleware.

---

# 7. Matcher

Without matcher

Middleware runs everywhere.

Example

```
/

About

Dashboard

Login

Register

API

Images
```

Everything.

---

Use matcher

```javascript
export const config = {

matcher:["/dashboard/:path*"]

}
```

Now only

```
/dashboard

/dashboard/profile

/dashboard/settings
```

run Middleware.

---

Multiple Matchers

```javascript
export const config={

matcher:[
"/dashboard/:path*",
"/admin/:path*"
]

}
```

---

# 8. Reading Cookies

```javascript
const token=request.cookies.get("token");
```

Returns

```
{
 name:"token",
 value:"abc123"
}
```

Read value

```javascript
token?.value
```

---

# 9. Authentication Example

Login stores JWT inside Cookie.

Middleware checks it.

```javascript
import { NextResponse } from "next/server";

export function middleware(request){

const token=request.cookies.get("token");

if(!token){

return NextResponse.redirect(
new URL("/login",request.url)
);

}

return NextResponse.next();

}

export const config={

matcher:["/dashboard/:path*"]

}
```

Flow

```
User

↓

Dashboard

↓

Middleware

↓

Cookie?

↓

No

↓

Login

↓

Yes

↓

Dashboard
```

---

# 10. Authorization Example

Suppose only Admin can open

```
/admin
```

```javascript
import { NextResponse } from "next/server";

export function middleware(request){

const role=request.cookies.get("role");

if(role?.value!=="admin"){

return NextResponse.redirect(
new URL("/",request.url)
);

}

return NextResponse.next();

}

export const config={

matcher:["/admin/:path*"]

}
```

---

# 11. Redirect Example

Old URL

```
/old-blog
```

New URL

```
/blog
```

```javascript
export function middleware(request){

return NextResponse.redirect(

new URL("/blog",request.url)

);

}
```

Browser URL changes.

---

# 12. Rewrite Example

Browser

```
/profile
```

Actually loads

```
/user/profile
```

```javascript
export function middleware(request){

return NextResponse.rewrite(

new URL("/user/profile",request.url)

);

}
```

Browser still shows

```
/profile
```

---

# 13. Reading Headers

```javascript
const userAgent=request.headers.get("user-agent");
```

Example

```
Chrome

Firefox

Safari
```

---

# 14. Adding Headers

```javascript
import { NextResponse } from "next/server";

export function middleware(request){

const headers=new Headers(request.headers);

headers.set("x-version","1.0");

return NextResponse.next({

request:{

headers

}

});

}
```

---

# 15. Middleware vs Server Component

Middleware

✅ Before request

✅ Redirect

✅ Authentication

✅ Rewrite

❌ Fetch Database

---

Server Component

✅ Read Cookies

✅ MongoDB

✅ Fetch API

✅ Render HTML

Example

```javascript
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard(){

const cookieStore=await cookies();

if(!cookieStore.get("token")){

redirect("/login");

}

return <h1>Dashboard</h1>;

}
```

---

# 16. Middleware vs Route Handler

Route Handler

```
app/api/users/route.js
```

Example

```javascript
import { NextResponse } from "next/server";

export async function GET(){

return NextResponse.json({

name:"Riku"

});

}
```

Use Route Handler for

- CRUD
- MongoDB
- APIs

NOT Middleware.

---

# 17. Middleware vs Server Action

Server Action

```javascript
"use server";

export async function createUser(formData){

// save database

}
```

Use Server Actions for

- Form Submit
- Insert
- Update
- Delete

NOT Middleware.

---

# 18. Complete Login Flow

```
User Login

↓

Route Handler

↓

Verify Password

↓

Generate JWT

↓

Store Cookie

↓

Dashboard

↓

Middleware

↓

Cookie Exists?

↓

Yes

↓

Dashboard Opens

↓

Server Component

↓

Read Cookie

↓

Fetch MongoDB

↓

Render Dashboard
```

---

# 19. Real Project Example

Suppose you built

```
E-commerce Website
```

Middleware protects

```
/cart

/profile

/orders

/admin
```

Server Components

```
Fetch Products

Fetch Orders

Fetch User
```

Route Handlers

```
Login API

Register API

Product API

Order API
```

Server Actions

```
Checkout

Place Order

Update Address

Add Product
```

---

# 20. Best Practices

✅ Keep Middleware Fast

✅ Use Matcher

✅ Don't Connect Database

✅ Don't Fetch APIs

✅ Only Request-Level Logic

✅ Use Cookies for Authentication

---

# 21. Common Mistakes

❌ Query MongoDB inside Middleware

❌ Put Heavy Logic

❌ Forget matcher

❌ Protect every route unnecessarily

❌ Store sensitive data in plain cookies

---

# 22. What Should You Learn?

✔ Creating middleware.js

✔ NextRequest

✔ NextResponse

✔ next()

✔ redirect()

✔ rewrite()

✔ request.cookies

✔ request.headers

✔ matcher

✔ Authentication

✔ Authorization

✔ Multiple Matchers

✔ Protect Routes

✔ Read Cookies

✔ Add Headers

✔ Best Practices

---

# 23. Quick Revision Table

| Feature | Learn? | Real Use |
|----------|--------|----------|
| middleware.js | ✅ | Entry point |
| NextRequest | ✅ | Read request |
| NextResponse | ✅ | Control response |
| next() | ✅ | Continue request |
| redirect() | ✅ | Send user to login |
| rewrite() | ✅ | Internal routing |
| cookies() | ✅ | JWT/Auth |
| headers() | ✅ | User-Agent, custom headers |
| matcher | ✅ | Run only on selected routes |
| Authentication | ✅ | Dashboard |
| Authorization | ✅ | Admin Panel |
| Add Headers | ✅ | Security |
| Read Headers | ✅ | Device detection |

---

# 24. One-Line Revision

👉 Middleware is a lightweight function that runs **before every matching request**. It is used for authentication, authorization, redirects, rewrites, reading cookies/headers, and modifying requests. It should **not** be used for database operations, heavy computations, or business logic.
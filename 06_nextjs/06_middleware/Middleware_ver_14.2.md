# 🚀 Next.js 14.2 Middleware (Revision Notes)

> Version: **Next.js 14.2 (App Router)**

> link 14.2v :https://nextjs.org/docs/14/app/building-your-application/routing/middleware

---

# 📚 Contents

1. Middleware Execution Flow
2. `request.nextUrl`
3. `redirect()` vs `rewrite()`
4. `matcher` vs Conditional Statements
5. Code Analysis
6. Execution Order
7. Real Scenarios
8. Best Practices
9. Revision Cheat Sheet

---

# 1. Middleware Execution Flow

Middleware runs **before a request reaches your page or API**.

Flow

```
User Request

↓

middleware.js

↓

Check Conditions

↓

Allow / Rewrite / Redirect

↓

Page or API
```

Example

```
/about

↓

middleware

↓

about/page.jsx
```

If middleware blocks it,

```
about/page.jsx

❌ Never Executes
```

---

# 2. request.nextUrl

`request.nextUrl` contains information about the current request URL.

Example

```js
request.nextUrl.pathname
```

If user visits

```
http://localhost:3000/about/team
```

Then

```js
request.nextUrl.pathname
```

returns

```
/about/team
```

Useful properties

```js
request.nextUrl.pathname
request.nextUrl.search
request.nextUrl.origin
request.nextUrl.hostname
```

---

# 3. redirect() vs rewrite()

## redirect()

Changes the URL.

Example

```js
return NextResponse.redirect(new URL("/", request.url))
```

Browser

```
/dashboard

↓

/

(URL changes)
```

---

## rewrite()

Keeps the same URL.

Example

```js
return NextResponse.rewrite(new URL("/", request.url))
```

Browser

```
URL

/about

(stays same)

↓

Actually loads

/

(Home Page)
```

User thinks they are on `/about`, but the content is from `/`.

---

## Difference

| redirect() | rewrite() |
|------------|-----------|
| URL changes | URL stays same |
| Browser knows | Browser doesn't know |
| New request | Internal routing |

---

# 4. matcher vs Conditional Statements

## Method 1 - matcher

```js
export const config = {

matcher:["/about/:path*"]

}
```

Middleware only runs for

```
/about

/about/team

/about/profile
```

Faster because other routes skip middleware.

---

## Method 2 - Conditional

```js
if(request.nextUrl.pathname.startsWith("/about"))
```

Middleware runs for **every request**, then checks conditions.

More flexible, but runs more often.

---

### Which should you use?

Small routes

✅ `matcher`

Complex logic

✅ Conditional Statements

---

# 5. Analysis of Your Code

## Import

```js
import { NextResponse } from "next/server";
```

Used to

- Redirect
- Rewrite
- Return responses

---

## Middleware Function

```js
export function middleware(request)
```

Runs before page rendering.

Every request passes through here (unless filtered by `matcher`).

---

## First Condition

```js
if(request.nextUrl.pathname.startsWith("/about"))
```

Checks

```
Does URL start with

/about ?
```

Examples

```
/about

/about/team

/about/profile

```

All return

```
true
```

---

## Rewrite

```js
return NextResponse.rewrite(new URL("/",request.url))
```

Flow

```
User types

/about

↓

Middleware

↓

Rewrite

↓

Home Page Loads

↓

Browser URL

/about
```

Important

```
URL doesn't change.
```

---

## Second Condition

```js
if(request.nextUrl.pathname.startsWith("/dashboard"))
```

Checks

```
/dashboard

/dashboard/admin

/dashboard/user
```

---

## Redirect

```js
return NextResponse.redirect(new URL("/",request.url))
```

Flow

```
User

↓

/dashboard

↓

Middleware

↓

Redirect

↓

/

Browser URL becomes

/
```

---

# 6. Execution Order

Example

User visits

```
/dashboard
```

Execution

```
Browser

↓

Request

↓

middleware()

↓

Condition Checked

↓

Redirect

↓

Home Page

↓

layout.js

↓

page.jsx
```

---

User visits

```
/about
```

Execution

```
Browser

↓

Request

↓

middleware()

↓

Rewrite

↓

Home Page Content

↓

URL still

/about
```

---

# 7. Real Scenarios

## Maintenance Mode

```js
if(maintenance){

rewrite("/maintenance")

}
```

---

## Login Check

```
Dashboard

↓

Logged In ?

↓

No

↓

Redirect Login
```

---

## Admin Panel

```
Role

↓

Admin ?

↓

Yes

↓

Continue

No

↓

Redirect
```

---

## Old URL

```
/old-blog

↓

Rewrite

↓

/blog
```

Useful after website migration.

---

# 8. Best Practices

✅ Keep middleware lightweight.

✅ Use `matcher` when possible for better performance.

✅ Use `rewrite()` when you want to keep the original URL.

✅ Use `redirect()` when you want the browser URL to change.

✅ Avoid database queries inside middleware.

---

# 9. Quick Comparison

| Feature | rewrite() | redirect() |
|----------|-----------|------------|
| URL Changes | ❌ | ✅ |
| Browser Knows | ❌ | ✅ |
| Internal Route | ✅ | ❌ |
| Sends New Request | ❌ | ✅ |

---

# 10. Revision Cheat Sheet

## Middleware Flow

```
Request

↓

middleware.js

↓

Condition

↓

rewrite()

or

redirect()

↓

Page
```

---

## Your Code Summary

```
/about

↓

rewrite("/")

↓

Home Page

↓

URL

/about

------------------

/dashboard

↓

redirect("/")

↓

Home Page

↓

URL

/
```

---

## Remember

```
startsWith()

↓

Checks Route

rewrite()

↓

Same URL

Different Content

redirect()

↓

New URL

New Request
```

---

# 🎯 30-Second Revision

```
middleware()

↓

Runs First

↓

request.nextUrl.pathname

↓

Check Route

↓

rewrite()

Keep URL

↓

redirect()

Change URL

↓

Page Loads
```
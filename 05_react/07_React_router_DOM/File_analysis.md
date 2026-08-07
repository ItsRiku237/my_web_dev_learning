# React Router DOM - File_analysis (Part 2)

> This file explains your project code, routing flow, Link, NavLink, Dynamic Routes and useParams.

---

# Table of Contents

1. Understanding Your App.jsx
2. How createBrowserRouter Works
3. Route Matching
4. Dynamic Routes
5. useParams()
6. `<a>` vs `<Link>` vs `<NavLink>`
7. Understanding Navbar.jsx
8. Navigation Flow
9. Best Practices
10. Quick Revision

---

# 1. Understanding Your App.jsx

Your Code

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /></>
  },
  {
    path: "/about",
    element: <><Navbar /><About /></>
  },
  {
    path: "/login",
    element: <><Navbar /><Login /></>
  },
  {
    path: "/User/:username",
    element: <><Navbar /><User /></>
  }
])
```

This code creates all pages of your website.

Think of it as a map.

```
URL

↓

Component
```

Like this

```
"/"

↓

Navbar

+

Home
```

```
"/about"

↓

Navbar

+

About
```

```
"/login"

↓

Navbar

+

Login
```

```
"/User/:username"

↓

Navbar

+

User
```

React Router always checks the URL first.

Then it displays the correct component.

---

# Complete Flow

```
Browser Opens

↓

localhost:5173/about

↓

RouterProvider

↓

createBrowserRouter()

↓

Find Matching Path

↓

"/about"

↓

Render

Navbar

+

About Component
```

Only these components render.

Everything else is ignored.

---

# 2. Understanding RouterProvider

Your code

```jsx
<RouterProvider router={router}/>
```

RouterProvider is the bridge between React and React Router.

Flow

```
Router Object

↓

RouterProvider

↓

React

↓

Correct Page
```

Without RouterProvider

React has no idea what routes exist.

---

# 3. Route Matching

React Router checks routes from top to bottom.

Suppose URL is

```
/login
```

React checks

```
"/"
```

No

↓

```
"/about"
```

No

↓

```
"/login"
```

YES ✅

↓

Render Login

Simple.

---

Another Example

User opens

```
/about
```

React checks

```
/

No
```

↓

```
/about

YES
```

↓

Show About page.

---

# 4. Dynamic Routes

Your route

```jsx
{
path:"/User/:username",
element:<><Navbar/><User/></>
}
```

Notice

```
:username
```

The colon means

```
Dynamic Value
```

Example URLs

```
/User/Riku

/User/Harry

/User/Raman

/User/John
```

All these open

```
User Component
```

Only the username changes.

---

Think like this

```
/User/

+

Anything

↓

Open User Component
```

---

Real MERN Examples

Instagram

```
instagram.com/virat.kohli
```

GitHub

```
github.com/facebook
```

LinkedIn

```
linkedin.com/in/riku
```

Amazon

```
product/25
```

Netflix

```
movie/654
```

All use Dynamic Routing.

---

# 5. useParams()

Suppose URL

```
/User/Riku
```

Inside User.jsx

```jsx
import { useParams } from "react-router-dom";

function User(){

const params = useParams();

console.log(params);

}
```

Output

```js
{
username:"Riku"
}
```

Access it

```jsx
params.username
```

or

```jsx
const {username}=useParams();
```

Then

```jsx
<h1>{username}</h1>
```

Output

```
Riku
```

---

Flow

```
Browser URL

/User/Riku

↓

Router

↓

username="Riku"

↓

useParams()

↓

User Component
```

---

# 6. `<a>` vs `<Link>` vs `<NavLink>`

These confuse almost every beginner.

Let's understand one by one.

---

## HTML `<a>`

Example

```jsx
<a href="/about">About</a>
```

Flow

```
Click

↓

Browser

↓

Server

↓

Reload

↓

New Page
```

Whole page reloads.

React State is lost.

Slow.

Used for

✔ External Website

Example

```jsx
<a href="https://google.com">
Google
</a>
```

---

## Link

Example

```jsx
<Link to="/about">
About
</Link>
```

Flow

```
Click

↓

React Router

↓

Component Changes

↓

No Reload
```

React State stays alive.

Fast.

Used for

✔ Internal Pages

Example

```
Home

↓

About

↓

Login
```

---

## NavLink

NavLink is exactly like Link.

But

It also tells us

```
Which page is active?
```

Example

```jsx
<NavLink
to="/about"
className={(e)=>{

return e.isActive ?

"active"

:

""

}}
>
About
</NavLink>
```

If About page is open

```
About

↓

Active

↓

Apply CSS
```

Output

```
Green Button

Underline

Bold

etc.
```

---

Comparison

| Feature | `<a>` | `<Link>` | `<NavLink>` |
|----------|--------|-----------|-------------|
| Reload Page | ✅ | ❌ | ❌ |
| React Router | ❌ | ✅ | ✅ |
| Active Class | ❌ | ❌ | ✅ |
| Internal Navigation | ❌ | ✅ | ✅ |
| External Website | ✅ | ❌ | ❌ |

---

When should we use?

Use

```
<a>
```

Only for

```
Google

YouTube

GitHub

Facebook

External Sites
```

Use

```
<Link>
```

For

```
About

Login

Home

Dashboard
```

Use

```
<NavLink>
```

For

```
Navbar

Sidebar

Menus

Dashboard Navigation
```

---

# 7. Understanding Your Navbar.jsx

Your Navbar

```jsx
<Link to="/">Home</Link>
```

Meaning

Click

↓

Go to

```
/
```

↓

Show Home Component.

---

```jsx
<Link to="/About">
```

Meaning

```
Go

↓

About Page
```

---

Your NavLink

```jsx
className={(e)=>{

return e.isActive ?

"bg-green-300"

:

""

}}
```

Meaning

If current page is

```
About
```

Apply

```
bg-green-300
```

Otherwise

Nothing.

---

Flow

```
Current URL

↓

/about

↓

NavLink Checks

↓

Is Active?

↓

Yes

↓

Apply CSS
```

---

# 8. Navigation Flow

Suppose user clicks

```
Login
```

Complete Flow

```
Click Login

↓

Link

↓

Router

↓

URL becomes

/login

↓

Match Route

↓

Navbar

+

Login

↓

Screen Updates

↓

Done
```

Notice

No browser reload.

Only components change.

---

# 9. Best Practices

✔ Always use Link for internal pages.

✔ Never use `<a>` for internal routing.

✔ Use NavLink in Navbar.

✔ Keep routes in one router file for large projects.

✔ Use Dynamic Routes for IDs and usernames.

✔ Use useParams() to read dynamic values.

---

# Quick Revision

✔ createBrowserRouter → Creates routes.

✔ RouterProvider → Uses routes.

✔ path → URL.

✔ element → Component.

✔ :username → Dynamic Route.

✔ useParams() → Reads URL values.

✔ `<a>` → Reload page.

✔ `<Link>` → No reload.

✔ `<NavLink>` → No reload + Active CSS.

✔ Internal pages → Link/NavLink.

✔ External website → `<a>`.

---

# Next Part

In Part 3 we'll learn

- Nested Routes
- Outlet
- Layout Components
- Error Pages
- useNavigate()
- Navigate Component
- 404 Page
- Protected Routes
- Real MERN Project Routing Structure
- Interview Questions
# React Router DOM - Complete Guide (Part 1)



> Link : https://reactrouter.com/home



> Level : Beginner → MERN Developer
>
> React Version : 18+
>
> Router : React Router DOM v6+

---

# Table of Contents

1. What is React Router?
2. Why do we need React Router?
3. SPA vs MPA
4. Why React needs React Router
5. Installation
6. BrowserRouter vs createBrowserRouter
7. RouterProvider
8. Route Object
9. Path
10. Element
11. Flow of React Router
12. Project Structure
13. Quick Revision

---

# 1. What is React Router?

React Router is a library that allows us to create **multiple pages inside a React application** without reloading the browser.

Instead of requesting a new HTML page from the server every time, React simply changes the component displayed on the screen.

React Router makes our React application behave like a real website.

Without React Router:

```
Home.html
About.html
Login.html
Contact.html
```

Every page reloads.

With React Router:

```
App.jsx

        │
        │
        ▼

+-------------------------+
| Navbar                  |
+-------------------------+
| Home Component          |
| About Component         |
| Login Component         |
| User Component          |
+-------------------------+
```

Only the component changes.

The browser never reloads.

---

# 2. Why do we need React Router?

Suppose you are creating a MERN project.

Pages:

```
/
Home

/about
About

/login
Login

/register
Register

/profile
Profile

/cart
Cart

/product/5
Product Details
```

Without React Router

Every click:

```
Browser

↓

Request

↓

Server

↓

New HTML Page

↓

Whole page reload
```

Slow experience.

---

With React Router

```
Browser

↓

React Router

↓

Component changes

↓

Page updates instantly
```

Fast.

Smooth.

Looks like a mobile app.

---

# Real MERN Example

Amazon

```
/
Home
```

↓

```
/product/25
```

↓

```
/cart
```

↓

```
/checkout
```

The Navbar never reloads.

Only the page content changes.

React Router makes this possible.

---

# 3. SPA vs MPA

## MPA

Meaning

```
Multi Page Application
```

Examples

```
Old websites

PHP websites

WordPress
```

Flow

```
User Click

↓

Request sent

↓

Server creates HTML

↓

Browser downloads HTML

↓

Whole page reload
```

Examples

```
Facebook (Old)

Government websites

College websites
```

Advantages

✔ SEO Friendly

✔ Easy

Disadvantages

❌ Slow

❌ Reload every page

---

## SPA

Meaning

```
Single Page Application
```

Examples

```
React

Angular

Vue
```

Flow

```
User Click

↓

React Router

↓

Component changes

↓

No Reload
```

Examples

```
Netflix

Instagram

WhatsApp Web

LinkedIn

Gmail
```

Advantages

✔ Very Fast

✔ Smooth UI

✔ Better User Experience

✔ Only required component changes

Disadvantages

❌ Slightly harder SEO (can be solved using Next.js)

---

# MPA vs SPA

| Feature | MPA | SPA |
|----------|-----|-----|
| Reload Page | ✅ Yes | ❌ No |
| Speed | Slow | Fast |
| User Experience | Normal | Excellent |
| React Uses | ❌ | ✅ |
| React Router Required | ❌ | ✅ |

---

# 4. Why React needs React Router

React itself only knows how to render components.

Example

```jsx
function App() {
  return <Home />
}
```

React always renders

```
Home Component
```

If user goes to

```
/about
```

React doesn't know what should happen.

It cannot automatically say

```
Show About Component
```

That's why React Router exists.

React Router watches the URL.

Example

```
URL

/about
```

React Router says

```
Render About Component
```

If URL becomes

```
/login
```

React Router says

```
Render Login Component
```

React only renders.

React Router decides **what to render**.

---

# 5. Installation

Install React Router

```bash
npm install react-router-dom
```

Check

```
package.json
```

You'll see

```json
"react-router-dom": "^7.x.x"
```

Now import it.

```jsx
import {
createBrowserRouter,
RouterProvider
}
from "react-router-dom";
```

---

# 6. BrowserRouter vs createBrowserRouter

There are two routing styles.

## Method 1 (Old)

```jsx
<BrowserRouter>

<Routes>

<Route />

</Routes>

</BrowserRouter>
```

Mostly used before React Router v6.4.

Still works.

---

## Method 2 (Modern)

```jsx
const router = createBrowserRouter([
...
])

<RouterProvider router={router}/>
```

Recommended.

Used in industry today.

Supports

✔ Loaders

✔ Actions

✔ Error Pages

✔ Nested Routing

---

Comparison

| BrowserRouter | createBrowserRouter |
|---------------|--------------------|
| Old Style | Modern Style |
| Small Projects | Small + Large Projects |
| Less Features | More Features |
| Still Supported | Recommended |

---

# 7. createBrowserRouter()

This creates all routes of our application.

Example

```jsx
const router = createBrowserRouter([
{
path:"/",
element:<Home/>
},
{
path:"/about",
element:<About/>
}
])
```

Think of it like

```
URL Dictionary
```

```
"/"

↓

Home Component

-------------------

"/about"

↓

About Component

-------------------

"/login"

↓

Login Component
```

React Router checks this dictionary every time URL changes.

---

# 8. RouterProvider

RouterProvider connects the router with React.

Example

```jsx
<RouterProvider router={router}/>
```

Flow

```
Router

↓

RouterProvider

↓

React App

↓

Correct Component
```

Without RouterProvider

React cannot use your routes.

---

# 9. Route Object

Each object represents one page.

Example

```jsx
{
path:"/about",
element:<About/>
}
```

Meaning

If URL becomes

```
/about
```

Show

```
About Component
```

Simple.

---

# 10. path

Path means

```
Website URL
```

Examples

```jsx
path:"/"
```

↓

```
localhost:5173/
```

---

```jsx
path:"/about"
```

↓

```
localhost:5173/about
```

---

```jsx
path:"/login"
```

↓

```
localhost:5173/login
```

---

# 11. element

element means

```
Which component should React display?
```

Example

```jsx
{
path:"/",
element:<Home/>
}
```

Meaning

```
/

↓

Home Component
```

---

Another example

```jsx
{
path:"/login",
element:<Login/>
}
```

Meaning

```
/login

↓

Login Component
```

---

You can even display multiple components.

Example

```jsx
element:(
<>
<Navbar/>
<Home/>
</>
)
```

React renders

```
Navbar

+

Home
```

at the same time.

---

# 12. Overall Flow

```
User Opens Website

        │

        ▼

App.jsx

        │

createBrowserRouter()

        │

        ▼

Router Object

        │

        ▼

RouterProvider

        │

        ▼

Current URL

        │

        ▼

Match Path

        │

        ▼

Render Component

        │

        ▼

Show Page
```

---

# 13. Recommended Folder Structure

```
src/

│

├── App.jsx

├── main.jsx

│

├── pages/

│      Home.jsx

│      About.jsx

│      Login.jsx

│      User.jsx

│

├── components/

│      Navbar.jsx

│      Footer.jsx

│

└── router/

       router.jsx
```

Large projects usually keep routing inside a separate folder.

---

# Quick Revision

✔ React Router creates multiple pages.

✔ No browser reload.

✔ Used in every React MERN project.

✔ React renders components.

✔ React Router decides which component to render.

✔ createBrowserRouter() → Creates routes.

✔ RouterProvider → Connects router with React.

✔ path → URL.

✔ element → Component to display.

✔ SPA = Fast.

✔ MPA = Reloads every page.

---

# Next File (Part 2)

We will cover:

- `<a>` vs `<Link>` vs `<NavLink>`
- Analysis of your `App.jsx`
- Analysis of your `Navbar.jsx`
- Dynamic Route (`:username`)
- `useParams()`
- Navigation Flow
- Internal Working of React Router
- Best Practices
- Interview Notes

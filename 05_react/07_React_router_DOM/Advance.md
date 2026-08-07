# React Router DOM - Complete Guide (Part 3)

> Level : Beginner → MERN Developer (Industry Concepts)

---

# Table of Contents

1. Nested Routes
2. Outlet
3. Layout Components
4. Error Page
5. useNavigate()
6. Navigate Component
7. Protected Routes
8. Real MERN Folder Structure
9. Complete Routing Flow
10. Best Practices
11. Interview Questions
12. Quick Revision

---

# 1. Nested Routes

Till now every route was separate.

Example

```
/

↓

Home
```

```
/about

↓

About
```

```
/login

↓

Login
```

But in big projects many pages share the same layout.

Example

```
Navbar

Footer

Sidebar
```

These should not be written again and again.

Instead we create **Nested Routes**.

---

Example

```jsx
const router = createBrowserRouter([
{
path:"/",
element:<Layout/>,

children:[
{
index:true,
element:<Home/>
},
{
path:"about",
element:<About/>
},
{
path:"login",
element:<Login/>
}
]
}
])
```

Now

```
Layout

↓

Home

or

About

or

Login
```

Everything is inside Layout.

---

# Why Nested Routes?

Without Nested Routes

```jsx
<>
<Navbar/>
<Home/>
</>
```

```jsx
<>
<Navbar/>
<About/>
</>
```

```jsx
<>
<Navbar/>
<Login/>
</>
```

Navbar repeats again and again.

---

With Nested Routes

```
Layout

↓

Navbar

↓

Outlet

↓

Current Page

↓

Footer
```

Much cleaner.

Used in every large project.

---

# 2. Outlet

Outlet is a placeholder.

It tells React Router

```
Put child component here.
```

Example

```jsx
import { Outlet } from "react-router-dom";

function Layout(){

return(

<>

<Navbar/>

<Outlet/>

<Footer/>

</>

)

}
```

Now

Suppose URL is

```
/
```

React renders

```
Navbar

↓

Home

↓

Footer
```

Suppose URL is

```
/about
```

React renders

```
Navbar

↓

About

↓

Footer
```

Notice

Navbar never changes.

Footer never changes.

Only Outlet changes.

---

Flow

```
URL

↓

Router

↓

Layout

↓

Outlet

↓

Current Page
```

---

# 3. Layout Components

Layout Component simply means

```
Common Design
```

Example

```
Navbar

Sidebar

Footer
```

These appear on every page.

Instead of writing

```jsx
<Navbar/>
```

100 times

Create

```
Layout.jsx
```

Example

```jsx
function Layout(){

return(

<>

<Navbar/>

<Outlet/>

<Footer/>

</>

)

}
```

Industry always uses this.

---

# 4. Error Page (404)

Suppose user opens

```
/xyz
```

But route doesn't exist.

Without Error Page

```
Blank Screen

or

React Error
```

Better

Create

```
NotFound.jsx
```

```jsx
function NotFound(){

return <h1>404 Page Not Found</h1>

}
```

Then

```jsx
{
path:"*",
element:<NotFound/>
}
```

Now

```
Unknown URL

↓

404 Page
```

---

# 5. useNavigate()

Sometimes we need to change page using JavaScript.

Not by clicking Link.

Example

After Login

```
Login Success

↓

Dashboard
```

Use

```jsx
import {useNavigate}
from
"react-router-dom";
```

Example

```jsx
const navigate = useNavigate();

navigate("/dashboard");
```

Flow

```
Button

↓

navigate()

↓

Router

↓

Dashboard
```

---

Real Example

```jsx
function login(){

navigate("/profile")

}
```

User logs in

↓

Automatically

```
Profile Page
```

---

Another Example

Go Back

```jsx
navigate(-1)
```

Go Forward

```jsx
navigate(1)
```

---

# 6. Navigate Component

Navigate is used instead of useNavigate in JSX.

Example

```jsx
import {Navigate}
from
"react-router-dom";
```

Example

```jsx
if(!user){

return <Navigate to="/login"/>

}
```

Meaning

```
No User

↓

Go Login
```

Very useful.

---

Difference

useNavigate()

↓

Used inside functions.

Navigate

↓

Used inside JSX.

---

# 7. Protected Routes

Very important.

Used in every MERN project.

Suppose

```
Dashboard
```

should only open after Login.

Flow

```
User

↓

Logged In?

↓

Yes

↓

Dashboard

-----------

No

↓

Login
```

Example

```jsx
if(user){

return <Dashboard/>

}

return <Navigate to="/login"/>
```

Real Examples

```
Amazon Orders

Google Drive

Instagram Settings

Admin Panel
```

All use Protected Routes.

---

# 8. Real MERN Folder Structure

```
src

│

├── App.jsx

├── main.jsx

│

├── router

│      router.jsx

│

├── layouts

│      Layout.jsx

│

├── pages

│      Home.jsx

│      About.jsx

│      Login.jsx

│      Register.jsx

│      Dashboard.jsx

│      NotFound.jsx

│

├── components

│      Navbar.jsx

│      Footer.jsx

│      Sidebar.jsx

│

├── hooks

│

├── services

│

└── utils
```

This structure is common in industry.

---

# 9. Complete Routing Flow

```
Browser Opens

↓

main.jsx

↓

<App/>

↓

RouterProvider

↓

createBrowserRouter()

↓

URL Checked

↓

Match Route

↓

Layout

↓

Navbar

↓

Outlet

↓

Current Page

↓

Footer

↓

Screen Updated
```

---

# 10. Best Practices

✅ Keep routes inside

```
router/router.jsx
```

instead of App.jsx.

---

✅ Use Layout Component.

---

✅ Use Outlet.

---

✅ Use NavLink for Navbar.

---

✅ Use Link for Internal Pages.

---

✅ Use Dynamic Routes

```
:userId

:slug

:productId
```

---

✅ Always create

```
404 Page
```

---

✅ Protect Private Pages.

---

# 11. Interview Questions

### Why React Router?

Because React itself cannot handle multiple pages.

---

### Difference between Link and NavLink?

Link only navigates.

NavLink navigates + gives active class.

---

### Why use Outlet?

To display child routes inside Layout.

---

### Why use useNavigate?

To navigate using JavaScript.

---

### Why Protected Routes?

To stop unauthorized users.

---

### Difference between useNavigate and Navigate?

| useNavigate | Navigate |
|-------------|----------|
| Function | Component |
| Inside Events | Inside JSX |

---

### Why Nested Routes?

To avoid repeating Navbar/Footer.

---

# 12. Quick Revision

✔ Nested Routes → Parent + Child Pages

✔ Outlet → Place where child page appears

✔ Layout → Common Navbar/Footer

✔ useNavigate() → Navigate using JavaScript

✔ Navigate → Redirect inside JSX

✔ Protected Route → Login Required

✔ "*" → 404 Page

✔ Layout + Outlet is the industry standard.

---

# Complete Learning Path

✅ Part 1

- React Router Basics
- createBrowserRouter
- RouterProvider
- Route Object
- path
- element

---

✅ Part 2

- Link
- NavLink
- Dynamic Routes
- useParams
- Navigation Flow
- Your Project Analysis

---

✅ Part 3

- Nested Routes
- Outlet
- Layout
- useNavigate
- Navigate
- Protected Routes
- 404 Page
- Industry Folder Structure

🎉 Congratulations! You now know around **90–95% of the React Router concepts** commonly used in MERN stack projects and placement-level React applications. The remaining advanced topics (loaders, actions, lazy loading, code splitting, etc.) can be learned when you start building larger production apps.
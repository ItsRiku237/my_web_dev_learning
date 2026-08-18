# 🚀 Next.js Complete Guide: Server Components vs Client Components (Part 1)

> **Level:** Beginner → Intermediate  
> **Framework:** Next.js (App Router)  
> **Language:** JavaScript  
> **Part:** 1 of 4

---

# 📚 Table of Contents

1. What is Rendering?
2. What is a Server?
3. What is a Client?
4. Traditional React Rendering
5. Why Next.js Introduced Server Components
6. What are Server Components?
7. What are Client Components?
8. Server vs Client Comparison
9. How Next.js Executes Your App
10. Understanding `"use client"`
11. Which Component Should I Use?
12. Real-Life Examples
13. Rendering Flow Diagram
14. Summary

---

# 1. What is Rendering?

Rendering means:

> **Converting React components into HTML that users can see on the screen.**

Example:

```jsx
export default function Home() {
    return <h1>Hello Riku</h1>;
}
```

React converts it into:

```html
<h1>Hello Riku</h1>
```

Then the browser displays:

```
Hello Riku
```

---

# 2. What is a Server?

A **Server** is simply a computer that runs your application and sends data to users.

Example:

```
Your Laptop (Development)

or

Vercel Server

or

AWS Server

or

Render Server
```

The server's job is:

- Read files
- Connect database
- Fetch API
- Generate HTML
- Send HTML to browser

Think of it as a chef.

```
Customer orders food

↓

Chef cooks food

↓

Food served
```

Server = Chef

---

# 3. What is a Client?

Client means:

> The user's browser.

Examples:

- Chrome
- Edge
- Firefox
- Safari

The client receives HTML from the server.

Then users interact with:

- Buttons
- Forms
- Inputs
- Animations

Think of it as:

```
Restaurant

↓

Customer eats food
```

Customer = Client

---

# 4. Traditional React Rendering

React + Vite works like this:

```
Browser

↓

Downloads JavaScript

↓

Runs React

↓

Creates HTML

↓

Shows Page
```

Diagram

```
Browser

↓

JS Bundle

↓

React

↓

HTML

↓

Screen
```

Problem?

The browser has to do all the work.

Large websites become slower.

---

# 5. Why Next.js Introduced Server Components

React applications became bigger.

Example:

Amazon

Netflix

YouTube

GitHub

Facebook

Thousands of components.

If every component runs inside the browser:

❌ More JavaScript

❌ Slower loading

❌ Poor SEO

❌ More memory usage

So Next.js says:

"Let's move most work to the server."

Now:

```
Server builds HTML

↓

Browser receives ready HTML

↓

Faster website
```

---

# 6. What are Server Components?

A Server Component runs **only on the server**.

It never runs in the user's browser.

Example:

```jsx
export default function Home() {
    return <h1>Hello</h1>;
}
```

This is automatically a Server Component.

No need to write anything.

---

Server Components can:

✅ Read files

✅ Connect database

✅ Fetch APIs

✅ Use secret keys

✅ Access environment variables

✅ Use Node.js modules

---

Server Components cannot:

❌ useState

❌ useEffect

❌ useRef

❌ Click events

❌ onChange

❌ Browser APIs

---

Think:

```
Server Component

↓

Generate HTML

↓

Send HTML

↓

Finished
```

---

# 7. What are Client Components?

Client Components run inside the browser.

They are normal React components.

Example

```jsx
"use client";

export default function Counter() {
    return <button>Click</button>;
}
```

Without

```jsx
"use client"
```

it is NOT a Client Component.

---

Client Components can use:

✅ useState

✅ useEffect

✅ useRef

✅ useContext

✅ Click Events

✅ Forms

✅ Animations

✅ Browser APIs

---

Client Components cannot safely use:

❌ fs module

❌ path module

❌ Database connection

❌ Secret API keys

❌ Environment variables (except public ones)

---

# 8. Server vs Client Comparison

| Feature | Server Component | Client Component |
|----------|------------------|------------------|
| Runs On | Server | Browser |
| Default? | ✅ Yes | ❌ No |
| Needs `"use client"` | ❌ No | ✅ Yes |
| Can use useState | ❌ | ✅ |
| Can use useEffect | ❌ | ✅ |
| Can use useRef | ❌ | ✅ |
| Can use Click Events | ❌ | ✅ |
| Can use fs module | ✅ | ❌ |
| Can connect DB | ✅ | ❌ |
| Better Performance | ✅ | ❌ |
| Smaller JS Bundle | ✅ | ❌ |
| SEO Friendly | ✅ | Mostly No |

---

# 9. How Next.js Executes Your App

Imagine this page:

```
Home

↓

Navbar

↓

Products

↓

Footer
```

Execution:

```
Browser requests page

↓

Next.js Server receives request

↓

Server Components execute

↓

HTML generated

↓

HTML sent to Browser

↓

Browser displays page

↓

Client Components become interactive
```

---

Visual Flow

```
Browser

↓

Request

↓

Next.js Server

↓

Run Server Components

↓

Generate HTML

↓

Send HTML

↓

Browser

↓

Hydration

↓

Client Components become interactive
```

---

# 10. What is Hydration?

Hydration is one of the most important concepts.

Server sends HTML first.

Example:

```
Hello

Click Me
```

Initially:

```
Only HTML

No click works.
```

Then browser downloads JavaScript.

Now:

```
Button works

State works

Events work
```

This process is called:

> **Hydration**

Diagram

```
Server HTML

↓

Browser Shows Page

↓

Downloads JS

↓

React Connects HTML

↓

Interactive Website
```

---

# 11. Understanding `"use client"`

At the top of a file:

```jsx
"use client";
```

This tells Next.js:

> "Run this component inside the browser."

Example

```jsx
"use client";

import { useState } from "react";

export default function Counter() {

    const [count,setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>

            <button onClick={()=>setCount(count+1)}>
                +
            </button>
        </>
    );
}
```

Without

```jsx
"use client"
```

Next.js throws an error.

Because:

```
useState

↓

Needs Browser

↓

Server doesn't have Browser
```

---

# 12. Which Component Should I Use?

### Use Server Components when:

✅ Fetch database

✅ Read files

✅ Call backend

✅ Show blog

✅ Product page

✅ SEO pages

✅ Dashboard data

---

Use Client Components when:

✅ Buttons

✅ Forms

✅ Search bar

✅ Theme switch

✅ Dark mode

✅ Animation

✅ useState

✅ useEffect

---

Rule:

> If the user needs to interact with it, make it a Client Component.

Otherwise,

keep it as a Server Component.

---

# 13. Real-Life Examples

---

## Example 1

Navbar

```
Logo

Home

About

Contact
```

Usually

✅ Server Component

No interaction needed.

---

## Example 2

Dark Mode Button

```
🌞

↓

🌙
```

Needs

- Click
- State

So

✅ Client Component

---

## Example 3

Blog Page

Need:

- Fetch articles
- SEO
- Fast loading

Use

✅ Server Component

---

## Example 4

Login Form

Needs:

- Input
- Typing
- Validation
- Button click

Use

✅ Client Component

---

## Example 5

Product List

Read products from database.

Use

✅ Server Component

Each product card may contain:

```
❤️ Favorite Button
```

That Favorite button

↓

Client Component

So one page can contain BOTH server and client components.

---

# 14. Mixing Server and Client Components

Example

```
Home (Server)

│

├── Navbar (Server)

│

├── Product List (Server)

│

├── Search Box (Client)

│

├── Add to Cart Button (Client)

│

└── Footer (Server)
```

Notice:

Most components stay on the server.

Only interactive parts become client components.

This is one of the biggest performance advantages of Next.js.

---

# 15. Mental Model

Think like this:

```
Server

↓

Prepare Food

↓

Client

↓

Eat Food
```

Server Components:

Prepare the page.

Client Components:

Allow users to interact with the page.

---

# 16. Revision Summary

✅ Next.js App Router uses **Server Components by default**

✅ Server Components run only on the server

✅ Client Components run in the browser

✅ `"use client"` is required for interactive components

✅ Server Components are faster and better for SEO

✅ Client Components are required for state, effects, events, and browser APIs

✅ Hydration makes Client Components interactive after the HTML is loaded

✅ A page can contain both Server and Client Components

---

# 🎯 What's Coming in Part 2

In Part 2, you'll learn:

- Every React Hook (`useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`, etc.)
- Which hooks work in Server vs Client Components
- Node.js modules (`fs`, `path`, `os`, `crypto`)
- `cookies()`, `headers()`, `redirect()`
- Browser APIs (`window`, `document`, `localStorage`)
- Database access
- Environment variables
- A complete **Server-only vs Client-only cheat sheet**
- Interview-focused comparison tables

By the end of Part 2, you'll know exactly **where every API belongs and why.**
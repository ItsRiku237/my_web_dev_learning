```
Would you like to use TypeScript? → No
Which linter would you like to use? → ESLint
Would you like to use React Compiler? → No
Would you like to use Tailwind CSS? → Yes
Would you like your code inside a src/ directory? → Yes
Would you like to use App Router? → Yes
Would you like to customize the import alias? → No
Would you like to include AGENTS.md? → No
```

# 🚀 Next.js Complete Revision Guide (JavaScript)

> Beginner Friendly | MERN Student Notes | Revision Guide

---

# Table of Contents

1. What is Next.js?
2. Why Next.js?
3. Installation & Project Setup
4. Folder Structure
5. File Explanation
6. Routing in Next.js
7. Layout System
8. Metadata
9. Font Optimization
10. Real Life Examples
11. Next.js vs React + Vite
12. Rendering Methods
13. Analysis of Your Code
14. Common Interview Questions
15. Summary

---

# 1. What is Next.js?

Next.js is a React Framework.

React only creates UI.

Next.js gives React many extra powerful features like:

- File Based Routing
- Server Side Rendering (SSR)
- Static Site Generation (SSG)
- API Routes
- Image Optimization
- SEO
- Authentication support
- Fast Loading
- Better Performance

Think like this:

```

React = Engine

Next.js = Complete Car

```

---

# 2. Installation

Create Project

```bash
npx create-next-app@latest
```

Choose

```
Project Name: my-first-next-app

TypeScript? → No

ESLint? → Yes

React Compiler? → No

Tailwind CSS? → Yes

src folder? → Yes (Recommended)

App Router? → Yes

Import Alias? → Yes (@/*)
```

Go inside project

```bash
cd my-first-next-app
```

Start server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 3. Default Folder Structure

```
my-app/

│
├── app/
│   ├── page.js
│   ├── layout.js
│   ├── globals.css
│   │
│   ├── about/
│   │      page.jsx
│   │
│   └── contact/
│          page.jsx
│
├── component/
│      Navbar.jsx
│
├── public/
│      images
│
├── package.json
│
└── next.config.js
```

---

# 4. What Each Folder Does

## app/

Contains all pages.

This is the heart of Next.js.

Example

```
app/page.js
```

becomes

```
localhost:3000
```

---

```
app/about/page.js
```

becomes

```
localhost:3000/about
```

---

```
app/contact/page.js
```

becomes

```
localhost:3000/contact
```

---

## component/

Stores reusable components.

Example

```
Navbar
Footer
Sidebar
Card
Button
```

---

## public/

Contains static files.

Example

```
public/logo.png
```

Access using

```
/logo.png
```

---

## globals.css

Global CSS

Applied to entire application.

---

## package.json

Contains

- dependencies
- scripts
- versions

---

## next.config.js

Configure Next.js.

Example

- image domains
- redirects
- headers

---

# 5. Important Files

## page.js

Represents a page.

Example

```
app/about/page.js
```

creates

```
/about
```

Every route must contain

```
page.js
```

---

## layout.js

Shared UI.

Anything inside layout appears on every page.

Examples

- Navbar
- Footer
- Sidebar

No need to import repeatedly.

---

## loading.js

Shows loading UI while fetching data.

---

## error.js

Custom error page.

---

## not-found.js

404 Page.

---

## route.js

Backend API inside Next.js.

Example

```
app/api/users/route.js
```

---

# 6. File Based Routing

React

```
Need React Router
Need Routes
Need Route
Need BrowserRouter
```

Next.js

Just create folders.

Example

```
app/

about/

page.js
```

Automatically

```
/about
```

No Router setup.

---

# 7. Layout System

Imagine

Website

```
Navbar

Home

Footer
```

About

```
Navbar

About

Footer
```

Contact

```
Navbar

Contact

Footer
```

Instead of writing Navbar/Footer in every page...

Next.js uses

```
layout.js
```

One time.

---

Flow

```
layout.js

↓

Navbar

↓

Current Page

↓

Footer
```

---

# 8. Metadata

```
export const metadata = {
title:"My Website",
description:"Learning Next.js"
}
```

Automatically changes

```
<title>
<meta>
SEO
```

Much easier than React Helmet.

---

# 9. Font Optimization

```
import { Geist } from "next/font/google"
```

Benefits

- Faster
- No Flash
- Automatic optimization
- Google font download automatically

---

# 10. Real Life Examples

## Example 1

Amazon

Needs

```
SEO

Fast loading

Server rendering
```

React alone

Hard.

Next.js

Built-in.

---

## Example 2

Blog Website

Google should index pages.

React

Bad SEO.

Next.js

Excellent SEO.

---

## Example 3

News Website

Articles change every minute.

Need

Server Rendering

Next.js supports it.

---

## Example 4

E-Commerce

Products

Reviews

Authentication

Payments

Dashboard

API

Everything inside one project.

---

## Example 5

Portfolio

Need

Fast loading

Image optimization

SEO

Next.js is perfect.

---

# 11. Why Not React + Vite?

React + Vite is awesome.

But it only builds frontend.

Example

```
React

↓

UI only
```

Need separately

```
Express

MongoDB

Authentication

SEO

SSR

Routing
```

Lots of setup.

---

Next.js

```
One framework

↓

Frontend

↓

Backend

↓

Routing

↓

API

↓

SEO

↓

Rendering
```

Everything together.

---

# 12. React + Vite vs Next.js

| React + Vite | Next.js |
|--------------|----------|
| Client Side | Client + Server |
| Need React Router | Built-in Routing |
| Need Express Backend | API Routes Built-in |
| SEO Poor | SEO Excellent |
| Manual Image Optimization | Automatic |
| No SSR | SSR Supported |
| No SSG | SSG Supported |
| Faster Development | Yes |
| Better Performance | Yes |

---

# 13. Rendering Methods

## CSR

Client Side Rendering

Browser builds page.

Example

React

---

## SSR

Server Side Rendering

Server builds page first.

Better SEO.

---

## SSG

Static Site Generation

HTML generated during build.

Very Fast.

Example

Documentation website.

---

## ISR

Incremental Static Regeneration

Static page updates automatically.

Best for blogs.

---

# 14. Analysis of Your Code

---

## layout.js

```js
import { Geist, Geist_Mono } from "next/font/google";
```

Imports optimized Google fonts.

No CDN required.

---

```js
import "./globals.css";
```

Loads global CSS.

Available everywhere.

---

```js
import Navbar from "@/component/Navbar";
```

Imports Navbar.

Because it's inside layout,

Navbar appears on every page.

No need to import again.

---

```js
const geistSans = Geist({
variable:"--font-geist-sans",
subsets:["latin"]
});
```

Creates Geist font.

Stores CSS variable.

---

```js
const geistMono = Geist_Mono(...)
```

Creates monospace font.

Useful for code blocks.

---

```js
export const metadata={
title:"My First Next App",
description:"Generated by me through next app"
}
```

Controls

```
<title>

<meta>

SEO
```

---

```js
export default function RootLayout({children})
```

Every page becomes

```
Navbar

↓

Current Page(children)

↓

Footer (if added)
```

children means

Current Route.

---


```js
{children}
```

Current page content appears here.

---

# Layout Flow

```text
layout.js
│
├── Navbar
│
└── Children
      │
      ├── Home Page
      ├── About Page
      └── Contact Page
```

```js
<html
className={`${geistSans.variable} ${geistMono.variable}`}
>
```

Applies fonts globally.

---

```js
<body>

<Navbar/>

{children}

</body>
```

Every page shows Navbar automatically.

---

## page.js

```js
const page = () => {
```

Home Page.

Accessible

```
localhost:3000
```

---

Returns

```
I am a home page
```

Simple React Component.

---

## app/about/page.jsx

Accessible

```
localhost:3000/about
```

Shows

```
Problem solved by Next.js

•

Full Stack

•

File Routing

•

Optimized Rendering
```

No React Router required.

Folder name becomes URL.

---

## app/contact/page.jsx

```js
<Contact></Contact>
```

Problem

```
Contact is not imported.
```

Need

```js
import Contact from "@/component/Contact";
```

Otherwise

```
ReferenceError

Contact is not defined
```

---

## Navbar Component

Since Navbar is inside layout,

Every page

```
/

/about

/contact

```

automatically displays

```
Navbar
```

Very powerful feature.

---

# 15. Advantages of Next.js

✅ SEO

✅ Better Performance

✅ Server Rendering

✅ Static Generation

✅ API Routes

✅ Authentication Support

✅ Optimized Images

✅ Automatic Code Splitting

✅ Fast Routing

✅ Production Ready

---

# 16. Interview Questions

### Why Next.js instead of React?

Because it provides Routing, SSR, SEO, API Routes, Image Optimization, and better performance out of the box.

---

### Why layout.js?

To share UI across pages.

Example

Navbar

Footer

Sidebar

---

### Why page.js?

Every route needs one page.js.

It represents that page.

---

### Why metadata?

To set title and description for SEO.

---

### Why use App Router?

Simpler folder-based routing with layouts, loading UI, server components, and nested routes.

---

# 17. Revision Summary

✅ Next.js = React Framework

✅ app/ contains pages

✅ page.js creates routes

✅ layout.js shares UI

✅ metadata controls SEO

✅ next/font optimizes fonts

✅ Navbar in layout appears everywhere

✅ Folder name becomes URL

✅ Better than React for SEO

✅ Can build frontend + backend together

✅ Excellent for production applications

---

# 🎯 What You Learned

- Installation
- Folder Structure
- Routing
- Layout
- Metadata
- Font Optimization
- File Analysis
- React vs Next.js
- Real Life Use Cases
- Interview Questions

Congratulations 🎉
You have completed the fundamentals of Next.js App Router.
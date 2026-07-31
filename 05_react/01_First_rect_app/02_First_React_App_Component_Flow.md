# 02_First_React_App_Component_Flow.md

> **Project Name:** First_react_app

> **Goal:** Understand how every React file connects together and how React renders the application.

---

# Project Folder Structure

```text
First_react_app/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │      ├── Navbar.jsx
│   │      ├── Card.jsx
│   │      └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── package.json
└── vite.config.js
```

---

# Responsibility of Every File

## main.jsx

**Role**

Entry point of the React application.

Its job is:

* Start React
* Load App component
* Attach React to HTML

Think of it as

```text
Main Gate of the Application
```

---

## App.jsx

**Role**

Main Component.

Responsibilities

* Import Components
* Arrange Page Layout
* Pass Data (Props)

Think of it as

```text
Manager of all Components
```

---

## Navbar.jsx

Displays

```text
Navigation Bar
```

---

## Card.jsx

Displays

```text
Reusable Card
```

You create one Card component,

but use it many times.

---

## Footer.jsx

Displays

```text
Footer
```

---

# File Connection

```
main.jsx
    │
    ▼
App.jsx
    │
    ├────────► Navbar.jsx
    │
    ├────────► Card.jsx
    │
    └────────► Footer.jsx
```

Notice

Everything starts from

```text
main.jsx
```

---

# Your App.jsx

```jsx
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
```

Meaning

```text
App.jsx

↓

Import Navbar

↓

Import Footer

↓

Import Card
```

Now App can use them.

---

# Component Usage

```jsx
<Navbar/>

<Card/>

<Footer/>
```

These look like HTML tags,

but actually they are

```text
React Components
```

---

# Card Component Reuse

Your code

```jsx
<Card title="Card 1" description="Card 1 desc."/>

<Card title="Card 2" description="Card 2 desc."/>

<Card title="Card 3" description="Card 3 desc."/>

<Card title="Card 4" description="Card 4 desc."/>

<Card title="Card 5" description="Card 5 desc."/>
```

React creates

```text
Card

↓

Card

↓

Card

↓

Card

↓

Card
```

Only one component is written,

but it is reused five times.

This is called

```text
Component Reusability
```

---

# Visual Layout

```
Navbar

──────────────────────────────

Card 1

Card 2

Card 3

Card 4

Card 5

──────────────────────────────

Footer
```

---

# Rendering Flow

Step 1

```
Browser Opens

↓

localhost:5173
```

---

Step 2

Vite loads

```
index.html
```

---

Step 3

index.html loads

```
main.jsx
```

---

Step 4

main.jsx renders

```
<App/>
```

---

Step 5

App.jsx runs

```
↓

Navbar

↓

Cards

↓

Footer
```

---

Step 6

React combines everything.

---

Step 7

Browser displays

```
Navbar

↓

Cards

↓

Footer
```

---

# Complete Flow Diagram

```
Browser

↓

index.html

↓

main.jsx

↓

<App/>

↓

App.jsx

├─────────────┐
│             │
▼             ▼

Navbar      Footer
      │
      ▼

Card

Card

Card

Card

Card

↓

React combines all Components

↓

Browser Screen
```

---

# Parent and Child Relationship

```
App.jsx
```

is the

```text
Parent Component
```

because it imports

```
Navbar

Card

Footer
```

These are

```text
Child Components
```

Diagram

```
           App

      /      |      \

Navbar    Card    Footer
```

---

# Why We Use Components?

Without Components

```
App.jsx

1000+ lines
```

Very difficult to manage.

---

With Components

```
Navbar.jsx

Card.jsx

Footer.jsx
```

Every file has one responsibility.

This makes code

* Easy to Read
* Easy to Update
* Easy to Reuse

---

# Import and Export Flow

Suppose

Navbar.jsx

```jsx
export default Navbar
```

means

```
I am sharing this component.
```

Then

App.jsx

```jsx
import Navbar from "./components/Navbar"
```

means

```
Bring Navbar into App.jsx
```

Same for

```
Card

Footer
```

---

# One-Line Summary

```
Navbar exports

↓

App imports

↓

App displays Navbar
```

Same flow for every component.

---

# Overall Project Flow

```
main.jsx

↓

App.jsx

↓

Navbar

↓

Card

↓

Footer

↓

React creates UI

↓

Browser displays Web Page
```

---

# Quick Revision

```
main.jsx
↓

App.jsx
↓

Imports Components
↓

Navbar

Card

Footer
↓

React combines everything
↓

Browser shows UI
```

---

# Placement Notes

✅ `main.jsx` is the entry point.

✅ `App.jsx` is the main component.

✅ Components are reusable.

✅ `import` brings a component into another file.

✅ `export default` makes a component available for use in other files.

✅ `App.jsx` is the Parent Component.

✅ `Navbar`, `Card`, and `Footer` are Child Components.

✅ React renders the UI by combining all components into one page.

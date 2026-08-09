# 03_Props_vs_UseContext_Comparison.md

# Props vs useContext

This is the most important comparison for React interviews and MERN development.

---

# Without useContext (Props)

## Flow

```text
App
 │
 │ count
 ▼
Navbar
 │
 │ count
 ▼
Button
 │
 │ count
 ▼
Component_1
```

Every component forwards the data.

Even if a component doesn't use it.

This is called **Prop Drilling**.

---

## Example

### App.jsx

```jsx
<Navbar count={count} />
```

---

### Navbar.jsx

```jsx
<Button count={props.count} />
```

Navbar never uses `count`.

It only forwards it.

---

### Button.jsx

```jsx
<Component_1 count={props.count}/>
```

Again Button only forwards it.

---

### Component_1.jsx

```jsx
<div>{props.count}</div>
```

Finally the last component uses it.

---

## Problem

Imagine

```text
App
 ↓
Navbar
 ↓
Sidebar
 ↓
Menu
 ↓
Button
 ↓
Component
```

If `Component` needs `count`

Every component must receive

```jsx
count={count}
```

even if they never use it.

This becomes difficult to manage.

---

# With useContext

## Flow

```text
App
 │
 ▼
Provider
 │
 ├───────────────┐
 ▼               ▼
Button      Component_1
```

No prop drilling.

Any child can directly read the value.

---

## Example

### App.jsx

```jsx
<counterContext.Provider
value={{count,setCount}}
>

<Navbar/>

</counterContext.Provider>
```

---

### Button.jsx

```jsx
const value = useContext(counterContext)
```

No props required.

---

### Component_1.jsx

```jsx
const counter = useContext(counterContext)
```

Again,

No props required.

---

# Main Difference

## Props

```text
Parent

↓

Child

↓

Child

↓

Child
```

Data moves manually.

---

## Context

```text
Provider

↓

Any Child
```

Data is available everywhere below Provider.

---

# Prop Drilling

Example

```text
App

↓

Navbar

↓

Button

↓

Component
```

Only Component needs the data.

But

Navbar

Button

also receive it.

This unnecessary forwarding is called

> **Prop Drilling**

---

# useContext removes Prop Drilling

Instead of

```text
App

↓

Navbar

↓

Button

↓

Component
```

React does

```text
Provider

↓

Component
```

Direct access.

---

# Your Project Comparison

## Without Context

```jsx
<App>

↓

<Navbar count={count}>

↓

<Button count={count}>

↓

<Component_1 count={count}>
```

---

## With Context

```jsx
<App>

↓

<Provider value={{count,setCount}}>

↓

<Navbar>

↓

<Button>

↓

<Component_1>
```

No props passed.

---

# Advantages of Props

✅ Easy to understand

✅ Best for Parent → Child communication

✅ Makes data flow clear

---

# Disadvantages of Props

❌ Prop drilling

❌ Lots of repeated code

❌ Hard to maintain in large projects

---

# Advantages of Context

✅ No prop drilling

✅ Cleaner code

✅ Easy to access shared data

✅ Good for global data

---

# Disadvantages of Context

❌ Don't use it for every state

❌ Too many Context updates can cause unnecessary re-renders

❌ Local state is usually better for component-specific data

---

# When to Use Props?

Use Props when:

- Parent sends data to one or two child components.
- The state is local.
- Only a few components need the data.

Example:

```text
Card

↓

Title

↓

Image
```

Props are perfect.

---

# When to Use Context?

Use Context when many components need the same data.

Examples:

- Logged-in User
- Dark / Light Theme
- Language
- Shopping Cart
- Authentication
- Notifications

---

# Interview Question

## Why useContext instead of Props?

Answer:

> Props are great for passing data to nearby child components. But when the same data is needed by many deeply nested components, passing props through every intermediate component becomes prop drilling. `useContext` solves this by allowing any descendant component to access shared data directly from a Provider.

---

# Quick Revision

## Props

```text
Parent

↓

Child

↓

Child
```

Manual passing.

---

## useContext

```text
Provider

↓

Any Child
```

Direct access.

---

## Prop Drilling

```text
App

↓

Navbar

↓

Button

↓

Component
```

Unnecessary forwarding.

---

## Best Practice

| Situation | Use |
|-----------|-----|
| Parent → Child | Props |
| Global data | useContext |
| Theme | useContext |
| Authentication | useContext |
| Shopping Cart | useContext |
| One component only | useState + Props |

---

# MERN Placement Revision

```text
Props
✔ Parent → Child
✔ Small apps
✔ Local state

Context
✔ Global state
✔ Avoid prop drilling
✔ Authentication
✔ Theme
✔ User Data
✔ Cart
```
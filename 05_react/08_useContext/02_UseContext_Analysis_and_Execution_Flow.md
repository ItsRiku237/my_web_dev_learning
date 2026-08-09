# 02_UseContext_Analysis_and_Execution_Flow.md

# React useContext - Code Analysis & Execution Flow

---

# Project Structure

```text
App.jsx
│
├── counterContext.Provider
│
└── Navbar.jsx
      │
      └── Button.jsx
              │
              └── Component_1.jsx
```

---

# Step 1 : Context Creation

**context/context.jsx**

```jsx
import { createContext } from "react";

export const counterContext = createContext(0);
```

### What happens?

```jsx
createContext(0)
```

creates a Context object.

The value `0` is only the **default value**.

It is used only when there is **no Provider**.

It does **NOT** mean the context value is always 0.

---

# Step 2 : Provider

In App.jsx

```jsx
<counterContext.Provider value={{count,setCount}}>
```

This Provider shares data with every child component.

Everything inside Provider can access

```jsx
count
setCount
```

without props.

---

# Visual

```text
Provider
│
├── count
└── setCount
```

These become available everywhere below Provider.

---

# Step 3 : Children

```text
App
│
└── Provider
      │
      └── Navbar
              │
              └── Button
                      │
                      └── Component_1
```

Every child can use

```jsx
useContext(counterContext)
```

---

# Step 4 : Reading Context

Inside Button.jsx

```jsx
const value = useContext(counterContext)
```

React finds the nearest

```jsx
<counterContext.Provider>
```

and returns

```jsx
{
   count,
   setCount
}
```

Now

```jsx
value.count
value.setCount
```

are available.

---

Inside Component_1.jsx

```jsx
const counter = useContext(counterContext)
```

Again React returns

```jsx
{
   count,
   setCount
}
```

Now

```jsx
counter.count
```

works.

---

# Important

Button and Component_1 are NOT talking to each other.

Both are reading the same Provider.

```text
Provider
   │
   ├── Button
   │      │
   │      └── useContext()
   │
   └── Component_1
          │
          └── useContext()
```

---

# Step 5 : Button Click

```jsx
<button
onClick={()=>{
value.setCount(count=>count+1)
}}
>
```

Execution

```text
Click

↓

setCount()

↓

count changes

↓

App re-renders

↓

Provider gets new value

↓

Every consumer gets updated value

↓

Component_1 shows new count
```

---

# Why Component_1 updates automatically?

Because it uses

```jsx
useContext(counterContext)
```

Whenever Provider value changes

React automatically updates every consumer.

No manual update required.

---

# Data Flow

```text
App

↓

Provider

↓

Button uses context

↓

Button calls setCount()

↓

count changes

↓

Provider value changes

↓

Component_1 gets new count

↓

UI updates
```

---

# What happens internally?

Initially

```text
count = 0
```

Provider sends

```text
{
 count:0,
 setCount:function
}
```

Button receives

```text
value.count = 0
```

Component_1 receives

```text
counter.count = 0
```

UI

```text
I am Component_1 counter 0
```

---

User clicks

```text
I am a button
```

Execution

```text
setCount()

↓

count = 1

↓

App renders again

↓

Provider value becomes

{
 count:1,
 setCount:function
}

↓

All consumers receive new value

↓

Component_1

shows

1
```

---

# Which Components Re-render?

Initial Render

```text
App

Navbar

Button

Component_1
```

Click Button

```text
setCount()

↓

App

Navbar

Button

Component_1
```

All render again because App state changed.

---

# Why Navbar also re-renders?

Because

```jsx
count
```

belongs to App.

Whenever App state changes,

App executes again.

Children are created again.

So

```text
Navbar

Button

Component_1
```

render again.

---

# Why useContext is useful?

Without context

```text
App

↓

Navbar

↓

Button

↓

Component_1
```

Every component must pass props.

Even Navbar doesn't use count.

Still it forwards it.

This is unnecessary.

---

With Context

```text
App

↓

Provider

↓

Component_1

Button
```

Any component directly accesses data.

No middle passing.

---

# Memory Trick

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

Data travels manually.

---

## Context

```text
Provider

↓

Everyone below can read
```

No forwarding.

---

# When should we use Context?

Use Context when data is needed in many components.

Examples

- Theme (Dark / Light)
- Login User
- Language
- Cart
- Notifications
- Authentication
- Count shared by many components

---

# When NOT to use Context?

Do NOT use Context for data used by only one child.

Example

```text
App

↓

Button
```

Simply use props.

Context would be unnecessary.

---

# Quick Revision

### createContext()

```jsx
const Context = createContext(defaultValue)
```

Creates Context.

---

### Provider

```jsx
<Context.Provider value={data}>
```

Shares data.

---

### useContext()

```jsx
const value = useContext(Context)
```

Reads shared data.

---

### Flow

```text
createContext()

↓

Provider

↓

useContext()

↓

Read value

↓

Update UI
```

---

# Interview Answer (30 Seconds)

> **useContext is a React Hook used to share data between components without passing props manually. We create a Context using `createContext()`, wrap components with `Provider`, and access the value anywhere below using `useContext()`. It helps avoid prop drilling and is commonly used for authentication, themes, user data, and global state.**
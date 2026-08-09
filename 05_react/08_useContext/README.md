# Context API (useContext) - Complete Guide (Part 1)

> Level: Beginner → MERN Developer
>
> React Hook: `useContext()`

---

# Table of Contents

1. What is Context API?
2. Why do we need Context API?
3. Problem Without Context API (Prop Drilling)
4. Solution using Context API
5. What is createContext()?
6. What is Provider?
7. What is useContext()?
8. How Context API Works Internally
9. Complete Flow Diagram
10. Real MERN Examples
11. When Should We Use Context API?
12. When Should We NOT Use Context API?
13. Best Practices
14. Interview Questions
15. Quick Revision

---

# 1. What is Context API?

Context API is a feature provided by React that allows us to **share data between multiple components without passing props manually at every level.**

Instead of passing data through every parent component, any child component can directly access the shared data.

Think of Context API as a **shared storage** for your React application.

---

## Simple Definition

> Context API lets components access the same data without prop drilling.

---

## Example

Suppose your project looks like this:

```
App
│
├── Navbar
│      │
│      └── Button
│              │
│              └── Component_1
```

Suppose **App** has

```jsx
count = 10
```

and **Component_1** needs this count.

Without Context API:

```
App

↓

Navbar

↓

Button

↓

Component_1
```

Count has to travel through every component.

With Context API:

```
            Context

               ↑

App -------- Provider

               ↓

Component_1
```

Component_1 directly gets the value.

Navbar and Button don't need to pass anything.

---

# 2. Why do we need Context API?

Imagine you are creating an E-Commerce website.

Every page needs

```
User

Cart

Theme

Language

Dark Mode
```

Without Context API

```
App

↓

Navbar

↓

Menu

↓

Sidebar

↓

Profile

↓

Avatar
```

Every component must pass

```jsx
user
```

even if it doesn't use it.

This creates unnecessary code.

---

Using Context API

```
App

↓

Provider

↓

Any Component

↓

Gets user directly
```

Cleaner.

Easier.

More scalable.

---

# 3. Problem Without Context API (Prop Drilling)

This problem is called

# Prop Drilling

Meaning

Passing props through components that don't even use them.

Example

```
App

↓

Navbar

↓

Button

↓

Component_1
```

Suppose only Component_1 needs

```
count
```

Still we must do

App

```jsx
<Navbar count={count}/>
```

Navbar

```jsx
<Button count={count}/>
```

Button

```jsx
<Component_1 count={count}/>
```

Component_1

```jsx
<h1>{count}</h1>
```

Notice

Navbar never used count.

Button never used count.

Yet both receive it.

This is called

```
Prop Drilling
```

---

Problems

❌ Too many props

❌ Difficult to maintain

❌ Confusing

❌ Large code

---

# 4. Solution using Context API

Instead of sending

```
App

↓

Navbar

↓

Button

↓

Component_1
```

We create one Context.

```
App

↓

Provider

↓

Context

↓

Component_1
```

Now Component_1 reads directly from Context.

No prop drilling.

---

# 5. What is createContext()?

createContext() creates a Context object.

Example

```jsx
import { createContext } from "react";

export const counterContext = createContext();
```

Think of it like creating an empty container.

```
Counter Context

┌──────────────┐
│              │
│   Empty      │
│              │
└──────────────┘
```

Later Provider fills it.

---

Usually create a file

```
context/context.jsx
```

Example

```jsx
import { createContext } from "react";

export const counterContext = createContext();
```

That's all.

---

# 6. What is Provider?

Provider stores data inside the Context.

Example

```jsx
<counterContext.Provider value={count}>

<App/>

</counterContext.Provider>
```

Flow

```
Provider

↓

Stores

↓

count

↓

Every Child Can Access
```

Provider acts like a Wi-Fi Router.

```
Wi-Fi Router

↓

Internet

↓

All Devices
```

Similarly

```
Provider

↓

Context Data

↓

All Child Components
```

---

Provider can store

Number

```jsx
value={10}
```

String

```jsx
value={"Riku"}
```

Object

```jsx
value={{count,setCount}}
```

Array

```jsx
value={[1,2,3]}
```

Function

```jsx
value={setCount}
```

Most common

```jsx
value={{count,setCount}}
```

because we send both data and function.

---

# 7. What is useContext()?

useContext() reads data from the Provider.

Example

```jsx
const value = useContext(counterContext);
```

React searches upward.

```
Component

↑

Provider Found

↑

Returns Value
```

Now

```jsx
console.log(value)
```

Output

```js
{
count:0,
setCount:f()
}
```

Access data

```jsx
value.count
```

Update

```jsx
value.setCount()
```

---

Another example

```jsx
const {count,setCount}=useContext(counterContext);
```

Now

```jsx
count
```

instead of

```jsx
value.count
```

Cleaner.

---

# 8. How Context API Works Internally

Flow

```
createContext()

↓

Creates Empty Context

↓

Provider

↓

Stores Data

↓

React Saves It

↓

useContext()

↓

Reads Data

↓

Component Uses It
```

React automatically connects Provider and useContext.

No manual connection needed.

---

# 9. Complete Flow Diagram

```
App.jsx

↓

createContext()

↓

counterContext

↓

Provider

↓

value={count,setCount}

↓

Navbar

↓

Button

↓

Component_1

↓

useContext()

↓

Reads count
```

Notice

Navbar doesn't pass props.

Button doesn't pass props.

Component_1 directly gets the value.

---

# 10. Real MERN Examples

Context API is commonly used for:

### User Login

```
Current User
```

### Theme

```
Dark Mode

Light Mode
```

### Shopping Cart

```
Cart Items
```

### Language

```
English

Hindi

Japanese
```

### Notifications

```
Unread Messages
```

### Authentication

```
Login Status
```

---

# 11. When Should We Use Context API?

Use Context API when many components need the same data.

Examples

✅ Logged in user

✅ Theme

✅ Language

✅ Authentication

✅ Shopping Cart

✅ Notifications

✅ Sidebar State

---

# 12. When Should We NOT Use Context API?

Don't use Context API for every variable.

Avoid for

```
Button Color

Single Input

Local Counter

Modal Open

One Component State
```

If only one or two components use the data,

props are enough.

---

# 13. Best Practices

✅ Create a separate

```
context/
```

folder.

---

✅ Give meaningful names

```
UserContext

ThemeContext

CartContext

CounterContext
```

---

✅ Store only shared state.

---

✅ Use objects

```jsx
value={{count,setCount}}
```

instead of multiple Providers.

---

✅ Don't put every state inside Context.

Only shared state.

---

# 14. Interview Questions

## What is Context API?

It allows components to share data without prop drilling.

---

## What problem does Context API solve?

Prop Drilling.

---

## Difference between Props and Context?

Props

```
Parent

↓

Child
```

Context

```
Provider

↓

Any Child
```

---

## Can Context replace Redux?

Small projects

✅ Yes

Large applications

❌ Usually Redux Toolkit is preferred.

---

## Can Provider store functions?

Yes.

Example

```jsx
value={{count,setCount}}
```

---

# 15. Quick Revision

✅ Context API shares data globally.

✅ Solves Prop Drilling.

✅ createContext() → Creates Context.

✅ Provider → Stores Data.

✅ useContext() → Reads Data.

✅ Provider wraps components.

✅ Child components access data directly.

✅ Common use:

- Authentication
- Theme
- Cart
- Language
- User
- Notifications

---

# Next Part

We'll analyze **your project** in detail:

```
App.jsx
    │
    ▼
Navbar.jsx
    │
    ▼
Button.jsx
    │
    ▼
Component_1.jsx
```

Topics:

- How data flows **without Context API**
- How data flows **with Context API**
- Line-by-line analysis of every file
- Why Navbar and Button don't need props anymore
- What happens when `setCount()` is called
- Which components re-render and why
- Complete execution flow
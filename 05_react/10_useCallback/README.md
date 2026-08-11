# 01_useCallback_Complete_Guide.md

# React useCallback (MERN Revision)

---

# What is useCallback?

`useCallback` is a React Hook that **stores (memoizes) a function**.

Instead of creating a **new function** on every render, React returns the **same function reference** until the dependency changes.

---

# Why do we need useCallback?

Every time a component re-renders,

this function

```jsx
const getAdjective = () => {
    return "another" + count;
}
```

is recreated.

Even if its code is exactly the same.

So React thinks:

```text
Old Function

↓

New Function

↓

Different Reference
```

This can cause child components to re-render unnecessarily.

---

# Without useCallback

```text
App Render

↓

New Function Created

↓

Passed to Child

↓

Child Re-renders
```

Every render creates a new function.

---

# With useCallback

```text
App Render

↓

Function Stored

↓

Same Function Reference

↓

Child Doesn't Re-render
```

Unless dependencies change.

---

# Syntax

```jsx
const myFunction = useCallback(() => {
    // code
}, [dependencies]);
```

---

# Parameters

## Callback Function

```jsx
() => {
    return "Hello";
}
```

This is the function React stores.

---

## Dependency Array

```jsx
[count]
```

React watches these values.

If they change →

Create a new function.

Otherwise →

Reuse the previous function.

---

# When should we use useCallback?

Use it when:

- Passing functions to child components
- Child component uses `React.memo`
- Prevent unnecessary re-renders
- Expensive child components

---

Don't use it everywhere.

It also has a small memory cost.

---

# Difference

## useMemo

Stores

```text
Value
```

Example

```jsx
const total = useMemo(...)
```

---

## useCallback

Stores

```text
Function
```

Example

```jsx
const handleClick = useCallback(...)
```

---

# Your Project Analysis

---

## State

```jsx
const [count,setCount]=useState(0)
```

Stores count.

---

```jsx
const [adjective,setAdjective]=useState("good")
```

Stores adjective.

(Currently not changing.)

---

# Case 1

```jsx
const getAdjective=()=>{
    return "another"+count;
}
```

Every render

↓

A brand-new function is created.

Memory example

```text
Render 1

getAdjective -> A1
```

Click button

```text
Render 2

getAdjective -> A2
```

Click again

```text
Render 3

getAdjective -> A3
```

Different memory reference every time.

React thinks

```text
Function changed.
```

So if passed to a child,

the child also re-renders.

---

# Case 2

```jsx
const getAdjective = useCallback(()=>{
    return "another"+count;
},[])
```

Dependency

```jsx
[]
```

means

Create the function only once.

Flow

```text
First Render

↓

Create Function

↓

Save

↓

Next Render

↓

Reuse Same Function
```

---

Problem

The function remembers

```text
count = 0
```

forever.

This is called a **stale closure**.

Even after count becomes

```text
5
```

it still returns

```text
another0
```

because it never recreated the function.

---

# Case 3 (Correct)

```jsx
const getAdjective = useCallback(()=>{
    return "another"+count;
},[count])
```

Now React watches

```jsx
count
```

Whenever

```text
count changes
```

↓

Create a new function.

Otherwise

↓

Reuse the old one.

---

Flow

```text
Render

↓

count=0

↓

Store Function
```

Click

```text
count=1

↓

Dependency changed

↓

Create New Function
```

Click again

```text
count=2

↓

Dependency changed

↓

Create New Function
```

---

# Why use React.memo?

Navbar

```jsx
export default memo(Navbar)
```

means

Only re-render Navbar if its props change.

React compares

```text
Old Props

↓

New Props
```

If same

↓

Skip rendering.

---

Without memo

```text
App Render

↓

Navbar Render
```

Every time.

---

With memo

```text
App Render

↓

Props Same?

↓

Yes

↓

Skip Navbar Render
```

---

# Your Navbar Analysis

```jsx
const Navbar = ({adjective,getAdjective})=>{
```

Receives

```text
adjective

getAdjective
```

from App.

---

Console

```jsx
console.log("Navbar is rendered...")
```

helps you see

when Navbar actually renders.

---

Button

```jsx
<button
onClick={()=>getAdjective()}
>
```

calls the function.

---

Text

```jsx
{getAdjective()}
```

executes the function immediately during rendering.

If

```text
count=5
```

Output

```text
another5
```

---

# Complete Execution Flow

Initial Render

```text
App

↓

count=0

↓

useCallback creates function

↓

Navbar receives function

↓

Navbar renders

↓

Button shows

another0
```

---

Click Count Button

```text
setCount()

↓

count changes

↓

App re-renders

↓

Dependency changed

↓

useCallback creates NEW function

↓

Navbar receives new function

↓

Navbar renders

↓

Button shows

another1
```

---

If dependency never changed

```text
App Render

↓

Same Function

↓

Navbar props unchanged

↓

Navbar skipped
```

---

# Why useCallback is useful?

Imagine

Navbar contains

```text
100 Cards

Images

Charts

Tables
```

Rendering Navbar is expensive.

Without useCallback

```text
App renders

↓

New function

↓

Navbar renders

↓

Waste of performance
```

---

With useCallback

```text
App renders

↓

Same function

↓

Navbar skips render

↓

Better performance
```

---

# useCallback + memo

These two are usually used together.

```text
useCallback

↓

Same Function Reference

↓

memo()

↓

Child skips rendering
```

---

# When should MERN Developers use useCallback?

✅ Passing functions to child components

✅ React.memo

✅ Dashboard

✅ Large tables

✅ Product cards

✅ Expensive child components

---

# Don't use useCallback when

❌ Small project

❌ Child isn't memoized

❌ Function isn't passed to another component

Using it everywhere can make code more complex without improving performance.

---

# useMemo vs useCallback

| useMemo | useCallback |
|---------|-------------|
| Stores a **value** | Stores a **function** |
| Returns calculated result | Returns same function reference |
| Used for expensive calculations | Used to prevent unnecessary child re-renders |

---

# Quick Revision

```text
useCallback

✔ Stores Function

✔ Returns same function

✔ Creates new function only when dependency changes

✔ Mostly used with React.memo

✔ Improves performance
```

---

# Interview Answer

**What is useCallback?**

> `useCallback` is a React Hook that memoizes a function. It returns the same function reference between renders unless its dependencies change. It is mainly used with `React.memo` to prevent unnecessary re-rendering of child components and improve performance.
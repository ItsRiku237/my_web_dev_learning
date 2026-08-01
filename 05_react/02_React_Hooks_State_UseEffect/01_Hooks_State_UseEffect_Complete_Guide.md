# 01_Hooks_State_UseEffect_Complete_Guide.md

> **Goal:** Learn only the Hooks that every MERN Developer uses daily.

---

# What are Hooks?

Hooks are **special React functions** that let Functional Components use React features like **State** and **Lifecycle**.

Without Hooks

```jsx
function App() {
    return <h1>Hello</h1>
}
```

No memory, no lifecycle.

With Hooks

```jsx
function App() {
    const [count, setCount] = useState(0)

    return <h1>{count}</h1>
}
```

Now React remembers the value.

---

# Most Used Hooks

| Hook       | Use                                         |
| ---------- | ------------------------------------------- |
| useState   | Store & update data                         |
| useEffect  | Run code after rendering                    |
| useRef     | Access DOM / store values without re-render |
| useContext | Share data between components               |

> **For Freshers:** Learn **useState** and **useEffect** first.

---

# useState()

## Purpose

Stores data that can change.

Syntax

```jsx
const [state, setState] = useState(initialValue)
```

Example

```jsx
const [count, setCount] = useState(0)
```

Meaning

```text
count
↓

Current Value

0
```

```text
setCount()

↓

Updates count
```

---

## Updating State

```jsx
setCount(count + 1)
```

Before

```text
count = 0
```

After

```text
count = 1
```

React automatically **re-renders** the component.

---

# What is State?

State is **data that belongs to a component**.

Example

```jsx
const [name, setName] = useState("Riku")
```

State can be

* String
* Number
* Boolean
* Array
* Object

---

# Re-render

React updates the UI whenever **State changes**.

Example

```jsx
const [count, setCount] = useState(0)

<button onClick={() => setCount(count + 1)}>
```

Flow

```text
Button Click

↓

setCount()

↓

State Updated

↓

Component Re-renders

↓

UI Updated
```

---

# useEffect()

## Purpose

Runs code **after the component renders**.

Syntax

```jsx
useEffect(() => {

}, [])
```

Used for

* API Calls
* Fetch Data
* Timers
* Event Listeners
* Local Storage

---

# Three Common Ways

## 1. Run on Every Render

```jsx
useEffect(() => {

})
```

Runs

```text
Every Render
```

---

## 2. Run Only Once

```jsx
useEffect(() => {

}, [])
```

Runs

```text
Only First Render
```

Mostly used for

* API Calls
* Initial Data

---

## 3. Run When Dependency Changes

```jsx
useEffect(() => {

}, [count])
```

Runs

```text
First Render

+

Whenever count changes
```

---

# Dependency Array

```jsx
[count]
```

Means

```text
Watch count

↓

If count changes

↓

Run useEffect
```

You can watch multiple values.

```jsx
useEffect(() => {

}, [count, name])
```

---

# Cleanup Function

Used to clean resources before component is removed or before the effect runs again.

```jsx
useEffect(() => {

    console.log("Mounted")

    return () => {
        console.log("Cleanup")
    }

}, [])
```

Common Uses

* Remove Event Listener
* Clear Timer
* Close WebSocket

---

# Rules of Hooks

✅ Call Hooks only at the top level.

```jsx
const [count, setCount] = useState(0)
```

❌ Don't use Hooks inside

* if
* for
* while
* nested functions

---

# When Does React Re-render?

React re-renders when

✅ State changes

```jsx
setCount(...)
```

✅ Parent passes new Props

```jsx
<Card title="React"/>
```

❌ React does NOT re-render for

```jsx
let count = 0

count++
```

Because normal variables are not State.

---

# useState vs Normal Variable

```jsx
let count = 0
```

❌ UI doesn't update.

---

```jsx
const [count, setCount] = useState(0)
```

✅ UI updates automatically.

---

# Quick Revision

```text
Hooks
↓

Special React Functions

↓

useState

↓

Store Data

↓

State Changes

↓

Re-render

↓

useEffect

↓

Run Code After Render

↓

[] → First Render

[count] → When count changes

No Array → Every Render

↓

Cleanup

↓

return () => {}
```

---

# Placement Notes

✅ Learn `useState` first.

✅ Learn `useEffect` second.

✅ `setState()` causes a re-render.

✅ `useEffect()` runs **after rendering**.

✅ `[]` → Run once.

✅ `[value]` → Run when value changes.

✅ No dependency array → Run after every render.

✅ Cleanup function prevents memory leaks.

> **Interview Question:**
> **Q:** Difference between `useState` and `useEffect`?
> **A:** `useState` stores and updates component data, while `useEffect` performs side effects such as API calls, timers, subscriptions, or other actions after the component has rendered.

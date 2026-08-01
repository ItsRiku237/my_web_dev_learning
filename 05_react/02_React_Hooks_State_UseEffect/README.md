# 02_App_Execution_Flow_and_Re_Render_Analysis.md

> **Goal:** Understand the execution flow of your `App.jsx` and `Navbar.jsx`, and know **when React re-renders**.

---

# Project Flow

```text
Browser
   │
   ▼
main.jsx
   │
   ▼
<App />
   │
   ▼
App.jsx
   │
   └────────► Navbar.jsx
```

`main.jsx` renders `<App />`, and `App` renders `<Navbar />`.

---

# App.jsx Analysis

```jsx
const [count, setCount] = useState(0)
const [color, setColor] = useState(0)
```

Two state variables:

* `count` → Button counter
* `color` → Passed to Navbar as a prop

---

## useEffect

```jsx
useEffect(() => {
    alert("Count was change.")
    setColor(color + 1)
}, [count])
```

Meaning:

* Runs on **first render**
* Runs again whenever `count` changes
* Increases `color` by 1

Flow:

```text
count changes
      │
      ▼
useEffect runs
      │
      ▼
setColor()
      │
      ▼
App re-renders
```

---

# Passing Props

```jsx
<Navbar color={"navy blue " + color} />
```

Example:

```text
color = 0

↓

Navbar receives

"navy blue 0"
```

After clicking the button:

```text
color = 1

↓

Navbar receives

"navy blue 1"
```

---

# Button Click Flow

```jsx
<button
onClick={() => setCount(count + 1)}
>
```

Flow:

```text
Button Click
      │
      ▼
setCount()
      │
      ▼
count changes
      │
      ▼
App re-renders
      │
      ▼
useEffect runs
      │
      ▼
setColor()
      │
      ▼
App re-renders again
      │
      ▼
Navbar receives new color
```

---

# Navbar.jsx Analysis

## Effect 1

```jsx
useEffect(() => {

})
```

Runs:

```text
Every Render
```

---

## Effect 2

```jsx
useEffect(() => {

}, [])
```

Runs:

```text
Only First Render
```

---

## Effect 3

```jsx
useEffect(() => {

}, [color])
```

Runs:

* First render
* Whenever `color` changes

---

## Effect 4 (Cleanup)

```jsx
useEffect(() => {

    return () => {

    }

}, [])
```

Runs:

* Effect → First render
* Cleanup → When component unmounts

Example:

```text
Navbar removed

↓

Cleanup runs
```

---

# Initial Render Flow

When the app starts:

```text
App renders

↓

Navbar renders

↓

Effect 1

↓

Effect 2

↓

Effect 3

↓

Effect 4
```

---

# After Clicking Button

```text
Click Button

↓

setCount()

↓

App re-renders

↓

Navbar re-renders

↓

Effect 1

↓

App useEffect

↓

setColor()

↓

App re-renders again

↓

Navbar re-renders again

↓

Effect 1

↓

Effect 3
```

---

# What Causes Re-render?

### `count` changes

```jsx
setCount(count + 1)
```

✅ App re-renders

✅ Navbar re-renders

---

### `color` changes

```jsx
setColor(color + 1)
```

✅ App re-renders

✅ Navbar re-renders

---

### Props change

```jsx
<Navbar color={...}/>
```

When `color` changes,

Navbar receives new props,

so Navbar re-renders.

---

# What Does NOT Re-render?

```jsx
let count = 0

count++
```

❌ React does not know the value changed.

Only `useState` updates trigger re-renders.

---

# Re-render Summary

| Action        | App | Navbar |
| ------------- | --- | ------ |
| First Render  | ✅   | ✅      |
| `setCount()`  | ✅   | ✅      |
| `setColor()`  | ✅   | ✅      |
| Props Changed | —   | ✅      |

---

# Important Note About Your Code

Your effect:

```jsx
useEffect(() => {
    setColor(color + 1)
}, [count])
```

works, but it's safer to write:

```jsx
useEffect(() => {
    setColor(prev => prev + 1)
}, [count])
```

This uses the latest state value and avoids stale state issues.

---

# Quick Revision

```text
App Starts
      │
      ▼
App Render
      │
      ▼
Navbar Render
      │
      ▼
useEffect Runs
```

```text
Button Click
      │
      ▼
setCount()
      │
      ▼
App Re-render
      │
      ▼
Navbar Re-render
      │
      ▼
App useEffect
      │
      ▼
setColor()
      │
      ▼
App Re-render Again
      │
      ▼
Navbar Re-render Again
```

---

# Placement Notes

✅ `setState()` causes a re-render.

✅ Child components re-render when their props change.

✅ `useEffect([])` → First render only.

✅ `useEffect([value])` → Runs when `value` changes.

✅ `useEffect()` → Runs after every render.

✅ Cleanup runs when the component unmounts (or before the effect re-runs if dependencies change).

> **Interview Question:**
> **Q:** When does a React component re-render?
> **A:** A component re-renders when its **state changes**, its **props change**, or its **parent re-renders** (unless optimized with techniques like `React.memo`).

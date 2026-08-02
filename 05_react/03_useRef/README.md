# 03_React_useRef_Quick_Guide.md

> **Goal:** Learn only what a MERN developer commonly uses about `useRef`.

---

# What is `useRef`?

`useRef` is a React Hook that stores a value **without causing a re-render**.

Syntax

```jsx
const refName = useRef(initialValue)
```

Example

```jsx
const inputRef = useRef(null)
```

---

# When to Use `useRef`?

Use `useRef` when you want to:

* ✅ Access an HTML element (DOM)
* ✅ Focus an input
* ✅ Play/Pause a video
* ✅ Store Timer/Interval IDs
* ✅ Store values without re-rendering

> **Remember:** If the UI should update, use **useState**. If you only need to store or access something, use **useRef**.

---

# `useState` vs `useRef`

| useState            | useRef                        |
| ------------------- | ----------------------------- |
| Stores UI data      | Stores reference/value        |
| Causes re-render    | No re-render                  |
| Used for UI updates | Used for DOM & mutable values |

---

# Accessing an HTML Element

```jsx
const inputRef = useRef(null)

<input ref={inputRef}/>
```

React stores the `<input>` element inside

```text
inputRef.current
```

---

# Example 1 : Focus Input

```jsx
const inputRef = useRef(null)

<input ref={inputRef}/>

<button onClick={()=>{
    inputRef.current.focus()
}}>
Focus
</button>
```

Flow

```text
Button Click
      │
      ▼
inputRef.current
      │
      ▼
Input Box
      │
      ▼
focus()
      │
      ▼
Cursor appears inside input
```

`focus()` is a JavaScript DOM method.

---

# Example 2 : Play / Pause Video

```jsx
const ref = useRef(null)

<video ref={ref}/>
```

React stores the `<video>` element.

Play

```jsx
ref.current.play()
```

Pause

```jsx
ref.current.pause()
```

Flow

```text
Button Click
      │
      ▼
ref.current
      │
      ▼
Video Element
      │
      ├── play()
      └── pause()
```

`play()` and `pause()` are built-in JavaScript video methods.

---

# Example 3 : Stopwatch

```jsx
const intervalRef = useRef(null)
```

Start

```jsx
intervalRef.current = setInterval(...)
```

Stop

```jsx
clearInterval(intervalRef.current)
```

Flow

```text
Start
   │
   ▼
setInterval()
   │
   ▼
Interval ID stored in
intervalRef.current
   │
   ▼
Stop
   │
   ▼
clearInterval(intervalRef.current)
```

Why use `useRef`?

Because the interval ID is **not shown on the screen**, so no re-render is needed.

---

# Example 4 : Changing Button Style

```jsx
const btnRef = useRef(null)

<button ref={btnRef}>
```

Change color

```jsx
btnRef.current.style.backgroundColor = "blue"
```

Hide button

```jsx
btnRef.current.style.display = "none"
```

Flow

```text
Button

↓

btnRef.current

↓

Change CSS

↓

Browser updates element
```

No React state is involved.

---

# What is `.current`?

`.current` holds the actual value stored in the ref.

Example

```jsx
const inputRef = useRef(null)
```

Initially

```text
inputRef.current = null
```

After rendering

```text
inputRef.current = <input>
```

---

# Does `useRef` Re-render?

```jsx
ref.current = 10
```

❌ No re-render

```jsx
setCount(10)
```

✅ Re-render

---

# Quick Revision

```text
useRef

↓

Stores Reference

↓

.current

↓

No Re-render

↓

Used For

• Focus Input
• Play/Pause Video
• Timers
• Access DOM
• Change Style
```

---

# Placement Notes

✅ `useRef` stores a value without re-rendering.

✅ Access DOM using `ref.current`.

✅ Common uses:

* Focus input
* Play/Pause video
* Store interval ID
* Access HTML elements

✅ `useState` updates the UI.

✅ `useRef` does **not** update the UI.

> **Interview Question:**
> **Q:** When should you use `useRef` instead of `useState`?
> **A:** Use `useRef` when you need to access a DOM element or store a mutable value that should **not** trigger a re-render, such as an input reference, a video element, or an interval ID.

# 05_React_Fetch_API_and_Render_Data.md

> **Goal:** Understand how React fetches API data and displays it using `.map()`.

---

# Project Flow

```text
Browser
   │
   ▼
App.jsx
   │
   ▼
useEffect()
   │
   ▼
fetch()
   │
   ▼
API
   │
   ▼
JSON Data
   │
   ▼
setData()
   │
   ▼
State Updated
   │
   ▼
App Re-renders
   │
   ▼
data.map()
   │
   ▼
Cards Display
```

---

# Step 1 : Create State

```jsx
const [data, setData] = useState([])
```

Initially

```text
data = []
```

No cards are displayed.

---

# Step 2 : Fetch Data

```jsx
const response = await fetch(
'https://jsonplaceholder.typicode.com/posts'
)
```

`fetch()` sends an HTTP GET request to the API.

The API returns a **Response Object**, not the actual data.

---

# Step 3 : Convert Response to JSON

```jsx
const data = await response.json()
```

Now the response becomes a JavaScript array.

Example

```js
[
  {
    id:1,
    title:"...",
    body:"..."
  },
  ...
]
```

---

# Step 4 : Save Data

```jsx
setData(data)
```

Flow

```text
API Data

↓

setData()

↓

State Updated

↓

React Re-renders
```

Now

```text
data = [100 Objects]
```

---

# Step 5 : Display Data

```jsx
data.map(card => {
    return (
        <div>
            {card.title}
        </div>
    )
})
```

`.map()` loops through every object.

Flow

```text
Object 1

↓

Card 1

↓

Object 2

↓

Card 2

↓

...

↓

Browser
```

---

# Card Data

Each object contains

```js
{
    userId,
    id,
    title,
    body
}
```

You display

```jsx
card.id
card.title
card.body
card.userId
```

Each object becomes one card.

---

# Why `key={card.id}`?

```jsx
key={card.id}
```

Every card needs a unique key.

React uses it to efficiently update the UI.

---

# Method 1 vs Method 2

## Method 1

```jsx
async function fetchData(){

}

useEffect(()=>{
    fetchData()
},[])
```

✅ Better for large projects.

✅ Cleaner code.

---

## Method 2

```jsx
useEffect(()=>{

async function fetchData(){

}

fetchData()

},[])
```

✅ Good for small components.

---

**Both methods work exactly the same.**
The only difference is **where the `fetchData()` function is written**.

---

# Why `useEffect([])`?

```jsx
useEffect(() => {
    fetchData()
}, [])
```

Runs only once when the page first loads.

If `[]` is removed

```jsx
useEffect(()=>{
    fetchData()
})
```

then every re-render calls the API again, causing repeated requests.

---

# Complete Execution Flow

```text
App Starts

↓

data = []

↓

Component Render

↓

useEffect()

↓

fetch()

↓

API Response

↓

response.json()

↓

setData()

↓

State Updated

↓

App Re-render

↓

data.map()

↓

100 Cards Created

↓

Displayed on Screen
```

---

# Quick Revision

```text
useState

↓

Store API Data

──────────────

useEffect([])

↓

Run Once

↓

fetch()

↓

response.json()

↓

setData()

↓

Re-render

↓

.map()

↓

Cards Display
```

---

# Placement Notes

✅ `fetch()` sends a request to an API.

✅ `response.json()` converts the response into a JavaScript object/array.

✅ `setData()` updates state and triggers a re-render.

✅ `.map()` converts each object into a React component.

✅ `useEffect([])` is commonly used for API calls on the first render.

> **Interview Question:**
> **Q:** Why do we usually fetch API data inside `useEffect([])`?
> **A:** Because `useEffect([])` runs only once after the initial render, preventing unnecessary API requests on every re-render.

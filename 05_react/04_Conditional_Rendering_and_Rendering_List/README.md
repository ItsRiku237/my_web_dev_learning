# 04_React_Conditional_Rendering_and_Rendering_List.md

> **Goal:** Learn only the Conditional Rendering and Rendering List concepts that every MERN developer uses.

---

# 1. What is Conditional Rendering?

Conditional Rendering means:

> **Show different UI depending on a condition.**

Think:

```text
Condition

↓

True ?

↓

Show Something

↓

False ?

↓

Show Something Else / Nothing
```

We use it when:

* Login / Logout Button
* Loading Spinner
* Admin Panel
* Error Message
* Hide / Show Component

---

# Method 1 : Ternary Operator

Syntax

```jsx
condition ? <Component1/> : <Component2/>
```

Your Code

```jsx
{showbtn
 ? <button>showbtn is true</button>
 : <button>showbtn is false</button>}
```

Flow

```text
showbtn

↓

true ?

↓

Yes

↓

True Button

OR

↓

False Button
```

Use this when **both True and False UI are needed.**

---

# Method 2 : Logical AND (&&)

Syntax

```jsx
condition && <Component/>
```

Your Code

```jsx
{showbtn && <button>showbtn is true</button>}
```

Flow

```text
showbtn

↓

true ?

↓

Yes

↓

Show Button

↓

No

↓

Show Nothing
```

Use this when you want to show something **only if the condition is true**.

---

# 2. What is Rendering List?

Rendering List means:

> **Display multiple components using data from an array.**

Instead of writing

```jsx
<Card/>

<Card/>

<Card/>
```

we write

```jsx
array.map(...)
```

React automatically creates all components.

---

# Your Todos Array

```jsx
const [todos, setTodos] = useState([
    {
        title:"Riku",
        desc:"Hiy i am Riku"
    },
    {
        title:"Raman",
        desc:"Hiy i am Raman"
    },
    {
        title:"Jubbu",
        desc:"Hiy i am Jubbu"
    }
])
```

Memory

```text
todos

↓

[ Object, Object, Object ]
```

Each object

```text
title

desc
```

---

# How `.map()` Works

Your code

```jsx
todos.map(todo => {

})
```

Think of `.map()` as:

```text
Take Every Item

↓

One by One

↓

Return JSX

↓

React Displays All
```

Flow

```text
todos

↓

Riku

↓

Raman

↓

Jubbu

↓

React UI
```

---

# Method 1 (Your Code)

```jsx
{todos.map(todo => {
    return (
        <Todo
            key={todo.title}
            todo={todo}
        />
    )
})}
```

What happens?

### First Loop

```text
todo

↓

{
 title:"Riku",
 desc:"Hiy i am Riku"
}
```

React calls

```jsx
<Todo
todo={todo}
/>
```

---

### Second Loop

```text
todo

↓

{
 title:"Raman",
 desc:"Hiy i am Raman"
}
```

React creates another

```jsx
<Todo/>
```

---

### Third Loop

```text
todo

↓

{
 title:"Jubbu",
 desc:"Hiy i am Jubbu"
}
```

React creates another

```jsx
<Todo/>
```

---

# Visual Flow

```text
todos Array

↓

.map()

↓

Todo 1

↓

Todo 2

↓

Todo 3

↓

Browser
```

---

# How `<Todo />` Receives Data

Parent sends

```jsx
<Todo
todo={todo}
/>
```

Child receives

```jsx
const Todo = ({todo}) => {

}
```

Now

```jsx
todo.title
```

becomes

```text
Riku
```

and

```jsx
todo.desc
```

becomes

```text
Hiy i am Riku
```

Same component

Different data

---

# Why `key` is Used?

Your code

```jsx
key={todo.title}
```

`key` gives every item a **unique identity**.

React uses it to know:

```text
Which Item Changed?

Which Item Added?

Which Item Deleted?
```

Without key

❌ React shows a warning.

---

# Method 2 (Direct Rendering)

```jsx
todos.map(todo => {

return(

<div>

{todo.title}

{todo.desc}

</div>

)

})
```

Difference

Method 1

```text
Array

↓

<Todo/>

↓

Reusable Component
```

Method 2

```text
Array

↓

Direct JSX
```

Both work.

For big projects, **Method 1 is preferred** because components are reusable and cleaner.

---

# Which One Should You Use?

| Situation         | Best Choice                    |
| ----------------- | ------------------------------ |
| Reusable UI       | Create a Component (`<Todo/>`) |
| Small One-Time UI | Direct `.map()`                |

---

# Quick Revision

```text
Conditional Rendering

↓

Show UI based on condition

↓

? :

True & False

↓

&&

Only True

────────────────────

Rendering List

↓

Array

↓

.map()

↓

One Item at a Time

↓

Return JSX

↓

React Displays All

────────────────────

key

↓

Unique Identity
```

---

# Placement Notes

✅ Conditional Rendering shows UI based on a condition.

✅ `condition ? A : B` → Show one of two UIs.

✅ `condition && A` → Show UI only when condition is true.

✅ Rendering List uses `.map()`.

✅ `.map()` converts an array into multiple React components.

✅ Always provide a unique `key` when rendering lists.

> **Interview Question:**
> **Q:** Why is the `key` prop important in React lists?
> **A:** It gives each rendered item a unique identity, helping React efficiently update, add, or remove items without unnecessarily re-rendering the entire list.

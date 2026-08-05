# 06_React_Event_Handling_and_Forms.md

> **Goal:** Learn the Event Handling concepts used daily in MERN development.

---

# What is Event Handling?

Event Handling means:

> **Running a function when a user performs an action.**

Example Actions

* Click Button
* Type in Input
* Submit Form
* Hover Mouse
* Press Keyboard Key

---

# Why do we use Event Handling?

Without Event Handling

```text
User clicks button

↓

Nothing happens
```

With Event Handling

```text
User clicks button

↓

Function Runs

↓

UI Updates
```

---

# Common React Events

| Event       | When it Runs         |
| ----------- | -------------------- |
| onClick     | Button clicked       |
| onChange    | Input value changes  |
| onSubmit    | Form submitted       |
| onMouseOver | Mouse enters element |
| onMouseOut  | Mouse leaves element |
| onKeyDown   | Key pressed          |
| onKeyUp     | Key released         |

---

# Basic Syntax

```jsx
<button onClick={handleClick}>
Click
</button>
```

React waits for the click.

After clicking,

```text
Button

↓

onClick

↓

handleClick()

↓

Code Executes
```

---

# Your Code Analysis

## State 1

```jsx
const [name, setName] = useState("Riku")
```

Stores one input value.

---

## State 2

```jsx
const [form, setForm] = useState({
    name:"",
    email:""
})
```

Stores multiple input values in one object.

This is the **most common approach** in MERN forms.

---

# 1. Button Click

```jsx
<button onClick={handelClick}>
```

Function

```jsx
const handelClick = () => {
    alert("Hiy I am clicked.")
}
```

Flow

```text
Button Click

↓

onClick

↓

handelClick()

↓

Alert
```

Use when

* Save
* Delete
* Login
* Register
* API Call

---

# 2. Mouse Over

```jsx
<div onMouseOver={handel_mouse_over}>
```

Runs when mouse enters the div.

Flow

```text
Mouse

↓

Enter Div

↓

onMouseOver

↓

Function Runs
```

Use when

* Tooltip
* Hover Effect
* Preview Image

---

# 3. onChange

```jsx
<input
value={name}
onChange={handel_change}
/>
```

Function

```jsx
const handel_change = (e) => {
    setName(e.target.value)
}
```

Flow

```text
User Types

↓

onChange

↓

e.target.value

↓

setName()

↓

State Updates

↓

Input Updates
```

---

# What is `e`?

```jsx
const handel_change = (e)=>{}
```

`e` = Event Object

It contains information about the event.

Most used

```jsx
e.target.value
```

means

```text
Current Input Value
```

---

# 4. Form Handling

```jsx
const handel_form = (e)=>{
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}
```

This updates only the field that the user is typing in.

Example

Typing

```text
Name = Riku
```

React creates

```js
{
    name:"Riku",
    email:""
}
```

Now type

```text
Email = abc@gmail.com
```

React creates

```js
{
    name:"Riku",
    email:"abc@gmail.com"
}
```

The previous data is preserved because of

```jsx
...form
```

---

# Why `[e.target.name]`?

Input

```jsx
name="email"
```

When typing

```text
e.target.name

↓

"email"
```

React updates

```js
form.email
```

Similarly,

```jsx
name="name"
```

updates

```js
form.name
```

One function handles all inputs.

---

# Difference Between Inputs

## Input 1

```jsx
<input type="text"/>
```

Normal HTML input.

React doesn't control it.

---

## Input 2

```jsx
<input
value={name}
/>
```

Controlled by React,

but cannot be edited because there is **no `onChange`**.

---

## Input 3

```jsx
<input
value={name}
onChange={handel_change}
/>
```

Controlled Component.

User can type.

React State updates.

✅ Most commonly used.

---

## Input 4

```jsx
<input
name="name"
value={form.name}
onChange={handel_form}
/>
```

Uses object state.

Best for forms.

---

## Input 5

```jsx
<input
name="email"
value={form.email}
onChange={handel_form}
/>
```

Uses the same function.

Updates only `email`.

---

## Input 6

```jsx
<input
name="phone"
value={form.phone ? form.phone : ""}
/>
```

Initially

```text
phone

↓

undefined
```

So React displays

```text
""
```

instead of `undefined`.

Later,

```js
{
    phone:"9876543210"
}
```

is automatically added to the object.

---

# Why `...form`?

Suppose

```js
form = {

name:"Riku",

email:"abc@gmail.com"

}
```

Typing Phone

Without

```jsx
...form
```

Result

```js
{
    phone:"9876543210"
}
```

Old data is lost.

With

```jsx
...form
```

Result

```js
{
    name:"Riku",
    email:"abc@gmail.com",
    phone:"9876543210"
}
```

Old values stay.

---

# Controlled vs Uncontrolled Input

| Controlled          | Uncontrolled          |
| ------------------- | --------------------- |
| Uses `value`        | No `value`            |
| Uses `onChange`     | Browser manages value |
| React controls data | DOM controls data     |
| Used in MERN Forms  | Rarely used           |

---

# Complete Flow

```text
User Types

↓

onChange

↓

Event Object (e)

↓

e.target.value

↓

setState()

↓

State Updated

↓

React Re-renders

↓

Input Updated
```

---

# When Do We Use Event Handling?

Use Event Handling for

* Login Form
* Register Form
* Search Box
* Todo App
* Like Button
* Delete Button
* File Upload
* API Requests
* Payment Form

Almost every React application uses event handling.

---

# Quick Revision

```text
Event Handling

↓

User Action

↓

onClick

onChange

onSubmit

onMouseOver

↓

Function Runs

↓

setState()

↓

Re-render

↓

UI Updates

──────────────────

Forms

↓

Object State

↓

...form

↓

[e.target.name]

↓

Reusable Form Handler
```

---

# Placement Notes

✅ Event Handling lets React respond to user actions.

✅ `onClick` → Button click.

✅ `onChange` → Input value changes.

✅ `e.target.value` gives the current input value.

✅ `e.target.name` identifies which input changed.

✅ `...form` keeps previous form values.

✅ Controlled inputs (`value` + `onChange`) are the standard approach in MERN applications.

> **Interview Question:**
> **Q:** Why do we use a single `handleForm` function with `e.target.name`?
> **A:** It lets one function update multiple form fields dynamically, making forms simpler, scalable, and easier to maintain.

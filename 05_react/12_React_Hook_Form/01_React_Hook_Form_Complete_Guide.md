# 01_React_Hook_Form_Complete_Guide.md

# React Hook Form (MERN Revision)

---

# What is React Hook Form?

**React Hook Form** is a library used to **create and manage forms in React easily**.

It helps us:

- Get form data
- Validate inputs
- Show errors
- Submit forms
- Improve performance
- Reduce code

Instead of writing many `useState()` hooks, React Hook Form manages everything for us.

---

# Why use React Hook Form?

### Without React Hook Form

For every input, we usually write:

```jsx
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
```

And every input needs:

```jsx
value={username}
onChange={...}
```

As forms grow, the code becomes large.

---

### With React Hook Form

Just register the input.

```jsx
<input {...register("username")} />
```

React Hook Form handles:

- Input values
- Validation
- Errors
- Submission

automatically.

---

# Installation

```bash
npm install react-hook-form
```

Import

```jsx
import { useForm } from "react-hook-form";
```

---

# useForm()

```jsx
const {
  register,
  handleSubmit,
  setError,
  formState: {
    errors,
    isSubmitting
  }
} = useForm();
```

`useForm()` is the main Hook.

It returns useful functions and objects.

---

# Flow

```text
useForm()

↓

register()

↓

User enters data

↓

Validation

↓

handleSubmit()

↓

Backend

↓

Success / Error
```

---

# register()

## What is register?

`register()` connects an input field with React Hook Form.

Without it, Hook Form cannot track that input.

---

## Syntax

```jsx
register("fieldName")
```

Example

```jsx
<input {...register("username")} />
```

Now Hook Form knows:

```text
username
```

is a form field.

---

## Register with Validation

```jsx
<input
{...register("username",{
required:true
})}
/>
```

---

With messages

```jsx
<input
{...register("username",{
required:{
value:true,
message:"Username required"
}
})}
/>
```

---

# Validation Rules

## Required

```jsx
required:true
```

or

```jsx
required:{
value:true,
message:"Required"
}
```

---

## Minimum Length

```jsx
minLength:{
value:3,
message:"Minimum length is 3"
}
```

---

## Maximum Length

```jsx
maxLength:{
value:8,
message:"Maximum length is 8"
}
```

---

You can combine them.

```jsx
register("username",{
required:{
value:true,
message:"Required"
},
minLength:{
value:3,
message:"Min 3"
},
maxLength:{
value:8,
message:"Max 8"
}
})
```

---

# handleSubmit()

## What is it?

`handleSubmit()` validates the form first.

If validation passes,

it calls your function.

---

Syntax

```jsx
<form onSubmit={handleSubmit(onSubmit)}>
```

---

Flow

```text
Click Submit

↓

Validation

↓

Success

↓

onSubmit()

↓

Backend
```

If validation fails

```text
Click Submit

↓

Validation

↓

Failed

↓

Show Errors

↓

onSubmit NOT called
```

---

# onSubmit()

Example

```jsx
const onSubmit = (data)=>{
console.log(data)
}
```

`data` contains every registered field.

Example

```text
{
username:"Riku",
password:"1234"
}
```

---

# formState

Inside

```jsx
formState
```

React Hook Form stores information about the form.

Example

```jsx
formState:{
errors,
isSubmitting
}
```

---

# errors

`errors` contains validation errors.

Example

```jsx
errors.username
```

If username is invalid,

it stores

```text
message

type

ref
```

---

Showing error

```jsx
{
errors.username &&
<div>
{errors.username.message}
</div>
}
```

Output

```text
Minimum length is 3
```

---

# isSubmitting

`isSubmitting`

tells whether the form is currently submitting.

---

Example

```jsx
{
isSubmitting &&
<div>Loading...</div>
}
```

During API request

Output

```text
Loading...
```

---

Disable button

```jsx
<input
disabled={isSubmitting}
/>
```

User cannot submit twice.

---

# setError()

Sometimes validation comes from the backend.

Example

Wrong username.

Blocked account.

Duplicate email.

For this we use

```jsx
setError()
```

---

Syntax

```jsx
setError(
"username",
{
message:"Username already exists"
}
)
```

---

Custom field

```jsx
setError(
"myform",
{
message:"Invalid credentials"
}
)
```

Show

```jsx
{
errors.myform &&
<div>
{errors.myform.message}
</div>
}
```

---

# Complete Flow

```text
User

↓

Input

↓

register()

↓

Validation

↓

handleSubmit()

↓

onSubmit()

↓

Backend

↓

Success

or

setError()
```

---

# React Hook Form vs useState

## useState

```jsx
const [name,setName]=useState("")
```

Need

```jsx
value

onChange
```

for every field.

---

## Hook Form

```jsx
<input
{...register("name")}
/>
```

No extra state needed.

Less code.

Better performance.

---

# When should we use React Hook Form?

Use it when your project has:

- Login Form
- Signup Form
- Contact Form
- Profile Form
- Checkout Form
- Payment Form
- Admin Dashboard Forms
- CRUD Forms

Almost every MERN application uses forms.

---

# Advantages

- Less code
- Fast performance
- Easy validation
- Easy error handling
- Better user experience
- Works well with APIs
- Easy backend integration

---

# Don't use it when

Small forms like

```text
One input

Search box

Simple toggle
```

can be handled with `useState`.

---

# Quick Revision

## Installation

```bash
npm install react-hook-form
```

---

## Import

```jsx
import { useForm } from "react-hook-form";
```

---

## Main Hook

```jsx
const {
register,
handleSubmit,
setError,
formState:{
errors,
isSubmitting
}
}=useForm()
```

---

## register()

```text
Connects input with Hook Form
```

---

## handleSubmit()

```text
Validates form

↓

Calls onSubmit()
```

---

## errors

```text
Stores validation errors
```

---

## isSubmitting

```text
True while form is submitting
```

---

## setError()

```text
Creates custom errors

Mostly from backend
```

---

# MERN Placement Notes

✔ `register()` → Connect inputs

✔ `handleSubmit()` → Validate then submit

✔ `errors` → Show validation messages

✔ `isSubmitting` → Disable button / show loading

✔ `setError()` → Show custom or server-side errors

✔ React Hook Form is preferred over multiple `useState()` hooks for medium and large forms.

---

# Interview Answer

### What is React Hook Form?

> React Hook Form is a lightweight library for handling forms in React. It provides built-in validation, form state management, error handling, and better performance by reducing unnecessary re-renders. It is widely used in MERN applications for login, signup, profile, and CRUD forms.
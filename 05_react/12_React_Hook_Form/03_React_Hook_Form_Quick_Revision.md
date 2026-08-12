# 03_React_Hook_Form_Quick_Revision.md

# React Hook Form Flow

```
useForm()

        │
        ▼

register()

        │
        ▼

User Types

        │
        ▼

Validation

        │
        ▼

handleSubmit()

        │
        ▼

onSubmit(data)

        │
        ▼

fetch()

        │
        ▼

Backend

        │
        ▼

Response

        │
        ▼

UI Update
```

---

# useForm()

Creates and manages the entire form.

```jsx
const {
  register,
  handleSubmit,
  setError,
  formState:{errors,isSubmitting}
} = useForm()
```

---

# register()

Connects an input to React Hook Form.

```jsx
<input {...register("username")} />
```

---

# Validation

```jsx
register("username",{
  required:true,
  minLength:3,
  maxLength:8
})
```

Most used rules

| Rule | Purpose |
|------|---------|
| required | Field cannot be empty |
| minLength | Minimum characters |
| maxLength | Maximum characters |
| pattern | Regex validation |
| validate | Custom validation |

---

# errors

Contains validation errors.

```jsx
errors.username
```

Show message

```jsx
{errors.username &&
<div>{errors.username.message}</div>}
```

---

# handleSubmit()

```jsx
handleSubmit(onSubmit)
```

Flow

```
Submit

↓

Validate

↓

If Valid

↓

onSubmit()

Else

↓

Show Errors
```

---

# onSubmit(data)

Gets all form values.

Example

```js
{
 username:"Riku",
 password:"123456"
}
```

---

# fetch()

Send data to backend.

```jsx
fetch(url,{
 method:"POST",
 headers:{
  "Content-Type":"application/json"
 },
 body:JSON.stringify(data)
})
```

---

# JSON.stringify()

Converts

```js
Object
```

into

```json
JSON String
```

---

# setError()

Shows custom/server errors.

```jsx
setError("login",{
 message:"Invalid Credentials"
})
```

Display

```jsx
{errors.login &&
<div>{errors.login.message}</div>}
```

---

# isSubmitting

Automatically becomes

```
false

↓

true

↓

false
```

Useful for

- Loading
- Disable Button
- Prevent multiple clicks

Example

```jsx
<input disabled={isSubmitting}/>
```

---

# Backend

Enable JSON

```js
app.use(bodyParser.json())
```

Enable React Requests

```js
app.use(cors())
```

Receive Data

```js
req.body
```

---

# Complete Request Flow

```
React Form

↓

register()

↓

Validation

↓

handleSubmit()

↓

onSubmit()

↓

fetch()

↓

Express

↓

req.body

↓

Response

↓

React UI
```

---

# Common Interview Questions

### Why use React Hook Form?

- Less code
- Better performance
- Easy validation
- Less re-render
- Simple error handling

---

### Why use register()?

To connect inputs with Hook Form.

---

### Why use handleSubmit()?

Runs validation before submitting.

---

### Why use setError()?

To display custom/backend validation errors.

---

### Why use isSubmitting?

To show loading state and prevent duplicate submissions.

---

### Why use JSON.stringify()?

Because HTTP sends text, not JavaScript objects.

---

# Most Used APIs (Remember)

```jsx
useForm()

register()

handleSubmit()

errors

setError()

isSubmitting()
```

---

# Placement Notes

✅ React Hook Form reduces unnecessary re-renders.

✅ `register()` connects each input.

✅ `handleSubmit()` validates automatically.

✅ `errors` stores validation messages.

✅ `setError()` is mainly used for backend/custom errors.

✅ `isSubmitting` is useful for loading spinners and disabling buttons.

✅ Most MERN applications use React Hook Form (or similar libraries) for login, signup, contact forms, profile editing, password reset, checkout forms, and admin dashboards.
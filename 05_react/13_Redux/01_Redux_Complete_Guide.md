# 01_Redux_Complete_Guide.md

# What is Redux?

Redux is a **global state management library**.

It stores data in one central place (Store) so **any component** can access or update it without passing props.

> Think of Redux as a **shared memory** for your React application.

---

# Why Redux?

Without Redux:

```
App
│
├── Navbar
│
├── Home
│
├── Product
│
├── Cart
│
└── Checkout
```

Suppose **Cart Count = 5**

You need it in:

- Navbar
- Cart
- Checkout
- Product Page

Using only `useState`, you must pass props through many components.

```
App
 │
 ├── Navbar (props)
 │
 ├── Home
 │
 ├── Product (props)
 │
 ├── Cart (props)
 │
 └── Checkout (props)
```

This becomes **Prop Drilling**.

---

With Redux

```
            Store
              │
      ┌───────┼────────┐
      │       │        │
   Navbar   Cart   Checkout
      │
   Product
```

Every component reads the same data directly.

No prop drilling.

---

# useState vs Redux

| useState | Redux |
|----------|--------|
| Local State | Global State |
| Inside one component | Entire application |
| Simple projects | Medium/Large projects |
| Props needed | No props needed |
| Easy | Slightly harder |

---

## useState Example

```jsx
const [count,setCount] = useState(0)
```

Only this component owns `count`.

---

## Redux Example

```
Store

↓

count = 0

↓

Navbar

↓

Home

↓

Cart

↓

Profile
```

Every component gets the same value.

---

# When to use useState?

Use for local UI.

Examples

- Modal Open
- Input Value
- Dark Mode (small app)
- Counter
- Toggle Button

---

# When to use Redux?

Use when many components need the same data.

Examples

- Shopping Cart
- Logged-in User
- Theme
- Notifications
- Wishlist
- Chat Messages
- Language
- Dashboard Data

---

# Redux Terminology

There are only 5 important things.

```
Store

State

Action

Reducer

Slice
```

---

# 1. Store

The Store is the **central database**.

Everything is stored here.

Example

```
Store

{
    counter:5,
    user:"Riku",
    cart:[]
}
```

Only one Store exists in an application.

---

# 2. State

State means **current data**.

Example

```
Counter = 10

Theme = Dark

User = Riku
```

Current values are called State.

---

# 3. Action

Action tells Redux

> "What should happen?"

Example

```
Increment

Decrement

Login

Logout

AddToCart

RemoveFromCart
```

Actions do **not** change data directly.

---

# 4. Reducer

Reducer updates the State.

Example

```
Current Count = 5

↓

Increment Action

↓

Reducer

↓

New Count = 6
```

Reducer is the **only place** where State changes.

---

# 5. Slice

A Slice groups related Redux logic together.

Example

```
counterSlice

contains

State

+

Reducers

+

Actions
```

Instead of writing many files manually, Redux Toolkit combines everything into one Slice.

---

# Redux Toolkit

Old Redux required lots of code.

Redux Toolkit makes Redux simple.

Instead of

```
Store

Action

Action Types

Reducers

Constants
```

You mainly create

```
Slice

↓

Store

↓

Done
```

This is why almost every modern React project uses **Redux Toolkit**.

---

# React Redux

Redux itself doesn't know React.

React Redux connects Redux with React.

Main Hooks

```
Provider

useSelector()

useDispatch()
```

---

# Provider

```jsx
<Provider store={store}>
    <App/>
</Provider>
```

Purpose

Makes the Redux Store available to every React component.

Without Provider

```
useSelector()

↓

Error
```

---

# useSelector()

Reads data from Store.

Example

```jsx
const count = useSelector(
(state)=>state.counter.value
)
```

Meaning

```
Store

↓

counter

↓

value

↓

count
```

---

# useDispatch()

Used to update Store.

Example

```jsx
dispatch(increment())
```

Meaning

```
Button Click

↓

dispatch()

↓

Action

↓

Reducer

↓

Store Updated
```

---

# Complete Redux Flow

```
User Clicks Button

↓

dispatch(action)

↓

Reducer Runs

↓

Store Updated

↓

useSelector Reads New Data

↓

Component Re-renders

↓

UI Updated
```

---

# Redux Folder Structure

```
src
│
├── redux
│     │
│     ├── store.jsx
│     │
│     └── counter
│            │
│            └── counterSlice.jsx
│
├── App.jsx
│
├── main.jsx
│
└── components
```

---

# Real Life Example 1 (Shopping Cart)

Without Redux

```
Product

↓

Pass props

↓

Navbar

↓

Cart

↓

Checkout
```

Very messy.

With Redux

```
Product

↓

dispatch(AddToCart)

↓

Store

↓

Navbar

↓

Cart

↓

Checkout
```

Everyone gets updated instantly.

---

# Real Life Example 2 (Logged-in User)

Store

```
User

↓

Navbar

↓

Profile

↓

Dashboard

↓

Settings
```

Every page knows who is logged in.

---

# When NOT to use Redux

Don't use Redux for:

- Input field
- Simple Counter
- One component state
- Modal visibility
- Small projects

Use `useState()` instead.

---

# Most Used Redux APIs

```jsx
configureStore()

createSlice()

Provider

useSelector()

useDispatch()

dispatch()
```

---

# Interview Notes

✅ Redux manages **global state**.

✅ `useState` manages **local state**.

✅ Store contains the application's state.

✅ Reducer updates the state.

✅ Action tells Redux what to do.

✅ Slice contains state + reducers + actions.

✅ `Provider` shares the Store with the whole React app.

✅ `useSelector()` reads data.

✅ `useDispatch()` updates data.

✅ Modern MERN applications use **Redux Toolkit**, not old Redux.

---

# One-Line Revision

```
Redux = Global State Management

Store = Database

State = Current Data

Action = What to do

Reducer = Changes Data

Slice = State + Reducers + Actions

Provider = Gives Store to React

useSelector = Read Data

useDispatch = Update Data
```
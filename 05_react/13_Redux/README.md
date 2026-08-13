# 02_Redux_Project_Code_Analysis.md

# Project Folder Structure

```text
src/
│
├── main.jsx
├── App.jsx
│
├── redux/
│   ├── store.jsx
│   └── counter/
│       └── counterSlice.jsx
│
└── components/
    └── Navbar.jsx
```

---

# Complete Connection Flow

```text
main.jsx
      │
      ▼
Provider
      │
      ▼
Redux Store
      │
      ▼
counterSlice
      │
      ▼
App.jsx
      │
      ▼
Navbar.jsx
```

The **Store** is created only once and shared with the whole React app.

---

# Step 1 : main.jsx

```jsx
import { Provider } from "react-redux"
import { store } from "./redux/store"
```

### Why?

- Import Redux Provider.
- Import the Store.

---

```jsx
<Provider store={store}>
    <App />
</Provider>
```

### What does Provider do?

Without Provider

```
App

↓

No Redux Store

↓

useSelector()

❌ Error
```

With Provider

```
Provider

↓

Store

↓

Every Component

↓

useSelector()

↓

useDispatch()
```

Think of Provider as giving **permission** to every component to use Redux.

---

# Step 2 : store.jsx

```jsx
import { configureStore } from "@reduxjs/toolkit"
```

Creates the Redux Store.

---

```jsx
import counterReducer from "./counter/counterSlice"
```

Imports the reducer from your slice.

---

```jsx
export const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})
```

Store becomes

```text
Store
│
└── counter
      │
      └── value = 0
```

Current Redux state

```js
{
    counter:{
        value:0
    }
}
```

---

# Why configureStore()?

Old Redux

```
createStore()

middlewares

compose()

devtools()

reducers()
```

Lots of setup.

Redux Toolkit

```
configureStore()

Done ✅
```

---

# Step 3 : counterSlice.jsx

```jsx
createSlice()
```

Creates

- State
- Reducers
- Actions

inside one file.

---

Initial State

```jsx
const initialState={
    value:0
}
```

Current counter starts from

```
0
```

---

Create Slice

```jsx
createSlice({
    name:"counter",
    initialState,
    reducers:{}
})
```

Meaning

```
Slice Name

↓

counter
```

---

Reducers

```jsx
increment()

decrement()

multiply()

incrementByAmount()
```

These functions change the state.

---

Increment

```jsx
increment:(state)=>{
    state.value +=1
}
```

Flow

```
Current

5

↓

Increment

↓

6
```

---

Decrement

```jsx
state.value -=1
```

---

Multiply

```jsx
state.value *=2
```

---

incrementByAmount

```jsx
state.value += action.payload
```

Example

```jsx
dispatch(
incrementByAmount(10)
)
```

Current

```
5

↓

+10

↓

15
```

---

Export Actions

```jsx
export const{
increment,
decrement,
multiply
}=counterSlice.actions
```

Now these actions can be used anywhere.

---

Export Reducer

```jsx
export default counterSlice.reducer
```

Store imports this reducer.

---

# Step 4 : App.jsx

Read data

```jsx
const count =
useSelector(
(state)=>state.counter.value
)
```

Flow

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

Update data

```jsx
const dispatch=useDispatch()
```

Dispatch sends actions to Redux.

---

Increment Button

```jsx
dispatch(increment())
```

Flow

```
Button

↓

dispatch

↓

increment Action

↓

Reducer

↓

Store Updated

↓

Component Re-render
```

---

Decrement

```jsx
dispatch(decrement())
```

Same flow.

---

Multiply

```jsx
dispatch(multiply())
```

Current

```
5

↓

10
```

---

# Step 5 : Navbar.jsx

```jsx
const count=
useSelector(
(state)=>state.counter.value
)
```

Navbar also reads the same Store.

Notice

App and Navbar both use

```jsx
useSelector()
```

No props are passed.

---

# Why Navbar updates automatically?

Suppose

Current

```
5
```

Click +

```
dispatch()

↓

Reducer

↓

Store = 6

↓

App updates

↓

Navbar updates
```

Both components automatically receive the latest value.

---

# Complete Execution Flow

```
main.jsx

↓

Provider

↓

Store

↓

counterSlice

↓

App.jsx

↓

Navbar.jsx
```

---

# Button Click Flow

```
Click +

↓

dispatch(increment())

↓

Reducer Runs

↓

state.value++

↓

Store Updated

↓

useSelector()

↓

App Re-render

↓

Navbar Re-render

↓

UI Updated
```

---

# Redux State During Execution

Initially

```js
{
    counter:{
        value:0
    }
}
```

After +

```js
{
    counter:{
        value:1
    }
}
```

After +

```js
{
    counter:{
        value:2
    }
}
```

After ×

```js
{
    counter:{
        value:4
    }
}
```

After -

```js
{
    counter:{
        value:3
    }
}
```

---

# Why No Props?

Without Redux

```text
App
 │
 ▼
Navbar(count)
```

Need props.

With Redux

```text
Store
│
├── App
│
└── Navbar
```

Both directly read the Store.

No prop drilling.

---

# File Responsibilities

| File | Responsibility |
|------|----------------|
| `main.jsx` | Connect React with Redux using `Provider` |
| `store.jsx` | Create the Redux Store |
| `counterSlice.jsx` | Holds state, reducers, and actions |
| `App.jsx` | Dispatches actions and displays count |
| `Navbar.jsx` | Reads count from the Store |

---

# Placement Notes

✅ `Provider` gives Store access to the entire React app.

✅ `configureStore()` creates the Redux Store.

✅ `createSlice()` creates state + reducers + actions.

✅ `useSelector()` reads state.

✅ `useDispatch()` sends actions.

✅ `dispatch()` triggers reducers.

✅ Reducers are the only place where Redux state changes.

✅ Whenever Store changes, every component using `useSelector()` automatically re-renders.
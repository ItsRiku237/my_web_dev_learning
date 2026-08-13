# 04_Redux_Project_Code_Analysis.md

---

# Project Flow

```
main.jsx
    │
    ▼
Provider
    │
    ▼
Redux Store
    │
    ▼
App.jsx
    │
    ├──────────────► Navbar.jsx
    │
    ▼
counterSlice.js
```

---

# Folder Structure

```
src
│
├── App.jsx
├── main.jsx
│
├── components
│     └── Navbar.jsx
│
└── redux
      │
      ├── store.jsx
      │
      └── counter
            └── counterSlice.jsx
```

---

# 1. main.jsx

### Purpose

Starts the React application.

Connects Redux with the whole app.

```jsx
import { Provider } from "react-redux"
import { store } from "./redux/store"
```

Provider makes the Redux Store available to every component.

Without Provider,

```
useSelector()

useDispatch()
```

will not work.

---

## Wrap App

```jsx
<Provider store={store}>
    <App/>
</Provider>
```

Flow

```
Store
   │
Provider
   │
Every Component
```

---

# 2. store.jsx

Purpose

Creates one global Redux Store.

```jsx
configureStore({
    reducer:{
        counter: counterReducer
    }
})
```

Meaning

```
Global Store

counter
   │
   ▼
counterReducer
```

Current Redux State

```js
{
   counter:{
      value:0
   }
}
```

---

# 3. counterSlice.jsx

Purpose

Stores state + actions together.

---

## Initial State

```jsx
const initialState={
    value:0
}
```

Initial store

```
value = 0
```

---

## createSlice()

```jsx
createSlice({
    name:"counter",
    initialState,
    reducers:{...}
})
```

Automatically creates

- State
- Reducer
- Actions

---

## increment()

```jsx
increment:(state)=>{
    state.value+=1
}
```

```
0

↓

1

↓

2
```

---

## decrement()

```jsx
state.value-=1
```

```
5

↓

4
```

---

## multiply()

```jsx
state.value*=2
```

```
5

↓

10
```

---

## incrementByAmount()

```jsx
state.value+=action.payload
```

Example

```jsx
dispatch(incrementByAmount(20))
```

```
5

↓

25
```

---

## Export Actions

```jsx
export const {
increment,
decrement,
multiply
}
```

Now App can call

```jsx
dispatch(increment())
```

---

## Export Reducer

```jsx
export default counterSlice.reducer
```

Store imports this reducer.

---

# 4. App.jsx

Purpose

Reads state.

Updates state.

---

## Reading State

```jsx
const count=useSelector(
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

count variable
```

If

```
value=10
```

Then

```
count=10
```

---

## Dispatch

```jsx
const dispatch=useDispatch()
```

Used to send actions.

```
dispatch(action)
```

---

## Decrement Button

```jsx
dispatch(decrement())
```

Flow

```
Button

↓

dispatch

↓

Reducer

↓

Store Updated

↓

UI Updated
```

---

## Increment Button

```jsx
dispatch(increment())
```

```
4

↓

5
```

---

## Multiply Button

```jsx
dispatch(multiply())
```

```
5

↓

10
```

---

# 5. Navbar.jsx

Navbar also reads Redux State.

```jsx
const count=useSelector(
(state)=>state.counter.value
)
```

No props needed.

```
Store

↓

Navbar

↓

Current Count
```

Whenever Store changes,

Navbar updates automatically.

---

# Complete Execution Flow

### Initial

```
main.jsx

↓

Provider

↓

Store

↓

App

↓

Navbar
```

---

### User Clicks +

```
+

↓

dispatch(increment())

↓

Reducer

↓

Store value++

↓

Store Updated

↓

App Re-render

↓

Navbar Re-render
```

---

### User Clicks -

```
-

↓

dispatch(decrement())

↓

Store--

↓

UI Updated
```

---

### User Clicks x

```
×

↓

dispatch(multiply())

↓

value*=2

↓

UI Updated
```

---

# State Flow

```
Initial

value=0

↓

+

↓

1

↓

+

↓

2

↓

×

↓

4

↓

-

↓

3
```

---

# Why Navbar Updates Automatically?

Because

```jsx
useSelector()
```

subscribes to Redux Store.

Whenever Store changes,

```
Store

↓

Navbar notified

↓

Navbar re-render
```

No props are required.

---

# Why App Updates Automatically?

App also uses

```jsx
useSelector()
```

So it also subscribes to Store.

Whenever value changes,

```
Store

↓

App notified

↓

Re-render
```

---

# Summary

| File | Responsibility |
|------|----------------|
| `main.jsx` | Connect Redux to React using Provider |
| `store.jsx` | Creates Global Store |
| `counterSlice.jsx` | State + Reducers + Actions |
| `App.jsx` | Read state and dispatch actions |
| `Navbar.jsx` | Read state only |

---

# Complete Redux Flow (One Line)

```
Button Click
      ↓
dispatch(action)
      ↓
Reducer Executes
      ↓
Redux Store Updates
      ↓
useSelector Detects Change
      ↓
Components Re-render
      ↓
Updated UI
```
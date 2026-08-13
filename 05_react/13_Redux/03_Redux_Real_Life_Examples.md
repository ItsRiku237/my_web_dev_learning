# 03_Redux_Real_Life_Examples.md

# Why Redux is Used in Real Projects

Redux is useful when **multiple components need the same data**.

Examples:

- 🛒 Shopping Cart
- 👤 Logged-in User
- ❤️ Wishlist
- 🌙 Dark Mode
- 🔔 Notifications
- 💬 Chat Messages
- 🌐 Language (English/Hindi)

---

# Example 1 : E-Commerce Shopping Cart

## Problem (Without Redux)

```
Product Page
      │
      ▼
App
      │
 ┌────┴─────┐
 │          │
Navbar    Cart
            │
        Checkout
```

When user clicks **Add to Cart**, every component needs the updated cart count.

Without Redux, you must pass props everywhere.

```
App
 │
 ▼
Navbar(cart)

App
 │
 ▼
Cart(cart)

App
 │
 ▼
Checkout(cart)
```

Lots of prop drilling.

---

## With Redux

```
Product Page

      │

dispatch(addToCart())

      │

      ▼

Redux Store

      │

 ┌────┼────┐
 │    │    │
 ▼    ▼    ▼
Navbar Cart Checkout
```

Every component gets updated automatically.

---

## Store

```js
{
  cart: [
    {
      id: 1,
      title: "Laptop",
      price: 50000
    }
  ]
}
```

---

## Slice

```jsx
const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: []
  },

  reducers: {

    addToCart(state, action) {
      state.items.push(action.payload)
    },

    removeFromCart(state, action) {
      state.items =
      state.items.filter(
      item => item.id !== action.payload)
    }

  }
})
```

---

## Add Product

```jsx
dispatch(addToCart(product))
```

---

## Read Cart

```jsx
const cart =
useSelector(
state => state.cart.items
)
```

---

## Show Cart Count

```jsx
cart.length
```

Navbar automatically updates.

---

# Flow

```
Click Add To Cart

↓

dispatch(addToCart)

↓

Reducer

↓

Store Updated

↓

Navbar Updated

↓

Cart Updated

↓

Checkout Updated
```

---

# Example 2 : Login Authentication

Almost every MERN project has login.

---

## Store

```js
{
   user:{
      name:"Riku",
      email:"riku@gmail.com"
   }
}
```

---

## Slice

```jsx
const authSlice = createSlice({

  name:"auth",

  initialState:{
      user:null
  },

  reducers:{

    login(state,action){
      state.user=action.payload
    },

    logout(state){
      state.user=null
    }

  }

})
```

---

## Login

```jsx
dispatch(login(user))
```

---

## Logout

```jsx
dispatch(logout())
```

---

## Read User

```jsx
const user =
useSelector(
state=>state.auth.user
)
```

---

## Navbar

```jsx
{
user
?
<h3>{user.name}</h3>
:
<button>Login</button>
}
```

---

# Flow

```
Login Successful

↓

dispatch(login)

↓

Store Updated

↓

Navbar Updated

↓

Profile Updated

↓

Dashboard Updated
```

---

# Example 3 : Dark Mode

Store

```js
{
   theme:"dark"
}
```

Toggle

```jsx
dispatch(toggleTheme())
```

Read

```jsx
const theme =
useSelector(
state=>state.theme
)
```

All pages immediately switch theme.

---

# Example 4 : Notifications

Store

```js
{
   notifications:[
      ...
   ]
}
```

Navbar

```
🔔 5
```

Whenever a notification arrives,

```
dispatch(addNotification())

↓

Store Updated

↓

Navbar Badge Updates
```

---

# When Should You Use Redux?

✅ Shopping Cart

✅ Login User

✅ Wishlist

✅ Dashboard

✅ Chat

✅ Notifications

✅ Theme

✅ Language

---

# When NOT to Use Redux

❌ Input Field

```jsx
<input/>
```

Use

```jsx
useState()
```

---

❌ Modal

```jsx
Open

Close
```

Use

```jsx
useState()
```

---

❌ Counter

```jsx
const [count,setCount]
```

No Redux needed.

---

❌ Toggle Button

```jsx
const [show,setShow]
```

No Redux needed.

---

# useState vs Redux

### useState

```
One Component

↓

Local State
```

---

### Redux

```
Many Components

↓

Shared State
```

---

# Quick Comparison

| Situation | useState | Redux |
|-----------|----------|--------|
| Counter | ✅ | ❌ |
| Input Box | ✅ | ❌ |
| Modal | ✅ | ❌ |
| Shopping Cart | ❌ | ✅ |
| Login User | ❌ | ✅ |
| Wishlist | ❌ | ✅ |
| Notifications | ❌ | ✅ |
| Dashboard | ❌ | ✅ |

---

# Industry Usage (MERN)

Most MERN applications use Redux for:

- Authentication
- Shopping Cart
- User Profile
- Admin Dashboard
- Theme
- Notifications
- Wishlist
- Chat State

---

# Placement Notes

✅ Redux is best for **shared/global state**.

✅ `dispatch()` updates the Store.

✅ `useSelector()` reads the Store.

✅ Use Redux only when multiple components need the same data.

✅ Do **not** replace every `useState()` with Redux.

✅ Small UI state (input, modal, toggle, counter) should remain in `useState()`.

---

# One-Line Revision

```
Local State
        ↓
useState

Global State
        ↓
Redux

Read Data
        ↓
useSelector()

Update Data
        ↓
dispatch()

Change State
        ↓
Reducer

Store Updates
        ↓
UI Re-renders
```
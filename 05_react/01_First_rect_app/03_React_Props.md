# 03_React_Props.md

> **Goal:** Understand **Props** in React using your `Card.jsx` example.

---

# What are Props?

**Props** stands for **Properties**.

Props are used to **pass data from a Parent Component to a Child Component**.

Think of Props like a **parcel**.

```text
Parent Component
      │
      │  (Props/Data)
      ▼
Child Component
```

The parent sends data.

The child receives data.

---

# Real-Life Example

Imagine a father gives different books to his children.

```text
Father (Parent)

↓

Child 1 → Math Book

↓

Child 2 → Science Book

↓

Child 3 → English Book
```

The children don't create the books.

The father gives them.

React Props work exactly the same way.

---

# Your Code

## Parent Component (App.jsx)

```jsx
<Card title="Card 1" description="Card 1 desc."/>

<Card title="Card 2" description="Card 2 desc."/>

<Card title="Card 3" description="Card 3 desc."/>

<Card title="Card 4" description="Card 4 desc."/>

<Card title="Card 5" description="Card 5 desc."/>
```

Here

```text
App.jsx

↓

Sending title

↓

Sending description
```

---

# Child Component

```jsx
const Card = (props) => {

}
```

React automatically puts all received data inside

```text
props
```

Think

```text
props

↓

A Box

↓

Contains everything sent by Parent
```

---

# What does React receive?

For

```jsx
<Card
title="Card 1"
description="Card 1 desc."
/>
```

React internally creates

```javascript
props = {
    title: "Card 1",
    description: "Card 1 desc."
}
```

This happens automatically.

You never write it yourself.

---

# Accessing Props

Your code

```jsx
<h1>{props.title}</h1>

<p>{props.description}</p>
```

React reads

```text
props

↓

title

↓

Card 1
```

and

```text
props

↓

description

↓

Card 1 desc.
```

---

# Complete Data Flow

```text
App.jsx

↓

<Card
title="Card 1"
description="Card 1 desc."
/>

↓

React

↓

props

↓

Card.jsx

↓

props.title

↓

props.description

↓

Browser
```

---

# Visual Flow

```text
App.jsx

      title="Card 1"

──────────────►

Card.jsx

props.title

↓

Card 1
```

---

# Second Card

```jsx
<Card
title="Card 2"
description="Card 2 desc."
/>
```

Now React creates

```javascript
props = {

title:"Card 2",

description:"Card 2 desc."

}
```

Same component

Different data

---

# Why Props are Useful?

Without Props

You would need

```text
Card1.jsx

Card2.jsx

Card3.jsx

Card4.jsx

Card5.jsx
```

Five separate files.

---

With Props

Only one file

```text
Card.jsx
```

can display

```text
Card 1

Card 2

Card 3

Card 4

Card 5
```

Only the data changes.

---

# Parent → Child Relationship

```text
App.jsx

↓

Card.jsx
```

App is

```text
Parent
```

Card is

```text
Child
```

Parent sends

```text
Props
```

Child receives

```text
Props
```

---

# Another Example

```jsx
<Card

title="Laptop"

description="Gaming Laptop"

/>
```

React creates

```javascript
props = {

title:"Laptop",

description:"Gaming Laptop"

}
```

Output

```text
Laptop

Gaming Laptop
```

---

# Passing Different Data Types

## String

```jsx
<Card title="React"/>
```

---

## Number

```jsx
<Card price={500}/>
```

Notice

Number uses

```jsx
{}
```

---

## Boolean

```jsx
<Card available={true}/>
```

---

## Array

```jsx
<Card

items={["HTML","CSS","React"]}

/>
```

Inside

```jsx
props.items
```

---

## Object

```jsx
<Card

student={{

name:"Riku",

age:20

}}

/>
```

Access

```jsx
props.student.name
```

---

# Destructuring Props (Most Common)

Instead of

```jsx
const Card = (props)=>{

return(

<h1>{props.title}</h1>

)

}
```

Write

```jsx
const Card = ({title,description})=>{

return(

<>

<h1>{title}</h1>

<p>{description}</p>

</>

)

}
```

Much cleaner.

This is the preferred style in most React projects.

---

# Props are Read Only

❌ Don't do

```jsx
props.title="ABC"
```

Props should never be modified inside the child component.

Only the parent should change the values.

---

# Component Communication

```text
Parent

↓

Props

↓

Child
```

Props only move

```text
One Direction

↓

Top

↓

Bottom
```

This is called

```text
One-Way Data Flow
```

---

# Complete Flow

```text
App.jsx

↓

<Card

title="Card 1"

description="Card 1 desc."

/>

↓

React

↓

Creates props Object

↓

Card.jsx

↓

Reads

props.title

props.description

↓

Displays Data

↓

Browser
```

---

# Your Card Component (Recommended Style)

```jsx
import "./Card.css";

const Card = ({ title, description }) => {
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <img
        src="https://iimtu.edu.in/blog/wp-content/uploads/2023/11/CSE-aa.jpg"
        alt=""
        width={300}
        height={150}
      />

      <h1>{title}</h1>

      <p>{description}</p>
    </div>
  );
};

export default Card;
```

This works exactly the same as your original code but is cleaner.

---

# Quick Revision

```text
Props

↓

Properties

↓

Used to pass data

↓

Parent

↓

Child

↓

Read Only

↓

Reusable Components

↓

One-Way Data Flow
```

---

# Placement Notes

✅ Props = Properties.

✅ Props pass data from **Parent → Child**.

✅ React automatically creates the `props` object.

✅ Access values using `props.name` or destructuring.

✅ Props are **read-only**.

✅ Props help make components reusable.

✅ One component can display different data by receiving different props.

> **Interview Question:**
> **Q:** Why do we use Props?
> **A:** Props allow a parent component to pass data to child components, making components reusable, dynamic, and easier to maintain.

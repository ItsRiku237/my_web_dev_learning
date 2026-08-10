# 01_useMemo_Complete_Guide.md

# React useMemo (MERN Revision)

---

# What is useMemo?

`useMemo` is a React Hook that **stores (memoizes) the result of an expensive calculation**.

Instead of calculating again on every render, React reuses the previous result until the dependency changes.

---

# Why use useMemo?

Without `useMemo`

```text
Render

↓

Expensive calculation

↓

Render again

↓

Expensive calculation again

↓

Render again

↓

Expensive calculation again
```

Even if the data didn't change.

---

With `useMemo`

```text
Render

↓

Expensive calculation (only once)

↓

Next render

↓

Reuse previous result

↓

Dependency changes

↓

Calculate again
```

This improves performance.

---

# Syntax

```jsx
const value = useMemo(() => {
    return expensiveCalculation();
}, [dependencies]);
```

---

# Parameters

```jsx
useMemo(callback, dependencyArray)
```

### callback

Runs the expensive calculation.

```jsx
() => numbers.find(...)
```

---

### dependency array

React checks these values.

If they change →

Run callback again.

If not →

Return old value.

---

# When should we use useMemo?

Use it when:

- Large arrays
- Searching
- Filtering
- Sorting
- Heavy calculations
- Expensive API data processing

---

Don't use it for simple calculations.

❌

```jsx
const sum = a + b;
```

No need.

---

Use it for

✅

```jsx
array.filter(...)
array.find(...)
array.sort(...)
heavy calculation
```

---

# Your Project Analysis

---

## Step 1

```jsx
const nums = new Array(30_000_000)
```

Creates an array of

```text
30,000,000
```

empty items.

---

## Step 2

```jsx
.fill(0)
```

Fills every element with

```text
0
```

Now

```text
[0,0,0,0,0,0....]
```

---

## Step 3

```jsx
.map((_, i)=>{
```

Loop through every element.

---

What is

```jsx
_
```

?

Current value.

Since every value is

```text
0
```

and we don't use it,

we write

```jsx
_
```

meaning

> Ignore this value.

---

What is

```jsx
i
```

?

Current index.

Example

```text
i=0

i=1

i=2
```

---

## Step 4

Each element becomes

```jsx
{
 index:i,
 isMagical:i===29000000
}
```

Example

```text
[
 {index:0,isMagical:false},

 {index:1,isMagical:false},

 ...

 {index:29000000,isMagical:true}
]
```

Only ONE object has

```text
isMagical=true
```

---

# State

```jsx
const [numbers,setNumbers]=useState(nums)
```

Stores the huge array.

---

```jsx
const [count,setCount]=useState(0)
```

Stores button count.

---

# Without useMemo

```jsx
const magical =
numbers.find(item=>item.isMagical)
```

Every render

↓

React searches

```text
30 Million objects
```

again.

Even if only

```text
count
```

changes.

This is slow.

---

Flow

```text
Click

↓

count changes

↓

App renders

↓

find()

↓

30 Million search

↓

Done
```

Every click.

---

# Case 1

```jsx
const magical =
useMemo(()=>{
return numbers.find(...)
},[])
```

Dependency

```jsx
[]
```

means

Run only once.

---

Flow

```text
First render

↓

find()

↓

Save result

↓

Click button

↓

Reuse saved result
```

No searching again.

---

Problem

If

```jsx
numbers
```

changes later,

React still returns the old value.

Because dependency array is empty.

---

# Case 2 (Correct)

```jsx
const magical =
useMemo(()=>{
return numbers.find(...)
},[numbers])
```

Now React watches

```jsx
numbers
```

If numbers changes

↓

Run find() again.

Otherwise

↓

Reuse old value.

This is the recommended way.

---

# How find() works

```jsx
numbers.find(item=>item.isMagical)
```

React checks

```text
Object 1

↓

false

↓

Object 2

↓

false

↓

Object 3

↓

false

↓

...
```

Until

```text
isMagical=true
```

Then stops.

Returns

```jsx
{
index:29000000,
isMagical:true
}
```

---

# Why is it expensive?

Because

```text
30 Million
```

objects are checked.

Searching such a huge array every render wastes CPU time.

---

# Button Analysis

```jsx
setCount(count=>count+1)
```

Updates count.

React re-renders.

---

Then

```jsx
if(count==10)
```

runs.

You create

```jsx
new Array(40000000)
```

But notice

```jsx
setNumbers(...)
```

is NOT called.

So

```text
numbers
```

never changes.

The new array is simply created and discarded.

It does nothing.

---

Correct version

```jsx
const arr =
new Array(40000000)
.fill(0)
.map((_,i)=>({
index:i,
isMagical:i===39000000
}))

setNumbers(arr)
```

Now

```text
numbers
```

changes.

Dependency changes.

useMemo runs again.

New magical object is found.

---

# Execution Flow

Initial Render

```text
Create huge array

↓

Store in state

↓

useMemo

↓

find magical object

↓

Show result
```

---

Button Click

```text
count changes

↓

App renders

↓

numbers unchanged

↓

useMemo returns old result

↓

No searching again
```

---

If numbers changes

```text
setNumbers()

↓

numbers updated

↓

Dependency changed

↓

find() runs again

↓

New result saved
```

---

# Difference

Without useMemo

```text
Render

↓

Search

↓

Render

↓

Search

↓

Render

↓

Search
```

---

With useMemo

```text
Render

↓

Search once

↓

Render

↓

Reuse result

↓

Dependency changes

↓

Search again
```

---

# When MERN Developers use useMemo

- Large `.map()`
- `.filter()`
- `.find()`
- `.sort()`
- Dashboard calculations
- Analytics
- Large tables
- Product search
- Expensive computations

---

# Don't use useMemo for

❌

```jsx
count+1

a+b

name.toUpperCase()
```

These are already very fast.

---

# Quick Revision

```text
useMemo

✔ Stores expensive calculation

✔ Improves performance

✔ Runs only when dependency changes

✔ Returns cached value otherwise
```

---

# Interview Answer

**What is useMemo?**

> `useMemo` is a React Hook that memoizes the result of an expensive calculation. It prevents unnecessary recalculations by recomputing the value only when its dependencies change, which improves performance in React applications.
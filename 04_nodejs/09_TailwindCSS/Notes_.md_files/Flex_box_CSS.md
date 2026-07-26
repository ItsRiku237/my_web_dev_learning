# CSS Flexbox - Complete Cheat Sheet

> Learn Flexbox by understanding **2 Axes** instead of memorizing properties.

---

# Rule No.1 (Most Important)

Everything in Flexbox depends on **2 axes**.

```text
                Cross Axis
                     ↑
                     │
                     │
                     │
Main Axis  ------------------------→
```

Think:

```text
Main Axis
→ Items move Left ↔ Right

Cross Axis
→ Items move Top ↕ Bottom
```

---

# Step 1 : Make Flex Container

```css
.container{
    display: flex;
}
```

Now every child becomes a **Flex Item**.

```html
<div class="container">

    <div>A</div>

    <div>B</div>

    <div>C</div>

</div>
```

Default Output

```text
A   B   C
```

---

# Step 2 : Main Axis Changes

## flex-direction

Controls:

```text
Direction of Main Axis
```

### row (Default)

```css
flex-direction: row;
```

```text
A   B   C
```

Main Axis →

---

### row-reverse

```css
flex-direction: row-reverse;
```

```text
C   B   A
```

Main Axis ←

---

### column

```css
flex-direction: column;
```

```text
A
B
C
```

Main Axis ↓

---

### column-reverse

```css
flex-direction: column-reverse;
```

```text
C
B
A
```

Main Axis ↑

---

# Easy Trick

```text
row

Main Axis →
```

```text
column

Main Axis ↓
```

Everything else changes automatically.

---

# Step 3 : justify-content

## Always Works On Main Axis

Remember forever:

```text
JUSTIFY

↓

Main Axis
```

Example

```css
justify-content:center;
```

Row

```text
|          A B C          |
```

Column

```text
|
|
A
B
C
|
|
```

---

## Values

### flex-start

```css
justify-content:flex-start;
```

```text
A B C
```

---

### center

```css
justify-content:center;
```

```text
      A B C
```

---

### flex-end

```css
justify-content:flex-end;
```

```text
               A B C
```

---

### space-between

```css
justify-content:space-between;
```

```text
A          B          C
```

---

### space-around

```css
justify-content:space-around;
```

```text
  A      B      C
```

Equal space around every item.

---

### space-evenly

```css
justify-content:space-evenly;
```

```text
   A     B     C
```

Everything has exactly equal spacing.

---

# Step 4 : align-items

Remember forever

```text
ALIGN

↓

Cross Axis
```

Example

```css
align-items:center;
```

Row

```text
|
|
A B C
|
|
```

Moves items vertically.

---

If direction becomes column

Cross Axis becomes horizontal.

```text
     A
     B
     C
```

---

## Values

### stretch (Default)

Items stretch.

---

### flex-start

Top

---

### center

Middle

---

### flex-end

Bottom

---

# Biggest Confusion

Many students confuse

```text
justify-content

AND

align-items
```

Remember this rule.

## If flex-direction is row

```text
justify-content

↓

Left ↔ Right
```

```text
align-items

↓

Top ↕ Bottom
```

---

## If flex-direction is column

Everything changes.

```text
justify-content

↓

Top ↕ Bottom
```

```text
align-items

↓

Left ↔ Right
```

---

# Golden Memory Trick

Never memorize directions.

Remember only

```text
justify-content

↓

Main Axis
```

```text
align-items

↓

Cross Axis
```

The axis changes automatically when flex-direction changes.

---

# Step 5 : flex-wrap

Default

```css
flex-wrap: nowrap;
```

Everything stays on one line.

```text
A B C D E F G
```

---

Wrap

```css
flex-wrap: wrap;
```

```text
A B C

D E F

G
```

---

Reverse Wrap

```css
flex-wrap: wrap-reverse;
```

Rows start from bottom.

---

# Step 6 : align-content

Only works when

```css
flex-wrap: wrap;
```

and there are **multiple rows**.

Example

```text
A B C

D E F

G H I
```

Now

```css
align-content:center;
```

Moves the **whole group of rows**.

---

# Difference

```text
align-items

↓

Moves Items
```

```text
align-content

↓

Moves Rows
```

---

# Step 7 : gap

Instead of margin

Use

```css
gap:20px;
```

Output

```text
A    B    C
```

---

Also

```css
row-gap:20px;
```

Only vertical.

---

```css
column-gap:20px;
```

Only horizontal.

---

# Flex Item Properties

These are applied to child elements.

---

# flex-grow

Controls

```text
Who gets extra space?
```

Example

```css
.item1{

    flex-grow:1;

}
```

Output

```text
AAAAAAAAAAA

B

C
```

A becomes larger.

---

# flex-shrink

Controls

```text
Who shrinks?
```

Default

```css
flex-shrink:1;
```

No Shrink

```css
flex-shrink:0;
```

---

# flex-basis

Starting size.

```css
flex-basis:200px;
```

Item starts with 200px width.

---

# flex

Shortcut

Instead of

```css
flex-grow:1;

flex-shrink:1;

flex-basis:0;
```

Use

```css
flex:1;
```

---

# order

Changes display order.

HTML

```text
A

B

C
```

CSS

```css
.itemA{

order:3;

}
```

Output

```text
B

C

A
```

---

# align-self

Moves only one item.

Container

```css
align-items:center;
```

One Item

```css
align-self:flex-end;
```

Only that item moves.

---

# Complete Property List

## Container

```text
display:flex

flex-direction

justify-content

align-items

flex-wrap

align-content

gap

row-gap

column-gap
```

---

## Item

```text
order

flex-grow

flex-shrink

flex-basis

flex

align-self
```

---

# One-Line Memory

```text
display:flex

↓

Enable Flexbox
```

```text
flex-direction

↓

Main Axis Direction
```

```text
justify-content

↓

Main Axis Alignment
```

```text
align-items

↓

Cross Axis Alignment
```

```text
flex-wrap

↓

Allow Next Line
```

```text
align-content

↓

Align Rows
```

```text
gap

↓

Space Between Items
```

```text
flex-grow

↓

Take Extra Space
```

```text
flex-shrink

↓

Shrink Item
```

```text
flex-basis

↓

Initial Size
```

```text
order

↓

Change Order
```

```text
align-self

↓

Move One Item
```

---

# Visual Memory Map

```text
                FLEXBOX

                    │
        ┌───────────┴───────────┐
        │                       │
  Container Properties     Item Properties
        │                       │
        │                       │
 display:flex               order
 flex-direction             flex-grow
 justify-content            flex-shrink
 align-items                flex-basis
 flex-wrap                  flex
 align-content              align-self
 gap
```

---

# 90% Rule (Most Used in Real Projects)

These are the Flexbox properties you'll use in almost every MERN project:

```css
display:flex;

flex-direction:row;

justify-content:center;

justify-content:space-between;

align-items:center;

flex-wrap:wrap;

gap:20px;

flex:1;
```

Master these first, and you'll be able to build navbars, cards, dashboards, forms, authentication pages, blogs, and most responsive layouts.

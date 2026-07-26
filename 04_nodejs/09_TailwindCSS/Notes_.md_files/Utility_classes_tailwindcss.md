# Tailwind CSS - Most Used Utility Classes (Complete Cheat Sheet)

> This cheat sheet covers **90%+** of the Tailwind classes you'll use in MERN Stack and modern web development.

---

# Table of Contents

1. Layout
2. Flexbox
3. Grid
4. Spacing
5. Width & Height
6. Typography
7. Colors
8. Background
9. Borders
10. Border Radius
11. Shadows
12. Display
13. Position
14. Overflow
15. Z-index
16. Opacity
17. Cursor
18. Transition & Animation
19. Transform
20. Responsive Design
21. Hover, Focus & Active
22. Common Component Examples
23. Top 50 Classes to Memorize

---

# 1. Layout

| Class       | Meaning                   |
| ----------- | ------------------------- |
| container   | Responsive container      |
| mx-auto     | Center horizontally       |
| box-border  | Include border in width   |
| box-content | Exclude border from width |

Example

```html
<div class="container mx-auto">

</div>
```

---

# 2. Display

| Class        | Meaning        |
| ------------ | -------------- |
| block        | Display block  |
| inline       | Inline element |
| inline-block | Inline block   |
| flex         | Flex container |
| inline-flex  | Inline flex    |
| grid         | Grid container |
| hidden       | display:none   |

Example

```html
<div class="flex">

</div>
```

---

# 3. Flexbox

## Direction

| Class            | Meaning        |
| ---------------- | -------------- |
| flex-row         | Horizontal     |
| flex-col         | Vertical       |
| flex-row-reverse | Reverse row    |
| flex-col-reverse | Reverse column |

---

## Justify Content

| Class           | Meaning       |
| --------------- | ------------- |
| justify-start   | Left          |
| justify-center  | Center        |
| justify-end     | Right         |
| justify-between | Space Between |
| justify-around  | Space Around  |
| justify-evenly  | Equal Space   |

Example

```html
<div class="flex justify-between">

</div>
```

---

## Align Items

| Class         | Meaning |
| ------------- | ------- |
| items-start   | Top     |
| items-center  | Center  |
| items-end     | Bottom  |
| items-stretch | Stretch |

Example

```html
<div class="flex items-center">

</div>
```

---

## Gap

| Class | Meaning    |
| ----- | ---------- |
| gap-2 | Small gap  |
| gap-4 | Medium gap |
| gap-6 | Large gap  |
| gap-8 | Bigger gap |

Example

```html
<div class="flex gap-4">

</div>
```

---

# 4. Grid

| Class        | Meaning     |
| ------------ | ----------- |
| grid         | Grid Layout |
| grid-cols-2  | 2 Columns   |
| grid-cols-3  | 3 Columns   |
| grid-cols-4  | 4 Columns   |
| grid-cols-12 | 12 Columns  |

Example

```html
<div class="grid grid-cols-3 gap-4">

</div>
```

---

# 5. Spacing

## Padding

| Class | Meaning            |
| ----- | ------------------ |
| p-2   | Padding all        |
| p-4   | Padding            |
| px-4  | Horizontal padding |
| py-4  | Vertical padding   |
| pt-4  | Top                |
| pb-4  | Bottom             |
| pl-4  | Left               |
| pr-4  | Right              |

Example

```html
<div class="p-5">

</div>
```

---

## Margin

| Class   | Meaning    |
| ------- | ---------- |
| m-4     | Margin     |
| mx-auto | Center     |
| mx-4    | Horizontal |
| my-4    | Vertical   |
| mt-4    | Top        |
| mb-4    | Bottom     |
| ml-4    | Left       |
| mr-4    | Right      |

---

# 6. Width

| Class    | Meaning      |
| -------- | ------------ |
| w-full   | 100%         |
| w-screen | Screen width |
| w-1/2    | 50%          |
| w-1/3    | 33%          |
| w-2/3    | 66%          |
| w-1/4    | 25%          |
| w-auto   | Auto         |
| max-w-sm | Small        |
| max-w-md | Medium       |
| max-w-lg | Large        |
| max-w-xl | XL           |

---

# 7. Height

| Class        | Meaning               |
| ------------ | --------------------- |
| h-full       | 100%                  |
| h-screen     | Screen height         |
| h-auto       | Auto                  |
| min-h-screen | Minimum screen height |

---

# 8. Typography

## Font Size

| Class     | Meaning     |
| --------- | ----------- |
| text-xs   | Extra Small |
| text-sm   | Small       |
| text-base | Normal      |
| text-lg   | Large       |
| text-xl   | XL          |
| text-2xl  | 2XL         |
| text-3xl  | 3XL         |
| text-4xl  | 4XL         |

---

## Font Weight

| Class          | Meaning    |
| -------------- | ---------- |
| font-light     | Light      |
| font-normal    | Normal     |
| font-medium    | Medium     |
| font-semibold  | Semi Bold  |
| font-bold      | Bold       |
| font-extrabold | Extra Bold |

---

## Text Alignment

| Class        | Meaning |
| ------------ | ------- |
| text-left    | Left    |
| text-center  | Center  |
| text-right   | Right   |
| text-justify | Justify |

---

# 9. Text Color

| Class           | Meaning   |
| --------------- | --------- |
| text-white      | White     |
| text-black      | Black     |
| text-gray-500   | Gray      |
| text-gray-700   | Dark Gray |
| text-red-500    | Red       |
| text-green-500  | Green     |
| text-blue-500   | Blue      |
| text-yellow-500 | Yellow    |

---

# 10. Background Color

| Class         | Meaning    |
| ------------- | ---------- |
| bg-white      | White      |
| bg-black      | Black      |
| bg-gray-100   | Light Gray |
| bg-gray-900   | Dark Gray  |
| bg-blue-500   | Blue       |
| bg-red-500    | Red        |
| bg-green-500  | Green      |
| bg-yellow-500 | Yellow     |

---

# 11. Border

| Class           | Meaning      |
| --------------- | ------------ |
| border          | Border       |
| border-2        | Thick Border |
| border-gray-300 | Gray Border  |
| border-red-500  | Red Border   |
| border-blue-500 | Blue Border  |

---

# 12. Border Radius

| Class        | Meaning |
| ------------ | ------- |
| rounded      | Small   |
| rounded-md   | Medium  |
| rounded-lg   | Large   |
| rounded-xl   | XL      |
| rounded-2xl  | 2XL     |
| rounded-full | Circle  |

---

# 13. Shadow

| Class       | Meaning   |
| ----------- | --------- |
| shadow      | Small     |
| shadow-md   | Medium    |
| shadow-lg   | Large     |
| shadow-xl   | XL        |
| shadow-2xl  | 2XL       |
| shadow-none | No Shadow |

---

# 14. Position

| Class    | Meaning  |
| -------- | -------- |
| relative | Relative |
| absolute | Absolute |
| fixed    | Fixed    |
| sticky   | Sticky   |

---

# 15. Position Values

| Class    | Meaning     |
| -------- | ----------- |
| top-0    | Top         |
| left-0   | Left        |
| right-0  | Right       |
| bottom-0 | Bottom      |
| inset-0  | Fill Parent |

---

# 16. Overflow

| Class           | Meaning           |
| --------------- | ----------------- |
| overflow-hidden | Hide Overflow     |
| overflow-auto   | Auto Scroll       |
| overflow-scroll | Scroll            |
| overflow-x-auto | Horizontal Scroll |

---

# 17. Z-Index

| Class | Meaning   |
| ----- | --------- |
| z-0   | 0         |
| z-10  | 10        |
| z-20  | 20        |
| z-50  | Top Layer |

---

# 18. Opacity

| Class       | Meaning   |
| ----------- | --------- |
| opacity-0   | Invisible |
| opacity-50  | 50%       |
| opacity-75  | 75%       |
| opacity-100 | Visible   |

---

# 19. Cursor

| Class              | Meaning  |
| ------------------ | -------- |
| cursor-pointer     | Hand     |
| cursor-not-allowed | Disabled |
| cursor-default     | Default  |

---

# 20. Transition

| Class        | Meaning           |
| ------------ | ----------------- |
| transition   | Enable Transition |
| duration-300 | 300ms             |
| duration-500 | 500ms             |
| ease-in      | Ease In           |
| ease-out     | Ease Out          |

---

# 21. Transform

| Class         | Meaning    |
| ------------- | ---------- |
| scale-95      | Smaller    |
| scale-100     | Normal     |
| rotate-45     | Rotate     |
| translate-x-2 | Move Right |
| translate-y-2 | Move Down  |

---

# 22. Hover State

| Class             | Meaning          |
| ----------------- | ---------------- |
| hover:bg-blue-600 | Hover Background |
| hover:text-white  | Hover Text       |
| hover:scale-105   | Hover Scale      |
| hover:shadow-lg   | Hover Shadow     |

Example

```html
<button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">
    Login
</button>
```

---

# 23. Focus State

| Class               | Meaning        |
| ------------------- | -------------- |
| focus:outline-none  | Remove Outline |
| focus:ring-2        | Ring           |
| focus:ring-blue-500 | Blue Ring      |

---

# 24. Active State

| Class           | Meaning             |
| --------------- | ------------------- |
| active:scale-95 | Button Press Effect |

---

# 25. Responsive Design

| Prefix | Screen Size |
| ------ | ----------- |
| sm:    | ≥ 640px     |
| md:    | ≥ 768px     |
| lg:    | ≥ 1024px    |
| xl:    | ≥ 1280px    |
| 2xl:   | ≥ 1536px    |

Example

```html
<div class="text-sm md:text-lg lg:text-2xl">

</div>
```

---

# 26. Dark Mode

| Class            | Meaning         |
| ---------------- | --------------- |
| dark:bg-gray-900 | Dark Background |
| dark:text-white  | White Text      |

Example

```html
<div class="bg-white dark:bg-gray-900">

</div>
```

---

# Common Component Examples

## Center a Card

```html
<div class="min-h-screen flex justify-center items-center">

</div>
```

---

## Button

```html
<button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition">
    Login
</button>
```

---

## Card

```html
<div class="bg-white rounded-xl shadow-lg p-6">

</div>
```

---

## Navbar

```html
<nav class="flex justify-between items-center p-4 bg-gray-900 text-white">

</nav>
```

---

## Responsive Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

</div>
```

---

# Top 50 Tailwind Classes to Memorize

```text
flex
grid
block
hidden

justify-center
justify-between
items-center

gap-4
gap-6

p-4
p-6
px-4
py-2

m-4
mt-4
mb-4
mx-auto

w-full
w-screen
max-w-md

h-screen
min-h-screen

text-white
text-black
text-gray-700
text-lg
text-2xl
font-bold
text-center

bg-white
bg-black
bg-blue-500
bg-gray-100

border
border-gray-300

rounded
rounded-lg
rounded-full

shadow
shadow-md
shadow-lg

relative
absolute
fixed

overflow-hidden

z-50

cursor-pointer

transition
duration-300

hover:bg-blue-600
hover:scale-105

focus:ring-2

active:scale-95

sm:
md:
lg:
xl:

dark:bg-gray-900
dark:text-white
```

---

# Learning Order (Recommended)

```text
1. Layout
      ↓
2. Flexbox
      ↓
3. Spacing
      ↓
4. Width & Height
      ↓
5. Typography
      ↓
6. Colors
      ↓
7. Borders
      ↓
8. Border Radius
      ↓
9. Shadows
      ↓
10. Position
      ↓
11. Responsive Design
      ↓
12. Hover & Focus
      ↓
13. Grid
      ↓
14. Animation
      ↓
15. Dark Mode
```

> **Tip:** You don't need to memorize every Tailwind class. Start with the **Top 50** above. They are enough to build most MERN projects like portfolios, task managers, dashboards, authentication pages, blogs, and e-commerce UIs.

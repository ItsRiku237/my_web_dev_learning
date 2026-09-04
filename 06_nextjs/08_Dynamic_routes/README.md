# 🚀 10_NextJS_Dynamic_Routes.md

> **Next.js 14 App Router - Dynamic Routes**
>
> Beginner → Intermediate | Software Engineer Revision Notes

---

# 📚 Contents

1. What are Dynamic Routes?
2. Why use Dynamic Routes?
3. Folder Structure
4. Dynamic Route Syntax
5. Catch-all Routes
6. notFound()
7. Real Life Examples
8. Code Analysis
9. Execution Flow
10. Best Practices
11. Interview Questions
12. Revision Cheat Sheet

---

# 1. What are Dynamic Routes?

Dynamic Routes allow you to create **multiple pages using one file**.

Instead of creating

```
python/page.js

java/page.js

cpp/page.js

javascript/page.js
```

Create only

```
[slug]/page.js
```

One file handles all URLs.

---

# 2. Why use Dynamic Routes?

Imagine a blog website.

There are

```
1000 Blog Posts
```

Creating

```
1000 folders

1000 page.js
```

❌ Impossible

Instead

```
blog/

[slug]/

page.js
```

One page handles all blogs.

---

# 3. Folder Structure

```
app/

blog/

page.js

BlogPost/

[slug]/

page.js

about/

[...kuch_v]/

page.js
```

---

# 4. Dynamic Route Syntax

Folder

```
[slug]
```

means

```
Any Value
```

Example

```
/BlogPost/python

↓

slug="python"

----------------

/BlogPost/java

↓

slug="java"

----------------

/BlogPost/react

↓

slug="react"
```

---

# 5. Catch-all Routes

Folder

```
[...slug]
```

captures multiple URL segments.

Example

```
/about/a

↓

["a"]

----------------

/about/a/b

↓

["a","b"]

----------------

/about/a/b/c

↓

["a","b","c"]
```

---

# 6. notFound()

```js
import { notFound } from "next/navigation";
```

Shows

```
404 Page
```

Example

```
if(!product){

notFound()

}
```

Useful when data doesn't exist.

---

# 7. Real Life Examples

## 📝 Blog Website

```
/blog/react-hooks

/blog/javascript

/blog/python
```

↓

One page

```
[slug]
```

---

## 🛒 Amazon Product

```
/product/iphone-16

/product/macbook

/product/airpods
```

↓

One page

```
[id]
```

---

## 🎬 Netflix

```
/movie/avatar

/movie/interstellar
```

↓

One Dynamic Route

---

## 📚 Course Website

```
/course/react

/course/python

/course/java
```

---

## 👤 User Profile

```
/user/riku

/user/rahul

/user/alice
```

↓

One Dynamic Page.

---

# 8. Analysis of Your Code

---

## BlogPost/[slug]/page.js

```jsx
import { notFound } from "next/navigation";
```

Imports

```
404 Function
```

---

```jsx
Page({ params })
```

Receives URL parameters.

Example

```
/BlogPost/python

↓

params

↓

{

slug:"python"

}
```

---

```jsx
const { slug } = await params;
```

Gets

```
python

or

java

or

cpp
```

---

```jsx
const language=[...]

```

Allowed pages

```
python

java

cpp

c

javascript
```

---

```jsx
language.includes(slug)
```

Checks

```
URL Exists?

↓

Yes

↓

Show Page

↓

No

↓

404
```

---

```jsx
return

<div>

My Post : {slug}

</div>
```

Example

URL

```
/BlogPost/python
```

Output

```
My Post : python
```

---

```jsx
return notFound()
```

Example

```
/BlogPost/php
```

Output

```
404 Page
```

---

# Flow

```
User

↓

/BlogPost/java

↓

params

↓

slug="java"

↓

language.includes()

↓

true

↓

Render Page
```

---

Another Example

```
User

↓

/BlogPost/php

↓

slug="php"

↓

language.includes()

↓

false

↓

notFound()

↓

404
```

---

# blog/page.js

```jsx
page.js
```

Represents

```
/blog
```

Output

```
all Pages
```

This is the main Blog page.

---

Flow

```
/blog

↓

blog/page.js

↓

All Pages
```

---

# about/[...kuch_v]/page.js

```jsx
[...kuch_v]
```

Catch-all Route.

Captures every remaining URL segment.

---

Example

```
/about/react

↓

{

kuch_v:["react"]

}
```

---

Example

```
/about/react/hooks

↓

{

kuch_v:[

"react",

"hooks"

]

}
```

---

Example

```
/about/a/b/c

↓

{

kuch_v:[

"a",

"b",

"c"

]

}
```

---

```jsx
console.log(par)
```

Runs on

```
Server

↓

VS Code Terminal
```

Not Browser Console.

---

```jsx
return

<div>

I am about page

</div>
```

Displayed in Browser.

---

# 9. Execution Flow

Example

```
URL

/BlogPost/python

↓

Next.js Router

↓

[slug]

↓

params

↓

slug="python"

↓

language.includes()

↓

Page Rendered
```

---

Example

```
/about/react/hooks

↓

Catch-all Route

↓

params

↓

["react","hooks"]

↓

Page Rendered
```

---

# 10. Real Project Flow

Imagine

Flipkart

```
Product

↓

/product/iphone-16

↓

[id]

↓

Database

↓

Find Product

↓

Return Product
```

Instead of

```
10000 folders

10000 pages
```

Only one

```
[id]/page.js
```

---

# 11. Best Practices

✅ Use dynamic routes for IDs and slugs.

✅ Use meaningful names like `[id]`, `[slug]`.

✅ Validate route parameters.

✅ Show `notFound()` if data doesn't exist.

✅ Use catch-all routes only when needed.

---

# 12. Interview Questions

### What is a Dynamic Route?

A route that accepts dynamic URL values.

---

### Why use `[slug]`?

To create multiple pages using one file.

---

### What does `params` contain?

URL parameters.

---

### What is `notFound()`?

Displays the Next.js 404 page.

---

### What is `[...slug]`?

Catch-all Route.

Captures multiple URL segments.

---

### Where does `console.log()` appear?

Server Component

↓

```
VS Code Terminal
```

---

### Difference between `page.js` and `[slug]/page.js`?

```
page.js

↓

Fixed Route

/blog

------------------

[slug]

↓

Dynamic Route

/blog/react

/blog/python
```

---

# 13. Revision Cheat Sheet

## Dynamic Route

```
[slug]

↓

Any Value

↓

params.slug
```

---

## Catch-all

```
[...slug]

↓

Array

↓

["a","b","c"]
```

---

## notFound()

```
Invalid URL

↓

404 Page
```

---

## Your Project Flow

```
/BlogPost/python

↓

params.slug

↓

python

↓

language.includes()

↓

Render

-------------------

/BlogPost/php

↓

params.slug

↓

php

↓

false

↓

404
```

---

# 🎯 30-Second Revision

```
Dynamic Route

↓

[slug]

↓

params.slug

↓

Validate

↓

Render Page

-------------------

Catch-all

↓

[...slug]

↓

Array

↓

Multiple URL Parts

-------------------

notFound()

↓

404 Page
```

---

# 🏆 Memory Trick

```
page.js

↓

Static Route

/blog

----------------

[slug]

↓

Dynamic Route

/blog/react

----------------

[...slug]

↓

Catch-all Route

/about/a/b/c

↓

["a","b","c"]
```
# 🚀 Next.js Revision Notes (Link, Image & Script)

> Short Notes | Interview Revision | Software Engineer Level

---
<br/>

>Link of Link tag:https://nextjs.org/docs/app/api-reference/components/link

>link of image :https://nextjs.org/docs/app/api-reference/components/image

>link of hostconfig: https://nextjs.org/docs/messages/next-image-unconfigured-host

>Link of script: https://nextjs.org/docs/app/api-reference/components/script
<br/>
---

---

# 📚 Contents

1. Link (`next/link`)
2. Image (`next/image`)
3. Script (`next/script`)
4. Image Setup
5. Image Props
6. Code Analysis
7. Best Practices
8. Interview Questions
9. Revision Cheat Sheet

---

# 1. Link (`next/link`)

## Why?

Used for **navigation** between pages without refreshing the browser.

Instead of

```jsx
<a href="/about">About</a>
```

Use

```jsx
import Link from "next/link";

<Link href="/about">About</Link>
```

### Advantages

✅ Faster navigation

✅ No full page reload

✅ Client-side routing

✅ Better performance

---

## Your Navbar

```jsx
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
```

Flow

```
Click Link

↓

Next.js Router

↓

Load New Page

↓

Navbar stays

↓

Only page content changes
```

---

# 2. Script (`next/script`)

## Why?

Loads external or custom JavaScript safely.

Instead of

```html
<script src=""></script>
```

Use

```jsx
import Script from "next/script";
```

Example

```jsx
<Script>
{`alert("Welcome")`}
</Script>
```

---

## Common Props

### Default

```jsx
<Script src="/script.js"/>
```

Loads after page is interactive.

---

### beforeInteractive

```jsx
strategy="beforeInteractive"
```

Loads before page renders.

Use for

- Analytics
- Security scripts

---

### afterInteractive (Default)

```jsx
strategy="afterInteractive"
```

Most common.

---

### lazyOnload

```jsx
strategy="lazyOnload"
```

Loads after everything finishes.

Best for

- Chat widgets
- Ads

---

# Your Contact Page

```jsx
<Script>

alert("Welcome")

</Script>
```

Result

```
Open Contact Page

↓

Script Executes

↓

Alert appears
```

---

# 3. Image (`next/image`)

## Why use Next Image?

Instead of

```jsx
<img src="photo.jpg"/>
```

Use

```jsx
import Image from "next/image";
```

Advantages

✅ Automatic Optimization

✅ Lazy Loading

✅ Faster

✅ Responsive

✅ Better SEO

✅ Modern image formats

---

# Image Setup

## Local Image

Put image

```
public/

images/

logo.png
```

Use

```jsx
<Image

src="/images/logo.png"

width={200}

height={200}

alt="Logo"

/>
```

---

## Remote Image

Need configuration.

Example

```jsx
<Image

src="https://abc.com/image.jpg"

width={300}

height={200}

alt="Image"

/>
```

---

Configure

```js
// next.config.js

const nextConfig = {

images: {

remotePatterns: [

{

protocol: "https",

hostname: "wowslider.com"

}

]

}

}

export default nextConfig;
```

Without this

❌ Error

```
next/image unconfigured host
```

---

# 4. Image Props

---

## src

Image location.

```jsx
src="/logo.png"
```

or

```jsx
src="https://..."
```

---

## alt ⭐

Required.

```jsx
alt="Profile"
```

Improves

- Accessibility
- SEO

---

## width

Image width.

```jsx
width={300}
```

---

## height

Image height.

```jsx
height={200}
```

---

## fill ⭐

Image fills parent.

```jsx
fill
```

Parent must have

```jsx
position: relative;
```

Example

```jsx
<div className="relative h-80 w-80">

<Image fill />

</div>
```

---

## sizes ⭐

Used with `fill`.

Helps browser download correct image size.

Example

```jsx
sizes="100vw"
```

Responsive

```jsx
sizes="(max-width:768px) 100vw,50vw"
```

---

## quality

Image quality.

```jsx
quality={80}
```

Range

```
1-100
```

Default

```
75
```

---

## priority ⭐

Loads image immediately.

```jsx
priority
```

Use

- Hero Image
- Banner

Do NOT use on every image.

---

## loading

```jsx
loading="lazy"
```

Default

Lazy Loading.

or

```jsx
loading="eager"
```

Loads immediately.

---

## placeholder

```jsx
placeholder="blur"
```

Shows blur before image loads.

Local images work automatically.

---

## blurDataURL

Custom blur.

```jsx
blurDataURL="..."
```

---

## className

Normal Tailwind/CSS.

---

## style

Inline CSS.

---

## onLoad

Runs when image loads.

---

## onError

Runs when image fails.

---

## loader

Custom image loader.

Used for

- Cloudinary
- ImageKit
- CDN

Example

```jsx
loader={myLoader}
```

Not commonly used in beginner projects.

---

# Image Props Summary

| Prop | Purpose |
|-------|----------|
| src | Image Path |
| alt | Accessibility |
| width | Width |
| height | Height |
| fill | Fill Parent |
| sizes | Responsive Sizes |
| quality | Compression Quality |
| priority | Load First |
| loading | Lazy/Eager |
| placeholder | Blur Effect |
| blurDataURL | Custom Blur |
| loader | Custom CDN Loader |

---

# 5. Analysis of Your Code

---

## Home Page

```jsx
import Image from "next/image";
```

Imports optimized Image component.

---

```jsx
<img src="..."/>
```

Normal HTML image.

❌ No optimization.

---

```jsx
<Image

fill

src="..."

alt=""

/>
```

Optimized image.

Because

```jsx
fill
```

Image occupies entire parent.

---

Parent

```jsx
<div

className="relative"

>
```

Important.

Without

```css
position: relative;
```

`fill` will not work.

---

```jsx
object-contain
```

Image fits inside container without cropping.

Other option

```jsx
object-cover
```

Fills container, may crop image.

---

Flow

```
Page Loads

↓

Image Component

↓

Next.js Optimizes

↓

Responsive Image

↓

Browser Displays
```

---

# About Page

```jsx
export const metadata={}
```

Changes

```
<title>

<meta description>
```

Only for

```
/about
```

Overrides root metadata.

---

# Contact Page

```jsx
import Script from "next/script"
```

Imports Script component.

---

```jsx
<Script>

alert()

</Script>
```

Runs

```
Contact Page Opens

↓

Alert appears
```

---

Metadata

Only affects

```
/contact
```

---

# Navbar

```jsx
import Link from "next/link"
```

Navigation component.

---

```jsx
<Link href="/about">
```

Navigates

```
/

↓

About

↓

No Refresh
```

Much faster than

```jsx
<a>
```

---

# Layout

```jsx
<Navbar/>
```

Visible on

```
/

/about

/contact
```

---

```jsx
{children}
```

Displays current page.

Example

```
Home

↓

page.js

About

↓

about/page.js

Contact

↓

contact/page.js
```

---

```jsx
<Footer/>
```

Visible on every page.

---

Metadata

```jsx
export const metadata={}
```

Default metadata.

Child pages can override it.

---

# Execution Flow

```
User opens

/about

↓

layout.js

↓

Navbar

↓

about/page.js

↓

Footer

↓

Browser
```

---

# Best Practices

✅ Use `Link` instead of `<a>`.

✅ Use `Image` instead of `<img>`.

✅ Always provide `alt`.

✅ Use `fill` only with a `relative` parent.

✅ Use `priority` only for hero/banner images.

✅ Configure remote image hosts in `next.config.js`.

✅ Put common UI (Navbar/Footer) inside `layout.js`.

---

# Interview Questions

### Why Link instead of `<a>`?

Client-side routing.

No page refresh.

---

### Why Image instead of `<img>`?

Automatic optimization.

---

### Why Script?

Optimized loading of JavaScript.

---

### Why fill needs relative parent?

Because the image uses absolute positioning and needs a positioned parent to know its boundaries.

---

### Difference between width/height and fill?

`width` & `height`

→ Fixed size.

`fill`

→ Occupies entire parent container.

---

### Where should Navbar be?

Inside

```
layout.js
```

---

### Where should metadata be?

Inside

```
layout.js

or

page.js
```

---

# 🚀 30-Second Revision

```
Link

↓

Navigation

↓

No Refresh

------------------

Image

↓

Optimized

↓

Responsive

↓

Lazy Load

------------------

Script

↓

Load JavaScript

↓

Control Loading Strategy

------------------

fill

↓

Needs Parent

↓

relative

------------------

priority

↓

Hero Image Only

------------------

layout.js

↓

Navbar

↓

Children

↓

Footer

------------------

metadata

↓

Title

↓

Description

↓

SEO
```

---

# 🎯 Final Cheat Sheet

| Component | Use |
|-----------|-----|
| `Link` | Page Navigation |
| `Image` | Optimized Images |
| `Script` | Load JavaScript |
| `layout.js` | Shared Layout |
| `metadata` | SEO |
| `children` | Current Page |
| `fill` | Fill Parent |
| `priority` | Hero Image |
| `sizes` | Responsive Images |
| `quality` | Image Compression |
| `loader` | Custom Image CDN |
# Tailwind CSS Installation & Setup Guide

> **Goal:** Learn only the setups commonly used in modern MERN/React development.

## Which Setup Should I Learn?

| Setup | Learn | Used For |Link|
|---|---|---|---|
| Tailwind v4 + React + Vite | ⭐⭐⭐⭐⭐ | Modern React / MERN | https://tailwindcss.com/docs/installation/using-vite
| Tailwind v4 + Next.js | ⭐⭐⭐⭐⭐ | Production Next.js Apps |  https://tailwindcss.com/docs/installation/framework-guides/nextjs
| Tailwind v3 + React + Vite | ⭐⭐⭐ | Older codebases | https://v3.tailwindcss.com/docs/guides/vite
| Tailwind CLI | ⭐⭐ | Plain HTML projects | https://tailwindcss.com/docs/installation/tailwind-cli
| Play CDN | ⭐ | Quick testing only |  https://tailwindcss.com/docs/installation/play-cdn
| PostCSS | ⭐⭐ | Legacy v3 projects | https://tailwindcss.com/docs/installation/using-postcss

---

# Prerequisites
> ```
> - Node.js
> - npm
> - VS Code
> - Tailwind CSS IntelliSense (Tailwind Labs)
> ```

Check:

```bash
node -v
npm -v
```

---

# 1. Tailwind v4.3 + React + Vite ⭐⭐⭐⭐⭐

## Create Project

```bash
npm create vite@latest
```

Choose:

```text
Project name: First_react_app
Package name: First_react_app
Framework: React
Variant: JavaScript
Use ESLint instead of Oxlint? → Yes ✅
Install with npm and start now? → Yes ✅
```

Install packages:

```bash
cd project-name
npm install
```

Install Tailwind:

```bash
npm install tailwindcss @tailwindcss/vite
```

## Configure Vite

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

## Import Tailwind

`src/index.css`

```css
@import "tailwindcss";
```

Import CSS in:

```js
import "./index.css";
```
> This (import "./index.css";) autometically import in main.jsx and applies globally to your entire React application . it happen when we index.css → @import "tailwindcss"; .

Run:

```bash
npm run dev
```

Folder:

```text
project/
├── src/
│   ├── App.jsx            -->😊 We use tailwindcss ☺️
│   ├── main.jsx           --> import "./index.css";
│   └── index.css          --> @import "tailwindcss";
├── vite.config.js         --> Configure Vite
├── package.json
└── node_modules/
```

---

# 2. Tailwind v4.3 + Next.js ⭐⭐⭐⭐⭐

Create app:

```bash
npx create-next-app@latest
```
-------------------------- or--------------------------------
```bash
npx create-next-app@latest my-project --typescript --eslint --app
cd my-project
```

Install:

```bash
npm install tailwindcss @tailwindcss/postcss
```
-------------------------- or--------------------------------
```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Configure PostCSS:

```js
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```
-------------------------- or--------------------------------
```js
// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

`app/globals.css`

```css
@import "tailwindcss";
```

Run:

```bash
npm run dev
```

---

# 3. Tailwind v3 + React + Vite ⭐⭐⭐

Step 0 :

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

Install:

```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

Generate config:

```bash
npx tailwindcss init -p
```

`tailwind.config.js`

```js
content: [
 "./index.html",
 "./src/**/*.{js,jsx,ts,tsx}",
],
```

`src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run:

```bash
npm run dev
```

---

# Tailwind CLI (Short)

Use for plain HTML/CSS.

```bash
npm install tailwindcss @tailwindcss/cli
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

---

# Play CDN (Short)

Use only for learning/testing.

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

Not recommended for production.

---

# PostCSS (Short)

- Required in most Tailwind v3 projects.
- Used by Next.js v4 integration.
- Usually unnecessary with Vite plugin in v4.

---

# Common Errors

### `npx tailwindcss init` doesn't work

Normal in v4.

### Styles not applying

- Import CSS.
- Restart dev server.
- Check plugin.

### IntelliSense missing

Install **Tailwind CSS IntelliSense**.

---

# Quick Comparison

| Feature | v3 | v4 |
|---|---|---|
| Config | Required | Usually not |
| CSS | @tailwind | @import "tailwindcss" |
| Plugin | PostCSS | Vite / PostCSS |
| Setup | Longer | Simpler |

---

# Quick Revision

- MERN → Tailwind v4 + React + Vite ✅
- Next.js → Tailwind v4 + Next.js ✅
- Old projects → Tailwind v3
- HTML → CLI
- Practice → Play CDN

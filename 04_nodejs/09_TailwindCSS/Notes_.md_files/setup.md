## How to setup Tailwind CSS

> link for setup guide :https://v3.tailwindcss.com/docs/installation

> link for setup guide for (React+vite)v3.4 :https://v3.tailwindcss.com/docs/guides/vite

> link for setup guide for (React+vite) v4.3 :https://tailwindcss.com/docs/installation/using-vite

Step 0: install package :
```
 Tailwind CSS IntelliSense(by :Tailwind Labs)
 ```

Step 1: Run the following commands

``` 
it is download v-4:

npm install -D tailwindcss
npx tailwindcss init (not work in v4)

npm uninstall tailwindcss (not required)
```
```
download v3 :
=> for vite
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
            or
=> for normal
npm install -D tailwindcss@3
npx tailwindcss init

```

Step 2: create `src/input.css` to include: (for vite(React) `"./src/index.css"` include)

```
inside their :

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 3: Update `"tailwind.conf.js"` file to include this line:
```
content: ["*.html"],
        or
content: ["./src/**/*.{html,js}"],
        or
> for vite:
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```


Step 4: Include the src/output.css file to your html

Step 5: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

step 6: (Extra)

```
add in :
"scripts": {
        "build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
}

to run :
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

through :
npm run build

```




# Tailwind CSS Installation & Setup (v3 & v4)

---

# Table of Contents

1. Prerequisites
2. Tailwind CSS v3 Installation
3. Tailwind CSS v4 Installation
4. Folder Structure
5. Running the Project
6. Common Errors

---

# Prerequisites

Before installing Tailwind CSS, make sure you have:

* Node.js installed
* npm installed
* VS Code installed

### Check Versions

```bash
node -v
npm -v
```

---

# Install VS Code Extension (Recommended)

Install:

```text
Tailwind CSS IntelliSense
```

Publisher:

```text
Tailwind Labs
```

Benefits:

* Auto-completion
* Class suggestions
* Hover documentation
* Error detection

---

# Tailwind CSS v3 Installation

## Step 1: Create Project

```bash
mkdir my-project
cd my-project
```

---

## Step 2: Initialize npm

```bash
npm init -y
```

Creates:

```text
package.json
```

---

## Step 3: Install Required Packages

```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

### Packages Installed

| Package       | Purpose                             |
| ------------- | ----------------------------------- |
| tailwindcss@3 | Tailwind CSS Framework              |
| postcss       | Processes CSS                       |
| autoprefixer  | Adds browser prefixes automatically |

---

## Step 4: Generate Configuration Files

```bash
npx tailwindcss init -p
```

Creates:

```text
tailwind.config.js
postcss.config.js
```

If you only want the Tailwind configuration file:

```bash
npx tailwindcss init
```

Creates:

```text
tailwind.config.js
```

---

## Step 5: Configure `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## Step 6: Create CSS File

Create:

```text
src/input.css
```

Add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Step 7: Create Output File

No need to create manually.

Tailwind will generate:

```text
src/output.css
```

---

## Step 8: Link CSS in HTML

```html
<link rel="stylesheet" href="./src/output.css">
```

---

## Step 9: Build Tailwind CSS

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

### Command Breakdown

```text
npx
```

Runs the local Tailwind CLI.

```text
tailwindcss
```

Tailwind compiler.

```text
-i
```

Input file.

```text
./src/input.css
```

Source CSS.

```text
-o
```

Output file.

```text
./src/output.css
```

Generated CSS.

```text
--watch
```

Automatically rebuilds whenever you save changes.

---

## Step 10: Optional npm Script

Add to `package.json`

```json
"scripts": {
  "build": "tailwindcss -i ./src/input.css -o ./src/output.css --watch"
}
```

Run:

```bash
npm run build
```

---

# Folder Structure (v3)

```text
my-project/
│
├── node_modules/
├── src/
│   ├── input.css
│   └── output.css
│
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
└── postcss.config.js
```

---

# Tailwind CSS v4 Installation

> Tailwind CSS v4 has a new installation process. It **does not use `tailwind.config.js` by default**, and `@tailwind base`, `components`, and `utilities` are replaced by a single import.

---

## Step 1: Create Project

```bash
mkdir my-project
cd my-project
```

---

## Step 2: Initialize npm

```bash
npm init -y
```

---

## Step 3: Install Packages

```bash
npm install tailwindcss @tailwindcss/cli
```

### Packages Installed

| Package          | Purpose                                 |
| ---------------- | --------------------------------------- |
| tailwindcss      | Tailwind CSS Framework                  |
| @tailwindcss/cli | Official CLI for compiling Tailwind CSS |

> **Note:** `postcss` and `autoprefixer` are **not required** for the basic CLI setup in v4.

---

## Step 4: Create CSS File

Create:

```text
src/input.css
```

Add:

```css
@import "tailwindcss";
```

---

## Step 5: Compile CSS

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

---

## Step 6: Link CSS

```html
<link rel="stylesheet" href="./src/output.css">
```

---

## Step 7: Optional npm Script

```json
"scripts": {
  "build": "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch"
}
```

Run:

```bash
npm run build
```

---

# Folder Structure (v4)

```text
my-project/
│
├── node_modules/
├── src/
│   ├── input.css
│   └── output.css
│
├── index.html
├── package.json
└── package-lock.json
```

> `tailwind.config.js` is **optional** in v4 and only needed when you want advanced customization.

---

# Common Errors

## Error 1

```text
'tailwindcss' is not recognized
```

### Solution

Use:

```bash
npx tailwindcss
```

or

```bash
npx @tailwindcss/cli
```

---

## Error 2

```text
Cannot find module 'tailwindcss'
```

### Solution

Install Tailwind:

```bash
npm install tailwindcss
```

---

## Error 3

```text
npx tailwindcss init
```

doesn't work in v4.

### Reason

The `init` command was removed.

### Solution

Create a configuration file only if needed, or use the default zero-config setup.

---

## Error 4

Styles are not applied.

### Check:

* Is `output.css` linked correctly?
* Is the build command running?
* Did you save the HTML file?
* Is the CSS path correct?

---

# Quick Comparison

| Feature      | Tailwind v3                           | Tailwind v4                    |
| ------------ | ------------------------------------- | ------------------------------ |
| Install      | `tailwindcss@3 postcss autoprefixer`  | `tailwindcss @tailwindcss/cli` |
| Config File  | Required                              | Optional                       |
| CSS Entry    | `@tailwind base/components/utilities` | `@import "tailwindcss";`       |
| Init Command | `npx tailwindcss init`                | Not available                  |
| PostCSS      | Usually required                      | Not required for basic CLI     |
| CLI          | `tailwindcss`                         | `@tailwindcss/cli`             |

---

# Installation Summary

## Tailwind CSS v3

```bash
npm init -y

npm install -D tailwindcss@3 postcss autoprefixer

npx tailwindcss init -p

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

---

## Tailwind CSS v4

```bash
npm init -y

npm install tailwindcss @tailwindcss/cli

npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

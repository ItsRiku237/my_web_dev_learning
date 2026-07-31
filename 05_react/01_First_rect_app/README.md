# React Project Initialization (Vite) - Quick Notes

> **Goal:** Understand how to create and start a React project using **Vite**.

---


### Folder structure : //https://create-react-app.dev/docs/getting-started/
```
npx create-react-app my-app
cd my-app
npm start
```

### Latest vite Folder structure : //https://vite.dev/guide/
```
npm create vite@latest
cd my-project
npm install
npm run dev
```

```
Project name: First_react_app
Package name: First_react_app
Framework: React
Variant: JavaScript
Use ESLint instead of Oxlint? → Yes ✅
Install with npm and start now? → Yes ✅
```

◇ Install with npm and start now?
❯ Yes
  No
Choose: Yes ✅

- If you choose Yes, Vite will automatically do these steps for you:
```
npm install
npm run dev
```
-> So you don't have to type them manually.


- If you choose "No"

-> That's also fine. You'll just need to run these commands yourself:
```
cd First_react_app
npm install
npm run dev
```
### > More Method to start direct :

- Method 1 : (File in that folder)
```
npm create vite@latest
Project name: .
```

- Method 2 : (After create navigate to that folder)
```
npm create vite@latest
----same traditional  -----

code -r File_name

npm run dev
```

---
---
---
---
---
---
---
---
---
---
---
---

# Create a New React Project

Run the following command:

```bash
npm create vite@latest
```

After running it, Vite asks a few questions.

---

## Step 1: Project Name

```text
Project name:
```

Example:

```text
First_react_app
```

This creates a folder with the same name.

```text
First_react_app/
```

---

## Step 2: Package Name

```text
Package name:
```

Usually keep it the same.

```
First_react_app
```

This name is stored inside `package.json`.

```json
{
  "name": "First_react_app"
}
```

---

## Step 3: Framework

Choose

```text
React
```

Because we are creating a React application.

---

## Step 4: Variant

Choose

```text
JavaScript
```

If you're not using TypeScript.

---

## Step 5: ESLint

```text
Use ESLint instead of Oxlint?
```

Choose

```text
Yes
```

Why?

* Finds coding mistakes
* Suggests better coding style
* Used in many companies

---

## Step 6: Install Dependencies

```text
Install with npm and start now?
```

Choose

```text
Yes
```

If you choose **Yes**, Vite automatically runs:

```bash
npm install
npm run dev
```

You don't have to type them manually.

---

If you choose **No**

Run these commands yourself:

```bash
cd First_react_app

npm install

npm run dev
```

---

# What Each Command Does

## Create Project

```bash
npm create vite@latest
```

Creates a React project using the latest Vite template.

---

## Move Inside Project

```bash
cd First_react_app
```

Changes the terminal to your project folder.

---

## Install Packages

```bash
npm install
```

Reads `package.json` and installs all required packages into:

```text
node_modules/
```

---

## Start Development Server

```bash
npm run dev
```

Starts the Vite development server.

Example output:

```text
Local:

http://localhost:5173
```

Open this URL in your browser to view your React app.

---

# Basic Project Structure

```text
First_react_app/
│
├── node_modules/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
│
├── package.json
├── package-lock.json
├── vite.config.js
└── index.html
```

---

# File Purpose (Only Important Ones)

| File/Folder     | Purpose                              |
| --------------- | ------------------------------------ |
| `src/`          | Your React code                      |
| `App.jsx`       | Main component                       |
| `main.jsx`      | Entry point of the React app         |
| `public/`       | Static files                         |
| `package.json`  | Project information and dependencies |
| `node_modules/` | Installed packages                   |
| `index.html`    | Main HTML page loaded by Vite        |

---

# Project Initialization Flow

```text
npm create vite@latest
          │
          ▼
Project Folder Created
          │
          ▼
npm install
          │
          ▼
node_modules Installed
          │
          ▼
npm run dev
          │
          ▼
Vite Development Server Starts
          │
          ▼
http://localhost:5173
          │
          ▼
React Application Opens
```

---

# Quick Revision

```text
1. npm create vite@latest
      ↓
2. Choose React
      ↓
3. Choose JavaScript
      ↓
4. ESLint → Yes
      ↓
5. Install with npm → Yes
      ↓
6. Vite runs:
      npm install
      npm run dev
      ↓
7. Open:
      http://localhost:5173
```

---

# Placement Notes

✔ Know how to create a React project with Vite.

✔ Know the purpose of:

* `src`
* `App.jsx`
* `main.jsx`
* `package.json`
* `node_modules`

✔ Know the difference between:

```bash
npm install
```

and

```bash
npm run dev
```

These are very common interview questions for React/MERN freshers.

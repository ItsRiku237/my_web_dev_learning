# Node.js File Organizer Project - Complete Analysis & Concepts

---

# Project Goal

Create a program that automatically organizes files based on their extensions.

Example:

Before:

```text
Project/
│
├── name.jpg
├── cat.jpg
├── name.png
├── this.pdf
├── harry.pdf
├── harry.zip
├── Rohan.zip
└── main.js
```

After:

```text
Project/
│
├── jpg/
│   ├── name.jpg
│   └── cat.jpg
│
├── png/
│   └── name.png
│
├── pdf/
│   ├── this.pdf
│   └── harry.pdf
│
├── zip/
│   ├── harry.zip
│   └── Rohan.zip
│
└── main.js
```

---

# Step 1: Import Required Modules

```javascript
const fs = require("fs");
const path = require("path");
```

---

## fs Module

fs = File System

Used for:

```text
Read Files
Write Files
Delete Files
Rename Files
Create Folders
```

Examples:

```javascript
fs.readFileSync()
fs.writeFileSync()
fs.renameSync()
fs.mkdirSync()
```

---

## path Module

Used to work with file paths safely.

Examples:

```javascript
path.join()
path.extname()
path.basename()
path.dirname()
```

---

# Step 2: Get Current Directory

```javascript
const dirPath = __dirname;
```

---

## What is __dirname?

It represents the folder where the current file exists.

Example:

```text
D:\Projects\FileOrganizer
```

If main.js is inside:

```text
D:\Projects\FileOrganizer
```

Then:

```javascript
console.log(__dirname);
```

Output:

```text
D:\Projects\FileOrganizer
```

---

# Step 3: Read All Files

```javascript
const files = fs.readdirSync(dirPath);
```

---

## What is readdirSync()?

Syntax:

```javascript
fs.readdirSync(path);
```

Reads all files and folders inside a directory.

---

Example:

Folder:

```text
Project/
│
├── name.jpg
├── cat.jpg
├── harry.zip
└── main.js
```

Output:

```javascript
[
  "name.jpg",
  "cat.jpg",
  "harry.zip",
  "main.js"
]
```

---

# Step 4: Loop Through Files

```javascript
for(const file of files){
    console.log(file);
}
```

---

Output:

```text
name.jpg
cat.jpg
harry.zip
main.js
```

---

Why?

Because we need to process each file one by one.

---

# Step 5: Get Extension

Your Code:

```javascript
let ext = path.extname(file);
```

---

Example:

```javascript
path.extname("name.jpg");
```

Output:

```text
.jpg
```

---

Remove dot:

```javascript
ext = ext.slice(1);
```

Output:

```text
jpg
```

---

Examples:

```javascript
path.extname("cat.jpg")
```

Output:

```text
.jpg
```

---

```javascript
path.extname("harry.pdf")
```

Output:

```text
.pdf
```

---

```javascript
path.extname("movie.zip")
```

Output:

```text
.zip
```

---

# Why slice(1)?

Without:

```text
.jpg
```

With:

```text
jpg
```

Folder names become:

```text
jpg/
pdf/
zip/
```

instead of:

```text
.jpg/
.pdf/
.zip/
```

---

# Step 6: Ignore JS & JSON Files

Your Code:

```javascript
if(ext != "js" && ext != "json" && ext != "")
```

---

Why?

You don't want:

```text
js/main.js
```

or

```text
json/package.json
```

because these are project files.

---

Also:

```javascript
ext != ""
```

ignores folders.

---

Example:

Folder:

```text
jpg/
```

Extension:

```javascript
path.extname("jpg")
```

Output:

```text
""
```

No extension.

Ignored.

---

# Step 7: Check Folder Exists

```javascript
if(!fs.existsSync(ext))
```

---

## What is existsSync()?

Syntax:

```javascript
fs.existsSync(path);
```

Checks:

```text
Does this file/folder already exist?
```

---

Example:

Before:

```text
Project/
│
├── name.jpg
└── main.js
```

```javascript
fs.existsSync("jpg")
```

Output:

```text
false
```

---

After creating folder:

```javascript
fs.mkdirSync("jpg");
```

Now:

```javascript
fs.existsSync("jpg")
```

Output:

```text
true
```

---

# Step 8: Create Folder

```javascript
fs.mkdirSync(ext);
```

---

## What is mkdirSync()?

Syntax:

```javascript
fs.mkdirSync(folderName);
```

Creates a directory.

---

Example:

```javascript
fs.mkdirSync("jpg");
```

Before:

```text
Project/
│
├── name.jpg
└── main.js
```

After:

```text
Project/
│
├── jpg/
├── name.jpg
└── main.js
```

---

# Why Both Used Together?

Wrong:

```javascript
fs.mkdirSync("jpg");
```

If folder already exists:

```text
Error:
EEXIST: file already exists
```

---

Correct:

```javascript
if(!fs.existsSync("jpg")){
    fs.mkdirSync("jpg");
}
```

Meaning:

```text
IF folder doesn't exist
THEN create it
```

---

# Step 9: Old File Location

Your Code:

```javascript
let old_path = path.join(dirPath, file);
```

---

Suppose:

```javascript
dirPath = "D:/Project"
file = "name.jpg"
```

Result:

```text
D:/Project/name.jpg
```

Current location of file.

---

## Why path.join()?

Instead of:

```javascript
"D:/Project/" + file
```

Use:

```javascript
path.join(dirPath,file)
```

because it works correctly on:

```text
Windows
Linux
Mac
```

---

# Step 10: New File Location

Your Code:

```javascript
let new_path = path.join(
    dirPath,
    ext,
    file
);
```

---

Suppose:

```javascript
dirPath = "D:/Project"
ext = "jpg"
file = "name.jpg"
```

Result:

```text
D:/Project/jpg/name.jpg
```

Target location.

---

# Visualization

Old:

```text
D:/Project/name.jpg
```

New:

```text
D:/Project/jpg/name.jpg
```

---

# Step 11: Move File

Your Code:

```javascript
fs.renameSync(old_path,new_path);
```

---

## What is renameSync()?

Syntax:

```javascript
fs.renameSync(oldPath,newPath);
```

Used to:

```text
Rename File
Move File
```

---

Example:

```javascript
fs.renameSync(
    "name.jpg",
    "jpg/name.jpg"
);
```

---

Before:

```text
Project/
│
├── name.jpg
└── jpg/
```

After:

```text
Project/
│
├── jpg/
│   └── name.jpg
```

---

# Complete Flow of Program

```text
Start Program
      ↓
Import fs and path
      ↓
Get Current Folder (__dirname)
      ↓
Read All Files
      ↓
Loop Through Files
      ↓
Get Extension
      ↓
Ignore js/json/folders
      ↓
Check Folder Exists?
      ↓
NO
      ↓
Create Folder
      ↓
Generate Old Path
      ↓
Generate New Path
      ↓
Move File
      ↓
Next File
      ↓
Finished
```

---

# Dry Run Example

File:

```text
cat.jpg
```

---

Step 1

```javascript
file = "cat.jpg"
```

---

Step 2

```javascript
ext = path.extname(file)
```

Output:

```text
.jpg
```

---

Step 3

```javascript
ext.slice(1)
```

Output:

```text
jpg
```

---

Step 4

Check:

```javascript
fs.existsSync("jpg")
```

Output:

```text
false
```

---

Step 5

Create:

```javascript
fs.mkdirSync("jpg")
```

---

Step 6

Old Path:

```text
Project/cat.jpg
```

---

Step 7

New Path:

```text
Project/jpg/cat.jpg
```

---

Step 8

Move:

```javascript
fs.renameSync(oldPath,newPath)
```

---

Final:

```text
jpg/cat.jpg
```

---

# CommonJS Version vs ES Module Version

Your code uses:

```javascript
const fs = require("fs");
```

This is:

```text
CommonJS
```

---

Alternative:

```javascript
import fs from "fs";
```

This is:

```text
ES Module
```

Requires:

```json
{
  "type":"module"
}
```

inside package.json.

---

# Interview Revision

```text
fs
→ File System Module

path
→ Path Utility Module

__dirname
→ Current Directory

readdirSync()
→ Read Folder Contents

extname()
→ Get File Extension

slice(1)
→ Remove Dot

existsSync()
→ Check File/Folder Exists

mkdirSync()
→ Create Folder

path.join()
→ Create Safe File Paths

renameSync()
→ Move/Rename File

old_path
→ Current Location

new_path
→ Destination Location

Flow:

Read Files
↓
Get Extension
↓
Create Folder
↓
Move File
↓
Organize Files
```

---

# Suggested GitHub Folder

```text
11-NodeJS-Projects/
│
├── file-organizer-project.md
├── fs-module.md
├── path-module.md
├── dirname.md
├── readdirsync.md
├── extname.md
├── existssync.md
├── mkdirsync.md
├── renamesync.md
└── project-flow-analysis.md
```

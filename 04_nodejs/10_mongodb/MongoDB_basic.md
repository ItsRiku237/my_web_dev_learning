# MongoDB Shell (mongosh) Cheat Sheet for MERN Developers

> **Goal:** Learn the most commonly used **MongoDB Shell (mongosh)** commands. These commands are mainly used while learning MongoDB, testing queries, and debugging with MongoDB Compass or mongosh.

---

# Table of Contents

1. Database Commands
2. Collection Commands
3. CRUD Commands
4. Query Modifiers
5. Utility Commands
6. `db.Collection` vs `db.getCollection()`
7. Complete Workflow
8. Quick Revision

---

# 1. Database Commands

## Show All Databases

```javascript
show dbs
```

### Purpose

Displays all available databases.

Example Output

```text
admin
config
local
Testing
College
```

---

## Switch / Create Database

```javascript
use Testing
```

### Purpose

Switches to the **Testing** database.

If it doesn't exist, MongoDB will create it **after the first document is inserted**.

Example

```javascript
use College
```

Current database becomes

```text
College
```

---

## Show Current Database

```javascript
db
```

Output

```text
College
```

---

## Delete Current Database

```javascript
db.dropDatabase()
```

Deletes the currently selected database permanently.

---

# 2. Collection Commands

## Show All Collections

```javascript
show collections
```

Example Output

```text
users
courses
products
```

---

## Create Collection

```javascript
db.createCollection("users")
```

Creates a new collection named **users**.

---

## Delete Collection

```javascript
db.users.drop()
```

Deletes the **users** collection.

---

# 3. Access Collection

There are two ways to access a collection.

---

## Method 1 (Most Common)

```javascript
db.users
```

Used in almost every tutorial.

---

## Method 2

```javascript
db.getCollection("users")
```

Exactly the same collection.

Example

```javascript
db.getCollection("users").find()
```

Same as

```javascript
db.users.find()
```

---

## Why use `getCollection()`?

Suppose your collection name contains spaces.

Example

```text
Student Data
```

This **will not work**

```javascript
db.Student Data
```

But this works perfectly

```javascript
db.getCollection("Student Data")
```

That's why **MongoDB Compass** often generates queries using `getCollection()`.

---

# 4. CRUD Commands

---

## Insert One

```javascript
db.users.insertOne({
    name: "Riku",
    age: 21
})
```

---

## Insert Many

```javascript
db.users.insertMany([
    {
        name: "Riku"
    },
    {
        name: "Harry"
    }
])
```

---

## Find All

```javascript
db.users.find()
```

Returns every document.

---

## Pretty Output

```javascript
db.users.find().pretty()
```

Displays documents in a more readable format.

---

## Find One

```javascript
db.users.findOne({
    name: "Riku"
})
```

Returns the first matching document.

---

## Update One

```javascript
db.users.updateOne(
    {
        name: "Riku"
    },
    {
        $set: {
            age: 22
        }
    }
)
```

Updates only one document.

---

## Update Many

```javascript
db.users.updateMany(
    {
        city: "Delhi"
    },
    {
        $set: {
            verified: true
        }
    }
)
```

---

## Replace One

```javascript
db.users.replaceOne(
    {
        name: "Riku"
    },
    {
        name: "Riku",
        age: 25
    }
)
```

Replaces the **entire document**.

---

## Delete One

```javascript
db.users.deleteOne({
    name: "Harry"
})
```

---

## Delete Many

```javascript
db.users.deleteMany({
    verified: false
})
```

---

# 5. Query Modifiers

## Sort

Ascending

```javascript
db.users.find().sort({
    age: 1
})
```

Descending

```javascript
db.users.find().sort({
    age: -1
})
```

---

## Limit

```javascript
db.users.find().limit(5)
```

Returns only 5 documents.

---

## Skip

```javascript
db.users.find().skip(10)
```

Skips the first 10 documents.

---

## Count Documents

```javascript
db.users.countDocuments()
```

Counts total documents.

---

# 6. Useful Utility Commands

## Remove Every Document

```javascript
db.users.deleteMany({})
```

Collection remains.

Documents are deleted.

---

## Remove Collection

```javascript
db.users.drop()
```

Collection is deleted.

---

## Remove Database

```javascript
db.dropDatabase()
```

Entire database is deleted.

---

# 7. db.collection vs db.getCollection()

## Dot Notation

```javascript
db.users.find()
```

### Advantages

* Short
* Easy to type
* Used in almost every MERN project
* Used in tutorials

---

## Function Notation

```javascript
db.getCollection("users").find()
```

### Advantages

* Supports spaces
* Supports special characters
* Used by MongoDB Compass

---

## Comparison

| Method               | Best For                           |
| -------------------- | ---------------------------------- |
| `db.users`           | Daily development ✅                |
| `db.getCollection()` | Compass & special collection names |

---

# 8. Complete MongoDB Shell Workflow

## Step 1

Show databases

```javascript
show dbs
```

↓

## Step 2

Switch database

```javascript
use College
```

↓

## Step 3

Check current database

```javascript
db
```

↓

## Step 4

Create collection

```javascript
db.createCollection("users")
```

↓

## Step 5

Insert document

```javascript
db.users.insertOne({
    name: "Riku"
})
```

↓

## Step 6

Read document

```javascript
db.users.find()
```

↓

## Step 7

Update document

```javascript
db.users.updateOne(
    { name: "Riku" },
    { $set: { age: 21 } }
)
```

↓

## Step 8

Delete document

```javascript
db.users.deleteOne({
    name: "Riku"
})
```

↓

## Step 9

Delete collection (optional)

```javascript
db.users.drop()
```

↓

## Step 10

Delete database (optional)

```javascript
db.dropDatabase()
```

---

# MERN vs Mongo Shell

## In Mongo Shell

```javascript
use College

db.users.find()

db.users.insertOne()

db.users.updateOne()

db.users.deleteOne()
```

---

## In Mongoose (MERN)

```javascript
await User.find();

await User.findOne();

await User.create(data);

await User.findById(id);

await User.findByIdAndUpdate(id, data);

await User.findByIdAndDelete(id);
```

> **Note:** As a MERN developer, you'll spend most of your time using **Mongoose methods** in your Node.js application. The MongoDB shell (`mongosh`) commands are mainly used for learning, debugging, testing data, and quick database inspection.

---

# Quick Revision (Must Remember)

| Command                 | Purpose                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| `show dbs`              | Show all databases                                                                        |
| `use College`           | Switch/Create database                                                                    |
| `db`                    | Current database                                                                          |
| `show collections`      | Show collections                                                                          |
| `db.createCollection()` | Create collection                                                                         |
| `db.users.find()`       | Read documents                                                                            |
| `db.users.findOne()`    | Read one document                                                                         |
| `db.users.insertOne()`  | Insert one document                                                                       |
| `db.users.insertMany()` | Insert many documents                                                                     |
| `db.users.updateOne()`  | Update one document                                                                       |
| `db.users.updateMany()` | Update many documents                                                                     |
| `db.users.replaceOne()` | Replace whole document                                                                    |
| `db.users.deleteOne()`  | Delete one document                                                                       |
| `db.users.deleteMany()` | Delete many documents                                                                     |
| `db.users.drop()`       | Delete collection                                                                         |
| `db.dropDatabase()`     | Delete database                                                                           |
| `.sort()`               | Sort results                                                                              |
| `.limit()`              | Limit results                                                                             |
| `.skip()`               | Skip documents                                                                            |
| `.countDocuments()`     | Count documents                                                                           |
| `db.getCollection()`    | Access collection (especially useful for names with spaces or when using MongoDB Compass) |

---

# Top Commands to Memorize (90% Usage)

```text
show dbs
use DatabaseName
db
show collections

db.users.find()
db.users.findOne()

db.users.insertOne()
db.users.insertMany()

db.users.updateOne()
db.users.updateMany()

db.users.deleteOne()
db.users.deleteMany()

db.users.drop()
db.dropDatabase()

.sort()
.limit()
.skip()
.countDocuments()

db.getCollection("users")
```

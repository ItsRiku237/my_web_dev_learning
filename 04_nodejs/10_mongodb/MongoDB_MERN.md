# MongoDB Cheat Sheet for MERN Developers (Most Used Operators & Syntax)

> **Goal:** Learn the MongoDB operators and syntax that you'll use **90% of the time** in MERN Stack projects (Express + Mongoose + MongoDB).

---

# Table of Contents

1. CRUD Operations
2. Query Operators
3. Comparison Operators
4. Logical Operators
5. Element Operators
6. Array Operators
7. Update Operators
8. Projection
9. Sorting
10. Limit & Skip
11. Count
12. Regular Expressions
13. Aggregation (Most Used)
14. Mongoose Methods
15. Most Used Queries in MERN

---

# 1. Insert (Create)

## Insert One

```js
db.users.insertOne({
  name: "Riku",
  age: 20
})
```

---

## Insert Many

```js
db.users.insertMany([
  {name:"A"},
  {name:"B"},
  {name:"C"}
])
```

---

# 2. Find (Read)

## Find All

```js
db.users.find()
```

---

## Find One

```js
db.users.findOne({name:"Riku"})
```

---

## Find by ID

```js
db.users.find({_id:ObjectId("id")})
```

---

# 3. Update

## Update One

```js
db.users.updateOne(
    {name:"Riku"},
    {$set:{age:21}}
)
```

---

## Update Many

```js
db.users.updateMany(
    {country:"India"},
    {$set:{verified:true}}
)
```

---

# 4. Delete

## Delete One

```js
db.users.deleteOne({name:"Riku"})
```

---

## Delete Many

```js
db.users.deleteMany({verified:false})
```

---

# Comparison Operators

| Operator | Meaning               |
| -------- | --------------------- |
| `$eq`    | Equal                 |
| `$ne`    | Not Equal             |
| `$gt`    | Greater Than          |
| `$gte`   | Greater Than Equal    |
| `$lt`    | Less Than             |
| `$lte`   | Less Than Equal       |
| `$in`    | Value exists in array |
| `$nin`   | Value not in array    |

---

## $eq

```js
{age:{$eq:20}}
```

age == 20

---

## $ne

```js
{age:{$ne:20}}
```

age != 20

---

## $gt

```js
{age:{$gt:18}}
```

age > 18

---

## $gte

```js
{age:{$gte:18}}
```

age >= 18

---

## $lt

```js
{age:{$lt:18}}
```

age < 18

---

## $lte

```js
{age:{$lte:18}}
```

age <= 18

---

## $in

```js
{name:{$in:["Riku","Harry"]}}
```

Matches either value.

---

## $nin

```js
{name:{$nin:["Riku","Harry"]}}
```

Matches everything except those values.

---

# Logical Operators

| Operator | Meaning           |
| -------- | ----------------- |
| `$and`   | AND               |
| `$or`    | OR                |
| `$not`   | NOT               |
| `$nor`   | Neither condition |

---

## $and

```js
{
 $and:[
   {age:20},
   {city:"Delhi"}
 ]
}
```

---

## $or

```js
{
 $or:[
   {age:20},
   {city:"Delhi"}
 ]
}
```

---

## $not

```js
{
 age:{
    $not:{
        $gt:18
    }
 }
}
```

---

# Element Operators

| Operator  | Meaning      |
| --------- | ------------ |
| `$exists` | Field exists |
| `$type`   | Data type    |

---

## Exists

```js
{
 email:{
    $exists:true
 }
}
```

---

# Array Operators

| Operator     | Meaning             |
| ------------ | ------------------- |
| `$all`       | Contains all values |
| `$size`      | Array length        |
| `$elemMatch` | Match element       |

---

## $all

```js
{
skills:{
    $all:["HTML","CSS"]
}
}
```

---

## $size

```js
{
skills:{
    $size:3
}
}
```

---

# Update Operators

| Operator       | Purpose           |
| -------------- | ----------------- |
| `$set`         | Set value         |
| `$unset`       | Remove field      |
| `$inc`         | Increase value    |
| `$mul`         | Multiply value    |
| `$rename`      | Rename field      |
| `$min`         | Minimum value     |
| `$max`         | Maximum value     |
| `$currentDate` | Current Date      |
| `$push`        | Add to array      |
| `$pull`        | Remove from array |
| `$pop`         | Remove first/last |
| `$addToSet`    | Add if not exists |

---

# $set

```js
{
$set:{
 age:25
}
}
```

---

# $unset

```js
{
$unset:{
 age:""
}
}
```

Removes field.

---

# $inc

```js
{
$inc:{
 age:1
}
}
```

age++

---

# $mul

```js
{
$mul:{
 salary:2
}
}
```

salary *=2

---

# $rename

```js
{
$rename:{
 fullname:"name"
}
}
```

---

# $push

```js
{
$push:{
 skills:"React"
}
}
```

---

# $pull

```js
{
$pull:{
 skills:"PHP"
}
}
```

---

# $pop

Last

```js
{
$pop:{
 skills:1
}
}
```

First

```js
{
$pop:{
 skills:-1
}
}
```

---

# $addToSet

```js
{
$addToSet:{
 skills:"Node"
}
}
```

Only inserts if not already present.

---

# Projection

Return only selected fields.

```js
db.users.find(
{},
{
name:1,
age:1
}
)
```

Hide

```js
db.users.find(
{},
{
password:0
}
)
```

---

# Sorting

Ascending

```js
.sort({age:1})
```

Descending

```js
.sort({age:-1})
```

---

# Limit

```js
.limit(5)
```

Only 5 documents.

---

# Skip

```js
.skip(10)
```

Skip first 10.

---

# Count

```js
db.users.countDocuments()
```

---

# Regular Expression

Starts with R

```js
{
name:/^R/
}
```

Contains "iku"

```js
{
name:/iku/
}
```

Ends with u

```js
{
name:/u$/
}
```

Ignore case

```js
{
name:/riku/i
}
```

---

# Aggregation (Most Used)

## Match

```js
{
$match:{
 age:20
}
}
```

Filter.

---

## Group

```js
{
$group:{
 _id:"$city",
 total:{
   $sum:1
 }
}
}
```

---

## Sort

```js
{
$sort:{
 age:-1
}
}
```

---

## Limit

```js
{
$limit:5
}
```

---

## Project

```js
{
$project:{
 name:1,
 age:1
}
}
```

---

# Aggregate Example

```js
db.users.aggregate([
 {$match:{age:{$gt:18}}},
 {$sort:{age:-1}},
 {$limit:5}
])
```

---

# Mongoose Methods (Most Used)

## Create

```js
User.create(data)
```

---

## Save

```js
const user=new User(data)
await user.save()
```

---

## Find

```js
User.find()
```

---

## Find One

```js
User.findOne()
```

---

## Find By ID

```js
User.findById(id)
```

---

## Update By ID

```js
User.findByIdAndUpdate(id,data)
```

---

## Delete By ID

```js
User.findByIdAndDelete(id)
```

---

## Exists

```js
User.exists({email})
```

---

## Count

```js
User.countDocuments()
```

---

## Populate

```js
User.find().populate("posts")
```

---

## Lean

```js
User.find().lean()
```

Returns plain JavaScript objects (faster for read-only operations).

---

# Most Used Query Chains

## Sort + Limit

```js
User.find()
.sort({createdAt:-1})
.limit(10)
```

---

## Pagination

```js
User.find()
.skip((page-1)*limit)
.limit(limit)
```

---

## Search

```js
User.find({
name:{
 $regex:search,
 $options:"i"
}
})
```

---

## Login

```js
User.findOne({
email:req.body.email
})
```

---

## Find by Role

```js
User.find({
role:"admin"
})
```

---

## Latest Users

```js
User.find()
.sort({
createdAt:-1
})
```

---

## Count Users

```js
User.countDocuments()
```

---

# Top 30 MongoDB Operators to Memorize

```text
find()
findOne()
insertOne()
insertMany()

updateOne()
updateMany()

deleteOne()
deleteMany()

$set
$unset
$inc
$push
$pull
$addToSet

$eq
$ne
$gt
$gte
$lt
$lte

$in
$nin

$and
$or

$exists

$regex

sort()

limit()

skip()

countDocuments()

populate()

lean()
```

---

# MERN Developer Revision

```text
Create
→ insertOne()
→ create()

Read
→ find()
→ findOne()
→ findById()

Update
→ updateOne()
→ findByIdAndUpdate()
→ $set
→ $inc

Delete
→ deleteOne()
→ findByIdAndDelete()

Search
→ $regex

Filter
→ $gt
→ $lt
→ $in
→ $or

Pagination
→ skip()
→ limit()

Sorting
→ sort()

Relations
→ populate()

Performance
→ lean()
```

> **Tip:** If you master the operators and methods in this sheet, you'll comfortably handle **about 90–95% of MongoDB operations** used in typical MERN applications such as authentication systems, blogs, task managers, e-commerce sites, chat apps, and admin dashboards.

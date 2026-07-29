//CRUD operation
use("CRUD_DB")

// console.log(db)


//CREATE
db.createCollection("Courses")

// db.Courses.insertOne({
//     "name" : "RIku devOps",
//     "price" : 2000,
//     "assignment" : 12,
//     "Project" : 20
// })

// db.Courses.insertMany([
//       {
//     "name": "Python",
//     "Price": 15000,
//     "Instructor": "Alice"
//   },
//   {
//     "name": "JavaScript",
//     "Price": 18000,
//     "Instructor": "Bob"
//   },
//   {
//     "name": "C++",
//     "Price": 22000,
//     "Instructor": "Charlie"
//   },
//   {
//     "name": "Ruby",
//     "Price": 17000,
//     "Instructor": "David"
//   },
//   {
//     "name": "C#",
//     "Price": 19000,
//     "Instructor": "Eva"
//   },
//   {
//     "name": "Swift",
//     "Price": 21000,
//     "Instructor": "Frank"
//   },
//   {
//     "name": "Kotlin",
//     "Price": 16000,
//     "Instructor": "Grace"
//   },
//   {
//     "name": "PHP",
//     "Price": 23000,
//     "Instructor": "Hank"
//   },
//   {
//     "name": "TypeScript",
//     "Price": 20000,
//     "Instructor": "Ivy"
//   },
//   {
//     "name": "Go",
//     "Price": 18000,
//     "Instructor": "Jack"
//   }
// ])


//READ
let a = db.Courses.find({ price: 2000 })
// console.log(a)
// console.log(a.toArray())
// console.log(a.count())

let b = db.Courses.findOne({ price: 2000 })
// console.log(b)



//UPDATE
db.Courses.updateOne({ price: 2000 }, { $set: { price: 3000 } })

db.Courses.updateMany({ price: 2000 }, { $set: { price: 4000 } })


//DELETE
//DeprecationWarning: Collection.count() is deprecated. Use countDocuments or estimatedDocumentCount.
console.log(db.Courses.count())

// db.Courses.deleteOne({price:15000})
db.Courses.deleteMany({Price:21000})
db.Courses.deleteMany({name:"C#"})

console.log(db.Courses.count())
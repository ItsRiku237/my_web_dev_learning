const mongoose = require('mongoose')

const employees_schema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
})

const Employee = mongoose.model('Employee' , employees_schema);
module.exports = Employee
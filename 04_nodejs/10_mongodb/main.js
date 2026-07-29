// mongodb package : https://www.npmjs.com/package/mongodb
// Docs of Mongoose : https://mongoosejs.com/docs/

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js"

let conn = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.use(express.json()); 

//CREATE
app.get('/' , (req , res) =>{
    const todo = new Todo({title : "I am Riku" ,desc:"Complete devOps" ,isDone: false, days:5})
    todo.save()
    res.send('I am Riku')
})

//READ
app.get('/read' , async(req , res) =>{
    let todo_info = await Todo.findOne()
    console.log(todo_info)
    res.json({title:  todo_info.title ,desc: todo_info.desc})
})

//UPDATE
// http://localhost:3000/update_day/6a3fb4a8d899d71fbf8f5137?newDay=10 (In postman)
// http://localhost:3000/update_day/6a3fb4cb72407e4fc0f7db06?status=true
app.put('/update_day/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.query; // If your schema expects a number, pass a number in Postman

        // 💡 FIXED: Changed 'day' to 'days' to match your schema initialization
        const updatedTodo = await Todo.findOneAndUpdate(
            { _id: id }, 
            // { $set: { days: newDay } }, 
            { $set: { isDone : status } }, 
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// DELETE
//http://localhost:3000/delete_todo/6a3fc3153bcc23dbef6ee03f
app.delete('/delete_todo/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Finds the document by ID and removes it from the database
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        // Returns a success message along with the deleted document data
        res.json({ message: "Todo deleted successfully", deletedTodo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(port)

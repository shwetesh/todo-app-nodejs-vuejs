import mongoose  from "mongoose";

const ToDoSchema = new mongoose.Schema({
    name:{
        type: String
    },
    isCompleted:{
        type: Boolean
    }
},{timestamps: true})

export default mongoose.model('todo', ToDoSchema );
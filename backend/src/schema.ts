import  mongoose from 'mongoose'
require("dotenv").config()

mongoose.connect(process.env.DATABASE_URL as string)

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      startDate: {
        type: Date,
        required: true
      },
      endDate: {
        type: Date,
        required: true
      }
})

const Todo = mongoose.model("Todo", TodoSchema)

export default Todo
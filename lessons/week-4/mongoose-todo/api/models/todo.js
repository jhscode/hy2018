// where model lives
// models folder should be in api folder - convention?

// 1. require mongoose for new model
const mongoose = require('mongoose')

// 2. create a scheme for our todo model (todoSchema)
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: false,
    default: false
  }
})

// 3. connect our schema to our model

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
// require mongoose ...
// so we can work with models
const mongoose = require('mongoose')

// Schema construction
const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: Date,
  house: String,
  friends: Array
})

// model name, plus s, will be the name of the collection
// second arguement is the schema just created

module.exports = mongoose.model('Student', studentSchema)
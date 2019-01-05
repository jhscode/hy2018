// Require mongoose
const mongoose = require('mongoose')
// store reference to mongoose.Schema in variable
const Schema = mongoose.Schema


// define the schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema)
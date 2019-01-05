const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  specialty: String
})

module.exports = mongoose.model('Teacher', teacherSchema)
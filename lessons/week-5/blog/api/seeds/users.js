// require User model to create new users
const User = require('../models/User')

// Create an array to store our fake users
const users = []


// create fake user
const mark = new User({
  name: 'Mark'
})

// add to our fake user list
users.push(mark)

// and again
const talia = new User({
  name: 'Talia'
})

users.push(talia)

// Make out fake users available outside of the file
module.exports = users
const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', async(req, res, next) => {
  // Get the email and password from the request body
  const { email, password } = req.body
  
  try {
    // Create a new user using the User model
    const user = new User({ email, password })
    // Save that user into the database
    const doc = await user.save()

    // If save successful, save to db
    res.status(200).send({
      data: [doc]
    })
  } catch(e){
    // If there's an error, send back the error
  }
})

module.exports = router
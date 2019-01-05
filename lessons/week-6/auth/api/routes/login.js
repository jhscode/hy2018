const express = require('express')
const router = express.Router()
const User = require('../models/User.js')

router.post('/', async (req, res, next) => {
  // 1. Get the email and password from the req.body
  const { email, password } = req.body

  // 2. Look in our database for an email that matches the req.email
  try {
    // (usually doc)
    const user = await User.findOne({ email })
    // 3. If the posted password matches the document's password... 
    if(user.password === password) {
      // 4. ...send back full user document
      res.status(200).send({
        data: [user]
      })
    } else {
      throw new Error('unauthorized')
    }
  } catch(e) {
    // 5. ... otherwise send back an unauthorizaed error
    next(e)
  }
})

module.exports = router
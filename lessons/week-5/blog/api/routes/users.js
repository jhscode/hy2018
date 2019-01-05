const express = require('express')
const Router = express.Router
const router = Router() // new instance of a router
const User = require('../models/User')

// GET /users
router.get('/', async (req, res, next) => {
  
  try {
    // 1. Find all the users in the db
    const docs = await User.find()

    // 2. If successful, send 200 OK with the users
    res.status(200).send({
      data: docs
    })

  } catch(e) {
    // 3. If unsuccessful, send error into error handler
    next(e)
  }
  
})

// GET /users/:user_id
// in express, if ':', will be stored in req ??? 
router.get('/:user_id', async (req, res, next) => {
  // 1. get the user id out of the params
  const userId = req.params.user_id
  // 2. look us user by that id
  try {
    const doc = await User.findById(userId)
    // 3. if find the speficic user, send back 200 + the user doc
    res.status(200).send({
      data: [doc]
    })

  } catch(e) {
    // 4. If don't find, handle error
    next(e)
  }

})

// export router so it's available to the server
module.exports = router
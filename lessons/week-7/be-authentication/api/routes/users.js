const express = require('express')
const router = express.Router()
// const tokenService = require('../utils/tokenService')
// const User = require('../models/User')
const auth = require('../middleware/auth')
const user = require('../middleware/user')

// adding auth & user middlewares as second/third arguements
router.get('/me', auth, user, async(req, res, next) => {
  // send the user
  res.status(200).send({ data: [req.user] })
})

exports.router = router
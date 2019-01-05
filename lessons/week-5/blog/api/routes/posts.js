const express = require('express')
const Router = express.Router
const router = new Router()
const { Post } = require('../models/Post')

// GET /posts
router.get('/', async (req, res, next) => {
    
    try {
      // 1. Find all the users in the db
      const docs = await Post.find().populate('user')
      // 2. If successful, send 200 OK with the users
      res.status(200).send({
        data: docs
      })
    } catch(e) {
       // 3. If unsuccessful, send error into error handler
      next(e)
    }
})


// GET /posts/:post_id
router.get('/:post_id', async (req, res, next) => {
  // 1. get the post id out of the params
  const { post_id } = req.params
  // console.log(post_id)

  try {
    // 2. look us post by that id
    const doc = await Post.findById(post_id).populate('user').populate('comments.user')
    // 4. If successful send back success response
    res.status(200).send({
      data: [doc]
    })
     console.log(doc)
  } catch(e) {
    // 3. If look up fails, handle error
    next(e)
  }
})

// export router so it's available to the server
module.exports = router
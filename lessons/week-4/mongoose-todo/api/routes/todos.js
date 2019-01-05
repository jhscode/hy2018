const todos = ['cook dinner', 'walk the dog']

const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

// GET /todos
router.route('/')
  .get( async (req, res, next) => {
    // 1. Respond with all todos in our db
    try{
      const docs = await Todo.find({})   // Get ALL todo documents

      // 2. if successful, send todos to user
      res.status(200).send({ data: docs })
    } catch(e) {
      // 3. If unsuccessful, send error through middleware
      next(e)
    }
  })

router.route('/')
  .post(async (req, res, next) => {
    // 1. Grab the new todo from the request body
    // const todo = req.body.todo
    const description = req.body.todo

      // 2. Push it into our todo array
      // todos.push(todo)

    // 2. Instantiate Todo model
    const todo = new Todo({ description })

      // 3. Respond with the created todo
    
    try {
      // 3. New - Save it!
      const doc = await todo.save()

      // 4. Respond with created todo
      res.status(201).send({
        data: [doc]
      })
    } catch(e) {
      // 5. if error, send to error handler
      next(e)   // ?????
    }
    
    // res.status(201).send({
      // data: [todo]
    // })
    

  })

  // DELETE /todos/927498723948729348798e7
router.route('/:id')
  .delete( async (req, res, next) => {
    // 1. Grab the todo OBJECT ID from the url params.
    // same as writing id = req.params.id
    const { id } = req.params

    // 2. Find the matching todo by id and remove it
    try {
      const doc = await Todo.findByIdAndRemove({ _id: id })

      // respond with the deleted todo
      res.status(202).send({
        data: [doc]
      })
    } catch(e) {
      // 4. handle error
      next(e)
    }

  })

// PATCH /todos/:id/complete
// eg /todos/snfw8934thw9gt/
router
  .route('/:id/complete')
  .patch( async (req, res, next) => {
    // 1. Grab the id from the query params
    const { id } = req.params

    // 2. find the existing todo in the db by it's ID
    // 3. FLIP the boolean value of 'completet' on that todo // Next
    try {
      const doc = await Todo.findByIdAndUpdate(id, { completed: true })

      // 4. Send back the updated todo
      res.status(200).send({
        data: [doc]
      })
    } catch(e) {
      next(e)
    }
    
  })

exports.router = router
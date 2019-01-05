// Require our Post and Comment models
const { Post, Comment } = require('../models/Post')

// Require our fake users
const users = require('./users')

// Create an array to store our fake posts
const posts = []

// create a fake comment
const comment = new Comment({
  body: 'This is more of a comment than a question...',
  user: users[1]
})

// create a fake post
const post = new Post({
  title: 'Typescript is awesome: a haiku',
  description: 'Enclosed find my poem on TypeScript...',
  user: users[0] // Mark
})

// add Talia's comment to Mark's post
post.comments.push(comment)

module.exports = post
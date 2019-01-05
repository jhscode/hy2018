const mongoose = require('mongoose')

const User = require('../models/User')
const { Post } = require('../models/Post')
const users = require('./users')
const post = require('./post')
const uri = 'mongodb://localhost:27017/blog'

const truncateDatabase = async () => {
  return Promise.all([User.deleteMany(), Post.deleteMany()])
}

const makeSeeds = async () => {
  // conect to db
  await mongoose.connect(uri)

  // once successful, delete old cruft
  await truncateDatabase()

  // once cruft gone, add fake users to db
  await Promise.all(users.map(user => user.save()))

  // save our one seeded post into the db
  await post.save()

  // once finished, close the connection
  mongoose.connection.close()
}

makeSeeds()
const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  email: {
    type: String,
    requried: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// not arrow function, need 'this'
userSchema.pre('save', async function(next){
  const user = this
  // bc hashing is expensive
  if (user.isModified('password') || user.isNew) {
    try {
      const hash = await bcrypt.hash(user.password, 10) // 10 rounds of salting
      user.password = hash

      next()
    } catch(e) {
      next(e)
    }
  } else {
    return next()
  }
})
module.exports = model('Users', userSchema)
const jwt = require('jsonwebtoken')
const { SECRET } = require('./constants')

// method to generate tokens
const create = user => {
  // grab the users ID
  const id = user._id

  // create our payload
  const payload = {
    user: {
      id
    }
  }

  // sign the token aka generate
  // generate token and sign it with our secret
  return jwt.sign(payload, SECRET)
}

const verify = token => jwt.verify(token, SECRET)

module.exports = {
  create,
  verify
}

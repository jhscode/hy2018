const User = require('../models/User')

module.exports = async(req, res, next) => {
  const { id } = req.token.user   // 'token', therefore must come after auth middleware

  try{
    // find the user in our db by Id
    const doc = await User.findById(id)
    // if we find the user
    if(doc) {
      req.user = doc
      next()
    } else {
      next(new Error('not found'))
    }
  } catch(e) {
    next(e)
  }
}
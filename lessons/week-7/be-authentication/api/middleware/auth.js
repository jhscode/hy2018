const tokenService = require('../utils/tokenService')

module.exports = async (req, res, next) => {
  const authHeader = req.get('authorization')

  if (!authHeader) {
    return next(new Error('unauthorized'))
  }

  const token = authHeader.split(' ')[1]
  try {
    const decoded = await tokenService.verify(token)
    req.token = decoded
    next()
  } catch (e) {
    next(new Error('unauthorized'))
  }
}
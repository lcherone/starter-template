var jwt = require('jsonwebtoken')
var config = require('../config.js')

module.exports = function(req, res, next) {
  /*
   * Check authorization header
   */
  if (req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization')) {
    try {
      req.user = jwt.verify(req.headers['authorization'], config.JWT_SECRET)
    } catch (err) {
      return res.status(401).json({
        error: {
          msg: 'Failed to authenticate token!'
        }
      })
    }
  } else {
    return res.status(401).json({
      error: {
        msg: 'Token required!'
      }
    })
  }
  next()
  return
}

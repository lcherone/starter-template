//
const jwt = require('jsonwebtoken')
const config = require('../config.js')

const { Router } = require('express')
const router = Router()

router.post('/auth', function(req, res, next) {
  /*
   * Check if the username and password is correct
   */
  if (req.body.user === 'admin' && req.body.pass === 'admin') {
    res.json({
      id: 1,
      user: 'admin',
      jwt: jwt.sign({
        id: 1,
      }, config.JWT_SECRET, { expiresIn: 60 * 60 })
    })
  }
  else {
    /*
     * If the username or password was wrong, return 401 ( Unauthorized )
     * status code and JSON error message
     */
    res.status(401).json({
      error: {
        message: 'Wrong username or password!'
      }
    })
  }
})

module.exports = router

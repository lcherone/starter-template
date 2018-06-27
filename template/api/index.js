//
const express = require('express')
const bodyParser = require('body-parser')

// Create express instance
const app = express()
const router = express.Router()

// Require API routes
const auth = require('./routes/auth')
const users = require('./routes/users')

app.use(bodyParser.json())

// Import API Routes
app.use(auth)
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}

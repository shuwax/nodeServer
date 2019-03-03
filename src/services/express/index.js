const express = require('express')
const bodyParser = require('body-parser')
const contentFilter = require('content-filter')
const expressValidator = require('express-validator')
const routes = require('../../api')
// Create express app
const app = express()

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Filters coming HTML request content for any character
app.use(contentFilter())
// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator())

app.use(routes)
// done! we export it so we can start the site in start.js
module.exports = app

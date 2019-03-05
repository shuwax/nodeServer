const router = require('express').Router()
const user = require('./user')

// User User API
router.use('/users', user)

module.exports = router

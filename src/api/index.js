const router = require('express').Router()
const user = require('./user')
const auth = require('./auth')
// User User API
router.use('/users', user)
router.use('/auth', auth)

module.exports = router

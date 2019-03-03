const router = require('express').Router()
const userController = require('./controller')

router.use('/user', userController.index)

module.exports = router

const router = require('express').Router()
const userController = require('./controller')

router.get('/', userController.index)

module.exports = router

const router = require('express').Router()
const { login } = require('./controller')
const { master } = require('../../services/passport')

router.post('/',
  master(),
  login)

module.exports = router

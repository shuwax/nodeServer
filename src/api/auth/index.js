const router = require('express').Router()
const { login } = require('./controller')
const { master, password } = require('../../services/passport')

router.post('/',
  master(),
  password(),
  login)

module.exports = router

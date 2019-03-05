const router = require('express').Router()
const { index } = require('./controller')
const { token } = require('../../services/passport')
router.get('/',
  token({ required: true }),
  index)

module.exports = router

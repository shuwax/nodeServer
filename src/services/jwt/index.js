const jwt = require('jsonwebtoken')
const jwtSecret = require('../../constants').ENV_CONSTANTS.MASTER_KEY
const Promise = require('bluebird')

const jwtSign = Promise.promisify(jwt.sign)
const jwtVerify = Promise.promisify(jwt.verify)

const sign = (id, options, method = jwtSign) =>
  method({ id }, jwtSecret, options)

const signSync = (id, options) => sign(id, options, jwt.sign)

const verify = (token) => jwtVerify(token, jwtSecret)

exports.sign = sign
exports.signSync = signSync
exports.verify = verify

const { sign } = require('../../services/jwt')
const { success } = require('../../services/response')

exports.login = async ({ user }, res, next) => {
  try {
    const token = await sign(user)
    const data = { token, user }
    success(res, data, 201)
  } catch (error) {
    next(error)
  }
}

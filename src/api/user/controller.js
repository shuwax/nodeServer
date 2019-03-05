const User = require('./model')
const { success } = require('../../services/response')

exports.index = async (req, res, next) => {
  try {
    const user = await User.find({ email: 'rafal@busyboss.lh' })
    success(res, user)
  } catch (error) {
    next(error)
  }
}

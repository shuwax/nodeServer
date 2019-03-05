const User = require('./model')

exports.index = async (req, res, next) => {
  try {
    const user = await User.find({ email: 'rafal@busyboss.lh' })
    return res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

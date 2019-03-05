const passport = require('passport')
const BearerStrategy = require('passport-http-bearer').Strategy
const { BasicStrategy } = require('passport-http')
const { MASTER_KEY, JWT_KEY } = require('../../constants').ENV_CONSTANTS
const User = require('../../api/user/model')

const password = () => (req, res, next) =>
  passport.authenticate('password', { session: false }, (err, user, info) => {
    if (err && err.param) {
      return res.status(400).json(err)
    } else if (err || !user) {
      if (err === null && !user) {
        return res.status(406).end()
      }
      return res.status(401).end()
    }
    req.logIn(user, { session: false }, (err) => {
      if (err) return res.status(401).end()
      next()
    })
  })(req, res, next)


passport.use('password', new BasicStrategy( async (email, password, done) => {
  const user = await User.findOne({ email })
  if (!user) {
    done(true)
    return null
  }
  try {
    const userAuthenticate = await user.authenticate(password, user.password)
    done(null, userAuthenticate)
    return null
  } catch (e) {
    return done
  }
}))

exports.password = password

const master = () =>
  passport.authenticate('master', { session: false })

passport.use('master', new BearerStrategy((token, done) => {
  if (token === MASTER_KEY) {
    done(null, {})
  } else {
    done(null, false)
  }
}))

exports.master = master

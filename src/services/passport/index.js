const passport = require('passport')
const BearerStrategy = require('passport-http-bearer').Strategy
const { MASTER_KEY, JWT_KEY } = require('../../constants').ENV_CONSTANTS

const master = () =>
  passport.authenticate('master', { session: false })

exports.master = master

passport.use('master', new BearerStrategy((token, done) => {
  if (token === MASTER_KEY) {
    done(null, {})
  } else {
    done(null, false)
  }
}))

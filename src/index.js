const ENV_CONSTANTS = require('./constants').ENV_CONSTANTS

const app = require('./services/express')
const mongoose = require('./services/mongoose')

mongoose.connect(ENV_CONSTANTS.DATABASE, { useNewUrlParser: true })

app.listen(ENV_CONSTANTS.PORT, () => {
  console.log(`Express is running on port:  ${ENV_CONSTANTS.PORT}`)
})

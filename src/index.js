// import environmental variables from our variables.env file
require('dotenv').config({ path: '.env' })

const app = require('./services/express')
const mongoose = require('./services/mongoose')

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })
app.listen(process.env.PORT, () => {
  console.log(`Express is running on port:  ${process.env.PORT}`)
})

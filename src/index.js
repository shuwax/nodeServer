// import environmental variables from our variables.env file
require('dotenv').config({path: '.env'});

const app = require('./services/express')

const server = app.listen(process.env.PORT, () => {
    console.log(`Express is running on port:  ${process.env.PORT}`)
})

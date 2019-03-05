// import environmental variables from our variables.env file
require('dotenv').config({ path: '.env' })

const config = {
  ENV_CONSTANTS: {
    PORT: process.env.PORT || 5000,
    DATABASE: process.env.DATABASE
  }
}

module.exports = config

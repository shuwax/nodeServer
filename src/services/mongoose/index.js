const mongoose = require('mongoose')

// Change id to string
mongoose.Types.ObjectId.prototype.view = function () {
  return { id: this.toString() }
}
// On connection error
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1)
})

// Tell Mongoose to use ES6 promises
mongoose.Promise = global.Promise

module.exports = mongoose

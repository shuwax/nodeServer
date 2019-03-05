const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    index: true,
    trim: true,
    maxlength: 50
  },
  surname: {
    type: String,
    default: null,
    maxlength: 50
  }
})

const model = mongoose.model('User', userSchema)

module.exports = model

const { Schema, model } = require('mongoose')

const UsersSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true,
  },
  userEmail: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
    trim: true,
  },
  phoneNumber: {
    type: String,
    default: null,
    trim: true,
  },
  address: {
    type: String,
    default: null,
    trim: true,
  },
})

const Users = model('Users', UsersSchema)

module.exports = Users

const { Router } = require('express')
const Users = require('../models/Users')

const users = Router()

users.get('/:email', async (req, res) => {
  const { email } = req.params
  const result = await Users.findOne({ userEmail: email })

  res.json(result)
})

users.put('/', async (req, res) => {
  const user = req.body
  const result = await Users.findOneAndUpdate(
    { userEmail: user.userEmail },
    user,
    { upsert: true },
  )

  res.json(result)
})

module.exports = users

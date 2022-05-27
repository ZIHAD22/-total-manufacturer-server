const { Router } = require('express')
const Users = require('../models/Users')

const users = Router()

users.get('/all', async (req, res) => {
  const result = await Users.find()

  res.json(result)
})
users.patch('/all/:id', async (req, res) => {
  const _id = req.params.id
  const result = await Users.findOneAndUpdate({ _id }, { role: 'admin' })

  res.send(result)
})

users.get('/all/admin/:email', async (req, res) => {
  const userEmail = req.params.email
  const user = await Users.findOne({ userEmail })
  const isAdmin = user?.role === 'admin'

  res.json({ admin: isAdmin })
})

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

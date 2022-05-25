const { Router } = require('express')
const Orders = require('../models/Orders')

const orders = Router()

orders.get('/', async (req, res) => {
  const result = await Orders.find().sort({ _id: -1 })
  res.json(result)
})
orders.get('/user', async (req, res) => {
  const userEmail = req.query.email
  const result = await Orders.find({ userEmail }).sort({ _id: -1 })
  res.json(result)
})
orders.delete('/user/:id', async (req, res) => {
  const _id = req.params.id
  //   console.log(_id)
  const result = await Orders.findByIdAndDelete({ _id })
  res.json(result)
})

orders.post('/', async (req, res) => {
  const postedOrder = req.body
  const result = new Orders(postedOrder)
  const savedResult = await result.save()

  res.json(savedResult)
})

module.exports = orders

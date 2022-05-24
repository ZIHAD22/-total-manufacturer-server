const { Router } = require('express')
const Products = require('../models/Products')

const products = Router()

products.get('/', async (req, res) => {
  const result = await Products.find()
  res.json(result)
})
products.get('/:id', async (req, res) => {
  const { id } = req.params
  const result = await Products.findOne({ _id: id })

  res.json(result)
})

products.get('/home-products', async (req, res) => {
  const result = await Products.find().sort({ _id: -1 }).limit(10)
  res.json(result)
})

module.exports = products

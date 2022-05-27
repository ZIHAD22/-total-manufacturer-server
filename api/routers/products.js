const { Router } = require('express')
const Products = require('../models/Products')

const products = Router()

products.get('/home-products', async (req, res) => {
  const result = await Products.find().sort({ _id: -1 }).limit(6)
  res.json(result)
})

products.get('/', async (req, res) => {
  const result = await Products.find()
  res.json(result)
})

products.post('/', async (req, res) => {
  const product = req.body
  const productPosted = new Products(product)
  const result = await productPosted.save()

  res.json(result)
})

products.get('/:id', async (req, res) => {
  const { id } = req.params
  const result = await Products.findOne({ _id: id })

  res.json(result)
})

module.exports = products

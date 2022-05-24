const { Schema, model } = require('mongoose')

const ProductsSchema = new Schema({
  toolName: {
    type: String,
    trim: true,
    required: true,
  },
  toolImg: {
    type: String,
    trim: true,
    required: true,
  },
  toolDescription: {
    type: String,
    trim: true,
    required: true,
  },
  minOrder: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const Products = model('products', ProductsSchema)

module.exports = Products

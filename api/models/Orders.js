const { Schema, model } = require('mongoose')

const OrdersSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  userEmail: {
    type: String,
    required: true,
    trim: true,
  },
  userAddress: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  toolId: {
    type: Schema.Types.ObjectId,
    ref: 'Products',
  },
  toolName: {
    type: String,
    required: true,
    trim: true,
  },
  toolImg: {
    type: String,
    required: true,
    trim: true,
  },
  orderQuantity: {
    type: String,
    required: true,
    trim: true,
  },
  totalPrice: {
    type: String,
    required: true,
    trim: true,
  },
  paid: {
    type: Boolean,
    default: false,
    required: true,
  },
  transactionId: {
    type: String,
    default: null,
  },
})

const Orders = model('Orders', OrdersSchema)

module.exports = Orders

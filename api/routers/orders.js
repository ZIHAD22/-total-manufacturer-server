const { Router } = require('express')
const Orders = require('../models/Orders')
const Stripe = require('stripe')

const orders = Router()
const stripe = Stripe(`${process.env.STRIPE_SECRET_KEY}`)

orders.get('/', async (req, res) => {
  const result = await Orders.find().sort({ _id: -1 })
  res.json(result)
})

orders.get('/user', async (req, res) => {
  const userEmail = req.query.email
  const result = await Orders.find({ userEmail }).sort({ _id: -1 })
  res.json(result)
})

orders.get('/user/payment/:id', async (req, res) => {
  const _id = req.params.id
  const result = await Orders.findOne({ _id })
  res.json(result)
})

orders.patch('/user/payment/:id', async (req, res) => {
  const _id = req.params.id
  const { transactionId, status } = req.body
  const result = await Orders.findOneAndUpdate(
    { _id },
    { paid: true, transactionId, status },
  )

  res.json(result)
})
orders.patch('/make-shipped/:id', async (req, res) => {
  const _id = req.params.id
  const { status } = req.body
  const result = await Orders.findOneAndUpdate({ _id }, { status })

  res.json(result)
})

orders.delete('/user/:id', async (req, res) => {
  const _id = req.params.id
  const result = await Orders.findByIdAndDelete({ _id })
  res.json(result)
})

orders.post('/create-payment-intent', async (req, res) => {
  const price = req.body.totalPrice
  const amount = price * 100

  //   console.log(price)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    payment_method_types: ['card'],
  })
  res.send({
    clientSecret: paymentIntent.client_secret,
  })
})

orders.post('/', async (req, res) => {
  const postedOrder = req.body
  const result = new Orders(postedOrder)
  const savedResult = await result.save()

  res.json(savedResult)
})

module.exports = orders

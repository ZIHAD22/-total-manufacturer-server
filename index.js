const express = require('express')
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const products = require('./api/routers/products')
const orders = require('./api/routers/orders')
const reviews = require('./api/routers/reviews')
const users = require('./api/routers/user')

// database
main().catch((err) => console.log(err))

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zo8al.mongodb.net/total-manufacturer?retryWrites=true&w=majority`,
    )
  } finally {
    console.log('db connected')
  }
}

// app
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())
app.use('/products', products)
app.use('/orders', orders)
app.use('/reviews', reviews)
app.use('/users', users)

// app router
app.get('/', (req, res) => {
  res.send('all ok')
})

// server running
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

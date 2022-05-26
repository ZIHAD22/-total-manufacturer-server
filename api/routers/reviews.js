const { Router } = require('express')
const Review = require('../models/Reviews')

const reviews = Router()

reviews.get('/', async (req, res) => {
  const result = await Review.find().sort({ _id: -1 })

  res.json(result)
})

reviews.post('/', async (req, res) => {
  const review = req.body
  const postReview = new Review(review)
  const result = await postReview.save()

  res.json(result)
})

module.exports = reviews

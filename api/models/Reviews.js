const { Schema, model } = require('mongoose')

const ReviewsSchema = new Schema({
  reviewerName: {
    type: String,
    trim: true,
    required: true,
  },
  reviewerEmail: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  reviewStar: {
    type: String,
    trim: true,
    required: true,
  },
})

const Reviews = model('Review', ReviewsSchema)

module.exports = Reviews

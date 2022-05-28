const { Schema, model } = require('mongoose')

const BlogsSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
})

const Blogs = model('blogs', BlogsSchema)

module.exports = Blogs

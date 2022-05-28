const { Router } = require('express')
const Blogs = require('../models/Blogs')

const blogs = Router()

blogs.get('/', async (req, res) => {
  const result = await Blogs.find()

  res.json(result)
})

module.exports = blogs

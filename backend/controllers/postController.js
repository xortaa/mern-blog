const Post = require('../models/postModel')
const asyncHandler = require('express-async-handler')

const createPost = asyncHandler(async (req, res) => { 
  const { title, author, bodu } = req.body.params

  if (!title || !author || !bodu) { 
    throw new Error('input all fields')
  }

  const post = await Post.create({
    title, 
    author,
    body
  })

  res.status(post)
}) 
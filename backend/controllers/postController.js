const Post = require("../models/postModel")
const asyncHandler = require("express-async-handler")

const getPosts = asyncHandler(async (req, res) => { 
  const Posts = await Post.find()

  if (Posts) { 
    res.status(200).json(Posts)
  }
})

const createPost = asyncHandler(async (req, res) => {
  const { title, author, body } = req.body

  if (!title || !author || !body) {
    res.status(400)
    throw new Error("input all fields")
  }

  const post = await Post.create({
    title,
    author,
    body,
  })

  if (post) {
    res.status(201).json(post)
  } else {
    res.status(400)
    throw new Error('Invalid data')
  }
})

module.exports = { getPosts, createPost }

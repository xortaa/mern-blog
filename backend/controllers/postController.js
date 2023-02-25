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

const deletePost = asyncHandler(async (req, res) => { 
  const post = await Post.findById(req.params.id)
  if (!post) { 
    res.status(400)
    throw new Error('post not found')
  }
  await post.remove()
  res.status(200).json({ msg: `deleted ${req.params.id}` })
})

module.exports = { getPosts, createPost, deletePost }

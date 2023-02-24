const express = require('express')
const router = express.Router()
const { createPost } = require('../controllers/postController')

router.post('/', createPost)
router.get('/', (req, res) => { 
  res.json({msg: "hello world posts"})
})

module.exports = router
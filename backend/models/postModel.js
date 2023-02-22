import mongoose from 'mongoose'
const { Schema } = mongoose

const postSchema = new Schema({
  title: { 
    type: String, 
    required: true
  }, 
  author: { 
    type: String,
    required: true,
  }, 
  body: { 
    type: String,
    required: true
  }
}, 
{
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

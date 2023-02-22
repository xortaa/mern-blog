const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => { 
  res.json({msg: "hello world"})
})

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI).then(
  app.listen(PORT, () => { 
    console.log(`SERVER IS CONNECTED TO PORT ${PORT} AND CONNECTED TO MONGODB`)
  })
)
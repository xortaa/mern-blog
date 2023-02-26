const asyncHandler = require("express-async-handler")
const Admin = require('../models/adminModel')

const createAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) { 
    res.status(400)
    throw new Error("input all fields")
  }

  const admin = await Admin.create({
    username, 
    password
  })

  res.status(201).json(admin)
})

module.exports = {createAdmin}

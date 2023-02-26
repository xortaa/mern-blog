const express = require('express')
const router = express.Router()
const {createAdmin} = require('../controllers/adminController')


router.post('/', createAdmin)

module.exports = router
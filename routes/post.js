const express = require('express')
const router = express.Router()
const {addItem} = require('../controllers/post')


router.post('/additems', addItem)

// routes.post('/uploadimage', uploadImage)


module.exports = router
const express = require('express')
const router = express.Router()
const {addItem,uploadImage} = require('../controllers/post')


router.post('/additems', addItem)
router.post('/uploadimage', uploadImage)

module.exports = router
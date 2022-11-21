const express = require('express')
const router = express.Router()
const { addItem, updateItem } = require('../controllers/post')

router.post('/additems', addItem)
router.post('/update-item', updateItem)

module.exports = router
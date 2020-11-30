const express = require('express')
const controller = require('./controller')

const router = express.Router()

router.post('/numbers/:number', controller.postNumber)
router.get('/numbers', controller.getNumbers)

module.exports = router
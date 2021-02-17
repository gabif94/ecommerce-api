const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controllers')

router.get('/api/product', controller.index)

router.get('/api/product/:productId', (req, res) => {

})

router.post('/api/product', controller.addProduct)

router.put('/api/product/:productId', (req, res) => {

})

router.delete('/api/product/:productId', (req, res) => {

})

module.exports = router
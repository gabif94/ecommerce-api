const controller = {}
const connection = require('../dbConnection/connection')
const ProductModel = require('../models/product.model')

controller.index = async (req, res) => {
    res.status(200).send({producs: []})
    
}

controller.addProduct = async (req, res) => {
    console.log('POST /api/product')
    console.log(req.body)

    let product = new ProductModel()
    product.name = req.body.name
    product.pngImage = req.body.pngImage
    product.description = req.body.description
    product.price = req.body.price
    product.category = req.body.category

    product.save((err, productStored) => {
        if (err) res.status(500).send({message: 'Error al guarda en la db'})

        res.status(200).send({product: productStored})
    })
}
    



module.exports = controller
const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    name : String,
    pngImage: String,
    description: String,
    price: Number,
    category: {type: String, enum: ['Computers', 'Smartphones', 'Accesory']}
    
})

const ProductModel = model('Product', ProductSchema)

module.exports = ProductModel
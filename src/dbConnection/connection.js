const mongoose = require('mongoose')

const password = 'zDqvUzAGOOP1l1wS'
const dbname = 'ecommerce'
const uri = `mongodb+srv://Gabi:${password}@cluster0.0mkjy.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = () => mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})


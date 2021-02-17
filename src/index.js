const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use(require('./routes/index.routes'))

app.listen(port, () => {
    console.log(`API REST ESCUCHANDO en puerto ${port}`)
})

// IzxZ18PIpRaKdCkt
// mongodb+srv://Gabi:<password>@cluster0.0mkjy.mongodb.net/<dbname>?retryWrites=true&w=majority
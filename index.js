require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send(`<h1>Hello world!</h1>
    <img src="https://http.cat/200">`)
})

app.get('*', (req, res) => {
    res.status(404).send(`<h1>404 Page</h1><img src="https://http.cat/404">`)
})

app.listen(process.env.PORT)

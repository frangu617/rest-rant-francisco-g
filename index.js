//DEPENDENCIES
const express = require('express')

//CONFIGURATION
require('dotenv').config()
const app = express()

//MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

//ROUTES
app.get('/', (req, res) => {
    res.render('home')
    // res.send(`<h1>Hello world!</h1>
    // <img src="https://http.cat/200">`)
})

app.get('*', (req, res) => {
    res.status(404).render(`error404`)
})

//LISTEN
app.listen(process.env.PORT)

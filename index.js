//modules and globals
const express = require('express')
require('dotenv').config()
const app = express()

//express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//controllers and routes
app.use('/places', require('./controllers/places'))


app.get('/', (req, res) => {
    res.render('home')
    // res.send(`<h1>Hello world!</h1>
    // <img src="https://http.cat/200">`)
})

app.get('*', (req, res) => {
    res.status(404).render(`error404`)
})

//LISTEN for connections
app.listen(process.env.PORT)

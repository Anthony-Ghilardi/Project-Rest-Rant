require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
});

/********** This 404 route must be below ALL other routes **********/
app.get('*', (req, res) => {
    res.render('error404')
});

app.listen(process.env.PORT)
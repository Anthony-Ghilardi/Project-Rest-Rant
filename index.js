// Modules and Globals
require('dotenv').config()
const path = require('path');
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
}

// Controllers and Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
});

/********** This 404 route must be below ALL other routes **********/
app.get('*', (req, res) => {
    res.render('error404')
});

app.listen(process.env.PORT)
require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
});

/********** This 404 route must be below ALL other routes **********/
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
});

app.listen(process.env.PORT)

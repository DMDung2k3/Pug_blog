const express = require('express');
const app = express();
const port = 1000;
const path = require('path');
const morgan = require('morgan')
//Add template Pug
const pug = require('pug');
app.set('views', path.join(__dirname, 'resources/views'))
app.set('view engine', 'pug')
app.use(morgan('combined'))



app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
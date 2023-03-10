const express = require('express');
const app = express();
const port = 1000;
const path = require('path');
const morgan = require('morgan')
const bodyParser = require('body-parser')
//Add template Pug
const pug = require('pug');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'resources/views'))
app.set('view engine', 'pug')
app.use(morgan('combined'))

var users = [
    { id: 1, name: 'Dung' },
    { id: 2, name: 'Thinh' },
];

app.get('/', (req, res) => {
    res.render('home', {
        name: 'AAA'
    })
})
app.get('/users', (req, res) => {
    res.render('users/index', {
        users: users
    })
})
app.get('/users/search', (req, res) => {
    var q = req.query.q;
    var matchedUsers = users.filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1)
    res.render('users/index', {
        users: matchedUsers
    })
})
app.get('/users/create', (req, res) => {
    res.render('users/create')
})
app.post('/users/create', (req, res) => {
    users.push(req.body);
    res.redirect('/users')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
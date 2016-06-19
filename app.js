var express = require('express');
var app = express();
var main = require('./routes/index.js');
var exphbs = require('express-handlebars');

app.set('views', './views')
app.set('view engine', '.hbs')
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('trust proxy', true)
app.use('/', main)

module.exports = app;
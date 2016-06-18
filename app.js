var express = require('express');
var app = express();
var main = require('./routes/index.js');

app.set('trust proxy', 'loopback')
app.use('/', main)

module.exports = app;
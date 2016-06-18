var express = require('express');
var app = express();
var main = require('./routes/index.js');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', main)

module.exports = app;
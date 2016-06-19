var express = require('express');
var router = express.Router();
var os = require('os');

router.use(express.static(__dirname + '/../public'));

router.get('/', function(req, res){
   res.render('index')
})

router.get('/api/whoami', function(req, res){
    var ip = req.ip;
    var software = req.headers['user-agent'].split(/\(|\)/)[1]; //capture what's between first set of parens
    var lang = req.headers['accept-language'].split(',')[0];
    var userInfo = JSON.stringify({
    	ipaddress: ip,
    	language: lang,
    	software: software
    })
    res.send(userInfo)
})

module.exports = router;
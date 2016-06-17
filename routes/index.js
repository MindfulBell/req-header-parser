var express = require('express');
var router = express.Router();
var os = require('os');

router.use(express.static(__dirname + '/../public'));

router.get('/', function(req, res){
    var ip = os.networkInterfaces().lo[0].address;
    var platform = os.platform;
    var lang = '';
    res.send(os.networkInterfaces())
})

router.get('/api/whoami', function(req, res){
    
})

module.exports = router;
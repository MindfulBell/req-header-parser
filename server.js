var app = require('./app.js');
var PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log('Server running on PORT ' + PORT + '. Type CTRL+C to Quit.')
})
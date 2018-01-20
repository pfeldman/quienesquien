var express = require('express');
var app = express();
var connect = require('./db');


app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log(connect());
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});
var express = require('express');
var app = express();
var connect = require('./db');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, function () {
    connect();
    console.log('Example app listening on port 3000!');
});
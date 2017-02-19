var express = require('express');
var app = express();
var port = process.argv[2]||process.env.PORT;
var results = {};


app.get('/', function (req, res) {
  res.send('<H1>Header Parser Microserver</H1>');
})

app.listen(port, function () {
  console.log('header parser app listening on port ' + port + '!');
})

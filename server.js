var express = require('express');
var app = express();
var port = process.argv[2]||process.env.PORT;
var results = {'ipaddress':null,'language':null, 'software':null};


app.get('/', function (req, res) {
  var UA = req.get('User-Agent');
  var lang = req.get('Accept-Language');
  console.log('User-Agent - ' + UA);
  console.log('Accept-Language - ' + lang);
  results.software = UA.substring(UA.indexOf('(')+1,UA.indexOf(')'));
  //check the Accept-Language string, if it has estra details (ie it contains a ,) return just the data before the comma. Otherwise use the full string
  if(lang.indexOf(',') < 0){
    results.language =lang;
  } else {
    results.language = lang.substring(0,lang.indexOf(','));
  }
  results.ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send(results);
})

app.listen(port, function () {
  console.log('header parser app listening on port ' + port + '!');
})

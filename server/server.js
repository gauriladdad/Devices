var express = require('express'),
	devices = require('./devices/devices.js');
	
var app = express();

app.get('/devices', devices.findAll);

app.get('./devices/:id', devices.findById);

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})





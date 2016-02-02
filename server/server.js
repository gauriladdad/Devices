var express = require('express'),
	devices = require('./devices/devices.js'),
	bodyParser = require('body-parser');
	
var app = express();

app.use(bodyParser.json()); 

app.get('/devices', devices.findAll);

app.get('./devices/:id', devices.findById);

app.post('/devices', devices.add);

app.delete('/devices/:id', devices.delete); 

app.put('/devices/:id', devices.update);

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})

//verify server working
//from command prompt > node server.js
//http://localhost:8080/Devices






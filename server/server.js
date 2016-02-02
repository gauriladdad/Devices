var express = require('express'),
	devices = require('./devices/devices.js');
	
var app = express();

app.configure(function () {
    app.use(express.bodyParser());
});

app.get('/devices', devices.findAll);

app.get('./devices/:id', devices.findById);

app.post('/devices', devices.add);

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})

//verify server working
//from command prompt > node server.js
//http://localhost:8080/Devices






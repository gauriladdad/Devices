var express = require('express'),
	devices = require('./devices/devices.js'),
	bodyParser = require('body-parser'),
	path = require('path');
	
var app = express();

app.use(bodyParser.json()); 

app.get('/devices', devices.findAll);

app.get('./devices/:id', devices.findById);

app.post('/devices', devices.add);

app.delete('/devices/:id', devices.delete); 

app.put('/devices/:id', devices.update);
/*
We will add one route to our server.js file for the frontend application.
This is all we need to do since Angular will be making a single page application and handle the routing.
*/
app.get('/deviceManager', function (request, result) {
	result.sendFile('index.html', {root: path.resolve(__dirname)});
});

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})

//verify server working
//from command prompt > node server.js
//http://localhost:8080/Devices






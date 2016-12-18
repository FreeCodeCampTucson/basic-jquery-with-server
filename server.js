// Declare everything that you're going to use
var express = require('express');
var bodyParser =  require('body-parser');

// Declare the instance of the server
var app = express();

// Turns the data that you send to the server into JSON
// so you can see it on the 'request' object with 'request.body'
app.use(bodyParser.json());

// Serves all of the files in the '/public' directory
app.use(express.static(__dirname + "/public"));

// Creates an endpoint called '/test' that only accepts 'GET' requests, where if you 
// went to 'localhost:3000/test', it would send you the string: 'this is my test page'
app.get('/test', function(request, response) {
  response.send('this is my test page');
});

// Creates an endpoint called '/test' that only accepts 'POST' requests. Inside this endpoint, 
// if you were to send the POST request with a body of { "title": "hello world" } and assign
// it to the variable 'theInfoYouSentMe', line 25 would change the variable would change that
// value to "changed!".
app.post('/test', function(request, response) {
  var theInfoYouSentMe = request.body;
  theInfoYouSentMe.title = "changed!";
  console.log('request body', theInfoYouSentMe);
  response.send('you just send a post request');
});

// Starts the server on port 3001
app.listen(3001, function() {
  console.log('server started');
});
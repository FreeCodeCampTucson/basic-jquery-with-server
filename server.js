var express = require('express');
var bodyParser =  require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

// app.get('/', function(request, response) {
//   response.send('this is my home page');
// });

// app.post('/', function(request, response) {
//   var theInfoYouSentMe = request.body;
//   theInfoYouSentMe.title = "changed!"
//   console.log('request body', theInfoYouSentMe);
//   response.send('you just send a post request');
// });


app.listen(3001, function() {
  console.log('server started');
});
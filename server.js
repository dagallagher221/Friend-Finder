//Add all of the requirements for server
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
//Create express app/port info
var app = express();
var PORT = process.env.PORT | 3000;

//Parse application and JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//Create routes for express
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//Create listen function

app.listen(PORT, function() {
    console.log("App Listening on PORT " + PORT)
})
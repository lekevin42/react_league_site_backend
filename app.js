//server.js
'use strict'
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
//first we import our dependencies…
const express = require('express');
const cors = require('cors');
//var mongoose = require('mongoose');
const bodyParser = require('body-parser');
//and create our instances
const app = express();
//var router = express.Router();
const router = require('express').Router();



app.use(cors())



//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:


app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
app.use(require('./routes'));
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});
//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests


const server = app.listen(process.env.PORT || 3001, function () {
    console.log('Listening on port ' + server.address().port);
});

'use strict';

const express = require('express'),
      bodyParser = require('body-parser'),
      request = require('request');

const app = express();

// Allows us to process the data
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());

 app.get('/', function(req, res) {
   res.send("Hello world! -Chatbot 2017");
 });

 app.get('/webhook/', function(req, res) {
   if (req.query['hub.verify_token'] === FACEBOOK_VERIFY_CODE) {
     res.send(req.query['hub.challenge']);
   }
   res.send("Wrong token");
 });

 app.listen(5000, function() {
   console.log("CHATBOT LISTENING ON 5000");
 });

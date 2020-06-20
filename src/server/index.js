var AYLIENTextAPI = require('aylien_textapi');

var path = require('path');

const express = require('express');

const mockAPIResponse = require('./mockAPI.js');

const cors = require("cors");

const dotenv = require('dotenv');

dotenv.config();

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors());

app.use(express.static('dist'))



console.log(__dirname)

var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
// console.log(`Your API key is ${process.env.API_KEY}`);
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



// API call to AYLIENT if success I return data to front-end
app.post('/anlize', function (req, res) {
    console.log(req.body);

    textapi.classify({
        url: req.body.data
      }, function(error, response) {
        if (error === null) {
          response['categories'].forEach(function(c) {
            res.send(c);
          });
        }
      });
})


  

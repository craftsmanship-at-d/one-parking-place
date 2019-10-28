'use strict';

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const authorization = require('./backend/authorizationService');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));

// website endpoint
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
  
// get Token or send registration Email
app.post('/authorize', async function(req, res){
    res.send(await authorization.authorize(req.body.email, req.body.pin))
});

// get Token or send registration Email
app.get('/generateToken/:hash', async function(req, res){
    // search for entry with hash
    // generate token
    // save

    res.send(req.params)
});

















// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;




'use strict';

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const {Datastore} = require('@google-cloud/datastore');

const datastore = new Datastore({project: 'one-parking-place'});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


var authorize = async function(email, pin) {
    var query = datastore.createQuery('Authorization');
    query = query.filter('email', email);
    query = query.filter('pin', pin);

    var promise = datastore.runQuery(query);

    var userInfo;

     promise.then((data) => {
        if (data[0][0]) {
            userInfo = data[0][0];
        }
       }).catch((err) => {
           throw err;
       });
       await promise;

       if (userInfo && userInfo.token) {
           return userInfo;
       }
       else {
           // datastore add credentials to DB and
           // send email with link+hash

           
           const key = datastore.key('Authorization');
           const entity = {
             key: key,
             data: {
               email: email,
               hash: "generateSth",
               pin: pin,
               token: "generateToken"
             }
           };
           
           var savePromise = datastore.save(entity);
           savePromise.then((data) => {
           console.log(data);
           }).catch((err) => {
               throw err;
           });
           await savePromise;












           return {};
       }
    }

app.use(express.static(path.join(__dirname, 'build')));


// website endpoint
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
  
// get Token or send registration Email
app.post('/authorize', async function(req, res){
    res.send(await authorize(req.body.email, req.body.pin))
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




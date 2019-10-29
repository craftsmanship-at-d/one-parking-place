'use strict';

const { Datastore } = require('@google-cloud/datastore');

const datastore = new Datastore({ project: 'one-parking-place' });

exports.queryAuthorization = function(email, pin) {
  var query = datastore.createQuery('Authorization');
  query = query.filter('email', email);
  query = query.filter('pin', pin);

  return extractDataFromPromiseAwait(datastore.runQuery(query));
};

exports.saveAuthorization = function(email, pin, hash) {
  const key = datastore.key('Authorization');
  const entity = {
    key: key,
    data: {
      email: email,
      hash: hash,
      pin: pin
    }
  };

  return datastore
    .save(entity)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      throw err;
    });
};

exports.queryEmailSettings = function() {
  var query = datastore.createQuery('EmailConfig');

  return extractDataFromPromiseAwait(datastore.runQuery(query));
};

var extractDataFromPromiseAwait = function(promise) {
  return promise
    .then(data => {
      if (data[0][0]) {
        return data[0][0];
      }
      return {};
    })
    .catch(err => {
      throw err;
    });
};

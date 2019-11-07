'use strict';

const { Datastore } = require('@google-cloud/datastore');

const datastore = new Datastore({ project: 'one-parking-place' });

const datastoreFacade = {
  createQuery: args => datastore.createQuery(args),
  runQuery: args => datastore.runQuery(args),
  key: args => datastore.key(args),
  save: args => datastore.save(args),

  queryAuthorization: function(email, pin) {
    console.log(email);
    console.log(pin);
    var query = datastoreFacade.createQuery('Authorization');

    console.log(query);

    query = query.filter('email', email);
    query = query.filter('pin', pin);

    return datastoreFacade.transformPromise(datastoreFacade.runQuery(query));
  },

  saveAuthorization: function(email, pin, hash) {
    const key = datastoreFacade.key('Authorization');
    const entity = {
      key: key,
      data: {
        email: email,
        hash: hash,
        pin: pin
      }
    };

    return datastoreFacade.save(entity);
  },

  queryEmailSettings: function() {
    var query = datastoreFacade.createQuery('EmailConfig');

    return datastoreFacade.transformPromise(datastoreFacade.runQuery(query));
  },

  transformPromise: function(promise) {
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
  }
};

module.exports = datastoreFacade;

"use strict";

const { Datastore } = require("@google-cloud/datastore");

const datastore = new Datastore({ project: "one-parking-place" });

exports.queryAuthorization = function(email, pin) {
  var query = datastore.createQuery("Authorization");
  query = query.filter("email", email);
  query = query.filter("pin", pin);

  return datastore.runQuery(query);
};

exports.saveAuthorization = function(email, pin) {
  const key = datastore.key("Authorization");
  const entity = {
    key: key,
    data: {
      email: email,
      hash: "generateSth",
      pin: pin,
      token: null,
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


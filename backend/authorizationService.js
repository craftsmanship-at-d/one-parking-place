"use strict";

const datastoreFacade = require("./datastoreFacade");

exports.authorize = async function(email, pin) {
  var promise = datastoreFacade.queryAuthorization(email, pin);

  var userInfo;

  promise
    .then(data => {
      if (data[0][0]) {
        userInfo = data[0][0];
      }
    })
    .catch(err => {
      throw err;
    });
  await promise;

  if (userInfo && userInfo.token) {
      // everything okay
    return userInfo;
  } else if (userInfo && userInfo.hash) {
    // the account registration has not been confirmed, activation email has not been checked

    //TODO - handling
  } else {
    // datastore add credentials to DB and
    // send email with link+hash

    var promise = datastoreFacade.saveAuthorization(email, pin);

    return {};
  }
};

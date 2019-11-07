'use strict';

const datastoreFacade = require('./datastoreFacade');
const emailService = require('./emailService');
const hashService = require('./hashService');

var sendEmailImpl = function(email, pin) {
  var userInfo = datastoreFacade.queryAuthorization(email, pin);

  emailService.sendEmail(email, userInfo.hash);

  return { notification: 'Registration email sent, check your inbox.' };
};

exports.sendEmail = function(email, pin) {
  return sendEmailImpl(email, pin);
};

exports.authorize = async function(email, pin) {
  var userInfo = datastoreFacade.queryAuthorization(email, pin);

  var result;

  userInfo.then(info => {
    if (info && info.token) {
      console.log('Token there');

      result = info;
    } else if (info && info.hash) {
      console.log('No Token, but hash there - resend email?');

      result = { notification: 'User already registered, resend email?' };
    } else {
      console.log(
        'user registration, generate hash, save account creation, send Auth Email with link'
      );

      var hash = hashService.generateHash();

      datastoreFacade.saveAuthorization(email, pin, hash);

      result = sendEmailImpl(email, pin);
    }
  });
  await userInfo;

  return result;
};

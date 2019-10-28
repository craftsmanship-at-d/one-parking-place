'use strict';

const datastoreFacade = require('./datastoreFacade');
const nodemailer = require('nodemailer');

exports.sendEmail = function(email, hash) {
  var emailSettings = datastoreFacade.queryEmailSettings();

  emailSettings.then(settings => {
    var transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: settings.username,
        pass: settings.password
      }
    });

    const message = {
      from: settings.fromEmail, // Sender address
      to: email, // List of recipients
      subject: '[One-Parking-Place] One last step to confirm Your registration', // Subject line
      text:
        'Click <a href="https://us-central1-one-parking-place.cloudfunctions.net/function-1"> here </a> ' // Plain text body
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  });

  // TODO
};

const nodemailer = require('nodemailer')

var config
var logger

// EXPORTS
module.exports = {
  'init': init
}

function init(_config, _logger) {
  config = _config
  logger = _logger

  logger.debug('Mail loaded')

  return sendMail
}

function sendMail(to, subject, html) {
  var transporter = nodemailer.createTransport({
    host: config.get('mail.smtp.host'),
    port: config.get('mail.smtp.port'),
    secure: config.get('mail.smtp.secure'), // false: upgrade later with STARTTLS
    auth: {
      user: config.get('mail.smtp.username'),
      pass: config.get('mail.smtp.password')
    }
  });

  var mailOptions = {
    from: config.get('mail.from'),
    to: to,
    subject: subject,
    html: html
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      logger.error(error);
    } else {
      logger.info('Email sent: ' + info.response);
    }
  })
}

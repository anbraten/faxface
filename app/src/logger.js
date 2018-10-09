const winston = require('winston')

// EXPORTS
module.exports = {
  'init': init
}

function init(config) {
  var logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
      new winston.transports.File({ filename: config.get('logger.files.error'), level: 'error' }), // - Write all logs error (and below) to `error.log`.
      new winston.transports.File({ filename: config.get('logger.files.combined'), format: winston.format.json(), handleExceptions: true }) // - Write to all logs with level `info` and below to `combined.log`
    ],
    handleExceptions: true,
    exceptionHandlers: [
      new winston.transports.File({ filename: config.get('logger.files.fatal') })
    ]
  })

  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      level: 'debug',
      format: winston.format.simple(),
      handleExceptions: true
    }))
  }

  logger.debug('NODE_ENV: ' + process.env.NODE_ENV)
  logger.debug('Logger loaded')

  return logger
}

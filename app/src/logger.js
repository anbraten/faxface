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
      new winston.transports.File({ filename: config.get('logger.files.error'), level: 'error' }),
      new winston.transports.File({
        filename: config.get('logger.files.combined'),
        format: winston.format.combine(
            winston.format.timestamp({
              format: 'DD.MM.YYYY HH:mm'
            }),
            winston.format.json()
        ),
        handleExceptions: true
      })
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

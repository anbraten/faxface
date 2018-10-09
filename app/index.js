const config = require('config')

const Command = require('./src/command')
const Database = require('./src/database')
const Fax = require('./src/fax')
const Faxserver = require('./src/faxserver')
const Logger = require('./src/logger')
const Mail = require('./src/mail')
const Web = require('./src/web')

var logger
var database
var command
var mail
var fax

function init () {
  // init logger
  logger = Logger.init(config)

  // init command
  command = Command.init(logger)

  // init mail
  mail = Mail.init(config, logger)

  // init database
  database = Database.init(config, logger)

  // init fax server
  faxserver = Faxserver.init(config, logger, database, command)

  // init fax
  fax = Fax.init(config, logger, database, command, logger)

  // init web
  Web.init(config, logger, database, fax)

  logger.debug('Finished loading')
  logger.info('Welcome to Faxface 0.1')
}

init()

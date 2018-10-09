const path = require('path')

var config
var logger
var database
var cmd

// EXPORTS
module.exports = {
  'init': init
}

function init(_config, _logger, _database, _cmd) {
  config = _config
  logger = _logger
  database = _database
  cmd = _cmd

  runModems()
  runHylaFax()

  logger.debug('Faxserver loaded')

  return this
}

function runModems() {
  var modems = database.get('extensions').value()
  for (modem in modems) {
    if (modems[modem] && modems[modem].tty) {
      runModem(modems[modem].tty)
    }
  }
}

function runModem(modem) {
  cmd.spawn(config.get('hylafax.iaxmodem'), [modem],
    (stdout) => { logger.debug(stdout, {module: 'iaxmodem', modem: modem}) },
    (stderr) => { logger.error(stderr, {module: 'iaxmodem', modem: modem}) },
    (code, signal) => {
      // TODO: restart
    }
  )

  cmd.spawn(config.get('hylafax.faxgetty'), [modem],
    (stdout) => { logger.debug(stdout, {module: 'faxgetty', modem: modem}) },
    (stderr) => { logger.error(stderr, {module: 'faxgetty', modem: modem}) },
    (code, signal) => {
        // TODO: restart
    }
  )
}

function runHylaFax() {
  cmd.spawn(config.get('hylafax.hylafax'), ['start'],
    (stdout) => { logger.debug(stdout, {module: 'hylafax'}) },
    (stderr) => { logger.error(stderr, {module: 'hylafax'}) },
    (code, signal) => {
      // TODO: restart
    }
  )
}

function log(level, module, message) {

}

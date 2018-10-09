const {exec, spawn} = require('child_process')

var logger

// EXPORTS
module.exports = {
  'init': init,
  'exec': doExec,
  'spawn': doSpawn
}

function init(_logger) {
  logger = _logger
  logger.debug('Command loaded')
  return this
}

function doExec(cmd, cb) {
  exec(cmd, function(error, stdout, stderr) {
      if (error !== null) {
        logger.error('exec error ' + error + stderr)
        if (typeof cb === 'function') {
          cb(null, error, stderr.trim())
        }
      } else {
        if (typeof cb === 'function') {
          cb(stdout.trim(), stderr.trim())
        } else {
          logger.debug(stdout.trim())
          logger.debug(stderr.trim())
        }
      }
  })
}

function doSpawn(cmd, args, stdout, stderr, exit) {
  const child = spawn(cmd, args)
  if (typeof stdout === 'function') {
    child.stdout.on('data', (data) => {
      stdout(data.toString('utf8'))
    })
  }
  if (typeof stderr === 'function') {
    child.stderr.on('data', (data) => {
      stderr(data.toString('utf8'))
    })
  }
  if (typeof exit === 'function') {
    child.on('exit', (code, signal) => {
      exit(code, signal)
    })
  }
}

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const Api = require('./api')

var app = express()
var api
var config
var logger
var database
var fax

// EXPORTS
module.exports = {
  'init': init
}

function init (_config, _logger, _database, _fax) {
  config = _config
  logger = _logger
  database = _database
  fax = _fax

  api = Api.init(_config, _logger, _database, _fax)

  app.use(express.static('web/public'))

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.use('/api', api)

  app.use((req, res, next) => {
    // every unkown path goes to index.html router
    res.sendFile(path.join(__dirname, '..', 'web', 'public', 'index.html'))
  })

  app.use((err, req, res, next) => {
    logger.error(err.stack)
    res.status(500).send('Something broke!')
  })

  app.listen(config.get('web.port'), function () {
    logger.info('Webinterface runing on port 80!')
  })

  logger.debug('Web loaded')
}
